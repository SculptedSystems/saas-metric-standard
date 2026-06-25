---
metric: MRR / ARR movement bridge
abbrev: movement
aka: [revenue bridge, recurring-revenue waterfall, MRR walk, ARR walk]
contested: true
gear: 2
authority: standards-board
---

# MRR / ARR movement bridge (the waterfall)

## One-liner

The period-over-period bridge that reconciles beginning recurring revenue to ending recurring revenue through its movement terms: Beginning + New + Expansion - Contraction - Churn (and the open reactivation question) = Ending. This is the spine that NRR, GRR, and revenue churn all decompose from.

## Why it diverges

The individual movement components are Board-defined (New Name ARR, Expansion CARR, Contraction or Down-Sell MRR, Churned MRR are the standards-board terms NRR and GRR are built on). What is consensus arithmetic, not a codified standard, is the bridge identity that sums them: no authority publishes "Beginning + New + Expansion - Contraction - Churn = Ending" as a named formula, but it is the accounting that every retention metric assumes. The divergence is therefore not in the spine but at its joints. It diverges on composition, the one free-computable axis: where the line falls between a contraction (a retained account that shrank) and a churn (a lost account), whether reactivation or resurrection is a fifth category or folded into New, and whether the bridge is run on revenue (dollar movement) or on logos (count movement), which are different waterfalls over the same book.

## The three axes (per the movement bridge)

- **composition** (free-computable): the five-or-six movement buckets and what falls in each. New (new-logo recurring revenue), Expansion (upsell or cross-sell within retained accounts), Contraction or Down-Sell (a downgrade within a retained account), Churn (a fully lost account). The unsettled sub-questions: the contraction-vs-churn boundary (when a downgrade becomes a loss); whether reactivation (a previously churned account returning) is a distinct term or counted as New; and logo movement vs revenue movement, which are separate bridges. The settled part is that New, Expansion, Contraction, and Churn are the four Board-defined terms and that they sum to the net change.
- **basis**: ARR vs MRR vs implied-monthly, inherited by whichever retention metric reads off the bridge. The same recurring-vs-other basis question as NRR and GRR.
- **timing**: the period of the bridge (monthly walk vs quarterly vs annual cohort) and whether the terms are point-in-time deltas or averaged, again inherited by the retention metric built on it.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Four-term revenue bridge | composition | Beginning + New + Expansion - Contraction - Churn = Ending, on a recurring-revenue basis | standards-board components (New Name ARR, Expansion CARR, Contraction / Down-Sell MRR, Churned MRR) summed as consensus arithmetic | the defensible default |
| Five-term bridge with reactivation | composition | the four terms plus a separate Reactivation / Resurrection term for returning churned accounts | common operator practice (uncodified) | isolates win-back; raises Expansion or New if folded in instead |
| Logo movement bridge | composition | the same walk on customer counts, not dollars | inverse of standards-board logo retention | answers a different question; a count waterfall, not the revenue one |
| GRR-only sub-bridge | composition | Beginning - Contraction - Churn = retained base, expansion term dropped | standards-board GRR formula method | the no-expansion slice that GRR reads from |

## What the investor likely recomputes on

Hypothesis, not direct evidence: an investor recomputes the four-term revenue bridge on the same recurring-revenue basis they use for NRR and GRR, reads NRR off (Beginning + Expansion - Contraction - Churn) / Beginning and GRR off (Beginning - Contraction - Churn) / Beginning, and is skeptical of a bridge that nets reactivation into Expansion or that cannot separate contraction from churn. Validate per founder via the debrief loop.

## The defensible read

Lead with the four-term bridge on the same basis as the paired NRR and GRR, and state the contraction-vs-churn rule and the reactivation treatment out loud rather than letting them sit inside an aggregate. The aggressive move to avoid is a bridge that folds reactivation or one-time revenue into Expansion, or that books a deep downgrade as contraction rather than churn, both of which flatter retention read off the bridge. Principle: defensibility, not optimization.

## Classic errors touching the movement bridge

- **gross-vs-net churn confusion**: the bridge is exactly where it lives; netting Expansion against Churn and Contraction before reporting hides the gross terms. The four-term bridge surfaces them. See `classic-errors.md`.
- **one-time-in-MRR**: a setup or services fee booked into New or Expansion inflates the bridge and every retention metric read from it. See `classic-errors.md`.
- a deep down-sell booked as contraction rather than churn (or vice versa): moves the Contraction and Churn terms without changing the total, but changes GRR and the contraction-vs-churn read.

## Free / paid boundary

FREE (from the founder's stated movement aggregates): naming the bridge terms, confirming the four-term identity reconciles, and reading NRR and GRR off the stated New, Expansion, Contraction, and Churn figures. The bridge is computable from the founder's stated movement aggregates. NAMED BUT NOT COMPUTED (the paid Cast): the true contraction-vs-churn split, the reactivation classification, and logo-vs-revenue movement, all of which need customer-level deltas, not the aggregates (the recognize-vs-recompute line per the README). Stating the boundary is the authority move (DR-0026).

## Citations (REFERENCE, not recall)

- The Board-defined components (New Name ARR, Expansion CARR, Contraction / Down-Sell MRR, Churned MRR) and the NRR and GRR formula methods that sum them: see the New CAC Ratio (New Name ARR), Expansion CAC Ratio (Expansion CARR), and Gross Revenue Retention entries in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json), and the NRR and GRR formula methods in [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
- The bridge identity itself is consensus arithmetic, not a codified standard: no authority publishes the summed "Beginning + New + Expansion - Contraction - Churn = Ending" formula; it is the accounting the Board components assume.
- The retention metrics that decompose from the bridge: see `nrr.md`, `grr.md`, and `churn.md`.

## Card-derivation notes

- RECALL: the contested flag, the four-term identity (Beginning + New + Expansion - Contraction - Churn = Ending), that the components are Board-defined but the summed bridge is consensus arithmetic, that NRR and GRR read off the same bridge (NRR keeps Expansion, GRR drops it), the contraction-vs-churn boundary as the live divergence, reactivation as the open fifth-term question, logo-vs-revenue as two bridges, the free/paid boundary.
- CONTRAST card needed: NRR vs GRR as two reads off one bridge (expansion in vs out); revenue bridge vs logo bridge.
- REWORK card needed: "the movement bridge is a standards-board formula" must be reworked (the components are Board-defined; the summed identity is consensus arithmetic).
- REFERENCE only: the exact Board component wording, the per-founder bucket figures and split.
