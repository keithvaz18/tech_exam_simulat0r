#!/usr/bin/env python3
"""Generate concise answer-only PDFs from the simulator's 26 JS question banks.

Run from any directory: python generate_exam_pdfs.py
Outputs are written to ./generated_answer_pdfs beside this script.
"""
from __future__ import annotations
import json, re, zipfile, hashlib
from pathlib import Path
from collections import Counter
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether, Spacer

ROOT = Path(__file__).resolve().parent
BANK_DIR = ROOT / 'js'
OUT = ROOT / 'generated_answer_pdfs'
OUT.mkdir(parents=True, exist_ok=True)

PREFIXES = [
    'A team is reviewing an incident from its staging environment. ',
    'A regulated product team is preparing a production release. ',
    'A senior engineer is reviewing a failed integration test. ',
    'An engineering lead is assessing a proposed system change. ',
]
SUFFIXES = [' Which implementation decision is most appropriate?']
GENERIC_REASONING = [
    r'This is preferred because it addresses the stated requirement with explicit controls and predictable behavior\.?',
]

def extract_bank(text: str):
    m = re.search(r"\b(?:const|let|var)\s+questionBank\s*=\s*", text)
    if not m: raise ValueError('questionBank declaration not found')
    start = text.find('[', m.end()); depth = 0; quoted = False; escaped = False
    for i in range(start, len(text)):
        c = text[i]
        if quoted:
            if escaped: escaped = False
            elif c == '\\': escaped = True
            elif c == '"': quoted = False
        else:
            if c == '"': quoted = True
            elif c == '[': depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0: return json.loads(text[start:i+1])
    raise ValueError('Unclosed questionBank array')

def clean_question(q, stem):
    s = str(q).strip(); rp = rs = 0
    if stem == 'claude_architect_professional':
        while s.startswith(PREFIXES[0]): s = s[len(PREFIXES[0]):].lstrip(); rp += 1
    elif stem == 'claude_developer_professional':
        changed = True
        while changed:
            changed = False
            for p in PREFIXES[1:]:
                if s.startswith(p): s = s[len(p):].lstrip(); rp += 1; changed = True
        for suffix in SUFFIXES:
            if s.endswith(suffix): s = s[:-len(suffix)].rstrip(); rs += 1
    s = re.sub(r'\s+', ' ', s).strip()
    s = re.sub(r'\?{2,}$', '?', s)
    return s, rp, rs

def answer_indices(q):
    opts = q.get('options')
    if not isinstance(opts, list) or not opts: raise ValueError(f"Missing options for ID {q.get('id')}")
    ans = q.get('answer'); vals = ans if isinstance(ans, list) else [ans]; out = []
    for v in vals:
        idx = int(v)
        if idx < 0 or idx >= len(opts): raise ValueError(f"Answer index out of range for ID {q.get('id')}")
        if idx not in out: out.append(idx)
    return out

def norm(s):
    return re.sub(r'[^a-z0-9]+', ' ', str(s).lower()).strip()

def concise_support(text, answer_text):
    """Remove generic filler and suppress support text that only repeats the answer."""
    s = str(text or '').strip()
    if not s: return ''
    for pattern in GENERIC_REASONING:
        s = re.sub(r'\s*' + pattern, '', s, flags=re.I).strip()
    s = re.sub(r'\s+', ' ', s).strip(' ;:-')
    # If the support starts by restating the answer, remove that duplicate lead-in.
    a = str(answer_text or '').strip()
    if a and norm(s).startswith(norm(a)):
        # Remove the literal answer prefix only when it is the opening phrase/sentence.
        if s[:len(a)].lower() == a.lower():
            s = s[len(a):].lstrip(' .;:-')
    if not s or norm(s) in {norm(answer_text), ''}: return ''
    return s

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='DocTitleX', parent=styles['Title'], fontSize=16, leading=20, alignment=TA_CENTER, spaceAfter=5))
styles.add(ParagraphStyle(name='DocSubX', parent=styles['Normal'], fontSize=8, leading=10, alignment=TA_CENTER, textColor=colors.HexColor('#555555'), spaceAfter=12))
styles.add(ParagraphStyle(name='QX', parent=styles['BodyText'], fontSize=9.2, leading=12.5, spaceAfter=5))
styles.add(ParagraphStyle(name='CorrectX', parent=styles['BodyText'], fontSize=8.8, leading=11.5, leftIndent=10, textColor=colors.HexColor('#174B32'), spaceBefore=3, spaceAfter=3))
styles.add(ParagraphStyle(name='SupportX', parent=styles['BodyText'], fontSize=8.5, leading=11.2, leftIndent=10, spaceAfter=3))

