import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
  ClockIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckCircleIcon,
  SparklesIcon,
  StarIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full House Deep Cleaning in Bareilly - Book Experts Now',
  description: 'Get full home deep cleaning in Bareilly for kitchen, bathroom, and entire house. Verified cleaners ensure spotless, hygienic results.',
  openGraph: {
    title: 'Full House Deep Cleaning in Bareilly - Book Experts Now',
    description: 'Get full home deep cleaning in Bareilly for kitchen, bathroom, and entire house. Verified cleaners ensure spotless, hygienic results.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/home-deep-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/home-deep-cleaning'
  }
}

export default function BareillyHomeCleaning() {
  const faqs: FAQItem[] = [
    { question: 'What is a home deep cleaning service in Bareilly?', answer: 'Home deep cleaning includes dusting, mopping, bathroom and kitchen cleaning, sofa and mattress cleaning, sanitization, and more. Every corner, from living rooms to pooja rooms, is hygienically cleaned for a healthier home.' },
    { question: 'Why should I hire professional cleaning services in Bareilly?', answer: 'Professional cleaning like EzyHelpers provides trained cleaners, safe products, and the right tools to remove hidden dirt, allergens, and germs. It ensures a safer, fresher, and more comfortable home.' },
    { question: 'How is deep cleaning different from regular cleaning?', answer: 'Deep cleaning reaches hidden dust, bacteria, mold, and stains that regular cleaning misses. It includes scrubbing, sanitization, and cleaning of corners, fixtures, and furniture.' },
    { question: 'Do you provide same-day deep cleaning in Bareilly?', answer: 'Yes, we provide same-day deep cleaning for urgent needs like guests, events, or quick sanitation. Our team responds within 2 hours.' },
    { question: 'Are your house cleaners background-verified and trained?', answer: 'Yes, all our cleaners are background-checked, trained, and follow hygiene protocols for safe, stress-free cleaning.' },
    { question: 'Do you offer kitchen deep cleaning?', answer: 'Yes, we remove grease, food stains, and bacteria from countertops, cabinets, and appliances to make your cooking area safe and clean.' },
    { question: 'Do you provide post-festival cleaning in Bareilly?', answer: 'Yes, we clean homes after Holi, Diwali, or weddings, removing stains, oil, and mess to restore your home’s shine.' },
    { question: 'How often should I schedule home deep cleaning?', answer: 'Every 3–6 months is recommended to keep your home fresh, hygienic, and free of dust, pests, and germs.' },
    { question: 'What does bathroom deep cleaning include?', answer: 'Scrubbing tiles, disinfecting fittings, clearing drains, and polishing mirrors for sparkling, germ-free bathrooms.' },
    { question: 'How long does a deep cleaning session take?', answer: 'Small homes may take 3–4 hours, while larger homes or post-construction jobs may take 5–6 hours.' },
    { question: 'Do you clean windows and mirrors?', answer: 'Yes, we provide streak-free cleaning for all glass surfaces.' },
    { question: 'Can I book deep cleaning on weekends or holidays?', answer: 'Yes, we offer flexible scheduling, including weekends and public holidays.' },
    { question: 'Can I choose which rooms to clean?', answer: 'Absolutely. You can clean specific areas like the kitchen, bathrooms, or focus on certain items like sofas or windows.' },
  ]

  const whyChooseFeatures = [
    {
      title: 'Trained & Skilled Home Cleaning Experts',
      description: 'Our cleaners are trained to handle every cleaning task efficiently.',
      icon: StarIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Fast & Same-Day Deep Cleaning Service',
      description: 'We respond quickly to urgent cleaning needs.',
      icon: ClockIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Clear, Fair, and Honest Pricing Always',
      description: 'No hidden charges — what you see is what you pay.',
      icon: ShieldCheckIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Complete Home Cleaning & Sanitization Solutions',
      description: 'From top to bottom, we clean every corner to keep your home healthy.',
      icon: BeakerIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
  ]

  const cleaningServices = [
    { title: 'Deep House Cleaning', description: 'Dusting, mopping, and sanitization for a fully clean home.', icon: SparklesIcon },
    { title: 'Kitchen Deep Clean', description: 'Remove grease, food stains, and bacteria for a safe cooking space.', icon: WrenchScrewdriverIcon },
    { title: 'Bathroom Deep Clean', description: 'Scrub tiles, fittings, and tough stains to keep bathrooms hygienic.', icon: BeakerIcon },
    { title: 'Carpet Cleaning Services', description: 'Deep shampoo, vacuum, and drying to remove dust, allergens, and germs.', icon: HomeIcon },
    { title: 'Mattress Cleaning Services', description: 'Remove dust mites, bedbugs, and bacteria for healthy sleep.', icon: HomeIcon },
    { title: 'Sofa & Upholstery Cleaning', description: 'Clean sofas, cushions, and curtains for allergen-free living.', icon: HomeIcon },
    { title: 'Post-Construction Cleaning', description: 'Clear dust and debris after renovation or construction.', icon: WrenchScrewdriverIcon },
    { title: 'Regular Maintenance Cleaning', description: 'Weekly or monthly packages for a consistently clean home.', icon: ClockIcon },
    { title: 'Glass & Window Cleaning', description: 'Sparkling, streak-free windows and mirrors for bright interiors.', icon: SparklesIcon },
    { title: 'Disinfection & Sanitization', description: 'Kill germs and viruses to protect your family’s health.', icon: BeakerIcon },
    { title: 'Pre-Monsoon Deep Cleaning', description: 'Prevent mold and damp issues before the rainy season.', icon: CloudIcon },
    { title: 'Post-Festival Cleanup', description: 'Clean up after Holi, Diwali, or weddings to restore your home.', icon: SparklesIcon },
    { title: 'Dust Control Solutions', description: 'Remove Bareilly’s heavy dust from every surface using advanced techniques.', icon: WrenchScrewdriverIcon },
    { title: 'Water Tank Cleaning', description: 'Keep water storage tanks hygienic and safe for use.', icon: BeakerIcon },
  ]

  const areasWeClean = [
    'Living Room Deep Clean',
    'Bedroom Cleaning Services',
    'Kitchen Comprehensive Clean',
    'Bathroom Complete Sanitization',
    'Balcony & Terrace Cleaning',
    'Staircase & Entrance Cleaning',
    'Wardrobes & Cupboards Cleaning',
    'Pooja Room Cleaning',
    'Store Room Cleaning',
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Home Cleaning Services' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <SparklesIcon className="h-5 w-5 text-green-300 mr-2" />
                <span className="text-sm font-semibold">Professional Deep Cleaning</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Professional Home Deep Cleaning in Bareilly
              </h1>

              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Keep your home clean, safe, and fresh with professional deep cleaning in Bareilly. Our trained cleaners handle every corner of your home, giving you a stress-free, healthy living space.
              </p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Verified Cleaners</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Same-Day Cleaning Available</div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Flexible Scheduling</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-green-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Deep Cleaning Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-1.5" />
                  Emergency Cleaning Service
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">900+</div>
                  <div className="text-green-200 text-sm">Bareilly homes cleaned</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-green-200 text-sm">Satisfaction Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-green-200 text-sm">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Home Deep Cleaning in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Home Deep Cleaning in Bareilly?</h2>
              <p className="text-lg text-gray-600">We provide trusted, thorough, and professional cleaning for every home in Bareilly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Home Deep Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Home Deep Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">We provide complete cleaning solutions for all areas of your home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cleaningServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-6">
                    <service.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Areas We Clean Thoroughly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Areas We Clean Thoroughly</h2>
              <p className="text-gray-600">Keep Every Corner of Your Bareilly Home Fresh and Hygienic</p>
            </div>

            <div className="bg-green-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {areasWeClean.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Our Professional Cleaning Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Professional Cleaning Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast, simple booking in just 4 steps.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Cleaning Need</h3>
                <p className="text-gray-600 leading-relaxed">Explain your problem and which rooms need deep cleaning.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Pick a Convenient Time</h3>
                <p className="text-gray-600 leading-relaxed">Choose a comfortable day and time that fits your schedule.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Cleaner Visit</h3>
                <p className="text-gray-600 leading-relaxed">The verified cleaner arrives fully equipped with safe, high-quality materials.</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enjoy a Sparkling Home</h3>
                <p className="text-gray-600 leading-relaxed">Relax with a guaranteed fresh home and helpful follow-up support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don’t Let Dirt Take Over Your Home!</h2>
              <p className="text-xl mb-8 text-green-100">Book EzyHelpers today for the best deep cleaning services in Bareilly.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Deep Cleaning Now
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">More reliable services for Bareilly homes.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/packers-and-movers" className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Packers & Movers Services</h3>
                <p className="text-gray-600 mb-4">Safe, quick shifting of household items with careful packing.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/carpenter" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Carpentry & Furniture Services</h3>
                <p className="text-gray-600 mb-4">Repair or make furniture, shelves, doors, and woodwork.</p>
                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/painting" className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <SparklesIcon className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Painting & Wall Services</h3>
                <p className="text-gray-600 mb-4">Professional wall painting, texture finishes, and waterproofing solutions.</p>
                <div className="flex items-center text-green-600 font-semibold">Learn More</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Regular Deep Cleaning Matters for Every Home in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Deep Cleaning Matters for Every Home in Bareilly</h3>
              <div className="max-w-5xl mx-auto md:mx-10 text-justify">
                <p className="text-gray-700 mb-4">Deep cleaning is more than a tidy home - it keeps your family healthy and safe. Bareilly’s dust, pollution, and humidity can make homes dirty quickly. Regular cleaning prevents bacteria, allergens, and long-term damage.</p>
                <p className="text-gray-700 mb-4">EzyHelpers goes beyond simple sweeping. We clean hidden dirt, bacteria, and allergens that daily cleaning misses. From disinfecting high-touch areas to scrubbing kitchens and bathrooms, we make your home fresh and safe.</p>
                <p className="text-gray-700 mb-4">We clean every detail: chimney filters, bathroom corners, under furniture, ceiling fans, curtain rods, and behind appliances. Our cleaners use eco-friendly, allergy-safe products, safe for children, elders, and pets.</p>
                <p className="text-gray-700">Regular deep cleaning reduces illness risk, protects furniture and flooring, and ensures peace of mind. A clean home is healthy, happy, and stress-free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
