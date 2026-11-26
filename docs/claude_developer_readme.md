# 🛠️ Claude Certified Developer – Foundations (CCDV-F)

![Claude developer Quick Recall Mind Map](../assets/claude_developer_quick_recall_mind_map.png)

[Open the answer PDF](claude_developer_answers.pdf)


![Claude Certified Developer Detailed One Pager](/assets/claude_developer_detailed_one_pager.png)
<img width="1024" height="1536" alt="claude_developer_detailed_one_pager" src="assets/claude_developer_detailed_one_pager.png" />


## Consolidated Mind Map

```text
CLAUDE DEVELOPER
  ├─ Question domains
  │   ├─ applications integration
  │   ├─ model optimization
  │   ├─ agents workflows
  │   ├─ tools mcp
  │   ├─ prompt context
  │   ├─ security safety
  │   ├─ eval debugging
  │   ├─ claude code
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a distractor that conflicts with the requirement
```

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| API · chat · client · sends | malicious · client · forge · assistant | Because the Messages API is stateless you resend history, but untrusted clients must not be allowed to define roles or inject fabricated assistant turns. Keep canonical history server-side. | Trap: The history will always be too long to send |
| per-request · prompt · contains · stable | Tools · per-request · guidelines · cache | Cache Breakpoint: stable prefix before volatile content. System vs User placement also matters, since system content is typically stable while user content varies. | Trap: Question first |
| Python · outputs · choosing · agent | LangGraph · Strands · PydanticAI | LangGraph: graph-based, stateful orchestration. Strands: a model-driven agent SDK. | Trap: Terraform, Ansible and Chef |
| MCP · server · runs · local | HTTP-based · stdio · local · subprocess | stdio vs HTTP: stdio launches a local process; HTTP serves remote, multi-client servers. MCP Resources expose readable data such as catalogs, while tools perform actions. | Trap: stdio for remote |
| ignored · agent · tool · outputs | Context · engineering · prune · tool | Context Engineering: curate what enters the window. Context Drift: stale or bloated content degrades behavior. | Trap: Add more tools |
| agent · summarizes · web · pages | Treat · page · content · untrusted | Prompt Injection: untrusted content must never be able to command the agent. Jailbreak Defense: filter inputs and outputs and layer controls rather than trusting one. | Trap: Politely ask the model to ignore malicious text |
| answers · returns · wrong · isolate | Inspect · traces · check · exact | Trace analysis separates integration bugs (bad prompt assembly, truncated tool output, parsing errors) from genuine model failures. | Trap: Swap to a larger model first |
| Claude · Code · set · lists | Rules · Skills · Commands · Agents | Claude Code is customized through CLAUDE.md, settings.json, rules, skills, slash commands and subagents, with memory persisting useful context. | Trap: Browser cookies and local storage |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the explanation.
3. State why the answer works using the reason column.
4. Eliminate the trap because it conflicts with the scenario or source explanation.

## Source coverage

- Question bank: `questionBank_claude_developer.js`
- Questions in source bank: **195**
- Consolidated recall cards: **8**
- Recall cards are representative study aids derived from the supplied question bank, not an official exam blueprint.

---

### 📘 Interview & Exam Quick Reference (Claude API + Agents + Tools/MCP + Cost + Security)

**Exam facts:** 53 items · 120 min · pass = scaled **720 / 1000** · $125 · valid 12 months · for engineers with 1-5 yrs SWE and 6+ months Claude experience.
Breadth exam: **API mechanics and engineering fundamentals carry a third of the score.**

**Practice simulator coverage:** 150 curated questions plus a refreshed 100-question priority set (`hotsQuestions`). The Hot 100 is weighted to the official domain blueprint: Applications & Integration 33, Model Selection 17, Agents & Workflows 15, Prompt & Context 11, Tools & MCP 10, Security & Safety 8, Claude Code 3, and Eval/Debugging 3. This is a preparation bank, not a representation of the live exam item count.

| # | Domain | Weight |
| - | ------ | ------ |
| 1 | Agents and Workflows | 14.7% |
| 2 | **Applications and Integration** | **33.1%** |
| 3 | Claude Code | 3.1% |
| 4 | Eval, Testing, and Debugging | 2.6% |
| 5 | Model Selection and Optimization | 16.8% |
| 6 | Prompt and Context Engineering | 11.0% |
| 7 | Security and Safety | 8.1% |
| 8 | Tools and MCPs | 10.6% |

