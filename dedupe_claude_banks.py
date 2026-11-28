#!/usr/bin/env python3
"""Dedupe + renumber the four Claude question banks, append the CCAR-P blueprint-coverage
questions, and remap every question-id range cited in the Claude readmes and in
build_pro_appendix.py.  Run once from the project root:  python dedupe_claude_banks.py
(Idempotent: exits without changes if the banks are already deduplicated.)
Afterwards run build_architect_appendix.py and build_pro_appendix.py to rebuild PDFs/readme sections."""
import json, re, sys, collections
from pathlib import Path
import coverage_arch_pro as cov

ROOT = Path(__file__).resolve().parent
JS = ROOT / 'js'; DOCS = ROOT / 'docs'

def norm(s): return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]+', ' ', s.lower())).strip()
def optkey(q): return '|'.join(sorted(norm(o) for o in q['options']))

def load(stem):
    p = JS / f'questionBank_{stem}.js'
    t = p.read_text(encoding='utf-8')
    s = t.find('[', t.find('const questionBank'))
    bank, n = json.JSONDecoder().raw_decode(t[s:])
    return p, t, s, n, bank

def save(p, t, s, n, bank):
    p.write_text(t[:s] + json.dumps(bank, indent=2, ensure_ascii=False) + t[s + n:], encoding='utf-8')

# ---- decide removals ---------------------------------------------------------
FOUNDATION_ARCH_REMOVE = {167, 171, 187, 189, 192, 193, 194, 312, 323}   # paraphrase twins of 44, 50, 85, 87, 34, 94, 95, 71, 43
FOUNDATION_TWIN = {167: 44, 171: 50, 187: 85, 189: 87, 192: 34, 193: 94, 194: 95, 312: 71, 323: 43}
PLAN = {
    'claude_architect':              dict(start=0, remove=FOUNDATION_ARCH_REMOVE),
    'claude_architect_professional': dict(start=1, remove=set(range(51, 151))),
    'claude_developer':              dict(start=0, remove=set()),
    'claude_developer_professional': dict(start=1, remove=set(range(61, 151))),
}

maps = {}
state = {}
for stem, cfg in PLAN.items():
    p, t, s, n, bank = load(stem); state[stem] = (p, t, s, n, bank)
if len(state['claude_architect_professional'][4]) != 228 or len(state['claude_developer_professional'][4]) != 203 \
        or len(state['claude_architect'][4]) != 331:
    print('Banks are not in the expected pre-dedupe state; nothing changed.'); sys.exit(0)

for stem, cfg in PLAN.items():
    p, t, s, n, bank = state[stem]
    by = {q['id']: q for q in bank}
    if stem.endswith('_professional'):
        seen = {}
        for q in bank:
            if q['id'] in cfg['remove']:
                assert optkey(q) in seen, (stem, q['id'], 'removed id is not a repeat of an earlier kept question')
            else:
                seen[optkey(q)] = q['id']
        # kept professional questions must all be distinct
        assert len(seen) == len(bank) - len(cfg['remove']), (stem, 'kept set still contains repeats')
    kept = [q for q in bank if q['id'] not in cfg['remove']]
    m = {}
    for i, q in enumerate(kept):
        m[q['id']] = cfg['start'] + i
        q['id'] = cfg['start'] + i
    maps[stem] = m
    state[stem] = (p, t, s, n, kept)

