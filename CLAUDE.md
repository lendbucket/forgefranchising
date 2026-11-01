Forge Franchising: project rules
Claude Code reads this file at the start of every session. These rules apply to every task in this repository unless Robert explicitly overrides one in the current prompt.
The business
Forge Franchising Group does three things: franchise development for profitable owner operated businesses, business brokerage for owners selling established Texas businesses (and buyers on the purchase side), and franchise brokerage and resale for franchise buyers and owners. Forge also offers its own franchise. Forge is a new company: it has no closed deals, client counts, results or years in business to cite.
Contact: inquiry@forgefranchising.com (sales), info@forgefranchising.com (support).
Stack
Next.js 15 App Router, TypeScript strict, Tailwind, Resend for email, Vitest for tests. Deployed by Vercel from main on GitHub (lendbucket/forgefranchising). DNS and cache on Cloudflare.
Protected areas: never change without explicit approval in the prompt

* /proposal/uncaged-fitness, src/lib/proposal-email.ts, /api/proposal-signature.
* Page titles, meta descriptions, canonicals, H1 wording, and structured data (src/lib/schema.ts and every JSON-LD block).
* Form field names and API routes, including src/lib/intake.ts and src/lib/assessment.ts scoring.
* The sitemap URL list, except when adding new pages.

Content and compliance rules

1. Nothing fabricated. No statistics without a linked source, no client counts, closed deals, results, testimonials, awards, years in business, or claims about what clients chose or achieved.
2. No earnings claims of any kind, anywhere on the site. Financial performance representations about a franchise belong only in Item 19 of an FDD. This applies with extra force to /own-a-franchise and anything about owning a Forge franchise: no income, revenue, payback, territory scarcity, urgency, or demand claims.
3. No unsupported timelines presented as typical outcomes.
4. A broker opinion of value is never described as an appraisal. Forge does not give legal or tax advice; licensed franchise counsel drafts legal documents.
5. City pages never offer a Forge franchise or territory.
6. Market figures cite the International Franchise Association 2026 Franchising Economic Outlook with a link, or are left out.

Writing rules

* No em dashes or en dashes. No hyphens used to join clauses.
* No emojis.
* No AI vocabulary: unlock, elevate, seamless, journey, empower, passionate, hassle-free, cutting-edge, peace of mind, trusted partner, delve, honestly, robust, leverage, streamline, game-changer, best-in-class, and similar.
* No stacked triads, slogan fragments, rhetorical section openers, or padding.
* Sentence case for headings and buttons. Corporate natural voice: state the commitment, state the standard.
* Every hero H1 leads with the page's target keyword.

Design system (Direction C)
Graphite #1C1F23, graphite deep #15171A, steel #4E5A62, ember #E4572E, ember fill #E8663F (graphite text), ember hover #F07A52, ember text #B9401C (on light), ash #D9D5CF, stone #F4F3F0, line #E5E3DF. Inter Tight 700 for headings, Inter for body. Square corners, no gradients or soft card shadows, hairline dividers, 44px minimum tap targets, visible ember focus rings. Calls to action come from src/lib/cta.ts. Never place two same colored sections next to each other.
Required checks before every push
Typecheck, tests, lint, build, the contrast check, the metadata audit (titles, descriptions, H1s and canonicals unchanged on every page not named in the prompt), the structured data diff (empty unless the prompt approves a change), and a sitemap URL count. Screenshot changed pages at 1440px and 390px when the change is visual. Commit in clear chunks and push to main only after the checks pass.
Reporting
Append a dated section to OVERNIGHT-REPORT.md for each job: what changed, commit hashes, check results, anything left out because it could not be confirmed, and a "Needs Robert" list. End every job with a short chat summary and a reminder to purge the Cloudflare cache, plus resubmitting the sitemap when pages were added.
Never

* Run Ahrefs or any paid SEO tool.
* Buy, request, or build links through link schemes.
* Commit secrets or print environment variable values.
