import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CitiesSection from '@/components/sections/CitiesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen pt-20 lg:pt-24">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <ProcessSection />
      <CitiesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
} 