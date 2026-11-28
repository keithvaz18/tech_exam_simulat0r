import re, json, glob, os, math, zipfile, shutil
from pathlib import Path
from collections import Counter, defaultdict
from xml.sax.saxutils import escape
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from sklearn.metrics.pairwise import cosine_similarity
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether

ROOT=Path(__file__).resolve().parent
BANK_DIR=ROOT/'js'; DOCS=ROOT/'docs'
# Extract JS array safely (the bank data is JSON-compatible).
def extract_bank(path):
    s=path.read_text(encoding='utf-8'); m=re.search(r'\b(?:const|let|var)\s+questionBank\s*=\s*',s)
    if not m: raise ValueError(f'No questionBank in {path}')
    start=s.find('[',m.end()); depth=0; quoted=False; esc=False
    for i in range(start,len(s)):
        c=s[i]
        if quoted:
            if esc: esc=False
            elif c=='\\': esc=True
            elif c=='"': quoted=False
        else:
            if c=='"': quoted=True
            elif c=='[': depth+=1
            elif c==']':
                depth-=1
                if depth==0: return json.loads(s[start:i+1])
    raise ValueError(f'Unclosed array in {path}')

STOP=set(TfidfVectorizer(stop_words='english').get_stop_words() or [])
STOP |= {'which','what','when','where','why','how','following','primary','purpose','best','most','appropriate','correct','describe','describes','used','use','using','based','given','following','would','should','does','mean','means','term','terms','scenario','team','system','application','service','data','solution','ensure','allow','allows','required','need','needs','one','two','first','different','main','key','typically','generally','option','options','answer','question','choose','select','following','equals','execute','requested','append','again','call','model','result','results','new','old','used','using','made','make','makes','provide','provides','allows','allowing','ensure','ensures','based','rather','instead','first','second','third','fourth','every','always','never','typically','generally','example','examples','appropriate','best','primary','purpose','main','key','different','specific','particular','given','which','what','when','where','how','why'}

def clean(s): return re.sub(r'\s+',' ',str(s or '')).strip()
def answer_text(q):
    opts=q.get('options') or []; ans=q.get('answer',0); ans=ans if isinstance(ans,list) else [ans]
    vals=[]
    for x in ans:
        try: vals.append(clean(opts[int(x)]))
        except: pass
    return '; '.join(vals)
def words(s):
    return re.findall(r'[A-Za-z][A-Za-z0-9+#._/-]*',clean(s))
def keywords(text, limit=4, prefer_phrases=True):
    # Keep distinctive technical tokens and source terminology; retain order of salience.
    toks=words(text)
    out=[]; seen=set()
    # First retain meaningful capitalized/acronym/technical tokens.
    for t in toks:
        low=t.lower().strip('._/-')
        if len(low)>1 and low not in STOP and (t.isupper() or any(ch in t for ch in '#+._/-') or (t[0].isupper() and len(t)>2)):
            k=t.strip('.,:;()[]{}')
            if k.lower() not in seen: out.append(k); seen.add(k.lower())
            if len(out)>=limit: return out
    # Then common salient terms from original wording.
    for t in toks:
        low=t.lower().strip('._/-')
        if len(low)>2 and low not in STOP and low not in seen:
            out.append(t.strip('.,:;()[]{}')); seen.add(low)
            if len(out)>=limit: break
    return out

def short_reason(q):
    e=clean(q.get('explanation') or q.get('hint') or '')
    if not e: return 'Apply the stated requirement and verify the result against the source behavior.'
    e=re.sub(r'\s+',' ',e)
    # Keep first 1-2 sentences, bounded for compact revision.
    parts=re.split(r'(?<=[.!?])\s+',e)
    e=' '.join(parts[:2])
    return e[:360].rstrip()

def get_trap(q, correct):
    opts=q.get('options') or []; ans=q.get('answer',0); ans=ans if isinstance(ans,list) else [ans]
    correct_idxs=set()
    for x in ans:
        try: correct_idxs.add(int(x))
        except: pass
    wrong=[clean(o) for i,o in enumerate(opts) if i not in correct_idxs and clean(o)]
    if not wrong: return 'Avoid answers that bypass the stated requirement or its explicit constraint.'
    # Prefer a plausible, concise distractor: closest wording to the correct answer.
    try:
        vec=TfidfVectorizer(stop_words='english',ngram_range=(1,2)).fit_transform([correct]+wrong)
        sims=cosine_similarity(vec[0:1],vec[1:]).ravel()
        pick=wrong[int(sims.argmax())]
    except: pick=wrong[0]
    if len(pick)>110: pick=pick[:107].rstrip()+'…'
    return 'Trap: '+pick

