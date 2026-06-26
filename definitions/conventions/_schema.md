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

`working-consensus` is the uncodified tier: no SEC, standards-board, or origin authority. Entries at this tier are REFERENCE-only, never receive a defensible-number or Map verdict, and stay out of the Anki RECALL set.

## Sections (in order)

- **One-liner**: one plain sentence, what it measures, and the settled core if any.
- **Why it diverges**: which of the three axes (composition, basis, timing) drive divergence for this metric, and why the divergence is legitimate, not error.
- **The three axes (per this metric)**: composition (what is or is not in the number; the free-computable axis), basis (ARR vs revenue vs implied-MRR vs contracted), timing (point-in-time vs cohort vs average vs year-over-year).
- **Legitimate convention families**: a table of family name, axis, short method, representative filer (cited to the evidence doc), direction vs the defensible read.
- **What the investor likely recomputes on**: the peer-set convention, stated as a hypothesis (public filers are a proxy for the early-stage investor, not direct evidence).
- **The defensible read**: which convention to lead with and why; the aggressive one to footnote as the labeled risk.
- **Classic errors touching this metric**: named errors from `classic-errors.md` and how they distort this metric.
- **Free / paid boundary**: what is computed free (composition, from the aggregates) vs named-but-not-computed (basis, timing; the paid Cast), per DR-0026.
- **Citations (REFERENCE, not recall)**: verbatim filer quotes and SEC URLs, standards-board formula. All pointers into the cheatsheet and canonical definitions.
- **Card-derivation notes**: which fields become RECALL cards, which stay REFERENCE, and any contrast or rework cards needed.

## Discipline

- RECALL only if you would be caught flat-footed needing it live with no time to look it up: the lens you bring to every founder. If it changes per founder or per filing, it is REFERENCE.
- Never write a card that asserts a contested convention as settled. Verbatim quotes stay REFERENCE; cards teach that the metric is contested and which axis diverges, not a memorized number.
