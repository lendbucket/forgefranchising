import { track } from '@vercel/analytics'

/**
 * Custom events for Vercel Web Analytics.
 *
 * Event names are snake_case. Properties carry only page, placement, and
 * assessment facts: never names, emails, phone numbers, business names, or
 * any other text a visitor typed. Nothing is sent from proposal pages.
 */

export type EventName =
  | 'cta_click'
  | 'assessment_started'
  | 'assessment_question_answered'
  | 'assessment_score_shown'
  | 'assessment_report_submitted'
  | 'contact_form_submitted'

type Props = Record<string, string | number | boolean>

export function trackEvent(name: EventName, props?: Props) {
  if (typeof window === 'undefined') return
  if (window.location.pathname.startsWith('/proposal/')) return
  track(name, props)
}
