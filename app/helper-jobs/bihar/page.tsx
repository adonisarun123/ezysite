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
    title: 'House Helper Jobs in Bangalore | Apply from Bihar',
    description: 'Tired of low income? Find house maid jobs in Bangalore from Bihar with direct payment, safe families, and free registration through EzyHelpers.',
    openGraph: {
        title: 'House Helper Jobs in Bangalore | Apply from Bihar',
        description: 'Tired of low income? Find house maid jobs in Bangalore from Bihar with direct payment, safe families, and free registration through EzyHelpers.',
        url: 'https://www.ezyhelpers.com/helper-jobs/bihar',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/bihar'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to pay any registration fee?',
        answer: 'No, registration is completely free for helpers applying for house helper jobs in Bangalore. There are no agent charges, no hidden fees, and no salary deductions at any stage of the process.',
    },
    {
        question: 'How much can I earn in Bangalore?',
        answer: 'You can earn between ₹20,000 and ₹35,000 depending on your job role, experience, and the type of house maid jobs in Bangalore you choose. This is much higher than most jobs available in Bihar.',
    },
    {
        question: 'Will I get proper food and living space?',
        answer: 'Yes, For live-in maid job in Bangalore, a private room with bed, fan, and light is provided in most homes. However, sometimes you may not get a fully separate room. In such cases, you will still get a dedicated space just for you, with a bed or mattress, and proper privacy. You also get access to a clean bathroom. Some families may share a bathroom with other female members only. You also get daily 3 meals based on the family.',
    },
    {
        question: 'Is it safe to work in Bangalore?',
        answer: 'Yes, we only connect you with safe families. Our team stays in contact with you and provides support whenever needed to ensure your safety and comfort in helper job in Bangalore.',
    },
    {
        question: 'Can I change my job if I am not happy?',
        answer: 'Yes, if you are not comfortable, we will help you switch house cleaning jobs in Bangalore safely. You are never forced to stay in any job against your choice.',
    },
    {
        question: 'Will I receive my salary on time?',
        answer: 'Yes, salary is paid directly by the family to your bank account every month without delay or deductions in house helper jobs in Bangalore.',
    },
    {
        question: 'Can I talk to the family before joining?',
        answer: 'Yes, we arrange a video call so you can understand the work and decide comfortably before accepting the job.',
    }
]

