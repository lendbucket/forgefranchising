import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, MISSION_STATEMENT, CONTACT_EMAIL, SUPPORT_EMAIL } from './constants'

// --------------------------------------------------------------------------
// Centralized JSON-LD schema module
// Fortune 500 pattern: single @graph per page with @id cross-references
// --------------------------------------------------------------------------

type SchemaNode = Record<string, unknown>

// ==========================================================================
// 1. Organization (also typed as ProfessionalService)
// ==========================================================================
export function organizationSchema(): SchemaNode {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/forge-franchising-logo.png`,
    description: SITE_DESCRIPTION,
    slogan: MISSION_STATEMENT,
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: CONTACT_EMAIL,
        contactType: 'sales',
      },
      {
        '@type': 'ContactPoint',
        email: SUPPORT_EMAIL,
        contactType: 'customer support',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/forgefranchising',
      'https://www.facebook.com/forgefranchising',
      'https://www.instagram.com/forgefranchising',
      'https://x.com/forgefranchising',
      'https://www.youtube.com/@forgefranchising',
    ],
    knowsAbout: [
      'Franchise Development',
      'Franchise Disclosure Documents',
      'Franchise Law',
      'Operations Manuals',
      'Franchise Branding',
      'Royalty Structures',
      'Franchise Consulting',
      'Franchise Sales Systems',
    ],
    serviceType: [
      'Franchise Development',
      'Franchise Consulting',
      'Franchise Brokerage',
    ],
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
      logo: `${SITE_URL}/forge-franchising-logo.png`,
    },
  }
}

// ==========================================================================
// 2. WebSite
// ==========================================================================
export function websiteSchema(): SchemaNode {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

// ==========================================================================
// 3. WebPage
// ==========================================================================
export function webPageSchema({
  url,
  name,
  description,
  hasBreadcrumb = false,
}: {
  url: string
  name: string
  description: string
  hasBreadcrumb?: boolean
}): SchemaNode {
  const node: SchemaNode = {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  }
  if (hasBreadcrumb) {
    node.breadcrumb = { '@id': `${url}/#breadcrumb` }
  }
  return node
}

// ==========================================================================
// 4. BreadcrumbList
// ==========================================================================
export function breadcrumbSchema(
  url: string,
  items: { name: string; url?: string }[],
): SchemaNode {
  const listItems = [
    { name: 'Home', url: SITE_URL },
    ...items,
  ]
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url}/#breadcrumb`,
    itemListElement: listItems.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  }
}

// ==========================================================================
// 5. Service
// ==========================================================================
export function serviceSchema({
  url,
  name,
  description,
  serviceType,
  catalog,
}: {
  url: string
  name: string
  description: string
  serviceType?: string
  catalog?: { name: string; items: { name: string; description: string; url?: string }[] }
}): SchemaNode {
  const node: SchemaNode = {
    '@type': 'Service',
    '@id': `${url}/#service`,
    name,
    description,
    url,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }
  if (serviceType) {
    node.serviceType = serviceType
  }
  if (catalog) {
    node.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: catalog.name,
      itemListElement: catalog.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item.name,
          description: item.description,
          ...(item.url ? { url: item.url } : {}),
        },
      })),
    }
  }
  return node
}

// ==========================================================================
// 6. Article / BlogPosting
// ==========================================================================
export function articleSchema({
  url,
  headline,
  description,
  datePublished,
  dateModified,
  image,
  articleType = 'Article',
  articleSection,
  wordCount,
}: {
  url: string
  headline: string
  description: string
  datePublished?: string
  dateModified?: string
  image?: string
  articleType?: 'Article' | 'BlogPosting'
  articleSection?: string
  wordCount?: number
}): SchemaNode {
  const node: SchemaNode = {
    '@type': articleType,
    '@id': `${url}/#article`,
    headline,
    description,
    url,
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: { '@id': `${url}/#webpage` },
  }
  if (datePublished) node.datePublished = datePublished
  if (dateModified) node.dateModified = dateModified
  if (image) node.image = image
  if (articleSection) node.articleSection = articleSection
  if (wordCount) node.wordCount = wordCount
  return node
}

// ==========================================================================
// 7. FAQPage
// ==========================================================================
export function faqSchema({
  url,
  questions,
}: {
  url: string
  questions: { question: string; answer: string }[]
}): SchemaNode {
  return {
    '@type': 'FAQPage',
    '@id': `${url}/#faq`,
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}

// ==========================================================================
// 8. HowTo
// ==========================================================================
export function howToSchema({
  url,
  name,
  description,
  steps,
}: {
  url: string
  name: string
  description: string
  steps: { name: string; text: string; url?: string }[]
}): SchemaNode {
  return {
    '@type': 'HowTo',
    '@id': `${url}/#howto`,
    name,
    description,
    mainEntityOfPage: { '@id': `${url}/#webpage` },
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  }
}

// ==========================================================================
// 9. DefinedTermSet
// ==========================================================================
export function definedTermSetSchema({
  url,
  name,
  description,
  terms,
}: {
  url: string
  name: string
  description: string
  terms: { name: string; description: string; url: string }[]
}): SchemaNode {
  return {
    '@type': 'DefinedTermSet',
    '@id': `${url}/#definedtermset`,
    name,
    description,
    url,
    mainEntityOfPage: { '@id': `${url}/#webpage` },
    hasDefinedTerm: terms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.name,
      description: term.description,
      url: term.url,
      inDefinedTermSet: { '@id': `${url}/#definedtermset` },
    })),
  }
}

// ==========================================================================
// 10. LocalBusiness
// ==========================================================================
export function localBusinessSchema({
  url,
  name,
  description,
  areaServed,
}: {
  url: string
  name: string
  description: string
  areaServed: SchemaNode
}): SchemaNode {
  return {
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name,
    description,
    url,
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
    areaServed,
    serviceType: [
      'Franchise Consulting',
      'Franchise Development',
      'Franchise Brokerage',
    ],
  }
}

// ==========================================================================
// renderSchema -- single @graph wrapper
// ==========================================================================
export function renderSchema(graph: SchemaNode[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}
