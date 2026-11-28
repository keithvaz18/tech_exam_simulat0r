import json, importlib, re, collections, sys
def add(stem, modname):
    m = importlib.import_module(modname); Q = m.Q
    path = f'js/questionBank_{stem}.js'
    t = open(path, encoding='utf-8-sig').read()
    s = t.find('[', t.find('const questionBank'))
    bank, n = json.JSONDecoder().raw_decode(t[s:])
    assert not any('REVISION' in q.get('explanation','') for q in bank)
    base = len(bank); nid = max(q['id'] for q in bank)
    seen = {q['question'] for q in bank}
    pos_cycle = [2,0,3,1]  # varied, balanced positions
    new = []
    for i, (cat, diff, q, right, wrong, expl) in enumerate(Q):
        assert len(wrong) == 3 and q not in seen, (i, q[:50])
        p = pos_cycle[i % 4] if (i//4) % 2 == 0 else pos_cycle[(i+1) % 4]
        opts = wrong[:]; opts.insert(p, right)
        new.append({"id": nid+1+i, "difficulty": diff, "category": cat, "question": q,
                    "options": opts, "answer": p, "explanation": expl})
    out = t[:s] + json.dumps(bank+new, indent=2, ensure_ascii=False) + t[s+n:]
    out = re.sub(r'(\d+) professional-level practice MCQs', f'{base+len(new)} professional-level practice MCQs', out, count=1)
    open(path, 'w', encoding='utf-8').write(out)
    c = collections.Counter(q['answer'] for q in new)
    print(stem, base, '->', base+len(new), 'positions', dict(sorted(c.items())), 'cats', dict(collections.Counter(q['category'] for q in new)))
add('claude_architect_professional', 'revision_arch_pro')
add('claude_developer_professional', 'revision_dev_pro')
