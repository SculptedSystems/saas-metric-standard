---
metric: Net Revenue Retention
abbrev: NRR
aka: [NDR, Net Dollar Retention]
contested: true
gear: 1
authority: standards-board
diverges_on: [composition, basis, timing]
---

# Net Revenue Retention (NRR)

## One-liner

The share of recurring revenue retained from an existing-customer cohort over twelve months, including expansion and contraction but excluding new-logo revenue.

## Why it diverges

NRR is the highest-divergence metric. The same customer book reports a different retention rate on each axis: a recurring-revenue (ARR or MRR) basis is one legitimate convention among several, alongside a GAAP-revenue basis, an ACV or annualized basis, and varying timing and cohort choices. An investor recomputes against the applicable convention, with the codified recurring-revenue cohort method as the standard's default. The new-logo exclusion is the one near-settled point.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| ARR-basis 12-month cohort | basis + timing | current ARR of the 12-month-prior cohort over that cohort's ARR 12 months prior | recurring-revenue cohort method | the defensible default |
| 4-quarter / monthly average | timing | average of the monthly annualized rate over the period | monthly-average timing | smooths spikes; can read lower or higher |
| trailing-revenue basis | basis | GAAP revenue of the same customers, trailing-twelve vs prior | GAAP-revenue basis | revenue lag can understate a fast-expanding book |
| calendar-revenue, excludes acquired | basis + composition | calendar-year revenue of the prior-year cohort, acquired customers stripped | calendar-revenue basis | stripping acquired customers usually lowers it |
| implied-monthly basis | basis | implied monthly subscription revenue end vs one year prior | implied-monthly basis | similar to MRR; depends on revenue smoothing |
| segment-restricted cohort | composition | only a healthy segment (for example "premium") in the cohort | segment-restricted cohort | restricting to a healthy segment usually raises it |

## What the investor likely recomputes on

The codified convention is the basis a founder's number gets measured against when no specific investor convention is on the table. It is the standard's default anchor.

The codified NRR is an ARR-basis twelve-month cohort (the standards-board cohort method). Legitimate variants average it across the period or threshold it to a cohort segment, and the specific basis, timing, and cohort sophistication vary by convention, so the direction is settled but the exact read is not. Name the convention against the codified one rather than assume it.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** the ARR-basis twelve-month cohort number (the standards-board cohort method), with the range footnoted. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that number governs, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive convention is whichever inflates via composition (segment-restricting the cohort) or a flattering timing choice; that is always the labeled risk, not the defensible read. Principle: defensibility, not optimization, the number that survives an investor's recompute. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying an NRR spread:

- **Defensible basis:** a recurring-revenue (ARR or MRR) cohort on the standards-board method. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable convention actually uses, a GAAP-revenue basis or an ACV / annualized basis, or a monthly-average timing, or a segment-restricted cohort. Legitimate, but not the defensible read, so it is the labeled risk, not the lead number.
- **Defect gap:** no legitimate convention reproduces it. The timing-axis case is the shared point-in-time / timing test (see [the three axes](../divergence/axes.md)): here, the as-of BoP cohort cannot be reconstructed because no retained point-in-time state or history exists to rebuild it. Or new-logo revenue is folded into the cohort (the one error the market has largely settled against). No authority-traceable convention recovers the number.

## Canonical formula

$$
\text{NRR}=\frac{\text{BOP value}+\text{Expansion}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\quad(\text{existing customers only; ``value'' = ARR, revenue, or implied-MRR depending on the basis})
$$
Primary source: the Standards Board codified cohort method, "Net Revenue Retention (NRR), also known as Net Dollar Retention (NDR), measures the percentage of recurring revenue retained over a specific period," recorded in [the standard's verified evidence set](../evidence/canonical-verified.json), sourced from the SaaS Metrics Standards Board's [net revenue retention](https://www.saasmetricsboard.com/net-revenue-retention) page. The codified method is the authority here.

Standards-board cohort method (the defensible default): current value of the cohort of all customers as of 12 months prior to the period end, over that same cohort's value 12 months prior. New logos are excluded by construction.

| Input | Source-system class | Timing-offset |
|---|---|---|
| BOP value (the cohort denominator) | billing / data warehouse (recurring-revenue book) | as of 12 months prior to the period end |
| Cohort membership (existing customers only) | CRM / billing | fixed at 12 months prior; held constant across the window |
| Expansion | billing | over the trailing 12-month window |
| Contraction | billing | over the trailing 12-month window |
| Churn | billing | over the trailing 12-month window |
| Numerator (current value of the same cohort) | billing / data warehouse | as of period end |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm the cohort is existing-customers-only with new logos out and expansion and contraction handled, and that closes from the aggregates. Basis and timing do not close. They interact non-additively (an ARR basis read point-in-time and a GAAP-revenue basis read as a trailing-twelve average are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the convention the founder used against the defensible ARR-basis cohort, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## The three axes (per NRR)

NRR diverges on all three axes, the only metric in the library to do so materially. Composition is the settled part: existing-customer cohort only, expansion and contraction in, new logos out, with the new-logo exclusion consistent across conventions. Basis splits widest, recurring (ARR or MRR) vs GAAP-revenue (trailing-twelve-month or calendar) vs ACV or contracted vs implied-monthly. Timing is reported so inconsistently that two independent readings often cannot classify it the same way.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching NRR

- **gross-vs-net churn confusion**: reporting only net retention lets expansion mask gross and logo attrition; investors triangulate GRR and logo retention underneath (GRR is at most 100% by construction). See `classic-errors.md`.
- folding new-logo revenue into the cohort: the one error the market has largely settled against, so a useful tell if seen.

## Scope boundary

IN SCOPE (from the ~12 reported aggregates), the recognition side: the composition axis, confirm new logos are excluded and expansion and contraction are handled. OUT OF SCOPE (named but not computed): basis and timing, because they require raw customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board cohort method, "Net Revenue Retention (NRR), also known as Net Dollar Retention (NDR), measures the percentage of recurring revenue retained over a specific period": the codified, snapshot-verified Net Revenue Retention entry in [the standard's verified evidence set](../evidence/canonical-verified.json), sourced from the SaaS Metrics Standards Board's [net revenue retention](https://www.saasmetricsboard.com/net-revenue-retention) page.
- The NRR basis-and-timing divergence runs across legitimate conventions: a recurring-revenue (ARR) cohort, a trailing GAAP-revenue basis, a calendar-revenue basis excluding acquired customers, an implied-monthly basis, a monthly-average timing, and a segment-restricted cohort. Each reports a different retention rate on the same customer book. The codified recurring-revenue cohort method is the defensible default; the rest are the labeled convention risk.
