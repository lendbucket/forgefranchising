import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'How Forge Franchising Group collects, uses, and protects your information on forgefranchising.com. Your rights, our data practices, and how to contact us.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-6">Privacy Policy</h1>
            <p className="text-steel text-sm">Last updated: June 10, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
        <div className="max-w-[720px] space-y-12">

          <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
            Forge Franchising Group ("Forge Franchising," "we," "us," or "our") respects your privacy.
            This Privacy Policy explains what information we collect when you use forgefranchising.com
            (the "Site"), how we use it, and the choices you have. By using the Site, you agree to the
            practices described here.
          </p>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Information you provide to us</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We collect the information you choose to give us, including when you submit a contact form,
              request a readiness assessment, use a calculator, or complete a franchise application.
              Depending on the form, this may include your name, email address, phone number, business
              name, industry, business details such as years in operation, number of locations, and
              revenue range, your city and state, financial qualification information such as liquid
              capital and net worth range, and any messages or details you share about your goals.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Information collected automatically</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              When you visit the Site, we and our service providers may automatically collect certain
              technical information, including your IP address, browser type, device information, pages
              viewed, referring pages, and general usage activity. This may be collected through cookies
              and similar technologies to help the Site function, to remember preferences, and to
              understand how visitors use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">How we use your information</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We use the information we collect to respond to your inquiries and applications, to
              provide and improve our services, to communicate with you about franchising and our
              offerings, to operate, maintain, and secure the Site, to analyze usage and improve
              performance, and to comply with our legal obligations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">How we share your information</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We do not sell your personal information. We share information only with trusted service
              providers who help us operate the Site and our business, such as email delivery, website
              hosting, content delivery, and analytics providers, and only as needed for them to perform
              those services. We may also disclose information if required by law, to protect our rights,
              or in connection with a business transfer.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Cookies and tracking</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              The Site may use cookies and similar technologies for functionality and analytics. Most
              browsers let you control or disable cookies through their settings. Disabling cookies may
              affect how parts of the Site work.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Data retention</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We retain personal information for as long as needed to fulfill the purposes described in
              this policy, to comply with our legal obligations, resolve disputes, and enforce our
              agreements.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Your choices and rights</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              You may request access to, correction of, or deletion of the personal information we hold
              about you, and you may opt out of marketing communications at any time by contacting us.
              Depending on where you live, you may have additional rights under laws such as the
              California Consumer Privacy Act or the General Data Protection Regulation, including the
              right to know what information we collect and to request its deletion. To exercise any of
              these rights, contact us using the details below.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Security</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We use reasonable administrative, technical, and physical safeguards designed to protect
              your information. No method of transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Children's privacy</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              The Site is intended for business owners and adults. It is not directed to children under
              18, and we do not knowingly collect information from children.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Third party links</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              The Site may contain links to third party websites. We are not responsible for the privacy
              practices of those sites, and we encourage you to review their policies.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Changes to this policy</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              We may update this Privacy Policy from time to time. When we do, we will revise the date
              at the top of this page. Your continued use of the Site after changes take effect means
              you accept the updated policy.
            </p>
          </div>

          <div>
            <h2 className="font-display text-[28px] min-[961px]:text-[32px] font-bold leading-[1.15] tracking-[-0.02em] text-graphite mb-4">Contact us</h2>
            <p className="text-steel text-[17px] min-[721px]:text-[18px] leading-[1.75]">
              If you have questions about this Privacy Policy or how we handle your information, contact
              us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-link">
                {CONTACT_EMAIL}
              </a>.
            </p>
          </div>

          <div className="pt-10 border-t border-line">
            <Link href="/" className="btn-secondary">
              Return home
            </Link>
          </div>

        </div>
        </div>
      </section>
    </>
  )
}
