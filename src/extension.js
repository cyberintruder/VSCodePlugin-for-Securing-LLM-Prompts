"use strict";

const vscode = require("vscode");
const fs = require("fs");
const path = require("path");

const FINDING_SAMPLE = {
  id: "SRF-PHASE1",
  title: "Run a security review command to generate an AI-ready prompt",
  severity: "Informational",
  confidence: "High",
  status: "Confirmed",
  file: ".security-review/framework-manifest.json"
};

class SecurityReviewTreeProvider {
  constructor(context) {
    this.context = context;
    this._onDidChangeTreeData = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    this.findings = [FINDING_SAMPLE];
  }

  refresh(findings) {
    this.findings = findings && findings.length ? findings : [FINDING_SAMPLE];
    this._onDidChangeTreeData.fire();
  }

  getTreeItem(item) {
    const treeItem = new vscode.TreeItem(item.title, vscode.TreeItemCollapsibleState.None);
    treeItem.description = `${item.severity} / ${item.confidence}`;
    treeItem.tooltip = `${item.status}\n${item.file || ""}`;
    treeItem.iconPath = new vscode.ThemeIcon(severityIcon(item.severity));
    return treeItem;
  }

  getChildren() {
    return this.findings;
  }
}

function severityIcon(severity) {
  switch (severity) {
    case "Critical":
    case "High":
      return "error";
    case "Medium":
      return "warning";
    case "Low":
      return "info";
    default:
      return "shield";
  }
}

function activate(context) {
  const treeProvider = new SecurityReviewTreeProvider(context);
  vscode.window.registerTreeDataProvider("securityReviewFindings", treeProvider);

  context.subscriptions.push(
    vscode.commands.registerCommand("securityReview.quickReviewCurrentFile", () => quickReviewCurrentFile(context)),
    vscode.commands.registerCommand("securityReview.deepReviewWorkspace", () => deepReviewWorkspace(context)),
    vscode.commands.registerCommand("securityReview.aiSecurityReview", () => aiSecurityReview(context)),
    vscode.commands.registerCommand("securityReview.fixValidation", () => fixValidation(context)),
    vscode.commands.registerCommand("securityReview.openDashboard", () => openDashboard(context)),
    vscode.commands.registerCommand("securityReview.openFramework", () => openFrameworkManifest(context))
  );
}

function deactivate() {}

async function quickReviewCurrentFile(context) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage("Open a file before running Quick Review.");
    return;
  }

  const document = editor.document;
  const framework = loadFrameworkSummary(context);
  const prompt = [
    "# Security Review: Quick Review Current File",
    "",
    framework,
    "",
    "## Review Instructions",
    "",
    "Use Security Review Framework v2.",
    "Review only the file below.",
    "Trace attacker-controlled input to sinks.",
    "Report only evidence-backed security vulnerabilities.",
    "Ignore style, formatting, naming, and maintainability unless they directly introduce security risk.",
    "Return findings using `.security-review/schemas/finding.schema.json`.",
    "",
    "## File",
    "",
    `Path: ${document.fileName}`,
    `Language: ${document.languageId}`,
    "",
    "```" + document.languageId,
    document.getText(),
    "```"
  ].join("\n");

  await openPromptDocument(prompt, "security-review-quick.prompt.md");
}

async function deepReviewWorkspace(context) {
  const framework = loadFrameworkSummary(context);
  const files = await collectWorkspaceFiles();
  const prompt = [
    "# Security Review: Deep Workspace Review",
    "",
    framework,
    "",
    "## Review Instructions",
    "",
    "Use Security Review Framework v2.",
    "First identify architecture, technologies, trust boundaries, authentication, authorization, data flows, cloud/IaC/CI/CD, and AI components.",
    "Then review applicable controls only.",
    "Validate exploitability before reporting.",
    "Output JSON matching `.security-review/schemas/report.schema.json`.",
    "",
    "## Workspace Context",
    "",
    ...files.map((file) => formatWorkspaceFile(file))
  ].join("\n");

  await openPromptDocument(prompt, "security-review-deep.prompt.md");
}

async function aiSecurityReview(context) {
  const framework = loadFrameworkSummary(context);
  const files = await collectWorkspaceFiles(["**/*ai*", "**/*llm*", "**/*agent*", "**/*rag*", "**/*mcp*", "**/*prompt*", "**/package.json", "**/pyproject.toml"]);
  const prompt = [
    "# Security Review: AI/LLM Review",
    "",
    framework,
    "",
    "## Review Instructions",
    "",
    "Use `.security-review/rules/ai/` as the primary rule pack.",
    "Review prompt injection, indirect prompt injection, unsafe tool invocation, RAG poisoning, MCP exposure, excessive agency, sensitive context leakage, and model output trusted for security decisions.",
    "Report only evidence-backed issues.",
    "",
    "## Workspace Context",
    "",
    ...files.map((file) => formatWorkspaceFile(file))
  ].join("\n");

  await openPromptDocument(prompt, "security-review-ai.prompt.md");
}

