---
metric: Rule of 40
abbrev: Rule of 40
aka: [40% rule]
contested: true
gear: 2
authority: standards-board
diverges_on: [basis]
---

# Rule of 40

## One-liner

A health heuristic that a SaaS company's growth rate plus its profit margin should sum to at least 40%, where the growth term is fairly settled but the profitability term is genuinely contested.

## Why it diverges

The 40% threshold and the growth-plus-profit shape are the settled part. The divergence is on the profitability-basis axis: which profit margin goes in the second term. The standards board codifies free-cash-flow margin. But Brad Feld, who popularized the rule (2015), left the profitability term ambiguous, preferred EBITDA margin, and explicitly flagged EBITDA vs operating income vs net income vs FCF as unresolved (his own post credits others; the true originator is unattributed, so treat Feld as popularizer, not coiner). So this is a case where the standards-board convention and the popularizer's own preference differ, and a founder quoting "Rule of 40" may mean either. Treating FCF margin as the only legitimate basis is the rework-sensitive error.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| FCF-margin, ARR growth (standards-board recommended) | basis | annual ARR growth rate + FCF margin, FCF margin = (cash from operations - capex) / average ARR | standards board (Rule of 40) | the codified default |
| FCF-margin, GAAP revenue growth | basis | GAAP revenue growth + FCF margin | standards board (calc #2) | revenue-growth variant of the same |
| EBITDA-margin (Feld's preference) | basis | growth + EBITDA margin | popularizer, Brad Feld (2015) | Feld's stated preference; differs from the codified FCF basis |
| Other profit basis (operating / net income) | basis | growth + operating or net income margin | flagged ambiguous by Feld | legitimate but least standard; name it explicitly |

## What the investor likely recomputes on

Most readers land near the standards-board FCF-margin form, but a meaningful set still use EBITDA margin (Feld's preference and a common growth-equity convention). The growth-plus-profit shape is settled; the profitability basis is bounded by these two conventions, not fixed by them. The profitability basis is unsettled, so the defensible read names which basis is used rather than asserting FCF. Name the basis against real numbers rather than assume one.

## The defensible read

The profitability basis is stated with the number: "Rule of 40 on FCF margin" or "on EBITDA margin," never a bare "Rule of 40." FCF margin is the codified default; the EBITDA reading is the footnote. The aggressive move to avoid is silently picking whichever profit measure is most flattering for the company. Principle: defensibility, not optimization.

## The three axes (per Rule of 40)

Rule of 40 diverges on basis. Composition is settled: the two-term sum (growth plus profit margin) and the 40% threshold. Basis is the contested axis, the profitability measure, FCF margin (standards board) vs EBITDA margin (Feld's preference) vs operating income vs net income (Feld flagged all as candidates); the growth basis (ARR growth vs GAAP revenue growth) is a secondary, lesser divergence. Timing is annual growth and annual margin over a trailing or current period, with FCF margin normalized over average ARR in the standards-board calc.

See [the three axes](../divergence/axes.md) for the shared model.

## Classic errors touching Rule of 40

No entry in `classic-errors.md` maps cleanly here; the live error is presenting the profitability basis as settled. Quoting "Rule of 40 = 42%" without naming the profit measure is the tell, since FCF and EBITDA margins can differ materially for the same company.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming which profitability basis the founder used and flagging an unstated one. OUT OF SCOPE (named but not computed): reconstructing FCF margin (cash from operations minus capex over average ARR) or EBITDA margin from source financials. The per-axis reconstruction from the client's raw source systems is out of scope for this standard. Reconstructing it from raw source systems is a separate, multi-week effort the standard does not perform.

## Citations

- Standards-board calc #1 (ARR growth + FCF margin) and calc #2 (GAAP revenue growth + FCF margin), and Feld's 2015 post (he popularized the rule; the true originator is unattributed) with its EBITDA preference and explicit ambiguity flag: the Rule of 40 entries in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json), citing the standards-board page (https://www.saasmetricsboard.com/rule-of-40) and Feld's post (https://feld.com/archives/2015/02/rule-40-healthy-saas-company/).
