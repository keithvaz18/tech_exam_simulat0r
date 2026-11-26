# Claude Certified Architect — Professional (CCAR-P)

![Claude Certified Architect Foundation reference one-pager](../assets/claude_architect_detailed_one_pager.png)

This professional practice guide extends the simulator's **Claude Certified Architect – Foundations** guide. The image above intentionally reuses the foundation reference graphic; the professional assessment is a separate, deeper 150-question practice bank.

## Practice exam format
- **150 professional-level practice MCQs** in the simulator bank.
- Questions emphasize architecture decisions, trade-offs, failure modes, operational controls and scenario-based judgment.
- This is a preparation resource, not an official Anthropic exam or a claim about live exam item count, scoring, price or blueprint.

## Domain coverage
1. Agentic architecture and orchestration — deterministic workflows vs agents, tool loops, delegation, state, limits and recovery.
2. Tool design and MCP integration — tool schemas, error semantics, correlation, transport, scope, approval and reusable integration boundaries.
3. Claude Code configuration and workflows — CLAUDE.md hierarchy, path rules, Skills, commands, Plan mode, CI and verification.
4. Prompt engineering and structured output — constraints, delimiters, evidence, schema validation, examples and injection resistance.
5. Context management and reliability — compaction, caching, truncation, retries, idempotency, observability, batch and model lifecycle.

## Professional exam approach
- Identify the requirement and the failure mode before selecting a solution.
- Prefer deterministic enforcement for permissions, destructive actions and business invariants.
- Keep agent autonomy bounded by explicit tools, budgets, deadlines, state and terminal conditions.
- Distinguish valid empty results from transport, authorization and business failures.
- Evaluate changes using representative scenarios and measurable quality, safety, latency and cost.

## Simulator
Select **Claude Certified Architect – Professional** from the portal. The bank uses the existing simulator question schema and is loaded by `exam.html` through `js/questionBank_claude_architect_professional.js`.

## Relationship to Foundations
Use `claude_architect_readme.md` for the foundation-level reference notes. This professional guide builds on the same core concepts and reuses the foundation PNG rather than duplicating image assets.
