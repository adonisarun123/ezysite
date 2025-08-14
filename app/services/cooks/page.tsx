import { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { 
  SparklesIcon, 
  ClockIcon, 
  HeartIcon, 
  HomeIcon,
  CheckCircleIcon,
  PhoneIcon,
  FireIcon,
  ShieldCheckIcon,
  CakeIcon,
  StarIcon,
  SunIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Cook for Home Bangalore | Daily Fresh Meals',
  description: 'Find a reliable cook for home in Bangalore for daily, live-in, or part-time meal services. Fresh, healthy, and regionally customised food daily.',
  keywords: 'cook for home bangalore, home cook bangalore, cook services bangalore, daily cook bangalore, personal cook bangalore',
}

export default function CooksPage() {
  const services = [
    {
      title: "Daily Meal Preparation",
      description: "Fresh, nutritious meals prepared daily using locally sourced ingredients from Bangalore's best markets, accommodating your family's taste preferences.",
      icon: HeartIcon,
      features: ["Fresh ingredients", "Local market sourcing", "Taste customization", "Nutritious meals"]
    },
    {
      title: "Kitchen Management", 
      description: "Full kitchen organization, grocery planning from nearby stores, ingredient preparation, and maintaining professional home cooking standards.",
      icon: HomeIcon,
      features: ["Grocery planning", "Kitchen organization", "Ingredient prep", "Hygiene standards"]
    },
    {
      title: "Specialized Dietary Solutions",
      description: "Expert dietary management for diabetic meals, low-sodium preparations, vegetarian, and Jain food requirements; addressing Bangalore's health-conscious community needs.",
      icon: SparklesIcon,
      features: ["Diabetic meals", "Low-sodium prep", "Vegetarian options", "Jain food"]
    },
    {
      title: "Multi-Cuisine Expertise",
      description: "Skilled in preparing Karnataka dishes along with popular cuisines from Tamil Nadu, Kerala, Andhra, North India, and even light Indo-Chinese meals.",
      icon: ClockIcon,
      features: ["South Indian", "North Indian", "Indo-Chinese", "Regional dishes"]
    }
  ]

  const benefits = [
    "Traffic & time constraints support",
    "Diverse taste preferences covered",
    "Health-conscious lifestyle meals",
    "Elderly and child nutrition focus",
    "Multi-cuisine expertise",
    "Kitchen hygiene standards"
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-orange-500 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-24 right-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='90' height='90' viewBox='0 0 90 90' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M45 0C20.147 0 0 20.147 0 45s20.147 45 45 45 45-20.147 45-45S69.853 0 45 0zm0 80C25.118 80 10 64.882 10 45S25.118 10 45 10s35 15.118 35 35-15.118 35-35 35z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
                  <span className="text-sm font-semibold">Professional Home Chefs</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white drop-shadow-lg">
                  Professional Cooks
                  <span className="block text-white/90 text-3xl md:text-4xl lg:text-5xl mt-2 drop-shadow-lg">
                    Delicious Meals Daily
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 drop-shadow-sm">
                  Enjoy fresh, healthy, and delicious home-cooked meals prepared by our skilled professional cooks who understand your taste preferences.
                </p>

                {/* Key Benefits Pills */}
                <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Multiple Cuisines
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Dietary Preferences
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                    ✓ Fresh Ingredients
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  <Link
                    href="/hire-helper"
                    className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-orange-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                    Hire Professional Cook Today
                  </Link>

                  <Link
                    href="tel:+919972571005"
                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span className="hidden sm:inline">Call: +91 9972571005</span>
                    <span className="sm:hidden">+91 9972571005</span>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">10+</div>
                    <div className="text-orange-200 text-sm">Cuisines</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Fresh</div>
                    <div className="text-orange-200 text-sm">Daily Meals</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">Hygienic</div>
                    <div className="text-orange-200 text-sm">Preparation</div>
                  </div>
                </div>
              </div>

              {/* Visual Column */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {/* Service Icons Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <SparklesIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-orange-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-orange-100">Fresh Cooking</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <CakeIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-pink-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-pink-100">All Cuisines</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-green-500 hover:to-emerald-600 hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 transform hover:scale-105 hover:rotate-1 cursor-pointer">
                      <HeartIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-green-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-green-100">Health Focus</div>
                    </div>
                    <div className="group bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-blue-500 hover:to-cyan-600 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 cursor-pointer">
                      <ShieldCheckIcon className="h-12 w-12 text-white mx-auto mb-3 group-hover:text-blue-100 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-white font-semibold text-sm group-hover:text-blue-100">Hygiene</div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-red-400 text-red-900 rounded-full p-3 shadow-lg">
                    <FireIcon className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 rounded-full p-3 shadow-lg">
                    <SunIcon className="h-6 w-6" />
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
              Why Choose EzyHelpers for Cook Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional cooking services that bring flavor, nutrition, and convenience to your daily meals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircleIcon className="h-6 w-6 text-orange-600 mt-1 shrink-0" />
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
              Professional Cooking Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From daily meal preparation to special occasion cooking, our skilled cooks handle all your culinary needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shrink-0">
                      <IconComponent className="h-6 w-6 text-orange-600" />
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

      {/* Cuisine Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Diverse Cuisine Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cooks are skilled in preparing a wide variety of cuisines to satisfy every palate
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "North Indian",
                description: "Rich curries, tandoor items, breads, and traditional recipes",
                icon: "🍛"
              },
              {
                title: "South Indian", 
                description: "Authentic dosas, sambar, rasam, and regional specialties",
                icon: "🥘"
              },
              {
                title: "Continental",
                description: "Western dishes, pasta, salads, and international favorites",
                icon: "🍝"
              },
              {
                title: "Chinese",
                description: "Indo-Chinese fusion and authentic Chinese preparations",
                icon: "🥢"
              }
            ].map((cuisine, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{cuisine.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {cuisine.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {cuisine.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-background-secondary">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Flexible Cooking Service Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the cooking service that best fits your lifestyle and family needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live-In Cooks in Bangalore",
                description: "Perfect for large families, elderly care, or full-time assistance.",
                features: ["24/7 kitchen access", "All daily meals included", "Basic kitchen cleaning", "Complete kitchen upkeep"]
              },
              {
                title: "Full-Time Cooks in Bangalore", 
                description: "Ideal for nuclear families or tech couples.",
                features: ["2 to 3 meals per day", "Grocery and meal planning", "Flexible 8 to 10 hour shifts", "Daily meal prep"]
              },
              {
                title: "Part-Time Cooks in Bangalore",
                description: "Great for families needing help with specific meals.",
                features: ["1 to 2 meals per day", "Breakfast-only or dinner-only", "Evening or weekend availability", "Flexible timing"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-orange-600 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Specialized Cooking Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Diabetic-Friendly Meals",
                description: "Low-sugar, balanced nutrition meals for diabetes management"
              },
              {
                title: "Weight Management", 
                description: "Calorie-controlled, nutritious meals for healthy weight goals"
              },
              {
                title: "Senior-Friendly Cooking",
                description: "Soft, easily digestible meals with proper nutrition for elderly"
              },
              {
                title: "Baby Food Preparation",
                description: "Fresh, homemade baby food and toddler-friendly meal preparation"
              },
              {
                title: "Festival & Party Cooking",
                description: "Special occasion meals, party catering, and festival preparations"
              },
              {
                title: "Meal Prep & Storage",
                description: "Advance meal preparation and proper storage for busy schedules"
              }
            ].map((service, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">
            Enjoy Delicious Home-Cooked Meals Every Day
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Transform your kitchen into a culinary haven with our professional cooks. From everyday meals to special occasions, we make every dining experience memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <Link
              href="/hire-helper"
              className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold text-lg py-4 px-6 rounded-xl border-2 border-orange-600 hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
            >
              Hire Professional Cook Today
            </Link>

            <Link
              href="tel:+919972571005"
              className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 hover:shadow-xl transition-all duration-300"
            >
              <PhoneIcon className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="hidden sm:inline">Call +91 9972571005</span>
              <span className="sm:hidden">Call Now</span>
            </Link>
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our professional cook services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How can I find a reliable cook for home in Bangalore?",
                  answer: "EzyHelpers connects you with verified and experienced home cooks in Bangalore who undergo background checks and cooking skill assessments. We share shortlisted profiles based on your dietary needs, preferred cuisine, and schedule for a perfect home cooking match."
                },
                {
                  question: "Do your home cooks accommodate dietary restrictions?",
                  answer: "Yes, our cooks are experienced enough to prepare meals according to your health needs. Whether it's diabetic-friendly, Jain food, vegan, or low-sodium diets, EzyHelpers ensures you get a cook who understands and respects your dietary preferences."
                },
                {
                  question: "Will your home cooks help with grocery and vegetable shopping in Bangalore?",
                  answer: "Yes, many of our home cooks in Bangalore assist with daily or weekly grocery and vegetable shopping. They can visit local markets or nearby stores to purchase fresh ingredients or accompany you when required. This ensures meals are prepared with fresh, timely ingredients while saving you time and effort."
                },
                {
                  question: "Can your cook prepare meals for office tiffins?",
                  answer: "Absolutely. Many Bangalore families trust EzyHelpers' cooks to prepare home-style meals for office tiffins. It's a healthier, more cost-effective alternative to restaurant food, especially for busy professionals seeking nutritious lunch options."
                },
                {
                  question: "How do you ensure food safety and kitchen hygiene?",
                  answer: "At EzyHelpers, we train all home cooks on kitchen safety, personal hygiene, and clean cooking practices. We make sure cooking is clean and safe by using clean utensils, storing food properly, and training cooks in personal hygiene practices."
                },
                {
                  question: "Can I hire a cook for specific cuisines?",
                  answer: "Yes. EzyHelpers provides multi-cuisine home cooks trained in South Indian (Karnataka, Kerala, and Tamil), North Indian, Bengali, Gujarati, and Chinese cuisines, which are perfect for Bangalore's diverse families."
                },
                {
                  question: "Is hiring a home cook a good idea?",
                  answer: "Hiring a cook is one of the best ways to save time and eat healthier. With a reliable cook, you get fresh meals according to your taste, less stress over daily cooking, and improved work-life balance, especially helpful for working couples and elders."
                },
                {
                  question: "What is the salary of a female cook in Bangalore?",
                  answer: "The salary of a female home cook in Bangalore depends on her experience, working hours, and specific duties. On average, part-time female cooks earn ₹6,000 to ₹10,000 per month, while full-time cooks typically earn ₹12,000 to ₹20,000 per month. Live-in cooks may charge upwards of ₹25,000/month with added responsibilities."
                },
                {
                  question: "Can I get a temporary cook for a few weeks or events in Bangalore?",
                  answer: "Yes, EzyHelpers offers temporary cook services in Bangalore for short-term needs like family functions or when your regular cook is on leave. You can book skilled cooks for a few days, weeks, or just for a special occasion. Our flexible service ensures you get fresh, home-style food without any long-term commitment."
                },
                {
                  question: "Are male cooks available for home cooking in Bangalore?",
                  answer: "Yes, EzyHelpers provides both male and female home cooks in Bangalore. Many male cooks are experienced in handling bulk meal preparation, special diets, or cooking for large families. If you have a gender preference, let us know during booking, and we'll match you with the right home cook for your needs."
                },
                {
                  question: "Can I hire a cook for elderly care diets in Bangalore?",
                  answer: "Absolutely. Our trained home cooks in Bangalore can prepare meals that are suitable for elderly family members, including soft food, low-oil dishes, diabetic-friendly recipes, or food suited for age-related health conditions. Whether it's a special diet chart from a doctor or simple, easy-to-digest home food, our cooks handle it with care and attention."
                }
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

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600">
              Complete your home care needs with our wide range of domestic help services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full-Time Maid Services",
                description: "Complete household management including kitchen assistance and cleaning",
                href: "/services/full-time-maids"
              },
              {
                title: "Elderly Care Services", 
                description: "Specialized meal preparation for seniors with dietary requirements",
                href: "/services/elderly-care"
              },
              {
                title: "On-Demand Helpers",
                description: "Emergency cooking assistance for special occasions and events",
                href: "/services/on-demand-helpers"
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className="block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <span className="text-orange-600 font-medium hover:text-orange-700">
                  Learn More About {service.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 