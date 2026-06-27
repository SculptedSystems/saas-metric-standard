---
title: The three axes
---

# The three axes

B2B SaaS metric definitions diverge along three axes: composition, basis, and timing. Naming which axis a given number diverges on is how this reference classifies that number. Every per-metric divergence in the conventions library is described against this shared model, and each metric's own "three axes" section names which axis or axes drive its divergence and carries the metric-specific detail.

## Composition

The free-computable axis: what is or is not in the number. Which customers are in the cohort, which revenue components count (recurring only, or one-time, services, and overage folded in), which cost lines sit inside the figure, and which movement buckets are included. Composition is the axis that closes from the reported aggregates, so it is the axis the reference can confirm without raw customer-level data.

## Basis

What kind of value the number is built on: ARR vs GAAP revenue vs implied-monthly (implied-MRR) vs contracted (ACV or CARR). The same customer book reports a different figure under each basis. A recurring-revenue (ARR or MRR) basis, a trailing or calendar GAAP-revenue basis, an ACV or annualized basis, and an implied-monthly basis are each legitimate conventions; the divergence between them is the basis axis.

## Timing

The time-anchor convention: point-in-time (as of period end) vs a cohort anchored to a past date vs an average across a window vs a year-over-year framing. The same metric reads differently depending on whether it is taken as of a single date, averaged over the months of a period, or framed against the figure twelve months prior.

The point-in-time test sorts a timing-axis spread into a convention gap versus a defect. It asks whether the as-of state was retained, or can be reconstructed from retained history.

A cohort or as-of metric is anchored to a point in the past (the beginning-of-period cohort, the as-of-period-end value). Computing it correctly requires that the source systems retained enough point-in-time state, or an append-only history from which that state is reconstructable, to rebuild the cohort and its values as they stood on the anchor date. When the state exists and a different but authority-traceable timing convention (a monthly average, a year-over-year framing) reproduces the spread, the gap is a legitimate convention gap, the labeled risk. When no retained point-in-time state and no reconstructable history exists, the metric cannot be rebuilt as-of: that is a source defect, not a convention choice, because no legitimate timing convention can recover the number. This is the line between a convention gap and a defect.
