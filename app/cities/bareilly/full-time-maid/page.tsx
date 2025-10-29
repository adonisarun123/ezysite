import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Reliable Full-Time Maids in Bareilly – Daily Help',
  description: 'Book a full time maid in Bareilly for complete home assistance including cleaning, cooking, laundry, and regular household maintenance.',
  openGraph: {
    title: 'Reliable Full-Time Maids in Bareilly – Daily Help',
    description: 'Book a full time maid in Bareilly for complete home assistance including cleaning, cooking, laundry, and regular household maintenance.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/full-time-maid',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/full-time-maid'
  }
}

export default function BareillyFullTimeMaidPage() {
  const serviceBadges = [
    '100% Verified & Background-Checked',
    'Fixed Daily Hours (8–10 Hours)',
    'Transparent Pricing; No Hidden Charges',
    'Quick Replacement Guarantee',
    'Personalized Matchmaking'
  ]

  const highlightMetrics = [
    { value: '100%', label: 'Trained for Home Responsibilities' },
    { value: '8–10 Hours', label: 'Daily Dedicated Service' },
    { value: '6 Days', label: 'Weekly Consistent Support' },
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Full-Time Maid Service' }
          ]} 
        />
      
      {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 font-display leading-tight">
                Full-Time Maid in Bareilly – Consistent, Daily Help Without Overnight Stay
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
                Let EzyHelpers take care of your home with our dedicated full-time maid in Bareilly. Each maid specialises in one key area: be it cleaning, cooking, childcare, or elderly care, ensuring your daily household needs are handled with care, professionalism, and cultural understanding.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold text-lg py-4 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all"
                >
                  Book a Full-Time Maid
                </Link>
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {serviceBadges.map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    <span className="text-emerald-300">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {highlightMetrics.map((m, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-6 py-6">
                    <div className="text-3xl font-extrabold">{m.value}</div>
                    <div className="mt-1 text-indigo-50/80">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Specialised Full-Day Maid Service in Bareilly for Every Household Need */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Specialised Full-Day Maid Service in Bareilly for Every Household Need</h2>
              <p className="text-lg text-gray-600">Our full-day maid service in Bareilly matches you with skilled and reliable helpers focused on a single role, ensuring maximum efficiency and care.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold">Full-Time Maid for Housekeeping</h3>
                <p className="mt-1">Experience a spotless and well-maintained home daily. Our maid is fully focused on cleanliness and household upkeep.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Sweeping, mopping, and dusting</li>
                  <li>Kitchen & bathroom cleaning</li>
                  <li>Laundry and folding clothes</li>
                  <li>Dishwashing and bed-making</li>
                </ul>
                <p className="mt-3">Expertise: Skilled in household hygiene and routine cleaning tasks.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Book a Full-Time Housekeeper</Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full-Time Maid for Cooking</h3>
                <p className="mt-1">Relish homemade meals without the kitchen stress. Our full-time cook prepares fresh, traditional meals tailored to your family’s diet.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Cooking Breakfast, lunch, dinner, and snacks</li>
                  <li>Ingredient prep and chopping</li>
                  <li>Grocery list handling (if needed)</li>
                  <li>Cleaning utensils & stove</li>
                </ul>
                <p className="mt-3">Expertise: Skilled in Bareilly-style North Indian meals; veg or non-veg.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Hire a Full-Time Cook</Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full-Time Maid for Babysitting (Childcare)</h3>
                <p className="mt-1">Ensure your child receives full-day care, love, and learning support, even when you're away.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bathing, feeding, and nap routines</li>
                  <li>Homework and reading assistance</li>
                  <li>Playtime and indoor engagement</li>
                  <li>School pickup/drop (if agreed upon)</li>
                </ul>
                <p className="mt-3">Expertise: Gentle, child-safe care tailored to age and developmental needs.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Book a Full-Time Babysitter</Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Full-Time Maid for Elderly Care</h3>
                <p className="mt-1">Your elders deserve dignity and reliable care. Our full-time caregivers are trained for senior support with compassion.</p>
                <p className="mt-3 font-medium">Duties:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Bathing and dressing assistance</li>
                  <li>Medication reminders</li>
                  <li>Walking/mobility support</li>
                  <li>Emotional companionship</li>
                </ul>
                <p className="mt-3">Expertise: Ideal for seniors with health issues, post-surgery recovery, or limited mobility.</p>
                <Link href="/hire-helper" className="text-purple-600 font-semibold mt-2 inline-block">Book a Full-Time Elderly Caregiver</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Full-Time Maid in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs a Full-Time Maid in Bareilly?</h2>
              <p className="text-lg text-gray-600">A full-time maid in Bareilly is ideal for households that need consistent daily support to manage everyday tasks smoothly and stress-free.</p>
            </div>
            <ul className="max-w-4xl mx-auto text-gray-700 space-y-2">
              <li>• Working Couples – Focus on your careers while your home stays clean and managed.</li>
              <li>• New Parents – Get extra hands to manage chores while caring for your newborn.</li>
              <li>• Families with Elderly Members – Ensure your elders receive proper care, meals, and assistance.</li>
              <li>• Single Parents – Reliable daily help for managing both household tasks and childcare.</li>
              <li>• Busy Professionals – Stay organised and stress-free with dependable support at home.</li>
            </ul>
          </div>
        </section>

        {/* Why Choose EzyHelpers for Your Full-Time Maid in Bareilly? */}
        <section className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Your Full-Time Maid in Bareilly?</h2>
              <p className="text-lg text-gray-600">With EzyHelpers, you don’t just hire a maid; you gain dependable daily support customised to your lifestyle.</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-gray-700">
              <li>• Replacement Support Available</li>
              <li>• Flexible Timings Based on Your Routine</li>
              <li>• 100% Verified & Background-Checked Maids</li>
              <li>• Affordable Pricing Customized for Bareilly</li>
              <li>• Dedicated Customer Support Before & After Hiring</li>
            </ul>
          </div>
        </section>

        {/* Our Easy 4-Step Maid Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Our Easy 4-Step Maid Hiring Process</h2>
            <p className="text-gray-700 mb-4 text-center">Hiring your ideal full-time maid in Bareilly is seamless with EzyHelpers.</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Consultation</strong> – Discuss your needs with our team and choose the type of maid service you want, like cleaning, cooking, childcare, or elder care.</li>
              <li><strong>Maid Shortlisting</strong> – We match you with 2–3 verified candidates based on your preferences.</li>
              <li><strong>Interview & Selection</strong> – Connect with shortlisted maids via call, video, or in-person interviews.</li>
              <li><strong>Smooth Onboarding</strong> – Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout.</li>
            </ol>
          </div>
        </section>

        {/* What to Consider Before Booking a Full-Time Maid in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">What to Consider Before Booking a Full-Time Maid in Bareilly?</h2>
            <p className="text-gray-700 mb-4 text-center">Everything You Should Know to Make the Right Hiring Decision</p>
            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">1. Working Hours</p>
                <p>Maids typically work 8–10 hours a day. Please define tasks clearly at the beginning.</p>
              </div>
              <div>
                <p className="font-semibold">2. Weekly Offs</p>
                <p>One day off per week is standard. Festivals/national holidays can be planned in advance.</p>
              </div>
              <div>
                <p className="font-semibold">3. One Role, One Maid</p>
                <p>A full-time maid in Bareilly is dedicated to one core responsibility: cooking, cleaning, childcare, or elder care for quality and consistency.</p>
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
                <h3 className="font-bold mb-2">Live-In Maid Services</h3>
                <p className="text-gray-600">Full-day support who stay in your home and assist with daily chores</p>
                <Link href="/cities/bareilly/live-in-maid" className="text-purple-600 font-semibold mt-2 inline-block">Learn About Live-In Maid Services</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Instant maid service in Bareilly</h3>
                <p className="text-gray-600">Instant household help for emergencies, guest visits, or special occasions.</p>
                <Link href="/cities/bareilly/on-demand-helper" className="text-purple-600 font-semibold mt-2 inline-block">Explore Instant Maid Service</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Cook Services</h3>
                <p className="text-gray-600">Skilled home cooks for daily meals, fasting food, or festive dishes.</p>
                <Link href="/cities/bareilly/cooks" className="text-purple-600 font-semibold mt-2 inline-block">Explore Cook Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Get Trusted Full-Time Help with EzyHelpers Today!</h2>
              <p className="text-xl mb-8 text-orange-100">Tired of juggling work and home duties? Hire a reliable, trained, and respectful full-time maid in Bareilly from EzyHelpers today.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-orange-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book a Full-Time Maid</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Free Consultation
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
                { question: 'What is a full-time maid in Bareilly?', answer: "A full-time maid in Bareilly is a dedicated domestic helper who works daily at your home without staying overnight. These maids typically handle one major responsibility, like cleaning, cooking, childcare, or elderly care. With EzyHelpers' full-day maid service in Bareilly, you get trained professionals who support your household consistently and efficiently throughout the day." },
                { question: 'How many hours does a full-day maid service in Bareilly offer?', answer: 'A full-day maid service in Bareilly generally includes 8 to 10 hours of daily help. You can customise the working hours based on your routine, whether it\'s morning support for breakfast and cleaning or evening help with dinner and childcare. This ensures your home runs smoothly while giving the maid a structured work-life balance.' },
                { question: 'What kind of tasks does a full-time maid in Bareilly handle?', answer: 'Our full-time maids in Bareilly offer specialised services across four main areas: Housekeeping (sweeping, mopping, dusting, dishwashing, laundry, kitchen, and bathroom cleaning), Cooking (preparing full meals and snacks), Childcare (feeding, bathing, homework help), and Elderly Care (bathing assistance, mobility, medication reminders, companionship). You can choose based on your primary need.' },
                { question: 'Are full-time maids in Bareilly background verified?', answer: 'Yes, all full-time maids in Bareilly provided by EzyHelpers are verified and background checked. We check Aadhaar, local address (if available), and basic identity. Police verification and medical checkups can also be arranged at an extra cost.' },
                { question: 'How much does it cost to hire a full-time maid in Bareilly?', answer: 'The cost depends on the type of service you need. EzyHelpers offers transparent and affordable pricing with no hidden fees. You\'ll get a customised quote based on your home\'s requirements, ensuring value for your money.' },
                { question: 'Do full-day maid services in Bareilly include weekend work?', answer: 'Yes, most full-day maid services in Bareilly include help for 6 days a week, with one weekly day off. Festival days or emergencies can be scheduled in advance.' },
                { question: 'Does a full-time maid in Bareilly stay overnight?', answer: 'No, a full-time maid in Bareilly does not stay overnight. They work during the day for 8–10 hours and return home afterwards. For 24-hour support, consider our live-in maid services in Bareilly.' },
                { question: 'Can I hire a maid for a joint family in Bareilly?', answer: 'Absolutely. We often place full-time maids experienced in managing joint family households — traditional cooking styles, respect for elders, and efficient handling of multiple chores.' },
                { question: 'Will the maid understand our family’s traditions and customs?', answer: 'Yes, our maids are trained to align with Bareilly\'s cultural values and family routines, including festival preparations, pooja routines, or dietary customs during fasting.' },
                { question: 'What is the replacement policy for full-time maids in Bareilly?', answer: 'EzyHelpers offers a quick replacement guarantee. If your maid is unavailable or doesn\'t meet expectations, we provide a trained substitute without delay.' },
                { question: 'Why should I use EzyHelpers instead of hiring a local full-time maid directly in Bareilly?', answer: 'Hiring directly comes with risks: no verification, no accountability, and no support. EzyHelpers provides verified and trained maids, quick replacements, legal documentation, ongoing customer support, and professional service guarantees.' },
                { question: 'What happens if my full-time maid takes sudden leave?', answer: 'If your full-time maid is unavailable due to illness or emergency, EzyHelpers provides quick replacement options to avoid disruption.' },
                { question: 'Do full-day maid services in Bareilly cover pooja or festival preparations?', answer: 'Yes, many of our maids are trained in traditional UP-style pooja preparations, cleaning before festivals like Diwali or Eid, and fasting meals.' },
                { question: 'Can I pause the service if I travel or don’t need the maid temporarily?', answer: 'Yes, we allow flexible pause options. Inform us in advance to pause billing or reassign the maid as needed.' },
                { question: 'Do I need to provide food for the full-time maid?', answer: 'While not mandatory, families in Bareilly typically offer lunch or tea during the workday. Full-time maids usually bring their own food. Discuss and decide during hiring.' }
              ]}
            />
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}