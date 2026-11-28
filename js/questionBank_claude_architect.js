/* ======================================================
CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCAR-F)
====================================================== */

const questionBank = [
  {
    "id": 0,
    "difficulty": "easy",
    "category": "agentic-architecture",
    "question": "In a Claude Agent SDK agentic loop, which signal should determine whether the loop continues for another iteration?",
    "options": [
      "The assistant message contains any text content block",
      "The assistant message contains the phrase \"I am done\"",
      "A fixed iteration counter reaches its configured cap",
      "stop_reason equals \"tool_use\" - execute the requested tools, append results, and call the model again"
    ],
    "answer": 3,
    "explanation": "The documented control flow is: continue while stop_reason is \"tool_use\", terminate when it is \"end_turn\". Parsing natural-language phrases, relying on arbitrary caps as the primary stop, or checking for text blocks are listed anti-patterns."
  },
  {
    "id": 1,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "After executing a requested tool inside an agentic loop, what must happen before the next model call?",
    "options": [
      "The result is discarded and the model re-derives it from memory",
      "The tool result is appended to the conversation history so the model can reason about its next action",
      "The conversation history is cleared to keep the context small",
      "The coordinator rewrites the system prompt with the tool output"
    ],
    "answer": 1,
    "explanation": "Tool results are added to the message history between iterations. That is how the model incorporates new information and decides whether another tool call or a final answer is needed."
  },
  {
    "id": 2,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A team hard-codes the order search -> analyze -> summarize for every request, even trivial ones. Which statement best describes the tradeoff versus model-driven tool selection?",
    "options": [
      "A fixed sequence is predictable but cannot adapt to the request; model-driven selection lets Claude choose the next tool from context",
      "A fixed sequence is always more accurate because Claude cannot reason about tools",
      "Both approaches are identical because the model ignores tool definitions",
      "Model-driven selection cannot be combined with any programmatic checks"
    ],
    "answer": 0,
    "explanation": "The exam distinguishes model-driven decision-making (Claude reasons about the next tool) from pre-configured decision trees. Each has a place, but fixed pipelines waste work on simple queries and cannot adapt."
  },
  {
    "id": 3,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Which loop-termination design is an explicit anti-pattern for agentic loops?",
    "options": [
      "Appending tool results before the next request",
      "Setting an arbitrary iteration cap as the primary mechanism for deciding the task is complete",
      "Terminating when stop_reason is \"end_turn\"",
      "Adding a high iteration cap purely as a runaway safety net alongside stop_reason checks"
    ],
    "answer": 1,
    "explanation": "Caps may exist as a safety backstop, but using them as the primary stop condition, or parsing text for completion, are anti-patterns. The stop_reason is the authoritative signal."
  },
  {
    "id": 4,
    "difficulty": "easy",
    "category": "agentic-architecture",
    "question": "In a hub-and-spoke multi-agent architecture, which component handles inter-subagent communication, error handling, and information routing?",
    "options": [
      "The coordinator agent",
      "A shared global memory that all subagents write to freely",
      "Each subagent directly messages every other subagent",
      "The end user, who relays information manually"
    ],
    "answer": 0,
    "explanation": "Hub-and-spoke routes all subagent communication through the coordinator for observability, consistent error handling, and controlled information flow."
  },
  {
    "id": 5,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A coordinator spawns a synthesis subagent. The synthesis subagent produces a report that ignores everything the search subagent found. What is the most likely cause?",
    "options": [
      "The coordinator's allowedTools included too many tools",
      "The synthesis subagent's tool list was too short",
      "Subagents automatically share memory, so the search subagent's output was overwritten",
      "The coordinator did not include the search findings in the synthesis subagent's prompt; subagents do not inherit the coordinator's context"
    ],
    "answer": 3,
    "explanation": "Subagents operate with isolated context. Anything they need - prior findings, constraints - must be passed explicitly in the prompt."
  },
  {
    "id": 6,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "For a coordinator to be able to spawn subagents with the Claude Agent SDK, which configuration is required?",
    "options": [
      "The coordinator must set tool_choice to \"any\" on every request",
      "allowedTools must include \"Task\" because the Task tool is the mechanism for spawning subagents",
      "The coordinator must run in plan mode",
      "Each subagent must be registered in CLAUDE.md"
    ],
    "answer": 1,
    "explanation": "Subagents are invoked via the Task tool. If \"Task\" is not in the coordinator's allowedTools, it cannot delegate."
  },
  {
    "id": 7,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A research coordinator decomposes the topic \"impact of AI on healthcare\" into only subtasks about radiology imaging. Each subagent performs correctly, yet the final report is badly incomplete. Where is the root cause?",
    "options": [
      "The web search subagent's rate limiting",
      "Overly narrow task decomposition by the coordinator",
      "The document analysis subagent's tool descriptions",
      "The synthesis subagent's formatting instructions"
    ],
    "answer": 1,
    "explanation": "When downstream agents succeed within their assigned scope but coverage is missing, the assignment itself - decomposition - is at fault. Coordinators should partition the full topic breadth."
  },
  {
    "id": 8,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Which coordinator design best reduces wasted work across varied queries?",
    "options": [
      "Analyze each query and dynamically select which subagents to invoke instead of always running the full pipeline",
      "Invoke subagents randomly to diversify results",
      "Always invoke every subagent regardless of query complexity",
      "Let subagents decide independently whether to run"
    ],
    "answer": 0,
    "explanation": "Coordinators should assess query requirements and choose the relevant subagents, rather than routing every query through the entire pipeline."
  },
  {
    "id": 9,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "How can a coordinator best reduce duplicated effort across parallel research subagents?",
    "options": [
      "Remove the synthesis step",
      "Run subagents sequentially so each one repeats the last one's searches",
      "Partition the research scope, assigning distinct subtopics or source types to each subagent",
      "Give every subagent the identical full question"
    ],
    "answer": 2,
    "explanation": "Explicit partitioning of scope (distinct subtopics or source types) minimizes overlap and improves coverage."
  },
  {
    "id": 10,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A coordinator evaluates a first synthesis and finds gaps in coverage. Which pattern best addresses this?",
    "options": [
      "An iterative refinement loop: re-delegate targeted queries to search/analysis subagents, then re-invoke synthesis until coverage is sufficient",
      "Ship the report and note the gaps in a footer",
      "Ask the synthesis subagent to invent the missing sections",
      "Rerun the identical first pass with a larger max_tokens"
    ],
    "answer": 0,
    "explanation": "Iterative refinement lets the coordinator identify gaps, issue targeted follow-up delegations, and re-synthesize until quality criteria are met."
  },
  {
    "id": 11,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "How should a coordinator spawn three independent research subagents to minimize latency?",
    "options": [
      "Use a single subagent with three times the prompt length",
      "Emit one Task call per turn across three separate turns",
      "Emit multiple Task tool calls in a single coordinator response so they run in parallel",
      "Spawn one subagent and have it spawn the others"
    ],
    "answer": 2,
    "explanation": "Parallel subagents are spawned by emitting multiple Task calls within one response rather than across separate turns."
  },
  {
    "id": 12,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Which coordinator prompt style best supports subagent adaptability?",
    "options": [
      "Forbid subagents from using any tools",
      "Specify research goals and quality criteria rather than rigid step-by-step procedures",
      "Provide only the topic name and no goals",
      "List every tool call in exact order with no flexibility"
    ],
    "answer": 1,
    "explanation": "Goal- and criteria-oriented prompts let subagents adapt to what they find; prescriptive procedures make them brittle."
  },
  {
    "id": 13,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "When passing findings from a search subagent to a synthesis subagent, how should the data be formatted to preserve attribution?",
    "options": [
      "As structured data separating content from metadata such as source URL, document name, and page number",
      "As raw HTML dumped into the prompt",
      "As a list of claims with all citations removed to save tokens",
      "As a single prose paragraph summarizing everything"
    ],
    "answer": 0,
    "explanation": "Structured formats that keep claim content distinct from source metadata preserve provenance through the pipeline."
  },
  {
    "id": 14,
    "difficulty": "easy",
    "category": "agentic-architecture",
    "question": "What does the AgentDefinition configuration for a subagent typically define?",
    "options": [
      "The MCP server's network topology",
      "The model's training data",
      "A description, a system prompt, and tool restrictions for that subagent type",
      "The user's billing plan"
    ],
    "answer": 2,
    "explanation": "AgentDefinition configures each subagent type with its description, system prompt, and the tools it may use."
  },
  {
    "id": 15,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "In a customer support agent, 12% of runs call process_refund without first verifying identity via get_customer. Refund errors are costly. What is the most effective fix?",
    "options": [
      "Add more few-shot examples showing verification first",
      "Add a stronger system prompt sentence saying verification is mandatory",
      "Add a programmatic prerequisite gate that blocks process_refund until get_customer has returned a verified customer ID",
      "Lower the model's temperature"
    ],
    "answer": 2,
    "explanation": "When deterministic compliance is required, prompt instructions have a non-zero failure rate. Hooks or prerequisite gates enforce ordering programmatically."
  },
  {
    "id": 16,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Which implementation best enforces a policy that refunds above $500 require human approval?",
    "options": [
      "A PostToolUse hook that edits the refund after it is processed",
      "A tool-call interception hook that blocks the call and redirects to the human escalation workflow",
      "A longer tool description for process_refund",
      "A system-prompt line asking Claude to be careful with large refunds"
    ],
    "answer": 1,
    "explanation": "Interception hooks on outgoing tool calls provide guaranteed enforcement of business rules, unlike probabilistic prompt guidance."
  },
  {
    "id": 17,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Three MCP tools return timestamps as Unix epoch, ISO 8601 strings, and numeric status codes respectively. Which mechanism best normalizes this before the agent reasons about it?",
    "options": [
      "A PostToolUse hook that transforms tool results into a consistent format",
      "Retrying each call until formats match",
      "A system prompt asking Claude to mentally convert each format",
      "Removing the tools that use different formats"
    ],
    "answer": 0,
    "explanation": "PostToolUse hooks intercept tool results for transformation before the model processes them, giving consistent, deterministic normalization."
  },
  {
    "id": 18,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "When should you choose hooks over prompt-based enforcement?",
    "options": [
      "When the rule is a stylistic preference",
      "When the model has no system prompt",
      "When business rules require guaranteed compliance rather than probabilistic adherence",
      "Only when using batch processing"
    ],
    "answer": 2,
    "explanation": "Hooks give deterministic guarantees; prompts are probabilistic. Use hooks where failures have financial, legal, or safety consequences."
  },
  {
    "id": 19,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A human agent receives an escalation but cannot see the conversation transcript. What should the handoff include?",
    "options": [
      "A structured summary: customer ID, root cause, amounts involved, and recommended action",
      "Nothing - the human will re-ask the customer",
      "Only the customer's last message",
      "The full raw transcript with no summary"
    ],
    "answer": 0,
    "explanation": "Structured handoff protocols compile the key facts so human agents can act without the transcript."
  },
  {
    "id": 20,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A customer sends one message with a refund request, an address change, and a billing question. What is the recommended handling?",
    "options": [
      "Handle only the first issue and ignore the rest",
      "Answer all three in a single guess without tool calls",
      "Escalate every multi-issue message to a human",
      "Decompose into distinct items, investigate each (in parallel using shared context), then synthesize a unified response"
    ],
    "answer": 3,
    "explanation": "Multi-concern requests should be decomposed, investigated per item with shared context, and then merged into one resolution."
  },
  {
    "id": 21,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Which task fits prompt chaining best?",
    "options": [
      "A predictable multi-aspect review: analyze each file individually, then run a cross-file integration pass",
      "Any task where the next step depends heavily on surprises",
      "Open-ended investigation of an unfamiliar legacy system",
      "Exploring a bug with unknown root cause"
    ],
    "answer": 0,
    "explanation": "Prompt chaining suits predictable, multi-aspect workflows; dynamic decomposition suits open-ended investigation."
  },
  {
    "id": 22,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "You must \"add comprehensive tests to a legacy codebase\" with no prior knowledge of it. Which decomposition strategy fits?",
    "options": [
      "Generate tests for every file in one prompt",
      "Ask for a plan without reading any code",
      "Map the structure first, identify high-impact areas, then build a prioritized plan that adapts as dependencies are discovered",
      "A fixed chain: write tests for files in alphabetical order"
    ],
    "answer": 2,
    "explanation": "Open-ended tasks call for adaptive decomposition: discover, prioritize, then adapt the plan as findings emerge."
  },
  {
    "id": 23,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A 14-file pull request review gives uneven depth and contradictory findings in a single pass. What restructuring helps most?",
    "options": [
      "Ask developers to split every PR into 3-file pieces",
      "Run the same pass three times and keep only majority findings",
      "Per-file local analysis passes plus a separate cross-file integration pass",
      "Switch to a model with a larger context window and keep one pass"
    ],
    "answer": 2,
    "explanation": "The cause is attention dilution; focused passes fix depth consistency and an integration pass catches cross-file issues."
  },
  {
    "id": 24,
    "difficulty": "easy",
    "category": "agentic-architecture",
    "question": "Which CLI feature resumes a specific earlier Claude Code investigation by name?",
    "options": [
      "--resume <session-name>",
      "--replay-tools",
      "--continue-from-cache",
      "--restore-last-model"
    ],
    "answer": 0,
    "explanation": "Named session resumption uses --resume <session-name> to continue a particular prior conversation."
  },
  {
    "id": 25,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "What is fork_session used for?",
    "options": [
      "Creating independent branches from a shared analysis baseline to explore divergent approaches",
      "Deleting a session's history",
      "Merging two sessions into one transcript",
      "Switching the underlying model mid-session"
    ],
    "answer": 0,
    "explanation": "fork_session lets you branch from a common baseline, for example to compare two refactoring or testing strategies."
  },
  {
    "id": 26,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "You resume a session after several analyzed files have been modified. The prior tool results are largely stale. What is the most reliable approach?",
    "options": [
      "Start a new session with a structured summary of prior findings, or explicitly tell the resumed session which files changed for targeted re-analysis",
      "Resume silently and trust the stale tool results",
      "Never use sessions after any code change",
      "Resume and ask the model to guess what changed"
    ],
    "answer": 0,
    "explanation": "Stale tool results can mislead. Either inject a summary into a fresh session or inform the resumed session of specific changes."
  },
  {
    "id": 27,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Two tools, get_customer and lookup_order, have one-line descriptions and accept similar IDs. The agent often picks the wrong one. What is the best first step?",
    "options": [
      "Expand the descriptions with input formats, example queries, edge cases, and boundaries versus similar tools",
      "Add 8 few-shot examples to the system prompt",
      "Build a keyword-based routing layer that pre-selects tools",
      "Merge both tools into one lookup_entity tool immediately"
    ],
    "answer": 0,
    "explanation": "Poor descriptions are the root cause, and fixing them is low-effort and high-leverage. Routing layers and consolidation are heavier alternatives."
  },
  {
    "id": 28,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "Two tools named analyze_content and analyze_document have nearly identical descriptions and are frequently confused. Which fix aligns with best practice?",
    "options": [
      "Add more tools with similar names",
      "Keep both names and add a sentence to the system prompt",
      "Delete one tool and ask Claude to infer behavior",
      "Rename and re-describe them to remove overlap, such as extract_web_results with a web-specific description"
    ],
    "answer": 3,
    "explanation": "Ambiguous, overlapping tools cause misrouting. Distinct names and descriptions with clear boundaries eliminate functional overlap."
  },
  {
    "id": 29,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A single generic analyze_document tool does too many things. Which refactor is recommended?",
    "options": [
      "Make its input schema accept free-form text only",
      "Split into purpose-specific tools with defined contracts, e.g. extract_data_points, summarize_content, verify_claim_against_source",
      "Merge it with every other tool",
      "Remove its description to avoid confusion"
    ],
    "answer": 1,
    "explanation": "Purpose-specific tools with clear input/output contracts improve selection reliability."
  },
  {
    "id": 30,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "Tools are well described, but Claude still associates certain tools with particular words from the system prompt. What should you review?",
    "options": [
      "The MCP server's log rotation",
      "The model's max_tokens",
      "The size of the user's screen",
      "Keyword-sensitive wording in the system prompt that may create unintended tool associations"
    ],
    "answer": 3,
    "explanation": "System-prompt wording can override good tool descriptions by creating unintended associations."
  },
  {
    "id": 31,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "How should an MCP tool signal that a call failed so the agent can respond appropriately?",
    "options": [
      "Crash the MCP server process",
      "Throw away the error and return \"OK\"",
      "Return a successful empty result",
      "Return a response with the isError flag and structured metadata describing the failure"
    ],
    "answer": 3,
    "explanation": "The MCP isError flag communicates tool failures; structured metadata lets the agent choose a recovery action."
  },
  {
    "id": 32,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A tool always returns the generic message \"Operation failed\". Why is this problematic?",
    "options": [
      "The agent cannot tell transient, validation, business, or permission errors apart, so it cannot choose retry versus explain versus escalate",
      "The MCP protocol forbids error messages",
      "Generic messages are slower to transmit",
      "It makes tool descriptions longer"
    ],
    "answer": 0,
    "explanation": "Uniform errors prevent appropriate recovery decisions. Structured categories and retryability flags enable targeted handling."
  },
  {
    "id": 33,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A refund request violates a business policy. How should the tool respond?",
    "options": [
      "Return an empty success",
      "Mark it retryable so the agent keeps trying",
      "Return a stack trace for the customer to read",
      "Return an error marked non-retryable with a customer-friendly explanation so the agent can communicate it"
    ],
    "answer": 3,
    "explanation": "Business-rule violations are non-retryable; a customer-friendly explanation lets the agent respond appropriately."
  },
  {
    "id": 34,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A search subagent hits a transient timeout. What is the best error-handling design?",
    "options": [
      "Return an empty result marked as success",
      "Immediately terminate the whole workflow",
      "Retry locally within the subagent and propagate to the coordinator only unresolved errors, with partial results and what was attempted",
      "Propagate every timeout to the user"
    ],
    "answer": 2,
    "explanation": "Local recovery handles transient failures; the coordinator receives only what cannot be resolved, with context for recovery."
  },
  {
    "id": 35,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A query returns zero matches without any error. How should this be reported?",
    "options": [
      "As an error with category permission",
      "As a valid empty result (successful query, no matches), distinct from an access failure",
      "As a timeout needing retry",
      "As a crash to be escalated"
    ],
    "answer": 1,
    "explanation": "Access failures need retry decisions; valid empty results are successful outcomes. Conflating them misleads recovery logic."
  },
  {
    "id": 36,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A synthesis agent is given 18 tools including web search and database writers, and often misuses them. What is the recommended change?",
    "options": [
      "Add more tools so it has options",
      "Remove all tool descriptions",
      "Restrict it to a small, role-relevant tool set, with limited cross-role tools for high-frequency needs",
      "Give it the coordinator's full tool set"
    ],
    "answer": 2,
    "explanation": "Too many tools degrade selection reliability, and out-of-specialization tools get misused. Scope tools by role."
  },
  {
    "id": 37,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "The synthesis agent needs quick fact checks (85% of cases) but sends everything through the coordinator, adding latency. What is the best improvement?",
    "options": [
      "Give it a scoped verify_fact tool for simple lookups while complex verification still routes through the coordinator",
      "Pre-cache extra context around every source",
      "Give it all web search tools",
      "Batch all verifications to the end of its pass"
    ],
    "answer": 0,
    "explanation": "A scoped cross-role tool covers the common case under least privilege while preserving coordination for complex cases."
  },
  {
    "id": 38,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "You need to guarantee the model calls extract_metadata first before any enrichment tools. Which setting achieves this?",
    "options": [
      "tool_choice forced selection: {\"type\": \"tool\", \"name\": \"extract_metadata\"}, then continue in follow-up turns",
      "Adding \"please call extract_metadata first\" to the user message",
      "Removing all other tools permanently",
      "tool_choice \"auto\""
    ],
    "answer": 0,
    "explanation": "Forced tool choice guarantees a specific tool is called; later steps proceed in subsequent turns."
  },
  {
    "id": 39,
    "difficulty": "easy",
    "category": "tool-design-mcp",
    "question": "What does tool_choice \"any\" guarantee?",
    "options": [
      "The model calls only the first declared tool",
      "The model must call a tool (its choice which) rather than reply with conversational text",
      "The model never calls a tool",
      "The model calls every tool once"
    ],
    "answer": 1,
    "explanation": "\"any\" forces a tool call but lets the model pick; \"auto\" allows text instead; forced selection names the tool."
  },
  {
    "id": 40,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Where should a team-shared MCP server configuration live, and how should its credentials be handled?",
    "options": [
      "In CLAUDE.md with the token in plain text",
      "In project-level .mcp.json, using environment variable expansion such as ${GITHUB_TOKEN} instead of committing secrets",
      "In a README file",
      "In ~/.claude.json with the token hard-coded"
    ],
    "answer": 1,
    "explanation": ".mcp.json is project-scoped and version-controlled; env var expansion keeps credentials out of the repo. Personal/experimental servers go in ~/.claude.json."
  },
  {
    "id": 41,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Why would you expose an issue-tracker catalog or database schema as MCP resources?",
    "options": [
      "To give agents visibility into available data without making exploratory tool calls",
      "To block the agent from reading data",
      "To encrypt the data at rest",
      "To replace all tools with resources"
    ],
    "answer": 0,
    "explanation": "MCP resources expose content catalogs so agents know what exists, reducing exploratory calls."
  },
  {
    "id": 42,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Claude keeps using built-in Grep instead of a more capable MCP search tool. What is the best fix?",
    "options": [
      "Shorten the MCP tool description",
      "Enhance the MCP tool's description to explain its capabilities and outputs in detail",
      "Remove Grep from the operating system",
      "Rename the MCP server randomly"
    ],
    "answer": 1,
    "explanation": "Detailed descriptions help the agent prefer the more capable tool."
  },
  {
    "id": 43,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "You need to find every file matching **/*.test.tsx. Which built-in tool is the best choice?",
    "options": [
      "Grep",
      "Glob",
      "Write",
      "Bash with cat"
    ],
    "answer": 1,
    "explanation": "Glob matches file paths by pattern; Grep searches file contents."
  },
  {
    "id": 44,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "Edit fails because the target text occurs more than once. What is the reliable fallback?",
    "options": [
      "Delete the file and start over",
      "Retry the same Edit repeatedly",
      "Use Glob to modify the text",
      "Read the file, then use Write to save the modified full contents"
    ],
    "answer": 3,
    "explanation": "When Edit lacks a unique anchor, Read plus Write is the dependable fallback."
  },
  {
    "id": 45,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "Where should a team-wide /review slash command be stored so every developer gets it on clone?",
    "options": [
      "~/.claude/commands/ on each developer's machine",
      ".claude/commands/ in the project repository",
      "A .claude/config.json commands array",
      "Inside the user's shell profile"
    ],
    "answer": 1,
    "explanation": "Project-scoped commands in .claude/commands/ are version-controlled. ~/.claude/commands/ is for personal commands."
  },
  {
    "id": 46,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A new teammate does not receive the team's coding standards that you wrote in ~/.claude/CLAUDE.md. Why?",
    "options": [
      "Standards can only be set via API",
      "The file must be named README.md",
      "User-level CLAUDE.md applies only to that user and is not shared through version control",
      "Claude ignores CLAUDE.md for new users"
    ],
    "answer": 2,
    "explanation": "Team instructions belong in project-level CLAUDE.md (.claude/CLAUDE.md or root), which is committed to the repo."
  },
  {
    "id": 47,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A monolithic CLAUDE.md has become hard to maintain. Which options keep it modular?",
    "options": [
      "Move everything into the system prompt of each run",
      "Delete all standards",
      "Duplicate the file into every directory",
      "Use @import to reference standards files and split topics into files under .claude/rules/"
    ],
    "answer": 3,
    "explanation": "@import syntax and .claude/rules/ topic files (testing.md, api-conventions.md, deployment.md) improve organization."
  },
  {
    "id": 48,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Conventions for test files must apply to Button.test.tsx, api/user.test.ts, and tests scattered across many directories. What is the most maintainable mechanism?",
    "options": [
      "Skills invoked manually per test file",
      "A single large root CLAUDE.md relying on inference",
      "One CLAUDE.md in each directory",
      ".claude/rules/ files with YAML frontmatter paths globs such as **/*.test.*"
    ],
    "answer": 3,
    "explanation": "Glob-pattern rules load automatically by file path regardless of directory. Directory CLAUDE.md files are directory-bound."
  },
  {
    "id": 49,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which frontmatter field scopes a .claude/rules/ file to Terraform files only?",
    "options": [
      "model: terraform",
      "scope: terraform-only",
      "context: fork",
      "paths: [\"terraform/**/*\"]"
    ],
    "answer": 3,
    "explanation": "Rules use YAML frontmatter paths with glob patterns for conditional activation."
  },
  {
    "id": 50,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A skill produces very verbose codebase-analysis output that pollutes the main conversation. Which SKILL.md option addresses this?",
    "options": [
      "argument-hint: verbose",
      "Moving the skill to ~/.claude/commands/",
      "context: fork, which runs the skill in an isolated sub-agent context",
      "allowed-tools: none"
    ],
    "answer": 2,
    "explanation": "context: fork isolates verbose or exploratory skill output from the main session."
  },
  {
    "id": 51,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which SKILL.md frontmatter option restricts what a skill may do during execution, such as preventing destructive actions?",
    "options": [
      "paths",
      "argument-hint",
      "fork_session",
      "allowed-tools"
    ],
    "answer": 3,
    "explanation": "allowed-tools limits the tools available while the skill runs."
  },
  {
    "id": 52,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "When should guidance live in a skill rather than CLAUDE.md?",
    "options": [
      "When it contains secrets",
      "Never; skills are deprecated",
      "When it must apply to every request",
      "When it is a task-specific workflow invoked on demand; CLAUDE.md is for always-loaded universal standards"
    ],
    "answer": 3,
    "explanation": "Skills are on-demand; CLAUDE.md is always loaded. Choose by how universally the guidance applies."
  },
  {
    "id": 53,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "Which task is best suited to plan mode?",
    "options": [
      "Adding a null check to one function with a clear stack trace",
      "Fixing a typo in one comment",
      "Restructuring a monolith into microservices with decisions about service boundaries across dozens of files",
      "Renaming a local variable"
    ],
    "answer": 2,
    "explanation": "Plan mode fits complex, multi-file, architectural work with multiple valid approaches."
  },
  {
    "id": 54,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "What is the Explore subagent used for?",
    "options": [
      "Running unit tests only",
      "Deploying code to production",
      "Isolating verbose discovery output and returning a summary to preserve main-conversation context",
      "Managing API keys"
    ],
    "answer": 2,
    "explanation": "Explore handles discovery in a separate context and returns summaries, preventing context exhaustion."
  },
  {
    "id": 55,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "What workflow combines plan mode and direct execution effectively?",
    "options": [
      "Execute first, then plan after failures",
      "Plan the library migration in plan mode, then execute the agreed approach in direct execution",
      "Plan only, never implement",
      "Use plan mode for single-line fixes"
    ],
    "answer": 1,
    "explanation": "Plan mode for investigation and design, followed by direct execution for implementation."
  },
  {
    "id": 56,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Prose descriptions of a data transformation keep being interpreted inconsistently. What works best?",
    "options": [
      "Raise the temperature",
      "Remove the examples and trust the model",
      "Make the prose longer",
      "Provide 2-3 concrete input/output examples"
    ],
    "answer": 3,
    "explanation": "Concrete input/output examples clarify transformation requirements better than prose."
  },
  {
    "id": 57,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "When should you report several problems in one message versus sequentially?",
    "options": [
      "Always one message",
      "Always sequential",
      "Never report more than one",
      "One message when the problems interact; sequential when they are independent"
    ],
    "answer": 3,
    "explanation": "Interacting fixes must be reasoned about together; independent ones can be handled one at a time."
  },
  {
    "id": 58,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A developer wants Claude to surface cache-invalidation and failure-mode considerations before implementing in an unfamiliar domain. Which technique fits?",
    "options": [
      "Fork the session twice",
      "The interview pattern: have Claude ask clarifying questions first",
      "Direct execution with no discussion",
      "Disable plan mode"
    ],
    "answer": 1,
    "explanation": "The interview pattern surfaces considerations the developer may not have anticipated."
  },
  {
    "id": 59,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "How do you run Claude Code non-interactively in a CI pipeline so it does not hang?",
    "options": [
      "Pipe stdin from /dev/null only",
      "claude --batch \"<prompt>\"",
      "claude -p \"<prompt>\" (the -p / --print flag)",
      "Set CLAUDE_HEADLESS=true"
    ],
    "answer": 2,
    "explanation": "-p / --print processes the prompt, prints to stdout, and exits without waiting for input."
  },
  {
    "id": 60,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which CI flags produce machine-parseable findings for automated inline PR comments?",
    "options": [
      "--output-format json together with --json-schema",
      "--resume latest",
      "--verbose --color",
      "--interactive"
    ],
    "answer": 0,
    "explanation": "JSON output plus a schema yields structured findings for automation."
  },
  {
    "id": 61,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "In CI, why is an independent review instance better than asking the generating session to review its own code?",
    "options": [
      "Independent instances use a different tokenizer",
      "Independent instances are always cheaper",
      "The generator retains its reasoning context and is less likely to question its own decisions",
      "Self-review is forbidden by the API"
    ],
    "answer": 2,
    "explanation": "Session context isolation improves the ability to catch subtle issues."
  },
  {
    "id": 62,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "How should project context such as testing standards and fixtures reach a CI-invoked Claude Code run?",
    "options": [
      "Via a manual chat message each run",
      "By embedding it in the Docker image name",
      "Through CLAUDE.md in the repository",
      "It cannot be provided in CI"
    ],
    "answer": 2,
    "explanation": "CLAUDE.md supplies testing standards, fixture conventions, and review criteria to CI runs."
  },
  {
    "id": 63,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "After new commits, a CI review re-runs and repeats comments already posted. What is the fix?",
    "options": [
      "Lower max_tokens",
      "Include prior findings in context and instruct Claude to report only new or still-unaddressed issues",
      "Disable reviews on later commits",
      "Delete old comments first"
    ],
    "answer": 1,
    "explanation": "Providing prior findings prevents duplicate feedback."
  },
  {
    "id": 64,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Test generation keeps proposing scenarios the suite already covers. What should you do?",
    "options": [
      "Provide the existing test files in context so duplicates are avoided",
      "Ask for fewer tests",
      "Use a smaller model",
      "Disable CLAUDE.md"
    ],
    "answer": 0,
    "explanation": "Existing tests in context let Claude avoid duplicates."
  },
  {
    "id": 65,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A review prompt says \"check that comments are accurate\" and yields noisy output. Which rewrite is best?",
    "options": [
      "\"Only report if you are highly confident\"",
      "\"Check comments thoroughly\"",
      "\"Flag a comment only when its claimed behavior contradicts the actual code behavior\"",
      "\"Be very careful about comments\""
    ],
    "answer": 2,
    "explanation": "Explicit categorical criteria beat vague instructions or confidence-based filtering."
  },
  {
    "id": 66,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Why do instructions like \"be conservative\" or \"only report high-confidence findings\" fail to improve precision?",
    "options": [
      "They do not define which categories of issues to report, and self-reported confidence is poorly calibrated",
      "They are blocked by the API",
      "Claude cannot read adjectives",
      "They increase token costs only"
    ],
    "answer": 0,
    "explanation": "Specific categorical criteria improve precision; general caution does not."
  },
  {
    "id": 67,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "High false-positive rates in one finding category are eroding developer trust. What is a recommended short-term action?",
    "options": [
      "Keep all categories to maximize recall",
      "Hide all findings",
      "Increase severity labels",
      "Temporarily disable that category while improving its prompt, to restore trust in the accurate categories"
    ],
    "answer": 3,
    "explanation": "False positives in one category undermine confidence in all categories."
  },
  {
    "id": 68,
    "difficulty": "easy",
    "category": "prompt-structured-output",
    "question": "What is the most effective technique when detailed instructions alone yield inconsistent formatting?",
    "options": [
      "Longer system prompts only",
      "Removing the output format",
      "Higher temperature",
      "Few-shot examples"
    ],
    "answer": 3,
    "explanation": "Few-shot examples demonstrate the desired output format and judgment."
  },
  {
    "id": 69,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Why are few-shot examples valuable beyond matching exact cases?",
    "options": [
      "They help the model generalize judgment to novel patterns",
      "They disable hallucination permanently",
      "They replace the schema",
      "They guarantee zero errors"
    ],
    "answer": 0,
    "explanation": "Examples enable generalization rather than merely matching pre-specified cases."
  },
  {
    "id": 70,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "An extractor returns null for a required field on documents with inline citations rather than bibliographies. What helps?",
    "options": [
      "Lower the temperature",
      "Few-shot examples showing correct extraction from varied document structures",
      "Make the field mandatory",
      "Retry until it passes"
    ],
    "answer": 1,
    "explanation": "Examples with varied formats address empty or null extraction."
  },
  {
    "id": 71,
    "difficulty": "easy",
    "category": "prompt-structured-output",
    "question": "What is the most reliable way to get schema-compliant structured output from Claude?",
    "options": [
      "Tool use with a JSON schema",
      "Asking politely for JSON",
      "Setting temperature to 0",
      "Regex-parsing free text"
    ],
    "answer": 0,
    "explanation": "Tool use with JSON schemas eliminates JSON syntax errors."
  },
  {
    "id": 72,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Does a strict JSON schema via tool use prevent a line-item total that doesn't sum to the stated total?",
    "options": [
      "No - it eliminates syntax errors but not semantic errors; add validation",
      "No, and tool use cannot be used for extraction",
      "Yes, but only with temperature 0",
      "Yes, schemas validate arithmetic automatically"
    ],
    "answer": 0,
    "explanation": "Semantic errors (values that don't sum, values in wrong fields) require separate validation."
  },
  {
    "id": 73,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Source documents sometimes lack a vendor tax ID. How should the schema treat that field?",
    "options": [
      "Make it optional/nullable so the model returns null instead of fabricating a value",
      "Require the model to guess",
      "Make it required with a default of N/A",
      "Remove the field"
    ],
    "answer": 0,
    "explanation": "Required fields pressure the model to fabricate values when data is absent."
  },
  {
    "id": 74,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A category enum may not cover every document. Which design is recommended?",
    "options": [
      "Numeric codes only",
      "A closed enum with no escape value",
      "Free text only",
      "Include \"other\" plus a detail string, and values like \"unclear\" for ambiguity"
    ],
    "answer": 3,
    "explanation": "\"other\"+detail and \"unclear\" support extensible, honest categorization."
  },
  {
    "id": 75,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A validation step fails because a date is in the wrong format. What retry strategy is most effective?",
    "options": [
      "Skip validation",
      "Resubmit the identical request unchanged",
      "A follow-up request including the original document, the failed extraction, and the specific validation error",
      "Increase max_tokens only"
    ],
    "answer": 2,
    "explanation": "Retry-with-error-feedback helps for format or structural errors."
  },
  {
    "id": 76,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "When are retries ineffective?",
    "options": [
      "When using tool use",
      "When the schema is nullable",
      "When the required information is simply absent from the provided source document",
      "When the error is a format mismatch"
    ],
    "answer": 2,
    "explanation": "Retry cannot create missing information; it works for format and structure problems."
  },
  {
    "id": 77,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Which schema pattern helps catch extraction math errors?",
    "options": [
      "Only extract stated_total",
      "Remove totals",
      "Extract calculated_total alongside stated_total and flag discrepancies; add conflict_detected booleans for inconsistent source data",
      "Trust the document"
    ],
    "answer": 2,
    "explanation": "Self-correction fields surface inconsistencies for review."
  },
  {
    "id": 78,
    "difficulty": "easy",
    "category": "prompt-structured-output",
    "question": "What are the key properties of the Message Batches API?",
    "options": [
      "Real-time responses under one second",
      "50% cost savings, up to a 24-hour processing window, and no guaranteed latency SLA",
      "Free usage",
      "Guaranteed 1-hour completion"
    ],
    "answer": 1,
    "explanation": "Batches trade latency for cost and are not for blocking workflows."
  },
  {
    "id": 79,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A blocking pre-merge check and an overnight tech-debt report are both candidates for batching. What is the right decision?",
    "options": [
      "Batch the pre-merge check only",
      "Batch the overnight report only; keep pre-merge checks synchronous",
      "Batch both",
      "Batch neither"
    ],
    "answer": 1,
    "explanation": "Batch is for non-blocking, latency-tolerant work."
  },
  {
    "id": 80,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "In a batch of 100 documents, 6 failed because they exceeded the context limit. What is the best action?",
    "options": [
      "Switch everything to real-time",
      "Resubmit the entire batch unchanged",
      "Drop the failed documents",
      "Resubmit only the failed custom_ids with modifications, such as chunking the documents"
    ],
    "answer": 3,
    "explanation": "Resubmit only failures and fix the cause."
  },
  {
    "id": 81,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Why can't the Batches API handle a workflow where the model must run tools mid-request and continue?",
    "options": [
      "It only supports image inputs",
      "It requires streaming",
      "It forbids system prompts",
      "It does not support multi-turn tool calling within a single request"
    ],
    "answer": 3,
    "explanation": "Batch requests cannot execute tools mid-request and return results."
  },
  {
    "id": 82,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "You need a 30-hour SLA using batches that can take 24 hours. What submission cadence is implied?",
    "options": [
      "Submit every 4 hours or more frequently (24h processing + 4h window = 28h within 30h)",
      "Submit every 24 hours",
      "Submit once a week",
      "Submit every 12 hours"
    ],
    "answer": 0,
    "explanation": "Submission interval plus processing window must fit within the SLA."
  },
  {
    "id": 83,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Which review architecture best catches subtle issues in generated code?",
    "options": [
      "No review",
      "Extended thinking in the same session",
      "Same session with \"review carefully\"",
      "A second, independent Claude instance without the generator's reasoning context"
    ],
    "answer": 3,
    "explanation": "Independent instances are more effective than self-review or extended thinking."
  },
  {
    "id": 84,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A team runs three review passes on a PR and flags only issues found in two of three. What is the main drawback?",
    "options": [
      "It increases accuracy always",
      "It is incompatible with CI",
      "It suppresses real bugs that are only detected intermittently",
      "It removes the need for tests"
    ],
    "answer": 2,
    "explanation": "Consensus filters out true issues caught sporadically; focused passes address root cause."
  },
  {
    "id": 85,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Progressive summarization of a long support chat turns \"refund $84.50 on order 7731\" into \"customer wants a refund\". What is the recommended safeguard?",
    "options": [
      "Summarize more aggressively",
      "Drop all numbers",
      "Extract transactional facts into a persistent case-facts block included in every prompt, outside the summarized history",
      "Rely on the user to repeat them"
    ],
    "answer": 2,
    "explanation": "Amounts, dates, and order numbers must survive summarization."
  },
  {
    "id": 86,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "What is the \"lost in the middle\" effect?",
    "options": [
      "Models forget the system prompt entirely",
      "Models process the beginning and end of long inputs reliably but may omit findings from the middle",
      "The middle of a response is truncated",
      "Tokens in the middle cost more"
    ],
    "answer": 1,
    "explanation": "Place key summaries at the start and use explicit section headers."
  },
  {
    "id": 87,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "An order lookup returns 40+ fields but only 5 matter. What should you do?",
    "options": [
      "Trim verbose tool output to relevant fields before it accumulates in context",
      "Pass all fields",
      "Ask the model to ignore the extras",
      "Increase max_tokens"
    ],
    "answer": 0,
    "explanation": "Trimming prevents disproportionate token use."
  },
  {
    "id": 88,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Upstream agents produce long reasoning chains but the downstream agent has a small context budget. What is the best change?",
    "options": [
      "Remove downstream context",
      "Have upstream agents return structured data (key facts, citations, relevance scores) instead of verbose content",
      "Use prose summaries",
      "Concatenate everything"
    ],
    "answer": 1,
    "explanation": "Structured, compact outputs fit downstream budgets."
  },
  {
    "id": 89,
    "difficulty": "easy",
    "category": "context-reliability",
    "question": "Which condition should trigger escalation to a human?",
    "options": [
      "The customer explicitly requests a human, a policy gap/exception, or the agent cannot make meaningful progress",
      "The customer's tone is mildly negative",
      "The conversation exceeds 3 turns",
      "Any message containing an exclamation mark"
    ],
    "answer": 0,
    "explanation": "Sentiment and self-reported confidence are unreliable proxies for complexity."
  },
  {
    "id": 90,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A customer explicitly demands a human agent. What should the agent do?",
    "options": [
      "Ask them to justify the request",
      "Offer a coupon instead",
      "Investigate fully first",
      "Honor the request immediately without first attempting investigation"
    ],
    "answer": 3,
    "explanation": "Explicit requests are honored immediately; frustration without such a request can be addressed while offering resolution."
  },
  {
    "id": 91,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A customer asks for a competitor price match, but policy only covers own-site adjustments. What is correct?",
    "options": [
      "Deny it without explanation",
      "Escalate because policy is silent or ambiguous on the request",
      "Invent a policy",
      "Approve it"
    ],
    "answer": 1,
    "explanation": "Policy gaps are a valid escalation trigger."
  },
  {
    "id": 92,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A customer lookup returns three matching accounts. What should the agent do?",
    "options": [
      "Ask for additional identifiers instead of selecting by heuristic",
      "Process all three",
      "Pick the first match",
      "Pick the most recent account"
    ],
    "answer": 0,
    "explanation": "Multiple matches require clarification."
  },
  {
    "id": 93,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Which approach improves a support agent that escalates easy cases and mishandles policy exceptions?",
    "options": [
      "A separately trained classifier first",
      "Sentiment-based escalation",
      "Add explicit escalation criteria with few-shot examples to the system prompt",
      "Self-reported confidence thresholds"
    ],
    "answer": 2,
    "explanation": "Clarifying decision boundaries is the proportionate first step."
  },
  {
    "id": 94,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "In long exploration sessions, the model starts referencing \"typical patterns\" instead of specific classes found earlier. What helps?",
    "options": [
      "Maintain scratchpad files recording key findings and reference them; use /compact when context fills",
      "Increase temperature",
      "Ignore it",
      "Restart without notes"
    ],
    "answer": 0,
    "explanation": "Scratchpad files counteract context degradation."
  },
  {
    "id": 95,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "How should multi-agent systems support crash recovery?",
    "options": [
      "Each agent exports state to a known location; the coordinator loads a manifest on resume and injects state into prompts",
      "Rely on in-memory state",
      "Restart from scratch",
      "Ask the user to repeat"
    ],
    "answer": 0,
    "explanation": "Structured state persistence enables recovery."
  },
  {
    "id": 96,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A subagent's search fails after partial progress. What should the coordinator receive?",
    "options": [
      "Failure type, attempted query, partial results, and potential alternatives",
      "\"search unavailable\"",
      "Nothing",
      "An empty successful result"
    ],
    "answer": 0,
    "explanation": "Structured error context enables intelligent recovery."
  },
  {
    "id": 97,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Aggregate extraction accuracy is 97%. What is the risk in automating review decisions on this basis?",
    "options": [
      "There is no risk",
      "It guarantees each field is accurate",
      "Aggregate accuracy can mask poor performance on specific document types or fields; validate by segment",
      "It applies only to PDFs"
    ],
    "answer": 2,
    "explanation": "Stratified sampling and per-segment analysis are required."
  },
  {
    "id": 98,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Two credible sources report different statistics for the same metric. How should the synthesis handle this?",
    "options": [
      "Drop both",
      "Preserve both values with source attribution and annotate the conflict",
      "Pick the larger one",
      "Average them silently"
    ],
    "answer": 1,
    "explanation": "Conflicts are annotated, not silently resolved; include dates to prevent temporal differences being read as contradictions."
  },
  {
    "id": 99,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "How can routing of extractions to human review be calibrated?",
    "options": [
      "Trust raw confidence uncalibrated",
      "Have the model output field-level confidence scores and calibrate thresholds with labeled validation sets",
      "Review everything manually",
      "Use uniform random sampling only"
    ],
    "answer": 1,
    "explanation": "Calibration against labeled data makes confidence useful for routing."
  },
  {
    "id": 100,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A support agent must verify identity before any refund tool can run. Where should this requirement live?",
    "options": [
      "In the final response template",
      "In a friendly system-prompt reminder",
      "In a deterministic prerequisite gate or pre-tool hook",
      "In a subagent's optional checklist"
    ],
    "answer": 2,
    "explanation": "Identity verification is a consequential prerequisite. Enforce it programmatically before the refund action rather than relying on probabilistic prompt compliance."
  },
  {
    "id": 101,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A request asks only for an order status. Which orchestration choice is most proportionate?",
    "options": [
      "Run a full research-and-synthesis pipeline",
      "Route directly to the order lookup capability",
      "Invoke every specialist agent for completeness",
      "Ask a planning agent to create a multi-stage plan"
    ],
    "answer": 1,
    "explanation": "A coordinator should select only the capabilities needed for the request. Dynamic routing avoids unnecessary latency and tool calls."
  },
  {
    "id": 102,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Two research subagents return conflicting values for the same metric. What should the coordinator do?",
    "options": [
      "Choose the newer-looking value without checking",
      "Average the two values",
      "Preserve both claims with source/date metadata and delegate targeted verification",
      "Discard both results and ask the user to restart"
    ],
    "answer": 2,
    "explanation": "The coordinator should retain provenance, annotate the conflict, and use targeted verification rather than silently choosing or averaging."
  },
  {
    "id": 103,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A subagent repeatedly returns verbose raw search output. What is the best handoff contract?",
    "options": [
      "Allow the subagent to write directly to the final user response",
      "Remove the synthesis agent",
      "Pass the entire transcript to every downstream agent",
      "Require concise structured findings with claim, evidence, source, date and limitations"
    ],
    "answer": 3,
    "explanation": "Structured handoffs reduce context bloat and preserve attribution needed by synthesis."
  },
  {
    "id": 104,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A coordinator has three independent research tasks. How can it reduce wall-clock latency without losing centralized control?",
    "options": [
      "Have subagents message one another directly",
      "Run each task in a separate user session",
      "Use a shared writable global prompt",
      "Issue multiple Task calls in one coordinator response, then aggregate their results"
    ],
    "answer": 3,
    "explanation": "Independent Task calls can be launched together. The coordinator remains responsible for routing, error handling and synthesis."
  },
  {
    "id": 105,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A long-running investigation resumes after a session interruption, but several source files changed. What is the safest next step?",
    "options": [
      "Assume the prior context is still accurate",
      "Resume without mentioning the changes",
      "Delete all previous findings",
      "Provide a concise state summary and identify changed files, or start a fresh session with that summary"
    ],
    "answer": 3,
    "explanation": "Resumed work needs explicit change awareness. A fresh session with a summary can avoid stale assumptions."
  },
  {
    "id": 106,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A workflow must execute a legally mandated sequence of checks in a fixed order. Which design is strongest?",
    "options": [
      "Ask a subagent to remember the sequence",
      "Use deterministic orchestration for mandatory steps and Claude for interpretation within each step",
      "Increase temperature to encourage compliance",
      "Let the model freely choose the order"
    ],
    "answer": 1,
    "explanation": "Fixed, auditable requirements belong in deterministic workflow code; model reasoning can be used where interpretation is needed."
  },
  {
    "id": 107,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "When is a forked session especially useful?",
    "options": [
      "To persist memory across unrelated users",
      "To bypass tool permissions",
      "To share all context automatically between independent agents",
      "To explore alternative approaches from a common baseline without contaminating the original line of work"
    ],
    "answer": 3,
    "explanation": "Forking creates independent branches from a shared baseline, useful for comparing divergent approaches."
  },
  {
    "id": 108,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A synthesis agent reports broad conclusions but cannot identify which source supports each claim. What should change upstream?",
    "options": [
      "Increase the synthesis model's temperature",
      "Remove source dates to simplify output",
      "Require source-linked structured evidence in each subagent handoff",
      "Ask the final agent to invent citations"
    ],
    "answer": 2,
    "explanation": "Attribution must be preserved throughout delegation. Each claim should carry its evidence and source metadata."
  },
  {
    "id": 109,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A coordinator's fixed pipeline invokes document analysis even when the request contains no document. What is the root design issue?",
    "options": [
      "The model is too small",
      "The subagent context is isolated",
      "The coordinator lacks request-aware decomposition and routing",
      "The tool schema uses JSON"
    ],
    "answer": 2,
    "explanation": "The coordinator should inspect the request and invoke only relevant subagents rather than always running every stage."
  },
  {
    "id": 110,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A model frequently chooses the wrong one of two similarly named MCP tools. What should be improved first?",
    "options": [
      "Force every call to the first tool",
      "Add a second router model",
      "Increase the context window",
      "Expand tool descriptions with distinct purpose, inputs, examples, edge cases and boundaries"
    ],
    "answer": 3,
    "explanation": "Tool descriptions are the primary selection mechanism. Clarify boundaries before adding routing complexity or consolidating tools."
  },
  {
    "id": 111,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "An MCP tool returns no matching records for a valid query. How should it represent the result?",
    "options": [
      "Return an access-denied error",
      "Return a successful empty result with an appropriate structured payload",
      "Return fabricated sample records",
      "Return a generic server error"
    ],
    "answer": 1,
    "explanation": "A valid empty result is not a failure. Do not conflate no matches with authorization or execution errors."
  },
  {
    "id": 112,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A refund is rejected because it violates a business policy. Which error representation is most useful?",
    "options": [
      "A stack trace containing internal account data",
      "isError=false with an empty result",
      "isError=true, category=transient, isRetryable=true",
      "isError=true, category=business, isRetryable=false, with a customer-safe explanation"
    ],
    "answer": 3,
    "explanation": "Business-rule violations are not transient. Structured error metadata lets the agent explain the outcome without retrying."
  },
  {
    "id": 113,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Which tool_choice setting requires Claude to call some tool, but does not force a particular named tool?",
    "options": [
      "none",
      "auto",
      "A forced named tool",
      "any"
    ],
    "answer": 3,
    "explanation": "The any setting requires a tool call, while auto may return text and a forced named tool requires one specific tool."
  },
  {
    "id": 114,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A team wants to expose a reusable catalog of supported issue types and their schemas without requiring exploratory tool calls. Which MCP capability fits?",
    "options": [
      "A user-facing slash command",
      "A model temperature setting",
      "A Bash alias",
      "MCP resources"
    ],
    "answer": 3,
    "explanation": "MCP resources expose contextual data such as catalogs, schemas and document trees for discovery."
  },
  {
    "id": 115,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Which configuration location is intended for shared, version-controlled project MCP servers?",
    "options": [
      "~/.claude.json only",
      "The model's system prompt",
      "A personal shell history file",
      ".mcp.json in the project"
    ],
    "answer": 3,
    "explanation": "The project .mcp.json can be committed for team sharing; secrets should be injected through environment expansion rather than committed."
  },
  {
    "id": 116,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A targeted Edit operation fails because its anchor appears several times. What is the safest recovery?",
    "options": [
      "Use Glob to replace all files",
      "Retry the identical Edit indefinitely",
      "Apply the edit to the first match",
      "Use Read to inspect context and then rewrite the whole file with Write if appropriate"
    ],
    "answer": 3,
    "explanation": "Edit requires a unique anchor. When it is not unique, inspect the file and use a safer whole-file operation."
  },
  {
    "id": 117,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A tool is used only by one application and performs a domain-specific backend action. Which interface is usually most proportionate?",
    "options": [
      "A prompt-only instruction",
      "A custom tool",
      "A global MCP server for every application",
      "A Skill containing credentials"
    ],
    "answer": 1,
    "explanation": "A custom tool is appropriate for a one-application function; MCP is useful for reusable external capabilities."
  },
  {
    "id": 118,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A tool's failure response says only 'unavailable'. What should be added to improve recovery?",
    "options": [
      "The full secret-bearing request",
      "A random retry delay with no limit",
      "Structured error category, retryability, attempted operation, partial results and safe alternatives",
      "A longer natural-language apology only"
    ],
    "answer": 2,
    "explanation": "Actionable error context helps the coordinator distinguish transient, validation, permission and business failures."
  },
  {
    "id": 119,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "What is the main distinction between client-side and server-side tool execution?",
    "options": [
      "There is no distinction",
      "Server-side tools always access the user's database",
      "Client-side tools cannot return results",
      "Client-side tools execute in the application runtime; server-side tools execute in the provider-managed environment"
    ],
    "answer": 3,
    "explanation": "Execution location affects security boundaries, network access, operational ownership and available capabilities."
  },
  {
    "id": 120,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A team-wide coding convention must apply to test files across many directories, including tests next to source files. What is the best mechanism?",
    "options": [
      "Only a root CLAUDE.md paragraph",
      "A one-time slash command",
      "A path-scoped rule in .claude/rules with a matching glob",
      "A personal user-level memory"
    ],
    "answer": 2,
    "explanation": "Glob-based path rules apply across matching files regardless of directory placement and load when relevant."
  },
  {
    "id": 121,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A new teammate does not receive project instructions that exist only in the architect's user-level CLAUDE.md. Why?",
    "options": [
      "The project needs a larger model",
      "User-level instructions are automatically shared",
      "User-level instructions are personal and are not version-controlled with the project",
      "CLAUDE.md cannot be loaded by Claude Code"
    ],
    "answer": 2,
    "explanation": "User-level configuration is personal. Shared guidance belongs in the repository's project-level CLAUDE.md or rules."
  },
  {
    "id": 122,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "What is the purpose of /init in a repository?",
    "options": [
      "Initialize repository context/instructions for Claude Code",
      "Deploy the application",
      "Create a remote MCP server",
      "Rotate API credentials"
    ],
    "answer": 0,
    "explanation": "The command helps initialize project guidance based on the repository."
  },
  {
    "id": 123,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A team wants a repeatable multi-step procedure that can be invoked on demand and shared through version control. Which Claude Code feature is appropriate?",
    "options": [
      "A project slash command under .claude/commands/",
      "A model response prefix",
      "A personal shell alias only",
      "A user-level CLAUDE.md paragraph"
    ],
    "answer": 0,
    "explanation": "Project slash commands can encode reusable team workflows and be shared with the repository."
  },
  {
    "id": 124,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "What is the primary purpose of Agent Skills?",
    "options": [
      "Store API secrets in natural language",
      "Package reusable instructions and procedures that can be loaded when relevant",
      "Replace all MCP servers",
      "Guarantee deterministic execution of every command"
    ],
    "answer": 1,
    "explanation": "Skills package reusable domain instructions and workflows; they do not replace permissions or deterministic enforcement."
  },
  {
    "id": 125,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A CI pipeline needs Claude Code to run without an interactive terminal. Which mode is designed for this?",
    "options": [
      "Plan mode only",
      "The /memory command",
      "A desktop-only session",
      "claude -p (headless mode)"
    ],
    "answer": 3,
    "explanation": "The -p flag supports non-interactive/headless use in scripts and CI workflows."
  },
  {
    "id": 126,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Why should a team pin model versions and version prompts?",
    "options": [
      "To make behavior changes traceable and reduce unexpected regressions after releases",
      "To avoid writing tests",
      "To prevent all model errors",
      "To increase temperature"
    ],
    "answer": 0,
    "explanation": "Version pinning and prompt versioning support controlled rollout, reproducibility and regression diagnosis."
  },
  {
    "id": 127,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A task spans a large unfamiliar codebase and may require broad changes. Which initial approach is most appropriate?",
    "options": [
      "Immediately edit many files without inspection",
      "Ask Claude to infer the repository structure",
      "Disable Read and Grep",
      "Use plan mode to explore, map dependencies and propose a scoped approach before implementation"
    ],
    "answer": 3,
    "explanation": "Plan mode is useful for exploration and architectural work before committing to a broad change."
  },
  {
    "id": 128,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A developer wants a rule to apply only when editing files matching **/*.test.tsx. What should the rule include?",
    "options": [
      "A user prompt that mentions tests once",
      "A global environment variable",
      "A tool_choice forced call",
      "A paths frontmatter glob matching **/*.test.tsx"
    ],
    "answer": 3,
    "explanation": "Path-specific rules use a paths glob so the instruction is scoped to matching files."
  },
  {
    "id": 129,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which statement best describes plan mode versus direct execution?",
    "options": [
      "Plan mode always edits files",
      "They are identical",
      "Plan mode supports exploration and architectural planning; direct mode is suitable for a clearly scoped implementation",
      "Direct mode cannot use tools"
    ],
    "answer": 2,
    "explanation": "The choice depends on uncertainty and scope: plan first for broad or ambiguous work, direct execution for clear bounded tasks."
  },
  {
    "id": 130,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A JSON schema requires an invoice total, but some source documents omit it. What schema design best avoids fabrication?",
    "options": [
      "Remove the field from every response",
      "Require a numeric value and tell Claude to guess",
      "Allow null for genuinely absent values and validate semantic rules separately",
      "Accept any string"
    ],
    "answer": 2,
    "explanation": "Nullable fields represent missing information honestly; semantic validation can still enforce consistency when values exist."
  },
  {
    "id": 131,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A response is valid JSON but the line-item sum differs from the stated total. What is the correct diagnosis?",
    "options": [
      "The context window is full",
      "Syntax validation failed",
      "The model did not stream",
      "Semantic validation failed"
    ],
    "answer": 3,
    "explanation": "JSON schema validation checks structure and types; business invariants such as calculated totals require semantic validation."
  },
  {
    "id": 132,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A constrained tool schema produces syntactically valid output but the model assigns the wrong category. What should be improved?",
    "options": [
      "Convert every category to free text",
      "Disable schema validation",
      "Only increase max_tokens",
      "Clarify category definitions, add discriminating examples and validate the classification against explicit criteria"
    ],
    "answer": 3,
    "explanation": "Schema validity does not guarantee semantic correctness. Improve the criteria and examples, then validate the meaning."
  },
  {
    "id": 133,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "When are few-shot examples especially useful?",
    "options": [
      "When output categories are ambiguous and examples demonstrate boundary cases",
      "When a deterministic hook is required",
      "When credentials must be hidden",
      "When an API request must be retried"
    ],
    "answer": 0,
    "explanation": "A small set of targeted examples can clarify decision boundaries and expected output formats."
  },
  {
    "id": 134,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A document extraction pipeline must preserve evidence for every extracted value. Which output design is strongest?",
    "options": [
      "Return a narrative summary with no references",
      "Return values sorted alphabetically",
      "Return each value with source span/page, confidence or uncertainty, and validation status",
      "Return only a flat list of values"
    ],
    "answer": 2,
    "explanation": "Evidence-linked fields make extraction auditable and support human verification and downstream validation."
  },
  {
    "id": 135,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A prompt asks Claude to extract an email address, but none is present. What behavior should be specified?",
    "options": [
      "Copy the sender's domain into a guessed address",
      "Generate a plausible address",
      "Omit the field without explanation",
      "Return the defined missing-value representation and do not infer it"
    ],
    "answer": 3,
    "explanation": "Extraction prompts should define explicit missing-value behavior and prohibit unsupported inference."
  },
  {
    "id": 136,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A model output contains an unexpected enum value even though a schema is used. What should the application do?",
    "options": [
      "Pass it to downstream systems unchanged",
      "Reject or quarantine it, return a focused validation error and retry or request review as appropriate",
      "Assume the schema makes it impossible",
      "Silently map it to the first enum"
    ],
    "answer": 1,
    "explanation": "Applications must still validate returned data and handle invalid or unsupported values defensively."
  },
  {
    "id": 137,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Why should instructions distinguish trusted instructions from quoted document content?",
    "options": [
      "To ensure quoted content cannot be mistaken for instructions to the model",
      "To disable multimodal input",
      "To make all documents trusted",
      "To increase output token count"
    ],
    "answer": 0,
    "explanation": "Clear content boundaries help prevent untrusted text from overriding the intended task instructions."
  },
  {
    "id": 138,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A structured extraction result passes field-level checks, but the same entity appears twice with conflicting values. Which additional check is needed?",
    "options": [
      "A larger temperature",
      "A new MCP transport",
      "A deduplication and cross-field consistency check",
      "A shorter system prompt only"
    ],
    "answer": 2,
    "explanation": "Field validation alone does not catch duplicate-entity or cross-record inconsistencies."
  },
  {
    "id": 139,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Which prompt change is most likely to improve reliable classification?",
    "options": [
      "Define mutually exclusive categories and explicit handling for borderline or unknown cases",
      "Replace precise criteria with 'use your best judgment'",
      "Add unrelated background information",
      "Ask for a confident answer"
    ],
    "answer": 0,
    "explanation": "Explicit criteria and an unknown path reduce forced guesses and category overlap."
  },
  {
    "id": 140,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A batch extraction job has a small number of ambiguous high-impact records. What is the best operational pattern?",
    "options": [
      "Accept all model outputs automatically",
      "Retry every record indefinitely",
      "Drop the uncertain records silently",
      "Route ambiguous/high-impact records to human verification while allowing validated low-risk records through"
    ],
    "answer": 3,
    "explanation": "Human review should be targeted to uncertainty and impact, not applied blindly or omitted entirely."
  },
  {
    "id": 141,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A long agent task accumulates irrelevant tool output. Which action best controls context growth?",
    "options": [
      "Keep every raw result forever",
      "Increase temperature",
      "Prune or summarize stale outputs while retaining key facts, decisions and provenance",
      "Repeat the original prompt"
    ],
    "answer": 2,
    "explanation": "Context management reduces bloat while preserving the information needed for later decisions."
  },
  {
    "id": 142,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A customer asks for a human, but the agent believes it can solve the issue. What should happen?",
    "options": [
      "Transfer only the raw transcript",
      "Escalate immediately and provide a structured handoff",
      "Ask the customer to repeat the request several times",
      "Continue autonomously because confidence is high"
    ],
    "answer": 1,
    "explanation": "An explicit request for a human is a clear escalation trigger. The handoff should contain relevant facts and prior actions."
  },
  {
    "id": 143,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A customer expresses frustration but the request is straightforward and within policy. What is the most proportionate response?",
    "options": [
      "Claim the issue is resolved without checking",
      "Escalate solely based on sentiment",
      "Acknowledge the frustration and resolve the issue, escalating if the customer asks or a policy/progress trigger occurs",
      "Refuse to continue"
    ],
    "answer": 2,
    "explanation": "Sentiment alone is a poor escalation signal. Use explicit criteria such as a human request, policy gap or lack of progress."
  },
  {
    "id": 144,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A lookup returns two customers with the same name. What should the agent do?",
    "options": [
      "Choose the first result",
      "Ask for an additional identifier before proceeding",
      "Merge both customer records",
      "Use sentiment to select one"
    ],
    "answer": 1,
    "explanation": "Multiple matches require disambiguation. The agent must not guess an identity."
  },
  {
    "id": 145,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A transient backend timeout occurs during a tool call. What is the best recovery strategy?",
    "options": [
      "Return an empty success",
      "Retry without limit",
      "Retry locally with bounded backoff, then report failure context if still unsuccessful",
      "Restart the entire agent system immediately"
    ],
    "answer": 2,
    "explanation": "Retry transient failures locally with limits; preserve failure type and partial results for the coordinator."
  },
  {
    "id": 146,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A report has 97% overall extraction accuracy, but one document type performs poorly. What evaluation approach reveals the issue?",
    "options": [
      "Use stratified sampling and measure accuracy by document type and field",
      "Exclude the weak document type",
      "Increase the sample temperature",
      "Report only the aggregate score"
    ],
    "answer": 0,
    "explanation": "Aggregate accuracy can conceal segment failures. Stratified evaluation exposes performance differences across document types and fields."
  },
  {
    "id": 147,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "What should a human escalation packet contain?",
    "options": [
      "A generic 'agent failed' message",
      "Customer or case identifier, verified facts, root cause, amount/action context and recommended next step",
      "The model's private reasoning",
      "Only the conversation transcript"
    ],
    "answer": 1,
    "explanation": "A structured handoff lets the human act without reconstructing the entire interaction."
  },
  {
    "id": 148,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A research synthesis finds two sources disagree because they refer to different reporting periods. How should the report present this?",
    "options": [
      "Call one source incorrect without explanation",
      "Include both values with source dates and explain the time-period distinction",
      "Average the values",
      "Remove both citations"
    ],
    "answer": 1,
    "explanation": "Dates and provenance distinguish genuine contradictions from differences caused by time or scope."
  },
  {
    "id": 149,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Why should a resumed session be given a crash-recovery manifest or concise state summary?",
    "options": [
      "To record completed work, pending tasks, decisions and changed files so recovery is controlled",
      "To replace source evidence",
      "To disable context limits",
      "To grant broader tool permissions"
    ],
    "answer": 0,
    "explanation": "A recovery manifest preserves operational state and reduces repeated work or stale assumptions."
  },
  {
    "id": 150,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A research system lets the search, analysis and synthesis subagents message each other directly. Debugging failures is hard and error handling is inconsistent. Which redesign fixes this?",
    "options": [
      "Route all inter-agent communication through a single coordinator",
      "Give every subagent a shared writable scratch memory",
      "Let the synthesis subagent become the coordinator",
      "Add a fourth subagent that monitors the other three"
    ],
    "answer": 0,
    "explanation": "Hub-and-Spoke: the coordinator manages all communication, error handling and information routing, giving observability and controlled information flow. Subagents never talk to each other directly."
  },
  {
    "id": 151,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Your coordinator's configuration lists allowedTools without \"Task\", and it never delegates to subagents. What is the cause?",
    "options": [
      "Subagents can only be started from CLAUDE.md",
      "Task is only needed for parallel, not sequential, delegation",
      "The Task tool is the mechanism for spawning subagents, so allowedTools must include it",
      "Coordinators must use tool_choice \"any\""
    ],
    "answer": 2,
    "explanation": "Task Tool: spawning a subagent requires the Task tool, and the coordinator's allowedTools must list it. Without it no delegation is possible."
  },
  {
    "id": 152,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A coordinator needs to research three independent subtopics and wants the lowest latency. How should it invoke the subagents?",
    "options": [
      "Emit three Task calls in a single response so they run concurrently",
      "Merge the three subtopics into one long subagent prompt",
      "Emit one Task call per turn across three turns",
      "Spawn one subagent and have it spawn the rest"
    ],
    "answer": 0,
    "explanation": "Parallel Subagents: multiple Task tool calls emitted in one coordinator response run in parallel, rather than being serialized across separate turns."
  },
  {
    "id": 153,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "You are defining a subagent type for document analysis. Which AgentDefinition contents matter most?",
    "options": [
      "Only the model name",
      "A list of every tool available in the system",
      "The coordinator's full conversation history",
      "A clear description, a focused system prompt, and a restricted tool list for that role"
    ],
    "answer": 3,
    "explanation": "AgentDefinition: each subagent type is configured with a description (so the coordinator picks it correctly), a system prompt, and tool restrictions limiting it to what its role needs."
  },
  {
    "id": 154,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Three MCP tools return timestamps as Unix epoch, ISO 8601 and a numeric status code. Which mechanism lets the agent see consistent data without relying on the model to convert?",
    "options": [
      "A PreToolUse hook that blocks the three tools",
      "A PostToolUse hook that normalizes tool results before the model processes them",
      "A system prompt asking the model to convert formats mentally",
      "A few-shot example showing one conversion"
    ],
    "answer": 1,
    "explanation": "PostToolUse: this hook pattern intercepts tool results and transforms them, so heterogeneous formats are normalized deterministically before the model reasons over them."
  },
  {
    "id": 155,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A support agent skips identity verification in 12% of runs before calling process_refund. Refunds are financial operations. Which fix gives a deterministic guarantee?",
    "options": [
      "Lowering the model temperature",
      "More few-shot examples of verification first",
      "A stronger sentence in the system prompt",
      "Programmatic prerequisite gates that block process_refund until get_customer has returned a verified customer ID"
    ],
    "answer": 3,
    "explanation": "Prerequisite Gates: when ordering is a hard business rule, programmatic gates or hooks enforce it. Prompt instructions alone have a non-zero failure rate."
  },
  {
    "id": 156,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A 14-file pull request needs consistent depth on every file plus detection of cross-file issues. Which decomposition fits a predictable multi-aspect review?",
    "options": [
      "One pass over all 14 files with a larger context window",
      "Ask developers to open smaller pull requests",
      "Three identical passes with majority voting",
      "Prompt chaining: analyze each file individually, then run a cross-file integration pass"
    ],
    "answer": 3,
    "explanation": "Prompt Chaining: fixed sequential steps suit predictable, multi-aspect workflows like per-file review followed by an integration pass, avoiding attention dilution."
  },
  {
    "id": 157,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "You are asked to add comprehensive tests to an unfamiliar legacy codebase. Which approach matches the nature of the task?",
    "options": [
      "Generate tests for every file in a single prompt",
      "Wait for a complete architecture document before starting",
      "Map the structure, find high-impact areas, then build a prioritized plan that adapts as dependencies are discovered",
      "A fixed chain that writes tests for files alphabetically"
    ],
    "answer": 2,
    "explanation": "Dynamic Decomposition: open-ended investigation tasks need adaptive plans that generate subtasks from what is discovered, rather than a fixed pipeline."
  },
  {
    "id": 158,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Two engineers want to compare a repository-pattern refactor against a service-layer refactor starting from the same codebase analysis. Which feature supports this?",
    "options": [
      "fork_session, creating independent branches from the shared analysis baseline",
      "Compacting the context between experiments",
      "Spawning the Explore subagent for each approach",
      "Resuming the same session twice"
    ],
    "answer": 0,
    "explanation": "fork_session: forks create independent branches from a shared baseline so divergent approaches can be explored without contaminating each other."
  },
  {
    "id": 159,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "You return to a named investigation after teammates edited several files you had analyzed. What is the best use of --resume?",
    "options": [
      "Resume silently and trust the earlier tool results",
      "Resume and ask it to guess what changed",
      "Delete the session and rely on memory",
      "Resume the named session and explicitly tell it which files changed, or start fresh with a structured summary if the prior tool results are stale"
    ],
    "answer": 3,
    "explanation": "--resume <session-name> continues a prior conversation, but stale tool results can mislead; inform the session of specific changes or begin a new session with injected findings."
  },
  {
    "id": 160,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A tool fails because the backend timed out. How should the MCP server report it?",
    "options": [
      "Return a result with the isError flag set and structured metadata describing the failure",
      "Terminate the MCP server process",
      "Return an empty list as a success",
      "Return a normal result containing the text \"OK\""
    ],
    "answer": 0,
    "explanation": "isError: the MCP flag that marks a tool result as a failure so the agent can reason about recovery. Pair it with structured metadata rather than a generic message."
  },
  {
    "id": 161,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A tool returns the same \"Operation failed\" text for bad input, a policy violation, a timeout and an access denial. Why is this harmful?",
    "options": [
      "MCP forbids generic messages",
      "The agent cannot distinguish transient, validation, business and permission failures to choose retry, correct, explain or escalate",
      "It makes descriptions longer",
      "It increases token cost only"
    ],
    "answer": 1,
    "explanation": "Error Categories: distinguishing transient, validation, business and permission errors lets the agent pick the right recovery. Uniform errors remove that signal."
  },
  {
    "id": 162,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A business-rule violation (refund outside policy) is returned with a generic retryable-looking error and the agent retries it five times. What metadata prevents this?",
    "options": [
      "A longer stack trace",
      "An isRetryable: false flag with a customer-friendly explanation of the rule",
      "A different tool name",
      "A higher max_tokens"
    ],
    "answer": 1,
    "explanation": "isRetryable: structured retryability metadata prevents wasted retries on non-retryable errors and lets the agent explain business rules to the customer."
  },
  {
    "id": 163,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "An agent with 18 tools often misuses them, such as a synthesis agent attempting web searches. What principle fixes this?",
    "options": [
      "Give the agent all tools so it can self-correct",
      "Remove all tool descriptions",
      "Raise the temperature to diversify choices",
      "Scoped tools: give each agent only the 4-5 tools its role requires, plus limited cross-role tools for frequent needs"
    ],
    "answer": 3,
    "explanation": "Scoped Tools: too many tools degrade selection reliability, and tools outside an agent's specialization get misused. Restrict each subagent to role-relevant tools."
  },
  {
    "id": 164,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "85% of the synthesis agent's verification needs are simple fact checks, and routing each through the coordinator adds latency. What is the best change?",
    "options": [
      "Batch all verifications to the end of its pass",
      "Give it a scoped verify_fact tool for simple lookups and keep complex verification routed through the coordinator",
      "Give it every web search tool",
      "Pre-cache extra context around every source"
    ],
    "answer": 1,
    "explanation": "verify_fact: a narrow cross-role tool covers the common case under least privilege while preserving coordination for the 15% that need deeper investigation."
  },
  {
    "id": 165,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Your teammate's personal experimental MCP server should be available only to them, while the GitHub server is shared by the team. Where does each belong?",
    "options": [
      "Both in CLAUDE.md",
      "Both in ~/.claude.json",
      "The shared server in project .mcp.json; the personal one in user-level ~/.claude.json",
      "The shared server in ~/.claude.json and the personal one in .mcp.json"
    ],
    "answer": 2,
    "explanation": "~/.claude.json: user-scoped configuration for personal or experimental MCP servers. Project-scoped .mcp.json is version-controlled for shared tooling, using ${ENV_VAR} expansion for tokens."
  },
  {
    "id": 166,
    "difficulty": "easy",
    "category": "tool-design-mcp",
    "question": "You need every call site of a function named calculateTax. Which built-in tool, and why not the other?",
    "options": [
      "Grep, because it searches file contents; Glob only matches file paths",
      "Glob, because it searches file contents; Grep only matches file paths",
      "Read, because it scans the whole repo",
      "Write, because it can list files"
    ],
    "answer": 0,
    "explanation": "Grep vs Glob: Grep searches content (function names, error messages, imports); Glob matches file paths by pattern such as **/*.test.tsx."
  },
  {
    "id": 167,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A large CLAUDE.md mixes testing, API and deployment standards. How do you keep it modular?",
    "options": [
      "Put it all in a skill",
      "Use @import to pull in focused standards files, or split topics into .claude/rules/",
      "Duplicate the whole file in every directory",
      "Move everything to ~/.claude/CLAUDE.md"
    ],
    "answer": 1,
    "explanation": "@import: the import syntax references external files so each package's CLAUDE.md can include only the standards relevant to it."
  },
  {
    "id": 168,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Test files live next to source across dozens of directories, and all must follow one convention. What loads those rules automatically?",
    "options": [
      "Path-specific rules: a .claude/rules file with paths: [\"**/*.test.tsx\"] frontmatter",
      "A skill the developer invokes manually",
      "One root CLAUDE.md that relies on inference",
      "A CLAUDE.md in each directory"
    ],
    "answer": 0,
    "explanation": "Path-Specific Rules: glob patterns activate conventions by file type regardless of directory, and the rules load only when editing matching files."
  },
  {
    "id": 169,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "You want a /review command every teammate gets after cloning. Where do slash commands for the whole team live?",
    "options": [
      ".claude/commands/ in the project repository; ~/.claude/commands/ is personal",
      "In .mcp.json",
      "In settings.json under a commands array",
      "~/.claude/commands/ on each machine"
    ],
    "answer": 0,
    "explanation": "Slash Commands: project-scoped commands in .claude/commands/ are shared through version control, while ~/.claude/commands/ holds personal ones."
  },
  {
    "id": 170,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "During a library migration affecting 45 files, discovery output keeps filling the context. Which feature helps?",
    "options": [
      "The Explore subagent, which isolates verbose discovery and returns a summary",
      "Direct execution without exploration",
      "Disabling plan mode",
      "A longer CLAUDE.md"
    ],
    "answer": 0,
    "explanation": "Explore Subagent: delegating discovery to it preserves main-conversation context during multi-phase tasks by returning only summaries."
  },
  {
    "id": 171,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "A CI step runs claude \"Analyze this PR\" and hangs. What is the documented fix?",
    "options": [
      "Set CLAUDE_HEADLESS=true",
      "Run it non-interactively with the -p / --print flag",
      "Redirect stdin from /dev/null only",
      "Add a --batch flag"
    ],
    "answer": 1,
    "explanation": "-p / --print: processes the prompt, prints to stdout and exits without waiting for interactive input, which is what automated pipelines require."
  },
  {
    "id": 172,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A CI job must post findings as inline pull request comments automatically. Which output configuration makes that reliable?",
    "options": [
      "The -v verbose flag",
      "Plain text output parsed with regex",
      "A markdown report posted manually",
      "--output-format json together with a --json-schema describing the findings"
    ],
    "answer": 3,
    "explanation": "--json-schema: with --output-format json it yields machine-parseable structured findings that can be mapped to inline comments."
  },
  {
    "id": 173,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "The session that generated a change is also asked to review it, and it rarely finds problems. What is more effective?",
    "options": [
      "An independent review instance without the generator's reasoning context",
      "Reviewing with a smaller context window",
      "Enabling extended thinking in the same session",
      "Asking the same session to be more critical"
    ],
    "answer": 0,
    "explanation": "Independent Review: a model keeps its reasoning context from generation and is less likely to question its own decisions; a fresh instance catches subtler issues."
  },
  {
    "id": 174,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A code-review prompt generates many findings that developers dismiss, and trust is eroding. Which action targets the cause?",
    "options": [
      "Increase the number of review passes",
      "Only report findings with high self-reported confidence",
      "Tell the model to be more conservative",
      "Define explicit categories to report versus skip, and temporarily disable the highest false-positive category while refining it"
    ],
    "answer": 3,
    "explanation": "False Positives: high false-positive categories undermine confidence in accurate ones. Specific categorical criteria and disabling noisy categories restore developer trust."
  },
  {
    "id": 175,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Reviewers label severity inconsistently across runs. What produces consistent classification?",
    "options": [
      "Free-form severity words chosen by the model",
      "A single severity called \"issue\"",
      "Removing severity from the output",
      "Explicit severity criteria with concrete code examples for each level"
    ],
    "answer": 3,
    "explanation": "Severity Criteria: defining each level with concrete code examples gives the model stable decision boundaries."
  },
  {
    "id": 176,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "You need guaranteed schema-compliant JSON from Claude for downstream systems. Which technique is the most reliable?",
    "options": [
      "Define an extraction tool whose input schema is the target JSON schema, and read the tool_use block",
      "Ask politely for JSON in the system prompt",
      "Parse prose with regular expressions",
      "Set temperature to 0"
    ],
    "answer": 0,
    "explanation": "tool_use Schema: tool use with JSON schemas eliminates syntax errors. It does not guarantee semantic correctness, so validation is still needed."
  },
  {
    "id": 177,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Some invoices have no tax ID, yet the schema marks tax_id required and the model sometimes invents one. What should change?",
    "options": [
      "Remove validation",
      "Make the field nullable/optional so the model returns null instead of fabricating a value",
      "Raise max_tokens",
      "Keep it required and add a default of \"N/A\""
    ],
    "answer": 1,
    "explanation": "Nullable Fields: optional/nullable schema fields prevent the model from fabricating values just to satisfy required fields."
  },
  {
    "id": 178,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A category field might encounter types you did not anticipate. Which schema design is recommended?",
    "options": [
      "A free-text field only",
      "Numeric codes only",
      "An enum with an \"other\" value plus a detail string, and an \"unclear\" value for ambiguous cases",
      "A closed enum with no escape value"
    ],
    "answer": 2,
    "explanation": "Enum + other: extensible categorization uses an \"other\" value with a detail string, and \"unclear\" for ambiguity, instead of forcing wrong categories."
  },
  {
    "id": 179,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "An extraction fails validation because a date came back as \"3rd of May\" instead of ISO 8601. What retry works best?",
    "options": [
      "Increase max_tokens",
      "Resend the original document, the failed extraction and the specific validation error",
      "Skip the field",
      "Resubmit the identical request unchanged"
    ],
    "answer": 1,
    "explanation": "Retry with Feedback: appending the specific validation error guides the model to correct format or structural mistakes, but it cannot fix information absent from the source."
  },
  {
    "id": 180,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Which extra fields help catch an invoice whose line items do not add up to the stated total?",
    "options": [
      "A longer description field",
      "Only stated_total",
      "A calculated_total extracted alongside stated_total, with a conflict flag when they differ",
      "A confidence score of 1-10 only"
    ],
    "answer": 2,
    "explanation": "calculated_total: comparing it against stated_total is a self-correction validation pattern that flags semantic discrepancies a schema cannot catch."
  },
  {
    "id": 181,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Developers dismiss many automated review findings. How do you analyze dismissal patterns systematically?",
    "options": [
      "Delete dismissed findings",
      "Ask developers to write explanations",
      "Raise the temperature",
      "Include a detected_pattern field naming the code construct that triggered each finding"
    ],
    "answer": 3,
    "explanation": "detected_pattern: tracking which constructs trigger findings lets you analyze false-positive and dismissal patterns and improve the prompt."
  },
  {
    "id": 182,
    "difficulty": "easy",
    "category": "prompt-structured-output",
    "question": "A weekly audit of 10,000 documents has no urgency and the team wants lower cost. Which API fits?",
    "options": [
      "Synchronous calls with streaming",
      "The batch API for the blocking pre-merge check",
      "The Message Batches API: 50% cheaper, up to 24 hours, no guaranteed latency",
      "A smaller max_tokens only"
    ],
    "answer": 2,
    "explanation": "Message Batches API: ideal for latency-tolerant work, unsuitable for blocking workflows, and it cannot run multi-turn tool calls inside one request."
  },
  {
    "id": 183,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "After a batch of 100 documents completes, 7 results failed. How do you identify and resubmit only those?",
    "options": [
      "Rely on the order of the results",
      "Match results to requests by custom_id and resubmit just the failures, with fixes such as chunking",
      "Discard failed documents",
      "Resubmit all 100"
    ],
    "answer": 1,
    "explanation": "custom_id: the identifier you assign to each batch request, used to correlate responses and to resubmit only failed items."
  },
  {
    "id": 184,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A 14-file PR review produces contradictory comments about the same pattern in different files. Which structure fixes it?",
    "options": [
      "A bigger context window with one pass",
      "Multi-pass review: focused per-file passes for local issues, then an integration pass for cross-file data flow",
      "Require PRs under four files",
      "Three full-PR runs, keeping findings that appear twice"
    ],
    "answer": 1,
    "explanation": "Multi-Pass Review: splitting work avoids attention dilution; majority-voting on full-PR runs would suppress real bugs found only intermittently."
  },
  {
    "id": 185,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A synthesis agent drops findings that sit in the middle of a very long aggregated input. What mitigates this?",
    "options": [
      "Remove all headers",
      "Place key findings summaries first and organize detailed results under explicit section headers",
      "Duplicate the middle content at random",
      "Shuffle the order every request"
    ],
    "answer": 1,
    "explanation": "Lost in the Middle: models process the beginning and end of long inputs most reliably, so put key summaries up front and use headers to counter position effects."
  },
  {
    "id": 186,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "An agent escalates easy damage-replacement cases but tries to handle policy exceptions alone. First fix?",
    "options": [
      "Train a separate classifier",
      "Escalate when self-reported confidence is low",
      "Add sentiment analysis",
      "Add explicit escalation criteria with few-shot examples showing when to escalate versus resolve"
    ],
    "answer": 3,
    "explanation": "Escalation Criteria: human request, policy exception or gap, and inability to progress. Self-Reported Confidence and sentiment are poor proxies for case complexity."
  },
  {
    "id": 187,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A subagent's web search times out. What should it send the coordinator?",
    "options": [
      "\"search unavailable\"",
      "Structured error context: failure type, attempted query, partial results and possible alternatives",
      "Nothing, so the workflow continues quietly",
      "An empty result marked successful"
    ],
    "answer": 1,
    "explanation": "Error Propagation: structured context enables intelligent coordinator recovery. Generic statuses hide information; swallowing errors or aborting the whole workflow are both anti-patterns."
  },
  {
    "id": 188,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Overall extraction accuracy is 97%, and the team wants to automate review for high-confidence results. What should come first?",
    "options": [
      "Stratified random sampling and accuracy analysis by document type and field",
      "Trust the aggregate figure",
      "Sample only the lowest-confidence items",
      "Remove human review immediately"
    ],
    "answer": 0,
    "explanation": "Stratified Sampling: aggregate accuracy can mask poor performance on specific document types or fields, so measure error rates per segment and detect novel error patterns."
  },
  {
    "id": 189,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Two credible sources report different market-size figures for the same year, and the synthesis agent silently picks one. What is the correct handling?",
    "options": [
      "Keep the larger value only",
      "Preserve both values with source attribution and annotate the conflict, with dates to avoid false contradictions",
      "Average the values",
      "Drop the statistic"
    ],
    "answer": 1,
    "explanation": "Conflict Annotation: keep both values with sources and publication dates. Claim-Source Mapping must survive summarization so provenance is not lost in synthesis."
  },
  {
    "id": 190,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A synthesis step compresses findings and the report loses which source supported which claim. What should subagents provide?",
    "options": [
      "A single confidence number",
      "Only a list of URLs at the end",
      "Structured claim-source mappings (URL or document, excerpt, date) that downstream agents preserve and merge",
      "Plain prose summaries without citations"
    ],
    "answer": 2,
    "explanation": "Claim-Source Mapping: structured mappings preserve attribution through summarization and synthesis; reports should separate well-established from contested findings."
  },
  {
    "id": 191,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A new agent keeps asking the model for a 1-10 confidence score before deciding to escalate. Why is this a weak design?",
    "options": [
      "Models cannot output numbers",
      "Self-reported confidence is poorly calibrated, since the agent is often already confident on hard cases",
      "It adds one extra token",
      "Confidence scores are banned by the API"
    ],
    "answer": 1,
    "explanation": "Self-Reported Confidence: not a reliable proxy for complexity. Field-level confidence is useful only when calibrated with labeled validation sets."
  },
  {
    "id": 192,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Summaries of a multi-turn session keep losing customer-stated expectations such as \"by Friday\". Which risk is this?",
    "options": [
      "A bug in tool_choice",
      "Prompt injection",
      "Progressive summarization condenses numbers, dates and expectations into vague text",
      "Lost tokens in the system prompt"
    ],
    "answer": 2,
    "explanation": "Progressive Summarization: repeated condensing drops numerical values, percentages, dates and customer expectations, so keep them in a case facts block."
  },
  {
    "id": 193,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A lookup tool is returning a 503 and, separately, a 400 for a malformed order number. How should the agent treat them differently?",
    "options": [
      "Retry both identically up to ten times",
      "Retry the 503 because it is transient; correct the input for the 400 because that validation error is not retryable",
      "Escalate both to a human immediately",
      "Ignore both and answer from memory"
    ],
    "answer": 1,
    "explanation": "Error Categories: transient, validation, business and permission errors need different handling. isRetryable metadata tells the agent which failures are worth retrying."
  },
  {
    "id": 194,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Your research coordinator exposes 18 tools to every subagent and tool misuse is rising. Which pair of changes best applies least privilege?",
    "options": [
      "Restrict each subagent to its 4-5 role tools and add a narrow verify_fact tool only where fact-checking is frequent",
      "Add more tools so subagents can recover on their own",
      "Remove all descriptions to avoid bias",
      "Give the synthesis agent the web search toolset"
    ],
    "answer": 0,
    "explanation": "Scoped Tools: role-limited sets improve selection reliability. A cross-role verify_fact tool is the sanctioned exception for high-frequency simple needs."
  },
  {
    "id": 195,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "An engineer needs all files named *.test.tsx, then all usages of a hook called useCart. Which tools, in order?",
    "options": [
      "Glob for both",
      "Grep for both",
      "Glob for the file pattern, then Grep for the usages",
      "Edit then Read"
    ],
    "answer": 2,
    "explanation": "Grep vs Glob: Glob finds files by path pattern, Grep finds content. If an Edit later fails on non-unique text, the Edit Fallback is Read plus Write."
  },
  {
    "id": 196,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A CI job should emit findings that a script can post as inline comments. Which two elements make the output dependable?",
    "options": [
      "Parsing the terminal colors",
      "A prose summary only",
      "Interactive prompts for confirmation",
      "--output-format json with a --json-schema, backed by a tool_use schema in your own extraction code"
    ],
    "answer": 3,
    "explanation": "--json-schema: constrains CI output to a defined structure. A tool_use Schema in API-based extraction gives the same syntactic guarantee, though semantic checks remain your job."
  },
  {
    "id": 197,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Reviewers disagree on severity and developers keep dismissing one finding category. Which two practices address both problems?",
    "options": [
      "Only report critical issues",
      "Concrete severity examples per level, and a detected_pattern field to analyze what triggers dismissed findings",
      "Raise the temperature and run twice",
      "Tell the model to be conservative and add confidence filters"
    ],
    "answer": 1,
    "explanation": "Severity Criteria: examples per level standardize classification. detected_pattern: lets you trace dismissed findings back to constructs and refine prompts."
  },
  {
    "id": 198,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "An extraction schema has a category enum and a total field. Which design handles unexpected categories and arithmetic mistakes?",
    "options": [
      "Numeric category codes and no total",
      "Free text for both",
      "A closed enum and a single total",
      "An enum with \"other\" plus detail text, and calculated_total next to stated_total to flag mismatches"
    ],
    "answer": 3,
    "explanation": "Enum + other: lets categories extend without forcing wrong values. calculated_total: lets validation flag semantic discrepancies that a schema alone cannot detect."
  },
  {
    "id": 199,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Some documents in a batch fail validation because of format errors, others because the data is simply missing. Which workflow is right?",
    "options": [
      "Retry every failure with the identical prompt",
      "Resubmit the entire batch",
      "Discard all failures",
      "Match failures by custom_id, resubmit the format failures with Retry with Feedback including the validation error, and accept nulls for absent data"
    ],
    "answer": 3,
    "explanation": "custom_id: correlates batch results to requests. Retry with Feedback: fixes format and structure errors but cannot invent information absent from the source."
  },
  {
    "id": 200,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A very large pull request is reviewed in one pass and the agent also pulls 40-field records into context. Which two changes help most?",
    "options": [
      "Ask for shorter answers",
      "Remove the integration step",
      "Split into per-file and integration passes (Multi-Pass Review), and keep only relevant fields (Trim Tool Output)",
      "Use a larger window and keep everything"
    ],
    "answer": 2,
    "explanation": "Multi-Pass Review: avoids attention dilution. Trim Tool Output: stops irrelevant fields from consuming context."
  },
  {
    "id": 201,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Customer asks for a policy exception that the written policy does not mention, and a downstream lookup times out. What should the agent do for each?",
    "options": [
      "Guess the policy and hide the timeout",
      "Terminate the conversation",
      "Approve the exception and say \"search unavailable\"",
      "Escalate the policy gap using Escalation Criteria, and return structured error context on the timeout"
    ],
    "answer": 3,
    "explanation": "Escalation Criteria: a policy gap is a valid trigger. Error Propagation: pass failure type, attempted query, partial results and alternatives instead of a generic status."
  },
  {
    "id": 202,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A day-long exploration session is running out of context and the process may crash. Which two safeguards apply?",
    "options": [
      "Run /compact to shrink verbose history, and export agent state to files so a coordinator manifest can resume",
      "Restart each hour with no notes",
      "Rely on in-memory state",
      "Disable tools"
    ],
    "answer": 0,
    "explanation": "/compact: reduces context during extended exploration. Crash Recovery Manifest: persisted state lets the coordinator reload and continue rather than redo work."
  },
  {
    "id": 203,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A report cites two different growth rates for the same sector from two reputable publications published in different years. What is the best presentation?",
    "options": [
      "Average the figures",
      "Omit the sector",
      "Report only the newer figure without comment",
      "Show both figures with their sources and dates, flagged as a conflict rather than silently choosing one"
    ],
    "answer": 3,
    "explanation": "Conflict Annotation: structured reports separate well-established from contested findings, keeping source attribution and dates so temporal differences are not misread as contradictions."
  },
  {
    "id": 204,
    "difficulty": "easy",
    "category": "tool-design-mcp",
    "question": "An app needs to call Claude without blocking an event loop while many requests run concurrently. Which Python SDK client fits?",
    "options": [
      "The Claude Agent SDK query() function, which is only synchronous",
      "Anthropic, called from several threads without awaiting",
      "AsyncAnthropic, used with await for calls, streaming and batches",
      "A synchronous client wrapped in time.sleep() loops"
    ],
    "answer": 2,
    "explanation": "The Python SDK ships both Anthropic and AsyncAnthropic. The async client supports await-based calls and streaming. The Agent SDK query() is itself async and yields messages as an async iterator."
  },
  {
    "id": 205,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "The Claude Agent SDK query() function is consumed how?",
    "options": [
      "As a single blocking string return value",
      "Only through a webhook callback",
      "Only through a synchronous generator in a separate process",
      "As an async iterator of messages produced while the agent runs"
    ],
    "answer": 3,
    "explanation": "query() returns an async iterable of messages, so the caller streams agent progress (assistant turns, tool use, results) rather than waiting for one final value."
  },
  {
    "id": 206,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "What does an MCP client need in order to connect to an MCP server and let Claude use its tools?",
    "options": [
      "The MCP SDK, a transport matching the server, a session initialization handshake, and a tool-use loop to Claude",
      "A fine-tuned Claude model for each server",
      "A direct database connection to the server's data store",
      "Only the server's source code copied into the client"
    ],
    "answer": 0,
    "explanation": "A client uses the MCP SDK (JSON-RPC framing), a transport (stdio or Streamable HTTP), ClientSession.initialize(), then list_tools() and a loop forwarding Claude's tool_use requests to call_tool()."
  },
  {
    "id": 207,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A local MCP server is started by the client as a subprocess and talks over standard input/output. Which transport is this?",
    "options": [
      "WebSocket relay",
      "stdio",
      "Server-sent events only",
      "Streamable HTTP"
    ],
    "answer": 1,
    "explanation": "stdio is for local servers the client spawns. Remote servers use Streamable HTTP (with SSE support) and typically need auth headers or OAuth."
  },
  {
    "id": 208,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A stdio MCP server randomly drops its connection after a developer adds print() debugging. What is the most likely cause and fix?",
    "options": [
      "The server must be rewritten as an HTTP server",
      "The model context window overflowed; enable /compact",
      "Output on stdout corrupts the JSON-RPC stream; log to stderr or a file instead",
      "print() is blocked by .mcp.json permissions; add allowedTools"
    ],
    "answer": 2,
    "explanation": "In stdio servers, stdout carries JSON-RPC messages. Any stray print or console.log breaks framing. Logging goes to stderr or a file."
  },
  {
    "id": 209,
    "difficulty": "easy",
    "category": "tool-design-mcp",
    "question": "Which command is the quickest way to interactively test an MCP server's tools, resources and prompts without writing client code?",
    "options": [
      "A Message Batches API job",
      "claude -p with --json-schema",
      "A PostToolUse hook",
      "The MCP Inspector (for example: npx @modelcontextprotocol/inspector, or mcp dev server.py)"
    ],
    "answer": 3,
    "explanation": "MCP Inspector opens a local UI to invoke tools, inspect schemas and view raw JSON-RPC logs. mcp dev wraps it for Python FastMCP servers and requires Node.js/npx."
  },
  {
    "id": 210,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A team wants automated regression tests for an MCP server that verify initialize(), list_tools() schemas and call_tool() error flags in CI. What is the best approach?",
    "options": [
      "Use an in-memory client/server pair from the MCP SDK to exercise the real protocol, plus plain unit tests for tool logic",
      "Assume schemas are valid because decorators generate them",
      "Test only with an LLM and compare prose output",
      "Manually click through Claude Desktop before each release"
    ],
    "answer": 0,
    "explanation": "In-memory transports let tests run the real MCP protocol deterministically. Tool business logic is also tested directly. End-to-end testing with an AI client then checks that descriptions lead to correct tool choice."
  },
  {
    "id": 211,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A chat app lets users ask Claude about GitHub data. Without MCP, what is the main problem?",
    "options": [
      "Claude cannot call tools at all",
      "Each integration (schemas, routing, auth, pagination) is hand-built and locked inside the app, with no reuse across apps (the M x N problem)",
      "GitHub forbids API access from chat apps",
      "Tool definitions cannot contain JSON Schema"
    ],
    "answer": 1,
    "explanation": "Without MCP the app owns every wrapper and schema and must be changed whenever an API changes. With MCP, a server owns tool definitions and the client discovers them at runtime."
  },
  {
    "id": 212,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "An MCP server needs a 'Summarize document' button users click in the UI. Which MCP primitive fits?",
    "options": [
      "A Tool, because the model decides when to call it",
      "A Resource, because it holds the document text",
      "A Prompt, because prompts are user-controlled templates surfaced as buttons or slash commands",
      "A Root, because it defines the filesystem scope"
    ],
    "answer": 2,
    "explanation": "Prompts are user-controlled (buttons, slash commands). Tools are model-controlled. Resources are application-controlled read-only context."
  },
  {
    "id": 213,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Which pairing of MCP primitive and controller is correct?",
    "options": [
      "Resources: model-controlled; Tools: application-controlled",
      "All three are model-controlled",
      "Tools: user-controlled; Prompts: model-controlled",
      "Tools: model-controlled; Resources: application-controlled; Prompts: user-controlled"
    ],
    "answer": 3,
    "explanation": "The three primitives differ by who triggers them: model (tools), application (resources) and user (prompts)."
  },
  {
    "id": 214,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A developer wants Claude to autonomously decide to read a file during a conversation. How should the file read be exposed on the MCP server?",
    "options": [
      "As a Tool",
      "As a static Resource only",
      "As an environment variable",
      "As a Prompt"
    ],
    "answer": 0,
    "explanation": "Autonomous, model-initiated actions are tools. A resource suits content the user or app attaches as context."
  },
  {
    "id": 215,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A file-reading MCP tool takes a filename argument. Which safeguard is essential?",
    "options": [
      "Mark the tool retryable",
      "Resolve the path and verify it stays inside an allowed base directory to block path traversal",
      "Increase max_tokens so long paths fit",
      "Return files as base64 always"
    ],
    "answer": 1,
    "explanation": "Resolve the path and reject anything outside the base directory (for example with is_relative_to). Otherwise ../ sequences can expose arbitrary files."
  },
  {
    "id": 216,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "In Python FastMCP, how do you expose documents fetched by ID as a parameterised resource?",
    "options": [
      "Create one static resource per document at startup only",
      "Write the IDs into CLAUDE.md",
      "Use @mcp.resource(\"docs://documents/{doc_id}\") on a function with a doc_id parameter",
      "Use @mcp.prompt with a doc_id field"
    ],
    "answer": 2,
    "explanation": "A URI containing {doc_id} is registered as a resource template. Placeholder names must match the function parameters, and the client reads a concrete URI such as docs://documents/101."
  },
  {
    "id": 217,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "How does a client discover URI-template resources, and how does it fetch one document?",
    "options": [
      "list_tools(), then call_tool()",
      "get_prompt() only",
      "initialize() returns every document",
      "list_resource_templates(), then read_resource() with the concrete URI"
    ],
    "answer": 3,
    "explanation": "Templates are listed separately from static resources. The client substitutes the ID and calls read_resource."
  },
  {
    "id": 218,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A tool returns a PDF. How should a Python MCP tool return binary content safely?",
    "options": [
      "Return bytes (FastMCP encodes as a blob), or extract text first and return a string",
      "Return the file path only and hope Claude can open it",
      "Print the bytes to stdout",
      "Binary content cannot be returned from MCP"
    ],
    "answer": 0,
    "explanation": "Text files can be returned as strings. Binary data can be returned as bytes, which FastMCP wraps as a base64 blob, or converted to text before returning."
  },
  {
    "id": 219,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "What is a 'tool function' in Claude's tool use system?",
    "options": [
      "The JSON schema sent in the request",
      "The application code that actually executes when Claude emits a tool_use request",
      "A prompt template stored in CLAUDE.md",
      "A server-side function Claude runs inside its own model"
    ],
    "answer": 1,
    "explanation": "The definition (name, description, input_schema) tells Claude what is available. The function is your code that runs, and its output returns as a tool_result."
  },
  {
    "id": 220,
    "difficulty": "easy",
    "category": "agentic-architecture",
    "question": "What is the primary purpose of tool use in Claude?",
    "options": [
      "To reduce token pricing",
      "To make Claude generate longer responses",
      "To let Claude reach live or private data and trigger external actions beyond static text generation",
      "To replace system prompts"
    ],
    "answer": 2,
    "explanation": "Tool use connects Claude to databases, APIs, files and actions. Your code executes the tool and returns results."
  },
  {
    "id": 221,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "A Claude response contains a text block followed by a tool_use block. What does this mean?",
    "options": [
      "The loop has finished because a text block exists",
      "The model refused to use the tool",
      "The response is malformed and should be discarded",
      "It is normal: content is a list of blocks, so check stop_reason and process every tool_use block"
    ],
    "answer": 3,
    "explanation": "Preambles before tool_use are normal. Do not infer completion from a text block. Loop on stop_reason == tool_use."
  },
  {
    "id": 222,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "When appending the assistant turn to history before sending tool_result, what should be passed?",
    "options": [
      "The full response.content array, including text and tool_use blocks",
      "Only the text block",
      "A natural-language summary of the turn",
      "Only the tool_use block"
    ],
    "answer": 0,
    "explanation": "Preserve the complete assistant content so tool_use IDs match the tool_result blocks. Dropping blocks can cause validation errors."
  },
  {
    "id": 223,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Response content contains three tool_use blocks. How should an agent loop handle them?",
    "options": [
      "Execute only the first and ignore the rest",
      "Execute all, optionally concurrently, and return one tool_result per tool_use_id in the next user message",
      "Ask the user to choose one",
      "Re-send the request until only one appears"
    ],
    "answer": 1,
    "explanation": "Claude can emit parallel tool calls. Return a matching tool_result for each tool_use_id, in a single user turn."
  },
  {
    "id": 224,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "An orchestrator wants Claude to skip preamble text and emit a tool call immediately. Which API setting helps?",
    "options": [
      "max_tokens=1",
      "stop_sequences=[\"tool_use\"]",
      "tool_choice set to any, or to a specific tool",
      "temperature=0"
    ],
    "answer": 2,
    "explanation": "tool_choice any forces a tool call, and a named tool forces that tool. auto lets Claude respond with text."
  },
  {
    "id": 225,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Five independent file reads are slowing an agent because each takes a separate round trip. What pattern reduces latency?",
    "options": [
      "Make the calls sequential to be safe",
      "Use the Message Batches API inside the live loop",
      "Increase temperature",
      "Rely on parallel tool_use blocks, or define a batch tool that runs independent calls concurrently (for example asyncio.gather)"
    ],
    "answer": 3,
    "explanation": "Independent lookups can run in parallel. Do not batch calls where one depends on another's output. The Message Batches API is a separate offline feature."
  },
  {
    "id": 226,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Claude API call returns 429. What do the official SDKs do by default?",
    "options": [
      "Retry automatically (default 2 retries) with backoff, honouring retry-after, then raise RateLimitError",
      "Switch model silently",
      "Drop the request",
      "Raise immediately and ask the user"
    ],
    "answer": 0,
    "explanation": "SDKs retry 429, 408, 409, 5xx and connection errors. After retries are exhausted the error is raised for the app to handle."
  },
  {
    "id": 227,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "How can retry behaviour be customised in the Python SDK?",
    "options": [
      "By editing CLAUDE.md",
      "max_retries on the client, or client.with_options(max_retries=...) per request",
      "Only through environment variables",
      "It cannot be changed"
    ],
    "answer": 1,
    "explanation": "Set max_retries globally or per request, with 0 to disable. TypeScript uses maxRetries."
  },
  {
    "id": 228,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A nightly job still gets RateLimitError after SDK retries. Which is the most appropriate architectural response?",
    "options": [
      "Disable error handling",
      "Raise max_tokens",
      "Queue or throttle requests, use prompt caching to cut token load, and move offline work to the Message Batches API",
      "Remove the retry logic"
    ],
    "answer": 2,
    "explanation": "Persistent rate limiting needs load management. Batches suit latency-tolerant work and caching reduces repeated input."
  },
  {
    "id": 229,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Where does a prompt cache breakpoint (cache_control) cache content?",
    "options": [
      "Only the final user message",
      "Content after the breakpoint",
      "Only the block it is attached to",
      "Everything from the start of the request (tools, system, messages) up to the breakpoint"
    ],
    "answer": 3,
    "explanation": "Caching covers the prefix in order tools, system, messages up to the marker. Up to 4 breakpoints are allowed per request."
  },
  {
    "id": 230,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A cached long-document prompt never produces cache hits. The prompt starts with a current timestamp. What is wrong?",
    "options": [
      "Dynamic content before the breakpoint changes the prefix, so it must come after the cached blocks",
      "Caching needs temperature 0",
      "Caching only works with batches",
      "The document is too short to ever cache"
    ],
    "answer": 0,
    "explanation": "Cache hits require an exact prefix match, so place variable data (timestamps, user IDs) after the cached block. Verify via cache_creation_input_tokens and cache_read_input_tokens."
  },
  {
    "id": 231,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Compared with normal input tokens, how is prompt caching priced?",
    "options": [
      "Same price but faster",
      "Writes cost more (about 1.25x for 5-minute TTL) and hits cost far less (about 0.1x)",
      "Both writes and reads are free",
      "Writes cost 0.1x and reads 1.25x"
    ],
    "answer": 1,
    "explanation": "A 5-minute-TTL cache write has a surcharge and each hit is about a 90% discount. Short prefixes below the minimum are silently not cached."
  },
  {
    "id": 232,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "For classification or JSON extraction where reproducibility matters, which temperature is most appropriate?",
    "options": [
      "Above 1.0",
      "Temperature has no effect",
      "Low, near 0.0",
      "1.0 for maximum variety"
    ],
    "answer": 2,
    "explanation": "Low temperature favours the most likely token, which suits extraction, classification and tests. Higher values suit brainstorming and fiction."
  },
  {
    "id": 233,
    "difficulty": "easy",
    "category": "prompt-structured-output",
    "question": "Which temperature range suits open-ended creative fiction on Claude?",
    "options": [
      "Above 1.5",
      "Temperature is unavailable for fiction",
      "0.0 to 0.2",
      "About 0.8 to 1.0"
    ],
    "answer": 3,
    "explanation": "Claude's range is 0.0 to 1.0 with 1.0 default. Higher values give more varied word choice. Extended thinking requires temperature 1.0."
  },
  {
    "id": 234,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A team builds eval test cases for a prompt that runs on Sonnet. Which approach avoids shared blind spots?",
    "options": [
      "Generate bulk inputs cheaply (for example with Haiku), design edge cases with a stronger model, and grade with a different model or code checks",
      "Use the same model and prompt for generation and grading",
      "Use only five hand-picked examples",
      "Skip edge cases"
    ],
    "answer": 0,
    "explanation": "Separate generation from grading and prefer a distinct or stronger judge. Combine with deterministic checks where possible."
  },
  {
    "id": 235,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "A prompt must output valid JSON with a fixed intent label. Which grader should be tried first?",
    "options": [
      "No grader",
      "A code-based grader (json.loads, schema validation, exact match)",
      "An LLM judge on a 1-10 scale",
      "Human review of every output"
    ],
    "answer": 1,
    "explanation": "Code graders are fast, free and reproducible. Use LLM judges when quality is subjective, then calibrate them with human review."
  },
  {
    "id": 236,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "An LLM-as-a-judge grader gives noisy scores. Which two changes most improve reliability?",
    "options": [
      "Let the judge grade its own outputs",
      "Use a 1-10 scale and hide reasoning",
      "Use binary or 1-3 rubrics and request reasoning before the score",
      "Use a higher temperature"
    ],
    "answer": 2,
    "explanation": "Narrow scales are more consistent, and reasoning-first acts like chain-of-thought. Randomise response order in pairwise comparisons to reduce position bias."
  },
  {
    "id": 237,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "What does a balanced starter eval set look like?",
    "options": [
      "One perfect example",
      "Only adversarial inputs",
      "Only the cases the prompt already passes",
      "About 10-20 verified cases covering routine, edge and out-of-scope inputs, then expanded with synthetic data"
    ],
    "answer": 3,
    "explanation": "Start small but balanced (roughly routine 50%, edge 30%, out-of-scope 20%), then scale with generated cases."
  },
  {
    "id": 238,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "What does computer use let Claude do, and how is it run safely?",
    "options": [
      "Read screenshots and issue mouse and keyboard actions in a loop, ideally inside a sandboxed VM or container",
      "Directly edit its own weights",
      "Bypass tool schemas",
      "Run only on the user's production laptop"
    ],
    "answer": 0,
    "explanation": "Computer use is a tool-use loop: screenshot, action, new screenshot. Run it isolated with minimal permissions and human confirmation for sensitive steps because of prompt injection risk."
  },
  {
    "id": 239,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "An agent starts in an unfamiliar repo and assumes Python 3.12 and a src/ directory. What practice avoids brittle assumptions?",
    "options": [
      "Disabling tools",
      "Environment inspection: read-only checks of OS, versions, directory layout and available tools before mutating state",
      "Guessing and correcting after failure",
      "Giving the agent full write access first"
    ],
    "answer": 1,
    "explanation": "Inspect first (ls, git status, version checks, list_tools), keep inspection read-only, mask secrets and bound output size."
  },
  {
    "id": 240,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "An agent logs environment variables into its context for debugging. What is the risk and mitigation?",
    "options": [
      "It only increases cost",
      "It disables caching",
      "Secrets can leak into logs or be exfiltrated via prompt injection; mask or filter sensitive variables",
      "No risk, since the context is private"
    ],
    "answer": 2,
    "explanation": "Sanitise API keys and tokens before exposing environment details, and bound inspection output to avoid flooding the context window."
  },
  {
    "id": 241,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "In the 4D AI Fluency framework, which competency is the decision about whether and how to involve AI before writing any prompt?",
    "options": [
      "Description",
      "Discernment",
      "Diligence",
      "Delegation"
    ],
    "answer": 3,
    "explanation": "Delegation covers problem awareness, platform awareness and task delegation. Description is communicating clearly, Discernment evaluates outputs, and Diligence covers responsible use."
  },
  {
    "id": 242,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "In the 4D framework, noticing that an output has hallucinated facts and sending it back with refined instructions uses which competencies?",
    "options": [
      "Discernment, feeding back into Description",
      "Delegation only",
      "Diligence only",
      "None; reviewing outputs is not a competency"
    ],
    "answer": 0,
    "explanation": "Product discernment checks accuracy and completeness, and the description-discernment loop refines the prompt iteratively."
  },
  {
    "id": 243,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A manager ships an AI-written report after only skimming it and does not disclose AI involvement. Which 4D competency is mainly violated?",
    "options": [
      "None",
      "Diligence (transparency and deployment accountability)",
      "Delegation",
      "Description"
    ],
    "answer": 1,
    "explanation": "Diligence includes creation, transparency and deployment responsibility: be honest about AI's role and own verification before release."
  },
  {
    "id": 244,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A team wants every new Claude workflow and agent definition to be onboarded through pull requests. Which overall model is most appropriate?",
    "options": [
      "Manual review of every workflow and agent change by a human",
      "Automated validation and testing for routine checks, plus risk-based human approval for high-risk changes",
      "Fully autonomous merge and deploy once Claude approves its own change",
      "Skip review for agents because prompts are only text"
    ],
    "answer": 1,
    "explanation": "Automate the repeatable validation, and keep human accountability where risk is high (permissions, secrets, production access). Neither all-manual nor all-automatic is proportionate."
  },
  {
    "id": 245,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which checks on a PR that adds an agent definition can be fully automated?",
    "options": [
      "Deciding whether to grant the agent production write access",
      "Approving a new external MCP integration",
      "Accepting a change to the organisation's security policy",
      "YAML and schema validation, duplicate configuration detection, and secret scanning"
    ],
    "answer": 3,
    "explanation": "Syntax, schema, duplicates and secrets are deterministic checks. Granting production access, new external connections and policy changes need human judgement."
  },
  {
    "id": 246,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Why should deterministic static validation and secret scanning run before the AI-powered review stage in an onboarding pipeline?",
    "options": [
      "They are cheap, fast and reproducible, fail early on malformed or unsafe changes, and keep secrets and broken configs away from the model",
      "Because the AI reviewer cannot read YAML",
      "Because static checks are more creative than model review",
      "Because the order has no effect on cost or risk"
    ],
    "answer": 0,
    "explanation": "Order stages from cheapest and most deterministic to most expensive and probabilistic: static validation, security/compliance, AI review, tests, then human approval for high-risk changes."
  },
  {
    "id": 247,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A team wants policy-as-code such as 'no agent may combine unrestricted Bash with deployment credentials'. Which tool category fits?",
    "options": [
      "yamllint, which only checks YAML syntax",
      "actionlint, which only lints GitHub Actions workflow syntax",
      "A policy engine such as OPA with Conftest evaluating the agent configuration in CI",
      "Gitleaks, which only detects secrets"
    ],
    "answer": 2,
    "explanation": "yamllint checks YAML, actionlint checks GitHub Actions workflows, Gitleaks finds secrets, and OPA/Conftest enforces custom policy rules over configuration."
  },
  {
    "id": 248,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Which change must always require mandatory human approval in a Claude agent onboarding process?",
    "options": [
      "A typo fix in documentation",
      "An agent that can write to production infrastructure or execute arbitrary shell commands",
      "A reformatting of the workflow YAML with no behaviour change",
      "A tweak to a code comment in a test file"
    ],
    "answer": 1,
    "explanation": "Agents with production access, write access to deployment environments, arbitrary shell execution, new MCP/external connections, or changed permission boundaries are high-risk and need human sign-off."
  },
  {
    "id": 249,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Under a risk-based approval model, how should a documentation-only change be handled?",
    "options": [
      "Mandatory security review",
      "Production approval board",
      "Rewrite it as an agent definition",
      "Automated checks only"
    ],
    "answer": 3,
    "explanation": "Low-risk changes can pass on automated validation. New tools or MCP access need security review, and production permissions need mandatory human approval."
  },
  {
    "id": 250,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A PR adds a new MCP server connection to an existing agent. Which approval is most appropriate?",
    "options": [
      "Security review, because new tools or external connections expand the agent's capabilities and attack surface",
      "No review, since MCP servers are sandboxed by definition",
      "Automatic approval if the YAML is valid",
      "Approval from the agent itself"
    ],
    "answer": 0,
    "explanation": "Validity of the file says nothing about what the new server can reach. New tools or MCP access warrant a security review with least-privilege and untrusted-input checks."
  },
  {
    "id": 251,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A CI job asks Claude to review pull requests, and external contributors can write PR descriptions and code comments. What is the key risk and mitigation?",
    "options": [
      "Context overflow; the fix is a bigger window",
      "Token pricing; the fix is a cheaper model",
      "Prompt injection through untrusted content; treat it as data, restrict tools and tokens to least privilege, and keep secrets out of the context",
      "There is no risk because Claude ignores comments"
    ],
    "answer": 2,
    "explanation": "Content authored by outsiders can contain instructions. Limit what the reviewing agent can do, scope credentials narrowly and never rely on the prompt alone to refuse."
  },
  {
    "id": 252,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which Anthropic-provided option integrates Claude into GitHub Actions pipelines for AI-powered review?",
    "options": [
      "A GitHub-hosted Message Batches runner",
      "Claude Code Action, with configurable permissions",
      "The yamllint action",
      "A Dependabot plugin"
    ],
    "answer": 1,
    "explanation": "Claude Code Action runs Claude in GitHub workflows. Pair it with claude -p, --output-format json and --json-schema when machine-readable output is needed."
  },
  {
    "id": 253,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Should the Claude instance that authored an agent configuration change also be the one that approves it in CI?",
    "options": [
      "Yes, because it knows the intent best",
      "Yes, if its temperature is set to 0",
      "Yes, if it writes a summary of why the change is safe",
      "No; use an independent review instance (and human approval for high-risk changes), because the author retains its own reasoning context"
    ],
    "answer": 3,
    "explanation": "Independent review instances catch issues the generator is biased to overlook. Self-approval does not replace separation of duties."
  },
  {
    "id": 254,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "How should the behaviour of a changed agent be tested in CI given non-deterministic outputs?",
    "options": [
      "Run it against a labeled evaluation set with deterministic assertions on tool calls and structure, plus rubric or LLM grading and sampled human review for quality",
      "Compare the full text output to a stored string",
      "Run it once and trust the result",
      "Skip tests because the model is non-deterministic"
    ],
    "answer": 0,
    "explanation": "Assert what can be checked exactly (which tools were called, schema validity, forbidden actions), grade subjective quality with a rubric, and calibrate with human review."
  },
  {
    "id": 255,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A governance document says 'aim to automate 80-90% of routine validation'. How should that figure be read?",
    "options": [
      "As a guaranteed accuracy measured on production data",
      "As a limit on how many reviewers may be used",
      "As a target for routine checks, not a measured benchmark, and not a replacement for human accountability",
      "As proof that approval gates can be removed"
    ],
    "answer": 2,
    "explanation": "The number is an aspiration. Accountability for high-risk changes stays with people."
  },
  {
    "id": 256,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "All automated checks pass on a PR that gives a new agent unrestricted Bash and production deploy credentials. What should happen?",
    "options": [
      "Merge automatically because the checks are green",
      "Require human security approval anyway; passing automation does not remove the risk of broad permissions",
      "Ask the agent whether it is safe",
      "Reduce the checks until the PR fails"
    ],
    "answer": 1,
    "explanation": "Automation validates form and known rules. Capability grants with production impact still need explicit human accountability."
  },
  {
    "id": 257,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Where should agent definitions, CLAUDE.md and workflow files live so changes can be reviewed and enforced by CI?",
    "options": [
      "In each developer's personal ~/.claude directory",
      "Only in the Claude web UI",
      "In a shared chat thread",
      "In version control (for example .claude/agents/, CLAUDE.md and .github/workflows/), changed via pull requests, with required owners on sensitive paths"
    ],
    "answer": 3,
    "explanation": "Version-controlled, PR-reviewed files give an audit trail and let CI validate every change. Personal user-level config is not shared with the team."
  },
  {
    "id": 258,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "In a Claude Code repository, where are tool permissions and related configuration defined?",
    "options": [
      "CLAUDE.md, because tool names written there grant access",
      "The body text of a SKILL.md file",
      ".claude/settings.json",
      "The repository README"
    ],
    "answer": 2,
    "explanation": "settings.json holds permissions and configuration. CLAUDE.md carries instructions and guidance, so mentioning a tool there does not install, configure or authorise it."
  },
  {
    "id": 259,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A SKILL.md and CLAUDE.md both tell Claude to use a deployment tool. What can a CI check safely conclude from that alone?",
    "options": [
      "Nothing about availability or authorisation; CI must verify the referenced tool actually exists and is permitted in the configuration",
      "The tool is installed and authorised",
      "The tool is covered by least-privilege automatically",
      "The tool can be skipped in security review"
    ],
    "answer": 0,
    "explanation": "References are instructions, not configuration. Validate that referenced tools exist (settings.json, .mcp.json, allowed-tools) and that access is not excessive."
  },
  {
    "id": 260,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Which file should a CI pipeline validate to review MCP server definitions and access for a Claude Code project?",
    "options": [
      ".claude/commands/deploy.md",
      "CLAUDE.md",
      "package-lock.json",
      ".mcp.json"
    ],
    "answer": 3,
    "explanation": "Project-scoped MCP servers live in .mcp.json (with ${ENV_VAR} expansion for secrets). Validate server configuration, access scope and that no secrets are committed."
  },
  {
    "id": 261,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Under a three-level approval model, which change needs Level 3 security approval?",
    "options": [
      "A documentation-only change",
      "Adding a new MCP server, an external integration, shell execution, or expanded permissions",
      "A safe update to an existing skill's wording",
      "A new skill that only reads files"
    ],
    "answer": 1,
    "explanation": "Level 1 is auto-approve (docs, safe skill updates). Level 2 is PR review (new skills, agents, tool usage changes). Level 3 is security approval (new MCP, external integrations, shell execution, expanded permissions)."
  },
  {
    "id": 262,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A developer adds a new custom agent under .claude/agents/ and a new skill under .claude/skills/. Which approval level fits?",
    "options": [
      "Level 1: auto-approve because they are only Markdown",
      "Level 3 for every agent, regardless of tools",
      "Level 2: automated validation plus pull request review",
      "No review because the files are not executable"
    ],
    "answer": 2,
    "explanation": "New skills and agents get PR review. They escalate to security approval only if they add MCP servers, shell execution or broader permissions."
  },
  {
    "id": 263,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Which automated validation fits a SKILL.md and an agent definition respectively?",
    "options": [
      "SKILL.md structure and frontmatter metadata for skills; frontmatter, tool list and permission checks (detect excessive tool access) for agents",
      "Only YAML syntax linting for both",
      "Only an LLM read-through for both",
      "No checks, because they are prose"
    ],
    "answer": 0,
    "explanation": "Skills use SKILL.md with frontmatter such as context: fork, allowed-tools and argument-hint. Agent definitions carry description, prompt and tool restrictions. Validate structure, referenced tools and least privilege, then add AI-assisted instruction review."
  },
  {
    "id": 264,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "How should a CI workflow be triggered so every onboarding-relevant change gets validated?",
    "options": [
      "Run only manually before releases",
      "Run only when a deployment fails",
      "Run nightly on the main branch only",
      "Run on pull requests that touch CLAUDE.md, .claude/** or .mcp.json, using path filters"
    ],
    "answer": 3,
    "explanation": "Validate at PR time, before merge. Path filters on CLAUDE.md, .claude/skills, .claude/agents, .claude/commands, .claude/settings.json and .mcp.json keep the check targeted."
  },
  {
    "id": 265,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "An agent loop stops because it hit the maximum-iteration cap while the customer's issue is still unresolved. What orchestration-layer safeguard should apply?",
    "options": [
      "Detect the abnormal termination in orchestration code and route the session to human escalation with a handoff package",
      "Return the last assistant text to the customer as the resolution",
      "Silently restart the loop with the cap removed",
      "Rely on the system prompt telling Claude to always finish"
    ],
    "answer": 0,
    "explanation": "Every exit path must end in a completed resolution or a human escalation. A cap hit without resolution is an escalation trigger, not a final answer."
  },
  {
    "id": 266,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "Which termination paths must the orchestrator guarantee end in either a completed resolution or a human escalation?",
    "options": [
      "Only end_turn, because other paths are bugs",
      "Only paths where Claude reports it is stuck",
      "All of them: end_turn, iteration cap, max_tokens, unrecoverable tool errors, timeouts and exceptions",
      "Only paths that produce an error log"
    ],
    "answer": 2,
    "explanation": "The guarantee is about the session outcome regardless of how the loop terminates, so the wrapper must cover abnormal exits as well as the normal one."
  },
  {
    "id": 267,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Where should the 'every session ends resolved or escalated' guarantee be implemented?",
    "options": [
      "In a CLAUDE.md sentence asking Claude to always escalate",
      "In the tool descriptions",
      "In the customer's first message",
      "In deterministic orchestration code around the loop (for example a wrapper that always finalises the session), not in the prompt"
    ],
    "answer": 3,
    "explanation": "Prompt instructions are probabilistic. Exit-path guarantees belong in code that runs whether or not the model cooperates."
  },
  {
    "id": 268,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "A response arrives with stop_reason max_tokens in the middle of a tool_use block. What should the orchestrator do?",
    "options": [
      "Execute the partial tool call",
      "Treat it as incomplete: do not execute or present it as final; retry with a higher limit, or escalate if it cannot complete",
      "Present the truncated text as the resolution",
      "Ignore it, since the loop continues anyway"
    ],
    "answer": 1,
    "explanation": "max_tokens means the response was cut off. Acting on a truncated tool call or treating it as an answer produces wrong outcomes."
  },
  {
    "id": 269,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "What is the proper role of a maximum-iteration cap in an agentic loop?",
    "options": [
      "The primary mechanism that decides when the task is done",
      "A way to reduce token cost only",
      "A safety net against runaway loops: termination is driven by stop_reason, and the cap triggers an escalation path when it fires",
      "Unnecessary if tool results are accurate"
    ],
    "answer": 2,
    "explanation": "Primary control is stop_reason (tool_use continues, end_turn stops). The cap guards against loops that never converge and must hand off cleanly."
  },
  {
    "id": 270,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A human agent takes over an escalated session and cannot see the transcript. What should the handoff package contain?",
    "options": [
      "Customer identifier, root-cause findings, actions already taken, amounts and authorisation state, and a recommended next action",
      "The full raw transcript only",
      "A one-line 'customer is upset' note",
      "Nothing; the human restarts the investigation"
    ],
    "answer": 0,
    "explanation": "A structured, self-contained summary preserves accumulated context and authorisation state so the human does not repeat work."
  },
  {
    "id": 271,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "An engineer resumes a named session after teammates modified three files the agent analysed. Best approach?",
    "options": [
      "Resume silently; the agent will notice the changes",
      "Resume and tell the agent exactly which files changed so it re-analyses only those, instead of re-exploring everything or trusting stale results",
      "Start from scratch and repeat the full analysis",
      "Delete the session history and rebuild from memory"
    ],
    "answer": 1,
    "explanation": "Targeted re-analysis with context injection restores state accurately without repeating prior work."
  },
  {
    "id": 272,
    "difficulty": "hard",
    "category": "agentic-architecture",
    "question": "When is starting a new session with an injected structured summary better than resuming?",
    "options": [
      "Always, because resuming is unsupported",
      "Never, because summaries lose all information",
      "Only when the model version changes",
      "When prior tool results are stale or bloated, so summarising the findings into a fresh session is more reliable than resuming"
    ],
    "answer": 3,
    "explanation": "Resumption carries old tool output with it. If that output is outdated, a fresh session seeded with a verified summary is safer."
  },
  {
    "id": 273,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Two engineers want to try different refactoring strategies from the same analysis baseline. Which technique fits?",
    "options": [
      "fork_session to branch independent sessions from the shared baseline",
      "Run both strategies in one session sequentially",
      "Use --resume twice on the same session simultaneously",
      "Copy CLAUDE.md into two directories"
    ],
    "answer": 0,
    "explanation": "Forking creates divergent branches from a common starting point without contaminating each other."
  },
  {
    "id": 274,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Investigating an unfamiliar legacy codebase, the next steps depend on what is discovered. Which decomposition fits?",
    "options": [
      "A fixed pre-defined sequence of steps regardless of findings",
      "One giant prompt reading every file",
      "Dynamically generated subtasks that adapt as findings arrive (map structure, prioritise high-impact areas, revise the plan)",
      "Random sampling of directories"
    ],
    "answer": 2,
    "explanation": "Adaptive decomposition responds to intermediate findings, which a fixed sequence cannot."
  },
  {
    "id": 275,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "When is a fixed prompt chain more appropriate than dynamic decomposition?",
    "options": [
      "When the task is open-ended exploration",
      "When the subtasks cannot be known in advance",
      "When findings change the plan",
      "When the steps are predictable and the same for every input, such as per-file review followed by a cross-file pass"
    ],
    "answer": 3,
    "explanation": "Use fixed chains for predictable workflows and adaptive plans for open-ended investigation."
  },
  {
    "id": 276,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Refunds above $500 must never run without human approval. Which implementation is reliable?",
    "options": [
      "A system-prompt rule telling Claude to ask first",
      "A PreToolUse hook that blocks the call and redirects to escalation",
      "A PostToolUse hook that reports the refund afterwards",
      "A few-shot example of escalating large refunds"
    ],
    "answer": 1,
    "explanation": "Policy limits need deterministic enforcement before the action happens."
  },
  {
    "id": 277,
    "difficulty": "medium",
    "category": "agentic-architecture",
    "question": "Different MCP tools return dates as Unix timestamps and ISO strings. Which hook pattern normalises them before the model reasons over them?",
    "options": [
      "A PreToolUse hook on the next tool",
      "A CLAUDE.md note about date formats",
      "A PostToolUse hook that transforms the tool result into one consistent format",
      "A larger context window"
    ],
    "answer": 2,
    "explanation": "PostToolUse can rewrite results so the model sees consistent data."
  },
  {
    "id": 278,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Claude keeps transforming data inconsistently even though your prose description is detailed. Which technique helps most?",
    "options": [
      "Provide 2-3 concrete input-output examples showing the exact transformation",
      "Add more adjectives to the description",
      "Raise the temperature",
      "Repeat the instruction in capitals"
    ],
    "answer": 0,
    "explanation": "Examples remove ambiguity that prose leaves open."
  },
  {
    "id": 279,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "You are implementing a function with precise edge-case behaviour. Which iterative workflow is most reliable?",
    "options": [
      "Ask for the whole module, then eyeball it",
      "Write tests first, run them, and share the specific failures with Claude to drive the next iteration",
      "Ask Claude to self-certify correctness",
      "Rewrite the prompt without running anything"
    ],
    "answer": 1,
    "explanation": "Test-driven iteration gives objective, targeted feedback on specific failures."
  },
  {
    "id": 280,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A reviewer reports five issues. Three interact (fixing one changes the others) and two are independent. How should feedback be given?",
    "options": [
      "Send all five separately in random order",
      "Send only the first and discard the rest",
      "Ask Claude to ignore the interacting ones",
      "Batch the interacting issues in one message and address the independent ones sequentially"
    ],
    "answer": 3,
    "explanation": "Interacting issues must be considered together. Independent ones can be fixed and verified one at a time."
  },
  {
    "id": 281,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Feedback on a failing output is 'make it better'. What makes feedback effective for refinement?",
    "options": [
      "Targeted, specific descriptions of what failed, together with the expected result",
      "Broad encouragement to try harder",
      "A longer persona prompt",
      "Switching models each round"
    ],
    "answer": 0,
    "explanation": "Specific failures plus expected outcomes let the next attempt converge."
  },
  {
    "id": 282,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Requirements are unclear before building a feature in Claude Code. Which technique surfaces design considerations early?",
    "options": [
      "Start coding and ask afterwards",
      "Choose the most common design silently",
      "Have Claude interview you with clarifying questions before implementing",
      "Set temperature to 0"
    ],
    "answer": 2,
    "explanation": "The interview pattern exposes hidden constraints before work begins."
  },
  {
    "id": 283,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "Tests must never run against the production database. Where should this be enforced?",
    "options": [
      "As a bold sentence in CLAUDE.md",
      "In the README",
      "In a skill's description",
      "In settings permissions or a PreToolUse hook, because CLAUDE.md guidance is advisory and may not be followed every time"
    ],
    "answer": 3,
    "explanation": "Hard constraints require deterministic enforcement outside model discretion."
  },
  {
    "id": 284,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which instruction belongs in CLAUDE.md rather than in a hook or permission?",
    "options": [
      "Blocking writes to .env files",
      "Preferred naming conventions and architectural guidance where occasional deviation is acceptable",
      "Forbidding rm -rf",
      "Requiring formatting after every edit"
    ],
    "answer": 1,
    "explanation": "Soft guidance suits CLAUDE.md. Must-never and must-always rules suit hooks and permissions."
  },
  {
    "id": 285,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "A team's CLAUDE.md says 'never edit files under /migrations', yet a migration was edited. How should the configuration be restructured?",
    "options": [
      "Make the CLAUDE.md sentence longer and bold",
      "Move the sentence to the end of the file",
      "Keep the guidance in CLAUDE.md but add a settings deny rule or PreToolUse hook that deterministically blocks the edit",
      "Add the rule to a slash command"
    ],
    "answer": 2,
    "explanation": "Strengthening wording does not make advice enforceable. A permission or hook does."
  },
  {
    "id": 286,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Which characteristic separates enforcement mechanisms from CLAUDE.md?",
    "options": [
      "Hooks and permissions run deterministically outside the model's discretion, whereas CLAUDE.md is context the model usually follows",
      "CLAUDE.md is applied by the runtime and hooks by the model",
      "They are identical in strength",
      "Hooks only apply to subagents"
    ],
    "answer": 0,
    "explanation": "The distinction is deterministic runtime enforcement versus probabilistic model compliance."
  },
  {
    "id": 287,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "Code must be auto-formatted after every file edit regardless of whether Claude remembers. Which mechanism?",
    "options": [
      "A CLAUDE.md reminder to format",
      "A PostToolUse hook matched to the edit tools that runs the formatter",
      "A slash command the user must remember",
      "A skill named format"
    ],
    "answer": 1,
    "explanation": "Automatic, model-independent enforcement is what hooks provide."
  },
  {
    "id": 288,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A test convention applies only to files matching **/*.test.py across many directories and should load only when editing them. Which mechanism?",
    "options": [
      "Root CLAUDE.md for everything",
      "A hook",
      "A user-level slash command",
      "A .claude/rules/ file with a paths glob in its frontmatter"
    ],
    "answer": 3,
    "explanation": "Path-scoped rules load conditionally for matching files, which suits conventions spread across directories."
  },
  {
    "id": 289,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A team wants a shared /review command via version control and a personal /scratch command for one developer. Where do they go?",
    "options": [
      ".claude/commands/ in the repo for /review; ~/.claude/commands/ for /scratch",
      "Both in ~/.claude/commands/",
      "Both in CLAUDE.md",
      "/review in settings.json; /scratch in .mcp.json"
    ],
    "answer": 0,
    "explanation": "Project commands are shared through the repo. User commands stay personal."
  },
  {
    "id": 290,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A task will modify 40 files, has several valid architectures and needs stakeholder review before implementation. Which mode fits?",
    "options": [
      "Direct execution to start quickly",
      "The Message Batches API",
      "Plan mode, to explore and agree an approach before implementing",
      "A hook that skips planning"
    ],
    "answer": 2,
    "explanation": "Large scope, architectural uncertainty and review needs point to plan mode."
  },
  {
    "id": 291,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "A stack trace points to a single-line null check in one file. Which approach is appropriate?",
    "options": [
      "Full plan mode with an Explore subagent",
      "A stakeholder-approved design document",
      "Rewrite the module",
      "Direct execution, since scope is small, well understood and reversible"
    ],
    "answer": 3,
    "explanation": "Plan mode is overhead for a clearly scoped fix."
  },
  {
    "id": 292,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "A set of API conventions should be available in every session for every team member. Best method?",
    "options": [
      "Paste them inline in each prompt",
      "Put them in the project CLAUDE.md (optionally importing a file with @), since they are reusable across sessions",
      "Mention them once in chat",
      "Store them in a personal note"
    ],
    "answer": 1,
    "explanation": "Reusable, cross-session guidance belongs in CLAUDE.md."
  },
  {
    "id": 293,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "You want Claude to consider one specific existing file for this task only. Which method is most appropriate?",
    "options": [
      "Add it to CLAUDE.md permanently",
      "Describe its contents from memory inline",
      "An @ file reference in the prompt, which pulls that file in on demand",
      "Create a hook"
    ],
    "answer": 2,
    "explanation": "@ references target specific files without permanently loading them."
  },
  {
    "id": 294,
    "difficulty": "easy",
    "category": "claude-code",
    "question": "A short clarification applies only to this conversation ('the staging key was rotated today'). Which method?",
    "options": [
      "Inline description in the prompt, because it is specific and not needed across sessions",
      "CLAUDE.md",
      "A skill",
      "settings.json"
    ],
    "answer": 0,
    "explanation": "One-off details do not warrant persistent configuration."
  },
  {
    "id": 295,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "CLAUDE.md is growing large with architecture documents that are only sometimes relevant. How can context stay modular?",
    "options": [
      "Paste everything into one file",
      "Use @ imports from CLAUDE.md to reference separate files, or move file-type guidance into path-scoped .claude/rules/",
      "Delete the documentation",
      "Move all guidance into user-level memory"
    ],
    "answer": 1,
    "explanation": "Modular references and scoped rules keep always-on context lean."
  },
  {
    "id": 296,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A customer writes 'I want to speak to a human'. What should the agent do?",
    "options": [
      "Try to resolve with tools first and escalate only if it fails",
      "Ask the customer to justify the request",
      "Lower priority until sentiment is analysed",
      "Honour the request immediately and escalate with a handoff summary, without first attempting investigation"
    ],
    "answer": 3,
    "explanation": "An explicit request for a human is honoured immediately."
  },
  {
    "id": 297,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A customer is frustrated but asks for an order status and has not asked for a human. Best handling?",
    "options": [
      "Acknowledge the frustration and offer resolution; escalate if they reiterate the request or the issue exceeds policy",
      "Escalate immediately based on sentiment",
      "Ignore the frustration",
      "Refuse to answer until the customer is calm"
    ],
    "answer": 0,
    "explanation": "Frustration alone is not an escalation trigger. An explicit request or a policy limit is."
  },
  {
    "id": 298,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A customer's request falls outside any documented policy (for example a competitor price match). What should the agent do?",
    "options": [
      "Invent a reasonable exception",
      "Deny the request",
      "Escalate because of a policy gap, rather than improvising policy",
      "Retry tools until one works"
    ],
    "answer": 2,
    "explanation": "A policy gap is a legitimate escalation reason."
  },
  {
    "id": 299,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "A customer lookup returns three accounts matching the name. What should the agent do?",
    "options": [
      "Select the most recent account",
      "Pick the highest-value account",
      "Escalate every multi-match lookup",
      "Ask for an additional identifier rather than picking one by heuristic"
    ],
    "answer": 3,
    "explanation": "Heuristic selection risks acting on the wrong customer."
  },
  {
    "id": 300,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "Which is an unreliable trigger for escalation?",
    "options": [
      "An explicit human request",
      "Self-reported model confidence scores or sentiment on their own",
      "A policy gap",
      "Inability to make progress"
    ],
    "answer": 1,
    "explanation": "Confidence and sentiment are poor proxies. Explicit requests, policy gaps and stalled progress are reliable."
  },
  {
    "id": 301,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A document often lacks a purchase-order number, yet the schema marks it required and Claude invents values. Fix?",
    "options": [
      "Add a prompt line saying 'never lie'",
      "Increase max_tokens",
      "Make the field optional or nullable so the model can return null when the source lacks it",
      "Mark every field required"
    ],
    "answer": 2,
    "explanation": "A required field leaves the model no honest way to express absence."
  },
  {
    "id": 302,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "An extraction category is sometimes ambiguous or does not fit the listed enum values. Which design handles it?",
    "options": [
      "Add an 'other' value (with a detail string) and an 'unclear' value to the enum",
      "Force the nearest value",
      "Remove the field",
      "Use free text for every field"
    ],
    "answer": 0,
    "explanation": "Escape-hatch enum values capture ambiguity instead of forcing a wrong label."
  },
  {
    "id": 303,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Why do nullable fields reduce hallucination?",
    "options": [
      "They make the output shorter",
      "They give the model a legitimate way to express missing information instead of fabricating a value to satisfy a required field",
      "They disable validation",
      "They raise the effective temperature"
    ],
    "answer": 1,
    "explanation": "Fabrication is often caused by a schema that demands a value."
  },
  {
    "id": 304,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Documents vary in date and currency formats, causing inconsistent output. Which combination helps?",
    "options": [
      "Temperature 1.0",
      "A larger max_tokens",
      "Removing the schema",
      "Format normalisation instructions, a few few-shot examples, and a schema with optional fields"
    ],
    "answer": 3,
    "explanation": "Normalisation rules plus examples and tolerant schemas improve consistency and reduce hallucination."
  },
  {
    "id": 305,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Tool use with a JSON schema is in place. Which error class can still occur?",
    "options": [
      "Syntax errors in the JSON",
      "Missing required keys",
      "Semantic errors such as wrong values, misplaced fields or totals that do not add up",
      "Unquoted strings"
    ],
    "answer": 2,
    "explanation": "Schemas prevent structural errors but cannot verify that values are correct."
  },
  {
    "id": 306,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "Claude sometimes answers conversationally instead of calling extract_invoice, breaking the pipeline. Which setting guarantees a call?",
    "options": [
      "tool_choice auto",
      "tool_choice none",
      "Setting temperature to 0",
      "tool_choice forcing the specific tool: {\"type\": \"tool\", \"name\": \"extract_invoice\"}"
    ],
    "answer": 3,
    "explanation": "A forced tool_choice guarantees that tool is called, so conversational replies cannot break downstream parsing."
  },
  {
    "id": 307,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "What does tool_choice 'any' do?",
    "options": [
      "Lets Claude respond with text or a tool as it prefers",
      "Requires Claude to call one of the provided tools, letting it choose which",
      "Forbids tool calls",
      "Calls every tool in parallel"
    ],
    "answer": 1,
    "explanation": "any guarantees some tool call, while a named tool guarantees a specific one."
  },
  {
    "id": 308,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Which tool_choice setting lets Claude decide between replying in text and calling a tool?",
    "options": [
      "any",
      "A forced named tool",
      "auto",
      "none"
    ],
    "answer": 2,
    "explanation": "auto is the default. any and forced settings guarantee a call. none prevents tool use."
  },
  {
    "id": 309,
    "difficulty": "hard",
    "category": "prompt-structured-output",
    "question": "A document may be an invoice, receipt or contract, each with its own extraction tool, and structured output must always be produced. Which setting?",
    "options": [
      "tool_choice any, with one extraction tool per document type, so Claude must call one and chooses the matching one",
      "auto",
      "none",
      "A forced single invoice tool"
    ],
    "answer": 0,
    "explanation": "Unknown document type means the specific tool cannot be forced, but a tool call can be."
  },
  {
    "id": 310,
    "difficulty": "medium",
    "category": "prompt-structured-output",
    "question": "Which consequence should you expect when tool_choice forces a tool?",
    "options": [
      "Semantic correctness is guaranteed",
      "No conversational preamble precedes the tool_use block",
      "Claude calls every tool",
      "Rate limits are bypassed"
    ],
    "answer": 1,
    "explanation": "Forcing guarantees the call and its shape, not the correctness of the values."
  },
  {
    "id": 311,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "A workflow needs get_customer before lookup_order and process_refund. How is the prerequisite order reliably enforced?",
    "options": [
      "A prompt line asking Claude to call get_customer first",
      "Give all tools identical descriptions",
      "Increase max_tokens",
      "A programmatic gate or hook that blocks the dependent tools until verified customer data exists, optionally forcing get_customer first via tool_choice"
    ],
    "answer": 3,
    "explanation": "When order failures have consequences, enforce it deterministically."
  },
  {
    "id": 312,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "How can you guarantee extract_metadata runs before enrichment tools in a multi-step extraction?",
    "options": [
      "Force extract_metadata via tool_choice on the first request, then allow auto on later turns",
      "Force it on every request",
      "Hope the model picks it first",
      "Remove the other tools permanently"
    ],
    "answer": 0,
    "explanation": "Force the prerequisite once, then release control so later steps can choose normally."
  },
  {
    "id": 313,
    "difficulty": "hard",
    "category": "tool-design-mcp",
    "question": "Why not rely on prompt text alone for a tool prerequisite with financial impact?",
    "options": [
      "Prompts cannot mention tools",
      "Hooks are slower",
      "Prompt compliance is probabilistic, so deterministic gating is needed when ordering failures have consequences",
      "The model never follows prompts"
    ],
    "answer": 2,
    "explanation": "Probabilistic compliance is not enough for rules that must always hold."
  },
  {
    "id": 314,
    "difficulty": "medium",
    "category": "claude-code",
    "question": "You need every caller of processRefund in an unfamiliar codebase. Which approach is best?",
    "options": [
      "Read every file in the repo",
      "Glob for all source files and read them",
      "Ask the user for a file list",
      "Grep for the function name, then Read the relevant files"
    ],
    "answer": 3,
    "explanation": "Grep locates content efficiently without loading everything."
  },
  {
    "id": 315,
    "difficulty": "hard",
    "category": "claude-code",
    "question": "How should exploration of a large codebase be structured to stay within the context window?",
    "options": [
      "Read all files upfront",
      "Glob and Read everything matched",
      "Build understanding incrementally: Grep entry points, Read followed imports, trace flows, and use subagents for verbose discovery",
      "Avoid reading files and guess"
    ],
    "answer": 2,
    "explanation": "Incremental, targeted exploration manages context better than bulk reading."
  },
  {
    "id": 316,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "Why must every Messages API request include the conversation history?",
    "options": [
      "The API is stateless: it keeps no memory between calls, so the client must send the relevant messages each time",
      "The server stores history but billing requires resending",
      "History is cached by session ID automatically",
      "Only the latest message matters"
    ],
    "answer": 0,
    "explanation": "State lives in the request you send."
  },
  {
    "id": 317,
    "difficulty": "hard",
    "category": "context-reliability",
    "question": "A chat app lets browsers send the whole messages array. What is the risk?",
    "options": [
      "The array may be too short",
      "Untrusted clients can forge roles or inject fabricated assistant turns, so canonical history should be kept server-side",
      "Tokens are not counted",
      "Roles are ignored by the API"
    ],
    "answer": 1,
    "explanation": "Whoever assembles the history controls what the model believes it said."
  },
  {
    "id": 318,
    "difficulty": "medium",
    "category": "context-reliability",
    "question": "In a tool loop, what must be appended to the messages list after Claude returns tool_use?",
    "options": [
      "Only the tool result as an assistant turn",
      "Nothing; the API tracks it",
      "A system message",
      "The assistant turn with its tool_use blocks, then a user turn with matching tool_result blocks"
    ],
    "answer": 3,
    "explanation": "The loop continues by extending the history with the assistant turn and its results."
  },
  {
    "id": 319,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Claude confuses search_orders and lookup_order. What is the first fix?",
    "options": [
      "Expand and differentiate the descriptions (purpose, inputs, examples, when to use versus the other)",
      "Add a routing classifier",
      "Merge them into one tool",
      "Add few-shot examples first"
    ],
    "answer": 0,
    "explanation": "Fix the primary selection signal before adding machinery."
  },
  {
    "id": 320,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "Which information improves tool selection reliability most?",
    "options": [
      "A longer tool name",
      "The tool's source code",
      "Use-case examples, input format specifications and explicit disambiguation from similar tools",
      "The company mission statement"
    ],
    "answer": 2,
    "explanation": "Descriptions need to say what the tool is for, how to call it and when not to."
  },
  {
    "id": 321,
    "difficulty": "medium",
    "category": "tool-design-mcp",
    "question": "A shared .mcp.json needs an API token without committing the secret. Which approach?",
    "options": [
      "Hardcode the token",
      "Put the token in CLAUDE.md",
      "Commit ~/.claude.json",
      "Use ${ENV_VAR} expansion in .mcp.json, set the variable per developer, and verify tool discovery with /mcp"
    ],
    "answer": 3,
    "explanation": "Environment expansion keeps secrets out of version control while sharing the configuration."
  }
];

// --- TOP 100 INTERVIEW INDICES ---
// ZERO-BASED ARRAY INDICES (not question IDs), priority ordered.
// 322-question bank. First 20 are MUST-KNOW; remaining items are weighted by the official exam blueprint.
const hotsQuestions = [
    // TIER 1 - MUST KNOW
    108, // agentic-architecture
    106, // agentic-architecture
    104, // agentic-architecture
    102, // agentic-architecture
    100, // agentic-architecture
    26, // agentic-architecture
    22, // agentic-architecture
    19, // agentic-architecture
    16, // agentic-architecture
    15, // agentic-architecture
    13, // agentic-architecture
    10, // agentic-architecture
    9, // agentic-architecture
    7, // agentic-architecture
    3, // agentic-architecture
    118, // tool-design-mcp
    116, // tool-design-mcp
    114, // tool-design-mcp
    112, // tool-design-mcp
    110, // tool-design-mcp
    // TIER 2 - HIGH VALUE
    44, // tool-design-mcp
    35, // tool-design-mcp
    34, // tool-design-mcp
    32, // tool-design-mcp
    30, // tool-design-mcp
    29, // tool-design-mcp
    28, // tool-design-mcp
    128, // claude-code
    127, // claude-code
    125, // claude-code
    123, // claude-code
    120, // claude-code
    63, // claude-code
    61, // claude-code
    58, // claude-code
    57, // claude-code
    52, // claude-code
    50, // claude-code
    48, // claude-code
    140, // prompt-structured-output
    138, // prompt-structured-output
    136, // prompt-structured-output
    134, // prompt-structured-output
    132, // prompt-structured-output
    130, // prompt-structured-output
    84, // prompt-structured-output
    83, // prompt-structured-output
    82, // prompt-structured-output
    81, // prompt-structured-output
    80, // prompt-structured-output
    77, // prompt-structured-output
    76, // prompt-structured-output
    75, // prompt-structured-output
    73, // prompt-structured-output
    72, // prompt-structured-output
    70, // prompt-structured-output
    69, // prompt-structured-output
    66, // prompt-structured-output
    148, // context-reliability
    146, // context-reliability
    // TIER 3 - FOUNDATIONS
    144, // context-reliability
    142, // context-reliability
    98, // context-reliability
    97, // context-reliability
    96, // context-reliability
    95, // context-reliability
    93, // context-reliability
    91, // context-reliability
    90, // context-reliability
    88, // context-reliability
    109, // agentic-architecture
    107, // agentic-architecture
    105, // agentic-architecture
    103, // agentic-architecture
    101, // agentic-architecture
    25, // agentic-architecture
    23, // agentic-architecture
    21, // agentic-architecture
    20, // agentic-architecture
    18, // agentic-architecture
    17, // agentic-architecture
    12, // agentic-architecture
    119, // tool-design-mcp
    117, // tool-design-mcp
    115, // tool-design-mcp
    113, // tool-design-mcp
    111, // tool-design-mcp
    43, // tool-design-mcp
    129, // claude-code
    126, // claude-code
    124, // claude-code
    122, // claude-code
    121, // claude-code
    64, // claude-code
    62, // claude-code
    60, // claude-code
    139, // prompt-structured-output
    149, // context-reliability
    147, // context-reliability
    145 // context-reliability
];
