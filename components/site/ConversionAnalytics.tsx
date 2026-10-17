'use client'

import {ga4MeasurementId, trackEvent} from '@/lib/analytics'
import {usePathname} from 'next/navigation'
import Script from 'next/script'
import {useEffect, useState} from 'react'

export function ConversionAnalytics() {
  const pathname = usePathname()
  const [ready, setReady] = useState(false)
  const measurementId = ga4MeasurementId

  useEffect(() => {
    if (
      !measurementId ||
      navigator.doNotTrack === '1' ||
      (navigator as Navigator & {globalPrivacyControl?: boolean}).globalPrivacyControl
    )
      return
    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      window.dataLayer?.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    })
    window.gtag('set', {
      page_location: `${window.location.origin}${window.location.pathname}`,
      page_referrer: '',
    })
    setReady(true)
  }, [measurementId])

  useEffect(() => {
    if (!ready) return
    window.gtag?.('set', {page_location: `${window.location.origin}${pathname}`, page_referrer: ''})
    // Strip query strings, hashes, and referrers to avoid sending form or ZIP data.
    window.gtag?.('event', 'page_view', {
      page_location: `${window.location.origin}${pathname}`,
      page_path: pathname,
      page_referrer: '',
    })
    if (pathname.startsWith('/featured-attorneys/') && !pathname.includes('/articles')) {
      trackEvent('profile_view', {profile_id: pathname.split('/')[2], profile_kind: 'sample'})
    }
    if (pathname.startsWith('/find-an-attorney/profiles/')) {
      trackEvent('profile_view', {
        profile_id: pathname.split('/')[3],
        profile_kind: 'public_source',
      })
    }

    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest('a')
      if (!link) return
      const href = link.getAttribute('href') || ''
      const profile = link.closest('[data-attorney-profile]')?.getAttribute('data-attorney-profile')
      const params: Record<string, string | number> = profile ? {profile_id: profile} : {}
      if (href.startsWith('tel:')) trackEvent('phone_click', params)
      else if (href.startsWith('mailto:')) trackEvent('email_click', params)
      else if (
        profile &&
        /^https?:/.test(href) &&
        new URL(href).hostname !== window.location.hostname
      )
        trackEvent('website_click', params)
      const cta = link.closest('[data-program-cta]')?.getAttribute('data-program-cta')
      if (cta)
        trackEvent('program_cta', {
          placement: cta,
          action:
            href === '#apply' ? 'apply' : href.startsWith('mailto:') ? 'request_call' : 'external',
        })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [pathname, ready])

  return ready && measurementId ? (
    <Script
      id="ga4"
      src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
      strategy="afterInteractive"
    />
  ) : null
}
