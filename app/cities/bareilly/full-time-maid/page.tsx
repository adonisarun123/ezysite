import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'
import NestCTA from '@/components/NestCTA'

export const metadata: Metadata = {
  title: 'Reliable Full-Time Maids in Bareilly – Daily Help',
  description: 'Book a full-time maid in Bareilly for complete home assistance, including cleaning, cooking, laundry, and regular household maintenance.',
  openGraph: {
    title: 'Reliable Full-Time Maids in Bareilly – Daily Help',
    description: 'Book a full-time maid in Bareilly for complete home assistance, including cleaning, cooking, laundry, and regular household maintenance.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/full-time-maid',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/full-time-maid'
  }
}

export default function BareillyFullTimeMaidPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a full-time maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full-time maid in Bareilly is a dedicated domestic helper who works daily at your home without staying overnight. These maids typically handle one major responsibility, like cleaning, cooking, childcare, or elderly care. With EzyHelpers' full-day maid service in Bareilly, you get trained professionals who support your household consistently and efficiently throughout the day."
      }
    },{
      "@type": "Question",
      "name": "How many hours does a full-day maid service in Bareilly offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A full-day maid service in Bareilly generally includes 8 to 10 hours of daily help. You can customise the working hours based on your routine, whether it's morning support for breakfast and cleaning or evening help with dinner and childcare. This ensures your home runs smoothly while giving the maid a structured work-life balance."
      }
    },{
      "@type": "Question",
      "name": "What kind of tasks does a full-time maid in Bareilly handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our full-time maids in Bareilly offer specialised services across four main areas:\nHousekeeping: Sweeping, mopping, dusting, dishwashing, laundry, kitchen, and bathroom cleaning\nCooking: Preparing full meals (lunch/dinner), snacks, and handling groceries\nChildcare: Feeding, bathing, helping with homework, and supervising playtime\nElderly Care: Assisting with bathing, mobility, medication reminders, and emotional support\nYou can choose a maid based on your primary household need for more focused and quality service."
      }
    },{
      "@type": "Question",
      "name": "Are full-time maids in Bareilly background verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all full-time maids in Bareilly provided by EzyHelpers are verified and background checked. We check Aadhaar, local address (if available), and basic identity for safety, reliability, and peace of mind. Police verification and medical checkups can also be arranged at an extra cost for added peace of mind.\nThis is one of the biggest advantages of using a professional full-day maid service in Bareilly over hiring someone directly."
      }
    },{
      "@type": "Question",
      "name": "How much does it cost to hire a full-time maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of hiring a full-time maid in Bareilly depends on the type of service you need, be it cleaning, cooking, childcare, or elder care. At EzyHelpers, we offer transparent and affordable pricing with no hidden fees. You’ll get a customised quote based on your home’s requirements, ensuring value for your money."
      }
    },{
      "@type": "Question",
      "name": "Do full-day maid services in Bareilly include weekend work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, most full-day maid services in Bareilly include help for 6 days a week, with one weekly day off. If you have specific requirements for festival days or emergencies, those can be scheduled in advance. The goal is to maintain consistent household support without unexpected gaps."
      }
    },{
      "@type": "Question",
      "name": "Does a full-time maid in Bareilly stay overnight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, a full-time maid in Bareilly does not stay overnight. These maids work during the day for 8–10 hours and return home afterwards. If you’re looking for 24-hour or live-in support, we recommend our live-in maid services in Bareilly, which are designed for families who need round-the-clock help."
      }
    },{
      "@type": "Question",
      "name": "Can I hire a maid for a joint family in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We often place full-time maids in Bareilly who are experienced in managing joint family households. They understand traditional cooking styles, respect elderly members, and are efficient in handling multiple chores in larger families."
      }
    },{
      "@type": "Question",
      "name": "Will the maid understand our family’s traditions and customs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our maids are trained to align with Bareilly's cultural values and family routines. Whether it’s festival preparations, pooja routines, or dietary customs during fasting, our helpers respect and follow your traditions. That’s what makes our full-day maid service in Bareilly ideal for culturally rooted households."
      }
    },{
      "@type": "Question",
      "name": "What is the replacement policy for full-time maids in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers offers a quick replacement guarantee for all full-time maid services in Bareilly. If your maid is unavailable, falls sick, or doesn’t meet expectations, we provide a trained substitute without delay. This ensures your daily home routine isn’t disrupted."
      }
    },{
      "@type": "Question",
      "name": "Why should I use EzyHelpers instead of hiring a local full-time maid directly in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hiring directly may seem easier, but it comes with risks: no verification, no accountability, and no support if things go wrong. EzyHelpers provides:\nVerified and trained maids\nQuick replacements\nLegal documentation\nOngoing customer support\nProfessional service guarantees\nOur full day maid service in Bareilly takes the stress out of finding trustworthy, long-term domestic help."
      }
    },{
      "@type": "Question",
      "name": "What happens if my full-time maid takes sudden leave?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your full-time maid in Bareilly is unavailable due to illness or personal emergency, EzyHelpers provides quick replacement options to ensure you don’t face disruption in your home routine."
      }
    },{
      "@type": "Question",
      "name": "Do full-day maid services in Bareilly cover pooja or festival preparations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many of our maids are trained in traditional UP-style pooja preparations, cleaning before festivals like Diwali or Eid, and fasting meals. Our full-day maid service in Bareilly is ideal for culturally rooted households that need seasonal help."
      }
    },{
      "@type": "Question",
      "name": "Can I pause the service if I travel or don’t need the maid temporarily?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers allows flexible pause options for your full day maid service in Bareilly. Just inform us in advance and we’ll pause billing or reassign the maid as needed when you return."
      }
    },{
      "@type": "Question",
      "name": "Do I need to provide food for the full-time maid?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While not mandatory, families in Bareilly typically offer lunch or tea to their full-time maid during the workday. Full-time maids bring their own food. But if both you and the maid are comfortable, you can decide to provide meals. Just make sure to discuss this clearly during the hiring process."
      }
    }]
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
            <main className="min-h-screen">
        <Navbar />
        
        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Full-Time House Maid' }
          ]} 
        />
      
      {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-violet-800 to-indigo-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute top-48 -left-24 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-indigo-100 text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
                PREMIUM DOMESTIC HELP
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-6 font-display leading-tight tracking-tight drop-shadow-sm">
                Full-Time Maid in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">– Consistent, Daily Help</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Let EzyHelpers take care of your home with our dedicated full-time maid in Bareilly. Each maid specialises in one key area: be it cleaning, cooking, childcare, or elderly care without overnight stay.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book a Full-Time Maid
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  '100% Verified & Background-Checked',
                  'Fixed Daily Hours (8–10 Hours)',
                  'Transparent Pricing; No Hidden Charges',
                  'Quick Replacement Guarantee',
                  'Personalized Matchmaking'
                ].map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/10 shadow-inner">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { value: '100%', label: 'Trained for Responsibilities' },
                  { value: '8–10 Hours', label: 'Daily Dedicated Service' },
                  { value: '6 Days', label: 'Weekly Consistent Support' }
                ].map((m, i) => (
                  <div key={i} className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl group hover:bg-white/10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">{m.value}</div>
                    <div className="text-indigo-200 font-medium text-sm md:text-base uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Specialised Full-Day Maid Service in Bareilly for Every Household Need */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Our Specialised Full-Day Maid Service in Bareilly</h2>
              <p className="text-xl text-gray-600">Our full-day maid service matches you with skilled helpers focused on a single role, ensuring maximum efficiency and care.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Housekeeping */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors font-display">Full-Time Maid for Housekeeping</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Experience a spotless and well-maintained home daily. Our maid is fully focused on cleanliness and household upkeep.</p>
                  
                  <div className="bg-indigo-50/50 rounded-2xl p-6 shadow-sm mb-6 border border-indigo-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Sweeping, mopping, and dusting', 'Kitchen & bathroom cleaning', 'Laundry and folding clothes', 'Dishwashing and bed-making'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Skilled in household hygiene and routine cleaning tasks.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Book a Housekeeper</Link>
                </div>
              </div>

              {/* Cooking */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-violet-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors font-display">Full-Time Maid for Cooking</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Relish homemade meals without the kitchen stress. Our full-time cook prepares fresh meals tailored to your diet.</p>
                  
                  <div className="bg-violet-50/50 rounded-2xl p-6 shadow-sm mb-6 border border-violet-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Breakfast, lunch, dinner, & snacks', 'Ingredient prep and chopping', 'Grocery list handling (if needed)', 'Cleaning utensils & stove'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Skilled in Bareilly-style North Indian meals; veg or non-veg.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-violet-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-violet-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Hire a Cook</Link>
                </div>
              </div>

              {/* Childcare */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-pink-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors font-display">Full-Time Maid for Babysitting</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Ensure your child receives full-day care, love, and learning support, even when you're away.</p>
                  
                  <div className="bg-pink-50/50 rounded-2xl p-6 shadow-sm mb-6 border border-pink-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Bathing, feeding, and nap routines', 'Homework and reading assistance', 'Playtime and indoor engagement', 'School pickup/drop (if agreed)'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Gentle, child-safe care tailored to age needs.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-pink-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Book a Babysitter</Link>
                </div>
              </div>

              {/* Elderly Care */}
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors font-display">Full-Time Maid for Elderly Care</h3>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">Your elders deserve dignity and reliable care. Our full-time caregivers are trained for senior support with compassion.</p>
                  
                  <div className="bg-blue-50/50 rounded-2xl p-6 shadow-sm mb-6 border border-blue-50 flex-grow">
                    <p className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Duties:</p>
                    <ul className="space-y-3">
                      {['Bathing and dressing assistance', 'Medication reminders', 'Walking/mobility support', 'Emotional companionship'].map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-700 mb-8"><span className="font-bold text-gray-900">Expertise:</span> Ideal for seniors with health issues or limited mobility.</p>
                  <Link href="/hire-helper" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg w-full sm:w-auto">Book a Caregiver</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs a Full-Time Maid in Bareilly? */}
        <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container-custom max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight text-white">Who Needs a Full-Time Maid in Bareilly?</h2>
              <p className="text-xl text-indigo-200">Ideal for households that need consistent daily support to manage everyday tasks smoothly and stress-free.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Working Couples', desc: 'Focus on your careers while your home stays clean and managed.' },
                { title: 'New Parents', desc: 'Get extra hands to manage chores while caring for your newborn.' },
                { title: 'Families with Elderly', desc: 'Ensure your elders receive proper care, meals, and assistance.' },
                { title: 'Single Parents', desc: 'Reliable daily help for managing both household tasks and childcare.' },
                { title: 'Busy Professionals', desc: 'Stay organised and stress-free with dependable support at home.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-2xl shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-indigo-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why Choose EzyHelpers for Your Full-Time Maid in Bareilly?</h2>
              <p className="text-xl text-gray-600">With EzyHelpers, you don't just hire a maid; you gain dependable daily support customised to your lifestyle.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Replacement Support Available',
                'Flexible Timings Based on Your Routine',
                '100% Verified & Background-Checked Maids',
                'Affordable Pricing Customized for Bareilly',
                'Dedicated Customer Support Before & After Hiring'
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 group">
                  <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    <span className="text-indigo-600 font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg leading-snug pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Easy 4-Step Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Our Easy 4-Step Maid Hiring Process</h2>
              <p className="text-xl text-gray-600">Hiring your ideal full-time maid in Bareilly is seamless with EzyHelpers.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Consultation', desc: 'Discuss your needs with our team and choose the type of maid service you want, like cleaning, cooking, childcare, or elder care.' },
                { title: 'Maid Shortlisting', desc: 'We match you with 2–3 verified candidates based on your preferences.' },
                { title: 'Interview & Selection', desc: 'Connect with shortlisted maids via call, video, or in-person interviews.' },
                { title: 'Smooth Onboarding', desc: 'Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout.' }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-white border-4 border-indigo-100 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:border-indigo-500 group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl font-bold text-indigo-600">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Consider Before Booking */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">What to Consider Before Booking a Full-Time Maid in Bareilly?</h2>
              <p className="text-xl text-gray-600">Everything You Should Know to Make the Right Hiring Decision</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: '1. Working Hours', desc: 'Maids typically work 8–10 hours a day. Please define tasks clearly at the beginning.' },
                { title: '2. Weekly Offs', desc: 'One day off per week is standard. Festivals/national holidays can be planned in advance.' },
                { title: '3. One Role, One Maid', desc: 'A full-time maid in Bareilly is dedicated to one core responsibility: cooking, cleaning, childcare, or elder care for quality and consistency.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-indigo-800 to-violet-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Get Trusted Full-Time Help with EzyHelpers Today!</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Tired of juggling work and home duties? Hire a reliable, trained, and respectful full-time maid in Bareilly from EzyHelpers today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book a Full-Time Maid
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Our Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Explore Our Other Services</h2>
              <p className="text-xl text-gray-600">Complete your household support system with EzyHelpers' trusted domestic services in Bareilly and beyond:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live-In Maid Services', desc: 'Full-day support who stay in your home and assist with daily chores.', link: '/cities/bareilly/live-in-maid', linkText: 'Learn About Live-In Maid Services' },
                { title: 'Instant maid service in Bareilly', desc: 'Instant household help for emergencies, guest visits, or special occasions.', link: '/cities/bareilly/on-demand-helper', linkText: 'Explore Instant Maid Service' },
                { title: 'Cook Services', desc: 'Skilled home cooks for daily meals, fasting food, or festive dishes.', link: '/cities/bareilly/cooks', linkText: 'Explore Cook Services' }
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{s.desc}</p>
                  </div>
                  <Link href={s.link} className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group-hover:underline">
                    {s.linkText} <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">FAQs</h2>
              <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
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
      
            <NestCTA />
      <Footer />
    </>
  )
}