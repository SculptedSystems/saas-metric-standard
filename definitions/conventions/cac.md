---
metric: Customer Acquisition Cost
abbrev: CAC
aka: [CAC ratio, CAC payback period]
contested: true
gear: 2
authority: standards-board
---

# Customer Acquisition Cost (CAC)

## One-liner

The sales-and-marketing cost to win new business, expressed either as a per-customer cost (CAC), as the spend to win one dollar of new ARR (the CAC ratio, the codified form), or as the months for gross profit on new business to repay that spend (CAC payback).

## Why it diverges

What is actually codified is the CAC ratio (S&M to win one dollar of new ARR), not a single "cost per customer." The divergence runs through three composition questions: what goes in the S&M numerator (blended vs paid-only, fully-loaded vs ad-spend-only, whether customer-success cost is in), what counts in the denominator (new customers vs expansion vs both), and, for per-customer CAC, the new-customer count with its acquisition time-lag. Both the standards board and the KBCM survey split the ratio three ways (blended, new-customer, expansion) and agree on "fully-loaded." A separate term-collision: some sources use "CAC ratio" to mean LTV/CAC, which runs the opposite direction, so always state which.

## The three axes (per CAC)

- **composition** (free-computable): the S&M numerator (blended vs new-customer-allocated vs expansion-allocated; fully-loaded vs ad-spend-only; customer-success cost in or out) and the denominator (new-customer ARR vs expansion ARR vs both). The standards-board and KBCM consensus is fully-loaded S&M.
- **basis**: per-customer cost vs the per-dollar-of-new-ARR ratio vs gross-margin-adjusted payback. CAC payback is codified as gross-margin-adjusted: divide by gross-margin-adjusted new ARR or MRR, not raw revenue.
- **timing**: the S&M period leads the ARR it acquired (the standards board uses prior-period, CQ-1, S&M against current new CARR), reflecting the acquisition time-lag between spend and the customer it wins.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Blended CAC ratio | composition | fully-loaded S&M (prior period) over new CARR plus expansion CARR | standards board / KBCM | the broad-efficiency default |
| New-customer CAC ratio | composition | S&M allocated to acquisition over new-name ARR | standards board / KBCM | isolates new-logo efficiency |
| Expansion CAC ratio | composition | S&M allocated to expansion over expansion CARR | standards board / KBCM | usually lower; expansion is cheaper to win |
| CAC payback (gross-margin-adjusted) | basis + timing | fully-loaded S&M / (new CARR x gross margin %) x 12 | standards board (payback) | the codified payback; months to repay on gross profit |
| Per-customer CAC | basis | S&M over new-customer count | common practice (no codified form) | sensitive to the new-customer count and acquisition lag |

## What the investor likely recomputes on

Hypothesis, not direct evidence: a fully-loaded, blended-or-new CAC ratio on new ARR, and CAC payback on gross-margin-adjusted revenue, with a skeptical eye on a paid-only numerator or a raw-revenue payback that flatters the months. Validate per founder via the debrief loop.

## The defensible read

Lead with a fully-loaded CAC ratio and say which denominator (blended, new, or expansion). For payback, lead with the gross-margin-adjusted months, not raw revenue. The aggressive moves to avoid: a paid-only or ad-spend-only numerator that understates true CAC, an expansion-inclusive denominator presented as new-customer efficiency, and a raw-revenue payback (divide it by gross margin: at ~75% GM, a "9 month" payback is really about 12). Principle: defensibility, not optimization.

## Classic errors touching CAC

- raw-revenue CAC payback instead of gross-margin-adjusted: the named common error here; it understates payback months. See the CAC Payback section of the cheatsheet.
- paid-only or ad-spend-only S&M in the numerator, against the fully-loaded consensus, which understates CAC.
- the CAC-ratio / LTV-CAC term collision: confusing spend-per-dollar-of-ARR with the LTV:CAC ratio, which runs the opposite direction.

## Free / paid boundary

FREE (from the reported aggregates and the stated method): naming the numerator and denominator the founder used, catching a paid-only numerator, and catching a raw-revenue payback. NAMED BUT NOT COMPUTED (the paid Cast): reconstructing fully-loaded S&M, allocating spend across new vs expansion, and resolving the new-customer count and acquisition lag from source systems (DR-0018). Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Standards-board blended / new / expansion CAC ratios and the gross-margin-adjusted CAC payback formula, plus the KBCM cross-check and the term-collision warning: see the CAC Ratio and CAC Payback sections of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the Blended/New/Expansion CAC Ratio and CAC Payback Period entries in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).
- Note (per the cheatsheet coverage note): the standards board has no standalone "customer acquisition cost" page (the link 404s); the codified authority is the ratio, not a per-customer cost.

## Card-derivation notes

- RECALL: the contested flag, that the codified form is the ratio (not a per-customer cost), the three ratio splits (blended/new/expansion), fully-loaded as consensus, payback as gross-margin-adjusted, the raw-revenue payback error and its direction, the LTV/CAC term collision, the free/paid boundary.
- CONTRAST card needed: CAC ratio (S&M per dollar of ARR) vs LTV:CAC (opposite direction); blended vs new-customer vs expansion ratio.
- REWORK card needed: "CAC payback = S&M / monthly revenue" must be reworked (gross-margin-adjust the denominator).
- REFERENCE only: the exact standards-board and KBCM wording, per-founder S&M allocation and counts.
