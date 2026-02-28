import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    StarIcon,
    PhoneIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    GiftIcon
} from '@heroicons/react/24/outline'


import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Helper Jobs in Bangalore – Apply from Jharkhand | EzyHelpers',
    description: 'Find safe helper jobs in Bangalore. Jharkhand helpers can apply directly with no agents or fees. Respectful families, written agreement & full support.',
    openGraph: {
        title: 'Helper Jobs in Bangalore – Apply from Jharkhand | EzyHelpers',
        description: 'Find safe helper jobs in Bangalore. Jharkhand helpers can apply directly with no agents or fees. Respectful families, written agreement & full support.',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to give my Aadhaar?',
        answer: 'No physical document needed. WhatsApp us a copy of your Aadhaar, and we’ll complete the verification safely.',
    },
    {
        question: 'How will I get my salary?',
        answer: 'Salary is paid directly by the family to your bank account before the 10th of every month. No deductions, no delays.',
    },
    {
        question: 'What if I don’t like the job or it’s too hard?',
        answer: 'No worries. Our team helps you safely switch jobs without any pressure.',
    },
    {
        question: 'Will I get support after joining?',
        answer: 'Yes! We check in weekly and are always available for any problem or emergency.',
    },
    {
        question: 'Can I choose the family I work with?',
        answer: 'Yes! We arrange a video call with the family, and you only go if you feel comfortable.',
    },
    {
        question: "What if I don't know the language in Bangalore?",
        answer: 'Most families speak Hindi, and our team speaks Hindi too. We will make sure you can communicate easily before you join.',
    }
]

