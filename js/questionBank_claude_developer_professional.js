/* CLAUDE CERTIFIED DEVELOPER — PROFESSIONAL (CCDV-P) — 113 professional-level practice MCQs. */
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
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "Your agent loop is `while True:` calling the API until stop_reason == 'end_turn'. In production some runs never terminate and one crashed on a tool exception, leaving a paid order half-processed. What is the right implementation?",
    "options": [
      "Keep while True and add a prompt instruction to stop after 10 steps without changing anything else in the design",
      "Catch exceptions and continue the loop so the model can recover on its own and document the decision for the team wiki",
      "A bounded loop with an iteration cap and deadline, try/finally around tool execution, and a single finalise() that always records a resolved or escalated outcome",
      "Add time.sleep between iterations to reduce load and document the decision for the team wiki"
    ],
    "answer": 2,
    "explanation": "Termination and outcome recording must be enforced by code on every exit path. Prompt instructions and swallowed exceptions leave the same gaps."
  },
  {
    "id": 62,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "Which stop_reason handling is correct inside an agent loop?",
    "options": [
      "tool_use: run tools and continue; end_turn: finish; max_tokens: treat as incomplete and retry or escalate; refusal: do not retry blindly, surface or escalate",
      "end_turn: continue; tool_use: finish and rely on that approach for every case",
      "Treat every stop_reason other than tool_use as a final answer and monitor the dashboards for problems afterwards",
      "Ignore stop_reason and check whether the text contains 'done' and monitor the dashboards for problems afterwards"
    ],
    "answer": 0,
    "explanation": "Each stop_reason has distinct semantics. Truncation and refusal are not successful completions."
  },
  {
    "id": 63,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A tool_use block is cut off by max_tokens. Your code json.loads the partial input and executes the tool. What is wrong?",
    "options": [
      "Nothing, since json.loads validates the arguments without changing anything else in the design",
      "The tool should run twice to confirm, on the assumption that the model will cooperate",
      "max_tokens only affects text blocks and monitor the dashboards for problems afterwards",
      "Arguments from a truncated block are unreliable; the turn must be treated as incomplete and never executed"
    ],
    "answer": 3,
    "explanation": "A parse that happens to succeed on a truncated input still may omit fields. Side-effecting tools must not run on incomplete calls."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A tool call raises a timeout. How should the loop report it to the model?",
    "options": [
      "Skip the tool_result so the model asks again and monitor the dashboards for problems afterwards",
      "Return a tool_result with is_error true and structured detail (category, retryable, message) for the same tool_use_id",
      "Raise the exception out of the loop and drop the session, then review the outcome after the next release",
      "Return an empty string as content and monitor the dashboards for problems afterwards"
    ],
    "answer": 1,
    "explanation": "Every tool_use needs a matching tool_result. is_error with structured information lets the model reason about retry or escalation."
  },
  {
    "id": 65,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "Where should the 'every session ends resolved or escalated' guarantee be implemented?",
    "options": [
      "In the orchestration code that owns the loop, with a watchdog for sessions that die without an outcome",
      "In the system prompt as a numbered rule and document the decision for the team wiki",
      "In the model's tool descriptions and monitor the dashboards for problems afterwards",
      "In a retry decorator on the HTTP client, keeping the existing flow otherwise unchanged"
    ],
    "answer": 0,
    "explanation": "Only application code sees all failure modes, including process death. The model cannot guarantee it."
  },
  {
    "id": 66,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "A prompt that converts messy addresses to a normalised format fails on edge cases. Which refinement is most effective?",
    "options": [
      "Add more descriptive sentences about normalisation, keeping the existing flow otherwise unchanged",
      "Increase temperature to encourage variety, keeping the existing flow otherwise unchanged",
      "Switch to a bigger model without changing the prompt, keeping the existing flow otherwise unchanged",
      "Add several input/output example pairs covering the failing cases and re-run the evaluation set"
    ],
    "answer": 3,
    "explanation": "Concrete examples of the transformation outperform prose and are measurable against an eval set."
  },
  {
    "id": 67,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "You have 6 failing cases that all stem from one ambiguous instruction about currency symbols. How should you iterate?",
    "options": [
      "Patch each case with its own special-case rule and monitor the dashboards for problems afterwards",
      "Describe the failure pattern with the specific cases, fix the instruction once, and re-run the whole set to check for regressions",
      "Retrain the prompt from scratch and monitor the dashboards for problems afterwards",
      "Ship it and monitor and document the decision for the team wiki"
    ],
    "answer": 1,
    "explanation": "Group related failures into one targeted change, then evaluate everything to catch regressions."
  },
  {
    "id": 68,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "For a new utility with clear acceptance criteria, which Claude Code workflow gives the most dependable refinement?",
    "options": [
      "Implement first and write tests at the end and document the decision for the team wiki",
      "Describe the feature in prose and review visually, on the assumption that the model will cooperate",
      "Write the failing tests first, then have Claude implement and iterate against those tests",
      "Generate multiple versions and pick one by eye and treat any remaining failures as edge cases"
    ],
    "answer": 2,
    "explanation": "Tests give objective, specific feedback for each iteration."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "CLAUDE.md forbids reading .env, yet a log shows it was read once. How do you make the rule reliable?",
    "options": [
      "Repeat the instruction three times in CLAUDE.md, keeping the existing flow otherwise unchanged",
      "Add it to the first user message each session, then review the outcome after the next release",
      "Add a permissions deny rule for reading .env in settings, since CLAUDE.md is advisory",
      "Rename .env to .env.local, then review the outcome after the next release"
    ],
    "answer": 2,
    "explanation": "Permissions are enforced by the tool layer. CLAUDE.md is context the model may weigh against other instructions."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "You need code formatted on every Claude edit regardless of model behaviour. Which mechanism?",
    "options": [
      "A PostToolUse hook on the edit and write tools that runs the formatter",
      "A paragraph in CLAUDE.md, since that has worked in earlier projects",
      "A custom slash command without changing anything else in the design",
      "A Skill with formatting instructions and rely on that approach for every case"
    ],
    "answer": 0,
    "explanation": "Hooks run deterministically as part of the tool lifecycle."
  },
  {
    "id": 71,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "Which belongs in a .claude/rules file with a paths glob?",
    "options": [
      "A global rule about commit message tone, which is simpler than adding extra controls",
      "A deny rule blocking secrets, keeping the existing flow otherwise unchanged",
      "A reusable multi-step workflow and document the decision for the team wiki",
      "Conventions that apply only to files matching, for example, src/api/**/*.ts"
    ],
    "answer": 3,
    "explanation": "Path-scoped rules load conditionally for matching files. Permissions and workflows belong elsewhere."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A PreToolUse hook is meant to block writes to a protected directory. What must it do to block the call?",
    "options": [
      "Exit 0 and print a warning and monitor the dashboards for problems afterwards",
      "Exit with the blocking status (exit code 2) and write the reason to stderr so Claude can see why",
      "Delete the file after it is written and document the decision for the team wiki",
      "Log the attempt and let it continue and document the decision for the team wiki"
    ],
    "answer": 1,
    "explanation": "A blocking exit code stops the tool call and returns the message to the model; exit 0 allows it."
  },
  {
    "id": 73,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "Which is the correct place for conventions every teammate's session should follow?",
    "options": [
      "The committed project CLAUDE.md, with @ imports to keep large sections modular",
      "Each developer's ~/.claude/CLAUDE.md and document the decision for the team wiki",
      "A comment in the first source file and monitor the dashboards for problems afterwards",
      "A message pasted at the start of each session and rely on that approach for every case"
    ],
    "answer": 0,
    "explanation": "Project CLAUDE.md is shared via version control. User files and pasted text are not."
  },
  {
    "id": 74,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "You need Claude to read one specific design doc for this task only. What is the best approach?",
    "options": [
      "Add the doc to CLAUDE.md, keeping the existing flow otherwise unchanged",
      "Create a hook to inject it and monitor the dashboards for problems afterwards",
      "Describe it from memory and monitor the dashboards for problems afterwards",
      "An @ reference to the file in the prompt"
    ],
    "answer": 3,
    "explanation": "@ references pull a specific file into this request without permanent context cost."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "A CLAUDE.md has grown to 1,100 lines. Which change keeps always-on context small without losing guidance?",
    "options": [
      "Truncate to the first 200 lines, on the assumption that the model will cooperate",
      "Break it into imported files and move file-type specifics into path-scoped rules or on-demand Skills",
      "Convert it to a single paragraph, then review the outcome after the next release",
      "Remove all rules that were not violated last week and monitor the dashboards for problems afterwards"
    ],
    "answer": 1,
    "explanation": "Modular imports plus conditional loading reduce always-on tokens while preserving coverage."
  },
  {
    "id": 76,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "Implement escalation for a customer-service agent. Which rule set is correct?",
    "options": [
      "Escalate whenever sentiment score is below zero without changing anything else in the design",
      "Escalate when the model says it is under 70% confident, since that has worked in earlier projects",
      "Escalate on explicit human request, policy gaps or repeated failed attempts; do not escalate on sentiment or self-reported confidence alone",
      "Never escalate; always attempt resolution, on the assumption that the model will cooperate"
    ],
    "answer": 2,
    "explanation": "Observable, explicit triggers are reliable. Sentiment and self-reported confidence are weak proxies."
  },
  {
    "id": 77,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "A user types 'I want to talk to a person.' What should the code path do?",
    "options": [
      "Run one more lookup first, since that has worked in earlier projects",
      "Ask whether they are sure without changing anything else in the design",
      "Skip further tool attempts and hand off immediately with a structured summary",
      "Offer a coupon and monitor the dashboards for problems afterwards"
    ],
    "answer": 2,
    "explanation": "An explicit request is honoured at once; investigation first overrides the user."
  },
  {
    "id": 78,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A lookup tool returns multiple matching customers. The code picks results[0]. What is the safer design?",
    "options": [
      "Detect the multiple-match case and ask the user for a distinguishing identifier before proceeding",
      "Pick the newest record, on the assumption that the model will cooperate",
      "Pick the record with the highest match score and rely on that approach for every case",
      "Escalate every such case and treat any remaining failures as edge cases"
    ],
    "answer": 0,
    "explanation": "Guessing acts on potentially the wrong person. Asking for an identifier resolves ambiguity safely."
  },
  {
    "id": 79,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A request falls outside every documented policy (competitor price matching). What should the implementation do?",
    "options": [
      "Let the model decide by analogy and monitor the dashboards for problems afterwards",
      "Reject automatically and treat any remaining failures as edge cases",
      "Offer the largest discount allowed, since that has worked in earlier projects",
      "Escalate with the context, because inventing policy is not the agent's authority"
    ],
    "answer": 3,
    "explanation": "A policy gap is a legitimate escalation trigger."
  },
  {
    "id": 80,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "In the Python SDK, which parameter value forces Claude to call a tool named extract_invoice?",
    "options": [
      "tool_choice=\"extract_invoice\", on the assumption that the model will cooperate",
      "tool_choice={\"type\": \"tool\", \"name\": \"extract_invoice\"}",
      "tool_choice={\"type\": \"auto\"}, keeping the existing flow otherwise unchanged",
      "tools=[\"extract_invoice\"] only, which is simpler than adding extra controls"
    ],
    "answer": 1,
    "explanation": "A forced named tool uses type tool plus the name. auto lets the model answer in text."
  },
  {
    "id": 81,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "A response parser fails because about 3% of replies contain prose and no tool_use block. The request uses tool_choice auto. What is the most reliable fix?",
    "options": [
      "Use tool_choice forcing the tool (or any when there is one tool) so the response always contains a tool_use block",
      "Retry until a tool_use appears without changing anything else in the design",
      "Add 'respond only with JSON' to the system prompt, then review the outcome after the next release",
      "Parse JSON from the prose with a regex fallback, then review the outcome after the next release"
    ],
    "answer": 0,
    "explanation": "Forcing removes the text-only option at the API level; prompts and retries do not guarantee it."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "Extended thinking is enabled and the request sets a forced tool_choice. What happens?",
    "options": [
      "It works and the thinking tokens are hidden and rely on that approach for every case",
      "The tool is called but thinking is dropped and rely on that approach for every case",
      "It works only with the batches API and rely on that approach for every case",
      "The API rejects it; with thinking, tool_choice must be auto or none"
    ],
    "answer": 3,
    "explanation": "Forced tool choice and extended thinking are incompatible, so choose one or use auto with validation."
  },
  {
    "id": 83,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An agent must call lookup_customer before issue_refund. Which implementation prevents a refund with an unverified customer?",
    "options": [
      "A system prompt line saying to look up the customer first, which is simpler than adding extra controls",
      "A guard in the tool executor that rejects issue_refund unless a verified lookup result exists in session state",
      "Ordering the tools list with lookup first and monitor the dashboards for problems afterwards",
      "A comment in the tool description, which is simpler than adding extra controls"
    ],
    "answer": 1,
    "explanation": "Order on a consequential action must be enforced in code. The model's compliance with prompt order is probabilistic."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "tool use with a JSON schema returns valid JSON but 'total' differs from the sum of 'line_items'. What is the correct response?",
    "options": [
      "Regenerate the JSON schema, on the assumption that the model will cooperate",
      "Assume the schema is not strict enough and add more fields and rely on that approach for every case",
      "Add semantic validation (sum check) and retry with the specific validation error appended",
      "Accept it, since the JSON is valid, since that has worked in earlier projects"
    ],
    "answer": 2,
    "explanation": "Schemas guarantee shape, not meaning. Validate semantics in code and feed back the exact error."
  },
  {
    "id": 85,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A required field 'tax_id' causes fabricated values for documents that have none. What is the fix?",
    "options": [
      "Add a pattern regex for plausible IDs without changing anything else in the design",
      "Keep it required and add 'do not guess' without changing anything else in the design",
      "Declare the field as nullable or optional (type [\"string\",\"null\"]) and instruct the model to return null when absent",
      "Make the whole schema free text, which is simpler than adding extra controls"
    ],
    "answer": 2,
    "explanation": "A required field cannot represent absence honestly. Nullable fields can."
  },
  {
    "id": 86,
    "difficulty": "medium",
    "category": "prompt,-context-and-output-handling",
    "question": "Which enum design best handles categories you cannot fully enumerate and ambiguous documents?",
    "options": [
      "Include 'other' with a detail string and an 'unclear' value",
      "Only the known categories and rely on that approach for every case",
      "A free-text field with no constraints and document the decision for the team wiki",
      "A default of the most common category and treat any remaining failures as edge cases"
    ],
    "answer": 0,
    "explanation": "Escape values avoid forced misclassification and keep the output structured."
  },
  {
    "id": 87,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "Extraction accuracy varies widely across invoice layouts. Which combination best improves consistency?",
    "options": [
      "A longer free-text system prompt and treat any remaining failures as edge cases",
      "Higher temperature, keeping the existing flow otherwise unchanged",
      "A single example from the most common layout and document the decision for the team wiki",
      "Structured schema with optional fields, format normalisation instructions, and few-shot examples from different layouts"
    ],
    "answer": 3,
    "explanation": "Normalisation rules plus varied few-shot examples reduce layout sensitivity."
  },
  {
    "id": 88,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "Your chat service forwards only the newest user message and the model loses context. What is the root cause?",
    "options": [
      "The API expires context after one minute and document the decision for the team wiki",
      "The Messages API is stateless, so the full relevant message history must be sent with each request",
      "Missing an API header and document the decision for the team wiki",
      "The model has no memory by design flaw, keeping the existing flow otherwise unchanged"
    ],
    "answer": 1,
    "explanation": "Conversation state belongs to the caller."
  },
  {
    "id": 89,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "Where should conversation history be authoritative in a multi-tenant app?",
    "options": [
      "On the server, keyed by authenticated session, with roles and tool_result turns built by the server",
      "In the browser, sent back each turn and monitor the dashboards for problems afterwards",
      "In a cookie the user can edit and monitor the dashboards for problems afterwards",
      "Inside the system prompt, keeping the existing flow otherwise unchanged"
    ],
    "answer": 0,
    "explanation": "Client-supplied history can be forged, including fake assistant or tool_result turns."
  },
  {
    "id": 90,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "Which approach explores an unfamiliar codebase efficiently in Claude Code?",
    "options": [
      "Read every file up front, on the assumption that the model will cooperate",
      "Glob and read all matching files and monitor the dashboards for problems afterwards",
      "Ask for a summary from memory and monitor the dashboards for problems afterwards",
      "Grep for entry points or symbols, Read the relevant files, and follow imports incrementally"
    ],
    "answer": 3,
    "explanation": "Incremental search-then-read manages context while building understanding."
  },
  {
    "id": 91,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "Two tools, search_tickets and get_ticket, are confused by the model. What is the first thing to try?",
    "options": [
      "Add a classifier model to route tool selection, on the assumption that the model will cooperate",
      "Rewrite the descriptions with purpose, input format, examples and an explicit contrast between the tools",
      "Combine them into one tool and rely on that approach for every case",
      "Lower temperature, then review the outcome after the next release"
    ],
    "answer": 1,
    "explanation": "Descriptions drive selection. Fix them before adding routing layers."
  },
  {
    "id": 92,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "Where does a shared MCP server configuration with a secret belong?",
    "options": [
      "In .mcp.json with the token hard-coded and document the decision for the team wiki",
      "In ~/.claude.json for the whole team, then review the outcome after the next release",
      "In a committed .mcp.json that references the secret as ${ENV_VAR}",
      "In CLAUDE.md, keeping the existing flow otherwise unchanged"
    ],
    "answer": 2,
    "explanation": "Project scope shares the configuration; environment expansion keeps secrets out of version control."
  },
  {
    "id": 93,
    "difficulty": "hard",
    "category": "claude-code-engineering-workflows",
    "question": "After resuming a long session, two files were changed by a colleague. What is the best action?",
    "options": [
      "Trust the prior analysis, on the assumption that the model will cooperate",
      "Start a new session from scratch always and document the decision for the team wiki",
      "Tell the resumed session exactly which files changed so it re-analyses those only",
      "Re-read the whole repository, on the assumption that the model will cooperate"
    ],
    "answer": 2,
    "explanation": "Targeted re-analysis preserves valid findings."
  },
  {
    "id": 94,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "Which task is best suited to plan mode?",
    "options": [
      "A multi-file refactor with several viable approaches that needs sign-off before changes",
      "Fixing a typo in a README without changing anything else in the design",
      "Renaming one local variable, then review the outcome after the next release",
      "Running an already-written script, then review the outcome after the next release"
    ],
    "answer": 0,
    "explanation": "Plan mode fits uncertainty, scope and review needs."
  },
  {
    "id": 95,
    "difficulty": "medium",
    "category": "agents-and-workflow-implementation",
    "question": "For open-ended 'improve reliability of this service', which decomposition is best?",
    "options": [
      "A fixed seven-step chain and document the decision for the team wiki",
      "One undifferentiated task and treat any remaining failures as edge cases",
      "Alphabetical file processing and document the decision for the team wiki",
      "Dynamically generate and revise subtasks as findings are discovered"
    ],
    "answer": 3,
    "explanation": "Unpredictable work needs adaptive planning."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "A resumed agent repeats expensive lookups. What fixes it?",
    "options": [
      "Trust the model to remember, keeping the existing flow otherwise unchanged",
      "Persist structured findings and inject them on resume, re-running only invalidated steps",
      "Clear session history and monitor the dashboards for problems afterwards",
      "Increase max_tokens and monitor the dashboards for problems afterwards"
    ],
    "answer": 1,
    "explanation": "Durable state, not model memory, preserves prior work."
  },
  {
    "id": 97,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "An MCP tool returns only 'failed' for all errors, causing retry storms. What should change?",
    "options": [
      "Return structured errors with category, retryable flag, message and suggested next action",
      "Return HTTP 200 with empty content and treat any remaining failures as edge cases",
      "Add random delays, since that has worked in earlier projects",
      "Return stack traces and rely on that approach for every case"
    ],
    "answer": 0,
    "explanation": "The agent needs typed, actionable error information to choose retry, reroute or escalate."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "When handing a case to a human reviewer, which package is required?",
    "options": [
      "The raw token usage, on the assumption that the model will cooperate",
      "Only the last user message and monitor the dashboards for problems afterwards",
      "The model's reasoning trace and monitor the dashboards for problems afterwards",
      "Customer ID, root cause, actions taken, amounts, authorisation state and recommended next action"
    ],
    "answer": 3,
    "explanation": "The reviewer has no transcript, so the package must carry facts and authority state."
  },
  {
    "id": 99,
    "difficulty": "hard",
    "category": "agents-and-workflow-implementation",
    "question": "In your refund workflow, specialist agents decide their own next step and the run drifts into invalid states (refund issued before compliance check). Which implementation best prevents this?",
    "options": [
      "Let workers call each other directly and add 'follow the process' to every worker prompt and monitor the dashboards for problems afterwards",
      "A coordinator in code that holds an explicit state machine, allows only valid transitions, and validates each worker result before advancing",
      "Give each worker a longer system prompt describing the complete refund process without changing anything else in the design while leaving the existing controls unchanged",
      "Run the workers in parallel and take the first result that returns and treat any remaining failures as edge cases"
    ],
    "answer": 1,
    "explanation": "State ownership and legal transitions belong in code. Prompts and parallel first-wins are not enforcement."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "After ~30 turns your agent forgets the verified customer ID. Which implementation is best?",
    "options": [
      "Append the full transcript to the system prompt on every request and rely on that approach for every case",
      "Have the model rewrite a free-form memory paragraph after each turn and trust it, which is simpler than adding extra controls while leaving the existing controls unchanged",
      "Switch to a larger model since this is a capability limit and monitor the dashboards for problems afterwards",
      "Store verified fields in a structured session state updated only by tool handlers, and inject the current state into the system or user turn each request"
    ],
    "answer": 3,
    "explanation": "Authoritative business state is written by deterministic code, not summarised freely by the model."
  },
  {
    "id": 101,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "Your pairwise LLM-judge harness always prefers response A. What is the correct fix?",
    "options": [
      "Run each pair in both orders, randomise placement, and check the judge's agreement with human labels before using it as a CI gate",
      "Raise the judge's temperature and rely on that approach for every case",
      "Swap in a larger context window and document the decision for the team wiki",
      "Remove the cases where the judge disagreed with the prompt author, then review the outcome after the next release, which keeps the number of moving parts low"
    ],
    "answer": 0,
    "explanation": "This is position bias. Counterbalance order and calibrate against humans; temperature and context do not address it."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "Prompt caching works in staging but cache reads are near zero in production. The system prompt begins with the current timestamp. What is the likely cause and fix?",
    "options": [
      "Caching only works for the first request of the day, so nothing can be done, which is simpler than adding extra controls",
      "The timestamp must be longer so it exceeds the cache minimum length, keeping the existing flow otherwise unchanged",
      "Volatile content at the start changes the prefix on every call; move it after the cached blocks and put cache_control at the end of the stable prefix",
      "Disable caching because dynamic content cannot be mixed with static content, then review the outcome after the next release"
    ],
    "answer": 2,
    "explanation": "Caching matches an exact prefix. Anything that varies before the breakpoint invalidates it, so keep stable content first."
  },
  {
    "id": 103,
    "difficulty": "hard",
    "category": "software-engineering-and-application-design",
    "question": "A tool wrapper retries a hanging downstream service 5 times with 60-second timeouts and exhausts workers. Which pattern is best?",
    "options": [
      "Short per-call timeouts, bounded retries with jitter, and a circuit breaker that fails fast with a typed error",
      "Raise the timeout to 300 seconds so the service has time to finish, which is simpler than adding extra controls",
      "Retry indefinitely until success, keeping the existing flow otherwise unchanged",
      "Catch the exception and return an empty string to the model, which is simpler than adding extra controls"
    ],
    "answer": 0,
    "explanation": "Fail fast and protect capacity. Long timeouts and unlimited retries increase pile-up; an empty result hides the failure."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "While streaming, your code executes a tool as soon as the first input_json_delta arrives and sometimes runs with malformed arguments. What is the fix?",
    "options": [
      "Execute on the first delta and correct it later with a second call, keeping the existing flow otherwise unchanged while leaving the existing controls unchanged",
      "Disable streaming for the whole application, keeping the existing flow otherwise unchanged",
      "Accumulate the JSON fragments and parse and execute only after the content block has stopped (and not on max_tokens truncation)",
      "Parse each fragment as JSON independently and merge the objects and treat any remaining failures as edge cases"
    ],
    "answer": 2,
    "explanation": "Tool input arrives as partial JSON. Wait for block completion, and never run a call from a truncated stream."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "claude-api-mechanics-and-integration",
    "question": "Before sending a long document plus history, you need to know whether the request will fit within the context window. What should you use?",
    "options": [
      "Divide the character count by four and hope it is accurate, keeping the existing flow otherwise unchanged",
      "The token-counting endpoint, then trim or summarise inputs and tool results if they exceed your budget",
      "Send it and rely on the model to truncate automatically and monitor the dashboards for problems afterwards",
      "Count the number of words in the user's message only, then review the outcome after the next release"
    ],
    "answer": 1,
    "explanation": "Count tokens with the provided endpoint rather than estimating. Handle overflows by design, not by surprise errors."
  },
  {
    "id": 106,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A long agent run accumulates large tool outputs that crowd out instructions. Which is the best remedy?",
    "options": [
      "Keep every tool output in the messages array verbatim without changing anything else in the design",
      "Delete the system prompt to free space, keeping the existing flow otherwise unchanged",
      "Lower max_tokens to keep outputs small and treat any remaining failures as edge cases",
      "Clear or summarise stale tool results while keeping the latest and the structured state, and store raw outputs externally for retrieval if needed"
    ],
    "answer": 3,
    "explanation": "Stale tool results are the cheapest thing to drop. Keep what the next step needs."
  },
  {
    "id": 107,
    "difficulty": "hard",
    "category": "claude-api-mechanics-and-integration",
    "question": "The model returns two tool_use blocks in one assistant turn. Your code sends two separate user messages, one tool_result each, and the next call errors. What is correct?",
    "options": [
      "Return only the first result and discard the second, since that has worked in earlier projects",
      "Return all tool_result blocks in a single user message, each with its matching tool_use_id, placed before any text",
      "Send the results as assistant messages and treat any remaining failures as edge cases",
      "Merge both results into one block and omit the ids without changing anything else in the design"
    ],
    "answer": 1,
    "explanation": "Each tool_use needs a result with its ID in the next user turn, and parallel calls are answered together."
  },
  {
    "id": 108,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A remote MCP server you build uses the access token supplied by the client to call a billing API on the user's behalf. A reviewer rejects it. Why?",
    "options": [
      "Tokens must be rotated every minute without changing anything else in the design",
      "The billing API must accept tokens over HTTP and document the decision for the team wiki",
      "The MCP protocol forbids calling any other service, which is simpler than adding extra controls",
      "Passing the client's token through creates a confused-deputy problem; the server should use its own audience-bound credentials and enforce per-user authorisation"
    ],
    "answer": 3,
    "explanation": "Token passthrough lets a server act with authority it was not issued. Use scoped credentials and authorise each request."
  },
  {
    "id": 109,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A CI pipeline should block a release if a prompt change degrades quality. Outputs vary between runs. What is the best design?",
    "options": [
      "Run a fixed golden set several times, compare aggregate metrics to a threshold with variance in mind, and fail the build on regression",
      "Run each case once and fail on any difference in wording, keeping the existing flow otherwise unchanged and revisit the choice once the pilot is complete",
      "Compare only the first five cases for speed and treat any remaining failures as edge cases",
      "Replace evaluation with manual review before each merge, since that has worked in earlier projects"
    ],
    "answer": 0,
    "explanation": "Handle non-determinism statistically; do not require identical text."
  },
  {
    "id": 110,
    "difficulty": "medium",
    "category": "software-engineering-and-application-design",
    "question": "Your production code calls a moving 'latest' model alias and a nightly job began failing after a provider update. What is the best practice?",
    "options": [
      "Add try/except around every call and monitor the dashboards for problems afterwards",
      "Switch to a bigger model, then review the outcome after the next release",
      "Pin an explicit model version, test candidates against a regression set, and migrate deliberately",
      "Disable the nightly job, since that has worked in earlier projects, then adjust it if reviewers raise concerns"
    ],
    "answer": 2,
    "explanation": "Pinning and testing protects against silent behaviour changes."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "claude-code-engineering-workflows",
    "question": "Two developers want Claude Code sessions to work on different features of the same repository at the same time without clobbering each other's files. What is the clean approach?",
    "options": [
      "Use separate git worktrees (one per session or branch) so each has its own working directory",
      "Run both sessions in the same checkout and ask Claude to be careful, then review the outcome after the next release",
      "Have each session copy the repository into a zip file, on the assumption that the model will cooperate",
      "Let both edit the same branch and resolve conflicts afterwards and rely on that approach for every case"
    ],
    "answer": 0,
    "explanation": "Worktrees isolate working directories and branches, which prevents overlapping edits."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "security,-safety-and-evaluation",
    "question": "A support tool logs full prompts for debugging, and they contain customer PII. Which change best satisfies privacy rules while keeping debuggability?",
    "options": [
      "Log nothing at all in production and monitor the dashboards for problems afterwards",
      "Log everything and mask in the dashboard and monitor the dashboards for problems afterwards",
      "Redact or tokenise PII before logging and sending, log structured spans for each step, and set access controls and retention limits",
      "Log only on weekends and rely on that approach for every case"
    ],
    "answer": 2,
    "explanation": "Minimise the data you store and retain structured traces for observability."
  },
  {
    "id": 113,
    "difficulty": "hard",
    "category": "prompt,-context-and-output-handling",
    "question": "A compliance bot needs to show the source passage for each claim. Which API-level approach is most reliable?",
    "options": [
      "Ask the model to list sources from memory and monitor the dashboards for problems afterwards",
      "Provide the documents and use the citations feature, then verify in code that each cited span exists in the source",
      "Lower temperature and trust the output without changing anything else in the design",
      "Concatenate sources in a random order without changing anything else in the design as most teams do in their first release"
    ],
    "answer": 1,
    "explanation": "Citations tie claims to supplied text and can be machine-verified."
  }
];
