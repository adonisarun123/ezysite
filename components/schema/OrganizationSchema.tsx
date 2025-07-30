export default function OrganizationSchema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "EzyHelpers",
    "legalName": "EzyHelpers Private Limited",
    "url": "https://ezyhelpers.com",
    "logo": "https://ezyhelpers.com/ezyhelper_logo_new.png",
    "description": "India's most trusted platform for verified domestic help services including maids, cooks, nannies, drivers, and elderly care professionals.",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "EzyHelpers Team"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka",
      "addressLocality": "Bangalore",
      "postalCode": "560100",
      "streetAddress": "Bangalore, Karnataka"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9972571005",
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
      }
    ],
    "telephone": "+91-9972571005",
    "email": "info@ezyhelpers.com",
    "sameAs": [
      "https://www.facebook.com/ezyhelpers",
      "https://www.instagram.com/ezyhelpers",
      "https://www.linkedin.com/company/ezyhelpers"
    ],
    "serviceArea": [
      {
        "@type": "City",
        "name": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      {
        "@type": "City", 
        "name": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Noida",
        "addressRegion": "Uttar Pradesh", 
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Nagpur",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Kanpur", 
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Meerut",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      },
      {
        "@type": "City",
        "name": "Bareilly",
        "addressRegion": "Uttar Pradesh",
        "addressCountry": "IN"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Domestic Help Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Live-In Maid Services",
            "description": "24/7 dedicated household support with comprehensive home management and care",
            "serviceType": "Domestic Help"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Full-Time Maid Services",
            "description": "Daily home management during fixed hours without live-in commitment",
            "serviceType": "Domestic Help"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Part-Time Maid Services", 
            "description": "Flexible cleaning and household support on your schedule and budget",
            "serviceType": "Domestic Help"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Demand Helper Services",
            "description": "Instant help for emergencies, events, and unexpected household needs",
            "serviceType": "Domestic Help"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Nanny/Babysitter Services",
            "description": "Expert childcare tailored to your family's schedule and specific needs",
            "serviceType": "Childcare"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elderly Care Services",
            "description": "Compassionate day-and-night support for aging loved ones with dignity",
            "serviceType": "Elderly Care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cook Services",
            "description": "Professional meal preparation with diverse cuisines and dietary options",
            "serviceType": "Cooking Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Driver Services",
            "description": "Safe and reliable transportation for all your travel and commute needs",
            "serviceType": "Transportation"
          }
        }
      ]
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
    "openingHours": "Mo-Su 00:00-23:59",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "Background Verified Professionals",
      "description": "All helpers undergo thorough background checks and verification processes"
    },
    "knowsAbout": [
      "Domestic Help Services",
      "Maid Services", 
      "House Cleaning",
      "Childcare Services",
      "Elderly Care",
      "Cooking Services",
      "Driver Services",
      "Home Management"
    ],
    "slogan": "Trusted House Maid Services & Complete Home Help",
    "parentOrganization": {
      "@type": "Organization",
      "name": "EzyHelpers Private Limited"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
} 