interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": {
        "@type": "WebPage",
        "@id": item.url,
        "url": item.url,
        "name": item.name
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

// Helper function to generate common breadcrumb patterns
export function generateServiceBreadcrumbs(serviceName: string, serviceSlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Services", url: "https://ezyhelpers.com/services" },
    { name: serviceName, url: `https://ezyhelpers.com/services/${serviceSlug}` }
  ]
}

export function generateCityBreadcrumbs(cityName: string, citySlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Cities", url: "https://ezyhelpers.com" },
    { name: `${cityName} Services`, url: `https://ezyhelpers.com/cities/${citySlug}` }
  ]
}

export function generateBlogBreadcrumbs(articleTitle: string, articleSlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://ezyhelpers.com" },
    { name: "Blog", url: "https://ezyhelpers.com/blog" },
    { name: articleTitle, url: `https://ezyhelpers.com/blog/${articleSlug}` }
  ]
} 