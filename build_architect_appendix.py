#!/usr/bin/env python3
"""Rebuild claude_architect_answers.pdf (answers + Quick Recall appendix with drawn mind map),
the mind-map PNG, and sync the recall section of docs/claude_architect_readme.md.
Run from the project root: python build_architect_appendix.py"""
import re, subprocess, sys
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.graphics.shapes import Drawing, Rect, String, Line
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, PageBreak
from pypdf import PdfReader, PdfWriter

ROOT = Path(__file__).resolve().parent
DOCS = ROOT/'docs'
BANK = ROOT/'js'/'questionBank_claude_architect.js'

# ---- 1. answers part (reuse the project's generator functions) -------------
src = (ROOT/'generate_exam_pdfs.py').read_text(encoding='utf-8')
head = src.split("reports=[]")[0]
ns = {'__file__': str(ROOT/'generate_exam_pdfs.py')}
head = head.replace("OUT.mkdir(parents=True, exist_ok=True)", "OUT=Path('/tmp/_arch_out'); OUT.mkdir(parents=True, exist_ok=True)")
exec(compile(head, 'gen', 'exec'), ns)
bank = ns['extract_bank'](BANK.read_text(encoding='utf-8-sig'))
S = ns['styles']; escape_ = ns['escape']
story = [Paragraph('Claude Architect — Answer Guide', S['DocTitleX']),
         Paragraph(f'{len(bank)} questions • Correct answers only • Repeated filler removed', S['DocSubX'])]
for n, q in enumerate(bank, 1):
    qt, _, _ = ns['clean_question'](q['question'], 'claude_architect')
    idx = ns['answer_indices'](q); corr = '; '.join(str(q['options'][i]).strip() for i in idx)
    blk = [Paragraph(f'<b>Q{n}.</b> {escape(qt)}', S['QX']), Paragraph(f'<b>Correct answer:</b> {escape(corr)}', S['CorrectX'])]
    ex = ns['concise_support'](q.get('explanation'), corr)
    if ex: blk.append(Paragraph(f'<b>Explanation:</b> {escape(ex)}', S['SupportX']))
    blk.append(Spacer(1, 4)); story.append(KeepTogether(blk))
ans_pdf = Path('/tmp/_arch_answers.pdf')
SimpleDocTemplate(str(ans_pdf), pagesize=A4, rightMargin=16*mm, leftMargin=16*mm, topMargin=15*mm, bottomMargin=15*mm).build(story)

