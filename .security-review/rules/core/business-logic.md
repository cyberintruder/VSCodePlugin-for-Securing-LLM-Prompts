# Business Logic Review

## Scope

Review abuse cases that pass normal validation but violate intended business rules.

## Checks

- Payment bypass, discount abuse, refund abuse, and double-spend.
- Workflow bypass across multi-step approvals, onboarding, KYC, consent, and entitlements.
- Race conditions in inventory, coupons, booking, voting, approvals, and account changes.
- Replay attacks against webhooks, payments, magic links, approvals, and one-time actions.
- Limit bypass across pagination, quotas, rate limits, trial accounts, and tenants.
- State-machine transitions enforced server-side.
- Privilege chaining across low-risk endpoints.
- AI output used to approve, classify, authorize, or trigger business actions.

## Common Findings

- Client-provided price, role, or entitlement trusted by server.
- Coupon applied multiple times through concurrent requests.
- Approval endpoint accepts final state without validating previous state.
- Webhook lacks replay protection and idempotency.
- Model classification directly triggers account action without deterministic policy checks.

## Evidence Required

Describe the intended business invariant, the bypass path, and the resulting impact.