async function fixValidation(context) {
  const framework = loadFrameworkSummary(context);
  const editor = vscode.window.activeTextEditor;
  const selectedText = editor ? editor.document.getText(editor.selection) : "";
  const prompt = [
    "# Security Review: Fix Validation",
    "",
    framework,
    "",
    "## Review Instructions",
    "",
    "Validate whether the remediation blocks the original exploit path.",
    "Check for bypasses, partial fixes, regressions, and new attack surface.",
    "Return validation result as Fixed, Partially Fixed, Not Fixed, Regressed, or Needs Verification.",
    "",
    "## Original Finding Or Selected Context",
    "",
    selectedText || "Paste the original finding and remediation diff here."
  ].join("\n");

  await openPromptDocument(prompt, "security-review-fix-validation.prompt.md");
}

function openDashboard(context) {
  const panel = vscode.window.createWebviewPanel(
    "securityReviewDashboard",
    "Security Review Dashboard",
    vscode.ViewColumn.One,
    {
      enableScripts: true,
      retainContextWhenHidden: true,
      localResourceRoots: [vscode.Uri.file(context.extensionPath)]
    }
  );

  const dashboardPath = path.join(context.extensionPath, ".security-review", "templates", "security-dashboard.html");
  let html = fs.readFileSync(dashboardPath, "utf8");
  html = html.replace(/<title>Security Review Dashboard<\/title>/, "<title>Security Review Dashboard - VS Code</title>");
  panel.webview.html = html;
}

async function openFrameworkManifest(context) {
  const manifestPath = path.join(context.extensionPath, ".security-review", "framework-manifest.json");
  const document = await vscode.workspace.openTextDocument(manifestPath);
  await vscode.window.showTextDocument(document);
}

function loadFrameworkSummary(context) {
  const manifestPath = path.join(context.extensionPath, ".security-review", "framework-manifest.json");
  const workflowPath = path.join(context.extensionPath, ".security-review", "workflow", "review-workflow.md");
  const dataFlowPath = path.join(context.extensionPath, ".security-review", "workflow", "data-flow-analysis.md");
  const falsePositivePath = path.join(context.extensionPath, ".security-review", "workflow", "false-positive-reduction.md");

  return [
    "## Framework Context",
    "",
    "The following embedded framework files are authoritative:",
    "",
    "### framework-manifest.json",
    "```json",
    safeRead(manifestPath),
    "```",
    "",
    "### review-workflow.md",
    safeRead(workflowPath),
    "",
    "### data-flow-analysis.md",
    safeRead(dataFlowPath),
    "",
    "### false-positive-reduction.md",
    safeRead(falsePositivePath)
  ].join("\n");
}

async function collectWorkspaceFiles(overrideIncludes) {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || !workspaceFolders.length) {
    return [];
  }

  const config = vscode.workspace.getConfiguration("securityReview");
  const maxFiles = config.get("maxWorkspaceFiles", 80);
  const maxFileBytes = config.get("maxFileBytes", 120000);
  const includes = overrideIncludes || config.get("includePatterns", ["src/**"]);
  const excludes = config.get("excludePatterns", ["**/node_modules/**", "**/.git/**"]);
  const excludeGlob = `{${excludes.join(",")}}`;
  const found = new Map();

  for (const include of includes) {
    const uris = await vscode.workspace.findFiles(include, excludeGlob, maxFiles);
    for (const uri of uris) {
      if (found.size >= maxFiles) {
        break;
      }
      found.set(uri.fsPath, uri);
    }
  }

  const files = [];
  for (const uri of found.values()) {
    try {
      const stat = fs.statSync(uri.fsPath);
      if (!stat.isFile() || stat.size > maxFileBytes) {
        continue;
      }
      files.push({
        path: vscode.workspace.asRelativePath(uri),
        content: fs.readFileSync(uri.fsPath, "utf8")
      });
    } catch {
      // Skip unreadable or binary-like files in Phase 1.
    }
  }

  return files;
}

function formatWorkspaceFile(file) {
  return [
    `### ${file.path}`,
    "",
    "```text",
    file.content,
    "```",
    ""
  ].join("\n");
}

async function openPromptDocument(content, name) {
  const document = await vscode.workspace.openTextDocument({
    language: "markdown",
    content
  });
  await vscode.window.showTextDocument(document, vscode.ViewColumn.Beside);
  vscode.window.showInformationMessage(`${name} generated. Paste this prompt into Copilot Chat or your approved AI reviewer.`);
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    return `Unable to read ${filePath}: ${error.message}`;
  }
}

module.exports = {
  activate,
  deactivate
};
