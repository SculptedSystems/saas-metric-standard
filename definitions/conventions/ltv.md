---
metric: Lifetime Value
abbrev: LTV
aka: [CLV, LTV:CAC]
contested: true
gear: 2
authority: origin-author
---

# Lifetime Value (LTV) and LTV:CAC

## One-liner

The gross-profit value of a customer over their expected lifetime (LTV), and the LTV-to-CAC ratio with its "at least 3x" rule of thumb, both popularizer conventions (David Skok), not standards: no SEC or standards-board definition exists.

## Why it diverges

There is no codified LTV or LTV:CAC definition; Skok popularized the gross-margin-adjusted LTV and the "greater than 3x, sometimes 7-8x" ratio, so both must be named as conventions, not standards. The "3x rule" in particular is a heuristic, not a settled threshold. LTV itself diverges on the basis axis through the assumptions baked into the popularized formula: a gross-margin-adjusted ARPA, a simple lifetime of one over churn, and no discount rate. Change the churn input or add a discount rate and the same customer book yields a materially different LTV, which then moves the ratio.

## The three axes (per LTV / LTV:CAC)

- **composition** (free-computable): the gross-margin adjustment (LTV is gross-profit, not revenue, based), and that the ratio compares LTV to CAC. The popularized form folds gross margin in.
- **basis**: the churn rate used (which churn, on which basis) and whether a discount rate is applied. The popularized formula uses monthly churn and a simple one-over-churn lifetime with no discounting; both are contestable inputs and the main source of divergence.
- **timing**: the lifetime horizon implied by one over churn (an infinite-geometric expected life) vs a finite-horizon or discounted-cash-flow view.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Popularized LTV (Skok) | composition + basis | (ARPA x gross margin) / monthly churn | popularizer, David Skok | the common convention; gross-margin-adjusted, undiscounted |
| Discounted LTV | basis + timing | gross-profit cash flows discounted at a rate over the expected life | finance practice (no codified SaaS form) | lower than the undiscounted form; more conservative |
| LTV:CAC heuristic ("3x") | composition | LTV / CAC, with a rule of thumb of at least 3x (sometimes 7-8x) | popularizer, David Skok | a convention, not a standard; not a settled threshold |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an investor treats LTV:CAC as a directional sanity check (roughly 3x as "healthy," well below as a flag), is skeptical of an LTV built on an optimistic churn input or no discount, and cares that the churn basis and gross margin are stated. The 3x is a yardstick, not a target to optimize to. Validate per founder via the debrief loop.

## The defensible read

Name LTV and LTV:CAC as conventions (popularizer, Skok), state the churn input and whether the LTV is discounted, and treat 3x as a heuristic, not a pass/fail line. The aggressive moves to avoid: an LTV inflated by an understated churn rate or a revenue (not gross-profit) base, and presenting "3x" as a standard. Principle: defensibility, not optimization.

## Classic errors touching LTV

- the CAC-ratio / LTV-CAC term collision (cross-reference `cac.md`): some sources call LTV/CAC the "CAC ratio," which runs the opposite direction from the codified S&M-per-dollar-of-ARR CAC ratio; always state which.
- a revenue-based rather than gross-margin-adjusted LTV, which overstates value.
- an LTV built on net (expansion-flattered) or understated churn, which inflates the implied lifetime.

## Free / paid boundary

FREE (from the reported aggregates and the stated method): naming LTV and the 3x rule as conventions, confirming the gross-margin adjustment, and surfacing the churn and discount assumptions in the stated method. NAMED BUT NOT COMPUTED (the paid Cast): reconstructing ARPA, the churn input, and a discounted lifetime from customer-level data. Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- Popularized LTV formula, the "greater than 3x" rule of thumb, the no-SEC/no-standards-board status, and the baked-in assumptions (gross-margin-adjusted, one-over-churn lifetime, no discount): see the LTV and LTV:CAC section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the LTV and LTV:CAC entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json), including the note that Skok is the popularizer, not the originator.
- The CAC side of the ratio and the term-collision warning: see `cac.md`.

## Card-derivation notes

- RECALL: the contested flag, that LTV and LTV:CAC are conventions, not standards (popularizer, Skok), the gross-margin-adjusted LTV form, the assumptions baked in (one-over-churn lifetime, no discount), the 3x as a heuristic not a threshold, and the CAC-ratio term collision.
- CONTRAST card needed: undiscounted popularized LTV vs discounted LTV; LTV:CAC (this ratio) vs the codified CAC ratio (opposite direction).
- REWORK card needed: "LTV:CAC of 3x is the standard" must be reworked (it is a popularizer heuristic, with no SEC or standards-board definition).
- REFERENCE only: the exact Skok wording, the 7-8x upper band, per-founder churn and ARPA inputs.
