# Deep Repository Security Review

Use Secure Coding Framework v2 for a full repository review.

## Phase 1: Understand

Identify:

- Application purpose
- Technologies and frameworks
- Runtime and deployment model
- Authentication model
- Authorization model
- Data stores
- External integrations
- Cloud and infrastructure
- CI/CD workflows
- AI, LLM, RAG, agent, or MCP components

## Phase 2: Model Risk

Create a concise model of:

- Assets
- Actors
- Entry points
- Trust boundaries
- Privilege boundaries
- Sensitive data classes
- Abuse cases

## Phase 3: Review

Apply relevant rule packs from `.security-review/rules/`.

Trace source-to-sink paths for:

- Request parameters and bodies
- Headers and cookies
- Uploaded files
- Messages and events
- Environment variables and secrets
- Database records used as commands or templates
- LLM prompts, tool inputs, retrieved documents, and agent memory

## Phase 4: Validate

Before reporting each issue, confirm:

- Attacker control
- Reachability
- Missing or ineffective validation
- Sink behavior
- Missing or ineffective authorization
- Realistic exploit path
- Security impact

## Output

Produce JSON matching `.security-review/schemas/report.schema.json` unless I ask for Markdown.

Include executive summary, security score, review coverage, attack surface, risk matrix, file heatmap, findings, and prioritized remediation plan.
