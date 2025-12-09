import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion from '@/components/FAQAccordion'

import { 
  PhoneIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Babysitter Services in Bareilly – Trusted Child Care',
  description:
    'Book babysitter services in Bareilly for newborns, toddlers, or school-aged children. Safe, caring support for full-day or part-time needs.',
  keywords:
    'babysitter Bareilly, nanny services Bareilly, child care Bareilly, baby care Bareilly, verified babysitter, trained nanny',
  openGraph: {
    title: 'Babysitter Services in Bareilly – Trusted Child Care',
    description:
      'Book babysitter services in Bareilly for newborns, toddlers, or school-aged children. Safe, caring support for full-day or part-time needs.',
    url: 'https://www.ezyhelpers.com/cities/bareilly/babysitter',
    type: 'website'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bareilly/babysitter'
  }
}

export default function BareillyBabysitterPage() {
  const serviceAssuranceBadges = [
    'Background Verified Caretakers',
    'Personalized Matching',
    'Safe Childcare',
    'Flexible Hours for Your Needs'
  ]

  const highlightMetrics = [
    { title: '5,000+', subtitle: 'Families', note: 'Served in Bareilly' },
    { title: '50+', subtitle: 'Babysitters', note: 'Trained & Verified' },
    { title: '100%', subtitle: 'Safe', note: 'Background Verified' }
  ]

  const babysitterServices = [
    { title: 'Daily Care & Routine', desc: 'Handles feeding, diaper changes, naps, and keeps your child on a healthy routine.' },
    { title: 'Educational Activities', desc: 'Engages kids with learning games, stories, and simple play that supports brain development.' },
    { title: 'Meal Preparation', desc: 'Prepares kid-friendly meals like dal-chawal, khichdi, and light snacks as per routine.' },
    { title: 'Indoor & Outdoor Play', desc: 'Supervises fun, safe indoor games and outdoor play to keep kids active and happy.' },
    { title: 'School Support', desc: 'Assists with homework, school drop-off/pickup, and regular updates for school-going children.' },
    { title: 'Emergency Care', desc: 'Trained to give first-aid and respond quickly using local hospital contact systems.' }
  ]

  const whyChooseList = [
    'Trained & Certified Baby Care Professionals',
    'Background Checked & Experienced',
    'Knows Local Parenting Traditions',
    'Lullabies & Traditional Games',
    'Understands Joint Family Setups',
    'Festival Activity Support'
  ]

  const whoNeeds = [
    { title: 'Working Parents', desc: 'Reliable daily support for office-going parents with timely routines and updates.' },
    { title: 'Doctors & Healthcare Workers', desc: 'Babysitters are available in flexible shifts to match hospital or clinic timings.' },
    { title: 'New Parents', desc: 'Expert guidance and support for first-time parents learning childcare routines.' },
    { title: 'Joint Families with Multiple Children', desc: 'Specialised attention for each child while respecting family traditions.' },
    { title: 'Single Parents', desc: 'A dependable helping hand to care for your child and manage house tasks stress-free.' }
  ]

  const liveIn = ['12-Hour Daily Shifts', 'Sleep & Feeding Routine Support', 'Newborn & Twin Care', 'Emergency-Ready']
  const fullTime = ['8–10 Hours a Day', 'School Pickup/Drop', 'Meal Prep & Playtime', 'Homework Assistance']
  const partTime = ['Flexible Hours', 'Weekend Availability', 'Evening Support', 'Short-Term & On-Call']

  const ageGroups = [
    { title: 'Newborns (0–6 months)', desc: 'Gentle handling, feeding, diaper changes, safe sleep, and hygiene-focused care.' },
    { title: 'Toddlers (1–3 years)', desc: 'Language building, potty training, guided play, and nap routines.' },
    { title: 'Preschoolers (3–5 years)', desc: 'Fun learning, creative games, story time, and basic education help.' },
    { title: 'School-Age Kids (5+ years)', desc: 'Homework help, activity planning, safety supervision, and transportation support if required.' }
  ]

  const hiringSteps = [
    { step: '1', title: 'Tell Us Your Need', desc: 'Share your timing, child’s age, and any special care required.' },
    { step: '2', title: 'Get Suitable Matches', desc: 'We shortlist trained babysitters in Bareilly based on your preferences.' },
    { step: '3', title: 'Interview & Choose', desc: 'Speak directly with 2–3 shortlisted candidates before finalising.' },
    { step: '4', title: 'Quick Start & Support', desc: 'Babysitter joins your home with proper ID, verification, and our ongoing support.' }
  ]

  const faqs = [
    {
      q: 'Can home babysitters in Bareilly handle children with special needs?',
      a: 'Yes, EzyHelpers provides trained home babysitters in Bareilly who can care for children with special needs. They offer patient, personalised support and are equipped to handle medical, developmental, or behavioural requirements with care and confidence.'
    },
    {
      q: 'How do I know my child will be safe with a home babysitter in Bareilly?',
      a: 'Your child’s safety is our highest priority. Every home babysitter in Bareilly provided by EzyHelpers is thoroughly background verified using Aadhaar and valid address proof. Upon request, we also offer optional police verification and medical screening for added assurance. With our careful screening process, you can trust that your child is in safe, responsible hands.'
    },
    {
      q: 'What are the benefits of choosing professional babysitter services in Bareilly?',
      a: 'Choosing professional babysitter services in Bareilly from EzyHelpers gives you access to trained, background-verified caretakers who follow age-appropriate routines, are emergency-ready, understand cultural values, and are supported by our ongoing service team, unlike unverified local help.'
    },
    {
      q: 'Do babysitter services in Bareilly include specialised care for newborns?',
      a: 'Yes, babysitter services in Bareilly include expert care for newborns (0–6 months), covering feeding, diaper changes, hygiene, and sleep routines. We also provide Japa maids in Bareilly for traditional postnatal care for mothers and babies.'
    },
    {
      q: 'Are home babysitters in Bareilly trained to manage emotional needs?',
      a: 'Yes, every home babysitter in Bareilly is trained to support children emotionally. They manage tantrums, separation anxiety, and mood swings using child-friendly, patient care methods that build trust and comfort.'
    },
    {
      q: 'What is the difference between a babysitter and a Japa maid in Bareilly?',
      a: 'A babysitter in Bareilly provides daily care like feeding, playtime, and homework help. In contrast, a Japa maid in Bareilly focuses on postnatal care for newborns and mothers, including massage, bathing, and recovery support after childbirth.'
    },
    {
      q: 'How much do babysitter services in Bareilly cost?',
      a: 'Babysitter services in Bareilly are priced based on service type: live-in, full-time, or part-time. EzyHelpers offers flexible plans with clear pricing. Contact us for a custom quote based on your schedule and needs.'
    },
    {
      q: 'Do home babysitters in Bareilly help with potty training?',
      a: 'Yes, home babysitters in Bareilly are trained to support potty training for toddlers. They use gentle, consistent methods and coordinate with parents to reinforce routines at home.'
    },
    {
      q: 'Are babysitters in Bareilly fluent in Hindi and English?',
      a: 'Yes, babysitters in Bareilly are fluent in Hindi and English. They can engage children with Hindi lullabies and traditional games and also support English learning, especially for preschool and school-age kids.'
    },
    {
      q: 'Can home babysitters in Bareilly manage twins or multiple children?',
      a: 'Yes, experienced home babysitters in Bareilly are well-equipped to care for twins or multiple children. Live-in options are ideal for managing different sleep and feeding schedules while giving each child personalised care.'
    },
    {
      q: 'Are babysitter services in Bareilly available for evening events?',
      a: 'Yes, part-time babysitter services in Bareilly are perfect for evenings, social events, and short-term needs. Flexible scheduling and weekend availability make them ideal for busy parents needing temporary support.'
    },
    {
      q: 'Can home babysitters in Bareilly supervise both indoor and outdoor play?',
      a: 'Absolutely. Every home babysitter in Bareilly ensures children enjoy both safe indoor games and supervised outdoor play, keeping them active, happy, and engaged.'
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
            { label: 'Babysitter Services' }
          ]} 
        />
      
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pink-600 via-rose-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <HeartIcon className="h-5 w-5 text-pink-300 mr-2" />
                <span className="text-sm font-semibold">Safe & Loving Child Care</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">
                Babysitter Services in Bareilly – Safe & Loving Care for Your Child
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">
                EzyHelpers offers trusted, background-verified babysitters in Bareilly for newborns, toddlers, and school-going children. Choose from full-time, part-time, or live-in nanny options tailored to your family’s routine, safety, and childcare needs.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center w-full bg-white text-pink-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book a Babysitter Today
                </Link>

                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call for Trusted Babysitter
                </Link>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
                {serviceAssuranceBadges.map((b, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ {b}</span>
                ))}
              </div>
              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
                {highlightMetrics.map((m, idx) => (
                  <div key={idx} className="text-center border border-white/20 rounded-2xl p-6 bg-white/5">
                    <div className="text-3xl font-bold text-white">{m.title}</div>
                    <div className="text-pink-100">{m.subtitle}</div>
                    <div className="text-pink-200 text-sm">{m.note}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers Babysitter Services in Bareilly?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Parents in Bareilly trust us for home babysitters who are safe, skilled, and locally aware.</p>
            </div>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <ul className="space-y-3 text-gray-700">
                {whyChooseList.map((item, i) => (
                  <li key={i} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-pink-600 mt-0.5 mr-2" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services Offered by Babysitters */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Services Offered by Babysitters</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our home babysitters in Bareilly do more than just supervision; they care like family.</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {babysitterServices.map((svc, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-gray-700">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Needs a Home Babysitter in Bareilly? */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs a Home Babysitter in Bareilly?</h2>
              <p className="text-lg text-gray-600">Our services are perfect for every family type in Bareilly seeking trusted childcare.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whoNeeds.map((w, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-gray-700">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flexible Childcare Options */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Flexible Childcare Options for Every Need</h2>
              <p className="text-lg text-gray-600">Choose what fits best for your family and schedule in Bareilly.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Live-In Nannies</h3>
                <ul className="space-y-2 text-gray-700">
                  {liveIn.map((i, idx) => (
                    <li key={idx} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-pink-600 mt-0.5 mr-2" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Time Babysitters</h3>
                <ul className="space-y-2 text-gray-700">
                  {fullTime.map((i, idx) => (
                    <li key={idx} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-pink-600 mt-0.5 mr-2" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Part-Time Babysitters</h3>
                <ul className="space-y-2 text-gray-700">
                  {partTime.map((i, idx) => (
                    <li key={idx} className="flex items-start"><CheckCircleIcon className="h-5 w-5 text-pink-600 mt-0.5 mr-2" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Care for Every Age Group */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Specialized Care for Every Age Group</h2>
              <p className="text-lg text-gray-600">Care and support tailored to your child’s age and daily needs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ageGroups.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.title}</h3>
                  <p className="text-gray-700">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Easy 4-Step Hiring Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Your Easy 4-Step Hiring Process</h2>
              <p className="text-lg text-gray-600">Hire a home babysitter in Bareilly in just 4 simple steps:</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {hiringSteps.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pink-600 text-white flex items-center justify-center font-bold">{s.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-700">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore Other Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
              <p className="text-lg text-gray-600">Discover more home support services trusted by Bareilly families.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[ 
                { title: 'Elderly Care in Bareilly', desc: 'Trained caretakers for mobility support, meals, hygiene, and companionship.', href: '/cities/bareilly/elderly-care' },
                { title: 'Live-In House Maid Service', desc: 'Get help with cooking, cleaning, and daily chores through trusted maids.', href: '/cities/bareilly/live-in-maid' },
                { title: 'Appliance Repair', desc: 'Expert repairs for fridges, ACs, washing machines, and other home appliances.', href: '/cities/bareilly/appliance-repair' }
              ].map((card, idx) => (
                <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-700 mb-4">{card.desc}</p>
                  <Link href={card.href} className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700">Learn More<ArrowRightIcon className="h-4 w-4 ml-1" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: Book Your Babysitter in Bareilly Today */}
        <section className="section-padding bg-gradient-to-br from-pink-600 to-rose-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">
                Book Your Babysitter in Bareilly Today
              </h2>
              <p className="text-xl mb-8 text-pink-100">
                With EzyHelpers, finding the right babysitter in Bareilly is safe, simple, and fast. Let us help you care for your little one while you focus on work and life.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Link
                  href="/hire-helper"
                  className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  Book Babysitter Services
                </Link>
                
                <Link
                  href="tel:+919972571005"
                  className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Professional Babysitter Services Are Better */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Professional Babysitter Services Are Better Than Unverified Local Help</h2>
              <p className="text-gray-700 mb-4">Choosing a verified babysitter from EzyHelpers gives your family a much safer and more dependable childcare experience than hiring through word-of-mouth or local classifieds. While untrained help may seem convenient, they often lack the skills, background checks, and emergency preparedness essential for modern parenting needs.</p>
              <p className="text-gray-700 mb-4">EzyHelpers provides background-verified, trained babysitters in Bareilly who are equipped to handle real-life childcare challenges, from feeding fussy toddlers to managing sibling routines and responding calmly in urgent situations. They follow age-specific care routines and respect parenting preferences, whether it’s screen-free play, nap-time boundaries, or cultural values like modest dressing and traditional food preparation.</p>
              <p className="text-gray-700 mb-4">Local parenting in Bareilly often includes managing extended family expectations and regional customs. Our babysitters are trained to joint family environments, understand the importance of respect toward elders, and can even assist with small festival rituals or child-specific pooja routines when needed.</p>
              <p className="text-gray-700">Unlike unverified maids or neighbours, our babysitters come with EzyHelpers support, ensuring families always have reliable assistance for replacements, concerns, or schedule adjustments. We provide flexible packages, transparent hiring, and ongoing coordination, ensuring that both your child and your household remain happy and stress-free.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  )
}