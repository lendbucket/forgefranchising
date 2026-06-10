import Link from 'next/link'

/**
 * GuidedPath: A step-by-step learning journey through the site.
 *
 * Psychology: The goal gradient effect means people accelerate toward
 * a goal as they get closer. By framing content as a numbered path
 * (Step 1 of 5), visitors feel they are making progress and are more
 * likely to complete the sequence. Combined with commitment/consistency,
 * once someone starts step 1, they feel compelled to continue.
 * This routes them naturally toward the assessment and contact.
 */

type PathStep = {
  step: number
  title: string
  description: string
  href: string
  /** Time estimate shown as badge */
  time?: string
}

type GuidedPathProps = {
  heading?: string
  subheading?: string
  steps: PathStep[]
}

export function GuidedPath({
  heading = 'Start Here: Your Franchise Education Path',
  subheading,
  steps,
}: GuidedPathProps) {
  return (
    <section className="section-padding bg-espresso text-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Guided Learning Path</p>
          <h2 className="heading-2 text-cream mb-4">{heading}</h2>
          {subheading && (
            <p className="text-lg text-cream/60 max-w-2xl mx-auto leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {steps.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block bg-cream/5 hover:bg-cream/10 border border-cream/10 hover:border-amber/30 transition-all duration-200 p-6 sm:p-8"
              style={{ borderRadius: '4px' }}
            >
              <div className="flex items-start gap-6">
                {/* Step number with connecting line */}
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-10 h-10 bg-amber flex items-center justify-center text-cream font-bold text-sm" style={{ borderRadius: '3px' }}>
                    {item.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-4 bg-cream/15 mt-2 hidden sm:block" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-cream group-hover:text-amber transition-colors" style={{ letterSpacing: '-0.015em' }}>
                      {item.title}
                    </h3>
                    {item.time && (
                      <span className="text-xs text-cream/40 bg-cream/10 px-2 py-0.5 flex-shrink-0" style={{ borderRadius: '2px' }}>
                        {item.time}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-cream/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <svg className="w-5 h-5 text-cream/30 group-hover:text-amber group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
