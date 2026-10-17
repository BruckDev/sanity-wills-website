type AnalyticsEvent =
  | 'zip_search'
  | 'profile_view'
  | 'website_click'
  | 'phone_click'
  | 'email_click'
  | 'generate_lead'
  | 'program_cta'

// Preserve the existing production property; an environment override supports another stream.
export const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || 'G-LE0CWC41BG'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(name: AnalyticsEvent, params: Record<string, string | number> = {}) {
  if (typeof window === 'undefined') return
  if (
    navigator.doNotTrack === '1' ||
    (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl
  )
    return
  window.gtag?.('event', name, {page_path: window.location.pathname, ...params})
}
