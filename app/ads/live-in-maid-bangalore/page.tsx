'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AdLeadForm from '@/components/AdLeadForm'
import FAQAccordion from '@/components/FAQAccordion'
import { 
  CheckCircleIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  UserGroupIcon,
  ArrowPathIcon,
  PhoneIcon,
  HomeIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export default function LiveInMaidBangalorePage() {
  const features = [
    {
      title: '100% Verified Profiles',
      description: 'Every maid undergoes ID verification and local address checks for your safety.',
      icon: ShieldCheckIcon
    },
    {
      title: 'Quick Joining in 48-72 Hours',
      description: 'Your verified maid joins your home within two to three days after profile selection and confirmation.',
      icon: ClockIcon
    },
    {
      title: 'Hassle-Free Replacement',
      description: 'Not satisfied? We provide quick and smooth replacements at absolutely no extra cost to you.',
      icon: ArrowPathIcon
    },
    {
      title: 'Regular Follow-Up Support',
      description: 'We follow up regularly with you and your helper to ensure smooth service and satisfaction.',
      icon: PhoneIcon
    }
  ]

  const services = [
    {
      title: 'Housekeeping Maid',
      description: 'Our stay-at-home maids in Bangalore take care of all daily housework. They keep your home clean, neat, and well-organised.',
      icon: HomeIcon,
      details: [
        'Sweeping and mopping the floors',
        'Cleaning the kitchen and bathrooms',
        'Washing vessels',
        'Dusting furniture',
        'Laundry and ironing',
        'Keeping the home tidy every day',
        'Bed making & home organisation'
      ]
    },
    {
      title: 'Babysitter/Nanny',
      description: 'We provide trained and gentle babysitters for 24-hour home help in Bangalore who take care of your little ones with love and patience.',
      icon: UserGroupIcon,
      details: [
        'Feeding, bathing, and diaper change',
        'Helping with sleep routines',
        'Basic hygiene & safety',
        'Playing and interacting with the child',
        'Keeping the baby safe at all times'
      ]
    },
    {
      title: 'Elderly Caretaker',
      description: 'We offer caretakers who support elders with kindness and respect. They help elders with their daily needs and give them good company.',
      icon: HeartIcon,
      details: [
        'Helping with walking and movement',
        'Giving medicines on time',
        'Assisting with bathing, dressing, and hygiene',
        'Preparing simple meals',
        'Talking to elders and giving emotional support',
        'Keeping an eye on their safety'
      ]
    }
  ]

  const steps = [
    {
      title: 'Share Your Need',
      description: 'Tell us your requirements— cleaning, baby care, or elderly care.'
    },
    {
      title: 'Get Verified Profiles',
      description: "Receive background-checked helpers' profiles matching your needs & budget."
    },
    {
      title: 'Interview & Select',
      description: 'Speak to your shortlisted live-in helpers via phone or video call.'
    },
    {
      title: 'Helper Joins Your Home',
      description: 'Your 24-hour maid or helper starts within 48-72 hours. We stay connected for support.'
    }
  ]

  const areas = [
    'HSR Layout', 'Koramangala', 'Whitefield', 'JP Nagar', 'Jayanagar', 
    'Indiranagar', 'Marathahalli', 'BTM Layout', 'Malleshwaram', 'Hebbal', 
    'Electronic City', 'Yelahanka', 'All major areas'
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'How quickly can a maid join?',
      answer: 'After you select the profile, the maid can usually join in 48–72 hours. We try to complete the process fast so your home work starts smoothly without any delay.'
    },
    {
      id: 'faq2',
      question: 'What if the maid doesn’t work out?',
      answer: 'If you face any genuine issue, we provide a free replacement within 24–48 hours. Just share the issue with us. We will first talk to both sides and try to fix it. If things still don’t improve, we will send new verified profiles for a smooth replacement.'
    },
    {
      id: 'faq3',
      question: 'Are background checks really done?',
      answer: 'Yes. Every maid is Aadhar verified and address verified. Police verification can also be done if the customer requests it.'
    },
    {
      id: 'faq4',
      question: 'Who provides food and accommodation?',
      answer: 'The employer must give food and a place to sleep. It can be a separate room, or a bed, or a mattress—based on your convenience.'
    },
    {
      id: 'faq5',
      question: 'Can I hire a maid for a short period?',
      answer: 'Yes. You can choose monthly, quarterly, or yearly plans based on your need.'
    },
    {
      id: 'faq6',
      question: 'What if the maid takes leave?',
      answer: 'If the maid takes leave, we can arrange a temporary replacement, depending on availability.'
    },
    {
      id: 'faq7',
      question: 'What if the maid gets sick?',
      answer: 'For small health issues, she can rest at your home. If she has a serious illness and needs hospital care, we can arrange a temporary replacement until she recovers.'
    },
    {
      id: 'faq8',
      question: 'Is there a trial period available?',
      answer: 'Yes. We offer a 3-day trial at an extra cost. This helps you check if the maid is suitable before choosing a long-term plan.'
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-success-100 selection:text-success-900">
      {/* Simple Header */}
      <header className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm">
        <div className="container-custom">
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

      {/* Hero Section (DARK) - Strong First Impression */}
      <section className="relative overflow-hidden bg-primary-900 py-12 md:py-20">
        {/* Background Pattern */}
        <div className="absolute inset-0">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-800 to-transparent opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-900 rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="pt-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <SparklesIcon className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-white/90 text-sm font-medium">Premium Verified Helpers</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-display">
                Hire Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-300 to-success-300">Live-In Maids</span> in Bangalore
              </h1>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed font-light">
                Background-checked, trained maids for housekeeping, baby care & elderly care. <span className="text-white font-medium">Quick joining in 48-72 hours.</span>
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  'Quick Hiring',
                  'Verified Profiles',
                  'Safe & Reliable',
                  'Replacement Guarantee'
                ].map((usp, i) => (
                  <div key={i} className="flex items-center bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div className="w-8 h-8 rounded-full bg-success-500/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                      <CheckCircleIcon className="h-5 w-5 text-success-300" />
                    </div>
                    <span className="font-medium text-white">{usp}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary-800/50 to-primary-900/50 border border-primary-700 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-lg font-semibold text-secondary-200 mb-2 flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 mr-2 text-secondary-400" />
                  Why Families Trust Us
                </h3>
                <p className="text-primary-100 text-sm leading-relaxed">
                  We understand that trusting someone in your home is a big decision. That's why we go the extra mile to ensure 100% verification and reliability.
                </p>
              </div>
            </div>

            {/* Right Form */}
            <div className="relative z-10">
              <AdLeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why EzyHelpers (LIGHT) - Clean Contrast */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Pepper Pattern (Light) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers</h2>
            <div className="w-24 h-1 bg-success-400 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">We provide end-to-end support to ensure you find the perfect helper for your home.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-secondary-200 hover:shadow-lg hover:shadow-secondary-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section (DARK) - Visual Break */}
      <section className="section-padding bg-primary-800 relative">
         {/* Pattern */}
         <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              24 Hour Live-In Maid Services
            </h2>
            <div className="w-24 h-1 bg-success-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-3xl shadow-xl border border-primary-700/20 overflow-hidden flex flex-col hover:translate-y-[-5px] transition-transform duration-300">
                <div className="p-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
                  <service.icon className="h-10 w-10 mb-4" />
                  <h3 className="text-2xl text-white font-bold">{service.title}</h3>
                  <p className="text-primary-100 text-sm mt-2 font-light">{service.description}</p>
                </div>
                <div className="p-8 flex-grow bg-white">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                    Includes:
                  </h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600">
                        <CheckCircleIcon className="h-5 w-5 text-success-500 mt-0.5 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works (LIGHT) - Clear Process */}
      <section className="section-padding bg-secondary-50 relative">
        {/* Pepper Pattern (Light) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
            <p className="text-gray-600">Simple 4-step process to get your helper</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200"></div>

            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center group">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 border-4 border-secondary-100 group-hover:border-secondary-500 transition-colors duration-300 shadow-md">
                  <span className="text-3xl font-bold text-primary-600 font-display">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (DARK/VIBRANT) - Final Push */}
      <section className="py-20 bg-primary-600 text-white text-center relative overflow-hidden">
         {/* Decorative Elements */}
         <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl mix-blend-overlay"></div>
         </div>

        <div className="container-custom relative z-10">
          <h2 className="text-3xl text-white md:text-5xl font-bold mb-6 font-display leading-tight">
            Ready to Hire a Trusted <br/>Live-In Maid?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto font-light">
            Join 10,000+ Bangalore families who trust EzyHelpers for safe, reliable home help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#ad-lead-form" className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:shadow-lg transition-all shadow-xl">
              Get Your Maid in 3 Days
            </a>
            <a href="tel:+919972571005" className="bg-primary-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-900 transition-all shadow-xl flex items-center justify-center gap-2 border border-white/10">
              <PhoneIcon className="h-5 w-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>


      {/* Areas Served (DARK) - Gradient Pop */}
      <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl text-white font-bold mb-8 flex items-center justify-center">
            <HomeIcon className="h-6 w-6 mr-2 text-secondary-400" />
            Areas We Serve in Bangalore
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, idx) => (
              <span key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 rounded-full text-sm backdrop-blur-sm transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (LIGHT) - Trust & Info */}
      <section className="section-padding bg-white relative">
         {/* Pepper Pattern (Light) */}
         <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-2 md:p-6 border border-gray-100 shadow-sm">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Footer Simple (DARKEST) */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800 text-center">
        <div className="container-custom">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EzyHelpers. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
