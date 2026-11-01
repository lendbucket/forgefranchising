import { SELL_INDUSTRIES } from './sell-industries'
import { TEXAS_BROKERAGE_MARKETS } from './texas-brokerage-markets'

/**
 * "Selling a business" block for brokerage topic blog posts. Each post links
 * to the industry or Texas market pages that match its subject.
 */
const ALL_INDUSTRIES = SELL_INDUSTRIES.map((i) => i.slug)
const ALL_MARKETS = TEXAS_BROKERAGE_MARKETS.map((m) => m.slug)

const BLOCKS: Record<string, { industries: string[]; markets: string[] }> = {
  'hvac-business-valuation': { industries: ['hvac-business', 'plumbing-business', 'electrical-contracting-business'], markets: [] },
  'franchise-transfer-approval': { industries: ['franchise-location'], markets: [] },
  'what-is-a-business-broker': { industries: [], markets: ALL_MARKETS },
  'how-to-sell-a-small-business-by-owner': { industries: ALL_INDUSTRIES, markets: [] },
  'i-want-to-sell-my-business': { industries: ALL_INDUSTRIES, markets: [] },
  'confidentiality-when-selling-a-business': { industries: [], markets: ALL_MARKETS },
  'how-much-can-i-sell-my-business-for': { industries: ALL_INDUSTRIES, markets: [] },
  'sellers-discretionary-earnings': { industries: ALL_INDUSTRIES, markets: [] },
}

export type SellingLink = { label: string; href: string }

export function sellingLinksFor(postSlug: string): SellingLink[] {
  const block = BLOCKS[postSlug]
  if (!block) return []
  return [
    ...SELL_INDUSTRIES.filter((i) => block.industries.includes(i.slug)).map((i) => ({ label: i.h1, href: `/sell-your-business/${i.slug}` })),
    ...TEXAS_BROKERAGE_MARKETS.filter((m) => block.markets.includes(m.slug)).map((m) => ({ label: m.h1, href: `/texas-business-broker/${m.slug}` })),
  ]
}
