import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import UrgencyCTA from '@/components/UrgencyCTA'
import MainContent from '@/components/MainContent'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CitiesSection from '@/components/sections/CitiesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import CTASection from '@/components/sections/CTASection'
import { UrgencyProvider } from '@/components/UrgencyContext'

export const metadata: Metadata = {
  title: 'Trusted House Help Service | EzyHelpers - 4.8★ Rated',
  description: "India's #1 house help service platform. Get verified maids, cooks, nannies & drivers in 24-72hrs. 10,000+ trusted families. Call +91 9972571005",
  keywords: 'house help service, domestic help, maids, cooks, nannies, drivers, verified helpers, home services India',
}

export default function Home() {
  return (
    <UrgencyProvider defaultVisible={true}>
      <UrgencyCTA />
      <Navbar />
      <MainContent>
        <HeroSection />
        <WhyChooseUsSection />
        <ServicesSection />
        <ProcessSection />
        <CitiesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </MainContent>
    </UrgencyProvider>
  )
} 