import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  CpuChipIcon,
  PencilSquareIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Electrical Appliance Repair in Bangalore | TV, AC, Fridge Fix',
  description:
    'Fix all home appliances in Bangalore. TV, AC, fridge, washing machine repair. Expert technicians, doorstep service.',
  openGraph: {
    title: 'Electrical Appliance Repair in Bangalore | TV, AC, Fridge Fix',
    description:
      'Fast, expert servicing for refrigerators, washing machines, ACs, TVs and more. Same-day repairs by certified technicians across Bangalore.',
    url: 'https://ezyhelpers.com/cities/bangalore/appliance-repair',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/appliance-repair'
  }
}

export default function BangaloreApplianceRepairPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Appliance Repair', url: 'https://ezyhelpers.com/cities/bangalore/appliance-repair' }
  ]

  const trustBadges = [
    'Same-Day Repairs Available',
    'Appliance Installation and Repair',
    'Genuine Spare Parts',
    'Multi-Brand Service Expertise',
    'Emergency Appliance Repair',
    'Certified Appliance Technicians'
  ]

  const highlights = [
    { title: '100% Satisfaction', subtitle: 'Guaranteed' },
    { title: '7 Days', subtitle: 'Availability' },
    { title: 'Expert', subtitle: 'Technicians On Call' }
  ]

  const whyChoose = [
    'Verified, safety-trained technicians',
    'Support for all appliance models',
    'Upfront transparent price estimates',
    'Post-service follow-up support',
    'Flexible scheduling options',
    'Doorstep repairs across Bangalore'
  ]

  const services = [
    'Refrigerator (Single, Double, Side-by-Side): cooling, compressor, defrost issues',
    'Freezer / Deep Freezer: temperature, motor, sealing issues',
    'Microwave Oven (Solo, Grill, Convection): magnetron, panel, door issues',
    'Dishwasher: spray arm, drainage, drying faults',
    'Washing Machine (Front/Top Load): drum, motor, control faults',
    'Air Conditioner (Split/Window/Cassette): gas refill, compressor, full service',
    'Ceiling/Table/Exhaust Fan: motor, capacitor, speed issues',
    'Water Heater / Geyser (Instant/Storage/Gas): element, thermostat, pressure valve',
    'Television (LED/LCD/OLED/Smart): screen, sound, connectivity issues',
    'Inverter & UPS: battery, circuit, power issues',
    'Electric Chimney (Modular/Wall/Auto-Clean): suction, motor, lighting issues'
  ]

  const otherAppliances = [
    'Water Purifier / RO System',
    'Air Fryer',
    'OTG (Oven Toaster Grill)',
    'Induction Cooktop',
    'Toaster / Sandwich Maker',
    'Iron / Steam Iron',
    'Mixer Grinder',
    'Food Processor',
    'Coffee Maker',
    'Voltage Stabilizer',
    'Battery Charger'
  ]

  const earlyWarnings = [
    'Unusual noises or vibrations: buzzing/clicking indicates loose or damaged parts',
    'Higher electricity bills: inefficiency increases power draw',
    'Longer operating times: cycles taking longer than normal',
    'Overheating or burning smell: electrical faults or clogged vents',
    'Delayed response or unresponsive controls: buttons/displays wearing out'
  ]

  const process = [
    { step: '1', title: 'Share Your Issue', description: 'Tell us which appliance needs repair and describe the problem.', icon: PencilSquareIcon },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a time slot that fits your schedule—morning or evening.', icon: ClockIcon },
    { step: '3', title: 'Expert Technician Visit', description: 'Certified technician arrives with tools and genuine spare parts.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Quality Service & Support', description: 'Enjoy restored performance and after-service support.', icon: ShieldCheckIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'What makes your electrical appliance repair different?', answer: 'Multi-brand expertise, genuine spare parts, and energy-efficient repairs with warranty-backed service.' },
    { question: 'Do you provide same-day appliance repair?', answer: 'Yes, same-day service across Bangalore depending on availability. Typical response: 90 minutes in central zones, ~2 hours in outer areas.' },
    { question: 'Which appliance brands do you service?', answer: 'LG, Samsung, Whirlpool, Bosch, Godrej, Haier, IFB, Sony, Mi, and more.' },
    { question: 'How do you handle broken appliance repair?', answer: 'Fast diagnostics, transparent pricing, and on-the-spot repair using original spare parts.' },
    { question: 'Do you fix noise or overheating issues?', answer: 'Yes. We diagnose vibration/overheating problems and offer lasting solutions.' },
    { question: 'Do you provide doorstep appliance repair?', answer: 'Absolutely. Reliable doorstep service across Bangalore for all major appliances.' },
    { question: 'Can I get a quote before booking?', answer: 'Yes. After quick diagnosis, we provide a transparent price estimate before repairs.' },
    { question: 'Do technicians carry spare parts during the visit?', answer: 'They carry common parts; rare items are sourced quickly and installed promptly.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Appliance Repair',
      'Refrigerator Repair',
      'Washing Machine Repair',
      'AC Repair and Service',
      'TV Repair',
      'Microwave Repair',
      'Chimney Repair'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/appliance-repair" />
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
                  <span className="text-sm font-semibold">Trusted Appliance Technicians Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Trusted Electrical Appliance Repair
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Fast, expert servicing for refrigerators, washing machines, ACs, TVs and more—right at your doorstep.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Appliance Repair</span>
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
                    {[WrenchScrewdriverIcon, CpuChipIcon, ShieldCheckIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Repair</div>
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
              <p className="text-lg text-gray-600">Fast, efficient doorstep repairs designed for everyday home challenges.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Electrical Appliance Repair Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From kitchens to living rooms, we fix it all—reliable, same-day service for every major home appliance.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {services.map((item, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.split(':')[0]}</h3>
                  <p className="text-gray-700">{item.split(':').slice(1).join(':').trim()}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">Other Electrical Appliances</h3>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <ul className="grid sm:grid-cols-2 gap-3">
                  {otherAppliances.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Early Warning Signs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">5 Early Appliance Warning Signs</h2>
              <p className="text-lg text-gray-600">Prevent costly breakdowns with timely servicing—watch for these signs.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {earlyWarnings.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <BoltIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Appliance Repair</h2>
              <p className="text-lg text-gray-600">A fast and stress-free booking process in four steps.</p>
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

        {/* FAQs */}
        <section className="section-padding bg-white">
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

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Complete home solutions beyond appliance repairs.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Carpentry Repairs in Bangalore', href: '/services/carpenters', description: 'Furniture fixes, door adjustments, and custom woodwork.' },
                { title: 'Gardener in Bangalore', href: '/services/gardener', description: 'Seasonal plant care, lawn maintenance, and full garden setups.' },
                { title: 'House Plumbing Repair in Bangalore', href: '/services/plumbers', description: 'Leaks fixed, drains unclogged, taps repaired by experts.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    Learn More
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Need Quick, Reliable Appliance Repair?</h2>
            <p className="text-lg text-gray-600 mb-6">Book a certified technician now and get your appliance working like new.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Appliance Repair
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call +91 9972571005
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
