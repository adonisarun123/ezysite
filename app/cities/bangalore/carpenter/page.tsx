import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  HomeModernIcon,
  ArrowRightIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Carpentry Repair in Bangalore | Furniture Fixing',
  description:
    'Book expert carpentry repair in Bangalore. Fix broken beds, chairs, cabinets & wooden items with skilled carpenters at home.',
  openGraph: {
    title: 'Carpentry Repair in Bangalore | Furniture Fixing',
    description:
      'Skilled carpenters in Bangalore for furniture repairs, modular fittings, and custom builds. Quick, professional, and quality work by EzyHelpers.',
    url: 'https://ezyhelpers.com/cities/bangalore/carpenter',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/carpenter'
  }
}

export default function BangaloreCarpenterPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Carpentry Repair', url: 'https://ezyhelpers.com/cities/bangalore/carpenter' }
  ]

  const trustBadges = [
    'Fast Same-Day Repairs',
    'Custom Furniture Solutions',
    'Neat Workmanship Guaranteed',
    'Timely Project Completion'
  ]

  const highlights = [
    { title: 'Same-Day', subtitle: 'Service Available' },
    { title: '24/7', subtitle: 'Customer Support' },
    { title: '100%', subtitle: 'Background-Verified' }
  ]

  const whyChoose = [
    'Quick fixes for everyday furniture problems',
    'Affordable rates with no surprise charges',
    'Safe, verified professionals',
    'Trusted local carpenters near you',
    'Custom built-ins for any room',
    'Quality materials selection',
    'Professional work ethics'
  ]

  const services = [
    {
      title: 'Wooden Furniture Restoration',
      description:
        'Repair cracks, loose joints, and worn finishes with precision to bring old or damaged furniture back to life.'
    },
    {
      title: 'Custom Furniture Making for Compact Homes',
      description:
        'Foldable tables, built-in seating, and compact cupboards tailored for small urban apartments in Bangalore.'
    },
    {
      title: 'Modular Furniture Installation',
      description:
        'Fast, precise installation of modular kitchens, sliding wardrobes, and more with premium finishes.'
    },
    {
      title: 'Bed & Wardrobe Repairs',
      description:
        'Fix noisy bed frames, loose cupboard doors, broken handles, and stuck drawers with durable parts.'
    },
    {
      title: 'Drill & Wall Mount Services',
      description:
        'Install curtain rods, TV panels, floating shelves, and wall art accurately with professional tools.'
    },
    {
      title: 'Space-Saving Storage for Urban Living',
      description:
        'Maximise space with vertical racks, wall-mounted units, and hidden storage for compact homes or PGs.'
    },
    {
      title: 'Office Furniture Setup (WFH Ready)',
      description:
        'Ergonomic desks, custom bookshelves, and work-from-home stations for comfort and productivity.'
    },
    {
      title: 'Kitchen Shelf Fixing & Upgrades',
      description:
        'Pull-out drawers, modular spice racks, and organised shelving that suit Indian cooking needs.'
    },
    {
      title: 'Furniture Assembly Services',
      description:
        'Expert assembly of IKEA, Pepperfry, and Urban Ladder pieces with the right tools.'
    }
  ]

  const process = [
    { step: '1', title: 'Share Your Need', description: 'Tell us your furniture repair or custom build requirements.' },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a date and time that suits your schedule.' },
    { step: '3', title: 'Expert Carpenter Visits', description: 'Skilled, verified carpenter arrives with all necessary tools.' },
    { step: '4', title: 'Quality Service & Support', description: 'We ensure satisfaction with follow-up support and quality guarantee.' }
  ]

  const bangaloreAreas = [
    'Electronic City',
    'Whitefield',
    'Marathahalli',
    'Koramangala',
    'Indiranagar',
    'Jayanagar',
    'BTM Layout',
    'HSR Layout',
    'Sarjapur Road',
    'Bannerghatta Road',
    'Yelahanka',
    'Hebbal',
    'Rajajinagar',
    'Malleshwaram',
    'Basavanagudi'
  ]

  const faqs = [
    {
      question: 'What types of carpentry repair in Bangalore do you offer?',
      answer:
        'Wooden furniture restoration, modular furniture installation, custom furniture making, and space-saving solutions for apartments and homes.'
    },
    {
      question: 'Can you create custom furniture for small spaces?',
      answer:
        'Absolutely. We specialise in space-saving custom furniture perfect for compact homes and apartment optimisation.'
    },
    {
      question: 'Do you provide furniture for work-from-home setups?',
      answer:
        'Yes. We create custom WFH furniture, storage solutions, and space-saving designs for professionals.'
    },
    {
      question: 'Do you offer modular furniture installation in Bangalore homes?',
      answer:
        'Yes. We install modular kitchens, wardrobes, TV units, and office furniture with precision and care.'
    },
    {
      question: 'Can I book same-day carpenter services in Bangalore?',
      answer:
        'Absolutely. For urgent needs, we offer same-day carpenter services across Bangalore.'
    },
    {
      question: 'Can I request custom furniture for small rooms or PGs?',
      answer:
        'Yes. From folding desks to compact wardrobes, we design space-saving furniture tailored to your needs.'
    },
    {
      question: 'Can you help with compact space furniture in Bangalore apartments?',
      answer:
        'We specialise in foldable desks, vertical storage units, sliding wardrobes, and compact kitchen storage.'
    },
    {
      question: 'What types of wooden furniture can you repair in Bangalore?',
      answer:
        'Beds, tables, chairs, wardrobes, cabinets—fixing cracks, wobbly joints, broken panels, and more.'
    },
    {
      question: 'Do you help with furniture shifting or dismantling during house moves?',
      answer:
        'Yes. We dismantle and reassemble furniture for safe relocation, with smart packing guidance.'
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
      'Carpentry Repair',
      'Furniture Restoration',
      'Modular Furniture Installation',
      'Custom Furniture Making',
      'Furniture Assembly'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/carpenter" />
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
                  <span className="text-sm font-semibold">Skilled Carpenters Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Carpentry Repair
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Expert furniture repairs, modular fittings, and custom woodwork. Quick, professional, and high-quality work by EzyHelpers.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Carpenter Now</span>
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
                    {[WrenchScrewdriverIcon, ClipboardDocumentCheckIcon, HomeModernIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Carpentry</div>
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
              <p className="text-lg text-gray-600">Expert carpentry help for repairs, installations, and custom woodwork tailored to your space.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Carpentry Services in Bangalore</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive carpentry services for custom furniture making and repair needs.</p>
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

        {/* Importance Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Carpentry Repairs Matter</h2>
              <p className="text-lg text-gray-600">Bangalore’s climate and urban living demand proactive upkeep to preserve beauty and function.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed">
                In fast-paced Bangalore homes—from compact apartments in Whitefield to independent houses in Jayanagar—woodwork adds character, convenience, and
                comfort to everyday living. Humidity and seasonal changes can cause swelling, warping, and loosening over time. Our carpenters don’t just repair;
                they restore: fixing broken tables, reinforcing cots, repairing bookshelves, and resizing modular shutters with precision. Book on-call for quick
                fixes or schedule a full inspection for larger projects.
              </p>
              <div className="mt-6">
                <div className="rounded-xl bg-primary-50 px-6 py-5 text-primary-900 flex items-start">
                  <HomeModernIcon className="h-6 w-6 mr-3 text-primary-600" />
                  <div>
                    <p className="font-semibold">Don't Let Furniture Problems Limit Your Space!</p>
                    <p>Get fast, reliable carpentry repairs and installations built for your home.</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                  Book a Carpenter Now
                  <ArrowRightIcon className="h-5 w-5 ml-2" />
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted carpentry repair services across all Bangalore neighborhoods.</p>
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

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond carpentry repair for complete home care.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'On-Demand Helpers in Bangalore', href: '/services/on-demand', description: 'Quick help with daily tasks—reliable local helpers for apartment maintenance.' },
                { title: 'Electrician Services in Bangalore', href: '/services/electricians', description: 'Wiring, appliance installation, and power solutions by experts.' },
                { title: 'Plumbing Services in Bangalore', href: '/services/plumbers', description: 'Leaks fixed, drains unclogged, taps repaired—professional support.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
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

        <Footer />
      </main>
    </>
  )
}
