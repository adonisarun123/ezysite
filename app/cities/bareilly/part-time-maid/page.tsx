import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

import {
  CheckCircleIcon,
  PhoneIcon,
  HeartIcon,
  SparklesIcon,
  HomeIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  BanknotesIcon,
  SunIcon,
  ClockIcon,
  AcademicCapIcon,
  UsersIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  StarIcon,
  MapPinIcon,
  BeakerIcon,
  BoltIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CurrencyRupeeIcon,
  FireIcon,
  FaceSmileIcon,
  HandRaisedIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Best Part-Time Maid in Bareilly – Flexible Timings',
  description: 'Get a part-time maid in Bareilly for morning or evening help. Choose trained maids for cleaning, cooking, or daily tasks as per your convenience.',
  openGraph: {
    title: 'Best Part-Time Maid in Bareilly – Flexible Timings',
    description: 'Get a part-time maid in Bareilly for morning or evening help. Choose trained maids for cleaning, cooking, or daily tasks as per your convenience.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/part-time-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/part-time-maid'
  }
}

export default function BareillyPartTimeMaidPage() {

  const whyChooseFeatures = [
    {
      title: 'Experienced & Verified Local Maids',
      icon: ShieldCheckIcon,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Maids Available for 2–6 Hour Daily Shifts',
      icon: ClockIcon,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      title: 'Affordable Hour-Based Pricing',
      icon: CurrencyRupeeIcon,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Morning, Afternoon & Evening Slots',
      icon: SunIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }, {
      title: 'Daily, Weekly, or Monthly Options',
      icon: CalendarDaysIcon,
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    }
  ]


  const types = [
    'Working couples with busy schedules',
    'Small families who need support in peak hours',
    'Elderly citizens living alone',
    'Teachers or government employees',
    'Families needing festival or holiday help',
  ]

  const specializedServices = [
    {
      title: "Part-time Maid for Housekeeping",
      description: "Keep your home clean and organised with daily help from a local maid.",
      icon: SparklesIcon,
      features: [
        "Sweeping, mopping & surface cleaning",
        "Kitchen & bathroom sanitization",
        "Laundry & ironing",
        "Bed-making & Tidying Up",
        "Shelf & room tidying"
      ],
      expertise: "Good in home hygiene and regular cleaning tasks.",
      cta: "Book a Housekeeper",
    },
    {
      title: "Part-time Maid for Cooking",
      description: "Enjoy fresh, tasty meals without handling all the kitchen work yourself.",
      icon: FireIcon,
      features: [
        "Breakfast, lunch or dinner prep",
        "Grocery list assistance",
        "Chopping, cleaning, and cooking",
        "Post-meal dishwashing",
        "Maintaining kitchen hygiene"
      ],
      expertise: "North Indian & Bareilly-style food like Tehri, Korma, Aloo Tikki, and more.",
      cta: "Hire a Cook in Bareilly",
    },
    {
      title: "Part-time Maid for Babysitting (Child Care)",
      description: "If you need childcare for a few hours, we provide trusted babysitters in Bareilly.",
      icon: FaceSmileIcon,
      features: [
        "Feeding and nap supervision",
        "Playing and storytelling",
        "School prep and homework help",
        "Basic hygiene and safety care",
        "Flexible hours during holidays or exams"
      ],
      expertise: "Trained in early child care and safe handling.",
      cta: "Get a Babysitter in Bareilly",
    },
    {
      title: "Part-Time Helper for Elderly",
      description: "Give your elders caring support for a few hours every day.",
      icon: HandRaisedIcon,
      features: [
        "Support in bathing and dressing",
        "Medicine reminders",
        "Light meals or tea prep",
        "Bed and room arrangement",
        "Simple companionship and walking help"
      ],
      expertise: "Patient and compassionate elder care.",
      cta: "Book Elder Care Today",
    },
    {
      title: "Part-time Maid for Specific Tasks",
      description: "If you need help for only one task, we also offer short task-based services.",
      icon: ClipboardDocumentCheckIcon,
      features: [
        "Bathroom deep cleaning",
        "Fridge/kitchen organization",
        "Festival or post-event cleaning",
        "Ironing or shelf arrangement"
      ],
      expertise: "Best for urgent or focused tasks of 1–3 hours.",
      cta: "Hire Part-Time Maid",
    }
  ];


  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Share your requirements and choose maid type: cleaning, cooking, child, or elder care."
    },
    {
      step: "2",
      title: "Maid Shortlisting",
      description: "We provide 2–3 verified maid profiles matching your needs and preferences."
    },
    {
      step: "3",
      title: "Interview & Selection",
      description: "Interview maids via call, video, or in-person before making your choice."
    },
    {
      step: "4",
      title: "Smooth Onboarding",
      description: "Start the service once selected, with our team providing ongoing support."
    }
  ]

  const toconsider = [
    {
      title: "Clear Work Timings",
      description: "Fix the duty hours (morning, evening, etc.) and tasks clearly to avoid confusion.",
      icon: ClockIcon
    },
    {
      title: "Defined Role Allocation",
      description: "Assign one maid for one role – cooking, cleaning, or babysitting for better results.",
      icon: ClipboardDocumentListIcon
    },
    {
      title: "Weekly Offs",
      description: "Most part-time maids prefer one day off per week (typically Sunday). Pre-confirm with your maid.",
      icon: CalendarDaysIcon
    }
  ]

  const faqs: FAQItem[] = [
    {
      question: 'What is a part-time maid in Bareilly?',
      answer:
        'A part-time maid in Bareilly is a trained helper who works only for a few hours a day instead of living in your home. EzyHelpers provides reliable maids who visit for 2–6 hours to do tasks like cleaning, cooking, child care, or elder care based on your needs.',
    },
    {
      question: 'How many hours does a part-time maid work in Bareilly?',
      answer:
        'Most part-time maids in Bareilly work 2 to 6 hours daily. You can select morning, afternoon, or evening based on your comfort. EzyHelpers gives full timing flexibility so your home routine continues smoothly.',
    },
    {
      question: 'What does a part-time maid for cooking and cleaning do?',
      answer:
        `A part-time maid in Bareilly can help with:
        • Housekeeping – sweeping, mopping, dusting, bathroom cleaning, laundry
        • Cooking – meals, snacks, chopping, kitchen cleaning
        • Babysitting – feeding, bathing, playing, homework
        • Elder care – medicines, hygiene, companionship
        • Task-based work – ironing, dishwashing, or organisation
        You can choose one service or multiple tasks as needed.
        `,
    },
    {
      question: 'Are part-time maids in Bareilly safe and verified?',
      answer:
        'Yes. All maids provided by EzyHelpers are properly verified. We check Aadhaar, address, and work experience. Police or medical checks can be arranged if required. They also follow hygiene and behaviour training.',
    },
    {
      question: 'What is the cost of hiring a part-time maid in Bareilly?',
      answer:
        'Prices are hourly and depend on the number of hours and type of work—cleaning only or cooking plus cleaning. EzyHelpers offers clear pricing with no hidden charges.',
    },
    {
      question: 'Where in Bareilly are part-time maid services available?',
      answer:
        'We serve over 20+ areas such as Civil Lines, Model Town, Rajendra Nagar, Izzatnagar, and nearby locations. No matter which area you stay in, we can provide a maid near you.',
    },
    {
      question: 'Does a part-time maid stay overnight?',
      answer:
        'No. A part-time maid only comes during the scheduled hours and leaves after the tasks are done. This keeps your privacy safe and ensures smooth support.',
    },
    {
      question: 'Can I hire a part-time maid for morning or evening?',
      answer:
        'Yes! You can choose early morning, late evening, or any specific time slot. Whether before school, after office, or during prayer time, we provide maids who adjust to your routine.',
    },
    {
      question: 'What is the minimum duration for service?',
      answer:
        'You can book a maid for at least 2 hours. We also offer daily, alternate-day, weekend-only, or custom schedules so you pay only for what you need.',
    },
    {
      question: 'Can part-time maids adjust to work-from-home timings?',
      answer:
        'Yes. Your maid can work around your meetings or work hours. They do tasks quietly and adjust timings when needed, making them suitable for work-from-home families.',
    },
    {
      question: 'Can I hire a part-time maid only for weekends?',
      answer:
        'Yes! You can hire for weekends, alternate days, or specific weekdays. We offer flexible booking to match your lifestyle and family needs.',
    }
  ]



  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Bareilly', href: '/cities/bareilly' },
            { label: 'Part-Time Maid Service' }
          ]}
        />

        {/* Hero Section (markdown-aligned) */}
        <section className="relative bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Part-Time Maid in Bareilly</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed">
                If you need reliable home help without a full-time maid, EzyHelpers provides verified part-time maids in Bareilly. They work 2–6 hours a day and help with cleaning, cooking, and daily chores. Choose morning, afternoon, or evening support based on your schedule.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-green-700 font-semibold text-lg py-4 px-8 rounded-xl shadow-md hover:bg-gray-100 transition-all">Book a Part-Time Maid</Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Us for Quick Booking
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  'Verified Maids',
                  'Flexible Contracts',
                  'Customised Time Slots',
                ].map((b, i) => (
                  <div key={i} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    <span className="text-emerald-300">✓</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
                {[
                  { value: '2–6 Hrs', label: 'Daily Availability' },
                  { value: 'Budget-Friendly', label: 'Hourly Pricing' },
                  { value: 'No Stay-In', label: 'Privacy & Comfort Maintained' }
                ].map((m, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 px-2 py-2">
                    <div className="text-lg font-extrabold">{m.value}</div>
                    <div className="mt-1 text-blue-50/90 text-sm">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose EzyHelpers */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for a Part-Time Maid in Bareilly?</h2>
              <p className="text-lg text-gray-600">Many families in Bareilly choose our service because we offer reliable, flexible, and trustworthy part-time maids. Our process is simple and built to give you comfort and consistency at home.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-md font-bold text-gray-900 mb-3">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Provided */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Services Does a Part-Time Maid for Cooking and Cleaning in Bareilly Provide?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our part-time maids in Bareilly are skilled in different tasks and can support small families, elders, students, or working couples with daily needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specializedServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  {/* Icon */}
                  <div className="bg-green-100 rounded-xl p-3 w-fit mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-green-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-800 text-md mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1 mb-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-800">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Expertise — appended */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-700 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                      <span className="font-semibold text-green-700">Expertise:</span>{" "}
                      {service.expertise}
                    </p>
                  </div>

                  {/* CTA — LAST */}
                  <button
                    className="mt-auto w-full rounded-xl bg-green-600 text-white text-md font-semibold py-2
                              hover:bg-green-700 transition-colors duration-300"
                  >
                    {service.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Who Needs Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Should Hire a Part-Time Maid in Bareilly?</h2>
              <p className="text-gray-600">Our part-time maid service is perfect for:</p>
            </div>

            <div className="bg-green-100/50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {types.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                4-Step Easy Booking Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Simple and transparent process to get your perfect part-time maid
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to Consider */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What to Consider Before Booking a Part-Time Maid in Bareilly?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything You Should Know to Make the Right Hiring Decision
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {toconsider.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-green-100 rounded-xl p-4 w-fit mb-6 group-hover:bg-green-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-green-600 to-teal-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
                Find a Trusted Part-Time Maid in Bareilly with EzyHelpers Today
              </h2>
              <p className="text-xl mb-8 text-green-100">
                EzyHelpers makes booking a part-time maid simple and quick. Choose cleaning, cooking or mixed services based on your daily needs and routine.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-green-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Part-Time Maid Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call 080-31411776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Explore Our Other Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Complete your household support system with EzyHelpers' trusted domestic services in Bareilly and beyond:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/cities/bareilly/full-time-maid" className="group bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <UsersIcon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Driver Services</h3>
                <p className="text-gray-600 mb-4">Hire background-verified drivers for your daily commute or family needs.</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/live-in-maid" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Home Deep Cleaning Services</h3>
                <p className="text-gray-600 mb-4">Thorough cleaning of every room, appliance, and surface for a spotless home.</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-red-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Full-Time Maid Services</h3>
                <p className="text-gray-600 mb-4">Reliable daily help for all home chores without requiring a live-in stay.</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cities/bareilly"
                className="inline-flex items-center justify-center bg-green-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-green-700 transition-all duration-300"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
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
