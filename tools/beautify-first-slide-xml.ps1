$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.IO.Compression

$source = (Resolve-Path 'docs/secure-coding-framework-developer-presentation-organized-v3.pptx').Path
$target = (Join-Path (Split-Path $source) 'secure-coding-framework-developer-presentation-organized-v4.pptx')
Copy-Item -LiteralPath $source -Destination $target -Force

$zip = [System.IO.Compression.ZipFile]::Open($target, [System.IO.Compression.ZipArchiveMode]::Update)
try {
  $entry = $zip.GetEntry('ppt/slides/slide1.xml')
  $reader = [System.IO.StreamReader]::new($entry.Open())
  try { $xml = $reader.ReadToEnd() } finally { $reader.Dispose() }

  $shapes = @'
<p:sp><p:nvSpPr><p:cNvPr id="8" name="Shape 8"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="9696450" y="0"/><a:ext cx="2495550" cy="6858000"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="123B61"/></a:solidFill><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="9" name="Shape 9"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="9696450" y="0"/><a:ext cx="2495550" cy="123825"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="2FA7B8"/></a:solidFill><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="10" name="Text 10"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="10096500" y="1066800"/><a:ext cx="1619250" cy="1524000"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr lIns="0" tIns="0" rIns="0" bIns="0"/><a:lstStyle/><a:p><a:r><a:rPr lang="en-US" sz="2200" b="1"><a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill><a:latin typeface="Aptos Display"/></a:rPr><a:t>PROJECT</a:t></a:r><a:br/><a:r><a:rPr lang="en-US" sz="2200" b="1"><a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill><a:latin typeface="Aptos Display"/></a:rPr><a:t>SECURITY</a:t></a:r><a:br/><a:r><a:rPr lang="en-US" sz="2200" b="1"><a:solidFill><a:srgbClr val="FFFFFF"/></a:solidFill><a:latin typeface="Aptos Display"/></a:rPr><a:t>CONTEXT</a:t></a:r><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="11" name="Shape 11"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="10096500" y="2876550"/><a:ext cx="1352550" cy="19050"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:solidFill><a:srgbClr val="7BD5DD"/></a:solidFill><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr/><a:lstStyle/><a:p><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="12" name="Text 12"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="10096500" y="3143250"/><a:ext cx="1619250" cy="1066800"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr lIns="0" tIns="0" rIns="0" bIns="0"/><a:lstStyle/><a:p><a:r><a:rPr lang="en-US" sz="1500"><a:solidFill><a:srgbClr val="B9D7EF"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>OWASP-aligned</a:t></a:r><a:br/><a:r><a:rPr lang="en-US" sz="1500"><a:solidFill><a:srgbClr val="B9D7EF"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>secure-coding</a:t></a:r><a:br/><a:r><a:rPr lang="en-US" sz="1500"><a:solidFill><a:srgbClr val="B9D7EF"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>guidance</a:t></a:r><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="13" name="Text 13"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="10096500" y="5994400"/><a:ext cx="1619250" cy="266700"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr lIns="0" tIns="0" rIns="0" bIns="0"/><a:lstStyle/><a:p><a:r><a:rPr lang="en-US" sz="1200" b="1"><a:solidFill><a:srgbClr val="7BD5DD"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>FRAMEWORK 2.0.0</a:t></a:r><a:endParaRPr/></a:p></p:txBody></p:sp>
<p:sp><p:nvSpPr><p:cNvPr id="14" name="Text 14"/><p:cNvSpPr/><p:nvPr/></p:nvSpPr><p:spPr><a:xfrm><a:off x="11112500" y="6413500"/><a:ext cx="533400" cy="266700"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom><a:noFill/><a:ln><a:noFill/></a:ln></p:spPr><p:txBody><a:bodyPr lIns="0" tIns="0" rIns="0" bIns="0"/><a:lstStyle/><a:p><a:pPr algn="r"/><a:r><a:rPr lang="en-US" sz="2000" b="1"><a:solidFill><a:srgbClr val="7BD5DD"/></a:solidFill><a:latin typeface="Aptos"/></a:rPr><a:t>01</a:t></a:r><a:endParaRPr/></a:p></p:txBody></p:sp>
'@
  $updated = $xml -replace '</p:spTree>', ($shapes + '</p:spTree>')
  $entry.Delete()
  $newEntry = $zip.CreateEntry('ppt/slides/slide1.xml')
  $writer = [System.IO.StreamWriter]::new($newEntry.Open(), [System.Text.UTF8Encoding]::new($false))
  try { $writer.Write($updated) } finally { $writer.Dispose() }
} finally { $zip.Dispose() }

Write-Output $target
