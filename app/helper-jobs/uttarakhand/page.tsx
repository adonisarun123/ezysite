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
    title: 'Uttarakhand Helpers: Safe Maid Jobs in Bangalore',
    description: 'Earn better with maid jobs in Bangalore. Helpers from Uttarakhand get verified jobs, direct hiring, safe accommodation, free registration, and full support.',
    openGraph: {
        title: 'Uttarakhand Helpers: Safe Maid Jobs in Bangalore',
        description: 'Earn better with maid jobs in Bangalore. Helpers from Uttarakhand get verified jobs, direct hiring, safe accommodation, free registration, and full support.',
        url: 'https://www.ezyhelpers.com/helper-jobs/uttarakhand',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/uttarakhand'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Is this job safe for women?',
        answer: 'Yes, these jobs are safe for women. You get full job details and support from our team. In case of any problem, we are always there to help you.',
    },
    {
        question: 'Can I choose the family?',
        answer: 'Yes, you can talk to the family through a video call before joining. You decide only after you feel comfortable and satisfied with the job details for your helper job in Bangalore.',
    },
    {
        question: 'Will I get a separate room?',
        answer: 'For a live-in maid job in Bangalore, a private room with basic facilities is provided in most homes. However, sometimes you may not get a fully separate room. In such cases, you will still get a dedicated space just for you, with a bed or mattress, and proper privacy. You also get access to a clean bathroom.',
    },
    {
        question: 'Are salaries timely?',
        answer: 'Yes, family transfers salary directly to your bank account on time, no delays.',
    },
    {
        question: 'Can I leave if I’m unhappy?',
        answer: 'Yes, you can safely switch jobs anytime with support from our team.',
    },
    {
        question: 'Can I trust the family I will be working with?',
        answer: 'Yes, families are verified and selected carefully. We only connect you with households that treat helpers with respect and follow proper work conditions.',
    },
    {
        question: 'Can I talk to my family while working in Bangalore?',
        answer: 'Yes, you can stay connected with your family. You can use your phone during free time and stay in touch regularly.',
    }
]

export default function HelperJobsUttarakhandPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Uttarakhand' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-sky-800 via-sky-500 to-sky-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Trusted Helper Job in Bangalore for Uttarakhand Workers</h1>
                            <p className="text-sm sm:text-base md:text-xl text-sky-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Leave low-paying jobs behind. EzyHelpers helps Uttarakhand helpers get maid jobs in Bangalore with respect, safety, and a better salary. Live-in or full-time positions available with full guidance.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'No agent commission or hidden charges', 
                                    'Free job matching based on your skills', 
                                    'Better salary compared to hometown jobs'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-sky-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Helper Jobs in Bangalore
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
                                <div className="text-lg md:text-4xl font-bold text-sky-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-sky-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-sky-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Salary</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-sky-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Uttarakhand Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We offer multiple maid job opportunities in Bangalore to match your skills and preferences perfectly.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Clean and maintain homes daily, wash dishes and clothes, and keep rooms tidy and organised.",
                                    features: ["Clean and maintain homes daily", "Wash dishes, clothes, and linen", "Keep rooms tidy and organised", "Sweep and mop floors properly", "Manage dusting and bathroom cleaning", "Live-in or full-time maid job in Bangalore available"]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare veg and non-veg meals, manage groceries, and maintain a clean kitchen.",
                                    features: ["Cook meals for the family every day", "Help plan groceries and budgets", "Keep kitchen counters and vessels clean", "Follow family recipes and preferences", "Store and manage leftover food safely", "Live-in or full-time maid job available"]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children, feed them, and maintain safety and hygiene.",
                                    features: ["Feed children on time daily", "Help with school homework and play", "Bathe and dress little ones safely", "Put the children to sleep at night", "Keep toys and rooms clean", "Live-in or full-time helper job in Bangalore available"]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support seniors with daily routines, provide companionship, and ensure safety at home.",
                                    features: ["Help seniors walk and bathe", "Give medicines on time daily", "Talk and keep them company", "Cook soft meals for older people", "Ensure home safety always", "Emotional support and companionship"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist sick people at home with daily routines, ensuring comfort, hygiene, and safety.",
                                    features: ["Help sick people at home daily", "Assist with bathroom and eating", "Change bedsheets and keep them clean", "Monitor comfort and report issues", "Follow the doctor’s basic instructions", "Live-in or full-time maid job in Bangalore available"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband-wife manage household chores and maintain home cleanliness with accommodation.",
                                    features: ["Husband-wife couple manage homes", "Clean rooms, kitchen, and garden", "Help with laundry and garbage", "Take care of pets if needed", "Separate accommodation provided", "Both earn together safely in this maid job"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Husband-wife couple guards apartments or houses, monitors visitors, and follows guidance.",
                                    features: ["Guard apartments or houses together", "Monitor visitors during the day and night", "Lock and open gates on time", "Follow the instructions given", "Stay alert and report problems", "Accommodation provided for both"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Care for mother and newborn after delivery, assist with feeding, recovery, and provide live-in support.",
                                    features: ["Care for the mother and the newborn baby", "Help with feeding and burping", "Support the mother’s rest and recovery", "Keep baby clothes and the room clean", "Stay awake at night if needed", "Live-in with full family support"]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Husband-wife teams maintain farmhouses, gardens, and property safety with accommodation.",
                                    features: ["Keep the farmhouse and garden clean daily", "Water plants and maintain lawns", "Help with basic cooking if needed", "Monitor visitors and property security", "Care for pets or birds on site", "Private room with food provided"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-sky-700 mb-3 group-hover:text-sky-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-sky-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Uttarakhand Helpers */}
                <section className="section-padding bg-sky-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Uttarakhand Helpers</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Honest and hardworking', 'Very clean and well-organised', 'Polite and soft-spoken nature', 'Dedicated to their daily work'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-sky-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-sky-600" />
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
                            <p className="text-sm md:text-xl text-gray-600 font-bold uppercase tracking-widest italic">Comparison: Why Uttarakhand Helpers Trusts EzyHelpers for Maid Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-sky-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents (The Problem)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers (The Solution)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They take your first month's salary as commission", ezy: "Free to join – earn 100% yourself" },
                                        { agent: "Their promises have no written proof", ezy: "Written agreement protects your rights" },
                                        { agent: "They vanish when you need help", ezy: "Support team answers every call" },
                                        { agent: "Work rules change after you join", ezy: "You know the exact work before joining" },
                                        { agent: "Your salary gets delayed or cut", ezy: "Family pays the salary directly on time" },
                                        { agent: "No emergency place to stay", ezy: "Free emergency hostel for women" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-sky-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-sky-500 font-bold text-xl">✓</span>
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
                                { agent: "They take your first month's salary as commission", ezy: "Free to join – earn 100% yourself" },
                                { agent: "Their promises have no written proof", ezy: "Written agreement protects your rights" },
                                { agent: "They vanish when you need help", ezy: "Support team answers every call" },
                                { agent: "Work rules change after you join", ezy: "You know the exact work before joining" },
                                { agent: "Your salary gets delayed or cut", ezy: "Family pays the salary directly on time" },
                                { agent: "No emergency place to stay", ezy: "Free emergency hostel for women" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-sky-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-sky-50">
                                        <div className="text-xs font-bold text-sky-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Uttarakhand Helpers</h2>
                            <p className="text-sm md:text-lg text-sky-700 font-bold italic mb-8 uppercase tracking-wide">
                                Move to Bangalore for higher income, stable work, and a better quality of life
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Earning Range", desc: "₹20,000 to ₹35,000 per month based on job role and experience.", icon: BanknotesIcon },
                                { title: "More Income than Home", desc: "Earn much higher than usually get in Dehradun, Rishikesh, and Haridwar.", icon: StarIcon },
                                { title: "Timely Salary Credit", desc: "Payment given directly by family into bank account without cuts.", icon: CheckCircleIcon },
                                { title: "Learn New Skills", desc: "Support to improve cooking, cleaning, and childcare skills.", icon: BriefcaseIcon },
                                { title: "Place to Stay", desc: "Live-in jobs provide private/shared room with basic facilities.", icon: ShieldCheckIcon },
                                { title: "Food Included", desc: "Three daily meals arranged by the family for helpers in the house.", icon: HeartIcon },
                                { title: "Rest Days", desc: "One fixed weekly off or two days off in a month based on job type.", icon: ClockIcon },
                                { title: "Backup Support", desc: "Safe temporary stay at Nest women’s hostel during job changes.", icon: ShieldCheckIcon },
                                { title: "Extra Earnings", desc: "Get ₹500 reward when someone you refer completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-sky-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-3 text-sky-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-sky-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium italic">Register online or call us easily for a helper job in Bangalore.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-sky-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register online or call us." },
                                    { step: 2, title: "Share your skills and job preferences." },
                                    { step: 3, title: "We match you with suitable families." },
                                    { step: 4, title: "Video call with the employer." },
                                    { step: 5, title: "Confirm the job for you." },
                                    { step: 6, title: "Travel safely to Bangalore." },
                                    { step: 7, title: "Start work with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-sky-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-sky-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-sky-700 hover:shadow-lg transition-all"
                            >
                                Apply for Bangalore Jobs Now
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-sky-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-sky-600 hover:bg-sky-50 transition-all"
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
                                        Do you have a sister, friend, or neighbour from Uttarakhand looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-sky-50 text-sky-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-sky-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-sky-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                It’s not just about earning more, it’s about living with peace of mind, feeling secure, and knowing you are in the right place.
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-sky-50 font-bold italic opacity-90 uppercase tracking-wide">
                                Take a step towards a life where your work is appreciated every day.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-sky-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Get Started Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    Call Us Now
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
                                Common Questions from Uttarakhand Helpers
                            </h2>
                            <div className="w-32 h-1 bg-sky-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
