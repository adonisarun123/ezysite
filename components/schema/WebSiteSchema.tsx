export default function WebSiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EzyHelpers",
    "alternateName": "EzyHelpers - Domestic Help Services",
    "url": "https://ezyhelpers.com",
    "description": "India's most trusted platform for verified domestic help services including maids, cooks, nannies, drivers, and elderly care professionals.",
    "inLanguage": "en-IN",
    "isPartOf": {
      "@type": "Organization",
      "name": "EzyHelpers"
    },
    "about": {
      "@type": "Thing",
      "name": "Domestic Help Services",
      "description": "Professional domestic help and home care services"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Homeowners, Families, Working Professionals",
      "geographicArea": {
        "@type": "Country",
        "name": "India"
      }
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ezyhelpers.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://ezyhelpers.com/hire-helper"
        },
        "result": {
          "@type": "Reservation",
          "name": "Book Helper Service"
        }
      }
    ],
    "mainEntity": {
      "@type": "Organization",
      "name": "EzyHelpers"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EzyHelpers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ezyhelpers.com/ezyhelper_logo_new.png"
      }
    },
    "copyrightHolder": {
      "@type": "Organization", 
      "name": "EzyHelpers Private Limited"
    },
    "copyrightYear": "2024",
    "license": "https://ezyhelpers.com/terms-of-service",
    "datePublished": "2020-01-01",
    "dateModified": "2024-01-01"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
} 