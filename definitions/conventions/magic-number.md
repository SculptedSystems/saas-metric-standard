---
metric: SaaS Magic Number
abbrev: Magic Number
aka: [magic number]
contested: true
gear: 2
authority: origin-author
diverges_on: [basis]
---

# SaaS Magic Number

## One-liner

A sales-efficiency ratio: the annualized change in subscription revenue across two quarters divided by the prior quarter's sales-and-marketing spend, with no enforced or codified definition and only an origin author (Scale VP) as authority.

## Why it diverges

The magic number has no SEC-disclosed or standards-board definition. The only authority is the origin author, Scale VP, so it should be named as a convention, not a standard. Within that single origin definition, the live divergence is on the basis axis: whether the numerator is the change in GAAP subscription revenue (the origin form) or net new ARR (a common variant). The timing (which two quarters, and using the earlier quarter's S&M) is reasonably settled by the origin post.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| GAAP-revenue numerator (origin) | basis | (change in subscription revenue across two quarters x 4) / prior-quarter S&M | origin, Scale VP | the origin-author default |
| Net-new-ARR numerator (variant) | basis | (net new ARR for the quarter, annualized) / prior-quarter S&M | common practice | reads differently when revenue lags ARR |

## What the investor likely recomputes on

The named filers below are late-stage and large. The standard treats them as a proxy for the convention an early-stage investor carries, on the reasoning that a seed or Series A investor judges a raise against the basis the public market has settled on. So the convention named here is read off the public record, and it is where a founder's number gets measured when no specific investor convention is on the table.

A reader treats the magic number as a rough sales-efficiency signal (higher is more efficient; the origin's threshold tiers are an unsourced convention, not a standard, so do not assert a specific cutoff as settled) and is indifferent to small basis differences as long as they are stated, but discounts a number whose numerator and S&M period are not defined. The direction is settled but the exact read is not, since this metric has only an origin author behind it. Name the numerator basis and S&M period against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** name it as a convention with a Scale VP origin, state the numerator (GAAP subscription revenue vs net new ARR), and confirm the prior-quarter S&M denominator. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, that numerator and period govern, and the rest, including the default above, is footnoted. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is presenting a self-defined magic number as if it were a standard. Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying a magic-number spread:

- **Defensible basis:** the origin (Scale VP) form, GAAP subscription-revenue change annualized over prior-quarter S&M, named as a convention rather than a standard. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under the common net-new-ARR numerator variant, which reads differently when revenue lags ARR. Legitimate as a stated convention, but it is not the origin form, so it is the labeled risk, not the defensible read. (No SEC filer authority exists to trace either form to; the authority is origin only.)
- **Defect gap:** no legitimate convention reproduces it. For example, the metric presented as a codified standard, a benchmark cutoff asserted as authoritative, or a numerator and S&M period left undefined so neither the origin form nor the variant recovers the number.

## Canonical formula

$$
\text{Magic \#}=\frac{\Delta\text{ subscription revenue (quarter)}\times 4}{\text{prior-quarter S\&M}}
$$
Primary source: the origin author, Scale Venture Partners, "Take the change in subscription revenue between two quarters, annualize it (multiply by four), and divide the result by the sales and marketing spend for the earlier of the two quarters," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.scalevp.com/insights/magic-number-math/). There is no standards-board or SEC-disclosed definition; the origin author is the only authority, so it is named as a convention, not a standard. The net-new-ARR variant is the common alternative numerator (see the convention families above); the origin definition is the authority here.

Origin (Scale VP) method (the only defensible anchor): the quarter-over-quarter change in subscription revenue, annualized by multiplying by four, over the earlier of the two quarters' sales-and-marketing spend.

| Input | Source-system class | Timing-offset |
|---|---|---|
| Subscription revenue change (the numerator, annualized x 4) | GL / data warehouse | across two consecutive quarters; current minus prior |
| Sales-and-marketing spend (the denominator) | GL / income statement | the earlier of the two quarters (prior quarter) |
| Numerator basis (GAAP subscription revenue, origin; or net new ARR, the variant) | GL / billing | the divergence axis; stated, not assumed |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm the ratio shape (annualized revenue change over prior-quarter S&M) and the prior-quarter S&M denominator, and that closes from the aggregates. Basis does not close. The numerator basis (GAAP subscription revenue versus net new ARR) needs raw quarterly financials, and the two read differently when revenue lags ARR, so it is reconciled bounded and qualitative: name the numerator basis the founder used against the origin GAAP-revenue form, and bound the direction and magnitude of the spread. Because this metric is origin-author tier with no codified or SEC authority, the spread is a convention range, not a defensible-versus-aggressive verdict; do not assert a benchmark cutoff as settled. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## The three axes (per Magic Number)

Magic Number diverges on basis. Composition is settled by the origin: the ratio shape, change in the revenue measure (annualized) over prior-quarter S&M. Basis is the divergence axis, GAAP subscription revenue change (origin) vs net new ARR (the common variant). Timing is settled by the origin post: the quarter-over-quarter change annualized by multiplying by four, divided by the earlier of the two quarters' S&M.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching Magic Number

No entry in `classic-errors.md` maps directly. The live error is treating an uncodified convention as a standard, or quoting the number without stating the numerator basis and the S&M period.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming the numerator basis and the S&M period, and flagging that the metric is a convention, not a standard. OUT OF SCOPE (named but not computed): reconstructing quarterly subscription-revenue change or net new ARR and the matched S&M from source financials. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Origin (Scale VP) definition and the net-new-ARR variant, plus the "no enforced or codified definition" framing: the origin, snapshot-verified SaaS Magic Number entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.scalevp.com/insights/magic-number-math/).
