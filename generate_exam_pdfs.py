#!/usr/bin/env python3
"""Generate one answer-only PDF for every questionBank_*.js in a simulator ZIP."""
import argparse, json, re, zipfile
from pathlib import Path
from collections import Counter
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, KeepTogether

def extract_question_bank(text):
    m = re.search(r"\b(?:const|let|var)\s+questionBank\s*=\s*", text)
    if not m: raise ValueError("questionBank declaration not found")
    start = text.find("[", m.end())
    if start < 0: raise ValueError("questionBank array not found")
    depth, quoted, escaped = 0, False, False
    for i in range(start, len(text)):
        c = text[i]
        if quoted:
            if escaped: escaped = False
            elif c == "\\": escaped = True
            elif c == '"': quoted = False
        else:
            if c == '"': quoted = True
            elif c == "[": depth += 1
            elif c == "]":
                depth -= 1
                if depth == 0: return json.loads(text[start:i+1])
    raise ValueError("Unclosed questionBank array")

def answer_for(q):
    opts, ans = q.get("options"), q.get("answer")
    if not isinstance(opts, list) or not isinstance(ans, int) or not 0 <= ans < len(opts):
        raise ValueError(f"Invalid answer index/options for ID {q.get('id')}")
    return str(opts[ans])

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("simulator_zip", help="Path to the original simulator ZIP")
    ap.add_argument("-o", "--output-dir", default="exam_pdfs")
    args = ap.parse_args()
    out = Path(args.output_dir); out.mkdir(parents=True, exist_ok=True)
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="ExamTitle", parent=styles["Title"], fontSize=17, leading=21, alignment=TA_CENTER, spaceAfter=6))
    styles.add(ParagraphStyle(name="ExamSub", parent=styles["Normal"], fontSize=8.5, leading=11, alignment=TA_CENTER, textColor=colors.grey, spaceAfter=13))
    styles.add(ParagraphStyle(name="Q", parent=styles["BodyText"], fontSize=9.2, leading=13, spaceAfter=4))
    styles.add(ParagraphStyle(name="A", parent=styles["BodyText"], fontSize=9, leading=12, leftIndent=10, textColor=colors.HexColor("#183B2A"), spaceAfter=9))
    report = []
    with zipfile.ZipFile(args.simulator_zip) as z:
        files = sorted(n for n in z.namelist() if n.startswith("js/questionBank") and n.endswith(".js"))
        for name in files:
            try:
                bank = extract_question_bank(z.read(name).decode("utf-8-sig"))
                stem = Path(name).stem.removeprefix("questionBank_")
                title = stem.replace("_", " ").replace("-", " ").title()
                story = [Paragraph(escape(title) + " — Answer Edition", styles["ExamTitle"]),
                         Paragraph(f"{len(bank)} questions • Original wording • Correct answer only", styles["ExamSub"])]
                for n, q in enumerate(bank, 1):
                    question = q.get("question")
                    if not question: raise ValueError(f"Missing question text at entry {n}")
                    answer = answer_for(q)
                    story.append(KeepTogether([
                        Paragraph(f"<b>Q{n}.</b> {escape(str(question)).replace(chr(10), '<br/>')}", styles["Q"]),
                        Paragraph(f"<b>Correct answer:</b> {escape(answer)}", styles["A"])
                    ]))
                pdf = out / f"{stem}_answers.pdf"
                doc = SimpleDocTemplate(str(pdf), pagesize=A4, rightMargin=18*mm, leftMargin=18*mm, topMargin=17*mm, bottomMargin=17*mm)
                doc.build(story)
                ids = [q.get("id") for q in bank]
                dup = [k for k,v in Counter(ids).items() if v > 1]
                report.append({"bank": name, "pdf": pdf.name, "questions": len(bank), "duplicate_ids": dup, "status": "ok"})
                print(f"OK {pdf}: {len(bank)} questions")
            except Exception as e:
                report.append({"bank": name, "status": "error", "error": str(e)})
                print(f"ERROR {name}: {e}")
    (out / "generation_report.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
if __name__ == "__main__": main()
