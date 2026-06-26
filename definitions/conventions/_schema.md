# Conventions library: per-metric schema

Every metric file uses this fixed shape so the Anki decks can derive from it one-way. Frontmatter, then a single H1 (the metric name), then the sections below in order.

## Frontmatter fields

```yaml
metric: <full name>
abbrev: <short>
aka: [<alias>, ...]
contested: true | false        # is the core definition itself contested?
gear: 1 | 2                    # Gear-1 floor metric, or build-phase
authority: cheatsheet | standards-board | origin-author | working-consensus
```

`working-consensus` is the uncodified tier: no SEC, standards-board, or origin authority. Entries at this tier are REFERENCE-only, never receive a defensible-number verdict, and stay out of the Anki RECALL set.

## Sections (in order)

- **One-liner**: one plain sentence, what it measures, and the settled core if any.
- **Why it diverges**: which of the three axes (composition, basis, timing) drive divergence for this metric, and why the divergence is legitimate, not error.
- **The three axes (per this metric)**: composition (what is or is not in the number; the free-computable axis), basis (ARR vs revenue vs implied-MRR vs contracted), timing (point-in-time vs cohort vs average vs year-over-year).
- **Legitimate convention families**: a table of family name, axis, short method, representative filer (cited to the evidence doc), direction vs the defensible read.
- **What the investor likely recomputes on**: the peer-set convention, stated as a hypothesis (public filers are a proxy for the early-stage investor, not direct evidence).
- **The defensible read**: which convention to lead with and why; the aggressive one to footnote as the labeled risk.
- **Canonical formula**: the formula in LaTeX with a named-input table. The table has one row per input and the columns: input, source-system class (the kind of system the value comes from, e.g. billing, GL, CRM, data warehouse), and timing-offset (the period-offset or timing-lag rule, e.g. as-of period end, 12 months prior, trailing-twelve-month). Cite the PRIMARY source for the formula (the standards-board codified method or the origin author recorded in `../evidence/canonical-verified.json`), not the cheatsheet; the cheatsheet is the downstream divergence digest and may be named as a rendering convenience but is not the authority. Do not invent one.
- **Reconciliation note**: the composition-closed, basis/timing-bounded statement. Only the composition axis closes to a zero residual (the axis computable from aggregates); basis and timing interact non-additively and need raw data, so they are reconciled as bounded and qualitative (name the convention used vs the defensible one, bound direction and magnitude). The per-axis reconstruction from the client's raw source systems is out of scope for this standard.
- **Aggressive-vs-defect test**: the predicate that classifies a spread. Reproduces only under an aggressive but legitimate convention (an authority-traceable filer uses it) is a convention gap; no legitimate convention reproduces it is a defect gap. State the metric-specific defensible basis, the aggressive-but-legitimate alternatives, and the no-legitimate-convention case.
- **Classic errors touching this metric**: named errors from `classic-errors.md` and how they distort this metric.
- **Scope boundary**: what is computable from the aggregates (composition) vs named-but-not-computed (basis, timing). The in-scope side is recognition from the reported aggregates; the named-but-not-computed reconstruction from the client's raw source systems is out of scope for this standard.
- **Citations (REFERENCE, not recall)**: verbatim filer quotes and SEC URLs, standards-board formula. All pointers into the cheatsheet and canonical definitions.
- **Card-derivation notes**: which fields become RECALL cards, which stay REFERENCE, and any contrast or rework cards needed.

## Operational layer scope (the gear field)

The three operational sections (Canonical formula, Reconciliation note, Aggressive-vs-defect test) are provided for **Gear-1** conventions, the raise-critical floor set reconciled in a pre-raise review. **Gear-2** (build-phase) conventions carry the teaching sections (One-liner through The defensible read, plus Classic errors and Citations) and gain the operational layer when a real engagement pulls them through. This is a deliberate scope, not an omission: operational depth is added on demand, not pre-built for metrics no one is reconciling yet.

## Discipline

- RECALL only if you would be caught flat-footed needing it live with no time to look it up: the lens you bring to every founder. If it changes per founder or per filing, it is REFERENCE.
- Never write a card that asserts a contested convention as settled. Verbatim quotes stay REFERENCE; cards teach that the metric is contested and which axis diverges, not a memorized number.
