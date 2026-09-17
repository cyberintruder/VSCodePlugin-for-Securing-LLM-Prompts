# Authorization Review

## Scope

Review whether authenticated identities are allowed to perform specific actions on specific resources.

## Checks

- Object-level authorization for every user-controlled object ID.
- Function-level authorization for admin, support, finance, export, import, and configuration actions.
- Tenant isolation on reads, writes, searches, background jobs, caches, files, and analytics.
- Policy decisions made server-side from trusted identity and resource state.
- Role, scope, permission, group, and entitlement mapping.
- Authorization in async workers, queues, webhooks, scheduled jobs, and internal APIs.
- Privilege changes, delegation, impersonation, and support access.
- AI tool calls and agent actions gated by authorization, not only prompt instructions.

## Common Findings

- IDOR/BOLA from direct lookup by request-controlled ID.
- Admin routes hidden in UI but not enforced server-side.
- Tenant ID accepted from request body or header.
- Authorization checked before a resource is loaded but not against the loaded object.
- Worker performs privileged action based on untrusted queue message.

## Evidence Required

Show the source of identity, resource lookup, authorization decision, and sensitive action. If any step is not visible, mark as verification required.
