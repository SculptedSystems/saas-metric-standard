---
metric: Burn Multiple
abbrev: Burn Multiple
aka: [burn efficiency]
contested: true
gear: 2
authority: origin-author
diverges_on: [composition]
---

# Burn Multiple

## One-liner

A capital-efficiency ratio, net burn divided by net new ARR (lower is better), with no enforced or codified definition and only an origin author (David Sacks / Craft Ventures) as authority.

## Why it diverges

The burn multiple has no codified standards-board definition; the only authority is the origin post, so it should be named as a convention. The ratio shape is fixed by the origin (net burn over net new ARR, deliberately inverted from Bessemer's Efficiency Score, which is net new ARR over net burn). The real divergence is on the composition axis: "net burn" itself is under-specified in the origin, so it must be defined explicitly (what cash outflows are netted against what inflows, and whether one-time items are in).

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Burn multiple (origin) | composition | net burn / net new ARR; lower is better | origin, David Sacks / Craft Ventures | the origin-author default |
| Bessemer Efficiency Score (inverse) | composition | net new ARR / net burn; higher is better | Bessemer (named in the origin) | the reciprocal; same information, inverted direction |
| Net-burn definition variants | composition | differ in what cash flows net into "net burn" | under-specified by the origin | must be defined explicitly |

## What the investor likely recomputes on

A reader takes the burn multiple as a capital-efficiency tier (the origin post gives a five-tier benchmark, lower being better) and cares most that net burn is defined consistently. A bare ratio with an undefined net-burn numerator gets discounted. The ratio shape is settled; the net-burn definition is bounded by the origin, not fixed by it, since the origin under-specifies it. Name the net-burn definition against real numbers rather than assume one.

## The defensible read

Name it as a convention with a Craft Ventures origin, define net burn explicitly before quoting the ratio, and state that lower is better and that it is the inverse of Bessemer's Efficiency Score (so the direction is not confused). The aggressive move to avoid is a flattering, undefined net-burn numerator. Principle: defensibility, not optimization.

## The three axes (per Burn Multiple)

Burn Multiple diverges on composition, specifically the definition of net burn. The ratio shape (net burn over net new ARR, lower better) is settled, but net burn is not, and that is the live divergence. On basis, the denominator is net new ARR (the origin uses ARR, not GAAP revenue) while the numerator is a cash measure, so the metric mixes a cash basis over an ARR basis by design. Timing is per-period (typically quarterly or annual) net burn against the net new ARR added in the same period.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching Burn Multiple

No entry in `classic-errors.md` maps directly. The live errors are treating an uncodified convention as a standard, quoting it with an undefined net burn, and confusing its direction with the Bessemer Efficiency Score (which runs the opposite way).

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): flagging that the metric is a convention, naming the net-burn definition the founder used, and catching the direction confusion with the Efficiency Score. OUT OF SCOPE (named but not computed): reconstructing net burn and net new ARR from source financials. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Origin definition (net burn / net new ARR), the Bessemer inverse, the under-specified net burn, and the five-tier benchmark: the Burn Multiple entry in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json), citing the Craft Ventures origin post (https://medium.com/craft-ventures/the-burn-multiple-51a7e43cb200). Benchmark thresholds live in the origin post.
