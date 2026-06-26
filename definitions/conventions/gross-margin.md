---
metric: Gross Margin
abbrev: Gross Margin
aka: [subscription gross margin, gross margin percentage, GM%]
contested: true
gear: 2
authority: standards-board
---

# Gross Margin

## One-liner

The share of revenue left after the cost of delivering the product (revenue minus COGS, over revenue), where the contested question is what goes into COGS, and where the "Subscription Gross Margin %" is the codified input the standards-board CAC-payback formula divides by.

## Why it diverges

Gross margin enters this library as a codified dependency, not a free-standing headline: the standards-board CAC Payback Period formula divides new CARR by "Subscription Gross Margin Percentage" to express payback in gross profit, so the payback number is only as defensible as the margin fed into it. The divergence is almost entirely on the composition axis: what counts as cost of revenue (COGS) versus operating expense. The standards board itself punts the boundary, telling companies to "refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company," so the same revenue yields a different margin depending on where hosting, support, customer success, and professional services land. A second divergence, subscription gross margin versus a blended company-wide gross margin, runs through real SEC filers and materially changes the payback denominator (DEFERRED, see below).

## The three axes (per gross margin)

- **composition** (free-computable): what is in COGS. Hosting and infrastructure, customer support, customer success, and professional-services delivery cost are each in-or-out by judgment, and the standards board explicitly defers the COGS-versus-OpEx line to the company. This is the contested axis.
- **basis**: subscription gross margin (recurring product only, the codified payback input) vs a blended gross margin (all revenue, including lower-margin services). The codified CAC-payback dependency is the subscription margin, not the blended one.
- **timing**: the period the margin is measured over (trailing month, quarter, or twelve months), matched to the new CARR being repaid in the payback calculation.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Subscription gross margin (codified payback input) | basis + composition | recurring subscription revenue minus subscription COGS (hosting, support), over subscription revenue | standards board (CAC payback "Subscription Gross Margin Percentage") | the defensible default for payback |
| Customer-success-in-COGS | composition | subscription COGS that includes customer-success cost allocated to delivery | standards-board nuance (CS allocation deferred to the company) | lowers margin; raises payback months |
| Blended company gross margin | basis | all revenue (subscription plus services) minus all COGS, over all revenue | SEC filers (subscription-vs-blended divergence) | usually lower than subscription margin; DEFERRED |
| Professional-services-excluded | composition | services revenue and its delivery cost stripped, leaving the recurring product margin | common practice | isolates the recurring margin the payback intends |

## What the investor likely recomputes on (the documented SOURCE for the target)

This is the standard-level SOURCE for the engagement `target`: a hypothesis about the investor's convention, not a per-engagement value. The engagement sets the actual target (`investor_stated` from the founder's investor-ask, or `peer_set_inferred` from this field); until then this is the documented default source for a `peer_set_inferred` target, to be confirmed via the debrief loop.

Hypothesis, not direct evidence: an investor checking CAC payback recomputes on a subscription gross margin (recurring product only) with a skeptical eye on a blended margin or a thin COGS that parks hosting, support, or customer-success cost in OpEx to flatter the margin and shorten payback. Validate per founder via the debrief loop.

## The defensible read (fallback default; anchor on the target when known)

"Defensible" is investor-relative: it is the convention the founder's raise will be judged against, not the standard's default. Two tiers:

- **Fallback (the generic-defensible default, anchor when the target is unknown):** lead with the subscription gross margin, recurring product revenue over its own delivery cost, when the margin feeds CAC payback, and state what is in COGS (hosting and support in; the customer-success allocation named explicitly). This is the codified default, the read to lead on when no investor or peer-set target is set.
- **Target (anchor when known):** when the engagement's target convention is known (the investor's stated convention, or the peer-set-inferred one), anchor and lead on *that* margin definition, and footnote the rest, including the generic fallback. The target is what the raise is judged against.

Under either anchor, the aggressive move to avoid is feeding a blended company margin, or a margin with hosting, support, or customer-success cost pushed into OpEx, into the payback denominator, which understates the months. Principle: defensibility, not optimization. `defect_gap` is absolute and does not move with the target.

## Canonical formula

$$\text{Gross Margin \%}=\frac{\text{Revenue}-\text{COGS}}{\text{Revenue}}\quad(\text{for CAC payback, the ``Subscription Gross Margin \%'': recurring subscription revenue and its COGS only})$$

