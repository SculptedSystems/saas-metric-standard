---
metric: Revenue recognition
abbrev: rev-rec
aka: [revenue states, ASC 606, Topic 606]
contested: false
gear: 1
authority: standards-board
diverges_on: []
---

# Revenue recognition

## One-liner

Where a reported number sits among the money-states, which ASC 606 issue is in play, and why the reconstruction is deferred to raw source systems.

Where a reported number sits among the money-states, which ASC 606 issue is in play, and why the actual reconstruction is deferred to raw source systems. Revenue recognition is the one item in the library backed by an enforced standard (US GAAP, FASB Topic 606; Subtopic 340-40 for contract costs), not a convention. The model is extracted in [rev-rec-substrate.md](../evidence/rev-rec-substrate.md) from the KPMG Big-4 handbook.

## The four money-states

A dollar passes through four states, and the SaaS operating metrics sit at different ones. Confusing the states is the root of most rev-rec divergence.

| State | What it means |
|---|---|
| Contracted | The customer has signed; revenue is committed but not necessarily billed |
| Billed | An invoice has been issued (or a charge attempted) |
| Recognized | The revenue has been earned under the recognition policy (GAAP / ASC 606) |
| Collected | Cash is in the bank |

Contracted comes first, but after that the states do **not** follow a fixed order: billed, recognized, and collected interleave depending on the arrangement. An annual deal is contracted, billed, and collected up front while it recognizes over twelve months; an over-time service can recognize before it is billed.

## Deferred revenue, and its mirror the contract asset

**Deferred revenue (a contract liability)** is revenue **billed or collected ahead of recognition**: the liability on the balance sheet for prepaid or pre-billed contracts (for example an annual subscription invoiced up front, whether or not the cash has arrived; ASC 606-10-45-2). Its mirror is a **contract asset**: revenue **recognized while the right to payment is still conditional** (for example, on completing another performance obligation; ASC 606-10-45-3). Once only the passage of time remains before payment, it is a **receivable**, not a contract asset (606-10-45-4). Deferred revenue is why ARR (a forward run-rate) is not the same as GAAP revenue (recognized, backward-looking).

## The GAAP vs non-GAAP boundary

- **Recognized revenue is the GAAP line** (governed by ASC 606): what shows up on the income statement.
- **ARR, MRR, NRR, GRR, bookings, and CARR are non-GAAP operating metrics.** They are forward-looking run-rate or cohort constructs, not recognized revenue, and they are exactly the metrics with no enforced definition, which is why they diverge. This boundary is the one-sentence anchor for the deflection below.

## The recognition model (ASC 606), enough to name the issue

The five-step model (identify the contract, identify the performance obligations, determine the price, allocate by stand-alone selling price, recognize as obligations are satisfied) produces the recognized line. You do not run it live; you recognize which lever is moving the founder's number. The high-frequency ones:

- **License vs SaaS sets the timing.** A software license (customer can take possession and self-host) recognizes at a point in time; hosted SaaS recognizes ratably over the term. Same product, different timing.
- **Setup and implementation fees** are usually not a separate obligation, so they recognize over the term, not upfront. Booking them as immediate revenue overstates recognized revenue.
- **Usage-based SaaS fees** are variable consideration (the royalty exception needs a license): estimated and constrained, or recognized as-invoiced.
- **Renewals** cannot recognize before the renewal period begins; a **material right** (a renewal or upgrade priced below stand-alone) defers a slice of today's price.
- **PCS** (support plus unspecified updates) recognizes ratably over its period.
- **A prepayment covering more than a year** may carry a significant financing component.
- **Variable consideration and the constraint** set how much usage or contingent revenue is recognized: revenue is included only to the extent it is probable a significant reversal will not occur (606-10-32-11 to 32-12). This is the test behind "usage-based SaaS fees are variable consideration."
- **Principal vs agent** sets gross vs net revenue (606-10-55-36 to 55-40): the founder records revenue gross only if it controls the good or service before transfer; otherwise it is an agent and books only the net fee. The marketplace, payments, and embedded-resale trap is often the single biggest top-line distortion in a founder's revenue.
- **RPO / cRPO** (606-10-50-13) is the GAAP-anchored forward-revenue disclosure: contracted-but-not-yet-recognized revenue, with cRPO the portion due within about twelve months. Investors increasingly trust RPO as the closest GAAP-backed forward number versus non-GAAP ARR.

Depth, page citations, and contract-cost (commission) capitalization: [rev-rec-substrate.md](../evidence/rev-rec-substrate.md).

## The honest deflection

The issue is named, the computation deferred. "That is a sources question, not a definitions question." The standard can name that, say, setup fees should recognize ratably, or that SaaS usage is variable consideration. Reconstructing the actual recognition schedule and deferred-revenue balance from a founder's raw data is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Scope boundary

IN SCOPE: placing the number among the four states, naming the GAAP vs non-GAAP boundary, and naming which ASC 606 issue is in play. OUT OF SCOPE (named but not computed): the actual recognition-schedule or deferred-revenue reconstruction from raw data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.
