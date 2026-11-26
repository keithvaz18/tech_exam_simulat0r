# Claude Certified Architect — Professional (CCAR-P)

![Claude architect professional Quick Recall Mind Map](../assets/claude_architect_professional_quick_recall_mind_map.png)

[Open the answer PDF](claude_architect_professional_answers.pdf)


![Claude Certified Architect Foundation reference one-pager](../assets/claude_architect_detailed_one_pager.png)


## Consolidated Mind Map

```text
CLAUDE ARCHITECT PROFESSIONAL
  ├─ Question domains
  │   ├─ tool design and mcp integration
  │   ├─ prompt engineering and structured output
  │   ├─ context management and reliability
  │   ├─ claude code configuration and workflows
  │   ├─ agentic architecture and orchestration
  │   ├─ integration
  │   ├─ stakeholder communication and lifecycle management
  │   ├─ solution design and architecture
  │   ├─ governance safety and risk management
  │   ├─ evaluation testing and optimization
  │   ├─ developer productivity and operational management
  │   ├─ claude models prompting and context
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a distractor that conflicts with the requirement
```

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| absent · production · design · review | Return · structured · validation · error | Return a structured validation error that identifies the missing field and is not marked retryable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Solve the symptom locally without defining ownership, boundaries or recovery behavior |
| instruction-like · documents · delivery · validating | Treat · document · content · isolate | Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Increase model capacity and assume the architectural risk is resolved |
| structure · delivery · validating · finds | Inspect · stop_reason · token · usage | Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Increase model capacity and assume the architectural risk is resolved |
| guidance · platform · encounters · situation | Commit · project-level · CLAUDE.md · claude/CLAUDE.md | Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Make the entire design autonomous and remove deterministic application controls |
| step · production · design · review | orchestration · deterministic · bounded · classification | Keep orchestration deterministic and use the model only for the bounded classification with validated output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Increase model capacity and assume the architectural risk is resolved |
| Claude · Code · Desktop · IDE | Build · MCP · Streamable · HTTP | Four different hosts needing the same capability with one place to manage it is exactly what MCP standardizes — discovery, primitives, and a single security boundary, with Streamable HTTP for remote multi- client access and OAuth for token acquisition. A duplicates the surface four times. | Trap: Define the tools separately in each of the four applications. |
| answers · stakeholder · wants · contractual | Commitments · human-review · SLA · residual | Probabilistic systems can carry meaningful commitments on availability, latency, and accuracy over a defined distribution with a defined measurement method, provided exclusions and the escalation path for failures are explicit. A invents a number without defining the distribution or the measurement, which is the same trap in a more precise-sounding form. | Trap: A commitment to 99.9% accuracy, which is close enough to be defensible. |
| Tuesday · operations · leader · says | Rainbow · execution · deployments · checkpointed | Stateful long-running agents need traffic shifted gradually with both versions live (rainbow) so in-flight sessions survive, and checkpoints with resumption so a late failure does not discard the run. B addresses cost, not statefulness. | Trap: Prompt caching and batch processing. |
| Claude-based · discharge-summary · tool · PHI | Business · Associate · Agreement · processing | HIPAA requires the BAA before processing, audit controls over PHI access and use, and — because output influences clinical records — human validation before the output becomes consequential. C confuses capability with compliance. | Trap: Selecting the largest available model to maximize accuracy. |
| shipping · wants · prove · prompt | held-out · prompt · LLM-as-judge · instance | Validity requires held-out data, a defined and independent grading method, and guardrails so a quality gain does not silently trade away latency or cost. C is a misconception — early effect sizes are large enough that ~20 well-chosen cases discriminate, and scale is invested when gains shrink. | Trap: Reporting the mean judge score on the cases that were used to iterate. |
| load · production · integration · begins | Retry · retry-after · requests · responses | The first triage question is retriable versus terminal. 429 is transient rate limiting and calls for jittered, capped backoff honoring retry-after . | Trap: Retry both with exponential backoff and jitter. |
| API · chart-generation · script · wants | Agent · Skill · SKILL.md · Level | Skills are filesystem-based, workspace-shared on the API, and use progressive disclosure — the brand reference costs nothing until read, and the script's body never enters context, only its output. A pays for 40 pages on every request. | Trap: Append the brand reference and script source to the system prompt on every request. |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the explanation.
3. State why the answer works using the reason column.
4. Eliminate the trap because it conflicts with the scenario or source explanation.

## Source coverage

- Question bank: `questionBank_claude_architect_professional.js`
- Questions in source bank: **172**
- Consolidated recall cards: **12**
- Recall cards are representative study aids derived from the supplied question bank, not an official exam blueprint.

---

This professional practice guide extends the simulator's **Claude Certified Architect – Foundations** guide. The image above intentionally reuses the foundation reference graphic; the professional assessment is a separate, deeper 172-question practice bank.

## Practice exam format
- **172 professional-level practice MCQs** in the simulator bank.
- Questions emphasize architecture decisions, trade-offs, failure modes, operational controls and scenario-based judgment.
- This is a preparation resource, not an official Anthropic exam or a claim about live exam item count, scoring, price or blueprint.

## Domain coverage (aligned to the attached CCAR-P study guide)
1. Solution Design & Architecture — 17%.
2. Claude Models, Prompting & Context — 13%.
3. Integration — 19%.
4. Evaluation, Testing & Optimization — 16%.
5. Governance, Safety & Risk Management — 14%.
6. Stakeholder Communication & Lifecycle Management — 14%.
7. Developer Productivity & Operational Management — 7%.

The original 150 simulator questions are retained. The 22 scenario questions from the attached study guide's seven domain sample-question sections have been added as questions 151–172. Multi-select items preserve their multiple correct answers and are rendered as checkbox questions.

## Professional exam approach
- Identify the requirement and the failure mode before selecting a solution.
- Prefer deterministic enforcement for permissions, destructive actions and business invariants.
- Keep agent autonomy bounded by explicit tools, budgets, deadlines, state and terminal conditions.
- Distinguish valid empty results from transport, authorization and business failures.
- Evaluate changes using representative scenarios and measurable quality, safety, latency and cost.

## Added study-guide questions
The 22 sample questions in the attached study guide have been added verbatim to the practice bank as questions 151–172, distributed across all seven blueprint domains. Seven are multiple-response questions; the exam interface presents checkboxes and scores the complete answer set.

## Simulator
Select **Claude Certified Architect – Professional** from the portal. The bank uses the simulator question schema, including an answer-index array for multi-select items and is loaded by `exam.html` through `js/questionBank_claude_architect_professional.js`.

## Relationship to Foundations
Use `claude_architect_readme.md` for the foundation-level reference notes. This professional guide builds on the same core concepts and reuses the foundation PNG rather than duplicating image assets.
