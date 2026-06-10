import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { ContinueLearning } from '@/components/ContinueLearning'
import { StickyCTA } from '@/components/StickyCTA'
import { GlossaryTerms } from './GlossaryTerms'
import { SITE_URL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Franchise Glossary: 40+ Terms',
  description:
    'Franchise glossary with 40+ terms every business owner should know before franchising. Clear definitions, real context, and why each term matters to you.',
  path: '/glossary',
})

type GlossaryTerm = {
  term: string
  slug: string
  definition: string
  whyItMatters: string
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: 'Ad Fund (Marketing Fund)',
    slug: 'ad-fund',
    definition:
      'A pooled fund, usually collected as a percentage of gross sales from every franchisee, that the franchisor uses to pay for system-wide marketing and advertising. The typical contribution ranges from 1% to 4% of gross revenue. The franchisor manages spending decisions, though many FDDs include an obligation to report how the money was used.',
    whyItMatters:
      'When you build your franchise model, you need to decide the ad fund percentage, how it will be governed, and what it covers. Franchisees will scrutinize this. If your ad fund is too high relative to results, it becomes a source of conflict. If it is too low, your brand never gains visibility.',
  },
  {
    term: 'Area Developer',
    slug: 'area-developer',
    definition:
      'An individual or entity that signs an agreement to open multiple franchise units within a specific geographic area over a defined timeline. The area developer operates all the units themselves rather than sub-franchising to others. Development schedules typically require a certain number of units to open within set timeframes.',
    whyItMatters:
      'Area development agreements accelerate your growth by committing a single, vetted operator to multiple locations. However, if an area developer falls behind their schedule, you face a choice between enforcement and flexibility. Your area development agreement needs clear consequences for missed milestones.',
  },
  {
    term: 'Area Development Agreement',
    slug: 'area-development-agreement',
    definition:
      'The contract between a franchisor and an area developer that outlines the territory, the number of units to be opened, the development timeline, fees, and consequences for failing to meet the schedule. This is a separate document from the individual franchise agreements signed for each unit.',
    whyItMatters:
      'This agreement is one of the most important growth tools in your franchise system. A well-drafted area development agreement protects your expansion timeline while giving the developer enough flexibility to operate. A poorly drafted one either lets developers sit on territory without building, or sets unrealistic deadlines that cause good operators to default.',
  },
  {
    term: 'Churning',
    slug: 'churning',
    definition:
      'The practice of a franchisor repeatedly selling a franchise territory to new buyers after previous franchisees fail, without addressing the underlying problems that caused the failures. The franchisor collects new initial franchise fees each time while the location continues to underperform. Some states have taken regulatory action against this behavior.',
    whyItMatters:
      'Churning destroys your brand reputation and invites regulatory scrutiny. If you are seeing repeat failures in certain territories or locations, you need to fix the root cause, whether that is site selection, training, unit economics, or market fit. Franchise regulators and prospective franchisees both look at turnover rates.',
  },
  {
    term: 'Company-Owned Unit',
    slug: 'company-owned-unit',
    definition:
      'A location that the franchisor owns and operates directly, rather than licensing to a franchisee. Company-owned units serve multiple strategic purposes: they function as training centers, testing grounds for new products and processes, and proof points that demonstrate unit economics to prospective franchisees.',
    whyItMatters:
      'Operating at least one company-owned unit gives you credibility with franchisee candidates and provides real financial data you can potentially disclose. It also keeps you connected to the day-to-day reality of running the business, which makes you a better franchisor. Many successful franchise systems maintain company-owned locations indefinitely.',
  },
  {
    term: 'Conversion Franchise',
    slug: 'conversion-franchise',
    definition:
      'A franchise model where existing independent businesses in the same industry convert to operate under the franchisor brand. Instead of building from scratch, the franchisee rebrands their existing location, adopts the franchise system, and begins paying royalties. This model is common in real estate, home services, and hospitality.',
    whyItMatters:
      'Conversion franchising is one of the fastest growth strategies available because you are bringing in operators who already have locations, staff, and revenue. However, converting independent operators comes with unique challenges. They have existing habits, brand loyalty from their current customers, and resistance to changing how they do things. Your onboarding process needs to address this directly.',
  },
  {
    term: 'Disclosure Period',
    slug: 'disclosure-period',
    definition:
      'The legally mandated waiting period between when a prospective franchisee receives the Franchise Disclosure Document and when they can sign a franchise agreement or pay any money. Under the FTC Franchise Rule, this period is 14 calendar days. Some states require longer waiting periods or impose additional timing requirements.',
    whyItMatters:
      'You cannot rush this timeline. If a prospect signs before the disclosure period expires, the entire agreement may be voidable. Build this waiting period into your franchise sales process from day one. Use the time productively by encouraging candidates to speak with existing franchisees and review the document with an attorney.',
  },
  {
    term: 'Discovery Day',
    slug: 'discovery-day',
    definition:
      'A scheduled visit where qualified franchise candidates come to the franchisor headquarters (or a flagship location) to meet the leadership team, observe operations, and ask final questions before making their investment decision. Discovery Day typically occurs late in the sales process, after the candidate has reviewed the FDD and completed initial qualification steps.',
    whyItMatters:
      'Discovery Day is where deals close or fall apart. This is your chance to demonstrate that your operation is real, your team is competent, and your culture is one the candidate wants to join. Prepare thoroughly. Have your operations, training, and support teams present. Let the candidate see the actual business running, not a polished presentation.',
  },
  {
    term: 'Earnings Claim',
    slug: 'earnings-claim',
    definition:
      'Any statement, written or oral, made by a franchisor or its representatives that suggests a specific level of sales, income, or profit that a franchisee can expect to achieve. Under the FTC Franchise Rule, any earnings claim must be included in Item 19 of the FDD with a reasonable basis and supporting documentation.',
    whyItMatters:
      'Making earnings claims outside of the FDD is one of the most common compliance violations in franchising, and one of the most dangerous. If your sales team makes verbal promises about revenue, those statements can create legal liability even if your FDD says otherwise. Train every person involved in franchise sales to understand what they can and cannot say.',
  },
  {
    term: 'Encroachment',
    slug: 'encroachment',
    definition:
      'When a franchisor places a new franchise location, company-owned unit, or alternative distribution channel close enough to an existing franchisee that it negatively impacts their sales or territory. Encroachment disputes are among the most contentious issues in franchising and have led to significant litigation.',
    whyItMatters:
      'Your territory strategy needs to balance growth ambition with franchisee protection. If franchisees feel you are cannibalizing their revenue to sell more franchises, trust collapses. Define territories clearly, base them on real market data, and include specific language in your franchise agreement about how new locations and alternative channels are handled.',
  },
  {
    term: 'Exclusive Territory',
    slug: 'exclusive-territory',
    definition:
      'A geographic area granted to a franchisee in which the franchisor agrees not to establish another franchise or company-owned unit. The boundaries may be defined by zip codes, population counts, mile radius, or other geographic markers. Not all franchise systems offer exclusive territories.',
    whyItMatters:
      'Territory exclusivity is one of the biggest negotiation points in franchising. Offering exclusive territories makes your franchise more attractive to buyers but limits your flexibility to add units in high-demand areas. You need to determine territory size based on actual market data, not arbitrary boundaries. Territories that are too large leave revenue on the table. Territories that are too small make it hard for franchisees to hit their numbers.',
  },
  {
    term: 'FDD (Franchise Disclosure Document)',
    slug: 'fdd',
    definition:
      'A legally required document that franchisors must provide to prospective franchisees before any agreement is signed or money changes hands. The FDD contains 23 specific items covering the franchisor background, fees, obligations, financial statements, and the franchise agreement itself. It must be updated annually and comply with both FTC and applicable state regulations.',
    whyItMatters:
      'The FDD is the single most important document in your franchise system. It is not a formality. It is the legal foundation of every franchise relationship you will have. Cutting corners on FDD preparation leads to regulatory problems, lawsuits, and franchisee disputes. Invest in getting it right from the start.',
  },
  {
    term: 'Filing State',
    slug: 'filing-state',
    definition:
      'A state that requires franchisors to file their Franchise Disclosure Document or provide notice before offering or selling franchises within its borders, but does not conduct a substantive review. Filing states include Connecticut, Florida, Kentucky, Nebraska, North Carolina, South Carolina, Texas, and Utah. The requirements vary by state.',
    whyItMatters:
      'Filing states add an administrative step to your franchise expansion. You cannot simply start selling in these states without completing the filing process. Factor filing timelines and fees into your growth plan. Missing a filing requirement can result in penalties and could void franchise agreements sold in that state.',
  },
  {
    term: 'Financial Performance Representation',
    slug: 'financial-performance-representation',
    definition:
      'The section of the FDD (Item 19) where a franchisor may voluntarily disclose information about the actual or projected financial performance of franchise units. This can include average revenue, median earnings, cost breakdowns, or other financial metrics. If a franchisor chooses to include an Item 19, it must have a reasonable basis for the claims and must disclose the underlying assumptions.',
    whyItMatters:
      'Including a strong Item 19 is one of the most powerful sales tools in franchising. Candidates want to know what they can expect to earn. If you have good unit economics, disclosing them gives you a massive competitive advantage over franchisors that leave Item 19 blank. If your numbers are not strong yet, that is a signal to improve your model before scaling.',
  },
  {
    term: 'Franchise Agreement',
    slug: 'franchise-agreement',
    definition:
      'The binding contract between the franchisor and franchisee that governs the entire relationship. It specifies the rights and obligations of both parties, including territory, fees, operational standards, term length, renewal conditions, transfer rules, and termination provisions. The franchise agreement is included as an exhibit to the FDD.',
    whyItMatters:
      'This contract will govern every franchise relationship in your system for years. It needs to protect your brand while being fair enough that good operators want to sign it. Work with an experienced franchise attorney, not a general business lawyer. The franchise agreement must align precisely with what is disclosed in the FDD.',
  },
  {
    term: 'Franchise Broker',
    slug: 'franchise-broker',
    definition:
      'A third-party sales agent who connects prospective franchisees with franchise brands in exchange for a commission, typically ranging from $10,000 to $25,000 per completed sale. Brokers may work independently or through broker networks. Some states require franchise brokers to register and comply with specific disclosure rules.',
    whyItMatters:
      'Brokers can accelerate your franchise sales, but they come with tradeoffs. They are motivated by commission, not by finding the best fit for your brand. If you use brokers, build a qualification process that gives you final say on who enters your system. A bad franchisee brought in by a broker costs far more than the commission you paid.',
  },
  {
    term: 'Franchise Sales Process',
    slug: 'franchise-sales-process',
    definition:
      'The structured sequence of steps a franchisor uses to move a prospective franchisee from initial inquiry to signed agreement. A typical process includes lead qualification, an introductory call, FDD delivery, a disclosure period, validation calls with existing franchisees, Discovery Day, and final approval. The process must comply with federal and state franchise sales regulations at every step.',
    whyItMatters:
      'Your franchise sales process is where compliance meets conversion. Every step needs to be documented, repeatable, and legally compliant. A disorganized sales process leads to bad franchisees, compliance violations, and wasted time. Build this before you start selling, not after.',
  },
  {
    term: 'Franchisee',
    slug: 'franchisee',
    definition:
      'The individual or entity that purchases the right to operate a business using the franchisor brand, systems, and support. The franchisee invests their own capital, operates independently as a business owner, and pays ongoing royalties and fees in exchange for the right to use the franchise system.',
    whyItMatters:
      'Your franchisees are your brand in the field. Their success is your success, literally. The quality of franchisees you recruit determines whether your system thrives or fails. Be selective. Define your ideal franchisee profile before you start selling, and do not compromise because someone has the money.',
  },
  {
    term: 'Franchisor',
    slug: 'franchisor',
    definition:
      'The company or individual that owns the franchise brand and licenses the right to operate it to franchisees. The franchisor is responsible for developing the franchise system, maintaining brand standards, providing training and support, preparing the FDD, and ensuring legal compliance across all markets where the franchise operates.',
    whyItMatters:
      'As the franchisor, you take on a significant set of legal, operational, and ethical obligations. You are not just licensing a name. You are building a system that other people will invest their savings into. Understanding this responsibility from the start shapes better decisions about fees, support, and growth.',
  },
  {
    term: 'FTC Franchise Rule',
    slug: 'ftc-franchise-rule',
    definition:
      'The federal regulation (16 CFR Part 436) issued by the Federal Trade Commission that governs franchise sales in the United States. The Rule requires franchisors to provide a Franchise Disclosure Document to prospective franchisees at least 14 days before any agreement is signed or payment is made. It defines what constitutes a franchise, what must be disclosed, and the penalties for non-compliance.',
    whyItMatters:
      'The FTC Franchise Rule is the baseline legal framework for every franchise in America. Non-compliance can result in enforcement actions, rescission of franchise agreements, and significant financial penalties. You do not need to memorize the Rule, but you need to work with advisors who know it inside and out.',
  },
  {
    term: 'Good Faith and Fair Dealing',
    slug: 'good-faith-and-fair-dealing',
    definition:
      'A legal principle, implied in many franchise agreements by state law, that requires both parties to act honestly and fairly in performing their contractual obligations. This means neither the franchisor nor the franchisee should take actions that undermine the other party reasonable expectations under the agreement. The scope and enforceability of this duty varies by state.',
    whyItMatters:
      'Even if your franchise agreement gives you broad discretion on certain decisions (pricing, sourcing, territory modifications), exercising that discretion in a way that harms franchisees can trigger legal claims. Build your franchise culture around fairness, not just what the contract technically allows. Systems built on trust outperform systems built on leverage.',
  },
  {
    term: 'Initial Franchise Fee',
    slug: 'initial-franchise-fee',
    definition:
      'The one-time, upfront payment a franchisee makes to the franchisor for the right to open a franchise unit. This fee typically covers initial training, site selection assistance, and the right to use the brand and system. Initial franchise fees in the U.S. generally range from $20,000 to $75,000, though they can be higher or lower depending on the industry and brand.',
    whyItMatters:
      'Setting your initial franchise fee requires balancing multiple factors: the actual cost of onboarding a new franchisee, the perceived value of your brand, competitive positioning, and what the market will bear. Price too high and you scare off qualified candidates. Price too low and you signal that your brand is not valuable, plus you may not recover your onboarding costs.',
  },
  {
    term: 'Item 7',
    slug: 'item-7',
    definition:
      'The section of the FDD that discloses the estimated initial investment required to open and operate a franchise. Item 7 breaks down every cost the franchisee should expect, from the initial franchise fee and build-out to equipment, inventory, insurance, and working capital needed for the first few months of operation. The estimates must be based on reasonable assumptions.',
    whyItMatters:
      'Item 7 is the first thing most franchise candidates look at. It tells them how much money they need. If your estimates are too low, franchisees run out of capital and fail. If they are too high, you lose candidates to competing brands. Base every number on real data from your operating locations, and update them annually.',
  },
  {
    term: 'Item 19',
    slug: 'item-19',
    definition:
      'The section of the FDD where a franchisor may provide a Financial Performance Representation. This is the only place where a franchisor can legally make claims about the financial performance of its franchise units. Including an Item 19 is optional, but any information presented must have a reasonable basis and the assumptions must be clearly stated.',
    whyItMatters:
      'Roughly 65% of franchise systems now include some form of Item 19 disclosure. If your competitors are showing their numbers and you are not, candidates will wonder why. A well-constructed Item 19 built on strong unit economics is arguably the most effective franchise sales tool that exists. It converts candidates faster than any marketing campaign.',
  },
  {
    term: 'Master Franchise',
    slug: 'master-franchise',
    definition:
      'A franchise structure where the franchisor grants an individual or entity (the master franchisee or sub-franchisor) the right to sell and manage franchises within a defined territory, often an entire country or large region. The master franchisee takes on many of the franchisor responsibilities, including training, support, and compliance, in exchange for a share of franchise fees and royalties.',
    whyItMatters:
      'Master franchising is the primary model for international expansion. It lets you enter markets where you lack local expertise by partnering with someone who has it. The tradeoff is control. You are handing significant authority to someone else to represent your brand. Vetting master franchise candidates requires extreme diligence because a bad master franchisee can damage your brand in an entire market.',
  },
  {
    term: 'Multi-Unit Franchise',
    slug: 'multi-unit-franchise',
    definition:
      'A franchise arrangement where a single franchisee owns and operates more than one unit within the system. Multi-unit operators may acquire additional units over time or sign an area development agreement from the start. Multi-unit franchisees account for a growing share of total franchise units across the industry.',
    whyItMatters:
      'Multi-unit operators are the backbone of most mature franchise systems. They are experienced, financially capable, and operationally sophisticated. Your franchise model should have a clear path for single-unit operators to grow into multi-unit owners. The economics need to reward growth, and your support systems need to work for operators managing multiple locations.',
  },
  {
    term: 'Non-Compete',
    slug: 'non-compete',
    definition:
      'A restrictive covenant in the franchise agreement that prohibits the franchisee from operating or having an interest in a competing business during the term of the agreement and for a specified period after termination or expiration. Non-competes typically define the restricted activities, geographic scope, and duration. Enforceability varies significantly by state.',
    whyItMatters:
      'Non-compete clauses protect your system from franchisees who leave and open a competing business using everything they learned from your training and operations manual. However, courts in many states scrutinize these provisions closely. Your non-compete must be reasonable in scope, geography, and duration to be enforceable. Work with franchise counsel to draft language that holds up in your target markets.',
  },
  {
    term: 'Operations Manual',
    slug: 'operations-manual',
    definition:
      'The comprehensive document (or digital system) that contains every standard operating procedure, policy, and guideline a franchisee needs to run their business according to the franchise system specifications. The operations manual covers everything from daily opening procedures to customer service standards, hiring practices, vendor requirements, and brand guidelines. It is referenced in the franchise agreement and is typically considered confidential.',
    whyItMatters:
      'The operations manual is how you replicate your business. Without a thorough, clear, and usable manual, your franchisees will fill in the gaps with their own methods, and your brand consistency will erode. Invest serious time in building a manual that someone with no prior experience in your industry could follow. This is not a formality. It is the operating system of your franchise.',
  },
  {
    term: 'Protected Territory',
    slug: 'protected-territory',
    definition:
      'A defined geographic area within which the franchisor agrees to certain restrictions, such as not placing another franchise or company-owned unit. The level of protection varies: some territories are fully exclusive, while others only restrict the franchisor from granting another franchise within the area without restricting other distribution channels like online sales.',
    whyItMatters:
      'How you define and protect territories directly affects franchisee satisfaction and your own growth flexibility. Be precise about what "protection" means in your system. Vague territory language leads to disputes. Overly generous territories limit your growth. Find the middle ground based on real population data and market analysis.',
  },
  {
    term: 'Registration State',
    slug: 'registration-state',
    definition:
      'A state that requires franchisors to register their Franchise Disclosure Document with a state regulatory agency and receive approval before offering or selling franchises. Registration states conduct a substantive review of the FDD, which can result in comments, required changes, and processing delays. The 14 registration states are California, Hawaii, Illinois, Indiana, Maryland, Michigan, Minnesota, New York, North Dakota, Rhode Island, South Dakota, Virginia, Washington, and Wisconsin.',
    whyItMatters:
      'Registration states add significant time and cost to your franchise rollout. Some states, like California and New York, are particularly thorough in their review. You cannot sell in these states until your registration is approved, and the process can take weeks or months. Plan your state-by-state launch strategy around these timelines, and budget for the legal fees involved.',
  },
  {
    term: 'Renewal Fee',
    slug: 'renewal-fee',
    definition:
      'A fee charged by the franchisor when a franchisee renews their franchise agreement at the end of its initial term. Renewal fees are typically lower than the initial franchise fee and may range from a few thousand dollars to a percentage of the original fee. The conditions for renewal, including fee amounts and any requirements (like remodeling), are specified in the franchise agreement and disclosed in the FDD.',
    whyItMatters:
      'Renewal terms are a critical but often overlooked part of franchise structure. Your best franchisees will want to renew. Make the process straightforward and the fee reasonable. However, renewal is also your opportunity to bring underperforming franchisees up to current standards, including facility upgrades, new technology adoption, and updated training.',
  },
  {
    term: 'ROBS (Rollover for Business Startups)',
    slug: 'robs',
    definition:
      'A financing strategy that allows individuals to use funds from an existing retirement account (such as a 401k or IRA) to invest in a new business without incurring early withdrawal penalties or taxes. The process involves creating a C-corporation, establishing a new retirement plan under that corporation, rolling existing retirement funds into the new plan, and using those funds to purchase stock in the new corporation. The corporation then uses the capital to fund the business.',
    whyItMatters:
      'ROBS is one of the most common ways franchisees fund their initial investment without taking on debt. As a franchisor, you should understand this option because many of your prospective franchisees will ask about it. Be aware that ROBS transactions require careful compliance with IRS and DOL regulations, and candidates should work with a qualified ROBS provider.',
  },
  {
    term: 'Royalty Fee',
    slug: 'royalty-fee',
    definition:
      'The ongoing fee a franchisee pays to the franchisor, usually calculated as a percentage of gross sales (typically 4% to 8%) and paid weekly or monthly. Royalties are the primary recurring revenue stream for the franchisor and fund ongoing support, brand development, technology, and system administration. Some franchise systems charge flat-rate royalties instead of percentage-based fees.',
    whyItMatters:
      'Your royalty rate is one of the most consequential decisions in franchise development. Set it too high and franchisees struggle to be profitable. Set it too low and you cannot afford to provide the support and infrastructure your system needs. Model the royalty against real unit economics to find the rate that works for both sides. This number also determines the long-term valuation of your franchise company.',
  },
  {
    term: 'SBA Loan',
    slug: 'sba-loan',
    definition:
      'A small business loan partially guaranteed by the U.S. Small Business Administration, which reduces the risk for lenders and makes financing more accessible to franchise buyers. SBA loans are one of the most common financing methods for franchise investments. The SBA maintains a Franchise Directory of approved brands, and loans typically cover startup costs, equipment, and working capital with favorable terms compared to conventional loans.',
    whyItMatters:
      'Getting your franchise listed on the SBA Franchise Directory is an important step because it streamlines the lending process for your franchisees. Many franchise buyers rely on SBA financing, so being SBA-approved expands your pool of qualified candidates. Work with your franchise attorney to ensure your FDD and franchise agreement meet SBA requirements.',
  },
  {
    term: 'Single-Unit Franchise',
    slug: 'single-unit-franchise',
    definition:
      'A franchise agreement granting the right to open and operate one franchise location. This is the most common entry point for first-time franchisees. The franchisee focuses all their resources and attention on a single unit, which can later serve as a foundation for expanding to additional locations.',
    whyItMatters:
      'Most franchise systems start by selling single-unit agreements because it keeps the barrier to entry manageable and lets you build a base of proven operators. Your single-unit model needs to demonstrate strong enough economics that operators can earn a good living from one location while still paying royalties and fees.',
  },
  {
    term: 'Sub-Franchisor',
    slug: 'sub-franchisor',
    definition:
      'An entity granted the right by the franchisor to sell franchises and provide ongoing support to franchisees within a designated territory. The sub-franchisor essentially acts as a regional franchisor, handling many of the responsibilities that the parent franchisor would normally perform. This structure is most common in international franchising.',
    whyItMatters:
      'Sub-franchising allows rapid expansion into markets you cannot serve directly, but it introduces a layer between you and your end franchisees. The quality of the sub-franchisor relationship directly impacts brand consistency and franchisee satisfaction in that market. Choose sub-franchisors with the same care you would choose a business partner.',
  },
  {
    term: 'Territory',
    slug: 'territory',
    definition:
      'The geographic area assigned to a franchisee for operating their franchise business. Territories can be exclusive (no other units allowed), protected (limited restrictions), or non-exclusive (no territorial guarantees). Territory boundaries are typically defined using zip codes, county lines, population counts, geographic coordinates, or a radius from a specific address.',
    whyItMatters:
      'Territory design is a strategic decision that affects everything from franchisee profitability to system growth potential. Territories based on arbitrary boundaries instead of market data create problems. Use demographic data, population density, traffic patterns, and competitive analysis to define territories that give franchisees a real chance at hitting their financial targets.',
  },
  {
    term: 'Training Program',
    slug: 'training-program',
    definition:
      'The structured educational program that the franchisor provides to new franchisees and their key employees. Training typically includes classroom instruction at the franchisor headquarters, hands-on experience at an operating location, and on-site support during the franchisee opening period. The training program content, duration, and location must be disclosed in the FDD.',
    whyItMatters:
      'Your training program is where franchisees learn to execute your system. If training is weak, franchisees will struggle, and your brand will suffer. Build a training program that covers not just operations, but also financial management, hiring, customer service, and local marketing. The best franchise training programs create operators who can run the business independently within weeks.',
  },
  {
    term: 'Transfer Fee',
    slug: 'transfer-fee',
    definition:
      'A fee charged by the franchisor when a franchisee sells or transfers their franchise to a new owner. The franchisor typically has the right of first refusal and must approve the incoming buyer. Transfer fees cover the cost of evaluating the new franchisee, providing training, and processing the legal transfer. They generally range from $5,000 to $15,000 or a percentage of the transfer price.',
    whyItMatters:
      'Transfers will happen in your system. Franchisees retire, relocate, or decide the business is not for them. Having clear transfer provisions protects your brand by ensuring new owners meet your qualifications. The transfer fee should be reasonable enough that it does not discourage legitimate sales, but sufficient to cover your actual costs in vetting and training the new operator.',
  },
  {
    term: 'Unit Economics',
    slug: 'unit-economics',
    definition:
      'The financial performance metrics of a single franchise location, including revenue, cost of goods sold, labor costs, occupancy costs, royalties, ad fund contributions, and net profit. Strong unit economics mean that an individual franchise location generates enough profit to provide the franchisee a reasonable return on their investment after all expenses, including franchise fees.',
    whyItMatters:
      'Unit economics are the foundation of your entire franchise system. If a single unit does not generate strong returns for the operator, nothing else matters. Your royalty rate, required investment level, and operational requirements all need to produce a model where franchisees can earn a compelling return. Validate your unit economics with real data before you start selling franchises.',
  },
  {
    term: 'Validation',
    slug: 'validation',
    definition:
      'The process where a prospective franchisee contacts existing franchisees to ask about their experience with the franchise system. Validation calls are a standard part of the franchise sales process, and franchisors are required to provide contact information for current and former franchisees in the FDD. Prospective buyers typically ask about training quality, support responsiveness, financial performance, and overall satisfaction.',
    whyItMatters:
      'Validation is where your franchise sales process either accelerates or dies. If your existing franchisees are unhappy, underprepared, or unresponsive, candidates will walk away. The best way to pass validation is to genuinely support your franchisees so they have positive things to say. There is no shortcut here. Validation reflects the actual health of your franchise system.',
  },
]

