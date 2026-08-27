import { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

type MetadataArgs = {
  title: string
  description: string
  path?: string
  ogImage?: string
}

export function createMetadata({ title, description, path = '', ogImage }: MetadataArgs): Metadata {
  const url = `${SITE_URL}${path}`

  const ogTitle = `${title} | Forge Franchising`

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
    },
  }
}

/**
 * Meta descriptions perform best between 150 and 160 characters. Templated pages
 * (cities, states) build descriptions from variable-length data, so a fixed
 * template overshoots for long names and undershoots for short ones.
 *
 * composeDescription takes a lead sentence plus optional trailing clauses and
 * returns the first in-order subset whose total length lands inside the window.
 * Clauses are independent sentences, so any subset still reads naturally.
 */
export function composeDescription(
  lead: string,
  clauses: string[],
  min = 150,
  max = 160,
): string {
  let best = lead
  let bestDelta = Infinity

  const consider = (candidate: string) => {
    const len = candidate.length
    if (len >= min && len <= max) return true
    // Track the closest near-miss as a fallback.
    const delta = len < min ? min - len : len - max
    if (delta < bestDelta) {
      bestDelta = delta
      best = candidate
    }
    return false
  }

  // Depth-first over ordered subsets, shortest additions explored first.
  const search = (index: number, acc: string): string | null => {
    if (acc.length > max) return null
    if (index === clauses.length) return consider(acc) ? acc : null
    // Try including this clause, then skipping it.
    const withClause = search(index + 1, acc + clauses[index])
    if (withClause) return withClause
    return search(index + 1, acc)
  }

  if (consider(lead)) return lead
  return search(0, lead) ?? best
}
