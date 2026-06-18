import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CityBlogLinks from '@/components/CityBlogLinks'
import NestCTA from '@/components/NestCTA'

export const revalidate = 3600
import AvailableInCities from '@/components/AvailableInCities'
import { ServiceSchema } from '@/components/schema'
import QuickAnswer from '@/components/QuickAnswer'
import {
  UserGroupIcon, 
  HeartIcon, 
  ShieldCheckIcon, 
  AcademicCapIcon,
  CheckCircleIcon,
  PhoneIcon,
  ClockIcon,
  StarIcon,
  SparklesIcon,
  SunIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  FaceSmileIcon,
  BriefcaseIcon,
  HomeModernIcon,
  GlobeAsiaAustraliaIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Trusted English-Speaking Babysitters at Home',
  description: 'Hire verified English-speaking Babysitters who help children build confidence, manners, and fluent communication through caring and professional home support.',
  keywords: 'english speaking babysitter, english nanny, professional babysitter, childcare, child caretaker, child safety, child development',
  openGraph: {
    title: 'Trusted English-Speaking Babysitters at Home',
    description: 'Hire verified English-speaking Babysitters who help children build confidence, manners, and fluent communication through caring and professional home support.',
    url: 'https://www.ezyhelpers.com/services/english-speaking-babysitters',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN',
    images: [{ url: "https://www.ezyhelpers.com/og?title=Trusted%20English-Speaking%20Babysitters", width: 1200, height: 630, alt: "Trusted English-Speaking Babysitters" }],
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/english-speaking-babysitters'
  }
}

