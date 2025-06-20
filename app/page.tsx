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