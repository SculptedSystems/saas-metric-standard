---
metric: SaaS Magic Number
abbrev: Magic Number
aka: [magic number]
contested: true
gear: 2
authority: origin-author
---

# SaaS Magic Number

## One-liner

A sales-efficiency ratio: the annualized change in subscription revenue across two quarters divided by the prior quarter's sales-and-marketing spend, with no enforced or codified definition and only an origin author (Scale VP) as authority.

## Why it diverges

The magic number has no SEC-disclosed or standards-board definition. The only authority is the origin author, Scale VP, so on a call it should be named as a convention, not a standard. Within that single origin definition, the live divergence is on the basis axis: whether the numerator is the change in GAAP subscription revenue (the origin form) or net new ARR (a common variant). The timing (which two quarters, and using the earlier quarter's S&M) is reasonably settled by the origin post.

## The three axes (per Magic Number)

- **composition** (free-computable): the ratio shape, change in the revenue measure (annualized) over prior-quarter S&M. Settled by the origin.
- **basis**: GAAP subscription revenue change (origin) vs net new ARR (the common variant). This is the divergence axis.
- **timing**: the quarter-over-quarter change annualized by multiplying by four, divided by the earlier of the two quarters' S&M. Settled by the origin post.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| GAAP-revenue numerator (origin) | basis | (change in subscription revenue across two quarters x 4) / prior-quarter S&M | origin, Scale VP | the origin-author default |
| Net-new-ARR numerator (variant) | basis | (net new ARR for the quarter, annualized) / prior-quarter S&M | common practice | reads differently when revenue lags ARR |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an investor treats the magic number as a rough sales-efficiency signal (higher is more efficient; the origin's threshold tiers are an unsourced convention, not a standard, so do not assert a specific cutoff cold) and is indifferent to small basis differences as long as they are stated, but will discount a number whose numerator and S&M period are not defined. Validate per founder via the debrief loop.

## The defensible read

Name it as a convention with a Scale VP origin, state the numerator (GAAP subscription revenue vs net new ARR), and confirm the prior-quarter S&M denominator. The aggressive move to avoid is presenting a self-defined magic number as if it were a standard. Principle: defensibility, not optimization.

## Classic errors touching Magic Number

No entry in `classic-errors.md` maps directly. The live error is treating an uncodified convention as a standard, or quoting the number without stating the numerator basis and the S&M period.

## Free / paid boundary

FREE (from the reported aggregates and the stated method): naming the numerator basis and the S&M period, and flagging that the metric is a convention, not a standard. NAMED BUT NOT COMPUTED (the paid Cast): reconstructing quarterly subscription-revenue change or net new ARR and the matched S&M from source financials. Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Origin definition and the net-new-ARR variant, plus the "no enforced or codified definition" framing: see the SaaS Magic Number section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the SaaS Magic Number entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).

## Card-derivation notes

- RECALL: the contested flag, that it has no codified definition (origin-author only, Scale VP), the ratio shape, the GAAP-revenue vs net-new-ARR basis divergence, the prior-quarter S&M denominator, and that it must be named as a convention on a call.
- CONTRAST card needed: GAAP-revenue numerator vs net-new-ARR numerator.
- REWORK card needed: "the magic number is a standard metric" must be reworked (it is an origin-author convention with no codified definition).
- REFERENCE only: the exact Scale VP wording, any benchmark thresholds, per-founder figures.