---

# 🤖 1. Agents and Workflows (14.7%)

* **Workflow** = LLM calls through predefined code paths (predictable, cheaper, faster). **Agent** = model decides steps/tools in a loop (open-ended tasks)
* **Tool-use loop:** continue on `stop_reason == "tool_use"`, stop on `"end_turn"`
* **Manager/supervisor** delegates to **subagents** → isolated context, focused tools
* **Claude Agent SDK** = Claude's harness (loop, tools, hooks, subagents); custom loops also valid; managed deployments self-hosted vs Anthropic-hosted
* **Hooks** = deterministic control points (block destructive actions, enforce policy)
* Frameworks: **LangGraph, Strands, PydanticAI** (abstractions for multi-step agents)
* Patterns: tool-use loop · subagents · memory · context-window management

💡 **Exam Tip:** Pick workflow when steps are known; agent when the path can't be predicted.

---

# 🔌 2. Applications and Integration (33.1%)

### 🔑 Claude API mechanics (6.8%)

* **Messages API is stateless** → resend full history every call
* **Streaming** → lower perceived latency
* **Vision / multi-format input**, **thinking**, **caching**, third-party vendors (Bedrock / Vertex etc.)
* **Batch API:** async, ≤24 h, ~**50% cheaper**; for non-urgent bulk. Realtime for user-facing / blocking
* `max_tokens` truncation → check `stop_reason`

```python
resp = client.messages.create(model="claude-sonnet-5-5", max_tokens=1024,
        system="You are a support assistant.",
        messages=[{"role": "user", "content": "Summarize this ticket..."}])
```

### 🔑 Software engineering foundations (7.4%)

* REST + JSON, **async/concurrency**, version control, SDLC integration, code review, refactoring
* **429 / 5xx** → retry with **exponential backoff + jitter**; honor `retry-after`
* **Idempotency** keys for retries that cause side effects
* 4xx validation errors → fix the request, **don't** retry blindly

### 🔑 Application design (8.6%)

