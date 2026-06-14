'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'

/**
 * Load analytics, chat, and widgets after the main thread is idle (lazyOnload).
 * Improves LCP and TBT vs parsing these in <head> during initial load.
 *
 * Cookie-consent gating removed June 2026: gating GA4/Clarity/Pixel behind an
 * opt-in banner suppressed tracking for every visitor who ignored or declined
 * the banner, which showed up as a large artificial drop in analytics traffic.
 * All scripts now load for every visitor.
 *
 * Perf (June 2026): the heaviest third parties — Microsoft Clarity (session
 * recording) and the Facebook Pixel — are deferred until the FIRST user
 * interaction (scroll/tap/key/mouse), with a 6s idle fallback so quick-bounce
 * visitors are still counted. This keeps their JS off the main thread during
 * first paint/hydration (lowers Total Blocking Time on mobile) without losing
 * tracking coverage.
 */
export default function ThirdPartyScripts() {
  // Heavy third parties (Clarity session recording + FB Pixel) mount only after
  // the first user interaction, with a 6s idle fallback so quick bouncers still
  // count. Keeping them off the initial main thread lowers mobile TBT.
  const [loadHeavy, setLoadHeavy] = useState(false)

  useEffect(() => {
    if (loadHeavy) return
    const trigger = () => setLoadHeavy(true)
    const events: Array<keyof WindowEventMap> = ['scroll', 'pointerdown', 'keydown', 'touchstart', 'mousemove']
    const fallback = window.setTimeout(trigger, 6000)
    events.forEach((ev) => window.addEventListener(ev, trigger, { once: true, passive: true }))
    return () => {
      window.clearTimeout(fallback)
      events.forEach((ev) => window.removeEventListener(ev, trigger))
    }
  }, [loadHeavy])

  // GTM (GTM-PGM9V53) is loaded in app/layout.tsx. We additionally load the
  // GA4 gtag snippet here so events reach GA4 directly via window.gtag while
  // the GTM container does not yet have GA4 tags published. Once the GA4
  // Configuration + GA4 Event tags are wired inside GTM, this block can be
  // removed to avoid double tracking.
  // Hardcoded fallback (June 2026): previously env-only, so a missing
  // NEXT_PUBLIC_GA_ID in Vercel silently disabled GA4 site-wide.
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-868JRCDRFW'

  return (
    <>
      {/* Clarity + FB Pixel are loaded on first interaction via the effect above. */}
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      {GA_MEASUREMENT_ID && (
        <>
          {/* lazyOnload (not afterInteractive): GA4 loads after the page is idle
              so it doesn't compete with first paint / hydration on mobile, which
              was inflating Total Blocking Time. Tracking is unchanged — page_view
              still fires, just a moment later. Remove this whole block once GA4 is
              configured inside GTM (GTM-PGM9V53) to avoid double tracking. */}
          <Script
            id="ga4-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-init" strategy="lazyOnload">
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

      {/* Heavy trackers — mounted only after first interaction (see effect). */}
      {loadHeavy && (
        <>
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sq13l291nk");`}
          </Script>

          <Script id="facebook-pixel" strategy="afterInteractive">
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
        </>
      )}

      {/* Tawk.to removed — replaced by the AI assistant "Asha" (EzyHelpersAssistant) */}
    </>
  )
}
