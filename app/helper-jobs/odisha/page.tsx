import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import ReferEarnSection from '@/components/ReferEarnSection'
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
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'Odisha Helpers: Trusted House Helper Jobs in Bangalore',
    description: 'Tired of low wages? Find House Helper Jobs in Bangalore for Odisha workers. Direct hiring for cooking, cleaning & caregiving. 100% Free Registration.',
    openGraph: {
        title: 'Odisha Helpers: Trusted House Helper Jobs in Bangalore',
        description: 'Tired of low wages? Find House Helper Jobs in Bangalore for Odisha workers. Direct hiring for cooking, cleaning & caregiving. 100% Free Registration.',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need to give my Aadhaar?',
        answer: 'No physical document needed. WhatsApp us a copy of your Aadhaar, and we’ll complete verification safely. We ensure your data is secure while matching you with a trusted helper job in Bangalore.',
    },
    {
        question: 'How will I get my salary?',
        answer: 'Salary is paid directly by the family to your bank account before the 10th of every month. No deductions, no delays, and full transparency in your house maid job in Bangalore.',
    },
    {
        question: 'What if I don’t like the job or it’s too hard?',
        answer: 'No worries. Our team helps you safely switch jobs without any pressure. Your comfort and safety are always our priority in every helper job in Bangalore.',
    },
    {
        question: 'Will I get support after joining?',
        answer: 'Yes! We check in weekly and are always available for any problem or emergency. EzyHelpers provides full guidance throughout your domestic helper job in Bangalore.',
    },
    {
        question: 'Can I choose the family I work with?',
        answer: 'Yes! We arrange a video call with the family, and you only go if you feel comfortable. You have the final choice in finding the right maid job in Bangalore.',
    },
    {
        question: "What if I don't know Kannada or local languages in Bangalore?",
        answer: 'Most families speak Hindi, and our team speaks Hindi too. We ensure you can communicate easily before joining any helper job in Bangalore.',
    },
    {
        question: "How long will I need to stay in the job?",
        answer: 'Most families prefer helpers who stay longer, but you can switch jobs if needed. We ensure transitions are safe and smooth for your career in Bangalore.',
    },
    {
        question: "Can I see the family’s house before joining?",
        answer: 'Yes! If the family is comfortable, they may show you a video tour. Regardless, you will have a video call to talk with them and understand the job details before travelling.',
    }
]

