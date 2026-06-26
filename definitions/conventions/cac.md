---
metric: Customer Acquisition Cost
abbrev: CAC
aka: [CAC ratio, CAC payback period]
contested: true
gear: 2
authority: standards-board
diverges_on: [composition, basis, timing]
---

# Customer Acquisition Cost (CAC)

## One-liner

The sales-and-marketing cost to win new business, expressed either as a per-customer cost (CAC), as the spend to win one dollar of new ARR (the CAC ratio, the codified form), or as the months for gross profit on new business to repay that spend (CAC payback).

## Why it diverges

What is actually codified is the CAC ratio (S&M to win one dollar of new ARR), not a single "cost per customer." The divergence runs through three composition questions: what goes in the S&M numerator (blended vs paid-only, fully-loaded vs ad-spend-only, whether customer-success cost is in), what counts in the denominator (new customers vs expansion vs both), and, for per-customer CAC, the new-customer count with its acquisition time-lag. The standards board splits the ratio three ways (blended, new-customer, expansion) and codifies the fully-loaded numerator. A separate term-collision: some sources use "CAC ratio" to mean LTV/CAC, which runs the opposite direction, so always state which.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Blended CAC ratio | composition | fully-loaded S&M (prior period) over new CARR plus expansion CARR | standards board | the broad-efficiency default |
| New-customer CAC ratio | composition | S&M allocated to acquisition over new-name ARR | standards board | isolates new-logo efficiency |
| Expansion CAC ratio | composition | S&M allocated to expansion over expansion CARR | standards board | usually lower; expansion is cheaper to win |
| CAC payback (gross-margin-adjusted) | basis + timing | fully-loaded S&M / (new CARR x gross margin %) x 12 | standards board (payback) | the codified payback; months to repay on gross profit |
| Per-customer CAC | basis | S&M over new-customer count | common practice (no codified form) | sensitive to the new-customer count and acquisition lag |

## What the investor likely recomputes on

The applicable convention is the codified one: the standards-board CAC ratio and CAC payback methods. An investor recomputes a founder's number against that codified convention when no specific investor convention is on the table, and that is where the number gets measured.

The codified methods point to a fully-loaded, blended-or-new CAC ratio on new ARR, and CAC payback on gross-margin-adjusted revenue. The fully-loaded numerator and the gross-margin adjustment are settled; what varies is whether a given reader leans blended or new-customer. Name the numerator, denominator, and basis against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** a fully-loaded CAC ratio with the denominator named (blended, new, or expansion); for payback, the gross-margin-adjusted months, not raw revenue. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that number governs, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive moves to avoid: a paid-only or ad-spend-only numerator that understates true CAC, an expansion-inclusive denominator presented as new-customer efficiency, and a raw-revenue payback (divide it by gross margin: at ~75% GM, a "9 month" payback is really about 12). Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying a CAC-ratio or CAC-payback spread:

- **Defensible basis:** a fully-loaded CAC ratio with the denominator named (blended, new, or expansion) on the standards-board method, and CAC payback on gross-margin-adjusted new CARR in months. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under a denominator or split an authority-traceable source actually uses, an expansion-inclusive blended ratio presented where new-customer efficiency was implied, or the standards-board nuance of including customer-success cost only where it is allocated to acquisition. Legitimate when named, but not the read implied, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. For example, a paid-only or ad-spend-only numerator against the fully-loaded consensus, a raw-revenue payback that omits the gross-margin adjustment (at ~75% GM a "9 month" payback is really about 12), or the CAC-ratio / LTV:CAC term collision running the opposite direction. No authority-traceable source's convention recovers the number.

## Canonical formula

Two codified forms share one S&M numerator: the CAC ratio (spend per dollar of new CARR) and CAC payback (months, gross-margin-adjusted).