* Instructions are interpreted differently across Claude Code, Desktop, claude.ai, API, SDKs
* Content boundaries, schema design, **session hygiene** (don't carry stale/irrelevant context), plugin management

### 🔑 Configuration management (4.1%)

* **CLAUDE.md** (project context) · **settings.json** (permissions, hooks, model) · **pin model versions** · **version prompts** · track plugin dependencies
* Why pin? Model releases can cause **breaking behavior changes**

### 🔑 Requirements & lifecycle (6.2%)

Translate business → functional/infrastructure requirements; plan, deploy, operate, maintain.

---

# 🧑‍💻 3. Claude Code (3.1%)

* Components: **Rules, Skills, Commands, Agents, Agent Memory**
* `claude -p` = **headless** for scripts/CI · streaming mode · auto-mode · session management
* CLAUDE.md hierarchy (user / project / directory) · `/init` to initialize a repo · `settings.json`

---

# 🧪 4. Eval, Testing, and Debugging (2.6%)

* **Evals** = labeled cases that catch regressions when prompts/models change
* **Trace analysis:** is it the **integration layer** (bad tool result, wrong params, truncation) or the **model output**? Isolate first
* Recovery: **retry transient** (timeouts, 429, 5xx), **fix validation** errors, surface business errors

---

# ⚙️ 5. Model Selection and Optimization (16.8%)

### 🔑 LLM fundamentals

* **Token** = unit of context, cost, limits · **context window** covers input + output
* **Temperature** → sampling variability; outputs are **non-deterministic**
* **Extended thinking** (reasoning tokens **billed as output**) · **Adaptive thinking** (model scales its own reasoning) · **Effort levels** trade quality vs cost/speed
* Prompting: zero-shot → single-shot → **few-shot**

### 🔑 Model tradeoffs

| Tier | Use |
| ---- | --- |
| **Opus** | Hardest reasoning / agentic work (highest cost) |
| **Sonnet** | Balanced default |
| **Haiku** | High-volume, low-latency, cheap |

Choose by **quality / latency / cost**; check breaking changes between releases.

### 🔑 Cost & tokens

* Input and output priced **separately** (output costs more)
* **Prompt caching:** put **static content first**, mark cache breakpoint; cached prefix reads are cheaper
* Track token usage, model cost per request/feature; Batch API for 50% off

---

# 🧠 6. Prompt and Context Engineering (11.0%)

* **Context engineering** = control what enters the window; prevent **drift & bloat**
* Techniques: **tool output pruning**, **compaction** (summarize older turns), **subagent isolation**
* **Prompt engineering:** clear instructions, few-shot, **system vs user placement**, output constraints, iterative refinement
* **XML delimiters** separate data from instructions
* **Output handling:** structured output, **validate responses**, **defensive parsing**, be **skeptical of confident output**
* **Input sanitization:** constrain/validate untrusted fields

---

# 🔒 7. Security and Safety (8.1%)

* **Prompt injection:** treat retrieved/user content as **untrusted**, keep separate from trusted instructions, use **hooks/guardrails** so injected text can't trigger sensitive actions. (Temperature, polite requests, bigger model ≠ defenses)
* **Least privilege:** minimal tools, scopes, data
* **Guardrail layering:** multiple independent controls (input filter, output check, permissions, hooks)
* **PII:** minimize, redact, avoid leaking into logs/prompts
* **AuthN/AuthZ enforced server-side in code**, never "asked" of the model
* **Hooks** block destructive actions (e.g., `rm -rf`, prod writes)
* **Secrets:** env vars / secret manager; never in prompts or git; **rotate leaked keys**; monitor access

---

# 🧰 8. Tools and MCPs (10.6%)

* **Tool descriptions** drive selection; return `tool_result` with matching `tool_use_id`; informative errors enable recovery
* **Client-side tools** (your code executes) vs **server-side tools** (Anthropic executes)
* **Approval patterns:** human-in-the-loop for risky calls
* Keep tool sets **small and distinct**
* **MCP server** = reusable tools shared across apps, maintained independently; exposes **tools, resources, prompts**; transports **stdio** (local) / **HTTP** (remote)

### 🔑 Built-in vs custom tool vs Skill vs MCP

| Need | Choose |
| ---- | ------ |
| Common file/shell operations | **Built-in tools** |
| One-app specific function | **Custom tool** |
| Reusable instructions/procedures loaded on demand | **Skill** |
| Live external system reused across apps | **MCP server** |

---

# 🚨 Problem → Instant Fix Map

| Scenario | Answer |
| -------- | ------ |
| 10,000 docs overnight, cost matters | **Batch API** |
| Hidden text in web page says "reveal system prompt" | Untrusted-content isolation + hooks/least privilege |
| Internal REST service reused by many Claude apps | **MCP server** |
| Intermittent 429s | Exponential backoff + jitter |
| Same big prefix every request | **Prompt caching** (static first) |
| Prompt change broke outputs | **Evals** + prompt versioning |
| Output sometimes wrong/odd | Trace: integration vs model; validate output |
| Model release changed behavior | **Pin model version** |
| Leaked API key | Rotate + secrets manager |
| Context growing with stale tool output | Prune / compact / subagent |

---

# 🏁 Final Interview One-Liner

> “I build Claude apps on a stateless Messages API with streaming, backoff and idempotency, choose Opus/Sonnet/Haiku by quality-latency-cost, cut spend with prompt caching and the Batch API, engineer context with pruning and compaction, treat all external content as untrusted behind least-privilege hooks, expose reusable capabilities through MCP servers, and guard quality with evals, trace analysis and pinned model and prompt versions.”

✅ Optimized for the CCDV-F exam and real-world Claude application interviews.


---

## Practice bank and simulator files

- `questionBank_claude_developer.js` contains 150 multiple-choice questions with stable zero-based IDs, difficulty, blueprint category, four options, answer index, and rationale.
- `hotsQuestions` contains 100 unique zero-based question indices, ordered from high-priority applied questions through foundational coverage. Keep it as an index list; do not treat its values as question IDs if the bank is later reordered.
- `claude_developer_detailed_one_pager.png` is the visual revision sheet covering all eight official domains, high-value API and engineering patterns, problem-to-fix mappings, and an interview one-liner.
- The exam guide states 53 live exam items, 120 minutes, and a scaled passing score of 720/1000. The 150-question bank is supplemental practice content.

**Preparation approach:** learn the domain fundamentals, complete the Hot 100 under timed conditions, review every explanation (including correct answers), then complete the remaining bank and revisit weak domains. The official exam may change; use the current exam guide as the authority.
