#!/usr/bin/env python3
"""Inventory questionBank_*.js files in a simulator ZIP."""
import argparse, json, re, zipfile
from pathlib import Path
from collections import Counter

def extract(text):
    m = re.search(r"\b(?:const|let|var)\s+questionBank\s*=\s*", text)
    if not m: raise ValueError("questionBank declaration not found")
    a = text.find("[", m.end()); depth = 0; quoted = escaped = False
    for i in range(a, len(text)):
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
                if depth == 0: return json.loads(text[a:i+1])
    raise ValueError("unclosed array")

def main():
    p = argparse.ArgumentParser(); p.add_argument("simulator_zip"); p.add_argument("-o", "--output", default="question_bank_analysis.json")
    a = p.parse_args(); report = []
    with zipfile.ZipFile(a.simulator_zip) as z:
        files = sorted(n for n in z.namelist() if n.startswith("js/questionBank") and n.endswith(".js"))
        for name in files:
            row = {"file": name}
            try:
                bank = extract(z.read(name).decode("utf-8-sig"))
                ids = [q.get("id") for q in bank]
                invalid = []
                for n,q in enumerate(bank,1):
                    opts, ans = q.get("options"), q.get("answer")
                    if not isinstance(q.get("question"), str) or not q["question"].strip(): invalid.append(f"entry {n}: missing question")
                    if not isinstance(opts,list): invalid.append(f"entry {n}: options not a list")
                    elif not isinstance(ans,int) or not 0 <= ans < len(opts): invalid.append(f"entry {n}: invalid answer index {ans!r}")
                row.update(question_count=len(bank), keys=sorted(set().union(*(q.keys() for q in bank))) if bank else [],
                           duplicate_ids=[{"id":k,"count":v} for k,v in Counter(ids).items() if v>1],
                           answer_key_types=dict(Counter(type(q.get("answer")).__name__ for q in bank)),
                           parsing_issues=[], validation_issues=invalid)
            except Exception as e: row.update(question_count=None, parsing_issues=[str(e)])
            report.append(row)
    Path(a.output).write_text(json.dumps(report, indent=2), encoding="utf-8")
    print(f"Analysed {len(report)} banks; report: {a.output}")
    for r in report:
        print(f"{r['file']}: {r.get('question_count','ERROR')} questions; {len(r.get('duplicate_ids',[]))} duplicate IDs; {len(r.get('parsing_issues',[]))+len(r.get('validation_issues',[]))} issues")
if __name__ == "__main__": main()
