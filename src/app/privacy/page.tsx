import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Forge Franchising Group. Learn how we collect, use, and protect your personal information when you visit forgefranchising.com.',
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
            <p className="text-muted-brown text-sm">Last updated: June 9, 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="max-w-3xl prose-legal">

            <h2 className="heading-3 mb-4 mt-0">1. Introduction</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              {SITE_NAME} ("Company," "we," "us," or "our") respects your privacy and is
              committed to protecting your personal information. This Privacy Policy explains how
              we collect, use, disclose, and safeguard your information when you visit our website
              at {SITE_URL} (the "Site") or engage with our franchise development services. Please
              read this policy carefully. By accessing or using the Site, you agree to the terms of
              this Privacy Policy.
            </p>

            <h2 className="heading-3 mb-4 mt-10">2. Information We Collect</h2>
            <h3 className="heading-4 mb-3">Personal Information You Provide</h3>
            <p className="text-muted-brown leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>Fill out a contact form or request a consultation</li>
              <li>Subscribe to our newsletter or email communications</li>
              <li>Use our franchise calculator or assessment tools</li>
              <li>Engage with us through email, phone, or other communication channels</li>
            </ul>
            <p className="text-muted-brown leading-relaxed mb-4">
              This information may include your name, email address, phone number, business name,
              business type, location, revenue figures, and any other details you choose to provide.
            </p>

            <h3 className="heading-4 mb-3">Information Collected Automatically</h3>
            <p className="text-muted-brown leading-relaxed mb-6">
              When you visit the Site, we may automatically collect certain information about your
              device and usage patterns, including your IP address, browser type, operating system,
              referring URLs, pages viewed, time spent on pages, and other diagnostic data. This
              information is collected through cookies, web beacons, and similar tracking technologies.
            </p>

            <h2 className="heading-3 mb-4 mt-10">3. How We Use Your Information</h2>
            <p className="text-muted-brown leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>To respond to your inquiries and provide franchise development services</li>
              <li>To send you relevant information about our services, including follow-up communications</li>
              <li>To operate, maintain, and improve the Site and our services</li>
              <li>To analyze usage trends and optimize user experience</li>
              <li>To comply with legal obligations and enforce our terms of service</li>
              <li>To protect against fraudulent, unauthorized, or illegal activity</li>
            </ul>

            <h2 className="heading-3 mb-4 mt-10">4. Cookies and Tracking Technologies</h2>
            <p className="text-muted-brown leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience on the Site.
              Cookies are small data files stored on your device that help us understand how you
              interact with our content.
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for the Site to function properly.
                These cannot be disabled.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with the
                Site by collecting and reporting information anonymously.
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to track visitors across websites to display
                relevant advertisements.
              </li>
            </ul>
            <p className="text-muted-brown leading-relaxed mb-6">
              You can control cookie preferences through your browser settings. Disabling certain
              cookies may affect the functionality of the Site.
            </p>

            <h2 className="heading-3 mb-4 mt-10">5. Third-Party Services</h2>
            <p className="text-muted-brown leading-relaxed mb-4">
              We may share your information with trusted third-party service providers who assist
              us in operating the Site and delivering our services. These providers include:
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>Website hosting and infrastructure providers</li>
              <li>Analytics services (such as Google Analytics)</li>
              <li>Email marketing and communication platforms</li>
              <li>Customer relationship management (CRM) systems</li>
            </ul>
            <p className="text-muted-brown leading-relaxed mb-6">
              These third parties are contractually obligated to use your information only for the
              purposes we specify and in accordance with this Privacy Policy. We do not sell your
              personal information to third parties.
            </p>

            <h2 className="heading-3 mb-4 mt-10">6. Data Retention</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              We retain your personal information only for as long as necessary to fulfill the
              purposes described in this Privacy Policy, unless a longer retention period is
              required or permitted by law. When your information is no longer needed, we will
              securely delete or anonymize it. Contact form submissions and consultation records
              are typically retained for a period of three (3) years following your last interaction
              with us.
            </p>

            <h2 className="heading-3 mb-4 mt-10">7. Data Security</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              We implement reasonable administrative, technical, and physical safeguards to protect
              your personal information from unauthorized access, use, alteration, or destruction.
              However, no method of transmission over the Internet or electronic storage is
              completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="heading-3 mb-4 mt-10">8. Your Rights</h2>
            <p className="text-muted-brown leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the following rights regarding your
              personal information:
            </p>
            <ul className="list-disc pl-6 text-muted-brown leading-relaxed mb-6 space-y-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to opt out of marketing communications at any time</li>
              <li>The right to request a copy of your data in a portable format</li>
            </ul>
            <p className="text-muted-brown leading-relaxed mb-6">
              To exercise any of these rights, please contact us using the information provided below.
            </p>

            <h2 className="heading-3 mb-4 mt-10">9. Children's Privacy</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              The Site is not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If we become aware that we have
              inadvertently collected information from a child under 18, we will take steps to
              delete that information promptly.
            </p>

            <h2 className="heading-3 mb-4 mt-10">10. Changes to This Policy</h2>
            <p className="text-muted-brown leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices, technologies, legal requirements, or other factors. We will post the
              updated policy on this page and revise the "Last updated" date at the top. Your
              continued use of the Site after any changes constitutes your acceptance of the
              revised policy.
            </p>

            <h2 className="heading-3 mb-4 mt-10">11. Contact Us</h2>
            <p className="text-muted-brown leading-relaxed mb-2">
              If you have questions or concerns about this Privacy Policy or our data practices,
              please contact us at:
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
