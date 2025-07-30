interface ServiceSchemaProps {
  serviceName: string
  serviceDescription: string
  serviceType: string
  serviceUrl: string
  priceRange?: string
  availableInLocation?: string[]
  additionalFeatures?: string[]
}

export default function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceType,
  serviceUrl,
  priceRange = "₹₹",
  availableInLocation = [
    "Bangalore", "Mumbai", "Delhi", "Noida", "Nagpur", 
    "Kanpur", "Lucknow", "Meerut", "Bareilly"
  ],
  additionalFeatures = []
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "serviceType": serviceType,
    "url": serviceUrl,
    "provider": {
      "@type": "LocalBusiness",
      "name": "EzyHelpers",
      "url": "https://ezyhelpers.com",
      "telephone": "+91-9972571005",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Karnataka",
        "addressLocality": "Bangalore"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "10000",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": serviceUrl,
      "servicePhone": "+91-9972571005",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": availableInLocation.map(location => ({
      "@type": "City",
      "name": location,
      "addressCountry": "IN"
    })),
    "serviceOutput": {
      "@type": "Thing",
      "name": "Professional Domestic Help Service",
      "description": "Reliable and verified domestic help tailored to your needs"
    },
    "category": "Domestic Services",
    "priceRange": priceRange,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "INR",
      "validFrom": "2024-01-01",
      "seller": {
        "@type": "Organization",
        "name": "EzyHelpers"
      },
      "itemCondition": "https://schema.org/NewCondition"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName + " Options",
      "itemListElement": additionalFeatures.map(feature => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": feature,
          "description": `${feature} as part of ${serviceName}`
        }
      }))
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners, Families, Working Professionals"
    },
    "serviceAudience": {
      "@type": "Audience",
      "audienceType": "Homeowners, Families, Working Professionals",
      "geographicArea": {
        "@type": "Country",
        "name": "India"
      }
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "brand": {
      "@type": "Brand",
      "name": "EzyHelpers"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": serviceUrl
    },
    "isRelatedTo": [
      {
        "@type": "Service",
        "name": "Background Verification",
        "description": "All helpers undergo thorough background checks"
      },
      {
        "@type": "Service", 
        "name": "24/7 Customer Support",
        "description": "Round-the-clock customer support"
      },
      {
        "@type": "Service",
        "name": "Replacement Guarantee",
        "description": "Quick replacement if not satisfied"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Background Verified",
        "value": "Yes"
      },
      {
        "@type": "PropertyValue",
        "name": "Experience Required",
        "value": "Minimum 2 years"
      },
      {
        "@type": "PropertyValue",
        "name": "Languages Supported",
        "value": "English, Hindi, Local Languages"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
} 