import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { KeyTakeaways } from '@/components/KeyTakeaways'
import { PageTOC } from '@/components/PageTOC'
import { FAQList } from '@/components/FAQList'
import { ContinueLearning } from '@/components/ContinueLearning'
import { SectionCTA } from '@/components/SectionCTA'
import { ReadingProgress } from '@/components/ReadingProgress'
import { BrokerageNotice } from '@/components/BrokerageNotice'
import { IntakeForm } from '@/components/IntakeForm'
import { HeroActions } from '@/components/HeroActions'
import { MidCTA } from '@/components/MidCTA'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, serviceSchema, faqSchema, renderSchema, TEXAS_AREA } from '@/lib/schema'

const PATH = '/texas-business-broker'
const TITLE = 'Business Sale Broker in Texas'
const DESCRIPTION =
  'Business sale broker in Texas: what a broker does, how to choose one, fees and listing terms, buyer screening, and market notes for five major Texas metros.'

export const metadata = createMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
})

const p = 'text-steel text-[17px] leading-relaxed mb-5'
const link = 'text-accent font-semibold hover:underline'

const duties = [
  {
    term: 'Pricing',
    text: 'Recasting the financials, documenting add backs, and preparing a broker opinion of value so the asking price is one the earnings can support and a lender can finance.',
  },
  {
    term: 'Marketing materials',
    text: 'A blind profile that describes the business without identifying it, and a confidential information memorandum released only to buyers who have signed a nondisclosure agreement.',
  },
  {
    term: 'Buyer outreach',
    text: 'Reaching individual buyers and companies in the same or adjacent industries through listing platforms and direct outreach to known buyers.',
  },
  {
    term: 'Screening',
    text: 'Collecting nondisclosure agreements, financial information, and background on each buyer before any identifying detail or financial record is released.',
  },
  {
    term: 'Negotiation',
    text: 'Working through offers and the letter of intent, including price, structure, seller financing, working capital, the transition period, and noncompete terms.',
  },
  {
    term: 'Diligence and closing',
    text: 'Coordinating document requests, the buyer\'s lender, landlord consent, and license transfers, and keeping the attorneys and CPAs on both sides working toward the same closing date.',
  },
]

const questions = [
  'How many businesses of a similar size and type have you represented, and can you describe the process you used?',
  'How will you price the business, and will you show me the recast earnings behind the price?',
  'Who will do the work day to day, and how often will I hear from them?',
  'Where will the business be marketed, and what will the blind profile say?',
  'What do you require from a buyer before they learn the name of the business?',
  'What is the fee, when is it earned, and what happens to it if the sale does not close?',
  'How long is the listing agreement, how can either side end it, and what does the tail provision cover?',
]

const faqs = [
  {
    question: 'What does a business sale broker do?',
    answer:
      'A business sale broker represents the owner in selling a business. The work covers pricing, preparing confidential marketing materials, finding and screening buyers, negotiating the letter of intent and purchase terms, and coordinating diligence and closing with the attorneys, CPAs, and lenders involved.',
  },
  {
    question: 'How are business broker fees usually structured?',
    answer:
      'Brokers commonly charge a success fee that is paid at closing and calculated as a percentage of the transaction value, often with a minimum fee. Some also charge an engagement fee at signing to cover valuation and marketing work. Terms vary by broker and by the size of the business, so read the listing agreement closely before signing.',
  },
  {
    question: 'How long is a typical listing agreement?',
    answer:
      'Listing agreements commonly run for a set term of several months to a year and are usually exclusive. Many include a tail provision that entitles the broker to a fee if a buyer introduced during the term closes after the agreement ends. Review the term, the cancellation rights, and the tail with your attorney.',
  },
  {
    question: 'How do brokers keep a sale confidential?',
    answer:
      'By marketing the business without its name, requiring a signed nondisclosure agreement before releasing identifying information, screening buyers for financial ability before sharing records, and releasing the most sensitive information, such as customer names and employee details, only late in diligence.',
  },
  {
    question: 'Does it matter if real estate is part of the sale?',
    answer:
      'It can. If real property is part of the sale, Texas real estate licensing rules can apply to the real estate portion of the transaction. Buyers and sellers should confirm with counsel how the real estate will be handled before signing a listing agreement or a letter of intent.',
  },
  {
    question: 'Does Forge have offices in each Texas city on this page?',
    answer:
      'This page describes markets, not offices. Forge works with owners across Texas, and the market sections describe the local economies and the kinds of buyers commonly active in each metro.',
  },
]

