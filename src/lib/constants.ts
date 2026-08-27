export const SITE_NAME = 'Forge Franchising Group'
export const SITE_URL = 'https://www.forgefranchising.com'
export const SITE_DESCRIPTION =
  'Forge Franchising Group turns proven local businesses into national franchise brands. Operator built franchise development with real experience, modern software, and a documented process.'
export const CONTACT_EMAIL = 'inquiry@forgefranchising.com'
export const SUPPORT_EMAIL = 'info@forgefranchising.com'
export const MISSION_STATEMENT =
  'Forge Franchising Group exists to turn businesses that already work into franchise brands that scale. We believe an owner who built something successful deserves a real path to growth, not guesswork and not a stack of paperwork. We pair operator experience with technology and a proven process so founders expand with confidence and protect what they built. We only win when the businesses we franchise win.'

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Our Services', href: '/services' },
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'Readiness Method', href: '/readiness-method' },
      { label: 'Packages', href: '/packages' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'All Industries', href: '/industries' },
      { label: 'Restaurants & Food', href: '/industries/restaurants' },
      { label: 'Salons & Beauty', href: '/industries/salons-beauty' },
      { label: 'Fitness & Gyms', href: '/industries/fitness' },
      { label: 'Home Services', href: '/industries/home-services' },
      { label: 'Health & Medical', href: '/industries/health-medical' },
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Automotive', href: '/industries/automotive' },
      { label: 'Childcare & Education', href: '/industries/childcare-education' },
      { label: 'Cleaning', href: '/industries/cleaning' },
      { label: 'Pet Care', href: '/industries/pet-care' },
    ],
  },
  {
    label: 'Resources',
    href: '/learn',
    children: [
      { label: 'Learn & Resources', href: '/learn' },
      { label: 'Blog', href: '/blog' },
      { label: 'Franchise Branding', href: '/franchise-branding' },
      { label: 'Franchise Glossary', href: '/glossary' },
      { label: 'Franchise Laws by State', href: '/franchise-laws' },
      { label: 'Franchise Calculator', href: '/calculator' },
      { label: 'Franchise Financing', href: '/financing' },
      { label: 'Franchise vs License', href: '/franchise-vs-license' },
    ],
  },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const

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
