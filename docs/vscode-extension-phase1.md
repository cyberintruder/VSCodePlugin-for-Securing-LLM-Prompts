# VS Code Extension Phase 1

Phase 1 turns Secure Coding Framework v2 into a standalone VS Code extension shell.

## Included

- Command Palette commands.
- Editor context-menu command for quick file review.
- Security Review activity-bar view.
- Embedded framework loading from `.security-review/`.
- Prompt generation for:
  - Current file quick review.
  - Workspace deep review.
  - AI/LLM security review.
  - Fix validation.
- Interactive dashboard Webview using `.security-review/templates/security-dashboard.html`.

## Commands

```text
Security Review: Quick Review Current File
Security Review: Deep Review Workspace
Security Review: AI/LLM Security Review
Security Review: Fix Validation Prompt
Security Review: Open Dashboard
Security Review: Open Framework Manifest
```

## How Developers Use It

1. Install or run the extension in VS Code.
2. Open an application repository.
3. Run `Security Review: Quick Review Current File` from the Command Palette or editor context menu.
4. Paste the generated prompt into Copilot Chat or the approved AI reviewer.
5. For full reviews, run `Security Review: Deep Review Workspace`.
6. Open `Security Review: Open Dashboard` and paste JSON matching `.security-review/schemas/report.schema.json`.

## Running Locally

On a machine with VS Code and Node.js:

```bash
npm install
code .
```

Press `F5` to launch an Extension Development Host.

This Phase 1 extension has no runtime npm dependencies and no TypeScript build step.

This repository can also use the portable Node.js install under `.tools/node`:

```powershell
.\tools\node.ps1 --version
.\tools\npm.ps1 --version
```

## Packaging

Install VSCE:

```bash
npm install -g @vscode/vsce
```

Package:

```bash
vsce package
```

Install the generated VSIX:

```bash
code --install-extension secure-coding-framework-2.0.0.vsix
```

For the complete build and rebuild workflow, see:

```text
docs/build-and-rebuild-vscode-extension.md
```

## Phase 2 Direction

Phase 2 should add direct VS Code Language Model API integration so the extension can run reviews without asking developers to copy prompts manually.