# ---- 2. shared recall content ----------------------------------------------
# (domain, trigger<=4, answer<=4, reason, trap)
CARDS = [
 ("★ Orchestration safeguards", "session · ends · loop · cap", "resolve · or · escalate · always", "Every exit path (end_turn, iteration cap, max_tokens, tool failure, timeout) must end in a resolution or human escalation with a handoff package. Guarantee it in orchestration code; the cap is a safety net, not the primary stop. max_tokens = incomplete, never final.", "Trap: Return the last text when the cap fires"),
 ("★ Escalation criteria", "customer · wants · human · agent", "escalate · immediately · no · investigation", "Explicit human request: honour immediately. Frustration alone: acknowledge, offer help, escalate if reiterated. Policy gap or no progress: escalate. Several matches: ask for an identifier. Sentiment/self-confidence are unreliable triggers.", "Trap: Try tools first, escalate only if they fail"),
 ("★ tool_choice", "answers · text · pipeline · breaks", "tool_choice · forced · tool · name", "auto may reply in text; any must call some tool (model picks); {type:tool,name} forces that tool; none = no tools. Forced = no preamble. Tool use + schema fixes syntax, not semantics.", "Trap: tool_choice auto or temperature 0"),
 ("★ Tool sequencing", "get_customer · before · refund · order", "gate · hook · force · first", "Prerequisite order with consequences is enforced programmatically (gate/hook); force the first tool via tool_choice once, then back to auto. Prompt order is probabilistic.", "Trap: Prompt line asking Claude to call it first"),
 ("★ Enforce vs advise", "never · edit · migrations · ignored", "permissions · PreToolUse · hook · deny", "CLAUDE.md is advisory context. Anything that must always/never happen goes in settings permissions or hooks (PreToolUse blocks, PostToolUse formats/lints/tests). Conventions stay in CLAUDE.md.", "Trap: Make the CLAUDE.md sentence bold"),
 ("★ Project context", "conventions · every · session · team", "CLAUDE.md · @ · import · inline", "Reusable cross-session → project CLAUDE.md (@ imports keep it modular). One specific file this task → @ reference in the prompt. One-off detail → inline. File-type conventions → path-scoped .claude/rules.", "Trap: Paste it into every prompt"),
 ("★ Iterative refinement", "output · inconsistent · prose · fails", "examples · tests · batch · interview", "2-3 concrete input/output examples beat prose. Tests first, then feed specific failures. Interacting issues in one message; independent issues sequentially. Interview pattern for unclear requirements.", "Trap: 'Make it better' or higher temperature"),
 ("★ Nullable schemas", "required · field · invented · values", "nullable · optional · other · unclear", "Required fields force fabrication. Make fields nullable/optional; enums get 'other' + detail and 'unclear'; add normalisation rules and few-shot examples. Schema fixes syntax, validation checks semantics.", "Trap: 'Never lie' prompt line"),
 ("★ Resume & explore", "resume · files · changed · stale", "--resume · inject · fork_session · Grep", "Resume then tell the agent which files changed (targeted re-analysis); stale results → fresh session with injected summary; fork_session for divergent approaches. Explore: Grep content, Glob paths, Read files, incrementally, subagents for verbose discovery.", "Trap: Resume silently or re-read everything"),
 ("★ Stateless API", "API · history · browser · roles", "stateless · resend · server-side · canonical", "The Messages API keeps no state; send the relevant history each request. Keep canonical history server-side; untrusted clients must not forge roles or assistant turns. Tool loop: assistant tool_use turn then user tool_result turn.", "Trap: Trust the browser's messages array"),
 ("1 Agentic loop", "Claude · Agent · SDK · agentic", "stop_reason · tool_use · tools", "Continue while stop_reason is tool_use, stop on end_turn; append tool_result to history each turn. Text-block checks, phrase parsing and a primary iteration cap are anti-patterns.", "Trap: The assistant message contains any text content block"),
 ("1 Enforcement", "refund · skipped · 12% · identity", "hook · prerequisite · gate · programmatic", "Non-zero failure rate plus financial or compliance impact needs deterministic enforcement (hooks, gates), not a stronger prompt.", "Trap: A friendlier system-prompt reminder"),
 ("1 Multi-agent", "report · misses · topic · areas", "coordinator · decomposition · too · narrow", "Hub-and-spoke: the coordinator decomposes, delegates, aggregates. Subagents inherit nothing, so pass full findings; Task must be in allowedTools; parallel = several Task calls in one response.", "Trap: Blame the subagents' search quality"),
 ("2 Tool selection", "wrong · tool · similar · descriptions", "expand · descriptions · boundaries · examples", "Descriptions are the primary selection mechanism. Fix vague or overlapping tools first, before routers, few-shot or consolidation.", "Trap: Add a routing layer first"),
 ("2 MCP errors", "tool · fails · retry · loop", "isError · category · isRetryable · message", "Return structured errors so the agent can decide retry, reroute or escalate. A business-rule violation is non-retryable. Valid empty result is not an access failure.", "Trap: Generic 'operation failed' string"),
 ("2 MCP scope & primitives", "MCP · personal · shared · button", ".mcp.json · ~/.claude.json · Prompt · Tool", "Project .mcp.json (with ${ENV_VAR}) is shared; ~/.claude.json is personal. Primitives: Prompt = user-controlled, Tool = model-controlled, Resource = application-controlled.", "Trap: Personal server committed in .mcp.json"),
 ("3 CLAUDE.md & rules", "teammate · rules · missing · conventions", "project · CLAUDE.md · rules · paths", "User ~/.claude/CLAUDE.md is not shared. Project CLAUDE.md or .claude/rules/ with glob paths load conditionally and suit conventions spanning many directories.", "Trap: Put team rules in the user-level file"),
 ("3 Plan vs direct", "migration · files · approaches · stack", "plan · mode · explore · subagent", "Plan mode for large, ambiguous or multi-approach work; direct execution for a single-file fix with a clear trace. Explore subagent isolates verbose discovery.", "Trap: Plan mode for a one-line fix"),
 ("3 CI usage", "CI · hangs · output · parse", "claude -p · output-format · json-schema", "-p is non-interactive; --output-format json with --json-schema gives machine-readable output. CLAUDE_HEADLESS and --batch do not exist.", "Trap: Pipe interactive session and scrape colours"),
 ("3 Repo config map", "tool · referenced · CLAUDE.md · authorised", "settings.json · .mcp.json · verify · exists", "CLAUDE.md and SKILL.md only reference tools; permissions live in .claude/settings.json, MCP in .mcp.json. CI verifies referenced tools exist and are not over-permitted. Approval: L1 docs/safe skills auto, L2 new skills/agents PR review, L3 new MCP/shell/permissions security.", "Trap: Tool named in CLAUDE.md means it is authorised"),
 ("3 CI/CD onboarding", "new · agent · PR · approval", "validate · scan · test · human gate", "Stages: static validation → security/compliance → AI review → tests → human approval for high-risk → merge. Risk-based: docs automated; new tools/MCP security review; production permissions mandatory human approval.", "Trap: Merge automatically when checks are green"),
 ("3 CI/CD safety", "PR · comments · untrusted · reviewer", "prompt · injection · least · privilege", "Outsider-authored PR text is data, not instructions. Limit tools and tokens, keep secrets out of context, use an independent review instance and never self-approve.", "Trap: Ask Claude to ignore malicious comments"),
 ("4 Explicit criteria", "false · positives · reviewer · trust", "explicit · criteria · few-shot · disable", "Concrete categorical criteria beat 'be conservative'. Disable a noisy category, fix, then re-enable. 2-4 targeted examples fix inconsistent format.", "Trap: Tell the model to only report high confidence"),
 ("4 Structured output", "extraction · invented · totals · schema", "tool_use · nullable · validation · retry", "tool_use + JSON schema removes syntax errors, not semantic ones. Nullable fields stop fabrication; retry with the error helps format problems, not missing source data.", "Trap: Increase max_tokens"),
 ("4 Batch vs sync", "pre-merge · overnight · cost · SLA", "Batches · 50% · 24h · custom_id", "Message Batches: half price, up to 24 h, no latency SLA, no mid-request tool loops. Blocking checks use the synchronous API.", "Trap: Batch API for a blocking merge check"),
 ("5 Context facts", "long · session · amounts · lost", "case-facts · block · summaries · trim", "Progressive summaries lose numbers and dates. Keep a case-facts block, trim tool output, put key findings at the start.", "Trap: Rely on one rolling summary"),
 ("5 Escalation", "customer · human · sentiment · confidence", "explicit · request · policy · gap", "Escalate on request, policy gap or no progress. Sentiment and self-reported confidence are poor proxies. Hand off customer ID, root cause, amount and recommendation.", "Trap: Escalate whenever sentiment is negative"),
 ("5 Provenance & review", "97% · accuracy · segment · sources", "stratified · sampling · claim-source · conflicts", "Overall accuracy hides weak segments, so sample by type and field. Keep claim→source mappings; annotate conflicts with both values and dates.", "Trap: Pick the more recent figure silently"),
 ("API 429 & caching", "429 · cache · hit · prefix", "SDK · retries · cache_control · exact", "SDKs auto-retry 429/5xx (default 2, honour retry-after). A cache breakpoint caches the prefix (tools→system→messages); dynamic data after it; up to 4 breakpoints.", "Trap: Timestamp at the top of the cached prompt"),
 ("Evals & temperature", "grader · judge · temperature · tests", "code · first · binary · low", "Code graders first, then an LLM judge (distinct model, binary or 1-3 scale, reasoning before score), then human calibration. Low temperature for extraction/evals, 0.8-1.0 for creative.", "Trap: Judge grades its own output on a 1-10 scale"),
 ("MCP client & testing", "MCP · client · test · stdio", "initialize · list_tools · Inspector · stderr", "Client = SDK + transport + initialize → list_tools → call_tool loop. Test with MCP Inspector or in-memory client/server; never print() to stdout on stdio servers.", "Trap: Debug with print() on stdout"),
 ("4Ds & safe agents", "delegate · describe · discern · diligence", "Delegation · Description · Discernment · Diligence", "Delegation decides whether AI is used, Description communicates, Discernment evaluates outputs (looping back to Description), Diligence covers transparency and accountability. Computer use and env inspection: sandbox, read-only first.", "Trap: Ship AI output unreviewed and undisclosed"),
]
BRANCHES = [
 ("Agentic Architecture 27%", "1", "#4f46e5", "stop_reason loop • hub-and-spoke • Task + allowedTools • hooks over prompts • fork_session / --resume • tool_result per tool_use_id"),
 ("Tool Design & MCP 18%", "2", "#0d9488", "descriptions first • isError + category + retryable • scoped tools • tool_choice • .mcp.json vs ~/.claude.json • Prompt/Tool/Resource"),
 ("Claude Code 20%", "3", "#d97706", "CLAUDE.md hierarchy • .claude/rules paths • commands & skills • plan vs direct • claude -p --json-schema"),
 ("Prompt & Structured Output 20%", "4", "#be185d", "explicit criteria • few-shot • tool_use schema • nullable fields • validation-retry • Batches API"),
 ("Context & Reliability 15%", "5", "#2563eb", "case-facts block • escalation triggers • error propagation • provenance & conflicts • stratified sampling"),
 ("Score-report priorities (added)", "★", "#b91c1c", "orchestration safeguards • escalation criteria • tool_choice • tool sequencing • enforce vs CLAUDE.md • project context • iterative refinement • nullable schemas"),
 ("CI/CD Onboarding (added)", "6", "#7c3aed", "static → security → AI review → tests → human gate • risk-based approval • prompt-injection safe • independent reviewer • no self-approval"),
 ("API & SDK basics (added)", "7", "#475569", "AsyncAnthropic • 429 retries • cache breakpoints • temperature • eval graders • MCP client/Inspector • computer use • 4Ds"),
]

