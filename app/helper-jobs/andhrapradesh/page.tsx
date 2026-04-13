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
    title: 'Domestic Jobs in Bangalore for Andhra Helpers',
    description: 'Choose domestic jobs in Bangalore that offer clear expectations, supportive families, and a safe space to work with peace of mind.',
    openGraph: {
        title: 'Domestic Jobs in Bangalore for Andhra Helpers',
        description: 'Choose domestic jobs in Bangalore that offer clear expectations, supportive families, and a safe space to work with peace of mind.',
        url: 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need ID proof for registration?',
        answer: 'Yes, basic ID proof is required for your safety and verification. You can easily share your Aadhaar copy through WhatsApp. Your information is kept secure and used only for your registration and job matching process.',
    },
    {
        question: 'Are male maid jobs available?',
        answer: 'Yes, we also offer opportunities for men. Male helpers can apply for roles like cleaning, housekeeping, support work, and other home-related responsibilities based on their skills and experience.',
    },
    {
        question: 'Can I choose a job type?',
        answer: 'Yes, you have full choice based on your comfort and experience. You can select from cooking, cleaning, babysitting, elderly care, or patient care jobs, and we match you with the most suitable family accordingly.',
    },
    {
        question: 'How quickly can I get a job after registering?',
        answer: 'You can get a job within a few days, depending on your profile and the availability of families. We try to match you as quickly as possible.',
    },
    {
        question: 'Will someone explain the job before I join?',
        answer: 'Yes, all job details are clearly explained before you decide. You also get to speak with the family before confirming.',
    }
]

