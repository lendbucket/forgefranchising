import type { Metadata } from 'next'
import { Barlow_Condensed, Source_Sans_3 } from 'next/font/google'

/**
 * Confidential client proposal.
 *
 * Fonts are loaded here rather than in the root layout so the two extra
 * families are only fetched on this route. They match the design export
 * exactly: Barlow Condensed 500/600/700 for display, Source Sans 3
 * 400/600/700 with italics for body. No system fallback substitution.
 */
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-source-sans-3',
  display: 'swap',
})

// Not indexed, not archived, not snippeted, and deliberately absent from
// the sitemap. robots.txt also disallows /proposal/.
export const metadata: Metadata = {
  title: { absolute: 'Proposal' },
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
}

export default function ProposalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${barlowCondensed.variable} ${sourceSans3.variable}`}>
      {children}
    </div>
  )
}
