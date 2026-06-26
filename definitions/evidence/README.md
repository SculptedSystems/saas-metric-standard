# Metric-definition evidence

The auditable evidence behind the conventions and the [divergence map](../divergence/). One firm, classifier-independent layer.

## Canonical definitions (Standards Board + origin authors)

`canonical-definitions.json` seeds the single-source-of-truth definitions: the SaaS Metrics Standards Board's codified consensus formulas, and the origin authors for coined metrics (the magic number, the burn multiple, the Rule of 40, LTV:CAC). `canonical-pull.js` fetches each source, snapshots it to `snapshots/` (durability against link rot), records a content hash and retrieval date, and re-verifies the cited phrase still appears verbatim on the live page. `canonical-verified.json` is the frozen record: per source, the snapshot file, sha256, date, and verified flag. Run `node canonical-pull.js` to refresh (needs network egress to the source domains). This layer is classifier-independent: the verbatim codified phrase is the evidence, no model is in the loop.

## Also here

`rev-rec-substrate.md` is the ASC 606 reference depth behind the rev-rec convention, the one library entry backed by an enforced GAAP standard rather than a convention.
