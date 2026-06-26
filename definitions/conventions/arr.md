---
metric: Annual Recurring Revenue
abbrev: ARR
aka: [annualized recurring revenue]
contested: true
gear: 1
authority: standards-board
diverges_on: [basis]
---

# Annual Recurring Revenue (ARR)

## One-liner

Recurring revenue expressed on an annualized basis, excluding one-time and services revenue. The backup lead metric when NRR is not the focus.

## Why it diverges

ARR is contested mainly on the basis axis: an annualized run-rate (MRR times 12) and committed or contracted ARR (CARR) are both legitimate and produce different numbers for the same business. Composition is more settled than NRR: one-time and services revenue are consistently stripped. The divergence bites hardest for companies with annual contracts, invoiced enterprise deals, or a billing layer over the processor.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Annualized run-rate (MRR x 12) | basis | current monthly recurring revenue times twelve | common practice | the usual default |
| Committed / contracted (CARR) | basis + timing | contracted annual recurring revenue, in production or not | standards board (CARR) | includes signed-not-live; usually higher |
| Recurring-revenue annualized | basis | recurring revenue per the revenue-recognition policy, annualized | standards board (ARR) | ties ARR to recognized recurring revenue |

## What the investor likely recomputes on

The codified convention is the basis a founder's number gets measured against when no specific investor convention is on the table. It is the standard's default anchor.

The codified ARR is an annualized run-rate (MRR x 12) on clean recurring revenue, with committed-but-not-live revenue held out (that belongs to the separate codified CARR metric) rather than padding the number. The basis is settled; what varies is how strictly a given reader holds the clean-recurring line. Name the run-rate against the codified convention rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** the run-rate on clean recurring revenue, with any committed or off-processor component disclosed separately rather than blended in. A founder's CARR is named as CARR, not ARR. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that number governs, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is blending one-time, services, or signed-not-live revenue into the reported number. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying an ARR spread:

- **Defensible basis:** an annualized run-rate on clean recurring revenue, the standards-board MRR x 12 method. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under the committed or contracted sense an authority-traceable source actually uses, the standards-board CARR ("whether in production or not yet in production"). Legitimate, but it is CARR, not ARR, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. For example, one-time or services revenue folded into the recurring base, an off-processor invoiced book double-counted through a billing layer over the processor, or an annual deal booked as a full month of MRR. No authority-traceable source's convention recovers the number.

## Canonical formula

$$
\text{ARR}=\text{MRR}\times 12\quad(\text{MRR}=\text{the most recent month's recurring revenue; one-time and services excluded})
$$
Primary source: the Standards Board codified definition, "Annual Recurring Revenue (ARR) is recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis," with formula "ARR = (MRR x 12)", recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/annual-recurring-revenue). The committed sense is the separate codified CARR metric, "contracted annual recurring revenue, whether in production or not yet in production" (https://www.saasmetricsboard.com/contracted-annual-recurring-revenue). The codified definitions are the authority here.

Standards-board run-rate method (the defensible default): the most recent month's recurring revenue annualized, with one-time fees, professional services, and overage above committed minimums excluded by construction, and signed-not-yet-live revenue held out (that belongs to CARR).

| Input | Source-system class | Timing-offset |
|---|---|---|
| MRR (the recurring base) | billing / data warehouse (recurring-revenue book) | the most recent month, as of period end |
| One-time and services revenue (excluded) | billing / GL | as of period end; removed from the base |
| Committed-not-yet-live ARR (excluded from ARR; the CARR delta) | CRM / billing | as of period end; signed but not in production |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm one-time and services are stripped and the base is recurring only, and that closes from the aggregates. Basis and timing do not close. Run-rate versus committed (CARR) and the off-processor or billing-layer corrections interact non-additively (an off-processor reconciliation and a run-rate-vs-committed reclassification are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the sense the founder used against the defensible clean run-rate, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## The three axes (per ARR)

ARR diverges mainly on basis. Composition is comparatively settled: recurring only, with one-time fees, setup, services, and overage excluded (more settled than for NRR). Basis is the live axis, annualized run-rate (current MRR times 12) vs committed or contracted (CARR, whether or not yet in production), and the standards board codifies CARR as a distinct metric. Timing follows from basis: a point-in-time run-rate as of period end vs a contracted view that includes signed-not-yet-live revenue.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching ARR

All from `classic-errors.md`: annual-as-monthly (a single annual deal counted as one month of MRR), one-time-in-MRR, off-processor ARR (invoiced enterprise revenue the processor never sees, understates ARR), and billing-layer double-count (a billing layer over Stripe counts the same revenue twice, inflates ARR).

## Scope boundary

IN SCOPE: the composition axis, confirm one-time and services are excluded, from the aggregates. OUT OF SCOPE (named but not computed): reconciling off-processor revenue, de-duplicating a billing layer, and resolving run-rate vs committed from raw sources. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board ARR ("recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis") and CARR ("contracted annual recurring revenue, whether in production or not yet in production"): the codified, snapshot-verified entries in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json).
- The off-processor and billing-layer cases are the classic errors carried in [`classic-errors.md`](classic-errors.md).
