import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Instant Maid Service in Bareilly – Same-Day Help',
  description: 'Instant maid service in Bareilly offers same-day domestic help for urgent cleaning, cooking, or emergency support during events and last-minute needs.',
  openGraph: {
    title: 'Instant Maid Service in Bareilly – Same-Day Help',
    description: 'Instant maid service in Bareilly offers same-day domestic help for urgent cleaning, cooking, or emergency support during events and last-minute needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/on-demand-helper',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/on-demand-helper'
  }
}

export default function BareillyOnDemandHelperPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Instant Maid Service' }
          ]} 
        />
      
        {/* Hero Section aligned with markdown */}
        <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Instant Maid Service in Bareilly – Quick Help When You Need It Most</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
                Need urgent domestic assistance? EzyHelpers offers instant maid service in Bareilly, ideal for emergency situations, sudden guests, last-minute cooking, or one-time events. Whether it’s a spill before a function or urgent elder care, our trained and verified quick helpers in Bareilly are just a call away, available within 2–4 hours!
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-red-700 font-semibold text-lg py-4 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all">
                  Book an Instant Maid
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Quick Helper
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  'Verified & Trained Emergency Helpers',
                  'Same-Day Availability (within 2–4 hours)',
                  'Hourly Pricing, No Commitment',
                  'Flexible Short-Term Assignments',
                  'Available for Events & Festive Occasions',
                  'Multi-Tasking Capable (on request)',
                  'Ideal for One-Time or Emergency Tasks'
                ].map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    <span className="text-emerald-300">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {[
                  { value: 'Instant', label: 'Booking & Confirmation' },
                  { value: 'Available', label: '7 Days a Week' },
                  { value: '4.8★ Rating', label: 'For Instant Maid Services in Bareilly' }
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-6 py-6">
                    <div className="text-2xl font-extrabold">{m.value}</div>
                    <div className="mt-1 text-orange-50/80">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Why Choose EzyHelpers for Instant Maid Service in Bareilly?</h2>
            <p className="text-lg text-gray-600 text-center mb-6">Our instant maid service in Bareilly ensures prompt, reliable, and skilled help for all unplanned domestic needs. We’re trusted by Bareilly families for fast and dependable service.</p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                'Trained, Background-Verified Helpers',
                'No Long-Term Commitment Required',
                'Transparent Hour-Based Pricing',
                'Familiar with Local Traditions & Needs',
                'Hindi-Speaking Bareilly Helpers',
                'Specializing in Home Maintenance Services'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Specialized Instant Maid Services for Every Urgent Need */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Specialized Instant Maid Services for Every Urgent Need</h2>
              <p className="text-lg text-gray-600">From festival prep to family emergencies, our quick helpers in Bareilly are trained to handle your urgent home requirements right when you need them.</p>
            </div>

            <div className="space-y-10 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold">Emergency Home Cleaning</h3>
                <p className="mt-1">Expecting guests or preparing for a pooja? Our cleaning experts are just a call away for quick, reliable home cleaning.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sweeping, mopping, and dusting</li>
                  <li>Kitchen and bathroom sanitization</li>
                  <li>Post-party or festival cleaning</li>
                  <li>Room organization and clutter removal</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Book Instant Cleaning Helper</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">On-Demand Cooking Services</h3>
                <p className="mt-1">Our instant cooks prepare Bareilly-style meals, snacks, or vrat food with hygiene and care.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>North Indian veg/non-veg meals</li>
                  <li>Fasting food for Navratri, Karva Chauth</li>
                  <li>Cooking for events or functions</li>
                  <li>Kitchen cleanup post-cooking</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Hire Quick Cook in Bareilly</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Emergency Babysitter Services</h3>
                <p className="mt-1">Need help with kids while you're busy or out? Our trained babysitters step in instantly.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Feeding, bathing, and hygiene</li>
                  <li>Storytelling and age-appropriate play</li>
                  <li>Holiday or emergency supervision</li>
                  <li>School drop/pickup support (if pre-arranged)</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Get Instant Babysitting Help</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Elder Care Support on Short Notice</h3>
                <p className="mt-1">If your regular caregiver is away, we provide respectful and gentle elderly support.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Help with walking, food, and medicine</li>
                  <li>Emotional companionship</li>
                  <li>Cleanliness and hygiene assistance</li>
                  <li>Light home support and rituals</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Book Emergency Elderly Care Helper</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Patient & Nursing Care at Home</h3>
                <p className="mt-1">Need short-term support for someone unwell at home? We provide trained medical helpers.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Medication and vitals monitoring</li>
                  <li>Support with daily movement</li>
                  <li>Hygiene care for recovery patients</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Book Quick Patient Care in Bareilly</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Technical Home Maintenance Services</h3>
                <p className="mt-1">Facing plumbing, electrical, or carpentry issues? We have instant technicians ready.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Fix fan, light, wiring, or switches</li>
                  <li>Tap leaks, drainage & water tank issues</li>
                  <li>Furniture repairs and home fixes</li>
                  <li>Fridge, cooler, and washing machine repairs</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Book Instant Home Maintenance Support</Link>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Instant Event Help in Bareilly</h3>
                <p className="mt-1">Planning a wedding, pooja, or family event? Our event support helpers ensure smooth execution.</p>
                <p className="mt-3 font-medium">What they do:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pre-function home prep</li>
                  <li>Guest service and food help</li>
                  <li>Kitchen & utensil management</li>
                  <li>Post-event cleaning and waste disposal</li>
                </ul>
                <Link href="/hire-helper" className="text-red-600 font-semibold mt-2 inline-block">Book Event Helper Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Easy 4-Step Booking */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Easy 4-Step Booking for Instant Maids in Bareilly</h2>
            <p className="text-gray-700 mb-4 text-center">Getting a quick helper in Bareilly is hassle-free with our 4-step process:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Consultation</strong> – Discuss your needs with our team and choose the type of emergency helper you want.</li>
              <li><strong>Maid Shortlisting</strong> – We match you with 2–3 verified candidates based on your preferences.</li>
              <li><strong>Interview & Selection</strong> – Connect with shortlisted helpers via call, video, or in-person interviews.</li>
              <li><strong>Smooth Onboarding</strong> – Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout.</li>
            </ol>
          </div>
        </section>

        {/* What to Consider Before Booking Quick Helpers in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">What to Consider Before Booking Quick Helpers in Bareilly?</h2>
            <p className="text-gray-700 mb-4 text-center">Everything You Should Know to Make the Right Hiring Decision</p>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">1. Real-Time Availability</p>
                <p>Helpers are dispatched within 2–4 hours, depending on your location in Bareilly. Book early during peak festivals.</p>
              </div>
              <div>
                <p className="font-semibold">2. Clear Task Details</p>
                <p>Explain the service needed (e.g., “post-Holi cleanup” or “elderly meal support”) for a better match and preparedness.</p>
              </div>
              <div>
                <p className="font-semibold">3. Transparent Hourly Pricing</p>
                <p>You’ll know the total cost before starting. No hidden charges, and payment only after satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Explore Our Other Services</h2>
            <p className="text-lg text-gray-600 text-center mb-8">Complete your household support system with EzyHelpers' trusted domestic services in Bareilly and beyond:</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Cook Services</h3>
                <p className="text-gray-600">Skilled home cooks for daily meals, fasting food, or festive dishes.</p>
                <Link href="/cities/bareilly/cooks" className="text-red-600 font-semibold mt-2 inline-block">Explore Cook Services</Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Babysitter/Nanny Services</h3>
                <p className="text-gray-600">Caring and experienced nannies for infants, toddlers, and school-age kids.</p>
                <Link href="/cities/bareilly/babysitter" className="text-red-600 font-semibold mt-2 inline-block">Hire a Trusted Babysitter</Link>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Elderly Care Services</h3>
                <p className="text-gray-600">Compassionate support for seniors, including mobility, hygiene, and medication care.</p>
                <Link href="/cities/bareilly/elderly-care" className="text-red-600 font-semibold mt-2 inline-block">Discover Elderly Care Options</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Get a Trusted Quick Helper in Bareilly – EzyHelpers is Just a Call Away</h2>
              <p className="text-xl mb-8 text-red-100">From last-minute events to daily home emergencies, our quick helpers in Bareilly and instant maid service in Bareilly are your reliable local solution. Fast, trained, and background-verified help for all home maintenance services is just a call away.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-red-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Instant Help Now</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Same-Day Assistance
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
            <FAQAccordion
              faqs={[
                { question: 'How quickly can I get an instant maid service in Bareilly?', answer: 'You can get an instant maid service in Bareilly within just 2–4 hours of booking through EzyHelpers. Whether it\'s emergency cleaning, cooking, or elderly care, we provide quick helpers in Bareilly on the same day, based on availability, for urgent or last-minute needs.' },
                { question: 'What types of quick helper services does EzyHelpers offer in Bareilly?', answer: 'EzyHelpers offers a wide range of quick helper services in Bareilly through our trusted instant maid service. These include: Same-day deep cleaning and post-event cleanup; On-demand cooking (including fasting and traditional meals); Babysitting and childcare; Elderly support and companion care; Basic nursing and patient assistance at home; Technical home maintenance services like plumbing, electrical, and carpentry; Event support for functions and religious gatherings. All helpers are trained and ready for one-time or emergency assignments.' },
                { question: 'How much does instant maid service in Bareilly cost?', answer: 'The cost of instant maid service in Bareilly is based on transparent hourly pricing. There are no hidden fees or lock-in commitments; you pay only after the work is completed to your satisfaction. Whether it’s a one-time deep clean or an urgent home maintenance service, we keep pricing clear and fair.' },
                { question: 'Can I get emergency cleaning on the same day in Bareilly?', answer: 'Yes, you can! EzyHelpers provides same-day emergency cleaning as part of our instant maid service in Bareilly. Within 2–4 hours of booking, our quick helpers arrive fully equipped for sweeping, mopping, kitchen sanitization, bathroom cleaning, and even post-party mess cleanup.' },
                { question: 'Do your quick helpers in Bareilly speak Hindi and understand local needs?', answer: 'Yes, our quick helpers in Bareilly are fluent in Hindi and well-acquainted with local customs, traditions, and cooking styles. Whether it’s preparing Bareilly-style meals or assisting elders with pooja routines, our instant maid service matches you with culturally aware and sensitive professionals.' },
                { question: 'Can I book a quick helper in Bareilly for one-time tasks only?', answer: 'Yes, definitely. EzyHelpers lets you hire a quick helper in Bareilly for single-use or short-term tasks like festival preparation, guest cleanup, or urgent home maintenance services. There’s no need to commit to a long-term plan; just book as needed, when needed.' },
                { question: 'Are instant maid services available during festivals or public holidays in Bareilly?', answer: 'Yes, EzyHelpers provides instant maid service in Bareilly even during festivals and holidays. Whether it’s Diwali cleaning, Eid preparations, or Navratri fasting meal support, we ensure quick helpers are available when regular help is unavailable.' },
                { question: 'What happens if my booked quick helper in Bareilly cancels at the last minute?', answer: 'In the rare case of a cancellation, EzyHelpers offers a quick replacement guarantee. Our team will immediately assign another verified quick helper in Bareilly to ensure your home maintenance service or emergency task is not disrupted.' },
                { question: 'Can I book a quick helper in Bareilly for technical services like plumbing or appliance repair?', answer: 'Yes. Our instant maid service in Bareilly also includes trained technicians for home maintenance services like plumbing, electrical repairs, and appliance fixes. You can book these services instantly with no long wait.' }
              ]}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}