export default function EnglishSpeakingBabysitterPage() {
  const whyChooseUs = [
    {
      title: "Verified & Educated Caregivers",
      description: "Our English-speaking babysitters are verified, trained, gentle, and provide safe childcare daily.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Focus on Child Growth & Learning", 
      description: "Each babysitter supports learning through stories, activities, English words, and confidence-building games.",
      icon: AcademicCapIcon,
    },
    {
      title: "Strong English Communication Skills",
      description: "An English-speaking babysitter helps children improve communication, school understanding, and daily English fluency.",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "Flexible Timings",
      description: "Choose an English-speaking babysitter for part-time, full-time, daily, or live-in flexible schedules.",
      icon: ClockIcon,
    },
    {
      title: "English Fluency",
      description: "Every babysitter teaches new words, stories, and communication skills, supporting strong language development.",
      icon: BookOpenIcon,
    }
  ]

  const servicesProvided = [
    {
      title: "Early Learning Support",
      description: "Helps toddlers learn basic English words, colours, numbers, and simple concepts through stories, songs, and playful activities.",
    },
    {
      title: "School Readiness Help",
      description: "Builds discipline, manners, and focus. Helps children get ready for school with confidence and better social interaction.",
    },
    {
      title: "Nutrition & Meal Support",
      description: "Prepares healthy meals, feeds children safely, and follows dietary needs or allergies carefully.",
    },
    {
      title: "Daily Routine Care",
      description: "Handles bathing, dressing, diaper changing, and hygiene in a caring and patient way.",
    },
    {
      title: "Outdoor Play & Physical Growth",
      description: "Encourages park play, exercise, and motor skills that help children stay active and strong.",
    },
    {
      title: "Sleep & Bedtime Routine",
      description: "Helps children wind down, follow a proper bedtime routine, and sleep peacefully.",
    },
    {
      title: "Educational Play",
      description: "Engages children with English-based stories, puzzles, reading time, and creative games that improve imagination and learning.",
    },
    {
      title: "Homework Support",
      description: "Assists children with homework using simple explanations and gentle English guidance.",
    },
    {
      title: "Emotional & Social Care",
      description: "Teaches kids how to express feelings, talk politely, and interact confidently with others.",
    }
  ]

  const benefits = [
    "Working Parents: Reliable English-speaking babysitters help manage daily childcare while parents focus on work.",
    "Families Moving to India from Abroad: English-speaking nannies help children adjust confidently, stay comfortable, and communicate clearly in a new environment.",
    "Learning-Focused Parents: Ideal for parents who want early learning, reading habits, and strong English communication skills.",
    "Modern Educated Families: Perfect for families who prefer smart, well-spoken, and trained babysitters for everyday childcare."
  ]
  
  const faqs = [
    {
        question: "What are English-speaking Babysitters and how are they different from regular Babysitters?",
        answer: "English-speaking babysitters are trained caregivers who can talk fluently in English while taking care of your child. Unlike regular babysitters, they help children improve their English communication, vocabulary, and speaking confidence through daily interaction, stories, and small learning activities. They also ensure full safety, comfort, and routine care at home."
    },
    {
        question: "What is the minimum English fluency level of your English-speaking Nanny?",
        answer: "Our nannies are comfortable speaking and understanding English clearly. They can read storybooks, teach simple English words, talk meaningfully with children, and guide them in daily activities. Their fluency helps children learn in a natural, simple, and enjoyable way."
    },
    {
        question: "Are your English-speaking Babysitters background-verified?",
        answer: "Yes. Every Nanny goes through complete verification, including local address check, Aadhaar check, references, and skill assessment. If needed, police verification and health screening can also be arranged for extra safety and trust."
    },
    {
        question: "Can I request a trial period with the selected Babysitter?",
        answer: "Yes. You can take a short trial at an additional cost to see how your child responds to the babysitter. This trial helps you understand their behaviour, care style, communication, and comfort before confirming long-term service."
    },
    {
        question: "How much do English-speaking Babysitters cost?",
        answer: "The cost depends on working hours, type of service (hourly, full-time, or live-in), number of children, and any special needs. EzyHelpers provides transparent pricing with no hidden fees, ensuring safe and professional care at a fair rate."
    },
    {
        question: "What qualifications do your educated Nannies have?",
        answer: "Our nannies are well-educated and trained in childcare. Most of them are DWSSC-trained and certified. They know how to manage routines, teach basic English, communicate politely, and take care of children responsibly."
    },
    {
        question: "Why choose a Nanny agency instead of finding a Babysitter independently?",
        answer: "A professional agency like EzyHelpers gives you verified, trained, English-speaking babysitters. We handle all background checks, training, matching, and replacements. This gives you safety, support, and peace of mind—something you may not get when hiring independently."
    }
  ]

  return (
    <>
      <ServiceSchema serviceName={"English-Speaking Babysitters"} serviceDescription={"Hire verified English-speaking Babysitters who help children build confidence, manners, and fluent communication through caring and professional home support."} serviceType={"Professional Babysitter Services"} serviceUrl={"https://www.ezyhelpers.com/services/english-speaking-babysitters"} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 left-24 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 right-24 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M60 0C60 33.137 33.137 60 0 60s60 26.863 60 60 26.863-60 60-60S60 26.863 60 0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Educated Professionals</span>
                </div>
 
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  English-Speaking Babysitters for Modern Families
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  EzyHelpers’ English-speaking babysitters build children’s confidence, manners, and communication skills, helping them speak fluently and interact better at school, home, and with others.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Verified Babysitters
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Educated Professionals
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Fluent in English Communication
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Link href="/hire-helper" className="group relative bg-white text-indigo-800 hover:bg-indigo-50 font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">Book a Babysitter Today</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+918031411776" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 whitespace-nowrap">
                    <PhoneIcon className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="hidden sm:inline">Call Now</span>
                    <span className="sm:hidden">080-31411776</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold flex items-center justify-center lg:justify-start text-white">4.9<StarIcon className="h-6 w-6 ml-1 text-yellow-400 fill-current" /></div>
                    <div className="text-indigo-200 text-sm">Rated Babysitters</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">300+</div>
                    <div className="text-indigo-200 text-sm">Bookings</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">1,000+</div>
                    <div className="text-indigo-200 text-sm">Families Served</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ChatBubbleLeftRightIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-indigo-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-indigo-100">Fluent English</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-fuchsia-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <AcademicCapIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-purple-100">Educated</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Safe & Verified</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-600 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <BookOpenIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-pink-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-pink-100">Learning Support</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-purple-400 text-purple-900 rounded-full p-3 shadow-lg">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuickAnswer
        question="How do I hire an English-speaking babysitter through EzyHelpers?"
        answer="EzyHelpers provides verified, educated English-speaking babysitters. Just share your requirements, review shortlisted profiles, conduct a trial or interview, and start service within a few days for guaranteed peace of mind."
      />

      {/* Why Choose Our English-Speaking Babysitters */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose Our English-Speaking Babysitters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Delivering safe, educated, and fluent English babysitters who support learning, confidence, and daily childcare needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Services Do Our English-Speaking Babysitters Provide? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              What Services Do Our English-Speaking Babysitters Provide?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our trained babysitters offer complete childcare support, helping children grow emotionally, mentally, and physically every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            {servicesProvided.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-600 shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center bg-indigo-600 text-white font-semibold text-lg py-4 px-8 rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Book Educated Babysitter
            </Link>
          </div>
        </div>
      </section>

      {/* Who Benefits from Premium English-Speaking Babysitter Services? */}
      <section className="section-padding bg-indigo-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Who Benefits from Premium English-Speaking Babysitter Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exceptional childcare solutions designed for diverse family situations and unique parenting needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                 <BriefcaseIcon className="h-10 w-10 text-indigo-500" />
                 <h3 className="text-xl font-bold text-gray-900">Working Parents</h3>
              </div>
              <p className="text-gray-600">Reliable English-speaking babysitters help manage daily childcare while parents focus on work.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                 <GlobeAsiaAustraliaIcon className="h-10 w-10 text-indigo-500" />
                 <h3 className="text-xl font-bold text-gray-900">Families Moving to India from Abroad</h3>
              </div>
              <p className="text-gray-600">English-speaking nannies help children adjust confidently, stay comfortable, and communicate clearly in a new environment.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                 <BookOpenIcon className="h-10 w-10 text-indigo-500" />
                 <h3 className="text-xl font-bold text-gray-900">Learning-Focused Parents</h3>
              </div>
              <p className="text-gray-600">Ideal for parents who want early learning, reading habits, and strong English communication skills.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 border border-indigo-100 shadow-sm flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                 <HomeModernIcon className="h-10 w-10 text-indigo-500" />
                 <h3 className="text-xl font-bold text-gray-900">Modern Educated Families</h3>
              </div>
              <p className="text-gray-600">Perfect for families who prefer smart, well-spoken, and trained babysitters for everyday childcare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Babysitter Options for Every Home */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Flexible Babysitter Options for Every Home
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the right English-speaking babysitter plan based on your family’s routine and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live-In Babysitters (24-Hour Support)",
                description: "A live-in English-speaking babysitter stays full-time, providing continuous childcare, safety, learning, and emotional support daily."
              },
              {
                title: "Full-Time Babysitters (8–10 Hours Daily)", 
                description: "A full-time English-speaking babysitter manages routines, meals, learning, hygiene, and daily activities with consistent caring support."
              },
              {
                title: "Part-Time Babysitters (2–6 Hours)",
                description: "A part-time English-speaking babysitter assists with short childcare needs, learning time, play routines, and structured daily support."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Prefer Educated & Communicative Nannies */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Parents Prefer Educated & Communicative Nannies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The essential role of an English-speaking educated Babysitter/Nanny
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Supporting Busy Families", desc: "Our English-speaking babysitters make parents’ lives easier by managing childcare routines, learning support, and daily supervision." },
              { title: "Early English Learning", desc: "Children pick up English faster when they hear it daily through stories, play, and simple conversation." },
              { title: "Better Educational Support", desc: "Educated nannies turn everyday activities into meaningful learning moments through reading, phonics, and practice." },
              { title: "Language Development", desc: "Daily English conversations help children speak clearly, learn new words, and express themselves confidently." },
              { title: "Mental & Cognitive Growth", desc: "Babysitters support problem-solving, vocabulary building, and early learning exercises that help overall development." },
              { title: "Easy Communication for Parents", desc: "Parents who work in English-speaking jobs can easily share instructions, routines, and expectations." },
              { title: "Professionalism", desc: "Educated nannies maintain discipline, privacy, polite communication, and a responsible attitude." },
              { title: "Creative Play & Fun Learning", desc: "They use books, drawing, music, and activities to make learning fun and engaging." }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircleIcon className="h-6 w-6 text-indigo-600 mt-1 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Hire English-Speaking Babysitters */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              How To Hire English-Speaking Babysitters
            </h2>
            <p className="text-lg text-gray-600">Quick, Reliable, and Transparent Hiring</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
              <p className="text-gray-600">Tell us your child's age, routine, and the type of care you need through a call or an online form.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Shortlisted Profiles</h3>
              <p className="text-gray-600">We share verified English-speaking babysitter profiles that match your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interaction & Trial</h3>
              <p className="text-gray-600">You can conduct interviews or video calls with selected babysitters, assess them.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm & Start Service</h3>
              <p className="text-gray-600">Once confirmed, your chosen babysitter starts working, and our support team stays in touch for help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
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
      <section className="section-padding bg-gradient-to-r from-indigo-500 to-indigo-700 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
            Bring Professional Childcare Home Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Give your child a strong foundation in communication, behaviour, and early learning. A skilled English-speaking Nanny is an investment in your child’s future and your family’s peace of mind.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto px-4">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-indigo-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-indigo-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book English-speaking Babysitter
            </Link>

            <Link
              href="tel:+918031411776"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 shrink-0" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Explore Other Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete Home & Family Support by EzyHelpers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Chef Services",
                description: "Get skilled chefs who prepare homely, traditional, or international meals.",
                href: "/services/professional-chef-for-home"
              },
              {
                title: "Chauffeurs for Luxury Cars", 
                description: "Professional drivers for safe and punctual travel in premium cars.",
                href: "/services/premium-chauffeur-service"
              },
              {
                title: "Japa / Postpartum Care",
                description: "Trained newborn and mother-care helpers for feeding, massage, and recovery.",
                href: "/services/japa-nanny-services"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-indigo-600 font-medium hover:text-indigo-700">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <NestCTA />
      <AvailableInCities
        serviceSlug="english-speaking-babysitters"
        serviceName="English-Speaking Babysitters"
        cities={[
          { name: "Bangalore", href: "/cities/bangalore/nanny-babysitter" },
          { name: "Bareilly", href: "/cities/bareilly/babysitter" },
        ]}
      />
      {/* Blog guides interlinking */}
      <CityBlogLinks
        tags={['childcare', 'babysitter', 'nanny', 'bangalore']}
        title="Childcare Guides for Parents"
        subtitle="Expert advice on nannies and live-in childcare."
      />

      <Footer />
      </main>
    </>
  )
}
