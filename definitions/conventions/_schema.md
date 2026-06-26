# Conventions library: per-metric schema

Every metric file uses this fixed shape: frontmatter, then a single H1 (the metric name), then the sections below in order.

## Frontmatter fields

```yaml
metric: <full name>
abbrev: <short>
aka: [<alias>, ...]
contested: true | false        # is the core definition itself contested?
gear: 1 | 2                    # Gear-1 floor metric, or build-phase
authority: standards-board | origin-author | working-consensus
filer_evidence: [<filer>, ...]   # named public-company filers with verbatim 10-K quotes in Citations; empty list if none
```

`working-consensus` is the uncodified tier: no SEC, standards-board, or origin authority. Entries at this tier never receive a defensible-number verdict.

## Sections (in order)

- **One-liner**: one plain sentence, what it measures, and the settled core if any.
- **Why it diverges**: which of the three axes (composition, basis, timing) drive divergence for this metric, and why the divergence is legitimate, not error.
- **Legitimate convention families**: a table of family name, axis, short method, representative filer (cited to the evidence doc), direction vs the defensible read.
- **What the investor likely recomputes on**: the convention read off the public record. Name the basis, timing, and cohort the public filers settle on, and state plainly that the standard treats those late-stage filers as a proxy for the convention an early-stage investor carries. This is read off the filings and described, not predicted.
- **The defensible read**: the two-tier read. Tier one is the standard's default, the convention the founder's number is measured against when no specific investor convention is known. Tier two is the investor's own convention, which governs when it is known. State the aggressive convention to footnote as the labeled risk under either anchor.
- **Aggressive-vs-defect test**: the predicate that classifies a spread. Reproduces only under an aggressive but legitimate convention (an authority-traceable filer uses it) is a convention gap; no legitimate convention reproduces it is a defect gap. State the metric-specific defensible basis, the aggressive-but-legitimate alternatives, and the no-legitimate-convention case.
- **Canonical formula**: the formula in LaTeX with a named-input table. The table has one row per input and the columns: input, source-system class (the kind of system the value comes from, e.g. billing, GL, CRM, data warehouse), and timing-offset (the period-offset or timing-lag rule, e.g. as-of period end, 12 months prior, trailing-twelve-month). Cite the PRIMARY source for the formula: the standards-board codified method or the origin author recorded in `../evidence/canonical-verified.json`. Do not invent one.
- **Reconciliation note**: the composition-closed, basis/timing-bounded statement. Only the composition axis closes to a zero residual (the axis computable from aggregates); basis and timing interact non-additively and need raw data, so they are reconciled as bounded and qualitative (name the convention used vs the defensible one, bound direction and magnitude). The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.
- **The three axes (per this metric)**: a short metric-specific note naming which axis or axes (composition, basis, timing) drive this metric's divergence, with the metric-specific detail, then a link to the shared [`../divergence/axes.md`](../divergence/axes.md) explainer for the canonical definitions of the three axes. Do not restate the generic axis definitions here.
- **Classic errors touching this metric**: named errors from `classic-errors.md` and how they distort this metric.
- **Scope boundary**: what is computable from the aggregates (composition) vs named-but-not-computed (basis, timing). The in-scope side is recognition from the reported aggregates; the per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.
- **Citations**: verbatim filer quotes and SEC URLs, standards-board formula. The verbatim 10-K quotes live inline here; the codified formula points into the canonical definitions.

## Operational layer scope

The three operational sections (Canonical formula, Reconciliation note, Aggressive-vs-defect test) are provided for the **raise-critical reconcilable set** the standard's reconciliation method covers: ARR, NRR, GRR, CAC (ratio and payback), logo retention/churn, magic number, and gross margin. The remaining conventions carry the reference sections (One-liner through The defensible read, plus Classic errors and Citations) and gain the operational layer when a reconciliation needs them. This is a deliberate scope, not an omission: operational depth is added on demand, not pre-built for metrics no one is reconciling yet. (The `gear` field is a separate axis, gear-1 foundational versus gear-2 build-phase; rev-rec, for example, is gear-1 foundational context but not a formula-reconcilable metric, so it carries the reference layer.)

## Discipline

- Never assert a contested convention as settled. Verbatim filer quotes stay in the Citations section; the prose teaches that the metric is contested and which axis diverges, not a settled number.
