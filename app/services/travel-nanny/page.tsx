import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQAccordion from '@/components/FAQAccordion'
import {
  CheckCircleIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ClockIcon,
  HeartIcon,
  AcademicCapIcon,
  FaceSmileIcon,
  MapPinIcon,
  StarIcon,
  BriefcaseIcon,
  HomeIcon,
  UserIcon,
  SunIcon,
  SparklesIcon,
  BanknotesIcon,
  EyeIcon,
  CakeIcon,
  ShoppingBagIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline'
import BreadcrumbSchema, { generateServiceBreadcrumbs } from '@/components/schema/BreadcrumbSchema'
import FAQSchema from '@/components/schema/FAQSchema'

export const metadata: Metadata = {
  title: 'Travel Nanny in Bangalore | Flexible Vacation Babysitters',
  description: 'Book On-demand Travel Nannies in Bangalore for short trips or long vacations. Flexible childcare when you need it for day trips, weekends, or longer holidays.',
}

export default function TravelNannyPage() {
  const breadcrumbs = generateServiceBreadcrumbs("Travel Nanny", "travel-nanny")

  const serviceAssurance = [
    "Trained in Childcare Safety",
    "100% Background Verified Nannies",
    "Quick Booking, Zero Hassle",
    "On-Demand Availability"
  ]

  const metrics = [
    { label: "Satisfaction Rate", value: "99%" },
    { label: "Happy Families", value: "500+" },
    { label: "Customer Rating", value: "4.9/5" }
  ]

  const whyChoose = [
    {
      title: "Verified Childcare Experts",
      description: "All Travel Babysitters in Bangalore are Aadhaar and address verified for complete trust and safety.",
      icon: ShieldCheckIcon,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Book Only When You Need",
      description: "No long-term contracts. Hire On-demand Vacation Babysitters for a single day, a weekend, a week, or your full holiday.",
      icon: CalendarDaysIcon,
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      title: "Affordable, Transparent Pricing",
      description: "Pay only for the days you need. No hidden fees, no mandatory long-term bookings.",
      icon: BanknotesIcon,
      color: "text-green-600",
      bg: "bg-green-50"
    },
    {
      title: "Quick Holiday Availability",
      description: "Our Travel Nannies are ready anytime, including peak seasons, for last-minute trips.",
      icon: ClockIcon,
      color: "text-orange-600",
      bg: "bg-orange-50"
    },
    {
      title: "Holiday Season Ready",
      description: "Available during Diwali, Christmas, New Year, summer holidays, and other busy travel periods.",
      icon: SunIcon,
      color: "text-yellow-600",
      bg: "bg-yellow-50"
    },
    {
      title: "Quick Matchmaking",
      description: "We match you with a Nanny whose experience and availability fit your trip duration and family needs.",
      icon: UserGroupIcon,
      color: "text-pink-600",
      bg: "bg-pink-50"
    }
  ]

  const duties = [
    {
      title: "Sleep & Routine Care",
      description: "Keeps your child’s schedule balanced on short or long trips.",
      icon: ClockIcon
    },
    {
      title: "Entertainment & Activities",
      description: "Fun games and stories to engage children on the go.",
      icon: FaceSmileIcon
    },
    {
      title: "Safety Monitoring",
      description: "Supervision in airports, stations, hotels, and tourist spots.",
      icon: ShieldCheckIcon
    },
    {
      title: "Emergency Handling",
      description: "Calm, trained support for any unexpected situations.",
      icon: PlusCircleIcon
    },
    {
      title: "Child Supervision",
      description: "Watches kids during flights, road trips, and sightseeing.",
      icon: EyeIcon
    },
    {
      title: "Meal and Snack Assistance",
      description: "Prepares and feeds children as per parent instructions.",
      icon: CakeIcon
    },
    {
      title: "Travel Essentials Management",
      description: "Tracks medicines, toys, clothes, and comfort items.",
      icon: ShoppingBagIcon
    },
    {
      title: "Health and Hygiene Care",
      description: "Manages handwashing, sanitisation, and diaper changes.",
      icon: HeartIcon
    }
  ]

  const types = [
    {
      title: "Day Trip Travel Nanny",
      description: "Short trips, city tours, events, or outings within Bangalore. Book for 6–12 hours.",
      icon: MapPinIcon
    },
    {
      title: "Weekend Getaway Vacation Babysitters",
      description: "1–3 day support for nearby destinations, resorts, or family functions.",
      icon: SunIcon
    },
    {
      title: "Domestic Travel Nanny",
      description: "Multi-day trips across India by train, flight, or car (4–14 days typical).",
      icon: BriefcaseIcon
    }
  ]

  const durationPlans = [
    {
      title: "Single Day Plans",
      description: "4-12 hours of childcare support with Vacation Babysitters in Bangalore for day trips, events, or local outings.",
      features: ["4-12 Hours", "Local Outings", "Event Support"]
    },
    {
      title: "Short Trip Plans (2-5 days)",
      description: "Weekend getaways or extended weekends with a Nanny that travels with the family.",
      features: ["Weekend Trips", "24/7 Support", "Resort Stays"]
    },
    {
      title: "Week-Long Plans (6-10 days)",
      description: "Mid-length vacations, school holiday trips, or visiting family with our travel Nanny in Bangalore.",
      features: ["School Holidays", "Family Visits", "Travel Support"]
    },
    {
      title: "Extended Plans (11+ days)",
      description: "Long domestic holidays or taking a Nanny on holiday for vacations and summer/winter break travel.",
      features: ["Summer Break", "Long Vacations", "Full Care"]
    },
    {
      title: "Custom Duration",
      description: "Need Vacation Babysitters in Bangalore for 3 days? 17 days? 28 days? Our travelling Nanny service customizes plans to match your exact travel schedule.",
      features: ["Flexible Dates", "Tailored Plan", "Any Duration"]
    }
  ]

  const ageSpecific = [
    {
      title: "Infant Care (0–2 years)",
      description: "Feeding, diaper changes, and sleep schedule support.",
      icon: HeartIcon
    },
    {
      title: "Toddler Care (2–5 years)",
      description: "Activities, meals, and safety supervision.",
      icon: FaceSmileIcon
    },
    {
      title: "School-Age Kids (5–10 years)",
      description: "Fun activities, routines, and engagement during trips.",
      icon: AcademicCapIcon
    },
    {
      title: "Teen Support (10+ years)",
      description: "Guidance, supervision, and companionship balanced with independence.",
      icon: UserGroupIcon
    }
  ]

  const whoShouldHire = [
    {
      title: "Parents on Weekend Trips",
      description: "Enjoy a stress-free getaway while your children are in safe hands.",
      icon: CalendarDaysIcon
    },
    {
      title: "Families Visiting Relatives in Other Cities",
      description: "Ensure kids stay comfortable and happy during intercity travel.",
      icon: HomeIcon
    },
    {
      title: "Festival or Holiday Travellers",
      description: "Trusted childcare support during busy travel seasons like Diwali, Dussehra, Christmas, and summer holidays.",
      icon: SparklesIcon
    },
    {
      title: "NRIs Visiting India",
      description: "Professional nannies accompany your children for short-term stays or family visits.",
      icon: MapPinIcon
    }
  ]

  const hiringProcess = [
    {
      step: "1",
      title: "Book a Quick Consultation",
      description: "Share your travel dates, destination, and childcare needs online or via call."
    },
    {
      step: "2",
      title: "Get a Matched Profile Review",
      description: "We send you profiles of verified nannies best suited for your trip."
    },
    {
      step: "3",
      title: "Confirm Your Booking",
      description: "Select your Nanny, confirm the booking, and discuss all details over call."
    },
    {
      step: "4",
      title: "Enjoy a Stress-Free Holiday",
      description: "Your Nanny travels with you, keeping children safe and happy."
    }
  ]

  const faqs = [
    {
      question: "What is a Travel Nanny or Vacation Babysitter?",
      answer: "A Travel Nanny is a trained caregiver who travels with your family to provide safe and engaging care. They manage routines, meals, hygiene, play, and emotional support during trips."
    },
    {
      question: "What kind of accommodation does the Nanny need?",
      answer: "It depends on your trip and duration. Many parents provide a private room, and some share spaces. Safety, hygiene, and comfort are always ensured."
    },
    {
      question: "What are the boundaries of a Travel Nanny’s responsibilities?",
      answer: "They focus on childcare—supervision, hygiene, meals, play, and travel safety. They do not handle unrelated errands, heavy luggage, or non-prescribed medication."
    },
    {
      question: "Do I need to cover travel expenses for the Nanny?",
      answer: "Yes, travel costs (flight/train tickets, accommodation, and meals) for the Nanny are typically covered by the family, in addition to the service fee."
    },
    {
      question: "Can the Nanny prepare meals for my child during travel?",
      answer: "Yes, Travel Nannies can prepare simple meals and snacks as per your instructions, whether at hotels, in transit, or at your accommodation."
    },
    {
      question: "How do you handle cultural or dietary preferences for childcare?",
      answer: "We respect all cultural, religious, and dietary preferences. Share your requirements during booking, and we'll match you with a compatible Nanny."
    },
    {
      question: "Are background verification reports available for review?",
      answer: "Yes, we can share verification details and Nanny profiles during the matching process to ensure complete transparency and trust."
    },
    {
      question: "Can I hire a Travel Nanny only when I need them?",
      answer: "Yes! Our service is fully on-demand, allowing you to hire Vacation Babysitters for day trips, weekends, or longer domestic travel without any long-term commitment."
    },
    {
      question: "Is this service for long-term childcare?",
      answer: "No, our Travel Nanny service is for single-time, short-term trips, such as day trips, weekend getaways, or intercity travel."
    },
    {
      question: "Can I hire the Nanny for daily childcare at home?",
      answer: "No, this service is only for on-demand travel needs. For full-time or daily babysitting, check our full-time babysitter service."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-24 pb-32 lg:pb-40 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative z-10 text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <ShieldCheckIcon className="h-5 w-5 text-green-300 mr-2" />
            <span className="text-sm font-semibold tracking-wide">Verified & Trusted Childcare</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
            On-Demand Travel Nanny in Bangalore | Flexible Holiday Childcare
          </h1>
          <p className="text-xl lg:text-2xl text-primary-50 mb-10 leading-relaxed max-w-4xl mx-auto drop-shadow-md">
            Travel stress-free with our verified on-demand Travel Nannies in Bangalore. Ideal for festivals, weekend getaways, or intercity trips. Single-trip service—trusted childcare without long-term commitments.
          </p>
          
          {/* Service Assurance Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceAssurance.map((item, index) => (
              <div key={index} className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/10 shadow-sm">
                <CheckCircleIcon className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span className="text-sm font-medium text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-primary-700 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              <CalendarDaysIcon className="h-6 w-6 mr-2" />
              Book Travel Nanny Today
            </Link>
            <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/20 transition-all shadow-lg">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Highlight Metrics */}
      <section className="relative z-20 -mt-16 mb-16">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-gray-100">
             <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {metrics.map((metric, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 group">
                  <span className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2 group-hover:scale-110 transition-transform">{metric.value}</span>
                  <span className="text-gray-600 font-medium text-lg">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Choose EzyHelpers Travel Nanny in Bangalore?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Make every trip easier with our flexible On-demand Travel Nanny service that fits your travel schedule.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Duties */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              What Does Your Travel Nanny/Vacation Babysitters Do?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bangalore’s Best Travel Babysitters & Nanny That Travels with Family
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {duties.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary-200 transition-colors hover:bg-white hover:shadow-sm group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  <item.icon className="h-5 w-5 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Services */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Types of Travel Nanny Services in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized Vacation Babysitters in Bangalore for every type of trip
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {types.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flexible Duration Plans */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Flexible Duration Plans for Travel Nanny in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Book exactly what you need with our travelling Nanny service
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {durationPlans.map((item, index) => (
              <div key={index} className="flex flex-col bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-500 transition-colors hover:shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-50 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{item.description}</p>
                <ul className="mt-auto space-y-3 relative z-10">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Age-Specific Travel Nanny in Bangalore Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible care for every age group
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ageSpecific.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:bg-white hover:shadow-md transition-all group border border-transparent hover:border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform text-primary-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/hire-helper" className="inline-flex items-center justify-center bg-primary-600 text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Book Vacation Babysitters
            </Link>
          </div>
        </div>
      </section>

      {/* Who Should Hire */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Who Should Hire a Travel Nanny?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our on-demand Travel Nanny service is perfect for:
              </p>
              <div className="space-y-4">
                {whoShouldHire.map((item, index) => (
                  <div key={index} className="flex items-start p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                      <item.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 bg-primary-100 rounded-3xl overflow-hidden hidden lg:block">
              {/* Placeholder for image or illustration */}
              <div className="absolute inset-0 flex items-center justify-center text-primary-300">
                <UserGroupIcon className="h-32 w-32 opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Your Easy 4-Step Hiring Process in Bangalore
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hiring your perfect travel Nanny is simple and hassle-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringProcess.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-6 rounded-xl border border-gray-100 h-full relative z-10 hover:shadow-lg transition-all hover:-translate-y-1">
                  <span className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Families Hire (Text Block) */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-display">
            Why Families in Bangalore Hire Travel Nannies for Holidays
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              Planning a family holiday can be exciting, but for many parents in Bangalore, handling kids during long journeys often feels stressful and overwhelming. From restless toddlers on trains or flights to keeping school-age children entertained during road trips, travelling with kids brings unique challenges. This is where a trusted travel Nanny in Bangalore can make a big difference.
            </p>
            <p>
              Families often hire a nanny who travels with them to make sure their child stays comfortable, safe, and follows their daily routine throughout the journey. Whether it is catching a late-night flight, moving through busy airports, or managing meals and nap times on the road, a trained travel Nanny gives practical, hands-on support. Parents can relax and enjoy their trip while knowing their children are in safe and professional care.
            </p>
            <p className="mt-6 font-medium text-gray-900">
              Hiring a professional holiday Nanny in Bangalore is no longer just a luxury; it has become a necessity for modern parents who want stress-free and happy travel memories.
            </p>
          </div>
        </div>
      </section>

      {/* Banner / Callout */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl text-white md:text-4xl font-bold mb-8 font-display max-w-4xl mx-auto leading-tight">
            Don't let childcare worries limit your travel plans. Hire a verified Travel Nanny for your trip — short-term, on-demand, and hassle-free!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hire-helper" className="inline-flex items-center justify-center bg-white text-primary-800 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              <CalendarDaysIcon className="h-6 w-6 mr-2" />
              Book Holiday Childcare
            </Link>
            <Link href="tel:+919972571005" className="inline-flex items-center justify-center bg-primary-700 border border-primary-500 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-primary-600 transition-all shadow-lg">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Call Us
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Other Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Explore Other Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              EzyHelpers also supports your family’s everyday needs in Bangalore.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Elderly Care Services</h3>
              <p className="text-gray-600 mb-4">Compassionate caretakers for seniors, ensuring daily help and companionship at home.</p>
              <Link href="/services/elderly-care" className="text-primary-600 font-bold hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Full-Time Babysitters</h3>
              <p className="text-gray-600 mb-4">Professional full-day babysitters for daily childcare, available for flexible hours.</p>
              <Link href="/services/babysitter" className="text-primary-600 font-bold hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-transparent hover:border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Home Cook Services</h3>
              <p className="text-gray-600 mb-4">Skilled home cooks to prepare hygienic, tasty meals that fit your family’s preferences.</p>
              <Link href="/services/cooks" className="text-primary-600 font-bold hover:underline inline-flex items-center">
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
