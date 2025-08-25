import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  ShieldCheckIcon, 
  HomeIcon, 
  HeartIcon,
  CheckCircleIcon,
  PhoneIcon,
  UserGroupIcon,
  StarIcon,
  SunIcon,
  SparklesIcon,
  BuildingOffice2Icon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Full-Time Maid Services – Consistent, Daily Help Without Stay-In',
  description:
    "Hire reliable full-time maids for daily household support. Choose specialists for housekeeping, cooking, childcare, or elderly care. Fixed daily hours, verified profiles, and quick replacements.",
  keywords: 'full time maid, daily maid, home helper, domestic help, maid services',
  openGraph: {
    title: 'Full-Time Maid Services – Consistent, Daily Help Without Stay-In',
    description:
      "Hire reliable full-time maids for daily household support. Choose specialists for housekeeping, cooking, childcare, or elderly care. Fixed daily hours, verified profiles, and quick replacements.",
    url: 'https://ezyhelpers.com/services/full-time-maids',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ezyhelpers.com/services/full-time-maids'
  }
}

export default function FullTimeMaidsPage() {
  const services = [
    {
      title: "Full-Time Housekeeper",
      description: "Experience a spotless and well-maintained home daily. Our maid is fully focused on cleanliness and household upkeep.",
      icon: HomeIcon,
      features: ["Sweeping, mopping, dusting", "Kitchen & bathroom cleaning", "Laundry and folding", "Dishwashing and utensil management", "Bed-making and surface cleaning"],
      expertise: "Skilled in household hygiene and routine cleaning tasks."
    },
    {
      title: "Full-Time Cook", 
      description: "Relish homemade meals without the kitchen stress. Our full-time cook prepares fresh, traditional meals tailored to your family's diet.",
      icon: HeartIcon,
      features: ["Cooking meals as per your family’s diet", "Chopping and ingredient preparation", "Post-cooking kitchen cleaning", "Grocery handling (if required)", "Managing utensils and stove hygiene"],
      expertise: "Experienced in various cuisines and dietary needs (veg or non-veg) to ensure fresh and tasty food every day."
    },
    {
      title: "Full-Day Babysitter",
      description: "Ensure your child receives full-day care, love, and learning support, even when you're away.",
      icon: UserGroupIcon,
      features: ["Feeding and bathing assistance", "School pickup/drop-off", "Reading, playtime, and study help", "Nap routines and hygiene care", "Child safety monitoring"],
      expertise: "Experienced in child engagement, comfort, and care routines to provide a safe, nurturing environment."
    },
    {
      title: "Full-Time Elderly Care Assistant",
      description: "Your elders deserve dignity and reliable care. Our full-time caregivers are trained for senior support with compassion.",
      icon: ShieldCheckIcon,
      features: ["Assistance with bathing, dressing, and daily hygiene", "Medication reminders and timely support", "Companionship and emotional care", "Help with walking, mobility, or wheelchair support", "Accompanying to doctor appointments (if required)"],
      expertise: "Trained to provide respectful, empathetic senior care with dignity and comfort."
    }
  ]

  const benefits = [
    "Backup & replacement support available",
    "Choose timings that suit your schedule",
    "Verified profiles with proper background checks",
    "Transparent pricing – no hidden charges",
    "Ongoing support even after hiring",
    "Trained for home responsibilities"
  ]

  return (
    <>
      <main className="min-h-screen">
        <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-700 via-secondary-600 to-secondary-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20zM0 20c11.046 0 20 8.954 20 20H0V20z'/%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Professional Daily Support</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Full-Time Maid Services – Consistent, Daily Help Without Stay-In
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Let EzyHelpers take care of your home with our dedicated full-time maids. Each helper specialises in one key area—housekeeping, cooking, childcare, or elderly care—so your daily home needs are handled with care and professionalism.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  {[
                    '100% Verified & Background-Checked',
                    'Fixed Daily Hours (8–10 Hours)',
                    'Transparent Pricing – No Hidden Charges',
                    'Quick Replacement Guarantee',
                    'Personalized Matchmaking'
                  ].map((pill, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">✓ {pill}</div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-secondary-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-secondary-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Book Reliable Full-Time Maid Now
                  </Link>

                  <Link
                    href="tel:+919972571005"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Call +91 9972571005</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-secondary-200 text-sm">Trained for Home Responsibilities</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">8–10 Hrs</div>
                    <div className="text-secondary-200 text-sm">Daily Dedicated Service</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">6 Days</div>
                    <div className="text-secondary-200 text-sm">Weekly Consistent Support</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-600 hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <HomeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-emerald-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-emerald-100">Daily Cleaning</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-orange-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-orange-100">Meal Prep</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-cyan-100">Child Support</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-indigo-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-indigo-100">Elder Care</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-400 text-blue-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 rounded-full p-3 shadow-lg">
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Why Hire a Full-Time Maid through EzyHelpers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get the benefits of dedicated help without 24/7 live-in commitment - perfect for busy families
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-success-600 mt-1 shrink-0" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Our Comprehensive Full-Time Maid Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ideal for those with busy work schedules, elderly parents, or young children
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-4">
                        <div className="text-sm font-semibold text-gray-900 mb-1">Duties</div>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                          {service.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>
                      {service.expertise && (
                        <p className="text-gray-600 text-sm mt-3"><span className="font-semibold text-gray-900">Expertise:</span> {service.expertise}</p>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Needs a Full-Time Maid?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Full-time maids are ideal for dependable, all-day support with minimal hassle.</p>
          </div>
          <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Working couples needing consistent help with housekeeping or cooking.',
                'New parents requiring a trustworthy, daily babysitter.',
                'Families with elderly members who need constant daytime care.',
                'Busy professionals who want a well-maintained home without daily effort.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <CheckCircleIcon className="h-5 w-5 text-secondary-600 mt-0.5 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Our Easy 4-Step Maid Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Hiring a full-time maid with EzyHelpers is smooth and stress-free.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Consultation",
                description: "Discuss your needs and choose the type of maid service—cleaning, cooking, childcare, or elder care."
              },

              {
                step: "2", 
                title: "Maid Shortlisting",
                description: "We match you with 2–3 verified candidates based on your preferences."
              },

              {
                step: "3",
                title: "Interview & Selection", 
                description: "Connect with shortlisted maids via call, video or in-person interviews."
              },

              {
                step: "4",
                title: "Smooth Onboarding",
                description: "We handle documentation. Your maid begins with a trial; support team stays in touch."
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {process.title}
                </h3>
                <p className="text-gray-600">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Things to Know Before Hiring */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Things to Know Before Hiring a Full-Time Maid</h2>
            <p className="text-lg text-gray-600">Key things to know for a smooth full-time maid hiring experience.</p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">1. Working Hours</h3>
              <p className="text-gray-700">Full-time maids usually work for 8 to 10 hours daily based on your selected plan. Any additional hours should be discussed beforehand.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">2. Weekly Offs</h3>
              <p className="text-gray-700">Your maid is entitled to one weekly off, ideally planned in advance. Public or religious holidays can be mutually discussed.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">3. No Multi-tasking</h3>
              <p className="text-gray-700">Each full-time maid focuses on one role—housekeeping, cooking, child care, or elder care—unless agreed otherwise during hiring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              FAQs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about full-time maid services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { question: 'What is a full-time maid service?', answer: 'A full-time maid works 8–10 hours a day, 6 days a week, focusing on one main role—housekeeping, cooking, child care, or elderly care—for consistent and reliable support.' },
                { question: 'How many hours does a full-time maid work daily?', answer: 'Full-time maids usually work between 8 to 10 hours a day. You can choose timings that fit your routine. Unlike live-in maids, they leave after their shift.' },
                { question: 'What services do full-time maids provide?', answer: 'Based on your needs: Housekeeping (cleaning, laundry, dishwashing), Cooking (meals, grocery handling, kitchen cleaning), Babysitting (feeding, school pickup/drop, homework help), Elderly Care (bathing, mobility, medication reminders, companionship).' },
                { question: 'Are full-time maids background verified?', answer: 'Yes. We check Aadhaar, local address, and experience. Police and medical checks can be arranged if requested.' },
                { question: 'Can a full-time maid do multiple tasks like cooking and cleaning?', answer: 'No. Each maid is trained for one role only. Minor additional help can be discussed and mutually agreed.' },
                { question: 'How much does a full-time maid cost?', answer: 'Pricing depends on your city and the role. We offer fair, transparent rates with no hidden fees. Contact us for a free quote.' },
                { question: 'Do full-time maids get weekly days off?', answer: 'Yes. All full-time maids get one day off per week, decided mutually. Public/religious holidays can be discussed in advance.' },
                { question: 'What happens if my maid does not show up?', answer: 'We provide quick replacement support if your maid is absent or unavailable, so your routine is not disrupted.' },
                { question: 'What support do I get after hiring?', answer: 'We stay connected after hiring—regular check-ins, fast issue resolution, and replacements when needed. Trial period support is included.' },
                { question: 'Do I need to provide meals?', answer: 'Usually no; full-time maids bring their own food. You may mutually agree to provide meals—discuss it clearly during hiring.' }
              ].map((faq, index) => (
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
      <section className="section-padding bg-secondary-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Get Trusted Full-Time Help with EzyHelpers Today!</h2>
          <p className="text-xl text-secondary-100 mb-8 max-w-3xl mx-auto">Why wait to enjoy a better work-life balance? Hire a full-time maid who shows up every day, on time, and takes care of the tasks you need most.</p>
          {/* CTA Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-secondary-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-secondary-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Book Reliable Full-Time Maid Now
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="hidden sm:inline">Call for Free Consultation</span>
              <span className="sm:hidden">Call Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Related Services */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23818cf8' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='15' r='2'/%3E%3Ccircle cx='15' cy='45' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary-100 text-secondary-800 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-4 w-4 mr-2" />
              <span className="text-sm font-semibold">Complete Home Care Solutions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete your home care needs with our wide range of professional domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                title: "Live-In Maid Services",
                description: "12-hour daily support for dedicated household tasks",
                href: "/services/live-in-maids",
                icon: BuildingOffice2Icon,
                bgColor: "bg-orange-50",
                iconColor: "text-orange-600",
                borderColor: "border-orange-200"
              },
              {
                title: "Babysitting Services", 
                description: "Caring, attentive support for your child’s daily routine, play, and development",
                href: "/services/babysitter",
                icon: UserGroupIcon,
                bgColor: "bg-purple-50",
                iconColor: "text-purple-600",
                borderColor: "border-purple-200"
              },
              {
                title: "Elderly Care Services",
                description: "Compassionate attendants to assist with personal care, mobility, and companionship",
                href: "/services/elderly-care",
                icon: ShieldCheckIcon,
                bgColor: "bg-pink-50",
                iconColor: "text-pink-600",
                borderColor: "border-pink-200"
              }
            ].map((service, index) => {
              const IconComponent = service.icon
              return (
                <Link
                  key={index}
                  href={service.href}
                  className={`group relative ${service.bgColor} rounded-2xl p-8 border-2 ${service.borderColor} hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
                  </div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 ${service.bgColor} group-hover:bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border ${service.borderColor} group-hover:border-white/20`}>
                      <IconComponent className={`h-8 w-8 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 font-display transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/90 mb-6 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className={`${service.iconColor} group-hover:text-white font-semibold transition-colors duration-300`}>
                        Learn More About {service.title}
                      </span>
                      <ArrowRightIcon className={`h-5 w-5 ${service.iconColor} group-hover:text-white group-hover:translate-x-1 transition-all duration-300`} />
                    </div>
                  </div>

                  {index === 1 && (
                    <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full transform -rotate-12 shadow-lg">
                      Popular
                    </div>
                  )}
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We have more services available!
            </p>
            <Link
              href="/hire-helper"
              className="inline-flex items-center bg-secondary-600 text-white hover:bg-secondary-700 font-semibold px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View All Services
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
      </main>
    </>
  )
} 