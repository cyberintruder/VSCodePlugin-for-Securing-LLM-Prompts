# Go Security Review

## Detection

Apply when the repository includes `go.mod`, `net/http`, Gin, Echo, Fiber, Chi, gRPC, GORM, sqlx, or Go workers.

## Checks

- Middleware order for auth, CORS, request limits, recovery, and logging.
- Context propagation and cancellation for external calls.
- SQL query parameterization and raw string construction.
- Path traversal in `http.ServeFile`, uploads, archives, and static file handlers.
- SSRF in `http.Client` calls to user-controlled URLs.
- TLS verification and custom transport settings.
- JWT validation, cookie settings, and CSRF for cookie sessions.
- Error handling that avoids leaking stack traces or secrets.

## Common Findings

- `fmt.Sprintf` builds SQL from request input.
- User-controlled path passed to file serving without canonical path check.
- `InsecureSkipVerify: true` in TLS config.
- Middleware protects router group but one route is registered outside it.
- HTTP client can reach metadata service or internal networks.
