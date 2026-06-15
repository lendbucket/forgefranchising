import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#FAF6EF',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Franchise Your Business | Forge Franchising',
    template: '%s | Forge Franchising',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/forge-franchising-logo.png`,
              description: SITE_DESCRIPTION,
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  email: 'inquiry@forgefranchising.com',
                  contactType: 'sales',
                },
                {
                  '@type': 'ContactPoint',
                  email: 'info@forgefranchising.com',
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
              areaServed: {
                '@type': 'Country',
                name: 'United States',
              },
              serviceType: [
                'Franchise Development',
                'Franchise Consulting',
                'Franchise Brokerage',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
