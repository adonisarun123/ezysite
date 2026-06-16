import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CityBlogLinks from '@/components/CityBlogLinks'
import FAQAccordion from '@/components/FAQAccordion'
import { BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from '@/components/schema'
import NestCTA from '@/components/NestCTA'
import {
  HomeIcon,
  ShieldCheckIcon,
  ClockIcon,
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  StarIcon,
  UserGroupIcon,
  MapPinIcon,
  AcademicCapIcon,
  CurrencyRupeeIcon,
  BuildingOffice2Icon,
  UserIcon,
  SparklesIcon,
  ArrowRightIcon,
  HandRaisedIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full-Time Maid in Bangalore | Daily Help | EzyHelpers',
  description: 'Hire a verified full-time maid in Bangalore for cooking, cleaning, childcare & elderly care. Background-checked. 8–10 hrs daily. All areas covered.',
  keywords: 'full time maid bangalore, full day maid bangalore, daily maid bangalore, househelp bangalore, cook bangalore, babysitter bangalore, elderly care bangalore',
  openGraph: {
    title: 'Full-Time Maid in Bangalore | Daily Help | EzyHelpers',
    description: 'Hire a verified full-time maid in Bangalore for cooking, cleaning, childcare & elderly care. Background-checked. 8–10 hrs daily. All areas covered.',
    url: 'https://www.ezyhelpers.com/cities/bangalore/full-time-maid',
    type: 'website',
    siteName: 'EzyHelpers',
    locale: 'en_IN'
  },
  alternates: {
    canonical: 'https://www.ezyhelpers.com/cities/bangalore/full-time-maid'
  }
}

export default function BangaloreFullTimeMaidPage() {
  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.ezyhelpers.com' },
    { name: 'Services', url: 'https://www.ezyhelpers.com/services' },
    { name: 'Bangalore', url: 'https://www.ezyhelpers.com/cities/bangalore' },
    { name: 'Full-Time Maid', url: 'https://www.ezyhelpers.com/cities/bangalore/full-time-maid' }
  ]

  // Services
  const fullTimeServices = [
    {
      title: 'Full-Time Housekeeper',
      description: 'Ideal for families who need complete daily home management. Tasks include sweeping, mopping, dusting, bathroom and kitchen cleaning, utensil washing, laundry, and ironing.',
      icon: HomeIcon,
      features: [
        'Sweeping & mopping',
        'Dusting & kitchen cleaning',
        'Utensil washing',
        'Laundry & ironing',
        'Bathroom cleaning'
      ],
      gradient: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      title: 'Full-Time Cook',
      description: 'Best for working professionals who need fresh, home-cooked meals without managing the kitchen themselves. Tasks include breakfast, lunch, and dinner preparation; South Indian, North Indian, and basic continental cooking; tiffin packing; and market errands.',
      icon: HeartIcon,
      features: [
        'Breakfast, lunch & dinner',
        'Multiple cuisines',
        'Tiffin packing',
        'Market errands',
      ],
      gradient: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      title: 'Full-Day Babysitter',
      description: 'Suited for working parents managing school routines and childcare during office hours. Tasks include bathing, feeding, homework assistance, playtime management, and school or daycare pick-up and drop.',
      icon: UserGroupIcon,
      features: ['Bathing & feeding', 'Homework assistance', 'Playtime management', 'School pick-up/drop'],
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      title: 'Full-Time Elderly Care Assistant',
      description: 'Essential for families needing reliable daytime supervision for senior members. Tasks include companionship, medication reminders, hygiene and mobility support, and basic assistance throughout the day.',
      icon: ShieldCheckIcon,
      features: ['Daytime companionship', 'Medication reminders', 'Mobility support', 'Hygiene & assistance'],
      gradient: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ]

  const preferReasons = [
    { title: 'IT Professionals & Couples', description: 'Ideal for those in Electronic City, Whitefield, and Outer Ring Road.', icon: BuildingOffice2Icon },
    { title: 'Families with Children', description: 'Weekday support for infants, toddlers, or school-going children.', icon: UserGroupIcon },
    { title: 'Households with Elderly', description: 'Daytime supervision and companionship for senior parents.', icon: HeartIcon },
    { title: 'Single-Person Households', description: 'Regular cooking and cleaning without coordinating multiple helpers.', icon: UserIcon },
    { title: 'New Residents & Expats', description: 'Immediate, reliable domestic help when settling into Bangalore.', icon: MapPinIcon }
  ]

  const process = [
    { step: '1', title: 'Share Your Requirements', description: 'Tell us the tasks needed (cleaning, cooking, childcare, elderly care, or combination), preferred working hours, and location in Bangalore.', icon: ChatBubbleLeftRightIcon },
    { step: '2', title: 'Receive Verified Profiles', description: 'Get 2–3 shortlisted profiles of background-verified, experienced full-time maids matched to your household needs.', icon: UserIcon },
    { step: '3', title: 'Interview & Select', description: 'Speak with shortlisted candidates over a call or in person. Request a trial period before making your final decision.', icon: CheckCircleIcon },
    { step: '4', title: 'Confirm & Onboard', description: 'We coordinate the joining process and ensure your full-time maid arrives on the agreed date, ready to work.', icon: SparklesIcon }
  ]

  const bangaloreAreas = [
    'Electronic City', 'Whitefield', 'Marathahalli', 'Koramangala', 'Indiranagar',
    'Jayanagar', 'BTM Layout', 'HSR Layout', 'Sarjapur Road', 'Bannerghatta Road',
    'Yelahanka', 'Hebbal', 'Rajajinagar', 'Malleshwaram', 'Basavanagudi'
  ]

  const faqs = [
    { question: 'What is the salary of a full-time maid in Bangalore?', answer: 'Full-time maid salaries in Bangalore range from ₹16,000 to ₹20,000 per month. The exact amount depends on duties, experience, and daily working hours. Roles combining cooking and cleaning or involving childcare and elderly care typically fall at the higher end of this range.' },
    { question: 'What is the difference between a full-time maid and a live-in maid?', answer: "A full-time maid works 8–10 hours daily and returns home after the shift. A live-in maid stays at the employer's residence and is available overnight. Full-time maids are preferred when structured daily help is needed without a residential arrangement." },
    { question: 'What is the difference between a full-time maid and a part-time maid?', answer: 'A full-time maid works 8–10 hours daily and handles a complete set of household responsibilities. A part-time maid typically works 2–4 hours covering specific tasks such as sweeping or utensil washing. Full-time help suits households needing comprehensive daily support, while part-time works for lighter, task-specific needs.' },
    { question: 'What is a full-day house help in Bangalore?', answer: 'A full-day house help works a complete 8–10 hour shift at your home each day, covering all assigned household tasks from morning through evening. This is the same as hiring a full-time maid or full-time house maid in Bangalore; the terminology varies, but the arrangement is identical.' },
    { question: 'Can a full-time maid handle both cooking and cleaning?', answer: 'Yes. Many full-time maids in Bangalore manage both cooking and cleaning within their shift. When multiple tasks are assigned, the salary is adjusted based on workload and confirmed before hiring.' },
    { question: 'How quickly can I hire a full-time maid in Bangalore?', answer: 'Through EzyHelpers, shortlisting begins within 1–2 business days once the registration fee is paid. Most families complete interviews and confirm a maid within 3–5 days, with background verification completed before work begins. In some cases, it might take up to 7 days, also based on the availability of the helper that matches your needs.' },
    { question: 'Do full-time maids in Bangalore work on weekends?', answer: 'Most full-time maids work six days a week with one weekly off. Weekend availability is discussed and confirmed during the hiring process based on the family’s requirements.' },
    { question: 'Is hiring full-time house help in Bangalore cost-effective for small families?', answer: 'Yes. A single full-time maid replaces multiple part-time helpers, delivering consistent daily support at a predictable monthly cost. This removes coordination overhead and ensures reliable help every day.' },
    { question: 'How are full-time maids verified by EzyHelpers?', answer: 'All helpers undergo Aadhaar-based identity verification and address confirmation before being recommended. But if you want police verification and health assessment, that can be done at an additional cost, too.' },
    { question: 'Do I need to provide food for the full-time maid?', answer: 'Most families offer tea or light refreshments during the shift. Providing a full meal is not mandatory and is agreed upon between the family and the maid before hiring, separate from the monthly salary.' },
    { question: 'Can I hire a full-time maid only for cooking or cleaning?', answer: 'Yes. You can hire a full-time maid for a single responsibility, such as cooking, housekeeping, childcare, or elderly care. You can also combine responsibilities based on your household’s needs and working hours.' }
  ]

  // Local Business Schema props
  const localBusinessProps = {
    cityName: 'Bangalore',
    stateName: 'Karnataka',
    postalCode: '560001',
    streetAddress: 'Bangalore, Karnataka',
    latitude: 12.9716,
    longitude: 77.5946,
    specificServices: [
      'Full-Time Maid Services',
      'Full-Time Housekeeper Services',
      'Full-Time Cook Services',
      'Full-Day Babysitter Services',
      'Full-Time Elderly Care Services'
    ]
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Schema Markup */}
        <BreadcrumbSchema items={breadcrumbs} />
        <FAQSchema faqs={faqs} aboutPage="https://www.ezyhelpers.com/cities/bangalore/full-time-maid" />
        <LocalBusinessSchema {...localBusinessProps} />

        <Navbar />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          </div>

          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Column */}
                <div className="text-center lg:text-left">
                  {/* Location Badge */}
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <MapPinIcon className="h-5 w-5 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">Serving All Bangalore Areas</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                    Full-Time Maid in Bangalore – Reliable Daily Home Help for Busy Families
                  </h1>

                  <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                    Hire a background-verified full-time maid in Bangalore for 8–10 hours of daily household support. Cooking, cleaning, childcare, or elderly care, matched to your schedule and home.
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Aadhaar & Background Verified</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 8–10 Hour Daily Service</div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Serving All Bangalore Neighbourhoods</div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 px-4 lg:px-0">
                    <Link href="/hire-helper" className="group relative bg-white text-primary-800 hover:bg-primary-50 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                      <span className="relative z-10">
                        <span className="hidden sm:inline">Book Full-Time Maid Now</span>
                        <span className="sm:hidden">Book Maid</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-primary-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </Link>
                    <Link href="tel:+919972571005" className="group flex items-center justify-center bg-transparent border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="hidden sm:inline">Call +91 9972571005</span>
                      <span className="sm:hidden">Call Now</span>
                    </Link>
                  </div>
                </div>

                {/* Visual Column */}
                <div className="relative hidden lg:block">
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                    {/* Service Icons Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                        <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-blue-100">Housekeeping</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                        <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-red-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-red-100">Cooking</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                        <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-green-100">Childcare</div>
                      </div>
                      <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-purple-500 hover:to-violet-600 hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                        <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-purple-100 group-hover:scale-110 transition-all duration-300" />
                        <div className="text-white font-semibold text-sm group-hover:text-purple-100">Elder Care</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is a Full-Time Maid */}
        <section className="section-padding bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-primary-500 to-purple-500"></div>
          <div className="container-custom relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-sm relative overflow-hidden">
                {/* Decorative background circle */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-10 items-start md:items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0 border border-blue-50 transform hover:scale-105 transition-transform duration-300">
                    <UserGroupIcon className="w-10 h-10 md:w-12 md:h-12 text-primary-600" />
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
                      What Is a Full-Time Maid in Bangalore?
                    </h2>
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                      <p>
                        A full-time house maid in Bangalore works <strong className="text-gray-900">8 to 10 hours a day</strong> at your home and returns to her own residence after the shift ends. She manages daily household tasks such as cooking, cleaning, laundry, childcare, or elderly care, depending on what your family needs.
                      </p>
                      <p>
                        This arrangement differs from a live-in maid, who stays at the employer's home overnight. Whether you need a full-day house help, a daily house maid, or full-time domestic help in Bangalore, the service works the same way: a trained helper arrives at your home each morning, completes her duties, and returns home after the shift.
                      </p>
                      <div className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-xl text-sm md:text-base font-semibold text-primary-800 shadow-sm mt-4 border border-primary-100 hover:shadow-md transition-shadow">
                        <StarIcon className="w-5 h-5 text-yellow-500" />
                        Most commonly hired by working professionals & dual-income households
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                What Does a Full-Time Maid in Bangalore Do?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                A full-time maid can be hired for one core responsibility or a combination of tasks, confirmed before hiring. When multiple responsibilities are assigned, working hours and salary are discussed and agreed upon before the maid begins work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {fullTimeServices.map((service, index) => {
                const IconComponent = (service.icon as any)
                return (
                  <div key={index} className={`${service.bgColor} rounded-2xl p-8 hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature: string, idx: number) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className={`h-4 w-4 ${service.iconColor} mr-2 shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                  Book Now
                </Link>
                <Link href="tel:+919972571005" className="bg-white text-primary-600 border-2 border-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                  Call Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Table */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  Full-Time Maid Salary in Bangalore
                </h2>
                <p className="text-lg text-gray-600">
                  The salary of a full-time maid in Bangalore ranges from ₹16,000 to ₹20,000 per month for an 8–10 hour daily shift.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-8 border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-primary-600 text-white">
                        <th className="py-4 px-6 font-bold text-lg">Role</th>
                        <th className="py-4 px-6 font-bold text-lg">Monthly Salary Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">General housekeeper</td>
                        <td className="py-4 px-6 text-gray-700 font-medium text-lg">₹16,000 – ₹20,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Cook (single cuisine)</td>
                        <td className="py-4 px-6 text-gray-700 font-medium text-lg">₹14,000 – ₹18,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Babysitter / childcare</td>
                        <td className="py-4 px-6 text-gray-700 font-medium text-lg">₹16,000 – ₹20,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-900 text-lg">Elderly care assistant</td>
                        <td className="py-4 px-6 text-gray-700 font-medium text-lg">₹16,000 – ₹20,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-gray-600">
                <p className="mb-2"><strong>Salary depends on:</strong> The duties assigned, the maid's experience, daily working hours, and your locality within Bangalore.</p>
                <p><strong>Note:</strong> For a cook, salary varies based on the number of meals and family members. For a babysitter, infants under one year attract higher pay due to intensive care needs. For elderly care, specialised or intensive care is priced higher based on the requirement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full-Time vs Live-In Table */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                  Full-Time Maid vs Live-In Maid in Bangalore
                </h2>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-900">
                        <th className="py-4 px-6 font-bold border-b text-lg">Feature</th>
                        <th className="py-4 px-6 font-bold border-b text-primary-700 text-lg">Full-Time Maid</th>
                        <th className="py-4 px-6 font-bold border-b text-blue-700 text-lg">Live-In Maid</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-700">Working hours</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">8–10 hours/day</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">Available all day</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-700">Stays at home</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">No</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">Yes</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-700">Accommodation needed</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">No</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">Yes</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-700">Monthly cost</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">₹16,000 – ₹20,000</td>
                        <td className="py-4 px-6 text-gray-800 font-medium">₹20,000 – ₹35,000</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6 font-semibold text-gray-700">Best for</td>
                        <td className="py-4 px-6 text-gray-800">Families needing structured daily help</td>
                        <td className="py-4 px-6 text-gray-800">Families needing overnight or round-the-clock support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Prefer */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-display">
                Why Families in Bangalore Prefer Full-Time House Help
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Bangalore's long commutes, demanding work schedules, and dual-income households make daily home management genuinely difficult. Hiring full-time help in Bangalore provides structured, reliable support without requiring residential accommodation, giving families consistent daily assistance while maintaining complete privacy at home.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4 font-semibold">
                Full-time daily maid services in Bangalore are particularly suited for:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preferReasons.map((benefit, index) => {
                const IconComponent = (benefit.icon as any)
                return (
                  <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
            
            {/* CTA */}
            <div className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-primary-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-700 transition-colors shadow-lg">
                  Book Now
                </Link>
                <Link href="tel:+919972571005" className="bg-white text-primary-600 border-2 border-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
                  Talk to our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How EzyHelpers Places the Right Full-Time Maid for Your Home</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Most families get matched within 3–5 days, depending on availability and requirements.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => {
                const IconComponent = (step.icon as any)
                return (
                  <div key={index} className="text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-yellow-900">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Areas We Serve in Bangalore</h2>
              <p className="text-lg text-gray-600">EzyHelpers provides full-time maid and house help services across Whitefield, Koramangala, HSR Layout, Indiranagar, Marathahalli, Electronic City, JP Nagar, Jayanagar, BTM Layout, Sarjapur Road, Bannerghatta Road, Hebbal, Yelahanka, Rajajinagar, Malleshwaram, Basavanagudi, and all surrounding areas across Bangalore.</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {bangaloreAreas.map((area, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-gray-700 font-medium text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Ready to Hire a Full-Time Maid in Bangalore?</h2>
              <p className="text-xl text-primary-100 mb-10 leading-relaxed">
                Stop managing everything alone. Whether you need help with cooking, cleaning, childcare, or elderly care, EzyHelpers connects you with a verified, experienced full-time maid matched to your home and schedule.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/hire-helper" className="bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl">
                  Book Full-Time Maid Now
                </Link>
                <Link href="tel:+919972571005" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs — Full-Time Maid in Bangalore</h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>
      </main>

      <NestCTA />
      
      {/* Blog guides interlinking */}
      <CityBlogLinks
        tags={['full-time maid', 'live-in maid', 'bangalore']}
        title="Maid Hiring Guides for Bangalore"
        subtitle="Compare options and understand fair salaries before you hire."
      />

      <Footer />
    </>
  )
}
