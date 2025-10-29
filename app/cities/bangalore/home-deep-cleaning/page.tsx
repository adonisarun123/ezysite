import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
    'Deep cleaning services in Bangalore for full home hygiene. Includes kitchen, bathroom, and sofa cleaning by trained professionals with safe products.',
  openGraph: {
    title: 'Deep Cleaning Services in Bangalore | Home Sanitize',
    description:
      'Deep cleaning services in Bangalore for full home hygiene. Includes kitchen, bathroom, and sofa cleaning by trained professionals with safe products.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/home-deep-cleaning',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/home-deep-cleaning'
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
    { step: '1', title: 'Share Your Cleaning Need', description: 'Tell us your cleaning requirements. Whether it’s a full house cleaning or specific areas.', icon: ClipboardDocumentListIcon },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a suitable day and time, including evenings or weekends, that fits your busy schedule.', icon: ClockIcon },
    { step: '3', title: 'Expert Cleaner Visit', description: 'Our verified cleaner arrives on time with eco-friendly products and professional tools to do a thorough job.', icon: ShieldCheckIcon },
    { step: '4', title: 'Enjoy a Spotless Home', description: 'Relax and enjoy your fully cleaned, sanitised home backed by guaranteed results and ongoing support.', icon: SparklesIcon }
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
    { question: 'How often should I book home cleaning in Bangalore?', answer: 'It depends on your home and lifestyle. For working professionals with less time for regular cleaning, monthly deep cleaning is ideal. Families with kids or allergy concerns may benefit from services every two weeks. For general upkeep, a thorough cleaning every 3 to 4 months helps maintain hygiene and freshness.' },
    { question: 'Are your cleaning products safe for children and pets?', answer: 'Yes, we use eco-friendly and non-toxic cleaning products that are completely safe for households with kids, elderly members, and pets. Our goal is to ensure deep cleanliness without compromising your family’s safety or indoor air quality.' },
    { question: 'Do you clean windows and balconies in Bangalore homes?', answer: 'Yes, we clean windows, glass panels, grills, and balcony spaces. Bangalore’s dust and pollution can make these areas look dull. Our service brings back shine and cleanliness so your windows are spotless and balconies are inviting again.' },
    { question: 'Do you offer apartment deep cleaning services?', answer: 'Yes, we specialise in deep cleaning services for apartments, gated communities, and high-rise buildings in Bangalore. Our team uses compact equipment suited for apartment layouts and ensures every corner is cleaned, including balconies and shared areas.' },
    { question: 'How long does a deep cleaning take?', answer: 'Deep cleaning typically takes 4 to 8 hours, depending on your home’s size and the depth of cleaning required. If your home hasn’t been cleaned in a while, or if it\'s a post-renovation service, it may take a bit longer for the best results.' },
    { question: 'What is the difference between regular house cleaning and deep cleaning?', answer: 'Regular house cleaning typically involves basic upkeep like dusting, sweeping, and wiping surfaces. Deep cleaning, on the other hand, reaches under furniture, scrubs stubborn stains, disinfects surfaces, and targets hidden dust and grime. It’s a more thorough, detailed, and hygienic cleaning solution.' },
    { question: 'Is deep cleaning more expensive than regular cleaning?', answer: 'Yes, deep cleaning usually costs more than regular cleaning because it takes more time, involves stronger tools and products, and covers more areas in detail. It’s designed to deliver long-lasting cleanliness and better hygiene.' },
    { question: 'What are the benefits of deep cleaning your house?', answer: 'Deep cleaning removes layers of dust, allergens, and bacteria that regular cleaning misses. It improves air quality, reduces health risks, and makes your home feel fresher. It also helps protect furniture and appliances, extending their lifespan with proper care.' },
    { question: 'Can I book deep cleaning just for one room or area?', answer: 'Yes, you can choose to clean specific areas like only the kitchen, bathrooms, or balconies. We offer flexible plans based on your needs.' },
    { question: 'Do I need to be at home during the deep cleaning service?', answer: 'Not necessarily. Many of our clients go about their day while we handle the cleaning professionally and securely. Our background-verified staff ensures secure and professional service, whether you\'re present or not.' }
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
                  Professional Deep Clean Services for Homes in Bangalore
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Experience professional home cleaning in Bangalore. We eliminate dust, germs, and stains to give your family a cleaner, healthier, and more peaceful living environment.
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
                  <Link href="/hire-helper" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Emergency Cleaning Service
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Deep Cleaning Services for Homes in Bangalore?</h2>
              <p className="text-lg text-gray-600">Reliable service, hygienic practices, and expert care, perfectly customised for modern homes.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {[
                  'Complete Sanitization and Disinfection',
                  'Customized Cleaning Plans Available',
                  'Deep Cleaning of Every Corner',
                  'Coverage Across All Bangalore Zones',
                  'Flexible Scheduling for Working Families',
                  'Child and Pet-Safe Products'
                ].map((item, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Does a Full Home Deep Cleaning Service in Bangalore Include?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our deep clean services go beyond dusting. Choose a full house cleaning or specific areas for reliable home cleaning in Bangalore and a truly refreshed living space.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { title: 'Living Room Deep Clean', description: 'We deep clean sofas, floors, furniture, and fixtures for a fresh, dust-free environment.' },
                { title: 'Bedroom Cleaning', description: 'Includes floor mopping, fan and window cleaning, light fixture, and wardrobe exterior cleaning.' },
                { title: 'Kitchen Deep Clean', description: 'We degrease tiles, stovetops, cabinets, and sinks to ensure a hygienic, odor-free kitchen.' },
                { title: 'Complete Bathroom Cleaning', description: 'We scrub tiles, taps, toilets, and mirrors to effectively remove stains and bacterial buildup.' },
                { title: 'Balcony and Terrace Cleaning', description: 'We clean railings, grills, cobwebs, and walls for tidy outdoor relaxation areas.' },
                { title: 'Study Room and Home Office', description: 'Dusting desks, chairs, bookshelves, and electronics for a clean and productive workspace.' },
                { title: 'Wardrobe and Storage Cleaning', description: 'Our home cleaners clean inside and outside of wardrobes and cabinets to remove dust and allergens.' },
                { title: 'Pooja Room Cleaning', description: 'Respectful cleaning of idols, shelves, and floors using gentle, non-abrasive products.' },
                { title: 'Utility and Service Areas', description: 'Deep cleaning laundry zones, washing machines, and sinks for a clutter-free, functional space.' },
                { title: 'Post-Renovation or Move-In Cleaning', description: 'Scrubs away cement, paint, and dust after renovation or before you shift to a new home.' },
                { title: 'Disinfection and Sanitization', description: 'We clean and sanitize frequently touched surfaces using strong disinfectants for a germ-free home.' }
              ].map((svc, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Add-On Services for a Complete and Enhanced Home Hygiene</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Enhance your cleaning package with optional add-ons tailored for Bangalore homes. These services can be booked individually or added to any deep cleaning package for a customised clean.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {[
                { title: 'Sofa, Mattress, Carpet and Curtain Care', description: 'Removes dust, odours, and pet hair using vacuuming and fabric-safe shampooing techniques.' },
                { title: 'Window and Glass Panel Cleaning', description: 'Spotless cleaning of windows, grills, and glass partitions for clear, shiny surfaces.' },
                { title: 'Electrical Appliance Surface Cleaning', description: 'Wipe and sanitise exteriors of fridges, microwaves, ovens, washing machines, and other home appliances.' },
                { title: 'Light Fixtures and Chandeliers', description: 'Carefully cleaned to restore brightness and remove dust from delicate fixtures.' },
                { title: 'Doors, Windows and Frame Cleaning', description: 'Deep wipe-down of panels, glass, and frames for a polished, dust-free finish.' },
                { title: 'Cupboard and Storage Organization', description: 'Declutter and organise shelves, cabinets, or wardrobes with systematic space optimisation.' },
                { title: 'High-Reach Area Cleaning', description: 'Dust removal from ceiling corners, fans, AC vents, and other elevated surfaces.' },
                { title: 'Balcony Garden Care', description: 'Light cleaning and tidying of balcony garden areas, including potted plants and planters.' },
                { title: 'Pest Control Solutions', description: 'Targeted pest treatments using eco-friendly sprays to keep your home bug-free.' },
                { title: 'Water Tank Cleaning', description: 'Complete cleaning of overhead and underground tanks to ensure safe and hygienic water storage.' }
              ].map((svc, idx) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Deep Cleaning Services for Home in Bangalore?</h2>
              <p className="text-lg text-gray-600">Simple, fast booking process designed for busy Bangalore professionals.</p>
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
                <p className="text-lg text-gray-600 mb-4">In a city like Bangalore, where dust from construction, monsoon humidity, and pollution build up fast, regular deep cleaning isn’t optional; it’s essential. Our service goes beyond appearance, it protects your family’s health.</p>
                <ul className="space-y-2">
                  {[
                    'Say goodbye to dust mites, mold, and allergens',
                    'Prevent bacteria in high-traffic zones like bathrooms and kitchens',
                    'Maintain furniture, appliances, and floors for longer life',
                    'Enjoy peace of mind with a fully sanitized, fresh-smelling home.'
                  ].map((b, idx) => (
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
                  {[
                    'Families with kids or seniors',
                    'Households recovering from illness',
                    'Working couples without time to clean',
                    'Residents of apartments near traffic zones or construction sites'
                  ].map((p, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Don’t Let Germs, Dust, or Stress Take Over Your Life</h2>
            <p className="text-lg text-gray-600 mb-6">Book trusted home cleaning in Bangalore now with EzyHelpers. Enjoy sparkling results, hygienic surfaces, and lasting peace of mind every single time.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Home Deep Cleaning
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Call Now: +91 9972571005
              </Link>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Browse our full range of trusted services designed for modern Bangalore homes.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'House Painters in Bangalore', href: '/cities/bangalore/painter', description: 'Trusted painters for homes using durable, weather-resistant paint finishes.', linkText: 'Learn About House Painting Services' },
                { title: 'On-Demand Maid in Bangalore', href: '/cities/bangalore/part-time-maid', description: 'Hire trained maids for cleaning, cooking, or daily household support anytime needed.', linkText: 'Learn About Our Maid Services' },
                { title: 'Cook for Home in Bangalore', href: '/cities/bangalore/cooks', description: 'Experienced home cooks for daily meals, special occasions, or dietary preferences.', linkText: 'Learn About Home Cook Services' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.linkText}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
