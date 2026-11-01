/**
 * Sell a business by industry: one entry per /sell-your-business/[industry] page.
 *
 * Licensing statements are limited to what the linked official agency page
 * states. Nothing here gives a multiple, a price range, a sale timeline, or a
 * claim about sales Forge has handled.
 */

export type Source = { label: string; url: string }
export type Term = { term: string; text: string }

export type SellIndustry = {
  slug: string
  breadcrumb: string
  title: string
  description: string
  h1: string
  serviceName: string
  intro: string[]
  callout?: { before: string; label: string; href: string; after: string }
  buyers: { heading: string; intro: string; items: Term[] }
  records: { heading: string; intro: string; items: { item: string; why: string }[] }
  earnings: { heading: string; body: string[]; addBacksHeading: string; addBacks: string[] }
  licensing: { heading: string; body: string[]; sources: Source[] }
  extra?: { id: string; tocLabel: string; heading: string; body: string[]; rows?: Term[] }
  confidentiality: { heading: string; intro: string; items: string[] }
  value: { heading: string; body: string }
  faqHeading: string
  faqs: { question: string; answer: string }[]
  /** Completes "Talk to Forge about selling your ..." */
  formNoun: string
  /** Value placed in the intake form's Industry field. */
  formIndustry: string
  industryPage?: { href: string; label: string }
  blogPost?: { href: string; label: string }
  /** Texas brokerage market slugs this page links to. */
  markets: string[]
  siblings: string[]
  closing: { heading: string; body: string }
}

const TDLR_ACR: Source = { label: 'TDLR, Air Conditioning and Refrigeration program', url: 'https://www.tdlr.texas.gov/acr/acr.htm' }
const TDLR_ACR_SANCTIONS: Source = { label: 'TDLR, Air Conditioning and Refrigeration penalty and sanction schedule', url: 'https://www.tdlr.texas.gov/enforcement/acrsanctions.htm' }
const TDLR_ELEC: Source = { label: 'TDLR, Electricians program', url: 'https://www.tdlr.texas.gov/electricians/elec.htm' }
const TDLR_ELEC_FAQ: Source = { label: 'TDLR, Electricians frequently asked questions', url: 'https://www.tdlr.texas.gov/electricians/elecfaq.htm' }
const TSBPE_RMP: Source = { label: 'Texas State Board of Plumbing Examiners, Responsible Master Plumber', url: 'https://tsbpe.texas.gov/license-types/responsible-master-plumber/' }
const TSBPE_LIST: Source = { label: 'Texas State Board of Plumbing Examiners, licensee list', url: 'https://tsbpe.texas.gov/free-licensee-list/' }
const TCEQ_IRRIGATOR: Source = { label: 'TCEQ, Landscape Irrigator license', url: 'https://www.tceq.texas.gov/licensing/licenses/lilic' }
const TDA_LAWNS: Source = { label: 'Texas Department of Agriculture, applying pesticides to lawns, trees, and ornamentals', url: 'https://texasagriculture.gov/Regulatory-Programs/Pesticides/Agricultural-Applicators/Applying-Pesticides-to-Lawns-Trees-Ornamentals' }
const TABC_FAQ: Source = { label: 'TABC, frequently asked questions', url: 'https://www.tabc.texas.gov/faqs/' }
const TABC_CHANGES: Source = { label: 'TABC, reporting changes to an existing license', url: 'https://www.tabc.texas.gov/services/tabc-licenses-permits/manage-report-changes-to-an-existing-license/' }
const DSHS_RFE: Source = { label: 'DSHS, starting a new retail food establishment', url: 'https://www.dshs.texas.gov/sites/default/files/foodestablishments/pdf/GuidanceDocs/Starting-a-New-RFE.pdf' }
const TDLR_SALON_CHOW: Source = { label: 'TDLR, barbering and cosmetology establishment change of ownership', url: 'https://www.tdlr.texas.gov/barbering-and-cosmetology/establishments/change-of-ownership.htm' }
const DPS_INSPECTION: Source = { label: 'Texas DPS, vehicle inspection station manual, chapter 1', url: 'https://www.dps.texas.gov/sites/default/files/documents/rsd/vi/publications/rules/safety_manual/chapter1.pdf' }
const SOS_LICENSE: Source = { label: 'Texas Secretary of State, business licenses and permits', url: 'https://www.sos.state.tx.us/corp/foreign_outofstate.shtml' }
const HHSC_HCSSA: Source = { label: 'Texas HHSC, how to become a licensed HCSSA provider', url: 'https://www.hhs.texas.gov/providers/long-term-care-providers/home-community-support-services-agencies-hcssa/how-become-a-licensed-hcssa-provider' }

