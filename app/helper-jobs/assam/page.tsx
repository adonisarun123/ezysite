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
    GiftIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Assam Helpers: Trusted Helper Job in Bangalore',
    description: 'Increase your income with helper job in Bangalore. Assam workers get direct hiring, free registration, safe maid job in Bangalore, and better salary with full support.',
    openGraph: {
        title: 'Assam Helpers: Trusted Helper Job in Bangalore',
        description: 'Increase your income with helper job in Bangalore. Assam workers get direct hiring, free registration, safe maid job in Bangalore, and better salary with full support.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to give Aadhaar?',
        answer: 'No physical document required. You can send an Aadhaar copy through WhatsApp. We verify your safety and keep your details secure during the registration process for your helper job in Bangalore.',
    },
    {
        question: 'How will I get my salary?',
        answer: 'Salary is paid directly by the family to your bank account before the 10th of every month. No deductions, no delays, and full transparency are always ensured in your maid job in Bangalore.',
    },
    {
        question: 'What if I don’t like the job?',
        answer: 'If you are not comfortable, our team will help you change jobs safely. No pressure to continue. Your safety and comfort are always our priority in every helper job in Bangalore.',
    },
    {
        question: 'What if the family asks me to do work not mentioned before?',
        answer: 'Your written contract clearly lists all duties. If the family asks for extra work outside the agreement, you can say no politely. Call our helpline immediately. We will talk to the family and resolve the issues. You are never forced to do unfair work in your maid job in Bangalore.',
    },
    {
        question: 'Can I choose the family?',
        answer: 'Yes, you can talk to the family through a video call before joining. You decide only after you feel comfortable and satisfied with the job details for your helper job in Bangalore.',
    },
    {
        question: 'Will I get a separate room?',
        answer: 'For live-in maid job in Bangalore, a private room with bed, fan, and light is provided in most homes. However, sometimes you may not get a fully separate room. In such cases, you will still get a dedicated space just for you, with a bed or mattress, and proper privacy. You also get access to a clean bathroom. Some families may share a bathroom with other female members only.',
    },
    {
        question: 'How long do I need to stay in one job?',
        answer: 'Most families prefer helpers who stay for 6 to 12 months. However, you are never forced to stay if you are unhappy. You can switch jobs safely with our help. Long-term work gives you better salary and trust, but your choice is always respected in your helper job in Bangalore.',
    }
]

