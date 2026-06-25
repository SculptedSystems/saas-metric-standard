# Revenue recognition substrate (ASC 606 for software and SaaS)

The reference depth behind the [rev-rec conventions entry](../conventions/rev-rec.md). Revenue recognition is the one item in the library backed by an enforced standard: US GAAP, FASB Topic 606 (and Subtopic 340-40 for contract costs), not a convention. This extracts the operator-relevant model from a Big-4 handbook. The conventions entry is the teaching layer (RECALL); this is the reference layer; the handbook is the exhaustive source for a live question.

## Source

KPMG, "Revenue for software and SaaS" Handbook, US GAAP, December 2025 (KPMG Department of Professional Practice). Primary extract: the "Software and SaaS industry overview," pp. 6 to 17. Deep chapters for lookup: Scope p20, Step 1 (identify the contract) p66, Step 2 (performance obligations) p136, Step 3 (transaction price) p294, Step 4 (allocate) p399, Step 5 (recognize) p514, contract modifications p638, contract costs p703. Retrieved 2026-06-18 (held in the education repo); public copy at kpmg.com/us/en/frv. Codification references use the form 606-10-25-16 (Topic, Subtopic, Section, paragraph).

## Threshold: software license or SaaS?

The first question, because it changes the model (overview p6; Scope ch. A, p20):

- A **software license** exists only if the customer (1) can take possession of the software without significant penalty and (2) can feasibly host it itself or with a third party (606-10-55-54; 985-20-15-5). Then the licensing implementation guidance applies.
- **SaaS** (hosted; the customer cannot take possession) is NOT a license. It is a service under the general revenue model. The licensing guidance, including the sales- and usage-based-royalty exception, does not apply.
- Consequence: a fixed SaaS fee recognizes ratably over the service period (time-based). A software license recognizes at a point in time (see timing).

## The five-step model (Topic 606)

1. Identify the contract (p66).
2. Identify the performance obligations: the distinct promised goods or services (license, SaaS, professional services, PCS, specified upgrades). The performance obligation is the unit of account. Setup, activation, or administrative activities that transfer no good or service are NOT separate obligations (overview p7 to p8; p136). VSOE no longer governs separability (it is gone under 606), which often accelerates license revenue versus legacy GAAP.
3. Determine the transaction price, including variable consideration subject to the constraint (p294).
4. Allocate the transaction price to the obligations by relative stand-alone selling price (SSP); estimate SSP where no observable price exists; a residual approach is allowed for highly variable or uncertain-priced items (overview p10; p399).
5. Recognize revenue when (a point in time) or as (over time) each obligation is satisfied (p514).

## Recognition timing (what moves a dollar to "recognized")

- **Software license is functional IP, recognized at a point in time** (overview p11): control passes at the later of (a) the copy being provided or made available and (b) the license period beginning. Electronic delivery means control when the customer can download or holds the access key (p12). In a hosting arrangement that also includes a license, control generally transfers when hosting commences.
- **SaaS is recognized over time, ratably**, for a fixed fee (general model; overview p6).
- **PCS** (technical support plus unspecified updates): under 606 the components are typically distinct performance obligations, each a stand-ready obligation recognized ratably over the period; they may be combined when delivered over the same period with the same pattern of transfer (overview p8, p12).
- **Professional services** are recognized over time if any one of the three over-time criteria is met (most do); otherwise at a point in time (overview p13).
- **License renewals**: revenue cannot be recognized before the renewal period begins, a change from legacy GAAP (overview p12).

## Issues that move a founder's number

- **Setup, implementation, and activation fees** are usually NOT a separate obligation (no incremental benefit to the customer), so the fee is recognized over the SaaS term, not upfront (overview p7 to p8). A founder booking setup fees as immediate revenue overstates recognized revenue.
- **Usage-based or consumption fees in SaaS**: the royalty exception does NOT apply (no license), so the general variable-consideration guidance applies. Estimate total usage subject to the constraint, UNLESS the as-invoiced practical expedient or a series-of-distinct-periods allocation applies (overview p13 to p14). Lag reporting is not permitted.
- **Usage-based royalties on a software license**: recognize at the later of the subsequent sale or usage occurring, or the related obligation being satisfied (overview p13).
- **Material rights**: a renewal or upgrade option priced below SSP (a discount the customer would not otherwise get) is a separate obligation, deferring a portion of the price (overview p10 to p11). Distinguish it from a usage-based fee, which is the exercise of rights the customer already controls.
- **Term license versus SaaS**: the same product sold as an on-premise term license (point-in-time) versus hosted SaaS (ratable) recognizes very differently; hybrid arrangements turn on transformative-versus-additive (overview p9 to p10).
- **Extended or advanced payments and significant financing**: extended payment terms do not preclude recognition if collection is probable, but may signal a price concession (variable consideration); a prepayment for PCS or SaaS covering more than a year may contain a significant financing component (there is a practical expedient to ignore financing when payment and performance are one year or less apart, 606-10-32-18); for an advance payment the entity is effectively the borrower, so recognized revenue rises above the cash received over time, with offsetting interest expense (overview p17).

