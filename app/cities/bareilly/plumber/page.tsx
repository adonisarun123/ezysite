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
  HomeIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Plumbing Repair in Bareilly – Trusted Local Plumbers',
  description: 'Get plumbing repair in Bareilly for leaks, pipe fittings, tap fixes, and clogged drains. Quick and professional service for your home needs.',
  openGraph: {
    title: 'Plumbing Repair in Bareilly – Trusted Local Plumbers',
    description: 'Get plumbing repair in Bareilly for leaks, pipe fittings, tap fixes, and clogged drains. Quick and professional service for your home needs.',
    url: 'https://ezyhelpers.com/cities/bareilly/plumber',
    type: 'website',
  }
}

export default function BareillyPlumber() {
  const badges = [
    'Verified & Background-Checked Plumbers',
    'Same-Day Repairs Available',
    'Quality Fittings',
    'Transparent & Fair Pricing',
    'Locally Experienced Plumbers in Bareilly',
  ]

  const whyChoose = [
    'Skilled & Professionally Trained Local Plumbers',
    'Fast and Same-Day Plumbing Repair Service',
    'Clear, Honest, and Transparent Pricing Promise',
    'Complete, Hassle-Free Home Plumbing Solutions',
  ]

  const services = [
    { title: '1. Pipe Leakage & Blockage Repairs', desc: 'Solve dripping pipes, hidden leaks, and seasonal blockages to protect walls and floors.' },
    { title: '2. Bathroom Fitting & Repairs', desc: 'Fix faucets, taps, showers, and broken flushes for clean, working bathrooms.' },
    { title: '3. Toilet Repairs & Maintenance', desc: 'Get help for toilet blockages, slow flushes, or water leaks for daily comfort.' },
    { title: '4. Water Tank Cleaning', desc: 'Clean and maintain water tanks to keep water safe and fresh for your family.' },
    { title: '5. Grouting & Sealant Services', desc: 'Seal bathroom tiles, basins, and sinks to stop water seepage and mold issues.' },
    { title: '6. Drainage Solutions', desc: 'Clear blocked drains and repair sewer lines to prevent waterlogging and foul smells.' },
    { title: '7. Water Storage Tank Installation', desc: "Set up and maintain overhead tanks or underground sumps as per Bareilly's water needs." },
    { title: '8. Hard Water Treatment', desc: 'Install water softeners to protect your pipes and fittings from Bareilly’s hard water.' },
    { title: '9. Bore-Well & Hand Pump Repairs', desc: 'Experts in traditional borewell and pump solutions are used across Bareilly.' },
    { title: '10. Monsoon Drainage Checks', desc: 'Prepare your home for the rainy season with gutter cleaning and waterproofing services.' },
    { title: '11. Roof Leakage Repairs', desc: 'Fix roof water leaks before the monsoon to prevent interior damage.' },
  ]

  const issueList = [
    'Bathroom Taps, Showers, Basins Fixed Fast',
    'Clear Drains, Repair Pipes for Safety',
    'Fix Toilets and Maintain Sanitary Systems',
    'Find and Fix Hidden Water Leaks',
    'Seal Tiles, Stop Water Leakage Issues',
    'Fix Burst Pipes, Clear Monsoon Blocks',
    'Repair Old Bathroom Fixtures and Pipes',
    'Clean Overhead and Underground Water Tanks',
    'Fix Dripping Taps, Install New Faucets',
    'Handle All Toilet and Sanitary Repairs',
    'Repair Bore-wells and Hand Pumps Quickly',
    'Install Safe New Water Storage Tanks',
    'Install Hard Water Treatment Systems Bareilly',
    'Prevent Waterlogging with Drainage Solutions',
    'Repair Roof Leaks Before Monsoon Rains',
    'Upgrade Plumbing in Old Bareilly Homes',
  ]

  const faqs: FAQItem[] = [
    { question: 'Can I get same-day plumbing repair in Bareilly?', answer: 'Yes, same-day plumbing repair is available in Bareilly through EzyHelpers. Our skilled plumbers provide fast service with quality fittings and complete solutions for urgent plumbing problems.' },
    { question: 'Do professional plumbers in Bareilly handle pipe leakage repairs?', answer: 'Yes, professional plumbers in Bareilly handle pipe leakage repairs, including dripping pipes, hidden leaks, and seasonal blockages. They protect your walls and floors from water damage with lasting solutions.' },
    { question: 'Do professional plumbers in Bareilly work on old homes?', answer: 'Yes, professional plumbers in Bareilly work on old homes, including upgrading plumbing systems, repairing old bathroom fixtures, and handling traditional pipework in older Bareilly homes.' },
    { question: 'Can EzyHelpers’ plumbers in Bareilly handle waterlogging issues?', answer: 'Yes, our professional and experienced plumbers handle waterlogging issues by providing drainage solutions, clearing blocked drains, and repairing sewer lines to prevent water accumulation.' },
    { question: 'Why hire a professional plumber in Bareilly?', answer: 'A professional plumber ensures safety, efficiency, and durability. They are background-verified, trained, and experienced with local fittings, drainage patterns, and hard water challenges. They diagnose root causes and use quality parts to prevent recurring plumbing issues.' },
    { question: 'Do EzyHelpers plumbers offer same-day plumbing repairs in Bareilly?', answer: 'Yes, EzyHelpers provides same-day plumbing repair in Bareilly. Verified local plumbers can address pipe leaks, blockages, bathroom fittings, and drainage problems quickly, often within 2 hours, ensuring your home is restored without delay.' },
    { question: 'What kinds of pipe issues do plumbers fix?', answer: 'Our Plumbers in Bareilly handle leaking pipes, burst pipes, hidden leak detection, seasonal blockages, and repair work. EzyHelpers’ verified plumbers ensure pipes are correctly sealed, preventing water damage and ensuring long-term system efficiency.' },
    { question: 'Can plumbers repair bathroom fittings in Bareilly?', answer: 'Yes, our local professional plumbers repair bathroom fittings. This includes fixing taps, faucets, showers, sink basins, and flush systems. EzyHelpers plumbers use quality components to ensure durable and functional solutions for all bathroom hardware.' },
    { question: 'Do your plumbers address hard water problems?', answer: 'Yes. EzyHelpers plumbers offer hard water treatment services in Bareilly, including installing water softeners. This helps prevent limescale buildup, extends piping lifespan, and protects fittings from hard-water-related damage.' },
    { question: 'Do you offer bore-well and hand pump repairs in Bareilly?', answer: 'Yes, our plumbers have experience in repairing bore-wells and hand pumps. They handle mechanical issues, pressure problems, and seasonal wear, ensuring an uninterrupted groundwater supply for your home.' },
    { question: 'Can I schedule plumbing repairs at my convenience in Bareilly?', answer: 'Absolutely. EzyHelpers offers flexible plumbing repairs in Bareilly. You choose a time slot that suits your schedule, and our local professional plumbers arrive equipped to resolve issues efficiently.' },
    { question: 'How do you handle blocked drains or sewer lines in Bareilly?', answer: 'Our plumbers help in clearing blockages in drains and sewer pipes with modern tools, removing clogs fast and keeping your water flowing smoothly without bad smells or backups.' },
    { question: 'What types of plumbing installations can your plumbers handle?', answer: 'Our professional plumbers in Bareilly can install pipes, bathroom fittings, water heaters, kitchen plumbing, drainage systems, and other complete plumbing solutions with safe and expert service.' },
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Professional Plumbing Repair in Bareilly — Trusted Plumber Near You</h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Hire a professional plumber in Bareilly for quick, dependable solutions to leaks, blockages, fittings, and drainage problems, keeping your home worry-free and running perfectly.</p>

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
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Emergency Plumbing Service
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold">30-Min</div>
                  <div className="text-blue-200 text-sm">Callback for Booking Confirmation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-blue-200 text-sm">Emergency Support</div>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Plumbing Repair in Bareilly?</h2>
              <p className="text-lg text-gray-600">Trusted, skilled, and affordable plumbing solutions for every household.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChoose.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow border border-gray-100">
                  <div className="flex items-center text-gray-900 font-semibold"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Plumbing Repair Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Plumbing Repair Services</h2>
              <p className="text-lg text-gray-600">Comprehensive solutions for all your plumbing repair needs in Bareilly</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((s, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Plumbing Issues We Fix */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Types of Plumbing Issues We Fix</h2>
            <p className="text-gray-700 mb-6">We handle all kinds of plumbing problems in Bareilly, big or small.</p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 list-disc pl-5">
              {issueList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
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
              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Air Conditioner Services</h3>
                <p className="text-gray-600 mb-4">Quick AC installation, servicing, and gas refilling for cool comfort.</p>
                <div className="flex items-center text-blue-600 font-semibold">Learn About Air Conditioner Services</div>
              </Link>

              <Link href="/cities/bareilly/appliance-repair" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Appliance Repair Services</h3>
                <p className="text-gray-600 mb-4">Repair your fridge, washing machine, microwave, and other appliances fast.</p>
                <div className="flex items-center text-indigo-600 font-semibold">Learn About Appliance Repair Services</div>
              </Link>

              <Link href="/cities/bareilly/home-cleaning" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Cleaning & Maintenance</h3>
                <p className="text-gray-600 mb-4">Deep cleaning, kitchen, bathroom, and full-home maintenance for healthy living.</p>
                <div className="flex items-center text-emerald-600 font-semibold">Learn About Home Cleaning</div>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Copy */}
        <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Don't Let Plumbing Issues Trouble You!</h2>
              <p className="text-xl mb-8 text-blue-100">Get your plumbing repair in Bareilly fixed fast and easily with EzyHelpers. Our trusted professionals keep your home running smoothly so you can enjoy peace of mind.</p>
              
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
      </main>
      
      <Footer />
    </>
  )
} 