# CLAUDE CODE PROMPT: SELL ANY BUSINESS CONTENT AND FRANCHISE BROKER PAGE

Paste everything below this line into Claude Code, in the forgefranchising project on main.

---

Build out the business brokerage side of forgefranchising.com so it serves owners selling any kind of business, not only franchises, and add a franchise broker page that targets "franchise broker" and "franchise brokers near me". Follow the Direction C design system, the shared page templates, and src/lib/cta.ts for calls to action.

## Hard rules

1. Do not change any existing page's title, description, H1, canonical, or structured data unless this prompt names it.
2. Do not touch /proposal/uncaged-fitness, src/lib/proposal-email.ts, or /api/proposal-signature.
3. Writing rules: no em dashes or en dashes, no emojis, no hyphens as sentence connectors, no AI vocabulary (unlock, elevate, seamless, journey, empower, robust, leverage, streamline, game-changer, delve, and similar), no stacked triads, sentence case headings. Corporate natural voice.
4. Nothing fabricated: no deal counts, closed sales, client results, years in business, testimonials, average sale prices, typical sale timelines, or valuation multiples presented as fact for any industry or city. Explain how things work; never claim what Forge has done.
5. Every new page must be genuinely different from its siblings. If a page would be mostly the same text with a city or industry name swapped, do not build it. Duplicate thin pages hurt the whole site.
6. Every new page: one primary keyword, H1 leading with that keyword, unique title (under 60 characters) and description (under 160), canonical, BreadcrumbList and Service or Article schema through src/lib/schema.ts, added to the sitemap, linked from at least two existing pages, and the BrokerageNotice component.
7. Commit in the chunks at the end. Each must pass typecheck, tests, lint, build, the contrast check, and the metadata audit.

## Part 1. Sell a business by industry

Create a dynamic route /sell-your-business/[industry] driven by a new typed data file, src/data/sell-industries.ts. Build these ten:

| Slug | H1 starts with |
|---|---|
| hvac-business | Sell an HVAC business |
| plumbing-business | Sell a plumbing business |
| electrical-contracting-business | Sell an electrical contracting business |
| landscaping-business | Sell a landscaping business |
| restaurant | Sell a restaurant |
| salon | Sell a salon |
| auto-repair-shop | Sell an auto repair shop |
| cleaning-business | Sell a cleaning business |
| home-care-agency | Sell a home care agency |
| franchise-location | Sell a franchise location (link prominently to /sell-your-franchise and keep this page focused on owners comparing a franchise resale with an independent sale; set its canonical to itself and make sure it does not duplicate /sell-your-franchise) |

Each industry entry holds content written specifically for that industry:
- What buyers in this industry look at first (for example, for HVAC: service agreement base, technician retention, license holder transition, fleet condition; for a restaurant: lease terms, liquor permit, kitchen equipment, staff; for home care: state licensing, caregiver retention, payer mix).
- Industry specific records a seller should prepare, beyond the general list.
- How earnings are usually measured for this kind of business (SDE versus EBITDA) and the add backs that commonly need documentation, explained without any multiples or price ranges.
- Licensing and transfer issues, with Texas specifics where they exist (for example, TDLR licensing for electricians and HVAC, TABC permits for restaurants that sell alcohol, Texas HHSC licensing for home care). State only facts you can confirm from the official agency site; if you cannot confirm one, leave it out and list it in the report.
- Confidentiality points specific to the industry (for example, technicians and service customers in trades, staff and regulars in a salon).
- Five FAQ entries specific to the industry, with FAQPage schema.

Every page also includes: the confidential seller intake form (inquiry type seller), the broker opinion of value explanation with the "not a certified appraisal" statement, and links to /business-valuation, /sell-your-business/how-to-sell-a-business, and the matching /industries page where one exists.

Add a "Sell by industry" section to /sell-your-business linking all ten, and add the group to the footer under Sell or Buy a Business.

## Part 2. Sell a business by Texas city

Create /texas-business-broker/[city] for these five markets only: san-antonio, houston, dallas-fort-worth, austin, corpus-christi. Data in src/data/texas-brokerage-markets.ts.

Each page targets "business broker {city}" with the H1 "Business broker in {City}, Texas". Content that must be specific to each market:
- The industries that make up the local economy, drawn only from public sources such as the city's economic development office or the Texas Comptroller regional reports. Link the source. No statistics without a linked source.
- The local buyer pool in general terms (individual owner operators, search funds, private equity add ons, strategic acquirers) only where you can describe it without inventing figures.
- How Forge works with sellers in that market: confidential meetings, remote and in person, and whether Forge has an office there. San Antonio may say Forge has an office there only if src/lib/constants.ts or the site already states an address; otherwise say nothing about offices.
- Four FAQ entries specific to selling in that city, with FAQPage schema.
- The seller intake form, preset to that city.

Link all five from /texas-business-broker and from each related industry page's sidebar or closing section.

## Part 3. Franchise broker page

Create /franchise-broker targeting "franchise broker" and "franchise brokers near me".

- Title: "Franchise Broker in Texas | Forge Franchising" (adjust to fit 60 characters if the site suffix is added automatically).
- H1: "Franchise broker for buyers evaluating a franchise".
- Explain what a franchise broker does for a buyer: clarifying goals and capital, narrowing brands, reading the FDD with the buyer (Items 5, 6, 7, 11, 12, 17, 19, 20, 21), validation calls with existing franchisees, financing options, and coordinating with the buyer's franchise attorney.
- Disclosure section titled "How Forge is paid". Use exactly this placeholder until Robert confirms: "[CONFIRM HOW FORGE IS COMPENSATED ON FRANCHISE PLACEMENTS]". Render it visibly so it cannot ship unnoticed, and list it first in the "Needs Robert" section of the report. Do not guess.
- What a franchise broker does not do: give legal or tax advice, guarantee results, or make earnings representations. Note that franchisors may make financial performance representations only in Item 19 of their FDD.
- Note that some states regulate franchise sellers and brokers, so Forge's franchise brokerage work focuses on Texas buyers. Do not list other states' rules unless you confirm them from official sources.
- Buyer intake form (inquiry type franchise-buyer), six FAQ entries with FAQPage schema, and Service schema with areaServed Texas.
- Link it from /buy-a-franchise, the nav group "Buy a Franchise", the footer, and /locations ("Looking for a franchise broker near you?").
- Do not mention Forge's own franchise offering on this page.

## Part 4. Internal linking

- Add a "Selling a business" block to relevant blog posts (brokerage topics only) linking to the matching industry or city page.
- Make sure each new page links to at least two siblings and that no page is orphaned.

## Verification

Typecheck, tests, lint, build, contrast check. Metadata audit: all existing pages unchanged except /sell-your-business, /texas-business-broker, /buy-a-franchise and /locations body content (their titles and descriptions stay). New pages each have unique titles and descriptions. Run a duplicate content check across the ten industry pages and the five city pages: report the share of identical sentences between any two siblings, and rewrite until no pair shares more than 20 percent outside the shared form, notice and footer. Screenshot one industry page, one city page and /franchise-broker at 1440px and 390px.

## Commit chunks

1. Industry data, route and ten pages.
2. Texas city data, route and five pages.
3. /franchise-broker, nav, footer, internal links and sitemap.

Push each to main after its checks pass. Append a section to OVERNIGHT-REPORT.md listing every new URL with its title, description and primary keyword, every fact you left out because you could not confirm it, and a "Needs Robert" list. Then summarize in chat and remind Robert to purge the Cloudflare cache and resubmit the sitemap.
