#!/usr/bin/env python3
"""Rebuild answers PDF + mind-map PNG + README revision sections for the two Claude Professional exams
(Architect / Developer). Run from project root: python build_pro_appendix.py"""
import re, subprocess, json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.graphics.shapes import Drawing, Rect, String, Line
from reportlab.graphics import renderPDF
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parent; DOCS = ROOT/'docs'; ASSETS = ROOT/'assets'

src = (ROOT/'generate_exam_pdfs.py').read_text(encoding='utf-8')
head = src.split("reports=[]")[0].replace("OUT.mkdir(parents=True, exist_ok=True)", "OUT=Path('/tmp/_pro_out'); OUT.mkdir(parents=True, exist_ok=True)")
ns = {'__file__': str(ROOT/'generate_exam_pdfs.py')}; exec(compile(head, 'gen', 'exec'), ns)

# ------------------------------------------------------------------ content
SR = "Score-report priorities (added)"
ARCH_CARDS = [
 ("★ session · cap · timeout · crash", "orchestrator · finalise · resolve · escalate", "Every exit path (end_turn, iteration cap, max_tokens, tool failure/timeout, refusal, exception, process death) maps to a resolution or a human escalation in orchestration code, with a watchdog for sessions that die silently.", "Trap: a prompt line asking the model to escalate, or just raising the cap."),
 ("★ max_tokens · tool_use · cut-off · refund", "never · execute · retry · escalate", "A truncated tool_use block has unreliable arguments. Treat the turn as incomplete: no side effects, retry with a larger limit or escalate.", "Trap: execute whatever parsed, or present the truncated text as the answer."),
 ("★ wants · human · frustrated · policy", "request · immediately · gap · identifier", "Explicit human request: escalate at once. Frustration alone: acknowledge, offer resolution, escalate if repeated. Policy gap or no progress: escalate. Multiple matches: ask for an identifier. Sentiment and self-reported confidence are weak triggers.", "Trap: investigate first, pick results[0], or escalate on a sentiment score."),
 ("★ never · edit · ignored · audit", "deny · permissions · PreToolUse · managed", "CLAUDE.md is advisory context. Must-never and must-always rules go in settings permissions (deny) or hooks; org-wide rules in managed settings, which lower scopes cannot override. Formatting or tests after every edit: PostToolUse.", "Trap: shout the rule louder in CLAUDE.md, a Skill or a user-level file."),
 ("★ team · every-session · one-off · file", "CLAUDE.md · @import · @file · inline", "Reusable team-wide, cross-session context: project CLAUDE.md, split with @ imports and path-scoped .claude/rules. One specific file for this task: @ reference. A one-off detail: inline.", "Trap: pasting guidance each session or one 900-line CLAUDE.md."),
 ("★ inconsistent · prose · interacting · failures", "examples · tests-first · batch · evaluate", "Two or three concrete input/output examples beat prose; write tests first and feed specific failures; interacting issues go in one message and are evaluated together, independent ones sequentially.", "Trap: more adjectives, one failure at a time for coupled bugs, or eyeballing."),
 ("★ text · instead · tool · parser", "tool_choice · forced · name · any", "auto may answer in prose; any must call some tool (model picks); {type:tool,name} forces that tool; none disables tools. Forcing guarantees the call and its shape, not the correctness of values.", "Trap: 'always call the tool' in the prompt, or temperature 0."),
 ("★ thinking · forced · tool · error", "auto · none · only · validate", "With extended thinking, tool_choice is limited to auto or none. Pick structured-output-by-forcing or thinking, or use auto with a schema tool and validate.", "Trap: assuming both features combine silently."),
 ("★ lookup · before · refund · guessed-ID", "gate · session-state · verified · code", "Consequential prerequisite order is enforced in the tool executor or a hook (reject until a verified result exists); optionally force the first tool, then return to auto.", "Trap: numbering tools in the prompt or renaming them."),
 ("★ required · invented · missing · unreadable", "nullable · optional · other · unclear", "Required fields force fabrication. Make absent-able fields nullable/optional, give enums 'other' + detail and 'unclear', add normalisation rules and varied few-shot examples. Valid JSON is not correct JSON: validate semantics and retry with the error.", "Trap: 'don't make things up' on a required field."),
 ("★ forgets · history · resume · changed-files", "stateless · resend · server-side · re-analyse", "The Messages API keeps no state: resend relevant history, held canonically server-side. After --resume, name the changed files for targeted re-analysis; persist findings and inject them rather than repeating work; fork_session to branch.", "Trap: trusting model memory or client-held history."),
 ("★ callers · confused-tools · errors · handoff", "Grep · descriptions · isError · package", "Grep searches content, Glob matches paths, Read opens files; explore incrementally. Fix confused tools with fuller descriptions first. MCP errors: category, retryable, message, next action. Handoff: customer ID, root cause, actions, amounts, authorisation, next step.", "Trap: reading every file, adding a router, or returning 'failed'."),
]
ARCH_COV_CARDS = [
 ("◆ Vertex · Azure · Bedrock · region", "verify · model-IDs · features · adapter", "Deployment surface is an architecture decision. Existing cloud governance points to Bedrock, Vertex AI or Azure (Microsoft Foundry), but model IDs, regions, auth and features differ: verify first, isolate differences behind an adapter with per-platform contract tests.", "Trap: assume parity with the first-party API, or call it from a VM and ignore platform governance."),
 ("◆ chunks · wrong-clause · rank-7 · RAG", "structure · overlap · rerank · recall@k", "Chunk along document structure and keep headings/IDs as context; retrieve wide, rerank, pass the best few. Evaluate retrieval (recall@k) separately from generation (faithfulness).", "Trap: bigger chunks, lower temperature, or a larger model."),
 ("◆ A/B · 40-sessions · thumbs-up · ship", "metric · guardrails · power · segments", "Fix the primary metric and guardrails in advance, randomise exposure, run to adequate sample size and check segments before promoting. Build eval sets that are representative, labelled and held out.", "Trap: ship on an early positive trend."),
 ("◆ GDPR · erasure · FedRAMP · EU", "data-map · minimise · boundary · retention", "GDPR: map personal data across transcripts, logs and vector indexes; minimise, set retention, define a deletion path and processor terms. FedRAMP: confirm the deployment surface, region and features sit inside an authorised boundary at the required level.", "Trap: 'tell the model to forget', or treat authorisation as late paperwork."),
 ("◆ agents · tools · CLI · 120-tools", "MCP · agent-to-agent · CLI · discovery", "MCP connects agents to tools and data; agent-to-agent protocols handle discovery and delegation between independent agents; familiar CLIs suit local work. Large catalogues: small core set plus on-demand tool discovery.", "Trap: wrap everything in MCP, or load all 120 definitions every request."),
 ("◆ 300-engineers · approved · override", "managed · settings · marketplace · plugins", "Managed settings enforce what lower scopes cannot override; an organisation-controlled plugin marketplace distributes approved skills, agents, hooks and MCP servers.", "Trap: wiki guidance, per-repo settings, or quarterly audits."),
 ("◆ sponsor · discovery · trade-offs · ADR", "baseline · targets · options · records", "Turn vague asks into measurable requirements with a baseline; present trade-offs (e.g. tiered routing) and agree ranked priorities in writing; keep architecture decision records.", "Trap: promise latency, accuracy and cost all at once."),
]
DEV_CARDS = [
 ("★ while-True · hang · crash · half-processed", "bounded · try/finally · finalise · escalate", "Bound the loop (iteration cap + deadline), wrap tool execution in try/finally, and call one finalise() that always records resolved or escalated; add a watchdog for dead processes.", "Trap: prompt says 'stop after 10 steps', or swallow exceptions and continue."),
 ("★ stop_reason · max_tokens · refusal · parse", "tool_use · end_turn · incomplete · retry", "tool_use: execute and continue; end_turn: done; max_tokens: incomplete, never execute a cut-off tool_use; refusal: surface or escalate. Always answer each tool_use_id with a tool_result (is_error + structured detail on failure).", "Trap: json.loads the partial input, or search the text for 'done'."),
 ("★ wants · person · multiple-matches · policy-gap", "escalate · identifier · explicit · triggers", "Implement escalation on explicit request (immediate), policy gaps and repeated failures. Ambiguous lookup: ask for an identifier, never results[0]. Do not trigger on sentiment or self-reported confidence.", "Trap: one more lookup first, or a sentiment threshold."),
 ("★ never · read-.env · formatter · every-edit", "permissions · deny · PostToolUse · exit-2", "CLAUDE.md is advisory. Enforce with settings deny rules and hooks: PreToolUse blocks with exit code 2 and a stderr reason, PostToolUse runs formatter/tests after every edit.", "Trap: repeat the rule in CLAUDE.md or exit 0 with a warning."),
 ("★ shared · every-session · one-off · bloated", "CLAUDE.md · @import · rules-paths · @file", "Project CLAUDE.md (committed) for team conventions with @ imports; path-scoped .claude/rules for file-type specifics; @ file reference for this task only.", "Trap: user-level file, pasted text, or a 1,100-line file."),
 ("★ edge-cases · fail · prose · related-failures", "examples · tests-first · group · rerun-all", "Add input/output example pairs, drive iteration with tests, fix a shared root cause once and re-run the whole eval set for regressions.", "Trap: special-case patches per failure or switching models blindly."),
 ("★ prose · instead · of · tool_use", "tool_choice · type · tool · name", "tool_choice={\"type\":\"tool\",\"name\":...} forces a named tool; \"any\" forces some tool; \"auto\" can answer in text. Forced tool choice is not allowed with extended thinking (auto/none only).", "Trap: retry until a tool_use appears, or regex the prose."),
 ("★ lookup · before · refund · guard", "executor · guard · state · reject", "Enforce prerequisite tool order in the executor: reject issue_refund unless a verified lookup result is in session state.", "Trap: tool order in the list or a comment in the description."),
 ("★ valid-JSON · wrong · total · required-field", "nullable · validate · retry · other/unclear", "Schemas give shape, not meaning: add semantic validation (sum checks) and retry with the exact error. Nullable/optional fields stop fabrication; enums get 'other' + detail and 'unclear'.", "Trap: accept valid JSON, or add a plausibility regex."),
 ("★ forgets · history · forged-roles · resume", "stateless · server-side · changed-files · persist", "Resend history every call, authoritative on the server (roles and tool_result built server-side). On resume, name changed files; persist structured findings and inject them.", "Trap: browser-held history or trusting model memory."),
 ("★ explore · descriptions · MCP · handoff", "Grep · contrast · ${ENV_VAR} · package", "Grep then Read incrementally; fix tool confusion with purpose/format/examples/contrast in descriptions; shared MCP in committed .mcp.json with ${ENV_VAR}; typed errors; handoff carries ID, root cause, actions, amounts, authorisation, next step.", "Trap: read every file, add a classifier router, hard-code the token."),
]
ARCH_ROWS = [
 ("Orchestration safeguards: every session ends resolved or escalated","0%","CRITICAL","One orchestration layer owns every exit path (end_turn, cap, max_tokens, tool failure/timeout, refusal, exception) and a watchdog catches dead sessions. Never execute a truncated tool_use.","73-77"),
 ("Iterative refinement workflows","0%","CRITICAL","Concrete input/output examples; tests first, then specific failures; batch interacting issues, fix independent ones sequentially.","78-80"),
 ("Enforce via settings/hooks vs advise in CLAUDE.md","0%","CRITICAL","CLAUDE.md is advisory; deny rules, hooks and managed settings are deterministic; PostToolUse for formatting/tests after every edit.","81-84"),
 ("Project context: @ references vs CLAUDE.md vs inline","0%","CRITICAL","Cross-session team context → project CLAUDE.md (+ @imports, path-scoped rules); this-task file → @ reference; one-off → inline.","85-87"),
 ("Escalation decision criteria","0%","CRITICAL","Explicit request → immediate; frustration alone → acknowledge and offer help; policy gap/no progress → escalate; multiple matches → ask identifier; sentiment/confidence unreliable.","88-92"),
 ("Structured output via tool use; tool_choice and sequencing","0%","CRITICAL","auto / any / named tool / none; forced calls guarantee shape not meaning; thinking allows only auto/none; gate prerequisite tools in code.","93-97"),
 ("Extraction schemas: optional, nullable, enums","33%","CRITICAL","Required fields force fabrication; use nullable/optional, 'other' + detail, 'unclear'; normalise formats with few-shot examples.","98-100"),
 ("Codebase exploration with Grep, Glob, Read","50%","Reinforce","Grep contents, Glob paths, Read files; search first, read incrementally.","101-102"),
 ("Stateless API and conversation history","50%","Reinforce","Resend history every request; keep canonical history server-side.","103-104"),
 ("Tool descriptions and MCP integration","50%","Reinforce","Descriptions drive selection; shared MCP in .mcp.json with ${ENV_VAR}; typed errors.","105-106, 111"),
 ("Session resumption, plan mode, decomposition","67-75%","Reinforce","Name changed files after --resume; persist and inject findings; plan mode for broad/uncertain work; adaptive subtasks for open-ended work.","107-110"),
 ("Structured handoff packages","100%","Maintain","Customer ID, root cause, actions, amounts, authorisation state, next action.","112"),
]
DEV_ROWS = [
 ("Orchestration safeguards: every session ends resolved or escalated","0%","CRITICAL","Bounded loop + deadline, try/finally around tools, one finalise(); correct stop_reason handling; never execute a cut-off tool_use.","61-65"),
 ("Iterative refinement workflows","0%","CRITICAL","Example pairs; tests first; group related failures, fix once, re-run whole eval set.","66-68"),
 ("Enforce via settings/hooks vs advise in CLAUDE.md","0%","CRITICAL","Deny rules and hooks are deterministic (PreToolUse exit 2 blocks); CLAUDE.md advisory; PostToolUse formatter.","69-72"),
 ("Project context: @ references vs CLAUDE.md vs inline","0%","CRITICAL","Project CLAUDE.md + @imports for shared; rules paths for file types; @ file for this task.","73-75"),
 ("Escalation decision criteria","0%","CRITICAL","Escalate on explicit request, policy gap, repeated failure; ask identifier for multiple matches; no sentiment/confidence triggers.","76-79"),
 ("Structured output via tool use; tool_choice and sequencing","0%","CRITICAL","{type:tool,name} forces a tool; any forces some tool; no forcing with extended thinking; executor guard for prerequisites; validate semantics.","80-84"),
 ("Extraction schemas: optional, nullable, enums","33%","CRITICAL","Nullable/optional fields, 'other'+detail, 'unclear', normalisation + varied few-shot.","85-87"),
 ("Stateless API, exploration, descriptions, MCP, resume","50-75%","Reinforce","Resend history (server-side); Grep→Read; description contrast; .mcp.json with ${ENV_VAR}; re-analyse changed files; plan mode; adaptive decomposition.","88-97"),
 ("Structured handoff packages","100%","Maintain","ID, root cause, actions, amounts, authorisation state, next action.","98"),
]
ARCH_BR = [("Agentic Architecture & Orchestration","1","#4f46e5","bounded loops • stop_reason • orchestration safeguards • multi-agent coordination • state & recovery"),
 ("Tool Design & MCP","2","#0d9488","descriptions • typed errors • scopes • tool_choice • sequencing gates"),
 ("Claude Code Config","3","#d97706","CLAUDE.md vs permissions/hooks • rules paths • plan mode • headless CI"),
 ("Prompt & Structured Output","4","#be185d","tool_use schemas • nullable fields • validation-retry • few-shot normalisation"),
 ("Context & Reliability","5","#2563eb","stateless history • resume & re-analysis • escalation • handoff packages"),
 ("Blueprint domains","6","#475569","Solution design 17 • Models 13 • Integration 19 • Evaluation 16 • Governance 14 • Stakeholders 14 • Dev productivity 7"),
 (SR,"★","#b91c1c","safeguards • escalation • tool_choice • sequencing • enforce vs advise • project context • refinement • nullable schemas")]
