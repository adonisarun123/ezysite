import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'
import { PhoneIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import NestCTA from '@/components/NestCTA'

export const metadata: Metadata = {
  title: 'Hire Cooks in Bareilly – Daily or Event-Based Help',
  description: 'Need cooks in Bareilly? Book part-time, full-time, or event-based cooking help. Our trained cooks prepare tasty, hygienic meals to suit your needs.',
  openGraph: {
    title: 'Hire Cooks in Bareilly – Daily or Event-Based Help',
    description: 'Need cooks in Bareilly? Book part-time, full-time, or event-based cooking help. Our trained cooks prepare tasty, hygienic meals to suit your needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/cooks',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/cooks'
  }
}

export default function BareillyCooksPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do your cooks in Bareilly know traditional UP recipes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our cooks in Bareilly are experts in preparing traditional UP cuisine. Whether you want tehri, bedai, puri-sabzi, dal-chawal, or festive halwa, our cook for home in Bareilly ensures your meals taste authentic and homemade."
      }
    },{
      "@type": "Question",
      "name": "Are your home cooks in Bareilly background-verified?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. All cooks in Bareilly provided by EzyHelpers are Aadhaar verified and local address verified. You can trust our cook for home in Bareilly to work safely, respectfully, and professionally within your kitchen and routine."
      }
    },{
      "@type": "Question",
      "name": "Are emergency or one-time cooks available in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide emergency or one-time cooks in Bareilly for urgent needs like parties, family functions, or sick days. You can book a cook for home in Bareilly quickly with EzyHelpers and get reliable help on short notice."
      }
    },{
      "@type": "Question",
      "name": "Do your Bareilly cooks follow hygiene standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our cooks in Bareilly strictly follow hygiene and safety standards. Every cook for home in Bareilly ensures the kitchen is clean, and meals are prepared using safe food handling practices, giving your family peace of mind."
      }
    },{
      "@type": "Question",
      "name": "Are your cooks trained in vegetarian cooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, EzyHelpers’ cooks in Bareilly are trained in vegetarian and Jain meal preparation. When you book a cook in Bareilly, they’ll follow your dietary requirements with care, using fresh ingredients to deliver nutritious, vegetarian home-cooked meals."
      }
    },{
      "@type": "Question",
      "name": "Do you provide female cooks in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer both male and female cooks in Bareilly based on your preference. Whether you need a full-time or part-time cook for home in Bareilly, EzyHelpers will match your family’s comfort and needs with verified professionals."
      }
    },{
      "@type": "Question",
      "name": "Do you offer cooks who can make sattvik or no-onion-no-garlic food?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide cooks in Bareilly who are experienced in preparing sattvik meals and no-onion-no-garlic food. Just mention your dietary or religious preferences when booking, and we’ll match you with a cook for home in Bareilly who respects your family's food traditions and fasting needs."
      }
    },{
      "@type": "Question",
      "name": "Do your cooks handle kitchen cleanup after cooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our cooks in Bareilly handle basic kitchen cleanup after cooking. Every cook for home in Bareilly ensures the cooking area, utensils, and stone are cleaned properly, maintaining hygiene and leaving your kitchen neat and ready for use."
      }
    },{
      "@type": "Question",
      "name": "What are the costs for cook services in Bareilly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cook services in Bareilly are budget-friendly and flexible. Whether you choose a full-time, part-time, or on-demand cook for home in Bareilly, EzyHelpers provides customised plans based on your needs. Contact us directly for a quote tailored to you."
      }
    },{
      "@type": "Question",
      "name": "Are cooks in Bareilly familiar with local markets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our cooks in Bareilly have excellent knowledge of local markets like Subhash Market and Civil Lines. When you hire a cook for home in Bareilly, they can source fresh vegetables, spices, and groceries at the best prices to suit your family's daily cooking needs."
      }
    }]
  };
  const faqs = [
    {
      question: 'Do your cooks in Bareilly know traditional UP recipes?',
      answer:
        'Yes, our cooks in Bareilly are experts in preparing traditional UP cuisine. Whether you want tehri, bedai, puri-sabzi, dal-chawal, or festive halwa, our cook for home in Bareilly ensures your meals taste authentic and homemade.',
    },
    {
      question: 'Are your home cooks in Bareilly background-verified?',
      answer:
        'Absolutely. All cooks in Bareilly provided by EzyHelpers are Aadhaar verified and local address verified. You can trust our cook for home in Bareilly to work safely, respectfully, and professionally within your kitchen and routine.',
    },
    {
      question: 'Are emergency or one-time cooks available in Bareilly?',
      answer:
        'Yes, we provide emergency or one-time cooks in Bareilly for urgent needs like parties, family functions, or sick days. You can book a cook for home in Bareilly quickly with EzyHelpers and get reliable help on short notice.',
    },
    {
      question: 'Do your Bareilly cooks follow hygiene standards?',
      answer:
        'Yes, our cooks in Bareilly strictly follow hygiene and safety standards. Every cook for home in Bareilly ensures the kitchen is clean, and meals are prepared using safe food handling practices, giving your family peace of mind.',
    },
    {
      question: 'Are your cooks trained in vegetarian cooking?',
      answer:
        'Yes, EzyHelpers’ cooks in Bareilly are trained in vegetarian and Jain meal preparation. When you book a cook in Bareilly, they’ll follow your dietary requirements with care, using fresh ingredients to deliver nutritious, vegetarian home-cooked meals.',
    },
    {
      question: 'Do you provide female cooks in Bareilly?',
      answer:
        'Yes, we offer both male and female cooks in Bareilly based on your preference. Whether you need a full-time or part-time cook for home in Bareilly, EzyHelpers will match your family’s comfort and needs with verified professionals.',
    },
    {
      question: 'Do you offer cooks who can make sattvik or no-onion-no-garlic food?',
      answer:
        'Yes, we provide cooks in Bareilly who are experienced in preparing sattvik meals and no-onion-no-garlic food. Just mention your dietary or religious preferences when booking, and we’ll match you with a cook for home in Bareilly who respects your family\'s food traditions and fasting needs.',
    },
    {
      question: 'Do your cooks handle kitchen cleanup after cooking?',
      answer:
        'Yes, our cooks in Bareilly handle basic kitchen cleanup after cooking. Every cook for home in Bareilly ensures the cooking area, utensils, and stove are cleaned properly, maintaining hygiene and leaving your kitchen neat and ready for use.',
    },
    {
      question: 'What are the costs for cook services in Bareilly?',
      answer:
        'Cook services in Bareilly are budget-friendly and flexible. Whether you choose a full-time, part-time, or on-demand cook for home in Bareilly, EzyHelpers provides customised plans based on your needs. Contact us directly for a quote tailored to you.',
    },
    {
      question: 'Are cooks in Bareilly familiar with local markets?',
      answer:
        'Yes, our cooks in Bareilly have excellent knowledge of local markets like Subhash Market and Civil Lines. When you hire a cook for home in Bareilly, they can source fresh vegetables, spices, and groceries at the best prices to suit your family\'s daily cooking needs.',
    },
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
            { label: 'Cooks' }
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
                PREMIUM COOKING SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white tracking-tight drop-shadow-sm">
                Expert Home Cooks in Bareilly <br className="hidden md:block" /><span className="text-indigo-200">– Delicious Homemade Meals</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-indigo-50 max-w-4xl mx-auto leading-relaxed font-medium mb-10">
                Trusted cooks in Bareilly offering daily homemade meals with expertise in authentic UP cuisine.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
                <Link href="/hire-helper" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1 duration-300">
                  Book Your Cook Now
                </Link>

                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-indigo-300/50 hover:bg-white/10 hover:border-white backdrop-blur-sm transition-all duration-300">
                  <PhoneIcon className="h-6 w-6 mr-2 group-hover:animate-pulse" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                {[
                  'Background Verified Cooks',
                  'Local Taste Experts',
                  '100% Satisfaction Guarantee',
                  'Emergency Service',
                ].map((badge, idx) => (
                  <div key={idx} className="inline-flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/10 shadow-inner">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { k: '100+', v: 'Happy Bareilly Families' },
                  { k: '50+', v: 'Verified Local Cooks' },
                  { k: '4.9★', v: 'Customer Rating' },
                ].map((m, i) => (
                  <div key={i} className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl group hover:bg-white/10 transition-colors duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">{m.k}</div>
                    <div className="text-indigo-200 font-medium text-sm md:text-base uppercase tracking-wider">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Cook Services in Bareilly? */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Why Choose Us for Cook Services in Bareilly?</h2>
              <p className="text-xl text-gray-600">Skilled cooks, authentic local cuisine, and reliable service for stress-free home cooking solutions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Trained in Authentic UP Cuisine',
                'Background-Verified & Experienced Cooks',
                'Vegetarian & Non-Vegetarian Expertise',
                'Affordable Plans for Every Family',
                'Hygienic Cooking Practices',
                'Local Market Expertise',
                'Quick Service Response',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 hover:border-indigo-100 transition-all duration-300 group">
                  <div className="bg-indigo-50 p-3 rounded-xl group-hover:bg-indigo-100 transition-colors shrink-0">
                    <span className="text-indigo-600 font-bold">✓</span>
                  </div>
                  <span className="font-semibold text-gray-800 text-lg leading-snug pt-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Cuisine Expertise for Bareilly Homes */}
        <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="container-custom max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display tracking-tight text-white">Regional Cuisine Expertise for Bareilly Homes</h2>
              <p className="text-xl text-indigo-200">Our cooks know what Bareilly families truly love.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'UP Specialties', desc: 'Tehri, Bedai, Puri-Sabzi, and authentic festival meals for local flavours.' },
                { title: 'Traditional Breakfast', desc: 'Soft kachoris, hot jalebis, and seasonal morning snacks made fresh.' },
                { title: 'Festival Feasts', desc: 'Kheer, Halwa, Navratri, and Diwali special menus prepared hygienically at home.' },
                { title: 'Local Market Skills', desc: 'Familiar with Subhash Market and Civil Lines for getting fresh, budget-friendly groceries.' },
                { title: 'Seasonal Cooking', desc: 'Using local vegetables and spices that suit Bareilly\'s weather and tastes.' },
                { title: 'Diet-Focused Meals', desc: 'Jain, pure veg, diabetic-friendly, or fasting foods made with care and respect.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 rounded-2xl shadow-lg hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-indigo-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered by Our Cooks in Bareilly */}
        <section className="section-padding bg-gray-50 relative">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Services Offered by Our Cooks in Bareilly</h2>
              <p className="text-xl text-gray-600">Wide range of cooking services designed to meet every Bareilly family's daily meal and special occasion needs.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Daily Meal Preparation', desc: 'We prepare fresh, homestyle breakfast, lunch, and dinner daily, tailored to your family\'s specific taste preferences.', color: 'indigo' },
                { title: 'Authentic UP Cuisine', desc: 'Experts in Bareilly-style dishes like kachori-jalebi, puri-sabzi, and festive sweets prepared with traditional methods.', color: 'violet' },
                { title: 'Diet-Specific Cooking', desc: 'Specializing in Jain, sattvik, and diabetic-friendly meals made with care for health-conscious families.', color: 'pink' },
                { title: 'Full Kitchen Management', desc: 'Our cooks handle groceries, meal prep, and kitchen hygiene, ensuring smooth daily cooking and organisation.', color: 'blue' },
                { title: 'Special Occasion Meals', desc: 'Cooks for weddings, poojas, and family functions who create rich, traditional meals with cultural relevance.', color: 'emerald' },
                { title: 'Traditional Preservation', desc: 'Skilled in making homemade pickles, preserving grains, and offering seasonal food storage tips and techniques.', color: 'amber' }
              ].map((service, idx) => (
                <div key={idx} className={`bg-white rounded-3xl p-8 border border-gray-100 hover:border-${service.color}-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${service.color}-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110`}></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl shadow-sm flex items-center justify-center mb-6 text-2xl font-bold text-${service.color}-600`}>{idx + 1}</div>
                    <h3 className={`text-2xl font-bold text-gray-900 mb-3 group-hover:text-${service.color}-700 transition-colors font-display`}>{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow text-lg">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Cooking Service Options for Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Flexible Cooking Service Options for Bareilly</h2>
              <p className="text-xl text-gray-600">Choose the right cooking service for your family’s needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Full-Time Cooks', perks: ['2-3 meals daily', 'Grocery management', 'Kitchen organization', 'Meal planning'] },
                { title: 'Part-Time Cooks', perks: ['1-2 meals daily', 'Flexible timing', 'Advance preparation', 'Weekend cooking'] },
                { title: 'On-Demand Cooks', perks: ['One-time cooking help', 'Ideal for sudden needs', 'Party or event support', 'Quick booking & arrival'] }
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-6">{item.title}</h3>
                  <ul className="space-y-4">
                    {item.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700 font-medium text-lg">
                        <span className="text-emerald-500 font-bold">✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs Cook Services in Bareilly? */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Who Needs Cook Services in Bareilly?</h2>
              <p className="text-xl text-gray-600">Busy households across Bareilly rely on us for hassle-free meals!</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Working Couples', desc: 'Save time with ready-made meals after long office hours.' },
                { title: 'Elderly Families', desc: 'Nutritious, soft meals prepared with senior dietary needs in mind.' },
                { title: 'New Parents', desc: 'Healthy home-cooked food while you focus on your baby.' },
                { title: 'Large Families', desc: 'Stress-free cooking for gatherings and daily meals.' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Easy 4-Step Cook Hiring Process */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">Our Easy 4-Step Cook Hiring Process</h2>
              <p className="text-xl text-gray-600">Quick, reliable, and hassle-free cook services delivered right to your Bareilly home kitchen daily.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-1 bg-indigo-100 rounded-full"></div>
              
              {[
                { title: 'Easy Service Booking', desc: 'Book your cook online or via call with preferred timing and meal requirements.' },
                { title: 'Verified Cook Assignment', desc: 'Trained, verified cooks arrive with cooking experience and local cuisine knowledge.' },
                { title: 'Menu Planning Discussion', desc: 'Cook discusses family preferences and dietary needs and creates customised meal plans.' },
                { title: 'Fresh, Delicious Cooking', desc: 'Daily fresh meals prepared with quality ingredients and family satisfaction guaranteed.' }
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
              <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-display tracking-tight">Get Your Perfect Cook Today!</h2>
              <p className="text-xl md:text-2xl mb-10 text-indigo-100 font-medium max-w-3xl mx-auto leading-relaxed">
                Don't compromise on fresh, home-cooked meals. Book verified, skilled cooks in Bareilly for your family's daily cooking needs now.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-xl py-5 px-10 rounded-2xl shadow-2xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                  Book Online
                </Link>
                <Link href="tel:+918031411776" className="inline-flex items-center justify-center bg-transparent text-white font-bold text-xl py-5 px-10 rounded-2xl border-2 border-indigo-300 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                  <PhoneIcon className="h-6 w-6 mr-2" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The EzyHelpers Promise */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-8 border-indigo-500 bg-indigo-50/50 p-8 md:p-12 rounded-r-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">The EzyHelpers Promise</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Hiring a home cook through EzyHelpers in Bareilly means more than just outsourcing daily meals; it’s about bringing in a trained professional.</p>
              <p className="font-medium text-indigo-900 text-xl py-2">Every EzyHelpers cook in Bareilly is background-verified, punctual, and trained in food safety practices.</p>
              <p>With EzyHelpers, you gain a dependable partner in your daily food and wellness routine.</p>
            </div>
          </div>
        </section>

        {/* Explore Other Home Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Explore Other Home Services</h2>
              <p className="text-xl text-gray-600">Complete home support services available across Bareilly for all your household daily care needs.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Elderly Care Services', desc: 'Daily care, medication help, and companionship for seniors.', href: '/cities/bareilly/elderly-care' },
                { title: 'Baby Care Services', desc: 'Trained babysitters for safe feeding, bathing, and childcare.', href: '/cities/bareilly/babysitter' },
                { title: 'Personal Driver Services', desc: 'Trusted drivers for school, office, or outstation travel.', href: '/cities/bareilly/drivers' }
              ].map((card, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">{card.desc}</p>
                  </div>
                  <Link href={card.href} className="text-indigo-600 font-bold hover:text-indigo-800 transition-colors inline-flex items-center gap-1 group-hover:underline">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
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
                  question: "Do your cooks in Bareilly know traditional UP recipes?",
                  answer: "Yes, our cooks in Bareilly are experts in preparing traditional UP cuisine. Whether you want tehri, bedai, puri-sabzi, dal-chawal, or festive halwa, our cook for home in Bareilly ensures your meals taste authentic and homemade."
                },
                {
                  question: "Are your home cooks in Bareilly background-verified?",
                  answer: "Absolutely. All cooks in Bareilly provided by EzyHelpers are Aadhaar verified and local address verified. You can trust our cook for home in Bareilly to work safely, respectfully, and professionally within your kitchen and routine."
                },
                {
                  question: "Are emergency or one-time cooks available in Bareilly?",
                  answer: "Yes, we provide emergency or one-time cooks in Bareilly for urgent needs like parties, family functions, or sick days. You can book a cook for home in Bareilly quickly with EzyHelpers and get reliable help on short notice."
                },
                {
                  question: "Do your Bareilly cooks follow hygiene standards?",
                  answer: "Yes, our cooks in Bareilly strictly follow hygiene and safety standards. Every cook for home in Bareilly ensures the kitchen is clean, and meals are prepared using safe food handling practices, giving your family peace of mind."
                },
                {
                  question: "Are your cooks trained in vegetarian cooking?",
                  answer: "Yes, EzyHelpers’ cooks in Bareilly are trained in vegetarian and Jain meal preparation. When you book a cook in Bareilly, they’ll follow your dietary requirements with care, using fresh ingredients to deliver nutritious, vegetarian home-cooked meals."
                },
                {
                  question: "Do you provide female cooks in Bareilly?",
                  answer: "Yes, we offer both male and female cooks in Bareilly based on your preference. Whether you need a full-time or part-time cook for home in Bareilly, EzyHelpers will match your family’s comfort and needs with verified professionals."
                },
                {
                  question: "Do you offer cooks who can make sattvik or no-onion-no-garlic food?",
                  answer: "Yes, we provide cooks in Bareilly who are experienced in preparing sattvik meals and no-onion-no-garlic food. Just mention your dietary or religious preferences when booking, and we’ll match you with a cook for home in Bareilly who respects your family's food traditions and fasting needs."
                },
                {
                  question: "Do your cooks handle kitchen cleanup after cooking?",
                  answer: "Yes, our cooks in Bareilly handle basic kitchen cleanup after cooking. Every cook for home in Bareilly ensures the cooking area, utensils, and stone are cleaned properly, maintaining hygiene and leaving your kitchen neat and ready for use."
                },
                {
                  question: "What are the costs for cook services in Bareilly?",
                  answer: "Cook services in Bareilly are budget-friendly and flexible. Whether you choose a full-time, part-time, or on-demand cook for home in Bareilly, EzyHelpers provides customised plans based on your needs. Contact us directly for a quote tailored to you."
                },
                {
                  question: "Are cooks in Bareilly familiar with local markets?",
                  answer: "Yes, our cooks in Bareilly have excellent knowledge of local markets like Subhash Market and Civil Lines. When you hire a cook for home in Bareilly, they can source fresh vegetables, spices, and groceries at the best prices to suit your family's daily cooking needs."
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