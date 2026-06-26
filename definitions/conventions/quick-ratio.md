---
metric: SaaS Quick Ratio
abbrev: quick-ratio
aka: [SaaS quick ratio, growth efficiency ratio]
contested: true
gear: 2
authority: origin-author
---

# SaaS Quick Ratio

## One-liner

A growth-efficiency ratio comparing recurring revenue gained to recurring revenue lost in a period: (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR), coined by Mamoon Hamid (Social Capital) and named as a convention, not a standard, on a call.

## Why it diverges

The SaaS quick ratio has no SEC-disclosed or standards-board definition. The only authority is the origin author, Mamoon Hamid, who coined it while at Social Capital, so on a call it must be named as a convention. Within that origin definition the divergence is on the basis axis (MRR, the original form, vs an ARR restatement) and, because the ratio's four inputs are the movement-bridge terms, it inherits the bridge's contraction-vs-churn boundary: whatever moves a dollar between the Contraction and Churn buckets moves it within the denominator but does not change the ratio, while the New-vs-reactivation question can move the numerator. Hamid's ">= 4 is investable" rule of thumb is his hypothesis, not a standard; keep it reference-only and never assert a cutoff cold.

## The three axes (per the quick ratio)

- **composition** (free-computable): the ratio shape, recurring revenue gained (New + Expansion) over recurring revenue lost (Churned + Contraction), the four movement-bridge terms. The shape is settled by the origin. The unsettled sub-question is inherited from the bridge: the contraction-vs-churn boundary (which only redistributes within the denominator) and whether reactivation belongs in the New term of the numerator.
- **basis**: MRR (the origin form) vs an ARR restatement. This is the divergence axis; the same recurring-basis question as NRR and GRR, here applied to the four movement terms.
- **timing**: the period the four terms are summed over (typically a quarter or a month), inherited from whatever period the movement bridge is run on.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| MRR-basis quick ratio (origin) | basis | (New MRR + Expansion MRR) / (Churned MRR + Contraction MRR) | origin, Mamoon Hamid / Social Capital | the origin-author default |
| ARR-basis restatement | basis | the same four terms expressed on annualized recurring revenue | common practice (uncodified) | same ratio if the terms are consistent; depends on the basis matching the bridge |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an investor treats the quick ratio as a rough growth-efficiency signal (higher means growth is outrunning losses) and is indifferent to the MRR-vs-ARR basis as long as it is stated and the four terms are consistent, but will discount a number whose New, Expansion, Contraction, and Churn terms are not defined, and will not take Hamid's >= 4 cutoff as a pass-fail line. Validate per founder via the debrief loop.

## The defensible read

Name it as a convention with a Mamoon Hamid / Social Capital origin, state the four movement-bridge terms and the basis (MRR or ARR), and report the ratio without leaning on a benchmark cutoff. The aggressive move to avoid is presenting the quick ratio as a standard, or quoting Hamid's ">= 4" as if it were a codified threshold rather than his hypothesis (the same discipline as the magic-number and burn-multiple benchmarks). Principle: defensibility, not optimization.

## Classic errors touching the quick ratio

- No entry in `classic-errors.md` maps directly. The live errors are treating an uncodified convention as a standard, asserting the >= 4 cutoff cold, and inheriting the **gross-vs-net churn** confusion through a mis-split denominator (folding contraction into churn or vice versa).
- **one-time-in-MRR** inflating the New or Expansion numerator, which flatters the ratio. See `classic-errors.md`.

## Scope boundary

IN SCOPE (from the founder's stated movement aggregates and the stated method): naming the four terms and the basis, computing the ratio from the stated New, Expansion, Churned, and Contraction figures, and flagging that the metric is a convention and the >= 4 cutoff a hypothesis. OUT OF SCOPE (named but not computed): the true contraction-vs-churn split inside the denominator and the reactivation classification in the numerator, which need customer-level deltas (the recognize-vs-reconstruct line per the README). Stating this boundary out loud is the authority move.

## Citations (REFERENCE, not recall)

- Origin attribution (Mamoon Hamid, Social Capital) and the formula: forEntrepreneurs and SaaStr coverage attributing the metric to Hamid. Cite as origin-author. This attribution rests on secondary coverage and is not yet frozen in `canonical-definitions.json` like the other coined metrics (magic number, burn multiple); harden via `canonical-pull.js` when a primary Hamid/Social Capital source is pinned.
- The four inputs as the movement-bridge terms: see `mrr-movement.md`; the Board-defined components behind them in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).
- Hamid's ">= 4 is investable" is his hypothesis, kept reference-only, never asserted as a standard (the same discipline as the magic-number and burn-multiple benchmarks).

## Card-derivation notes

- RECALL: the contested flag, that it has no codified definition (origin-author only, Mamoon Hamid / Social Capital), the ratio shape (gained over lost: (New + Expansion) / (Churned + Contraction)), the MRR-vs-ARR basis divergence, that the four inputs are the movement-bridge terms and so inherit the contraction-vs-churn boundary, that it must be named as a convention on a call, and that the >= 4 cutoff is a hypothesis not a standard.
- CONTRAST card needed: quick ratio (gained-over-lost ratio) vs the NRR / GRR reads off the same four bridge terms.
- REWORK card needed: "a quick ratio of 4 means the company is investable" must be reworked (that cutoff is Hamid's hypothesis, not a standard).
- REFERENCE only: the exact Hamid / Social Capital wording, the >= 4 benchmark, per-founder figures.
