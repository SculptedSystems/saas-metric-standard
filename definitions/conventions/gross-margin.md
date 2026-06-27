---
metric: Gross Margin
abbrev: Gross Margin
aka: [subscription gross margin, gross margin percentage, GM%]
contested: true
gear: 2
authority: standards-board
diverges_on: [composition, basis]
---

# Gross Margin

## One-liner

The share of revenue left after the cost of delivering the product (revenue minus COGS, over revenue), where the contested question is what goes into COGS, and where the "Subscription Gross Margin %" is the codified input the standards-board CAC-payback formula divides by.

## Why it diverges

Gross margin enters this library as a codified dependency, not a free-standing headline: the standards-board CAC Payback Period formula divides new CARR by "Subscription Gross Margin Percentage" to express payback in gross profit, so the payback number is only as defensible as the margin fed into it. The divergence is almost entirely on the composition axis: what counts as cost of revenue (COGS) versus operating expense. The standards board itself punts the boundary, telling companies to "refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company," so the same revenue yields a different margin depending on where hosting, support, customer success, and professional services land. A second divergence, subscription gross margin versus a blended company-wide gross margin, materially changes the payback denominator.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Subscription gross margin (codified payback input) | basis + composition | recurring subscription revenue minus subscription COGS (hosting, support), over subscription revenue | standards board (CAC payback "Subscription Gross Margin Percentage") | the defensible default for payback |
| Customer-success-in-COGS | composition | subscription COGS that includes customer-success cost allocated to delivery | standards-board nuance (CS allocation deferred to the company) | lowers margin; raises payback months |
| Blended company gross margin | basis | all revenue (subscription plus services) minus all COGS, over all revenue | common practice (subscription-vs-blended divergence) | usually lower than subscription margin |
| Professional-services-excluded | composition | services revenue and its delivery cost stripped, leaving the recurring product margin | common practice | isolates the recurring margin the payback intends |

## What the investor likely recomputes on

The codified convention is the basis a founder's number gets measured against when no specific investor convention is on the table. It is the reference's default anchor.

A reader checking CAC payback recomputes on a subscription gross margin (recurring product only), skeptical of a blended margin or a thin COGS that parks hosting, support, or customer-success cost in OpEx to flatter the margin and shorten payback. The subscription basis is settled; the COGS-versus-OpEx line is bounded by the codified convention, not fixed by it, since the board itself defers the allocation to the company. Name the margin basis and COGS composition against the codified convention rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the reference's default. So the read has two tiers.

- **The reference's default (use when no specific investor convention is known):** the subscription gross margin, recurring product revenue over its own delivery cost, when the margin feeds CAC payback, with what is in COGS stated (hosting and support in; the customer-success allocation named explicitly). This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that margin definition governs, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is feeding a blended company margin, or a margin with hosting, support, or customer-success cost pushed into OpEx, into the payback denominator, which understates the months. Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying a gross-margin spread:

- **Defensible basis:** a subscription gross margin, recurring product revenue over its own COGS (hosting and support in), with the customer-success allocation named, on the standards-board payback dependency. This is the defensible read and the number that feeds CAC payback.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a margin basis or COGS boundary an authority-traceable source actually uses, a customer-success cost included in COGS per the board's deferred allocation, or a blended company gross margin in place of the subscription margin. Legitimate when named, but not the subscription margin the payback intends, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. For example, hosting, support, or customer-success delivery cost pushed entirely into OpEx to inflate the margin and shorten payback, or a blended margin presented as a subscription margin without disclosure. No authority-traceable convention recovers the number.

## Canonical formula

