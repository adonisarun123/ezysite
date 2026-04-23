'use client'

import Script from 'next/script'

/**
 * Load analytics, chat, and widgets after the main thread is idle (lazyOnload).
 * Improves LCP and TBT vs parsing these in <head> during initial load.
 */
export default function ThirdPartyScripts() {
  // GTM (GTM-PGM9V53) is loaded in app/layout.tsx. We additionally load the
  // GA4 gtag snippet here so events reach GA4 directly via window.gtag while
  // the GTM container does not yet have GA4 tags published. Once the GA4
  // Configuration + GA4 Event tags are wired inside GTM, this block can be
  // removed to avoid double tracking.
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-868JRCDRFW'

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="lazyOnload"
      />

      <Script id="microsoft-clarity" strategy="lazyOnload">
        {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "sq13l291nk");`}
      </Script>

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
  )
}
