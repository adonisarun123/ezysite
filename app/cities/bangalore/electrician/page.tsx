import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
    'Licensed Electricians, BESCOM-Compliant Work',
    'Same-Day Repairs & New Installations',
    'Energy-Saving Solutions for Lower Bills',
    'Safe Wiring for Homes & Apartments',
    'Fast Fixes for Common Power Issues',
    'Service Available All Over Bangalore'
  ]

  const services = [
    { title: 'Electrical Wiring & Rewiring', description: "Old or damaged wires? Our electricians handle complete rewiring with safety-grade materials." },
    { title: 'Decorative & Functional Lighting', description: 'From ambient LED installations to festive lighting for events and homes.' },
    { title: 'Inverter & UPS Installation', description: "Reliable inverter setups for homes and apartments to tackle Bangalore\'s outages." },
    { title: 'Switch, Socket & Board Repairs', description: 'Fix burnt sockets, loose switches, or tripping circuits quickly and safely.' },
    { title: 'Smart Home Installations', description: 'We install smart lighting, home automation devices, and digital control systems.' },
    { title: 'Electrical Safety Compliance', description: 'Electrical safety inspections and earthing checks for new homes and safety approval.' },
    { title: 'EV Charging Point Installation', description: 'Electric vehicle charging stations for environmentally conscious Bangaloreans in apartments and independent homes.' },
    { title: 'Circuit Breaker Repairs & Upgrades', description: 'Resolve frequent tripping and install MCB/ELCB with safety certifications.' }
  ]

  const preventive = [
    'Checking wiring, switches, and circuit breakers for wear and tear',
    'Testing the inverter and UPS to ensure a reliable backup',
    'Inspecting loose wires and repairing minor faults before they become major issues',
    'Replacing damaged switchboards, plug points, and MCBs for better safety',
    'Suggesting energy-efficient lighting upgrades to save on electricity bills',
    'Verifying wiring health in older homes and suggesting rewiring if needed'
  ]

  const smartUpgrades = [
    'Wi-Fi controlled lights and fans',
    'Smart doorbell and CCTV wiring',
    'IoT device-compatible power points',
    'Hidden wiring and modular switch upgrades'
  ]

  const process = [
    { step: '1', title: 'Share Your Electrical Issue', description: 'Tell us your issue: repairs, installations, or electrical maintenance needs.', icon: PencilSquareIcon },
    { step: '2', title: 'Schedule a Convenient Time', description: 'Pick a same-day or scheduled visit that suits your availability.', icon: ClockIcon },
    { step: '3', title: 'Certified Technician Visit', description: 'Our licensed electricians arrive fully equipped for fast, safe electrical service.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Quality Assurance & Support', description: 'Enjoy reliable service, follow-ups, and emergency help whenever you need it.', icon: ShieldCheckIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    {
      question: "Can electricians handle apartment complex electrical work?",
      answer:
        "Yes, our electricians in Bangalore are familiar with apartment electrical systems, building management coordination, and residential complex electrical protocols."
    },
    {
      question: "Do electricians install EV charging points?",
      answer:
        "Yes. We install EV charging stations, provide power upgrades, and ensure EV-ready setups for eco-conscious Bangalore residents."
    },
    {
      question: "Can electricians upgrade old apartment wiring?",
      answer:
        "Yes, we provide complete electrical rewiring, safety upgrades, and modern electrical system installation for older Bangalore apartments."
    },
    {
      question: "Do electricians work around busy professional schedules?",
      answer:
        "Yes, we offer flexible timing, including weekends, evening visits, and low-disruption electrical services for working families."
    },
    {
      question: "Do electricians handle home office electrical setups?",
      answer:
        "Yes, electricians can install dedicated circuits, extra plug points, and safely set up electrical connections for computers, Wi-Fi, and other work-from-home devices."
    },
    {
      question: "Do electricians do wiring?",
      answer:
        "Yes, electricians handle all types of wiring tasks, like new installations, rewiring, and repairs for homes, offices, appliances, and smart devices to ensure safe electrical connections."
    },
    {
      question: "What is a professional electrician?",
      answer:
        "A professional electrician is a trained expert who installs, repairs, and maintains electrical systems safely and efficiently, following safety standards and using the right tools and techniques."
    },
    {
      question: "What is the cost of an electrician in Bangalore?",
      answer:
        "The cost depends on the type of service, job complexity, materials required, and time taken. Contact us for a free estimate."
    },
    {
      question: "How do I know if my house needs electrical rewiring?",
      answer:
        "If you notice flickering lights, frequent trips, burning smells, or outdated wires, your home may need rewiring. A licensed electrician can inspect and advise you."
    },
    {
      question: "What are the signs of an electrical problem at home?",
      answer:
        "Common signs include sparks, warm switchboards, flickering lights, buzzing sounds, or burning smells. These should be inspected immediately."
    }
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight text-white drop-shadow-lg">Home Electrical Repair Services in Bangalore</h1>
                <p className="text-lg lg:text-xl text-white/95 mb-2 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-semibold">Trusted Electricians for Every Home</p>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Upgrading switches or fixing faulty wiring? EzyHelpers offers reliable, safe, and certified electrical repair and installation services in Bangalore.</p>

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
                    <span className="hidden sm:inline">Emergency Electrical Service</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our Home Electrical Repair Services in Bangalore?</h2>
              <p className="text-lg text-gray-600">Bangalore homes deal with power cuts, old wiring, and overload from smart devices. EzyHelpers makes it easy and safe with:&nbsp;</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What do home electrical repair services in Bangalore include?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Professional electrical installation and maintenance solutions for every home.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Preventive Electrical Maintenance in Bangalore For Your Homes</h2>
              <p className="text-lg text-gray-600">Keep your home safe from electrical issues with regular safety checks and expert guidance. Our services include</p>
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
            <p className="text-center text-gray-600 mt-6">Stay safe and avoid sudden electrical problems with timely inspections by our trusted electricians in Bangalore.</p>
          </div>
        </section>

        {/* Smart Upgrades */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Smart Home Electrical Upgrades for Bangalore Residents</h2>
              <p className="text-lg text-gray-600">Bring your home into the future with modern tech installations:</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Home Electrical Repair Services in Bangalore?</h2>
              <p className="text-lg text-gray-600">Simple 4-step process for professional electrical solutions:</p>
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
              <p className="text-lg text-gray-600">Trusted electrical repair services across all Bangalore neighborhoods</p>
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
                <p className="text-gray-600 mb-4">And many more areas across Bangalore</p>
                <Link href="/hire-helper" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800">
                  Check Service in Your Area
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
              <p className="text-lg text-gray-600">Complete home solutions beyond electrical maintenance:</p>
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
                    {card.title.includes('Appliance') ? 'Explore Appliance Repair Services' : card.title.includes('House Cleaning') ? 'Explore House Cleaning Services' : 'Explore Plumbing Services'}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Don&apos;t Let Electrical Issues Disrupt Your Home</h2>
            <p className="text-lg text-gray-600 mb-6">Whether it&rsquo;s a flickering tube light or a full rewiring job, trust EzyHelpers&rsquo; home electrical repair services in Bangalore for quality, safety, and promptness.</p>
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

        {/* Why Local Expertise */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Local Electrical Expertise Matters in Bangalore</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>When you need electrical maintenance in Bangalore, choosing local electricians who understand the city&rsquo;s unique challenges makes all the difference. Our team is familiar with Bangalore&rsquo;s power grid patterns and area-specific electrical issues that affect both long-time residents and newcomers to the Garden City.</p>
                <p>From frequent power cuts in Electronic City&rsquo;s tech parks to old wiring challenges in heritage areas like Basavanagudi, our emergency electrician team has seen it all. We understand that Bangalore&rsquo;s tech professionals need reliable power backup for home offices, while families in apartment complexes require consistent and safe electrical systems.</p>
                <p>Trust our emergency electrical service for immediate support, or schedule regular maintenance to prevent problems before they start. With our local expertise and focus on safety, your home stays powered, protected, and perfectly connected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
