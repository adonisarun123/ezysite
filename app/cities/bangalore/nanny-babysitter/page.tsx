import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import FAQAccordion from '@/components/FAQAccordion'
import {
  UserGroupIcon,
  HeartIcon,
  CheckCircleIcon,
  MapPinIcon,
  CalendarDaysIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  CakeIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Babysitter for Home in Bangalore | Trusted Childcare',
  description:
    'Find trained babysitters for home in Bangalore. Safe, reliable childcare for infants, toddlers & school kids with flexible hours.',
  openGraph: {
    title: 'Babysitter for Home in Bangalore | Trusted Childcare',
    description:
      'Trusted, trained, and caring babysitters in Bangalore for infants to teens. Flexible hourly or full-day support at home.',
    url: 'https://ezyhelpers.com/cities/bangalore/nanny-babysitter',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/cities/bangalore/nanny-babysitter'
  }
}

export default function BangaloreNannyBabysitterPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://ezyhelpers.com' },
    { name: 'Cities', url: 'https://ezyhelpers.com/cities' },
    { name: 'Bangalore', url: 'https://ezyhelpers.com/cities/bangalore' },
    { name: 'Nanny & Babysitter', url: 'https://ezyhelpers.com/cities/bangalore/nanny-babysitter' }
  ]

  const reasons = [
    {
      title: 'Irregular Work Schedules',
      description:
        'Night shifts or long hours? Our babysitters maintain your child’s daily routine with ease.',
      icon: CalendarDaysIcon
    },
    {
      title: 'Nuclear Families',
      description:
        'In the absence of nearby family members in Bangalore, in-home babysitters offer essential care and trusted child support.',
      icon: UserGroupIcon
    },
    {
      title: 'School Drop & Pick Challenges',
      description:
        'Busy work hours? Babysitters assist with school transport, homework, and after-school supervision at home.',
      icon: AcademicCapIcon
    },
    {
      title: 'Trusted Help for Families New to Bangalore',
      description:
        'New to Bangalore? Our verified babysitters provide safe, reliable help familiar with local areas.',
      icon: ShieldCheckIcon
    }
  ]

  const services = [
    {
      title: 'Daily Routine Management',
      description:
        'Our babysitters follow your child’s daily schedule to keep them happy, clean, and well cared for.',
      features: [
        'Help with feeding, giving baths, and changing diapers on time',
        'Support during nap time and keep hygiene in check',
        'Safely drop off and pick up your child from school',
        'Assist with dressing and packing school bags',
        'Guide kids with brushing, toilet training, and other daily habits'
      ],
      icon: CheckCircleIcon,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Engaging Activities',
      description: 'Our babysitters make sure your child has fun while learning and growing every day.',
      features: [
        'Play games, share fun stories, and read picture books',
        'Teach ABCs, 123s, colors, and animal names',
        'Help with drawing, coloring, and sticker books',
        'Encourage free play and let kids enjoy their own time'
      ],
      icon: PuzzlePieceIcon,
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Food & Nutrition Support',
      description: 'Our babysitters take care of your child’s meals with love and cleanliness.',
      features: [
        'Prepare simple, healthy meals and snacks',
        'Sterilize bottles and help with feeding',
        'Spoon-feed toddlers or guide older kids to eat',
        'Follow any food allergies or diet rules',
        'Clean up after mealtime and note what your child eats'
      ],
      icon: CakeIcon,
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Emotional & Social Support',
      description: 'Our babysitters and nannies provide more than care; they build a strong bond with your child.',
      features: [
        'Give full attention and friendly company throughout the day',
        'Communicate gently and create a space where your child feels safe',
        'Teach polite behavior, good habits, and thankfulness',
        'Help kids express their emotions and stay calm',
        'Support positive play with siblings and others'
      ],
      icon: HeartIcon,
      gradient: 'from-pink-500 to-rose-600'
    }
  ]

  const babysitterTypes = [
    {
      title: 'Live-In Nanny',
      description:
        'Round-the-clock childcare from within your home. Ideal for infants/toddlers or full-time support with meals, hygiene, learning and nights.'
    },
    {
      title: 'Full-Time Babysitter',
      description:
        '8–10 hours daily. Great for school-going kids; includes educational support, routine planning, after-school care.'
    },
    {
      title: 'Part-Time Babysitter',
      description:
        '2–6 hours daily for gap hours, school holidays, or occasional care. Affordable and flexible.'
    }
  ]

  const ageSpecialization = [
    'Newborns (0–6 months): Feeding schedules, diaper changes, sleep routines, safety',
    'Toddlers (1–3 years): Potty training, language development, safe play, meal assistance',
    'Preschoolers (3–5 years): Educational activities, social skills, creative play, pre-school prep',
    'School Age (5+ years): Homework help, extracurricular coordination, transport, supervision'
  ]

  const safetyTraining = [
    'Background Verified: Complete Aadhaar and local address verification to ensure trust and safety.',
    'Child Safety Training: Certified in CPR, first aid, and emergency protocols for all age groups.',
    'Experience & Childcare Skills: Experienced in handling infants to school-age children with knowledge of child development.',
    'Effective Communication: Trained to communicate clearly with parents and interact age-appropriately with children.',
    'Ongoing Support System: We provide regular follow-ups and offer quick replacements if needed for complete peace of mind.'
  ]

  const process = [
    { step: '1', title: 'Free Consultation', description: 'We understand your child’s age, routines, preferences, and special needs', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Skill-Based Matching', description: 'Receive 2-3 profiles matched to your specific location and family requirements', icon: BookOpenIcon },
    { step: '3', title: 'Interviews', description: 'Speak directly to shortlisted babysitters or request a one-day trial', icon: CalendarDaysIcon },
    { step: '4', title: 'Onboarding', description: 'Quick, respectful joining with guidance on house rules and safety protocols', icon: CheckCircleIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'How quickly can I get a babysitter for home in Bangalore?', answer: 'Emergency childcare at home in Bangalore is available within 2–4 hours. Regular booking requires 24–48 hours for proper matching.' },
    { question: 'Are babysitters trained for children with special needs?', answer: 'Yes, we offer specialised child supervision services for children with developmental needs, learning disabilities, and medical needs.' },
    { question: 'Do you provide babysitters for weekend events or travel?', answer: 'Yes, our flexible home babysitting in Bangalore includes weekend coverage, event childcare, and travel companion services.' },
    { question: 'How do you ensure child safety in Bangalore apartments?', answer: 'Our babysitters are trained to keep children safe in apartment settings. They know how to handle things like balcony safety, using lifts carefully, and what to do in case of emergencies.' },
    { question: 'Can babysitters pick up children from school in Bangalore traffic?', answer: 'Our babysitters are trained in Bangalore traffic navigation, school pickup protocols, and use verified transportation for child safety.' },
    { question: 'How much does a babysitter for home in Bangalore cost?', answer: 'A babysitter typically charges ₹15,000 – ₹25,000/month depending on the child’s age, required working hours, location, and experience.' },
    { question: 'Can I get childcare at home in Bangalore for part-time hours?', answer: 'Yes. We offer flexible schedules from 2 to 6 hours daily, perfect for school gaps or work-from-home parents.' },
    { question: 'Can babysitters work during school holidays?', answer: 'Yes, full-day holiday care during summer breaks, Diwali holidays, and school vacation periods. Extended childcare for working parents.' },
    { question: 'What is the difference between a babysitter and a Japa maid in Bangalore?', answer: 'A babysitter in Bangalore takes care of children’s daily needs like feeding, playing, and homework help. A Japa maid in Bangalore, on the other hand, is trained to care for newborn babies and post-delivery mothers. They handle tasks like baby massage, mother’s recovery support, and hygiene care after childbirth.' },
    { question: 'What living arrangements do live-in nannies in Bangalore need?', answer: 'Live-in nannies/babysitters should be provided with a bed, cot, or mattress and access to the bathroom. A separate bathroom is preferred, but shared access is also fine based on the customer’s convenience.' },
    { question: 'Are babysitters trained to handle sick children at home?', answer: 'Yes, many babysitters are trained to manage mild illnesses such as fever or cough, and can administer medicine as directed by your doctor. For serious health concerns, we recommend medical attention along with parental supervision.' }
  ]

  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Babysitter at Home',
      'Nanny Services',
      'Live-In Nanny',
      'Full-Time Babysitter',
      'Part-Time Babysitter'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://ezyhelpers.com/cities/bangalore/nanny-babysitter" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <MapPinIcon className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="text-sm font-semibold">Trusted Babysitters Across Bangalore</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Babysitter for Home
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">Bangalore</span>
                </h1>
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Looking for a trusted babysitter for home in Bangalore? Get trusted, trained, and caring help for your child’s safety, learning, and daily routines, right in your home.
                </p>

                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Meal & Nap Routines</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Infant to Teen Care</div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Trained & Verified Babysitters</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                  <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                    <span className="relative z-10">
                      <span className="hidden sm:inline">Book Trusted Babysitter</span>
                      <span className="sm:hidden">Book Now</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">Call Now</span>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Flexible</div>
                    <div className="text-primary-200 text-sm">Hourly or Full-Day</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Emergency</div>
                    <div className="text-primary-200 text-sm">On-Call Babysitters</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Trusted</div>
                    <div className="text-primary-200 text-sm">By Bangalore Parents</div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    {[HeartIcon, PuzzlePieceIcon, AcademicCapIcon, CheckCircleIcon].map((Icon, idx) => (
                      <div key={idx} className="group bg-white/20 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        <Icon className="h-12 w-12 text-white mx-auto mb-3 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm">Care</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Parents Need Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Do Bangalore Parents Need Babysitter Services?</h2>
              <p className="text-lg text-gray-600">In Bangalore, parents juggle demanding work hours, traffic delays, and long commutes. A reliable babysitter for home in Bangalore ensures your child is in safe hands while you manage work and life.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reasons.map((item, idx) => {
                const IconComponent = (item.icon as any)
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Does a Home Babysitter in Bangalore Offer?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">At EzyHelpers, our babysitters are trained in professional childcare to provide safe, supportive, and educational care for your child.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-8">
              {services.map((service, idx) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f: string, i: number) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                Book Professional Babysitter Now
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Types of Babysitters */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Are the Different Types of Babysitters Available in Bangalore?</h2>
              <p className="text-lg text-gray-600">At EzyHelpers, we understand every family's needs are different. We offer customised babysitting options:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Live-In Nanny',
                  description: 'Round-the-clock childcare from within your home for complete peace of mind.',
                  bullets: [
                    '12-hour childcare support within your home',
                    'Perfect for infants, toddlers, or families needing full-time assistance',
                    'Manages meals, hygiene, learning routines, and provides overnight care and emotional bonding'
                  ]
                },
                {
                  title: 'Full-Time Babysitter',
                  description: 'Daytime childcare help that fits into your work schedule and routine needs.',
                  bullets: [
                    'Works for 8–10 hours daily',
                    'Perfect for school-going children or working parents',
                    'Offers educational support, routine planning, and after-school care'
                  ]
                },
                {
                  title: 'Part-Time Babysitter',
                  description: 'Flexible, short-duration support ideal for busy hours or occasional help.',
                  bullets: [
                    '2–6 hours a day',
                    'Ideal for gap hours, school holidays, or occasional care',
                    'Affordable and flexible option for stay-at-home or hybrid working parents'
                  ]
                }
              ].map((t, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-white hover:shadow-lg transition-shadow border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{t.title}</h3>
                  <p className="text-gray-700 mb-4">{t.description}</p>
                  <ul className="space-y-2">
                    {t.bullets.map((b, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Age Specialization */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Specialized Care for Every Age Group</h2>
              <p className="text-lg text-gray-600">Support for newborns, toddlers, preschoolers, and school-age children.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {ageSpecialization.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Safety & Training */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How Do We Ensure Babysitter Safety and Qualifications in Bangalore?</h2>
              <p className="text-lg text-gray-600">At EzyHelpers, every babysitter and nanny undergoes strict verification and training to ensure safe, reliable, and high-quality childcare for your home.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {safetyTraining.map((item, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-0.5 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hiring Process */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How Our Babysitter Hiring Process Works</h2>
              <p className="text-lg text-gray-600">We follow a fast, foolproof process to get you trustworthy childcare at home in Bangalore</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, idx) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={idx} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Ready to Hire CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Ready to Hire a Babysitter in Bangalore?</h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">Give your child the care they deserve without stepping out of your home. Choose EzyHelpers for safe, educational, and reliable childcare at home in Bangalore.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">Book Babysitter for Home</Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Call +91 9972571005</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Trusted Home Services by EzyHelpers</h2>
              <p className="text-lg text-gray-600">Complete household support solutions for Bangalore's busy professionals.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Full-Time Maid in Bangalore', href: '/cities/bangalore/full-time-maid', description: 'Support for 2–6 hours daily with cleaning, kitchen help, and more.', cta: 'Learn About Full-Time Maid' },
                { title: 'Cook for Home in Bangalore', href: '/cities/bangalore/cooks', description: 'Home-cooked meals tailored to your family’s dietary and regional tastes.', cta: 'Learn About Home Cook Services' },
                { title: 'Senior Citizen Care in Bangalore', href: '/cities/bangalore/elderly-care', description: 'Trained caretakers for mobility help, medication reminders, and companionship.', cta: 'Learn About Elderly Care' }
              ].map((card, idx) => (
                <div key={idx} className="rounded-2xl p-8 bg-gray-50 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.description}</p>
                  <Link href={card.href} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
                    {card.cta}
                    <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">Trusted babysitter services across all Bangalore neighborhoods</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {bangaloreAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">And many more areas across Bangalore</p>
                <Link href="/hire-helper" className="inline-flex items-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Check Service in Your Area
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display text-center">FAQs</h2>
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
