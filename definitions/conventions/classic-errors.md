---
metric: Classic errors
abbrev: errors
aka: [the five named errors]
contested: false
gear: 1
authority: cheatsheet
---

# The five classic errors

Cross-metric, not a single-metric entry. These are the named, recognizable ways a founder's recurring-revenue number goes wrong. Each is RECALL: name, what it is, and the direction it moves the number. On a call, you recognize the pattern from the founder's stated method, not from their raw data.

Unlike the divergence axes (where multiple conventions are legitimate), these are genuine errors: one side is defensible and the other is not.

## The five

| Error | What it is | Direction |
|---|---|---|
| Annual-as-monthly | A full annual contract's value booked as one month of MRR | Overstates MRR and ARR by roughly twelve times for that deal |
| One-time-in-MRR | A setup, onboarding, services, or overage fee counted as recurring | Overstates MRR, ARR, and retention |
| Gross-vs-net churn | Reporting only net retention or conflating gross and net churn | Hides gross revenue churn and logo attrition behind expansion |
| Off-processor ARR | Invoiced or enterprise revenue the payment processor never sees, left out | Understates ARR for companies with invoiced deals |
| Billing-layer double-count | A billing layer over the processor counts the same revenue at both layers | Overstates MRR and ARR |

## How they map to the metrics

- ARR and MRR: annual-as-monthly, one-time-in-MRR, off-processor, billing-layer double-count.
- NRR and retention: gross-vs-net churn, plus one-time-in-MRR inflating the base.

## The free / paid line for these

The first two (annual-as-monthly, one-time-in-MRR) and gross-vs-net are largely composition: visible from the founder's stated method and the aggregates, so they are in scope for the free Review as findings. The last two (off-processor, billing-layer double-count) are source-system facts that the free pass can name but not resolve; reconciling them is the Cast and Engine (DR-0018). This is the "that is a sources question, not a definitions question" deflection in concrete form.

## Card-derivation notes

- RECALL: each error by name, what it is, and the direction it moves the number. Direction cards are call-critical and atomic.
- REFERENCE: the per-founder magnitude (for example how many annual contracts, the dollar size of the off-processor component).
