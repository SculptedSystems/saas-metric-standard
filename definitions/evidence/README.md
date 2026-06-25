# SEC metric-definition evidence

How public 10-K filers actually define their retention metrics, extracted from
primary SEC filings. Backs the [definition divergence cheatsheet](../divergence/cheatsheet.md).

The point of the dataset is to show, from primary sources, that there is no
enforced standard for NRR/NDR: conventions diverge on named axes, a measurable
share of filers disclose a number without a computable method, and the same
customer book yields materially different rates under different-but-legitimate
conventions.

## Pipeline

Three stages. The LLM output is treated as committed source data, not a live
recompute, so the report regenerates deterministically and every
classification is auditable against the linked filing.

```
sec-pull.js      EDGAR full-text search -> resolve PRIMARY 10-K doc -> extract
                 definition passages                 -> definitions.raw.json (committed)
                                                         filings/ (raw HTML, gitignored)
       |
sec-classify.js  per filing, LLM decomposes the NRR definition along the ratio
                 axes, each field grounded in a verbatim, substring-verified
                 quote                                -> definitions.classified.json (committed)
                                                         classify-cache.json     (committed)
       |
sec-analyze.js   pure tally + render over classified.json -> the .md report
```

## Running it

Requires open network egress to `efts.sec.gov`, `data.sec.gov`,
`www.sec.gov/Archives` (Stage A) and `api.anthropic.com` (Stage B). Some
sandboxed environments block these; run on a host with open egress.

```sh
node sec-pull.js                              # Stage A — minutes; polite EDGAR rate limits
ANTHROPIC_API_KEY=... node sec-classify.js    # Stage B — ~single-digit dollars; cached, resumable
node sec-analyze.js                           # Stage C — regenerates the report
```

`sec-classify.js` is resumable: results are cached by content hash, so a
re-run only calls the API for filings whose passages or prompt changed.
`MODEL`, `SEC_START`, `SEC_END`, and `SEC_UA` are overridable via env.

## Methodology notes (what makes it defensible)

- **Frame, not "all SaaS".** The universe is *10-K filers using recurring-revenue
  retention language in the search window*, reported as a funnel (`frame` in
  the JSON) with N at every step. SIC is recorded per row but is **not** a hard
  filter: a blunt 737x gate drops legitimate subscription businesses that file
  under other codes. Filtering is done by primary-doc sourcing and the LLM's
  `definition_present` check.
- **Primary document only.** Stage A resolves each filing's primary 10-K
  document via the submissions API, not the full-text-search-matched sub-document
  (which is often a clawback/recoupment exhibit that merely mentions ARR).
- **Grounded classification.** Every classified field carries a verbatim quote,
  substring-verified in code (`_quoteCheck`); unverifiable quotes are flagged.
- **Non-disclosure is a finding.** `definition_present:false` (a company that
  reports the metric without stating a method) is reported as a result, not a
  parser miss.
- **Validation.** A stratified sample is independently re-coded and agreement is
  reported per field (Cohen's kappa) before any field's tally is published.

## Canonical-definition layers (Standards Board + origin author)

The SEC layer measures *divergence* across many filers. The other two authority
layers in the [divergence cheatsheet](../divergence/cheatsheet.md) are different:
each gives **one canonical definition** per metric (the SaaS Metrics Standards
Board's codified consensus, and the origin author for coined metrics like the
magic number, burn multiple, and Rule of 40). There is no spread to measure, so
these are not classified or validated; instead they are **frozen and verified**.

```
canonical-definitions.json   seed: {metric, authority, source_url, definition, verify_phrase}  (committed, hand-curated)
       |
canonical-pull.js            fetch each source -> snapshot text to snapshots/ (committed),
                             record content hash + retrieval date, and re-verify the
                             verify_phrase appears verbatim on the live page
       |
canonical-verified.json      freeze record: per source, snapshot file, sha256, date, verified flag  (committed)
```

This gives the single-source layers the same durability and auditability as the
SEC layer: every cited definition is snapshotted (so a dead or silently-edited
link is detected, not trusted), hashed, dated, and verbatim-checked. Run
`node canonical-pull.js` to refresh. Open follow-ups: a coverage map of the full
Standards Board metric set (what is published vs cited), and explicit
verification of contested origin attributions (e.g. Rule of 40).
