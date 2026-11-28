import json, random, re
TAILS = [
 " and rely on that approach for every case",
 ", then review the outcome after the next release",
 " without changing anything else in the design",
 ", on the assumption that the model will cooperate",
 " and document the decision for the team wiki",
 ", which is simpler than adding extra controls",
 " and treat any remaining failures as edge cases",
 ", since that has worked in earlier projects",
 " and monitor the dashboards for problems afterwards",
 ", keeping the existing flow otherwise unchanged",
]
def run(stem, first_new):
    path=f'js/questionBank_{stem}.js'; t=open(path,encoding='utf-8').read()
    s=t.find('[',t.find('const questionBank')); bank,n=json.JSONDecoder().raw_decode(t[s:])
    rnd=random.Random(stem)
    for q in bank[first_new:]:
        a=q['answer']; target=len(q['options'][a])
        # shuffle so that the correct option is not systematically the longest
        order=list(range(4)); wr=[i for i in order if i!=a]
        for k,i in enumerate(wr):
            o=q['options'][i].rstrip('.')
            if len(o) < 0.85*target:
                for tail in rnd.sample(TAILS,len(TAILS)):
                    if len(o)+len(tail) <= 1.12*target and len(o)+len(tail) >= 0.8*target:
                        o+=tail; break
                else:
                    o+=rnd.choice(TAILS)
            q['options'][i]=o
    open(path,'w',encoding='utf-8').write(t[:s]+json.dumps(bank,indent=2,ensure_ascii=False)+t[s+n:])
run('claude_architect_professional',172); run('claude_developer_professional',150)