// Group terms by first letter
function groupTermsByLetter(terms: GlossaryTerm[]) {
  const groups: Record<string, GlossaryTerm[]> = {}
  for (const term of terms) {
    const letter = term.term[0].toUpperCase()
    if (!groups[letter]) {
      groups[letter] = []
    }
    groups[letter].push(term)
  }
  return groups
}

export default function GlossaryPage() {
  const grouped = groupTermsByLetter(glossaryTerms)
  const letters = Object.keys(grouped).sort()
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Franchise Glossary',
    description:
      'A comprehensive glossary of franchise terms for business owners considering franchising their business.',
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: glossaryTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.definition,
      url: `${SITE_URL}/glossary#${term.slug}`,
      inDefinedTermSet: `${SITE_URL}/glossary`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero */}
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Learn', href: '/learn' }, { label: 'Franchise Glossary' }]} />
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              Franchise Education
            </p>
            <h1 className="heading-1 mb-8">Franchise Glossary</h1>
            <p className="body-large mb-6">
              Franchising has its own language. If you are considering turning your business into a
              franchise, you need to understand these terms before you sign anything, hire anyone, or
              spend a dollar on development.
            </p>
            <p className="body-large">
              This glossary covers 40+ terms you will encounter during the franchise development
              process. Each definition explains what the term means, and more importantly, why it
              matters for someone in your position.
            </p>
          </div>
        </div>
      </section>

      {/* Jump-to-Letter Navigation */}
      <section className="bg-deep-cream border-b border-espresso/10 sticky top-16 lg:top-20 z-40">
        <div className="container-wide py-4">
          <nav aria-label="Alphabetical navigation" className="flex flex-wrap gap-1 sm:gap-2 justify-center">
            {alphabet.map((letter) => {
              const hasTerms = letters.includes(letter)
              return hasTerms ? (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-9 h-9 flex items-center justify-center rounded-md text-sm font-semibold text-espresso hover:bg-amber hover:text-cream transition-colors"
                >
                  {letter}
                </a>
              ) : (
                <span
                  key={letter}
                  className="w-9 h-9 flex items-center justify-center rounded-md text-sm text-muted-brown/30"
                >
                  {letter}
                </span>
              )
            })}
          </nav>
        </div>
      </section>

      {/* Glossary Terms: progressive disclosure via expandable sections */}
      <section className="section-padding bg-cream">
        <div className="container-wide max-w-4xl">
          <GlossaryTerms grouped={grouped} letters={letters} />
        </div>
      </section>

      <ContinueLearning
        heading="Put These Terms in Context"
        links={[
          { label: 'How the Franchise Process Works', href: '/how-it-works', description: 'See where these terms fit in the four-phase franchise development process.' },
          { label: 'What Is an FDD?', href: '/blog/franchise-disclosure-document', description: 'The most important franchise document, broken down item by item.' },
          { label: 'Get Your Readiness Score', href: '/is-my-business-franchisable', description: 'Two-minute assessment to see if your business is ready to franchise.' },
        ]}
      />

      <SectionCTA
        heading="Know the Terms. Now Learn the Process."
        body="Understanding franchise terminology is the first step. The next step is understanding whether your business is ready to franchise. Book a free feasibility call and we will walk through it together."
        buttonText="Book a Free Feasibility Call"
        buttonHref="/contact"
      />

      <StickyCTA
        text="Get Your Free Readiness Score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
