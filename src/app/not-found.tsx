import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'

export const metadata = createMetadata({
  title: 'Page Not Found',
  description:
    'That franchise page has moved or no longer exists. Jump back to franchise development services, the readiness quiz, industry guides, or the blog from here.',
  path: '/404',
})

export default function NotFound() {
  return (
    <section className="bg-graphite surface-dark min-h-[70vh] flex items-center">
      <div className="container-wide section-padding">
        <h1 className="numeral text-[120px] sm:text-[180px] mb-10">404</h1>
        <p className="body-large max-w-[560px] mb-10">
          The page you are looking for does not exist or has been moved. Use the links below to
          find what you need.
        </p>
        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/"
            className="btn-primary"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Contact us
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 pt-8 hairline-inverse">
          {[
            { label: 'Our services', href: '/services' },
            { label: 'Blog', href: '/blog' },
            { label: 'Industries', href: '/industries' },
            { label: 'FAQ', href: '/faq' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-[44px] px-4 border border-white/25 text-sm text-white hover:border-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
