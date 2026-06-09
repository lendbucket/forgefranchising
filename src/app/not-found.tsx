import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center">
      <div className="container-wide section-padding text-center">
        <p className="eyebrow mb-4">
          Page Not Found
        </p>
        <h1 className="font-display text-7xl sm:text-8xl font-bold text-espresso mb-6">404</h1>
        <p className="body-large max-w-lg mx-auto mb-10">
          The page you are looking for does not exist or has been moved. Use the links below to
          find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/"
            className="btn-primary"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn-secondary"
          >
            Contact Us
          </Link>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-brown text-sm uppercase tracking-wider font-semibold mb-6">
            Helpful Pages
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Our Services', href: '/services' },
              { label: 'Blog', href: '/blog' },
              { label: 'Industries', href: '/industries' },
              { label: 'FAQ', href: '/faq' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card text-center py-4 px-3 hover:border-amber/40 transition-colors"
              >
                <span className="text-sm font-medium text-espresso">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
