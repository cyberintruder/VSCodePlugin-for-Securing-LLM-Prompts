# Source-To-Sink Data Flow Analysis

Use this workflow for injection, authorization, data exposure, file handling, cloud, and AI findings.

## Sources

Treat these as attacker-controlled until proven otherwise:

- HTTP route params, query params, headers, cookies, and bodies.
- GraphQL queries, mutations, variables, and directives.
- WebSocket, queue, Kafka, MQTT, pub/sub, and event payloads.
- Uploaded files and file metadata.
- Webhooks and callbacks.
- CLI args and environment variables in user-controlled deployment contexts.
- Database fields written by lower-privileged users.
- Retrieved documents, web pages, tickets, emails, chat messages, and knowledge-base content.
- LLM prompts, tool outputs, memory, embeddings, and RAG context.

## Transformations

Record each transformation:

- Parsing.
- Normalization.
- Type conversion.
- Validation.
- Sanitization.
- Encoding.
- Deserialization.
- Prompt construction.
- Template rendering.
- Policy or role mapping.

## Sinks

Review security impact at these sinks:

- SQL, NoSQL, LDAP, GraphQL resolvers, ORM raw queries.
- Shell commands and process execution.
- File system paths, archive extraction, and upload storage.
- HTML, templates, Markdown, PDFs, CSV, office documents.
- Logs, analytics, traces, metrics, and audit events.
- HTTP clients and SSRF-relevant network calls.
- Cloud APIs, IAM, storage, KMS, secrets managers, queues, functions.
- Cache, Redis, message brokers, search indexes.
- LLM prompts, tool calls, agent actions, embeddings, vector search, MCP calls.

## Required Trace Format

For every finding, include:

```text
source -> transformations -> validation -> authorization -> sink -> impact
```

If one of those steps is unknown, mark it as unknown instead of inventing it.
