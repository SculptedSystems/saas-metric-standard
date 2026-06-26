# The SaaS Metric Standard: definitions

The neutral, single-source definitions at the core of The SaaS Metric Standard. This is the standard's substance (the definitions), not implementation.

**Substantiation principle:** every definition ships with its cited primary authority and a public methodology. The taxonomy names one defensible answer per metric, the divergence map shows where the authorities differ, and the evidence layer carries the proof (each convention cites its primary authority in `evidence/canonical-verified.json`). Nothing rests on assertion.

This standard codifies the cited authorities (the SaaS Metrics Standards Board, SEC 10-K filers, the originators of coined metrics), like a working group maintaining a spec. It does not issue the definitions itself; it records, cites, and reconciles them.

## Three layers (kept separate by design)

| Layer | Dir | Role |
|---|---|---|
| **Taxonomy** | [`taxonomy/`](taxonomy/) | Our one opinionated, vendor-neutral answer: how we define each metric. The canonical record. |
| **Divergence** | [`divergence/`](divergence/) | Where the authorities actually differ (the cheatsheet). A map across external conventions. |
| **Evidence** | [`evidence/`](evidence/) | The primary proof: the SEC 10-K dataset of verbatim definitions, plus the reproducible pull/analyze scripts. |

Citation is one-way and fixed: the **taxonomy stands alone** (it does not depend on the divergence map); **divergence cites taxonomy** ("our position") and **cites evidence** (the proof). Never the reverse, so "which is canonical" is never ambiguous.

## Drift contract: one definition, referenced not copied

Every metric has exactly one canonical definition. Downstream consumers cite it; they never restate it. This extends the no-duplication discipline (cite, do not copy) to the definitions.

Consumers reference the taxonomy rather than copying it, and each documents which taxonomy *version* it implements; nothing imports these files as a build artifact.

## Structure now, records later

This directory establishes the **structure** (the three layers) now, so a future versioned library extracts as a clean lift. It is deliberately **doc-only today**: no per-metric structured records, no `equation_latex`/golden-fixtures/SQL, no semver machinery. Populating the library schema before there is a consumer that pulls it through would be a premature-DRY trap.
