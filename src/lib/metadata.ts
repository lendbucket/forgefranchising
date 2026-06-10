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
