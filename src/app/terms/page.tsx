import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service for Forge Franchising Group. Review the terms and conditions governing your use of forgefranchising.com and our franchise development services.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-4">Terms of Service</h1>
            <p className="text-muted-brown text-sm">Last updated: June 9, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl prose-legal">

            <h2 className="heading-3 mb-4 mt-0">1. Acceptance of Terms</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              By accessing or using the website located at {SITE_URL} (the "Site"), operated by{' '}
              {SITE_NAME} ("Company," "we," "us," or "our"), you agree to be bound by these Terms
              of Service ("Terms"). If you do not agree to all of these Terms, you must not access
              or use the Site. We reserve the right to modify these Terms at any time, and your
              continued use of the Site following any changes constitutes acceptance of those changes.
            </p>

            <h2 className="heading-3 mb-4 mt-10">2. Description of Services</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              {SITE_NAME} provides franchise development consulting services, educational content,
              tools, and resources designed to help business owners evaluate, plan, and execute
              franchise expansion strategies. The Site offers informational content including blog
              articles, franchise law guides, calculators, glossary terms, and other educational
              materials. Our services are described in detail on the Site and may be modified or
              updated at our discretion. Nothing on this Site constitutes legal, financial, or
              investment advice. All content is provided for informational and educational purposes
              only.
            </p>

            <h2 className="heading-3 mb-4 mt-10">3. User Responsibilities</h2>
            <p className="text-muted-brown leading-relaxed mb-4">
              When using the Site, you agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>Provide accurate and complete information when submitting forms or communicating with us</li>
              <li>Use the Site only for lawful purposes and in compliance with all applicable laws and regulations</li>
              <li>Refrain from attempting to gain unauthorized access to any portion of the Site, its servers, or any connected systems</li>
              <li>Not use the Site to transmit any harmful, threatening, abusive, or otherwise objectionable content</li>
              <li>Not reproduce, distribute, modify, or create derivative works from any content on the Site without our prior written consent</li>
              <li>Not use automated systems, bots, or scrapers to access the Site for any purpose without our express permission</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-10">4. Intellectual Property</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              All content on the Site, including text, graphics, logos, images, data compilations,
              software, and the overall design and arrangement of the Site, is the property of{' '}
              {SITE_NAME} or its content suppliers and is protected by United States and international
              copyright, trademark, and other intellectual property laws. The {SITE_NAME} name, logo,
              and all related marks are trademarks of the Company. You may not use, reproduce, or
              distribute any of our intellectual property without prior written authorization.
            </p>
            <p className="text-muted-brown leading-relaxed mb-6">
              You are granted a limited, non-exclusive, non-transferable license to access and use
              the Site for personal, non-commercial purposes. This license does not include the
              right to collect or harvest any data, copy or distribute any content for commercial
              purposes, or modify or create derivative works from the Site or its content.
            </p>

            <h2 className="heading-3 mb-4 mt-10">5. Disclaimer of Warranties</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              The Site and all content, tools, and services provided through it are offered on an
              "as is" and "as available" basis without warranties of any kind, either express or
              implied. To the fullest extent permitted by law, we disclaim all warranties, including
              implied warranties of merchantability, fitness for a particular purpose, and
              non-infringement. We do not warrant that the Site will be uninterrupted, error-free,
              or free of viruses or other harmful components. We do not guarantee the accuracy,
              completeness, or usefulness of any information provided on the Site.
            </p>

            <h2 className="heading-3 mb-4 mt-10">6. Limitation of Liability</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              To the maximum extent permitted by applicable law, {SITE_NAME}, its officers,
              directors, employees, agents, and affiliates shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, including loss of profits,
              data, business opportunities, or goodwill, arising out of or in connection with your
              use of or inability to use the Site or our services. In no event shall our total
              liability to you for all claims arising from or related to these Terms or your use of
              the Site exceed the amount you paid to us, if any, during the twelve (12) months
              preceding the event giving rise to the claim.
            </p>

            <h2 className="heading-3 mb-4 mt-10">7. Indemnification</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless {SITE_NAME} and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              losses, costs, and expenses (including reasonable attorneys' fees) arising out of or
              related to your violation of these Terms, your use of the Site, or your infringement
              of any third-party rights.
            </p>

            <h2 className="heading-3 mb-4 mt-10">8. Third-Party Links</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              The Site may contain links to third-party websites, services, or resources that are
              not owned or controlled by us. We are not responsible for the content, privacy
              policies, or practices of any third-party websites. Inclusion of any link does not
              imply endorsement by {SITE_NAME}. You access third-party sites at your own risk.
            </p>

            <h2 className="heading-3 mb-4 mt-10">9. Governing Law and Jurisdiction</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the
              State of Texas, without regard to its conflict of law provisions. Any disputes arising
              under or in connection with these Terms shall be subject to the exclusive jurisdiction
              of the state and federal courts located in Harris County, Texas. You irrevocably
              consent to the personal jurisdiction of such courts.
            </p>

            <h2 className="heading-3 mb-4 mt-10">10. Severability</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by
              a court of competent jurisdiction, that provision shall be modified to the minimum
              extent necessary to make it enforceable, or if modification is not possible, it shall
              be severed from these Terms. The remaining provisions shall continue in full force and
              effect.
            </p>

            <h2 className="heading-3 mb-4 mt-10">11. Termination</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              We reserve the right to terminate or suspend your access to the Site, without prior
              notice or liability, for any reason, including if you breach these Terms. All
              provisions of these Terms that by their nature should survive termination shall
              survive, including ownership provisions, warranty disclaimers, indemnification
              obligations, and limitations of liability.
            </p>

            <h2 className="heading-3 mb-4 mt-10">12. Changes to These Terms</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              We reserve the right to update or modify these Terms at any time. Changes will be
              effective immediately upon posting to the Site. The "Last updated" date at the top of
              this page will be revised accordingly. It is your responsibility to review these Terms
              periodically. Your continued use of the Site after any modifications constitutes
              acceptance of the updated Terms.
            </p>

            <h2 className="heading-3 mb-4 mt-10">13. Contact Us</h2>
            <p className="text-muted-brown leading-relaxed mb-2">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="text-muted-brown leading-relaxed mb-6">
              <p className="font-semibold text-espresso">{SITE_NAME}</p>
              <p>
                Email:{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber hover:underline">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                Website:{' '}
                <a href={SITE_URL} className="text-amber hover:underline">
                  {SITE_URL}
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
