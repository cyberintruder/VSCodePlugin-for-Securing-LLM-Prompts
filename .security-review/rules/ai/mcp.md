# MCP Security Review

## Scope

Apply to Model Context Protocol servers, clients, tools, resources, prompts, connectors, and agent integrations.

## Checks

- MCP server access is authenticated and authorized.
- Tool registration does not expose privileged actions by default.
- Resource access checks tenant, role, and purpose.
- Tool inputs are schema-validated and constrained.
- Filesystem, shell, browser, cloud, and network tools are sandboxed and audited.
- Prompt and resource content from MCP servers is treated as untrusted unless explicitly trusted.
- Secrets are not returned through MCP resources, logs, or tool results.
- Connectors avoid broad tokens and support revocation.

## Common Findings

- MCP tool exposes arbitrary filesystem reads.
- Agent can call cloud or shell tools without user authorization.
- MCP resource leaks cross-tenant documents.
- Tool description contains hidden instructions that override local policy.
- Long-lived connector token grants broad workspace access.

## Evidence Required

Show MCP server configuration, tool/resource registration, permission checks, and the model-to-tool execution path.