export default function HelperJobsAndhraPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Andhra Pradesh' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-cyan-800 via-cyan-500 to-cyan-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Reliable Domestic Jobs in Bangalore for Andhra People</h1>
                            <p className="text-sm sm:text-base md:text-xl text-cyan-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Stop struggling with low village income. EzyHelpers connects Andhra Pradesh’s hardworking people with Bangalore’s trusted families through domestic jobs opportunities in Bangalore.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Choice to accept or reject a job', 
                                    'Video call before joining', 
                                    'Fixed monthly payment'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-cyan-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Domestic Jobs
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
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Payment</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Andhra Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We provide many types of domestic jobs in Bangalore roles based on your skills and experience.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Clean and manage homes daily, wash clothes and utensils, and keep living spaces neat and organised.",
                                    features: ["Clean homes regularly with care", "Wash utensils, clothes, and bedsheets", "Keep all rooms neat and organised", "Sweep and mop floors properly", "Do dusting and bathroom cleaning daily"]
                                },
                                {
                                    title: "House Cooking Jobs",
                                    desc: "Prepare meals, manage groceries, and maintain hygiene in the kitchen area daily.",
                                    features: ["Cook food for the family daily", "Help plan groceries and kitchen needs", "Keep the kitchen clean and hygienic always", "Follow recipes and food preferences carefully", "Store leftover food properly and safely"]
                                },
                                {
                                    title: "Baby Care Jobs",
                                    desc: "Take care of children, support their routine, and ensure safety and hygiene always.",
                                    features: ["Feed children properly on time", "Help with homework and playtime", "Bathe and dress children carefully", "Put them to sleep safely at night", "Keep toys and rooms clean daily"]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support elderly people in daily activities and provide emotional care and safety.",
                                    features: ["Help elders walk and bathe safely", "Give medicines on time daily", "Talk and support them emotionally", "Cook simple food for the elders", "Maintain safety inside the home", "Provide companionship and care daily"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist patients at home with daily needs, hygiene, and comfort.",
                                    features: ["Help patients with daily routine work", "Assist in the bathroom and eating", "Change bedsheets and keep hygiene", "Check comfort and report problems", "Follow basic doctor instructions carefully"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Couples manage household work together and maintain full household responsibilities.",
                                    features: ["Husband-wife manage housework together", "Clean rooms, kitchen, and surroundings", "Handle laundry and waste disposal", "Take care of pets if required", "Separate room is provided for couples", "Both earn safely in domestic jobs"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Couples handle security duties and manage entry and exit in properties.",
                                    features: ["Guard homes or apartments together", "Monitor visitors during the day and night", "Open and close gates properly", "Follow the security instructions given", "Stay alert and report issues quickly", "Room/space is provided to stay"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Care for the mother and newborn baby with full support and attention.",
                                    features: ["Care for mother and newborn baby", "Help with feeding and baby care", "Support the mother's recovery and rest", "Keep baby clothes and the room clean", "Stay alert at night if needed", "Live-in domestic jobs with full support"]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples maintain farmhouses and manage outdoor and indoor work.",
                                    features: ["Maintain the farmhouse and garden daily", "Water plants and manage surroundings", "Help with simple cooking if needed", "Watch property and visitors carefully", "Take care of animals if required", "Private room and food are provided"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-cyan-700 mb-3 group-hover:text-cyan-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-cyan-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Andhra Helpers */}
                <section className="section-padding bg-cyan-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Andhra Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families trust Andhra helpers for domestic jobs in Bangalore for these reasons:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Hardworking and disciplined', 'Clean and well-organised', 'Respectful and polite nature', 'Dedicated to daily responsibilities'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-cyan-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-cyan-600" />
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
                            <p className="text-sm md:text-xl text-gray-600 font-bold uppercase tracking-widest italic">Comparison: Why Andhra Workers Trust EzyHelpers for House Cleaning Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-cyan-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They charge a high commission from your first salary", ezy: "Free joining with no registration or hidden charges" },
                                        { agent: "No written proof for job promises or duties", ezy: "Written agreement clearly explains work and rights" },
                                        { agent: "They do not answer calls after you join work", ezy: "Full support team available anytime you need help" },
                                        { agent: "Job roles often change without informing you", ezy: "Clear job details shared before you accept work" },
                                        { agent: "Salary may get delayed, reduced, or cut", ezy: "Salary is paid directly by the family on time" },
                                        { agent: "No safe place to stay during an emergency", ezy: "Safe emergency stay support available for women" },
                                        { agent: "No proper support if problems happen", ezy: "Help provided if you want to change your job safely" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-cyan-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-cyan-500 font-bold text-xl">✓</span>
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
                                { agent: "They charge a high commission from your first salary", ezy: "Free joining with no registration or hidden charges" },
                                { agent: "No written proof for job promises or duties", ezy: "Written agreement clearly explains work and rights" },
                                { agent: "They do not answer calls after you join work", ezy: "Full support team available anytime you need help" },
                                { agent: "Job roles often change without informing you", ezy: "Clear job details shared before you accept work" },
                                { agent: "Salary may get delayed, reduced, or cut", ezy: "Salary is paid directly by the family on time" },
                                { agent: "No safe place to stay during an emergency", ezy: "Safe emergency stay support available for women" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-cyan-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-cyan-50">
                                        <div className="text-xs font-bold text-cyan-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Andhra Helpers</h2>
                            <p className="text-sm md:text-lg text-cyan-700 font-bold italic mb-8 uppercase tracking-wide">
                                Earn better income with safety, respect, and stability through domestic jobs in Bangalore
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on your work type, experience, and responsibilities.", icon: BanknotesIcon },
                                { title: "Better Than Andhra Income", desc: "Earn more than local jobs in Vijayawada, Guntur, or Nellore.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary sent directly by the employer to your bank account on time.", icon: CheckCircleIcon },
                                { title: "Skill Training", desc: "Basic training provided for cleaning, cooking, and child care.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs provide a safe place to stay with a bed or mattress.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three meals given daily by the family in most live-in domestic jobs.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One weekly off or two days leave in a month based on agreement.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Safe hostel stay available for women helpers during job change.", icon: PhoneIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 when your referred friend joins and completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-cyan-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-3 text-cyan-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-cyan-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium italic">Register online or call for domestic jobs in Bangalore.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register easily online or by phone." },
                                    { step: 2, title: "Share your work experience and skills." },
                                    { step: 3, title: "We match jobs based on your profile." },
                                    { step: 4, title: "Attend a video call with the family." },
                                    { step: 5, title: "Confirm the job for you." },
                                    { step: 6, title: "Travel safely to Bangalore." },
                                    { step: 7, title: "Start work with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-8 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-cyan-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-cyan-700 hover:shadow-lg transition-all"
                            >
                                Apply for Domestic Jobs in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-cyan-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-cyan-600 hover:bg-cyan-50 transition-all"
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
                                        Do you have a sister, friend, or neighbour from Andhra Pradesh looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-cyan-50 text-cyan-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-cyan-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-cyan-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Build a future where you learn, grow, and feel secure. EzyHelpers jobs are designed to give you stability, support, and real-life skills.
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-cyan-50 font-bold italic opacity-90 uppercase tracking-wide text-center">
                                Apply now and take your next step with confidence.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-cyan-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply for a Job
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
                                Common Questions from Andhra Helpers
                            </h2>
                            <div className="w-32 h-1 bg-cyan-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
