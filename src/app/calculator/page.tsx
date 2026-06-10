import { createMetadata } from '@/lib/metadata'
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
