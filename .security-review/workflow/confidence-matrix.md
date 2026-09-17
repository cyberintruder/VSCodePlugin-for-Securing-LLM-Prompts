# Confidence Matrix

Confidence describes evidence quality, not impact.

## High Confidence

Use when:

- The source, path, sink, and impact are visible.
- Existing controls are absent or demonstrably ineffective.
- The exploit scenario is realistic.
- Line-level evidence supports the finding.

## Medium Confidence

Use when:

- Most of the path is visible.
- One part depends on deployment, framework behavior, or runtime configuration.
- The finding is likely but needs targeted verification.

## Low Confidence

Use when:

- The pattern is risky but important details are missing.
- Input control, reachability, or control effectiveness is uncertain.
- The issue should be treated as a question or verification item.

Low-confidence items should usually be reported as `Potential Issue - Requires Verification`.
