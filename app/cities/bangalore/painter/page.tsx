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
  PaintBrushIcon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'House Painting in Bangalore | Interior & Exterior',
  description:
    'Interior and exterior painting in Bangalore by verified painters. Stylish colours, expert finishes, and fast service for homes, flats, and villas.',
  openGraph: {
    title: 'House Painting in Bangalore | Interior & Exterior',
    description:
      'Professional interior & exterior painting in Bangalore: premium paints, dust-free process, expert finishes, free color consultation.',
    url: 'https://ezyhelpers.com/cities/bangalore/painter',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/painter'
  }
}

export default function BangalorePainterPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Painter', url: 'https://ezyhelpers.com/cities/bangalore/painter' }
  ]

  const trustBadges = [
    'Free Color Consultation',
    'Premium Paints Only',
    'Verified Painters'
  ]

  const highlights = [
    { title: '100%', subtitle: 'Dust-Free Service' },
    { title: '50+', subtitle: 'Color Options' },
    { title: 'Zero', subtitle: 'Mess Guarantee' },
    { title: 'On-Time', subtitle: 'Delivery' }
  ]

  const whyChoose = [
    'Premium paints for lasting, vibrant results',
    'Dust-free methods—great for occupied homes',
    'Weather-resistant coatings for exterior protection',
    'Complete surface preparation and finishing',
    'Post-painting cleanup and maintenance support',
    'Transparent pricing with zero hidden charges'
  ]

  const interiorServices = [
    { title: 'Living Room & Bedroom', desc: 'Modern colour painting to enhance ambience and brighten your space.' },
    { title: "Kids' Room Creative Themes", desc: 'Fun wall designs featuring cartoons, shapes, and creative themes.' },
    { title: 'Kitchen & Bathroom Painting', desc: "Moisture-resistant, easy-clean paints ideal for Bangalore's humidity." },
    { title: 'Textured & Accent Walls', desc: 'Designer textures, patterns, and creative styles for standout walls.' },
    { title: 'Doors and Furniture', desc: 'Smooth paint or polish for doors, windows, and cupboards.' }
  ]

  const exteriorServices = [
    { title: 'Exterior Home Painting', desc: 'Neat, weatherproof finishes for buildings and independent homes.' },
    { title: 'Waterproof Exterior Coatings', desc: 'Protect outer walls from rain, dampness, and peeling.' },
    { title: 'Boundary Wall & Gate Painting', desc: 'Strong colours that resist dust and weather damage.' },
    { title: 'Terrace & Balcony Waterproofing', desc: 'Keep balconies dry in rain and cooler in summer.' },
    { title: 'Railings & Metal Grills', desc: 'Anti-rust paints to keep metal parts safe and shiny.' }
  ]

  const prepWork = [
    'Crack filling and wall plastering for smooth, long-lasting finish',
    'Putty and primer application for better grip and vibrant colour',
    'Anti-damp treatment for monsoon-prone homes',
    'Old paint removal by scraping and sanding'
  ]

  const process = [
    { step: '1', title: 'Tell Us What You Need', description: 'Share painting goals, home size, and colour preferences.', icon: ClipboardDocumentListIcon },
    { step: '2', title: 'Free Visit and Quote', description: 'Get colour suggestions and a detailed, transparent quote.', icon: WrenchScrewdriverIcon },
    { step: '3', title: 'Pick a Convenient Time', description: 'Choose flexible slots—weekends, evenings, or staged work.', icon: ClockIcon },
    { step: '4', title: 'Enjoy Hassle-Free Service', description: 'Dust-free painting and thorough cleanup post work.', icon: ShieldCheckIcon }
  ]

  const bestTimes = {
    interior: 'Interior painting can be done year-round in Bangalore, but avoid very humid or rainy days. Dry, mild weather helps paint dry faster and prevents peeling. October to March is ideal for indoor painting.',
    exterior: 'For exterior painting, the dry season—typically November to early May—is best. Avoid monsoons to allow proper curing and longer-lasting results on outer walls exposed to sun and rain.'
  }

  const faqs = [
    { question: 'How long does interior painting take for a 2BHK apartment in Bangalore?', answer: 'About 3–4 days with a dust-free, room-by-room process; drying can be longer during monsoon.' },
    { question: "Can you paint during Bangalore's monsoon season?", answer: 'Yes. We use quick-drying paints and plan around weather to avoid delays.' },
    { question: 'How do you protect furniture during painting?', answer: 'We cover furniture, floors, and appliances; we work room-by-room to keep your home liveable.' },
    { question: 'Can I get help choosing the right colours?', answer: 'Yes—free colour consultation tailored to your lighting, mood, and décor.' },
    { question: 'What kind of paint do you use?', answer: 'High-quality paints from brands like Asian Paints, Nerolac, and Dulux—budget to luxury finishes.' },
    { question: 'Cost difference between exterior vs interior?', answer: 'Depends on area, wall condition, paint type, and design. Exterior typically costs more due to weatherproofing.' },
    { question: 'Do you paint occupied homes without disruption?', answer: 'Yes. Dust-free methods, planned scheduling, and daily cleanups to minimise disruption.' },
    { question: 'Can I paint just one room or wall?', answer: 'Of course—single walls or partial jobs welcome with the same quality.' },
    { question: 'Do you provide polishing for wood or metal?', answer: 'Yes—doors, windows, grills, and furniture with enamel, PU, or wood finishes.' },
    { question: 'Urgent or weekend painting?', answer: 'Flexible scheduling including urgent bookings, weekends, and night shifts if required.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Interior Painting',
      'Exterior Painting',
      'Waterproofing',
      'Texture & Accent Walls',
      'Wood & Metal Polishing'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/painter" />
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
                  <span className="text-sm font-semibold">Professional House Painters in Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Interior & Exterior Painting
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Verified painters. Premium paints. Expert finishes. Fast, dust-free service.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {trustBadges.map((tb, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {tb}</div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Painting Service Now</span>
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
                    {[PaintBrushIcon, HomeModernIcon, SparklesIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Painting</div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Painting?</h2>
              <p className="text-lg text-gray-600">Trusted experts who transform your space while you live comfortably at home.</p>
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

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom space-y-12">
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Interior Painting Services</h2>
                <p className="text-lg text-gray-600">Makeovers tailored for Bangalore homes and apartments.</p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {interiorServices.map((svc, idx) => (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                    <p className="text-gray-700">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Exterior Painting Services</h2>
                <p className="text-lg text-gray-600">Weatherproof finishes designed for Bangalore’s climate.</p>
              </div>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {exteriorServices.map((svc, idx) => (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{svc.title}</h3>
                    <p className="text-gray-700">{svc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Repair & Surface Preparation</h2>
                <p className="text-lg text-gray-600">Essential prep to ensure long-lasting paintwork.</p>
              </div>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <ul className="space-y-2">
                  {prepWork.map((p, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Painting in Bangalore</h2>
              <p className="text-lg text-gray-600">Simple process designed for Bangalore's busy lifestyle.</p>
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

        {/* Timing Advice */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Best Times for Interior & Exterior Painting</h2>
                <p className="text-gray-700 mb-4">Choosing the right time improves durability and finish quality.</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interior</h3>
                <p className="text-gray-700 mb-4">{bestTimes.interior}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exterior</h3>
                <p className="text-gray-700">{bestTimes.exterior}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Refresh Your Bangalore Home with Expert Painting</h3>
                <p className="text-gray-700 mb-6">Spotless finishes, weatherproof coatings, and on-time delivery. Book now for a vibrant makeover.</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow">
                    Book Painting Service Now
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
              <p className="text-lg text-gray-600">Answers to common questions about house painting in Bangalore.</p>
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

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Related Services in Bangalore</h2>
              <p className="text-lg text-gray-600">One-stop home care services for busy Bangalore households.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Electrical Appliance Repair in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Quick repairs for appliances to restore comfort and safety.' },
                { title: 'House Plumbing Repair in Bangalore', href: '/services/plumbers', description: 'Fix leaks, clogs, and fittings with expert plumbing help.' },
                { title: 'Deep Clean Services in Bangalore', href: '/cities/bangalore/home-deep-cleaning', description: 'Thorough home cleaning for hygiene and freshness.' }
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
