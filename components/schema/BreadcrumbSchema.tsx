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
      "item": item.url,
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
    { name: "Home", url: "https://www.ezyhelpers.com" },
    { name: "Services", url: "https://www.ezyhelpers.com/services" },
    { name: serviceName, url: `https://www.ezyhelpers.com/services/${serviceSlug}` }
  ]
}

export function generateCityBreadcrumbs(cityName: string, citySlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://www.ezyhelpers.com" },
    { name: "Services", url: "https://www.ezyhelpers.com/services" },
    { name: `${cityName} Services`, url: `https://www.ezyhelpers.com/cities/${citySlug}` }
  ]
}

export function generateBlogBreadcrumbs(articleTitle: string, articleSlug: string): BreadcrumbItem[] {
  return [
    { name: "Home", url: "https://www.ezyhelpers.com" },
    { name: "Blog", url: "https://www.ezyhelpers.com/blog" },
    { name: articleTitle, url: `https://www.ezyhelpers.com/blog/${articleSlug}` }
  ]
} 