def wrap(text, n):
    out, cur = [], ''
    for w in text.split(' '):
        if len(cur)+len(w)+1 > n and cur: out.append(cur); cur = w
        else: cur = (cur+' '+w).strip()
    if cur: out.append(cur)
    return out

def mindmap(width=520, height=700):
    d = Drawing(width, height)
    d.add(Rect(0, 0, width, height, fillColor=colors.HexColor('#f8fafc'), strokeColor=colors.HexColor('#cbd5e1'), rx=8, ry=8))
    d.add(Rect(10, height/2-34, 92, 68, fillColor=colors.HexColor('#1e1b4b'), strokeColor=None, rx=10, ry=10))
    for i, t in enumerate(['CLAUDE', 'ARCHITECT', 'FOUNDATIONS']):
        d.add(String(56, height/2+14-i*15, t, textAnchor='middle', fontName='Helvetica-Bold', fontSize=9.5, fillColor=colors.white))
    n = len(BRANCHES); step = (height-24)/n
    for i, (name, num, col, leaves) in enumerate(BRANCHES):
        cy = height-12-step*(i+0.5); c = colors.HexColor(col)
        d.add(Line(102, height/2, 128, cy, strokeColor=c, strokeWidth=1.6))
        d.add(Rect(128, cy-17, 118, 34, fillColor=c, strokeColor=None, rx=7, ry=7))
        for j, ln in enumerate(wrap(name, 20)[:2]):
            d.add(String(187, cy+3-j*11+(5 if len(wrap(name,20))==1 else 0)-(5 if len(wrap(name,20))==1 else 0), ln, textAnchor='middle', fontName='Helvetica-Bold', fontSize=8.2, fillColor=colors.white))
        d.add(Line(246, cy, 262, cy, strokeColor=c, strokeWidth=1.6))
        d.add(Rect(262, cy-step/2+5, width-272, step-10, fillColor=colors.white, strokeColor=c, strokeWidth=1, rx=6, ry=6))
        for j, ln in enumerate(wrap(leaves, 52)[:4]):
            d.add(String(270, cy+step/2-17-j*10.5, ln, fontName='Helvetica', fontSize=7.6, fillColor=colors.HexColor('#0f172a')))
    return d