# ---- append coverage questions to CCAR-P --------------------------------------
p, t, s, n, bank = state['claude_architect_professional']
seen_q = {q['question'] for q in bank}
assert not any(x[2] in seen_q for x in cov.Q)
base = len(bank); pos_cycle = [2, 0, 3, 1]; new = []
for i, (cat, diff, q, right, wrong, expl) in enumerate(cov.Q):
    assert len(wrong) == 3
    pos = pos_cycle[i % 4] if (i // 4) % 2 == 0 else pos_cycle[(i + 1) % 4]
    opts = wrong[:]; opts.insert(pos, right)
    new.append({"id": base + 1 + i, "difficulty": diff, "category": cat, "question": q,
                "options": opts, "answer": pos, "explanation": expl})
bank += new
state['claude_architect_professional'] = (p, t, s, n, bank)
COV_RANGE = (base + 1, base + len(new))

# ---- write banks, fix header counts ---------------------------------------------
for stem, (p, t, s, n, bank) in state.items():
    out = t[:s] + json.dumps(bank, indent=2, ensure_ascii=False) + t[s + n:]
    out = re.sub(r'\d+ professional-level practice MCQs', f'{len(bank)} professional-level practice MCQs', out, count=1)
    out = re.sub(r'// \d+-question bank\.', f'// {len(bank)}-question bank.', out, count=1)
    p.write_text(out, encoding='utf-8')
    print(stem, '->', len(bank), 'questions; ids', bank[0]['id'], '-', bank[-1]['id'])

# ---- id-range remapping ----------------------------------------------------------
def remap_cell(cell, m):
    def one(mm):
        a = int(mm.group(1)); b = int(mm.group(2)) if mm.group(2) else None
        ids = [m[i] for i in range(a, (b if b is not None else a) + 1) if i in m]
        if not ids: return ''
        lo, hi = min(ids), max(ids)
        return f'{lo}' if b is None else f'{lo}-{hi}'
    return re.sub(r'(\d+)(?:\s*[-–]\s*(\d+))?', one, cell)

def remap_table(text, header_marker, m):
    out = []; in_tbl = False
    for ln in text.split('\n'):
        if ln.startswith('|') and header_marker in ln: in_tbl = True; out.append(ln); continue
        if in_tbl and ln.startswith('|---'): out.append(ln); continue
        if in_tbl and ln.startswith('|'):
            cells = ln.rstrip().rstrip('|').split(' | ')
            cells[-1] = remap_cell(cells[-1].strip(), m) + ' '
            ln = ' | '.join(cells[:-1]) + ' | ' + cells[-1].strip() + ' |'
        elif in_tbl: in_tbl = False
        out.append(ln)
    return '\n'.join(out)

# foundation readme table
rp = DOCS / 'claude_architect_readme.md'; rt = rp.read_text(encoding='utf-8')
rt = remap_table(rt, 'Practice question IDs', maps['claude_architect']); rp.write_text(rt, encoding='utf-8')

A = maps['claude_architect_professional']; D = maps['claude_developer_professional']
# pro readmes: tables + prose
rp = DOCS / 'claude_architect_pro_readme.md'; rt = rp.read_text(encoding='utf-8')
rt = remap_table(rt, 'Practice question IDs', A)
rt = rt.replace('(173–212)', f'({A[173]}–{A[212]})')
rt = rt.replace('The original 150 simulator questions are retained.',
    'The original simulator scenarios are retained as questions 1–50. The earlier 150-question set repeated each of those 50 scenarios three times, so the 100 repeats were removed and ids renumbered.')
rt = rt.replace('questions 151–172', f'questions {A[151]}–{A[172]}')
rt = rt.replace('Questions 173–212 were', f'Questions {A[173]}–{A[212]} were')
rt = rt.replace('Questions 213–228 are', f'Questions {A[213]}–{A[228]} are')
rp.write_text(rt, encoding='utf-8')
rp = DOCS / 'claude_developer_pro_readme.md'; rt = rp.read_text(encoding='utf-8')
rt = remap_table(rt, 'Practice question IDs', D)
rt = rt.replace('(151–188)', f'({D[151]}–{D[188]})')
rt = rt.replace('Questions 151–188 were', f'Questions {D[151]}–{D[188]} were')
rt = rt.replace('Questions 189–203 are', f'Questions {D[189]}–{D[203]} are')
rt = rt.replace('## Revision questions',
    '## Original simulator questions\nQuestions 1–60 are the original simulator scenarios. The earlier 150-question set repeated them (60 distinct scenarios, 90 repeats), so the repeats were removed and ids renumbered.\n\n## Revision questions', 1)
rp.write_text(rt, encoding='utf-8')

# build_pro_appendix.py: row id strings + CFG ranges
bp = ROOT / 'build_pro_appendix.py'; bt = bp.read_text(encoding='utf-8')
a0 = bt.index('ARCH_ROWS = ['); d0 = bt.index('DEV_ROWS = ['); end = bt.index('ARCH_BR') if 'ARCH_BR' in bt else len(bt)
def fix_block(block, m):
    def sub(mm): return '"' + remap_cell(mm.group(1), m) + '")' + mm.group(2)
    return re.sub(r'"(\d[\d,\s\-–]*)"\)(,?)[ \t]*$', sub, block, flags=re.M)
arch_blk, dev_blk = bt[a0:d0], bt[d0:end]
bt = bt[:a0] + fix_block(arch_blk, A) + fix_block(dev_blk, D) + bt[end:]
bt = bt.replace("first_new=173, last=212, extra=(213, 228), label='CCAR-P'",
                f"first_new={A[173]}, last={A[212]}, extra=({A[213]}, {A[228]}), cov={COV_RANGE}, label='CCAR-P'")
bt = bt.replace("first_new=151, last=188, extra=(189, 203), label='CCDV-P'",
                f"first_new={D[151]}, last={D[188]}, extra=({D[189]}, {D[203]}), label='CCDV-P'")
bp.write_text(bt, encoding='utf-8')
json.dump({k: {str(a): b for a, b in v.items()} for k, v in maps.items()}, open('/tmp/claude_idmaps.json', 'w'))
print('coverage ids', COV_RANGE)