reports=[]
files=sorted(BANK_DIR.glob('questionBank_*.js'))
if len(files) != 26: raise SystemExit(f'Expected 26 banks, found {len(files)} in {BANK_DIR}')
for path in files:
    stem=path.stem.removeprefix('questionBank_')
    bank=extract_bank(path.read_text(encoding='utf-8-sig'))
    story=[Paragraph(escape(stem.replace('_',' ').replace('-',' ').title())+' — Answer Guide',styles['DocTitleX']),
           Paragraph(f'{len(bank)} questions • Correct answers only • Repeated filler removed',styles['DocSubX'])]
    ids=[]; removed_p=removed_s=missing_support=duplicate_support_suppressed=0
    support_counts=Counter(); question_counts=Counter()
    for n,q in enumerate(bank,1):
        question,rp,rs=clean_question(q.get('question',''),stem)
        removed_p += rp; removed_s += rs
        if not question: raise ValueError(f'Empty question {stem} Q{n}')
        ids.append(str(q.get('id'))); question_counts[norm(question)] += 1
        idxs=answer_indices(q); opts=q['options']
        correct_text='; '.join(str(opts[i]).strip() for i in idxs)
        block=[Paragraph(f'<b>Q{n}.</b> {escape(question)}',styles['QX']),
               Paragraph(f'<b>Correct answer:</b> {escape(correct_text)}',styles['CorrectX'])]
        explanation=concise_support(q.get('explanation'), correct_text)
        hint=concise_support(q.get('hint'), correct_text)
        # Do not print the same support twice (including hint == explanation).
        if hint and explanation and norm(hint) == norm(explanation):
            hint=''; duplicate_support_suppressed += 1
        if explanation:
            block.append(Paragraph(f'<b>Explanation:</b> {escape(explanation)}',styles['SupportX']))
            support_counts[norm(explanation)] += 1
        if hint:
            block.append(Paragraph(f'<b>Hint:</b> {escape(hint)}',styles['SupportX']))
            support_counts[norm(hint)] += 1
        if not explanation and not hint: missing_support += 1
        block.append(Spacer(1,4)); story.append(KeepTogether(block))
    dup_ids=[x for x,c in Counter(ids).items() if c>1]
    pdf=OUT/f'{stem}_answers.pdf'
    SimpleDocTemplate(str(pdf),pagesize=A4,rightMargin=16*mm,leftMargin=16*mm,topMargin=15*mm,bottomMargin=15*mm).build(story)
    reports.append({'bank':path.name,'pdf':pdf.name,'questions':len(bank),
      'incorrect_options_removed':sum(len(q.get('options',[]))-len(answer_indices(q)) for q in bank),
      'removed_repeated_opening_sentences':removed_p,'removed_repeated_ending_sentences':removed_s,
      'duplicate_ids':dup_ids,'duplicate_question_text_after_cleaning':sum(c-1 for c in question_counts.values() if c>1),
      'generic_reasoning_filler_removed':sum(1 for q in bank if 'This is preferred because it addresses the stated requirement with explicit controls and predictable behavior.' in str(q.get('explanation') or '')),
      'answer_or_duplicate_support_suppressed':sum(1 for q in bank if q.get('explanation') and not concise_support(q.get('explanation'), '; '.join(str(q['options'][i]).strip() for i in answer_indices(q)))) + duplicate_support_suppressed,
      'questions_without_distinct_source_explanation_or_hint':missing_support,'status':'ok'})
    print(f'OK {pdf.name}: {len(bank)} questions')

(OUT/'audit_report.json').write_text(json.dumps(reports,indent=2),encoding='utf-8')
# Bundle the PDFs, report and this runnable generator.
(OUT/'generate_exam_pdfs.py').write_text(Path(__file__).read_text(encoding='utf-8'),encoding='utf-8')
for name in ['26_exam_answer_pdfs_cleaned.zip','26_exam_pdfs_and_generator_cleaned.zip']:
    with zipfile.ZipFile(ROOT/name,'w',zipfile.ZIP_DEFLATED) as z:
        for p in sorted(OUT.iterdir()):
            if p.is_file(): z.write(p,p.name)
print('TOTAL_PDFS',len(files),'TOTAL_QUESTIONS',sum(r['questions'] for r in reports))
print('TOTAL_GENERIC_FILLER_REMOVED',sum(r['generic_reasoning_filler_removed'] for r in reports))
