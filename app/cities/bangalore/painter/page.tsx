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
      'Interior and exterior painting in Bangalore by verified painters. Stylish colours, expert finishes, and fast service for homes, flats, and villas.',
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
    { title: 'Zero', subtitle: 'Mess Guarantee' }
  ]

  const whyChoose = [
    'Premium paints for lasting, vibrant results',
    'Dust-free methods, perfect for occupied homes',
    'Weather-resistant coatings for exterior protection',
    'Complete surface preparation and finishing',
    'Post-painting cleanup and maintenance support',
    'Transparent pricing with zero hidden charges'
  ]

  const interiorServices = [
    { title: 'Living Room & Bedroom', desc: 'Modern colour painting that enhances ambience, matches décor, and brightens up your personal space.' },
    { title: "Kids' Room Creative Themes", desc: "Creative wall designs featuring cartoons, educational shapes, and fun themes your kids will love." },
    { title: 'Kitchen & Bathroom Painting', desc: 'Moisture-resistant paint that’s easy to clean; great for kitchens and bathrooms in Bangalore’s humid climate.' },
    { title: 'Textured and Stylish Accent Walls', desc: 'Make one wall stand out with designer paint styles like textures, patterns, and creative designs.' },
    { title: 'Painting for Doors and Furniture', desc: 'We refresh your wooden doors, windows, and cupboards with smooth paint or polish for a brand-new look.' }
  ]

  const exteriorServices = [
    { title: 'Exterior Painting for Homes', desc: 'We paint entire buildings or individual homes with neat, weatherproof finishes that look clean and fresh.' },
    { title: 'Waterproof Exterior Coating', desc: 'Special coatings that protect your outer walls from heavy rain, dampness, and peeling during the monsoon.' },
    { title: 'Boundary Wall and Gate Painting', desc: 'We paint compound walls and gates with strong colours that resist dust and weather damage.' },
    { title: 'Terraces and Balconies Waterproofing', desc: 'Coatings that keep your balconies dry during rain and cooler during Bangalore’s summer heat.' },
    { title: 'Railings and Metal Grills Painting', desc: 'We paint gates, grills, and metal parts with anti-rust paint that keeps them safe and shiny.' }
  ]

  const prepWork = [
    'Crack Filling and Wall Plastering: Ensures smooth, long-lasting finish',
    'Putty and Primer Application: For better grip and vibrant color output',
    'Anti-Damp Treatment: Protects walls from moisture in monsoon-prone homes',
    'Old Paint Removal: Scraping and sanding to improve paint grip'
  ]

  const process = [
    { step: '1', title: 'Tell Us What You Need', description: 'Share your painting goals, home size, and colour preferences.', icon: ClipboardDocumentListIcon },
    { step: '2', title: 'Get a Free Visit and Quote', description: 'We offer colour suggestions and detailed pricing with no hidden fees.', icon: WrenchScrewdriverIcon },
    { step: '3', title: 'Pick a Time That Fits', description: 'Choose flexible painting slots: weekends, evenings, or in stages if needed.', icon: ClockIcon },
    { step: '4', title: 'Enjoy Hassle-Free Service', description: 'Trained painters use dust-free methods and clean up after finishing work.', icon: ShieldCheckIcon }
  ]

  const bestTimes = {
    interior: 'In Bangalore’s moderate climate, interior painting can be done year-round, but it’s best to avoid very humid or rainy days. Dry, mild weather helps paint dry faster and prevents peeling or uneven finishes. October to March is ideal for indoor painting, as the air is cooler and less humid.',
    exterior: 'For exterior painting, Bangalore’s dry season, typically between November and early May, is the best time. Avoid painting during the monsoons, as high humidity or sudden rain can delay work and affect the quality of the finish. Proper weather conditions allow the paint to cure well and last longer, especially on outer walls exposed to sunlight and rain.'
  }

  const faqs = [
    { question: 'How long does interior painting take for a 2BHK apartment in Bangalore?', answer: 'For a standard 2BHK apartment, interior painting usually takes around 3 to 4 days. We follow a dust-free process and paint room by room, so you can stay comfortably at home while work is ongoing. If it’s monsoon season, drying time may be slightly longer depending on humidity.' },
    { question: "Can you paint during Bangalore's monsoon season?", answer: 'Yes. We use quick-drying paints and plan around Bangalore’s unpredictable weather to avoid any delays or damage. As long as there\'s no heavy or prolonged rainfall, we can still complete both interior and exterior jobs with proper care.' },
    { question: 'How do you protect furniture during painting?', answer: 'Before starting, we fully cover all furniture, flooring, and appliances with plastic sheets and protective drop cloths. We follow a room-by-room process, keeping your home tidy and liveable even during the painting.' },
    { question: 'Can I get help choosing the right colours?', answer: "Definitely. We provide free colour consultation to help you pick shades that match your room size, natural lighting, mood, and décor. Whether you're looking for calm neutrals or vibrant accents, we guide you through the latest colour trends and paint finishes." },
    { question: 'What kind of paint do you use?', answer: 'We use high-quality paints from trusted brands like Asian Paints, Nerolac, and Dulux. You can choose from budget-friendly options, standard emulsions, or luxury finishes depending on your needs and preferences.' },
    { question: 'How much does it cost to paint exterior vs interior?', answer: 'The cost depends on the total area, wall condition, type of paint, and design choices. Exterior painting generally costs more due to weatherproofing needs, scaffolding, and surface preparation. Interior painting varies based on whether you choose basic colours or designer finishes. We provide a detailed quote after a free site visit.' },
    { question: 'Do you offer painting for occupied homes without disruption?', answer: 'Yes, we specialise in painting homes where families continue to live. Our dust-free methods, planned scheduling, and daily cleanups ensure your routine stays undisturbed.' },
    { question: 'Can I paint just one room or wall?', answer: 'Of course. Whether it’s a single accent wall, bedroom refresh, or kitchen repaint, we offer partial painting services with the same care and quality as full-home projects.' },
    { question: 'Do you provide paint polishing for wood or metal?', answer: 'Yes, we offer painting and polishing services for doors, windows, grills, and furniture. Options include enamel, PU, and wood finishes, depending on your requirements.' },
    { question: 'What if I need painting urgently or over a weekend?', answer: 'We offer flexible scheduling, including urgent bookings, weekends, and even night shifts if required. Just let us know your timeline, and we’ll plan accordingly.' }
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
                  Professional Interior and Exterior Painting in Bangalore
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Hire trusted painters in Bangalore for clean, reliable painting services using premium paints, expert finishes, and fast completion for every home style.
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
                  <Link href="/hire-helper" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <span className="hidden sm:inline">Get Free Color Consultation</span>
                    <span className="sm:hidden">Free Consultation</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Interior and Exterior Painting in Bangalore?</h2>
              <p className="text-lg text-gray-600">Trust our expert house painters in Bangalore to transform your space while you continue living comfortably at home.</p>
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
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">What Painting Services Do You Offer in Bangalore?</h2>
              <p className="text-lg text-gray-600">From interior makeovers to weatherproof exterior finishes, explore our full range of professional painting services tailored for Bangalore homes and apartments.</p>
            </div>

            <div>
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Interior Painting Services for Homes in Bangalore</h3>
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
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Exterior Painting Services in Bangalore</h3>
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
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Repair & Surface Preparation Work</h3>
                <p className="text-lg text-gray-600">Essential Preparation for Long-Lasting Paintwork</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Interior and Exterior Painting in Bangalore?</h2>
              <p className="text-lg text-gray-600">Simple Process Designed for Bangalore's Busy Lifestyle</p>
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

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Related Services in Bangalore</h2>
              <p className="text-lg text-gray-600">One-stop home care services for busy Bangalore households.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Electrical Appliance Repair in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Quick repairs for all electrical appliances to restore comfort and safety.' },
                { title: 'House Plumbing Repair in Bangalore', href: '/cities/bangalore/plumber', description: 'Fix leaks, clogs, and fittings with expert plumbing help anytime.' },
                { title: 'Deep Clean Services in Bangalore', href: '/cities/bangalore/home-deep-cleaning', description: 'Thorough home cleaning for hygiene, freshness, and healthy indoor living.' }
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

        {/* Timing Advice */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Best Times for Interior and Exterior Painting</h2>
                <p className="text-gray-700 mb-4">Choosing the right time for painting can make a big difference in how long your walls stay beautiful and damage-free.</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interior</h3>
                <p className="text-gray-700 mb-4">{bestTimes.interior}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Exterior</h3>
                <p className="text-gray-700">{bestTimes.exterior}</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">Refresh Your Bangalore Home with Expert Painting</h3>
                <p className="text-gray-700 mb-6">Get expert interior and exterior painting in Bangalore with EzyHelpers. Spotless finishes, weatherproof coatings, and on-time delivery. Book now for a vibrant home makeover!</p>
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
