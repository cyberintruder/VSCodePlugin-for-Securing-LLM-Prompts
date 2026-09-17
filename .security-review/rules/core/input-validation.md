# Input Validation And Injection Review

## Scope

Review validation, parsing, normalization, encoding, and injection risk for attacker-controlled input.

## Checks

- Server-side validation for type, format, length, range, allowed values, and business constraints.
- Canonicalization before validation for paths, URLs, Unicode, encodings, and file names.
- Parameterized queries for SQL and safe query builders for NoSQL/search.
- Safe templating and contextual output encoding for HTML, JavaScript, CSS, URLs, CSV, Markdown, and PDFs.
- Deserialization, XML, YAML, archive extraction, and parser edge cases.
- SSRF protections for user-controlled URLs, webhooks, importers, and metadata fetchers.
- Command injection protections for shell and process execution.
- Prompt construction safety for LLM inputs and retrieved content.

## Common Findings

- Raw SQL with interpolated request input.
- User input passed to `exec`, `spawn`, `ProcessBuilder`, or shell commands.
- URL fetchers that allow private IPs, metadata services, redirects, or non-HTTP schemes.
- Stored content rendered without contextual encoding.
- File paths built from request input without canonical path checks.

## Evidence Required

Provide the complete source-to-sink path. Do not report injection solely because input exists; show the dangerous sink.
