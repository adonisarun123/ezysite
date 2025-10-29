import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'

import { 
  CheckCircleIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Verified Live-In Maids in Bareilly – 12-Hour Daily Support',
  description: 'Hire a verified live in house maid in Bareilly for all-day support. Our maids stay with you and assist with cooking, cleaning, and daily household needs.',
  openGraph: {
    title: 'Verified Live-In Maids in Bareilly – 12-Hour Daily Support',
    description: 'Hire a verified live in house maid in Bareilly for all-day support. Our maids stay with you and assist with cooking, cleaning, and daily household needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/live-in-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/live-in-maid'
  }
}

export default function BareillyLiveInMaidPage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Live-In Maid Service' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-700 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
                Live-in House Maid in Bareilly – Trusted Help for Your Home, 24/7
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
                EzyHelpers connects you with trained, verified, Hindi-speaking live-in house maids in Bareilly for cooking, cleaning, elderly care, and complete home support. Our maids understand your cultural values, food preferences, and family lifestyle, providing reliable care throughout the day.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold text-lg py-4 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all">
                  Book a Live-In Maid
                </Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Quick Assistance
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  '100% Background-Checked Maids',
                  'Maid Placement Within 24–72 Hours',
                  'Dedicated Support for Housekeeping, Cooking & Elderly Care',
                  'Transparent Monthly Pricing – No Hidden Fees',
                  'Support Available Even After Placement',
                  'Fluent in Hindi & Regional Languages'
                ].map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    <span className="text-emerald-300">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {[
                  { value: '98%', label: 'Customer Satisfaction' },
                  { value: '24–72 Hours', label: 'Average Maid Joining Time' },
                  { value: '10,000+', label: 'Families Served in Bareilly' }
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-6 py-6">
                    <div className="text-3xl font-extrabold">{m.value}</div>
                    <div className="mt-1 text-indigo-50/80">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Why Choose EzyHelpers for a Live-In House Maid in Bareilly?</h2>
            <p className="text-lg text-gray-600 text-center mb-6">Thousands of households trust our live-in maid service in Bareilly for dependable, trained, and culturally compatible home support.</p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
              {[
                'Fluent in Hindi & Regional Languages',
                'Skilled in UP-Style Cooking & Family Traditions',
                'Understands Joint Family & Religious Routines',
                'Maids from Bareilly & Neighboring Villages',
                'Fast Replacements When Needed',
                'Ongoing Support After Hiring'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5" />{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Our Specialized Live-In Maid Services for Every Household Need */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Specialized Live-In Maid Services for Every Household Need</h2>
              <p className="text-lg text-gray-600">Our live-in maid services in Bareilly offer trusted, task-focused helpers who blend into your home routine and support your family’s day-to-day needs with ease.</p>
            </div>

            <div className="space-y-10 text-gray-700">
              {/* Housekeeping */}
              <div>
                <h3 className="text-xl font-semibold">Live-in Maid for Housekeeping</h3>
                <p className="mt-1">Maintain a clean, organised home with a live-in house maid in Bareilly focused entirely on cleanliness and hygiene.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sweeping, mopping, and dusting</li>
                  <li>Kitchen and bathroom sanitation</li>
                  <li>Laundry, ironing, and folding</li>
                  <li>Bed-making and dishwashing</li>
                </ul>
                <p className="mt-3">Expertise: Skilled in household hygiene and routine cleaning tasks.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Book a Housekeeping Maid</Link>
              </div>

              {/* Cooking */}
              <div>
                <h3 className="text-xl font-semibold">Live-in Maid for Cooking</h3>
                <p className="mt-1">Enjoy UP-style home-cooked meals every day from a dedicated live-in maid service in Bareilly that specialises in traditional recipes and family-friendly food.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Preparing breakfast, lunch, and dinner</li>
                  <li>Regional dishes like Tehri, Bedai, Halwa, Kheer</li>
                  <li>Grocery assistance and post-cooking cleanup</li>
                  <li>Kitchen hygiene and utensil maintenance</li>
                </ul>
                <p className="mt-3">Expertise: Trained in local cuisine, festival foods, and fasting rules.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Hire a Live-In Cook</Link>
              </div>

              {/* Elderly Care */}
              <div>
                <h3 className="text-xl font-semibold">Live-in Maid for Elderly Care</h3>
                <p className="mt-1">Give your elders the dignity and support they deserve with a compassionate live-in house maid in Bareilly trained in elderly care.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Personal hygiene, bathing, and dressing</li>
                  <li>Assistance with walking and medication reminders</li>
                  <li>Companionship and pooja preparation</li>
                  <li>Diet and comfort management</li>
                </ul>
                <p className="mt-3">Expertise: Support for joint pain, diabetes, and emotional well-being.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Get a Live-In Elderly Caregiver</Link>
              </div>

              {/* Babysitter */}
              <div>
                <h3 className="text-xl font-semibold">Live-In Babysitter</h3>
                <p className="mt-1">Ensure your child is cared for by a loving, attentive live-in babysitter in Bareilly who prioritizes safety and hygiene.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Feeding, bathing, nap routines</li>
                  <li>Learning activities and playtime</li>
                  <li>School readiness and homework help</li>
                  <li>Clean environment and hygiene care</li>
                </ul>
                <p className="mt-3">Expertise: Experienced in caring for infants and toddlers.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Hire a Babysitter</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Live-in House Maid in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs a Live-in House Maid in Bareilly?</h2>
              <p className="text-lg text-gray-600">A live-in house maid in Bareilly is ideal for families who need continuous, dependable support without stress.</p>
            </div>
            <ul className="max-w-3xl mx-auto text-gray-700 space-y-2">
              <li>• Working Couples</li>
              <li>• Joint Families</li>
              <li>• Parents of Young Children</li>
              <li>• Government Employees/Teachers</li>
              <li>• Single Parents</li>
              <li>• Families with Elderly Parents or Grandparents</li>
            </ul>
          </div>
        </section>

        {/* Our Easy 4-Step Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Our Easy 4-Step Hiring Process</h2>
            <p className="text-gray-700 mb-4 text-center">Hiring a live-in maid service in Bareilly with EzyHelpers is hassle-free.</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Consultation</strong> – Discuss your needs with our team and choose the type of maid service you want, like cleaning, cooking, childcare, or elder care.</li>
              <li><strong>Maid Shortlisting</strong> – We match you with 2–3 verified candidates based on your preferences.</li>
              <li><strong>Interview & Selection</strong> – Connect with shortlisted maids via call, video or in-person interviews.</li>
              <li><strong>Smooth Onboarding</strong> – Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout.</li>
            </ol>
          </div>
        </section>

        {/* What to Consider Before Booking */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">What to Consider Before Booking a Live-in house maid in Bareilly?</h2>
            <p className="text-gray-700 mb-4 text-center">Everything You Should Know to Make the Right Hiring Decision</p>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">1. Living Arrangements</p>
                <p>Provide a separate room or shared room based on your household setup. Basic amenities such as a bed, cot or mattress and access to a toilet and bathroom.</p>
              </div>
              <div>
                <p className="font-semibold">2. Working Hours</p>
                <p>Live-in maids typically work up to 12 structured hours a day with appropriate breaks.</p>
              </div>
              <div>
                <p className="font-semibold">3. Monthly Leave</p>
                <p>Maids are entitled to two days off per month, planned in advance.</p>
              </div>
              <div>
                <p className="font-semibold">4. Dedicated Roles Only</p>
                <p>Each live-in house maid in Bareilly is assigned one key task (cleaning, cooking, childcare, or elder care) to maintain service quality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Get a Trusted Live-In House Maid in Bareilly Today</h2>
              <p className="text-xl mb-8 text-purple-100">Say goodbye to daily stress. EzyHelpers offers you experienced, locally familiar live-in house maids in Bareilly who integrate smoothly into your home and routine.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book a Live-In Maid</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Speak to a Support Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Explore Our Other Services</h2>
            <p className="text-lg text-gray-600 text-center mb-8">Complete your household support system with EzyHelpers' trusted domestic services in Bareilly and beyond:</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Full-Time Maid Services</h3>
                <p className="text-gray-600">Reliable daily help for all home chores without requiring the maid to stay.</p>
                <Link href="/cities/bareilly/full-time-maid" className="text-purple-600 font-semibold mt-2 inline-block">Learn About Full-Time Maid Services</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Part-Time Maid Services</h3>
                <p className="text-gray-600">Flexible, time-based cleaning and assistance that fits your schedule.</p>
                <Link href="/cities/bareilly/part-time-maid" className="text-purple-600 font-semibold mt-2 inline-block">Learn About Part-Time Maid Services</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Instant maid service in Bareilly</h3>
                <p className="text-gray-600">Instant household help for emergencies, guest visits, or special occasions.</p>
                <Link href="/cities/bareilly/on-demand-helper" className="text-purple-600 font-semibold mt-2 inline-block">Explore Instant Maid Service</Link>
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
                { question: 'What is a live-in maid, and how does it work in Bareilly?', answer: 'A live-in maid in Bareilly is a domestic helper who stays at your home and helps with daily tasks like cooking, cleaning, and caregiving. She typically works up to 12 hours a day but remains available for basic support throughout the day and night.' },
                { question: 'How fast can I hire a live-in maid in Bareilly?', answer: 'With EzyHelpers, you can hire a live-in maid in Bareilly within 24 to 72 hours. We maintain a ready database of verified candidates for quick placement based on your needs.' },
                { question: "Are EzyHelpers' live-in house maids in Bareilly verified and safe?", answer: 'Yes, all live-in house maids in Bareilly from EzyHelpers are background verified. We check the Aadhaar local address if available and basic identity. Police verification and medical checkups can also be arranged at an extra cost for added peace of mind' },
                { question: 'What services do live-in maids provide in Bareilly?', answer: 'Live-in maids in Bareilly offer dedicated support based on specific household needs. Their services include Housekeeping – cleaning, laundry, dishwashing; Cooking – preparing UP-style meals and regional dishes; Elderly care – helping with hygiene, mobility, and medication reminders; Childcare – feeding, bathing, and engaging with children. One maid usually handles only one type of task.' },
                { question: 'What is the cost of hiring a live-in maid in Bareilly?', answer: 'EzyHelpers offers transparent monthly pricing for live-in house maid in Bareilly with no hidden fees. The exact cost depends on specific services required. Contact EzyHelpers for detailed pricing based on your household needs.' },
                { question: 'Do live-in maids in Bareilly speak Hindi?', answer: 'Yes, all our maids are fluent in Hindi and understand the regional language. This makes day-to-day communication easy for your family and elders.' },
                { question: 'What are the working hours for live-in maids in Bareilly?', answer: 'Live-in maids usually work up to 12 hours a day with proper rest and breaks. Since they stay at your home, they can provide occasional help beyond working hours if needed.' },
                { question: 'How many leave days does a live-in maid get in a month?', answer: 'Most maids take 2 fixed leave days per month. These are planned in advance so your household does not get disrupted.' },
                { question: 'What living arrangements should I provide for a live-in maid in Bareilly?', answer: "For a live-in house maid in Bareilly, you need to provide a room, private or shared, with basic facilities like a bed, mattress or cot along with access to a bathroom. These arrangements ensure the maid's comfort and maintain your family's privacy." },
                { question: 'What if the maid is not suitable or leaves the job?', answer: 'EzyHelpers provides replacement support. If the maid does not match your expectations or leaves, we help you find a suitable replacement quickly.' },
                { question: 'Are the maids trained for elderly or bedridden care?', answer: 'Yes, we have maids trained in elderly support, including hygiene care, mobility assistance and routine health monitoring for conditions like diabetes or joint pain.' },
                { question: 'Do live-in maids in Bareilly know local cooking?', answer: 'Yes, live-in maids in Bareilly are skilled in UP-style cooking and family traditions. They can prepare regional dishes like Tehri, Bedai, Halwa, Kheer and understand festival foods and fasting rules.' }
              ]}
            />
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}