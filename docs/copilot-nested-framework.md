# Copilot And Nested Frameworks

GitHub Copilot automatically discovers repository-wide instructions only at:

```text
<repo-root>/.github/copilot-instructions.md
```

If this framework is copied into a nested folder, Copilot will not automatically treat the nested `.github/copilot-instructions.md` as repository-wide instructions.

## Recommended Fix

Create a root `.github/copilot-instructions.md` in the application repository:

```markdown
# Copilot Security Review Instructions

Use `<nested-framework-path>/.security-review/` as the authoritative Security Review Framework.
Start with `<nested-framework-path>/.security-review/framework-manifest.json`.
Follow the workflow and only report evidence-backed security issues.
```

Then reference the nested framework in prompts.
