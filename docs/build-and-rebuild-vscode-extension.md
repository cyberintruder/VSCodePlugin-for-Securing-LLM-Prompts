# Build And Rebuild The VS Code Extension

This guide explains how to build, rebuild, package, and install the Secure Coding Framework VS Code extension.

## What You Are Building

The extension package is:

```text
dist/security-review-framework-0.1.0.vsix
```

This `.vsix` file can be installed into VS Code and shared with developer teams.

## Repository Layout

Important files:

```text
package.json                         VS Code extension manifest
src/extension.js                     Extension activation and commands
media/security-review.svg            Activity bar icon
.security-review/                    Embedded security review framework
.security-review/templates/          Dashboard HTML
docs/vscode-extension-phase1.md      Phase 1 extension docs
dist/                                Generated VSIX output
```

## Prerequisites

You need:

- VS Code
- Node.js
- npm
- VSCE, the VS Code extension packager

This repo can use either a system Node.js install or the portable Node.js install under:

```text
.tools/node/
```

## Check Local Portable Node

From the repository root:

```powershell
.\tools\node.ps1 --version
.\tools\npm.ps1 --version
```

Expected example:

```text
v24.18.0
11.16.0
```

If `.tools/node/` is not present, install Node.js from:

```text
https://nodejs.org/
```

Or use an enterprise-approved internal Node.js distribution.

## Prepare The Shell

If using the portable Node.js in this repo, add it to `PATH` for the current terminal:

```powershell
$env:Path = "$PWD\.tools\node;$env:Path"
```

Verify:

```powershell
node --version
npm --version
```

## Install Dependencies

Run:

```powershell
npm install
```

This installs local development dependencies, including:

```text
@vscode/vsce
```

If you are using the portable npm wrapper:

```powershell
.\tools\npm.ps1 install
```

## Build The VSIX

Run:

```powershell
.\node_modules\.bin\vsce.cmd package --out dist\security-review-framework-0.1.0.vsix
```

Or:

```powershell
npm run package -- --out dist\security-review-framework-0.1.0.vsix
```

The expected output is:

```text
DONE  Packaged: dist\security-review-framework-0.1.0.vsix
```

## Install The VSIX Locally

Run:

```powershell
code --install-extension dist\security-review-framework-0.1.0.vsix --force
```

Verify:

```powershell
code --list-extensions --show-versions | Select-String -Pattern "security-review-framework"
```

Expected:

```text
security-review-framework.security-review-framework@0.1.0
```

## Rebuild After Changes

Use this whenever you change extension files, framework rules, prompts, schemas, or dashboard HTML.

```powershell
$env:Path = "$PWD\.tools\node;$env:Path"
npm install
.\node_modules\.bin\vsce.cmd package --out dist\security-review-framework-0.1.0.vsix
code --install-extension dist\security-review-framework-0.1.0.vsix --force
```

Restart VS Code or run:

```text
Developer: Reload Window
```

from the Command Palette.

When VS Code starts with a workspace open, the extension automatically installs or refreshes its managed instruction sections for Copilot, Claude Code, and Codex, including initially empty workspaces. It does not overwrite unmanaged content in existing instruction files.
If the target project does not already contain `.security-review/`, the extension also copies the complete bundled framework, including OWASP/ASVS and all rule packs.
The target project's `.gitignore` is updated with `.security-review/`; the extension source repository still tracks its own `.security-review/` directory.

## Run In Extension Development Host

For development:

1. Open this repository in VS Code.
2. Press `F5`.
3. A new Extension Development Host window opens.
4. Run commands from the Command Palette:

```text
Security Review: Quick Review Current File
Security Review: Deep Review Workspace
Security Review: AI/LLM Security Review
Security Review: Fix Validation Prompt
Security Review: Open Dashboard
Security Review: Open Framework Manifest
```

## What To Change For A New Version

Update `package.json`:

```json
{
  "version": "0.1.1"
}
```

Then package:

```powershell
.\node_modules\.bin\vsce.cmd package --out dist\security-review-framework-0.1.1.vsix
```

## Internal Team Distribution

Share the `.vsix` file:

```text
dist/security-review-framework-0.1.0.vsix
```

Developers install it with:

```powershell
code --install-extension security-review-framework-0.1.0.vsix
```

For enterprise rollout, publish the VSIX through:

- Internal developer portal
- Managed software center
- VS Code extension gallery mirror
- Device management tooling
- Private Open VSX or Azure DevOps artifact feed

## Files Included In The Extension

The `.vscodeignore` file controls what is excluded.

Included:

```text
package.json
src/
media/
.github/
.security-review/
ai-security/
cloud/
docs/
examples/
security/
standards/
templates/
README.md
CHANGELOG.md
LICENSE
SETUP.md
SECURITY_REVIEW_VERSION.md
```

Excluded:

```text
.git/
.agents/
dist/
.tools/
tools/
node_modules/
*.log
*.tmp
```

## Troubleshooting

### `node` Is Not Recognized

Use the portable Node path:

```powershell
$env:Path = "$PWD\.tools\node;$env:Path"
```

Then retry:

```powershell
node --version
```

### `vsce` Is Not Recognized

Use the local VSCE binary:

```powershell
.\node_modules\.bin\vsce.cmd --version
```

If missing:

```powershell
npm install
```

### VSCE Fails Because README Links Are Broken

Ensure `package.json` contains:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/security-review-framework/security-review-framework.git"
}
```

Or pass explicit base URLs to VSCE.

### Extension Installs But Commands Do Not Appear

Try:

```text
Developer: Reload Window
```

Then search Command Palette for:

```text
Security Review
```

### VS Code Shows A Log Permission Warning

If install succeeds but VS Code prints a log directory permission warning, the extension is usually still installed. Verify with:

```powershell
code --list-extensions --show-versions | Select-String -Pattern "security-review-framework"
```

## Current Known Build

The current successful local build used:

```text
Node.js v24.18.0
npm 11.16.0
vsce 3.9.2
VS Code 1.126.0
```

Generated:

```text
dist/security-review-framework-0.1.0.vsix
```