## Contract costs (Subtopic 340-40; p703)

- **Incremental costs to obtain a contract** (sales commissions, plus fringe directly attributable to them) MUST be capitalized if recoverable; it is no longer a policy choice. Practical expedient: expense as incurred if the amortization period would be 12 months or less (overview p15 to p16).
- Amortize over the period of transfer, INCLUDING specifically anticipated renewals (often longer than the non-cancellable term), unless renewal commissions are commensurate with the initial commission (overview p17).
- **Costs to fulfill** a contract (for example SaaS setup activities that transfer no service) are capitalizable if the 340-40 criteria are met.

## Variable consideration and the constraint (606-10-32-11 to 32-12)

The test the substrate above references (usage-based SaaS fees as variable consideration, extended payment terms as a possible price concession) but never states. Variable consideration (usage fees, discounts, rebates, refunds, performance bonuses, penalties) is estimated by either the expected-value or the most-likely-amount method (606-10-32-8). It is then subject to **the constraint** (606-10-32-11): an entity includes estimated variable consideration in the transaction price **only to the extent it is probable that a significant revenue reversal will not subsequently occur** when the uncertainty is later resolved. Factors that increase the likelihood or magnitude of a reversal (606-10-32-12): susceptibility to factors outside the entity's influence, a long time before the uncertainty resolves, limited experience with similar contracts, a practice of price concessions, and a broad range of possible outcomes. For sales- and usage-based royalties on a **license** of IP there is a separate recognition rule (the royalty exception, 606-10-55-65; note 32-13 is the requirement to reassess the estimate each period, not the exception): recognize at the later of the subsequent sale or usage occurring or the obligation being satisfied. The exception does not apply to SaaS (no license), so SaaS usage fees run through the general constraint or the as-invoiced practical expedient. KPMG handbook: Step 3 (transaction price), p294, variable consideration and the constraint.

## Remaining performance obligations: RPO and cRPO (606-10-50-13)

**RPO** (remaining performance obligations) is the GAAP-anchored forward-revenue disclosure: the aggregate transaction price allocated to performance obligations that are unsatisfied (or partially unsatisfied) as of the reporting date, that is, contracted revenue not yet recognized (606-10-50-13). It captures both the deferred-revenue balance (billed, not yet recognized) and the unbilled contracted backlog. **cRPO** (current RPO) is the portion expected to be recognized within roughly the next twelve months; cRPO is a market and investor-relations label on the 50-13 time-band disclosure, not a defined Codification term. RPO is a required disclosure (with a practical expedient for contracts of original duration one year or less, 606-10-50-14), which is what makes it different in kind from ARR: investors increasingly trust RPO as the closest GAAP-backed forward number, versus non-GAAP ARR, which has no enforced definition. The teaching point for the Review: when a founder leads with ARR, RPO and cRPO are the auditable forward figures the same disclosure regime would produce. KPMG handbook: disclosure, with the RPO requirement under Step 5 / presentation and disclosure (ch. on disclosure, see p514 and the disclosure chapter).

## Principal versus agent: gross versus net revenue (606-10-55-36 to 55-40)

The single biggest top-line distortion in a founder's revenue is often whether revenue is recorded **gross** (the founder is the principal) or **net** (the founder is an agent). The governing test is **control** (606-10-55-37): the entity is the principal if it controls the specified good or service **before** it is transferred to the customer; it is an agent if its performance obligation is to arrange for another party to provide the good or service, and it then recognizes only the net fee or commission. The indicators that support a principal conclusion (606-10-55-39, supporting but not overriding the control assessment): the entity is **primarily responsible** for fulfillment, bears **inventory risk**, and has **discretion in setting the price**. The trap shows up in marketplaces, payments facilitation, and embedded resale (for example reselling third-party software, hosting, or processing, or running a marketplace that takes a take-rate): booking the gross transaction value as revenue when only the net commission is earned overstates the top line, often by a large multiple, and inflates ARR derived from it. KPMG handbook: principal-versus-agent under Step 2 / performance obligations, p136 (and the principal-vs-agent discussion in the overview, p9 to p10).

## Mapping back to the four money-states

The conventions entry's four states (contracted, billed, recognized, collected) are the operator shorthand; Topic 606 is what governs the **recognized** state specifically. Contracted and billed are commercial and invoicing events, collected is cash, and recognized is the GAAP line the five-step model produces. Deferred revenue is the gap: billed or collected but not yet recognized. ARR, MRR, NRR and the rest are non-GAAP operating metrics that sit on contracted or recurring amounts, not on recognized revenue, which is the structural reason they can diverge from GAAP revenue. The Cast and Engine reconstruct the recognized line from a founder's sources; the Review names the boundary and defers the reconstruction.
