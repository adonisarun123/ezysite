import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  CalendarDaysIcon,
  StarIcon,
  SparklesIcon,
  UserIcon,
  ArrowRightIcon,
  BuildingOffice2Icon,
  UserPlusIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Part-Time Maid Services – Flexible Help, When You Need It',
  description:
    'Looking for household help without a live-in commitment? EzyHelpers connects you with experienced part-time maids who visit your home for a few hours a day for cleaning, cooking, childcare, elderly care, or specific tasks—based on your schedule and needs.',
  keywords: 'part time maid, hourly maid, house help, cooking maid, babysitter, elderly care',
}

export default function PartTimeMaidsPage() {
  const services = [
    {
      title: "Part-time Maid for Housekeeping",
      description: "Keep your home neat and organised on your schedule.",
      icon: HomeIcon,
      features: [
        "Sweeping, mopping, and dusting",
        "Kitchen and bathroom cleaning",
        "Laundry and ironing",
        "Bed-making and room organisation",
        "Surface cleaning and clutter removal"
      ],
      expertise: "Trained in hygienic, time-efficient cleaning methods with flexible timing options."
    },
    {
      title: "Part-time Maid for Cooking", 
      description: "Enjoy fresh, home-cooked meals at the hours you prefer.",
      icon: HeartIcon,
      features: [
        "Menu planning and basic grocery support (if required)",
        "Preparing breakfast, lunch, or dinner",
        "Cutting, chopping, and ingredient prep",
        "Kitchen cleaning and dishwashing after meals",
        "Maintaining overall kitchen hygiene"
      ],
      expertise: "Skilled in various cuisines and dietary preferences with customisable timings."
    },
    {
      title: "Part-time Maid for Babysitting",
      description: "Attentive child care exactly when you need it.",
      icon: CalendarDaysIcon,
      features: [
        "Feeding and hygiene care",
        "Supervising playtime and learning activities",
        "Helping with homework and school readiness",
        "Pickup and drop-off assistance (if applicable)",
        "Bedtime prep during evening shifts"
      ],
      expertise: "Experienced in child safety, development, and emergency response during scheduled hours."
    },
    {
      title: "Part-time Maid for Elderly Care",
      description: "Compassionate, scheduled care for elders at home.",
      icon: UserIcon,
      features: [
        "Bathing, dressing, and mobility support",
        "Medication reminders and basic health monitoring",
        "Companionship and emotional engagement",
        "Light housekeeping related to the elder’s space",
        "Assistance with doctor visits (if within timing)"
      ],
      expertise: "Trained in senior care with flexible hours, prioritising dignity and comfort."
    },
    {
      title: "Part-Time Maid for Specific Tasks",
      description: "Get focused help only for the chores you need.",
      icon: SparklesIcon,
      features: [
        "Laundry and ironing",
        "Kitchen deep cleaning",
        "Bathroom sanitation",
        "Cupboard and storage organisation",
        "Dishwashing and kitchen tidying"
      ],
      expertise: "Skilled in recurring household chores, offering targeted and efficient help."
    }
  ]

  const benefits = [
    "Experienced and verified maids",
    "Available for 2–6 hours a day",
    "Daily, weekly or custom visit schedules",
    "Affordable, hour-based pricing",
    "Quick replacements if needed",
    "Transparent service with no hidden costs"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-700 via-accent-600 to-accent-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3Ccircle cx='20' cy='20' r='4'/%3E%3Ccircle cx='60' cy='20' r='4'/%3E%3Ccircle cx='20' cy='60' r='4'/%3E%3Ccircle cx='60' cy='60' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Flexible & Cost-Effective</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Part-Time Maid Services – Flexible Help, When You Need It
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Looking for household help without a live-in commitment? Our experienced part-time maids visit your home for a few hours a day to take care of cleaning, cooking, childcare, elderly care, or specific tasks—based on your schedule and needs.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {[
                    'Verified & Background-Checked Maids',
                    'Daily/Weekly Options',
                    'Replacement Guarantee Within 24 Hours',
                    'Customizable Work Hours',
                    'Trained in Home Hygiene Standards'
                  ].map((pill, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {pill}</div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-accent-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-accent-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Book Flexible Part-Time Maid Near You
                  </Link>

                  <Link
                    href="tel:+919972571005"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">2–6 Hrs</div>
                    <div className="text-accent-200 text-sm">Flexible Hours</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Budget</div>
                    <div className="text-accent-200 text-sm">Friendly Rates</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Privacy</div>
                    <div className="text-accent-200 text-sm">Respected</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-violet-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-violet-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-violet-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-violet-100">Basic Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-rose-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-rose-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-rose-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-rose-100">Meal Prep</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-amber-500 hover:to-orange-600 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <CalendarDaysIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-amber-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-amber-100">Quick Tasks</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600 hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ClockIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-teal-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-teal-100">Care Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-purple-400 text-purple-900 rounded-full p-3 shadow-lg">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CurrencyDollarIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Specialized Part-Time Maid Services for Every Household Need</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our part-time house maids can assist with a range of daily chores depending on your home’s needs and the duration of their shift.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Duties</div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {service.features.map((f: string, i: number) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      {service.expertise && (
                        <p className="text-gray-600 text-sm mt-3"><span className="font-semibold text-gray-900">Expertise:</span> {service.expertise}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Needs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs a Part-Time Maid?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Ideal for consistent help without a live-in arrangement.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Working professionals with limited time for household chores.',
                'Small families who need occasional help with cleaning or cooking.',
                'Individuals seeking flexible support for specific tasks.',
                'Anyone looking for a well-maintained home without a full-time commitment.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-accent-600 mt-0.5 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Easy 4-Step Maid Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hiring a part-time maid with EzyHelpers is smooth and stress-free.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', description: 'Discuss your needs and choose the service and preferred timings.' },
              { step: '2', title: 'Maid Shortlisting', description: 'We match you with 2–3 verified candidates based on your preferences.' },
              { step: '3', title: 'Interview & Selection', description: 'Speak with shortlisted maids via phone or in-person to select the best fit.' },
              { step: '4', title: 'Smooth Onboarding', description: 'We handle documentation and support you during onboarding.' },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-accent-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{p.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{p.title}</h3>
                <p className="text-gray-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Know */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Things to Know Before Hiring a Part-Time Maid</h2>
            <p className="text-lg text-gray-600">Everything you should know to make the right hiring decision.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Work Schedule Clarity</h3>
              <p className="text-gray-700">Clearly outline duty hours, tasks, and schedule preferences (e.g., 3 hours daily, 3 times a week).</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Timings & Work Hours</h3>
              <p className="text-gray-700">Part-time maids are available for 2–6 hours per day. Fix a clear daily schedule.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Defined Responsibilities</h3>
              <p className="text-gray-700">Discuss and agree on duties in advance. Avoid tasks beyond scope or outside the shift.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Weekly Offs</h3>
              <p className="text-gray-700">Most part-time maids prefer one day off per week—confirm it in advance and plan accordingly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Answers to common questions about part-time maid services.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { question: 'What is a part-time maid service?', answer: 'A part-time maid is a trained helper who comes to your home for a few hours each day to handle tasks like cleaning, cooking, babysitting, elderly care, or specific chores. Unlike live-in or full-time maids, they work fixed hours and leave after their shift.' },
                { question: 'How many hours do part-time maids work per day?', answer: 'Part-time maids usually work 2–6 hours a day. You can set a schedule that works for you—daily, alternate days, or a few days a week.' },
                { question: 'What services do part-time maids provide?', answer: 'Housekeeping (sweeping, mopping, dusting, kitchen/bathroom cleaning, laundry), Cooking (meal planning, prep, cooking, kitchen cleaning), Babysitting (feeding, supervision, homework help, school pickup/drop), Elderly care (bathing, dressing, medication reminders, companionship), Specific tasks (ironing, dishwashing, bathroom cleaning, organising).' },
                { question: 'How much does a part-time maid cost?', answer: 'Pricing depends on hours and service type. We offer affordable hourly rates with no hidden charges and flexible plans.' },
                { question: 'Are part-time maids background verified?', answer: 'Yes. We verify ID, experience, and references; additional checks can be arranged if needed.' },
                { question: 'Can I schedule visits weekly instead of daily?', answer: 'Absolutely. Choose from daily, weekly, or customised schedules to suit your home and budget.' },
                { question: 'What happens if my part-time maid does not show up?', answer: 'We arrange a quick replacement—typically within 24 hours—so your routine isn’t disrupted.' },
                { question: 'Do part-time maids work on Sundays?', answer: 'Most prefer one weekly day off (often Sunday). If you need Sunday service, we will try to match availability.' },
                { question: 'Can I hire a part-time maid for specific tasks only?', answer: 'Yes. You can hire for focused tasks like bathroom cleaning, ironing, or dishwashing.' },
                { question: 'Are duties fixed in advance?', answer: 'Yes. All tasks are discussed and agreed upon before work starts to avoid confusion later.' },
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

      {/* CTA Section */}
      <section className="section-padding bg-accent-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Find a Trusted Part-Time Maid with EzyHelpers</h2>
          <p className="text-xl text-accent-100 mb-8 max-w-3xl mx-auto">Whether you need daily cleaning, weekly deep-cleaning, or occasional kitchen support, we’ve got the right helper for you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-accent-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-accent-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book a Part-Time Maid
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
              <span className="hidden sm:inline">Call for Quick Assistance</span>
              <span className="sm:hidden">+91 9972571005</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-accent-100 text-accent-800 rounded-full px-4 py-2 mb-6">
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
                description: "Daily help for 8–10 hours without stay-in commitment",
                href: "/services/full-time-maids",
                icon: BuildingOffice2Icon,
                gradient: "from-orange-500 to-red-600",
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "On-Demand Maid Services", 
                description: "Book maids instantly for one-time or short-term cleaning and household help",
                href: "/services/on-demand-helpers",
                icon: SparklesIcon,
                gradient: "from-purple-500 to-violet-600",
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Driver Services",
                description: "Experienced, background-verified drivers for personal or family travel needs",
                href: "/services/drivers",
                icon: UserPlusIcon,
                gradient: "from-pink-500 to-rose-600",
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
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Learn More */}
                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Popular Badge for middle card */}
                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link 
              href="/hire-helper" 
              className="inline-flex items-center bg-accent-600 text-white hover:bg-accent-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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