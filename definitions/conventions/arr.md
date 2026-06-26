---
metric: Annual Recurring Revenue
abbrev: ARR
aka: [annualized recurring revenue]
contested: true
gear: 1
authority: standards-board
---

# Annual Recurring Revenue (ARR)

## One-liner

Recurring revenue expressed on an annualized basis, excluding one-time and services revenue. The backup lead metric when NRR is not the headline.

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

## What the investor likely recomputes on (the documented SOURCE for the target)

This is the standard-level SOURCE for the engagement `target`: a hypothesis about the investor's convention, not a per-engagement value. The engagement sets the actual target (`investor_stated` from the founder's investor-ask, or `peer_set_inferred` from this field); until then this is the documented default source for a `peer_set_inferred` target, to be confirmed via the debrief loop.

Hypothesis: an annualized run-rate on clean recurring revenue, with a skeptical eye on anything that looks like committed-but-not-live revenue padding the number. Validate per founder via the debrief loop.

## The defensible read (fallback default; anchor on the target when known)

"Defensible" is investor-relative: it is the convention the founder's raise will be judged against, not the standard's default. Two tiers:

- **Fallback (the generic-defensible default, anchor when the target is unknown):** lead with the run-rate on clean recurring revenue and disclose any committed or off-processor component separately rather than blending it in. If a founder is leading with CARR, name it as CARR, not ARR. This is the codified default, the number to lead on when no investor or peer-set target is set.
- **Target (anchor when known):** when the engagement's target convention is known (the investor's stated convention, or the peer-set-inferred one), anchor and lead on *that* number, and footnote the rest, including the generic fallback. The target is what the raise is judged against.

Under either anchor, the aggressive move to avoid is blending one-time, services, or signed-not-live revenue into the headline. `defect_gap` is absolute and does not move with the target.

## Canonical formula

$$\text{ARR}=\text{MRR}\times 12\quad(\text{MRR}=\text{the most recent month's recurring revenue; one-time and services excluded})$$

Primary source: the Standards Board codified definition, "Annual Recurring Revenue (ARR) is recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis," with formula "ARR = (MRR x 12)", recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/annual-recurring-revenue). The committed sense is the separate codified CARR metric, "contracted annual recurring revenue, whether in production or not yet in production" (https://www.saasmetricsboard.com/contracted-annual-recurring-revenue). The cheatsheet renders these alongside the filer phrasings, but the codified definitions are the authority here, not the digest.

Standards-board run-rate method (the defensible default): the most recent month's recurring revenue annualized, with one-time fees, professional services, and overage above committed minimums excluded by construction, and signed-not-yet-live revenue held out (that belongs to CARR).

| Input | Source-system class | Timing-offset |
|---|---|---|
| MRR (the recurring base) | billing / data warehouse (recurring-revenue book) | the most recent month, as of period end |
| One-time and services revenue (excluded) | billing / GL | as of period end; removed from the base |
| Committed-not-yet-live ARR (excluded from ARR; the CARR delta) | CRM / billing | as of period end; signed but not in production |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm one-time and services are stripped and the base is recurring only, and that closes from the aggregates. Basis and timing do not close. Run-rate versus committed (CARR) and the off-processor or billing-layer corrections interact non-additively (an off-processor reconciliation and a run-rate-vs-committed reclassification are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the sense the founder used against the defensible clean run-rate, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard.

## Aggressive-vs-defect test

The predicate for classifying an ARR spread:

- **Defensible basis:** an annualized run-rate on clean recurring revenue, the standards-board MRR x 12 method. This is the number to lead with.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under the committed or contracted sense an authority-traceable source actually uses, the standards-board CARR ("whether in production or not yet in production") or the KBCM survey's committed run-rate basis. Legitimate, but it is CARR, not ARR, so it is the labeled risk, never the headline.
- **Defect gap:** no legitimate convention reproduces it. For example, one-time or services revenue folded into the recurring base, an off-processor invoiced book double-counted through a billing layer over the processor, or an annual deal booked as a full month of MRR. No authority-traceable source's convention recovers the number.

## Classic errors touching ARR

All from `classic-errors.md`: annual-as-monthly (a single annual deal counted as one month of MRR), one-time-in-MRR, off-processor ARR (invoiced enterprise revenue the processor never sees, understates ARR), and billing-layer double-count (a billing layer over Stripe counts the same revenue twice, inflates ARR).

## Scope boundary

IN SCOPE: the composition axis, confirm one-time and services are excluded, from the aggregates. OUT OF SCOPE (named but not computed): reconciling off-processor revenue, de-duplicating a billing layer, and resolving run-rate vs committed from raw sources. These are source-system corrections, out of scope for this standard.

## Citations (REFERENCE, not recall)

- Standards-board ARR ("recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis") and CARR ("contracted annual recurring revenue, whether in production or not yet in production"): the codified, snapshot-verified entries in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json).
- Filer ARR phrasings and the off-processor / billing-layer cases: [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).

## Card-derivation notes

- RECALL: the contested flag, the run-rate vs committed senses, the one-time/services exclusion, the four classic errors and their direction, the scope boundary.
- CONTRAST / REWORK card needed: "ARR = MRR x 12" must be reworked (run-rate is one sense; CARR is the other).
- REFERENCE only: the exact standards-board wording, per-founder reconciliation.