export default function HelperJobsPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Jharkhand' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm relative -top-7 md:-top-0 lg:-top-0">
                            <span className="text-gray-500 font-medium whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/hin"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"
                                />
                            </Link>
                            <span className="text-gray-900 font-bold whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Trusted Domestic Helper Jobs in Bangalore - Apply from Jharkhand Today</h1>

                            <p className="text-sm sm:text-base md:text-2xl font-semibold mb-4 text-teal-100 max-w-5xl mx-auto">Do you want a job where you are treated well, paid on time, and supported?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-sm sm:text-base md:text-xl text-teal-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    EzyHelpers helps helpers from Jharkhand get trusted domestic helper jobs directly with good families in Bangalore. There are no agents, and you don’t have to pay any fees.
                                </p>
                            </div>
                            <p className="text-sm sm:text-base md:text-xl font-semibold mb-6 text-yellow-300 max-w-4xl mx-auto">Why This Job Is Good for You</p>
                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Safe jobs in Bangalore</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Employer Pays Directly</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Written agreement</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ Free training</div>
                            </div>

                            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center w-full bg-white text-teal-700 font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    Apply for Helper Jobs in Bangalore
                                </Link>

                                <Link
                                    href="tel:+919876543210"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-custom">
                        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100 mt-4 mb-4">
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">5,000+</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">9</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">100%</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Direct Salary From Employer</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2">₹0</div>
                                <div className="text-teal-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">Registration/Placement Fees</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Helper jobs */}
                <section id="find-jobs-by-state" className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Jharkhand Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We have many types of jobs to match your skills. Click to apply or learn more!</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    state: "Housekeeping Jobs",
                                    desc: "Clean and mop homes daily, wash dishes and clothes, and maintain neat and organised rooms.",
                                    features: ["Clean and mop the house every day", "Wash dishes, clothes, and help with laundry", "Keep rooms and furniture neat", "Live-in or full-time work available"]
                                },
                                {
                                    state: "Cooking / Kitchen Helper Jobs",
                                    desc: "Cook veg and non-veg meals, manage groceries, and keep the kitchen clean and organised.",
                                    features: ["Cook meals for the family (veg or non-veg)", "Help plan meals and manage groceries", "Keep the kitchen clean and organised.", "Live-in or full-time work available"]
                                },
                                {
                                    state: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children, feed them, assist with studies, and maintain hygiene and safety.",
                                    features: ["Take care of the children and feed them", "Help with homework and play", "Keep children safe and clean", "Live-in or full-time work available"]
                                },
                                {
                                    state: "West Bengal",
                                    desc: "Stop Dealing With Local Job Insecurity And Move To Bangalore For Trusted Domestic Helper Jobs That Offer A Fixed Income And Full Support For Helpers.",
                                    features: ["Babysitting, Cooking & Maid Jobs", "Full-Time & Live-In Roles", "Fixed Monthly Income", "Ongoing Support From Our Team", "No Registration Fee"]
                                },
                                {
                                    state: "Elderly Care Jobs",
                                    desc: "Support seniors with daily activities, provide companionship, and ensure a safe home environment.",
                                    features: ["Help older people with daily tasks", "Give companionship and emotional support", "Help with walking and personal care", "Friendly and safe home environment"]
                                },
                                {
                                    state: "Patient Care Jobs",
                                    desc: "Assist sick people at home with daily routines, ensuring safety, comfort, and hygiene.",
                                    features: ["Help sick people at home", "Assist with daily activities", "Make sure they are comfortable and safe", "Live-in or full-time work available"]
                                },
                                {
                                    state: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband-wife teams manage daily household chores and maintain home cleanliness with provided accommodation.",
                                    features: ["Husband-wife jobs for cleaning and housework", "Help with daily chores and home care", "Take care of the home surroundings", "Accommodation provided"]
                                },
                                {
                                    state: "Couple Security Jobs",
                                    desc: "Husband-wife pairs guard apartments or independent houses, monitor visitors, and follow training and guidance.",
                                    features: ["Husband-wife jobs to guard apartments or houses", "Keep home and family safe", "Check people entering or leaving", "Training and guidance provided"]
                                },
                                {
                                    state: "Japa Maid Jobs",
                                    desc: "Care for mother and newborn after delivery; help with feeding, recovery, and live-in support.",
                                    features: ["Take care of the mother and newborn after delivery", "Help feed and care for the baby", "Support the mother during recovery", "Live-in with full guidance"]
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/${item.state.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-teal-700 mb-3 group-hover:text-teal-800 relative z-10">{item.state}</h3>

                                    <p className="text-gray-700 text-sm md:text-sm mb-5 leading-relaxed font-medium relative z-10">
                                        {item.desc}
                                    </p>

                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 font-semibold text-teal-600 text-sm group-hover:underline flex items-center gap-1 relative z-10">
                                        Learn More <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Trust Section */}
                <section className="section-padding bg-teal-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-600 text-white text-xs font-bold tracking-wider mb-4">
                                Why Bangalore
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Jharkhand Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                                Bangalore employers specifically request helpers from Jharkhand for these qualities:
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    "Trusted by families",
                                    "Hard-working",
                                    "Adjust easily",
                                    "Good for security jobs",
                                    "Stay longer in jobs"
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-3 py-1.5 md:px-6 md:py-3 rounded-full shadow-sm border border-teal-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-shadow duration-300">
                                        <div className="w-4 h-4 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircleIcon className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                                        </div>
                                        <span className="text-xs md:text-lg font-semibold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Is Different From Local Agents</h2>
                            <p className="text-lg text-gray-600">Comparison: Why Jharkhand Trusts EzyHelpers</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-teal-500">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white /20 w-1/2">Local Agent</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2">EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            agent: "Take 1 month’s salary as commission",
                                            ezy: "Free registration – keep full salary"
                                        },
                                        {
                                            agent: "Only verbal promises, can be broken anytime",
                                            ezy: "Written agreement for salary, leave & work hours"
                                        },
                                        {
                                            agent: "No support if you face problems",
                                            ezy: "Our helpline support anytime you need"
                                        },
                                        {
                                            agent: "Work rules unclear or unfair",
                                            ezy: "Clear work expectations from day one"
                                        },
                                        {
                                            agent: "Salary may be delayed or cut",
                                            ezy: "Salary paid on time, no deductions"
                                        },
                                        {
                                            agent: "No emergency help or backup",
                                            ezy: "Emergency support and safe stay if needed"
                                        }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-green-50">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4 mt-6">
                            {[
                                {
                                    agent: "Take 1 month’s salary as commission",
                                    ezy: "Free registration – keep full salary"
                                },
                                {
                                    agent: "Only verbal promises, can be broken anytime",
                                    ezy: "Written agreement for salary, leave & work hours"
                                },
                                {
                                    agent: "No support if you face problems",
                                    ezy: "Our helpline support anytime you need"
                                },
                                {
                                    agent: "Work rules unclear or unfair",
                                    ezy: "Clear work expectations from day one"
                                },
                                {
                                    agent: "Salary may be delayed or cut",
                                    ezy: "Salary paid on time, no deductions"
                                },
                                {
                                    agent: "No emergency help or backup",
                                    ezy: "Emergency support and safe stay if needed"
                                }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border-2 border-teal-200 overflow-hidden shadow-md">
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✗</span> Local Agent:
                                        </div>
                                        <div className="text-gray-700">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-bold text-green-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✓</span> EzyHelpers:
                                        </div>
                                        <div className="text-gray-700">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section >

                {/* Benefits For You */}
                <section className="section-padding bg-gradient-to-br from-teal-50 to-blue-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Jharkhand Helpers</h2>
                            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                                Earn 3x More Than Jharkhand – With Security, Respect, and Dignity</p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 depending on job type and experience.", icon: BanknotesIcon },
                                { title: "Higher Pay", desc: "Earn 3x more than local jobs in Ranchi, Dhanbad, Jamshedpur & other villages.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary paid straight to your bank account. No delays or deductions.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Improve your skills in cooking, care, and housekeeping through training.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Private room with a bed, fan, and light (for live-in jobs).", icon: ShieldCheckIcon },
                                { title: "Food", desc: "3 healthy meals daily provided by the family (for live-in jobs).", icon: HeartIcon },
                                { title: "Weekly Off", desc: "1 fixed day off per week (full-time) or 2 monthly offs (live-in jobs).", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Safe stay available at Nest women’s hostel if job changes or problems arise.", icon: PhoneIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 when a friend or sister completes 1 month of work.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-md border-2 border-teal-100 hover:shadow-lg transition-all duration-300 group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-teal-50 rounded-full flex items-center justify-center mb-3 md:mb-4 text-teal-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-teal-700 mb-2 md:mb-3">{benefit.title}</h3>
                                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register online or call us." },
                                    { step: 2, title: "Share your skills and job preferences." },
                                    { step: 3, title: "We match you with families." },
                                    { step: 4, title: "Video call with the family." },
                                    { step: 5, title: "Job confirmed for you." },
                                    { step: 6, title: "Travel safely to Bangalore." },
                                    { step: 7, title: "Start work with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-6 md:mb-8 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-sm md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <h3 className="text-xs md:text-xl font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-jobs"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Apply for Bangalore Jobs Now
                            </Link>
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300 transform hover:scale-105"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-yellow-50 border-y border-yellow-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                                        <GiftIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">Refer & Earn</h2>
                                    <h3 className="text-5xl md:text-6xl font-extrabold mb-2">₹500!</h3>
                                    <p className="text-yellow-100 font-medium">*Terms and Conditions apply</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        Do you have a sister, friend, or neighbour from Jharkhand looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">Refer them to work with EzyHelpers</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">They complete 1 month of work</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-bold">You earn ₹500*</span>
                                        </div>
                                    </div>
                                    <p className="text-teal-600 font-bold text-lg bg-teal-50 py-2 px-4 rounded-lg text-center border border-teal-100">
                                        No limit – keep referring and keep earning!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                < section className="section-padding bg-teal-600 text-white" >
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-xl md:text-4xl text-white font-bold mb-6 font-display">Join hundreds of helpers from Jharkhand who found safe and reliable work in Bangalore. Start your journey today!</p>
                            <p className="text-xl mb-8 text-teal-100">Work with respect, earn more, and support your family back home.</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    Apply for Helper Jobs in Bangalore
                                </Link>
                                <Link
                                    href="#find-jobs-by-state"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    View Jobs by Category
                                </Link>
                            </div>
                        </div>
                    </div>
                </section >

                {/* FAQs */}
                < section className="section-padding bg-gray-50" >
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Common Questions from Jharkhand Helpers</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section >

            </main >
            <Footer />
        </>
    )
}
