#!/usr/bin/env python3
"""Audit and rebuild all 26 answer-only PDFs from simulator question banks."""
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

ROOT = Path('/mnt/data/fixwork')
OUT = Path('/mnt/data/tech_exam_pdfs_answer_only')
OUT.mkdir(parents=True, exist_ok=True)

def extract_bank(text):
    m = re.search(r"\b(?:const|let|var)\s+questionBank\s*=\s*", text)
    if not m: raise ValueError('questionBank declaration not found')
    start = text.find('[', m.end())
    depth = 0; quoted = False; escaped = False
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

# These are demonstrably repeated, non-question wrapper sentences that were
# prepended/appended by the question generator. Remove only exact known boilerplate.
PREFIXES = [
    'A team is reviewing an incident from its staging environment. ',
    'A regulated product team is preparing a production release. ',
    'A senior engineer is reviewing a failed integration test. ',
    'An engineering lead is assessing a proposed system change. ',
]
SUFFIXES = [' Which implementation decision is most appropriate?']

def clean_question(q, bank_stem):
    s = str(q).strip()
    removed_prefixes = 0; removed_suffixes = 0
    if bank_stem == 'claude_architect_professional':
        while s.startswith(PREFIXES[0]):
            s = s[len(PREFIXES[0]):].lstrip(); removed_prefixes += 1
    elif bank_stem == 'claude_developer_professional':
        changed = True
        while changed:
            changed = False
            for p in PREFIXES[1:]:
                if s.startswith(p):
                    s = s[len(p):].lstrip(); removed_prefixes += 1; changed = True
        for suffix in SUFFIXES:
            if s.endswith(suffix):
                s = s[:-len(suffix)].rstrip(); removed_suffixes += 1
    # Repair whitespace/punctuation left at boundaries, without changing content.
    s = re.sub(r'\s+', ' ', s).strip()
    s = re.sub(r'\?{2,}$', '?', s)
    return s, removed_prefixes, removed_suffixes

def answer_indices(q):
    opts = q.get('options')
    if not isinstance(opts, list) or not opts: raise ValueError(f"Missing options for ID {q.get('id')}")
    ans = q.get('answer')
    vals = ans if isinstance(ans, list) else [ans]
    out=[]
    for v in vals:
        try: idx = int(v)
        except Exception: raise ValueError(f"Invalid answer {ans!r} for ID {q.get('id')}")
        if idx < 0 or idx >= len(opts): raise ValueError(f"Answer index out of range for ID {q.get('id')}")
        if idx not in out: out.append(idx)
    return out

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='DocTitleX', parent=styles['Title'], fontSize=17, leading=21, alignment=TA_CENTER, spaceAfter=5))
styles.add(ParagraphStyle(name='DocSubX', parent=styles['Normal'], fontSize=8, leading=10, alignment=TA_CENTER, textColor=colors.HexColor('#555555'), spaceAfter=12))
styles.add(ParagraphStyle(name='QX', parent=styles['BodyText'], fontSize=9.2, leading=12.5, spaceAfter=5))
styles.add(ParagraphStyle(name='OptX', parent=styles['BodyText'], fontSize=8.6, leading=11, leftIndent=12, spaceAfter=2))
styles.add(ParagraphStyle(name='CorrectX', parent=styles['BodyText'], fontSize=8.8, leading=11.5, leftIndent=10, textColor=colors.HexColor('#174B32'), spaceBefore=4, spaceAfter=3))
styles.add(ParagraphStyle(name='ReasonX', parent=styles['BodyText'], fontSize=8.5, leading=11.2, leftIndent=10, spaceAfter=3))

