# Definitions

The canonical home for what Sculpted means by each metric. This is portfolio context (the product definition), not implementation. Per [DR-0017](../../../decisions/0017-metric-definitions-single-source-of-truth.md) and [DR-0021](../../../decisions/0021-strategy-is-the-single-source-of-direction.md).

## Three layers (kept separate by design)

| Layer | Dir | Role |
|---|---|---|
| **Taxonomy** | [`taxonomy/`](taxonomy/) | Our one opinionated, vendor-neutral answer: how we define each metric. The canonical record. |
| **Divergence** | [`divergence/`](divergence/) | Where the authorities actually differ (the cheatsheet). A map across external conventions. |
| **Evidence** | [`evidence/`](evidence/) | The primary proof: the SEC 10-K dataset of verbatim definitions, plus the reproducible pull/analyze scripts. |

Citation is one-way and fixed: the **taxonomy stands alone** (it does not depend on the divergence map); **divergence cites taxonomy** ("our position") and **cites evidence** (the proof). Never the reverse, so "which is canonical" is never ambiguous.

## Drift contract: one definition, referenced not copied

Every metric has exactly one canonical definition. Downstream consumers cite it; they never restate it. This extends the repo's annotations-as-pointers / no-duplication discipline (DR-0021) to the definitions.

**Consumers** (today, by reference, not import):

- `saas-data-stack` (the dbt models implement the taxonomy).
- `divmap` (the rung-0 renderer compiles conventions from it; planned).

Each consumer documents which taxonomy *version* it implements; nothing imports these files as a build artifact.

## Structure now, records later (per DR-0017)

This directory establishes the **structure** (the three layers) now, so the eventual `metric-conventions` versioned library extracts as a clean lift. It is deliberately **doc-only today**: no per-metric structured records, no `equation_latex`/golden-fixtures/SQL, no semver machinery. DR-0017 says build the library only when the first paid Metrics Cast pulls it through; populating the library schema now would be the premature-DRY trap that DR's own falsifier names.

When the extraction trigger fires (the first paid Cast plus enough overlap between divmap and the dbt models to justify a shared artifact), lift this directory into a standalone semver'd `metric-conventions` repo; consumers swap their path reference for a pinned versioned dependency. The internal paths stay stable so citations do not churn.

## Provenance

The taxonomy was moved here from `saas-data-stack/docs/taxonomy/`; the cheatsheet from `gtm/`; the SEC dataset and scripts from `research/`. Each left a pointer at its old home.
