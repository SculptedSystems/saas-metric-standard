---
metric: Lifetime Value
abbrev: LTV
aka: [CLV, LTV:CAC]
contested: true
gear: 2
authority: origin-author
diverges_on: [basis]
filer_evidence: []
---

# Lifetime Value (LTV) and LTV:CAC

## One-liner

The gross-profit value of a customer over their expected lifetime (LTV), and the LTV-to-CAC ratio with its "at least 3x" rule of thumb, both popularizer conventions (David Skok), not standards: no SEC or standards-board definition exists.

## Why it diverges

There is no codified LTV or LTV:CAC definition; Skok popularized the gross-margin-adjusted LTV and the "greater than 3x, sometimes 7-8x" ratio, so both must be named as conventions, not standards. The "3x rule" in particular is a heuristic, not a settled threshold. LTV itself diverges on the basis axis through the assumptions baked into the popularized formula: a gross-margin-adjusted ARPA, a simple lifetime of one over churn, and no discount rate. Change the churn input or add a discount rate and the same customer book yields a materially different LTV, which then moves the ratio.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Popularized LTV (Skok) | composition + basis | (ARPA x gross margin) / monthly churn | popularizer, David Skok | the common convention; gross-margin-adjusted, undiscounted |
| Discounted LTV | basis + timing | gross-profit cash flows discounted at a rate over the expected life | finance practice (no codified SaaS form) | lower than the undiscounted form; more conservative |
| LTV:CAC heuristic ("3x") | composition | LTV / CAC, with a rule of thumb of at least 3x (sometimes 7-8x) | popularizer, David Skok | a convention, not a standard; not a settled threshold |

## What the investor likely recomputes on

A reader takes LTV:CAC as a directional sanity check (roughly 3x as "healthy," well below as a flag), is skeptical of an LTV built on an optimistic churn input or no discount, and cares that the churn basis and gross margin are stated. The 3x is a yardstick, not a target to optimize to. The gross-margin-adjusted shape is settled; the churn input and the discount choice are bounded by the popularized form, not fixed by it. Name the churn basis and the discount treatment against real numbers rather than assume them.

## The defensible read

Name LTV and LTV:CAC as conventions (popularizer, Skok), state the churn input and whether the LTV is discounted, and treat 3x as a heuristic, not a pass/fail line. The aggressive moves to avoid: an LTV inflated by an understated churn rate or a revenue (not gross-profit) base, and presenting "3x" as a standard. Principle: defensibility, not optimization.

## The three axes (per LTV / LTV:CAC)

LTV diverges mainly on basis. Composition is comparatively settled: the gross-margin adjustment (LTV is gross-profit, not revenue, based), and the ratio comparing LTV to CAC, with the popularized form folding gross margin in. Basis is the live axis, the churn rate used (which churn, on which basis) and whether a discount rate is applied; the popularized formula uses monthly churn and a simple one-over-churn lifetime with no discounting, both contestable inputs and the main source of divergence. Timing is the lifetime horizon implied by one over churn (an infinite-geometric expected life) vs a finite-horizon or discounted-cash-flow view.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching LTV

- the CAC-ratio / LTV-CAC term collision (cross-reference `cac.md`): some sources call LTV/CAC the "CAC ratio," which runs the opposite direction from the codified S&M-per-dollar-of-ARR CAC ratio; always state which.
- a revenue-based rather than gross-margin-adjusted LTV, which overstates value.
- an LTV built on net (expansion-flattered) or understated churn, which inflates the implied lifetime.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming LTV and the 3x rule as conventions, confirming the gross-margin adjustment, and surfacing the churn and discount assumptions in the stated method. OUT OF SCOPE (named but not computed): reconstructing ARPA, the churn input, and a discounted lifetime from customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Popularized LTV formula, the "greater than 3x" rule of thumb, the no-SEC/no-standards-board status, and the baked-in assumptions (gross-margin-adjusted, one-over-churn lifetime, no discount): the LTV and LTV:CAC entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json), citing Skok's forEntrepreneurs coverage (https://www.forentrepreneurs.com/saas-metrics-2/), including the note that Skok is the popularizer, not the originator.
- The CAC side of the ratio and the term-collision warning: see `cac.md`.
