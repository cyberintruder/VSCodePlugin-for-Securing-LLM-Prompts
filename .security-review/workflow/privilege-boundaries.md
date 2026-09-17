# Privilege Boundary Review

Privilege-boundary failures are often more important than simple input-validation bugs.

## Boundaries To Identify

- Anonymous to authenticated.
- User to admin.
- User to support operator.
- Tenant to tenant.
- Read-only to write.
- Frontend to backend.
- API to worker.
- App to cloud control plane.
- CI job to deployment environment.
- LLM to tool execution.
- Agent to filesystem, shell, browser, network, or cloud API.

## Review Questions

- Is the caller identity authenticated at the boundary?
- Is authorization performed at the server-side decision point?
- Is authorization based on trusted server-side state?
- Can user-controlled IDs, roles, tenant IDs, scopes, prompt content, or metadata influence access?
- Are object ownership and tenant membership checked close to the data access?
- Can async jobs, retries, webhooks, or queues bypass interactive checks?
- Can admin-only APIs be reached through alternate routes?
- Can an AI tool or agent execute a privileged action based on untrusted model output?

## Evidence

A valid finding must show the boundary, the missing or weak control, and the action or data that can be accessed.
