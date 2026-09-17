# File Handling Review

## Scope

Review uploads, downloads, archive handling, path handling, document generation, and object storage.

## Checks

- File type validation using content inspection, not extension alone.
- Size, count, decompression, and processing limits.
- Malware scanning and quarantine for risky workflows.
- Safe storage paths and canonical path enforcement.
- Object-level authorization for downloads and previews.
- Safe archive extraction against zip slip and zip bombs.
- Metadata stripping when files can contain sensitive metadata.
- Safe content disposition, content type, and preview behavior.
- Server-side file processing sandboxing.

## Common Findings

- User-controlled filename used in path join without canonical path check.
- Uploaded SVG/HTML served inline from trusted domain.
- Download route checks authentication but not file ownership.
- Archive extraction writes outside target directory.
- Public bucket stores private uploaded files.

## Evidence Required

Trace upload or download request to storage, processing, authorization, and response.
