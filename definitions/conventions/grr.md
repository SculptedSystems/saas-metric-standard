---
metric: Gross Revenue Retention
abbrev: GRR
aka: [GDR, Gross Dollar Retention]
contested: true
gear: 2
authority: standards-board
---

# Gross Revenue Retention (GRR)

## One-liner

The share of recurring revenue retained from an existing-customer cohort over twelve months after contraction and churn but excluding all expansion, so GRR is at most 100% by construction.

## Why it diverges

GRR diverges on the same basis and timing axes as NRR (it is the same cohort measured without the expansion term), plus one composition question of its own: where the line falls between contraction and churn. The no-expansion ceiling is the settled, defining contrast with NRR: any GRR above 100% signals expansion leaked into the number (or, rarely, an FX or measurement artifact), not a strong result. Because it strips expansion, GRR exposes the churn and contraction that a healthy NRR can hide, which is exactly why an investor reads it underneath NRR.

## The three axes (per GRR)

- **composition** (free-computable): existing-customer cohort only; contraction and churn in, all expansion out. The expansion exclusion is the settled part. The unsettled sub-question is what counts as contraction (a downgrade within a retained account) versus churn (a lost account), which moves the two terms but not the total.
- **basis**: recurring (ARR or MRR) vs GAAP-revenue vs ACV or contracted vs implied-monthly. Filers that disclose GRR almost always use the same basis they chose for NRR.
- **timing**: point-in-time "as of period end" vs an average across the twelve months vs a year-over-year cohort, again inherited from the NRR choice.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Cohort method (standards-board preferred) | basis + timing | adjusted MRR or ARR from the period-end cohort over that cohort's value at period start | standards board (GRR) | the defensible default |
| Formula method | composition | (beginning value - churned - down-sell) / beginning value | standards board (GRR) | equivalent when terms are clean; sensitive to the contraction/churn split |
| GRR on the NRR basis | basis | whatever basis the filer used for NRR, with the expansion term zeroed | SEC filers disclosing GRR alongside NRR | matches the paired NRR; inherits its basis risk |

## What the investor likely recomputes on

The named filers below are late-stage and large. The standard treats them as a proxy for the convention an early-stage investor carries, on the reasoning that a seed or Series A investor judges a raise against the basis the public market has settled on. So the convention named here is read off the public record, and it is where a founder's number gets measured when no specific investor convention is on the table.

The record reads GRR on the same basis and period as NRR, as the floor underneath it. A reader who recomputes NRR on an ARR-basis cohort recomputes GRR the same way and compares the gap; a wide NRR-minus-GRR spread says expansion is carrying a leaky base. The basis is bounded by the paired NRR, not fixed by it. Name the convention against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** GRR on the same basis used for NRR, so the pair is comparable, with the no-expansion ceiling stated. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, lead GRR on the *same basis* as that convention and footnote the rest, including the default above. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is reporting only NRR and omitting GRR, which lets expansion mask attrition; volunteering GRR is the credibility signal. Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Canonical formula

$$\text{GRR}=\frac{\text{BOP value}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\le 100\%\quad(\text{existing customers only; no expansion term; ``value'' = ARR, revenue, or implied-MRR depending on the filer})$$

Primary source: the Standards Board codified GRR method, cohort method (preferred), "Adjusted MRR from the cohort of customers at the end of the period / MRR at the beginning of the measurement period," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/gross-revenue-retention). The board also publishes the equivalent formula method, "((Beginning MRR - Churned MRR - Down-Sell MRR) / Beginning MRR) x 100". The cheatsheet renders these alongside the paired-NRR filer practice, but the codified method is the authority here, not the digest.

Standards-board cohort method (the defensible default): the period-end value of the cohort of existing customers as of the start, over that same cohort's value at the start, with all expansion zeroed. The ceiling at 100% holds by construction.

| Input | Source-system class | Timing-offset |
|---|---|---|
| BOP value (the cohort denominator) | billing / data warehouse (recurring-revenue book) | as of the beginning of the measurement period |
| Cohort membership (existing customers only) | CRM / billing | fixed at period start; held constant across the window |
| Contraction (down-sell) | billing | over the trailing 12-month window |
| Churn | billing | over the trailing 12-month window |
| Numerator (period-end value of the same cohort, expansion excluded) | billing / data warehouse | as of period end |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm expansion is excluded and the 100% ceiling holds, and that closes from the aggregates. Basis and timing do not close. They interact non-additively (an ARR-basis cohort read point-in-time and a GAAP-revenue basis read as a trailing-twelve average are not a sum of separable adjustments), and the contraction-versus-churn split moves the two terms within a fixed total, so they are reconciled bounded and qualitative: name the convention the founder used against the defensible cohort method on the NRR basis, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Aggressive-vs-defect test

The predicate for classifying a GRR spread:

- **Defensible basis:** the standards-board cohort method on the same basis the founder used for NRR, so the pair is comparable. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable filer actually uses for its paired retention, a GAAP-revenue or ACV basis, a monthly-average timing, or a contraction-versus-churn split that an SEC filer disclosing GRR alongside NRR adopts. Legitimate, but it inherits the NRR basis risk, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. The timing-axis case is the shared point-in-time / timing test (see the [Point-in-time / timing test](../divergence/cheatsheet.md#point-in-time--timing-test) in the cheatsheet): here, the as-of cohort cannot be reconstructed because no retained point-in-time state or history exists to rebuild it. Or a GRR reported above 100% (expansion leaked into the number, the one error the no-expansion ceiling settles against), or one-time revenue inflating the cohort base so the apparent churn understates. No authority-traceable filer's convention recovers the number.

## Classic errors touching GRR

- **gross-vs-net churn confusion**: the central one. Reporting only net retention hides the gross picture; GRR is the metric that surfaces it. See `classic-errors.md`.
- a GRR above 100%: a definitional error (expansion leaked into the number), and a useful tell that the founder has not separated expansion from retention.
- one-time-in-MRR inflating the cohort base, which understates the apparent churn rate.

## Scope boundary

IN SCOPE (from the reported aggregates): the composition axis, confirm expansion is excluded and the ceiling holds, and flag a missing GRR alongside a reported NRR. OUT OF SCOPE (named but not computed): the basis and timing, and the contraction-vs-churn split, which need customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board cohort method (preferred) and formula method, and the no-expansion ceiling: the codified, snapshot-verified Gross Revenue Retention entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json), rendered alongside in the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
- Filers disclosing GRR on their chosen NRR basis: see the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
