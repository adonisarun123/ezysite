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
    title: 'Apply Safe Home Work Jobs in Bangalore Today',
    description: 'Start your journey with home work jobs in Bangalore. Apply today and explore better work opportunities with safe families and complete support for Madhya Pradesh helpers.',
    openGraph: {
        title: 'Apply Safe Home Work Jobs in Bangalore Today',
        description: 'Start your journey with home work jobs in Bangalore. Apply today and explore better work opportunities with safe families and complete support for Madhya Pradesh helpers.',
        url: 'https://www.ezyhelpers.com/helper-jobs/madhyapradesh',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/madhyapradesh'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need Aadhaar for registration?',
        answer: 'You can share your Aadhaar copy on WhatsApp. It is used only for verification. Your details stay safe during registration.',
    },
    {
        question: 'Are these jobs safe for women?',
        answer: 'Yes, all families are verified. We also provide emergency hostel support for women. You can work with safety and confidence.',
    },
    {
        question: 'Can I talk to family before joining?',
        answer: 'Yes, a video call is arranged. You can understand the work clearly. Join only if you feel comfortable.',
    },
    {
        question: 'What if extra work is given?',
        answer: 'You can say no to extra work. Our team will support you. We will talk to the family and solve the issue.',
    },
    {
        question: 'Do I need experience?',
        answer: 'Experience is helpful but not required. We provide basic training. You can learn and start easily.',
    },
    {
        question: 'Is there any registration fee?',
        answer: 'No, joining is free. You do not pay any charges. You keep your full salary.',
    }
]

