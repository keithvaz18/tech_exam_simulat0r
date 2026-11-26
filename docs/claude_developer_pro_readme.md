# Claude developer professional — Exam Recall & Decision Guide

> Source-grounded revision aid built from this simulator question bank. Recall cards use representative questions and their supplied correct answers, explanations, and distractors; they are not an official exam blueprint.

## Consolidated mind map

```text
CLAUDE DEVELOPER PROFESSIONAL
  ├─ Question domains
  │   ├─ software engineering and application design
  │   ├─ claude api mechanics and integration
  │   ├─ agents and workflow implementation
  │   ├─ security, safety and evaluation
  │   ├─ prompt, context and output handling
  │   ├─ claude code engineering workflows
  └─ Decision loop
      ├─ Trigger: identify the scenario constraint
      ├─ Answer: recall the source-backed technical choice
      ├─ Reason: connect choice to behavior or requirement
      └─ Trap: reject a plausible distractor and its mismatch

## Four-keyword recall cards

| Question trigger (max 4) | Answer recall (max 4) | Reason — why it works | Trap — what to reject |
|---|---|---|---|
| change · API · control · engineering | Revoke · rotate · remove · active | Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Rely on a prompt-only instruction and leave enforcement or validation to the model |
| change · provider · engineering · lead | Verify · provider-specific · identifiers · feature | Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Rely on a prompt-only instruction and leave enforcement or validation to the model |
| change · tool_use · blocks · engineering | Validate · permitted · correlate · preserve | Validate and execute each permitted call, correlate each result and preserve the protocol sequence. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Skip instrumentation and accept the result if the response appears plausible |
| test · senior · engineer · reviewing | Isolate · cause · output · bad | Isolate whether the cause is model output, bad tool data, incorrect parameters, truncation or orchestration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Rely on a prompt-only instruction and leave enforcement or validation to the model |
| test · behavior · senior · engineer | explicit · constraints · evaluation · set | Use examples, explicit constraints and an evaluation set that covers representative edge cases. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Rely on a prompt-only instruction and leave enforcement or validation to the model |
| test · vague · senior · engineer | Ask · targeted · questions · reproduce | Ask targeted questions, reproduce, inspect traces and isolate the smallest failing layer. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior. | Trap: Retry or repeat the operation without classifying the failure or checking side effects |

## How to use this map

1. Read the trigger and identify the requirement or failure mode in the scenario.
2. Recall the answer keywords before looking at the full explanation.
3. State the decision rule in your own words; the reason column gives the source explanation.
4. Eliminate the trap because it conflicts with the question constraint or the supplied explanation.

## Source coverage

- Question bank: `questionBank_claude_developer_professional.js`
- Questions in source bank: **150**
- Consolidated recall cards: **6**
- Category labels represented in the mind-map hierarchy: **6**
- Distractors are drawn from the question options; explanations are drawn from the question bank.

---

# Claude Certified Developer — Professional (CCDV-P)

![Claude Certified Developer Foundation reference one-pager](../assets/claude_developer_detailed_one_pager.png)

This professional practice guide extends the simulator's **Claude Certified Developer – Foundations** guide. The image above intentionally reuses the foundation reference graphic; the professional assessment is a separate, deeper 150-question practice bank.

## Practice exam format
- **150 professional-level practice MCQs** in the simulator bank.
- Questions emphasize API integration, production software engineering, agent-loop implementation, Claude Code workflows, context/output handling, security and evaluation.
- This is a preparation resource, not an official Anthropic exam or a claim about live exam item count, scoring, price or blueprint.

## Domain coverage
1. Claude API mechanics and integration — stateless Messages API, streaming, multimodal input, batching, truncation, provider integration and request lifecycle.
2. Software engineering and application design — retries, idempotency, validation, concurrency, secrets, auditability, contracts and deployment.
3. Agents and workflow implementation — stop reasons, tool protocol, approval, state, bounded loops, subagents and recovery.
4. Claude Code engineering workflows — project guidance, headless CI, Plan mode, Skills, path-specific rules, review and safe execution.
5. Prompt, context and output handling — structured output, untrusted content, context pruning, evidence, caching and unknown values.
6. Security, safety and evaluation — injection defense, server-side authorization, data minimization, least privilege, regression evals and trace diagnosis.

## Professional exam approach
- Treat model output as untrusted input until validated.
- Keep authorization, transaction rules and side-effect controls in application code.
- Classify failures before retrying; use bounded backoff for transient failures and idempotency for writes.
- Inspect stop reasons, tool-use correlation, truncation and usage metadata.
- Test realistic edge cases and operational failure paths, not only happy-path prompts.

## Simulator
Select **Claude Certified Developer – Professional** from the portal. The bank uses the existing simulator question schema and is loaded by `exam.html` through `js/questionBank_claude_developer_professional.js`.

## Relationship to Foundations
Use `claude_developer_readme.md` for the foundation-level reference notes. This professional guide builds on the same core concepts and reuses the foundation PNG rather than duplicating image assets.
