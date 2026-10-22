import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight } from 'next/font/google'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SiteChrome } from '@/components/SiteChrome'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, DEFAULT_OG_IMAGE } from '@/lib/constants'
import { organizationSchema, websiteSchema, renderSchema } from '@/lib/schema'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

// Display face for every heading and large numeral.
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-display',
  display: 'swap',
})

export const viewport: Viewport = {
  viewportFit: 'cover',
  themeColor: '#1C1F23',
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
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE.url],
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
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: renderSchema([
              organizationSchema(),
              websiteSchema(),
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <SiteChrome header={<Header />} footer={<Footer />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  )
}
