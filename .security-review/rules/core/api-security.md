# API Security Review

## Scope

Review REST, GraphQL, gRPC, WebSocket, webhook, and internal APIs.

## Checks

- Authentication and authorization on every protected endpoint.
- Object-level authorization for resource IDs.
- Method-level authorization for state-changing operations.
- Rate limiting, pagination limits, request size limits, and cost controls.
- Mass assignment and over-posting protections.
- Response filtering to avoid excessive data exposure.
- Safe CORS and CSRF posture based on credential behavior.
- Webhook signature validation, replay protection, and timestamp checks.
- GraphQL depth, complexity, introspection, batching, and resolver authorization.
- Idempotency for payment and state-changing APIs.

## Common Findings

- `GET /users/{id}` returns another user's data.
- Update endpoints bind request bodies directly to privileged model fields.
- GraphQL resolver checks authorization at query root but not nested objects.
- Webhook handler trusts sender-controlled payload without signature verification.
- Missing idempotency enables duplicate payment, coupon, or approval actions.

## Evidence Required

Show the endpoint, attacker-controlled parameters, authorization decision, and sensitive response or mutation.
