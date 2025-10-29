import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  HomeIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  UsersIcon,
  UserIcon,
  SparklesIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  TrophyIcon,
  ArrowRightIcon,
  UserPlusIcon,
  BuildingOffice2Icon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Get 24/7 Help with Expert Live in Maid Services– Book Instantly',
  description: 'Live-in maid services with 24/7 support. Trained and Background verified professionals for complete home care. Quick placement in 24-72 hours guaranteed.',
  keywords: 'live-in maid, 24-hour maid, live in house maid, housekeeping, cooking, babysitting, elderly care',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/live-in-maids'
  }
}

export default function LiveInMaidsPage() {
  const services = [
    {
      title: "Live-In Maid for Housekeeping",
      description: "Imagine coming home to a spotless and organised space every day. Our live-in housekeeper is dedicated solely to maintaining the cleanliness and order of your home.",
      icon: HomeIcon,
      features: [
        "Sweeping, mopping, and dusting",
        "Kitchen & bathroom cleaning",
        "Laundry and ironing",
        "Dishwashing and utensil management",
        "Bed-making and room organization"
      ],
      expertise: "Trained in efficient and hygienic cleaning practices.",
      cta: "Book Live-In Housekeeper"
    },
    {
      title: "Live-In Maid for Cooking", 
      description: "Enjoy wholesome, home-cooked meals without the hassle. Our live-in cook specialises in preparing delicious and nutritious food tailored to your family's preferences.",
      icon: HeartIcon,
      features: [
        "Planning menus and ingredient preparation",
        "Grocery shopping (if required and agreed upon)",
        "Cooking breakfast, lunch, and dinner",
        "Post-cooking kitchen cleaning",
        "Maintaining stove and kitchen hygiene"
      ],
      expertise: "Experienced in various cuisines and dietary needs, ensuring fresh and tasty food.",
      cta: "Hire a Live-in Cook Today"
    },
    {
      title: "Live-In Maid for Elderly Care",
      description: "Compassionate support tailored to seniors’ daily needs.",
      icon: ShieldCheckIcon,
      features: [
        "Assistance with bathing, dressing, grooming",
        "Medication reminders and schedule tracking",
        "Mobility support and walking assistance",
        "Emotional support and companionship",
        "Light tasks to maintain their comfort"
      ],
      expertise: "Trained in providing respectful and empathetic care for the elderly, focusing on their dignity and comfort.",
      cta: "Book Live-In Elder Care"
    },
    {
      title: "Live-In Maid for Babysitting (Child Care)",
      description: "Ensure your children receive attentive and loving care even when you're busy. Our live-in babysitter is trained in child care and safety.",
      icon: ClockIcon,
      features: [
        "Supervising and engaging children in age-appropriate activities",
        "Feeding, bathing, and hygiene support",
        "Helping with schoolwork and reading",
        "School pickup and drop coordination",
        "Nap routines and bedtime care"
      ],
      expertise: "Experienced in child development and emergency protocols, providing a safe and nurturing environment.",
      cta: "Get a Live-In Babysitter"
    }
  ]

  const benefits = [
    "100% Verified & Background-Checked Maids",
    "Specialised Support – One Maid for One Task",
    "Quick Replacements & Fast Turnaround",
    "24x7 Customer Assistance",
    "Ongoing Support Even After Hiring",
    "Transparent Pricing with No Hidden Charges"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Column */}
              <div className="text-center lg:text-left">
                {/* Trust Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <StarIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold">Trusted by 10,000+ Families</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Live-In Maid Services – Dedicated Help for Every Need
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  EzyHelpers connects you with trained and background-verified live-in maids specialised in housekeeping, cooking, childcare, or elder care, making home management easier with dedicated support customised to your family’s specific needs.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {[
                    '100% Verified & Background-Checked',
                    'Quick Replacement Guarantee',
                    'Personalized Matchmaking',
                    'Flexible Contract Options'
                  ].map((pill, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {pill}</div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book a Live-In Maid Now</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call Us for Quick Assistance</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-primary-200 text-sm">Customer Satisfaction Rate</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">24-Hour</div>
                    <div className="text-primary-200 text-sm">Maid Replacement</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">10,000+</div>
                    <div className="text-primary-200 text-sm">Happy Households Served</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-primary-200 text-sm">Verified & Trained Professionals</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-blue-100">House Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-red-100">Meal Preparation</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Child Care</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">Elderly Care</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                    <ClockIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers for Your Live-In Maid Needs?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We make finding the right domestic help simple, safe, and fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-success-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Specialized Live-In Maid Services for Every Household Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from expert categories of live-in maids, each focused on a specific household role.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {service.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                      {service.expertise && (
                        <p className="text-gray-700 mt-3"><span className="font-semibold">Expertise:</span> {service.expertise}</p>
                      )}
                      {service.cta && (
                        <div className="mt-4">
                          <Link href="/hire-helper" className="inline-flex items-center text-primary-700 font-semibold hover:underline">
                            {service.cta}
                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Needs a Live-In Maid?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Live-in maids are the ideal solution for households that need dependable, all-day support with minimal hassle. Here's who can benefit the most:
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ul className="list-disc pl-6 text-gray-700 space-y-2 text-lg">
              <li>Working couples needing help with housekeeping or cooking.</li>
              <li>New parents requiring a trustworthy babysitter.</li>
              <li>Families with elderly members who need constant care.</li>
              <li>Busy professionals who want a well-maintained home.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Easy 4-Step Maid Hiring Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hiring a live-in maid with EzyHelpers is smooth and stress-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Discuss your needs with our team and choose the type of maid service you want, like cleaning, cooking, childcare, or elder care."
              },
              {
                step: "2", 
                title: "Maid Shortlisting",
                description: "We match you with 2–3 verified candidates based on your preferences."
              },
              {
                step: "3",
                title: "Interview & Selection", 
                description: "Connect with shortlisted maids via call, video or in-person interviews."
              },
              {
                step: "4",
                title: "Smooth Onboarding",
                description: "Once selected, we handle the documentation, and your maid begins with a trial period. The support team stays in touch throughout."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Know Before Hiring */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Things to Know Before Hiring a 24-Hour Maid</h2>
            <p className="text-lg text-gray-600">Everything you should know to make the right hiring decision.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Living Arrangements</h3>
              <p className="text-gray-700">Live-in maids should be provided with a separate room or shared room based on your household setup. Basic amenities such as a bed, cot or mattress and access to a private or shared bathroom must be arranged depending on available resources.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Work Schedule Clarity</h3>
              <p className="text-gray-700">While the maid stays at your home 24/7, she works for a structured 12 hours daily. Clearly outline expectations around duty hours, break times, and rest periods to avoid overwork or misunderstanding.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. Monthly Offs</h3>
              <p className="text-gray-700">Every live-in maid is entitled to 2 days off per month, which should be respected and planned in advance to support her physical and mental well-being.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">4. One Role Per Maid</h3>
              <p className="text-gray-700">Each live-in maid is assigned only one responsibility at a time, such as housekeeping, cooking, babysitting, or elderly care for quality and focus. Maids are not expected to handle multiple duties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about live-in maid services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { question: 'What services does a live-in maid provide?', answer: 'A live-in maid stays in your home full-time and works up to 12 hours a day. She focuses on one task only, such as housekeeping, cooking, babysitting (child care), or elderly care. You can choose the type of help your family needs most.' },
                { question: 'Are live-in maids background-verified?', answer: 'Yes, all our live-in maids are background verified. We check Aadhaar, local address (if available), and basic identity. Police verification and medical checkups can also be arranged at an extra cost for added peace of mind.' },
                { question: 'Does a live-in maid handle multiple household tasks?', answer: 'No, each live-in maid is trained for one specific task only, either cleaning, cooking, child care, or elder care. This ensures better quality and focus. Minor extra help may be provided only if both sides agree.' },
                { question: 'How is a live-in maid different from a full-time or part-time maid?', answer: 'A live-in maid stays at your home 24x7 and works a structured 12-hour shift every day. In contrast, full-time and part-time maids come from outside and leave after completing their 8–10 hour or 2–6 hour shifts.' },
                { question: 'What is the difference between a live-in maid and a full-time maid?', answer: 'A live-in maid lives in your home and offers full-day support, while a full-time maid comes daily but does not stay overnight. Live-in maids offer better continuity and are ideal for families who need a reliable, round-the-clock presence.' },
                { question: 'What are the working hours for a live-in maid?', answer: 'Live-in maids work for 12 hours a day with a fixed schedule. They stay 24 hours at your home but are not expected to work all day or during the night.' },
                { question: 'Do I need to provide accommodation for the live-in maid?', answer: 'Yes. You’ll need to provide a room (private or shared) with basic facilities like a bed, mattress, or cot, and bathroom access. A comfortable space helps the maid feel at home and do her job better.' },
                { question: 'Can I hire a live-in maid just for cooking or babysitting?', answer: 'Absolutely. You can hire a live-in maid specifically for cooking, housekeeping, child care, or elderly care. Each maid is trained in only one area and is placed based on your exact household needs.' },
                { question: 'How fast can EzyHelpers place a live-in maid in my home?', answer: 'In most cases, we can place a live-in maid within 24 to 72 hours after understanding your needs. You’ll get profiles of trained and background-verified maids to choose from quickly.' },
                { question: "What qualifications or training do EzyHelpers' live-in maids have?", answer: 'Our live-in maids are trained in their specific roles, whether it’s hygiene and cleaning, cooking meals, child safety and development, or senior care. We also verify their previous work experience and ensure they’re ready for real-life tasks.' },
                { question: 'How many off days do live-in maids get?', answer: 'Every live-in maid is entitled to two off days per month. These can be decided in advance by mutual agreement. Respecting off days helps the maid stay motivated and refreshed.' },
                { question: 'Can I interview the live-in maid before hiring?', answer: 'Yes. We arrange interviews with 2–3 shortlisted maids via phone or video call. You can speak to them, ask questions, and choose the one that feels right for your home.' },
                { question: 'Is the pricing for live-in maid services fixed?', answer: 'Pricing is flexible and depends on the role (cooking, cleaning, etc.), the maid’s experience, and your location. We offer transparent rates without hidden charges, and you pay directly to the helper. Contact us for a detailed quote.' },
                { question: 'Is there a trial period for live-in maids?', answer: 'Yes, we offer a trial period if you’d like to assess the maid before finalising. However, many families skip the trial once they’re satisfied after the interview. We leave the choice up to you.' }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 transition-transform group-open:rotate-180">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Block */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Find Your Trusted Live-In Maid with EzyHelpers Today!</h2>
              <p className="text-lg text-gray-700">Don’t let household chores or care responsibilities overwhelm you. With EzyHelpers, get reliable, background-verified live-in maids who fit right into your home and schedule.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors shadow">
                Book Your Live-In Maid
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
              <Link href="tel:+919972571005" className="inline-flex items-center bg-white border-2 border-primary-200 text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition-colors">
                <PhoneIcon className="h-5 w-5 mr-2" />
                Speak to Our Support Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-primary-100 text-primary-800 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Complete Home Care Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete your home care needs with our wide range of professional domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Full-Time Maid Services",
                description: "Daily household help without live-in commitment",
                href: "/services/full-time-maids",
                icon: BuildingOffice2Icon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "Part-Time Maid Services", 
                description: "Flexible cleaning on your schedule without full commitment",
                href: "/services/part-time-maids",
                icon: SparklesIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Cook Services",
                description: "Delicious, hassle-free meals every day from professional cooks",
                href: "/services/cooks",
                icon: HeartIcon,
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                borderColor: "border-pink-200"
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link
              href="/hire-helper"
              className="inline-flex items-center bg-primary-600 text-white hover:bg-primary-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </main>
    </>
  )
} 