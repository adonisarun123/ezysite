import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon } from '@heroicons/react/24/outline'

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

export default function BareillyElderlyCare() {
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
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb 
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Elderly Care Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-display leading-tight text-white">
                Caretaker for Elderly at Home in Bareilly – Trustworthy Support for Your Loved Ones
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                Get verified, trained caretakers for elderly at home in Bareilly for daily support, health monitoring, and compassionate care, ensuring your elders feel safe and cared for at home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Elderly Care
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call 080-31411776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                {serviceBadges.map((b, i) => (
                  <span key={i} className="text-sm bg-white/10 border border-white/20 rounded-full px-3 py-1">
                    ✓ {b}
                  </span>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {highlightMetrics.map((m, i) => (
                  <div key={i} className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                    <div className="text-purple-100">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Why choose EzyHelpers Home Elder Care Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why choose EzyHelpers Home Elder Care Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">We provide personalised, respectful, and reliable elder care services tailored to Bareilly’s family values.</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-gray-700">
              <li>• Respects traditions with cultural sensitivity and daily elder routines</li>
              <li>• Handles joint families with care and family harmony</li>
              <li>• Fast placement service with verified local caretakers</li>
              <li>• Ensures timely medicine and diet reminders for senior health</li>
              <li>• Family updates and support with regular check-ins</li>
              <li>• Trained in senior care skills and emergency handling</li>
            </ul>
          </div>
        </section>

        {/* Services Offered by Elderly Caretakers */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Services Offered by Elderly Caretakers</h2>
              <p className="text-lg text-gray-600">Our elderly caretakers in Bareilly provide complete support for seniors:</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">1.  Daily Personal Care</h3>
                <p>Helping with bathing, dressing, and grooming, ensuring hygiene and comfort for elderly family members.</p>
              </div>
              <div>
                <h3 className="font-semibold">2.  Medicine Management</h3>
                <p>Reminding and assisting with timely medication, as per the doctor's advice.</p>
              </div>
              <div>
                <h3 className="font-semibold">3.  Meal Preparation</h3>
                <p>Cooking healthy and favourite meals, keeping in mind dietary needs and local tastes.</p>
              </div>
              <div>
                <h3 className="font-semibold">4.  Light Household Chores</h3>
                <p>Keeping the elder's living area clean and tidy, like sweeping and dusting.</p>
              </div>
              <div>
                <h3 className="font-semibold">5.  Mobility Support</h3>
                <p>Assisting with moving around the house, going for walks, and preventing falls.</p>
              </div>
              <div>
                <h3 className="font-semibold">6.  Companionship & Engagement</h3>
                <p>Spending quality time, listening, and encouraging light activities or religious practices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who Needs Elderly Care Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs Elderly Care Services in Bareilly?</h2>
              <p className="text-lg text-gray-600">Life gets easier with a trusted caretaker for your ageing loved ones:</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold">1.  Working Couples</h3>
                <p>Get trusted elder care at home while you work peacefully.</p>
              </div>
              <div>
                <h3 className="font-semibold">2.  Migrated Professionals</h3>
                <p>Support your parents back home if you live outside Bareilly.</p>
              </div>
              <div>
                <h3 className="font-semibold">3.  Recovering Patients</h3>
                <p>Ongoing care for seniors healing from illness, injury, or surgery.</p>
              </div>
              <div>
                <h3 className="font-semibold">4.  Seniors with Limited Mobility</h3>
                <p>Help with movement, toilet needs, and preventing falls.</p>
              </div>
              <div>
                <h3 className="font-semibold">5.  Post-Hospitalization Care</h3>
                <p>Support after hospital discharge, including medicine, meals, rest, and mobility assistance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Flexible Senior Care Options for Every Need */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Senior Care Options for Every Need</h2>
              <p className="text-lg text-gray-600">Choose an elder care option that suits your Bareilly family’s routine and comfort:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Live-In Elderly Caretakers</h3>
                <p className="text-gray-600 mb-3">Round-the-clock elder support for personal hygiene, medication, companionship, and emergency needs.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ 12-Hour Daily Shifts</li>
                  <li>✅ Night-time assistance</li>
                  <li>✅ Fall prevention</li>
                  <li>✅ Emotional support</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Full-Time Elderly Caretakers</h3>
                <p className="text-gray-600 mb-3">8–10 hours of daily care for seniors, including meals, medicine reminders, and safe mobility.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ Daytime supervision</li>
                  <li>✅ Meal preparation</li>
                  <li>✅ Medicine reminders</li>
                  <li>✅ Walking assistance</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-3">Part-Time Elderly Caretakers</h3>
                <p className="text-gray-600 mb-3">Flexible senior care for 2–6 hours, ideal for personal care and routine help.</p>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ Personal hygiene</li>
                  <li>✅ Light exercise support</li>
                  <li>✅ Companionship</li>
                  <li>✅ Flexible timings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Your Easy 4-Step Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Your Easy 4-Step Hiring Process</h2>
            <p className="text-gray-700 mb-4 text-center">Hiring a caretaker for the elderly at home in Bareilly is simple with EzyHelpers:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Personal Consultation</strong> – We understand your elder’s specific needs and suggest the best care plan.</li>
              <li><strong>Caretaker Selection</strong> – We shortlist 2-3 background-verified caretakers matching your requirements.</li>
              <li><strong>Interview & Review</strong> – Talk to shortlisted caretakers through phone, video call, or in-person meetings.</li>
              <li><strong>Easy Onboarding</strong> – After selection, the caretaker is placed smoothly with full documentation and ongoing support.</li>
            </ol>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">Explore Other Services</h2>
            <p className="text-lg text-gray-600 text-center mb-8">Beyond elderly care, EzyHelpers offers comprehensive home support services for Bareilly families:</p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Housekeeping & Deep Cleaning</h3>
                <p className="text-gray-600">Professional deep cleaning, sofa washing, and kitchen sanitisation.</p>
                <Link href="/cities/bareilly/home-cleaning" className="text-purple-600 font-semibold mt-2 inline-block">Learn More About Cleaning Services</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Cook Services in Bareilly</h3>
                <p className="text-gray-600">Expert cooks for daily meals, special occasions, or diet-specific cooking.</p>
                <Link href="/cities/bareilly/cooks" className="text-purple-600 font-semibold mt-2 inline-block">Learn More About Cook Services</Link>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">Driver Services</h3>
                <p className="text-gray-600">Reliable drivers for school pickups, grocery runs, and local travel.</p>
                <Link href="/cities/bareilly/drivers" className="text-purple-600 font-semibold mt-2 inline-block">Learn More About Driver Services</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Book our Home Senior Care Services today!</h2>
              <p className="text-xl mb-8 text-purple-100">Don’t leave your loved ones alone. EzyHelpers provides trusted, local, and compassionate elder care in Bareilly.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300">Book Elder Care</Link>
                <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Quick Caretaker
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Caregiving Philosophy */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">Our Caregiving Philosophy: Compassionate Care You Can Trust</h2>
            <p className="text-gray-700 mb-4">At EzyHelpers, we understand that choosing a caretaker for elderly at home in Bareilly is not just a practical decision, it’s deeply emotional. That’s why we focus on building a team of caregivers who are not only skilled and trained but also genuinely compassionate and respectful toward seniors. Each caregiver we select reflects our values of trust, empathy, and responsibility.</p>
            <p className="text-gray-700 mb-4">Our home elder care services in Bareilly begin with hiring individuals who naturally connect with elderly people, those who are patient, warm-hearted, and attentive to the needs of ageing individuals. Whether your loved one needs help walking, reminders for medicines, or simply someone to talk to, our caretakers offer care that is both professional and deeply human.</p>
            <p className="text-gray-700 mb-4">We train all caretakers in essential elder care practices, including hygiene support, fall prevention, chronic illness care (like diabetes and blood pressure), and safe mobility assistance. They also learn how to support memory-related issues like forgetfulness or confusion with calmness and reassurance.</p>
            <p className="text-gray-700">What makes our approach truly personal is our effort to match each elder with a caretaker who understands their daily routine, language preference, and family culture. Whether it’s respecting religious habits, dietary customs, or simply chatting about old memories, we ensure your loved one feels valued and at ease.</p>
            <p className="text-gray-700 mt-4">With EzyHelpers’ home elder care services in Bareilly, your family gains not just a helper, but a reliable companion who treats your elder with the dignity, attention, and kindness they truly deserve.</p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
            <FAQAccordion
              faqs={[
                { question: 'What does daily personal care include for elderly at home in Bareilly?', answer: 'Daily personal care by a caretaker for elderly at home in Bareilly includes bathing, grooming, dressing, toilet assistance, and maintaining hygiene. EzyHelpers’ home elder care services in Bareilly ensure seniors feel clean, comfortable, and cared for with dignity and respect.' },
                { question: 'Do elderly caretakers in Bareilly help with medicine management?', answer: 'Yes, under our home elder care services in Bareilly, caretakers for elderly at home help with timely medication reminders and dosage assistance as per doctor’s advice, ensuring seniors maintain their health routines safely and consistently.' },
                { question: 'Do your elderly caretakers in Bareilly help with personal hygiene?', answer: 'Yes, our caretaker for elderly at home in Bareilly assists with hygiene tasks such as bathing, grooming, dressing, and cleanliness. EzyHelpers ensures seniors receive respectful and supportive hygiene care at home.' },
                { question: 'What kind of meals do your caretakers prepare for seniors in Bareilly?', answer: 'Our home elder care services in Bareilly include preparing healthy and locally preferred meals. Caretakers for elderly at home consider dietary restrictions, personal taste, and medical needs while cooking for seniors.' },
                { question: 'Can I get a caretaker for post-hospital recovery at home in Bareilly?', answer: 'Yes, EzyHelpers offers caretakes in Bareilly trained in post-hospital recovery. Our services include medication support, diet monitoring, rest assistance, and safe mobility during the recovery period.' },
                { question: 'Do elderly care assistants help elderly people with mobility in Bareilly?', answer: 'Yes, our caretakers for elderly at home in Bareilly support safe movement within the home. As part of our home elder care services in Bareilly, they help with walking, standing, sitting, and preventing falls.' },
                { question: 'Are your caregivers trained in elder safety and emergency response?', answer: 'Yes, EzyHelpers’ caretaker for elderly at home in Bareilly is trained in elder safety, including fall prevention, emergency support, and care for chronic conditions like diabetes and high blood pressure.' },
                { question: 'Do you offer elder care for seniors with memory loss in Bareilly?', answer: 'Yes, our home elder care services in Bareilly include support for seniors with memory issues. Caretakers provide calm, patient, and structured care for conditions like forgetfulness and confusion.' },
                { question: 'Do elderly caretakers in Bareilly provide night-time assistance?', answer: 'Yes, a live-in caretaker for elderly at home in Bareilly offers full night-time assistance. Our home elder care services cover late-night bathroom help, medication support, and comfort during sleep disturbances.' },
                { question: 'Do you provide male and female senior care assistants?', answer: 'Yes, EzyHelpers provides both male and female caretaker for elderly at home in Bareilly. Families can choose based on preference and comfort, with all caregivers fully trained and verified.' },
                { question: 'How does EzyHelpers ensure quality in home elder care services in Bareilly?', answer: 'EzyHelpers maintains high standards for home elder care services in Bareilly by selecting trained, background-verified caregivers. We offer regular monitoring, family feedback, and active support to ensure consistent elder care quality.' },
                { question: 'Are elderly caretakers in Bareilly available for recovering patients?', answer: 'Yes, our caretaker for the elderly are trained to care for recovering seniors. EzyHelpers provides post-hospital home elder care services that include medicine management, nutrition, and gentle physical support.' },
                { question: 'Are the caretakers trained to handle medical equipment or devices?', answer: 'While they are not medical professionals, our caretakers for elderly at home in Bareilly are trained to assist with basic medical equipment under supervision. As part of our home elder care services in Bareilly, they can help with tasks like checking blood pressure, using digital thermometers, and supporting doctor-advised routines safely and confidently.' }
              ]}
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
