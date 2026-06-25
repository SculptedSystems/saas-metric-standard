---
metric: Churn and retention
abbrev: churn
aka: [logo churn, customer churn, revenue churn, logo retention]
contested: true
gear: 2
authority: standards-board
---

# Churn and retention

## One-liner

The rate at which customers (logo churn) or recurring revenue (revenue churn) is lost over a period, where churn is one minus the corresponding retention, and the two families (count-based and dollar-based, gross and net) answer different questions about the same book.

## Why it diverges

Churn is really a small family of metrics, and the first failure is not picking the right member. Logo (customer-count) churn and revenue churn measure different things; gross and net revenue churn differ by whether expansion is netted in. The standards board frames the count-based metric as retention, not churn, with churn defined as one minus retention. Two conventions drive most of the legitimate divergence: the period and the annualization method, and the choice of churn moment, which no authority codifies and so must be stated explicitly.

## The three axes (per churn)

- **composition** (free-computable): logo vs revenue, and gross vs net. Logo churn counts lost accounts regardless of size; revenue churn weights by dollars. Gross revenue churn (= 1 - GRR) excludes expansion and is at least zero; net revenue churn (= 1 - NRR) nets expansion in and can go below zero ("negative churn"). These are distinct metrics, not variants of one.
- **basis**: for revenue churn, the same ARR vs MRR vs revenue basis as NRR and GRR, inherited from the retention metric it inverts.
- **timing**: the period (monthly vs annual) and the monthly-to-annual derivation, plus the churn moment, when a customer is counted as churned (cancellation, access-ends, renewal date, or failed payment). The moment is uncodified and must be defined.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Logo retention (standards-board) | composition + timing | customers at period end who were customers at start over active customers at start; churn = 1 - retention | standards board (logo retention) | the defensible count-based default |
| Gross revenue churn | composition | 1 - GRR; lost and contracted revenue, no expansion | inverse of standards-board GRR | the floor; at least zero |
| Net revenue churn | composition | 1 - NRR; expansion netted in; can be negative | inverse of standards-board NRR | flatters the picture; hides gross attrition |
| Compounded annualization | timing | annual = 1 - (1 - monthly)^12 | standards-board convention | the correct derivation |
| Linear annualization (monthly x 12) | timing | monthly churn times twelve | common founder shortcut | overstates annual churn; the annualization trap |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an investor reads logo churn and gross revenue churn underneath any net retention number, on the same basis as the paired retention metric, and is skeptical of a single headline "churn" figure that does not say logo-or-revenue and gross-or-net. Validate per founder via the debrief loop.

## The defensible read

State which churn you mean (logo or revenue, gross or net) before quoting a number, and annualize monthly churn by compounding, not by multiplying by twelve. The aggressive move to avoid is leading with net revenue churn alone, which expansion can drive near zero or negative while gross attrition is real. Define the churn moment explicitly, since no authority does. Principle: defensibility, not optimization.

## Classic errors touching churn

- **gross-vs-net churn confusion**: the central named error; reporting only net churn lets expansion mask gross and logo attrition. See `classic-errors.md`.
- **the monthly-to-annual annualization trap**: deriving annual churn as monthly times twelve rather than 1 - (1 - monthly)^12, which overstates annual churn (and, if inverted into retention, understates it). Cross-reference `classic-errors.md` and the logo-retention section of the cheatsheet.
- one-time-in-MRR inflating the revenue base and so understating the apparent revenue churn rate.

## Free / paid boundary

FREE (from the reported aggregates and the stated method): naming which churn family the founder is in, catching a net-only report, and catching the linear-annualization trap from the stated method. NAMED BUT NOT COMPUTED (the paid Cast): the churn moment resolved against billing events, and the per-cohort revenue churn from customer-level data. Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Standards-board logo retention (churn = 1 - retention) and the compounded annualization, the gross/net revenue churn inverses, and the uncodified churn moment: see the Logo / Customer Retention and Revenue churn sections of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the Logo Retention entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).
- GRR and NRR as the retention metrics churn inverts: see `grr.md` and `nrr.md`.

## Card-derivation notes

- RECALL: the contested flag, churn = 1 - retention, logo vs revenue and gross vs net as distinct metrics, gross churn at least zero vs net churn possibly negative, the compounded annualization formula, the uncodified churn moment, the gross-vs-net error, the annualization trap, the free/paid boundary.
- CONTRAST card needed: logo churn vs revenue churn (count vs dollar weighting); gross vs net revenue churn (expansion out vs in).
- REWORK card needed: "annual churn = monthly churn x 12" must be reworked (compound it).
- REFERENCE only: the exact standards-board wording, per-founder churn moment and cohort figures.
