'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-PGM9V53'
const CONSENT_KEY = 'ezy_cookie_consent_v1'

/**
 * Google Tag Manager loader gated on cookie consent.
 * Mounts the GTM bootstrap script and the noscript iframe only after the user
 * has accepted cookies via the CookieConsent banner. Subscribes to the
 * `cookieConsent:accepted` custom event so consent acceptance flips the script
 * on without a page reload.
 */
export default function GTMScript() {
  const [consented, setConsented] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const initial = window.localStorage.getItem(CONSENT_KEY) === 'accepted'
    setConsented(initial)
    const onAccept = () => setConsented(true)
    window.addEventListener('cookieConsent:accepted', onAccept)
    return () => window.removeEventListener('cookieConsent:accepted', onAccept)
  }, [])

  if (!consented || !GTM_ID) return null

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
      </Script>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
          title="Google Tag Manager"
        />
      </noscript>
    </>
  )
}
