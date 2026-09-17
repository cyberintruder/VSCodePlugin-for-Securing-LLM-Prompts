# Copilot And Nested Frameworks

GitHub Copilot automatically discovers repository-wide instructions only at:

```text
<repo-root>/.github/copilot-instructions.md
```

If this framework is copied into a nested folder, Copilot will not automatically treat the nested `.github/copilot-instructions.md` as repository-wide instructions.

## Recommended Fix

When the extension activates after VS Code startup with a workspace open, it automatically creates or updates only its managed sections in the provider instruction files. This also works for an initially empty workspace:

- GitHub Copilot: `.github/copilot-instructions.md`
- Claude Code: `CLAUDE.md`
- Codex: `AGENTS.md`

It also copies the complete bundled `.security-review/` framework into the target project when that directory does not already exist. This includes the OWASP/ASVS mappings and the core, technology, cloud, and AI rule files. An existing project framework is preserved.
The installer adds `.security-review/` to the target project's `.gitignore` so the locally provisioned framework is not committed or pushed. The plugin source repository continues to track its own framework files.

The Command Palette command `Security Review: Install Workspace AI Instructions` is also available for manual refresh.

If any file already contains instructions not managed by this extension, it is preserved and the extension does not overwrite it. The managed section references the existing `.security-review/` framework, which contains the core, standards, technology, cloud, and AI rules.

The Copilot equivalent is:

```markdown
# Organization Security Review Instructions

Use `<nested-framework-path>/.security-review/` as the authoritative Secure Coding Framework.
Start with `<nested-framework-path>/.security-review/framework-manifest.json`.
Follow the workflow and only report evidence-backed security issues.
Use the framework's core, standards, technology, cloud, and AI rules as authoritative secure-coding guidance.
```

The instructions are additive. They do not replace the model provider's system/developer prompt, and a VS Code extension cannot enforce policy for arbitrary external LLM clients. The framework covers general secure coding; AI/LLM security is only one rule category.
