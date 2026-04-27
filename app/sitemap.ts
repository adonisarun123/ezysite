import { MetadataRoute } from 'next'
import { posts } from '@/lib/blogData'
import { caseStudies } from '@/app/case-studies/data/caseStudies'
import { jobOpenings } from '@/lib/careersData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ezyhelpers.com'
  const currentDate = new Date().toISOString()

  // Core pages with high priority
  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.85
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/hire-helper`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/join-as-helper`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/book-now`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/for-helpers`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/service-request`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/nduw`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/nest`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/requirement`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3
    }
  ]

  // Service pages
  const services: MetadataRoute.Sitemap = [
    'full-time-maids',
    'part-time-maids',
    'live-in-maids',
    'elderly-care',
    'nanny-babysitter',
    'cooks',
    'drivers',
    'gardener',
    'carpenters',
    'electricians',
    'plumbers',
    'painters',
    'deep-cleaning',
    'appliance-repair',
    'on-demand-helpers',
    'ac-repair',
    'babysitter',
    'english-speaking-babysitters',
    'house-shifting',
    'japa',
    'japa-nanny-services',
    'pest-control',
    'premium-chauffeur-service',
    'professional-chef-for-home',
    'sofa-cleaning',
    'patient-care-services-at-home',
    'dog-pet-sitters',
    'special-needs-caregiver'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  // Cities - Main pages
  const cities: MetadataRoute.Sitemap = [
    'delhi',
    'mumbai',
    'bangalore',
    'hyderabad',
    'noida',
    'lucknow',
    'kanpur',
    'bareilly',
    'meerut',
    'nagpur'
  ].map(city => ({
    url: `${baseUrl}/cities/${city}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Bangalore city-specific service pages
  const bangaloreServices: MetadataRoute.Sitemap = [
    'full-time-maid',
    'part-time-maid',
    // Canonical URL is /cities/bangalore/live-in-maids (singular live-in-maid redirects)
    'live-in-maids',
    'elderly-care',
    'nanny-babysitter',
    'travel-nanny',
    'cooks',
    'drivers',
    'gardener',
    'carpenter',
    'electrician',
    'plumber',
    'painter',
    'home-deep-cleaning',
    'appliance-repair',
    'on-demand-helper',
    'chauffeur-service',
    'educated-babysitter',
    'home-chef'
  ].map(service => ({
    url: `${baseUrl}/cities/bangalore/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Bareilly city-specific service pages
  const bareillyServices: MetadataRoute.Sitemap = [
    'full-time-maid',
    'part-time-maid',
    'live-in-maid',
    'elderly-care',
    'babysitter',
    'japa',
    'cooks',
    'drivers',
    'carpenter',
    'electrician',
    'plumber',
    'painting',
    'home-deep-cleaning',
    'appliance-repair',
    'ac-repair',
    'on-demand-helper',
    'pest-control',
    'house-shifting',
    'sofa-cleaning'
  ].map(service => ({
    url: `${baseUrl}/cities/bareilly/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65
  }))

  // Blog posts (dynamic from blogData + standalone legacy route)
  const blogPosts: MetadataRoute.Sitemap = [
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    })),
    {
      url: `${baseUrl}/blog/hiring-a-domestic-helper`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }
  ]

  // Case Studies
  const caseStudyPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ]

  const caseStudiesList: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.65
  }))

  // Special landing pages
  const landingPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/Lp/live-in-maid-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/Lp/live-in-maid-bareilly`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    }
  ]

  // Helper jobs pages
  const helperJobPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/helper-jobs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/home-cooks-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/nanny-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/couple-security-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/elderly-caretaker-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/housekeeping-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/japa-maid-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/patient-care-job-bangalore`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/helper-jobs/odisha`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/home-cooks-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/nanny-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/couple-security-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/elderly-caretaker-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/housekeeping-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/japa-maid-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    },
    {
      url: `${baseUrl}/helper-jobs/jharkhand/patient-care-job-bangalore/hin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.55
    }
  ]

  // Helper registration
  const helperPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/helper-registration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ]

  // Other missing pages
  const otherPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/agent-registration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/agent-success`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.25
    },
    {
      url: `${baseUrl}/customer-requirements`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/helper-interview`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/helper-leads`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    },
    {
      url: `${baseUrl}/helper-success`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.25
    }
  ]

  // Business pages
  const businessPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/executive-summary`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/market-overview`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4
    }
  ]

  // One entry per open role (e.g. field-officer-bangalore, sourcing-lead-bangalore); dedicated routes like chief-of-staff-intern use the same slug here.
  const careerJobPages: MetadataRoute.Sitemap = jobOpenings.map((j) => ({
    url: `${baseUrl}/careers/${j.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.65
  }))

  return [
    ...corePages,
    ...services,
    ...cities,
    ...bangaloreServices,
    ...bareillyServices,
    ...blogPosts,
    ...caseStudyPages,
    ...caseStudiesList,
    ...landingPages,
    ...helperJobPages,
    ...helperPages,
    ...otherPages,
    ...businessPages,
    ...careerJobPages
  ]
}