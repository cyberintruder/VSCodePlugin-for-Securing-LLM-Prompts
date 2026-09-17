param(
  [Parameter(ValueFromRemainingArguments = $true)]
  [string[]] $Arguments
)

$root = Split-Path -Parent $PSScriptRoot
$npm = Join-Path $root ".tools\node\npm.cmd"

if (-not (Test-Path -LiteralPath $npm)) {
  Write-Error "Portable npm was not found at $npm. Install Node.js into .tools\node first."
  exit 1
}

& $npm @Arguments
exit $LASTEXITCODE
