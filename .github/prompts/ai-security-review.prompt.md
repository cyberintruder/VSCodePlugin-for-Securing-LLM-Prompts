# AI Security Review

Use Secure Coding Framework v2 and the AI rule packs under `.security-review/rules/ai/`.

## Scope

Review AI, LLM, RAG, embedding, agent, tool-calling, MCP, prompt-template, and model-integration code.

## Required Checks

- Direct prompt injection
- Indirect prompt injection through retrieved content, websites, files, emails, tickets, documents, or tool output
- Unsafe tool invocation
- Missing tool authorization
- Excessive agent permissions
- Prompt or system instruction leakage
- Sensitive context leakage
- Secret leakage to model providers
- RAG poisoning
- Embedding poisoning
- Cross-tenant memory or retrieval leakage
- Model output trusted for security decisions
- Hallucinated policy, identity, or authorization decisions
- MCP server exposure and permission validation
- Logging of prompts, completions, embeddings, files, secrets, or personal data

## Output

For each issue include:

- Attack path
- Prompt or tool boundary
- Data exposure or action impact
- Existing guardrails and why they are insufficient
- Concrete remediation

Use JSON matching `.security-review/schemas/report.schema.json` for full reviews.
