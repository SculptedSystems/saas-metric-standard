# Definition Divergence Cheatsheet (B2B SaaS metrics)

## What this is

A per-metric map of how each core SaaS metric is *actually defined* by the sources with a real claim to authority. It shows where those definitions diverge. It asserts nothing of its own.

For each metric you get four things: the primary-filing or codified definition, the spread across sources, the definition the founder's investor likely recomputes on, and where the founder's number lands. (Per [DR-0013](../../../../decisions/0013-authenticity-recalibration-conversations-first.md): the integrity-safe authority anchor for the free Raise Metrics Review. It is also the convention source for the rendered, forwardable Divergence Map, per [DR-0016](../../../../decisions/0016-forwardable-divergence-map.md).)

## Authority basis (read first)

There is no formal standards body for SaaS operating metrics. There is no GAAP/FASB equivalent. ARR, NRR, and the rest are non-GAAP "key business metrics." GAAP/ASC 606 governs only recognized revenue. So this sheet does not treat VC blog posts or tooling vendors as authorities.

It anchors three layers, in priority order:

1. **SEC-disclosed definitions from public comparables.** The *primary-filing* layer. These are non-GAAP operating metrics: the SEC expects a key metric to be defined clearly and consistently (2020 MD&A key-metrics interpretive release) but does not prescribe a standard, so this is the most authoritative *public* evidence, not an enforced definition. It is the comparison set investors benchmark a founder against. Built from verbatim, quote-verified 10-K definitions of named public filers (MariaDB, Backblaze, Autodesk, Asana, DigitalOcean, Bentley, Okta, Cloudflare, ZoomInfo, and others). Used for the metrics filers actually disclose: ARR, NRR, GRR.
2. **SaaS Metrics Standards Board** (saasmetricsboard.com). A voluntary industry coalition's *codified consensus formula*. No enforcement power, but the only deliberate standardization. Used where it publishes a metric.
3. **Origin author.** For a metric coined by one person (magic number, burn multiple, the LTV:CAC 3x convention), the inventor is the authority. This is authorship, not prominence.

What this sheet deliberately excludes as authorities: a16z, Bessemer, ICONIQ, and the like. They are prominent, not primary-filing evidence or codified. KeyBanc's KBCM survey is a benchmark survey with stated definitions. It appears only as a secondary cross-check, never as a top authority.

**A proxy, stated honestly.** The SEC-filer layer is public-company evidence (large, late-stage filers), used as a *proxy* for the conventions a seed or Series A investor recomputes on, not direct evidence of it. An early-stage investor may recompute on simpler conventions than a public filer discloses. Read this sheet as "how the comparison set defines these metrics," and treat the specific basis, timing, and cohort sophistication as a hypothesis to validate against real call data (which fund named which convention), not an established fact about a given founder's investor.

## How to use it on a call

We do not guess which definition the investor uses. We compute the founder's one raise-critical metric under each legitimate convention here, show the spread, and name the number that survives a recompute. Then we hand the founder a short message to get the exact convention from the investor themselves.

Four steps, in order:

1. Name the metric the founder reported, and how they compute it.
2. Compute it under each convention on this sheet, and show the founder the spread.
3. Name the defensible number to lead with, and the aggressive convention to avoid. Lead defensible, footnote the range. "Defensible" is investor-relative (DR-0047): it is the convention the raise is judged against, not the standard's default. Two tiers: a standard-level **fallback** (the generic-defensible default, the anchor when the target is unknown) and an engagement-level **target** (the investor's or peer-set's convention, the anchor when known). When the target is known, anchor and lead on it and footnote the fallback; until then, lead on the fallback.
4. Hand the founder the investor-ask template so they get the convention from the source. This is what promotes a `peer_set_inferred` target to an `investor_stated` one.

The principle is defensibility, not optimization. We never pick the highest number, only the one that survives the investor's recompute, and that warrant is exactly why the anchor is investor-relative: the target convention *is* the one the investor recomputes on, so it, not the standard's default, is what the founder's number must survive. The most aggressive convention is always the labeled risk. `defect_gap` stays absolute: it is a source defect that no target convention can move.