export const SELL_INDUSTRIES: SellIndustry[] = [
  // ------------------------------------------------------------------ HVAC
  {
    slug: 'hvac-business',
    breadcrumb: 'HVAC Business',
    title: 'Sell an HVAC Business in Texas',
    description:
      'Sell an HVAC business in Texas: what buyers check first, service agreement records, SDE and add backs, TDLR contractor rules, and keeping technicians.',
    h1: 'Sell an HVAC business in Texas',
    serviceName: 'Business Brokerage for HVAC Companies in Texas',
    intro: [
      'An HVAC company is a team of technicians, a fleet, a book of customers, and a license that has to keep working after you leave. Buyers price all four. Owners who prepare to sell an HVAC business with that in mind give buyers fewer reasons to discount the price or walk away during diligence.',
      'This page covers what HVAC buyers look at first, the records to pull together, how earnings are usually measured, and how Texas contractor licensing affects the sale.',
    ],
    buyers: {
      heading: 'What buyers of an HVAC business look at first',
      intro: 'HVAC buyers tend to start with the parts of the business that keep revenue coming in without the owner selling every job.',
      items: [
        { term: 'Service agreement base', text: 'Maintenance agreements bring customers back twice a year and feed replacement work. Buyers want the count, renewal history, and what each agreement includes.' },
        { term: 'Technician retention', text: 'Who does the work, how long they have been there, how they are paid, and whether any would leave with a change in ownership.' },
        { term: 'License holder transition', text: 'Whose contractor license the company works under, and who will fill that role after closing.' },
        { term: 'Fleet condition', text: 'The age, mileage, and condition of trucks and equipment, and which are owned, financed, or leased.' },
        { term: 'Residential and commercial mix', text: 'The share of revenue from homeowners versus commercial accounts, and how concentrated the commercial side is.' },
        { term: 'Lead sources', text: 'Where calls come from: agreements, referrals, a builder relationship, paid advertising, or a manufacturer dealer program.' },
      ],
    },
    records: {
      heading: 'Records to prepare for an HVAC sale',
      intro: 'Beyond tax returns and financial statements, HVAC buyers ask for operating records that show how the business actually runs.',
      items: [
        { item: 'Service agreement register', why: 'Each agreement with start date, renewal date, price, and visit history, with customer names withheld until late in the process.' },
        { item: 'Revenue by type', why: 'Service calls, maintenance, replacement installs, new construction, and commercial work, split by month for several years.' },
        { item: 'Technician roster', why: 'Role, tenure, pay structure, certifications, and which technicians run their own trucks. Names come later.' },
        { item: 'Fleet and equipment schedule', why: 'Year, mileage, condition, and loan or lease terms for every vehicle and major tool.' },
        { item: 'Dispatch and field software data', why: 'Job history, average ticket, callbacks, and close rates from the system you use to schedule and invoice.' },
        { item: 'Warranty and callback history', why: 'Open labor warranties the buyer would inherit, and how callbacks are tracked.' },
      ],
    },
    earnings: {
      heading: 'How earnings are measured for an HVAC business',
      body: [
        'Most owner operated HVAC companies are measured on seller\'s discretionary earnings (SDE): pretax earnings before interest, depreciation, and amortization, with one owner\'s compensation and benefits added back. SDE shows what the business produces for a single owner who also works in it.',
        'Larger HVAC companies with a general manager, an office team, and service managers are more often measured on EBITDA, which treats a market rate manager salary as a real expense. Which measure a buyer uses depends on whether they plan to run the company or own it through management.',
      ],
      addBacksHeading: 'HVAC add backs that need documentation',
      addBacks: [
        'Owner salary, payroll taxes, and benefits above what a replacement manager would cost',
        'A personal vehicle or fuel card run through the business',
        'Family members on payroll who do not work in the business',
        'One time costs such as a lawsuit, a software migration, or a truck accident not covered by insurance',
        'Unusually large equipment purchases expensed in a single year',
      ],
    },
    licensing: {
      heading: 'Texas contractor licensing and the sale',
      body: [
        'The Texas Department of Licensing and Regulation (TDLR) licenses air conditioning and refrigeration contractors. TDLR states that air conditioning and refrigeration companies must employ a licensed contractor in each permanent location. Its penalty schedule also lists failing to notify the department within 30 days that a licensee has left as a violation.',
        'That makes the license holder one of the first questions in an HVAC sale. If the selling owner is the licensed contractor, the buyer needs a plan: a buyer who holds the license, a licensed employee who stays, or a transition period. Confirm the current requirements with TDLR and with counsel before the deal is structured, and check local permit and registration requirements in each city where the company works.',
      ],
      sources: [TDLR_ACR, TDLR_ACR_SANCTIONS],
    },
    confidentiality: {
      heading: 'Keeping an HVAC sale confidential',
      intro: 'In a trade where technicians are recruited constantly, word of a sale travels fast.',
      items: [
        'Technicians who hear about a sale may take calls from competitors. Tell key people late, usually with the buyer, once retention terms are settled.',
        'Service agreement customers should not learn of the sale until the buyer is ready to introduce themselves.',
        'Competitors who inquire receive a blind profile only. Agreement counts and technician details are shared in summary or through their advisors.',
        'Ride alongs and shop visits are scheduled after hours or presented as routine visits.',
      ],
    },
    value: {
      heading: 'Pricing an HVAC business',
      body: 'Buyers price an HVAC company on the earnings it produces and the risk that those earnings change after closing. A strong agreement base, a stable team, and a clear license plan reduce that risk.',
    },
    faqHeading: 'Questions from HVAC owners',
    faqs: [
      { question: 'Does my TDLR contractor license transfer when I sell my HVAC business?', answer: 'Plan as though it does not. TDLR licenses the contractor, and a company must employ a licensed contractor at each permanent location. The buyer needs a licensed contractor in place at closing, whether that is the buyer, an employee, or you during a transition. Confirm the details with TDLR and counsel.' },
      { question: 'Should I sell maintenance agreements before I sell the business?', answer: 'Usually not. The agreements are part of what a buyer pays for, because they bring customers back and lead to replacement work. Keep them current and well documented instead.' },
      { question: 'How do I keep my technicians from leaving during a sale?', answer: 'Keep the sale confidential until a buyer is committed, then introduce key technicians with the buyer and discuss retention terms. Buyers often want those conversations to happen before closing.' },
      { question: 'Do buyers care whether my work is residential or commercial?', answer: 'Yes. Residential service and agreement work spreads revenue across many customers. Commercial accounts can be larger but more concentrated. Buyers want to see the mix and how dependent the business is on its largest accounts.' },
      { question: 'Can I sell my HVAC business if I am the only licensed contractor?', answer: 'Yes, but the license plan becomes a condition of the deal. Buyers and lenders will want to know who holds the license after closing and how long you will stay to support the transition.' },
    ],
    formNoun: 'HVAC business',
    formIndustry: 'HVAC',
    industryPage: { href: '/industries/home-services', label: 'Franchising a home services business' },
    blogPost: { href: '/blog/hvac-business-valuation', label: 'HVAC business valuation: what buyers look at' },
    markets: ['houston', 'san-antonio'],
    siblings: ['plumbing-business', 'electrical-contracting-business'],
    closing: { heading: 'Thinking about selling your HVAC company?', body: 'Start with a confidential conversation about your team, your agreements, and your license plan.' },
  },

  // -------------------------------------------------------------- Plumbing
  {
    slug: 'plumbing-business',
    breadcrumb: 'Plumbing Business',
    title: 'Sell a Plumbing Business in Texas',
    description:
      'Sell a plumbing business in Texas: the Responsible Master Plumber rule, what buyers review, records to prepare, SDE versus EBITDA, and confidentiality.',
    h1: 'Sell a plumbing business in Texas',
    serviceName: 'Business Brokerage for Plumbing Companies in Texas',
    intro: [
      'Plumbing companies sell on the strength of their service work, their crews, and the licensed plumber the company works under. In Texas, that last point is set by the state plumbing board, and it shapes how a sale is structured from the first conversation.',
      'Here is what plumbing buyers check first, the records to pull together before you sell a plumbing business, and how the Responsible Master Plumber rule affects the transfer.',
    ],
    buyers: {
      heading: 'What buyers of a plumbing business look at first',
      intro: 'Plumbing buyers separate steady service revenue from project work that has to be won again every month.',
      items: [
        { term: 'Service versus new construction', text: 'Repair and drain work from homeowners behaves very differently from builder contracts. Buyers want the split by month.' },
        { term: 'The Responsible Master Plumber', text: 'Who serves as the company\'s Responsible Master Plumber, and whether that person stays after closing.' },
        { term: 'Crew structure', text: 'How many licensed plumbers, apprentices, and helpers the company employs, and who supervises the field.' },
        { term: 'Builder and property manager relationships', text: 'Whether large accounts are under contract and how much revenue each one represents.' },
        { term: 'Warranty exposure', text: 'Open warranty obligations on installs and new construction work that a buyer would inherit.' },
        { term: 'Truck stock and inventory', text: 'What is carried on each truck and in the shop, and how it is counted.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a plumbing sale',
      intro: 'Plumbing buyers ask for records that tie revenue to the people and accounts behind it.',
      items: [
        { item: 'Revenue by job type', why: 'Service and repair, drain and sewer, water heaters, remodels, and new construction, by month for several years.' },
        { item: 'License roster', why: 'Each employee\'s license level and expiration, including the Responsible Master Plumber.' },
        { item: 'Builder and commercial contracts', why: 'Terms, pricing, payment history, and whether the contract allows assignment to a new owner.' },
        { item: 'Inventory count method', why: 'How truck and shop inventory is counted and valued, since it is often adjusted at closing.' },
        { item: 'Permit and inspection history', why: 'A record of permits pulled and failed inspections shows buyers how the work is managed.' },
      ],
    },
    earnings: {
      heading: 'How earnings are measured for a plumbing business',
      body: [
        'An owner who runs jobs, manages the crews, and holds the master license is usually selling a business measured on SDE, because the buyer will step into that role. SDE adds one owner\'s pay and benefits back to pretax earnings before interest and depreciation.',
        'When the company has a general manager and field supervisors and the owner is mostly in the office, buyers lean toward EBITDA, which keeps a market salary for management as an expense. Builder heavy companies are often analyzed both ways, with attention to how steady the work has been.',
      ],
      addBacksHeading: 'Plumbing add backs that need documentation',
      addBacks: [
        'Owner compensation above a market wage for the role the buyer will fill',
        'Personal use of company vehicles and equipment',
        'A one time warranty claim or legal settlement',
        'Rent paid to the owner above market rate for a building the owner also owns',
        'Nonrecurring costs such as a move, a software change, or a large bad debt write off',
      ],
    },
    licensing: {
      heading: 'Texas plumbing licensing and the sale',
      body: [
        'Plumbing in Texas is licensed by the Texas State Board of Plumbing Examiners (TSBPE). The board states that a company offering plumbing services to the public must secure the services of at least one Responsible Master Plumber, and that a Responsible Master Plumber may act as the Responsible Master Plumber of record for only one company at a time.',
        'If the selling owner is the company\'s Responsible Master Plumber, the buyer needs another one in place, and that person cannot already serve another company in that role. Settle the plan before the letter of intent, and confirm current board requirements and any local registration rules with TSBPE and counsel.',
      ],
      sources: [TSBPE_RMP, TSBPE_LIST],
    },
    confidentiality: {
      heading: 'Keeping a plumbing sale confidential',
      intro: 'Plumbers, builders, and supply houses talk to each other every day.',
      items: [
        'Builders and property managers should hear about the sale from you and the buyer together, after the deal is secure.',
        'Licensed plumbers are in demand. Tell them late, with retention terms ready.',
        'Supply house representatives often know the business well. Keep inventory counts and supplier pricing out of early marketing materials.',
        'Use a blind profile that describes the service mix without naming the area too precisely.',
      ],
    },
    value: {
      heading: 'Pricing a plumbing business',
      body: 'A plumbing company with repeat service customers, documented crews, and a Responsible Master Plumber plan carries less risk for a buyer than one built on a few builder accounts and the owner\'s license.',
    },
    faqHeading: 'Questions from plumbing company owners',
    faqs: [
      { question: 'What happens if I am the Responsible Master Plumber for my company?', answer: 'The buyer needs someone else to fill that role after closing. TSBPE states that a Responsible Master Plumber can serve only one company at a time, so the replacement cannot be serving another company in that role. Agree on the plan before signing a letter of intent.' },
      { question: 'Do builder contracts transfer to a buyer?', answer: 'Only if the contract allows it or the builder agrees. Review each contract for assignment and change of control terms, and expect a buyer to ask how long each relationship has lasted.' },
      { question: 'How is truck and shop inventory handled in a plumbing sale?', answer: 'It is commonly counted near closing and either included in the price up to an agreed level or paid for separately. The purchase agreement sets the method.' },
      { question: 'Will buyers discount a plumbing company that depends on new construction?', answer: 'They will look harder at it, because new construction work rises and falls with building activity. Several years of monthly revenue by job type helps buyers judge how steady the work has been.' },
      { question: 'Can I stay on after selling my plumbing business?', answer: 'Many buyers want the seller to stay for a transition period, and some want the seller to remain the licensed plumber for a time. Those terms are negotiated in the letter of intent and purchase agreement.' },
    ],
    formNoun: 'plumbing business',
    formIndustry: 'Plumbing',
    industryPage: { href: '/industries/home-services', label: 'Franchising a home services business' },
    markets: ['houston', 'dallas-fort-worth'],
    siblings: ['hvac-business', 'electrical-contracting-business'],
    closing: { heading: 'Thinking about selling your plumbing company?', body: 'Talk to Forge confidentially about your crews, your accounts, and how the license will transfer.' },
  },

  // ------------------------------------------------------------ Electrical
  {
    slug: 'electrical-contracting-business',
    breadcrumb: 'Electrical Contracting Business',
    title: 'Sell an Electrical Contracting Business',
    description:
      'Sell an electrical contracting business in Texas: the Master Electrician of Record, backlog and bonding, SDE versus EBITDA, and the new license a buyer needs.',
    h1: 'Sell an electrical contracting business in Texas',
    serviceName: 'Business Brokerage for Electrical Contractors in Texas',
    intro: [
      'Electrical contractors sell a backlog of work, a team of licensed electricians, and a contractor license tied to a Master Electrician of Record. In Texas, the license itself does not pass to a new owner, so buyers plan the licensing step from the start.',
      'This page explains what buyers of an electrical contractor review, what to prepare, and how TDLR\'s rules shape the transfer.',
    ],
    buyers: {
      heading: 'What buyers of an electrical contractor look at first',
      intro: 'Electrical buyers focus on the work already won and the people needed to deliver it.',
      items: [
        { term: 'Backlog', text: 'Signed work not yet completed, with contract values, expected completion, and margin estimates.' },
        { term: 'Master Electrician of Record', text: 'Who holds that role for the company, and whether they stay after the sale.' },
        { term: 'Bonding and insurance', text: 'Bonding capacity and the insurance history a buyer will need to replace or assume.' },
        { term: 'Work mix', text: 'Service, residential, commercial, and industrial work each carry different risk and payment terms.' },
        { term: 'Bidding and estimating', text: 'Who prices the work and how win rates and job margins are tracked.' },
        { term: 'General contractor relationships', text: 'How much work comes from a few general contractors and on what terms.' },
      ],
    },
    records: {
      heading: 'Records to prepare for an electrical contractor sale',
      intro: 'Contract work calls for project level records beyond the financial statements.',
      items: [
        { item: 'Work in progress schedule', why: 'Contract value, billings, costs to date, and estimated cost to complete for each open job.' },
        { item: 'Backlog report', why: 'Signed but unstarted work, with customer type and expected timing.' },
        { item: 'Job cost history', why: 'Estimated versus actual margin on completed jobs over several years.' },
        { item: 'Retainage and receivables aging', why: 'Amounts held back by customers and how long receivables take to collect.' },
        { item: 'License and certification roster', why: 'Each electrician\'s license level and expiration, and the Master Electrician of Record.' },
        { item: 'Bonding and insurance file', why: 'Surety letters, bond history, and loss runs from the insurance carrier.' },
      ],
    },
    earnings: {
      heading: 'How earnings are measured for an electrical contractor',
      body: [
        'Smaller service focused electrical contractors run by a working owner are usually measured on SDE. Contractors with project managers, estimators, and a field superintendent are more often measured on EBITDA.',
        'For project based contractors, buyers also adjust earnings for how revenue is recognized. A company that books revenue on a completed contract basis can show very different annual results than one using percentage of completion, so the work in progress schedule is part of the earnings discussion, not separate from it.',
      ],
      addBacksHeading: 'Electrical contractor add backs that need documentation',
      addBacks: [
        'Owner compensation above a market salary for the role',
        'Losses on a single job that the buyer can confirm was unusual',
        'One time legal or claim costs',
        'Personal expenses run through the company',
        'Equipment purchases expensed in one year that would normally be spread over several',
      ],
    },
    licensing: {
      heading: 'Texas electrical licensing and the sale',
      body: [
        'TDLR licenses electrical work in Texas and states that anyone who performs, or offers to perform, non exempt electrical work in the state must be licensed. An electrical contractor must either assign its own master electrician license to the company or employ a master electrician as its Master Electrician of Record.',
        'Two TDLR rules matter in a sale. If the company is being sold or transferred to a different owner, TDLR says the new company owner must apply for a new license. And when the Master Electrician of Record leaves, the business must notify TDLR and designate a replacement within thirty business days of the separation. Build both into the closing plan, and confirm current requirements with TDLR and counsel.',
      ],
      sources: [TDLR_ELEC, TDLR_ELEC_FAQ],
    },
    confidentiality: {
      heading: 'Keeping an electrical contractor sale confidential',
      intro: 'General contractors and sureties pay attention to who owns their subcontractors.',
      items: [
        'Do not let general contractors learn of the sale before the buyer can show it will finish the backlog.',
        'Bonding companies will need to know eventually. Plan that conversation with the buyer.',
        'Estimators and project managers carry customer relationships. Tell them late, with the buyer.',
        'Keep bid pricing and job margins out of early marketing materials, especially for buyers who compete with you.',
      ],
    },
    value: {
      heading: 'Pricing an electrical contracting business',
      body: 'Buyers weigh earnings against backlog quality, job margin history, and how much of the company\'s capacity sits with the owner and the Master Electrician of Record.',
    },
    faqHeading: 'Questions from electrical contractors',
    faqs: [
      { question: 'Does my electrical contractor license go to the buyer?', answer: 'No. TDLR states that when a company is sold or transferred to a different owner, the new owner must apply for a new license. Plan the application and the Master Electrician of Record as part of closing.' },
      { question: 'What if I am the Master Electrician of Record?', answer: 'The buyer will need a replacement. TDLR requires the business to notify the department and designate a new individual within thirty business days after the Master Electrician of Record leaves. Many buyers ask the seller to stay through that transition.' },
      { question: 'How is backlog handled when an electrical contractor sells?', answer: 'Buyers review the work in progress schedule and backlog, and the purchase agreement sets how open jobs, billings, and retainage are treated at closing.' },
      { question: 'Will my bonding transfer to the buyer?', answer: 'Bonding is based on the owner and the company\'s finances, so a buyer usually needs its own surety relationship. Discuss timing with your surety and the buyer before closing.' },
      { question: 'Do buyers prefer service work or project work?', answer: 'Each appeals to different buyers. Service work spreads revenue across many customers. Project work can be larger but depends on winning bids and managing job margins.' },
    ],
    formNoun: 'electrical contracting business',
    formIndustry: 'Electrical contracting',
    industryPage: { href: '/industries/home-services', label: 'Franchising a home services business' },
    markets: ['houston', 'corpus-christi'],
    siblings: ['hvac-business', 'plumbing-business'],
    closing: { heading: 'Thinking about selling your electrical company?', body: 'Start with a confidential conversation about your backlog, your team, and the licensing plan.' },
  },

  // ----------------------------------------------------------- Landscaping
  {
    slug: 'landscaping-business',
    breadcrumb: 'Landscaping Business',
    title: 'Sell a Landscaping Business in Texas',
    description:
      'Sell a landscaping business in Texas: recurring maintenance contracts, crews and seasonality, equipment, irrigation and pesticide licensing, and add backs.',
    h1: 'Sell a landscaping business in Texas',
    serviceName: 'Business Brokerage for Landscaping Companies in Texas',
    intro: [
      'A landscaping company is built on routes, crews, and equipment, and the most valuable part is usually the maintenance work that renews every year. Buyers want to see how much of the revenue repeats, how the crews are staffed, and what licenses the work depends on.',
      'If you plan to sell a landscaping business, this page explains what buyers check, the records that help, and the state licenses that can apply to irrigation and lawn treatment work.',
    ],
    buyers: {
      heading: 'What buyers of a landscaping business look at first',
      intro: 'Landscaping buyers sort revenue into what repeats and what has to be sold again.',
      items: [
        { term: 'Maintenance contracts', text: 'Recurring mowing and grounds contracts, with terms, renewal history, and price changes.' },
        { term: 'Commercial and residential mix', text: 'HOA, commercial property, and homeowner accounts, and how concentrated the largest ones are.' },
        { term: 'Crew staffing', text: 'Crew leaders, tenure, how crews are recruited, and how labor needs change through the year.' },
        { term: 'Equipment and trailers', text: 'Mowers, trucks, trailers, and enhancement equipment, with age and condition.' },
        { term: 'Enhancement and install work', text: 'Project revenue such as installs, irrigation, and seasonal color, and how it is sold.' },
        { term: 'Route density', text: 'How tightly the routes are grouped, which affects drive time and crew productivity.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a landscaping sale',
      intro: 'Route and contract records show buyers how predictable the business is.',
      items: [
        { item: 'Contract list', why: 'Each maintenance account with service scope, price, start date, and renewal history, with names withheld at first.' },
        { item: 'Revenue by month and service line', why: 'Maintenance, enhancements, irrigation, and lawn treatment, by month for several years, to show seasonality.' },
        { item: 'Crew and labor records', why: 'Crew structure, pay rates, peak and off season headcount, and how workers are hired.' },
        { item: 'Equipment list', why: 'Make, model, year, hours, condition, and financing for each major piece.' },
        { item: 'Route maps or schedules', why: 'How accounts are grouped by day and crew.' },
        { item: 'License records', why: 'Any irrigation or pesticide applicator licenses held by the owner or employees.' },
      ],
    },
    earnings: {
      heading: 'How earnings are measured for a landscaping business',
      body: [
        'Most owner run landscaping companies are measured on SDE, since the owner usually sells accounts, schedules crews, and handles equipment. Larger companies with branch or account managers are more often measured on EBITDA.',
        'Because equipment wears out on a regular schedule, buyers also look at how much the company spends to replace mowers, trucks, and trailers each year. Earnings that only look strong because replacement was put off will not hold up in diligence.',
      ],
      addBacksHeading: 'Landscaping add backs that need documentation',
      addBacks: [
        'Owner pay above what a manager would cost',
        'Personal vehicles, trailers, or equipment used outside the business',
        'One time storm cleanup costs or uninsured damage',
        'Family members paid but not working in the business',
        'Nonrecurring legal or consulting costs',
      ],
    },
    licensing: {
      heading: 'Texas irrigation and pesticide licensing',
      body: [
        'Two state licenses commonly come up. The Texas Commission on Environmental Quality (TCEQ) licenses landscape irrigators and states that a person may not sell, design, install, maintain, alter, repair, service, or inspect an irrigation system without a license. A licensed irrigation technician must work under the direct supervision of a licensed landscape irrigator.',
        'The Texas Department of Agriculture states that applicators who apply any pesticide to ornamental plants, trees, lawns, or weeds for hire must be licensed by TDA, while applicators who apply only fertilizer do not need a TDA license. If the selling owner holds either license, the buyer needs a licensed person in place for that work after closing. Confirm current requirements with each agency and with counsel.',
      ],
      sources: [TCEQ_IRRIGATOR, TDA_LAWNS],
    },
    confidentiality: {
      heading: 'Keeping a landscaping sale confidential',
      intro: 'Crews and property managers notice changes quickly.',
      items: [
        'Crew leaders hold the day to day relationship with many accounts. Bring them in late, with the buyer.',
        'HOA boards and property managers should learn of the sale when the buyer is ready to meet them.',
        'Competitors interested in your routes see a blind profile and summary account data until they are qualified.',
        'Equipment inspections can be scheduled at the yard after hours.',
      ],
    },
    value: {
      heading: 'Pricing a landscaping business',
      body: 'Buyers value recurring maintenance revenue, dense routes, steady crew leaders, and equipment in good condition. They discount revenue that depends on one large account or on the owner\'s personal relationships.',
    },
    faqHeading: 'Questions from landscaping company owners',
    faqs: [
      { question: 'Are maintenance contracts the most valuable part of a landscaping business?', answer: 'They are usually the part buyers focus on, because they renew and keep crews busy. Buyers will check terms, renewal history, and whether the contracts can be assigned to a new owner.' },
      { question: 'How do buyers handle the slow season in a landscaping business?', answer: 'They look at monthly results for several years to see how revenue and labor move through the year, and they plan working capital for the slower months.' },
      { question: 'Do I need a license to sell an irrigation or lawn treatment business?', answer: 'The licenses attach to the people doing the work. TCEQ licenses irrigators, and TDA licenses pesticide application for hire. The buyer needs licensed people in place to keep offering those services.' },
      { question: 'Is my equipment included in the sale?', answer: 'Usually, along with any financing that has to be paid off or assumed. An equipment list with age, hours, and condition helps buyers and lenders agree on its role in the price.' },
      { question: 'Will HOA and commercial accounts stay after the sale?', answer: 'That depends on the contracts and the relationships. Buyers will ask how long each account has been with you and who manages it day to day.' },
    ],
    formNoun: 'landscaping business',
    formIndustry: 'Landscaping',
    industryPage: { href: '/industries/home-services', label: 'Franchising a home services business' },
    markets: ['dallas-fort-worth', 'austin'],
    siblings: ['cleaning-business', 'hvac-business'],
    closing: { heading: 'Thinking about selling your landscaping company?', body: 'Talk to Forge confidentially about your routes, your crews, and your timing.' },
  },

  // ------------------------------------------------------------ Restaurant
  {
    slug: 'restaurant',
    breadcrumb: 'Restaurant',
    title: 'Sell a Restaurant in Texas',
    description:
      'Sell a restaurant in Texas: lease terms, TABC permits that do not transfer, kitchen equipment, staff, food costs, and how restaurant earnings are measured.',
    h1: 'Sell a restaurant in Texas',
    serviceName: 'Business Brokerage for Restaurants in Texas',
    intro: [
      'Most restaurant buyers start with the lease, not the menu. The location, the rent, and the time left on the lease decide whether a buyer can finance the purchase and earn a return. After that come the permits, the kitchen, and the staff.',
      'This page covers what buyers look at when you sell a restaurant in Texas, the records to prepare, and how alcohol and food permits work when ownership changes.',
    ],
    buyers: {
      heading: 'What restaurant buyers look at first',
      intro: 'Restaurant buyers check the things that can stop a deal before they study the earnings.',
      items: [
        { term: 'Lease terms', text: 'Remaining term, renewal options, rent and increases, and whether the landlord must consent to an assignment.' },
        { term: 'Liquor permit', text: 'Whether the restaurant sells alcohol, what share of sales it represents, and the buyer\'s path to its own permit.' },
        { term: 'Kitchen equipment', text: 'Condition and ownership of the hood system, walk ins, and cooking line, and what is leased.' },
        { term: 'Staff', text: 'Kitchen leadership, front of house managers, and who would stay after a change in ownership.' },
        { term: 'Food and labor costs', text: 'Prime costs as a share of sales and how they are tracked.' },
        { term: 'Sales channels', text: 'Dine in, takeout, delivery apps, and catering, and the fees each one carries.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a restaurant sale',
      intro: 'Restaurant buyers verify sales from more than one source.',
      items: [
        { item: 'Point of sale reports', why: 'Sales by month, day part, and category for several years, which buyers compare to tax returns and bank deposits.' },
        { item: 'Sales tax and mixed beverage filings', why: 'State filings give buyers an independent check on reported sales.' },
        { item: 'The lease and all amendments', why: 'Including any personal guarantee and the assignment clause.' },
        { item: 'Equipment list', why: 'Each major item with age, condition, and whether it is owned or leased.' },
        { item: 'Health inspection history', why: 'Recent inspection reports and how any violations were resolved.' },
        { item: 'Vendor and delivery app agreements', why: 'Pricing terms, fees, and any agreements a buyer would need to replace.' },
      ],
    },
    earnings: {
      heading: 'How restaurant earnings are measured',
      body: [
        'Single location restaurants run by an owner are almost always measured on SDE. Groups with several locations, a general manager at each, and a central office are more often measured on EBITDA.',
        'Buyers look closely at cash handling, comps, and owner meals, because restaurant add backs are easy to claim and hard to prove. Sales that cannot be traced to the point of sale system, bank deposits, and tax filings are usually left out of the buyer\'s numbers.',
      ],
      addBacksHeading: 'Restaurant add backs that need documentation',
      addBacks: [
        'Owner salary above the cost of a general manager',
        'Owner and family meals recorded as comps',
        'One time repairs such as a hood replacement or a walk in compressor',
        'Personal expenses paid through the business',
        'Pre opening or remodel costs that will not recur',
      ],
    },
    licensing: {
      heading: 'Texas alcohol and food permits in a restaurant sale',
      body: [
        'The Texas Alcoholic Beverage Commission (TABC) states that if the ownership of a business changes hands, the new owner must apply for their own license or permit, and that the license or permit cannot be transferred to the new owner. TABC also lists deadlines for notifying the agency of changes to ownership or principal parties.',
        'Food permits are local in most of Texas. The Department of State Health Services (DSHS) regulates retail food establishments in areas that are not permitted and inspected by a local health agency. Under DSHS jurisdiction, food service establishments, with some exemptions, must employ a Certified Food Manager. Restaurants permitted by a city or county health department should confirm that department\'s rules for a change of ownership. Build the permit timeline into the closing date.',
      ],
      sources: [TABC_FAQ, TABC_CHANGES, DSHS_RFE],
    },
    confidentiality: {
      heading: 'Keeping a restaurant sale confidential',
      intro: 'Restaurant staff and regulars notice everything.',
      items: [
        'Buyers visit as customers first. Walkthroughs of the kitchen happen before opening or after close.',
        'Managers and chefs hear about the sale late, usually once the buyer is ready to discuss their roles.',
        'Vendors and delivery partners are told only when contracts need to be changed.',
        'The blind profile describes the concept and area in general terms so regulars cannot identify the restaurant.',
      ],
    },
    value: {
      heading: 'Pricing a restaurant',
      body: 'Restaurant value rests on documented earnings and on a lease the buyer can live with. A short remaining term or rent that is high relative to sales can limit what a buyer and lender will support, whatever the earnings.',
    },
    faqHeading: 'Questions from restaurant owners',
    faqs: [
      { question: 'Does my liquor permit transfer when I sell my restaurant?', answer: 'No. TABC states that a license or permit cannot be transferred to a new owner, and the new owner must apply for their own. Plan the buyer\'s application into the closing timeline.' },
      { question: 'What if my lease is close to expiring?', answer: 'Talk to the landlord before the restaurant goes to market. Buyers and lenders need enough remaining term, including renewal options, to justify the purchase. An extension or new lease negotiated in advance can make the restaurant much easier to sell.' },
      { question: 'Can I sell a restaurant that is not making money?', answer: 'Sometimes, as an asset sale where the buyer pays mainly for the location, equipment, and build out. The price then reflects those assets rather than earnings.' },
      { question: 'How do buyers verify restaurant sales?', answer: 'They compare point of sale reports, bank deposits, sales tax filings, and tax returns. Sales that do not appear in those records are usually given no value.' },
      { question: 'Should I tell my staff I am selling the restaurant?', answer: 'Not until a buyer is committed. Most owners tell managers and key kitchen staff near closing, often with the buyer present.' },
    ],
    formNoun: 'restaurant',
    formIndustry: 'Restaurant',
    industryPage: { href: '/industries/restaurants', label: 'Franchising a restaurant' },
    markets: ['san-antonio', 'austin', 'corpus-christi'],
    siblings: ['salon', 'franchise-location'],
    closing: { heading: 'Thinking about selling your restaurant?', body: 'Start with a confidential conversation about your lease, your permits, and your timing.' },
  },

  // ----------------------------------------------------------------- Salon
  {
    slug: 'salon',
    breadcrumb: 'Salon',
    title: 'Sell a Salon in Texas',
    description:
      'Sell a salon in Texas: stylist retention, booth rent versus commission, client records, the new TDLR establishment license, and keeping the sale private.',
    h1: 'Sell a salon in Texas',
    serviceName: 'Business Brokerage for Salons in Texas',
    intro: [
      'A salon\'s clients often follow their stylist rather than the salon. That is the central question in any salon sale: how much of the revenue belongs to the business, and how much would walk out the door with the people who do the work.',
      'This page explains what buyers ask when you sell a salon in Texas, which records answer those questions, and why the buyer needs its own TDLR establishment license.',
    ],
    buyers: {
      heading: 'What salon buyers look at first',
      intro: 'Salon buyers want to know whether the clients belong to the salon or to the stylists.',
      items: [
        { term: 'Stylist retention', text: 'How long stylists have stayed, how they are paid, and whether any have non solicitation agreements.' },
        { term: 'Booth rent or commission', text: 'Booth renters run their own businesses; commission and hourly staff are employees. The model changes what the buyer is acquiring.' },
        { term: 'Client records', text: 'Who owns the booking system and client list, and how many clients return.' },
        { term: 'Retail product sales', text: 'Product revenue, margins, and inventory on hand.' },
        { term: 'Lease and location', text: 'Remaining term, rent, and whether the landlord must approve the sale.' },
        { term: 'Owner\'s chair', text: 'How much revenue the owner produces personally behind the chair.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a salon sale',
      intro: 'Booking data is often the most useful record a salon has.',
      items: [
        { item: 'Booking system reports', why: 'Services, revenue, and return visits by stylist and by month, with client names withheld at first.' },
        { item: 'Stylist agreements', why: 'Commission plans, booth rental agreements, and any non solicitation or noncompete terms.' },
        { item: 'Revenue split', why: 'Service revenue, booth rent, and retail product sales, separated.' },
        { item: 'Retail inventory', why: 'Product on hand and how it is counted.' },
        { item: 'The lease', why: 'Term, renewal options, and the assignment clause.' },
      ],
    },
    earnings: {
      heading: 'How salon earnings are measured',
      body: [
        'Salons are usually measured on SDE. When the owner also works behind the chair, buyers separate the owner\'s service revenue from the rest, because that revenue may leave with the owner.',
        'Booth rental salons are analyzed differently from commission salons. Booth rent is steadier but smaller, and the renters are not employees of the business. Buyers want to see how the model has changed over time and why.',
      ],
      addBacksHeading: 'Salon add backs that need documentation',
      addBacks: [
        'Owner salary above the cost of a salon manager',
        'Personal products and services taken by the owner',
        'One time remodel or equipment costs',
        'Personal vehicle or phone costs paid through the salon',
        'Nonrecurring legal or professional fees',
      ],
    },
    licensing: {
      heading: 'The TDLR establishment license in a salon sale',
      body: [
        'TDLR licenses barbering and cosmetology establishments separately from individual barbers and cosmetologists. TDLR states that a barbering or cosmetology establishment license cannot be transferred to a new location or to a new owner, and that a new owner must apply for a new license, pay all fees, and meet the requirements.',
        'The buyer\'s application belongs on the closing checklist. Each stylist\'s individual license stays with that stylist. Confirm current requirements with TDLR before setting the closing date.',
      ],
      sources: [TDLR_SALON_CHOW],
    },
    confidentiality: {
      heading: 'Keeping a salon sale confidential',
      intro: 'In a salon, staff and regulars share news quickly.',
      items: [
        'Stylists who hear about a sale may start looking elsewhere, and their clients may follow. Tell them late, with the buyer.',
        'Buyers visit as clients or after hours rather than touring during appointments.',
        'Client lists stay out of the process until late diligence.',
        'The blind profile describes the salon and area without details regulars would recognize.',
      ],
    },
    value: {
      heading: 'Pricing a salon',
      body: 'Buyers pay more for revenue that stays with the salon. Stylists with long tenure, a booking system the salon owns, and steady return visits all support value.',
    },
    faqHeading: 'Questions from salon owners',
    faqs: [
      { question: 'Does my salon license transfer to the buyer?', answer: 'No. TDLR states that a barbering or cosmetology establishment license cannot be transferred to a new owner. The buyer must apply for a new establishment license.' },
      { question: 'Will my stylists stay after I sell?', answer: 'There is no guarantee, which is why buyers focus on it. Tenure, pay, and how well the stylists know the buyer before closing all matter. Many buyers want to meet key stylists before they commit.' },
      { question: 'Is a booth rental salon harder to sell?', answer: 'It is a different sale. The buyer acquires the location, lease, and booth rental income rather than an employed team. Buyers will check rental agreements and how long renters have stayed.' },
      { question: 'What if I am the top stylist in my salon?', answer: 'Buyers will separate your chair revenue and ask how much would stay. A transition period where you introduce clients to other stylists can help.' },
      { question: 'Who owns the client list in a salon?', answer: 'It depends on your agreements and how bookings are managed. If clients book through a system the salon owns, the buyer acquires that data. Review stylist agreements before going to market.' },
    ],
    formNoun: 'salon',
    formIndustry: 'Salon',
    industryPage: { href: '/industries/salons-beauty', label: 'Franchising a salon or beauty business' },
    markets: ['austin', 'dallas-fort-worth'],
    siblings: ['restaurant', 'cleaning-business'],
    closing: { heading: 'Thinking about selling your salon?', body: 'Talk to Forge confidentially about your team, your clients, and your timing.' },
  },

  // ------------------------------------------------------------ Auto repair
  {
    slug: 'auto-repair-shop',
    breadcrumb: 'Auto Repair Shop',
    title: 'Sell an Auto Repair Shop in Texas',
    description:
      'Sell an auto repair shop in Texas: technicians and certifications, bays and equipment, environmental records, DPS inspection station rules, and add backs.',
    h1: 'Sell an auto repair shop in Texas',
    serviceName: 'Business Brokerage for Auto Repair Shops in Texas',
    intro: [
      'An auto repair shop sells on its technicians, its bays and equipment, its customer base, and its property. Environmental records matter more here than in most service businesses, because buyers and lenders want to know what has been stored and disposed of on site.',
      'This page explains what buyers review when you sell an auto repair shop, what to prepare, and what happens to a state inspection station certificate when ownership changes.',
    ],
    buyers: {
      heading: 'What buyers of an auto repair shop look at first',
      intro: 'Repair shop buyers start with capacity and the people who use it.',
      items: [
        { term: 'Technicians', text: 'Number of technicians, experience, certifications, pay plans, and who handles diagnostic work.' },
        { term: 'Bays and lifts', text: 'How many bays, lift condition, and how fully they are used.' },
        { term: 'Diagnostic equipment', text: 'Scan tools, alignment machines, and software subscriptions, and what they cost to keep current.' },
        { term: 'Customer base', text: 'Retail customers versus fleet accounts, and how many customers return.' },
        { term: 'Environmental history', text: 'Used oil, fluids, tires, and any tanks on site, and how they are handled.' },
        { term: 'Property', text: 'Whether the shop is leased or owned, and the lease terms.' },
      ],
    },
    records: {
      heading: 'Records to prepare for an auto repair sale',
      intro: 'Shop management data and environmental records carry the most weight.',
      items: [
        { item: 'Shop management system reports', why: 'Repair orders, average ticket, labor hours billed, and parts margin by month.' },
        { item: 'Fleet account list', why: 'Terms, volume, and payment history, with names withheld until late.' },
        { item: 'Technician roster', why: 'Experience, certifications, pay plan, and tenure.' },
        { item: 'Equipment schedule', why: 'Lifts, diagnostic tools, and major equipment with age and condition.' },
        { item: 'Environmental records', why: 'Waste disposal receipts, any tank records, and permits or inspections.' },
        { item: 'Warranty and comeback records', why: 'How comebacks are tracked and what warranty obligations are open.' },
      ],
    },
    earnings: {
      heading: 'How auto repair earnings are measured',
      body: [
        'Independent shops run by an owner who writes service or works on cars are usually measured on SDE. Multi location operators with shop managers are more often measured on EBITDA.',
        'Buyers also review parts margin and labor efficiency, since those show whether earnings come from a well run shop or from a few large jobs. Fleet work is checked for concentration and payment terms.',
      ],
      addBacksHeading: 'Auto repair add backs that need documentation',
      addBacks: [
        'Owner pay above the cost of a shop manager',
        'Personal vehicles repaired at the shop without charge',
        'One time equipment repairs or environmental cleanup costs',
        'Family members paid but not working in the shop',
        'Nonrecurring legal or professional costs',
      ],
    },
    licensing: {
      heading: 'State inspection stations and the sale',
      body: [
        'If the shop performs state vehicle inspections, the Texas Department of Public Safety (DPS) station manual states that the Certificate of Appointment is not assignable and is valid only for the owner or owners in whose names it was issued. Upon a change of ownership, inspection privileges under the former owner cease, and the new owner may not perform inspections until certified by DPS.',
        'The buyer\'s certification should be part of the closing plan so inspections do not stop. Other permits and registrations depend on the shop\'s services and location. Confirm current requirements with DPS, the local authorities, and counsel.',
      ],
      sources: [DPS_INSPECTION],
    },
    confidentiality: {
      heading: 'Keeping an auto repair sale confidential',
      intro: 'Technicians and fleet customers are the relationships to protect.',
      items: [
        'Technicians are hard to replace. Tell them late, with the buyer, once their roles are clear.',
        'Fleet managers should hear about the sale when the buyer can meet them.',
        'Buyers visit after hours or as customers before they tour the bays.',
        'Competitors who inquire receive summary data only until they are qualified.',
      ],
    },
    value: {
      heading: 'Pricing an auto repair shop',
      body: 'Buyers weigh earnings against technician depth, equipment condition, and environmental history. A clean environmental file and a stable team reduce the questions a lender will ask.',
    },
    faqHeading: 'Questions from auto repair shop owners',
    faqs: [
      { question: 'Does my state inspection certificate transfer when I sell my shop?', answer: 'No. The DPS station manual states that the Certificate of Appointment is not assignable and that a new owner may not perform inspections until certified. Plan the buyer\'s certification before closing.' },
      { question: 'Will buyers ask for an environmental assessment?', answer: 'Lenders often require one, especially if real estate is part of the sale or there are tanks on site. Having your disposal records and any prior reports ready helps.' },
      { question: 'How important are fleet accounts to buyers?', answer: 'They can add steady volume, but buyers check concentration, terms, and whether the accounts would stay with a new owner.' },
      { question: 'What if I am the main diagnostic technician?', answer: 'Buyers will ask who can do that work after you leave. A transition period or a capable technician already on staff helps.' },
      { question: 'Should I sell the property with the shop?', answer: 'It depends on your goals. You can sell both, or keep the property and lease it to the buyer. Each has legal and tax consequences to review with your attorney and CPA.' },
    ],
    formNoun: 'auto repair shop',
    formIndustry: 'Auto repair',
    industryPage: { href: '/industries/automotive', label: 'Franchising an automotive business' },
    markets: ['san-antonio', 'houston'],
    siblings: ['hvac-business', 'franchise-location'],
    closing: { heading: 'Thinking about selling your shop?', body: 'Start with a confidential conversation about your team, your bays, and your timing.' },
  },

  // --------------------------------------------------------------- Cleaning
  {
    slug: 'cleaning-business',
    breadcrumb: 'Cleaning Business',
    title: 'Sell a Cleaning Business in Texas',
    description:
      'Sell a cleaning business in Texas: recurring contracts, staff turnover, customer concentration, supplies and equipment, and how buyers measure earnings.',
    h1: 'Sell a cleaning business in Texas',
    serviceName: 'Business Brokerage for Cleaning Companies in Texas',
    intro: [
      'A cleaning company owns little equipment. Its value sits in recurring contracts and the team that services them. Buyers want to see that customers stay, that staff turnover is managed, and that the owner is not the only person holding the accounts together.',
      'This page covers what buyers ask when you sell a cleaning business, whether residential or commercial, and the records that answer them.',
    ],
    buyers: {
      heading: 'What buyers of a cleaning business look at first',
      intro: 'Cleaning buyers focus on how predictable the revenue is.',
      items: [
        { term: 'Recurring contracts', text: 'Weekly, biweekly, and monthly service, with terms, pricing, and how long each customer has stayed.' },
        { term: 'Customer concentration', text: 'How much revenue comes from the largest commercial accounts.' },
        { term: 'Staff turnover', text: 'How staff are hired, trained, and kept, and how turnover affects service.' },
        { term: 'Supervision', text: 'Who inspects quality and handles customer issues besides the owner.' },
        { term: 'Employees or contractors', text: 'How cleaners are classified, which affects risk and cost.' },
        { term: 'Insurance and bonding', text: 'Coverage required by commercial customers and the claims history.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a cleaning business sale',
      intro: 'Account and staffing records do most of the work in a cleaning sale.',
      items: [
        { item: 'Account list', why: 'Each recurring customer with service frequency, price, start date, and contract terms, with names withheld early.' },
        { item: 'Revenue by account and month', why: 'Shows retention, lost accounts, and price changes over several years.' },
        { item: 'Staffing records', why: 'Headcount, pay rates, turnover, and how workers are classified.' },
        { item: 'Commercial contracts', why: 'Term, cancellation rights, and assignment clauses.' },
        { item: 'Insurance and claims history', why: 'Policies, bonds, and any damage or theft claims.' },
      ],
    },
    earnings: {
      heading: 'How cleaning business earnings are measured',
      body: [
        'Owner run cleaning companies are usually measured on SDE, since the owner typically sells, schedules, and supervises. Larger commercial cleaning companies with operations managers are more often measured on EBITDA.',
        'Buyers adjust earnings for labor costs if workers are classified in a way a new owner would change. They also look at whether the owner has been filling in on crews, which hides a real labor cost.',
      ],
      addBacksHeading: 'Cleaning business add backs that need documentation',
      addBacks: [
        'Owner salary above the cost of an operations manager',
        'Personal vehicle and phone expenses',
        'One time costs for a lost account transition or a claim',
        'Family members paid but not working in the business',
        'Nonrecurring software or marketing projects',
      ],
    },
    licensing: {
      heading: 'Licensing and transfer for a cleaning business',
      body: [
        'The Texas Secretary of State notes that there is no general business license in Texas, and that licensing depends on the type of business. Forge could not confirm from an official source whether any state license applies specifically to residential or commercial cleaning, so check with counsel and with the cities where the business operates.',
        'In practice, the transfer questions in a cleaning sale are contractual. Commercial contracts may require the customer\'s consent to an assignment, and insurance and bonds usually need to be placed in the buyer\'s name.',
      ],
      sources: [SOS_LICENSE],
    },
    confidentiality: {
      heading: 'Keeping a cleaning business sale confidential',
      intro: 'Cleaning teams work inside customers\' homes and buildings every week.',
      items: [
        'Staff who hear about a sale may mention it to customers. Tell supervisors late, with the buyer.',
        'Commercial customers learn of the sale when the buyer is ready to meet them or when consent is needed.',
        'Account names stay out of the process until late diligence.',
        'Competitors receive summary account data until they are qualified.',
      ],
    },
    value: {
      heading: 'Pricing a cleaning business',
      body: 'Buyers pay for recurring revenue that stays after closing. Long customer tenure, low concentration, and supervisors who handle quality without the owner all support value.',
    },
    faqHeading: 'Questions from cleaning business owners',
    faqs: [
      { question: 'Do I need a state license to sell a cleaning business?', answer: 'The Texas Secretary of State notes there is no general business license in Texas. Whether a specific license applies depends on the services. Confirm with counsel and your local authorities.' },
      { question: 'Will my commercial cleaning contracts transfer?', answer: 'Only if the contracts allow assignment or the customers consent. Review each one before going to market.' },
      { question: 'How do buyers view staff turnover in a cleaning business?', answer: 'They expect turnover and want to see how you manage it: hiring, training, and supervision that keep service steady.' },
      { question: 'Is a residential cleaning business easier to sell than a commercial one?', answer: 'Each appeals to different buyers. Residential revenue is spread across many households. Commercial revenue can be larger per account but more concentrated.' },
      { question: 'What if I still clean or supervise jobs myself?', answer: 'Buyers will count the cost of replacing your work. Showing who else can supervise and handle customers helps.' },
    ],
    formNoun: 'cleaning business',
    formIndustry: 'Cleaning',
    industryPage: { href: '/industries/cleaning', label: 'Franchising a cleaning business' },
    markets: ['dallas-fort-worth', 'houston'],
    siblings: ['landscaping-business', 'home-care-agency'],
    closing: { heading: 'Thinking about selling your cleaning company?', body: 'Talk to Forge confidentially about your accounts, your team, and your timing.' },
  },

  // -------------------------------------------------------------- Home care
  {
    slug: 'home-care-agency',
    breadcrumb: 'Home Care Agency',
    title: 'Sell a Home Care Agency in Texas',
    description:
      'Sell a home care agency in Texas: HCSSA licensing and change of ownership, caregiver retention, payer mix, HHSC contracts, and confidential marketing.',
    h1: 'Sell a home care agency in Texas',
    serviceName: 'Business Brokerage for Home Care Agencies in Texas',
    intro: [
      'A home care agency sells a state license, a team of caregivers, and a client base that depends on both. In Texas, a change of ownership is treated as a new license application, so licensing sits at the center of the timeline.',
      'This page covers what buyers check when you sell a home care agency, the records they ask for, and how the HHSC change of ownership process works.',
    ],
    buyers: {
      heading: 'What buyers of a home care agency look at first',
      intro: 'Home care buyers start with the license and the people.',
      items: [
        { term: 'State licensing', text: 'The agency\'s HCSSA license, its categories of service, and its survey and compliance history.' },
        { term: 'Caregiver retention', text: 'Turnover, recruiting, training, and how many caregivers are dedicated to long term clients.' },
        { term: 'Payer mix', text: 'Private pay, long term care insurance, Medicaid programs, and other payers, and how each pays.' },
        { term: 'Referral sources', text: 'Hospitals, physicians, case managers, and families, and how dependent the agency is on a few.' },
        { term: 'Administrator and clinical staff', text: 'Who serves as administrator and in required clinical roles, and whether they stay.' },
        { term: 'Scheduling and visit data', text: 'Hours delivered, missed visits, and electronic visit records.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a home care sale',
      intro: 'Home care buyers review compliance as closely as financials.',
      items: [
        { item: 'License and survey history', why: 'The current license, recent surveys, and any plans of correction.' },
        { item: 'Revenue by payer', why: 'Private pay, insurance, and program revenue by month for several years.' },
        { item: 'Client census', why: 'Active clients, hours per week, and length of service, without names early.' },
        { item: 'Caregiver records', why: 'Headcount, turnover, pay rates, and training records.' },
        { item: 'Contracts with payers and programs', why: 'Terms and what happens to each on a change of ownership.' },
        { item: 'Policies and procedures', why: 'The manual the agency operates under and how it is kept current.' },
      ],
    },
    earnings: {
      heading: 'How home care earnings are measured',
      body: [
        'Smaller agencies run by an owner who also acts as administrator are usually measured on SDE. Larger agencies with an administrator, clinical leadership, and office staff are more often measured on EBITDA.',
        'Buyers adjust earnings for payer mix, since reimbursement rates and payment timing differ by payer. They also look for costs that a compliant operation would carry but the agency has not, such as required training or supervision.',
      ],
      addBacksHeading: 'Home care add backs that need documentation',
      addBacks: [
        'Owner salary above the cost of an administrator',
        'Personal expenses paid by the agency',
        'One time legal or consulting costs',
        'Family members paid but not working in the agency',
        'Nonrecurring software or recruiting campaigns',
      ],
    },
    licensing: {
      heading: 'HCSSA licensing and change of ownership',
      body: [
        'The Texas Health and Human Services Commission (HHSC) states that Home and Community Support Services Agencies must be licensed to operate in Texas. HHSC defines a change of ownership as occurring when the agency changes its tax identification number, and treats a change of ownership as an initial application. HHSC charges a late fee if the application is submitted less than 30 days before the effective date, and requires the agency to notify the HHS regional office within six months of the effective date of the new license.',
        'HHSC also notes that a licensing application applies only to the license, and that providers should contact their contract manager about how a licensing action could affect any contract they hold. Plan both tracks with counsel before signing a purchase agreement.',
      ],
      sources: [HHSC_HCSSA],
    },
    confidentiality: {
      heading: 'Keeping a home care sale confidential',
      intro: 'Caregivers, clients, and referral sources all depend on continuity.',
      items: [
        'Caregivers who fear a change may look for other work. Tell key staff late, with the buyer.',
        'Families and clients hear about the sale when continuity of care is assured.',
        'Referral sources are introduced to the buyer after closing or near it.',
        'Client and caregiver names stay out of the process until late diligence.',
      ],
    },
    value: {
      heading: 'Pricing a home care agency',
      body: 'Buyers weigh earnings against licensing status, payer mix, and caregiver stability. A clean survey history and steady private pay revenue reduce the risk a buyer takes on.',
    },
    faqHeading: 'Questions from home care agency owners',
    faqs: [
      { question: 'Does my HCSSA license transfer when I sell my agency?', answer: 'A change of ownership is treated by HHSC as an initial application, so the buyer applies for its own license. HHSC defines a change of ownership as a change in the agency\'s tax identification number.' },
      { question: 'When should the change of ownership application be filed?', answer: 'Early. HHSC charges a late fee if the application is submitted less than 30 days before the effective date. Build the timing into the purchase agreement.' },
      { question: 'What happens to my HHSC or program contracts?', answer: 'HHSC notes that a licensing application covers only the license, and that providers should contact their contract manager about how a licensing action affects their contracts.' },
      { question: 'Do buyers prefer private pay agencies?', answer: 'Many buyers value private pay revenue because it is paid directly and is not tied to program rates, but each payer type attracts different buyers.' },
      { question: 'How do I keep caregivers during a sale?', answer: 'Keep the sale confidential until a buyer is committed, then introduce key staff with the buyer and discuss their roles. Continuity for clients depends on it.' },
    ],
    formNoun: 'home care agency',
    formIndustry: 'Home care',
    industryPage: { href: '/industries/health-medical', label: 'Franchising a health or medical business' },
    markets: ['san-antonio', 'corpus-christi'],
    siblings: ['cleaning-business', 'salon'],
    closing: { heading: 'Thinking about selling your home care agency?', body: 'Start with a confidential conversation about your license, your caregivers, and your timing.' },
  },

  // ------------------------------------------------------ Franchise location
  {
    slug: 'franchise-location',
    breadcrumb: 'Franchise Location',
    title: 'Sell a Franchise Location in Texas',
    description:
      'Sell a franchise location in Texas: how a franchise resale compares with an independent sale, who the buyers are, and what a unit owner should check.',
    h1: 'Sell a franchise location in Texas',
    serviceName: 'Business Brokerage for Franchise Locations in Texas',
    intro: [
      'If you own a franchised unit, selling it is not the same as selling an independent business. The franchisor approves the buyer, the franchise agreement sets the terms, and the buyer pool is shaped by the brand. This page is for owners weighing that path against an independent sale, and for owners of both franchised and independent businesses deciding how to sell each.',
    ],
    callout: {
      before: 'For the transfer process itself, including Item 17, the right of first refusal, and transfer fees, read our guide on ',
      label: 'how to sell your franchise',
      href: '/sell-your-franchise',
      after: '.',
    },
    buyers: {
      heading: 'What buyers of a franchise location look at first',
      intro: 'Franchise resale buyers look at the unit and the brand together.',
      items: [
        { term: 'Remaining term', text: 'How many years are left on the franchise agreement, and what renewal requires.' },
        { term: 'Brand health', text: 'How the system is doing, which the buyer researches in the brand\'s current FDD and through calls with other owners.' },
        { term: 'Unit performance', text: 'The unit\'s own results, separate from what the system reports.' },
        { term: 'Required upgrades', text: 'Remodels, equipment, or technology the franchisor will require at transfer or renewal.' },
        { term: 'Territory', text: 'What the franchise agreement grants the unit and where other units are.' },
        { term: 'Franchisor approval', text: 'The buyer qualifications the franchisor will apply.' },
      ],
    },
    records: {
      heading: 'Records to prepare for a franchise location sale',
      intro: 'In addition to the unit\'s financials, gather the franchise documents a buyer will review.',
      items: [
        { item: 'Franchise agreement and amendments', why: 'The full agreement, including transfer, renewal, and post term provisions.' },
        { item: 'Royalty and fund statements', why: 'What the unit has paid and any amounts owed.' },
        { item: 'Franchisor reports', why: 'Unit level reports the franchisor provides, if you may share them.' },
        { item: 'Compliance and inspection history', why: 'Brand audits and any notices of default.' },
        { item: 'Lease', why: 'Including any rights the franchisor holds under the lease.' },
      ],
    },
    earnings: {
      heading: 'How franchise location earnings are measured',
      body: [
        'A single franchised unit run by its owner is usually measured on SDE, after royalties and brand fund contributions, since those continue under a new owner. Multi unit groups with managers are more often measured on EBITDA.',
        'Buyers also adjust for costs the franchisor will require, such as a remodel at transfer or renewal, because those reduce what the buyer can pay.',
      ],
      addBacksHeading: 'Franchise location add backs that need documentation',
      addBacks: [
        'Owner salary above the cost of a unit manager',
        'Personal expenses paid by the unit',
        'One time costs such as an earlier remodel or a legal matter',
        'Family members paid but not working in the unit',
      ],
    },
    licensing: {
      heading: 'Approvals and licenses for a franchise location',
      body: [
        'The franchisor\'s approval is the central approval in a franchise sale, and the franchise agreement sets the conditions. Licenses and permits depend on the type of business: a franchised restaurant, salon, or home care unit carries the same state licensing questions as an independent one, covered on the pages for those industries. Your franchise attorney should review the agreement before you choose a path.',
      ],
      sources: [],
    },
    extra: {
      id: 'compare',
      tocLabel: 'Resale or independent sale',
      heading: 'Franchise resale or independent sale: how they compare',
      body: [
        'Some owners ask whether they could leave the system and sell the business on its own. Most franchise agreements restrict what an owner may do after the agreement ends, including operating a competing business at the same location, so an independent sale of a franchised unit usually is not available while the agreement is in force. Read the post term provisions with your attorney before assuming otherwise.',
        'Where both paths are possible, as with an owner who has franchised and independent businesses, the comparison looks like this.',
      ],
      rows: [
        { term: 'Who approves the buyer', text: 'Resale: the franchisor, under the franchise agreement. Independent: you, and any landlord or lender whose consent is needed.' },
        { term: 'Who buys', text: 'Resale: buyers who want that brand, often including existing franchisees. Independent: any buyer who fits the business.' },
        { term: 'Costs at transfer', text: 'Resale: transfer fees and required upgrades set by the franchisor. Independent: no franchisor costs.' },
        { term: 'What the buyer gets', text: 'Resale: the brand, systems, and support for the remaining term. Independent: the business as it stands.' },
        { term: 'Information buyers see', text: 'Resale: the unit\'s records plus the brand\'s FDD. Independent: the business\'s records alone.' },
        { term: 'Timing', text: 'Resale: depends partly on the franchisor\'s approval process. Independent: depends on the buyer, lender, and diligence.' },
      ],
    },
    confidentiality: {
      heading: 'Keeping a franchise location sale confidential',
      intro: 'The franchisor, other franchisees, and your staff all have an interest in a sale.',
      items: [
        'Check whether your agreement requires notice to the franchisor before marketing the unit.',
        'Other franchisees in the system may be buyers. Screen them like any buyer.',
        'Staff hear about the sale late, once the buyer and franchisor are aligned.',
        'Brand marketing materials may not be usable in a sale without the franchisor\'s permission.',
      ],
    },
    value: {
      heading: 'Pricing a franchise location',
      body: 'Buyers price a franchised unit on its earnings after royalties, the remaining term, the brand\'s condition, and the cost of any upgrades the franchisor will require.',
    },
    faqHeading: 'Questions from franchise owners',
    faqs: [
      { question: 'Can I sell my franchise location as an independent business?', answer: 'Usually not while the franchise agreement is in force. Most agreements restrict operating a competing business after the agreement ends. Have your franchise attorney review the post term provisions.' },
      { question: 'Who are the usual buyers for a franchise location?', answer: 'Buyers who want that brand, including existing franchisees in the system. The franchisor must approve the buyer.' },
      { question: 'How is this page different from the sell your franchise guide?', answer: 'This page compares a franchise resale with an independent sale and explains what buyers of a unit review. The sell your franchise guide covers the transfer process step by step.' },
      { question: 'Do I need the franchisor\'s permission to start marketing my unit?', answer: 'Check your agreement. Some require notice or approval before a unit is marketed, and some restrict use of the brand in sale materials.' },
      { question: 'What if I own both franchised and independent businesses?', answer: 'They are usually sold separately or packaged with care, since only the franchised unit needs franchisor approval. Forge can help you decide how to approach each.' },
    ],
    formNoun: 'franchise location',
    formIndustry: 'Franchise location',
    industryPage: { href: '/franchise-laws/texas', label: 'Texas franchise laws' },
    blogPost: { href: '/blog/franchise-transfer-approval', label: 'Franchise transfer approval: what franchisors require' },
    markets: ['dallas-fort-worth', 'austin'],
    siblings: ['restaurant', 'auto-repair-shop'],
    closing: { heading: 'Thinking about selling your franchise location?', body: 'Start with a confidential conversation about your agreement, your unit, and your timing.' },
  },
]

export function getSellIndustry(slug: string): SellIndustry | undefined {
  return SELL_INDUSTRIES.find((i) => i.slug === slug)
}
