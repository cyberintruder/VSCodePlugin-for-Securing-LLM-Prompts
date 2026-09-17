param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]] $Arguments
)

$root = Split-Path -Parent $PSScriptRoot
$node = Join-Path $root ".tools\node\node.exe"

if (-not (Test-Path -LiteralPath $node)) {
  Write-Error "Portable node was not found at $node. Install Node.js into .tools\node first."
  exit 1
}

& $node @Arguments
exit $LASTEXITCODE