def build_appendix(path):
    st = getSampleStyleSheet()
    T = ParagraphStyle('T', parent=st['Title'], fontSize=16, leading=19, spaceAfter=4)
    Sub = ParagraphStyle('Sub', parent=st['Normal'], fontSize=8, leading=10, textColor=colors.HexColor('#555555'), spaceAfter=6)
    H = ParagraphStyle('H', parent=st['Heading3'], fontSize=10, spaceBefore=4, spaceAfter=3)
    B = ParagraphStyle('B', parent=st['BodyText'], fontSize=7.4, leading=9.2)
    doc = SimpleDocTemplate(str(path), pagesize=A4, rightMargin=13*mm, leftMargin=13*mm, topMargin=12*mm, bottomMargin=12*mm)
    s = [Paragraph('Claude architect — Quick Recall &amp; Decision Map', T),
         Paragraph('Four-keyword trigger → answer → reason → trap. Derived from this question bank (including the added CI/CD onboarding and API/SDK/MCP recall questions); representative recall cards, not an official exam blueprint.', Sub),
         Paragraph('Consolidated Mind Map', H), mindmap(), PageBreak(),
         Paragraph('Four-keyword recall cards', H)]
    rows = [[Paragraph(f'<b>{h}</b>', B) for h in ('Domain', 'Question trigger (max 4)', 'Answer recall (max 4)', 'Reason', 'Common exam trap')]]
    for dom, trg, ans, rea, trap in CARDS:
        rows.append([Paragraph(escape(x), B) for x in (dom, trg, ans, rea, trap)])
    tb = Table(rows, colWidths=[22*mm, 30*mm, 32*mm, 68*mm, 28*mm], repeatRows=1)
    tb.setStyle(TableStyle([('BACKGROUND', (0,0), (-1,0), colors.HexColor('#e2e8f0')), ('GRID', (0,0), (-1,-1), 0.3, colors.HexColor('#94a3b8')), ('VALIGN', (0,0), (-1,-1), 'TOP'), ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor('#f8fafc')])]))
    s += [tb, Spacer(1, 6), Paragraph('<b>Decision loop:</b> Trigger → identify the scenario constraint; Answer → choose the source-backed action; Reason → connect it to the requirement; Trap → eliminate the distractor that violates it.', B)]
    doc.build(s)

