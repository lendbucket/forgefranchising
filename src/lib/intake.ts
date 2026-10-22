import { INQUIRY_TYPES, type InquiryType } from './constants'

/**
 * Field definitions for the brokerage intake form.
 *
 * Shared by the form component and /api/intake so the questions asked and
 * the fields accepted can never drift apart. Contact fields (name, email,
 * phone) are common to every inquiry type and are not listed here.
 */

export type IntakeField = {
  name: string
  label: string
  type: 'text' | 'select' | 'textarea'
  required?: boolean
  options?: readonly string[]
  placeholder?: string
}

const REVENUE = ['Under $500K', '$500K to $1M', '$1M to $3M', '$3M to $5M', '$5M to $10M', 'Over $10M', 'Prefer not to say'] as const
const TIMELINE = ['Within 6 months', '6 to 12 months', '12 to 24 months', 'Exploring for now'] as const
const CAPITAL = ['Under $100K', '$100K to $250K', '$250K to $500K', '$500K to $1M', 'Over $1M'] as const
const TEXAS_MARKETS = ['San Antonio', 'Corpus Christi', 'Houston', 'Dallas Fort Worth', 'Austin', 'Anywhere in Texas', 'Other'] as const

export const INTAKE_FIELDS: Record<InquiryType, IntakeField[]> = {
  seller: [
    { name: 'businessName', label: 'Business name', type: 'text', required: true },
    { name: 'industry', label: 'Industry', type: 'text', required: true, placeholder: 'For example, HVAC, restaurant, landscaping' },
    { name: 'location', label: 'City', type: 'text', required: true },
    { name: 'yearsInBusiness', label: 'Years in business', type: 'select', options: ['Under 2', '2 to 5', '5 to 10', 'Over 10'] },
    { name: 'annualRevenue', label: 'Annual revenue', type: 'select', options: REVENUE },
    { name: 'timeline', label: 'When would you like to sell?', type: 'select', options: TIMELINE },
    { name: 'message', label: 'Anything we should know first?', type: 'textarea' },
  ],
  buyer: [
    { name: 'targetBusiness', label: 'What kind of business do you want to buy?', type: 'text', required: true },
    { name: 'preferredMarket', label: 'Preferred market', type: 'select', required: true, options: TEXAS_MARKETS },
    { name: 'liquidCapital', label: 'Cash available for a down payment', type: 'select', required: true, options: CAPITAL },
    { name: 'financing', label: 'How do you plan to finance the purchase?', type: 'select', options: ['SBA loan', 'Conventional bank loan', 'Cash', 'Seller financing as part of the deal', 'Not sure yet'] },
    { name: 'ownerRole', label: 'Your role after closing', type: 'select', options: ['Owner operator, full time', 'Semi absentee', 'Absentee with a manager in place', 'Not sure yet'] },
    { name: 'timeline', label: 'When do you want to close?', type: 'select', options: TIMELINE },
    { name: 'message', label: 'Experience, deal size, or anything else we should know', type: 'textarea' },
  ],
  valuation: [
    { name: 'businessName', label: 'Business name', type: 'text', required: true },
    { name: 'industry', label: 'Industry', type: 'text', required: true },
    { name: 'location', label: 'City', type: 'text', required: true },
    { name: 'annualRevenue', label: 'Annual revenue', type: 'select', options: REVENUE },
    { name: 'reason', label: 'Why do you want a valuation?', type: 'select', required: true, options: ['Planning a sale', 'Partner buyout', 'Financing or refinancing', 'General planning', 'Other'] },
    { name: 'message', label: 'Anything we should know first?', type: 'textarea' },
  ],
  'franchise-buyer': [
    { name: 'interests', label: 'Industries or brands you are considering', type: 'text', required: true },
    { name: 'preferredMarket', label: 'Where would you operate?', type: 'text', required: true },
    { name: 'liquidCapital', label: 'Liquid capital available', type: 'select', required: true, options: CAPITAL },
    { name: 'ownerRole', label: 'Your intended role', type: 'select', options: ['Owner operator, full time', 'Semi absentee', 'Multi unit investor', 'Not sure yet'] },
    { name: 'timeline', label: 'When do you want to open?', type: 'select', options: TIMELINE },
    { name: 'message', label: 'Anything we should know first?', type: 'textarea' },
  ],
  'franchise-seller': [
    { name: 'franchiseBrand', label: 'Franchise brand', type: 'text', required: true },
    { name: 'location', label: 'City', type: 'text', required: true },
    { name: 'unitsOwned', label: 'Units you own', type: 'select', options: ['1', '2 to 3', '4 to 10', 'Over 10'] },
    { name: 'yearsOpen', label: 'Years open', type: 'select', options: ['Under 2', '2 to 5', '5 to 10', 'Over 10'] },
    { name: 'annualRevenue', label: 'Annual revenue', type: 'select', options: REVENUE },
    { name: 'franchisorInformed', label: 'Have you told your franchisor you plan to sell?', type: 'select', options: ['Yes', 'Not yet', 'Not sure what is required'] },
    { name: 'message', label: 'Anything we should know first?', type: 'textarea' },
  ],
}

export function isInquiryType(value: unknown): value is InquiryType {
  return typeof value === 'string' && value in INQUIRY_TYPES
}
