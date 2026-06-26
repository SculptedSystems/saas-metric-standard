---
metric: Rule of 40
abbrev: Rule of 40
aka: [40% rule]
contested: true
gear: 2
authority: standards-board
---

# Rule of 40

## One-liner

A health heuristic that a SaaS company's growth rate plus its profit margin should sum to at least 40%, where the growth term is fairly settled but the profitability term is genuinely contested.

## Why it diverges

The 40% threshold and the growth-plus-profit shape are the settled part. The divergence is on the profitability-basis axis: which profit margin goes in the second term. The standards board codifies free-cash-flow margin. But Brad Feld, who popularized the rule (2015), left the profitability term ambiguous, preferred EBITDA margin, and explicitly flagged EBITDA vs operating income vs net income vs FCF as unresolved (his own post credits others; the true originator is unattributed, so treat Feld as popularizer, not coiner). So this is a case where the standards-board convention and the popularizer's own preference differ, and a founder quoting "Rule of 40" may mean either. Treating FCF margin as the only legitimate basis is the rework-sensitive error.

## The three axes (per Rule of 40)

- **composition** (free-computable): the two-term sum (growth plus profit margin) and the 40% threshold. Settled.
- **basis**: the profitability measure, FCF margin (standards board) vs EBITDA margin (Feld's preference) vs operating income vs net income (Feld flagged all as candidates). This is the contested axis. The growth basis (ARR growth vs GAAP revenue growth) is a secondary, lesser divergence.
- **timing**: annual growth and annual margin over a trailing or current period, with FCF margin normalized over average ARR in the standards-board calc.

## Legitimate convention families

| Family | Axis | Method (short) | Representative source | Direction vs defensible |
|---|---|---|---|---|
| FCF-margin, ARR growth (standards-board recommended) | basis | annual ARR growth rate + FCF margin, FCF margin = (cash from operations - capex) / average ARR | standards board (Rule of 40) | the codified default |
| FCF-margin, GAAP revenue growth | basis | GAAP revenue growth + FCF margin | standards board (calc #2) | revenue-growth variant of the same |
| EBITDA-margin (Feld's preference) | basis | growth + EBITDA margin | popularizer, Brad Feld (2015) | Feld's stated preference; differs from the codified FCF basis |
| Other profit basis (operating / net income) | basis | growth + operating or net income margin | flagged ambiguous by Feld | legitimate but least standard; name it explicitly |

## What the investor likely recomputes on

Hypothesis, not direct evidence: most investors land near the standards-board FCF-margin form, but a meaningful set still use EBITDA margin (Feld's preference and a common growth-equity convention). The robust move is to assume the profitability basis is unsettled and ask which, rather than to assert FCF. Validate per founder via the debrief loop.

## The defensible read

State the profitability basis when you quote the number: "Rule of 40 on FCF margin" or "on EBITDA margin," never a bare "Rule of 40." Lead with FCF margin as the codified default and footnote the EBITDA reading. The aggressive move to avoid is silently picking whichever profit measure is most flattering for the company. Principle: defensibility, not optimization.

## Classic errors touching Rule of 40

No entry in `classic-errors.md` maps cleanly here; the live error is presenting the profitability basis as settled. Quoting "Rule of 40 = 42%" without naming the profit measure is the tell, since FCF and EBITDA margins can differ materially for the same company.

## Scope boundary

IN SCOPE (from the reported aggregates and the stated method): naming which profitability basis the founder used and flagging an unstated one. OUT OF SCOPE (named but not computed): reconstructing FCF margin (cash from operations minus capex over average ARR) or EBITDA margin from source financials. Stating this boundary out loud is the authority move.

## Citations (REFERENCE, not recall)

- Standards-board calc #1 (ARR growth + FCF margin) and calc #2 (GAAP revenue growth + FCF margin), and Feld's 2015 post (he popularized the rule; the true originator is unattributed) with its EBITDA preference and explicit ambiguity flag: see the Rule of 40 section of [`../divergence/cheatsheet.md`](../divergence/cheatsheet.md) and the Rule of 40 entries in [`../evidence/canonical-definitions.json`](../evidence/canonical-definitions.json).

## Card-derivation notes

- RECALL: the contested flag, the growth-plus-profit shape and 40% threshold (settled), the profitability basis as the contested axis, FCF margin (standards board) vs EBITDA margin (Feld, popularizer), and that the profit term must be named when quoting.
- CONTRAST card needed: FCF-margin Rule of 40 vs EBITDA-margin Rule of 40 (standards-board codification vs origin-author preference).
- REWORK card needed: "Rule of 40 uses FCF margin" must be reworked (FCF is the standards-board codification; Feld, the popularizer, preferred EBITDA and left it ambiguous; do not present FCF as the only legitimate basis).
- REFERENCE only: the exact standards-board and Feld wording, per-founder margin figures.
