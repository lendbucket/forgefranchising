export const SITE_NAME = 'Forge Franchising Group'
export const SITE_URL = 'https://www.forgefranchising.com'
export const SITE_DESCRIPTION =
  'Forge Franchising Group turns proven local businesses into national franchise brands. Operator built franchise development with real experience, modern software, and a documented process.'
export const CONTACT_EMAIL = 'ceo@36west.org'
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
      { label: 'Franchise Glossary', href: '/glossary' },
      { label: 'Franchise Laws by State', href: '/franchise-laws' },
      { label: 'Franchise Calculator', href: '/calculator' },
      { label: 'Franchise Financing', href: '/financing' },
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
  },
  {
    slug: 'salons-beauty',
    name: 'Salons, Beauty & Med Spa',
    shortName: 'Salons & Beauty',
    keyword: 'franchise your salon',
    description: 'Scale your salon, barbershop, or med spa concept through franchising.',
  },
  {
    slug: 'fitness',
    name: 'Fitness & Gyms',
    shortName: 'Fitness',
    keyword: 'franchise your gym',
    description: 'Franchise your fitness concept and build a national brand.',
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    shortName: 'Home Services',
    keyword: 'franchise your home services business',
    description: 'Scale your home services business through franchising.',
  },
  {
    slug: 'health-medical',
    name: 'Health & Medical',
    shortName: 'Health',
    keyword: 'franchise a health business',
    description: 'Franchise your healthcare or medical services concept.',
  },
  {
    slug: 'retail',
    name: 'Retail',
    shortName: 'Retail',
    keyword: 'franchise a retail business',
    description: 'Turn your successful retail concept into a franchise.',
  },
  {
    slug: 'automotive',
    name: 'Automotive',
    shortName: 'Automotive',
    keyword: 'franchise an automotive business',
    description: 'Scale your auto services business through franchising.',
  },
  {
    slug: 'childcare-education',
    name: 'Childcare & Education',
    shortName: 'Childcare',
    keyword: 'franchise a childcare business',
    description: 'Franchise your childcare or education concept.',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    shortName: 'Cleaning',
    keyword: 'franchise a cleaning business',
    description: 'Turn your cleaning business into a scalable franchise brand.',
  },
  {
    slug: 'pet-care',
    name: 'Pet Care',
    shortName: 'Pet Care',
    keyword: 'franchise a pet care business',
    description: 'Scale your pet care or grooming business through franchising.',
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