def cluster_questions(qs, prefix, n):
    corpus=[clean(q.get('question'))+' '+answer_text(q)+' '+clean(q.get('explanation')) for q in qs]
    vec=TfidfVectorizer(stop_words='english',ngram_range=(1,2),max_features=5000,min_df=1).fit_transform(corpus)
    km=KMeans(n_clusters=n,random_state=17,n_init=10).fit(vec)
    out={}
    for i in range(n):
        ix=[j for j,x in enumerate(km.labels_) if x==i]
        if ix:
            subset=[qs[j] for j in ix]
            rep=max(subset,key=lambda q:(bool(clean(q.get('explanation'))),min(len(clean(q.get('explanation'))),280)))
            cue=keywords(rep.get('question'),2)
            label=(' · '.join(cue) if cue else prefix)+f' (cluster {i+1})'
            out[f'{prefix}: {label}']=subset
    return out

def make_groups(bank, stem):
    groups=defaultdict(list)
    for q in bank:
        cat=clean(q.get('category') or 'General') or 'General'
        groups[cat].append(q)
    out={}
    for cat,qs in groups.items():
        if len(qs)>70:
            n=min(4,max(2,round(math.sqrt(len(qs))/5)))
            out.update(cluster_questions(qs,cat.replace('_',' ').replace('-',' '),n))
        elif cat.lower() in ('general','ai_engineering') and len(qs)>35:
            n=min(9,max(5,round(math.sqrt(len(qs))/2)))
            out.update(cluster_questions(qs,cat.replace('_',' ').replace('-',' '),n))
        else:
            out[cat]=qs
    return out

def representative(qs):
    # Choose question with the most complete source explanation, then moderate length.
    return max(qs,key=lambda q:(bool(clean(q.get('explanation'))),min(len(clean(q.get('explanation'))),280),-abs(len(clean(q.get('question')))-115)))

def build_cards(bank, stem):
    groups=make_groups(bank,stem)
    # retain broad coverage while limiting revision-card count; source categories sorted by coverage.
    ranked=sorted(groups.items(),key=lambda kv:(len(kv[1]),kv[0]),reverse=True)
    max_cards=10 if len(bank)>300 else 8
    # Claude bank categories are the five/six published topic domains; keep all of them.
    if stem.startswith('claude_'): max_cards=12
    selected=ranked[:max_cards]
    cards=[]
    for cat,qs in selected:
        q=representative(qs); a=answer_text(q)
        cards.append({'domain':cat.replace('_',' ').replace('-',' ').title(),'trigger':keywords(q.get('question'),4),'answer':keywords(a,4),'answer_full':a,'reason':short_reason(q),'trap':get_trap(q,a),'source_question':clean(q.get('question')),'count':len(qs)})
    return cards, [k for k,v in sorted(groups.items(),key=lambda kv:(len(kv[1]),kv[0]),reverse=True)]

# Bank -> README mappings in source project.
README_MAP={
'AI':'AI_readme.md','AI_Arch':'AI_Architecture_readme.md','AWS':'aws_readme.md','Azure':'azure_readme.md','Data_Arch':'dataArchitect_readme.md','EA':'enterpriseArchitect_readme.md','HL7':'HL7_readme.md','Java':'java_Springboot_readme.md','JavaScript':'JavaScript_readme.md','SA_AI_Data_Technologies':'Solution_Architect_readme.md','SQL':'sql_readme.md','claude_architect':'claude_architect_readme.md','claude_architect_professional':'claude_architect_pro_readme.md','claude_developer':'claude_developer_readme.md','claude_developer_professional':'claude_developer_pro_readme.md','databricks':'Databricks_pySpark_readme.md','devOps':'Devops_And_Observability_readme.md','dotnet':'dotnet_readme.md','kafka':'kafka_readme.md','mongoDB':'mongodb_readme.md','nodeJS':'nodejs_readme.md','python_pySpark':'python_test_readme.md','react':'react_readme.md','snowflake':'snowflake_readme.md','typescript_nestjs':'Nestjs_readme.md','web3Blockchain':'Web3_BlockChain_readme.md'}

