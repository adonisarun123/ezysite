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
        <section className="relative bg-gradient-to-br from-indigo-700 via-violet-700 to-blue-800 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 font-display leading-tight text-white focus:outline-none">
                Expert Home Cooks in Bareilly – Delicious Homemade Meals Daily!
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
                Trusted cooks in Bareilly offering daily homemade meals with expertise in authentic UP cuisine.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto mb-10">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform"
                >
                  Book Your Cook Now
                </Link>

                <Link
                  href="tel:+918031411776"
                  className="group inline-flex items-center justify-center w-full sm:w-auto text-white font-bold text-lg py-4 px-10 rounded-2xl border-2 border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all"
                >
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>

              {/* Service Assurance Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                {[
                  'Background Verified Cooks',
                  'Local Taste Experts',
                  '100% Satisfaction Guarantee',
                  'Emergency Service',
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                    <CheckCircleIcon className="h-4 w-4 mr-2 text-white" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { k: '100+', v: 'Happy Bareilly Families' },
                  { k: '50+', v: 'Verified Local Cooks' },
                  { k: '4.9★', v: 'Customer Rating' },
                ].map((m, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl px-6 py-5 backdrop-blur-md border border-white/10">
                    <div className="text-3xl font-extrabold text-white">{m.k}</div>
                    <div className="text-indigo-100 font-medium">{m.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Cook Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Us for Cook Services in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Skilled cooks, authentic local cuisine, and reliable service for stress-free home cooking solutions</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto">
              {[
                'Trained in Authentic UP Cuisine',
                'Background-Verified & Experienced Cooks',
                'Vegetarian & Non-Vegetarian Expertise',
                'Affordable Plans for Every Family',
                'Hygienic Cooking Practices',
                'Local Market Expertise',
                'Quick Service Response',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-1" /> {item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Regional Cuisine Expertise for Bareilly Homes */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Regional Cuisine Expertise for Bareilly Homes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our cooks know what Bareilly families truly love.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
              {[
                'UP Specialties: Tehri, Bedai, Puri-Sabzi, and authentic festival meals for local flavours.',
                'Traditional Breakfast: Soft kachoris, hot jalebis, and seasonal morning snacks made fresh.',
                'Festival Feasts: Kheer, Halwa, Navratri, and Diwali special menus prepared hygienically at home.',
                "Local Market Skills: Familiar with Subhash Market and Civil Lines for getting fresh, budget-friendly groceries.",
                "Seasonal Cooking: Using local vegetables and spices that suit Bareilly's weather and tastes.",
                'Diet-Focused Meals: Jain, pure veg, diabetic-friendly, or fasting foods made with care and respect.',
              ].map((text, i) => (
                <div key={i} className="flex items-start bg-white rounded-xl p-5 border border-gray-100"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-1" /> <span className="text-gray-700">{text}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Offered by Our Cooks in Bareilly */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Services Offered by Our Cooks in Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Wide range of cooking services designed to meet every Bareilly family's daily meal and special occasion needs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {t:'Daily Meal Preparation', d:'We prepare fresh, homestyle breakfast, lunch, and dinner daily, tailored to your family\'s specific taste preferences.'},
                {t:'Authentic UP Cuisine', d:'Experts in Bareilly-style dishes like kachori-jalebi, puri-sabzi, and festive sweets prepared with traditional methods.'},
                {t:'Diet-Specific Cooking', d:'Specializing in Jain, sattvik, and diabetic-friendly meals made with care for health-conscious families.'},
                {t:'Full Kitchen Management', d:'Our cooks handle groceries, meal prep, and kitchen hygiene, ensuring smooth daily cooking and organisation.'},
                {t:'Special Occasion Meals', d:'Cooks for weddings, poojas, and family functions who create rich, traditional meals with cultural relevance.'},
                {t:'Traditional Preservation', d:'Skilled in making homemade pickles, preserving grains, and offering seasonal food storage tips and techniques.'},
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{i+1}. {s.t}</h3>
                  <p className="text-gray-700">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Cooking Service Options for Bareilly */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Cooking Service Options for Bareilly</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose the right cooking service for your family’s needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[{
                title: 'Full-Time Cooks',
                points: ['2-3 meals daily','Grocery management','Kitchen organization','Meal planning']
              },{
                title: 'Part-Time Cooks',
                points: ['1-2 meals daily','Flexible timing','Advance preparation','Weekend cooking']
              },{
                title: 'On-Demand / Emergency Cooks',
                points: ['One-time cooking help','Ideal for sudden needs','Party or event support','Quick booking & arrival']
              }].map((card, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{idx+1}. {card.title}</h3>
                  <ul className="space-y-2 text-gray-700">
                    {card.points.map((p, i) => (
                      <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 mt-1"/> {p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs Cook Services in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs Cook Services in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Busy households across Bareilly rely on us for hassle-free meals!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {t:'Working Couples', d:'Save time with ready-made meals after long office hours.'},
                {t:'Elderly Families', d:'Nutritious, soft meals prepared with senior dietary needs in mind.'},
                {t:'New Parents', d:'Healthy home-cooked food while you focus on your baby.'},
                {t:'Large Families', d:'Stress-free cooking for gatherings and daily meals.'},
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.t}</h3>
                  <p className="text-gray-700">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Easy 4-Step Cook Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Easy 4-Step Cook Hiring Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Quick, reliable, and hassle-free cook services delivered right to your Bareilly home kitchen daily</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {t:'1. Easy Service Booking', d:'Book your cook online or via call with preferred timing and meal requirements.'},
                {t:'2. Verified Cook Assignment', d:'Trained, verified cooks arrive with cooking experience and local cuisine knowledge.'},
                {t:'3. Menu Planning Discussion', d:'Cook discusses family preferences and dietary needs and creates customised meal plans.'},
                {t:'4. Fresh, Delicious Cooking', d:'Daily fresh meals prepared with quality ingredients and family satisfaction guaranteed.'},
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{s.t}</h3>
                  <p className="text-gray-700">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Home Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Home Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Complete home support services available across Bareilly for all your household daily care needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Elderly Care Services', desc: 'Daily care, medication help, and companionship for seniors.', href: '/cities/bareilly/elderly-care' },
                { title: 'Baby Care Services', desc: 'Trained babysitters for safe feeding, bathing, and childcare.', href: '/cities/bareilly/babysitter' },
                { title: 'Personal Driver Services', desc: 'Trusted drivers for school, office, or outstation travel.', href: '/cities/bareilly/drivers' }
              ].map((card, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.desc}</p>
                  <Link href={card.href} className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700">Learn More<ArrowRightIcon className="h-4 w-4 ml-1" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA: Get Your Perfect Cook Today! */}
        <section className="section-padding bg-gradient-to-r from-indigo-700 to-indigo-900 text-white text-center font-display">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Get Your Perfect Cook Today!
              </h2>
              <p className="text-xl mb-8 text-indigo-100 font-medium">
                Don't compromise on fresh, home-cooked meals. Book verified, skilled cooks in Bareilly for your family's daily cooking needs now.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
                <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-2xl shadow-xl hover:bg-gray-100 transition-all hover:scale-105 transform">
                  Book Online
                </Link>
                <Link href="tel:+918031411776" className="group inline-flex items-center justify-center bg-transparent border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm font-bold text-lg py-4 px-10 rounded-2xl transition-all">
                  <PhoneIcon className="h-5 w-5 mr-1" />
                  Call +91 80 3141 1776
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The EzyHelpers Promise */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl border-l-4 border-indigo-600 pl-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">The EzyHelpers Promise</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>Hiring a home cook through EzyHelpers in Bareilly means more than just outsourcing daily meals; it’s about bringing in a trained professional.</p>
              <p className="font-medium text-indigo-900/80">Every EzyHelpers cook in Bareilly is background-verified, punctual, and trained in food safety practices.</p>
              <p>With EzyHelpers, you gain a dependable partner in your daily food and wellness routine.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display text-center">FAQs</h2>
              <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
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