# Claude Certified Architect — Professional (CCAR-P)

![Claude Certified Architect Foundation reference one-pager](../assets/claude_architect_detailed_one_pager.png)

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