all_reports=[]
for path in sorted(BANK_DIR.glob('questionBank_*.js')):
    stem=path.stem.replace('questionBank_','')
    bank=extract_bank(path)
    cards,categories=build_cards(bank,stem)
    title=stem.replace('_',' ').replace('claude','Claude').replace('AI','AI').replace('devOps','DevOps').replace('dotnet','.NET').replace('nodeJS','Node.js').replace('mongoDB','MongoDB').replace('databricks','Databricks').replace('web3Blockchain','Web3 & Blockchain').replace('pySpark','PySpark')
    # Markdown revision section.
    lines=[f'# {title} — Exam Recall & Decision Guide','', '> Source-grounded revision aid built from this simulator question bank. Recall cards use representative questions and their supplied correct answers, explanations, and distractors; they are not an official exam blueprint.','', '## Consolidated mind map','', '```text', title.upper(), '  ├─ Question domains']
    for c in categories[:14]: lines.append('  │   ├─ '+c.replace('_',' ').replace('-',' '))
    if len(categories)>14: lines.append(f'  │   └─ + {len(categories)-14} additional bank categories')
    lines += ['  └─ Decision loop','      ├─ Trigger: identify the scenario constraint','      ├─ Answer: recall the source-backed technical choice','      ├─ Reason: connect choice to behavior or requirement','      └─ Trap: reject a plausible distractor and its mismatch','', '## Four-keyword recall cards','', '| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |','|---|---|---|---|']
    for c in cards:
        tr=' · '.join(c['trigger']) or 'Scenario · Requirement'
        an=' · '.join(c['answer']) or 'Correct · Implementation'
        lines.append('| '+tr.replace('|','/')+' | '+an.replace('|','/')+' | '+c['reason'].replace('|','/').replace('\n',' ')+' | '+c['trap'].replace('|','/')+' |')
    lines += ['', '## How to use this map','', '1. Read the trigger and identify the requirement or failure mode in the scenario.', '2. Recall the answer keywords before looking at the full explanation.', '3. State the decision rule in your own words; the reason column gives the source explanation.', '4. Eliminate the trap because it conflicts with the question constraint or the supplied explanation.', '', '## Source coverage', '', f'- Question bank: `{path.name}`', f'- Questions in source bank: **{len(bank)}**', f'- Consolidated recall cards: **{len(cards)}**', f'- Category labels represented in the mind-map hierarchy: **{len(categories)}**', '- Distractors are drawn from the question options; explanations are drawn from the question bank.']
    md='\n'.join(lines)+'\n'
    readme=DOCS/README_MAP[stem]
    old=readme.read_text(encoding='utf-8') if readme.exists() else f'# {title}\n'
    # Replace prior quick-recall table block if present; preserve the remainder of README.
    old=re.sub(r'(?is)^\s*## Quick recall mind map.*?(?=\n\[Open the answer PDF\]|\n# |\Z)','',old, count=1)
    old=re.sub(r'(?is)^\s*## (?:Four-keyword recall cards|Consolidated mind map).*?(?=\n# |\Z)','',old, count=1)
    # Preserve the repository's original README title + image/PDF header block.
    # Replace only the generated recall section, leaving the legacy study material intact.
    old_lines=old.splitlines()
    header=[]
    if old_lines and old_lines[0].startswith('# '):
        header.append(old_lines[0])
    for ln in old_lines[1:]:
        if ln.strip() == '---' or ln.startswith('## Consolidated Mind Map'):
            break
        if (ln.startswith('![') or ln.startswith('[Open the answer PDF]') or ln.strip().startswith('<img ')):
            header.append(ln)
    # Remove a previously generated recall guide block, but retain all later original content.
    match=re.search(r'(?is)^## Consolidated mind map.*?^- Distractors are drawn from the question options; explanations are drawn from the question bank\.\s*',old,re.M)
    if match:
        remainder=old[match.end():]
    else:
        remainder=old
    md_body='\n'.join(lines[2:])
    readme.write_text('\n'.join(header)+'\n\n'+md_body+'\n\n---\n\n'+remainder.lstrip(),encoding='utf-8')
    # PDF appendix using readable compact cards, appended to existing answer PDF.
    pdfname=stem+'_answers.pdf'; pdf=DOCS/pdfname
    # Source filenames use these exact mappings.
    if not pdf.exists():
        print('WARN missing PDF',pdf); continue
    from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate, NextPageTemplate
    styles=getSampleStyleSheet()
    styles.add(ParagraphStyle(name='RecallTitle',parent=styles['Title'],fontSize=16,leading=19,spaceAfter=5))
    styles.add(ParagraphStyle(name='RecallSub',parent=styles['Normal'],fontSize=8,leading=10,textColor=colors.HexColor('#555555'),spaceAfter=8))
    styles.add(ParagraphStyle(name='RecallBody',parent=styles['BodyText'],fontSize=7.2,leading=9,spaceAfter=2))
    styles.add(ParagraphStyle(name='RecallHead',parent=styles['Heading3'],fontSize=9,leading=11,spaceBefore=4,spaceAfter=3))
    appendix=ROOT/('_appendix_'+stem+'.pdf')
    story=[PageBreak(),Paragraph(escape(title)+' — Quick Recall & Decision Map',styles['RecallTitle']),Paragraph('Four-keyword trigger → answer → reason → trap. Derived from this question bank; representative recall cards, not an official exam blueprint.',styles['RecallSub']),Paragraph('<b>Mind-map hierarchy</b>',styles['RecallHead']),Paragraph(escape('  •  '.join(categories[:14])+(f'  •  + {len(categories)-14} more' if len(categories)>14 else '')),styles['RecallBody']),Spacer(1,4)]
    for i,c in enumerate(cards,1):
        block=[Paragraph(f'<b>{i}. {escape(c["domain"])}</b>',styles['RecallHead']),Paragraph('<b>Trigger:</b> '+escape(' · '.join(c['trigger']))+'<br/><b>Answer:</b> '+escape(' · '.join(c['answer'])),styles['RecallBody']),Paragraph('<b>Reason:</b> '+escape(c['reason']),styles['RecallBody']),Paragraph('<b>Trap:</b> '+escape(c['trap']),styles['RecallBody']),Spacer(1,4)]
        story.append(KeepTogether(block))
    SimpleDocTemplate(str(appendix),pagesize=A4,rightMargin=13*mm,leftMargin=13*mm,topMargin=12*mm,bottomMargin=12*mm).build(story)
    # Merge original answer PDF with appendix.
    try:
        from pypdf import PdfReader, PdfWriter
    except ImportError:
        from PyPDF2 import PdfReader, PdfWriter
    # Idempotent rebuild: remove any prior appended recall/memory appendix before adding one.
    existing=PdfReader(str(pdf))
    base_pages=[]
    appendix_markers=('Quick Memory Map — Unique Correct Answers','Quick Recall & Decision Map','Revision Appendix','Consolidated Mind Map')
    for page in existing.pages:
        page_text=page.extract_text() or ''
        if any(marker.lower() in page_text.lower() for marker in appendix_markers):
            break
        base_pages.append(page)
    writer=PdfWriter()
    for page in base_pages: writer.add_page(page)
    for page in PdfReader(str(appendix)).pages: writer.add_page(page)
    tmp=pdf.with_suffix('.tmp.pdf')
    with tmp.open('wb') as f: writer.write(f)
    tmp.replace(pdf); appendix.unlink()
    all_reports.append({'bank':path.name,'questions':len(bank),'categories':len(categories),'cards':len(cards),'readme':readme.name,'pdf':pdfname})
    print(f'OK {stem}: {len(bank)} questions, {len(cards)} cards, {len(categories)} domains')