const toc = [
  { id: 'what-broker-does', label: 'What a broker does' },
  { id: 'choose', label: 'How to choose a broker' },
  { id: 'fees', label: 'Fees and listing terms' },
  { id: 'buyers', label: 'Qualifying buyers' },
  { id: 'confidentiality', label: 'Confidentiality' },
  { id: 'real-property', label: 'When real property is involved' },
  { id: 'markets', label: 'Texas markets' },
  { id: 'faq', label: 'Questions' },
  { id: 'inquiry', label: 'Start a confidential inquiry' },
]

export default function TexasBusinessBrokerPage() {
  const url = `${SITE_URL}${PATH}`

  return (
    <>
      <ReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({ url, name: TITLE, description: DESCRIPTION, hasBreadcrumb: true }),
            breadcrumbSchema(url, [
              { name: 'Sell Your Business', url: `${SITE_URL}/sell-your-business` },
              { name: 'Texas Business Broker' },
            ]),
            serviceSchema({
              url,
              name: 'Business Sale Broker in Texas',
              description: DESCRIPTION,
              serviceType: 'Business Brokerage',
              areaServed: TEXAS_AREA,
            }),
            faqSchema({ url, questions: faqs }),
          ]),
        }}
      />

      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs
            withSchema={false}
            items={[{ label: 'Sell Your Business', href: '/sell-your-business' }, { label: 'Texas Business Broker' }]}
          />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">Business Sale Broker in Texas: What a Broker Does and How to Choose One</h1>
            <p className="body-large mb-6">
              A business sale broker represents an owner who wants to sell a privately held company. The broker prices the
              business, markets it without revealing its name, screens buyers, negotiates terms, and keeps diligence moving
              until closing. In Texas, that work spans very different regional economies, and the buyers who show up for a
              field services company in Houston are not the same buyers who show up for a software consultancy in Austin.
            </p>
            <p className="body-large mb-8">
              This page explains what to expect from a broker, how to compare brokers before you sign, and how the major
              Texas metros differ. For the full sell side process, start with{' '}
              <Link href="/sell-your-business" className={link}>selling your business</Link>.
            </p>
            <HeroActions route="/texas-business-broker" />
            <KeyTakeaways
              readTime="13 min read"
              items={[
                'A broker prices the business, markets it confidentially, screens buyers, and manages negotiation through closing.',
                'Compare brokers on process, pricing method, buyer screening, and the terms of the listing agreement, not on promised prices.',
                'Fees are commonly a success fee paid at closing, sometimes with an engagement fee. Read the term, cancellation rights, and tail provision.',
                'If real property is part of the sale, Texas real estate licensing rules can apply. Confirm the approach with counsel.',
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <aside className="lg:col-span-3">
              <PageTOC items={toc} />
            </aside>

            <div className="lg:col-span-9 min-w-0 space-y-24 max-[720px]:space-y-16">
              <article id="what-broker-does" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">What a business sale broker does in Texas</h2>
                <p className={p}>
                  Selling a business is a sequence of tasks that most owners do once. A broker has done them many times and
                  runs them in parallel while the owner keeps operating. The core of the work is the same anywhere, and in
                  Texas it often includes coordinating with buyers who are relocating from other states and with lenders who
                  finance acquisitions through SBA programs.
                </p>
                <div className="tile-grid md:grid-cols-2 mt-8 mb-8">
                  {duties.map((d) => (
                    <div key={d.term} className="card">
                      <p className="heading-4 mb-3">{d.term}</p>
                      <p className="text-steel text-[15px] leading-relaxed">{d.text}</p>
                    </div>
                  ))}
                </div>
                <p className={p}>
                  Pricing comes first because every later step depends on it. A business listed above what its earnings
                  support attracts few qualified buyers and tends to fail in lender underwriting. Our{' '}
                  <Link href="/business-valuation" className={link}>business valuation services</Link> page explains how a
                  broker opinion of value is built, and why it is not a certified appraisal.
                </p>
              </article>

              <article id="choose" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How to choose a broker to sell my business</h2>
                <p className={p}>
                  Owners who start by searching for a broker to sell my business usually find several names quickly. The
                  harder part is telling them apart. The most useful comparison is how each broker would run your sale:
                  how they would set the price, who they would market to, how they would protect your identity, and what the
                  agreement commits you to. Be cautious of any broker who quotes a sale price before reviewing your financial
                  records, or who promises a result. Price is set by the buyers and lenders in the market.
                </p>
                <h3 className="heading-4 mb-4">Questions to ask before you sign</h3>
                <ol className="list-decimal pl-6 space-y-3 text-steel leading-relaxed mb-8">
                  {questions.map((q) => (
                    <li key={q.slice(0, 24)}>{q}</li>
                  ))}
                </ol>
                <p className={p}>
                  Ask for a sample blind profile and a sample nondisclosure agreement. They show how carefully the broker
                  handles confidentiality, and how the business will be described to the market. Ask, too, how the broker
                  works with your attorney and CPA. A broker coordinates the transaction but does not replace legal or tax
                  advice, and both sides should have their own advisors.
                </p>
              </article>

              <article id="fees" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How fees and listing agreements are commonly structured</h2>
                <h3 className="heading-4 mb-4">Success fee</h3>
                <p className={p}>
                  The main fee in many business brokerage engagements is a success fee, paid at closing out of the sale
                  proceeds and calculated as a percentage of the transaction value. Many agreements set a minimum fee, and
                  some larger engagements use a scale where the percentage changes as the price rises. The agreement should
                  define transaction value clearly, including whether it counts seller financing, earnouts, assumed
                  liabilities, inventory, and real estate.
                </p>
                <h3 className="heading-4 mb-4">Engagement fee</h3>
                <p className={p}>
                  Some brokers also charge an engagement fee at signing to cover valuation, document preparation, and
                  marketing. Ask whether it is credited against the success fee at closing and whether any of it is
                  refundable. Neither approach is inherently better; what matters is that the terms are clear before you sign.
                </p>
                <h3 className="heading-4 mb-4">Exclusivity, term, and tail</h3>
                <p className={p}>
                  Listing agreements are commonly exclusive, which means the broker earns the fee if the business sells during
                  the term, whoever finds the buyer. The term is fixed, commonly several months to a year, with renewal by
                  agreement. A tail provision extends the broker&apos;s right to a fee for a period after the agreement ends
                  if the business sells to a buyer the broker introduced. Check how the agreement can be ended early, what
                  notice is required, and which buyers the tail covers. Have your attorney review the agreement before you
                  sign it.
                </p>
              </article>

              <article id="buyers" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How brokers qualify buyers</h2>
                <p className={p}>
                  Buyer screening protects the owner&apos;s time and confidentiality. A buyer who cannot finance the purchase,
                  or who is gathering information on a competitor, should not see the owner&apos;s financial statements. A
                  disciplined broker qualifies buyers in stages.
                </p>
                <ul className="list-disc pl-6 space-y-3 text-steel leading-relaxed mb-8">
                  <li>A signed nondisclosure agreement before the business is identified</li>
                  <li>A buyer profile covering background, industry experience, and the kind of business they want to own</li>
                  <li>A personal financial statement or proof of funds showing the cash available for the down payment and working capital</li>
                  <li>For financed purchases, an early conversation with a lender about whether the buyer and the business fit its criteria</li>
                  <li>For companies and investors, a description of their acquisition history and how the purchase will be funded</li>
                </ul>
                <p className={p}>
                  Many acquisitions of small businesses are financed in part with SBA 7(a) loans, which carry a maximum loan
                  amount of $5 million. Lenders require the buyer to inject equity, and the SBA sets minimums that have changed
                  over time, so buyers should confirm current requirements with their lender. A buyer who has already spoken
                  with a lender is further along than one who has not. Buyers can read about the process from their side on
                  our <Link href="/buy-a-business" className={link}>buy a business</Link> page.
                </p>
              </article>

              <article id="confidentiality" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">How a broker protects confidentiality</h2>
                <p className={p}>
                  If employees, customers, or competitors learn that a business is for sale before the owner is ready, the
                  business can lose staff and accounts during the very period when buyers are evaluating it. Confidentiality
                  is built into each stage of a well run sale.
                </p>
                <p className={p}>
                  The blind profile describes the industry, general region, and financial size without naming the business or
                  giving details that would identify it. Identifying information goes only to buyers who have signed a
                  nondisclosure agreement and passed initial screening. Site visits are scheduled outside business hours or
                  presented to staff as routine. The most sensitive information, such as customer lists, employee names and
                  pay, and supplier pricing, is released late in diligence, after a letter of intent is signed. When a
                  buyer competes with the business, some of that information may be released only in summary form or through
                  the buyer&apos;s advisors.
                </p>
                <MidCTA route="/texas-business-broker" />
              </article>

              <article id="real-property" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">When real property is part of the sale</h2>
                <p className={p}>
                  Many business sales include no real estate at all; the buyer takes over a lease. Others include the
                  building or land the business operates on. If real property is part of the sale, Texas real estate licensing
                  rules can apply to the real estate portion of the transaction, including who may be paid to negotiate it.
                </p>
                <p className={p}>
                  Owners in that position should confirm with counsel how the real estate will be handled before signing a
                  listing agreement. Common approaches include selling the property in a separate transaction alongside the
                  business, or keeping the property and leasing it to the buyer. Each option has legal and tax consequences
                  that your attorney and CPA should review.
                </p>
              </article>

              <section id="markets" className="scroll-mt-header">
                <h2 className="heading-2 mb-6">Texas markets: Local economies and active buyers</h2>
                <p className={p}>
                  Texas is a single state with several distinct regional economies. The local economic base shapes which
                  businesses are common, which buyers are looking, and what those buyers will ask about. The notes below
                  describe each market in general terms. They are not listings and they do not describe any specific sale.
                </p>

                <div className="mt-10 border-t border-graphite">
                  <article id="san-antonio" className="scroll-mt-header py-10 border-b border-line">
                    <h3 className="heading-3 mb-5">San Antonio</h3>
                    <p className={p}>
                      San Antonio has a large military presence through Joint Base San Antonio,
                      which brings together Fort Sam Houston, Lackland Air Force Base, and Randolph Air Force Base. The South
                      Texas Medical Center on the northwest side, home to UT Health San Antonio and major hospital systems, is
                      a second anchor. Tourism around the Alamo, the River Walk, and the San Antonio Missions, a UNESCO World
                      Heritage Site, supports a large hospitality sector. The city is also headquarters to H-E-B, USAA, and
                      Valero Energy.
                    </p>
                    <p className={p}>
                      Businesses commonly seen in the market include home services and trades, healthcare practices and
                      services, government contractors serving the bases, and restaurants and hospitality. Buyers can include
                      veterans and military retirees who settle in the area, and companies looking to add service territory
                      in South Texas.
                    </p>
                  </article>

                  <article id="corpus-christi" className="scroll-mt-header py-10 border-b border-line">
                    <h3 className="heading-3 mb-5">Corpus Christi</h3>
                    <p className={p}>
                      The Port of Corpus Christi is the center of the local economy and a major gateway for energy exports,
                      including crude oil exports that grew after the federal export ban was lifted in 2015. Refineries and
                      petrochemical plants line the Corpus Christi Ship Channel and the industrial areas around the bay.
                      Naval Air Station Corpus Christi hosts naval flight training and the Corpus Christi Army Depot, which
                      maintains military helicopters. Coastal tourism draws visitors to North Padre Island, Mustang Island,
                      and Padre Island National Seashore, and Texas A&amp;M University Corpus Christi adds a university base.
                    </p>
                    <p className={p}>
                      Common businesses include industrial maintenance and fabrication, marine and port services,
                      construction and specialty contractors serving the plants, and hospitality on the coast. Buyers often
                      include operators already working in the industrial supply chain and individuals relocating to the
                      Coastal Bend.
                    </p>
                  </article>

                  <article id="houston" className="scroll-mt-header py-10 border-b border-line">
                    <h3 className="heading-3 mb-5">Houston</h3>
                    <p className={p}>
                      Houston is the center of the American energy industry, with headquarters and major offices of oil and
                      gas producers, oilfield service companies, and engineering firms. The Texas Medical Center brings together a
                      large concentration of hospitals and medical research institutions. The Port of Houston and
                      the Houston Ship Channel serve a large petrochemical and industrial complex, and NASA&apos;s Johnson
                      Space Center is in the Clear Lake area.
                    </p>
                    <p className={p}>
                      The metro supports a deep base of industrial and field services businesses: equipment rental and
                      repair, inspection, environmental services, specialty trades, and distribution. Healthcare services and
                      home services are also common across a large and spread out region. Buyers include industry
                      professionals who want to own a business in the field they know, companies adding capabilities or
                      territory, and private equity firms acquiring add on businesses for existing platforms.
                    </p>
                  </article>

                  <article id="dallas-fort-worth" className="scroll-mt-header py-10 border-b border-line">
                    <h3 className="heading-3 mb-5">Dallas Fort Worth</h3>
                    <p className={p}>
                      Dallas Fort Worth is a large and diverse metro with a heavy concentration of corporate headquarters,
                      including AT&amp;T, Texas Instruments, and Southwest Airlines in Dallas, American Airlines and BNSF
                      Railway in Fort Worth, and Toyota Motor North America in Plano. Dallas Fort Worth International Airport,
                      the AllianceTexas development in north Fort Worth, and interstate corridors make the region a major
                      logistics and distribution center.
                    </p>
                    <p className={p}>
                      Businesses commonly seen include business to business services, logistics and transportation
                      companies, construction trades, franchised units, and professional practices. Buyers include
                      corporate professionals moving into ownership and companies expanding across the metro. The size of the market means buyers often compare several similar businesses at once, which
                      makes clean records and a well supported price especially important.
                    </p>
                  </article>

                  <article id="austin" className="scroll-mt-header py-10 border-b border-line">
                    <h3 className="heading-3 mb-5">Austin</h3>
                    <p className={p}>
                      Austin is the state capital, and state government is a major employer. The University of Texas at
                      Austin anchors a large student and research population. Technology employers have a large presence in
                      and around the city, including Dell Technologies in nearby Round Rock, Apple, Samsung Austin
                      Semiconductor, and Tesla&apos;s Gigafactory Texas in Travis County. Events such as South by Southwest and
                      the Austin City Limits Music Festival support hospitality and live entertainment.
                    </p>
                    <p className={p}>
                      Common businesses include technology and professional services firms, home services serving a growing
                      region, restaurants and hospitality, and consumer businesses. Buyers include technology professionals
                      moving into ownership and people relocating to Central Texas.
                    </p>
                  </article>
                </div>

                <p className={`${p} mt-10`}>
                  Franchised businesses carry an extra step, since the franchisor usually must approve the transfer. Texas
                  rules that affect franchise relationships are summarized on our{' '}
                  <Link href="/franchise-laws/texas" className={link}>Texas franchise laws</Link> page.
                </p>
              </section>

              <BrokerageNotice />

              <section id="faq" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-8">Questions about working with a business broker</h2>
                <FAQList faqs={faqs} />
              </section>

              <section id="inquiry" className="scroll-mt-header pt-4">
                <h2 className="heading-2 mb-6">Talk to Forge about selling your business</h2>
                <p className={p}>
                  Tell us about the business and your plans. Inquiries are confidential, and we will reply with the
                  information we need for a first conversation.
                </p>
                <IntakeForm inquiryType="seller" />
              </section>
            </div>
          </div>
        </div>
      </section>

      <ContinueLearning
        heading="Where to go from here"
        links={[
          { label: 'Sell your business', href: '/sell-your-business', description: 'How Forge represents Texas owners through a confidential sale.' },
          { label: 'Business valuation', href: '/business-valuation', description: 'How buyers and lenders value a small business, and what a broker opinion of value covers.' },
          { label: 'Buy a business', href: '/buy-a-business', description: 'How buyers find, evaluate, and finance an established Texas business.' },
        ]}
      />

      <SectionCTA
        heading="Start with a confidential conversation"
        body="Tell us about your business and timing. We will explain how we would price it and how we would keep the sale confidential."
        buttonText="Start a confidential inquiry"
        buttonHref="#inquiry"
        secondaryText="Or read about selling your business"
        secondaryHref="/sell-your-business"
      />

    </>
  )
}
