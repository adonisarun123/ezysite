'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const CONSENT_KEY = 'ezy_cookie_consent_v1'

/**
 * Load analytics, chat, and widgets after the main thread is idle (lazyOnload).
 * Improves LCP and TBT vs parsing these in <head> during initial load.
 *
 * Tracking scripts (Clarity, Facebook Pixel, GA4, Tawk.to) are gated behind
 * the cookie-consent decision stored under `ezy_cookie_consent_v1`. We render
 * them only after the user opts in. Trustpilot (functional UI widget) loads
 * regardless.
 */
export default function ThirdPartyScripts() {
  // GTM (GTM-PGM9V53) is loaded in app/layout.tsx. We additionally load the
  // GA4 gtag snippet here so events reach GA4 directly via window.gtag while
  // the GTM container does not yet have GA4 tags published. Once the GA4
  // Configuration + GA4 Event tags are wired inside GTM, this block can be
  // removed to avoid double tracking.
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

  const [consented, setConsented] = useState(false)

  useEffect(() => {
    try {
      if (window.localStorage.getItem(CONSENT_KEY) === 'accepted') {
        setConsented(true)
      }
    } catch {
      /* ignore */
    }
    const onAccept = () => setConsented(true)
    window.addEventListener('cookieConsent:accepted', onAccept)
    return () => window.removeEventListener('cookieConsent:accepted', onAccept)
  }, [])

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      {consented && (
        <>
          <Script id="microsoft-clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sq13l291nk");`}
          </Script>

          {GA_MEASUREMENT_ID && (
            <>
              <Script
                id="ga4-loader"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
                strategy="afterInteractive"
              />
              <Script id="ga4-init" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  window.gtag = gtag;
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true
                  });
                `}
              </Script>
            </>
          )}

          <Script id="gtag-send-event-helper" strategy="afterInteractive">
            {`
window.gtagSendEvent = function(url) {
  if (typeof window.gtag !== 'function') {
    if (typeof url === 'string') window.location.href = url;
    return false;
  }
  var callback = function () {
    if (typeof url === 'string') window.location.href = url;
  };
  window.gtag('event', 'form_complete', {
    event_callback: callback,
    event_timeout: 2000
  });
  return false;
};`}
          </Script>

          <Script id="facebook-pixel" strategy="lazyOnload">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1223380436207834');
fbq('track', 'PageView');`}
          </Script>

          <Script id="tawk-to" strategy="lazyOnload">
            {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
  var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
  s1.async=true;
  s1.src='https://embed.tawk.to/67188db42480f5b4f591f799/1iaruj2t3';
  s1.charset='UTF-8';
  s1.setAttribute('crossorigin','*');
  s0.parentNode.insertBefore(s1,s0);
})();`}
          </Script>
        </>
      )}
    </>
  )
}
