# Changelog

## 2.0.3 - 2026-10-11

- Removed unused report fragments, adoption and command documentation, and three unconnected workflow files from the provisioned framework.
- Cleaned references to removed files.
- Excluded local presentation review artifacts and old VSIX packages from extension builds.

## 2.0.2 - 2026-09-21

- Fixed extension startup failure caused by unescaped Markdown backticks in the managed instruction template.

## 2.0.1 - 2026-09-21

- Fixed extension activation for workspace instruction installation.
- Enhanced existing provider instruction files without overwriting developer content.
- Provisioned new workspaces when files are created.
- Rebuilt the VSIX with the corrected lifecycle behavior.

## 0.1.0 VS Code Extension Phase 1 - 2026-06-29

- Added standalone VS Code extension manifest.
- Added dependency-free JavaScript extension entry point.
- Added Command Palette commands for quick review, deep review, AI review, fix validation, dashboard, and framework manifest.
- Added Security Review activity-bar view.
- Added Webview dashboard integration.
- Added extension usage documentation.

## 2.0.0 - 2026-06-29

- Added root Copilot bootstrap instructions.
- Added full `.security-review/` framework structure.
- Added review workflow, technology detection, threat modeling, source-to-sink analysis, privilege-boundary review, exploitability validation, false-positive reduction, severity matrix, confidence matrix, and data classification.
- Added core AppSec rule packs.
- Added cloud, Kubernetes, Docker, Terraform, CI/CD, and supply-chain rule packs.
- Added AI security rule packs for LLMs, prompt injection, RAG, agents, and MCP.
- Added technology packs for Java/Spring, .NET, Node.js, Python, Go, frontend apps, and mobile/Flutter.
- Added standards mapping for OWASP, ASVS, CWE, CAPEC, NIST SSDF, NIST AI RMF, and MITRE ATT&CK.
- Added JSON schemas for findings and reports.
- Added sample finding and report JSON.
- Added self-contained interactive HTML dashboard.
- Converted legacy top-level folders into compatibility entry points.
