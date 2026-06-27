# Conventions library

The per-metric operational layer of the standard: one file per metric on a fixed schema (`_schema.md`), giving the canonical formula, the reconciliation, and the defensible / aggressive / defect classification.

This library does **not** restate the authority. Following the cite-do-not-duplicate discipline, the canonical sources stay canonical and this library cites them:

- **Standards-board + origin-author definitions:** the SaaS Metrics Standards Board codified consensus and the origin authors for coined metrics, recorded in [the canonical definitions](../evidence/canonical-definitions.json) and frozen in [the standard's verified evidence set](../evidence/canonical-verified.json).

What this library adds on top of those is the **operational layer**: the three-axis decomposition (composition, basis, timing), the defensible-read framing, and the classic-error mapping.

## How to use it

- **The aim is divergence-recognition.** Given a stated method, name the axis it diverges on and the defensible convention an investor recomputes against. Do not present any contested convention as settled.
- **The scope boundary is recognize-vs-reconstruct.** From the reported aggregates the metric can be computed and named (including a stated expansion, contraction, and churn split), but that split cannot be verified. Verifying composition from raw sources, and computing the basis and timing conventions that aggregates cannot, requires the per-axis reconstruction from raw source systems, which is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform. So composition is what the aggregates compute and name, basis and timing need raw data, and even the stated composition is verified only against raw sources.

## Files

- `_schema.md`: the fixed per-metric schema.
- `nrr.md`, `arr.md`: the gear-1 floor metrics.
- `classic-errors.md`: the five named classic errors.
- `rev-rec.md`: revenue recognition (the four money-states, deferred revenue, the GAAP boundary, and the ASC 606 recognition model), backed by the Big-4-grounded [ASC 606 substrate](../evidence/rev-rec-substrate.md).
- The build-phase metrics: `grr.md`, `churn.md`, `cac.md` (CAC, the CAC ratio, and CAC payback), `gross-margin.md` (the codified Subscription Gross Margin % dependency the CAC-payback formula divides by), `rule-of-40.md`, `magic-number.md`, `burn-multiple.md`, `ltv.md` (LTV and LTV:CAC), `mrr-movement.md` (the MRR/ARR movement bridge that NRR, GRR, and churn decompose from), `quick-ratio.md` (the SaaS quick ratio).

## Evidence tiers

Grounding strength varies by metric; each entry's `authority` field marks its tier. ARR, NRR, and GRR rest on the SaaS Metrics Standards Board codified definitions, firm and classifier-independent; the rest rest on the SaaS Metrics Standards Board (codified) or the origin author (magic number, burn multiple, LTV:CAC). Read their divergence as documented convention variance (for example FCF vs EBITDA in the Rule of 40, or the recurring-vs-contracted basis split for ARR/NRR/GRR), measured against the codified convention.
