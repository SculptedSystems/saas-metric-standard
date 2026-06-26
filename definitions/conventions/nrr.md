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

NRR is the highest-divergence metric. Named public filers split materially on all three axes: a recurring-revenue basis is one legitimate convention among several, and the divergence runs through recognizable peers (Autodesk, Asana on GAAP revenue; Okta, Cloudflare on ACV or annualized; MariaDB on ARR), not just obscure filers. The same customer book reports a different retention rate under each, and an investor recomputes against whichever the relevant peer set uses. The new-logo exclusion is the one near-settled point.

## Legitimate convention families

| Family | Axis | Method (short) | Representative filer | Direction vs defensible |
|---|---|---|---|---|
| ARR-basis 12-month cohort | basis + timing | current ARR of the 12-month-prior cohort over that cohort's ARR 12 months prior | MariaDB | the defensible default |
| 4-quarter / monthly average | timing | average of the monthly annualized rate over the period | EverCommerce | smooths spikes; can read lower or higher |
| trailing-revenue basis | basis | GAAP revenue of the same customers, trailing-twelve vs prior | SEMrush | revenue lag can understate a fast-expanding book |
| calendar-revenue, excludes acquired | basis + composition | calendar-year revenue of the prior-year cohort, acquired customers stripped | Q2 Holdings | stripping acquired customers usually lowers it |
| implied-monthly basis | basis | implied monthly subscription revenue end vs one year prior | BlackLine | similar to MRR; depends on revenue smoothing |
| segment-restricted cohort | composition | only a healthy segment (for example "premium") in the cohort | Brightcove | restricting to a healthy segment usually raises it |

## What the investor likely recomputes on

The named filers below are late-stage and large. The standard treats them as a proxy for the convention an early-stage investor carries, on the reasoning that a seed or Series A investor judges a raise against the basis the public market has settled on. So the convention named here is read off the public record, and it is where a founder's number gets measured when no specific investor convention is on the table.

The record points to an ARR-basis cohort, sometimes averaged across the period, sometimes thresholded to a cohort segment. The specific basis, timing, and cohort sophistication vary by filer, so the direction is settled but the exact read is not. Name the convention against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** the ARR-basis twelve-month cohort number (the standards-board cohort method, exemplified by MariaDB), with the range footnoted. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that number governs, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive convention is whichever inflates via composition (segment-restricting the cohort) or a flattering timing choice; that is always the labeled risk, not the defensible read. Principle: defensibility, not optimization, the number that survives an investor's recompute. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying an NRR spread:

- **Defensible basis:** a recurring-revenue (ARR or MRR) cohort on the standards-board method, exemplified by MariaDB. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable filer actually uses in its own filing, a GAAP-revenue basis (Autodesk, Asana) or an ACV / annualized basis (Okta, Cloudflare), or a monthly-average timing (EverCommerce), or a segment-restricted cohort (Brightcove). Legitimate, but not the defensible read, so it is the labeled risk, not the lead number.
- **Defect gap:** no legitimate convention reproduces it. The timing-axis case is the shared point-in-time / timing test (see [the three axes](../divergence/axes.md)): here, the as-of BoP cohort cannot be reconstructed because no retained point-in-time state or history exists to rebuild it. Or new-logo revenue is folded into the cohort (the one error the market has largely settled against). No authority-traceable filer's convention recovers the number.

## Canonical formula

$$
\text{NRR}=\frac{\text{BOP value}+\text{Expansion}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\quad(\text{existing customers only; ``value'' = ARR, revenue, or implied-MRR depending on the filer})
$$
Primary source: the Standards Board codified cohort method, "Net Revenue Retention (NRR), also known as Net Dollar Retention (NDR), measures the percentage of recurring revenue retained over a specific period," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/net-revenue-retention). The codified method is the authority here; the verbatim filer divergence is in the Citations section below.

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

NRR diverges on all three axes, the only metric in the library to do so materially. Composition is the settled part: existing-customer cohort only, expansion and contraction in, new logos out, with the new-logo exclusion consistent across the named filers. Basis splits widest, recurring (ARR or MRR) vs GAAP-revenue (trailing-twelve-month or calendar) vs ACV or contracted vs implied-monthly. Timing is disclosed so inconsistently across filers that two independent readings often cannot classify it the same way.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching NRR

- **gross-vs-net churn confusion**: reporting only net retention lets expansion mask gross and logo attrition; investors triangulate GRR and logo retention underneath (GRR is at most 100% by construction). See `classic-errors.md`.
- folding new-logo revenue into the cohort: the one error the market has largely settled against, so a useful tell if seen.

## Scope boundary

IN SCOPE (from the ~12 reported aggregates), the recognition side: the composition axis, confirm new logos are excluded and expansion and contraction are handled. OUT OF SCOPE (named but not computed): basis and timing, because they require raw customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board cohort method, "Net Revenue Retention (NRR), also known as Net Dollar Retention (NDR), measures the percentage of recurring revenue retained over a specific period": the codified, snapshot-verified Net Revenue Retention entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/net-revenue-retention).
- The NRR basis-and-timing divergence, verbatim from named 10-K filers:
  - **MariaDB**, *ARR-basis 12-month cohort*: "We calculate our dollar-based net retention rate as of a period end by starting with the ARR from the cohort of all subscription customers as of 12 months prior to such period end." ([10-K](https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm))
  - **EverCommerce**, *4-quarter / monthly average*: "We calculate our annualized net revenue retention rate based on the average of the annualized net revenue retention rate calculated for each month during the twelve-month period as of the most recent quarter end." ([10-K](https://www.sec.gov/Archives/edgar/data/1853145/000185314525000009/evcm-20241231.htm))
  - **SEMrush**, *trailing-revenue basis, not ARR*: "...using (a) the revenue from our customers during the twelve month period ending one year prior ... as the denominator and (b) the revenue from those same customers during the twelve months ending as of the end of such period as the numerator." ([10-K](https://www.sec.gov/Archives/edgar/data/1831840/000162828025009448/semr-20241231.htm))
  - **Q2 Holdings**, *calendar-revenue basis, excludes acquired customers*: "...the total revenues in a calendar year, excluding any revenues from acquired customers during such year, from customers who were implemented ... as of December 31 of the prior year, expressed as a percentage of the total revenues during the prior year from the same group of customers." ([10-K](https://www.sec.gov/Archives/edgar/data/1410384/000141038425000010/qtwo-20241231.htm))
  - **Brightcove**, *segment-restricted cohort*: "...dividing: (a) the current annualized recurring revenue for premium customers that existed twelve months prior by (b) the annualized recurring revenue for all premium customers that existed twelve months prior." ([10-K](https://www.sec.gov/Archives/edgar/data/1313275/000095017024018770/bcov-20231231.htm))
  - **BlackLine**, *implied-monthly basis*: "...the implied monthly subscription and support revenue at the end of a period for the base set of customers ... divided by the implied monthly subscription and support revenue one year prior ... for that same customer base." ([10-K](https://www.sec.gov/Archives/edgar/data/1666134/000166613425000003/bl-20241231.htm))
- The divergence is evidenced by the named filers themselves: MariaDB reports on a recurring-revenue (ARR) basis, SEMrush on trailing GAAP revenue, Q2 on calendar revenue excluding acquired customers, BlackLine on implied-monthly, EverCommerce on a monthly average, Brightcove on a segment-restricted cohort. The robust claim is the divergence itself plus these verbatim examples.
