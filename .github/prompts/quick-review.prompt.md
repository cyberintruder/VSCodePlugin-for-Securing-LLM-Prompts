# Quick Security Review

Use Secure Coding Framework v2.

## Scope

Review the current file, current change set, or files I explicitly mention. Do not perform a full repository audit unless asked.

## Workflow

1. Identify the touched feature, entry points, trust boundaries, and security-sensitive behavior.
2. Detect relevant technology and rule packs from `.security-review/framework-manifest.json`.
3. Trace attacker-controlled input to dangerous sinks.
4. Verify authentication, authorization, validation, secrets handling, logging, and error behavior only where applicable.
5. Report only evidence-backed security issues.

## Ignore

Ignore formatting, naming, code style, general refactoring, performance, and documentation unless they directly introduce a security vulnerability.

## Output

Return:

- Executive summary with the count of confirmed findings.
- Findings ordered by severity.
- Each finding must include severity, confidence, affected file, evidence, exploitability, impact, and remediation.
- Mark incomplete evidence as `Potential Issue - Requires Verification`.