export default function HelperJobsOdishaPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Odisha' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-violet-800 via-violet-500 to-violet-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">Reliable House Helper Jobs in Bangalore for Helpers from Odisha</h1>
                            <p className="text-sm sm:text-base md:text-xl text-violet-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                EzyHelpers connects women from Odisha with safe, high-paying house helper jobs in Bangalore. Work directly with respectful families, get paid on time, and enjoy full support; no agents, no fees, just reliable work you can trust.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe jobs in Bangalore',
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
                                <Link href="/helper-registration" className="bg-white text-violet-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
                                <div className="text-lg md:text-4xl font-bold text-violet-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">Direct Payment</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-violet-600/80">Registration Fees</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Odisha Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We offer multiple types of house helper jobs in Bangalore to match your skills and comfort.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housekeeping Jobs",
                                    desc: "Clean and maintain homes daily, wash dishes and clothes, and keep rooms tidy and organised.",
                                    features: ["Clean and mop the house every day.", "Wash dishes, clothes, and help with laundry.", "Keep rooms and furniture neat.", "Sweep and mop floors properly.", "Manage dusting and bathroom cleaning.", "Live-in or full-time work available."],
                                    href: "/helper-jobs/odisha/housekeeping-job-bangalore"
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare veg and non-veg meals, manage groceries, and maintain a clean kitchen.",
                                    features: ["Cook meals for the family (veg or non-veg).", "Help plan meals and manage groceries.", "Keep the kitchen clean and organised.", "Follow family recipes and preferences.", "Store and manage leftover food safely.", "Live-in or full-time maid job available."],
                                    href: "/helper-jobs/odisha/home-cook-jobs-in-bangalore"
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children, feed them, assist with studies, and maintain safety and hygiene.",
                                    features: ["Take care of the children and feed them.", "Help with homework and play.", "Keep children safe and clean.", "Put the children to sleep at night.", "Keep toys and rooms neat.", "Live-in or full-time work available."],
                                    href: "/helper-jobs/nanny-job-bangalore"
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support seniors with daily routines, provide companionship, and ensure safety at home.",
                                    features: ["Help older people with daily tasks.", "Give companionship and emotional support.", "Help with walking and personal care.", "Give medicines on time daily.", "Cook soft meals for older people.", "Friendly and safe home environment."],
                                    href: "/helper-jobs/odisha/elderly-caretaker-job-bangalore"
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist sick people at home with daily routines, ensuring comfort, hygiene, and safety.",
                                    features: ["Help sick people at home daily.", "Assist with bathroom and eating.", "Make sure they are comfortable and safe.", "Monitor comfort and report issues.", "Follow doctor’s basic instructions.", "Live-in or full-time work available."],
                                    href: "/helper-jobs/odisha/patient-care-job-bangalore"
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband-wife teams manage household chores and maintain home cleanliness with accommodations.",
                                    features: ["Husband-wife jobs for cleaning and housework.", "Help with daily chores and home care.", "Take care of house surroundings.", "Wash dishes, clothes, and help with laundry.", "Sweep and mop floors properly.", "Accommodation provided."],
                                    href: "/helper-jobs/odisha/live-in-housekeeping-couple-job-bangalore"
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Husband-wife pairs guard apartments or houses, monitor visitors, and follow guidance.",
                                    features: ["Husband-wife jobs to guard apartments or houses.", "Keep home and family safe.", "Check people entering or leaving.", "Lock and open gates on time.", "Stay alert and report problems.", "Training and guidance provided."],
                                    href: "/helper-jobs/odisha/couple-security-job-bangalore"
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Care for mother and newborn after delivery, assist with feeding, recovery, and provide live-in support.",
                                    features: ["Take care of the mother and newborn after delivery.", "Help feed and care for the baby.", "Support the mother during recovery.", "Keep baby clothes and the room clean.", "Stay awake at night if needed.", "Live-in with full guidance provided."],
                                    href: "/helper-jobs/odisha/japa-maid-job-bangalore"
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Husband-wife teams maintain farmhouses, gardens, and property safety with live-in accommodation.",
                                    features: ["Keep the farmhouse and garden clean daily.", "Water plants and maintain lawns.", "Monitor visitors and property security.", "Help with basic cooking if needed.", "Care for pets or birds on site.", "Private room with food provided."],
                                    href: "/helper-jobs/odisha/live-in-couple-farmhouse-job-bangalore"
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.href}
                                    className="group bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-violet-700 mb-3 group-hover:text-violet-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-violet-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        Learn More <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Odisha Helpers */}
                <section className="section-padding bg-violet-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Odisha Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Bangalore employers specifically request helpers from Odisha for these qualities:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['Patient and caring', 'Learn quickly and follow instructions', 'Stay longer in jobs', 'Respectful and polite nature'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-violet-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-violet-600" />
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
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Comparison: Why Odisha Workers Trusts EzyHelpers for Helper Jobs in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-violet-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "Take one month’s pay as commission", ezy: "Free sign-up – keep 100% of your earnings" },
                                        { agent: "Only spoken promises can be broken anytime", ezy: "Written contract for salary, leave & work hours" },
                                        { agent: "No help if any issues or problems come up", ezy: "Support team available whenever you need help" },
                                        { agent: "Work rules are often unclear or unfair", ezy: "Clear job expectations from the very first day" },
                                        { agent: "Salary payments may be late or reduced", ezy: "Salary paid directly and on time, with no cuts" },
                                        { agent: "No backup or emergency place to stay", ezy: "Free emergency hostel available for women" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-violet-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-violet-500 font-bold text-xl">✓</span>
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
                                { agent: "Take one month’s pay as commission", ezy: "Free sign-up – keep 100% of your earnings" },
                                { agent: "Only spoken promises can be broken anytime", ezy: "Written contract for salary, leave & work hours" },
                                { agent: "No help if any issues or problems come up", ezy: "Support team available whenever you need help" },
                                { agent: "Work rules are often unclear or unfair", ezy: "Clear job expectations from the very first day" },
                                { agent: "Salary payments may be late or reduced", ezy: "Salary paid directly and on time, with no cuts" },
                                { agent: "No backup or emergency place to stay", ezy: "Free emergency hostel available for women" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-violet-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-violet-50">
                                        <div className="text-xs font-bold text-violet-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Odisha Helpers</h2>
                            <p className="text-sm md:text-lg text-violet-700 font-bold italic mb-8 uppercase tracking-wide">
                                Earn 3x More Than Odisha – With Security, Respect, and Dignity through a helper job in Bangalore
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 depending on your role and past experience.", icon: BanknotesIcon },
                                { title: "Higher Pay than Odisha", desc: "Earn 3x more than jobs in Bhubaneswar, Cuttack, or Rourkela.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary is transferred directly to your bank account on time.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Improve your skills in cooking, care, and housekeeping with us.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs include private/shared room with basic amenities.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three healthy meals are provided daily for all live-in helpers.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One regular day off weekly or two days off monthly.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Safe stay at Nest women's hostel during job changes or crises.", icon: ShieldCheckIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 reward when your referred friend completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-3 text-violet-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-violet-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-violet-100 rounded-full"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-violet-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-violet-700 hover:shadow-lg transition-all"
                            >
                                Apply for Bangalore Jobs Now
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" />

                {/* CTA Section */}
                <section className="section-padding bg-violet-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Join hundreds of helpers from Odisha who found safe and reliable work in Bangalore. Start your journey today!
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-violet-50 font-bold italic opacity-90">
                                Work with respect, earn more, and support your family back home.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                                Common Questions from Odisha Helpers
                            </h2>
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
