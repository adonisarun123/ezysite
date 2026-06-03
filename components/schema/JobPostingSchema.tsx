import React from 'react'

interface JobPostingProps {
  title: string
  description: string
  datePosted: string
  validThrough?: string
  employmentType?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACTOR' | 'TEMPORARY' | 'INTERN' | 'OTHER'
  hiringOrganization?: { name: string; sameAs?: string; logo?: string }
  jobLocation?: { addressLocality: string; addressRegion?: string; addressCountry?: string }
  baseSalary?: {
    currency: string
    value: number | { minValue: number; maxValue: number }
    unitText: 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR'
  }
  applicantLocationRequirements?: string
  directApply?: boolean
}

export default function JobPostingSchema(props: JobPostingProps) {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: props.title,
    description: props.description,
    datePosted: props.datePosted,
    employmentType: props.employmentType ?? 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: props.hiringOrganization?.name ?? 'EzyHelpers',
      sameAs: props.hiringOrganization?.sameAs ?? 'https://www.ezyhelpers.com',
      logo: props.hiringOrganization?.logo ?? 'https://www.ezyhelpers.com/ezyhelper_logo_new.png',
    },
    jobLocation: props.jobLocation
      ? {
          '@type': 'Place',
          address: {
            '@type': 'PostalAddress',
            addressLocality: props.jobLocation.addressLocality,
            addressRegion: props.jobLocation.addressRegion,
            addressCountry: props.jobLocation.addressCountry ?? 'IN',
          },
        }
      : undefined,
    validThrough: props.validThrough,
    directApply: props.directApply ?? true,
  }
  if (props.baseSalary) {
    data.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: props.baseSalary.currency,
      value:
        typeof props.baseSalary.value === 'number'
          ? {
              '@type': 'QuantitativeValue',
              value: props.baseSalary.value,
              unitText: props.baseSalary.unitText,
            }
          : {
              '@type': 'QuantitativeValue',
              minValue: props.baseSalary.value.minValue,
              maxValue: props.baseSalary.value.maxValue,
              unitText: props.baseSalary.unitText,
            },
    }
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
