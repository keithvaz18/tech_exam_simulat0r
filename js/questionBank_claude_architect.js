/* ======================================================
CLAUDE CERTIFIED ARCHITECT - FOUNDATIONS (CCAR-F)
====================================================== */

const questionBank = [
{
id:0,
difficulty:"easy",
category:"agentic-architecture",
question:"In a Claude Agent SDK agentic loop, which signal should determine whether the loop continues for another iteration?",
options:[
"stop_reason equals \"tool_use\" - execute the requested tools, append results, and call the model again",
"The assistant message contains the phrase \"I am done\"",
"A fixed iteration counter reaches its configured cap",
"The assistant message contains any text content block"
],
answer:0,
explanation:"The documented control flow is: continue while stop_reason is \"tool_use\", terminate when it is \"end_turn\". Parsing natural-language phrases, relying on arbitrary caps as the primary stop, or checking for text blocks are listed anti-patterns."
},

{
id:1,
difficulty:"medium",
category:"agentic-architecture",
question:"After executing a requested tool inside an agentic loop, what must happen before the next model call?",
options:[
"The result is discarded and the model re-derives it from memory",
"The tool result is appended to the conversation history so the model can reason about its next action",
"The conversation history is cleared to keep the context small",
"The coordinator rewrites the system prompt with the tool output"
],
answer:1,
explanation:"Tool results are added to the message history between iterations. That is how the model incorporates new information and decides whether another tool call or a final answer is needed."
},

{
id:2,
difficulty:"medium",
category:"agentic-architecture",
question:"A team hard-codes the order search -> analyze -> summarize for every request, even trivial ones. Which statement best describes the tradeoff versus model-driven tool selection?",
options:[
"A fixed sequence is predictable but cannot adapt to the request; model-driven selection lets Claude choose the next tool from context",
"A fixed sequence is always more accurate because Claude cannot reason about tools",
"Both approaches are identical because the model ignores tool definitions",
"Model-driven selection cannot be combined with any programmatic checks"
],
answer:0,
explanation:"The exam distinguishes model-driven decision-making (Claude reasons about the next tool) from pre-configured decision trees. Each has a place, but fixed pipelines waste work on simple queries and cannot adapt."
},

{
id:3,
difficulty:"hard",
category:"agentic-architecture",
question:"Which loop-termination design is an explicit anti-pattern for agentic loops?",
options:[
"Setting an arbitrary iteration cap as the primary mechanism for deciding the task is complete",
"Terminating when stop_reason is \"end_turn\"",
"Adding a high iteration cap purely as a runaway safety net alongside stop_reason checks",
"Appending tool results before the next request"
],
answer:0,
explanation:"Caps may exist as a safety backstop, but using them as the primary stop condition, or parsing text for completion, are anti-patterns. The stop_reason is the authoritative signal."
},

{
id:4,
difficulty:"easy",
category:"agentic-architecture",
question:"In a hub-and-spoke multi-agent architecture, which component handles inter-subagent communication, error handling, and information routing?",
options:[
"Each subagent directly messages every other subagent",
"The end user, who relays information manually",
"A shared global memory that all subagents write to freely",
"The coordinator agent"
],
answer:3,
explanation:"Hub-and-spoke routes all subagent communication through the coordinator for observability, consistent error handling, and controlled information flow."
},

{
id:5,
difficulty:"medium",
category:"agentic-architecture",
question:"A coordinator spawns a synthesis subagent. The synthesis subagent produces a report that ignores everything the search subagent found. What is the most likely cause?",
options:[
"Subagents automatically share memory, so the search subagent's output was overwritten",
"The coordinator did not include the search findings in the synthesis subagent's prompt; subagents do not inherit the coordinator's context",
"The synthesis subagent's tool list was too short",
"The coordinator's allowedTools included too many tools"
],
answer:1,
explanation:"Subagents operate with isolated context. Anything they need - prior findings, constraints - must be passed explicitly in the prompt."
},

{
id:6,
difficulty:"medium",
category:"agentic-architecture",
question:"For a coordinator to be able to spawn subagents with the Claude Agent SDK, which configuration is required?",
options:[
"Each subagent must be registered in CLAUDE.md",
"allowedTools must include \"Task\" because the Task tool is the mechanism for spawning subagents",
"The coordinator must run in plan mode",
"The coordinator must set tool_choice to \"any\" on every request"
],
answer:1,
explanation:"Subagents are invoked via the Task tool. If \"Task\" is not in the coordinator's allowedTools, it cannot delegate."
},

{
id:7,
difficulty:"hard",
category:"agentic-architecture",
question:"A research coordinator decomposes the topic \"impact of AI on healthcare\" into only subtasks about radiology imaging. Each subagent performs correctly, yet the final report is badly incomplete. Where is the root cause?",
options:[
"Overly narrow task decomposition by the coordinator",
"The synthesis subagent's formatting instructions",
"The web search subagent's rate limiting",
"The document analysis subagent's tool descriptions"
],
answer:0,
explanation:"When downstream agents succeed within their assigned scope but coverage is missing, the assignment itself - decomposition - is at fault. Coordinators should partition the full topic breadth."
},

{
id:8,
difficulty:"medium",
category:"agentic-architecture",
question:"Which coordinator design best reduces wasted work across varied queries?",
options:[
"Analyze each query and dynamically select which subagents to invoke instead of always running the full pipeline",
"Always invoke every subagent regardless of query complexity",
"Let subagents decide independently whether to run",
"Invoke subagents randomly to diversify results"
],
answer:0,
explanation:"Coordinators should assess query requirements and choose the relevant subagents, rather than routing every query through the entire pipeline."
},

{
id:9,
difficulty:"hard",
category:"agentic-architecture",
question:"How can a coordinator best reduce duplicated effort across parallel research subagents?",
options:[
"Give every subagent the identical full question",
"Run subagents sequentially so each one repeats the last one's searches",
"Remove the synthesis step",
"Partition the research scope, assigning distinct subtopics or source types to each subagent"
],
answer:3,
explanation:"Explicit partitioning of scope (distinct subtopics or source types) minimizes overlap and improves coverage."
},

{
id:10,
difficulty:"hard",
category:"agentic-architecture",
question:"A coordinator evaluates a first synthesis and finds gaps in coverage. Which pattern best addresses this?",
options:[
"Ship the report and note the gaps in a footer",
"Rerun the identical first pass with a larger max_tokens",
"Ask the synthesis subagent to invent the missing sections",
"An iterative refinement loop: re-delegate targeted queries to search/analysis subagents, then re-invoke synthesis until coverage is sufficient"
],
answer:3,
explanation:"Iterative refinement lets the coordinator identify gaps, issue targeted follow-up delegations, and re-synthesize until quality criteria are met."
},

{
id:11,
difficulty:"medium",
category:"agentic-architecture",
question:"How should a coordinator spawn three independent research subagents to minimize latency?",
options:[
"Use a single subagent with three times the prompt length",
"Emit one Task call per turn across three separate turns",
"Emit multiple Task tool calls in a single coordinator response so they run in parallel",
"Spawn one subagent and have it spawn the others"
],
answer:2,
explanation:"Parallel subagents are spawned by emitting multiple Task calls within one response rather than across separate turns."
},

{
id:12,
difficulty:"medium",
category:"agentic-architecture",
question:"Which coordinator prompt style best supports subagent adaptability?",
options:[
"Specify research goals and quality criteria rather than rigid step-by-step procedures",
"List every tool call in exact order with no flexibility",
"Provide only the topic name and no goals",
"Forbid subagents from using any tools"
],
answer:0,
explanation:"Goal- and criteria-oriented prompts let subagents adapt to what they find; prescriptive procedures make them brittle."
},

{
id:13,
difficulty:"hard",
category:"agentic-architecture",
question:"When passing findings from a search subagent to a synthesis subagent, how should the data be formatted to preserve attribution?",
options:[
"As structured data separating content from metadata such as source URL, document name, and page number",
"As a single prose paragraph summarizing everything",
"As raw HTML dumped into the prompt",
"As a list of claims with all citations removed to save tokens"
],
answer:0,
explanation:"Structured formats that keep claim content distinct from source metadata preserve provenance through the pipeline."
},

{
id:14,
difficulty:"easy",
category:"agentic-architecture",
question:"What does the AgentDefinition configuration for a subagent typically define?",
options:[
"The user's billing plan",
"A description, a system prompt, and tool restrictions for that subagent type",
"The MCP server's network topology",
"The model's training data"
],
answer:1,
explanation:"AgentDefinition configures each subagent type with its description, system prompt, and the tools it may use."
},

{
id:15,
difficulty:"hard",
category:"agentic-architecture",
question:"In a customer support agent, 12% of runs call process_refund without first verifying identity via get_customer. Refund errors are costly. What is the most effective fix?",
options:[
"Add a stronger system prompt sentence saying verification is mandatory",
"Add more few-shot examples showing verification first",
"Lower the model's temperature",
"Add a programmatic prerequisite gate that blocks process_refund until get_customer has returned a verified customer ID"
],
answer:3,
explanation:"When deterministic compliance is required, prompt instructions have a non-zero failure rate. Hooks or prerequisite gates enforce ordering programmatically."
},

{
id:16,
difficulty:"hard",
category:"agentic-architecture",
question:"Which implementation best enforces a policy that refunds above $500 require human approval?",
options:[
"A system-prompt line asking Claude to be careful with large refunds",
"A tool-call interception hook that blocks the call and redirects to the human escalation workflow",
"A PostToolUse hook that edits the refund after it is processed",
"A longer tool description for process_refund"
],
answer:1,
explanation:"Interception hooks on outgoing tool calls provide guaranteed enforcement of business rules, unlike probabilistic prompt guidance."
},

{
id:17,
difficulty:"medium",
category:"agentic-architecture",
question:"Three MCP tools return timestamps as Unix epoch, ISO 8601 strings, and numeric status codes respectively. Which mechanism best normalizes this before the agent reasons about it?",
options:[
"Retrying each call until formats match",
"A system prompt asking Claude to mentally convert each format",
"A PostToolUse hook that transforms tool results into a consistent format",
"Removing the tools that use different formats"
],
answer:2,
explanation:"PostToolUse hooks intercept tool results for transformation before the model processes them, giving consistent, deterministic normalization."
},

{
id:18,
difficulty:"medium",
category:"agentic-architecture",
question:"When should you choose hooks over prompt-based enforcement?",
options:[
"When the model has no system prompt",
"Only when using batch processing",
"When the rule is a stylistic preference",
"When business rules require guaranteed compliance rather than probabilistic adherence"
],
answer:3,
explanation:"Hooks give deterministic guarantees; prompts are probabilistic. Use hooks where failures have financial, legal, or safety consequences."
},

{
id:19,
difficulty:"hard",
category:"agentic-architecture",
question:"A human agent receives an escalation but cannot see the conversation transcript. What should the handoff include?",
options:[
"Nothing - the human will re-ask the customer",
"The full raw transcript with no summary",
"Only the customer's last message",
"A structured summary: customer ID, root cause, amounts involved, and recommended action"
],
answer:3,
explanation:"Structured handoff protocols compile the key facts so human agents can act without the transcript."
},

{
id:20,
difficulty:"medium",
category:"agentic-architecture",
question:"A customer sends one message with a refund request, an address change, and a billing question. What is the recommended handling?",
options:[
"Decompose into distinct items, investigate each (in parallel using shared context), then synthesize a unified response",
"Answer all three in a single guess without tool calls",
"Escalate every multi-issue message to a human",
"Handle only the first issue and ignore the rest"
],
answer:0,
explanation:"Multi-concern requests should be decomposed, investigated per item with shared context, and then merged into one resolution."
},

{
id:21,
difficulty:"medium",
category:"agentic-architecture",
question:"Which task fits prompt chaining best?",
options:[
"Open-ended investigation of an unfamiliar legacy system",
"Any task where the next step depends heavily on surprises",
"Exploring a bug with unknown root cause",
"A predictable multi-aspect review: analyze each file individually, then run a cross-file integration pass"
],
answer:3,
explanation:"Prompt chaining suits predictable, multi-aspect workflows; dynamic decomposition suits open-ended investigation."
},

{
id:22,
difficulty:"hard",
category:"agentic-architecture",
question:"You must \"add comprehensive tests to a legacy codebase\" with no prior knowledge of it. Which decomposition strategy fits?",
options:[
"Generate tests for every file in one prompt",
"Map the structure first, identify high-impact areas, then build a prioritized plan that adapts as dependencies are discovered",
"Ask for a plan without reading any code",
"A fixed chain: write tests for files in alphabetical order"
],
answer:1,
explanation:"Open-ended tasks call for adaptive decomposition: discover, prioritize, then adapt the plan as findings emerge."
},

{
id:23,
difficulty:"medium",
category:"agentic-architecture",
question:"A 14-file pull request review gives uneven depth and contradictory findings in a single pass. What restructuring helps most?",
options:[
"Run the same pass three times and keep only majority findings",
"Switch to a model with a larger context window and keep one pass",
"Per-file local analysis passes plus a separate cross-file integration pass",
"Ask developers to split every PR into 3-file pieces"
],
answer:2,
explanation:"The cause is attention dilution; focused passes fix depth consistency and an integration pass catches cross-file issues."
},

{
id:24,
difficulty:"easy",
category:"agentic-architecture",
question:"Which CLI feature resumes a specific earlier Claude Code investigation by name?",
options:[
"--resume <session-name>",
"--restore-last-model",
"--continue-from-cache",
"--replay-tools"
],
answer:0,
explanation:"Named session resumption uses --resume <session-name> to continue a particular prior conversation."
},

{
id:25,
difficulty:"medium",
category:"agentic-architecture",
question:"What is fork_session used for?",
options:[
"Merging two sessions into one transcript",
"Deleting a session's history",
"Creating independent branches from a shared analysis baseline to explore divergent approaches",
"Switching the underlying model mid-session"
],
answer:2,
explanation:"fork_session lets you branch from a common baseline, for example to compare two refactoring or testing strategies."
},

{
id:26,
difficulty:"hard",
category:"agentic-architecture",
question:"You resume a session after several analyzed files have been modified. The prior tool results are largely stale. What is the most reliable approach?",
options:[
"Start a new session with a structured summary of prior findings, or explicitly tell the resumed session which files changed for targeted re-analysis",
"Resume silently and trust the stale tool results",
"Never use sessions after any code change",
"Resume and ask the model to guess what changed"
],
answer:0,
explanation:"Stale tool results can mislead. Either inject a summary into a fresh session or inform the resumed session of specific changes."
},

{
id:27,
difficulty:"medium",
category:"tool-design-mcp",
question:"Two tools, get_customer and lookup_order, have one-line descriptions and accept similar IDs. The agent often picks the wrong one. What is the best first step?",
options:[
"Expand the descriptions with input formats, example queries, edge cases, and boundaries versus similar tools",
"Add 8 few-shot examples to the system prompt",
"Build a keyword-based routing layer that pre-selects tools",
"Merge both tools into one lookup_entity tool immediately"
],
answer:0,
explanation:"Poor descriptions are the root cause, and fixing them is low-effort and high-leverage. Routing layers and consolidation are heavier alternatives."
},

{
id:28,
difficulty:"hard",
category:"tool-design-mcp",
question:"Two tools named analyze_content and analyze_document have nearly identical descriptions and are frequently confused. Which fix aligns with best practice?",
options:[
"Add more tools with similar names",
"Keep both names and add a sentence to the system prompt",
"Delete one tool and ask Claude to infer behavior",
"Rename and re-describe them to remove overlap, such as extract_web_results with a web-specific description"
],
answer:3,
explanation:"Ambiguous, overlapping tools cause misrouting. Distinct names and descriptions with clear boundaries eliminate functional overlap."
},

{
id:29,
difficulty:"hard",
category:"tool-design-mcp",
question:"A single generic analyze_document tool does too many things. Which refactor is recommended?",
options:[
"Merge it with every other tool",
"Remove its description to avoid confusion",
"Make its input schema accept free-form text only",
"Split into purpose-specific tools with defined contracts, e.g. extract_data_points, summarize_content, verify_claim_against_source"
],
answer:3,
explanation:"Purpose-specific tools with clear input/output contracts improve selection reliability."
},

{
id:30,
difficulty:"hard",
category:"tool-design-mcp",
question:"Tools are well described, but Claude still associates certain tools with particular words from the system prompt. What should you review?",
options:[
"The size of the user's screen",
"Keyword-sensitive wording in the system prompt that may create unintended tool associations",
"The MCP server's log rotation",
"The model's max_tokens"
],
answer:1,
explanation:"System-prompt wording can override good tool descriptions by creating unintended associations."
},

{
id:31,
difficulty:"medium",
category:"tool-design-mcp",
question:"How should an MCP tool signal that a call failed so the agent can respond appropriately?",
options:[
"Crash the MCP server process",
"Return a response with the isError flag and structured metadata describing the failure",
"Throw away the error and return \"OK\"",
"Return a successful empty result"
],
answer:1,
explanation:"The MCP isError flag communicates tool failures; structured metadata lets the agent choose a recovery action."
},

{
id:32,
difficulty:"hard",
category:"tool-design-mcp",
question:"A tool always returns the generic message \"Operation failed\". Why is this problematic?",
options:[
"The MCP protocol forbids error messages",
"Generic messages are slower to transmit",
"The agent cannot tell transient, validation, business, or permission errors apart, so it cannot choose retry versus explain versus escalate",
"It makes tool descriptions longer"
],
answer:2,
explanation:"Uniform errors prevent appropriate recovery decisions. Structured categories and retryability flags enable targeted handling."
},

{
id:33,
difficulty:"medium",
category:"tool-design-mcp",
question:"A refund request violates a business policy. How should the tool respond?",
options:[
"Mark it retryable so the agent keeps trying",
"Return an error marked non-retryable with a customer-friendly explanation so the agent can communicate it",
"Return a stack trace for the customer to read",
"Return an empty success"
],
answer:1,
explanation:"Business-rule violations are non-retryable; a customer-friendly explanation lets the agent respond appropriately."
},

{
id:34,
difficulty:"hard",
category:"tool-design-mcp",
question:"A search subagent hits a transient timeout. What is the best error-handling design?",
options:[
"Propagate every timeout to the user",
"Immediately terminate the whole workflow",
"Return an empty result marked as success",
"Retry locally within the subagent and propagate to the coordinator only unresolved errors, with partial results and what was attempted"
],
answer:3,
explanation:"Local recovery handles transient failures; the coordinator receives only what cannot be resolved, with context for recovery."
},

{
id:35,
difficulty:"hard",
category:"tool-design-mcp",
question:"A query returns zero matches without any error. How should this be reported?",
options:[
"As an error with category permission",
"As a crash to be escalated",
"As a valid empty result (successful query, no matches), distinct from an access failure",
"As a timeout needing retry"
],
answer:2,
explanation:"Access failures need retry decisions; valid empty results are successful outcomes. Conflating them misleads recovery logic."
},

{
id:36,
difficulty:"medium",
category:"tool-design-mcp",
question:"A synthesis agent is given 18 tools including web search and database writers, and often misuses them. What is the recommended change?",
options:[
"Give it the coordinator's full tool set",
"Add more tools so it has options",
"Restrict it to a small, role-relevant tool set, with limited cross-role tools for high-frequency needs",
"Remove all tool descriptions"
],
answer:2,
explanation:"Too many tools degrade selection reliability, and out-of-specialization tools get misused. Scope tools by role."
},

{
id:37,
difficulty:"medium",
category:"tool-design-mcp",
question:"The synthesis agent needs quick fact checks (85% of cases) but sends everything through the coordinator, adding latency. What is the best improvement?",
options:[
"Batch all verifications to the end of its pass",
"Give it all web search tools",
"Give it a scoped verify_fact tool for simple lookups while complex verification still routes through the coordinator",
"Pre-cache extra context around every source"
],
answer:2,
explanation:"A scoped cross-role tool covers the common case under least privilege while preserving coordination for complex cases."
},

{
id:38,
difficulty:"medium",
category:"tool-design-mcp",
question:"You need to guarantee the model calls extract_metadata first before any enrichment tools. Which setting achieves this?",
options:[
"tool_choice \"auto\"",
"Adding \"please call extract_metadata first\" to the user message",
"tool_choice forced selection: {\"type\": \"tool\", \"name\": \"extract_metadata\"}, then continue in follow-up turns",
"Removing all other tools permanently"
],
answer:2,
explanation:"Forced tool choice guarantees a specific tool is called; later steps proceed in subsequent turns."
},

{
id:39,
difficulty:"easy",
category:"tool-design-mcp",
question:"What does tool_choice \"any\" guarantee?",
options:[
"The model must call a tool (its choice which) rather than reply with conversational text",
"The model never calls a tool",
"The model calls every tool once",
"The model calls only the first declared tool"
],
answer:0,
explanation:"\"any\" forces a tool call but lets the model pick; \"auto\" allows text instead; forced selection names the tool."
},

{
id:40,
difficulty:"medium",
category:"tool-design-mcp",
question:"Where should a team-shared MCP server configuration live, and how should its credentials be handled?",
options:[
"In a README file",
"In ~/.claude.json with the token hard-coded",
"In project-level .mcp.json, using environment variable expansion such as ${GITHUB_TOKEN} instead of committing secrets",
"In CLAUDE.md with the token in plain text"
],
answer:2,
explanation:".mcp.json is project-scoped and version-controlled; env var expansion keeps credentials out of the repo. Personal/experimental servers go in ~/.claude.json."
},

{
id:41,
difficulty:"medium",
category:"tool-design-mcp",
question:"Why would you expose an issue-tracker catalog or database schema as MCP resources?",
options:[
"To replace all tools with resources",
"To block the agent from reading data",
"To give agents visibility into available data without making exploratory tool calls",
"To encrypt the data at rest"
],
answer:2,
explanation:"MCP resources expose content catalogs so agents know what exists, reducing exploratory calls."
},

{
id:42,
difficulty:"medium",
category:"tool-design-mcp",
question:"Claude keeps using built-in Grep instead of a more capable MCP search tool. What is the best fix?",
options:[
"Rename the MCP server randomly",
"Remove Grep from the operating system",
"Enhance the MCP tool's description to explain its capabilities and outputs in detail",
"Shorten the MCP tool description"
],
answer:2,
explanation:"Detailed descriptions help the agent prefer the more capable tool."
},

{
id:43,
difficulty:"medium",
category:"tool-design-mcp",
question:"You need to find every file matching **/*.test.tsx. Which built-in tool is the best choice?",
options:[
"Write",
"Glob",
"Grep",
"Bash with cat"
],
answer:1,
explanation:"Glob matches file paths by pattern; Grep searches file contents."
},

{
id:44,
difficulty:"hard",
category:"tool-design-mcp",
question:"Edit fails because the target text occurs more than once. What is the reliable fallback?",
options:[
"Read the file, then use Write to save the modified full contents",
"Delete the file and start over",
"Retry the same Edit repeatedly",
"Use Glob to modify the text"
],
answer:0,
explanation:"When Edit lacks a unique anchor, Read plus Write is the dependable fallback."
},

{
id:45,
difficulty:"easy",
category:"claude-code",
question:"Where should a team-wide /review slash command be stored so every developer gets it on clone?",
options:[
"A .claude/config.json commands array",
".claude/commands/ in the project repository",
"~/.claude/commands/ on each developer's machine",
"Inside the user's shell profile"
],
answer:1,
explanation:"Project-scoped commands in .claude/commands/ are version-controlled. ~/.claude/commands/ is for personal commands."
},

{
id:46,
difficulty:"medium",
category:"claude-code",
question:"A new teammate does not receive the team's coding standards that you wrote in ~/.claude/CLAUDE.md. Why?",
options:[
"The file must be named README.md",
"User-level CLAUDE.md applies only to that user and is not shared through version control",
"Claude ignores CLAUDE.md for new users",
"Standards can only be set via API"
],
answer:1,
explanation:"Team instructions belong in project-level CLAUDE.md (.claude/CLAUDE.md or root), which is committed to the repo."
},

{
id:47,
difficulty:"medium",
category:"claude-code",
question:"A monolithic CLAUDE.md has become hard to maintain. Which options keep it modular?",
options:[
"Use @import to reference standards files and split topics into files under .claude/rules/",
"Delete all standards",
"Duplicate the file into every directory",
"Move everything into the system prompt of each run"
],
answer:0,
explanation:"@import syntax and .claude/rules/ topic files (testing.md, api-conventions.md, deployment.md) improve organization."
},

{
id:48,
difficulty:"hard",
category:"claude-code",
question:"Conventions for test files must apply to Button.test.tsx, api/user.test.ts, and tests scattered across many directories. What is the most maintainable mechanism?",
options:[
".claude/rules/ files with YAML frontmatter paths globs such as **/*.test.*",
"A single large root CLAUDE.md relying on inference",
"One CLAUDE.md in each directory",
"Skills invoked manually per test file"
],
answer:0,
explanation:"Glob-pattern rules load automatically by file path regardless of directory. Directory CLAUDE.md files are directory-bound."
},

{
id:49,
difficulty:"medium",
category:"claude-code",
question:"Which frontmatter field scopes a .claude/rules/ file to Terraform files only?",
options:[
"scope: terraform-only",
"model: terraform",
"context: fork",
"paths: [\"terraform/**/*\"]"
],
answer:3,
explanation:"Rules use YAML frontmatter paths with glob patterns for conditional activation."
},

{
id:50,
difficulty:"hard",
category:"claude-code",
question:"A skill produces very verbose codebase-analysis output that pollutes the main conversation. Which SKILL.md option addresses this?",
options:[
"argument-hint: verbose",
"context: fork, which runs the skill in an isolated sub-agent context",
"allowed-tools: none",
"Moving the skill to ~/.claude/commands/"
],
answer:1,
explanation:"context: fork isolates verbose or exploratory skill output from the main session."
},

{
id:51,
difficulty:"medium",
category:"claude-code",
question:"Which SKILL.md frontmatter option restricts what a skill may do during execution, such as preventing destructive actions?",
options:[
"argument-hint",
"fork_session",
"allowed-tools",
"paths"
],
answer:2,
explanation:"allowed-tools limits the tools available while the skill runs."
},

{
id:52,
difficulty:"hard",
category:"claude-code",
question:"When should guidance live in a skill rather than CLAUDE.md?",
options:[
"When it contains secrets",
"When it is a task-specific workflow invoked on demand; CLAUDE.md is for always-loaded universal standards",
"Never; skills are deprecated",
"When it must apply to every request"
],
answer:1,
explanation:"Skills are on-demand; CLAUDE.md is always loaded. Choose by how universally the guidance applies."
},

{
id:53,
difficulty:"easy",
category:"claude-code",
question:"Which task is best suited to plan mode?",
options:[
"Renaming a local variable",
"Fixing a typo in one comment",
"Adding a null check to one function with a clear stack trace",
"Restructuring a monolith into microservices with decisions about service boundaries across dozens of files"
],
answer:3,
explanation:"Plan mode fits complex, multi-file, architectural work with multiple valid approaches."
},

{
id:54,
difficulty:"medium",
category:"claude-code",
question:"What is the Explore subagent used for?",
options:[
"Running unit tests only",
"Isolating verbose discovery output and returning a summary to preserve main-conversation context",
"Deploying code to production",
"Managing API keys"
],
answer:1,
explanation:"Explore handles discovery in a separate context and returns summaries, preventing context exhaustion."
},

{
id:55,
difficulty:"medium",
category:"claude-code",
question:"What workflow combines plan mode and direct execution effectively?",
options:[
"Plan the library migration in plan mode, then execute the agreed approach in direct execution",
"Use plan mode for single-line fixes",
"Plan only, never implement",
"Execute first, then plan after failures"
],
answer:0,
explanation:"Plan mode for investigation and design, followed by direct execution for implementation."
},

{
id:56,
difficulty:"medium",
category:"claude-code",
question:"Prose descriptions of a data transformation keep being interpreted inconsistently. What works best?",
options:[
"Remove the examples and trust the model",
"Raise the temperature",
"Make the prose longer",
"Provide 2-3 concrete input/output examples"
],
answer:3,
explanation:"Concrete input/output examples clarify transformation requirements better than prose."
},

{
id:57,
difficulty:"hard",
category:"claude-code",
question:"When should you report several problems in one message versus sequentially?",
options:[
"Always sequential",
"One message when the problems interact; sequential when they are independent",
"Always one message",
"Never report more than one"
],
answer:1,
explanation:"Interacting fixes must be reasoned about together; independent ones can be handled one at a time."
},

{
id:58,
difficulty:"hard",
category:"claude-code",
question:"A developer wants Claude to surface cache-invalidation and failure-mode considerations before implementing in an unfamiliar domain. Which technique fits?",
options:[
"Direct execution with no discussion",
"The interview pattern: have Claude ask clarifying questions first",
"Fork the session twice",
"Disable plan mode"
],
answer:1,
explanation:"The interview pattern surfaces considerations the developer may not have anticipated."
},

{
id:59,
difficulty:"easy",
category:"claude-code",
question:"How do you run Claude Code non-interactively in a CI pipeline so it does not hang?",
options:[
"Pipe stdin from /dev/null only",
"Set CLAUDE_HEADLESS=true",
"claude --batch \"<prompt>\"",
"claude -p \"<prompt>\" (the -p / --print flag)"
],
answer:3,
explanation:"-p / --print processes the prompt, prints to stdout, and exits without waiting for input."
},

{
id:60,
difficulty:"medium",
category:"claude-code",
question:"Which CI flags produce machine-parseable findings for automated inline PR comments?",
options:[
"--interactive",
"--resume latest",
"--verbose --color",
"--output-format json together with --json-schema"
],
answer:3,
explanation:"JSON output plus a schema yields structured findings for automation."
},

{
id:61,
difficulty:"hard",
category:"claude-code",
question:"In CI, why is an independent review instance better than asking the generating session to review its own code?",
options:[
"Independent instances are always cheaper",
"Self-review is forbidden by the API",
"The generator retains its reasoning context and is less likely to question its own decisions",
"Independent instances use a different tokenizer"
],
answer:2,
explanation:"Session context isolation improves the ability to catch subtle issues."
},

{
id:62,
difficulty:"medium",
category:"claude-code",
question:"How should project context such as testing standards and fixtures reach a CI-invoked Claude Code run?",
options:[
"Through CLAUDE.md in the repository",
"It cannot be provided in CI",
"By embedding it in the Docker image name",
"Via a manual chat message each run"
],
answer:0,
explanation:"CLAUDE.md supplies testing standards, fixture conventions, and review criteria to CI runs."
},

{
id:63,
difficulty:"hard",
category:"claude-code",
question:"After new commits, a CI review re-runs and repeats comments already posted. What is the fix?",
options:[
"Disable reviews on later commits",
"Include prior findings in context and instruct Claude to report only new or still-unaddressed issues",
"Lower max_tokens",
"Delete old comments first"
],
answer:1,
explanation:"Providing prior findings prevents duplicate feedback."
},

{
id:64,
difficulty:"medium",
category:"claude-code",
question:"Test generation keeps proposing scenarios the suite already covers. What should you do?",
options:[
"Use a smaller model",
"Disable CLAUDE.md",
"Ask for fewer tests",
"Provide the existing test files in context so duplicates are avoided"
],
answer:3,
explanation:"Existing tests in context let Claude avoid duplicates."
},

{
id:65,
difficulty:"medium",
category:"prompt-structured-output",
question:"A review prompt says \"check that comments are accurate\" and yields noisy output. Which rewrite is best?",
options:[
"\"Check comments thoroughly\"",
"\"Be very careful about comments\"",
"\"Only report if you are highly confident\"",
"\"Flag a comment only when its claimed behavior contradicts the actual code behavior\""
],
answer:3,
explanation:"Explicit categorical criteria beat vague instructions or confidence-based filtering."
},

{
id:66,
difficulty:"hard",
category:"prompt-structured-output",
question:"Why do instructions like \"be conservative\" or \"only report high-confidence findings\" fail to improve precision?",
options:[
"They are blocked by the API",
"Claude cannot read adjectives",
"They do not define which categories of issues to report, and self-reported confidence is poorly calibrated",
"They increase token costs only"
],
answer:2,
explanation:"Specific categorical criteria improve precision; general caution does not."
},

{
id:67,
difficulty:"medium",
category:"prompt-structured-output",
question:"High false-positive rates in one finding category are eroding developer trust. What is a recommended short-term action?",
options:[
"Hide all findings",
"Temporarily disable that category while improving its prompt, to restore trust in the accurate categories",
"Keep all categories to maximize recall",
"Increase severity labels"
],
answer:1,
explanation:"False positives in one category undermine confidence in all categories."
},

{
id:68,
difficulty:"easy",
category:"prompt-structured-output",
question:"What is the most effective technique when detailed instructions alone yield inconsistent formatting?",
options:[
"Removing the output format",
"Longer system prompts only",
"Few-shot examples",
"Higher temperature"
],
answer:2,
explanation:"Few-shot examples demonstrate the desired output format and judgment."
},

{
id:69,
difficulty:"hard",
category:"prompt-structured-output",
question:"Why are few-shot examples valuable beyond matching exact cases?",
options:[
"They guarantee zero errors",
"They disable hallucination permanently",
"They help the model generalize judgment to novel patterns",
"They replace the schema"
],
answer:2,
explanation:"Examples enable generalization rather than merely matching pre-specified cases."
},

{
id:70,
difficulty:"hard",
category:"prompt-structured-output",
question:"An extractor returns null for a required field on documents with inline citations rather than bibliographies. What helps?",
options:[
"Few-shot examples showing correct extraction from varied document structures",
"Make the field mandatory",
"Retry until it passes",
"Lower the temperature"
],
answer:0,
explanation:"Examples with varied formats address empty or null extraction."
},

{
id:71,
difficulty:"easy",
category:"prompt-structured-output",
question:"What is the most reliable way to get schema-compliant structured output from Claude?",
options:[
"Regex-parsing free text",
"Setting temperature to 0",
"Asking politely for JSON",
"Tool use with a JSON schema"
],
answer:3,
explanation:"Tool use with JSON schemas eliminates JSON syntax errors."
},

{
id:72,
difficulty:"hard",
category:"prompt-structured-output",
question:"Does a strict JSON schema via tool use prevent a line-item total that doesn't sum to the stated total?",
options:[
"Yes, schemas validate arithmetic automatically",
"No, and tool use cannot be used for extraction",
"No - it eliminates syntax errors but not semantic errors; add validation",
"Yes, but only with temperature 0"
],
answer:2,
explanation:"Semantic errors (values that don't sum, values in wrong fields) require separate validation."
},

{
id:73,
difficulty:"hard",
category:"prompt-structured-output",
question:"Source documents sometimes lack a vendor tax ID. How should the schema treat that field?",
options:[
"Require the model to guess",
"Make it optional/nullable so the model returns null instead of fabricating a value",
"Make it required with a default of N/A",
"Remove the field"
],
answer:1,
explanation:"Required fields pressure the model to fabricate values when data is absent."
},

{
id:74,
difficulty:"medium",
category:"prompt-structured-output",
question:"A category enum may not cover every document. Which design is recommended?",
options:[
"A closed enum with no escape value",
"Include \"other\" plus a detail string, and values like \"unclear\" for ambiguity",
"Free text only",
"Numeric codes only"
],
answer:1,
explanation:"\"other\"+detail and \"unclear\" support extensible, honest categorization."
},

{
id:75,
difficulty:"hard",
category:"prompt-structured-output",
question:"A validation step fails because a date is in the wrong format. What retry strategy is most effective?",
options:[
"Increase max_tokens only",
"Resubmit the identical request unchanged",
"A follow-up request including the original document, the failed extraction, and the specific validation error",
"Skip validation"
],
answer:2,
explanation:"Retry-with-error-feedback helps for format or structural errors."
},

{
id:76,
difficulty:"hard",
category:"prompt-structured-output",
question:"When are retries ineffective?",
options:[
"When the error is a format mismatch",
"When the required information is simply absent from the provided source document",
"When the schema is nullable",
"When using tool use"
],
answer:1,
explanation:"Retry cannot create missing information; it works for format and structure problems."
},

{
id:77,
difficulty:"hard",
category:"prompt-structured-output",
question:"Which schema pattern helps catch extraction math errors?",
options:[
"Extract calculated_total alongside stated_total and flag discrepancies; add conflict_detected booleans for inconsistent source data",
"Remove totals",
"Only extract stated_total",
"Trust the document"
],
answer:0,
explanation:"Self-correction fields surface inconsistencies for review."
},

{
id:78,
difficulty:"easy",
category:"prompt-structured-output",
question:"What are the key properties of the Message Batches API?",
options:[
"Guaranteed 1-hour completion",
"Free usage",
"50% cost savings, up to a 24-hour processing window, and no guaranteed latency SLA",
"Real-time responses under one second"
],
answer:2,
explanation:"Batches trade latency for cost and are not for blocking workflows."
},

{
id:79,
difficulty:"medium",
category:"prompt-structured-output",
question:"A blocking pre-merge check and an overnight tech-debt report are both candidates for batching. What is the right decision?",
options:[
"Batch the pre-merge check only",
"Batch the overnight report only; keep pre-merge checks synchronous",
"Batch both",
"Batch neither"
],
answer:1,
explanation:"Batch is for non-blocking, latency-tolerant work."
},

{
id:80,
difficulty:"hard",
category:"prompt-structured-output",
question:"In a batch of 100 documents, 6 failed because they exceeded the context limit. What is the best action?",
options:[
"Drop the failed documents",
"Switch everything to real-time",
"Resubmit the entire batch unchanged",
"Resubmit only the failed custom_ids with modifications, such as chunking the documents"
],
answer:3,
explanation:"Resubmit only failures and fix the cause."
},

{
id:81,
difficulty:"hard",
category:"prompt-structured-output",
question:"Why can't the Batches API handle a workflow where the model must run tools mid-request and continue?",
options:[
"It only supports image inputs",
"It forbids system prompts",
"It requires streaming",
"It does not support multi-turn tool calling within a single request"
],
answer:3,
explanation:"Batch requests cannot execute tools mid-request and return results."
},

{
id:82,
difficulty:"hard",
category:"prompt-structured-output",
question:"You need a 30-hour SLA using batches that can take 24 hours. What submission cadence is implied?",
options:[
"Submit once a week",
"Submit every 12 hours",
"Submit every 4 hours or more frequently (24h processing + 4h window = 28h within 30h)",
"Submit every 24 hours"
],
answer:2,
explanation:"Submission interval plus processing window must fit within the SLA."
},

{
id:83,
difficulty:"hard",
category:"prompt-structured-output",
question:"Which review architecture best catches subtle issues in generated code?",
options:[
"Extended thinking in the same session",
"Same session with \"review carefully\"",
"No review",
"A second, independent Claude instance without the generator's reasoning context"
],
answer:3,
explanation:"Independent instances are more effective than self-review or extended thinking."
},

{
id:84,
difficulty:"hard",
category:"prompt-structured-output",
question:"A team runs three review passes on a PR and flags only issues found in two of three. What is the main drawback?",
options:[
"It increases accuracy always",
"It is incompatible with CI",
"It suppresses real bugs that are only detected intermittently",
"It removes the need for tests"
],
answer:2,
explanation:"Consensus filters out true issues caught sporadically; focused passes address root cause."
},

{
id:85,
difficulty:"medium",
category:"context-reliability",
question:"Progressive summarization of a long support chat turns \"refund $84.50 on order 7731\" into \"customer wants a refund\". What is the recommended safeguard?",
options:[
"Drop all numbers",
"Summarize more aggressively",
"Extract transactional facts into a persistent case-facts block included in every prompt, outside the summarized history",
"Rely on the user to repeat them"
],
answer:2,
explanation:"Amounts, dates, and order numbers must survive summarization."
},

{
id:86,
difficulty:"medium",
category:"context-reliability",
question:"What is the \"lost in the middle\" effect?",
options:[
"Tokens in the middle cost more",
"The middle of a response is truncated",
"Models forget the system prompt entirely",
"Models process the beginning and end of long inputs reliably but may omit findings from the middle"
],
answer:3,
explanation:"Place key summaries at the start and use explicit section headers."
},

{
id:87,
difficulty:"medium",
category:"context-reliability",
question:"An order lookup returns 40+ fields but only 5 matter. What should you do?",
options:[
"Ask the model to ignore the extras",
"Pass all fields",
"Trim verbose tool output to relevant fields before it accumulates in context",
"Increase max_tokens"
],
answer:2,
explanation:"Trimming prevents disproportionate token use."
},

{
id:88,
difficulty:"hard",
category:"context-reliability",
question:"Upstream agents produce long reasoning chains but the downstream agent has a small context budget. What is the best change?",
options:[
"Use prose summaries",
"Have upstream agents return structured data (key facts, citations, relevance scores) instead of verbose content",
"Remove downstream context",
"Concatenate everything"
],
answer:1,
explanation:"Structured, compact outputs fit downstream budgets."
},

{
id:89,
difficulty:"easy",
category:"context-reliability",
question:"Which condition should trigger escalation to a human?",
options:[
"The customer explicitly requests a human, a policy gap/exception, or the agent cannot make meaningful progress",
"Any message containing an exclamation mark",
"The conversation exceeds 3 turns",
"The customer's tone is mildly negative"
],
answer:0,
explanation:"Sentiment and self-reported confidence are unreliable proxies for complexity."
},

{
id:90,
difficulty:"hard",
category:"context-reliability",
question:"A customer explicitly demands a human agent. What should the agent do?",
options:[
"Honor the request immediately without first attempting investigation",
"Offer a coupon instead",
"Investigate fully first",
"Ask them to justify the request"
],
answer:0,
explanation:"Explicit requests are honored immediately; frustration without such a request can be addressed while offering resolution."
},

{
id:91,
difficulty:"hard",
category:"context-reliability",
question:"A customer asks for a competitor price match, but policy only covers own-site adjustments. What is correct?",
options:[
"Deny it without explanation",
"Approve it",
"Invent a policy",
"Escalate because policy is silent or ambiguous on the request"
],
answer:3,
explanation:"Policy gaps are a valid escalation trigger."
},

{
id:92,
difficulty:"medium",
category:"context-reliability",
question:"A customer lookup returns three matching accounts. What should the agent do?",
options:[
"Process all three",
"Pick the first match",
"Ask for additional identifiers instead of selecting by heuristic",
"Pick the most recent account"
],
answer:2,
explanation:"Multiple matches require clarification."
},

{
id:93,
difficulty:"hard",
category:"context-reliability",
question:"Which approach improves a support agent that escalates easy cases and mishandles policy exceptions?",
options:[
"Self-reported confidence thresholds",
"Sentiment-based escalation",
"A separately trained classifier first",
"Add explicit escalation criteria with few-shot examples to the system prompt"
],
answer:3,
explanation:"Clarifying decision boundaries is the proportionate first step."
},

{
id:94,
difficulty:"medium",
category:"context-reliability",
question:"In long exploration sessions, the model starts referencing \"typical patterns\" instead of specific classes found earlier. What helps?",
options:[
"Maintain scratchpad files recording key findings and reference them; use /compact when context fills",
"Restart without notes",
"Ignore it",
"Increase temperature"
],
answer:0,
explanation:"Scratchpad files counteract context degradation."
},

{
id:95,
difficulty:"hard",
category:"context-reliability",
question:"How should multi-agent systems support crash recovery?",
options:[
"Each agent exports state to a known location; the coordinator loads a manifest on resume and injects state into prompts",
"Rely on in-memory state",
"Restart from scratch",
"Ask the user to repeat"
],
answer:0,
explanation:"Structured state persistence enables recovery."
},

{
id:96,
difficulty:"hard",
category:"context-reliability",
question:"A subagent's search fails after partial progress. What should the coordinator receive?",
options:[
"Failure type, attempted query, partial results, and potential alternatives",
"An empty successful result",
"\"search unavailable\"",
"Nothing"
],
answer:0,
explanation:"Structured error context enables intelligent recovery."
},

{
id:97,
difficulty:"hard",
category:"context-reliability",
question:"Aggregate extraction accuracy is 97%. What is the risk in automating review decisions on this basis?",
options:[
"It applies only to PDFs",
"There is no risk",
"It guarantees each field is accurate",
"Aggregate accuracy can mask poor performance on specific document types or fields; validate by segment"
],
answer:3,
explanation:"Stratified sampling and per-segment analysis are required."
},

{
id:98,
difficulty:"hard",
category:"context-reliability",
question:"Two credible sources report different statistics for the same metric. How should the synthesis handle this?",
options:[
"Drop both",
"Preserve both values with source attribution and annotate the conflict",
"Pick the larger one",
"Average them silently"
],
answer:1,
explanation:"Conflicts are annotated, not silently resolved; include dates to prevent temporal differences being read as contradictions."
},

{
id:99,
difficulty:"medium",
category:"context-reliability",
question:"How can routing of extractions to human review be calibrated?",
options:[
"Have the model output field-level confidence scores and calibrate thresholds with labeled validation sets",
"Review everything manually",
"Use uniform random sampling only",
"Trust raw confidence uncalibrated"
],
answer:0,
explanation:"Calibration against labeled data makes confidence useful for routing."
},

{
id:100,
difficulty:"hard",
category:"agentic-architecture",
question:"A support agent must verify identity before any refund tool can run. Where should this requirement live?",
options:[
"In a friendly system-prompt reminder",
"In a deterministic prerequisite gate or pre-tool hook",
"In the final response template",
"In a subagent's optional checklist"
],
answer:1,
explanation:"Identity verification is a consequential prerequisite. Enforce it programmatically before the refund action rather than relying on probabilistic prompt compliance."
},

{
id:101,
difficulty:"medium",
category:"agentic-architecture",
question:"A request asks only for an order status. Which orchestration choice is most proportionate?",
options:[
"Invoke every specialist agent for completeness",
"Run a full research-and-synthesis pipeline",
"Route directly to the order lookup capability",
"Ask a planning agent to create a multi-stage plan"
],
answer:2,
explanation:"A coordinator should select only the capabilities needed for the request. Dynamic routing avoids unnecessary latency and tool calls."
},

{
id:102,
difficulty:"hard",
category:"agentic-architecture",
question:"Two research subagents return conflicting values for the same metric. What should the coordinator do?",
options:[
"Choose the newer-looking value without checking",
"Average the two values",
"Preserve both claims with source/date metadata and delegate targeted verification",
"Discard both results and ask the user to restart"
],
answer:2,
explanation:"The coordinator should retain provenance, annotate the conflict, and use targeted verification rather than silently choosing or averaging."
},

{
id:103,
difficulty:"medium",
category:"agentic-architecture",
question:"A subagent repeatedly returns verbose raw search output. What is the best handoff contract?",
options:[
"Pass the entire transcript to every downstream agent",
"Require concise structured findings with claim, evidence, source, date and limitations",
"Allow the subagent to write directly to the final user response",
"Remove the synthesis agent"
],
answer:1,
explanation:"Structured handoffs reduce context bloat and preserve attribution needed by synthesis."
},

{
id:104,
difficulty:"hard",
category:"agentic-architecture",
question:"A coordinator has three independent research tasks. How can it reduce wall-clock latency without losing centralized control?",
options:[
"Have subagents message one another directly",
"Issue multiple Task calls in one coordinator response, then aggregate their results",
"Run each task in a separate user session",
"Use a shared writable global prompt"
],
answer:1,
explanation:"Independent Task calls can be launched together. The coordinator remains responsible for routing, error handling and synthesis."
},

{
id:105,
difficulty:"medium",
category:"agentic-architecture",
question:"A long-running investigation resumes after a session interruption, but several source files changed. What is the safest next step?",
options:[
"Assume the prior context is still accurate",
"Resume without mentioning the changes",
"Provide a concise state summary and identify changed files, or start a fresh session with that summary",
"Delete all previous findings"
],
answer:2,
explanation:"Resumed work needs explicit change awareness. A fresh session with a summary can avoid stale assumptions."
},

{
id:106,
difficulty:"hard",
category:"agentic-architecture",
question:"A workflow must execute a legally mandated sequence of checks in a fixed order. Which design is strongest?",
options:[
"Let the model freely choose the order",
"Use deterministic orchestration for mandatory steps and Claude for interpretation within each step",
"Ask a subagent to remember the sequence",
"Increase temperature to encourage compliance"
],
answer:1,
explanation:"Fixed, auditable requirements belong in deterministic workflow code; model reasoning can be used where interpretation is needed."
},

{
id:107,
difficulty:"medium",
category:"agentic-architecture",
question:"When is a forked session especially useful?",
options:[
"To share all context automatically between independent agents",
"To explore alternative approaches from a common baseline without contaminating the original line of work",
"To bypass tool permissions",
"To persist memory across unrelated users"
],
answer:1,
explanation:"Forking creates independent branches from a shared baseline, useful for comparing divergent approaches."
},

{
id:108,
difficulty:"hard",
category:"agentic-architecture",
question:"A synthesis agent reports broad conclusions but cannot identify which source supports each claim. What should change upstream?",
options:[
"Increase the synthesis model's temperature",
"Require source-linked structured evidence in each subagent handoff",
"Remove source dates to simplify output",
"Ask the final agent to invent citations"
],
answer:1,
explanation:"Attribution must be preserved throughout delegation. Each claim should carry its evidence and source metadata."
},

{
id:109,
difficulty:"medium",
category:"agentic-architecture",
question:"A coordinator's fixed pipeline invokes document analysis even when the request contains no document. What is the root design issue?",
options:[
"The model is too small",
"The coordinator lacks request-aware decomposition and routing",
"The subagent context is isolated",
"The tool schema uses JSON"
],
answer:1,
explanation:"The coordinator should inspect the request and invoke only relevant subagents rather than always running every stage."
},

{
id:110,
difficulty:"hard",
category:"tool-design-mcp",
question:"A model frequently chooses the wrong one of two similarly named MCP tools. What should be improved first?",
options:[
"Add a second router model",
"Expand tool descriptions with distinct purpose, inputs, examples, edge cases and boundaries",
"Force every call to the first tool",
"Increase the context window"
],
answer:1,
explanation:"Tool descriptions are the primary selection mechanism. Clarify boundaries before adding routing complexity or consolidating tools."
},

{
id:111,
difficulty:"medium",
category:"tool-design-mcp",
question:"An MCP tool returns no matching records for a valid query. How should it represent the result?",
options:[
"Return an access-denied error",
"Return a successful empty result with an appropriate structured payload",
"Return a generic server error",
"Return fabricated sample records"
],
answer:1,
explanation:"A valid empty result is not a failure. Do not conflate no matches with authorization or execution errors."
},

{
id:112,
difficulty:"hard",
category:"tool-design-mcp",
question:"A refund is rejected because it violates a business policy. Which error representation is most useful?",
options:[
"isError=true, category=business, isRetryable=false, with a customer-safe explanation",
"isError=false with an empty result",
"isError=true, category=transient, isRetryable=true",
"A stack trace containing internal account data"
],
answer:0,
explanation:"Business-rule violations are not transient. Structured error metadata lets the agent explain the outcome without retrying."
},

{
id:113,
difficulty:"medium",
category:"tool-design-mcp",
question:"Which tool_choice setting requires Claude to call some tool, but does not force a particular named tool?",
options:[
"auto",
"any",
"A forced named tool",
"none"
],
answer:1,
explanation:"The any setting requires a tool call, while auto may return text and a forced named tool requires one specific tool."
},

{
id:114,
difficulty:"hard",
category:"tool-design-mcp",
question:"A team wants to expose a reusable catalog of supported issue types and their schemas without requiring exploratory tool calls. Which MCP capability fits?",
options:[
"MCP resources",
"A Bash alias",
"A model temperature setting",
"A user-facing slash command"
],
answer:0,
explanation:"MCP resources expose contextual data such as catalogs, schemas and document trees for discovery."
},

{
id:115,
difficulty:"medium",
category:"tool-design-mcp",
question:"Which configuration location is intended for shared, version-controlled project MCP servers?",
options:[
".mcp.json in the project",
"~/.claude.json only",
"A personal shell history file",
"The model's system prompt"
],
answer:0,
explanation:"The project .mcp.json can be committed for team sharing; secrets should be injected through environment expansion rather than committed."
},

{
id:116,
difficulty:"hard",
category:"tool-design-mcp",
question:"A targeted Edit operation fails because its anchor appears several times. What is the safest recovery?",
options:[
"Apply the edit to the first match",
"Use Read to inspect context and then rewrite the whole file with Write if appropriate",
"Use Glob to replace all files",
"Retry the identical Edit indefinitely"
],
answer:1,
explanation:"Edit requires a unique anchor. When it is not unique, inspect the file and use a safer whole-file operation."
},

{
id:117,
difficulty:"medium",
category:"tool-design-mcp",
question:"A tool is used only by one application and performs a domain-specific backend action. Which interface is usually most proportionate?",
options:[
"A custom tool",
"A global MCP server for every application",
"A Skill containing credentials",
"A prompt-only instruction"
],
answer:0,
explanation:"A custom tool is appropriate for a one-application function; MCP is useful for reusable external capabilities."
},

{
id:118,
difficulty:"hard",
category:"tool-design-mcp",
question:"A tool's failure response says only 'unavailable'. What should be added to improve recovery?",
options:[
"A longer natural-language apology only",
"Structured error category, retryability, attempted operation, partial results and safe alternatives",
"The full secret-bearing request",
"A random retry delay with no limit"
],
answer:1,
explanation:"Actionable error context helps the coordinator distinguish transient, validation, permission and business failures."
},

{
id:119,
difficulty:"medium",
category:"tool-design-mcp",
question:"What is the main distinction between client-side and server-side tool execution?",
options:[
"Client-side tools execute in the application runtime; server-side tools execute in the provider-managed environment",
"Client-side tools cannot return results",
"Server-side tools always access the user's database",
"There is no distinction"
],
answer:0,
explanation:"Execution location affects security boundaries, network access, operational ownership and available capabilities."
},

{
id:120,
difficulty:"hard",
category:"claude-code",
question:"A team-wide coding convention must apply to test files across many directories, including tests next to source files. What is the best mechanism?",
options:[
"Only a root CLAUDE.md paragraph",
"A path-scoped rule in .claude/rules with a matching glob",
"A personal user-level memory",
"A one-time slash command"
],
answer:1,
explanation:"Glob-based path rules apply across matching files regardless of directory placement and load when relevant."
},

{
id:121,
difficulty:"medium",
category:"claude-code",
question:"A new teammate does not receive project instructions that exist only in the architect's user-level CLAUDE.md. Why?",
options:[
"User-level instructions are automatically shared",
"User-level instructions are personal and are not version-controlled with the project",
"CLAUDE.md cannot be loaded by Claude Code",
"The project needs a larger model"
],
answer:1,
explanation:"User-level configuration is personal. Shared guidance belongs in the repository's project-level CLAUDE.md or rules."
},

{
id:122,
difficulty:"medium",
category:"claude-code",
question:"What is the purpose of /init in a repository?",
options:[
"Initialize repository context/instructions for Claude Code",
"Create a remote MCP server",
"Deploy the application",
"Rotate API credentials"
],
answer:0,
explanation:"The command helps initialize project guidance based on the repository."
},

{
id:123,
difficulty:"hard",
category:"claude-code",
question:"A team wants a repeatable multi-step procedure that can be invoked on demand and shared through version control. Which Claude Code feature is appropriate?",
options:[
"A project slash command under .claude/commands/",
"A personal shell alias only",
"A model response prefix",
"A user-level CLAUDE.md paragraph"
],
answer:0,
explanation:"Project slash commands can encode reusable team workflows and be shared with the repository."
},

{
id:124,
difficulty:"medium",
category:"claude-code",
question:"What is the primary purpose of Agent Skills?",
options:[
"Package reusable instructions and procedures that can be loaded when relevant",
"Replace all MCP servers",
"Store API secrets in natural language",
"Guarantee deterministic execution of every command"
],
answer:0,
explanation:"Skills package reusable domain instructions and workflows; they do not replace permissions or deterministic enforcement."
},

{
id:125,
difficulty:"hard",
category:"claude-code",
question:"A CI pipeline needs Claude Code to run without an interactive terminal. Which mode is designed for this?",
options:[
"claude -p (headless mode)",
"Plan mode only",
"A desktop-only session",
"The /memory command"
],
answer:0,
explanation:"The -p flag supports non-interactive/headless use in scripts and CI workflows."
},

{
id:126,
difficulty:"medium",
category:"claude-code",
question:"Why should a team pin model versions and version prompts?",
options:[
"To prevent all model errors",
"To make behavior changes traceable and reduce unexpected regressions after releases",
"To increase temperature",
"To avoid writing tests"
],
answer:1,
explanation:"Version pinning and prompt versioning support controlled rollout, reproducibility and regression diagnosis."
},

{
id:127,
difficulty:"hard",
category:"claude-code",
question:"A task spans a large unfamiliar codebase and may require broad changes. Which initial approach is most appropriate?",
options:[
"Immediately edit many files without inspection",
"Use plan mode to explore, map dependencies and propose a scoped approach before implementation",
"Disable Read and Grep",
"Ask Claude to infer the repository structure"
],
answer:1,
explanation:"Plan mode is useful for exploration and architectural work before committing to a broad change."
},

{
id:128,
difficulty:"hard",
category:"claude-code",
question:"A developer wants a rule to apply only when editing files matching **/*.test.tsx. What should the rule include?",
options:[
"A paths frontmatter glob matching **/*.test.tsx",
"A user prompt that mentions tests once",
"A global environment variable",
"A tool_choice forced call"
],
answer:0,
explanation:"Path-specific rules use a paths glob so the instruction is scoped to matching files."
},

{
id:129,
difficulty:"medium",
category:"claude-code",
question:"Which statement best describes plan mode versus direct execution?",
options:[
"Plan mode supports exploration and architectural planning; direct mode is suitable for a clearly scoped implementation",
"Plan mode always edits files",
"Direct mode cannot use tools",
"They are identical"
],
answer:0,
explanation:"The choice depends on uncertainty and scope: plan first for broad or ambiguous work, direct execution for clear bounded tasks."
},

{
id:130,
difficulty:"hard",
category:"prompt-structured-output",
question:"A JSON schema requires an invoice total, but some source documents omit it. What schema design best avoids fabrication?",
options:[
"Require a numeric value and tell Claude to guess",
"Allow null for genuinely absent values and validate semantic rules separately",
"Remove the field from every response",
"Accept any string"
],
answer:1,
explanation:"Nullable fields represent missing information honestly; semantic validation can still enforce consistency when values exist."
},

{
id:131,
difficulty:"medium",
category:"prompt-structured-output",
question:"A response is valid JSON but the line-item sum differs from the stated total. What is the correct diagnosis?",
options:[
"Syntax validation failed",
"Semantic validation failed",
"The model did not stream",
"The context window is full"
],
answer:1,
explanation:"JSON schema validation checks structure and types; business invariants such as calculated totals require semantic validation."
},

{
id:132,
difficulty:"hard",
category:"prompt-structured-output",
question:"A constrained tool schema produces syntactically valid output but the model assigns the wrong category. What should be improved?",
options:[
"Only increase max_tokens",
"Clarify category definitions, add discriminating examples and validate the classification against explicit criteria",
"Disable schema validation",
"Convert every category to free text"
],
answer:1,
explanation:"Schema validity does not guarantee semantic correctness. Improve the criteria and examples, then validate the meaning."
},

{
id:133,
difficulty:"medium",
category:"prompt-structured-output",
question:"When are few-shot examples especially useful?",
options:[
"When output categories are ambiguous and examples demonstrate boundary cases",
"When credentials must be hidden",
"When an API request must be retried",
"When a deterministic hook is required"
],
answer:0,
explanation:"A small set of targeted examples can clarify decision boundaries and expected output formats."
},

{
id:134,
difficulty:"hard",
category:"prompt-structured-output",
question:"A document extraction pipeline must preserve evidence for every extracted value. Which output design is strongest?",
options:[
"Return only a flat list of values",
"Return each value with source span/page, confidence or uncertainty, and validation status",
"Return a narrative summary with no references",
"Return values sorted alphabetically"
],
answer:1,
explanation:"Evidence-linked fields make extraction auditable and support human verification and downstream validation."
},

{
id:135,
difficulty:"medium",
category:"prompt-structured-output",
question:"A prompt asks Claude to extract an email address, but none is present. What behavior should be specified?",
options:[
"Generate a plausible address",
"Return the defined missing-value representation and do not infer it",
"Copy the sender's domain into a guessed address",
"Omit the field without explanation"
],
answer:1,
explanation:"Extraction prompts should define explicit missing-value behavior and prohibit unsupported inference."
},

{
id:136,
difficulty:"hard",
category:"prompt-structured-output",
question:"A model output contains an unexpected enum value even though a schema is used. What should the application do?",
options:[
"Pass it to downstream systems unchanged",
"Reject or quarantine it, return a focused validation error and retry or request review as appropriate",
"Silently map it to the first enum",
"Assume the schema makes it impossible"
],
answer:1,
explanation:"Applications must still validate returned data and handle invalid or unsupported values defensively."
},

{
id:137,
difficulty:"medium",
category:"prompt-structured-output",
question:"Why should instructions distinguish trusted instructions from quoted document content?",
options:[
"To ensure quoted content cannot be mistaken for instructions to the model",
"To increase output token count",
"To make all documents trusted",
"To disable multimodal input"
],
answer:0,
explanation:"Clear content boundaries help prevent untrusted text from overriding the intended task instructions."
},

{
id:138,
difficulty:"hard",
category:"prompt-structured-output",
question:"A structured extraction result passes field-level checks, but the same entity appears twice with conflicting values. Which additional check is needed?",
options:[
"A deduplication and cross-field consistency check",
"A larger temperature",
"A shorter system prompt only",
"A new MCP transport"
],
answer:0,
explanation:"Field validation alone does not catch duplicate-entity or cross-record inconsistencies."
},

{
id:139,
difficulty:"medium",
category:"prompt-structured-output",
question:"Which prompt change is most likely to improve reliable classification?",
options:[
"Replace precise criteria with 'use your best judgment'",
"Define mutually exclusive categories and explicit handling for borderline or unknown cases",
"Add unrelated background information",
"Ask for a confident answer"
],
answer:1,
explanation:"Explicit criteria and an unknown path reduce forced guesses and category overlap."
},

{
id:140,
difficulty:"hard",
category:"prompt-structured-output",
question:"A batch extraction job has a small number of ambiguous high-impact records. What is the best operational pattern?",
options:[
"Accept all model outputs automatically",
"Route ambiguous/high-impact records to human verification while allowing validated low-risk records through",
"Retry every record indefinitely",
"Drop the uncertain records silently"
],
answer:1,
explanation:"Human review should be targeted to uncertainty and impact, not applied blindly or omitted entirely."
},

{
id:141,
difficulty:"medium",
category:"context-reliability",
question:"A long agent task accumulates irrelevant tool output. Which action best controls context growth?",
options:[
"Keep every raw result forever",
"Prune or summarize stale outputs while retaining key facts, decisions and provenance",
"Increase temperature",
"Repeat the original prompt"
],
answer:1,
explanation:"Context management reduces bloat while preserving the information needed for later decisions."
},

{
id:142,
difficulty:"hard",
category:"context-reliability",
question:"A customer asks for a human, but the agent believes it can solve the issue. What should happen?",
options:[
"Continue autonomously because confidence is high",
"Escalate immediately and provide a structured handoff",
"Ask the customer to repeat the request several times",
"Transfer only the raw transcript"
],
answer:1,
explanation:"An explicit request for a human is a clear escalation trigger. The handoff should contain relevant facts and prior actions."
},

{
id:143,
difficulty:"medium",
category:"context-reliability",
question:"A customer expresses frustration but the request is straightforward and within policy. What is the most proportionate response?",
options:[
"Escalate solely based on sentiment",
"Acknowledge the frustration and resolve the issue, escalating if the customer asks or a policy/progress trigger occurs",
"Refuse to continue",
"Claim the issue is resolved without checking"
],
answer:1,
explanation:"Sentiment alone is a poor escalation signal. Use explicit criteria such as a human request, policy gap or lack of progress."
},

{
id:144,
difficulty:"hard",
category:"context-reliability",
question:"A lookup returns two customers with the same name. What should the agent do?",
options:[
"Choose the first result",
"Ask for an additional identifier before proceeding",
"Merge both customer records",
"Use sentiment to select one"
],
answer:1,
explanation:"Multiple matches require disambiguation. The agent must not guess an identity."
},

{
id:145,
difficulty:"medium",
category:"context-reliability",
question:"A transient backend timeout occurs during a tool call. What is the best recovery strategy?",
options:[
"Retry locally with bounded backoff, then report failure context if still unsuccessful",
"Restart the entire agent system immediately",
"Return an empty success",
"Retry without limit"
],
answer:0,
explanation:"Retry transient failures locally with limits; preserve failure type and partial results for the coordinator."
},

{
id:146,
difficulty:"hard",
category:"context-reliability",
question:"A report has 97% overall extraction accuracy, but one document type performs poorly. What evaluation approach reveals the issue?",
options:[
"Report only the aggregate score",
"Use stratified sampling and measure accuracy by document type and field",
"Increase the sample temperature",
"Exclude the weak document type"
],
answer:1,
explanation:"Aggregate accuracy can conceal segment failures. Stratified evaluation exposes performance differences across document types and fields."
},

{
id:147,
difficulty:"medium",
category:"context-reliability",
question:"What should a human escalation packet contain?",
options:[
"Only the conversation transcript",
"Customer or case identifier, verified facts, root cause, amount/action context and recommended next step",
"The model's private reasoning",
"A generic 'agent failed' message"
],
answer:1,
explanation:"A structured handoff lets the human act without reconstructing the entire interaction."
},

{
id:148,
difficulty:"hard",
category:"context-reliability",
question:"A research synthesis finds two sources disagree because they refer to different reporting periods. How should the report present this?",
options:[
"Call one source incorrect without explanation",
"Include both values with source dates and explain the time-period distinction",
"Average the values",
"Remove both citations"
],
answer:1,
explanation:"Dates and provenance distinguish genuine contradictions from differences caused by time or scope."
},

{
id:149,
difficulty:"medium",
category:"context-reliability",
question:"Why should a resumed session be given a crash-recovery manifest or concise state summary?",
options:[
"To replace source evidence",
"To record completed work, pending tasks, decisions and changed files so recovery is controlled",
"To grant broader tool permissions",
"To disable context limits"
],
answer:1,
explanation:"A recovery manifest preserves operational state and reduces repeated work or stale assumptions."
}
];

// --- TOP 100 INTERVIEW INDICES ---
// ZERO-BASED ARRAY INDICES (not question IDs), priority ordered.
// 150-question bank. First 20 are MUST-KNOW; remaining items are weighted by the official exam blueprint.
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
