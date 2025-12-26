'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NestBookingForm from '@/components/NestBookingForm'
import FAQAccordion from '@/components/FAQAccordion'
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  HomeIcon,
  HeartIcon,
  SparklesIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
  CalendarDaysIcon,
  BuildingOfficeIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

export default function NestPageClient() {
  const whoCanStay = [
    {
      title: 'Helpers from other states or cities',
      description: 'Helpers new to Bangalore who need a safe place to stay while searching for work.',
      icon: MapPinIcon
    },
    {
      title: 'Helpers between jobs',
      description: 'Temporary stay while waiting for the next job.',
      icon: ClockIcon
    },
    {
      title: 'Helpers during employer vacation',
      description: 'Helpers can stay safe when the employer is away.',
      icon: CalendarDaysIcon
    },
    {
      title: 'Employers booking for helpers',
      description: 'Employers can book safe accommodation for their helper/maid when required.',
      icon: UserGroupIcon
    },
    {
      title: 'Emergency Stay',
      description: 'Immediate stay if a helper loses her job or faces problems.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Festival or holiday stay',
      description: 'Helpers have a safe place to stay during holidays or festival time.',
      icon: SparklesIcon
    },
    {
      title: 'Medical or personal leave',
      description: 'Maids/helpers can stay safe during medical leave or for personal reasons.',
      icon: HeartIcon
    }
  ]

  const features = [
    {
      title: 'Safe & Secure',
      description: 'A women-only facility ensuring helpers\' safety',
      icon: ShieldCheckIcon
    },
    {
      title: 'Affordable Stay',
      description: 'Budget-friendly options for daily, weekly, and monthly stays',
      icon: CurrencyRupeeIcon
    },
    {
      title: 'Flexible Booking',
      description: 'Helpers can book directly, or customers can book for their helpers/maids',
      icon: CalendarDaysIcon
    },
    {
      title: 'Convenient Location',
      description: 'Easy to reach for helpers coming from outside Bangalore',
      icon: MapPinIcon
    },
    {
      title: 'Meals Provided',
      description: 'Domestic helper PG with meals in Bangalore',
      icon: HomeIcon
    },
    {
      title: 'Free Skill Training Programs',
      description: 'Free training for cooking, cleaning, elderly care, child care, etc.',
      icon: AcademicCapIcon
    }
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'Where is the Nest domestic worker hostel located?',
      answer: 'Our helper hostel is closer to HSR Layout, Electronic City, and Sarjapur Road in Bangalore and is easy to reach by public transport.'
    },
    {
      id: 'faq2',
      question: 'Is this really a women-only hostel?',
      answer: 'Yes! Nest is 100% women-only. Only female residents and authorized female staff are allowed.'
    },
    {
      id: 'faq3',
      question: 'Are meals included in the price?',
      answer: 'Yes! All stays include three fresh meals every day—breakfast, lunch, and dinner.'
    },
    {
      id: 'faq4',
      question: 'What type of food do you serve?',
      answer: 'We serve simple, healthy, home-cooked vegetarian meals, prepared hygienically and suitable for everyone.'
    },
    {
      id: 'faq5',
      question: 'Can I book for just one day?',
      answer: 'Yes! You can stay for as little as one day. Short-term stays are welcome.'
    },
    {
      id: 'faq6',
      question: 'Do you accept helpers from all states?',
      answer: 'Yes. We welcome helpers from all over India. Helpers from Uttar Pradesh, Bihar, Jharkhand, Assam, Odisha, West Bengal, Karnataka, and other states regularly stay with us.'
    },
    {
      id: 'faq7',
      question: 'Do I need to pay an advance?',
      answer: 'We do not charge any advance from either the helper or the customer.'
    },
    {
      id: 'faq8',
      question: 'What if I don\'t have a job yet?',
      answer: 'No problem. EzyHelpers will train you, give you a certificate, and help you get a good job with a good family and salary.'
    },
    {
      id: 'faq9',
      question: 'Can I cook my own food?',
      answer: 'Yes! You can take all three meals from us or cook your own food using our provided utensils. If you choose to cook, you need to bring your own groceries.'
    },
    {
      id: 'faq10',
      question: 'Can I book accommodation for my maid in advance?',
      answer: 'Yes! You can book a bed for your helper/maid in advance for any date. This ensures that she has a confirmed place to stay.'
    },
    {
      id: 'faq11',
      question: 'How is Nest different from other maid accommodations or hostels?',
      answer: 'Nest is made just for domestic workers/helpers. We provide safe rooms, nutritious meals, skill training, and job support. Unlike other hostels, you don\'t need to pay any advance for the stay.'
    },
    {
      id: 'faq12',
      question: 'Is there any limit on how long a helper/maid can stay?',
      answer: 'Helpers/maids can stay for a maximum period of one month.'
    },
    {
      id: 'faq13',
      question: 'Are there any additional costs apart from the stay and meals?',
      answer: 'No hidden costs. All basic amenities, meals, and facilities are included in the plan you choose.'
    },
    {
      id: 'faq14',
      question: 'Can I extend the stay if my travel plans change?',
      answer: 'Yes! You can easily extend your maid/helper\'s stay. Just let us know in advance, and we\'ll adjust the booking.'
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-rose-100 selection:text-rose-900">
      {/* Simple Header */}
      <header className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center space-x-2">
            <div className="w-10 h-10 bg-transparent rounded-lg flex items-center justify-center">
              <Image
                src="/ezyhelper_logo_new.png"
                alt="EzyHelpers Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
                quality={60}
              />
            </div>
            <span className="text-xl font-bold text-primary-900 font-display tracking-tight">EzyHelpers</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-700 to-rose-800 py-12 md:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-800 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-900 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="pt-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <HomeIcon className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-white/90 text-sm font-medium">Safe & Affordable Maid Stay</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
                Nest – <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-rose-100">Domestic Worker Accommodation</span> in Bangalore
              </h1>
              <p className="text-xl text-rose-100 mb-8 leading-relaxed font-light">
                The "Nest" by EzyHelpers is India's first <span className="text-white font-medium">women-only domestic helper hostel</span>, offering short-term and long-term stays for maids and helpers who need a safe and comfortable place to stay.
              </p>
              <p className="text-lg text-rose-100 mb-8 leading-relaxed font-light">
                Whether you are a domestic helper looking for a short-term stay between jobs, a helper coming from another city for work, or an employer/customer looking for a safe place for your helper/maid while you are away, Nest is here for you.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Women-Only Accommodation',
                  'Three meals every day',
                  'Affordable pricing',
                  'Free skill training'
                ].map((usp, i) => (
                  <div key={i} className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <CheckCircleIcon className="h-5 w-5 text-green-300" />
                    </div>
                    <span className="font-medium text-white text-sm">{usp}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a href="#nest-booking-form" className="bg-white text-rose-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transition-all shadow-xl text-center">
                  Book Stay Now
                </a>
                <a href="#pricing-section" className="bg-rose-100/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center">
                  Check Pricing
                </a>
                <a href="tel:08031411776" className="bg-rose-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-900 transition-all shadow-xl flex items-center justify-center gap-2 border border-white/10">
                  <PhoneIcon className="h-5 w-5" />
                  080-31411776
                </a>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative z-10">
              <NestBookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Stay Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Stay at Nest?</h2>
            <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Safe and flexible stay for every situation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoCanStay.map((item, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-rose-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-rose-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-rose-600 transition-colors duration-300">
                  <item.icon className="h-7 w-7 text-rose-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Nest Section */}
      <section className="section-padding bg-rose-50 relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose The Nest?
            </h2>
            <p className="text-gray-600">Everything you need for a worry-free stay</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-rose-600 transition-colors">
                    <feature.icon className="h-6 w-6 text-rose-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Comparison Table */}
      <section className="section-padding bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How Nest Helps Both Helpers & Employers
            </h2>
            <p className="text-gray-600">Safe domestic worker accommodation that benefits everyone</p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-rose-600 to-rose-700">
                  <th className="p-6 text-left text-white font-bold text-lg">Benefits for Helpers</th>
                  <th className="p-6 text-left text-white font-bold text-lg">Benefits for Employers/Customers</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Safe women-only hostel for helpers', 'Peace of mind knowing your helper is safe'],
                  ['Low-cost stay, pay only for the days you stay', 'Affordable solution during travel or absence'],
                  ['Three healthy meals every day', 'Healthy helper ready to resume work'],
                  ['No large deposit needed', 'Dignified stay instead of unsafe PGs'],
                  ['All basic amenities included—washing machine, geyser, RO water', 'Clear pricing with no hidden charges'],
                  ['Flexible stay daily, weekly, or monthly', 'Easy booking for any duration']
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 border-t border-gray-200">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{row[0]}</span>
                      </div>
                    </td>
                    <td className="p-6 border-t border-gray-200">
                      <div className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{row[1]}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing-section" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Pricing at Nest
            </h2>
            <p className="text-gray-300">Simple, Transparent & Affordable Domestic Helper Accommodation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Helpers Pricing */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-rose-600 to-rose-700 p-8 text-white">
                <h3 className="text-2xl text-white font-bold mb-2">For Helpers</h3>
                <p className="text-rose-100">Safe and comfortable stay for women helpers</p>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <div className="border-b border-gray-200 pb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <ClockIcon className="h-5 w-5 mr-2 text-rose-600" />
                      Short Stay (Daily / Weekly)
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700">
                        <CurrencyRupeeIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>₹299</strong> per day (1 day)</span>
                      </li>
                      <li className="flex items-start text-gray-700">
                        <CurrencyRupeeIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>₹1,750</strong> per week (7 days)</span>
                      </li>
                    </ul>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Safe women-only hostel</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>3 meals every day</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Basic facilities included</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>The stay can be extended if needed</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pb-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <CalendarDaysIcon className="h-5 w-5 mr-2 text-rose-600" />
                      Long Stay (Monthly)
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-start text-gray-700">
                        <CurrencyRupeeIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span><strong>₹6,000</strong> per month (30 days)</span>
                      </li>
                    </ul>
                    <ul className="mt-4 space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Affordable rent with meals</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Comfortable rooms with basic facilities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Learn skills while staying</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Safe and friendly environment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-bold text-gray-900 mb-4">Benefits for Helpers</h4>
                    <ul className="space-y-2 text-sm">
                      {[
                        'Safe, women-only hostel with CCTV',
                        '3 meals every day (Breakfast, Lunch & Dinner)',
                        'Comfortable rooms with beds, geyser, RO water, utensils, fans & more',
                        'Learn skills while staying',
                        'Budget-friendly and flexible stay options'
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Employers Pricing */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-rose-300">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white">
                <h3 className="text-2xl text-white font-bold mb-2">For Employers/Customers</h3>
                <p className="text-gray-300">Booking accommodation for your helpers/maids</p>
              </div>
              <div className="p-8">
                <div className="space-y-6">
                  <ul className="space-y-4">
                    <li className="flex items-start text-gray-700">
                      <CurrencyRupeeIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-lg">₹550 per day</p>
                        <p className="text-sm text-gray-500">1 day stay</p>
                      </div>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CurrencyRupeeIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-lg">₹3,500 per week</p>
                        <p className="text-sm text-gray-500">7 days stay</p>
                      </div>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <CurrencyRupeeIcon className="h-6 w-6 text-green-500 mr-3 mt-0.5" />
                      <div>
                        <p className="font-bold text-lg">₹10,500 per month</p>
                        <p className="text-sm text-gray-500">30 days stay</p>
                      </div>
                    </li>
                  </ul>

                  <div className="bg-blue-50 rounded-xl p-4 mt-6">
                    <ul className="space-y-2 text-sm">
                      {[
                        'Transparent and affordable pricing',
                        '3 meals every day included',
                        'Flexible stay duration',
                        'Peace of mind knowing your helper is well cared for'
                      ].map((benefit, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-white font-medium mb-3">Note:</p>
            <ul className="text-gray-200 text-sm space-y-2 max-w-lg mx-auto text-left">
              <li className="flex items-start">
                <span className="mr-2 text-rose-300">•</span>
                <span>Pricing may vary based on stay duration and room availability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-300">•</span>
                <span>All packages include accommodation and meals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-300">•</span>
                <span>No hidden charges</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-300">•</span>
                <span>Helpers can stay for a maximum of <strong>one month</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-rose-300">•</span>
                <span>No advance payment is required for short-term or long-term plans</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location Benefits */}
      <section className="py-16 bg-gradient-to-r from-rose-900 to-rose-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 flex items-center justify-center">
            <MapPinIcon className="h-6 w-6 mr-2 text-pink-400" />
            Location Benefits
          </h2>
          <p className="text-rose-100 mb-8 max-w-2xl mx-auto">
            Nest is located in a safe and well-connected area of Bangalore
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Near HSR Layout, Electronic City, and Sarjapur Road',
              'Easy access to public transport',
              'Safe residential area',
              'Markets and shops nearby'
            ].map((location, idx) => (
              <span key={idx} className="bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 rounded-full text-sm backdrop-blur-sm transition-colors cursor-default">
                {location}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking-section" className="py-20 bg-rose-600 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl text-white md:text-5xl font-bold mb-6 font-display leading-tight">
            Book Your Stay at Nest by EzyHelpers
          </h2>
          <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto font-light">
            Choose your check-in date and time to check bed availability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#nest-booking-form" className="bg-white text-rose-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transition-all shadow-xl">
              Check Availability
            </a>
            <a href="tel:08031411776" className="bg-rose-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-rose-900 transition-all shadow-xl flex items-center justify-center gap-2 border border-white/10">
              <PhoneIcon className="h-5 w-5" />
              Call: 080-31411776
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about Nest</p>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-2 md:p-6 border border-gray-100 shadow-sm">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EzyHelpers. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Hostel",
            "name": "Nest by EzyHelpers - Domestic Worker Accommodation",
            "description": "India's first women-only domestic helper hostel in Bangalore offering safe, affordable short-term and long-term stays with meals and free skill training.",
            "url": "https://www.ezyhelpers.com/nest",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Near HSR Layout, Electronic City, Sarjapur Road",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "postalCode": "560102",
              "addressCountry": "IN"
            },
            "amenityFeature": [
              { "@type": "LocationFeatureSpecification", "name": "Women-only accommodation", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Three meals daily", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Free skill training", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "CCTV security", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "RO water", "value": true },
              { "@type": "LocationFeatureSpecification", "name": "Geyser", "value": true }
            ],
            "audience": {
              "@type": "PeopleAudience",
              "requiredGender": "Female"
            },
            "telephone": "+91-80-31411776",
            "priceRange": "₹299 - ₹10,500",
            "offers": [
              {
                "@type": "Offer",
                "name": "Helper Daily Stay",
                "price": "299",
                "priceCurrency": "INR",
                "description": "Daily stay for helpers with meals"
              },
              {
                "@type": "Offer",
                "name": "Helper Monthly Stay",
                "price": "6000",
                "priceCurrency": "INR",
                "description": "Monthly stay for helpers with meals"
              },
              {
                "@type": "Offer",
                "name": "Employer Booking - Monthly",
                "price": "10500",
                "priceCurrency": "INR",
                "description": "Employer booking monthly stay for their helper"
              }
            ]
          })
        }}
      />
    </main>
  )
}
