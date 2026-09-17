# Configuration Review

## Scope

Review security-sensitive defaults, environment-specific behavior, headers, debug modes, and deployment configuration.

## Checks

- Debug modes, stack traces, admin consoles, and development endpoints disabled in production.
- Secure defaults for cookies, CORS, CSRF, headers, TLS, proxy trust, and error handling.
- Environment variable handling and frontend exposure.
- Feature flags and kill switches.
- Dangerous framework defaults and sample configs.
- Dependency and runtime security flags.
- Public network binding and management interfaces.

## Common Findings

- `DEBUG=true` in production configuration.
- Wildcard CORS with credentials.
- Trusting all proxies without deployment guardrails.
- Admin console exposed publicly.
- Security headers disabled by default.

## Evidence Required

Show configuration key, default value, environment behavior, and why the production path is affected or requires verification.
