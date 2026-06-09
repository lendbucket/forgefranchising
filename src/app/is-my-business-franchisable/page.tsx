import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { AssessmentClient } from './AssessmentClient'

export const metadata = createMetadata({
  title: 'Is My Business Franchisable? Free Readiness Assessment',
  description:
    'Take our free franchise readiness assessment to find out if your business is ready to franchise. Answer eight questions and get an honest evaluation of your franchise potential with specific guidance.',
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
