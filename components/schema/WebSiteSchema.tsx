export default function WebSiteSchema() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'EzyHelpers',
    alternateName: 'EzyHelpers - Domestic Help Services',
    url: 'https://www.ezyhelpers.com',
    description:
      "India's most trusted platform for verified domestic help services including maids, cooks, nannies, drivers, and elderly care professionals.",
    inLanguage: 'en-IN',
    publisher: {
      '@type': 'Organization',
      name: 'EzyHelpers',
      url: 'https://www.ezyhelpers.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  )
}
