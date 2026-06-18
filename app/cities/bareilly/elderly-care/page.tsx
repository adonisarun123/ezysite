import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'
import NestCTA from '@/components/NestCTA'

export const metadata: Metadata = {
  title: 'Caretaker for Elderly in Bareilly – Compassionate Support',
  description: 'Get caretaker for elderly at home in Bareilly with trained staff for hygiene, medication, companionship, and emotional support for your loved ones.',
  openGraph: {
    title: 'Caretaker for Elderly in Bareilly – Compassionate Support',
    description: 'Get caretaker for elderly at home in Bareilly with trained staff for hygiene, medication, companionship, and emotional support for your loved ones.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/elderly-care',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/elderly-care'
  }
}

export default async function BareillyElderlyCare() {
  const __dbHtml = await getHtmlContent("cities/bareilly/elderly-care")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What does daily personal care include for elderly at home in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Daily personal care by a caretaker for elderly at home in Bareilly includes bathing, grooming, dressing, toilet assistance, and maintaining hygiene. EzyHelpers’ home elder care services in Bareilly ensure seniors feel clean, comfortable, and cared for with dignity and respect."
      }
    },{
      "@type": "Question",
      "name": "Do elderly caretakers in Bareilly help with medicine management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, under our home elder care services in Bareilly, caretakers for elderly at home help with timely medication reminders and dosage assistance as per doctor’s advice, ensuring seniors maintain their health routines safely and consistently."
      }
    },{
      "@type": "Question",
      "name": "Do your elderly caretakers in Bareilly help with personal hygiene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our caretaker for elderly at home in Bareilly assists with hygiene tasks such as bathing, grooming, dressing, and cleanliness. EzyHelpers ensures seniors receive respectful and supportive hygiene care at home."
      }
    },{
      "@type": "Question",
      "name": "What kind of meals do your caretakers prepare for seniors in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our home elder care services in Bareilly include preparing healthy and locally preferred meals. Caretakers for elderly at home consider dietary restrictions, personal taste, and medical needs while cooking for seniors."
      }
    },{
      "@type": "Question",
      "name": "Can I get a caretaker for post-hospital recovery at home in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers offers caretakes in Bareilly trained in post-hospital recovery. Our services include medication support, diet monitoring, rest assistance, and safe mobility during the recovery period."
      }
    },{
      "@type": "Question",
      "name": "Do elderly care assistants help elderly people with mobility in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our caretakers for elderly at home in Bareilly support safe movement within the home. As part of our home elder care services in Bareilly, they help with walking, standing, sitting, and preventing falls."
      }
    },{
      "@type": "Question",
      "name": "Are your caregivers trained in elder safety and emergency response?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers’ caretaker for elderly at home in Bareilly is trained in elder safety, including fall prevention, emergency support, and care for chronic conditions like diabetes and high blood pressure."
      }
    },{
      "@type": "Question",
      "name": "Do you offer elder care for seniors with memory loss in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our home elder care services in Bareilly include support for seniors with memory issues. Caretakers provide calm, patient, and structured care for conditions like forgetfulness and confusion."
      }
    },{
      "@type": "Question",
      "name": "Do elderly caretakers in Bareilly provide night-time assistance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a live-in caretaker for elderly at home in Bareilly offers full night-time assistance. Our home elder care services cover late-night bathroom help, medication support, and comfort during sleep disturbances."
      }
    },{
      "@type": "Question",
      "name": "Do you provide male and female senior care assistants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers provides both male and female caretaker for elderly at home in Bareilly. Families can choose based on preference and comfort, with all caregivers fully trained and verified."
      }
    },{
      "@type": "Question",
      "name": "How does EzyHelpers ensure quality in home elder care services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers maintains high standards for home elder care services in Bareilly by selecting trained, background-verified caregivers. We offer regular monitoring, family feedback, and active support to ensure consistent elder care quality."
      }
    },{
      "@type": "Question",
      "name": "Are elderly caretakers in Bareilly available for recovering patients?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our caretaker for the elderly are trained to care for recovering seniors. EzyHelpers provides post-hospital home elder care services that include medicine management, nutrition, and gentle physical support."
      }
    },{
      "@type": "Question",
      "name": "Are the caretakers trained to handle medical equipment or devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While they are not medical professionals, our caretakers for elderly at home in Bareilly are trained to assist with basic medical equipment under supervision. As part of our home elder care services in Bareilly, they can help with tasks like checking blood pressure, using digital thermometers, and supporting doctor-advised routines safely and confidently."
      }
    }]
  };
  const serviceBadges = [
    'Background Verified Caretakers',
    'Compassionate Care',
    'Complete Elder Care Support',
    'Affordable Monthly Plans'
  ]

  const highlightMetrics = [
    { value: '500+', label: 'Happy Families' },
    { value: 'Reliable', label: 'Senior Support' },
    { value: '100%', label: 'Verified & Experienced' }
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
            { label: 'Elderly Care' }
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
                PREMIUM ELDER CARE
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white tracking-tight drop-shadow-sm">
                Caretaker for Elderly at Home in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">– Trustworthy Support</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Get verified, trained caretakers for elderly at home in Bareilly for daily support, health monitoring, and compassionate care.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book Elderly Care
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  'Background Verified Caretakers',
                  'Compassionate Care',
                  'Complete Elder Care Support',
                  'Affordable Monthly Plans'
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
                  { value: '500+', label: 'Happy Families' },
                  { value: 'Reliable', label: 'Senior Support' },
                  { value: '100%', label: 'Verified & Experienced' }
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
        
        {/* Why choose EzyHelpers */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why choose EzyHelpers Home Elder Care Services in Bareilly?</h2>
              <p className="text-xl text-gray-600">We provide personalised, respectful, and reliable elder care services tailored to Bareilly's family values.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Respects traditions with cultural sensitivity and daily elder routines',
                'Handles joint families with care and family harmony',
                'Fast placement service with verified local caretakers',
                'Ensures timely medicine and diet reminders for senior health',
                'Family updates and support with regular check-ins',
                'Trained in senior care skills and emergency handling'
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

        {/* Services Offered by Elderly Caretakers */}
        <section className="section-padding bg-white relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Services Offered by Elderly Caretakers</h2>
              <p className="text-xl text-gray-600">Our elderly caretakers in Bareilly provide complete support for seniors:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Daily Personal Care', desc: 'Helping with bathing, dressing, and grooming, ensuring hygiene and comfort for elderly family members.', color: 'indigo' },
                { title: 'Medicine Management', desc: 'Reminding and assisting with timely medication, as per the doctor\'s advice.', color: 'violet' },
                { title: 'Meal Preparation', desc: 'Cooking healthy and favourite meals, keeping in mind dietary needs and local tastes.', color: 'pink' },
                { title: 'Light Household Chores', desc: 'Keeping the elder\'s living area clean and tidy, like sweeping and dusting.', color: 'blue' },
                { title: 'Mobility Support', desc: 'Assisting with moving around the house, going for walks, and preventing falls.', color: 'emerald' },
                { title: 'Companionship & Engagement', desc: 'Spending quality time, listening, and encouraging light activities or religious practices.', color: 'amber' }
              ].map((service, idx) => (
                <div key={idx} className={`bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:border-${service.color}-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${service.color}-100 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110`}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl font-bold text-${service.color}-600`}>{idx + 1}</div>
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:text-${service.color}-700 transition-colors font-display`}>{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow text-lg">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs Elderly Care Services in Bareilly? */}
        <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container-custom max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight text-white">Who Needs Elderly Care Services in Bareilly?</h2>
              <p className="text-xl text-indigo-200">Life gets easier with a trusted caretaker for your ageing loved ones:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'Working Couples', desc: 'Get trusted elder care at home while you work peacefully.' },
                { title: 'Migrated Professionals', desc: 'Support your parents back home if you live outside Bareilly.' },
                { title: 'Recovering Patients', desc: 'Ongoing care for seniors healing from illness, injury, or surgery.' },
                { title: 'Seniors with Limited Mobility', desc: 'Help with movement, toilet needs, and preventing falls.' },
                { title: 'Post-Hospitalization Care', desc: 'Support after hospital discharge, including medicine, meals, rest, and mobility assistance.' }
              ].map((item, i) => (
                <div key={i} className={`bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-2xl shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 ${i === 4 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-indigo-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Senior Care Options for Every Need */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Flexible Senior Care Options for Every Need</h2>
              <p className="text-xl text-gray-600">Choose an elder care option that suits your Bareilly family's routine and comfort:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Live-In Elderly Caretakers', desc: 'Round-the-clock elder support for personal hygiene, medication, companionship, and emergency needs.', perks: ['12-Hour Daily Shifts', 'Night-time assistance', 'Fall prevention', 'Emotional support'] },
                { title: 'Full-Time Elderly Caretakers', desc: '8–10 hours of daily care for seniors, including meals, medicine reminders, and safe mobility.', perks: ['Daytime supervision', 'Meal preparation', 'Medicine reminders', 'Walking assistance'] },
                { title: 'Part-Time Elderly Caretakers', desc: 'Flexible senior care for 2–6 hours, ideal for personal care and routine help.', perks: ['Personal hygiene', 'Light exercise support', 'Companionship', 'Flexible timings'] }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6 h-24">{item.desc}</p>
                  <ul className="space-y-3 border-t border-gray-100 pt-6">
                    {item.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700 font-medium">
                        <span className="text-emerald-500 font-bold">✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Easy 4-Step Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Your Easy 4-Step Hiring Process</h2>
              <p className="text-xl text-gray-600">Hiring a caretaker for the elderly at home in Bareilly is simple with EzyHelpers:</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Personal Consultation', desc: 'We understand your elder\'s specific needs and suggest the best care plan.' },
                { title: 'Caretaker Selection', desc: 'We shortlist 2-3 background-verified caretakers matching your requirements.' },
                { title: 'Interview & Review', desc: 'Talk to shortlisted caretakers through phone, video call, or in-person meetings.' },
                { title: 'Easy Onboarding', desc: 'After selection, the caretaker is placed smoothly with full documentation and ongoing support.' }
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

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-indigo-800 to-violet-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 opacity-20 mix-blend-overlay"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Book our Home Senior Care Services today!</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Don't leave your loved ones alone. EzyHelpers provides trusted, local, and compassionate elder care in Bareilly.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book Elder Care
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Caregiving Philosophy */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-8 border-indigo-500 bg-indigo-50/50 p-8 md:p-12 rounded-r-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Our Caregiving Philosophy</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>At EzyHelpers, we understand that choosing a caretaker for elderly at home in Bareilly is not just a practical decision, it's deeply emotional.</p>
              <p className="font-medium text-indigo-900 text-xl py-2">Our home elder care services in Bareilly begin with hiring individuals who naturally connect with elderly people.</p>
              <p>With EzyHelpers' home elder care services in Bareilly, your family gains not just a helper, but a reliable companion.</p>
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Explore Other Services</h2>
              <p className="text-xl text-gray-600">Beyond elderly care, EzyHelpers offers comprehensive home support services for Bareilly families:</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Housekeeping & Deep Cleaning', desc: 'Professional deep cleaning, sofa washing, and kitchen sanitisation.', link: '/cities/bareilly/home-deep-cleaning', linkText: 'Learn More About Cleaning Services' },
                { title: 'Cook Services in Bareilly', desc: 'Expert cooks for daily meals, special occasions, or diet-specific cooking.', link: '/cities/bareilly/cooks', linkText: 'Learn More About Cook Services' },
                { title: 'Driver Services', desc: 'Reliable drivers for school pickups, grocery runs, and local travel.', link: '/cities/bareilly/drivers', linkText: 'Learn More About Driver Services' }
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
                {
                  question: "What does daily personal care include for elderly at home in Bareilly?",
                  answer: "Daily personal care by a caretaker for elderly at home in Bareilly includes bathing, grooming, dressing, toilet assistance, and maintaining hygiene. EzyHelpers’ home elder care services in Bareilly ensure seniors feel clean, comfortable, and cared for with dignity and respect."
                },
                {
                  question: "Do elderly caretakers in Bareilly help with medicine management?",
                  answer: "Yes, under our home elder care services in Bareilly, caretakers for elderly at home help with timely medication reminders and dosage assistance as per doctor’s advice, ensuring seniors maintain their health routines safely and consistently."
                },
                {
                  question: "Do your elderly caretakers in Bareilly help with personal hygiene?",
                  answer: "Yes, our caretaker for elderly at home in Bareilly assists with hygiene tasks such as bathing, grooming, dressing, and cleanliness. EzyHelpers ensures seniors receive respectful and supportive hygiene care at home."
                },
                {
                  question: "What kind of meals do your caretakers prepare for seniors in Bareilly?",
                  answer: "Our home elder care services in Bareilly include preparing healthy and locally preferred meals. Caretakers for elderly at home consider dietary restrictions, personal taste, and medical needs while cooking for seniors."
                },
                {
                  question: "Can I get a caretaker for post-hospital recovery at home in Bareilly?",
                  answer: "Yes, EzyHelpers offers caretakes in Bareilly trained in post-hospital recovery. Our services include medication support, diet monitoring, rest assistance, and safe mobility during the recovery period."
                },
                {
                  question: "Do elderly care assistants help elderly people with mobility in Bareilly?",
                  answer: "Yes, our caretakers for elderly at home in Bareilly support safe movement within the home. As part of our home elder care services in Bareilly, they help with walking, standing, sitting, and preventing falls."
                },
                {
                  question: "Are your caregivers trained in elder safety and emergency response?",
                  answer: "Yes, EzyHelpers’ caretaker for elderly at home in Bareilly is trained in elder safety, including fall prevention, emergency support, and care for chronic conditions like diabetes and high blood pressure."
                },
                {
                  question: "Do you offer elder care for seniors with memory loss in Bareilly?",
                  answer: "Yes, our home elder care services in Bareilly include support for seniors with memory issues. Caretakers provide calm, patient, and structured care for conditions like forgetfulness and confusion."
                },
                {
                  question: "Do elderly caretakers in Bareilly provide night-time assistance?",
                  answer: "Yes, a live-in caretaker for elderly at home in Bareilly offers full night-time assistance. Our home elder care services cover late-night bathroom help, medication support, and comfort during sleep disturbances."
                },
                {
                  question: "Do you provide male and female senior care assistants?",
                  answer: "Yes, EzyHelpers provides both male and female caretaker for elderly at home in Bareilly. Families can choose based on preference and comfort, with all caregivers fully trained and verified."
                },
                {
                  question: "How does EzyHelpers ensure quality in home elder care services in Bareilly?",
                  answer: "EzyHelpers maintains high standards for home elder care services in Bareilly by selecting trained, background-verified caregivers. We offer regular monitoring, family feedback, and active support to ensure consistent elder care quality."
                },
                {
                  question: "Are elderly caretakers in Bareilly available for recovering patients?",
                  answer: "Yes, our caretaker for the elderly are trained to care for recovering seniors. EzyHelpers provides post-hospital home elder care services that include medicine management, nutrition, and gentle physical support."
                },
                {
                  question: "Are the caretakers trained to handle medical equipment or devices?",
                  answer: "While they are not medical professionals, our caretakers for elderly at home in Bareilly are trained to assist with basic medical equipment under supervision. As part of our home elder care services in Bareilly, they can help with tasks like checking blood pressure, using digital thermometers, and supporting doctor-advised routines safely and confidently."
                }
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
