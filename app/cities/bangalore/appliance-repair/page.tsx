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
      'Fix all home appliances in Bangalore. TV, AC, fridge, washing machine repair. Expert technicians, doorstep service.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/appliance-repair',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/appliance-repair'
  }
}

import FAQAccordion from '@/components/FAQAccordion'

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
    'Verified, Safety-Trained Technicians',
    'Support for All Appliance Models',
    'Upfront Transparent Price Estimates',
    'Post-Service Follow-Up Support',
    'Flexible Scheduling Options',
    'Doorstep Repairs Across Bangalore'
  ]

  const services = [
    {
      title: 'Refrigerator (Single, Double, Side-by-Side)',
      description:
        'We repair cooling, compressor, and defrost issues in LG, Samsung, Whirlpool, Godrej, and more.'
    },
    {
      title: 'Freezer / Deep Freezer',
      description:
        'We repair temperature, motor, and sealing issues in upright and chest freezers of major brands.'
    },
    {
      title: 'Microwave Oven (Solo, Grill, Convection)',
      description:
        'We fix magnetron, control panel, and door issues in IFB, LG, Samsung, and other models.'
    },
    {
      title: 'Dishwasher',
      description:
        'We resolve spray arm, drainage, and drying faults in Bosch, Siemens, Whirlpool, and similar dishwashers.'
    },
    {
      title: 'Washing Machine (Front Load / Top Load)',
      description:
        'We repair drum, motor, and control faults in IFB, Bosch, LG, and other top brands.'
    },
    {
      title: 'Air Conditioner (Split, Window, Cassette)',
      description:
        'We handle gas refills, compressor issues, and full servicing for major brands.'
    },
    {
      title: 'Ceiling Fan / Table Fan / Exhaust Fan',
      description:
        'We repair fan motors, capacitors, and speed problems for consistent airflow in all room types.'
    },
    {
      title: 'Water Heater / Geyser (Instant, Storage, Gas)',
      description:
        'We fix heating elements, thermostats, and pressure valve issues in Racold, Havells, and AO Smith geysers.'
    },
    {
      title: 'Television (LED, LCD, OLED, Smart TVs)',
      description:
        'We fix screen, sound, and connectivity issues across all TV types from top brands like Samsung, LG, Mi, and Sony.'
    },
    {
      title: 'Inverter & UPS',
      description:
        'We repair battery, circuit, and power issues in inverters and UPS for uninterrupted backup support.'
    },
    {
      title: 'Electric Chimney (Modular / Wall-Mount / Auto-Clean)',
      description:
        'We repair suction, motor, and light issues in Faber, Glen, Elica, and other kitchen chimney models.'
    }
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
    'Unusual noises or vibrations — Sounds like buzzing, clicking, or rattling usually indicate loose or damaged internal parts.',
    'Higher electricity bills — Appliances that are running inefficiently tend to consume more power without obvious signs.',
    'Longer operating times — If your washing machine, AC, or fridge takes longer to complete tasks, it likely needs attention.',
    'Overheating or burning smell — This could indicate electrical faults or clogged vents, which may pose fire risks if not addressed.',
    'Delayed response or unresponsive controls — Slow or unresponsive buttons and displays often signal internal component wear or malfunction.'
  ]

  const process = [
    { step: '1', title: 'Share Your Issue', description: 'Let us know which appliance needs repair and briefly describe the issue.', icon: PencilSquareIcon },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a time slot that fits your schedule, whether in the morning or evening.', icon: ClockIcon },
    { step: '3', title: 'Expert Technician Visit', description: 'Our trained technician will arrive on time, equipped with tools and genuine spare parts.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Quality Service and Support', description: 'Enjoy restored appliance performance and after-service customer support.', icon: ShieldCheckIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    {
      question: 'What makes your electrical appliance repair in Bangalore different?',
      answer:
        'Our multi-brand service expertise, genuine spare parts, and energy-efficient repairs make us a cost-effective and trustworthy option with warranty-backed service for modern Bangalore households.'
    },
    {
      question: 'Do you provide same-day appliance repair services?',
      answer:
        'Yes, we offer same-day repair service across Bangalore, depending on technician availability. Response time is typically 90 minutes in central zones and 2 hours in outer areas.'
    },
    {
      question: 'Which appliance brands do you service?',
      answer:
        'We handle appliances from major brands like LG, Samsung, Whirlpool, Bosch, Godrej, Haier, IFB, and more using expert multi-brand technical know-how. Call us to check support for your specific brand.'
    },
    {
      question: 'How do you handle broken appliance repair in Bangalore?',
      answer:
        'We begin with fast diagnostics to identify the core issue, then proceed with transparent pricing and on-the-spot repair using original spare parts.'
    },
    {
      question: 'Do you fix appliances making noise or overheating?',
      answer:
        'Yes. Our experts are trained to diagnose noise, vibration, and overheating problems and offer lasting solutions that restore performance.'
    },
    {
      question: 'Do you provide doorstep appliance repair in Bangalore?',
      answer:
        'Absolutely. EzyHelpers offers reliable doorstep repair services for all major appliances across Bangalore, ensuring convenient and professional fixes without you needing to step out.'
    },
    {
      question: 'Can I get a quote for appliance repair before booking?',
      answer:
        'Yes, we provide estimates based on the appliance issue. After a quick diagnosis, the technician will provide a transparent price quote before beginning the repair.'
    },
    {
      question: 'Do your technicians carry spare parts during the home visit?',
      answer:
        'Yes, our technicians usually carry common spare parts. If a rare part is required, we source it quickly and return promptly to complete the installation.'
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">Trusted Electrical Appliance Repair in Bangalore</h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Home appliance acting up? EzyHelpers offers fast and expert servicing for all major electrical appliances in Bangalore, including refrigerators, washing machines, ACs, and more.</p>

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
                    <span className="hidden sm:inline">Emergency Repair Service</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Electrical Appliance Repair in Bangalore?</h2>
              <p className="text-lg text-gray-600">We deliver fast and efficient doorstep appliance repair services, which is designed to meet the everyday challenges at home.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Electrical Appliance Repair Services Do We Offer in Bangalore?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">From kitchens to living rooms, we fix it all. We offer reliable and same-day repair services for every appliance in your home.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {services.map((svc, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                  <p className="text-gray-700">{svc.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Wait for a Breakdown? Know These 5 Early Appliance Warning Signs</h2>
              <p className="text-lg text-gray-600">At EzyHelpers, we recommend timely servicing to prevent costly breakdowns. Watch for these early signs to keep your appliances running smoothly.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Appliance Repair Services in Bangalore?</h2>
              <p className="text-lg text-gray-600">Enjoy a fast and stress-free booking process in just four simple steps:</p>
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

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Complete home solutions beyond appliance repairs&nbsp;</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { title: 'Carpentry Repairs in Bangalore', href: '/cities/bangalore/carpenters', description: 'We handle custom furniture fixes, door adjustments, and other woodwork repairs.' },
                { title: 'Gardener in Bangalore', href: '/cities/bangalore/gardener', description: 'Get seasonal plant care, lawn maintenance, and full garden setup services.' },
                { title: 'House Plumbing Repair in Bangalore', href: '/cities/bangalore/plumbers', description: 'We fix leaks, clogged drains, and faulty taps with expert plumbing support.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.title.includes('Carpentry') ? 'Learn About Carpentry Services' : card.title.includes('Gardener') ? 'Learn About Gardening Services' : 'Learn About Plumbing Services'}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Maintenance */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">The Importance of Preventive Appliance Maintenance in Bangalore</h3>
            </div>
            <div className="max-w-4xl mx-auto text-gray-700 space-y-4">
              <p>
                In Bangalore, issues like power fluctuations, dust buildup, and hard water cause ongoing stress on home appliances. Regular preventive maintenance helps catch electrical faults early, improves energy efficiency, and reduces the risk of sudden breakdowns.
              </p>
              <p>
                Our preventive servicing is affordable, dependable, and perfect for busy families and tenants. Scheduling preventive maintenance every 3 to 6 months can extend the lifespan of appliances and reduce electricity bills.
              </p>
              <p>
                EzyHelpers offers reliable, certified technicians and warranty-backed servicing to keep your appliances in top shape.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
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
