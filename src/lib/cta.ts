/**
 * Calls to action by audience. One place decides the primary action for
 * every route, so the hero button, the mid page panel, and the mobile sticky
 * bar always agree.
 *
 * - Franchise development pages: the readiness assessment, with a feasibility
 *   call as the secondary action.
 * - Brokerage pages: a confidential conversation through the page's own
 *   intake form. Brokerage visitors are never sent to the franchise
 *   assessment.
 * - Franchise buyer and resale pages: the page's own intake form.
 * - Own a franchise: the application.
 */

export type Action = { label: string; href: string }
export type Audience = 'development' | 'brokerage' | 'buyer' | 'resale' | 'franchise-offer'

export type PageCTA = {
  audience: Audience
  primary: Action
  secondary?: Action
  mid: { heading: string; body: string }
}

export const ASSESSMENT: Action = { label: 'Get your free readiness score', href: '/is-my-business-franchisable' }
export const FEASIBILITY_CALL: Action = { label: 'Book a free feasibility call', href: '/contact' }
export const ASSESSMENT_LINE = 'Eight questions across the four pillars of the Forge Franchise Readiness Method. About two minutes.'

const development = (heading: string, body = ASSESSMENT_LINE): PageCTA => ({
  audience: 'development',
  primary: ASSESSMENT,
  secondary: FEASIBILITY_CALL,
  mid: { heading, body },
})

const brokerage = (path: string, heading: string, body: string): PageCTA => ({
  audience: 'brokerage',
  primary: { label: 'Start a confidential conversation', href: `${path}#inquiry` },
  mid: { heading, body },
})

const CONFIDENTIAL = 'Every engagement starts with a confidential conversation, and what you share stays between you and Forge.'

/** Exact routes. Templates are matched by prefix in ctaFor(). */
const ROUTES: Record<string, PageCTA> = {
  '/': development('Find out where your business stands'),
  '/about': development('See how your business measures up'),
  '/services': development('Not sure which services you need?', `${ASSESSMENT_LINE} Your score shows which pillars need work first.`),
  '/how-it-works': development('Find out which phase you would start in'),
  '/readiness-method': development('Run the method on your own business'),
  '/packages': development('Not sure which package fits?', `${ASSESSMENT_LINE} Your pillar scores help match a package to where your business is today.`),
  '/financing': development('Check readiness before you fund the work'),
  '/franchise-vs-license': development('See whether franchising fits your business'),
  '/become-a-franchisor': development('Find out if your business is ready to become a franchisor'),
  '/faq': development('Get an answer specific to your business'),
  '/learn': development('Put what you are learning to work'),
  '/glossary': development('Know the terms? Test the business.'),
  '/franchise-branding': development('Is your brand ready to franchise?'),
  '/industries': development('See how your business scores'),
  '/franchise-laws': development('Check readiness before you register'),
  '/locations': development('See how your business scores'),
  '/blog': development('Find out where your business stands'),
  '/sell-your-business': brokerage('/sell-your-business', 'Thinking about selling?', CONFIDENTIAL),
  '/sell-your-business/how-to-sell-a-business': brokerage('/sell-your-business/how-to-sell-a-business', 'Planning your exit?', CONFIDENTIAL),
  '/business-valuation': brokerage('/business-valuation', 'Want a broker opinion of value?', `${CONFIDENTIAL} An opinion of value is not a certified appraisal.`),
  '/texas-business-broker': brokerage('/texas-business-broker', 'Talk to a Texas business broker', CONFIDENTIAL),
  '/buy-a-business': brokerage('/buy-a-business', 'Tell us what you want to buy', 'Share your criteria, budget, and timing in a confidential buyer profile.'),
  '/buy-a-franchise': {
    audience: 'buyer',
    primary: { label: 'Send a buyer profile', href: '/buy-a-franchise#inquiry' },
    mid: { heading: 'Evaluating a franchise?', body: 'Send a buyer profile and Forge can review the brand and its FDD with you before you sign.' },
  },
  '/sell-your-franchise': {
    audience: 'resale',
    primary: { label: 'Send a confidential inquiry', href: '/sell-your-franchise#inquiry' },
    mid: { heading: 'Planning a franchise resale?', body: 'Start with the transfer terms in your franchise agreement. Send a confidential inquiry and Forge can walk through them with you.' },
  },
  '/own-a-franchise': {
    audience: 'franchise-offer',
    primary: { label: 'Apply to own a Forge franchise', href: '/own-a-franchise/apply' },
    mid: { heading: 'Ready to apply?', body: 'The application is the first step. There is no commitment and no fee to apply.' },
  },
}

/** Pages that show no mobile sticky bar: forms, tools, legal, and the proposal. */
const NO_STICKY = [
  '/contact',
  '/is-my-business-franchisable',
  '/calculator',
  '/own-a-franchise/apply',
  '/own-a-franchise/disclosures',
  '/privacy',
  '/terms',
]

export function ctaFor(path: string): PageCTA | null {
  const clean = path.replace(/\/$/, '') || '/'
  if (ROUTES[clean]) return ROUTES[clean]
  if (clean.startsWith('/industries/')) return development('See how your business scores')
  if (clean.startsWith('/locations/')) return development('See how your business scores')
  if (clean.startsWith('/franchise-laws/')) return development('Check readiness before you register')
  if (clean.startsWith('/franchise-branding/')) return development('Is your brand ready to franchise?')
  return null
}

/** The sticky bar's action for a route, or null where it should not show. */
export function stickyFor(path: string): Action | null {
  const clean = path.replace(/\/$/, '') || '/'
  if (clean.startsWith('/proposal/')) return null
  // Blog posts render their own, topic matched bar.
  if (clean.startsWith('/blog/')) return null
  if (NO_STICKY.includes(clean)) return null
  return ctaFor(clean)?.primary ?? null
}

/** Brokerage and buyer pages whose intake form sits at #inquiry. */
const INTAKE_PAGES = ['/sell-your-business', '/sell-your-business/how-to-sell-a-business', '/business-valuation', '/texas-business-broker', '/buy-a-business', '/buy-a-franchise', '/sell-your-franchise']

/** Send links to a brokerage or buyer page straight to its intake form. */
export function toIntake(href: string): string {
  return INTAKE_PAGES.includes(href) ? `${href}#inquiry` : href
}