Primary source: the Standards Board codifies this as a required input to the CAC Payback Period, "Gross Profit equals New ARR x Subscription Gross Margin," with the payback formula "Fully Loaded S&M Expenses / (CARR x Gross Margin %) x 12," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (CAC Payback Period entry, https://www.saasmetricsboard.com/cac-payback-period). The board does not codify a standalone gross-margin page; the authority is this codified dependency inside the payback standard. The board explicitly defers the COGS boundary to the company ("refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company"), so the composition axis is contested by the standard's own wording. The cheatsheet renders the payback formula that consumes this input, but the codified payback dependency is the authority here, not the digest.

Standards-board dependency method (the defensible default): recurring subscription revenue minus its own cost of revenue (hosting, support, and any customer-success cost allocated to delivery), over recurring subscription revenue, matched to the period of the new CARR the payback repays.

| Input | Source-system class | Timing-offset |
|---|---|---|
| Subscription revenue (the denominator and gross base) | GL / income statement | the period matched to the new CARR being repaid |
| Subscription COGS (hosting, infrastructure, support) | GL / income statement | same period as the revenue |
| Customer-success cost (in-or-out; board defers the line) | GL / accounting allocation | same period; allocation basis is a company judgment |
| Professional-services revenue and delivery cost (excluded from the subscription margin) | GL / income statement | same period; stripped to isolate the recurring margin |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm whether the margin is subscription or blended and which broad cost lines sit in COGS versus OpEx, and that closes from the aggregates. Basis and timing do not close. The subscription-versus-blended basis and the COGS-versus-OpEx allocation of hosting, support, and customer-success cost interact non-additively (reclassifying customer-success cost and stripping services margin are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the margin basis and COGS composition the founder used against the defensible subscription gross margin, and bound the direction and magnitude of the spread and its knock-on effect on CAC-payback months. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard.

## Aggressive-vs-defect test

The predicate for classifying a gross-margin spread:

- **Defensible basis:** a subscription gross margin, recurring product revenue over its own COGS (hosting and support in), with the customer-success allocation named, on the standards-board payback dependency. This is the number to feed CAC payback and to lead with.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a margin basis or COGS boundary an authority-traceable source actually uses, a customer-success cost included in COGS per the board's deferred allocation, or a blended company gross margin an SEC filer discloses (DEFERRED, see citations). Legitimate when named, but not the subscription margin the payback intends, so it is the labeled risk, never the headline.
- **Defect gap:** no legitimate convention reproduces it. For example, hosting, support, or customer-success delivery cost pushed entirely into OpEx to inflate the margin and shorten payback, or a blended margin presented as a subscription margin without disclosure. No authority-traceable convention recovers the number.

## Classic errors touching gross margin

- raw-revenue CAC payback: the related named error in `cac.md`, omitting the gross-margin adjustment entirely; here the failure is one step subtler, feeding an inflated or blended margin into the adjustment. See the CAC Payback section of the cheatsheet and `cac.md`.
- parking delivery cost (hosting, support, customer success) in OpEx to flatter the margin, against the board's COGS-versus-OpEx guidance.
- blending professional-services margin into a "subscription" gross margin, which usually overstates the recurring margin the payback intends.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming whether the margin is subscription or blended, and which broad cost lines the founder places in COGS versus OpEx. OUT OF SCOPE (named but not computed): reconstructing subscription COGS, allocating customer-success and support cost across delivery versus OpEx, and stripping services margin from raw financials. Stating this boundary out loud is the authority move.

## Citations (REFERENCE, not recall)

- Standards-board codified dependency, "Gross Profit equals New ARR x Subscription Gross Margin," and the payback formula "Fully Loaded S&M Expenses / (CARR x Gross Margin %) x 12," plus the deferred COGS-versus-OpEx boundary ("refer to how Customer Success is allocated to Operating Expenses versus Cost of Goods Sold in your company"): the codified, snapshot-verified CAC Payback Period entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json), grounded in the in-repo cac-payback snapshot.
- DEFERRED (network fetch): the SEC subscription-vs-blended gross-margin divergence, verbatim filer definitions of subscription gross margin versus company-wide blended gross margin with their 10-K URLs, is not yet captured in `canonical-verified.json` or the cheatsheet. It must be fetched, quote-verified, and snapshotted before it is cited as primary-filing evidence. Until then this entry is grounded in the in-repo cac-payback snapshot only, and the subscription-vs-blended row is named as a convention family, not asserted from a specific filing.
- CAC payback, the consumer of this input: [`cac.md`](cac.md).

## Card-derivation notes

- RECALL: the contested flag, that gross margin enters as the codified CAC-payback dependency (Subscription Gross Margin %), the COGS-versus-OpEx composition axis (hosting, support, customer success, professional services), subscription vs blended basis, the standards-board deferral of the COGS line, the defensible subscription-margin read, the scope boundary.
- CONTRAST card needed: subscription gross margin vs blended company gross margin (recurring product only vs all revenue); COGS vs OpEx for delivery cost.
- REWORK card needed: "gross margin is a settled single number" must be reworked (the COGS boundary is contested and the standards board defers it).
- REFERENCE only: the exact standards-board payback wording, the DEFERRED SEC subscription-vs-blended filer quotes once fetched, per-founder COGS allocation.
