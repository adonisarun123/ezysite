import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

import NestCTA from '@/components/NestCTA'
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What is a part-time maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A part-time maid in Bareilly is a trained household helper who works for a few hours each day instead of living in your home. EzyHelpers provides reliable maids who visit your house for 2 to 6 hours to help with daily chores like cleaning, cooking, or even elder and child care, based on your routine and preferences."
      }
    },{
      "@type": "Question",
      "name": "How many hours does a part-time maid work in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically, a part-time maid in Bareilly works between 2 to 6 hours per day. You can schedule their visits in the morning, afternoon, or evening based on what suits your household. EzyHelpers allows complete flexibility so you can get the help you need without disrupting your daily flow."
      }
    },{
      "@type": "Question",
      "name": "What does a part-time maid for cooking and cleaning in Bareilly do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A part-time maid for cooking and cleaning in Bareilly handles essential home chores such as: Housekeeping – Sweeping, mopping, dusting, bathroom cleaning, and laundry. Cooking – Daily meals, basic snacks, and kitchen cleanup. Babysitting – Feeding, bathing, playing, and helping with homework. Elderly care – Assisting with medication, hygiene, and companionship. Task-based help – Ironing clothes, dishwashing, wardrobe organization. You can hire them for one or multiple tasks depending on your needs."
      }
    },{
      "@type": "Question",
      "name": "Are part-time maids in Bareilly safe and background verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, every part-time maid in Bareilly provided by EzyHelpers goes through a detailed background verification process. We check their Aadhaar, local address, and past experience. Police and medical checks can also be arranged if you need them. Plus, they are trained in hygiene and behaviour protocols."
      }
    },{
      "@type": "Question",
      "name": "What is the cost of hiring a part-time maid in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hiring a part-time maid in Bareilly is affordable and based on an hourly model. Prices vary depending on the number of hours you book and the specific tasks, like whether you want only cleaning or a part-time maid for cooking and cleaning in Bareilly. At EzyHelpers, all charges are transparent with no hidden fees."
      }
    },{
      "@type": "Question",
      "name": "Where in Bareilly are part-time maid services available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EzyHelpers provides part-time maid in Bareilly services across 20+ local areas, including Civil Lines, Model Town, Rajendra Nagar, Izzatnagar, and more. No matter where you live in the city, we can connect you to a reliable maid near you."
      }
    },{
      "@type": "Question",
      "name": "Does a part-time maid stay overnight?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, a part-time maid in Bareilly does not stay at your home. They arrive during the scheduled hours and leave after completing the assigned work. This ensures both your privacy and timely support for your home needs."
      }
    },{
      "@type": "Question",
      "name": "Can I hire a part-time maid in Bareilly for morning or evening hours?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! You can hire a part-time maid in Bareilly for early mornings, late evenings, or any specific time slot that suits your routine. Whether it’s before school, after office hours, or around your prayer time, we provide maids who adjust to your timing preferences."
      }
    },{
      "@type": "Question",
      "name": "What is the minimum duration for part-time maid services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can book a part-time maid for cooking and cleaning in Bareilly for as little as 2 hours. We also offer customisable options like daily, alternate-day, weekly, or weekend-only services, so you pay only for what you need."
      }
    },{
      "@type": "Question",
      "name": "Can part-time maids adjust to my work-from-home schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers understands the need for quiet and minimal disruption. Your part-time maid in Bareilly can adjust her tasks and timing to avoid interfering with your meetings or work hours, making her ideal for modern households."
      }
    },{
      "@type": "Question",
      "name": "Can I hire a part time maid for specific days like weekends?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can hire a part-time maid for cooking and cleaning in Bareilly just for weekends, alternate days, or selected weekdays. We offer flexible booking to match your lifestyle, whether you're busy only on Sundays or need help twice a week."
      }
    }]
  };

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
            { label: 'Part-Time House Maid' }
          ]}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 text-white pt-20 pb-24 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white">
                Part-Time Maid in Bareilly – Flexible, Daily Help That Fits Your Schedule
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
                Get a part-time maid in Bareilly for morning or evening help. Choose trained maids for cleaning, cooking, or daily tasks as per your convenience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform">
                  Book a Part-Time Maid
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all">
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
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
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 font-display leading-tight">
                Find a Trusted Part-Time Maid in Bareilly with EzyHelpers Today
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium">
                EzyHelpers makes booking a part-time maid simple and quick. Choose cleaning, cooking or mixed services based on your daily needs and routine.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Part-Time Maid Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg py-4 px-10 rounded-2xl transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Maid Services</h3>
                <p className="text-gray-600 mb-4">Reliable daily help for all home chores without requiring a live-in stay.</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/live-in-maid" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <ClockIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live-In Maid Services</h3>
                <p className="text-gray-600 mb-4">24/7 dedicated support who stay in your home and assist with daily chores.</p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>

              <Link href="/cities/bareilly/on-demand-helper" className="group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-red-100 hover:border-yellow-300 hover:shadow-lg transition-all duration-300">
                <BoltIcon className="h-12 w-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Instant Maid Service</h3>
                <p className="text-gray-600 mb-4">Instant household help for emergencies, guest visits, or special occasions.</p>
                <div className="flex items-center text-yellow-600 font-semibold">
                  Learn More <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
              </Link>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/cities/bareilly"
                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/20"
              >
                View All Services in Bareilly
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
            </div>
            <FAQAccordion
              faqs={[
                {
                  question: "What is a part-time maid in Bareilly?",
                  answer: "A part-time maid in Bareilly is a trained household helper who works for a few hours each day instead of living in your home. EzyHelpers provides reliable maids who visit your house for 2 to 6 hours to help with daily chores like cleaning, cooking, or even elder and child care, based on your routine and preferences."
                },
                {
                  question: "How many hours does a part-time maid work in Bareilly?",
                  answer: "Typically, a part-time maid in Bareilly works between 2 to 6 hours per day. You can schedule their visits in the morning, afternoon, or evening based on what suits your household. EzyHelpers allows complete flexibility so you can get the help you need without disrupting your daily flow."
                },
                {
                  question: "What does a part-time maid for cooking and cleaning in Bareilly do?",
                  answer: "A part-time maid for cooking and cleaning in Bareilly handles essential home chores such as: Housekeeping – Sweeping, mopping, dusting, bathroom cleaning, and laundry. Cooking – Daily meals, basic snacks, and kitchen cleanup. Babysitting – Feeding, bathing, playing, and helping with homework. Elderly care – Assisting with medication, hygiene, and companionship. Task-based help – Ironing clothes, dishwashing, wardrobe organization. You can hire them for one or multiple tasks depending on your needs."
                },
                {
                  question: "Are part-time maids in Bareilly safe and background verified?",
                  answer: "Yes, every part-time maid in Bareilly provided by EzyHelpers goes through a detailed background verification process. We check their Aadhaar, local address, and past experience. Police and medical checks can also be arranged if you need them. Plus, they are trained in hygiene and behaviour protocols."
                },
                {
                  question: "What is the cost of hiring a part-time maid in Bareilly?",
                  answer: "Hiring a part-time maid in Bareilly is affordable and based on an hourly model. Prices vary depending on the number of hours you book and the specific tasks, like whether you want only cleaning or a part-time maid for cooking and cleaning in Bareilly. At EzyHelpers, all charges are transparent with no hidden fees."
                },
                {
                  question: "Where in Bareilly are part-time maid services available?",
                  answer: "EzyHelpers provides part-time maid in Bareilly services across 20+ local areas, including Civil Lines, Model Town, Rajendra Nagar, Izzatnagar, and more. No matter where you live in the city, we can connect you to a reliable maid near you."
                },
                {
                  question: "Does a part-time maid stay overnight?",
                  answer: "No, a part-time maid in Bareilly does not stay at your home. They arrive during the scheduled hours and leave after completing the assigned work. This ensures both your privacy and timely support for your home needs."
                },
                {
                  question: "Can I hire a part-time maid in Bareilly for morning or evening hours?",
                  answer: "Absolutely! You can hire a part-time maid in Bareilly for early mornings, late evenings, or any specific time slot that suits your routine. Whether it’s before school, after office hours, or around your prayer time, we provide maids who adjust to your timing preferences."
                },
                {
                  question: "What is the minimum duration for part-time maid services?",
                  answer: "You can book a part-time maid for cooking and cleaning in Bareilly for as little as 2 hours. We also offer customisable options like daily, alternate-day, weekly, or weekend-only services, so you pay only for what you need."
                },
                {
                  question: "Can part-time maids adjust to my work-from-home schedule?",
                  answer: "Yes, EzyHelpers understands the need for quiet and minimal disruption. Your part-time maid in Bareilly can adjust her tasks and timing to avoid interfering with your meetings or work hours, making her ideal for modern households."
                },
                {
                  question: "Can I hire a part time maid for specific days like weekends?",
                  answer: "Yes! You can hire a part-time maid for cooking and cleaning in Bareilly just for weekends, alternate days, or selected weekdays. We offer flexible booking to match your lifestyle, whether you're busy only on Sundays or need help twice a week."
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