reports=[]
files=sorted((ROOT/'js').glob('questionBank_*.js'))
for path in files:
    stem=path.stem.removeprefix('questionBank_')
    bank=extract_bank(path.read_text(encoding='utf-8-sig'))
    story=[Paragraph(escape(stem.replace('_',' ').replace('-',' ').title())+' — Answer & Reasoning Guide',styles['DocTitleX']),
           Paragraph(f'{len(bank)} questions • Correct answers only • Source explanations and hints where provided',styles['DocSubX'])]
    ids=[]; removed_p=0; removed_s=0; missing_expl=0; missing_hint=0
    seen_q=Counter(); cleaned=[]
    for n,q in enumerate(bank,1):
        question,rp,rs=clean_question(q.get('question',''),stem)
        if not question: raise ValueError(f'Empty question {stem} Q{n}')
        removed_p += rp; removed_s += rs; cleaned.append(question); seen_q[question]+=1
        ids.append(str(q.get('id')))
        idxs=answer_indices(q); opts=q['options']
        block=[Paragraph(f'<b>Q{n}.</b> {escape(question)}',styles['QX'])]
        ans_text='; '.join(f'{chr(65+i)}. {str(opts[i])}' for i in idxs)
        block.append(Paragraph(f'<b>Correct answer:</b> {escape(ans_text)}',styles['CorrectX']))
        explanation=str(q.get('explanation') or '').strip()
        hint=str(q.get('hint') or '').strip()
        reasoning=[]
        if explanation: reasoning.append(escape(explanation))
        else: missing_expl += 1
        if hint:
            reasoning.append('<b>Hint / clue:</b> '+escape(hint))
        else: missing_hint += 1
        if reasoning:
            block.append(Paragraph('<b>Reasoning / justification:</b> '+'<br/>'.join(reasoning),styles['ReasonX']))
        else:
            block.append(Paragraph('<b>Reasoning / justification:</b> No explanation or hint was supplied in the source question bank.',styles['ReasonX']))
        block.append(Spacer(1,4))
        story.append(KeepTogether(block))
    duplicate_ids=[x for x,c in Counter(ids).items() if c>1]
    duplicate_questions=sum(c-1 for c in seen_q.values() if c>1)
    pdf=OUT/f'{stem}_answers.pdf'
    doc=SimpleDocTemplate(str(pdf),pagesize=A4,rightMargin=16*mm,leftMargin=16*mm,topMargin=15*mm,bottomMargin=15*mm)
    doc.build(story)
    reports.append({'bank':path.name,'pdf':pdf.name,'questions':len(bank),'incorrect_options_removed':sum(len(q.get('options',[]))-len(answer_indices(q)) for q in bank),'removed_repeated_opening_sentences':removed_p,'removed_repeated_ending_sentences':removed_s,'duplicate_ids':duplicate_ids,'identical_question_text_after_cleaning':duplicate_questions,'questions_without_source_explanation':missing_expl,'questions_without_source_hint':missing_hint,'status':'ok'})
    print(f'OK {pdf.name}: {len(bank)} questions; removed prefixes={removed_p}, suffixes={removed_s}')

if len(files)!=26: raise SystemExit(f'Expected 26 banks, found {len(files)}')
(OUT/'audit_report.json').write_text(json.dumps(reports,indent=2),encoding='utf-8')
# Include generator script so future runs keep the same cleanup + reasoning format.
(OUT/'generate_exam_pdfs.py').write_text(Path(__file__).read_text(encoding='utf-8'),encoding='utf-8')
# Create the requested all-26-PDF answer-only bundle.
zip_path=Path('/mnt/data/26_exam_answer_pdfs_revised.zip')
with zipfile.ZipFile(zip_path,'w',zipfile.ZIP_DEFLATED) as z:
    for p in sorted(OUT.iterdir()):
        if p.is_file(): z.write(p,p.name)
# Also create a generator+PDF bundle matching the original package name.
package=Path('/mnt/data/tech_exam_pdfs_and_generator_revised.zip')
with zipfile.ZipFile(package,'w',zipfile.ZIP_DEFLATED) as z:
    for p in sorted(OUT.iterdir()):
        if p.is_file(): z.write(p,p.name)
print('TOTAL_PDFS',len(files),'TOTAL_QUESTIONS',sum(x['questions'] for x in reports))
print('TOTAL_REMOVED_PREFIXES',sum(x['removed_repeated_opening_sentences'] for x in reports),'TOTAL_REMOVED_SUFFIXES',sum(x['removed_repeated_ending_sentences'] for x in reports))
print('ZIP_BYTES',zip_path.stat().st_size)
