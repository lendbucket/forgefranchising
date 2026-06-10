import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Forge Franchising Group privacy policy. Learn how we collect, use, and protect your information when you visit forgefranchising.com or use our franchise services.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-4">Privacy Policy</h1>
            <p className="text-muted-brown text-sm">Last updated: June 10, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto space-y-10">

          <p className="text-muted-brown leading-relaxed">
            Forge Franchising Group ("Forge Franchising," "we," "us," or "our") respects your privacy.
            This Privacy Policy explains what information we collect when you use forgefranchising.com
            (the "Site"), how we use it, and the choices you have. By using the Site, you agree to the
            practices described here.
          </p>

          <div>
            <h2 className="heading-3 mb-4">Information You Provide to Us</h2>
            <p className="text-muted-brown leading-relaxed">
              We collect the information you choose to give us, including when you submit a contact form,
              request a readiness assessment, use a calculator, or complete a franchise application.
              Depending on the form, this may include your name, email address, phone number, business
              name, industry, business details such as years in operation, number of locations, and
              revenue range, your city and state, financial qualification information such as liquid
              capital and net worth range, and any messages or details you share about your goals.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Information Collected Automatically</h2>
            <p className="text-muted-brown leading-relaxed">
              When you visit the Site, we and our service providers may automatically collect certain
              technical information, including your IP address, browser type, device information, pages
              viewed, referring pages, and general usage activity. This may be collected through cookies
              and similar technologies to help the Site function, to remember preferences, and to
              understand how visitors use the Site.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">How We Use Your Information</h2>
            <p className="text-muted-brown leading-relaxed">
              We use the information we collect to respond to your inquiries and applications, to
              provide and improve our services, to communicate with you about franchising and our
              offerings, to operate, maintain, and secure the Site, to analyze usage and improve
              performance, and to comply with our legal obligations.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">How We Share Your Information</h2>
            <p className="text-muted-brown leading-relaxed">
              We do not sell your personal information. We share information only with trusted service
              providers who help us operate the Site and our business, such as email delivery, website
              hosting, content delivery, and analytics providers, and only as needed for them to perform
              those services. We may also disclose information if required by law, to protect our rights,
              or in connection with a business transfer.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Cookies and Tracking</h2>
            <p className="text-muted-brown leading-relaxed">
              The Site may use cookies and similar technologies for functionality and analytics. Most
              browsers let you control or disable cookies through their settings. Disabling cookies may
              affect how parts of the Site work.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Data Retention</h2>
            <p className="text-muted-brown leading-relaxed">
              We retain personal information for as long as needed to fulfill the purposes described in
              this policy, to comply with our legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Your Choices and Rights</h2>
            <p className="text-muted-brown leading-relaxed">
              You may request access to, correction of, or deletion of the personal information we hold
              about you, and you may opt out of marketing communications at any time by contacting us.
              Depending on where you live, you may have additional rights under laws such as the
              California Consumer Privacy Act or the General Data Protection Regulation, including the
              right to know what information we collect and to request its deletion. To exercise any of
              these rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Security</h2>
            <p className="text-muted-brown leading-relaxed">
              We use reasonable administrative, technical, and physical safeguards designed to protect
              your information. No method of transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Children's Privacy</h2>
            <p className="text-muted-brown leading-relaxed">
              The Site is intended for business owners and adults. It is not directed to children under
              18, and we do not knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Third Party Links</h2>
            <p className="text-muted-brown leading-relaxed">
              The Site may contain links to third party websites. We are not responsible for the privacy
              practices of those sites, and we encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Changes to This Policy</h2>
            <p className="text-muted-brown leading-relaxed">
              We may update this Privacy Policy from time to time. When we do, we will revise the date
              at the top of this page. Your continued use of the Site after changes take effect means
              you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-4">Contact Us</h2>
            <p className="text-muted-brown leading-relaxed">
              If you have questions about this Privacy Policy or how we handle your information, contact
              us at{' '}
              <a href="mailto:ceo@36west.org" className="text-amber hover:underline">
                ceo@36west.org
              </a>.
            </p>
          </div>

          <div className="pt-8 text-center" style={{ borderTop: '1px solid rgba(40, 16, 16, 0.08)' }}>
            <Link href="/" className="btn-secondary">
              Return Home
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}
