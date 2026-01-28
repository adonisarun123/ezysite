import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
  PhoneIcon,
  CheckCircleIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  UserGroupIcon,
  ClockIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  CloudIcon,
  BeakerIcon,
  ArchiveBoxIcon,
  ArrowDownCircleIcon,
  Square2StackIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Plumbing Repair in Bareilly – Trusted Local Plumbers',
  description: 'Get plumbing repair in Bareilly for leaks, pipe fittings, tap fixes, and clogged drains. Quick and professional service for your home needs.',
  openGraph: {
    title: 'Plumbing Repair in Bareilly – Trusted Local Plumbers',
    description: 'Get plumbing repair in Bareilly for leaks, pipe fittings, tap fixes, and clogged drains. Quick and professional service for your home needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/plumber',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/plumber'
  }
}

export default function BareillyPlumber() {
  const badges = [
    '✓ Verified Plumbers',
    '✓ Same-Day Repairs Available',
    '✓ Quality Fittings',
    '✓ Transparent & Fair Pricing',
  ]

  const whyChoose = [
    {
      title: 'Skilled Local Plumbers',
      description: 'Our plumbers are skilled and familiar with common local plumbing issues.',
      icon: UserGroupIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Fast Same-Day Service',
      description: 'We provide quick repairs and try to finish most jobs on the same day.',
      icon: ClockIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Transparent Pricing Always',
      description: 'No hidden charges — you only pay for work and parts you approve.',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Easy Home Repairs',
      description: 'From small tap fixes to major pipe or drainage issues, they handle everything smoothly.',
      icon: HomeIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ]

  const services = [
    { title: 'Pipe Leakage & Blockage Repairs', desc: 'Fix dripping pipes, hidden leaks, and blockages damaging walls and flooring efficiently.', icon: WrenchScrewdriverIcon },
    { title: 'Bathroom Fitting & Repairs', desc: 'Repair taps, faucets, showers, and flush systems for smooth bathroom functionality.', icon: SparklesIcon },
    { title: 'Toilet Repairs & Maintenance', desc: 'Resolve toilet blockages, slow flushing, and water leakage issues professionally at home.', icon: WrenchScrewdriverIcon },
    { title: 'Water Tank Cleaning', desc: 'Clean overhead and underground water tanks to maintain safe and hygienic water.', icon: SparklesIcon },
    { title: 'Grouting & Sealant Services', desc: 'Seal tiles, sinks, and bathrooms to prevent water seepage and mold growth.', icon: Square2StackIcon },
    { title: 'Drainage Solutions', desc: "Clear blocked drains, repair sewer lines, and prevent waterlogging or bad odors.", icon: ArrowDownCircleIcon },
    { title: 'Water Storage Tank Installation', desc: 'Install overhead tanks, sumps, and storage systems to meet Bareilly’s water needs.', icon: ArchiveBoxIcon },
    { title: 'Hard Water Treatment', desc: 'Install water softeners and filters to protect pipes, taps, and home appliances.', icon: BeakerIcon },
    { title: 'Bore-Well & Hand Pump Repairs', desc: 'Repair bore-wells and hand pumps commonly used for household water supply efficiently.', icon: LifebuoyIcon },
    { title: 'Monsoon Drainage Checks', desc: 'Prepare homes for heavy rains by cleaning gutters and waterproofing critical areas.', icon: CloudIcon },
    { title: 'Roof Leakage Repairs', desc: 'Fix roof leaks during monsoon to prevent water damage and home structural issues.', icon: HomeIcon }
  ]

  const issueList = [
    'Bathroom taps, showers, and basins repaired quickly',
    'Drain cleaning and pipe repairs for safety',
    'Toilet repairs and full sanitary system fixes',
    'Detect and repair hidden leaks',
    'Seal tiles and prevent water seepage',
    'Repair burst pipes and clear monsoon blocks',
    'Fix old pipes and fittings in older homes',
    'Clean overhead and underground water tanks',
    'Fix dripping taps and install new faucets',
    'Handle all toilet and sanitary repairs',
    'Repair bore-wells and hand pumps',
    'Install new water storage tanks safely',
    'Install hard water treatment systems',
    'Clear drains and prevent waterlogging',
    'Fix roof leaks before monsoon',
    'Upgrade plumbing in old Bareilly homes',
  ]

  const faqs: FAQItem[] = [
    { question: 'Can I get same-day plumbing repair in Bareilly?', answer: 'Yes. We offer same-day plumbing repair in Bareilly. Our trained plumbers come quickly, fix leaks, blockages, bathroom fitting issues, and drainage problems using quality parts and professional tools.' },
    { question: 'Do professional plumbers in Bareilly handle pipe leakage repairs?', answer: 'Yes. Our plumbers fix all types of pipe leakages, including dripping pipes, hidden leaks, and seasonal blocks. They repair the damage properly to protect your walls and floors from water issues.' },
    { question: 'Do professional plumbers in Bareilly work on old homes?', answer: 'Absolutely. Our plumbers specialise in old Bareilly homes. They repair old fixtures, upgrade plumbing systems, and fix pipework that has not been maintained for years.' },
    { question: 'Can EzyHelpers’ plumbers in Bareilly handle waterlogging issues?', answer: 'Yes. We handle waterlogging by clearing drains, cleaning sewer lines, and fixing drainage problems. This prevents water buildup, bad smells, and blockages around your home.' },
    { question: 'Why hire a professional plumber in Bareilly?', answer: 'A professional plumber ensures safe repairs, accurate diagnosis, and long-lasting solutions. They understand local water quality, drainage patterns, and common issues. They also use quality parts to prevent repeated problems.' },
    { question: 'Do EzyHelpers plumbers offer same-day plumbing repairs in Bareilly?', answer: 'Yes. We offer fast and same-day plumbing repairs in Bareilly. Our verified plumbers solve pipe leaks, tap issues, drainage problems, and bathroom repairs—often within 1–2 hours.' },
    { question: 'What kinds of pipe issues do plumbers fix?', answer: 'Plumbers fix leaking pipes, burst pipes, hidden leaks, seasonal blockages, and more. Our team checks every connection properly to prevent long-term damage and ensure smooth water flow.' },
    { question: 'Can plumbers repair bathroom fittings in Bareilly?', answer: 'Yes. We repair taps, showers, faucets, basins, and flush systems. Our plumbers use durable and branded parts so your fittings work smoothly without repeated issues.' },
    { question: 'Do your plumbers address hard water problems?', answer: 'Yes. We install water softeners and other solutions to reduce hard water damage. This helps protect your plumbing system and increase the life of taps and fittings.' },
    { question: 'Do you offer bore-well and hand pump repairs in Bareilly?', answer: 'Yes. Our team repairs bore-wells and hand pumps, fixes pressure issues, and handles seasonal wear so your home gets a regular water supply.' },
    { question: 'Can I schedule plumbing repairs at my convenience in Bareilly?', answer: 'Yes. You can choose any time slot that suits you. Our plumbers arrive on time and complete the work quickly and smoothly.' },
    { question: 'How do you handle blocked drains or sewer lines in Bareilly?', answer: 'We use proper tools to clear drain blocks and sewer lines. This removes clogs, prevents bad smells, and restores smooth water flow in your home.' },
    { question: 'What types of plumbing installations can your plumbers handle?', answer: 'We install pipes, taps, showers, water heaters, kitchen plumbing lines, new tanks, and complete bathroom plumbing systems with expert care.' },
  ]



  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Plumber Services' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Professional Plumbing Repair in Bareilly</h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Hire a trusted and skilled plumber in Bareilly for fast and reliable repairs. We fix leaks, blockages, pipe issues, tap problems, drainage troubles, and more to keep your home safe and running smoothly.</p>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {badges.map((b, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">{b}</div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-blue-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Plumbing Repair
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Emergency Plumbing Service
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">30-Min</div>
                  <div className="text-blue-200 text-sm">Callback for Booking Confirmation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2-Hour</div>
                  <div className="text-blue-200 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-blue-200 text-sm">Work Satisfaction Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Plumbing Repair in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Why Choose EzyHelpers for Plumbing Repair in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Trusted, skilled, and affordable plumbing solutions for every home.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Our Plumbing Repair Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Plumbing Repair Services Do You Offer in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Complete solutions for all your plumbing repair needs in Bareilly.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="bg-white rounded-xl p-3 w-fit mb-6 border border-blue-100">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Types of Plumbing Issues We Fix */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Which Home Plumbing Fixes Can Your Plumbers Handle?</h2>
              <p className="text-gray-600">We fix all kinds of small and big plumbing problems across Bareilly.</p>
            </div>

            <div className="bg-blue-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {issueList.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Our Plumbing Repair Services in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book Our Plumbing Repair Services in Bareilly</h2>
              <p className="text-lg text-gray-600">Fast and stress-free booking process in just 4 simple steps:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Share Your Issue</h3>
                <p className="text-gray-600">Tell us what plumbing problem you are facing.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pick a Convenient Time</h3>
                <p className="text-gray-600">Select a day and time slot that works for you.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Plumber Visit</h3>
                <p className="text-gray-600">Our verified plumber comes with all the tools and parts needed.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Service & Support</h3>
                <p className="text-gray-600">Enjoy worry-free plumbing with our after-service support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Easy solutions beyond plumbing repairs for Bareilly homes</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/ac-repair" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Air Conditioner Services</h3>
                <p className="text-gray-600 mb-4">Quick AC installation, servicing, and gas refilling.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair Services</h3>
                <p className="text-gray-600 mb-4">Fast repair for fridge, washing machine, microwave, and more.</p>
                <div className="flex items-center text-indigo-600 font-semibold">Learn More</div>
              </Link>

              <Link href="/cities/bareilly/home-deep-cleaning" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Cleaning & Maintenance</h3>
                <p className="text-gray-600 mb-4">Deep cleaning for the kitchen, bathroom, and the full home.</p>
                <div className="flex items-center text-emerald-600 font-semibold">Learn More</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Copy */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don't Let Plumbing Issues Trouble You!</h2>
              <p className="text-xl mb-8 text-blue-100">Get your plumbing repair in Bareilly done quickly and easily with EzyHelpers. Our trusted and trained plumbers solve your issues fast so your home remains safe and comfortable.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Plumbing Repair
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call +91 9972571005
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Regular Plumbing Service Matters ... */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Why Professional Plumbing Services Matter for Your Home’s Safety & Comfort</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
              <p>Hiring a professional plumber in Bareilly through EzyHelpers is about more than just fixing leaks. It ensures your home remains safe, comfortable, and free from recurring plumbing problems. Our background-verified and trained plumbers understand local challenges like hard water, old pipelines, seasonal leaks, and monsoon drainage blocks.</p>
              <p>We focus on identifying the root cause of every issue and explain it clearly to you. Using high-quality materials and professional techniques, we ensure long-lasting repairs without shortcuts or temporary fixes. Every job is completed neatly, following proper safety standards to protect your home.</p>
              <p>From burst pipes, clogged toilets, slow drains, to bathroom and water tank repairs, we provide comprehensive plumbing solutions. We also offer emergency support, preventive maintenance, and guaranteed timelines, keeping your Bareilly home running smoothly all year round.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 
