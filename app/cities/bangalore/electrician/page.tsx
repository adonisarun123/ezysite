import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  CpuChipIcon,
  ClockIcon,
  PencilSquareIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Home Electrical Repair Services in Bangalore | Quick Fix',
  description:
    'Hire trusted electrical repair services in Bangalore for safe wiring, lighting, EV charger setup, and smart upgrades with fast, licensed professionals.',
  openGraph: {
    title: 'Home Electrical Repair Services in Bangalore | Quick Fix',
    description:
      'Trusted electricians for every home. Repairs, installations, smart upgrades, and EV charging points across Bangalore.',
    url: 'https://ezyhelpers.com/cities/bangalore/electrician',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/electrician'
  }
}

export default function BangaloreElectricianPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Electrician', url: 'https://ezyhelpers.com/cities/bangalore/electrician' }
  ]

  const trustBadges = [
    'Expert in Repairs & Installations',
    'Trained for Modern & Traditional Wiring',
    'No Hidden Charges, Full Transparency'
  ]

  const highlights = [
    { title: 'Instant', subtitle: 'Fault Diagnosis' },
    { title: '100%', subtitle: 'Safety Assured' },
    { title: 'Licensed', subtitle: 'Electricians Only' }
  ]

  const whyChoose = [
    'Licensed electricians, BESCOM-compliant work',
    'Same-day repairs and new installations',
    'Energy-saving solutions for lower bills',
    'Safe wiring for homes and apartments',
    'Fast fixes for common power issues',
    'Service available all over Bangalore'
  ]

  const services = [
    { title: 'Electrical Wiring & Rewiring', description: 'Complete rewiring with safety-grade materials for older or damaged wiring.' },
    { title: 'Decorative & Functional Lighting', description: 'Ambient LED, feature lighting, and festive/event setups.' },
    { title: 'Inverter & UPS Installation', description: 'Reliable backup solutions for apartments and independent homes.' },
    { title: 'Switch, Socket & Board Repairs', description: 'Fix burnt sockets, loose switches, or tripping circuits safely.' },
    { title: 'Smart Home Installations', description: 'Smart lighting, automation devices, and digital control systems.' },
    { title: 'Electrical Safety Compliance', description: 'Safety inspections and earthing checks for new and existing homes.' },
    { title: 'EV Charging Point Installation', description: 'EV chargers for apartments and homes with compliant power upgrades.' },
    { title: 'Circuit Breaker Repairs & Upgrades', description: 'Resolve tripping and install MCB/ELCB with safety certifications.' }
  ]

  const preventive = [
    'Check wiring, switches, and circuit breakers for wear and tear',
    'Test inverter and UPS for reliable backup performance',
    'Inspect loose wires and repair minor faults early',
    'Replace damaged switchboards, plug points, and MCBs',
    'Suggest energy-efficient lighting upgrades to save on bills',
    'Verify wiring health in older homes and recommend rewiring if needed'
  ]

  const smartUpgrades = [
    'Wi‑Fi controlled lights and fans',
    'Smart doorbell and CCTV wiring',
    'IoT device‑compatible power points',
    'Hidden wiring and modular switch upgrades'
  ]

  const process = [
    { step: '1', title: 'Share Your Electrical Issue', description: 'Tell us your repairs, installations, or maintenance needs.', icon: PencilSquareIcon },
    { step: '2', title: 'Schedule a Convenient Time', description: 'Pick a same-day or scheduled visit that suits you.', icon: ClockIcon },
    { step: '3', title: 'Certified Technician Visit', description: 'Licensed electrician arrives with proper tools and safety gear.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Quality Assurance & Support', description: 'Reliable work with follow‑ups and emergency help.', icon: ShieldCheckIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'Can electricians handle apartment complex electrical work?', answer: 'Yes. Our team coordinates with building management and follows complex protocols.' },
    { question: 'Do electricians install EV charging points?', answer: 'Yes. We install EV chargers, provide power upgrades, and ensure EV-ready setups.' },
    { question: 'Can electricians upgrade old apartment wiring?', answer: 'Yes. We do complete rewiring, safety upgrades, and modern system installation.' },
    { question: 'Do electricians work around busy professional schedules?', answer: 'Yes. Flexible timing including weekends and evenings with low disruption.' },
    { question: 'Do electricians handle home office electrical setups?', answer: 'Yes. Dedicated circuits, extra points, and safe connections for WFH devices.' },
    { question: 'Do electricians do wiring?', answer: 'Yes. New installs, rewiring, and repairs for homes, offices, appliances, and smart devices.' },
    { question: 'What is a professional electrician?', answer: 'A trained expert who installs, repairs, and maintains electrical systems safely and efficiently.' },
    { question: 'What is the cost of an electrician in Bangalore?', answer: 'Depends on service type, complexity, materials, and time. Contact us for a free estimate.' },
    { question: 'How do I know if my house needs rewiring?', answer: 'Flickering lights, frequent trips, burning smells, or outdated wires are signs to inspect.' },
    { question: 'What are signs of an electrical problem?', answer: 'Sparks, warm switchboards, buzzing sounds, or burning smells—get inspected immediately.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Electrical Repair',
      'Electrical Installation',
      'Smart Home Setup',
      'EV Charging Point Installation',
      'Electrical Safety Inspection'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/electrician" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <MapPinIcon className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-sm font-semibold">Trusted Electricians Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Home Electrical Repair Services
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Reliable, safe, and certified electrical repair and installation services for modern Bangalore homes.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Electrician Now</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="text-2xl font-bold text-white">{h.title}</div>
                      <div className="text-primary-200 text-sm">{h.subtitle}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-3 gap-6">
                    {[BoltIcon, CpuChipIcon, ShieldCheckIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Electrical</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers?</h2>
              <p className="text-lg text-gray-600">Bangalore homes face power cuts, old wiring, and smart‑device overload—we make it safe and simple.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {whyChoose.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services We Offer */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Electrical Services in Bangalore</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional installation and maintenance solutions for every home.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((svc, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                  <p className="text-gray-700">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Maintenance */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Preventive Electrical Maintenance</h2>
              <p className="text-lg text-gray-600">Stay safe and avoid sudden problems with timely inspections.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {preventive.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <BoltIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Smart Upgrades */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Smart Home Electrical Upgrades</h2>
              <p className="text-lg text-gray-600">Bring your home into the future with modern tech installations.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8">
              <ul className="grid sm:grid-cols-2 gap-3">
                {smartUpgrades.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Electrical Services</h2>
              <p className="text-lg text-gray-600">A simple 4‑step process for professional electrical solutions.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted electrical repair services across major Bangalore neighborhoods.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {bangaloreAreas.map((a, idx) => (
                  <div key={idx} className="flex items-center bg-gray-50 rounded-lg px-4 py-3 text-gray-800">
                    <MapPinIcon className="h-5 w-5 text-primary-600 mr-2" /> {a}
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800">
                  Check service in your area
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Related Home Services in Bangalore</h2>
              <p className="text-lg text-gray-600">Complete home solutions beyond electrical maintenance.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Home Appliance Repair in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Quick repairs for washing machines, fridges, ovens, and more.' },
                { title: 'House Cleaning Services in Bangalore', href: '/services/house-cleaning', description: 'Thorough cleaning for kitchens, bathrooms, and living spaces.' },
                { title: 'Plumbing Services in Bangalore', href: '/services/plumbers', description: 'Fix leaky taps, blockages, and install sanitary fittings.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    Explore
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Don't Let Electrical Issues Disrupt Your Home</h2>
            <p className="text-lg text-gray-600 mb-6">From a flickering light to a full rewiring job—book a licensed electrician today.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Your Electrician Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call +91 9972571005
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <div className="divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