# Update report and summary.
(ROOT/'recall_pack_report.json').write_text(json.dumps(all_reports,indent=2),encoding='utf-8')
(ROOT/'RECALL_PACK_README.md').write_text('# Exam Simulator — 26-bank Recall Pack\n\nAll 26 question banks have a matching revision appendix in their PDF and a matching Markdown guide. Each guide includes a consolidated bank-derived mind-map hierarchy and four-keyword recall cards with source explanation and a distractor-based trap. Cards are representative study aids, not verified exam blueprints or guaranteed question coverage.\n\n| Question bank | Questions | Recall cards | PDF | README |\n|---|---:|---:|---|---|\n'+''.join(f"| {r['bank']} | {r['questions']} | {r['cards']} | [PDF](docs/{r['pdf']}) | [README](docs/{r['readme']}) |\n" for r in all_reports),encoding='utf-8')
# zip complete project preserving original structure.
out=ROOT.parent/'tech_exam_simulator_26_exam_recall_pack.zip'
with zipfile.ZipFile(out,'w',zipfile.ZIP_DEFLATED,compresslevel=8) as z:
    for p in sorted(ROOT.rglob('*')):
        if p.is_file() and not p.name.startswith('_appendix_') and '.tmp.' not in p.name:
            z.write(p,p.relative_to(ROOT.parent))
print('ZIP',out,'bytes',out.stat().st_size,'reports',len(all_reports),'questions',sum(x['questions'] for x in all_reports))

# Re-apply hand-curated appendices (score-report revision cards) that the generic pass above overwrites.
import subprocess as _sp, sys as _sys
for _s in ('build_architect_appendix.py', 'build_pro_appendix.py'):
    _sp.run([_sys.executable, str(ROOT/_s)], check=True, cwd=str(ROOT))
