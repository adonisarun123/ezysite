import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
    'Quick Fixes for Everyday Furniture Problems',
    'Affordable Rates with No Surprise Charges',
    'Safe, Verified Professionals',
    'Trusted Local Carpenters Near You',
    'Custom Built-Ins for Any Room',
    'Quality Materials Selection',
    'Professional Work Ethics'
  ]

  const services = [
    {
      title: 'Wooden Furniture Restoration',
      description:
        'Bring your old or damaged wooden furniture back to life. Our expert carpenters repair cracks, loose joints, and worn finishes with precision.'
    },
    {
      title: 'Custom Furniture Making for Compact Homes',
      description:
        'We design foldable tables, built-in seating, and compact cupboards perfectly customised for small urban apartments in Bangalore.'
    },
    {
      title: 'Modular Furniture Installation',
      description:
        'From modular kitchens to sliding wardrobes, our team ensures fast and precise installations with premium finishes and functional fittings.'
    },
    {
      title: 'Bed & Wardrobe Repairs',
      description:
        'Fix noisy bed frames, loose cupboard doors, broken handles, and stuck wardrobe drawers with durable parts and professional attention.'
    },
    {
      title: 'Drill & Wall Mount Services',
      description:
        'Install curtain rods, TV panels, floating shelves, and wall art accurately with professional drill and mounting tools.'
    },
    {
      title: 'Space-Saving Storage for Urban Living',
      description:
        'Maximise space with custom vertical racks, wall-mounted units, and smart hidden storage options designed for compact homes or PGs.'
    },
    {
      title: 'Office Furniture Setup (WFH Ready)',
      description:
        'Set up ergonomic desks, custom bookshelves, and work-from-home stations that match your comfort, productivity, and room layout.'
    },
    {
      title: 'Kitchen Shelf Fixing & Upgrades',
      description:
        'Upgrade your kitchen with pull-out drawers, modular spice racks, and organised shelving that suit Indian cooking needs.'
    },
    {
      title: 'Furniture Assembly Services',
      description:
        'Bought flat-pack furniture? Our experts assemble IKEA, Pepperfry, and Urban Ladder pieces efficiently with the right tools.'
    }
  ]

  const process = [
    { step: '1', title: 'Share Your Need', description: 'Tell us your furniture repair requirements: what needs fixing or custom making.' },
    { step: '2', title: 'Pick a Convenient Time', description: 'Choose a date and time that suits your busy schedule perfectly.' },
    { step: '3', title: 'Expert Carpenter Visits', description: 'Our skilled, verified furniture carpenter in Bangalore arrives with all necessary tools.' },
    { step: '4', title: 'Quality Service & Support', description: 'We ensure your satisfaction with follow-up support and quality guarantee.' }
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
    { question: 'What types of carpentry repair in Bangalore do you offer?', answer: 'We provide comprehensive carpentry repair in Bangalore, including wooden furniture restoration, modular furniture installation, custom furniture making, and space-saving solutions for apartments and homes.' },
    { question: 'Can you create custom furniture for small spaces?', answer: 'Absolutely! We specialise in custom furniture making with space-saving solutions and functional design perfect for compact homes and apartment optimisation.' },
    { question: 'Do you provide furniture for work-from-home setups?', answer: 'Yes! We create custom WFH furniture, storage solutions, and space-saving designs perfect for working professionals.' },
    { question: 'Do you offer modular furniture installation in Bangalore homes?', answer: 'Yes, we offer modular furniture installation in Bangalore, including modular kitchens, wardrobes, TV units, and office furniture. Our furniture carpenters are experienced in installing branded units with precision and care, ensuring a perfect fit for your space.' },
    { question: 'Can I book same-day carpenter services in Bangalore?', answer: 'Absolutely! For urgent needs, we offer same-day carpenter services in Bangalore. Our skilled carpenters arrive quickly, equipped with tools to handle most common repairs and installations on the spot.' },
    { question: 'Can I request custom furniture for small rooms or PGs?', answer: 'Definitely! We specialise in custom furniture making for small rooms, hostels, and PGs. From folding desks to compact wardrobes, our carpenters in Bangalore design space-saving furniture tailored to your needs.' },
    { question: 'Can you help with compact space furniture in Bangalore apartments?', answer: 'Absolutely! We specialise in space-saving solutions like foldable desks, vertical storage units, sliding wardrobes, and compact kitchen storage.' },
    { question: 'What types of wooden furniture can you repair in Bangalore?', answer: 'We repair all wooden furniture, including beds, tables, chairs, wardrobes, and cabinets. Our carpenters fix cracks, wobbly joints, broken panels, and even restore antique pieces.' },
    { question: 'Do you help with furniture shifting or dismantling during house moves?', answer: 'Yes, we offer dismantling and reassembly services for safe furniture relocation. Our carpenters ensure damage-free disassembly, smart packing guidance, and reinstallation at your new home.' }
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

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">Carpentry Repair in Bangalore</h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">Skilled carpenters in Bangalore for furniture repairs, modular fittings, and custom builds. Quick, professional, and quality work by EzyHelpers.</p>

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
                    <span className="hidden sm:inline">Call for Same-Day Service</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Carpentry Repair in Bangalore?</h2>
              <p className="text-lg text-gray-600">Get expert carpentry help in Bangalore for furniture repairs, modular installations, and custom woodwork tailored to your space.</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Does Our Professional Furniture Carpenter in Bangalore Offer?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Comprehensive carpenter services in Bangalore for all your custom furniture making and repair needs.</p>
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

        {/* How to Book */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Furniture Carpenter in Bangalore</h2>
              <p className="text-lg text-gray-600">Booking carpentry repair in Bangalore is easy and quick! Follow these 4 simple steps:</p>
            </div>
            <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((p) => (
                <div key={p.step} className="rounded-2xl p-6 bg-gray-50 border border-gray-100 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-white font-bold">{p.step}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-gray-700 text-sm">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Regular Carpentry Repairs Matter for Bangalore Homes</h2>
              <p className="text-lg text-gray-600">In fast-paced Bangalore homes, be it compact apartments in Whitefield or independent houses in Jayanagar, woodwork is more than just utility; it adds character, convenience, and comfort to everyday living.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>Bangalore&rsquo;s climate, with its mix of humidity, monsoon moisture, and dry summer heat, often causes wooden furniture and fixtures to swell, warp, or loosen over time. Doors may jam during rain, cabinets may develop creaky hinges, and wardrobes or lofts can gather dust, termites, or hidden damage. That&rsquo;s where EzyHelpers&apos; skilled carpenters step in.</p>
                <p>Our skilled carpenters don&rsquo;t just repair; they restore. Whether it&rsquo;s fixing a broken study table, reinforcing a sagging cot, repairing wall-mounted bookshelves, or resizing modular kitchen shutters, EzyHelpers ensures every nail, screw, and panel is fixed right, first time, every time.</p>
                <p>Living in a tech-savvy city like Bangalore means people expect smart, time-efficient service, and that&rsquo;s exactly what we deliver. With EzyHelpers, you can book a carpenter on-call for minor tasks like replacing handles or tightening joints, or schedule full home inspections for larger woodwork projects.</p>
              </div>
              <div className="mt-6">
                <div className="rounded-xl bg-primary-50 px-6 py-5 text-primary-900 flex items-start">
                  <HomeModernIcon className="h-6 w-6 mr-3 text-primary-600" />
                  <div>
                    <p className="font-semibold">Don&apos;t Let Furniture Problems Limit Your Space!</p>
                    <p>Get expert carpentry repairs and installations in Bangalore with EzyHelpers; fast, reliable, and built for your home.</p>
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
                <p className="text-gray-600 mb-4">And many more areas across Bangalore</p>
                <Link href="/hire-helper" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond carpentry repair in Bangalore for complete home care:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'On-Demand Helpers in Bangalore', href: '/cities/bangalore/on-demand-helper', description: 'Need quick help with daily tasks? Book reliable local helpers for apartment maintenance.', linkText: 'Learn about On-Demand Helpers' },
                { title: 'Electrician Services in Bangalore', href: '/cities/bangalore/electrician', description: 'Expert electricians for all your home wiring, appliance installation, and power solutions.', linkText: 'Learn about Electrician Services' },
                { title: 'Plumbing Services in Bangalore', href: '/cities/bangalore/plumber', description: 'Professional plumbers for all your apartment and home plumbing needs in Bangalore.', linkText: 'Learn about Plumbing Services' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
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
