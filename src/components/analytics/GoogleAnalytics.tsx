"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_TRACKING_ID || typeof window === 'undefined') return

    const searchString = searchParams?.toString() || ''
    const url = pathname + (searchString ? `?${searchString}` : '')

    // Ensure gtag is available before using it
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_location: url,
        page_title: document.title,
      })
    }
  }, [pathname, searchParams])

  // Don't render analytics scripts in development or if no tracking ID
  if (!GA_TRACKING_ID || process.env.NODE_ENV === 'development') {
    return null
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
              send_page_view: true
            });
          `,
        }}
      />
    </>
  )
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions
export const trackConversion = (conversionId: string, conversionValue?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: conversionValue,
      currency: 'USD'
    })
  }
}
