# B2B SaaS Metrics Taxonomy

Most teams do not have a metrics problem. They have a "we never wrote down what we meant" problem. Marketing's "active user" is not Product's "active user." Finance's churn rate does not match the board deck. Nobody notices until the numbers collide in a meeting or a fundraise.

I was the first data engineer for Agora, a public B2B software company past $100M a year. This is the document I wish we had written on day one. It defines the metrics that matter at Seed and Series A. For each one: what it means, how to calculate it, and the arguments it tends to cause. The arguments are the important part.

## How to read this

You do not need to read it front to back. Founders tend to want the numbers that matter right now and what to tell the board. Finance and RevOps need exact definitions that match what investors expect. Product and engineering need to know what counts as "active" and how to measure it. Read the parts you need.

Each metric below lists who should own it. If your team argues about a number, find it here, agree on one definition, and write it down where everyone can see it. Most metric problems end right there.

## The Contradiction Index

These are the arguments that cost the most. If your numbers feel off, start here.

| The argument | What it costs you | The fix |
|--------------|-------------------|---------|
| Are past-due accounts still revenue? | Your MRR looks bigger than it is. You plan around money that may not arrive. | Drop past-due from MRR. Track it on its own as "at-risk." |
| Annual deals: count the whole thing now, or spread it out? | MRR jumps around and nobody trusts the chart. | Spread it. A $12k year is $1k of MRR, not $12k. |
| When does a customer count as churned? | Churn and revenue numbers do not line up. The board math breaks. | Pick one moment (we say: when their access ends) and use it everywhere. |
| What counts as an "active user"? | Product and Marketing report different DAU. Both think they are right. | One definition for the whole company. Write it down. |
| What does "activated" mean for a new signup? | Activation rate means a different thing to each team. | One milestone, defined in writing. Review it once a quarter. |
| Is LTV based on revenue or on profit? | Your unit economics look healthier than they are. | Use gross profit, not revenue, when you compare LTV to CAC. |
| Blended CAC or per-channel CAC? | A bad channel hides behind a good one. You keep funding the bad one. | Track both. Always know your paid CAC on its own. |
| Does NRR include new customers? | Your retention number looks great and means nothing. | NRR is existing customers only. New ones do not belong in it. |

Most of these come down to one habit. Decide the definition once, put it in a shared doc, and point to that doc when someone disagrees.

## Revenue

### MRR (Monthly Recurring Revenue)

The money you can count on every month from subscriptions. This is the number that matters most at Seed and Series A.

To get it, add up every active subscription. Put each one in monthly terms first.

| Billing | Monthly value |
|---------|---------------|
| Monthly plan | The full price |
| Annual plan | Price ÷ 12 |
| Quarterly plan | Price ÷ 3 |
| Weekly plan | Price × 52 ÷ 12 |

Multi-year deals work the same way: divide by the number of months they cover. A $36k three-year contract is $1k of MRR, not $36k and not $12k.

Leave out one-time charges. Setup fees, services work, and overage charges are not recurring, so they are not MRR. Also leave out discounts you already took off the invoice.

A few cases trip people up:

- Trials do not count until they convert to a paid plan. A trial is $0 of MRR until the first real charge lands. Do not count it early just because it looks likely to convert.
- Past-due accounts should come out. A customer who stopped paying is not recurring revenue. The cleaner move is to pull them from MRR and track them on the side as "at-risk," so you see the headline number and the risk without mixing them. (Some tools leave past-due in MRR until a dunning process gives up. Pick a rule and apply it the same way every month.)
- Paused accounts stay out too. A pause means no money this month.

Owner: Finance or RevOps.

### ARR (Annual Recurring Revenue)

MRR times twelve. That is the whole formula.

For most Seed and Series A companies, ARR should come from MRR. Do not add up your annual contract values and call that ARR. People mix ARR up with ACV (the average value of a contract you signed). They are different numbers for different jobs. ACV measures deal size. ARR measures the whole company's recurring revenue.

One exception. If you bill almost everyone annually on multi-year contracts, the contract-based view of ARR is a fair way to do it. But if you have any mix of monthly and annual plans, use MRR times twelve. It keeps the number honest when billing cycles differ.

