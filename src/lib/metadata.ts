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
  const fullTitle = path === '' ? title : `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      ...(ogImage && { images: [{ url: ogImage, width: 1200, height: 630 }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
