import { createMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CalculatorClient } from './CalculatorClient'

export const metadata = createMetadata({
  title: 'Franchise Revenue Calculator',
  description:
    'Free franchise calculator to estimate your potential royalty income at scale. Enter your revenue, margins, and location count to see projections for your brand.',
  path: '/calculator',
})

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/calculator`,
              name: 'Franchise Revenue Calculator',
              description: 'Free franchise calculator to estimate your potential royalty income at scale. Enter your revenue, margins, and location count to see projections for your brand.',
            }),
            breadcrumbSchema(`${SITE_URL}/calculator`, [
              { name: 'Calculator' },
            ]),
          ]),
        }}
      />
      <div className="bg-cream">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', href: '/learn' },
              { label: 'Franchise Calculator' },
            ]}
          />
        </div>
      </div>
      <CalculatorClient />
    </>
  )
}
