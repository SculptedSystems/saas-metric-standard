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

Hypothesis, not direct evidence: the same basis and period as NRR, read as the floor underneath it. An investor who recomputes NRR on an ARR-basis cohort will recompute GRR the same way and compare the gap; a wide NRR-minus-GRR spread says expansion is carrying a leaky base. Validate per founder via the debrief loop.

## The defensible read

Lead with GRR on the same basis you led with for NRR, so the pair is comparable, and state the no-expansion ceiling out loud. The aggressive move to avoid is reporting only NRR and omitting GRR, which lets expansion mask attrition; volunteering GRR is the credibility signal. Principle: defensibility, not optimization.

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

Composition-closed, basis/timing-bounded (DR-0046). The composition axis closes to a zero residual: from the reported aggregates we can confirm expansion is excluded and the 100% ceiling holds, and that closes free. Basis and timing do not close. They interact non-additively (an ARR-basis cohort read point-in-time and a GAAP-revenue basis read as a trailing-twelve average are not a sum of separable adjustments), and the contraction-versus-churn split moves the two terms within a fixed total, so they are reconciled bounded and qualitative: name the convention the founder used against the defensible cohort method on the NRR basis, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is the Engine's work (the paid working papers), not specified in this standard.

## Aggressive-vs-defect test

The predicate for classifying a GRR spread (DR-0046):

- **Defensible basis:** the standards-board cohort method on the same basis the founder led with for NRR, so the pair is comparable. This is the number to lead with.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a basis or timing an authority-traceable filer actually uses for its paired retention, a GAAP-revenue or ACV basis, a monthly-average timing, or a contraction-versus-churn split that an SEC filer disclosing GRR alongside NRR adopts. Legitimate, but it inherits the NRR basis risk, so it is the labeled risk, never the headline.
- **Defect gap:** no legitimate convention reproduces it. For example, a GRR reported above 100% (expansion leaked into the number, the one error the no-expansion ceiling settles against), or one-time revenue inflating the cohort base so the apparent churn understates. No authority-traceable filer's convention recovers the number.

## Classic errors touching GRR

- **gross-vs-net churn confusion**: the central one. Reporting only net retention hides the gross picture; GRR is the metric that surfaces it. See `classic-errors.md`.
- a GRR above 100%: a definitional error (expansion leaked into the number), and a useful tell that the founder has not separated expansion from retention.
- one-time-in-MRR inflating the cohort base, which understates the apparent churn rate.

## Free / paid boundary

FREE (from the reported aggregates): the composition axis, confirm expansion is excluded and the ceiling holds, and flag a missing GRR alongside a reported NRR. NAMED BUT NOT COMPUTED (the paid Cast): the basis and timing, and the contraction-vs-churn split, which need customer-level data. Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Standards-board cohort method (preferred) and formula method, and the no-expansion ceiling: the codified, snapshot-verified Gross Revenue Retention entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json), rendered alongside in the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
- Filers disclosing GRR on their chosen NRR basis: see the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).

## Card-derivation notes

- RECALL: the contested flag, the no-expansion ceiling (GRR at most 100%), the three axes, the cohort-vs-formula families, the contraction-vs-churn sub-question, the gross-vs-net error, the free/paid boundary.
- CONTRAST card needed: GRR vs NRR (same cohort, expansion in vs out; the NRR-minus-GRR gap as the expansion-dependence read).
- REWORK card needed: "GRR can exceed 100%" must be reworked (it is bounded at 100% when expansion is correctly excluded; a higher value signals expansion leakage or an FX artifact).
- REFERENCE only: the exact standards-board wording, per-founder basis and split.
