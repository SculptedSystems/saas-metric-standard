---
metric: Gross Revenue Retention
abbrev: GRR
aka: [GDR, Gross Dollar Retention]
contested: true
gear: 2
authority: standards-board
diverges_on: [composition, basis, timing]
---

# Gross Revenue Retention (GRR)

## One-liner

The share of recurring revenue retained from an existing-customer cohort over twelve months after contraction and churn but excluding all expansion, so GRR is at most 100% by construction.

## Why it diverges

GRR diverges on the same basis and timing axes as NRR (it is the same cohort measured without the expansion term), plus one composition question of its own: where the line falls between contraction and churn. The no-expansion ceiling is the settled, defining contrast with NRR: any GRR above 100% signals expansion leaked into the number (or, rarely, an FX or measurement artifact), not a strong result. Because it strips expansion, GRR exposes the churn and contraction that a healthy NRR can hide, which is exactly why an investor reads it underneath NRR.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Cohort method (standards-board preferred) | basis + timing | adjusted MRR or ARR from the period-end cohort over that cohort's value at period start | standards board (GRR) | the defensible default |
| Formula method | composition | (beginning value - churned - down-sell) / beginning value | standards board (GRR) | equivalent when terms are clean; sensitive to the contraction/churn split |
| GRR on the NRR basis | basis | whatever basis was used for NRR, with the expansion term zeroed | common practice (GRR disclosed alongside NRR) | matches the paired NRR; inherits its basis risk |

## What the investor likely recomputes on

The codified convention is the basis a founder's number gets measured against when no specific investor convention is on the table. It is the reference's default anchor.

The codified GRR reads on the same basis and period as NRR, as the floor underneath it. A reader who recomputes NRR on an ARR-basis cohort recomputes GRR the same way and compares the gap; a wide NRR-minus-GRR spread says expansion is carrying a leaky base. The basis is bounded by the paired NRR, not fixed by it. Name the convention against the codified one rather than assume it.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the reference's default. So the read has two tiers.

- **The reference's default (use when no specific investor convention is known):** GRR on the same basis used for NRR, so the pair is comparable, with the no-expansion ceiling stated. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, lead GRR on the *same basis* as that convention and footnote the rest, including the default above. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is reporting only NRR and omitting GRR, which lets expansion mask attrition; volunteering GRR is the credibility signal. Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying a GRR spread:

- **Defensible basis:** the standards-board cohort method on the same basis the founder used for NRR, so the pair is comparable. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable convention actually uses for its paired retention, a GAAP-revenue or ACV basis, a monthly-average timing, or a contraction-versus-churn split adopted where GRR is disclosed alongside NRR. Legitimate, but it inherits the NRR basis risk, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. The timing-axis case is the shared point-in-time / timing test (see [the three axes](../divergence/axes.md)): here, the as-of cohort cannot be reconstructed because no retained point-in-time state or history exists to rebuild it. Or a GRR reported above 100% (expansion leaked into the number, the one error the no-expansion ceiling settles against), or one-time revenue inflating the cohort base so the apparent churn understates. No authority-traceable convention recovers the number.

## Canonical formula

$$
\text{GRR}=\frac{\text{BOP value}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\le 100\%\quad(\text{existing customers only; no expansion term; ``value'' = ARR, revenue, or implied-MRR depending on the basis})
$$
Primary source: the Standards Board codified GRR method, cohort method (preferred), "Adjusted MRR from the cohort of customers at the end of the period / MRR at the beginning of the measurement period," recorded in [the reference's verified evidence set](../evidence/canonical-verified.json), sourced from the SaaS Metrics Standards Board's [gross revenue retention](https://www.saasmetricsboard.com/gross-revenue-retention) page. The board also publishes the equivalent formula method, "((Beginning MRR - Churned MRR - Down-Sell MRR) / Beginning MRR) x 100". This convention carries its own basis and timing divergence (see the three axes section below); the codified method is the authority here.

Standards-board cohort method (the defensible default): the period-end value of the cohort of existing customers as of the start, over that same cohort's value at the start, with all expansion zeroed. The ceiling at 100% holds by construction.

| Input | Source-system class | Timing-offset |
|---|---|---|
| BOP value (the cohort denominator) | billing / data warehouse (recurring-revenue book) | as of the beginning of the measurement period |
| Cohort membership (existing customers only) | CRM / billing | fixed at period start; held constant across the window |
| Contraction (down-sell) | billing | over the trailing 12-month window |
| Churn | billing | over the trailing 12-month window |
| Numerator (period-end value of the same cohort, expansion excluded) | billing / data warehouse | as of period end |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm expansion is excluded and the 100% ceiling holds, and that closes from the aggregates. Basis and timing do not close. They interact non-additively (an ARR-basis cohort read point-in-time and a GAAP-revenue basis read as a trailing-twelve average are not a sum of separable adjustments), and the contraction-versus-churn split moves the two terms within a fixed total, so they are reconciled bounded and qualitative: name the convention the founder used against the defensible cohort method on the NRR basis, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this reference. Reconstructing it from raw source systems is a separate, multi-week effort the reference does not perform.

## The three axes

GRR diverges on the same axes as NRR, inheriting its basis and timing choice. Composition is existing-customer cohort only, contraction and churn in, all expansion out; the expansion exclusion is the settled part, and the unsettled sub-question is what counts as contraction (a downgrade within a retained account) versus churn (a lost account), which moves the two terms but not the total. Basis is recurring (ARR or MRR) vs GAAP-revenue vs ACV or contracted vs implied-monthly, and a disclosed GRR almost always uses the same basis chosen for NRR. Timing is point-in-time "as of period end" vs an average across the twelve months vs a year-over-year cohort, again inherited from the NRR choice.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching GRR

- **gross-vs-net churn confusion**: the central one. Reporting only net retention hides the gross picture; GRR is the metric that surfaces it. See `classic-errors.md`.
- a GRR above 100%: a definitional error (expansion leaked into the number), and a useful tell that the founder has not separated expansion from retention.
- one-time-in-MRR inflating the cohort base, which understates the apparent churn rate.

## Scope boundary

IN SCOPE (from the reported aggregates): the composition axis, confirm expansion is excluded and the ceiling holds, and flag a missing GRR alongside a reported NRR. OUT OF SCOPE (named but not computed): the basis and timing, and the contraction-vs-churn split, which need customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this reference. Reconstructing it from raw source systems is a separate, multi-week effort the reference does not perform.

## Citations

- Standards-board cohort method (preferred), "Adjusted MRR from the cohort of customers at the end of the period / MRR at the beginning of the measurement period," and formula method, "((Beginning MRR - Churned MRR - Down-Sell MRR) / Beginning MRR) x 100", and the no-expansion ceiling: the codified, snapshot-verified Gross Revenue Retention entry in [the reference's verified evidence set](../evidence/canonical-verified.json), sourced from the SaaS Metrics Standards Board's [gross revenue retention](https://www.saasmetricsboard.com/gross-revenue-retention) page.
- A disclosed GRR almost always uses the same basis chosen for NRR; the NRR basis-and-timing divergence is carried in [`nrr.md`](nrr.md).
