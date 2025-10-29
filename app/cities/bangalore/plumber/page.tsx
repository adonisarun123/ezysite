import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
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
      'Fix leaking taps, blocked drains, or bathroom issues with verified plumbers. Book same-day house plumbing repair in Bangalore with on-time professionals.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/plumber',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/plumber'
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
    { title: 'Flexible', subtitle: 'Time Slots' }
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
    { title: 'Expert Pipe Leakage Detection & Repair', desc: 'We detect and repair hidden or visible leaks to prevent water damage and mold buildup.' },
    { title: 'Faucet, Shower & Tap Repairs', desc: 'We repair dripping taps and broken showers to restore water flow and stop wastage.' },
    { title: 'Toilet Repair & Sanitation', desc: 'Our plumbers fix flush tanks and blockages to keep your bathroom clean and functional.' },
    { title: 'Water Pressure Optimization', desc: 'We fix low water pressure in high-rises to ensure strong, steady flow in all taps.' },
    { title: 'Bathroom Fitting Installation & Repairs', desc: 'We install or repair taps, wash basins, and fittings to improve bathroom usage and hygiene.' },
    { title: 'Clogged Drain & Sink Cleaning', desc: 'We remove grease, hair, and debris to unclog bathroom or kitchen drains and sinks.' },
    { title: 'Pipe Replacement', desc: 'We replace damaged pipes with durable ones during home renovations or major plumbing upgrades.' },
    { title: 'Emergency Plumbing Repairs (24/7 Available)', desc: 'We handle burst pipes and blockages any time with our 24/7 emergency plumber service.' },
    { title: 'Kitchen Sink & Drain Repairs', desc: 'We fix sink leaks, clogs, and faulty faucets to maintain a clean and efficient kitchen.' },
    { title: 'Bathroom Appliance Plumbing', desc: 'We install geysers, jets, and hand showers with proper fittings for safe water use.' },
    { title: 'Grouting & Sealant Application', desc: 'We reseal bathroom edges to stop water seepage, mold, and structural damage effectively.' },
    { title: 'Full Bathroom Plumbing Renovation', desc: 'We upgrade outdated plumbing systems with new fittings and better layouts for improved efficiency.' },
    { title: 'Hard Water Treatment & Softener Installation', desc: 'We install softeners to protect pipes and appliances from mineral buildup in hard water areas.' },
    { title: 'New Pipe Installation Services', desc: 'We handle new pipe setups during home builds, extensions, or kitchen-bathroom remodelling work.' }
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
    { step: '1', title: 'Tell Us Your Plumbing Issue', description: 'Submit your issue online or by phone. Whether it&rsquo;s a pipe leak, dripping tap, or blocked drain, we&rsquo;ve got it covered.', icon: AdjustmentsHorizontalIcon },
    { step: '2', title: 'Select a Convenient Time', description: 'Choose your preferred time slot. Same-day or emergency options are available.', icon: ClockIcon },
    { step: '3', title: 'Plumber Arrives at Your Home', description: 'Our verified expert brings all the required tools and fittings.', icon: WrenchScrewdriverIcon },
    { step: '4', title: 'Relax With Guaranteed Repairs', description: 'Enjoy transparent service, post-repair support, and complete satisfaction.', icon: ShieldCheckIcon }
  ]

  const faqs = [
    { question: 'Is plumbing help available for apartments in Bangalore?', answer: 'Yes, our plumber services in Bangalore specialise in apartment complexes and high-rise buildings. We understand space constraints, neighbour considerations, and building-specific plumbing systems.' },
    { question: 'Do your plumbers handle bathroom renovation for traditional homes?', answer: 'Yes, our bathroom renovation support includes complete upgrades for older homes, modern fixture installation, and space optimisation that is perfect for traditional houses.' },
    { question: 'Can I schedule a plumbing inspection before moving into a flat?', answer: 'Yes, our pre-move plumbing inspections ensure that your new flat has leak-free and functional plumbing. It&rsquo;s a smart step to avoid post-move hassles or unexpected repair costs.' },
    { question: 'Do plumbers repair both PVC and metal plumbing systems?', answer: 'Yes. Our trained plumbers handle all types of plumbing systems, including PVC, CPVC, GI, PEX, and copper piping, using tools and techniques suited for each material.' },
    { question: 'What causes frequent drain blockages in homes?', answer: 'Drain blockages in homes are often caused by hair accumulation, soap residue, food particles, and hard water mineral deposits. Kitchen drains may also clog due to oil and grease buildup. Our drain cleaning service uses high-pressure water jetting to effectively remove all obstructions.' },
    { question: 'Do I need to buy the parts, or will your plumber bring them?', answer: 'No need to worry. Our plumbers come fully prepared. When you book our house plumbing repair service in Bangalore, they will first inspect the issue and recommend the necessary parts. If replacements are needed, they&rsquo;ll either carry them or source genuine parts from trusted local suppliers. You won&rsquo;t have to visit a store or guess what&rsquo;s needed; we handle everything transparently and efficiently.' },
    { question: 'Do your plumbers work on Sundays or public holidays?', answer: 'Yes, absolutely. Our plumber services in Bangalore are available seven days a week, including Sundays and public holidays. We understand that plumbing emergencies don&rsquo;t follow a calendar. Our verified plumbers are always ready to provide prompt, doorstep plumbing support.' },
    { question: 'How do I hire a local plumber in Bangalore?', answer: 'With EzyHelpers, finding a reliable plumber nearby is no trouble at all. Just visit our website or call our customer support to book a certified plumber near you. We&rsquo;ll match you with a background-verified and experienced plumbing professional based on your location and service need. You can also schedule services for weekends or emergency slots. No need to search endlessly or deal with unreliable handymen.' }
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
                  Professional House Plumbing Repair in Bangalore
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Get instant help for all plumbing problems in Bangalore, from leaking taps and bathroom fittings to clogged drains, handled by skilled professionals committed to quality and prompt service.
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

        {/* Why Choose Our House Plumbing Repair in Bangalore? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Our House Plumbing Repair in Bangalore?</h2>
              <p className="text-lg text-gray-600">Our Bangalore plumbers deliver smart, reliable service with quick fixes, friendly support, and solutions that suit homes, apartments, and daily water needs perfectly.</p>
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

        {/* What Plumbing Repair Services Do We Offer in Bangalore? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Plumbing Repair Services Do We Offer in Bangalore?</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">From leaky faucets to clogged drains, our expert plumbers provide fast and reliable solutions to make sure your water flows without any trouble.</p>
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

        {/* Most Common Plumbing Problems in Bangalore Homes We Fix */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Most Common Plumbing Problems in Bangalore Homes We Fix</h2>
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

        {/* How to Book Our Online Plumber Service in Bangalore */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Online Plumber Service in Bangalore</h2>
              <p className="text-lg text-gray-600">Simple 4-step process designed to get trusted help when you need it</p>
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

        {/* Why Choose Us Over Local Handymen? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Us Over Local Handymen?</h2>
              <p className="text-lg text-gray-700 mb-4">In Bangalore, many homeowners often turn to local handymen for quick plumbing fixes. While this might seem convenient, it often leads to recurring problems, temporary solutions, or even costly damage over time. At EzyHelpers, we offer a smarter, safer, and more reliable service built for modern housing needs.</p>
              <p className="text-lg text-gray-700 mb-6">Unlike local handymen, our plumbers are trained, background-verified, and equipped with the right tools to handle everything from advanced leak detection to pressure balancing in high-rise apartments. We follow industry-standard repair practices and ensure that all fixes comply with local building codes, which many untrained handymen may overlook.</p>
              <p className="text-lg text-gray-700 mb-8">Our service is completely transparent. You&rsquo;ll receive upfront pricing with no last-minute surprises or vague charges. Plus, our team arrives with genuine fittings and the expertise to address root causes rather than just patching symptoms. Choosing our certified plumbing experts means less stress, better results, and peace of mind. Don&rsquo;t compromise your home&rsquo;s safety or comfort. Trust EzyHelpers&rsquo; professional plumbing service in Bangalore that is built for quality, not shortcuts.</p>
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
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Simplifying daily life with expert home services across Bangalore</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'AC Repair & Service in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Instant AC installation, cooling solutions, and gas refilling.', cta: 'Explore AC Repair Services' },
                { title: 'Appliance Repair Services in Bangalore', href: '/cities/bangalore/appliance-repair', description: 'Get your washing machine, fridge, or microwave repaired on the same day.', cta: 'Explore Appliance Repairs' },
                { title: 'Home Cleaning Services in Bangalore', href: '/cities/bangalore/home-deep-cleaning', description: 'Book deep cleaning, kitchen degreasing, or bathroom sanitisation.', cta: 'Explore Home Cleaning' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.cta}
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
