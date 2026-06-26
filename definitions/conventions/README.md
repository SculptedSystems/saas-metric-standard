# Conventions library (metrics-fluency teaching decomposition)

The teaching decomposition of the SaaS-metric conventions: one file per metric on a fixed schema (`_schema.md`), structured so a practitioner can hold the conventions cold and so the Anki decks derive from it one-way.

This library does **not** restate the authority. Following the cite-do-not-duplicate discipline, the canonical sources stay canonical and this library cites them:

- **Authority digest:** [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) (the few legitimate conventions, sourced).
- **Verbatim filer citations (named 10-K quotes with SEC URLs):** the per-metric sections of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md).
- **Standards-board + origin-author definitions:** [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).

What this library adds on top of those is the **fluency layer**: the three-axis decomposition (composition, basis, timing), the defensible-read framing, the classic-error mapping, and the card-derivation notes. The verbatim filer quotes live in the cheatsheet and are referenced here, not re-transcribed.

## How to use it

- **Decks derive one-way from here.** When a per-metric entry changes, regenerate the affected cards; never edit a card and back-port to the library. (The deck also carries a shared foundations layer, the three divergence axes, the authority tiers, and the source-data-grain points, which is scaffolding sourced from the cheatsheet, `_schema.md`, and the evidence rather than from a per-metric entry.)
- **Recall vs reference:** the entries mark what is RECALL (goes to Anki, held cold) vs REFERENCE (looked up in prep). The verbatim filer cites are always REFERENCE.
- **The teaching target is divergence-recognition, not formula recall.** Given a founder's stated method, name the axis it diverges on and the defensible convention an investor recomputes against. Do not teach any contested convention as settled.
- **The scope boundary is recognize-vs-reconstruct, not composition-vs-basis.** From a founder's stated aggregates you can compute and name the metric (including their stated expansion, contraction, and churn split), but you cannot verify that split. Verifying composition from raw sources, and computing the basis and timing conventions that aggregates cannot, requires the per-axis reconstruction from raw client source systems, which is out of scope for this standard. So composition is what the aggregates let you compute and name, basis and timing need raw data, and even the stated composition is verified only against raw sources.

## Files

- `_schema.md`: the fixed per-metric schema.
- `nrr.md`, `arr.md`: the gear-1 floor metrics.
- `classic-errors.md`: the five named classic errors.
- `rev-rec.md`: revenue recognition (the four money-states, deferred revenue, the GAAP boundary, and the ASC 606 recognition model), backed by the Big-4-grounded [ASC 606 substrate](../evidence/rev-rec-substrate.md).
- The build-phase metrics, now written: `grr.md`, `churn.md`, `cac.md` (CAC, the CAC ratio, and CAC payback), `gross-margin.md` (the codified Subscription Gross Margin % dependency the CAC-payback formula divides by), `rule-of-40.md`, `magic-number.md`, `burn-multiple.md`, `ltv.md` (LTV and LTV:CAC), `mrr-movement.md` (the MRR/ARR movement bridge that NRR, GRR, and churn decompose from), `quick-ratio.md` (the SaaS quick ratio).
- Quarantined working-consensus crib list (sibling to this directory, REFERENCE-only, never a defensible-number verdict): [`../operator-context.md`](../operator-context.md).

## Evidence tiers

Grounding strength varies by metric; each entry's `authority` field marks its tier. ARR, NRR, and GRR rest on the SaaS Metrics Standards Board codified definitions plus the verbatim, named filer citations (real 10-K quotes with SEC URLs) in the cheatsheet, both firm and classifier-independent; the rest rest on the SaaS Metrics Standards Board (codified) or the origin author (magic number, burn multiple, LTV:CAC). Read their divergence as documented convention variance (for example FCF vs EBITDA in the Rule of 40) and, for ARR/NRR/GRR, as the concrete divergence between named filers. An earlier LLM-classified distribution of public filers was set aside as not firm enough to ship; the divergence claim here leads with the named-peer examples instead.
