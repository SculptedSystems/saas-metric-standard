---
metric: Churn and retention
abbrev: churn
aka: [logo churn, customer churn, revenue churn, logo retention]
contested: true
gear: 2
authority: standards-board
diverges_on: [composition, timing]
---

# Churn and retention

## One-liner

The rate at which customers (logo churn) or recurring revenue (revenue churn) is lost over a period, where churn is one minus the corresponding retention, and the two families (count-based and dollar-based, gross and net) answer different questions about the same book.

## Why it diverges

Churn is really a small family of metrics, and the first failure is not picking the right member. Logo (customer-count) churn and revenue churn measure different things; gross and net revenue churn differ by whether expansion is netted in. The standards board frames the count-based metric as retention, not churn, with churn defined as one minus retention. Two conventions drive most of the legitimate divergence: the period and the annualization method, and the choice of churn moment, which no authority codifies and so must be stated explicitly.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| Logo retention (standards-board) | composition + timing | customers at period end who were customers at start over active customers at start; churn = 1 - retention | standards board (logo retention) | the defensible count-based default |
| Gross revenue churn | composition | 1 - GRR; lost and contracted revenue, no expansion | inverse of standards-board GRR | the floor; at least zero |
| Net revenue churn | composition | 1 - NRR; expansion netted in; can be negative | inverse of standards-board NRR | flatters the picture; hides gross attrition |
| Compounded annualization | timing | annual = 1 - (1 - monthly)^12 | standards-board convention | the correct derivation |
| Linear annualization (monthly x 12) | timing | monthly churn times twelve | common founder shortcut | overstates annual churn; the annualization trap |

## What the investor likely recomputes on

The applicable convention is the codified one: the standards-board logo-retention method (churn = 1 - retention) and the GRR/NRR inverses. An investor recomputes a founder's number against that codified convention when no specific investor convention is on the table, and that is where the number gets measured.

The codified read takes logo churn and gross revenue churn underneath any net retention number, on the same basis as the paired retention metric. A single headline "churn" figure that does not say logo-or-revenue and gross-or-net gets discounted. The family is settled; the basis is bounded by the paired retention metric, not fixed by it. Name the family, basis, and churn moment against real numbers rather than assume one.

## The defensible read

"Defensible" is relative to the investor. It is the convention the raise gets judged against, which is not always the standard's default. So the read has two tiers.

- **The standard's default (use when no specific investor convention is known):** the churn family stated (logo or revenue, gross or net) before any number, with monthly churn annualized by compounding, not by multiplying by twelve. This is the codified read, the defensible default.
- **The investor's convention (use it when you know it):** when a specific investor's convention is known, lead on the *same basis* as that convention's paired retention metric and footnote the rest, including the default above. That convention is what the raise is measured against.

Under either anchor, the aggressive move to avoid is leading with net revenue churn alone, which expansion can drive near zero or negative while gross attrition is real. The churn moment must be defined explicitly, since no authority does. Principle: defensibility, not optimization. A defect classification is absolute and does not move with the convention anchored on.

## Aggressive-vs-defect test

The predicate for classifying a churn spread:

- **Defensible basis:** the standards-board logo-retention method (churn = 1 - retention) with monthly churn compounded to annual, and revenue churn read as 1 - GRR underneath any net figure. This is the defensible read.
- **Convention gap (aggressive but legitimate):** the spread reproduces only under net revenue churn (1 - NRR), which an authority-traceable retention basis legitimately nets expansion into and which can read near zero or negative, or under a revenue basis or churn moment the paired retention metric legitimately adopts. Legitimate, but net-only hides gross and logo attrition, so it is the labeled risk, not the defensible read.
- **Defect gap:** no legitimate convention reproduces it. For example, annual churn derived as monthly times twelve rather than compounded (the annualization trap), or one-time revenue inflating the base so the apparent revenue churn understates. No authority-traceable convention recovers the number.

## Canonical formula