The full on-call flow, deliverable scope, and the investor-ask template live in the [Raise Metrics Review Playbook](../../gtm/raise-metrics-review-playbook.md).

## Relation to our taxonomy

This is the *external* map, where sources disagree. The B2B SaaS Metrics Taxonomy (`saas-data-stack/docs/taxonomy/b2b-saas-metrics.md`) is *our* opinionated single answer. The two are kept separate by design. This sheet is internal and cites the taxonomy one-way.

---

## ARR (Annual Recurring Revenue)

Diverges on: annualized run-rate vs committed/contracted; whether one-time/services are excluded; what counts as "recurring."

$$\text{ARR}=\text{MRR}\times 12 \quad(\text{annualized run-rate})\qquad\text{vs}\qquad \text{ARR}=\text{committed / contracted recurring run-rate}$$

- **Standards Board:** "Annual Recurring Revenue (ARR) is recurring revenue, as defined by your revenue recognition policy, calculated on an annualized basis." Formula: "ARR = (MRR x 12)" (MRR = most recent monthly recurring revenue). [src](https://www.saasmetricsboard.com/annual-recurring-revenue)
- **KBCM survey (benchmark, secondary):** "ARR is defined as committed annual recurring revenue run-rate." (2022 Private SaaS Survey, p.2, in `education/research/downloads/`). Note this is the *committed/CARR* sense, not pure run-rate.
- **SEC filers:** define ARR per company. Backblaze, for example: "We define annual recurring revenue ('ARR') as the annualized value of all ... arrangements as of the end of a period." Public filers consistently exclude one-time/services.

Most likely to mismatch an investor: reporting MRR×12 run-rate when the investor expects committed/contracted ARR, or strips one-time/services creep.

### CARR (Contracted ARR)

$$\text{CARR}=(\text{MRR}\times 12)+\text{contracted-but-not-yet-recognized ARR}$$

- **Standards Board:** "Contracted Annual Recurring Revenue (CARR) is defined as contracted annual recurring revenue, whether in production or not yet in production." [src](https://www.saasmetricsboard.com/contracted-annual-recurring-revenue)

### MRR

Not separately codified. The Standards Board has no MRR page, and public filers report ARR, not MRR. Working consensus is normalized monthly recurring revenue, one-time/services excluded. It is an input to ARR, not an independently standardized metric.

---

## NRR / NDR (Net Revenue / Dollar Retention)

The highest-divergence metric, and the one this sheet is built to win. Recognizable public filers measure it on different bases, in their own filings. Autodesk, Asana, DigitalOcean and Bentley report on a GAAP-revenue basis; Okta, Cloudflare and ZoomInfo on an ACV or annualized basis; MariaDB on a recurring-revenue (ARR) basis. The time-anchor convention (point-in-time vs an average vs year-over-year) is disclosed so inconsistently across these filers that two independent readings of the same disclosure often cannot classify it the same way. That inconsistency is itself part of the divergence. The verbatim quotes, with SEC URLs, are below.

Diverges across the three axes (DR-0026):

1. Composition: cohort membership and restriction (only customers above $X, only a product segment, excluding acquired customers), and what counts in the value.
2. Basis: ARR vs trailing-revenue vs calendar-revenue vs implied-monthly.
3. Timing: point-in-time "as of period end" vs averaged over the year vs the 12-month window framing.

$$\text{NRR}=\frac{\text{BOP value}+\text{Expansion}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\quad(\text{existing customers only; ``value'' = ARR, revenue, or implied-MRR depending on the filer})$$

**Codified consensus, Standards Board** ([src](https://www.saasmetricsboard.com/net-revenue-retention)):

- Cohort method: "MRR at the end of accounting period from the cohort of customers at the beginning of the period / MRR from the customers at the beginning of accounting period"
- Formula method: "(Beginning MRR - Churned MRR + Expansion MRR - Contraction MRR) / Beginning MRR = NRR"

**How real public filers actually define it (verbatim, the spread):**

- *ARR-basis 12-month cohort*, MariaDB: "We calculate our dollar-based net retention rate as of a period end by starting with the ARR from the cohort of all subscription customers as of 12 months prior to such period end." ([10-K](https://www.sec.gov/Archives/edgar/data/1929589/000192958923000010/mrdb-20230930.htm))
- *4-quarter / monthly average*, EverCommerce: "We calculate our annualized net revenue retention rate based on the average of the annualized net revenue retention rate calculated for each month during the twelve-month period as of the most recent quarter end." ([10-K](https://www.sec.gov/Archives/edgar/data/1853145/000185314525000009/evcm-20241231.htm))
- *Trailing-revenue basis, not ARR*, SEMrush: "...using (a) the revenue from our customers during the twelve month period ending one year prior ... as the denominator and (b) the revenue from those same customers during the twelve months ending as of the end of such period as the numerator." ([10-K](https://www.sec.gov/Archives/edgar/data/1831840/000162828025009448/semr-20241231.htm))
- *Calendar-revenue basis, excludes acquired customers*, Q2 Holdings: "...the total revenues in a calendar year, excluding any revenues from acquired customers during such year, from customers who were implemented ... as of December 31 of the prior year, expressed as a percentage of the total revenues during the prior year from the same group of customers." ([10-K](https://www.sec.gov/Archives/edgar/data/1410384/000141038425000010/qtwo-20241231.htm))
- *Segment-restricted cohort*, Brightcove: "...dividing: (a) the current annualized recurring revenue for premium customers that existed twelve months prior by (b) the annualized recurring revenue for all premium customers that existed twelve months prior." ([10-K](https://www.sec.gov/Archives/edgar/data/1313275/000095017024018770/bcov-20231231.htm))
- *Implied-monthly basis*, BlackLine: "...the implied monthly subscription and support revenue at the end of a period for the base set of customers ... divided by the implied monthly subscription and support revenue one year prior ... for that same customer base." ([10-K](https://www.sec.gov/Archives/edgar/data/1666134/000166613425000003/bl-20241231.htm))

Most likely to mismatch an investor: the founder's basis and method (often MRR- or revenue-based, point-in-time) vs the ARR-basis, sometimes-averaged, sometimes-thresholded convention the specific investor recomputes on. Same business, materially different number. It is demonstrable from primary filings.

### Point-in-time / timing test

A shared discriminator on the timing axis, applied by any cohort or as-of metric (NRR, GRR, and any other point-in-time or as-of measure). It sorts a timing-axis spread into a convention gap (legitimate, the labeled risk) versus a defect gap (a source defect, not a convention choice).

The test is the **as-of reconstruction requirement**: can the metric's state be rebuilt as of a past date from retained history? A cohort or as-of metric is anchored to a point in the past (the beginning-of-period cohort, the as-of-period-end value). Computing it correctly requires that the source systems retained enough point-in-time state, or an append-only history from which that state is reconstructable, to rebuild the cohort and its values as they stood on the anchor date.

The **defect criterion**: no retained point-in-time state, and no history from which it can be reconstructed, means the metric cannot be reconstructed as-of. That is a `defect_gap`, a source defect, not a convention choice. It is not that the founder picked an aggressive but legitimate timing; it is that no legitimate timing convention can recover the number, because the underlying state to compute any of them was never retained. Contrast a convention gap, where the state exists and a different but authority-traceable timing convention (a monthly average, a year-over-year framing) reproduces the spread.

This is the load-bearing line between an aggressive-but-legitimate timing choice and a source defect. The conventions reference this test from their aggressive-vs-defect sections; the gap-report deliverable's `defect_gap` status and the Engine's reconstruction apply the same rule.

---

## GRR / GDR (Gross Revenue / Dollar Retention)

Diverges on: basis (ARR vs MRR); cohort vs formula method. It excludes all expansion, the defining contrast with NRR, so GRR ≤ 100% when expansion is correctly excluded (a value above 100% signals leakage or an FX artifact).

$$\text{GRR}=\frac{\text{BOP value}-\text{Contraction}-\text{Churn}}{\text{BOP value}}\le 100\%\quad(\text{no expansion})$$

- **Standards Board** ([src](https://www.saasmetricsboard.com/gross-revenue-retention)): Cohort method (preferred): "Adjusted MRR from the cohort of customers at the end of the period / MRR at the beginning of the measurement period." Formula method: "((Beginning MRR - Churned MRR - Down-Sell MRR)/Beginning MRR)) x 100 = GRR (%)".
- **SEC filers:** several disclose GRR alongside NRR using the same cohort basis they chose for NRR.

Most likely to mismatch an investor: the same basis and period choice as NRR. GRR has no expansion, so it exposes churn that NRR can hide.

---

## Logo / Customer Retention (and churn)

The Standards Board frames this as retention, not churn (churn = 1 − retention).

Diverges on: monthly→annual derivation (compounding vs ×12); the churn *moment* (cancel vs access-ends vs renewal-date vs failed-payment). No authority codifies the churn moment, so it must be defined explicitly.

$$\text{Logo retention}=\frac{\text{customers at end who were customers at start}}{\text{active customers at start}}\qquad \text{logo churn}=1-\text{retention}\qquad \text{annual}=1-(1-\text{monthly})^{12}$$

- **Standards Board** ([src](https://www.saasmetricsboard.com/logo-retention)): "# of customers at the end of the period who were customers at the beginning of the period / # of active customers at the beginning of the measurement period."

---

## Revenue churn (gross / net)

Not separately codified, the authorities express it as the inverse of retention.

$$\text{gross rev churn}=1-\text{GRR}\ \ (\ge 0)\qquad \text{net rev churn}=1-\text{NRR}\ \ (\text{can be}<0,\ \text{``negative churn''})$$

Most likely to mismatch an investor: reporting only *net* churn, letting expansion mask gross and logo attrition. Investors triangulate gross retention and logo retention underneath NRR.

---

## CAC Ratio (and CAC)

What's codified is the CAC *ratio* (S&M to win $1 of new ARR), not a single "cost per customer."

Diverges on: blended vs new-customer vs expansion; fully-loaded vs ad-only; whether customer-success cost is in. Both the Standards Board and KBCM split it three ways and agree on "fully-loaded."

$$\text{CAC Ratio}=\frac{\text{fully-loaded S\&M (prior period)}}{\text{new ARR / CARR}}\qquad(\text{blended, new-customer, or expansion variants})$$

- **Standards Board**, Blended: "Fully Loaded Sales and Marketing Expenses (CQ-1) / New CARR + Expansion CARR" ([src](https://www.saasmetricsboard.com/blended-cac-ratio)); New: "...allocated to Customer Acquisition / New Name ARR" ([src](https://www.saasmetricsboard.com/new-cac-ratio)); Expansion: "...allocated to Expansion / Expansion CARR" ([src](https://www.saasmetricsboard.com/expansion-cac-ratio)).
- **KBCM survey (secondary):** Blended CAC Ratio = "Fully-loaded S&M spend to acquire $1 of new ARR across all customers"; New Customer CAC Ratio = "...$1 of new ARR from a new customer"; Existing Customer CAC Ratio = "...$1 of ARR from upsells and expansions." (2022 survey p.3, `education/research/downloads/`).

Term-collision warning: some sources use "CAC Ratio" to mean LTV/CAC, which runs the opposite direction. Always state which.

---

## CAC Payback

Diverges on: gross-margin-adjusted vs raw revenue (the codified consensus is GM-adjusted); what's in gross margin (the board and KBCM both fold customer-support cost into it).

$$\text{CAC Payback (months)}=\frac{\text{fully-loaded S\&M}}{\text{new CARR}\times\text{gross margin \%}}\times 12$$

- **Standards Board** ([src](https://www.saasmetricsboard.com/cac-payback-period)): "The CAC Payback period is the number of months it takes for the gross profits from new customer ARR to pay back the sales and marketing expenses..." Formula: "Fully Loaded S&M Expenses / (CARR × Gross Margin %) × 12".

Most likely to mismatch an investor: quoting payback on raw revenue when the codified and investor convention is gross-margin-adjusted. The raw-revenue figure divides by gross margin to convert: at ~75% GM, a "9 month" raw payback is really about 12.

---

## Rule of 40

Diverges on the profitability measure. The Standards Board codifies FCF margin. The origin author (Feld) left it ambiguous and preferred EBITDA.

$$\text{growth \%}+\text{profit margin \%}\ge 40\qquad(\text{profit}=\text{FCF margin (Standards Board)}\ \text{or}\ \text{EBITDA (Feld, origin)})$$

- **Standards Board** ([src](https://www.saasmetricsboard.com/rule-of-40)): Calc #1 (recommended, ARR): "Annual ARR Growth Rate + Annual Free Cash Flow [Margin]" (FCF margin = (Cash from Operations − Capex) / Average ARR). Calc #2: GAAP revenue growth + FCF margin.
- **Origin, Brad Feld (2015):** "your growth rate + your profit should add up to 40%"; "I prefer to use EBITDA here as the baseline", and explicitly flags EBITDA vs operating income vs net income vs FCF as ambiguous. ([src](https://feld.com/archives/2015/02/rule-40-healthy-saas-company/))

---

## Metrics with no enforced or codified definition

These have no SEC-disclosed or Standards-Board definition. The only authority is the origin author. Flag this on a call: they are conventions, not standards.

### SaaS Magic Number, origin: Scale VP

$$\text{Magic \#}=\frac{\Delta\text{ subscription revenue (quarter)}\times 4}{\text{prior-quarter S\&M}}$$
"Take the change in subscription revenue between two quarters, annualize it (multiply by four), and divide the result by the sales and marketing spend for the earlier of the two quarters." ([Scale VP](https://www.scalevp.com/insights/magic-number-math/)) Variants use net new ARR instead of GAAP revenue.

### Burn Multiple, origin: David Sacks / Craft Ventures

$$\text{Burn Multiple}=\frac{\text{Net Burn}}{\text{Net New ARR}}\quad(\text{lower better; inverse of Bessemer's Efficiency Score}=\tfrac{\text{Net New ARR}}{\text{Net Burn}})$$
"Burn Multiple = Net Burn / Net New ARR"; "I prefer to flip the numerator and denominator" (vs Bessemer). ([Craft Ventures](https://medium.com/craft-ventures/the-burn-multiple-51a7e43cb200)) "Net burn" itself is under-specified, so define it on the call. The 5-tier benchmark thresholds are in the origin post, saved in `education/research/downloads/`.

### LTV and LTV:CAC, origin/popularizer: David Skok

$$\text{LTV}=\frac{\text{ARPA}\times\text{gross margin}}{\text{monthly churn}}\qquad \frac{\text{LTV}}{\text{CAC}}\ge 3\ (\text{convention})$$
No SEC or Standards-Board definition exists. Skok popularized the gross-margin-adjusted LTV and the "> 3, sometimes 7-8x" LTV:CAC rule. ([forEntrepreneurs](https://www.forentrepreneurs.com/saas-metrics-2/)) Treat the 3x as a convention, not a standard. It bakes in assumptions: GM-adjusted LTV, simple 1/churn lifetime, no discount rate.

---

## Sources & provenance

- **SEC filings citations** (primary): verbatim, quote-verified metric definitions from named public filers' 10-Ks (MariaDB, Backblaze, SEMrush, Q2 Holdings, Brightcove, BlackLine, EverCommerce, Autodesk, Asana, DigitalOcean, Bentley, Okta, Cloudflare, ZoomInfo, and others), each cited inline above to its `sec.gov/Archives/...` primary filing. See also the [authority discovery memo](../../research/2026-06-16-saas-metrics-authority-discovery.md).
- **SaaS Metrics Standards Board** (codified consensus) and **origin authors** (coined metrics: Scale VP magic number, Craft Ventures/Sacks burn multiple, Feld Rule of 40, Skok LTV:CAC): captured in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json) and frozen against link rot in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (each source page snapshotted with a content hash, retrieval date, and a verbatim phrase re-verified against the live page). Regenerate via `../evidence/canonical-pull.js`.
- **KBCM Private SaaS Survey** (benchmark, secondary cross-check): `education/research/downloads/2022_kbcm_saas_survey_10-20-22_vF.pdf`.

*SEC definitions verified verbatim from primary filings; Standards Board and origin-author definitions snapshotted and verbatim-verified against their source pages (see `canonical-verified.json` for per-source dates and hashes). Prominence-based VC and tooling sources are deliberately excluded as authorities.*