DEV_BR = [("Claude API Mechanics","1","#4f46e5","stateless history • stop_reason • tool_choice • truncation • batching"),
 ("Software Engineering & Design","2","#0d9488","retries • idempotency • validation • secrets • typed errors"),
 ("Agents & Workflows","3","#d97706","bounded loops • finalise() • tool_result protocol • escalation • gates"),
 ("Claude Code Workflows","4","#be185d","CLAUDE.md vs deny/hooks • @ imports • rules paths • plan mode • tests-first"),
 ("Prompt, Context & Output","5","#2563eb","nullable schemas • semantic validation • few-shot • context pruning"),
 ("Security, Safety & Eval","6","#475569","injection defence • server-side authz • least privilege • regression evals"),
 (SR,"★","#b91c1c","safeguards • escalation • tool_choice • sequencing • enforce vs advise • project context • refinement • nullable schemas")]

CFG = {
 'claude_architect_professional': dict(title='Claude Architect Professional', centre=['CLAUDE','ARCHITECT','PROFESSIONAL'], cards=ARCH_CARDS+ARCH_COV_CARDS, rows=ARCH_ROWS, br=ARCH_BR,
      readme='claude_architect_pro_readme.md', first_new=73, last=112, extra=(113, 128), cov=(129, 153), label='CCAR-P', area='Architect'),
 'claude_developer_professional': dict(title='Claude Developer Professional', centre=['CLAUDE','DEVELOPER','PROFESSIONAL'], cards=DEV_CARDS, rows=DEV_ROWS, br=DEV_BR,
      readme='claude_developer_pro_readme.md', first_new=61, last=98, extra=(99, 113), label='CCDV-P', area='Developer'),
}
S = ns['styles']

