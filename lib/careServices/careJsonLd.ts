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
    // The nested LocalBusiness must include `address` to satisfy schema.org
    // validation. NAP must match the standalone careLocalBusinessJsonLd() and
    // the footer.
    provider: {
      '@type': 'LocalBusiness',
      name: 'EzyHelpers',
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

/* ──────────────────────────────────────────────────────────────────────────
 * Shared building blocks for the per-condition /care-services/* SEO subpages.
 *
 * These exist to fix structured-data validation errors that were duplicated
 * across ~50 hand-written page views:
 *   - MedicalBusiness / LocalBusiness nodes were emitted WITHOUT a postal
 *     `address`, which Google / SEMrush reject for LocalBusiness subtypes.
 *   - Telephone numbers were inconsistently formatted ('+91-80-31411776' vs
 *     '+918031411776').
 *   - "Product" nodes for equipment rentals had no offers/review/
 *     aggregateRating (an incomplete Product per Google's Product spec).
 *
 * Use these helpers from every subpage view so there is one source of truth.
 * ────────────────────────────────────────────────────────────────────────── */

/** Canonical NAP telephone in E.164 (matches OrganizationSchema + footer). */
export const CARE_TELEPHONE = '+918031411776'

/** Reusable PostalAddress node — identical to the footer / Organization NAP. */
export const CARE_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'HSR Layout',
  addressLocality: 'Bangalore',
  addressRegion: 'Karnataka',
  postalCode: '560102',
  addressCountry: 'IN',
} as const

/**
 * MedicalBusiness node for a single condition/service subpage.
 * Always includes a valid postal `address` and E.164 telephone so the
 * LocalBusiness-subtype requirements are satisfied.
 */
export function careMedicalBusinessJsonLd(opts: {
  /** e.g. "EzyHelpers, Stroke Care at Home, Bangalore" */
  name: string
  /** schema.org MedicalSpecialty values, e.g. ['Neurology', 'Geriatrics'] */
  medicalSpecialty?: string[]
  /** Page path beginning with '/', e.g. '/care-services/stroke-care-at-home-bangalore' */
  path: string
}) {
  const path = opts.path.startsWith('/') ? opts.path : `/${opts.path}`
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: opts.name,
    url: `${SITE}${path}`,
    telephone: CARE_TELEPHONE,
    email: 'contact@ezyhelpers.com',
    image: `${SITE}/ezyhelper_logo_new.png`,
    address: { ...CARE_POSTAL_ADDRESS },
    areaServed: { '@type': 'City', name: 'Bangalore' },
  }
  if (opts.medicalSpecialty && opts.medicalSpecialty.length > 0) {
    node.medicalSpecialty = opts.medicalSpecialty
  }
  return node
}

/**
 * Equipment-rental node. Modelled as a `Service` (rental service provided by a
 * LocalBusiness) rather than `Product`, because we do not publish per-unit
 * prices, reviews or ratings — a bare `Product` without offers/review/
 * aggregateRating is rejected as incomplete by Google's Product validator.
 * A Service with a provider is valid without any of those.
 */
export function careRentalServiceJsonLd(opts: {
  /** e.g. "Wheelchair Rental, Bangalore, EzyHelpers" */
  name: string
  /** Free-text description (omitted entirely if empty/undefined). */
  description?: string
  /** Page path beginning with '/'. */
  path: string
}) {
  const path = opts.path.startsWith('/') ? opts.path : `/${opts.path}`
  const node: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: opts.name,
    name: opts.name,
    provider: {
      '@type': 'LocalBusiness',
      name: 'EzyHelpers',
      url: `${SITE}/`,
      telephone: CARE_TELEPHONE,
      image: `${SITE}/ezyhelper_logo_new.png`,
      address: { ...CARE_POSTAL_ADDRESS },
    },
    areaServed: { '@type': 'City', name: 'Bangalore' },
    url: `${SITE}${path}`,
  }
  if (opts.description && opts.description.trim().length > 0) {
    node.description = opts.description
  }
  return node
}
