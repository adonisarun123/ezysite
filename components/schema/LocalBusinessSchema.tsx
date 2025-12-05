interface LocalBusinessSchemaProps {
  cityName: string
  stateName: string
  postalCode?: string
  streetAddress?: string
  latitude?: number
  longitude?: number
  specificServices?: string[]
}

export default function LocalBusinessSchema({
  cityName,
  stateName,
  postalCode,
  streetAddress,
  latitude,
  longitude,
  specificServices = [
    "Live-In Maid Services",
    "Full-Time Maid Services", 
    "Part-Time Maid Services",
    "On-Demand Helper Services",
    "Nanny/Babysitter Services",
    "Elderly Care Services",
    "Cook Services",
    "Driver Services"
  ]
}: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `EzyHelpers ${cityName}`,
    "alternateName": `EzyHelpers - Domestic Help Services in ${cityName}`,
    "description": `Professional domestic help services in ${cityName}, ${stateName}. Verified maids, cooks, nannies, drivers, and elderly care professionals. Trusted by thousands of families.`,
    "url": `https://ezyhelpers.com/cities/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+91-80-31411776",
    "email": "info@ezyhelpers.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": stateName,
      "addressCountry": "IN",
      ...(postalCode && { "postalCode": postalCode }),
      ...(streetAddress && { "streetAddress": streetAddress })
    },
    "geo": latitude && longitude ? {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    } : undefined,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80-31411776",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"],
      "hoursAvailable": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Online Transfer, UPI",
    "serviceArea": {
      "@type": "City",
      "name": cityName,
      "addressRegion": stateName,
      "addressCountry": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Domestic Help Services in ${cityName}`,
      "itemListElement": specificServices.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Professional ${service.toLowerCase()} in ${cityName}`,
          "serviceType": "Domestic Help",
          "areaServed": {
            "@type": "City",
            "name": cityName,
            "addressRegion": stateName,
            "addressCountry": "IN"
          }
        },
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "EzyHelpers"
        }
      }))
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "EzyHelpers",
      "url": "https://ezyhelpers.com"
    },
    "brand": {
      "@type": "Brand",
      "name": "EzyHelpers"
    },
    "logo": "https://ezyhelpers.com/ezyhelper_logo_new.png",
    "image": "https://ezyhelpers.com/ezyhelper_logo_new.png",
    "sameAs": [
      "https://www.facebook.com/ezyhelpers",
      "https://www.instagram.com/ezyhelpers", 
      "https://www.linkedin.com/company/ezyhelpers"
    ],
    "knowsAbout": [
      `Domestic Help in ${cityName}`,
      `Maid Services in ${cityName}`,
      `House Cleaning in ${cityName}`,
      `Childcare Services in ${cityName}`,
      `Elderly Care in ${cityName}`,
      `Cook Services in ${cityName}`,
      `Driver Services in ${cityName}`,
      `Home Management in ${cityName}`
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners, Families, Working Professionals",
      "geographicArea": {
        "@type": "City",
        "name": cityName,
        "addressRegion": stateName,
        "addressCountry": "IN"
      }
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Background Verified",
        "value": "Yes"
      },
      {
        "@type": "PropertyValue",
        "name": "Service Area",
        "value": `${cityName}, ${stateName}`
      },
      {
        "@type": "PropertyValue",
        "name": "Languages Supported",
        "value": "English, Hindi, Local Languages"
      },
      {
        "@type": "PropertyValue",
        "name": "Replacement Guarantee",
        "value": "24-72 hours"
      }
    ]
  }

  // Remove undefined fields
  const cleanedSchema = JSON.parse(JSON.stringify(localBusinessSchema))

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanedSchema) }}
    />
  )
} 