def wrap(text, n):
    out, cur = [], ''
    for w in text.split(' '):
        if len(cur)+len(w)+1 > n and cur: out.append(cur); cur = w
        else: cur = (cur+' '+w).strip()
    if cur: out.append(cur)
    return out

def mindmap(branches, centre, width=520, height=700):
    d = Drawing(width, height)
    d.add(Rect(0, 0, width, height, fillColor=colors.HexColor('#f8fafc'), strokeColor=colors.HexColor('#cbd5e1'), rx=8, ry=8))
    d.add(Rect(10, height/2-34, 92, 68, fillColor=colors.HexColor('#1e1b4b'), strokeColor=None, rx=10, ry=10))
    for i, t in enumerate(centre): d.add(String(56, height/2+14-i*15, t, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9 if len(t)>9 else 9.5, fillColor=colors.white))
    n = len(branches); step = (height-24)/n
    for i, (name, num, col, leaves) in enumerate(branches):
        cy = height-12-step*(i+0.5); c = colors.HexColor(col)
        d.add(Line(102, height/2, 128, cy, strokeColor=c, strokeWidth=1.6))
        d.add(Rect(128, cy-17, 118, 34, fillColor=c, strokeColor=None, rx=7, ry=7))
        lines = wrap(name, 20)[:2]
        for j, ln in enumerate(lines): d.add(String(187, cy+(3 if len(lines)==2 else -3)-j*11, ln, textAnchor='middle', fontName='Helvetica-Bold', fontSize=8.2, fillColor=colors.white))
        d.add(Line(246, cy, 262, cy, strokeColor=c, strokeWidth=1.6))
        d.add(Rect(262, cy-step/2+5, width-272, step-10, fillColor=colors.white, strokeColor=c, strokeWidth=1, rx=6, ry=6))
        for j, ln in enumerate(wrap(leaves, 52)[:4]): d.add(String(270, cy+step/2-17-j*10.5, ln, fontName='Helvetica', fontSize=7.6, fillColor=colors.HexColor('#0f172a')))
    return d

