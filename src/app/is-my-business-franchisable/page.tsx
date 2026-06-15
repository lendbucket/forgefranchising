import { createMetadata } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/is-my-business-franchisable`,
              name: 'Free Franchise Readiness Quiz',
              description: 'Take our free franchise readiness assessment to find out if your business can franchise. Answer eight questions and get an honest evaluation of your potential.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/is-my-business-franchisable`, [
              { name: 'Is My Business Franchisable' },
            ]),
          ]),
        }}
      />
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
