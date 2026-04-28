import type { ParsedCarePage } from './readCareMarkdown'
import { CARE_PILLAR_HREF } from './registry'

const SITE = 'https://www.ezyhelpers.com'

export function careBreadcrumbJsonLd(parsed: ParsedCarePage) {
  const { pathname, breadcrumbParts } = parsed
  const currentUrl = `${SITE}${pathname.startsWith('/') ? pathname : `/${pathname}`}`

  const elements: { '@type': 'ListItem'; position: number; name: string; item: string }[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE}/`,
    },
  ]

  if (breadcrumbParts.length >= 2) {
    elements.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Care Services',
      item: `${SITE}${CARE_PILLAR_HREF}`,
    })
  }

  if (breadcrumbParts.length >= 3) {
    elements.push({
      '@type': 'ListItem',
      position: 3,
      name: breadcrumbParts[2],
      item: currentUrl,
    })
  } else if (pathname === CARE_PILLAR_HREF) {
    elements[1] = {
      '@type': 'ListItem',
      position: 2,
      name: 'Care Services',
      item: currentUrl,
    }
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements,
  }
}

export function careServiceJsonLd(parsed: ParsedCarePage) {
  const name =
    parsed.breadcrumbParts[parsed.breadcrumbParts.length - 1] ?? 'EzyHelpers Care Services'
  const path = parsed.pathname.startsWith('/') ? parsed.pathname : `/${parsed.pathname}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'EzyHelpers',
      url: `${SITE}/`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bangalore',
    },
    description: parsed.metaDescription,
    url: `${SITE}${path}`,
  }
}

/** Matches OrganizationSchema / footer NAP for Bangalore */
export function careLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'EzyHelpers',
    legalName: 'EzyHelpers Private Limited',
    url: `${SITE}/`,
    telephone: '+918031411776',
    email: 'contact@ezyhelpers.com',
    image: `${SITE}/ezyhelper_logo_new.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HSR Layout',
      addressLocality: 'Bangalore',
      addressRegion: 'Karnataka',
      postalCode: '560102',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }
}

export function careFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}
