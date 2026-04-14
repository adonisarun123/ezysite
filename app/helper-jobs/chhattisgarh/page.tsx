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
    title: 'Household Jobs in Bangalore for Chhattisgarh Helpers',
    description: 'Get domestic helper jobs in Bangalore with clear salary, safe homes, and full support. Start earning more with trusted household jobs in Bangalore today.',
    openGraph: {
        title: 'Household Jobs in Bangalore for Chhattisgarh Helpers',
        description: 'Get domestic helper jobs in Bangalore with clear salary, safe homes, and full support. Start earning more with trusted household jobs in Bangalore today.',
        url: 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'What benefits do I get in domestic helper jobs in Bangalore?',
        answer: 'You get good salary, free stay (for live-in jobs), and 3 meals daily. You also get safe work, respect, and help in emergency.',
    },
    {
        question: 'Will I get support after joining a helper job in Bangalore?',
        answer: 'Yes, our team will help you even after joining. If you have any problem, we will support you.',
    },
    {
        question: 'How do I know the job details are correct before joining?',
        answer: 'You will get full job details like salary and work. You will also talk to the employer on a video call before joining.',
    },
    {
        question: 'Is there any registration fee for home cleaning jobs in Bangalore?',
        answer: 'No, registration is free. There are no hidden charges.',
    },
    {
        question: 'Can I change my job if I am not comfortable?',
        answer: 'Yes, you can change your job. We will help you find a better job.',
    },
    {
        question: 'Why should I trust EzyHelpers for household jobs in Bangalore?',
        answer: 'EzyHelpers gives safe and verified jobs. There are no hidden charges, and you get full support.',
    }
]

export default function HelperJobsChhattisgarhPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Chhattisgarh' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-500 to-orange-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Trusted Household Jobs in Bangalore for Helpers from Chhattisgarh</h1>
                            <p className="text-sm sm:text-base md:text-xl text-orange-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Get household jobs in Bangalore with verified families, clear salary, and full support. Avoid risky agents and start safe domestic helper jobs in Bangalore with confidence.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Respectful home environment', 
                                    'No agent commission', 
                                    'Skill growth opportunity',
                                    'Supportive employers',
                                    'Clear job roles'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-orange-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Helper Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white py-6 md:py-10 border-b border-gray-100">
                    <div className="container-custom">
                        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100">
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Salary</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Domestic Helper jobs in Bangalore for Chhattisgarh Helpers</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We provide multiple types of jobs based on your experience, skills, and comfort level.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Home Cleaning jobs in Bangalore",
                                    desc: "In housekeeping jobs, your responsibility is to maintain cleanliness and organisation in the home on a daily basis.",
                                    features: ["Daily house cleaning and organisation", "Cleaning rooms, kitchen, and living areas", "Washing utensils, clothes, bedsheets", "Sweeping and mopping floors", "Bathroom cleaning and hygiene", "Live-in and full-time options"]
                                },
                                {
                                    title: "Cooking / Kitchen Helper job",
                                    desc: "In cooking jobs, you will help families by preparing daily meals and managing kitchen work efficiently.",
                                    features: ["Daily meal preparation", "Cooking veg and non-veg food", "Cutting vegetables and prep work", "Managing groceries", "Cleaning kitchen and utensils", "Live-in and full-time options"]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "In babysitter jobs, you will take care of children with patience, attention, and responsibility.",
                                    features: ["Child care and supervision", "Feeding and daily routine management", "Playtime and learning support", "Hygiene and cleanliness for children", "Sleep care and night support", "Live-in and full-time options"]
                                },
                                {
                                    title: "Home care jobs in Bangalore",
                                    desc: "In elderly care jobs, you will support senior citizens with their daily needs and comfort.",
                                    features: ["Elderly care and daily support", "Walking and bathing assistance", "Medicine management", "Emotional support and companionship", "Simple meal preparation", "Safety and comfort care"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "In patient care jobs, you will assist patients who need help with daily activities and recovery at home.",
                                    features: ["Support for patient daily activities", "Help with eating and movement", "Personal hygiene assistance", "Clean and hygienic surroundings", "Monitor health and comfort", "Live-in and full-time options"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "In couple jobs, husband and wife can work together and manage household responsibilities.",
                                    features: ["Work together as husband and wife", "Cleaning and maintenance tasks", "Laundry and household chores", "Keep home organised", "Stay with the provided accommodation", "Stable long-term work"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "In security jobs, husband and wife work together to ensure the safety of homes or buildings.",
                                    features: ["Monitor visitors and entry points", "Manage gates and timings", "Stay alert day and night", "Report unusual activity", "Follow safety instructions", "Accommodation provided"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "In Japa maid jobs, you will take care of a mother and her newborn baby after delivery.",
                                    features: ["Care for mother and newborn", "Support post-delivery recovery", "Baby feeding and hygiene", "Baby sleep and comfort care", "Night care if required", "Live-in job with full support"]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples manage farmhouse maintenance, cleanliness, and daily work.",
                                    features: ["Property cleaning and maintenance", "Garden and plant care", "Basic cooking support", "Property safety monitoring", "Help with animals if needed", "Private room and food provided"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-orange-700 mb-3 group-hover:text-orange-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-orange-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Chhattisgarh Helpers */}
                <section className="section-padding bg-orange-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Chhattisgarh Helpers</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Sincere and hardworking nature', 'Calm, respectful, and easy to manage', 'Quick learners who follow instructions', 'Reliable for long-term work and trust'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-orange-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 uppercase tracking-tight leading-none">{item}</span>
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
                            <p className="text-sm md:text-xl text-gray-600 font-bold uppercase tracking-widest italic">Comparison: Why Chhattisgarh Workers Trust EzyHelpers for House Cleaning Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-orange-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "High commission taken from your salary", ezy: "Free registration with no hidden charges" },
                                        { agent: "No written agreement provided", ezy: "Written agreement with full job clarity" },
                                        { agent: "No support after joining the job", ezy: "Continuous support after joining" },
                                        { agent: "Salary or job role may change later", ezy: "Clear job details before you accept" },
                                        { agent: "No clear job details before joining", ezy: "Direct salary payment without deductions" },
                                        { agent: "No emergency help or assistance", ezy: "Emergency help and job change support" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-orange-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4">
                            {[
                                { agent: "High commission taken from your salary", ezy: "Free registration with no hidden charges" },
                                { agent: "No written agreement provided", ezy: "Written agreement with full job clarity" },
                                { agent: "No support after joining the job", ezy: "Continuous support after joining" },
                                { agent: "Salary or job role may change later", ezy: "Clear job details before you accept" },
                                { agent: "No clear job details before joining", ezy: "Direct salary payment without deductions" },
                                { agent: "No emergency help or assistance", ezy: "Emergency help and job change support" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-orange-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-orange-50">
                                        <div className="text-xs font-bold text-orange-600 mb-1">✅ EzyHelpers (The Solution)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Chhattisgarh Helpers</h2>
                            <p className="text-sm md:text-lg text-orange-700 font-bold italic mb-8 uppercase tracking-wide">
                                Earn more than local jobs with respect and stability through domestic jobs in Bangalore
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on your work type, experience, and job role.", icon: BanknotesIcon },
                                { title: "Higher Income", desc: "Earn more than cities like Raipur, Bilaspur, and nearby areas.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary transferred directly to your bank account every month.", icon: CheckCircleIcon },
                                { title: "Skill Development", desc: "Improve your skills and increase your earning potential over time.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs provide a private/shared room with basic facilities.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three meals are provided daily for live-in helpers.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "You will get rest days based on your job type.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Receive help in case of any problem or emergency (Women only).", icon: PhoneIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 for each successful referral.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3 text-orange-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-orange-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium italic">Simple process to start your journey.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register easily online or by calling us." },
                                    { step: 2, title: "Share your experience and job preferences." },
                                    { step: 3, title: "We match you with suitable families." },
                                    { step: 4, title: "Attend a video call with the family." },
                                    { step: 5, title: "Confirm the job for you." },
                                    { step: 6, title: "Travel safely to Bangalore." },
                                    { step: 7, title: "Start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-orange-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-10">
                                            {index % 2 !== 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-orange-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-orange-700 hover:shadow-lg transition-all"
                            >
                                Apply for Helper Jobs
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all"
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
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20">
                                        <GiftIcon className="w-8 h-8 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-1 font-display leading-tight">Refer & Earn</h2>
                                    <h3 className="text-4xl md:text-5xl font-black mb-1">₹500!</h3>
                                    <p className="text-yellow-100 text-xs font-bold uppercase tracking-widest">*Terms and Conditions apply</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                                    <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                                        Do you have a sister, friend, or neighbour from Chhattisgarh looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-orange-50 text-orange-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-orange-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-orange-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Do not continue struggling with low income in Chhattisgarh. Move to Bangalore for better salary, safe work, and a stable future.
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-orange-50 font-bold italic opacity-90 uppercase tracking-wide">
                                Apply today and improve your life.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-xl mx-auto">
                                Common Questions from Chhattisgarh Helpers
                            </h2>
                            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