export default function HelperJobsMPPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Madhya Pradesh' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-rose-800 via-rose-500 to-rose-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Trusted Home Work Jobs in Bangalore for MP Job Seekers</h1>
                            <p className="text-sm sm:text-base md:text-xl text-rose-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Worried about safety while working outside your state. Choose home work jobs in Bangalore where Madhya Pradesh helpers work with respectful families and receive full guidance and protection throughout from EzyHelpers.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Choose job based on your comfort', 
                                    'Talk to family before joining', 
                                    'Support team always available'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-rose-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Jobs in Bangalore
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
                                <div className="text-lg md:text-4xl font-bold text-rose-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-rose-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-rose-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Salary</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-rose-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Madhya Pradesh Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We provide different types of house work jobs in Bangalore options to match your experience and comfort level.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housekeeper Jobs in Bangalore",
                                    desc: "Do daily house cleaning, manage home work, and keep spaces neat and organised properly.",
                                    features: ["Clean and maintain homes daily", "Wash utensils, clothes, and bedsheets", "Keep rooms neat and properly arranged", "Sweep and mop floors carefully", "Handle dusting and bathroom cleaning", "Live-in or full-time house maid jobs available"]
                                },
                                {
                                    title: "Cook Jobs",
                                    desc: "Cook meals for families, manage groceries, and keep kitchen clean and organised always.",
                                    features: ["Prepare food for the family daily", "Assist in grocery planning and buying", "Keep kitchen area neat and hygienic", "Follow taste preferences of the family", "Store leftover food safely every time", "Live-in or full-time home work jobs"]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children safely, support their routine, and maintain hygiene and comfort.",
                                    features: ["Feed children properly on time daily", "Help with studies, play, and activities", "Bathe and dress children carefully", "Make children sleep at proper time", "Keep toys and rooms clean always", "Live-in or full-time house helper work"]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Help elderly people with daily needs, ensure safety, and provide emotional support.",
                                    features: ["Support seniors in walking and bathing", "Give medicines on correct time daily", "Talk kindly and provide companionship", "Prepare simple meals for elders", "Ensure home safety for elderly always", "Provide emotional support and care"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist patients at home with daily needs and ensure hygiene, safety, and comfort.",
                                    features: ["Help patients with daily routines", "Support bathroom and food needs", "Change bedsheets and maintain hygiene", "Check comfort and report problems", "Follow doctor instructions carefully", "Live-in or full-time home cleaning job"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Couples manage full house responsibilities and maintain cleanliness with proper coordination.",
                                    features: ["Husband and wife manage house work", "Clean rooms, kitchen, and outdoor areas", "Handle laundry and waste disposal", "Take care of pets if needed", "Separate stay provided for couple", "Both can earn together safely"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Couples handle security duties, manage entry, and ensure safety of the property.",
                                    features: ["Guard house or apartment together", "Monitor visitors during day and night", "Open and close gates on time", "Follow security instructions properly", "Stay alert and report issues quickly", "Accommodation provided for both"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Support mother and newborn baby after delivery with care, hygiene, and attention.",
                                    features: ["Care for mother and newborn baby", "Help in feeding and burping baby", "Support mother recovery and rest", "Keep baby clothes and area clean", "Stay awake during night if needed", "Live-in job with full support"]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples maintain farmhouse, manage garden, and ensure safety of property daily.",
                                    features: ["Maintain farmhouse and garden properly", "Water plants and take care of lawn", "Help with cooking if required", "Watch property and visitors carefully", "Care for animals and pets", "Room and food provided"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-rose-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-rose-700 mb-3 group-hover:text-rose-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-rose-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer MP Helpers */}
                <section className="section-padding bg-rose-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Madhya Pradesh Helpers</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Honest and sincere workers', 'Clean and disciplined lifestyle', 'Polite and respectful behaviour', 'Focused and hardworking nature'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-rose-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-rose-600" />
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Is Better Than Local Agents</h2>
                            <p className="text-sm md:text-xl text-gray-600 font-bold uppercase tracking-widest italic">Comparison: Why Madhya Pradesh Workers Trusts EzyHelpers for Home Cleaning Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-rose-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents (The Problem)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers (The Solution)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They take your first salary as commission", ezy: "Free joining process with no hidden charges or fees" },
                                        { agent: "No written proof of job details or work responsibilities", ezy: "Written agreement clearly explains work and rights" },
                                        { agent: "They disappear after giving job and do not answer calls", ezy: "Support team is always available to guide and help" },
                                        { agent: "Work duties change suddenly after you join the job", ezy: "You know full job details before you agree and join" },
                                        { agent: "Salary delays, cuts, or confusion can happen anytime", ezy: "Salary is paid directly by family on time every month" },
                                        { agent: "No help or safe place during emergency situations", ezy: "Emergency safe stay support provided for women" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-rose-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-rose-500 font-bold text-xl">✓</span>
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
                                { agent: "They take your first salary as commission", ezy: "Free joining process with no hidden charges or fees" },
                                { agent: "No written proof of job details or work responsibilities", ezy: "Written agreement clearly explains work and rights" },
                                { agent: "They disappear after giving job and do not answer calls", ezy: "Support team is always available to guide and help" },
                                { agent: "Work duties change suddenly after you join the job", ezy: "You know full job details before you agree and join" },
                                { agent: "Salary delays, cuts, or confusion can happen anytime", ezy: "Salary is paid directly by family on time every month" },
                                { agent: "No help or safe place during emergency situations", ezy: "Emergency safe stay support provided for women" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-rose-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-rose-50">
                                        <div className="text-xs font-bold text-rose-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Madhya Pradesh Helpers</h2>
                            <p className="text-sm md:text-lg text-rose-700 font-bold italic mb-8 uppercase tracking-wide">
                                Earn more than local jobs with respect and office safety through house work jobs in Bangalore
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on work type, skills, and experience.", icon: BanknotesIcon },
                                { title: "Higher Pay than MP", desc: "Three times better salary than Bhopal, Indore, or Gwalior jobs.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Family transfers salary directly to your bank account on time.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Basic training provided for cleaning, cooking, and childcare.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs include basic facilities, room can be private or shared.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three proper meals provided daily for all live-in helpers.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One fixed day off every week or two days off in a month.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Free safe stay at women hostel provided if you change jobs.", icon: PhoneIcon },
                                { title: "Referral Bonus", desc: "₹500 reward when your referred person completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-rose-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-rose-50 rounded-lg flex items-center justify-center mb-3 text-rose-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-rose-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium italic">Register online or call us easily. No complicated process.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-rose-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register easily online or by phone." },
                                    { step: 2, title: "Share your skills and job preference." },
                                    { step: 3, title: "We match you with a suitable family." },
                                    { step: 4, title: "Attend a simple video call with employer." },
                                    { step: 5, title: "Confirm the job if you feel comfortable." },
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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-rose-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-rose-700 hover:shadow-lg transition-all"
                            >
                                Apply for Jobs in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-rose-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-rose-600 hover:bg-rose-50 transition-all"
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
                                        Do you have a sister, friend, or neighbour from Madhya Pradesh looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-rose-50 text-rose-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-rose-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-rose-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Stop earning less in your city. Start earning more with home work jobs in Bangalore with safe work, better salary, and full support.
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-rose-50 font-bold italic opacity-90 uppercase tracking-wide">
                                Apply today and change your life for the better.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-rose-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply for Job
                                </Link>
                                <Link
                                    href="/helper-jobs"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    View Jobs by Category
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
                                Common Questions from Madhya Pradesh Helpers
                            </h2>
                            <div className="w-32 h-1 bg-rose-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
