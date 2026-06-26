# Metric-definition evidence

The auditable evidence behind the conventions and the [divergence map](../divergence/). Two firm, classifier-independent layers.

## 1. Canonical definitions (Standards Board + origin authors)

`canonical-definitions.json` seeds the single-source-of-truth definitions: the SaaS Metrics Standards Board's codified consensus formulas, and the origin authors for coined metrics (the magic number, the burn multiple, the Rule of 40, LTV:CAC). `canonical-pull.js` fetches each source, snapshots it to `snapshots/` (durability against link rot), records a content hash and retrieval date, and re-verifies the cited phrase still appears verbatim on the live page. `canonical-verified.json` is the frozen record: per source, the snapshot file, sha256, date, and verified flag. Run `node canonical-pull.js` to refresh (needs network egress to the source domains).

## 2. Verbatim filer citations

Real, named 10-K definitions with SEC URLs (for example MariaDB's NRR, Backblaze's ARR, Autodesk and Okta on different bases), cited inline in each convention's Citations section as concrete proof that public filers diverge. These are classifier-independent: the verbatim quote is the evidence, no model is in the loop.

## What is not here (archived)

An SEC empirical-divergence pipeline, an LLM-classified corpus of ~321 filers measuring the *distribution* of conventions, was set aside (2026-06). Its reliability rested on LLM classification at only moderate cross-vendor agreement (Cohen's kappa 0.66 on the basis axis, lower on finer axes), which is not firm enough to be a credibility pillar of the standard. The standard leads with the two firm layers above. The distribution can be promoted back into the standard once a human-coded validation pass clears the 0.70 bar.

## Also here

`rev-rec-substrate.md` is the ASC 606 reference depth behind the rev-rec convention, the one library entry backed by an enforced GAAP standard rather than a convention.
