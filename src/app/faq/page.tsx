import { createMetadata } from '@/lib/metadata'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { SectionCTA } from '@/components/SectionCTA'
import { FAQAccordion } from './FAQAccordion'

export const metadata = createMetadata({
  title: 'Franchise FAQ',
  description:
    'Answers to the most common questions about franchising your business. Costs, timelines, legal requirements, revenue models, financing, and what makes a business franchisable.',
  path: '/faq',
})

const FAQ_CATEGORIES = [
  {
    name: 'Getting Started',
    questions: [
      {
        question: 'What does it actually mean to franchise a business?',
        answer:
          'Franchising is a legal and business structure where you (the franchisor) grant other people (franchisees) the right to operate a business using your brand, systems, and processes. In exchange, they pay you an upfront franchise fee and ongoing royalties. You are not opening more locations yourself. You are licensing your proven model so other operators can replicate it. The franchisor builds the system. The franchisee executes it. Done right, it allows you to scale a brand without personally funding or managing every new unit.',
      },
      {
        question: 'How do I know if my business qualifies for franchising?',
        answer:
          'There is no single checklist, but strong candidates share common traits. The business should be profitable, not just revenue positive. It should have a repeatable model that does not depend entirely on the owner. There needs to be clear market demand beyond your local area. And the concept needs to be teachable, meaning someone with motivation and training (but no prior industry experience) can operate it successfully. If you are the only reason your business works, it is not ready yet. If your systems are the reason it works, you are likely a strong candidate.',
      },
      {
        question: 'What makes a business "franchisable" vs. one that should just open more company locations?',
        answer:
          'Franchising works best when the model is systematized, the brand is transferable, and you want to grow faster than your own capital allows. If your business requires a highly specialized owner operator with years of training (think neurosurgery, not sandwich shops), company owned expansion might make more sense. Franchising is the right path when you want geographic reach, when you want operators who have skin in the game, and when your systems are strong enough that someone else can follow them and produce a consistent result. The decision often comes down to capital, speed, and how much control you want over each location.',
      },
    ],
  },
  {
    name: 'Cost & Timeline',
    questions: [
      {
        question: 'How much does it cost to franchise a business?',
        answer:
          'The total investment to properly franchise a business typically ranges from $75,000 to $200,000 or more, depending on the complexity of the concept, the state registrations required, and the level of infrastructure being built. That covers the Franchise Disclosure Document (FDD), franchise agreement, operations manual, training programs, marketing systems, and state filings. Some firms charge less, but you should be skeptical of anyone quoting $25,000 for a "turnkey franchise package." That usually means corners are being cut on compliance, documentation, or both. The cost is not just legal. It is building a system that actually works for the people who invest in it.',
      },
      {
        question: 'How long does the franchise development process take?',
        answer:
          'From the first serious conversation to being legally ready to sell franchises, most projects take 4 to 8 months. The FDD and legal work typically take 60 to 90 days. Building the operations manual, training program, and marketing systems runs in parallel. State registration (required in 14 states) adds 30 to 90 days depending on the state. If the business needs operational refinement before it is franchise ready, add time for that. Anyone promising you will be selling franchises in 30 days is either cutting corners or selling you something that will not hold up.',
      },
      {
        question: 'What exactly does the franchise development investment cover?',
        answer:
          'A proper franchise development engagement covers several major deliverables. First, a full feasibility analysis to confirm the concept is viable. Second, the legal work: your FDD (all 23 required Items), franchise agreement, and any required state registrations. Third, your operations manual, which is the documented playbook a franchisee follows to run the business. Fourth, a training program structure. Fifth, a franchise marketing plan and sales process. Depending on the engagement tier, it may also include franchisee recruitment systems, territory mapping, financial modeling, and ongoing advisory support. The point is to build a franchise system, not just a set of documents.',
      },
    ],
  },
  {
    name: 'Legal & Compliance',
    questions: [
      {
        question: 'What is a Franchise Disclosure Document (FDD)?',
        answer:
          'The FDD is a legal document required by the Federal Trade Commission (FTC) that every franchisor must provide to prospective franchisees at least 14 days before they sign any agreement or pay any money. It contains 23 specific Items covering everything from the franchisor\'s background and litigation history to fees, obligations, financial performance, and the franchise agreement itself. It is not optional. It is not a formality. It is the foundation of your legal compliance as a franchisor. A well-built FDD protects both you and your franchisees. A poorly built one exposes you to lawsuits, regulatory action, and franchisee disputes.',
      },
      {
        question: 'What is Item 19 and do I need one?',
        answer:
          'Item 19 of the FDD is the Financial Performance Representation. It is the only place where you are legally allowed to make claims about how much money a franchisee can expect to earn. You are not required to include an Item 19, but having one is a significant competitive advantage. Prospective franchisees want to know what the financial picture looks like before they invest $200K or more. If you have strong unit economics, an Item 19 backed by real data gives your franchise credibility. If you do not include one, franchisees will notice, and your competitors who do include one will have an edge.',
      },
      {
        question: 'What are franchise registration states and why do they matter?',
        answer:
          'Fourteen states require franchisors to register their FDD with a state regulatory agency before offering or selling franchises in that state. These states include California, New York, Illinois, Maryland, Minnesota, and others. Eight additional states require a filing or notice. The registration process involves submitting your FDD, paying fees, and in some cases responding to comments from a state examiner who reviews your document for compliance. This process can take 30 to 90 days per state. If you sell franchises in a registration state without registering, you are breaking the law. It is that simple. A competent franchise development firm handles this from the start.',
      },
      {
        question: 'What is in a franchise agreement?',
        answer:
          'The franchise agreement is the binding contract between the franchisor and franchisee. It covers the term length (typically 5 to 20 years), territory rights, fee structure (franchise fee, royalties, marketing fund contributions), operational obligations, training requirements, renewal terms, transfer rights, and termination conditions. It is the document that defines the entire relationship. Every obligation, every right, and every restriction lives in this agreement. It is included as an exhibit in your FDD and must be consistent with the disclosures made throughout the document.',
      },
    ],
  },
  {
    name: 'Revenue & Fees',
    questions: [
      {
        question: 'How do franchise royalties work?',
        answer:
          'Royalties are the ongoing fees franchisees pay to the franchisor, typically calculated as a percentage of gross revenue. The industry standard ranges from 4% to 8%, though it varies by industry and business model. Royalties are usually paid weekly or monthly. This is the primary revenue stream for most franchise systems. It aligns incentives because the franchisor only earns more when franchisees earn more. Some systems use flat fee royalties instead of percentages, which can work for certain models but removes that alignment. The royalty rate needs to be high enough to fund franchisor operations and support, but low enough that franchisees remain profitable.',
      },
      {
        question: 'How do franchisors actually make money?',
        answer:
          'Franchisors generate revenue from three main sources. First, the initial franchise fee, which typically ranges from $25,000 to $50,000 per unit. This covers the cost of onboarding and training new franchisees, and in the early stages of a franchise system it often just covers costs. Second, ongoing royalties, which are the real long term revenue engine. As you add units and those units grow their revenue, your royalty income compounds. Third, some franchisors earn revenue from brand fund contributions (used for national marketing), supply chain markups, technology fees, or approved vendor programs. The franchise fee gets you started. Royalties build the business.',
      },
      {
        question: 'What should I charge as a franchise fee?',
        answer:
          'The franchise fee needs to cover your real costs of onboarding a new franchisee: training, site selection support, initial marketing assistance, and technology setup. For most emerging franchise brands, the initial franchise fee falls between $25,000 and $50,000. Charging too little signals that your system is not worth much and makes it hard to deliver quality support. Charging too much prices out qualified candidates and raises expectations you may not be ready to meet. The fee should be justifiable based on what the franchisee receives in return. Your FDD must clearly disclose what the fee covers.',
      },
    ],
  },
  {
    name: 'Financing',
    questions: [
      {
        question: 'How do franchisees typically fund their franchise investment?',
        answer:
          'Franchisees use a combination of funding sources. The most common are SBA loans (specifically the SBA 7(a) program), conventional bank loans, home equity lines of credit, retirement account rollovers (ROBS), personal savings, and sometimes outside investors. Many franchisees combine two or more sources. As a franchisor, your job is not to finance your franchisees, but your franchise system needs to be structured in a way that makes it financeable. That means having a solid FDD, clear unit economics, and a credible business model that a lender can evaluate.',
      },
      {
        question: 'What is a ROBS and how does it work?',
        answer:
          'ROBS stands for Rollover for Business Startups. It is a mechanism that allows someone to use funds from an existing 401(k) or IRA to invest in a new business (including a franchise) without triggering early withdrawal penalties or taxes. The process involves creating a new C-Corporation, establishing a retirement plan for that corporation, rolling the existing retirement funds into the new plan, and then using those funds to purchase stock in the corporation. That capital then funds the business. ROBS is legal and has been used for decades, but it must be set up correctly by a qualified provider. Done wrong, it can trigger IRS penalties. It is a powerful tool for franchisees who have retirement savings but limited liquid capital.',
      },
      {
        question: 'Can franchisees use SBA loans?',
        answer:
          'Yes, and SBA loans are one of the most common funding sources for franchise investments. The SBA 7(a) loan program offers favorable terms: longer repayment periods, lower down payments (typically 10% to 20%), and competitive interest rates. However, the franchise system must be listed on the SBA Franchise Directory for franchisees to qualify. Getting listed requires having a compliant FDD and franchise agreement that meet SBA review standards. This is something a good franchise development firm ensures from the start. If your franchise system is not SBA-approved, your franchisees lose access to one of the best financing tools available, which directly impacts your ability to recruit.',
      },
    ],
  },
  {
    name: 'About Forge Franchising',
    questions: [
      {
        question: 'What kind of support does Forge Franchising provide?',
        answer:
          'We provide end to end franchise development support. That starts with a feasibility analysis to confirm your concept is franchise ready. Then we move into building your FDD, franchise agreement, operations manual, training program, and marketing systems. Depending on the engagement, we also handle state registrations, territory planning, financial modeling, franchisee recruitment strategy, and ongoing advisory. We do not hand you a stack of documents and disappear. Our model is built around staying involved through the process and making sure the system we build actually works when franchisees start operating.',
      },
      {
        question: 'What makes Forge different from other franchise development firms?',
        answer:
          'Three things. First, we come from the operating side. We have actually run businesses, managed multi-unit operations, and dealt with the reality of scaling. Most franchise consultants have never done that. Second, we use technology as a core part of how we build franchise systems. Operations manuals, training platforms, franchisee portals: we build these with modern tools, not Word documents. Third, we are selective. We do not take every client. We take businesses that are genuinely ready to franchise, and we tell the ones that are not ready what they need to do first. That selectivity protects our results and your investment.',
      },
      {
        question: 'What does your process look like from start to finish?',
        answer:
          'Our process has four phases. Phase one is Feasibility, where we analyze your business model, financials, market potential, and operational readiness. Phase two is Structure, where we build your FDD, franchise agreement, operations manual, training program, and compliance framework. Phase three is Launch, where we handle state registrations, build your franchise sales process, and prepare you to start recruiting franchisees. Phase four is Scale, where we provide ongoing support as you sell and onboard your first franchisees. The timeline varies by project, but most clients move from feasibility to franchise ready in 4 to 8 months.',
      },
    ],
  },
]

// Build JSON-LD structured data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-cream">
        <div className="container-wide section-padding">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-widest mb-4">
              Frequently Asked Questions
            </p>
            <h1 className="heading-1 mb-6">
              Straight Answers to the Questions Every Business Owner Asks
            </h1>
            <p className="body-large">
              Franchising is one of the biggest decisions you will make as a business owner. You
              deserve real answers, not marketing fluff. We wrote these responses the way we would
              answer them on a call: directly, thoroughly, and without sugarcoating.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-cream">
        <div className="container-wide">
          <FAQAccordion categories={FAQ_CATEGORIES} />
        </div>
      </section>

      <SectionCTA
        heading="Still Have Questions? Let Us Answer Them Personally."
        body="Book a free feasibility call and we will walk through your specific situation. No generic answers. Just a real conversation about your business and whether franchising is the right move."
        buttonText="Book a Free Feasibility Call"
        buttonHref="/contact"
      />
    </>
  )
}