export default function HelperJobsBiharPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Bihar' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Genuine House Helper Jobs in Bangalore for Helpers from Bihar</h1>
                            <p className="text-sm sm:text-base md:text-xl text-indigo-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Working hard but still earning less in Bihar? Move to Bangalore for stable helper job, better salaries, and a safer life with families who respect your work and effort.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe environment in big cities', 
                                    'Salary comes directly to you', 
                                    'Legal work agreement', 
                                    'New skills training', 
                                    'Respectful employer families'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-indigo-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Salary</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Maid Job Vacancy in Bangalore for Bihar Helpers</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We offer multiple types of helper job in Bangalore based on your skills and comfort. You can choose your work and apply easily with full guidance from our team.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "House Cleaning Jobs in Bangalore",
                                    desc: "Clean and maintain homes daily while supporting families in their routine work.",
                                    features: ["Sweep and mop floors properly", "Dust furniture and clean bathrooms", "Wash dishes, clothes, and bedsheets", "Keep kitchen and living areas tidy", "Live-in or full-time work available"]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Help families by preparing meals and managing daily kitchen work properly.",
                                    features: ["Make fresh breakfast, lunch, and dinner", "Follow family recipes and tastes", "Clean vessels and kitchen counters", "Store leftover food safely", "Live-in or full-time work available"]
                                },
                                {
                                    title: "Nanny / Babysitter house maid jobs in Bangalore",
                                    desc: "Take care of children with love, attention, and full responsibility every day.",
                                    features: ["Bathe and dress the kids gently", "Prepare healthy snacks and meals", "Play with children and teach good habits", "Put them to sleep at night", "Live-in or full-time work available"]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support senior citizens with daily care, comfort, and emotional support at home.",
                                    features: ["Help seniors walk and sit comfortably", "Give medicines at the right time", "Talk to them and keep them happy", "Cook soft, easy-to-eat meals", "Friendly and calm environment"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist patients at home with daily care while ensuring comfort and hygiene.",
                                    features: ["Assist with bathroom and changing clothes", "Serve food and water on time", "Keep bed sheets and the room clean", "Report any health changes", "Live-in or full-time work available"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband and wife can work together managing homes and daily household tasks.",
                                    features: ["Both work in the same home", "Clean rooms, kitchen, and garden", "Help with laundry and garbage", "Take care of pets if asked", "Private room provided"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Husband-wife couple work together to manage the safety and security of homes.",
                                    features: ["Open and close gates on time", "Monitor CCTV and visitors", "Stay alert during the night shift", "Security training is given for free", "Accommodation for both"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Support the mother and newborn baby after delivery with care and attention.",
                                    features: ["Support the mother during rest", "Bathe the baby and change nappies", "Help with burping and feeding", "Keep the baby's room and clothes clean", "Stay awake at night if needed"]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples manage farmhouse work, including maintenance, safety, and daily support.",
                                    features: ["Keep the garden and lawns clean", "Water plants and remove weeds", "Basic cooking, if requested", "Watch visitors and lock gates", "Private room with meals"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-indigo-700 mb-3 group-hover:text-indigo-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-indigo-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Bihar Helpers */}
                <section className="section-padding bg-indigo-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Bihar Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families in Bangalore choose helpers from Bihar for these reasons:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    'Hardworking and sincere in daily work', 
                                    'Honest and trustworthy nature', 
                                    'Quick to understand instructions', 
                                    'Stay committed for a long time'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-indigo-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
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
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-indigo-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents (The Problem)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers (The Solution)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They take a high commission from your salary", ezy: "Free registration with no hidden charges" },
                                        { agent: "Their promises are not written anywhere", ezy: "Written agreement for salary and duties" },
                                        { agent: "They stop answering after the job placement", ezy: "Support team available anytime for help" },
                                        { agent: "Work rules change after joining the job", ezy: "Clear job details before you accept work" },
                                        { agent: "Salary may be delayed or reduced", ezy: "Salary paid directly without deductions" },
                                        { agent: "No support during emergencies", ezy: "Emergency stay support when needed" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-indigo-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-indigo-500 font-bold text-xl">✓</span>
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
                                { agent: "They take a high commission from your salary", ezy: "Free registration with no hidden charges" },
                                { agent: "Their promises are not written anywhere", ezy: "Written agreement for salary and duties" },
                                { agent: "They stop answering after the job placement", ezy: "Support team available anytime for help" },
                                { agent: "Work rules change after joining the job", ezy: "Clear job details before you accept work" },
                                { agent: "Salary may be delayed or reduced", ezy: "Salary paid directly without deductions" },
                                { agent: "No support during emergencies", ezy: "Emergency stay support when needed" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-indigo-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-indigo-50">
                                        <div className="text-xs font-bold text-indigo-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Bihar Helpers</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 depending on your skills and experience.", icon: BanknotesIcon },
                                { title: "Higher Pay than Bihar", desc: "Earn much more than jobs in Patna, Gaya, and nearby areas.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary is paid directly to your bank account every month.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Learn better cooking, cleaning, and care skills through training.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Private/shared room with a bed or mattress provided for live-in jobs.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three meals are provided daily for live-in helpers.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One weekly off or two monthly offs for live-in jobs.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Safe stay available if any job issue or emergency happens (only for Women).", icon: ShieldCheckIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 when your referred person completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 text-indigo-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-indigo-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">You can register by calling us or applying online easily.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register online or call us." },
                                    { step: 2, title: "Share your skills and job preferences." },
                                    { step: 3, title: "We match you with families." },
                                    { step: 4, title: "Video call with the family." },
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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all"
                            >
                                Apply for Jobs in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
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
                                        Do you have a sister, friend, or neighbour from Bihar looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-indigo-50 text-indigo-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-indigo-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-indigo-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Stop struggling with low income in Bihar. Move to Bangalore for a better salary, safe work, and full support. Start your journey today!
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-indigo-50 font-bold italic opacity-90">
                                Apply today and build a better future for yourself and your family.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply for Helper Jobs in Bangalore
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
                                Common Questions from Bihar Helpers
                            </h2>
                            <div className="w-32 h-1 bg-indigo-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