$$
\text{Logo retention}=\frac{\text{customers at end who were customers at start}}{\text{active customers at start}}\qquad \text{logo churn}=1-\text{retention}\qquad \text{annual}=1-(1-\text{monthly})^{12}
$$
Primary source: the Standards Board codifies the count-based metric as logo retention, "# of customers at the end of the period who were customers at the beginning of the period / # of active customers at the beginning of the measurement period," recorded in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/logo-retention); churn is one minus that retention. Gross and net revenue churn are the inverses of the codified GRR and NRR entries in the same file (1 - GRR and 1 - NRR). The codified retention definitions are the authority here.

Standards-board logo-retention method (the defensible count-based default): the count of start-of-period customers still active at period end over the count active at start; churn is one minus that. Annual churn compounds from monthly as 1 - (1 - monthly)^12, never monthly times twelve.

| Input | Source-system class | Timing-offset |
|---|---|---|
| Active customer count at start (the denominator) | CRM / billing | as of the beginning of the measurement period |
| Retained customer count (start cohort still active at end) | CRM / billing | start cohort, evaluated as of period end |
| Churn moment (cancel, access-ends, renewal date, or failed payment) | billing events | uncodified; must be defined per company |
| Period and annualization basis | data warehouse | monthly base compounded to annual; not linearly scaled |

## Reconciliation note

Composition-closed, basis/timing-bounded. The composition axis closes to a zero residual: from the reported aggregates we can confirm which churn family the number is in (logo versus revenue, gross versus net) and that churn equals one minus the paired retention, and that closes from the aggregates. Basis and timing do not close. The revenue basis (ARR versus MRR versus revenue, inherited from the retention metric), the period and the monthly-to-annual derivation, and the uncodified churn moment interact non-additively (a basis reclassification and a churn-moment change are not a sum of separable adjustments), so they are reconciled bounded and qualitative: name the family, basis, and churn moment the founder used against the defensible logo-retention method with compounded annualization, and bound the direction and magnitude of the spread. The per-axis reconstruction of that spread from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## The three axes (per churn)

Churn diverges on composition and timing. Composition is logo vs revenue, and gross vs net: logo churn counts lost accounts regardless of size; revenue churn weights by dollars. Gross revenue churn (= 1 - GRR) excludes expansion and is at least zero; net revenue churn (= 1 - NRR) nets expansion in and can go below zero ("negative churn"). These are distinct metrics, not variants of one. Basis, for revenue churn, is the same ARR vs MRR vs revenue choice as NRR and GRR, inherited from the retention metric it inverts. Timing is the period (monthly vs annual) and the monthly-to-annual derivation, plus the churn moment, when a customer is counted as churned (cancellation, access-ends, renewal date, or failed payment); the moment is uncodified and must be defined.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching churn

- **gross-vs-net churn confusion**: the central named error; reporting only net churn lets expansion mask gross and logo attrition. See `classic-errors.md`.
- **the monthly-to-annual annualization trap**: deriving annual churn as monthly times twelve rather than 1 - (1 - monthly)^12, which overstates annual churn (and, if inverted into retention, understates it). Cross-reference `classic-errors.md`.
- one-time-in-MRR inflating the revenue base and so understating the apparent revenue churn rate.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming which churn family the founder is in, catching a net-only report, and catching the linear-annualization trap from the stated method. OUT OF SCOPE (named but not computed): the churn moment resolved against billing events, and the per-cohort revenue churn from customer-level data. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board logo retention, "# of customers at the end of the period who were customers at the beginning of the period / # of active customers at the beginning of the measurement period" (churn = 1 - retention), and the compounded annualization, the gross/net revenue churn inverses, and the uncodified churn moment: the codified, snapshot-verified Logo Retention entry in [`../evidence/canonical-verified.json`](../evidence/canonical-verified.json) (https://www.saasmetricsboard.com/logo-retention).
- GRR and NRR as the retention metrics churn inverts: see `grr.md` and `nrr.md`.
