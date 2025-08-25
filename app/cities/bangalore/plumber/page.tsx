import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  WrenchIcon,
  BoltIcon,
  AdjustmentsHorizontalIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'House Plumbing Repair in Bangalore | Water Problem Fix',
  description:
    'Fix leaking taps, blocked drains, or bathroom issues with verified plumbers. Book same-day house plumbing repair in Bangalore with on-time professionals.',
  openGraph: {
    title: 'House Plumbing Repair in Bangalore | Water Problem Fix',
    description:
      'Certified Bangalore plumbers for leaks, clogs, fittings, water pressure, bathroom & kitchen repairs. Same-day and emergency visits.',
    url: 'https://ezyhelpers.com/cities/bangalore/plumber',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/plumber'
  }
}

export default function BangalorePlumberPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Plumber', url: 'https://ezyhelpers.com/cities/bangalore/plumber' }
  ]

  const trustBadges = [
    'Transparent Pricing Always',
    'Background-Checked Plumbers',
    'On-Time Service Promise'
  ]

  const highlights = [
    { title: 'Same-Day', subtitle: 'Service Available' },
    { title: 'On-Demand', subtitle: 'Visits' },
    { title: 'Flexible', subtitle: 'Time Slots' },
    { title: '24/7', subtitle: 'Emergency Support' }
  ]

  const whyChoose = [
    'Certified plumbers with years of experience',
    'Skilled in both modern and old fittings',
    'Transparent, upfront, and fair pricing',
    'Background-verified, trustworthy professionals',
    'Comprehensive solutions for all issues',
    'Experts for bathroom, kitchen, and drainage'
  ]

  const services = [
    { title: 'Expert Pipe Leakage Detection & Repair', desc: 'Detect and repair hidden or visible leaks to prevent water damage and mold.' },
    { title: 'Faucet, Shower & Tap Repairs', desc: 'Fix dripping taps and broken showers to restore water flow and stop wastage.' },
    { title: 'Toilet Repair & Sanitation', desc: 'Fix flush tanks and blockages to keep your bathroom clean and functional.' },
    { title: 'Water Pressure Optimization', desc: 'Fix low water pressure in high-rises for strong, steady flow in all taps.' },
    { title: 'Bathroom Fitting Installation & Repairs', desc: 'Install or repair taps, basins, and fittings to improve hygiene and use.' },
    { title: 'Clogged Drain & Sink Cleaning', desc: 'Remove grease, hair, and debris to unclog bathroom/kitchen drains and sinks.' },
    { title: 'Pipe Replacement', desc: 'Replace damaged pipes with durable materials during renovations or upgrades.' },
    { title: 'Emergency Plumbing Repairs (24/7)', desc: 'Handle burst pipes and blockages any time with emergency support.' },
    { title: 'Kitchen Sink & Drain Repairs', desc: 'Fix sink leaks, clogs, and faulty faucets to keep kitchens efficient.' },
    { title: 'Bathroom Appliance Plumbing', desc: 'Install geysers, jets, and hand showers with safe fittings.' },
    { title: 'Grouting & Sealant Application', desc: 'Reseal edges to stop water seepage, mold, and structural damage.' },
    { title: 'Full Bathroom Plumbing Renovation', desc: 'Upgrade outdated systems for better efficiency and convenience.' },
    { title: 'Hard Water Treatment & Softener Installation', desc: 'Install softeners to protect pipes and appliances from mineral buildup.' },
    { title: 'New Pipe Installation', desc: 'Set up new pipes during builds, extensions, or remodels.' }
  ]

  const commonProblems = [
    'Pipe leakage behind tiles or walls',
    'Clogged bathroom or kitchen drains',
    'Dripping taps and loose faucets',
    'Leaking toilets or flush tanks',
    'Broken geyser pipes',
    'Water tank overflows',
    'Low water pressure in high-rise flats',
    'Hard water damage to bathroom fittings',
    'Old pipe systems in traditional homes',
    'Kitchen sink blockages due to waste build-up'
  ]

  const process = [
    { step: '1', title: 'Tell Us Your Plumbing Issue', description: 'Submit your issue online or by phone—leak, tap, blockage, and more.', icon: AdjustmentsHorizontalIcon },
    { step: '2', title: 'Select a Convenient Time', description: 'Choose a preferred time slot—same-day or emergency options available.', icon: ClockIcon },
    { step: '3', title: 'Plumber Arrives at Your Home', description: 'Verified expert brings required tools and genuine fittings.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Relax With Guaranteed Repairs', description: 'Transparent service, post-repair support, and satisfaction guaranteed.', icon: ShieldCheckIcon }
  ]

  const faqs = [
    { question: 'Is plumbing help available for apartments in Bangalore?', answer: 'Yes. We specialise in apartment and high-rise plumbing with building-specific know-how.' },
    { question: 'Do your plumbers handle bathroom renovation for traditional homes?', answer: 'Yes. Complete upgrades, modern fixtures, and space optimisation for older homes.' },
    { question: 'Can I schedule a plumbing inspection before moving into a flat?', answer: 'Yes. Pre-move inspections ensure leak-free, functional plumbing and peace of mind.' },
    { question: 'Do plumbers repair both PVC and metal systems?', answer: 'Yes—PVC, CPVC, GI, PEX, and copper piping with material-appropriate techniques.' },
    { question: 'What causes frequent drain blockages?', answer: 'Hair, soap residue, food particles, grease, and hard water deposits; we use high-pressure jetting.' },
    { question: 'Do I need to buy the parts?', answer: 'No. We inspect and supply genuine parts from trusted suppliers as needed.' },
    { question: 'Do your plumbers work on Sundays or public holidays?', answer: 'Yes. Service available 7 days a week, including weekends and holidays.' },
    { question: 'How do I hire a local plumber in Bangalore?', answer: 'Book via our website or call; we match you with a verified pro near your location.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Plumbing Repairs',
      'Leak Detection',
      'Drain Cleaning',
      'Bathroom & Kitchen Plumbing',
      'Water Pressure Optimization'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/plumber" />
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
                  <span className="text-sm font-semibold">Professional Plumbers Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  House Plumbing Repair
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Instant help for leaks, fittings, and clogs—by background-verified plumbing professionals.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Plumbing Repair</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Emergency Plumber Service</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/20">
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
                    {[WrenchIcon, WrenchScrewdriverIcon, BoltIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Plumbing</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our Plumbers?</h2>
              <p className="text-lg text-gray-600">Smart, reliable service with friendly support and quick fixes.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Plumbing Repair Services in Bangalore</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Fast, reliable solutions so your water flows without trouble.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((svc, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                  <p className="text-gray-700">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Most Common Plumbing Problems We Fix</h2>
              <p className="text-lg text-gray-600">Everyday issues we resolve across Bangalore homes and apartments.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 border border-gray-100">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {commonProblems.map((cp, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <ExclamationTriangleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {cp}
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Online Plumber Service</h2>
              <p className="text-lg text-gray-600">Simple 4-step process to get trusted help when you need it.</p>
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

        {/* Why Us vs Handymen */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Us Over Local Handymen?</h2>
                <p className="text-lg text-gray-600 mb-4">Avoid recurring problems and costly damage—choose trained, verified professionals.</p>
                <ul className="space-y-2">
                  {[
                    'Trained and background-verified plumbers',
                    'Right tools for advanced leak detection and pressure balancing',
                    'Repairs aligned with local building codes',
                    'Upfront pricing—no surprise charges',
                    'Genuine fittings and root-cause fixes'
                  ].map((b, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Don’t Let Plumbing Problems Slow You Down</h3>
                <p className="text-gray-700 mb-6">Fast, reliable, and affordable house plumbing repair tailored for Bangalore’s needs.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow">
                    Book Online Plumber Service
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                  <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Call +91 9972571005
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
              <p className="text-lg text-gray-600">Answers to common questions about plumbing services in Bangalore.</p>
            </div>
            <div className="max-w-4xl mx-auto divide-y divide-gray-200 bg-white rounded-2xl border border-gray-100">
              {faqs.map((f, idx) => (
                <div key={idx} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{f.question}</h3>
                  <p className="text-gray-700">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Expert services for modern Bangalore homes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'AC Repair & Service in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Instant AC installation, cooling solutions, and gas refilling.' },
                { title: 'Appliance Repair Services in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Same-day repair for washing machines, fridges, microwaves, and more.' },
                { title: 'Home Cleaning Services in Bangalore', href: '/cities/bangalore/home-deep-cleaning', description: 'Deep cleaning, kitchen degreasing, and bathroom sanitisation.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
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

        <Footer />
      </main>
    </>
  )
}
