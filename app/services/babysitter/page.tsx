import { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NestCTA from '@/components/NestCTA'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Babysitter Services in Bareilly – Trusted Child Care',
  description: 'Book babysitter services in Bareilly for newborns, toddlers, or school-aged children. Safe, caring support for full-day or part-time needs.',
  keywords: 'babysitter services bareilly, home babysitter bareilly, child care bareilly, nanny services bareilly, baby care services bareilly',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/services/babysitter',
    languages: selfReferencingLanguages('/services/babysitter'),
  },
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
    <main className="min-h-screen">
      <Navbar />
      <div className="bg-white">
        <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Professional Babysitter Services in Bareilly
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Safe, caring, and trusted babysitting support for your children
              </p>
            </div>
          </div>
        </section>
      </div>
      <NestCTA />
      <Footer />
    </main>
  )
}
