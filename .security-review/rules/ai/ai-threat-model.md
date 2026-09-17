# AI Threat Model

## Assets

- System prompts and developer instructions.
- User prompts and uploaded files.
- Retrieved documents and embeddings.
- Tool credentials and service tokens.
- Agent memory.
- Model outputs used for decisions.
- Audit logs and prompt telemetry.

## Actors

- Normal users.
- Malicious users.
- External content authors.
- Compromised data sources.
- Operators with prompt/log access.
- Agents or tools acting with delegated permissions.

## Entry Points

- Chat input.
- Uploaded files.
- Retrieved documents.
- Web pages and emails.
- Tool outputs.
- MCP resources.
- Agent memory.
- Webhooks and events.

## Abuse Cases

- Prompt injection causes data disclosure.
- Indirect prompt injection causes unsafe tool calls.
- RAG poisoning changes answers or policy decisions.
- Agent uses a privileged tool outside user authorization.
- Sensitive data is sent to a model provider or stored in embeddings.
- Model hallucination creates false authorization or compliance decisions.

## Required Controls

- Deterministic authorization outside the model.
- Tenant-aware retrieval.
- Tool allowlists and scoped credentials.
- Prompt and context minimization.
- Sensitive data redaction.
- Audit logs with safe redaction.
- Human approval for high-impact actions.
