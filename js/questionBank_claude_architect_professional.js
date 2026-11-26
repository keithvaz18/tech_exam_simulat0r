/* CLAUDE CERTIFIED ARCHITECT — PROFESSIONAL (CCAR-P) — 150 professional-level practice MCQs. */
const questionBank = [
  {
    "id": 1,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a multi-step task has a predictable sequence and strict latency budget. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 2,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an agent must execute a tool and then reason over its result. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Append the matching tool result to the conversation and continue while stop_reason is tool_use",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Append the matching tool result to the conversation and continue while stop_reason is tool_use. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 3,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a research task needs parallel specialist investigation. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 4,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent repeatedly calls tools without progress. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 5,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a high-impact operation requires predictable policy enforcement. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Enforce the policy in deterministic application code or hooks before the operation executes"
    ],
    "answer": 3,
    "explanation": "Enforce the policy in deterministic application code or hooks before the operation executes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a long-running agent loses track of its objective. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Maintain a compact task state and periodically summarize or rehydrate only relevant context",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Maintain a compact task state and periodically summarize or rehydrate only relevant context. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a workflow contains one uncertain classification step. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Keep orchestration deterministic and use the model only for the bounded classification with validated output"
    ],
    "answer": 3,
    "explanation": "Keep orchestration deterministic and use the model only for the bounded classification with validated output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 8,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a team needs to compare manager-agent and peer-agent designs. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Choose a manager when centralized delegation, policy and synthesis are required",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Choose a manager when centralized delegation, policy and synthesis are required. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 9,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent must recover after a transient downstream outage. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 10,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task can be decomposed into independent analyses. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 11,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a tool has an ambiguous description and is selected inconsistently. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Give it a specific name, clear purpose, input schema, constraints and examples",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Give it a specific name, clear purpose, input schema, constraints and examples. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 12,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a tool call fails because a required field is absent. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return a structured validation error that identifies the missing field and is not marked retryable"
    ],
    "answer": 3,
    "explanation": "Return a structured validation error that identifies the missing field and is not marked retryable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 13,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool result must be correlated to its request. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return tool_result with the exact matching tool_use_id"
    ],
    "answer": 3,
    "explanation": "Return tool_result with the exact matching tool_use_id. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 14,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a capability is shared across multiple applications. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Expose it through a separately maintained MCP server with scoped tools/resources/prompts",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Expose it through a separately maintained MCP server with scoped tools/resources/prompts. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 15,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool performs a destructive production action. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Require server-side authorization and an explicit approval gate before execution",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Require server-side authorization and an explicit approval gate before execution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 16,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: an MCP server needs local developer transport. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Use stdio for a locally launched server where appropriate"
    ],
    "answer": 3,
    "explanation": "Use stdio for a locally launched server where appropriate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 17,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an MCP integration returns a valid empty search result. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Represent the empty result distinctly from permission, transport or server failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Represent the empty result distinctly from permission, transport or server failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool catalog contains many near-duplicate operations. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Consolidate or split tools around distinct responsibilities and keep the exposed set small",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Consolidate or split tools around distinct responsibilities and keep the exposed set small. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 19,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a client-side tool is being designed. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Execute the tool in the application environment and return its result through the tool protocol",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Execute the tool in the application environment and return its result through the tool protocol. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 20,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool description contains prompt-like text from an external source. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Treat the external text as untrusted data and keep tool instructions controlled by the application",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Treat the external text as untrusted data and keep tool instructions controlled by the application. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a repository needs durable shared project guidance. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 22,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a coding convention applies only to test files across many folders. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Use path-specific rules with globs so the rule loads for matching files",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Use path-specific rules with globs so the rule loads for matching files. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 23,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a task involves a broad migration with many valid approaches. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use Plan mode to investigate and structure the change before implementation",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 2,
    "explanation": "Use Plan mode to investigate and structure the change before implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 24,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a small, clearly diagnosed typo needs fixing. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use direct execution with a focused edit and verify the result"
    ],
    "answer": 3,
    "explanation": "Use direct execution with a focused edit and verify the result. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 25,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a reusable procedure should load only when relevant. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Package it as a Skill with clear metadata and task instructions"
    ],
    "answer": 3,
    "explanation": "Package it as a Skill with clear metadata and task instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a team needs a repeatable command shared in version control. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Place a team slash command in the project's .claude/commands directory",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Place a team slash command in the project's .claude/commands directory. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a CI job needs non-interactive Claude Code execution. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use claude -p/--print with a bounded, machine-readable output contract as needed",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use claude -p/--print with a bounded, machine-readable output contract as needed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that claude Code behavior changes after a model release. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Pin or deliberately manage model versions and regression-test critical workflows",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Pin or deliberately manage model versions and regression-test critical workflows. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 29,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a teammate cannot see a personal instruction file. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Move shared requirements into project-level version-controlled guidance",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Move shared requirements into project-level version-controlled guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 30,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task needs discovery without flooding the main context. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use a focused Explore subagent and bring back concise findings",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use a focused Explore subagent and bring back concise findings. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 31,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a model must produce machine-consumable JSON. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Define a precise schema, constrain the response where supported, and validate it in application code",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Define a precise schema, constrain the response where supported, and validate it in application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 32,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a prompt mixes trusted instructions and retrieved documents. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use clear delimiters and explicitly label retrieved material as untrusted data"
    ],
    "answer": 3,
    "explanation": "Use clear delimiters and explicitly label retrieved material as untrusted data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 33,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a classification prompt is inconsistent on edge cases. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Add representative positive, negative and boundary examples and evaluate them",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Add representative positive, negative and boundary examples and evaluate them. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 34,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response must follow a strict output format. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Specify required fields, allowed values, missing-value behavior and validation rules",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Specify required fields, allowed values, missing-value behavior and validation rules. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 35,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task requires extracting evidence from source text. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Request source-grounded fields and evidence spans, then verify spans against the source",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Request source-grounded fields and evidence spans, then verify spans against the source. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 36,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a prompt has grown too long and contradictory. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Remove redundant instructions, prioritize constraints and separate task data from policy",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Remove redundant instructions, prioritize constraints and separate task data from policy. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 37,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an output field can be unknown. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Define an explicit null/unknown representation and prohibit guessing",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Define an explicit null/unknown representation and prohibit guessing. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 38,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a prompt is vulnerable to instruction-like content in documents. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 39,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response needs a concise rationale and a decision. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Separate decision fields from concise supporting evidence and validate both",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Separate decision fields from concise supporting evidence and validate both. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 40,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a prompt change appears to improve one example. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Run a representative evaluation set and compare quality, safety, latency and cost before release"
    ],
    "answer": 3,
    "explanation": "Run a representative evaluation set and compare quality, safety, latency and cost before release. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: repeated static instructions dominate token usage. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Place stable content early and use prompt caching with an appropriate cache breakpoint",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Place stable content early and use prompt caching with an appropriate cache breakpoint. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 42,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a conversation accumulates irrelevant history. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Prune tool output and compact older turns into a faithful task summary",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Prune tool output and compact older turns into a faithful task summary. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a response stops before completing the requested structure. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a service receives HTTP 429. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Honor retry-after when present and use bounded exponential backoff with jitter",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Honor retry-after when present and use bounded exponential backoff with jitter. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 45,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a request receives a 400 validation error. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Correct the request or schema; do not blindly retry an unchanged client error",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Correct the request or schema; do not blindly retry an unchanged client error. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 46,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a side-effecting request may be retried after timeout. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Use an idempotency key and reconcile the operation's status before repeating it",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use an idempotency key and reconcile the operation's status before repeating it. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 47,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a model migration changes output quality. What should the engineer recommend? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Use pinned versions where needed and run regression evaluations against representative tasks",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use pinned versions where needed and run regression evaluations against representative tasks. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 48,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a service must meet latency and cost objectives. Which response best addresses the requirement? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Measure end-to-end latency, token usage, cache hit rate and quality by workload"
    ],
    "answer": 3,
    "explanation": "Measure end-to-end latency, token usage, cache hit rate and quality by workload. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 49,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a batch workload is non-urgent and large. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Evaluate the Batch API for asynchronous processing and lower-cost bulk work",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Evaluate the Batch API for asynchronous processing and lower-cost bulk work. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 50,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A regulated enterprise is preparing a production rollout. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a production integration fails intermittently. What is the most reliable approach? Which design decision best meets the requirement? Which design decision best meets the requirement?",
    "options": [
      "Separate transport, provider, tool and model-output failure classes and instrument traces",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Separate transport, provider, tool and model-output failure classes and instrument traces. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a multi-step task has a predictable sequence and strict latency budget. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an agent must execute a tool and then reason over its result. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Append the matching tool result to the conversation and continue while stop_reason is tool_use",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Append the matching tool result to the conversation and continue while stop_reason is tool_use. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a research task needs parallel specialist investigation. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent repeatedly calls tools without progress. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a high-impact operation requires predictable policy enforcement. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Enforce the policy in deterministic application code or hooks before the operation executes"
    ],
    "answer": 3,
    "explanation": "Enforce the policy in deterministic application code or hooks before the operation executes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 56,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a long-running agent loses track of its objective. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Maintain a compact task state and periodically summarize or rehydrate only relevant context",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Maintain a compact task state and periodically summarize or rehydrate only relevant context. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a workflow contains one uncertain classification step. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Keep orchestration deterministic and use the model only for the bounded classification with validated output"
    ],
    "answer": 3,
    "explanation": "Keep orchestration deterministic and use the model only for the bounded classification with validated output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a team needs to compare manager-agent and peer-agent designs. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Choose a manager when centralized delegation, policy and synthesis are required",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Choose a manager when centralized delegation, policy and synthesis are required. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 59,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent must recover after a transient downstream outage. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 60,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task can be decomposed into independent analyses. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a tool has an ambiguous description and is selected inconsistently. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Give it a specific name, clear purpose, input schema, constraints and examples",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Give it a specific name, clear purpose, input schema, constraints and examples. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a tool call fails because a required field is absent. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return a structured validation error that identifies the missing field and is not marked retryable"
    ],
    "answer": 3,
    "explanation": "Return a structured validation error that identifies the missing field and is not marked retryable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 63,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool result must be correlated to its request. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return tool_result with the exact matching tool_use_id"
    ],
    "answer": 3,
    "explanation": "Return tool_result with the exact matching tool_use_id. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 64,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a capability is shared across multiple applications. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Expose it through a separately maintained MCP server with scoped tools/resources/prompts",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Expose it through a separately maintained MCP server with scoped tools/resources/prompts. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool performs a destructive production action. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Require server-side authorization and an explicit approval gate before execution",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Require server-side authorization and an explicit approval gate before execution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 66,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: an MCP server needs local developer transport. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Use stdio for a locally launched server where appropriate"
    ],
    "answer": 3,
    "explanation": "Use stdio for a locally launched server where appropriate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 67,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an MCP integration returns a valid empty search result. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Represent the empty result distinctly from permission, transport or server failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Represent the empty result distinctly from permission, transport or server failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool catalog contains many near-duplicate operations. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Consolidate or split tools around distinct responsibilities and keep the exposed set small",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Consolidate or split tools around distinct responsibilities and keep the exposed set small. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a client-side tool is being designed. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Execute the tool in the application environment and return its result through the tool protocol",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Execute the tool in the application environment and return its result through the tool protocol. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 70,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool description contains prompt-like text from an external source. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Treat the external text as untrusted data and keep tool instructions controlled by the application",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Treat the external text as untrusted data and keep tool instructions controlled by the application. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a repository needs durable shared project guidance. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a coding convention applies only to test files across many folders. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Use path-specific rules with globs so the rule loads for matching files",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Use path-specific rules with globs so the rule loads for matching files. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a task involves a broad migration with many valid approaches. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use Plan mode to investigate and structure the change before implementation",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 2,
    "explanation": "Use Plan mode to investigate and structure the change before implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a small, clearly diagnosed typo needs fixing. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use direct execution with a focused edit and verify the result"
    ],
    "answer": 3,
    "explanation": "Use direct execution with a focused edit and verify the result. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 75,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a reusable procedure should load only when relevant. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Package it as a Skill with clear metadata and task instructions"
    ],
    "answer": 3,
    "explanation": "Package it as a Skill with clear metadata and task instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a team needs a repeatable command shared in version control. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Place a team slash command in the project's .claude/commands directory",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Place a team slash command in the project's .claude/commands directory. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 77,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a CI job needs non-interactive Claude Code execution. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use claude -p/--print with a bounded, machine-readable output contract as needed",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use claude -p/--print with a bounded, machine-readable output contract as needed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 78,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that claude Code behavior changes after a model release. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Pin or deliberately manage model versions and regression-test critical workflows",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Pin or deliberately manage model versions and regression-test critical workflows. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a teammate cannot see a personal instruction file. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Move shared requirements into project-level version-controlled guidance",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Move shared requirements into project-level version-controlled guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task needs discovery without flooding the main context. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use a focused Explore subagent and bring back concise findings",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use a focused Explore subagent and bring back concise findings. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a model must produce machine-consumable JSON. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Define a precise schema, constrain the response where supported, and validate it in application code",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Define a precise schema, constrain the response where supported, and validate it in application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a prompt mixes trusted instructions and retrieved documents. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use clear delimiters and explicitly label retrieved material as untrusted data"
    ],
    "answer": 3,
    "explanation": "Use clear delimiters and explicitly label retrieved material as untrusted data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a classification prompt is inconsistent on edge cases. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Add representative positive, negative and boundary examples and evaluate them",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Add representative positive, negative and boundary examples and evaluate them. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response must follow a strict output format. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Specify required fields, allowed values, missing-value behavior and validation rules",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Specify required fields, allowed values, missing-value behavior and validation rules. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task requires extracting evidence from source text. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Request source-grounded fields and evidence spans, then verify spans against the source",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Request source-grounded fields and evidence spans, then verify spans against the source. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 86,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a prompt has grown too long and contradictory. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Remove redundant instructions, prioritize constraints and separate task data from policy",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Remove redundant instructions, prioritize constraints and separate task data from policy. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an output field can be unknown. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Define an explicit null/unknown representation and prohibit guessing",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Define an explicit null/unknown representation and prohibit guessing. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 88,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a prompt is vulnerable to instruction-like content in documents. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 89,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response needs a concise rationale and a decision. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Separate decision fields from concise supporting evidence and validate both",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Separate decision fields from concise supporting evidence and validate both. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 90,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a prompt change appears to improve one example. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Run a representative evaluation set and compare quality, safety, latency and cost before release"
    ],
    "answer": 3,
    "explanation": "Run a representative evaluation set and compare quality, safety, latency and cost before release. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: repeated static instructions dominate token usage. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Place stable content early and use prompt caching with an appropriate cache breakpoint",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Place stable content early and use prompt caching with an appropriate cache breakpoint. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a conversation accumulates irrelevant history. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Prune tool output and compact older turns into a faithful task summary",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Prune tool output and compact older turns into a faithful task summary. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a response stops before completing the requested structure. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a service receives HTTP 429. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Honor retry-after when present and use bounded exponential backoff with jitter",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Honor retry-after when present and use bounded exponential backoff with jitter. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a request receives a 400 validation error. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Correct the request or schema; do not blindly retry an unchanged client error",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Correct the request or schema; do not blindly retry an unchanged client error. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 96,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a side-effecting request may be retried after timeout. Which implementation choice is most appropriate? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Use an idempotency key and reconcile the operation's status before repeating it",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use an idempotency key and reconcile the operation's status before repeating it. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 97,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a model migration changes output quality. What should the engineer recommend? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Use pinned versions where needed and run regression evaluations against representative tasks",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use pinned versions where needed and run regression evaluations against representative tasks. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 98,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a service must meet latency and cost objectives. Which response best addresses the requirement? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Measure end-to-end latency, token usage, cache hit rate and quality by workload"
    ],
    "answer": 3,
    "explanation": "Measure end-to-end latency, token usage, cache hit rate and quality by workload. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 99,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a batch workload is non-urgent and large. Which action is the strongest engineering choice? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Evaluate the Batch API for asynchronous processing and lower-cost bulk work",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Evaluate the Batch API for asynchronous processing and lower-cost bulk work. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 100,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "A team is reviewing an incident from its staging environment. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a production integration fails intermittently. What is the most reliable approach? Which design decision best meets the requirement? What should the implementation team do next?",
    "options": [
      "Separate transport, provider, tool and model-output failure classes and instrument traces",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Separate transport, provider, tool and model-output failure classes and instrument traces. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a multi-step task has a predictable sequence and strict latency budget. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Use a deterministic workflow with explicit steps; reserve agentic autonomy for genuinely variable decisions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an agent must execute a tool and then reason over its result. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Append the matching tool result to the conversation and continue while stop_reason is tool_use",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Append the matching tool result to the conversation and continue while stop_reason is tool_use. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 103,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a research task needs parallel specialist investigation. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Use a supervisor to delegate bounded subtasks to isolated subagents and synthesize their results. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent repeatedly calls tools without progress. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Add explicit loop limits, progress criteria, tool-result checks and a controlled stop/recovery path. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a high-impact operation requires predictable policy enforcement. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Enforce the policy in deterministic application code or hooks before the operation executes"
    ],
    "answer": 3,
    "explanation": "Enforce the policy in deterministic application code or hooks before the operation executes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a long-running agent loses track of its objective. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Maintain a compact task state and periodically summarize or rehydrate only relevant context",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Maintain a compact task state and periodically summarize or rehydrate only relevant context. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a workflow contains one uncertain classification step. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Keep orchestration deterministic and use the model only for the bounded classification with validated output"
    ],
    "answer": 3,
    "explanation": "Keep orchestration deterministic and use the model only for the bounded classification with validated output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a team needs to compare manager-agent and peer-agent designs. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Choose a manager when centralized delegation, policy and synthesis are required",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Choose a manager when centralized delegation, policy and synthesis are required. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, an agent must recover after a transient downstream outage. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use bounded retries with backoff and jitter, preserve task state, and expose a recoverable failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "agentic-architecture-and-orchestration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task can be decomposed into independent analyses. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Parallelize bounded subagents, then validate and reconcile their evidence in a synthesis stage. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a tool has an ambiguous description and is selected inconsistently. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Give it a specific name, clear purpose, input schema, constraints and examples",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Give it a specific name, clear purpose, input schema, constraints and examples. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a tool call fails because a required field is absent. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return a structured validation error that identifies the missing field and is not marked retryable"
    ],
    "answer": 3,
    "explanation": "Return a structured validation error that identifies the missing field and is not marked retryable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool result must be correlated to its request. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Return tool_result with the exact matching tool_use_id"
    ],
    "answer": 3,
    "explanation": "Return tool_result with the exact matching tool_use_id. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a capability is shared across multiple applications. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Expose it through a separately maintained MCP server with scoped tools/resources/prompts",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Expose it through a separately maintained MCP server with scoped tools/resources/prompts. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 115,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool performs a destructive production action. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Require server-side authorization and an explicit approval gate before execution",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Require server-side authorization and an explicit approval gate before execution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 116,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: an MCP server needs local developer transport. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Use stdio for a locally launched server where appropriate"
    ],
    "answer": 3,
    "explanation": "Use stdio for a locally launched server where appropriate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an MCP integration returns a valid empty search result. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Represent the empty result distinctly from permission, transport or server failure",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Represent the empty result distinctly from permission, transport or server failure. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a tool catalog contains many near-duplicate operations. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Consolidate or split tools around distinct responsibilities and keep the exposed set small",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Consolidate or split tools around distinct responsibilities and keep the exposed set small. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a client-side tool is being designed. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Execute the tool in the application environment and return its result through the tool protocol",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Execute the tool in the application environment and return its result through the tool protocol. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "tool-design-and-mcp-integration",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a tool description contains prompt-like text from an external source. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Treat the external text as untrusted data and keep tool instructions controlled by the application",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Treat the external text as untrusted data and keep tool instructions controlled by the application. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a repository needs durable shared project guidance. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Commit project-level CLAUDE.md or .claude/CLAUDE.md and keep personal guidance separate. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a coding convention applies only to test files across many folders. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Use path-specific rules with globs so the rule loads for matching files",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Use path-specific rules with globs so the rule loads for matching files. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 123,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a task involves a broad migration with many valid approaches. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use Plan mode to investigate and structure the change before implementation",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 2,
    "explanation": "Use Plan mode to investigate and structure the change before implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 124,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a small, clearly diagnosed typo needs fixing. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use direct execution with a focused edit and verify the result"
    ],
    "answer": 3,
    "explanation": "Use direct execution with a focused edit and verify the result. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 125,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a reusable procedure should load only when relevant. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Package it as a Skill with clear metadata and task instructions"
    ],
    "answer": 3,
    "explanation": "Package it as a Skill with clear metadata and task instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a team needs a repeatable command shared in version control. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Place a team slash command in the project's .claude/commands directory",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 0,
    "explanation": "Place a team slash command in the project's .claude/commands directory. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a CI job needs non-interactive Claude Code execution. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use claude -p/--print with a bounded, machine-readable output contract as needed",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use claude -p/--print with a bounded, machine-readable output contract as needed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that claude Code behavior changes after a model release. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Pin or deliberately manage model versions and regression-test critical workflows",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Pin or deliberately manage model versions and regression-test critical workflows. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a teammate cannot see a personal instruction file. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Move shared requirements into project-level version-controlled guidance",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Move shared requirements into project-level version-controlled guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "category": "claude-code-configuration-and-workflows",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task needs discovery without flooding the main context. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use a focused Explore subagent and bring back concise findings",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Use a focused Explore subagent and bring back concise findings. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a model must produce machine-consumable JSON. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Define a precise schema, constrain the response where supported, and validate it in application code",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Define a precise schema, constrain the response where supported, and validate it in application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a prompt mixes trusted instructions and retrieved documents. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Use clear delimiters and explicitly label retrieved material as untrusted data"
    ],
    "answer": 3,
    "explanation": "Use clear delimiters and explicitly label retrieved material as untrusted data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a classification prompt is inconsistent on edge cases. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Add representative positive, negative and boundary examples and evaluate them",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Add representative positive, negative and boundary examples and evaluate them. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response must follow a strict output format. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Specify required fields, allowed values, missing-value behavior and validation rules",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Specify required fields, allowed values, missing-value behavior and validation rules. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a task requires extracting evidence from source text. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Request source-grounded fields and evidence spans, then verify spans against the source",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Request source-grounded fields and evidence spans, then verify spans against the source. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a prompt has grown too long and contradictory. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Remove redundant instructions, prioritize constraints and separate task data from policy",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Remove redundant instructions, prioritize constraints and separate task data from policy. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: an output field can be unknown. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Define an explicit null/unknown representation and prohibit guessing",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Define an explicit null/unknown representation and prohibit guessing. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a prompt is vulnerable to instruction-like content in documents. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 2,
    "explanation": "Treat document content as data, isolate it with delimiters and enforce sensitive actions outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a response needs a concise rationale and a decision. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Separate decision fields from concise supporting evidence and validate both",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 1,
    "explanation": "Separate decision fields from concise supporting evidence and validate both. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 140,
    "difficulty": "medium",
    "category": "prompt-engineering-and-structured-output",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a prompt change appears to improve one example. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Run a representative evaluation set and compare quality, safety, latency and cost before release"
    ],
    "answer": 3,
    "explanation": "Run a representative evaluation set and compare quality, safety, latency and cost before release. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: repeated static instructions dominate token usage. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved",
      "Place stable content early and use prompt caching with an appropriate cache breakpoint",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 2,
    "explanation": "Place stable content early and use prompt caching with an appropriate cache breakpoint. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a conversation accumulates irrelevant history. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Prune tool output and compact older turns into a faithful task summary",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 1,
    "explanation": "Prune tool output and compact older turns into a faithful task summary. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a response stops before completing the requested structure. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Inspect stop_reason and token usage; increase output budget or continue safely when truncation is confirmed. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a service receives HTTP 429. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Increase model capacity and assume the architectural risk is resolved",
      "Honor retry-after when present and use bounded exponential backoff with jitter",
      "Make the entire design autonomous and remove deterministic application controls",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior"
    ],
    "answer": 1,
    "explanation": "Honor retry-after when present and use bounded exponential backoff with jitter. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a request receives a 400 validation error. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Correct the request or schema; do not blindly retry an unchanged client error",
      "Increase model capacity and assume the architectural risk is resolved",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls"
    ],
    "answer": 0,
    "explanation": "Correct the request or schema; do not blindly retry an unchanged client error. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 146,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A platform team encounters this situation: a side-effecting request may be retried after timeout. Which implementation choice is most appropriate? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Use an idempotency key and reconcile the operation's status before repeating it",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use an idempotency key and reconcile the operation's status before repeating it. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. During a production design review, the team observes: a model migration changes output quality. What should the engineer recommend? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Use pinned versions where needed and run regression evaluations against representative tasks",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Use pinned versions where needed and run regression evaluations against representative tasks. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 148,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A delivery team is validating its solution and finds that a service must meet latency and cost objectives. Which response best addresses the requirement? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Increase model capacity and assume the architectural risk is resolved",
      "Make the entire design autonomous and remove deterministic application controls",
      "Measure end-to-end latency, token usage, cache hit rate and quality by workload"
    ],
    "answer": 3,
    "explanation": "Measure end-to-end latency, token usage, cache hit rate and quality by workload. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 149,
    "difficulty": "hard",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. In a scenario-based assessment, a batch workload is non-urgent and large. Which action is the strongest engineering choice? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Evaluate the Batch API for asynchronous processing and lower-cost bulk work",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Evaluate the Batch API for asynchronous processing and lower-cost bulk work. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "category": "context-management-and-reliability",
    "question": "An architecture board is assessing a proposed change. A regulated enterprise is preparing a production rollout. A service owner asks how to handle this case: a production integration fails intermittently. What is the most reliable approach? Which design decision best meets the requirement? Which response most effectively reduces operational risk?",
    "options": [
      "Separate transport, provider, tool and model-output failure classes and instrument traces",
      "Solve the symptom locally without defining ownership, boundaries or recovery behavior",
      "Make the entire design autonomous and remove deterministic application controls",
      "Increase model capacity and assume the architectural risk is resolved"
    ],
    "answer": 0,
    "explanation": "Separate transport, provider, tool and model-output failure classes and instrument traces. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  }
];
