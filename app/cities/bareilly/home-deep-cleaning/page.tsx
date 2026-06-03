import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import NestCTA from '@/components/NestCTA'
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
  title: 'Full House Deep Cleaning in Bareilly – Book Experts Now',
  description: 'Get home deep cleaning in Bareilly for kitchen, bathroom, and entire house sanitization. Experienced cleaners ensure spotless, hygienic results.',
  openGraph: {
    title: 'Full House Deep Cleaning in Bareilly – Book Experts Now',
    description: 'Get home deep cleaning in Bareilly for kitchen, bathroom, and entire house sanitization. Experienced cleaners ensure spotless, hygienic results.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/home-deep-cleaning',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/home-deep-cleaning'
  }
}

export default function BareillyHomeCleaning() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is included in home deep cleaning in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Home deep cleaning in Bareilly includes dusting, mopping, bathroom and kitchen cleaning, sofa and mattress cleaning, sanitisation, and more. It ensures every area, from living rooms to pooja rooms, is hygienically cleaned for a healthier living space."
      }
    },{
      "@type": "Question",
      "name": "Why should I choose professional cleaning services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Professional cleaning services in Bareilly like EzyHelpers offer trained cleaners, allergy-safe products, and high-quality tools to remove hidden dirt, allergens, and bacteria, making your home safer and more comfortable for your family."
      }
    },{
      "@type": "Question",
      "name": "How is deep cleaning different from regular cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Deep cleaning targets hidden dust, bacteria, mold, and stains that routine cleaning misses. It involves intensive scrubbing, sanitisation, and cleaning of corners, fixtures, and furnishings, ensuring your Bareilly home stays truly hygienic."
      }
    },{
      "@type": "Question",
      "name": "Do you provide same-day deep cleaning services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers offers same-day home deep cleaning in Bareilly, ideal for urgent needs like guest visits, post-events, or quick sanitation requirements. Our team responds within 2 hours of your booking."
      }
    },{
      "@type": "Question",
      "name": "Are your house cleaners background-verified and trained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our professional cleaning services in Bareilly only include background-checked and trained cleaners who use safe techniques and follow hygiene protocols for a stress-free and reliable experience."
      }
    },{
      "@type": "Question",
      "name": "Do you offer kitchen deep cleaning in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our professional cleaning services in Bareilly include kitchen deep cleaning that removes grease, food stains, and bacteria from countertops, appliances, and cabinets. We make your cooking space safe, hygienic, and odor-free."
      }
    },{
      "@type": "Question",
      "name": "Do you offer post-festival home cleaning in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer post-Holi, Diwali, and wedding cleanups in Bareilly. Our team removes colour stains, oil, and mess, restoring your home’s original shine after celebrations."
      }
    },{
      "@type": "Question",
      "name": "How often should I book home deep cleaning in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It’s recommended to book professional home deep cleaning every 3 to 6 months in Bareilly to keep your home hygienic, fresh-smelling, and free of dust, pests, and illness-causing bacteria."
      }
    },{
      "@type": "Question",
      "name": "What is included in bathroom deep cleaning in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bathroom deep cleaning includes scrubbing tiles, disinfecting fittings, removing stains, cleaning mirrors, and clearing drains. Our team ensures germ-free and sparkling clean bathrooms."
      }
    },{
      "@type": "Question",
      "name": "How long does a deep cleaning session take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depending on the size of your home and selected services, a deep cleaning session in Bareilly can take between 3 to 6 hours. Larger homes or post-construction jobs may take longer."
      }
    },{
      "@type": "Question",
      "name": "Do you clean glass windows and mirrors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide streak-free glass and window cleaning in Bareilly. It’s included in our standard and deep cleaning packages for a brighter, clearer home."
      }
    },{
      "@type": "Question",
      "name": "Can I book home deep cleaning in Bareilly for weekends or holidays?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can easily schedule home deep cleaning in Bareilly on weekends or public holidays. We understand your busy schedule and make sure you get cleaning help when it suits you best."
      }
    },{
      "@type": "Question",
      "name": "Can I choose which rooms or areas to clean instead of the whole house?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. With our professional cleaning services in Bareilly, you can choose to clean only specific rooms like the kitchen or bathrooms or even focus on certain items like windows or sofas."
      }
    }]
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Home Cleaning' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white focus:outline-none">
                Home Deep Cleaning & Maintenance
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Professional Full House Deep Cleaning in Bareilly – Book Experts Now.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10 text-center">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Deep Cleaning Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                {[
                  'Verified Cleaners',
                  'Same-Day Service',
                  'Eco-Friendly Products',
                  'Satisfaction Guarantee'
                ].map((badge, idx) => (
                  <span key={idx} className="text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 font-semibold">
                    ✓ {badge}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight text-center">900+</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Homes Cleaned</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 leading-tight text-center">100%</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Germ Removal</div>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-md border border-white/10">
                  <div className="text-3xl font-extrabold text-white mb-1 text-center leading-tight">2-Hour</div>
                  <div className="text-indigo-100 font-medium text-sm text-center">Fast Response</div>
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
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Don’t Let Dirt Take Over Your Home!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium font-body leading-relaxed">
                Book EzyHelpers today for the best deep cleaning services in Bareilly.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto font-display">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Deep Cleaning Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg py-4 px-10 rounded-2xl transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Deep Cleaning Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
              Why Regular Deep Cleaning Matters
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Deep cleaning is more than just a tidy home—it keeps your family healthy and safe. Bareilly’s dust and humidity can make homes dirty quickly, leading to bacteria and allergens.</p>
              <p className="font-medium text-indigo-900/80">EzyHelpers goes beyond sweeping. We clean hidden areas like chimney filters, bathroom corners, and behind appliances using eco-friendly products.</p>
              <p>Regular deep cleaning reduces illness risk, protects your furniture, and gives you total peace of mind.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display text-center">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "What is included in home deep cleaning in Bareilly?",
                  answer: "Home deep cleaning in Bareilly includes dusting, mopping, bathroom and kitchen cleaning, sofa and mattress cleaning, sanitisation, and more. It ensures every area, from living rooms to pooja rooms, is hygienically cleaned for a healthier living space."
                },
                {
                  question: "Why should I choose professional cleaning services in Bareilly?",
                  answer: "Professional cleaning services in Bareilly like EzyHelpers offer trained cleaners, allergy-safe products, and high-quality tools to remove hidden dirt, allergens, and bacteria, making your home safer and more comfortable for your family."
                },
                {
                  question: "How is deep cleaning different from regular cleaning?",
                  answer: "Deep cleaning targets hidden dust, bacteria, mold, and stains that routine cleaning misses. It involves intensive scrubbing, sanitisation, and cleaning of corners, fixtures, and furnishings, ensuring your Bareilly home stays truly hygienic."
                },
                {
                  question: "Do you provide same-day deep cleaning services in Bareilly?",
                  answer: "Yes, EzyHelpers offers same-day home deep cleaning in Bareilly, ideal for urgent needs like guest visits, post-events, or quick sanitation requirements. Our team responds within 2 hours of your booking."
                },
                {
                  question: "Are your house cleaners background-verified and trained?",
                  answer: "Yes, our professional cleaning services in Bareilly only include background-checked and trained cleaners who use safe techniques and follow hygiene protocols for a stress-free and reliable experience."
                },
                {
                  question: "Do you offer kitchen deep cleaning in Bareilly?",
                  answer: "Yes, our professional cleaning services in Bareilly include kitchen deep cleaning that removes grease, food stains, and bacteria from countertops, appliances, and cabinets. We make your cooking space safe, hygienic, and odor-free."
                },
                {
                  question: "Do you offer post-festival home cleaning in Bareilly?",
                  answer: "Yes, we offer post-Holi, Diwali, and wedding cleanups in Bareilly. Our team removes colour stains, oil, and mess, restoring your home’s original shine after celebrations."
                },
                {
                  question: "How often should I book home deep cleaning in Bareilly?",
                  answer: "It’s recommended to book professional home deep cleaning every 3 to 6 months in Bareilly to keep your home hygienic, fresh-smelling, and free of dust, pests, and illness-causing bacteria."
                },
                {
                  question: "What is included in bathroom deep cleaning in Bareilly?",
                  answer: "Bathroom deep cleaning includes scrubbing tiles, disinfecting fittings, removing stains, cleaning mirrors, and clearing drains. Our team ensures germ-free and sparkling clean bathrooms."
                },
                {
                  question: "How long does a deep cleaning session take?",
                  answer: "Depending on the size of your home and selected services, a deep cleaning session in Bareilly can take between 3 to 6 hours. Larger homes or post-construction jobs may take longer."
                },
                {
                  question: "Do you clean glass windows and mirrors?",
                  answer: "Yes, we provide streak-free glass and window cleaning in Bareilly. It’s included in our standard and deep cleaning packages for a brighter, clearer home."
                },
                {
                  question: "Can I book home deep cleaning in Bareilly for weekends or holidays?",
                  answer: "Yes, you can easily schedule home deep cleaning in Bareilly on weekends or public holidays. We understand your busy schedule and make sure you get cleaning help when it suits you best."
                },
                {
                  question: "Can I choose which rooms or areas to clean instead of the whole house?",
                  answer: "Absolutely. With our professional cleaning services in Bareilly, you can choose to clean only specific rooms like the kitchen or bathrooms or even focus on certain items like windows or sofas."
                }
              ]}
            />
          </div>
        </section>

      </main>

            <NestCTA />
      <Footer />
    </>
  )
}
