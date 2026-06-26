---
metric: Net Revenue Retention
abbrev: NRR
aka: [NDR, Net Dollar Retention]
contested: true
gear: 1
authority: standards-board
---

# Net Revenue Retention (NRR)

## One-liner

The share of recurring revenue retained from an existing-customer cohort over twelve months, including expansion and contraction but excluding new-logo revenue.

## Why it diverges

NRR is the highest-divergence metric. Named public filers split materially on all three axes: a recurring-revenue basis is one legitimate convention among several, and the divergence runs through recognizable peers (Autodesk, Asana on GAAP revenue; Okta, Cloudflare on ACV or annualized; MariaDB on ARR), not just obscure filers. The same customer book reports a different retention rate under each, and an investor recomputes against whichever the relevant peer set uses. The new-logo exclusion is the one near-settled point.

## The three axes (per NRR)

- **composition** (free-computable): existing-customer cohort only; expansion and contraction in, new logos out. The new-logo exclusion is consistent across the named filers, so it is the settled part.
- **basis**: recurring (ARR or MRR) vs GAAP-revenue (trailing-twelve-month or calendar) vs ACV or contracted vs implied-monthly.
- **timing**: point-in-time "as of period end" vs an average across the twelve months vs a year-over-year cohort. Disclosed so inconsistently that two independent readings often cannot classify it the same way.

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

The named filers below are late-stage and large. The standard treats them as a proxy for the convention an early-stage investor carries, on the reasoning that a seed or Series A investor judges a raise against the basis the public market has settled on. So the convention named here is read off the public record, not asserted, and it is where a founder's number gets measured when no specific investor convention is on the table.

The record points to an ARR-basis cohort, sometimes averaged across the period, sometimes thresholded to a cohort segment. The specific basis, timing, and cohort sophistication vary by filer, so the direction is settled but the exact read is not. Name the convention against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** lead with the ARR-basis twelve-month cohort number (the standards-board cohort method, exemplified by MariaDB). Footnote the range. This is the codified read, the number to lead on by default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, lead on *that* number and footnote the rest, including the default above. That convention is what the raise is measured against.

Under either anchor, the aggressive convention to avoid leading with is whichever inflates via composition (segment-restricting the cohort) or a flattering timing choice; that is always the labeled risk, never the headline. Principle: defensibility, not optimization, the number that survives an investor's recompute. `defect_gap` is absolute and does not move with the convention you anchor on.

## Canonical formula

$$\text{NRR}=\frac{\text{BOP value}+\text{Expansion}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\quad(\text{existing customers only; ``value'' = ARR, revenue, or implied-MRR depending on the filer})$$

Primary source: the Standards Board codified cohort method, "Net Revenue Retention (NRR), also known as Net Dollar Retention (NDR), measures the percentage of recurring revenue retained over a specific period," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/net-revenue-retention). The cheatsheet renders this alongside the divergence digest, but the codified method is the authority here, not the digest.

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

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm the cohort is existing-customers-only with new logos out and expansion and contraction handled, and that closes from the aggregates. Basis and timing do not close. They interact non-additively (an ARR basis read point-in-time and a GAAP-revenue basis read as a trailing-twelve average are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the convention the founder used against the defensible ARR-basis cohort, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard.

## Aggressive-vs-defect test

The predicate for classifying an NRR spread:

- **Defensible basis:** a recurring-revenue (ARR or MRR) cohort on the standards-board method, exemplified by MariaDB. This is the number to lead with.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable filer actually uses in its own filing, a GAAP-revenue basis (Autodesk, Asana) or an ACV / annualized basis (Okta, Cloudflare), or a monthly-average timing (EverCommerce), or a segment-restricted cohort (Brightcove). Legitimate, but not the defensible read, so it is the labeled risk, never the headline.
- **Defect gap:** no legitimate convention reproduces it. The timing-axis case is the shared point-in-time / timing test (see the [Point-in-time / timing test](../divergence/cheatsheet.md#point-in-time--timing-test) in the cheatsheet): here, the as-of BoP cohort cannot be reconstructed because no retained point-in-time state or history exists to rebuild it. Or new-logo revenue is folded into the cohort (the one error the market has largely settled against). No authority-traceable filer's convention recovers the number.

## Classic errors touching NRR

- **gross-vs-net churn confusion**: reporting only net retention lets expansion mask gross and logo attrition; investors triangulate GRR and logo retention underneath (GRR is at most 100% by construction). See `classic-errors.md`.
- folding new-logo revenue into the cohort: the one error the market has largely settled against, so a useful tell if seen.

## Scope boundary

IN SCOPE (from the ~12 reported aggregates), the recognition side: the composition axis, confirm new logos are excluded and expansion and contraction are handled. OUT OF SCOPE (named but not computed): basis and timing, because they require raw customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Stating this boundary out loud is the authority move.

## Citations

- Standards-board cohort method and the MariaDB, SEMrush, Q2, BlackLine, EverCommerce, Brightcove verbatim quotes (each with its SEC URL): see the NRR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
- The divergence is evidenced by the named filers themselves: MariaDB reports on a recurring-revenue (ARR) basis, SEMrush on trailing GAAP revenue, Q2 on calendar revenue excluding acquired customers, BlackLine on implied-monthly, EverCommerce on a monthly average, Brightcove on a segment-restricted cohort. The robust claim is the divergence itself plus these verbatim examples.
