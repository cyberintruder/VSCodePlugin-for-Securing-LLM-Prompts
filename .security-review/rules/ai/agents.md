# Agent And Tool Security Review

## Scope

Apply to AI agents, autonomous workflows, tool calling, function calling, browser automation, shell tools, filesystem tools, cloud tools, ticketing tools, and workflow actions.

## Checks

- Tools have explicit allowlists, schemas, parameter validation, and authorization checks.
- Tool execution is scoped to the user's permissions and tenant.
- Destructive or external-effect actions require deterministic approval where appropriate.
- Agent memory is separated by user, tenant, purpose, and sensitivity.
- Agent loops have cost, time, retry, and rate limits.
- Tool results are not blindly trusted as instructions.
- File, shell, browser, network, and cloud tools are sandboxed.
- Audit logs record actor, prompt, tool, parameters, result, and approval where safe to log.

## Common Findings

- Agent can call an admin tool based only on model intent.
- Tool schema allows arbitrary file path, URL, SQL, shell command, or cloud action.
- User prompt causes the agent to exfiltrate files or secrets through a tool.
- Agent memory leaks data across tenants or users.
- Model can retry destructive actions without idempotency or approval.

## Evidence Required

Show the tool registry, authorization gate, schema, execution function, and model-to-tool path.
