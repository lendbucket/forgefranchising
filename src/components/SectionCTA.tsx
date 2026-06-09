import Link from 'next/link'

type SectionCTAProps = {
  heading: string
  body: string
  buttonText?: string
  buttonHref?: string
  variant?: 'dark' | 'light'
}

export function SectionCTA({
  heading,
  body,
  buttonText = 'Book a Free Feasibility Call',
  buttonHref = '/contact',
  variant = 'dark',
}: SectionCTAProps) {
  const isDark = variant === 'dark'
  return (
    <section className={isDark ? 'bg-espresso text-cream' : 'bg-deep-cream text-espresso'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <h2 className={`heading-2 mb-6 ${isDark ? 'text-cream' : 'text-espresso'}`}>
          {heading}
        </h2>
        <p className={`body-large mb-10 max-w-2xl mx-auto ${isDark ? 'text-cream/70' : 'text-muted-brown'}`}>
          {body}
        </p>
        <Link href={buttonHref} className="btn-primary">
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
