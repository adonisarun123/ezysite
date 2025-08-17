import { Metadata } from 'next'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Babysitter Services in Bareilly – Trusted Child Care',
  description: 'Book babysitter services in Bareilly for newborns, toddlers, or school-aged children. Safe, caring support for full-day or part-time needs.',
  keywords: 'babysitter services bareilly, home babysitter bareilly, child care bareilly, nanny services bareilly, baby care services bareilly',
}

const babysitterServices = [
  {
    title: "Daily Care & Routine",
    description: "Handles feeding, diaper changes, naps, and keeps your child on a healthy routine.",
    features: [
      "Feeding and meal schedules",
      "Diaper changes and hygiene",
      "Nap time management",
      "Daily activity planning"
    ]
  },
  {
    title: "Educational Activities",
    description: "Engages kids with learning games, stories, and simple play that supports brain development.",
    features: [
      "Age-appropriate learning games",
      "Story time sessions",
      "Brain development activities",
      "Creative play supervision"
    ]
  },
  {
    title: "Meal Preparation",
    description: "Prepares kid-friendly meals like dal-chawal, khichdi, and light snacks as per routine.",
    features: [
      "Nutritious meal preparation",
      "Age-appropriate snacks",
      "Dietary restrictions management",
      "Feeding assistance"
    ]
  },
  {
    title: "Indoor & Outdoor Play",
    description: "Supervises fun, safe indoor games and outdoor play to keep kids active and happy.",
    features: [
      "Safe play supervision",
      "Physical activity management",
      "Age-appropriate games",
      "Social interaction support"
    ]
  },
  {
    title: "School Support",
    description: "Assists with homework, school drop-off/pickup, and regular updates for school-going children.",
    features: [
      "Homework assistance",
      "School transportation",
      "Regular progress updates",
      "Academic support"
    ]
  },
  {
    title: "Emergency Care",
    description: "Trained to give first-aid and respond quickly using local hospital contact systems.",
    features: [
      "First-aid trained",
      "Emergency response",
      "Hospital coordination",
      "Parent communication"
    ]
  }
]

const serviceTypes = [
  {
    title: "Live-In Nannies",
    description: "Ideal for newborns, twins, or families needing consistent daily care.",
    features: [
      "12-Hour Daily Shifts",
      "Sleep & Feeding Routine Support",
      "Newborn & Twin Care",
      "Emergency-Ready"
    ]
  },
  {
    title: "Full-Time Babysitters",
    description: "Daily home babysitting support for school-age children during working hours.",
    features: [
      "8–10 Hours a Day",
      "School Pickup/Drop",
      "Meal Prep & Playtime",
      "Homework Assistance"
    ]
  },
  {
    title: "Part-Time Babysitters",
    description: "Perfect for evening events, outings, or short-term needs.",
    features: [
      "Flexible Hours",
      "Weekend Availability",
      "Evening Support",
      "Short-Term & On-Call"
    ]
  }
]

const ageGroups = [
  {
    age: "Newborns (0–6 months)",
    description: "Gentle handling, feeding, diaper changes, safe sleep, and hygiene-focused care."
  },
  {
    age: "Toddlers (1–3 years)",
    description: "Language building, potty training, guided play, and nap routines."
  },
  {
    age: "Preschoolers (3–5 years)",
    description: "Fun learning, creative games, story time, and basic education help."
  },
  {
    age: "School-Age Kids (5+ years)",
    description: "Homework help, activity planning, safety supervision, and transportation support if required."
  }
]

const faqs = [
  {
    question: "Can home babysitters in Bareilly handle children with special needs?",
    answer: "Yes, EzyHelpers provides trained home babysitters in Bareilly who can care for children with special needs. They offer patient, personalised support and are equipped to handle medical, developmental, or behavioural requirements with care and confidence."
  },
  {
    question: "How do I know my child will be safe with a home babysitter in Bareilly?",
    answer: "Your child's safety is our highest priority. Every home babysitter in Bareilly provided by EzyHelpers is thoroughly background verified using Aadhaar and valid address proof. Upon request, we also offer optional police verification and medical screening for added assurance. With our careful screening process, you can trust that your child is in safe, responsible hands."
  },
  {
    question: "What are the benefits of choosing professional babysitter services in Bareilly?",
    answer: "Choosing professional babysitter services in Bareilly from EzyHelpers gives you access to trained, background-verified caretakers who follow age-appropriate routines, are emergency-ready, understand cultural values, and are supported by our ongoing service team, unlike unverified local help."
  },
  {
    question: "Do babysitter services in Bareilly include specialised care for newborns?",
    answer: "Yes, babysitter services in Bareilly include expert care for newborns (0–6 months), covering feeding, diaper changes, hygiene, and sleep routines. We also provide Japa maids in Bareilly for traditional postnatal care for mothers and babies."
  },
  {
    question: "Are home babysitters in Bareilly trained to manage emotional needs?",
    answer: "Yes, every home babysitter in Bareilly is trained to support children emotionally. They manage tantrums, separation anxiety, and mood swings using child-friendly, patient care methods that build trust and comfort."
  }
]

const trustIndicators = [
  { metric: "5,000+", label: "Families Served in Bareilly" },
  { metric: "50+", label: "Babysitters Trained & Verified" },
  { metric: "100%", label: "Safe Background Verified" }
]

export default function BabysitterServices() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Babysitter Services in Bareilly – Safe & Loving Care for Your Child
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            EzyHelpers offers trusted, background-verified babysitters in Bareilly for newborns, toddlers, and school-going children. Choose from full-time, part-time, or live-in nanny options tailored to your family's routine, safety, and childcare needs.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trustIndicators.map((indicator) => (
            <div key={indicator.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{indicator.metric}</div>
              <div className="mt-2 text-gray-600">{indicator.label}</div>
            </div>
          ))}
        </div>

        {/* Service Assurance */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Service Assurance</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <span className="ml-2">Background Verified Caretakers</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <span className="ml-2">First-Aid Trained Babysitters</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <span className="ml-2">24-72 Hour Placement</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
              <span className="ml-2">Flexible Hours for Your Needs</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Babysitter Services</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {babysitterServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service Types */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Flexible Childcare Options</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((type) => (
              <div key={type.title} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                <p className="mt-2 text-gray-600">{type.description}</p>
                <ul className="mt-4 space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mt-1" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Age Groups */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Specialized Care for Every Age Group</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ageGroups.map((group) => (
              <div key={group.age} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{group.age}</h3>
                <p className="mt-2 text-gray-600">{group.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Professional Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Professional Babysitter Services Are Better</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Choosing a verified babysitter from EzyHelpers gives your family a much safer and more dependable childcare experience than hiring through word-of-mouth or local classifieds. While untrained help may seem convenient, they often lack the skills, background checks, and emergency preparedness essential for modern parenting needs.
            </p>
            <p className="mt-4 text-gray-600">
              EzyHelpers provides background-verified, trained babysitters in Bareilly who are equipped to handle real-life childcare challenges, from feeding fussy toddlers to managing sibling routines and responding calmly in urgent situations. They follow age-specific care routines and respect parenting preferences, whether it's screen-free play, nap-time boundaries, or cultural values like modest dressing and traditional food preparation.
            </p>
            <p className="mt-4 text-gray-600">
              Local parenting in Bareilly often includes managing extended family expectations and regional customs. Our babysitters are trained to joint family environments, understand the importance of respect toward elders, and can even assist with small festival rituals or child-specific pooja routines when needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
