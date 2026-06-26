---
metric: Classic errors
abbrev: errors
aka: [the five named errors]
contested: false
gear: 1
authority: working-consensus
diverges_on: []
---

# The five classic errors

Cross-metric, not a single-metric entry. These are the named, recognizable ways a recurring-revenue number goes wrong: each names what it is and the direction it moves the number. The pattern is recognized from a stated method, not from raw data.

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

## The scope line for these

The first two (annual-as-monthly, one-time-in-MRR) and gross-vs-net are largely composition: visible from the founder's stated method and the aggregates, so they are in scope as findings. The last two (off-processor, billing-layer double-count) are source-system facts that can be named but not resolved from the aggregates; reconciling them needs the per-axis reconstruction from raw source systems, which is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform. This is the "that is a sources question, not a definitions question" boundary in concrete form.
