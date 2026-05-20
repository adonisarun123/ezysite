import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'EzyHelpers - भरोसेमंद घरेलू सेवा प्लेटफ़ॉर्म',
  description: 'भारत का #1 घरेलू सेवा प्लेटफ़ॉर्म। सत्यापित मेड, रसोइया, नानी और ड्राइवर 24-72 घंटे में। 10,000+ विश्वसनीय परिवार।',
  keywords: ['घरेलू सेवा', 'मेड', 'रसोइया', 'नानी', 'ड्राइवर', 'सत्यापित हेल्पर', 'भारत में घरेलू सेवाएं'],
  // Canonical removed because this route currently redirects to "/".
  // Claiming a canonical for a redirected URL is misleading for crawlers.
  alternates: {
    languages: {
      'en': 'https://www.ezyhelpers.com',
      'hi': 'https://www.ezyhelpers.com/hin',
      'x-default': 'https://www.ezyhelpers.com'
    }
  },
  openGraph: {
    title: 'EzyHelpers - भरोसेमंद घरेलू सेवा प्लेटफ़ॉर्म',
    description: 'भारत का #1 घरेलू सेवा प्लेटफ़ॉर्म। सत्यापित मेड, रसोइया, नानी और ड्राइवर 24-72 घंटे में।',
    url: 'https://www.ezyhelpers.com/hin',
    type: 'website',
    locale: 'hi_IN',
  }
}

// For now, redirect to main homepage
// In the future, this could be a full Hindi version of the homepage
export default function HindiHomePage() {
  redirect('/')
}