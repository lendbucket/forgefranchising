import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const INDUSTRY_SLUGS = [
  'restaurants',
  'salons-beauty',
  'fitness',
  'home-services',
  'health-medical',
  'retail',
  'automotive',
  'childcare-education',
  'cleaning',
  'pet-care',
]

const STATE_SLUGS = [
  'alabama', 'alaska', 'arizona', 'arkansas', 'california',
  'colorado', 'connecticut', 'delaware', 'florida', 'georgia',
  'hawaii', 'idaho', 'illinois', 'indiana', 'iowa',
  'kansas', 'kentucky', 'louisiana', 'maine', 'maryland',
  'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri',
  'montana', 'nebraska', 'nevada', 'new-hampshire', 'new-jersey',
  'new-mexico', 'new-york', 'north-carolina', 'north-dakota', 'ohio',
  'oklahoma', 'oregon', 'pennsylvania', 'rhode-island', 'south-carolina',
  'south-dakota', 'tennessee', 'texas', 'utah', 'vermont',
  'virginia', 'washington', 'west-virginia', 'wisconsin', 'wyoming',
]

const BLOG_SLUGS = [
  'what-is-franchising',
  'how-to-franchise-your-business',
  'franchise-disclosure-document-explained',
  'franchise-fees-and-costs',
  'how-long-does-it-take-to-franchise',
  'franchise-vs-license',
  'what-makes-a-business-franchisable',
  'operations-manual-guide',
  'franchise-marketing-plan',
  'choosing-a-franchise-consultant',
  'fdd-item-19-financial-performance',
  'franchise-territory-mapping',
  'franchise-agreement-key-terms',
  'how-to-find-franchisees',
  'franchise-training-programs',
  'multi-unit-franchise-strategy',
  'franchise-compliance-checklist',
  'state-franchise-registration-guide',
  'franchise-royalty-structures',
  'building-a-franchise-brand',
  'franchise-technology-systems',
  'franchise-real-estate-strategy',
  'international-franchising-basics',
  'franchise-legal-requirements',
  'franchise-growth-timeline',
  'unit-economics-for-franchises',
  'franchise-support-infrastructure',
  'common-franchise-mistakes',
  'franchise-exit-strategies',
  'franchise-industry-trends-2026',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/how-it-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/packages`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/calculator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/is-my-business-franchisable`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/financing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glossary`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  const indexPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/franchise-laws`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  const industryPages: MetadataRoute.Sitemap = INDUSTRY_SLUGS.map((slug) => ({
    url: `${SITE_URL}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const statePages: MetadataRoute.Sitemap = STATE_SLUGS.map((slug) => ({
    url: `${SITE_URL}/franchise-laws/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...corePages, ...indexPages, ...industryPages, ...statePages, ...blogPages]
}
