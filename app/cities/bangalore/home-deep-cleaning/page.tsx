import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import {
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  PhoneIcon,
  ArrowRightIcon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Deep Cleaning Services in Bangalore | Home Sanitize',
  description:
    'Deep cleaning services in Bangalore for full home hygiene. Kitchen, bathroom, sofa cleaning by trained professionals using safe products.',
  openGraph: {
    title: 'Deep Cleaning Services in Bangalore | Home Sanitize',
    description:
      'Professional home deep cleaning in Bangalore: living room, bedrooms, kitchen, bathrooms, balcony, and more with add-on sanitization.',
    url: 'https://ezyhelpers.com/cities/bangalore/home-deep-cleaning',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/home-deep-cleaning'
  }
}

export default function BangaloreHomeDeepCleaningPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Home Deep Cleaning', url: 'https://ezyhelpers.com/cities/bangalore/home-deep-cleaning' }
  ]

  const trustBadges = [
    'Background Verified Cleaners',
    'Same-Day Cleaning Available',
    'Flexible Scheduling for Busy Professionals',
    'Bangalore Local Cleaning Experts'
  ]

  const highlights = [
    { title: '1200+', subtitle: 'Homes cleaned' },
    { title: '7 Days', subtitle: 'Service Availability' },
    { title: '2-Hour', subtitle: 'Response Time' },
    { title: '100%', subtitle: 'Quality Assurance' }
  ]

  const whyChoose = [
    'Complete sanitization and disinfection',
    'Customized cleaning plans available',
    'Deep cleaning of every corner',
    'Coverage across all Bangalore zones',
    'Flexible scheduling for working families',
    'Child and pet-safe products'
  ]

  const services = [
    { title: 'Living Room Deep Clean', description: 'Deep clean sofas, floors, furniture, and fixtures for a fresh, dust-free environment.' },
    { title: 'Bedroom Cleaning', description: 'Floor mopping, fan and window cleaning, light fixtures, and wardrobe exterior cleaning.' },
    { title: 'Kitchen Deep Clean', description: 'Degrease tiles, stovetops, cabinets, and sinks for a hygienic, odor-free kitchen.' },
    { title: 'Complete Bathroom Cleaning', description: 'Scrub tiles, taps, toilets, and mirrors to remove stains and bacterial buildup.' },
    { title: 'Balcony and Terrace Cleaning', description: 'Clean railings, grills, cobwebs, and walls for tidy outdoor areas.' },
    { title: 'Study Room and Home Office', description: 'Dust desks, chairs, bookshelves, and electronics for a productive workspace.' },
    { title: 'Wardrobe and Storage Cleaning', description: 'Inside and outside cleaning of wardrobes and cabinets to remove dust and allergens.' },
    { title: 'Pooja Room Cleaning', description: 'Respectful cleaning of idols, shelves, and floors using gentle, non-abrasive products.' },
    { title: 'Utility and Service Areas', description: 'Deep clean laundry zones, washing machines, and sinks for a clutter-free space.' },
    { title: 'Post-Renovation or Move-In Cleaning', description: 'Remove cement, paint, and dust after renovation or before move-in.' },
    { title: 'Disinfection and Sanitization', description: 'Sanitize frequently touched surfaces using strong disinfectants.' }
  ]

  const addOns = [
    { title: 'Sofa, Mattress, Carpet & Curtain Care', description: 'Vacuuming and fabric-safe shampooing to remove dust, odours, and pet hair.' },
    { title: 'Window & Glass Panel Cleaning', description: 'Spotless cleaning of windows, grills, and glass partitions.' },
    { title: 'Electrical Appliance Surface Cleaning', description: 'Wipe and sanitise exteriors of fridges, microwaves, ovens, and more.' },
    { title: 'Light Fixtures & Chandeliers', description: 'Careful cleaning to restore brightness and remove dust.' },
    { title: 'Doors, Windows & Frame Cleaning', description: 'Deep wipe-down of panels, glass, and frames.' },
    { title: 'Cupboard & Storage Organization', description: 'Declutter and organise shelves, cabinets, or wardrobes.' },
    { title: 'High-Reach Area Cleaning', description: 'Dust removal from ceiling corners, fans, AC vents, and more.' },
    { title: 'Balcony Garden Care', description: 'Light cleaning and tidying of balcony garden areas.' },
    { title: 'Pest Control Solutions', description: 'Eco-friendly targeted pest treatments to keep your home bug-free.' },
    { title: 'Water Tank Cleaning', description: 'Complete cleaning of overhead and underground tanks.' }
  ]

  const process = [
    { step: '1', title: 'Share Your Cleaning Need', description: 'Tell us your requirements—full house or specific areas.', icon: ClipboardDocumentListIcon },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a suitable day and time, including evenings or weekends.', icon: ClockIcon },
    { step: '3', title: 'Expert Cleaner Visit', description: 'Verified cleaner arrives with eco-friendly products and pro tools.', icon: ShieldCheckIcon },
    { step: '4', title: 'Enjoy a Spotless Home', description: 'Relax with a fully cleaned, sanitised home—quality assured.', icon: SparklesIcon }
  ]

  const benefits = [
    'Say goodbye to dust mites, mold, and allergens',
    'Prevent bacteria in high-traffic zones like bathrooms and kitchens',
    'Maintain furniture, appliances, and floors for longer life',
    'Enjoy peace of mind with a fully sanitized, fresh-smelling home'
  ]

  const perfectFor = [
    'Families with kids or seniors',
    'Households recovering from illness',
    'Working couples without time to clean',
    'Residents near traffic zones or construction sites'
  ]

  const faqs = [
    { question: 'How often should I book home cleaning in Bangalore?', answer: 'Monthly for busy professionals; every 2 weeks for families with kids/allergy concerns; every 3–4 months for general upkeep.' },
    { question: 'Are your cleaning products safe for children and pets?', answer: 'Yes. We use eco-friendly, non-toxic products safe for kids, elderly, and pets.' },
    { question: 'Do you clean windows and balconies in Bangalore homes?', answer: 'Yes. We clean windows, glass panels, grills, and balcony spaces for spotless results.' },
    { question: 'Do you offer apartment deep cleaning services?', answer: 'Yes. We specialise in apartments, gated communities, and high-rises with compact equipment.' },
    { question: 'How long does a deep cleaning take?', answer: 'Typically 4–8 hours depending on home size and depth of cleaning.' },
    { question: 'What is the difference between regular and deep cleaning?', answer: 'Deep cleaning is more thorough—scrubs stains, disinfects surfaces, and targets hidden grime.' },
    { question: 'Is deep cleaning more expensive than regular cleaning?', answer: 'Yes, due to time, stronger tools, and detailed coverage for longer-lasting cleanliness.' },
    { question: 'Benefits of deep cleaning your house?', answer: 'Removes allergens, improves air quality, reduces health risks, and protects furniture/appliances.' },
    { question: 'Can I book deep cleaning just for one room?', answer: 'Yes. You can choose specific areas like kitchen, bathrooms, or balconies.' },
    { question: 'Do I need to be at home during the service?', answer: 'Not necessary. Many clients carry on with their day—our verified staff handles it professionally.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Home Deep Cleaning',
      'Sanitization and Disinfection',
      'Kitchen & Bathroom Deep Clean',
      'Sofa & Upholstery Cleaning'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/home-deep-cleaning" />
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
                  <span className="text-sm font-semibold">Professional Home Deep Cleaning in Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Professional Deep Clean Services
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Homes in Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  We eliminate dust, germs, and stains for a cleaner, healthier living environment.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Deep Cleaning Now</span>
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
                    {[HomeModernIcon, WrenchScrewdriverIcon, SparklesIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Deep Cleaning</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Deep Cleaning?</h2>
              <p className="text-lg text-gray-600">Reliable service, hygienic practices, and expert care—customised for modern homes.</p>
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

        {/* What We Include */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Does a Full Home Deep Cleaning Include?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose a full house cleaning or specific areas for a truly refreshed home.</p>
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

        {/* Add-On Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Add-On Services for Enhanced Hygiene</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Book individually or add to any deep cleaning package.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {addOns.map((svc, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                  <p className="text-gray-700">{svc.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Deep Cleaning</h2>
              <p className="text-lg text-gray-600">Simple, fast booking designed for busy Bangalore professionals.</p>
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

        {/* Why It Matters */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Deep Cleaning Matters in Bangalore</h2>
                <p className="text-lg text-gray-600 mb-4">Dust, monsoon humidity, and pollution build up fast—deep cleaning protects your family’s health.</p>
                <ul className="space-y-2">
                  {benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Perfect for:</h3>
                <ul className="space-y-2">
                  {perfectFor.map((p, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow">
                    Book Home Deep Cleaning
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Don’t Let Germs, Dust, or Stress Take Over</h2>
            <p className="text-lg text-gray-600 mb-6">Book trusted home cleaning in Bangalore now with EzyHelpers.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Deep Cleaning Now
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
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
              <p className="text-lg text-gray-600">Answers to common questions about home deep cleaning in Bangalore.</p>
            </div>
            <div className="max-w-4xl mx-auto divide-y divide-gray-200 bg-gray-50 rounded-2xl border border-gray-100">
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Trusted services designed for modern Bangalore homes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'House Painters in Bangalore', href: '/services/painters', description: 'Durable, weather-resistant paint finishes by trusted painters.' },
                { title: 'On-Demand Maid in Bangalore', href: '/services/maids', description: 'Trained maids for cleaning, cooking, and daily support.' },
                { title: 'Cook for Home in Bangalore', href: '/cities/bangalore/cooks', description: 'Experienced home cooks for daily meals or special diets.' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white border border-gray-100">
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
