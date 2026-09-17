# Security Fix Validation

Use Security Review Framework v2 to validate remediation.

## Inputs

Use the original finding, changed files, tests, and directly impacted code paths.

## Required Workflow

1. Restate the original vulnerability and exploit path.
2. Identify the intended fix.
3. Verify whether the fix blocks the original exploit path.
4. Check for bypasses, partial fixes, regressions, and newly introduced attack surface.
5. Check whether tests cover the security behavior.
6. Update status and residual risk.

## Output

For each finding return:

- Original finding ID
- Validation result: `Fixed`, `Partially Fixed`, `Not Fixed`, `Regressed`, or `Needs Verification`
- Evidence
- Remaining exploit path, if any
- Recommended next action

If all findings are fixed, say so clearly and list any remaining review gaps.
