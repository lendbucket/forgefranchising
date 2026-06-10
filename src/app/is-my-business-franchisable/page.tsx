import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AssessmentClient } from './AssessmentClient'

export const metadata = createMetadata({
  title: 'Free Franchise Readiness Quiz',
  description:
    'Take our free franchise readiness assessment to find out if your business can franchise. Answer eight questions and get an honest evaluation of your potential.',
  path: '/is-my-business-franchisable',
})

export default function AssessmentPage() {
  return (
    <>
      <div className="bg-cream">
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Resources', href: '/learn' },
              { label: 'Is My Business Franchisable?' },
            ]}
          />
        </div>
      </div>
      <AssessmentClient />
    </>
  )
}