$$
\text{Gross Margin \%}=\frac{\text{Revenue}-\text{COGS}}{\text{Revenue}}\quad(\text{for CAC payback, the ``Subscription Gross Margin \%'': recurring subscription revenue and its COGS only})
$$
Primary source: the Standards Board codifies this as a required input to the CAC Payback Period, "Gross Profit equals New ARR x Subscription Gross Margin," with the payback formula "Fully Loaded S&M Expenses / (CARR x Gross Margin %) x 12," recorded in [the reference's verified evidence set](../evidence/canonical-verified.json) under the CAC Payback Period entry, sourced from the SaaS Metrics Standards Board's [CAC payback period](https://www.saasmetricsboard.com/cac-payback-period) page. The board does not codify a standalone gross-margin page; the authority is this codified dependency inside the payback standard. The board explicitly defers the COGS boundary to the company ("refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company"), so the composition axis is contested by the standard's own wording. The codified payback dependency is the authority here.

Standards-board dependency method (the defensible default): recurring subscription revenue minus its own cost of revenue (hosting, support, and any customer-success cost allocated to delivery), over recurring subscription revenue, matched to the period of the new CARR the payback repays.

| Input | Source-system class | Timing-offset |
|---|---|---|
| Subscription revenue (the denominator and gross base) | GL / income statement | the period matched to the new CARR being repaid |
| Subscription COGS (hosting, infrastructure, support) | GL / income statement | same period as the revenue |
| Customer-success cost (in-or-out; board defers the line) | GL / accounting allocation | same period; allocation basis is a company judgment |
| Professional-services revenue and delivery cost (excluded from the subscription margin) | GL / income statement | same period; stripped to isolate the recurring margin |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm whether the margin is subscription or blended and which broad cost lines sit in COGS versus OpEx, and that closes from the aggregates. Basis and timing do not close. The subscription-versus-blended basis and the COGS-versus-OpEx allocation of hosting, support, and customer-success cost interact non-additively (reclassifying customer-success cost and stripping services margin are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the margin basis and COGS composition the founder used against the defensible subscription gross margin, and bound the direction and magnitude of the spread and its knock-on effect on CAC-payback months. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this reference. Reconstructing it from raw source systems is a separate, multi-week effort the reference does not perform.

## The three axes (per gross margin)

Gross margin diverges mostly on composition, with a secondary basis split. Composition is the contested axis: what is in COGS. Hosting and infrastructure, customer support, customer success, and professional-services delivery cost are each in-or-out by judgment, and the standards board explicitly defers the COGS-versus-OpEx line to the company. Basis is the subscription gross margin (recurring product only, the codified payback input) vs a blended gross margin (all revenue, including lower-margin services); the codified CAC-payback dependency is the subscription margin, not the blended one. Timing matches the margin period (trailing month, quarter, or twelve months) to the new CARR being repaid.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching gross margin

- raw-revenue CAC payback: the related named error in `cac.md`, omitting the gross-margin adjustment entirely; here the failure is one step subtler, feeding an inflated or blended margin into the adjustment. See `cac.md`.
- parking delivery cost (hosting, support, customer success) in OpEx to flatter the margin, against the board's COGS-versus-OpEx guidance.
- blending professional-services margin into a "subscription" gross margin, which usually overstates the recurring margin the payback intends.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming whether the margin is subscription or blended, and which broad cost lines the founder places in COGS versus OpEx. OUT OF SCOPE (named but not computed): reconstructing subscription COGS, allocating customer-success and support cost across delivery versus OpEx, and stripping services margin from raw financials. The per-axis reconstruction from the client's raw source systems is out of scope for this reference. Reconstructing it from raw source systems is a separate, multi-week effort the reference does not perform.

## Citations

- Standards-board codified dependency, "Gross Profit equals New ARR x Subscription Gross Margin," and the payback formula "Fully Loaded S&M Expenses / (CARR x Gross Margin %) x 12," plus the deferred COGS-versus-OpEx boundary ("refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company"): the codified, snapshot-verified CAC Payback Period entry in [the reference's verified evidence set](../evidence/canonical-verified.json), grounded in the in-repo cac-payback snapshot.
- The subscription-vs-blended split is a basis divergence: a subscription gross margin isolates a hosting and infrastructure cost base, yielding a high margin, while a blended cost-of-revenue line dominated by services-delivery personnel yields a structurally lower, services-shaped margin. Feeding a blended margin into the CAC-payback denominator understates the months.
- CAC payback, the consumer of this input: [`cac.md`](cac.md).