def parse_old_cards(readme_text):
    m = re.search(r'## Four-keyword recall cards\n\n(.*?)(?=\n## How to use this map)', readme_text, re.S)
    rows = []
    for ln in m.group(1).splitlines():
        if ln.startswith('|') and not ln.startswith('|---') and 'Question trigger' not in ln:
            cells = [c.strip() for c in ln.strip().strip('|').split(' | ')]
            if len(cells) == 4 and not cells[0].startswith(('★','◆')): rows.append(tuple(cells))
    return rows

for stem, cfg in CFG.items():
    bank = ns['extract_bank']((ROOT/'js'/f'questionBank_{stem}.js').read_text(encoding='utf-8-sig'))
    rp = DOCS/cfg['readme']; rt = rp.read_text(encoding='utf-8')
    old = parse_old_cards(rt); allcards = list(cfg['cards']) + old
    # --- answers pdf
    story = [Paragraph(cfg['title']+' — Answer Guide', S['DocTitleX']), Paragraph(f'{len(bank)} questions • Correct answers only • Repeated filler removed', S['DocSubX'])]
    for n, q in enumerate(bank, 1):
        qt, _, _ = ns['clean_question'](q['question'], stem); idx = ns['answer_indices'](q)
        corr = '; '.join(str(q['options'][i]).strip() for i in idx)
        tag = '  <font color="#b91c1c"><b>[Revision]</b></font>' if cfg['first_new'] <= q['id'] <= cfg['last'] else ''
        blk = [Paragraph(f'<b>Q{n}.</b>{tag} {escape(qt)}', S['QX']), Paragraph(f'<b>Correct answer:</b> {escape(corr)}', S['CorrectX'])]
        ex = ns['concise_support'](q.get('explanation'), corr)
        if ex: blk.append(Paragraph(f'<b>Explanation:</b> {escape(ex)}', S['SupportX']))
        blk.append(Spacer(1, 4)); story.append(KeepTogether(blk))
    ans = Path(f'/tmp/_{stem}_ans.pdf')
    SimpleDocTemplate(str(ans), pagesize=A4, rightMargin=16*mm, leftMargin=16*mm, topMargin=15*mm, bottomMargin=15*mm).build(story)
    # --- appendix
    st = getSampleStyleSheet()
    T = ParagraphStyle('T', parent=st['Title'], fontSize=16, leading=19, spaceAfter=4)
    Sub = ParagraphStyle('Sub', parent=st['Normal'], fontSize=8, leading=10, textColor=colors.HexColor('#555555'), spaceAfter=6)
    H = ParagraphStyle('H', parent=st['Heading3'], fontSize=10, spaceBefore=4, spaceAfter=3)
    B = ParagraphStyle('B', parent=st['BodyText'], fontSize=7.4, leading=9.2)
    s = [Paragraph(f"{cfg['title']} — Quick Recall &amp; Decision Map", T),
         Paragraph('Four-keyword trigger → answer → reason → trap. ★ cards target the objectives scored 0–75% on the Architect Foundations report; ' + ('◆ cards cover official-blueprint topics that were thin or missing. ' if cfg.get('cov') else '') + 'Remaining cards are representative study aids derived from this bank, not an official blueprint.', Sub),
         Paragraph('Consolidated Mind Map', H), mindmap(cfg['br'], cfg['centre']), PageBreak(), Paragraph('Four-keyword recall cards', H)]
    rows = [[Paragraph(f'<b>{h}</b>', B) for h in ('Question trigger (max 4)', 'Answer recall (max 4)', 'Reason', 'Common exam trap')]]
    for c in allcards: rows.append([Paragraph(escape(x), B) for x in c])
    tb = Table(rows, colWidths=[34*mm, 34*mm, 78*mm, 34*mm], repeatRows=1)
    tb.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),colors.HexColor('#e2e8f0')),('GRID',(0,0),(-1,-1),0.3,colors.HexColor('#94a3b8')),('VALIGN',(0,0),(-1,-1),'TOP'),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#f8fafc')])]))
    s += [tb, Spacer(1, 6), Paragraph('<b>Decision loop:</b> Trigger → identify the scenario constraint; Answer → choose the source-backed action; Reason → connect it to the requirement; Trap → eliminate the distractor that violates it.', B)]
    app = Path(f'/tmp/_{stem}_app.pdf')
    SimpleDocTemplate(str(app), pagesize=A4, rightMargin=13*mm, leftMargin=13*mm, topMargin=12*mm, bottomMargin=12*mm).build(s)
    w = PdfWriter()
    for p in PdfReader(str(ans)).pages: w.add_page(p)
    for p in PdfReader(str(app)).pages: w.add_page(p)
    with (DOCS/f'{stem}_answers.pdf').open('wb') as f: w.write(f)
    # --- png
    ASSETS.mkdir(exist_ok=True); mm_pdf = Path(f'/tmp/_{stem}_mm.pdf')
    c = canvas.Canvas(str(mm_pdf), pagesize=(540, 748)); renderPDF.draw(mindmap(cfg['br'], cfg['centre']), c, 10, 10)
    c.setFont('Helvetica-Bold', 11); c.drawString(14, 728, cfg['title']+' — Quick Recall Mind Map'); c.save()
    subprocess.run(['pdftoppm','-png','-r','170','-singlefile',str(mm_pdf),str(ASSETS/f'{stem}_quick_recall_mind_map')], check=True)
    # --- readme
    t = rt
    t = re.sub(r'<!-- REVISION-PRIORITIES:START -->.*?<!-- REVISION-PRIORITIES:END -->\n*', '', t, flags=re.S)
    sec = ["<!-- REVISION-PRIORITIES:START -->", "## Revision priorities", "",
      f"The objectives most worth drilling, with the practice questions ({cfg['first_new']}–{cfg['last']}) that cover each. Work from the top; revisit the rest lightly.", "",
      "| Objective | Key recall | Practice question IDs |", "|---|---|---|"]
    sec += [f"| {r[0]} | {r[3].replace('|','/')} | {r[4]} |" for r in cfg['rows']]
    sec += ["", "<!-- REVISION-PRIORITIES:END -->", ""]
    t = t.replace("## Consolidated Mind Map", "\n".join(sec) + "\n## Consolidated Mind Map", 1)
    # mind map text
    t = re.sub(r'\n  ├─ ' + re.escape(SR) + r'.*?(?=\n  └─ Decision loop)', '', t, flags=re.S)
    t = t.replace("\n  └─ Decision loop", f"\n  ├─ {SR}\n  │     " + cfg['br'][-1][3].replace(' • ',' · ') + "\n  └─ Decision loop", 1)
    tbl = ["| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |", "|---|---|---|---|"] + ["| " + " | ".join(x.replace('|','/') for x in c) + " |" for c in allcards]
    t = re.sub(r'## Four-keyword recall cards\n\n.*?(?=\n## How to use this map)', "## Four-keyword recall cards\n\n" + "\n".join(tbl) + "\n", t, flags=re.S)
    t = re.sub(r'Consolidated recall cards: \*\*\d+\*\*', f'Consolidated recall cards: **{len(allcards)}**', t)
    t = re.sub(r'Questions in source bank: \*\*\d+\*\*', f'Questions in source bank: **{len(bank)}**', t)
    t = re.sub(r'\*\*\d+ professional-level practice MCQs\*\*', f'**{len(bank)} professional-level practice MCQs**', t)
    t = re.sub(r'\d+-question practice bank', f'{len(bank)}-question practice bank', t)
    if 'Revision questions' not in t:
        t = t.replace('## Simulator', f"## Revision questions\nQuestions {cfg['first_new']}–{cfg['last']} were added as targeted revision drills (see the Revision priorities table). They use the same schema as the rest of the bank.\n\n## Simulator", 1)
    if 'Additional scenario questions' not in t:
        t = t.replace('## Simulator', f"## Additional scenario questions\nQuestions {cfg['extra'][0]}–{cfg['extra'][1]} are extra scenario questions on topics the earlier bank covered thinly: coordinator state ownership, external scratchpads, LLM-judge bias, deployment surface, circuit breakers, context management for long runs, model version pinning, MCP token passthrough and supply-chain risk, canary releases, PII-safe logging and citations. They are original practice questions, not live exam items.\n\n## Simulator", 1)
    if cfg.get('cov'):
        t = re.sub(r'## Blueprint-coverage questions\n.*?\n\n(?=## Simulator)', '', t, flags=re.S)
        t = t.replace('## Simulator', f"## Blueprint-coverage questions\nQuestions {cfg['cov'][0]}–{cfg['cov'][1]} fill gaps against the seven CCAR-P domains (deployment surface on Bedrock, Vertex AI and Azure, RAG chunking and reranking, A/B testing and retrieval-vs-generation evaluation, GDPR and FedRAMP, agent-to-agent vs MCP vs CLI, progressive tool discovery, managed settings and plugin marketplaces, discovery and decision records). The bank is still weighted towards the five foundation-style domains, so treat per-domain counts as a study aid rather than a blueprint match. Original practice questions, not live exam items.\n\n## Simulator\n", 1)
    rp.write_text(t, encoding='utf-8')
    print(stem, len(bank), 'questions;', len(allcards), 'cards;', len(PdfReader(str(DOCS/f'{stem}_answers.pdf')).pages), 'pdf pages')
