import Link from 'next/link'
import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { GuidedPath } from '@/components/GuidedPath'
import { StickyCTA } from '@/components/StickyCTA'
import { Arrow } from '@/components/Arrow'
import { SITE_URL } from '@/lib/constants'
import { webPageSchema, breadcrumbSchema, renderSchema } from '@/lib/schema'

export const metadata = createMetadata({
  title: 'Franchise Education Resources',
  description:
    'Free franchise education for business owners. Guides, tools, glossary, state law breakdowns, and calculators to help you understand what franchising requires.',
  path: '/learn',
})

const toolsAndCalculators = [
  {
    title: 'Franchise calculator',
    description:
      'Model your franchise economics before you commit. Estimate initial fees, royalty revenue, and what it takes to build a sustainable franchise system.',
    href: '/calculator',
    label: 'Run the calculator',
  },
  {
    title: 'Franchise glossary',
    description:
      'Over 40 franchise terms defined in plain language. Every definition includes context on why the term matters for someone franchising their business.',
    href: '/glossary',
    label: 'Browse the glossary',
  },
  {
    title: 'Franchise laws by state',
    description:
      'Registration states, filing states, and what each one requires. Know the regulatory landscape before you start selling franchises.',
    href: '/franchise-laws',
    label: 'View state laws',
  },
]

const guides = [
  {
    title: 'How franchising works',
    description:
      'The complete process from feasibility assessment through FDD filing, franchisee recruitment, and system scaling. Understand every phase before you start.',
    href: '/how-it-works',
    label: 'Read the process guide',
  },
  {
    title: 'Franchise financing guide',
    description:
      'SBA loans, ROBS, conventional lending, and other financing options your future franchisees will use. Understanding funding paths helps you structure a more investable franchise.',
    href: '/financing',
    label: 'Explore financing options',
  },
  {
    title: 'Is my business ready to franchise?',
    description:
      'Not every successful business should franchise. This assessment walks you through the key indicators of franchise readiness, from unit economics to operational documentation.',
    href: '/is-my-business-franchisable',
    label: 'Take the assessment',
  },
]

const featuredArticles = [
  {
    title: 'What does it cost to franchise your business?',
    description:
      'A realistic breakdown of franchise development costs, from FDD preparation to state registration, operations manual development, and launch marketing.',
    href: '/blog/cost-to-franchise-your-business',
  },
  {
    title: 'FDD explained: what every franchisor needs to know',
    description:
      'The Franchise Disclosure Document is the legal backbone of your franchise. Learn what each of the 23 items covers and why they matter.',
    href: '/blog/fdd-explained',
  },
  {
    title: 'How to know if your business is ready to franchise',
    description:
      'Profitability is not enough. Learn the operational, financial, and market criteria that determine whether your business can replicate successfully.',
    href: '/blog/is-your-business-ready-to-franchise',
  },
  {
    title: 'Franchise royalty structures: how to set your rates',
    description:
      'Your royalty rate determines franchisee profitability and your own revenue model. Here is how to find the number that works for both sides.',
    href: '/blog/franchise-royalty-structures',
  },
  {
    title: 'Item 19 financial performance representations',
    description:
      'Should you include an Item 19 in your FDD? How to build one, what data you need, and why strong unit economics disclosure is a competitive advantage.',
    href: '/blog/item-19-financial-performance-representations',
  },
  {
    title: 'The franchise sales process from first call to signed agreement',
    description:
      'A step-by-step breakdown of how franchise systems sell units. Compliance, qualification, Discovery Day, and everything in between.',
    href: '/blog/franchise-sales-process',
  },
]

const industryResources = [
  { title: 'Restaurants & food', href: '/industries/restaurants' },
  { title: 'Salons & beauty', href: '/industries/salons-beauty' },
  { title: 'Fitness & gyms', href: '/industries/fitness' },
  { title: 'Home services', href: '/industries/home-services' },
  { title: 'Health & medical', href: '/industries/health-medical' },
  { title: 'Cleaning', href: '/industries/cleaning' },
  { title: 'Pet care', href: '/industries/pet-care' },
  { title: 'Automotive', href: '/industries/automotive' },
  { title: 'Childcare & education', href: '/industries/childcare-education' },
  { title: 'Retail', href: '/industries/retail' },
]