app_pdf = Path('/tmp/_arch_appendix.pdf'); build_appendix(app_pdf)
w = PdfWriter()
for p in PdfReader(str(ans_pdf)).pages: w.add_page(p)
for p in PdfReader(str(app_pdf)).pages: w.add_page(p)
with (DOCS/'claude_architect_answers.pdf').open('wb') as f: w.write(f)

# PNG of the mind map page (assets/ is referenced by the README)
(ROOT/'assets').mkdir(exist_ok=True)
mm_pdf = Path('/tmp/_mm.pdf')
from reportlab.graphics import renderPDF
from reportlab.pdfgen import canvas
c = canvas.Canvas(str(mm_pdf), pagesize=(540, 680)); dd = mindmap(); renderPDF.draw(dd, c, 10, 20)
c.setFont('Helvetica-Bold', 11); c.drawString(14, 664, 'Claude Architect — Quick Recall Mind Map'); c.save()
subprocess.run(['pdftoppm', '-png', '-r', '170', '-singlefile', str(mm_pdf), str(ROOT/'assets'/'claude_architect_quick_recall_mind_map')], check=True)

# ---- 3. sync README recall section -----------------------------------------
rp = DOCS/'claude_architect_readme.md'; t = rp.read_text(encoding='utf-8')
mm_text = ["```text", "CLAUDE ARCHITECT — FOUNDATIONS"] + [f"  ├─ {n}\n  │     {l.replace(' • ', ' · ')}" for n, _, _, l in BRANCHES] + [
  "  └─ Decision loop", "      ├─ Trigger: identify the scenario constraint", "      ├─ Answer: recall the source-backed technical choice", "      ├─ Reason: connect choice to behavior or requirement", "      └─ Trap: reject a distractor that conflicts with the requirement", "```"]
tbl = ["| Domain | Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |", "|---|---|---|---|---|"] + [
  "| "+" | ".join(x.replace('|','/') for x in c)+" |" for c in CARDS]
new = "## Consolidated Mind Map\n\n"+"\n".join(mm_text)+"\n\n## Four-keyword recall cards\n\n"+"\n".join(tbl)+"\n\n"
m = re.search(r'## Consolidated Mind Map.*?(?=\n## How to use this map)', t, re.S)
t = t[:m.start()]+new.rstrip('\n')+"\n"+t[m.end():]
t = re.sub(r'Consolidated recall cards: \*\*\d+\*\*', f'Consolidated recall cards: **{len(CARDS)}**', t)
t = re.sub(r'Questions in source bank: \*\*\d+\*\*', f'Questions in source bank: **{len(bank)}**', t)
rp.write_text(t, encoding='utf-8')
print('OK', len(bank), 'questions;', len(CARDS), 'cards')
