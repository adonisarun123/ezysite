import type { Metadata } from 'next'
import React from 'react'
import NestPageClient from './NestPageClient'

export const metadata: Metadata = {
  title: 'Domestic Worker Accommodation in Bangalore | Nest',
  description: 'Affordable domestic worker hostel in Bangalore. Women-only helper stay with meals and basic facilities. Short-term and long-term maid stay available. Book now.',
  keywords: 'domestic worker accommodation Bangalore, maid hostel Bangalore, helper stay Bangalore, women-only hostel, domestic helper PG, affordable maid stay',
  openGraph: {
    title: 'Nest - Domestic Worker Accommodation in Bangalore',
    description: 'Safe & Affordable Maid Stay. India\'s first women-only domestic helper hostel.',
    type: 'website',
    url: 'https://ezyhelpers.com/nest',
  }
}

export default function NestPage() {
  return <NestPageClient />
}
