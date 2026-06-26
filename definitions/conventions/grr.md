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

## Classic errors touching GRR

- **gross-vs-net churn confusion**: the central one. Reporting only net retention hides the gross picture; GRR is the metric that surfaces it. See `classic-errors.md`.
- a GRR above 100%: a definitional error (expansion leaked into the number), and a useful tell that the founder has not separated expansion from retention.
- one-time-in-MRR inflating the cohort base, which understates the apparent churn rate.

## Free / paid boundary

FREE (from the reported aggregates): the composition axis, confirm expansion is excluded and the ceiling holds, and flag a missing GRR alongside a reported NRR. NAMED BUT NOT COMPUTED (the paid Cast): the basis and timing, and the contraction-vs-churn split, which need customer-level data. Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Standards-board cohort method (preferred) and formula method, and the no-expansion ceiling: see the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the Gross Revenue Retention entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).
- Filers disclosing GRR on their chosen NRR basis: see the GRR / GDR section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).

## Card-derivation notes

- RECALL: the contested flag, the no-expansion ceiling (GRR at most 100%), the three axes, the cohort-vs-formula families, the contraction-vs-churn sub-question, the gross-vs-net error, the free/paid boundary.
- CONTRAST card needed: GRR vs NRR (same cohort, expansion in vs out; the NRR-minus-GRR gap as the expansion-dependence read).
- REWORK card needed: "GRR can exceed 100%" must be reworked (it is bounded at 100% when expansion is correctly excluded; a higher value signals expansion leakage or an FX artifact).
- REFERENCE only: the exact standards-board wording, per-founder basis and split.