$$
\text{CAC Ratio}=\frac{\text{fully-loaded S\&M (CQ-1)}}{\text{New CARR}+\text{Expansion CARR}}\quad(\text{blended; new-customer and expansion variants restrict the denominator})
$$
$$
\text{CAC Payback (months)}=\frac{\text{fully-loaded S\&M}}{\text{New CARR}\times\text{Subscription Gross Margin \%}}\times 12
$$
Primary source: the Standards Board codified ratio and payback methods, "Fully Loaded Sales and Marketing Expenses (CQ-1) / New CARR + Expansion CARR" (blended), "...allocated to Customer Acquisition / New Name ARR" (new), "...allocated to Expansion / Expansion CARR" (expansion), and CAC payback "the number of months it takes for the gross profits from new customer ARR to pay back the sales and marketing expenses ... Fully Loaded S&M Expenses / (CARR x Gross Margin %) x 12," all recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/blended-cac-ratio, https://www.saasmetricsboard.com/new-cac-ratio, https://www.saasmetricsboard.com/expansion-cac-ratio, https://www.saasmetricsboard.com/cac-payback-period). The board has no standalone per-customer "cost" page (it 404s); the codified authority is the ratio and the payback, not a cost per customer. The gross-margin input to payback is the codified "Subscription Gross Margin Percentage" dependency, carried in [`gross-margin.md`](gross-margin.md). The codified methods are the authority here.

Standards-board method (the defensible default): fully-loaded S&M, lagged by the sales cycle (CQ-1 against current-quarter new CARR), over new (and, for blended, expansion) CARR for the ratio; for payback, the same numerator over gross-margin-adjusted new CARR, times twelve, expressed in months.

| Input | Source-system class | Timing-offset |
|---|---|---|
| Fully-loaded S&M (the shared numerator) | GL / income statement | the period preceding new CARR by the sales-cycle length (CQ-1 for a ~90-day cycle) |
| New CARR (new-customer denominator) | CRM / billing | the current period the spend acquired |
| Expansion CARR (blended denominator adds this) | CRM / billing | the current period |
| Subscription Gross Margin % (payback only) | income statement / accounting; see [`gross-margin.md`](gross-margin.md) | the period of the new CARR being repaid |
| New-customer count (per-customer CAC only; uncodified) | CRM / billing | current period, lagged by the acquisition cycle |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates and the stated method we can confirm which numerator and denominator the founder used (blended versus new versus expansion, fully-loaded versus paid-only, ratio versus gross-margin-adjusted payback), and that closes from the aggregates. Basis and timing do not close. The fully-loaded S&M reconstruction, the new-versus-expansion spend allocation, the sales-cycle lag, and (for payback) the gross-margin adjustment interact non-additively (re-burdening commissions, reallocating customer-success cost, and applying a gross margin are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the numerator, denominator, lag, and margin the founder used against the defensible fully-loaded standards-board method, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## The three axes (per CAC)

CAC diverges on all three axes. Composition covers the S&M numerator (blended vs new-customer-allocated vs expansion-allocated; fully-loaded vs ad-spend-only; customer-success cost in or out) and the denominator (new-customer ARR vs expansion ARR vs both); the standards-board convention is fully-loaded S&M. Basis is per-customer cost vs the per-dollar-of-new-ARR ratio vs gross-margin-adjusted payback, and CAC payback is codified as gross-margin-adjusted: divide by gross-margin-adjusted new ARR or MRR, not raw revenue. Timing reflects the acquisition lag: the S&M period leads the ARR it acquired (the standards board uses prior-period, CQ-1, S&M against current new CARR).

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching CAC

- raw-revenue CAC payback instead of gross-margin-adjusted: the named common error here; it understates payback months. See the CAC payback formula above and `gross-margin.md`.
- paid-only or ad-spend-only S&M in the numerator, against the fully-loaded consensus, which understates CAC.
- the CAC-ratio / LTV-CAC term collision: confusing spend-per-dollar-of-ARR with the LTV:CAC ratio, which runs the opposite direction.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming the numerator and denominator the founder used, catching a paid-only numerator, and catching a raw-revenue payback. OUT OF SCOPE (named but not computed): reconstructing fully-loaded S&M, allocating spend across new vs expansion, and resolving the new-customer count and acquisition lag from raw source systems. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board blended / new / expansion CAC ratios and the gross-margin-adjusted CAC payback formula: the codified, snapshot-verified Blended / New / Expansion CAC Ratio and CAC Payback Period entries in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/blended-cac-ratio, https://www.saasmetricsboard.com/new-cac-ratio, https://www.saasmetricsboard.com/expansion-cac-ratio, https://www.saasmetricsboard.com/cac-payback-period). The term-collision warning (some sources use "CAC ratio" to mean LTV/CAC, the opposite direction) is carried in the Why it diverges section above.
- The Subscription Gross Margin % input to CAC payback is the codified dependency carried in [`gross-margin.md`](gross-margin.md).
- Note: the standards board has no standalone "customer acquisition cost" page (the link 404s); the codified authority is the ratio, not a per-customer cost.
