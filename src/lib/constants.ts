export const SITE_NAME = 'Forge Franchising Group'
export const SITE_URL = 'https://www.forgefranchising.com'
export const SITE_DESCRIPTION =
  'Forge Franchising Group turns proven local businesses into national franchise brands. Operator built franchise development with real experience, modern software, and a documented process.'
export const DEFAULT_OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Forge Franchising Group',
}
export const CONTACT_EMAIL = 'inquiry@forgefranchising.com'
export const SUPPORT_EMAIL = 'info@forgefranchising.com'
export const MISSION_STATEMENT =
  'Forge Franchising Group exists to turn businesses that already work into franchise brands that scale. We believe an owner who built something successful deserves a real path to growth, not guesswork and not a stack of paperwork. We pair operator experience with technology and a proven process so founders expand with confidence and protect what they built. We only win when the businesses we franchise win.'

/**
 * Primary navigation, grouped by audience. The header mega menu, the mobile
 * menu, and the footer columns all read from this list.
 */
export type NavLink = { label: string; href: string; desc: string }
/** href and intro feed the mega menu overview panel. */
export type NavGroup = { label: string; href: string; intro: string; links: NavLink[] }

export const NAV_LINKS: NavGroup[] = [
  {
    label: 'Franchise Your Business',
    href: '/services',
    intro: 'Feasibility, FDD, operations, and franchise sales under one roof.',
    links: [
      { label: 'Services', href: '/services', desc: 'Seven core services under one roof' },
      { label: 'How It Works', href: '/how-it-works', desc: 'Our four-phase franchise development process' },
      { label: 'Readiness Method', href: '/readiness-method', desc: 'Our four-pillar franchise readiness assessment' },
      { label: 'Packages', href: '/packages', desc: 'Engagement tiers for every stage' },
      { label: 'Financing', href: '/financing', desc: 'Funding options for franchise development' },
      { label: 'Franchise vs License', href: '/franchise-vs-license', desc: 'Compare both growth paths side by side' },
      { label: 'Become a Franchisor', href: '/become-a-franchisor', desc: 'Every step of building the franchisor company' },
      { label: 'Industries We Serve', href: '/industries', desc: 'Restaurants, salons, fitness, and more' },
    ],
  },
  {
    label: 'Sell or Buy a Business',
    href: '/sell-your-business',
    intro: 'Confidential business sales in Texas, valuations, and buyer representation.',
    links: [
      { label: 'Sell Your Business', href: '/sell-your-business', desc: 'Confidential business sales in Texas' },
      { label: 'How to Sell a Business', href: '/sell-your-business/how-to-sell-a-business', desc: 'The full process, step by step' },
      { label: 'Business Valuation', href: '/business-valuation', desc: 'A broker opinion of value and how buyers price a business' },
      { label: 'Texas Business Broker', href: '/texas-business-broker', desc: 'Statewide brokerage, market by market' },
      { label: 'Buy a Business', href: '/buy-a-business', desc: 'Buying process, financing, and due diligence' },
    ],
  },
  {
    label: 'Buy a Franchise',
    href: '/buy-a-franchise',
    intro: 'Evaluate brands, read the FDD, and manage resale and transfer approval.',
    links: [
      { label: 'Buy a Franchise', href: '/buy-a-franchise', desc: 'Evaluate brands, read the FDD, validate with owners' },
      { label: 'Sell Your Franchise', href: '/sell-your-franchise', desc: 'Franchise resale and transfer approval' },
    ],
  },
  {
    label: 'Resources',
    href: '/learn',
    intro: 'Free franchise development resources, guides, and tools.',
    links: [
      { label: 'Learn', href: '/learn', desc: 'Free franchise development resources' },
      { label: 'Blog', href: '/blog', desc: 'Guides and compliance breakdowns' },
      { label: 'Franchise Branding', href: '/franchise-branding', desc: 'Why brand is the product when you franchise' },
      { label: 'Franchise Glossary', href: '/glossary', desc: '100+ franchise terms explained' },
      { label: 'Franchise Laws by State', href: '/franchise-laws', desc: 'Registration and filing requirements' },
      { label: 'Franchise Calculator', href: '/calculator', desc: 'Model your franchise economics' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    intro: 'Operator built, not consultant assembled.',
    links: [
      { label: 'About Us', href: '/about', desc: 'Operator built, not consultant assembled' },
      { label: 'Own a Forge Franchise', href: '/own-a-franchise', desc: 'Build a franchise consulting business' },
      { label: 'FAQ', href: '/faq', desc: 'Common questions answered' },
      { label: 'Contact', href: '/contact', desc: 'Book a free feasibility call' },
    ],
  },
]

export const INDUSTRIES = [
  {
    slug: 'restaurants',
    name: 'Restaurants & Food',
    shortName: 'Restaurants',
    keyword: 'franchise your restaurant',
    description: 'Turn your proven restaurant concept into a franchise brand that scales nationwide.',
    metaTitle: 'How to Franchise Your Restaurant',
    metaDescription:
      'How to franchise your restaurant: unit economics, kitchen systems, food safety compliance, and the buildout costs that decide whether your concept can scale.',
    h1: 'How to Franchise Your Restaurant: What It Actually Takes',
  },
  {
    slug: 'salons-beauty',
    name: 'Salons, Beauty & Med Spa',
    shortName: 'Salons & Beauty',
    keyword: 'franchise your salon',
    description: 'Scale your salon, barbershop, or med spa concept through franchising.',
    metaTitle: 'How to Franchise Your Salon or Med Spa',
    metaDescription:
      'How to franchise your salon, barbershop, or med spa. Stylist retention, licensing rules, service menus, and the systems that keep quality consistent at scale.',
    h1: 'How to Franchise Your Salon: What It Actually Takes',
  },
  {
    slug: 'fitness',
    name: 'Fitness & Gyms',
    shortName: 'Fitness',
    keyword: 'franchise your gym',
    description: 'Franchise your fitness concept and build a national brand.',
    metaTitle: 'How to Franchise Your Gym or Studio',
    metaDescription:
      'How to franchise your gym or fitness studio. Membership economics, equipment financing, trainer certification, and territory sizing for boutique fitness brands.',
    h1: 'How to Franchise Your Gym: What It Actually Takes',
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    shortName: 'Home Services',
    keyword: 'franchise a home services company',
    description: 'Scale your home services business through franchising.',
    metaTitle: 'How to Franchise a Service Business',
    metaDescription:
      'How to franchise a service business: territory design, technician training, dispatch software, and the unit economics that make home services franchises scale.',
    h1: 'How to Franchise a Service Business: What It Actually Takes',
  },
  {
    slug: 'health-medical',
    name: 'Health & Medical',
    shortName: 'Health',
    keyword: 'franchise a health business',
    description: 'Franchise your healthcare or medical services concept.',
    metaTitle: 'How to Franchise a Health Business',
    metaDescription:
      'How to franchise a health business or medical clinic. Licensing, corporate practice rules, provider recruiting, and payer mix issues that shape your system.',
    h1: 'How to Franchise a Health Business: What It Actually Takes',
  },
  {
    slug: 'retail',
    name: 'Retail',
    shortName: 'Retail',
    keyword: 'franchise a retail business',
    description: 'Turn your successful retail concept into a franchise.',
    metaTitle: 'How to Franchise a Retail Business',
    metaDescription:
      'How to franchise a retail business. Inventory systems, vendor terms, store buildout standards, and the merchandising discipline that protects your brand.',
    h1: 'How to Franchise a Retail Business: What It Actually Takes',
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    shortName: 'Automotive',
    keyword: 'franchise an automotive business',
    description: 'Scale your auto services business through franchising.',
    metaTitle: 'How to Franchise an Auto Business',
    metaDescription:
      'How to franchise an automotive business. Bay throughput, technician recruiting, equipment costs, and the warranty standards that hold an auto system together.',
    h1: 'How to Franchise an Automotive Business: What It Actually Takes',
  },
  {
    slug: 'childcare-education',
    name: 'Childcare & Education',
    shortName: 'Childcare',
    keyword: 'franchise a childcare business',
    description: 'Franchise your childcare or education concept.',
    metaTitle: 'How to Franchise a Childcare Business',
    metaDescription:
      'How to franchise a childcare business or tutoring center. Staff ratios, state licensing, curriculum control, and enrollment economics across every location.',
    h1: 'How to Franchise a Childcare Business: What It Actually Takes',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    shortName: 'Cleaning',
    keyword: 'franchise a cleaning business',
    description: 'Turn your cleaning business into a scalable franchise brand.',
    metaTitle: 'How to Franchise a Cleaning Business',
    metaDescription:
      'How to franchise a cleaning business. Low buildout costs, route density, labor turnover, and the quality control systems that keep commercial clients renewing.',
    h1: 'How to Franchise a Cleaning Business: What It Actually Takes',
  },
  {
    slug: 'pet-care',
    name: 'Pet Care',
    shortName: 'Pet Care',
    keyword: 'franchise a pet care business',
    description: 'Scale your pet care or grooming business through franchising.',
    metaTitle: 'How to Franchise a Pet Care Business',
    metaDescription:
      'How to franchise a pet care business. Grooming, boarding, and daycare models, plus staffing, facility standards, and the liability controls that buyers expect.',
    h1: 'How to Franchise a Pet Care Business: What It Actually Takes',
  },
] as const

export const FRANCHISE_STATES = {
  registration: [
    'California', 'Hawaii', 'Illinois', 'Indiana', 'Maryland', 'Michigan',
    'Minnesota', 'New York', 'North Dakota', 'Rhode Island', 'South Dakota',
    'Virginia', 'Washington', 'Wisconsin',
  ],
  filing: [
    'Connecticut', 'Florida', 'Kentucky', 'Nebraska', 'North Carolina',
    'South Carolina', 'Texas', 'Utah',
  ],
  noFiling: [] as string[], // Will be computed from the full list
} as const

// --------------------------------------------------------------------------
// Brokerage licensing and Texas consumer notices.
// Leave empty until confirmed. Each renders only when non empty.
// --------------------------------------------------------------------------

/** License type and number for business brokerage advertising. */
export const BROKER_LICENSE_DISCLOSURE = ''

/** TREC Information About Brokerage Services form (IABS) URL. */
export const TREC_IABS_URL = ''

/** TREC Consumer Protection Notice URL. */
export const TREC_CPN_URL = ''

export const INQUIRY_TYPES = {
  seller: 'Sell a Business',
  buyer: 'Buy a Business',
  valuation: 'Business Valuation',
  'franchise-buyer': 'Buy a Franchise',
  'franchise-seller': 'Sell a Franchise',
} as const

export type InquiryType = keyof typeof INQUIRY_TYPES
