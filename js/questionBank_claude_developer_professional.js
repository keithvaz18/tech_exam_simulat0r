/* CLAUDE CERTIFIED DEVELOPER — PROFESSIONAL (CCDV-P) — 150 professional-level practice MCQs. */
const questionBank = [
  {
    "id": 1,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a service needs to preserve multi-turn conversation state with the Messages API. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Resend the relevant conversation history on each request because the Messages API is stateless",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Resend the relevant conversation history on each request because the Messages API is stateless. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 2,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a user-facing application needs lower perceived response latency. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use streaming and render validated incremental content appropriately",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Use streaming and render validated incremental content appropriately. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 3,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a bulk classification job can complete asynchronously. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use the Batch API when its asynchronous completion model fits the deadline"
    ],
    "answer": 3,
    "explanation": "Use the Batch API when its asynchronous completion model fits the deadline. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 4,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a response ends with max_tokens-related truncation. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Inspect stop_reason and usage, then continue or resize the output budget safely",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Inspect stop_reason and usage, then continue or resize the output budget safely. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 5,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: an application must accept image and text input. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Construct supported multimodal content blocks and validate input size/type before sending",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Construct supported multimodal content blocks and validate input size/type before sending. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a team deploys through a cloud model provider. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a long-running request must be cancelled or timed out. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Implement application-level deadlines, cancellation handling and cleanup"
    ],
    "answer": 3,
    "explanation": "Implement application-level deadlines, cancellation handling and cleanup. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 8,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a service needs to correlate API usage to customers and features. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Capture request identifiers and token usage securely with appropriate tenant attribution"
    ],
    "answer": 3,
    "explanation": "Capture request identifiers and token usage securely with appropriate tenant attribution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 9,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a system prompt must remain separate from user input. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Pass trusted system instructions through the system field and user content as message data",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Pass trusted system instructions through the system field and user content as message data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 10,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: an integration must handle evolving API schemas. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use typed request/response models, contract tests and deliberate SDK/API version management"
    ],
    "answer": 3,
    "explanation": "Use typed request/response models, contract tests and deliberate SDK/API version management. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 11,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a network request fails transiently with HTTP 503. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Retry with bounded exponential backoff and jitter, respecting retry guidance",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Retry with bounded exponential backoff and jitter, respecting retry guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 12,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a request fails with HTTP 422. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Surface actionable validation feedback and correct the request rather than retrying unchanged input",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Surface actionable validation feedback and correct the request rather than retrying unchanged input. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 13,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a payment-like action may be repeated after a timeout. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Use idempotency keys and a durable operation record to prevent duplicate side effects",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Use idempotency keys and a durable operation record to prevent duplicate side effects. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 14,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a model output is used to update a database. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate schema, authorization, business invariants and transaction boundaries in trusted application code",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Validate schema, authorization, business invariants and transaction boundaries in trusted application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 15,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a production deployment changes prompt behavior. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Version prompts, evaluate representative cases and support rollback"
    ],
    "answer": 3,
    "explanation": "Version prompts, evaluate representative cases and support rollback. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 16,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a service must handle many concurrent requests. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded concurrency, queueing, backpressure and explicit timeout budgets",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use bounded concurrency, queueing, backpressure and explicit timeout budgets. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 17,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: an API key is committed to source control. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a system needs an auditable business action. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 19,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a new integration has no stable contract tests. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Add request/response fixtures and tests for success, validation, rate limit and transient failures"
    ],
    "answer": 3,
    "explanation": "Add request/response fixtures and tests for success, validation, rate limit and transient failures. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 20,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a client request is retried by a load balancer. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Make retry semantics explicit and safe for each operation; use idempotency for writes",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Make retry semantics explicit and safe for each operation; use idempotency for writes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: an agent receives stop_reason tool_use. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Execute the requested tool calls, append matching results and continue the loop",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Execute the requested tool calls, append matching results and continue the loop. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 22,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: an agent receives stop_reason end_turn. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "End the current assistant turn and return the final response",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "End the current assistant turn and return the final response. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 23,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a tool call contains multiple tool_use blocks. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate and execute each permitted call, correlate each result and preserve the protocol sequence"
    ],
    "answer": 3,
    "explanation": "Validate and execute each permitted call, correlate each result and preserve the protocol sequence. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 24,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, an agent must perform a high-risk operation. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Insert a human approval step and enforce authorization in the tool implementation",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Insert a human approval step and enforce authorization in the tool implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 25,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a deterministic workflow has fixed stages. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Implement explicit state transitions and use model calls only where they add value"
    ],
    "answer": 3,
    "explanation": "Implement explicit state transitions and use model calls only where they add value. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 26,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: an agent's tool output is large. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Filter, summarize or paginate the result while preserving relevant evidence and provenance",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Filter, summarize or paginate the result while preserving relevant evidence and provenance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 27,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a task needs independent specialist work. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded subagents or parallel tasks and validate their synthesized output"
    ],
    "answer": 3,
    "explanation": "Use bounded subagents or parallel tasks and validate their synthesized output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 28,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that an agent tool returns a permission error. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Surface the permission failure and stop or request an authorized path; do not retry blindly"
    ],
    "answer": 3,
    "explanation": "Surface the permission failure and stop or request an authorized path; do not retry blindly. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 29,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, an agent loop can run indefinitely. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Set maximum iterations, deadlines, budget limits and explicit terminal conditions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Set maximum iterations, deadlines, budget limits and explicit terminal conditions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 30,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a workflow needs a durable checkpoint. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Persist explicit task state and completed side effects with idempotent recovery semantics",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Persist explicit task state and completed side effects with idempotent recovery semantics. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 31,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a repository needs onboarding context. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use a project-level CLAUDE.md and keep it concise, version-controlled and actionable",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use a project-level CLAUDE.md and keep it concise, version-controlled and actionable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 32,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a CI pipeline must run Claude Code unattended. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Use claude -p/--print with explicit input, output format and exit handling",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Use claude -p/--print with explicit input, output format and exit handling. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 33,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a coding task spans many files with architectural choices. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use Plan mode or a discovery phase before applying changes",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use Plan mode or a discovery phase before applying changes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 34,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a task is a one-line deterministic fix. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use a focused direct edit and run the relevant verification",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Use a focused direct edit and run the relevant verification. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 35,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a procedure is reusable but only occasionally needed. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Create a Skill with scoped instructions and metadata",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 2,
    "explanation": "Create a Skill with scoped instructions and metadata. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 36,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a rule applies only to matching source paths. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use path-scoped rules with globs and verify the matching paths"
    ],
    "answer": 3,
    "explanation": "Use path-scoped rules with globs and verify the matching paths. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 37,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a generated patch must be reviewed. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Inspect the diff, run focused tests, lint/type checks and relevant integration checks",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Inspect the diff, run focused tests, lint/type checks and relevant integration checks. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 38,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a command might change production data. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Constrain allowed tools and require explicit approval or a safe environment",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Constrain allowed tools and require explicit approval or a safe environment. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 39,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a team wants shared slash commands. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Commit them in the project command directory"
    ],
    "answer": 3,
    "explanation": "Commit them in the project command directory. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 40,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a bug report is vague. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Ask targeted questions, reproduce, inspect traces and isolate the smallest failing layer"
    ],
    "answer": 3,
    "explanation": "Ask targeted questions, reproduce, inspect traces and isolate the smallest failing layer. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a parser consumes model-generated JSON. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Validate against a schema and reject or repair invalid data through a bounded path",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Validate against a schema and reject or repair invalid data through a bounded path. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 42,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a prompt includes user-supplied document text. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Mark the document as untrusted data and prevent it from overriding instructions",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Mark the document as untrusted data and prevent it from overriding instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a task has strict classification labels. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Enumerate allowed labels, define boundary cases and validate the returned value"
    ],
    "answer": 3,
    "explanation": "Enumerate allowed labels, define boundary cases and validate the returned value. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a context window is nearing capacity. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Prune irrelevant tool output and compact older context while preserving task state"
    ],
    "answer": 3,
    "explanation": "Prune irrelevant tool output and compact older context while preserving task state. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 45,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a response may contain unsupported claims. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Require evidence or source references and validate claims against trusted data",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Require evidence or source references and validate claims against trusted data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 46,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a prompt needs repeatable behavior. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use examples, explicit constraints and an evaluation set that covers representative edge cases"
    ],
    "answer": 3,
    "explanation": "Use examples, explicit constraints and an evaluation set that covers representative edge cases. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 47,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a model may return an unknown value. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Define null/unknown handling and ensure downstream code supports it"
    ],
    "answer": 3,
    "explanation": "Define null/unknown handling and ensure downstream code supports it. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 48,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that static prompt content is reused across calls. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Place stable prefixes consistently and use prompt caching where supported"
    ],
    "answer": 3,
    "explanation": "Place stable prefixes consistently and use prompt caching where supported. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 49,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a tool result contains instruction-like text. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Treat it as untrusted output and keep it separate from trusted instructions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Treat it as untrusted output and keep it separate from trusted instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 50,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a model output drives a UI action. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use typed validation, safe rendering and explicit user confirmation for consequential actions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Use typed validation, safe rendering and explicit user confirmation for consequential actions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a prompt injection attempts to exfiltrate secrets. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Keep secrets out of model context and enforce access controls outside the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Keep secrets out of model context and enforce access controls outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: a user can request a restricted tool. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Enforce authorization server-side for every call, regardless of model intent",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Enforce authorization server-side for every call, regardless of model intent. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 53,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a log pipeline captures sensitive content. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Minimize, redact and restrict access to sensitive fields with retention controls",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Minimize, redact and restrict access to sensitive fields with retention controls. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 54,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a tool can delete customer data. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use least privilege, scoped access, approval, audit and reversible safeguards where possible"
    ],
    "answer": 3,
    "explanation": "Use least privilege, scoped access, approval, audit and reversible safeguards where possible. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a prompt change is ready for release. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Run regression evals and compare quality, safety and operational metrics"
    ],
    "answer": 3,
    "explanation": "Run regression evals and compare quality, safety and operational metrics. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 56,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A platform team encounters this situation: a production trace shows a wrong final answer. Which implementation choice is most appropriate? Which implementation decision is most appropriate?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Isolate whether the cause is model output, bad tool data, incorrect parameters, truncation or orchestration",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 2,
    "explanation": "Isolate whether the cause is model output, bad tool data, incorrect parameters, truncation or orchestration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. During a production design review, the team observes: an evaluator dataset leaks into prompt examples. What should the engineer recommend? Which implementation decision is most appropriate?",
    "options": [
      "Separate evaluation data from tuning examples and protect holdout integrity",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Separate evaluation data from tuning examples and protect holdout integrity. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 58,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A delivery team is validating its solution and finds that a service needs robust error recovery. Which response best addresses the requirement? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Classify transient, validation, permission and business errors and apply category-specific handling"
    ],
    "answer": 3,
    "explanation": "Classify transient, validation, permission and business errors and apply category-specific handling. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 59,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. In a scenario-based assessment, a tool is granted more permissions than required. Which action is the strongest engineering choice? Which implementation decision is most appropriate?",
    "options": [
      "Reduce scopes to the minimum needed and isolate credentials by function",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Reduce scopes to the minimum needed and isolate credentials by function. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 60,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A regulated product team is preparing a production release. A service owner asks how to handle this case: a model appears accurate in aggregate but fails a critical subgroup. What is the most reliable approach? Which implementation decision is most appropriate?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Slice evaluations by scenario, risk and user segment and add targeted cases",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Slice evaluations by scenario, risk and user segment and add targeted cases. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 61,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a service needs to preserve multi-turn conversation state with the Messages API. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Resend the relevant conversation history on each request because the Messages API is stateless",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Resend the relevant conversation history on each request because the Messages API is stateless. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a user-facing application needs lower perceived response latency. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use streaming and render validated incremental content appropriately",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Use streaming and render validated incremental content appropriately. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 63,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a bulk classification job can complete asynchronously. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use the Batch API when its asynchronous completion model fits the deadline"
    ],
    "answer": 3,
    "explanation": "Use the Batch API when its asynchronous completion model fits the deadline. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 64,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a response ends with max_tokens-related truncation. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Inspect stop_reason and usage, then continue or resize the output budget safely",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Inspect stop_reason and usage, then continue or resize the output budget safely. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: an application must accept image and text input. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Construct supported multimodal content blocks and validate input size/type before sending",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Construct supported multimodal content blocks and validate input size/type before sending. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 66,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a team deploys through a cloud model provider. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 67,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a long-running request must be cancelled or timed out. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Implement application-level deadlines, cancellation handling and cleanup"
    ],
    "answer": 3,
    "explanation": "Implement application-level deadlines, cancellation handling and cleanup. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a service needs to correlate API usage to customers and features. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Capture request identifiers and token usage securely with appropriate tenant attribution"
    ],
    "answer": 3,
    "explanation": "Capture request identifiers and token usage securely with appropriate tenant attribution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a system prompt must remain separate from user input. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Pass trusted system instructions through the system field and user content as message data",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Pass trusted system instructions through the system field and user content as message data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 70,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: an integration must handle evolving API schemas. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use typed request/response models, contract tests and deliberate SDK/API version management"
    ],
    "answer": 3,
    "explanation": "Use typed request/response models, contract tests and deliberate SDK/API version management. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a network request fails transiently with HTTP 503. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Retry with bounded exponential backoff and jitter, respecting retry guidance",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Retry with bounded exponential backoff and jitter, respecting retry guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a request fails with HTTP 422. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Surface actionable validation feedback and correct the request rather than retrying unchanged input",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Surface actionable validation feedback and correct the request rather than retrying unchanged input. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a payment-like action may be repeated after a timeout. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Use idempotency keys and a durable operation record to prevent duplicate side effects",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Use idempotency keys and a durable operation record to prevent duplicate side effects. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 74,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a model output is used to update a database. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate schema, authorization, business invariants and transaction boundaries in trusted application code",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Validate schema, authorization, business invariants and transaction boundaries in trusted application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 75,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a production deployment changes prompt behavior. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Version prompts, evaluate representative cases and support rollback"
    ],
    "answer": 3,
    "explanation": "Version prompts, evaluate representative cases and support rollback. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 76,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a service must handle many concurrent requests. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded concurrency, queueing, backpressure and explicit timeout budgets",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use bounded concurrency, queueing, backpressure and explicit timeout budgets. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 77,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: an API key is committed to source control. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 78,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a system needs an auditable business action. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a new integration has no stable contract tests. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Add request/response fixtures and tests for success, validation, rate limit and transient failures"
    ],
    "answer": 3,
    "explanation": "Add request/response fixtures and tests for success, validation, rate limit and transient failures. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a client request is retried by a load balancer. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Make retry semantics explicit and safe for each operation; use idempotency for writes",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Make retry semantics explicit and safe for each operation; use idempotency for writes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 81,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: an agent receives stop_reason tool_use. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Execute the requested tool calls, append matching results and continue the loop",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Execute the requested tool calls, append matching results and continue the loop. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: an agent receives stop_reason end_turn. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "End the current assistant turn and return the final response",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "End the current assistant turn and return the final response. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 83,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a tool call contains multiple tool_use blocks. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate and execute each permitted call, correlate each result and preserve the protocol sequence"
    ],
    "answer": 3,
    "explanation": "Validate and execute each permitted call, correlate each result and preserve the protocol sequence. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, an agent must perform a high-risk operation. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Insert a human approval step and enforce authorization in the tool implementation",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Insert a human approval step and enforce authorization in the tool implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a deterministic workflow has fixed stages. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Implement explicit state transitions and use model calls only where they add value"
    ],
    "answer": 3,
    "explanation": "Implement explicit state transitions and use model calls only where they add value. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 86,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: an agent's tool output is large. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Filter, summarize or paginate the result while preserving relevant evidence and provenance",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Filter, summarize or paginate the result while preserving relevant evidence and provenance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a task needs independent specialist work. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded subagents or parallel tasks and validate their synthesized output"
    ],
    "answer": 3,
    "explanation": "Use bounded subagents or parallel tasks and validate their synthesized output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 88,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that an agent tool returns a permission error. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Surface the permission failure and stop or request an authorized path; do not retry blindly"
    ],
    "answer": 3,
    "explanation": "Surface the permission failure and stop or request an authorized path; do not retry blindly. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 89,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, an agent loop can run indefinitely. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Set maximum iterations, deadlines, budget limits and explicit terminal conditions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Set maximum iterations, deadlines, budget limits and explicit terminal conditions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 90,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a workflow needs a durable checkpoint. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Persist explicit task state and completed side effects with idempotent recovery semantics",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Persist explicit task state and completed side effects with idempotent recovery semantics. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 91,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a repository needs onboarding context. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use a project-level CLAUDE.md and keep it concise, version-controlled and actionable",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use a project-level CLAUDE.md and keep it concise, version-controlled and actionable. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 92,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a CI pipeline must run Claude Code unattended. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Use claude -p/--print with explicit input, output format and exit handling",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Use claude -p/--print with explicit input, output format and exit handling. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 93,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a coding task spans many files with architectural choices. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use Plan mode or a discovery phase before applying changes",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use Plan mode or a discovery phase before applying changes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 94,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a task is a one-line deterministic fix. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use a focused direct edit and run the relevant verification",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Use a focused direct edit and run the relevant verification. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a procedure is reusable but only occasionally needed. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Create a Skill with scoped instructions and metadata",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 2,
    "explanation": "Create a Skill with scoped instructions and metadata. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 96,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a rule applies only to matching source paths. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use path-scoped rules with globs and verify the matching paths"
    ],
    "answer": 3,
    "explanation": "Use path-scoped rules with globs and verify the matching paths. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 97,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a generated patch must be reviewed. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Inspect the diff, run focused tests, lint/type checks and relevant integration checks",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Inspect the diff, run focused tests, lint/type checks and relevant integration checks. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 98,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a command might change production data. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Constrain allowed tools and require explicit approval or a safe environment",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Constrain allowed tools and require explicit approval or a safe environment. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 99,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a team wants shared slash commands. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Commit them in the project command directory"
    ],
    "answer": 3,
    "explanation": "Commit them in the project command directory. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 100,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a bug report is vague. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Ask targeted questions, reproduce, inspect traces and isolate the smallest failing layer"
    ],
    "answer": 3,
    "explanation": "Ask targeted questions, reproduce, inspect traces and isolate the smallest failing layer. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a parser consumes model-generated JSON. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Validate against a schema and reject or repair invalid data through a bounded path",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Validate against a schema and reject or repair invalid data through a bounded path. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a prompt includes user-supplied document text. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Mark the document as untrusted data and prevent it from overriding instructions",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Mark the document as untrusted data and prevent it from overriding instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 103,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a task has strict classification labels. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Enumerate allowed labels, define boundary cases and validate the returned value"
    ],
    "answer": 3,
    "explanation": "Enumerate allowed labels, define boundary cases and validate the returned value. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a context window is nearing capacity. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Prune irrelevant tool output and compact older context while preserving task state"
    ],
    "answer": 3,
    "explanation": "Prune irrelevant tool output and compact older context while preserving task state. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a response may contain unsupported claims. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Require evidence or source references and validate claims against trusted data",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Require evidence or source references and validate claims against trusted data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 106,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a prompt needs repeatable behavior. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use examples, explicit constraints and an evaluation set that covers representative edge cases"
    ],
    "answer": 3,
    "explanation": "Use examples, explicit constraints and an evaluation set that covers representative edge cases. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a model may return an unknown value. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Define null/unknown handling and ensure downstream code supports it"
    ],
    "answer": 3,
    "explanation": "Define null/unknown handling and ensure downstream code supports it. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 108,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that static prompt content is reused across calls. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Place stable prefixes consistently and use prompt caching where supported"
    ],
    "answer": 3,
    "explanation": "Place stable prefixes consistently and use prompt caching where supported. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a tool result contains instruction-like text. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Treat it as untrusted output and keep it separate from trusted instructions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Treat it as untrusted output and keep it separate from trusted instructions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a model output drives a UI action. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use typed validation, safe rendering and explicit user confirmation for consequential actions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Use typed validation, safe rendering and explicit user confirmation for consequential actions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a prompt injection attempts to exfiltrate secrets. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Keep secrets out of model context and enforce access controls outside the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Keep secrets out of model context and enforce access controls outside the model. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: a user can request a restricted tool. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Enforce authorization server-side for every call, regardless of model intent",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Enforce authorization server-side for every call, regardless of model intent. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a log pipeline captures sensitive content. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Minimize, redact and restrict access to sensitive fields with retention controls",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Minimize, redact and restrict access to sensitive fields with retention controls. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a tool can delete customer data. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use least privilege, scoped access, approval, audit and reversible safeguards where possible"
    ],
    "answer": 3,
    "explanation": "Use least privilege, scoped access, approval, audit and reversible safeguards where possible. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 115,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a prompt change is ready for release. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Run regression evals and compare quality, safety and operational metrics"
    ],
    "answer": 3,
    "explanation": "Run regression evals and compare quality, safety and operational metrics. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 116,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A platform team encounters this situation: a production trace shows a wrong final answer. Which implementation choice is most appropriate? What should the team do to address the requirement?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Isolate whether the cause is model output, bad tool data, incorrect parameters, truncation or orchestration",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 2,
    "explanation": "Isolate whether the cause is model output, bad tool data, incorrect parameters, truncation or orchestration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 117,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. During a production design review, the team observes: an evaluator dataset leaks into prompt examples. What should the engineer recommend? What should the team do to address the requirement?",
    "options": [
      "Separate evaluation data from tuning examples and protect holdout integrity",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Separate evaluation data from tuning examples and protect holdout integrity. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 118,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A delivery team is validating its solution and finds that a service needs robust error recovery. Which response best addresses the requirement? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Classify transient, validation, permission and business errors and apply category-specific handling"
    ],
    "answer": 3,
    "explanation": "Classify transient, validation, permission and business errors and apply category-specific handling. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 119,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. In a scenario-based assessment, a tool is granted more permissions than required. Which action is the strongest engineering choice? What should the team do to address the requirement?",
    "options": [
      "Reduce scopes to the minimum needed and isolate credentials by function",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Reduce scopes to the minimum needed and isolate credentials by function. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 120,
    "difficulty": "medium",
    "category": "security,-safety-and-evaluation",
    "question": "A senior engineer is reviewing a failed integration test. A service owner asks how to handle this case: a model appears accurate in aggregate but fails a critical subgroup. What is the most reliable approach? What should the team do to address the requirement?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Slice evaluations by scenario, risk and user segment and add targeted cases",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Slice evaluations by scenario, risk and user segment and add targeted cases. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: a service needs to preserve multi-turn conversation state with the Messages API. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Resend the relevant conversation history on each request because the Messages API is stateless",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Resend the relevant conversation history on each request because the Messages API is stateless. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 122,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: a user-facing application needs lower perceived response latency. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Use streaming and render validated incremental content appropriately",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Use streaming and render validated incremental content appropriately. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 123,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that a bulk classification job can complete asynchronously. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use the Batch API when its asynchronous completion model fits the deadline"
    ],
    "answer": 3,
    "explanation": "Use the Batch API when its asynchronous completion model fits the deadline. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 124,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, a response ends with max_tokens-related truncation. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Inspect stop_reason and usage, then continue or resize the output budget safely",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 1,
    "explanation": "Inspect stop_reason and usage, then continue or resize the output budget safely. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 125,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: an application must accept image and text input. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Construct supported multimodal content blocks and validate input size/type before sending",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Construct supported multimodal content blocks and validate input size/type before sending. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: a team deploys through a cloud model provider. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Verify provider-specific model identifiers, feature support, limits, authentication and operational behavior. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: a long-running request must be cancelled or timed out. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Implement application-level deadlines, cancellation handling and cleanup"
    ],
    "answer": 3,
    "explanation": "Implement application-level deadlines, cancellation handling and cleanup. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 128,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that a service needs to correlate API usage to customers and features. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Capture request identifiers and token usage securely with appropriate tenant attribution"
    ],
    "answer": 3,
    "explanation": "Capture request identifiers and token usage securely with appropriate tenant attribution. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 129,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, a system prompt must remain separate from user input. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Pass trusted system instructions through the system field and user content as message data",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Pass trusted system instructions through the system field and user content as message data. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 130,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: an integration must handle evolving API schemas. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use typed request/response models, contract tests and deliberate SDK/API version management"
    ],
    "answer": 3,
    "explanation": "Use typed request/response models, contract tests and deliberate SDK/API version management. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: a network request fails transiently with HTTP 503. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Retry with bounded exponential backoff and jitter, respecting retry guidance",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 0,
    "explanation": "Retry with bounded exponential backoff and jitter, respecting retry guidance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: a request fails with HTTP 422. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Surface actionable validation feedback and correct the request rather than retrying unchanged input",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Surface actionable validation feedback and correct the request rather than retrying unchanged input. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that a payment-like action may be repeated after a timeout. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Use idempotency keys and a durable operation record to prevent duplicate side effects",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Use idempotency keys and a durable operation record to prevent duplicate side effects. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, a model output is used to update a database. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate schema, authorization, business invariants and transaction boundaries in trusted application code",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Validate schema, authorization, business invariants and transaction boundaries in trusted application code. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: a production deployment changes prompt behavior. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Version prompts, evaluate representative cases and support rollback"
    ],
    "answer": 3,
    "explanation": "Version prompts, evaluate representative cases and support rollback. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 136,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: a service must handle many concurrent requests. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded concurrency, queueing, backpressure and explicit timeout budgets",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 1,
    "explanation": "Use bounded concurrency, queueing, backpressure and explicit timeout budgets. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 137,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: an API key is committed to source control. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Revoke and rotate it, remove it from active history where possible, and move secrets to managed configuration. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 138,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that a system needs an auditable business action. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible"
    ],
    "answer": 0,
    "explanation": "Record actor, authorization decision, action, target, timestamp, outcome and correlation identifiers. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 139,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, a new integration has no stable contract tests. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Add request/response fixtures and tests for success, validation, rate limit and transient failures"
    ],
    "answer": 3,
    "explanation": "Add request/response fixtures and tests for success, validation, rate limit and transient failures. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 140,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: a client request is retried by a load balancer. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Make retry semantics explicit and safe for each operation; use idempotency for writes",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 2,
    "explanation": "Make retry semantics explicit and safe for each operation; use idempotency for writes. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: an agent receives stop_reason tool_use. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Execute the requested tool calls, append matching results and continue the loop",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Execute the requested tool calls, append matching results and continue the loop. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: an agent receives stop_reason end_turn. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "End the current assistant turn and return the final response",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "End the current assistant turn and return the final response. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that a tool call contains multiple tool_use blocks. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Validate and execute each permitted call, correlate each result and preserve the protocol sequence"
    ],
    "answer": 3,
    "explanation": "Validate and execute each permitted call, correlate each result and preserve the protocol sequence. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, an agent must perform a high-risk operation. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Insert a human approval step and enforce authorization in the tool implementation",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 1,
    "explanation": "Insert a human approval step and enforce authorization in the tool implementation. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: a deterministic workflow has fixed stages. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Implement explicit state transitions and use model calls only where they add value"
    ],
    "answer": 3,
    "explanation": "Implement explicit state transitions and use model calls only where they add value. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 146,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A platform team encounters this situation: an agent's tool output is large. Which implementation choice is most appropriate? Which response best controls the identified risk?",
    "options": [
      "Filter, summarize or paginate the result while preserving relevant evidence and provenance",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Filter, summarize or paginate the result while preserving relevant evidence and provenance. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 147,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. During a production design review, the team observes: a task needs independent specialist work. What should the engineer recommend? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Use bounded subagents or parallel tasks and validate their synthesized output"
    ],
    "answer": 3,
    "explanation": "Use bounded subagents or parallel tasks and validate their synthesized output. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 148,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A delivery team is validating its solution and finds that an agent tool returns a permission error. Which response best addresses the requirement? Which response best controls the identified risk?",
    "options": [
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Surface the permission failure and stop or request an authorized path; do not retry blindly"
    ],
    "answer": 3,
    "explanation": "Surface the permission failure and stop or request an authorized path; do not retry blindly. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 149,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. In a scenario-based assessment, an agent loop can run indefinitely. Which action is the strongest engineering choice? Which response best controls the identified risk?",
    "options": [
      "Set maximum iterations, deadlines, budget limits and explicit terminal conditions",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model",
      "Retry or repeat the operation without classifying the failure or checking side effects"
    ],
    "answer": 0,
    "explanation": "Set maximum iterations, deadlines, budget limits and explicit terminal conditions. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "An engineering lead is assessing a proposed system change. A service owner asks how to handle this case: a workflow needs a durable checkpoint. What is the most reliable approach? Which response best controls the identified risk?",
    "options": [
      "Retry or repeat the operation without classifying the failure or checking side effects",
      "Skip instrumentation and accept the result if the response appears plausible",
      "Persist explicit task state and completed side effects with idempotent recovery semantics",
      "Rely on a prompt-only instruction and leave enforcement or validation to the model"
    ],
    "answer": 2,
    "explanation": "Persist explicit task state and completed side effects with idempotent recovery semantics. This is preferred because it addresses the stated requirement with explicit controls and predictable behavior."
  }
];