export default function LearnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderSchema([
            webPageSchema({
              url: `${SITE_URL}/learn`,
              name: 'Franchise Education Resources',
              description: 'Free franchise education for business owners. Guides, tools, glossary, state law breakdowns, and calculators to help you understand what franchising requires.',
              hasBreadcrumb: true,
            }),
            breadcrumbSchema(`${SITE_URL}/learn`, [
              { name: 'Learn & Resources' },
            ]),
          ]),
        }}
      />

      {/* Hero */}
      <section className="bg-graphite surface-dark">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'Learn & Resources' }]} />
          <div className="max-w-[880px]">
            <h1 className="heading-1 mb-8">
              Everything You Need to Know Before Franchising Your Business
            </h1>
            <p className="body-large mb-6">
              We publish our knowledge for free because we believe educated business owners make
              better decisions. Whether you franchise with us, with someone else, or on your own,
              you should understand what the process involves, what it costs, and what it takes to do
              it right.
            </p>
            <p className="body-large">
              Start with the guides below. Use the tools to model your numbers. Read the state law
              breakdowns before you plan your rollout. By the time you talk to anyone about franchise
              development, you should already know the landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Start Here: guided learning path (goal gradient effect). Renders as a stone section. */}
      <GuidedPath
        heading="Not sure where to start? Follow this path."
        subheading="These five steps take you from first question to informed decision. Work through them in order, or jump to the one that matches where you are right now."
        steps={[
          { step: 1, title: 'Find out if your business qualifies', description: 'Eight questions across the four pillars of the Forge Franchise Readiness Method. About two minutes.', href: '/is-my-business-franchisable', time: '2 min' },
          { step: 2, title: 'Understand the four-phase process', description: 'See exactly how a proven business becomes a franchise brand, from feasibility to scale.', href: '/how-it-works', time: '5 min read' },
          { step: 3, title: 'Model your franchise economics', description: 'Plug in your numbers and see what a franchise system could generate in fees and royalties.', href: '/calculator', time: '3 min' },
          { step: 4, title: 'Read the complete franchise guide', description: 'Everything you need to know about franchising, from legal requirements to first sale.', href: '/blog/how-to-franchise-your-business', time: '14 min read' },
          { step: 5, title: 'Book your free feasibility call', description: 'Talk to our team about your specific situation. Honest advice, no obligation.', href: '/contact', time: '30 min call' },
        ]}
      />

      {/* Tools & Quick References */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Tools and quick references</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              Practical tools to help you research, model, and understand the franchise development
              process.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-3">
            {toolsAndCalculators.map((tool) => (
              <div key={tool.title} className="card flex flex-col">
                <h3 className="heading-4 mb-3">{tool.title}</h3>
                <p className="text-steel text-[17px] leading-relaxed mb-8 flex-1">
                  {tool.description}
                </p>
                <Link href={tool.href} className="btn-secondary">
                  {tool.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Guides */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">In-depth guides</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              Comprehensive resources that walk you through the most important aspects of franchise
              development. No fluff, no gated content, just the information you need.
            </p>
          </div>
          <div className="tile-grid md:grid-cols-3">
            {guides.map((guide) => (
              <div key={guide.title} className="card flex flex-col">
                <h3 className="heading-4 mb-3">{guide.title}</h3>
                <p className="text-steel text-[17px] leading-relaxed mb-8 flex-1">
                  {guide.description}
                </p>
                <Link href={guide.href} className="btn-primary">
                  {guide.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 max-[720px]:mb-8 gap-6">
            <div>
              <h2 className="heading-2 mb-6">Featured articles</h2>
              <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
                In-depth articles on the most common questions business owners have about
                franchising.
              </p>
            </div>
            <Link href="/blog" className="btn-secondary whitespace-nowrap">
              View all articles
            </Link>
          </div>
          <div className="tile-grid md:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="card-interactive group flex flex-col justify-between gap-8"
              >
                <span>
                  <h3 className="heading-4 mb-3">{article.title}</h3>
                  <p className="text-steel text-[15px] leading-relaxed">{article.description}</p>
                </span>
                <Arrow size={18} className="text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Resources */}
      <section className="section-padding bg-stone">
        <div className="container-wide">
          <div className="grid min-[961px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-6 min-[961px]:gap-20 items-end mb-14 max-[720px]:mb-8">
            <h2 className="heading-2">Franchise guides by industry</h2>
            <p className="text-steel text-[17px] leading-relaxed max-w-[560px]">
              Every industry has unique franchise considerations. From unit economics to regulatory
              requirements, these guides cover what matters for your specific business type.
            </p>
          </div>
          <ul className="border-t border-graphite grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-x-8">
            {industryResources.map((industry) => (
              <li key={industry.title} className="border-b border-line">
                <Link
                  href={industry.href}
                  className="group flex items-center justify-between gap-4 min-h-[56px] py-3 text-[15px] font-semibold text-graphite hover:text-accent transition-colors"
                >
                  {industry.title}
                  <Arrow size={16} className="text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SectionCTA
        heading="Done researching? Let us talk about your business."
        body="You have read the guides and run the numbers. The next step is a real conversation about your specific business, your market, and whether franchising is the right growth strategy for you."
        buttonText="Book a free feasibility call"
        buttonHref="/contact"
      />

      <StickyCTA
        text="Get your free readiness score"
        href="/is-my-business-franchisable"
      />
    </>
  )
}