export default function HelperJobsAssamPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Reliable Helper Job in Bangalore for Helpers from Assam</h1>
                            <p className="text-sm sm:text-base md:text-xl text-emerald-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Stop struggling with low local wages. EzyHelpers connects Assam’s hardest workers with Bangalore’s highest-paying households through trusted helper job in Bangalore opportunities. Secure a maid job in Bangalore that pays up to 3x more than Guwahati or Silchar, with zero fees and total transparency.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe helper job in Bangalore', 
                                    'Employer Pays Directly', 
                                    'Written agreement', 
                                    'Free training', 
                                    'Family-like environment'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-emerald-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Helper Job in Bangalore
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
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">Direct Payment</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">Registration Fees</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Assam Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We offer multiple types of maid job in Bangalore opportunities to match your skills.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Clean and maintain homes daily, wash dishes and clothes, and keep rooms tidy and organised.",
                                    features: ["Clean and maintain homes daily.", "Wash dishes, clothes, and linen.", "Keep rooms tidy and organised.", "Sweep and mop floors properly.", "Manage dusting and bathroom cleaning.", "Live-in or full-time maid job in Bangalore available."]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare veg and non-veg meals, manage groceries, and maintain a clean kitchen.",
                                    features: ["Cook meals for the family every day.", "Help plan groceries and budgets.", "Keep kitchen counters and vessels clean.", "Follow family recipes and preferences.", "Store and manage leftover food safely.", "Live-in or full-time maid job available."]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children, feed them, and maintain safety and hygiene.",
                                    features: ["Feed children on time daily.", "Help with school homework and play.", "Bathe and dress little ones safely.", "Put the children to sleep at night.", "Keep toys and rooms clean.", "Live-in or full-time helper job in Bangalore available."]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support seniors with daily routines, provide companionship, and ensure safety at home.",
                                    features: ["Help seniors walk and bathe.", "Give medicines on time daily.", "Talk and keep them company.", "Cook soft meals for older people.", "Ensure home safety always.", "Emotional support and companionship"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist sick people at home with daily routines, ensuring comfort, hygiene, and safety.",
                                    features: ["Help sick people at home daily.", "Assist with bathroom and eating.", "Change bedsheets and keep clean.", "Monitor comfort and report issues.", "Follow doctor’s basic instructions.", "Live-in or full-time maid job in Bangalore available."]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband-wife manage household chores and maintain home cleanliness with accommodation.",
                                    features: ["Husband-wife couple manage homes.", "Clean rooms, kitchen, and garden.", "Help with laundry and garbage.", "Take care of pets if needed.", "Separate accommodation provided.", "Both earn together safely in this maid job in Bangalore."]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Husband-wife couple guards apartments or houses, monitors visitors, and follows guidance.",
                                    features: ["Guard apartments or houses together.", "Monitor visitors during the day and night.", "Lock and open gates on time.", "Follow the security guard training given.", "Stay alert and report problems.", "Accommodation provided for both."]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Care for mother and newborn after delivery, assist with feeding, recovery, and provide live-in support in a maid job in Bangalore.",
                                    features: ["Care for the mother and the newborn baby.", "Help with feeding and burping.", "Support the mother’s rest and recovery.", "Keep baby clothes and the room clean.", "Stay awake at night if needed.", "Live-in with full family support in this helper job in Bangalore."]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Husband-wife teams maintain farmhouses, gardens, and property safety with live-in accommodation in a helper job in Bangalore.",
                                    features: ["Keep the farmhouse and garden clean daily.", "Water plants and maintain lawns.", "Help with basic cooking if needed.", "Monitor visitors and property security.", "Care for pets or birds on site.", "Private room with food provided."]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-emerald-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Assam Helpers */}
                <section className="section-padding bg-emerald-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Assam Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families in Bangalore request helpers from Assam for these reasons:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Honest and hardworking', 'Very clean and well-organised', 'Polite and soft-spoken nature', 'Dedicated to their daily work'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-emerald-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
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
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Comparison: Why Assam Workers Trusts EzyHelpers for Helper Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-emerald-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers</th>
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
                                            <td className="p-4 text-gray-700 bg-emerald-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-emerald-500 font-bold text-xl">✓</span>
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
                                <div key={index} className="bg-white rounded-xl border border-emerald-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-emerald-50">
                                        <div className="text-xs font-bold text-emerald-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Assam Helpers</h2>
                            <p className="text-sm md:text-lg text-emerald-700 font-bold italic mb-8 uppercase tracking-wide">
                                Earn 3x More Than Assam Jobs – With Respect, Safety, and Dignity through a helper job in Bangalore
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 depending on your role and past experience.", icon: BanknotesIcon },
                                { title: "Higher Pay than Assam", desc: "Three times higher salary than in Guwahati, Dibrugarh, or Jorhat.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Family transfers salary directly to your bank account on time.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Basic training for cooking, cleaning, and patient care.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs include private/shared room with a bed or mattress.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three meals are provided daily for live-in helpers.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One regular day off weekly or two days off monthly.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Free safe stay at Nest women's hostel during job changes.", icon: ShieldCheckIcon },
                                { title: "Referral Bonus", desc: "₹500 reward when your referred friend works one full month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-3 text-emerald-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-emerald-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works - UPDATED DESIGN FROM IMAGE */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register online or call us." },
                                    { step: 2, title: "Share your skills and job preferences." },
                                    { step: 3, title: "We match you with families." },
                                    { step: 4, title: "Video call with the family." },
                                    { step: 5, title: "Job confirmed for you." },
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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-emerald-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-emerald-700 hover:shadow-lg transition-all"
                            >
                                Apply for Bangalore Jobs Now
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section - UPDATED DESIGN FROM IMAGE */}
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
                                        Do you have a sister, friend, or neighbour from Assam looking for work in Bangalore?
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        {[
                                            'Refer them to work with EzyHelpers',
                                            'They complete 1 month of work',
                                            'You earn ₹500*'
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-600 font-bold text-sm md:text-base leading-none">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-emerald-50 text-emerald-700 font-black text-sm md:text-base py-3 px-6 rounded-xl text-center border border-emerald-100 uppercase tracking-tight">
                                        No limit – keep referring and keep earning!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section - UPDATED DESIGN FROM IMAGE */}
                <section className="section-padding bg-emerald-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Join hundreds of helpers from Assam who found safe and reliable work in Bangalore. Start your journey today!
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-emerald-50 font-bold italic opacity-90">
                                Work with respect, earn more, and support your family back home.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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

                {/* FAQs - UPDATED HEADER FROM IMAGE */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-xl mx-auto">
                                Common Questions from Assam Helpers
                            </h2>
                            <div className="w-32 h-1 bg-emerald-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
