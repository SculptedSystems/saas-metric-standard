---
metric: Net Revenue Retention
abbrev: NRR
aka: [NDR, Net Dollar Retention]
contested: true
gear: 1
authority: cheatsheet
---

# Net Revenue Retention (NRR)

## One-liner

The share of recurring revenue retained from an existing-customer cohort over twelve months, including expansion and contraction but excluding new-logo revenue.

## Why it diverges

NRR is the highest-divergence metric in the frame and the one the Review is built to win. Public filers split materially on all three axes: a recurring-revenue basis is only the plurality, and the divergence runs through recognizable peers (Autodesk, Asana on GAAP revenue; Okta, Cloudflare on ACV or annualized), not just obscure filers. The same customer book reports a different retention rate under each, and an investor recomputes against whichever the relevant peer set uses. The new-logo exclusion is the one near-settled point.

## The three axes (per NRR)

- **composition** (free-computable): existing-customer cohort only; expansion and contraction in, new logos out. The new-logo exclusion is near-universal among definers, so it is the settled part.
- **basis**: recurring (ARR or MRR) vs GAAP-revenue (trailing-twelve-month or calendar) vs ACV or contracted vs implied-monthly.
- **timing**: point-in-time "as of period end" vs an average across the twelve months vs a year-over-year cohort. Disclosed so inconsistently that two independent readings often cannot classify it the same way.

## Legitimate convention families

| Family | Axis | Method (short) | Representative filer | Direction vs defensible |
|---|---|---|---|---|
| ARR-basis 12-month cohort (plurality) | basis + timing | current ARR of the 12-month-prior cohort over that cohort's ARR 12 months prior | MariaDB | the defensible default |
| 4-quarter / monthly average | timing | average of the monthly annualized rate over the period | EverCommerce | smooths spikes; can read lower or higher |
| trailing-revenue basis | basis | GAAP revenue of the same customers, trailing-twelve vs prior | SEMrush | revenue lag can understate a fast-expanding book |
| calendar-revenue, excludes acquired | basis + composition | calendar-year revenue of the prior-year cohort, acquired customers stripped | Q2 Holdings | stripping acquired customers usually lowers it |
| implied-monthly basis | basis | implied monthly subscription revenue end vs one year prior | BlackLine | similar to MRR; depends on revenue smoothing |
| segment-restricted cohort | composition | only a healthy segment (for example "premium") in the cohort | Brightcove | restricting to a healthy segment usually raises it |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an ARR-basis, sometimes-averaged, sometimes-thresholded cohort convention. The SEC filers are large and late-stage, a proxy for the seed or Series A investor, not the investor themselves. The specific basis, timing, and cohort sophistication is to be validated against real call data (the debrief loop), not asserted.

## The defensible read

Lead with the ARR-basis twelve-month cohort number (the plurality, and the standards-board cohort method). Footnote the range. The aggressive convention to avoid leading with is whichever inflates via composition (segment-restricting the cohort) or a flattering timing choice; that is always the labeled risk, never the headline. Principle: defensibility, not optimization, the number that survives an investor's recompute.

## Classic errors touching NRR

- **gross-vs-net churn confusion**: reporting only net retention lets expansion mask gross and logo attrition; investors triangulate GRR and logo retention underneath (GRR is at most 100% by construction). See `classic-errors.md`.
- folding new-logo revenue into the cohort: the one error the market has largely settled against, so a useful tell if seen.

## Free / paid boundary

FREE (from the ~12 reported aggregates): the composition axis, confirm new logos are excluded and expansion and contraction are handled. NAMED BUT NOT COMPUTED (the paid Cast): basis and timing, because they require raw customer-level data. Stating this boundary out loud is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Standards-board cohort method and the MariaDB, SEMrush, Q2, BlackLine, EverCommerce, Brightcove verbatim quotes: see the NRR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and [`../evidence/sec-saas-metric-definitions.md`](../evidence/sec-saas-metric-definitions.md).
- Distribution (suggestive, not firm; cross-vendor kappa 0.66): of the filers with a stated method, a recurring-revenue basis is the plurality (about 63%), the rest split across GAAP-revenue and ACV or other. The robust claim is the divergence itself plus the verbatim examples, not the percentage.

## Card-derivation notes

- RECALL: the contested flag, the three axes, the convention-family names and which axis each sits on, the new-logo settled point, the gross-vs-net error, the free/paid boundary, the defensible default.
- CONTRAST / REWORK card needed: "NRR is MRR-basis" must be reworked (it is only the plurality).
- REFERENCE only: the specific filer quotes, the percentages, the per-founder spread arithmetic.
