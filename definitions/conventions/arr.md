---
metric: Annual Recurring Revenue
abbrev: ARR
aka: [annualized recurring revenue]
contested: true
gear: 1
authority: cheatsheet
---

# Annual Recurring Revenue (ARR)

## One-liner

Recurring revenue expressed on an annualized basis, excluding one-time and services revenue. The backup lead metric when NRR is not the founder's headline.

## Why it diverges

ARR is contested mainly on the basis axis: an annualized run-rate (MRR times 12) and committed or contracted ARR (CARR) are both legitimate and produce different numbers for the same business. Composition is more settled than NRR: filers consistently strip one-time and services revenue. The divergence bites hardest for companies with annual contracts, invoiced enterprise deals, or a billing layer over the processor.

## The three axes (per ARR)

- **composition** (free-computable): recurring only; one-time fees, setup, services, and overage excluded. More settled than for NRR.
- **basis**: annualized run-rate (current MRR times 12) vs committed or contracted (CARR, whether or not yet in production). The standards board codifies CARR as a distinct metric.
- **timing**: point-in-time run-rate (as of period end) vs a contracted view that includes signed-not-yet-live revenue.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Annualized run-rate (MRR x 12) | basis | current monthly recurring revenue times twelve | common filer practice | the usual default |
| Committed / contracted (CARR) | basis + timing | contracted annual recurring revenue, in production or not | standards board (CARR) | includes signed-not-live; usually higher |
| Recurring-revenue annualized | basis | recurring revenue per the revenue-recognition policy, annualized | standards board (ARR) | ties ARR to recognized recurring revenue |

## What the investor likely recomputes on

Hypothesis: an annualized run-rate on clean recurring revenue, with a skeptical eye on anything that looks like committed-but-not-live revenue padding the number. Validate per founder via the debrief loop.

## The defensible read

Lead with the run-rate on clean recurring revenue and disclose any committed or off-processor component separately rather than blending it in. If a founder is leading with CARR, name it as CARR, not ARR. The aggressive move to avoid is blending one-time, services, or signed-not-live revenue into the headline.

## Classic errors touching ARR

All from `classic-errors.md`: annual-as-monthly (a single annual deal counted as one month of MRR), one-time-in-MRR, off-processor ARR (invoiced enterprise revenue the processor never sees, understates ARR), and billing-layer double-count (a billing layer over Stripe counts the same revenue twice, inflates ARR).

## Free / paid boundary

FREE: the composition axis, confirm one-time and services are excluded, from the aggregates. NAMED BUT NOT COMPUTED (the Cast): reconciling off-processor revenue, de-duplicating a billing layer, and resolving run-rate vs committed from raw sources. These are source-system corrections, the Engine's domain (DR-0018).

## Citations (REFERENCE, not recall)

- Standards-board ARR ("recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis") and CARR ("contracted annual recurring revenue, whether in production or not yet in production"): [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).
- Filer ARR phrasings and the off-processor / billing-layer cases: [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the offering doc source-coverage notes.

## Card-derivation notes

- RECALL: the contested flag, the run-rate vs committed senses, the one-time/services exclusion, the four classic errors and their direction, the free/paid boundary.
- CONTRAST / REWORK card needed: "ARR = MRR x 12" must be reworked (run-rate is one sense; CARR is the other).
- REFERENCE only: the exact standards-board wording, per-founder reconciliation.