A related number investors will ask for in a fundraise is CARR (Committed or Contracted ARR). CARR counts signed deals that are not live yet, like a contract that starts next month. ARR counts what is billing today. Keep them separate. Reporting CARR as ARR is one of the fastest ways to lose a board's trust.

Owner: Finance or RevOps.

### NRR (Net Revenue Retention)

Take a group of customers. Look at their revenue a year later. Did it grow or shrink? That is NRR. It counts upgrades, downgrades, and cancels, but only for customers you already had.

```
NRR = (Starting MRR + Expansion - Contraction - Churn) ÷ Starting MRR × 100
```

New customers do not count. NRR measures whether your current customers are worth more or less over time. Drop in new signups and the number lies.

It is one of the best single signs of a healthy SaaS business ([benchmarks from CRV](https://www.crv.com/content/net-revenue-retention) and [High Alpha](https://www.highalpha.com/saas-benchmarks)):

| NRR | What it means |
|-----|---------------|
| Over 120% | Great. Your existing customers fund your growth. |
| 100 to 120% | Strong. You grow even if you stop selling. |
| 90 to 100% | Fine for early stage. |
| Under 90% | A leaky bucket. Fix this before you spend more on sales. |

These bands shift with stage. A 95% NRR is fine at Seed and a worry at Series B, so read the number against where you are.

One warning for Seed stage. With 30 customers, NRR bounces around too much to trust. One big upgrade or one churned account swings it ten points. NRR gets useful once you have enough customers for the average to mean something, usually past Series A.

Owner: Finance or RevOps.

### GRR (Gross Revenue Retention)

Same as NRR, but you do not count upgrades. It shows how much you keep before any growth from existing customers. GRR caps at 100%.

```
GRR = (Starting MRR - Churn MRR - Contraction MRR) ÷ Starting MRR × 100
```

Why have both? NRR can hide a churn problem. A company can lose 20% of its revenue to churn and still post 115% NRR if upgrades cover it. GRR shows the leak. NRR shows the net result. Watch both.

As a rough read on GRR: above 90% is strong, and investors start asking hard questions below about 85%. Since GRR cannot exceed 100%, small gaps matter more than they look.

Owner: Finance or RevOps.

### MRR Movement

This breaks down how your MRR changed this month. It is the most useful revenue view because each piece has a different owner and a different fix.

| Piece | What it is | Who owns it |
|-------|-----------|-------------|
| New | Money from brand-new customers | Sales, Marketing |
| Expansion | More money from current customers (upgrades, seats) | Customer Success, Product |
| Contraction | Less money from current customers (downgrades) | Customer Success |
| Churn | Money lost from customers who left | Customer Success, Product |
| Reactivation | Money from customers who came back | Sales, Customer Success |

```
Ending MRR = Starting MRR + New + Expansion - Contraction - Churn + Reactivation
```

Reactivation is worth defining clearly, because teams forget to track it and then cannot explain a jump in MRR. It is a previously churned customer who starts paying again. Use the same billing account or company to decide it is the same customer, not a new one. If a customer leaves and comes back in the same month, count both the churn and the reactivation. Do not cancel them out. You want to see both events.

Owner: Finance runs the math. RevOps owns the process.

## Retention and Churn

### Customer Churn (Logo Churn)

The share of customers you lost this month. Simple, but blunt. It treats your biggest customer and your smallest the same.

```
Customer Churn = Customers lost ÷ Customers at start of month × 100
```

To get a yearly number, do not multiply by twelve. Churn compounds against a shrinking base, so [×12 overstates it](https://www.scalevp.com/blog/saas-metrics-getting-more-signal-from-the-churn-metric). At 5% monthly churn, ×12 says 60% but the real yearly figure is about 46%. Use this:

```
Yearly churn = 1 - (1 - monthly churn)^12
```

Now the big question. **When does a customer count as churned?** This is the most argued-about definition in SaaS. You have a few choices:

- When they ask to cancel
- When their access actually ends
- When a renewal date passes with no renewal
- When a payment fails and stays failed for some number of days

We recommend this: a customer churns when their access ends. That moment lines up with when you stop getting their money, so your churn numbers and your revenue numbers agree. Pick whichever rule you want, but pick one, and use it in every report.

A downgrade is not churn. The customer is still here, just paying less. That is contraction, and it shows up in MRR Movement, not in your logo churn count.

For a rough target: a healthy B2B SaaS keeps logo churn under about [8% a year](https://medium.com/point-nine-news/saas-metrics-benchmarking-your-churn-rates-e9ae2c7129b5), which is under 1% in most months. SMB-heavy products run higher, often 3% to 5% a month, because small customers come and go fast. Enterprise runs lower. If your monthly churn sits at 3% or more and you are not purely SMB, fix retention before you spend another dollar on growth.

Owner: Customer Success.

### Revenue Churn (Gross)

The share of MRR you lost to cancels and downgrades, before counting any upgrades. This is gross revenue churn. If you also subtract upgrades, you get net revenue churn, which is a different number and can go negative.

```
Gross Revenue Churn = (Churn MRR + Contraction MRR) ÷ Starting MRR × 100
```

Revenue churn and logo churn answer different questions, and you want both. Logo churn tells you if the product is sticky at all, which matters most early on. Revenue churn tells you the dollar impact, because losing one big account hurts more than losing one tiny one. As your accounts vary in size, revenue churn becomes the one finance and the board care about most.

Gross revenue churn is just the flip side of GRR. If your GRR is 92%, your gross revenue churn is 8%.

Owner: Finance or Customer Success.

### Cohort Retention

Group customers by the month they joined. Track how much of that group's revenue is left in each later month. Plot it as a curve. This is the analysis investors pull hardest in diligence, because it is the one that cannot be faked by a good sales month. New sales hide churn in your top-line numbers. Cohorts strip the new sales out and show what happens to customers after they buy.

A worked example. Say your January cohort starts at $10,000 of MRR. Three months later that same group is billing $9,400. Your three-month revenue retention for that cohort is 94%. Do this for every monthly cohort and stack the curves. Now you can see whether retention is getting better or worse over time, cohort by cohort, which a single blended churn number will never tell you.

The shape tells you what to do:

- A curve that flattens out above zero is the healthy case. You have a loyal core that sticks, and where it flattens is roughly your real retention floor, which sets your ceiling for lifetime value. This is the point where spending more on acquisition pays off.
- A curve that slides toward zero and never flattens means you are renting customers, not keeping them. No amount of new sales fixes this, because you are filling a bucket with a hole in it. Stop scaling spend and fix the product or the onboarding first.
- A curve that climbs back over 100% is the one you want. Your existing customers spend more over time than you lose to churn, which is what a great NRR looks like on a cohort chart. Find what those expanding accounts have in common and go sell more of it.

Three things to lock down so cohorts are comparable:

- Set the join date as the first paid charge, not the signup or trial start.
- Use the cohort's starting MRR as the baseline.
- Ignore tiny cohorts in any shared report. A five-customer group is just noise.

Owner: Finance or Product.

## Activation and Engagement

### What counts as "active"

Before any of the user metrics work, you have to define "active." Teams skip this because it feels obvious, and then Product and Marketing quietly count it differently for a year.

A login is not enough. Someone who logs in and leaves did not get value. Tie "active" to the action that delivers your core value. For a notes app, that might be writing a note. For a dashboard tool, viewing a report with real data.

Write your definition down like this:

```
Active = did at least one of:
  - created a note
  - edited a note
  - viewed a dashboard
(swap in your product's real actions)
```

And strip out the noise: your own employees, test accounts, and bots. Count each real user once per period, no matter how many times they log in or which device they use.

Owner: Product.

### DAU, WAU, MAU

These count how many different users were active in a day, a week, or a month. Same definition of "active" for all three. If DAU and MAU use different rules, the numbers stop making sense together.

**Window convention.** Use **calendar** windows: a calendar day, an ISO week (Monday-Sunday), and a calendar month, not rolling trailing 7-/30-day windows. This keeps one consistent grain with your financial metrics, which are calendar-monthly (MRR, churn, cohort retention). The trade-off is that calendar months vary in length (28-31 days), so month-over-month MAU is not a perfectly equal-width window, an accepted cost of a single shared grain. Move to rolling windows only if your product's usage genuinely demands equal-length comparison.

For most B2B tools, WAU is the better main number, not DAU. Here is why. DAU came from consumer apps like social media and games, where people show up every day. Most B2B tools are not daily tools. Your customers might use your product hard on Tuesday and not touch it again until Friday, and that is a happy customer. DAU makes that customer look like a problem. WAU fits how people actually work. This is why [HubSpot, Asana, and Airtable track weekly active use](https://future.com/north-star-metrics/), not daily. The exception is real-time tools like Slack or Teams, which people really do use every day. Match the metric to how often your product is meant to be used.

Owner: Product.

### Stickiness (DAU ÷ MAU)

What share of your monthly users show up daily. A measure of habit.

```
Stickiness = average daily active users (avg DAU over the month) ÷ MAU × 100
```

Use the *average* DAU across the month, not a single day's DAU: one arbitrary day is too noisy to divide by MAU. This is the standard DAU/MAU stickiness measure.

Do not compare your stickiness to a messaging app. People do not need your analytics dashboard every single day. For most B2B tools, a stickiness somewhere in the [10% to 30% range is normal](https://www.gainsight.com/essential-guide/product-management-metrics/dau-mau/), and the right target depends on how often your product is meant to be used. A daily-use tool should sit higher. A monthly reporting tool will sit lower, and that is fine. The number that would signal a dying consumer app can be a healthy B2B product. Set your target against your own product's natural rhythm, not against Slack or WhatsApp.

Owner: Product.

### Activation Rate

The share of new signups who reach your "aha" moment in a set window of time.

```
Activation Rate = signups who hit the milestone in the window ÷ all signups × 100
```

Two things you must pin down:

1. The milestone. It should be the moment a user first feels the product work, like "connected their first data source" or "invited a teammate."
2. The window. Seven or fourteen days is common. Pick one and stick to it.

If your window is 14 days and a user activates on day 15, it does not count. That is fine. The point is to measure the same way every time.

The trap: Product and Marketing define "activated" differently and never notice. Then they report different activation rates and waste a meeting figuring out who is right. Define it once, for the whole company.

Owner: Product.

### Time to Activate

The typical time from signup to that activation milestone. It tells you how much your onboarding gets in the way.

Use the median, not the average. A few users who take three months to activate will drag the average way up and hide the real story. The median shows you the middle user's experience.

Break it down by where users came from. Paid signups, organic signups, and referrals often activate at very different speeds.

Owner: Product or Growth.

### Feature Adoption

The share of active users who used a specific feature at least once.

```
Feature Adoption = users who used the feature ÷ active users × 100
```

Divide by active users, not by all signups. A feature that only matters to engaged users will look like a failure if you measure it against every account you ever opened.

Owner: whoever owns that feature.

## Unit Economics

These matter more at Series A than at Seed. Early on, you have too few customers for the averages to mean much. But you should know the definitions before you need them.

### LTV (Lifetime Value)

How much a customer is worth over their whole time with you.

```
LTV = (ARPU × gross margin) ÷ monthly churn rate
```

ARPU is your average revenue per account (MRR ÷ active customers). Use the monthly churn rate as a decimal here, 0.02 and not 2, or the answer comes out 100 times too small.

Note the gross margin in that formula. Use gross profit, not raw revenue, whenever you plan to compare LTV to CAC. If your gross margin is 80%, a customer paying you $100 a month is worth $80 to the business, not $100. Skip the margin and your unit economics look better than they are. This is [how a16z defines it](https://a16z.com/why-do-investors-care-so-much-about-ltvcac/).

One caveat. This formula assumes steady churn and no expansion. Once you have real expansion revenue (NRR above 100%), it understates the truth. The fix is a cohort-based LTV: add up the gross profit each cohort actually produces over the months you have watched them, then project forward using the retention curve's floor instead of a flat churn rate. At Seed and early Series A, the simple formula is close enough to make decisions. Switch to the cohort version once expansion is real.

Owner: Finance.

### CAC (Customer Acquisition Cost)

The full cost to win one new paying customer.

```
CAC = all sales and marketing spend ÷ new customers won
```

"Full cost" means everything, not just the ad bill:

- Salaries for sales and marketing
- Ad spend
- Tools the teams use to sell
- Contractors and agencies

Leave out the part of Customer Success that just keeps and supports customers. That work belongs in cost of goods, not acquisition. One catch: if part of your CS team drives upsells and renewals, that part is really sales, and many companies fold its cost into CAC. Split it by what the people actually do.

A customer counts as "won" at their first paid charge. Not at trial start. Not when sales marked the deal as a chance.

Owner: Finance or RevOps.

### LTV to CAC

What a customer is worth divided by what they cost to get. The core health check for the business model.

```
LTV / CAC
```

| Ratio | What it means |
|-------|---------------|
| Over 3x | Healthy. The standard target. |
| 1x to 3x | Works, but you are not very efficient. |
| Under 1x | You lose money on every customer. Stop and fix it. |

The 3x target comes from [David Skok](https://www.forentrepreneurs.com/saas-metrics-2/) and assumes you used gross profit for LTV. Treat it as a floor, not a goal.

Owner: Finance.

### CAC Payback

How many months of gross profit it takes to earn back the cost of winning a customer.

```
CAC Payback = CAC ÷ (ARPU × gross margin)
```

Gross margin matters here, so know yours. Healthy SaaS gross margin runs 70% to 85%, with the [median around 77%](https://www.benchmarkit.ai/2025benchmarks). If yours is well under that, your real payback is longer than a revenue-only number suggests, and that is worth fixing before you scale spend.

Under 12 months is efficient. Over 24 months is risky, especially before you raise your Series A, because you are tying up cash for two years per customer. [Bessemer](https://www.bvp.com/atlas/state-of-the-cloud-2023) puts the best companies under 12 months, though enterprise deals run longer by design. The private SaaS median was [around 18 months in 2024](https://www.benchmarkit.ai/2025benchmarks), up from 14 the year before, so do not panic if you are above 12, but know that under 12 is the goal.

Owner: Finance.

## Metrics Maturity

You do not need every metric on day one. Tracking too many too early wastes time you do not have. Here is roughly what to care about at each stage.

| Metric | Seed | Series A | Series B |
|--------|------|----------|----------|
| MRR / ARR | Yes | Yes | Yes |
| MRR Movement | Nice to have | Yes | Yes |
| Customer Churn | Yes | Yes | Yes |
| Revenue Churn | Nice to have | Yes | Yes |
| NRR | Too noisy yet | Yes | Yes, key metric |
| GRR | Later | Yes | Yes |
| Cohort Retention | Start simple | Yes | Yes |
| Activation Rate | Yes | Yes | Yes |
| WAU / MAU | Yes | Yes | Yes |
| Stickiness | Later | Nice to have | Yes |
| LTV / CAC | Rough guess | Yes | Yes |
| CAC Payback | Later | Yes | Yes |

At Seed, focus on MRR, churn, and activation. Three questions: are you growing, are you keeping customers, and do new users reach the point where the product clicks. That is enough.

At Series A, add the retention and efficiency metrics. Investors will ask for NRR and LTV/CAC, and you now have enough customers for them to mean something.

At Series B, you go deeper. You break cohorts and NRR down by segment and pricing tier, because by now the blended numbers hide more than they show.

## Who owns what

Metrics break when nobody owns them. Here is a clean split for an early-stage team.

| Metric | Owner |
|--------|-------|
| MRR, ARR, MRR Movement | Finance |
| NRR, GRR | Finance |
| Customer Churn | Customer Success |
| Revenue Churn | Finance |
| Cohort Retention | Finance with Product |
| DAU, WAU, MAU | Product |
| Stickiness | Product |
| Activation Rate, Time to Activate | Product |
| Feature Adoption | The feature's owner |
| LTV, CAC, LTV/CAC, CAC Payback | Finance |

Owner does not mean the only person who looks at it. It means one person is responsible for the definition and the number being right.

## Where this data actually lives

Writing the definitions down is step one. The harder part is the plumbing. These metrics live across Stripe, your CRM, your product database, and a product analytics tool, and none of them agree out of the box. There is no single place the numbers come from, so people pull their own version and the arguments start again.

I learned this the expensive way at Agora. There was no shared place to track what each team was building, and no data dictionary that Systems Operations actually used. So the validation rules in Salesforce went unenforced, and every report started with hours of cleaning data that should never have been dirty. The fix was not a fancier dashboard. It was a written dictionary, enforced validation at the point of entry, and pipelines that turned those rules into checks, so the cleaning stopped being a monthly tax. The definitions were not the whole problem. The pipes were. A metric is only as trustworthy as the path the data took to get there.

The definitions are step one; the pipelines that enforce them are the harder, more durable half. A metric is only as trustworthy as the path the data took to get there.
