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
    BanknotesIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'House maid job in Bangalore with High Salary- Apply Now',
    description: 'House maid job in Bangalore with trusted families, safe stay, skill growth, and full support. Start a secure and respectful work life today.',
    openGraph: {
        title: 'House maid job in Bangalore with High Salary- Apply Now',
        description: 'House maid job in Bangalore with trusted families, safe stay, skill growth, and full support. Start a secure and respectful work life today.',
        url: 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/uttarpradesh'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Are house cleaning jobs in Bangalore suitable for beginners?',
        answer: 'Yes! We provide guidance, training, and support for beginners. Verified families and clear agreements ensure you gain experience, improve skills, and earn a steady income with confidence.',
    },
    {
        question: 'How does EzyHelpers ensure trust in helper jobs in Bangalore?',
        answer: 'We verify all families, provide written agreements, direct salary transfer, emergency assistance, and continuous support. Helpers can work safely, knowing they are protected and valued.',
    },
    {
        question: 'Can I choose my work preference in Bangalore helper jobs?',
        answer: 'Yes! You can choose housekeeping, cooking, nanny, elderly care, patient care, or live-in couple jobs. Our team matches your skills with suitable families to ensure comfort and confidence.',
    },
    {
        question: 'What types of house maid jobs in Bangalore are available?',
        answer: 'We offer live-in, live-out, full-time, part-time, and couple jobs in Bangalore. You can pick the work type that fits your skills and comfort, with guidance at every step for a safe and confident start.',
    },
    {
        question: 'Do I need prior experience for home helper jobs in Bangalore?',
        answer: 'Not always! We place both experienced and new helpers. We match your skills to a suitable job and provide guidance so you gain confidence and succeed quickly.',
    }
]

export default function HelperJobsUPPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Uttar Pradesh' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-amber-800 via-amber-500 to-amber-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">House Maid Job in Bangalore for Uttar Pradesh Helpers</h1>
                            <p className="text-sm sm:text-base md:text-xl text-amber-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Stop trusting local agents who cheat you after taking your money. Start your journey with EzyHelpers for a secure house maid job in Bangalore. We provide a written agreement before joining. Your safety and salary are guaranteed.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good for You</p>
                            
                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe jobs in Bangalore', 
                                    'Employer Pays Directly', 
                                    'Written Agreement', 
                                    'Free Training', 
                                    'Respectful Environment'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-amber-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
                                <div className="text-lg md:text-4xl font-bold text-amber-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Helpers Working</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Job Categories</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Direct Salary</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-amber-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">Registration Fee</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Uttar Pradesh Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">We offer different types of jobs depending on your skills, experience, and comfort level. You can choose the type of work you prefer.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housekeeping Jobs",
                                    desc: "Keep homes clean, organised, and comfortable for the family.",
                                    features: ["Clean rooms, kitchen, and living areas daily", "Wash utensils, clothes, and bedsheets", "Sweep and mop floors", "Clean bathrooms and maintain hygiene", "Organise household items", "Live-in and full-time options available"]
                                },
                                {
                                    title: "Home Cooking Jobs",
                                    desc: "Assist families with daily kitchen tasks and meal preparation.",
                                    features: ["Cook simple vegetarian and non-vegetarian meals", "Prepare ingredients and manage groceries", "Clean kitchen utensils and counters", "Follow the family’s food habits and preferences", "Store cooked food safely", "Live-in and full-time jobs available"]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children with patience and attention.",
                                    features: ["Feed children and maintain routine", "Help with homework and playtime", "Ensure hygiene and cleanliness", "Put children to sleep safely", "Keep toys, clothes, and the room organised", "Live-in and full-time options available"]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support senior citizens with their daily needs and comfort.",
                                    features: ["Help with bathing, dressing, mobility", "Give medicines on time as instructed", "Prepare simple, nutritious meals", "Ensure a clean, safe, environment", "Monitor health and report concerns", "Provide companionship and support"]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Help patients with daily activities and recovery at home.",
                                    features: ["Assist with eating and moving safely", "Help with personal hygiene and bathroom", "Maintain bed, clothes, surroundings", "Monitor comfort and report issues", "Follow instructions from family/doctors", "Live-in and full-time options available"]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband and wife can manage household responsibilities together.",
                                    features: ["Handle cleaning and daily chores", "Take care of laundry and waste", "Keep the home organised", "Stay together in provided accommodation", "Long-term and stable work"]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Manage the safety and security of homes or buildings together.",
                                    features: ["Monitor visitors and entry points", "Open and close gates on schedule", "Stay alert during day and night shifts", "Report unusual activity", "Follow safety instructions", "Accommodation provided for both"]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Support a mother and newborn after delivery.",
                                    features: ["Help mother during recovery", "Assist with baby feeding and hygiene", "Care for baby’s sleep and cleanliness", "Night duties if required", "Work closely with family", "Live-in with full care provided"]
                                },
                                {
                                    title: "Live-in Couple for Farmhouse Jobs",
                                    desc: "Manage the farmhouse property together.",
                                    features: ["Clean the house and surrounding areas", "Water plants and maintain gardens", "Assist with basic cooking if needed", "Monitor property safety", "Help with animals if present", "Private room and meals provided"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-amber-700 mb-3 group-hover:text-amber-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-amber-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        [Learn More] <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer UP Helpers */}
                <section className="section-padding bg-amber-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Helpers from Uttar Pradesh</h2>
                        </div>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Hardworking & Dedicated", desc: "Your consistent effort and dedication make families trust you." },
                                { title: "Honest & Trustworthy", desc: "You handle household responsibilities carefully and reliably." },
                                { title: "Quick Learner", desc: "You can pick up new tasks and follow instructions easily." },
                                { title: "Long-Term Commitment", desc: "You are willing to stay and build a stable relationship." }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-200 flex flex-col items-center text-center group hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4 text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-all">
                                        <CheckCircleIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">Why EzyHelpers Is Different From Local Agents</h2>
                            <p className="text-sm md:text-xl text-gray-600 font-bold uppercase tracking-widest italic">Comparison: Why Uttar Pradesh Helpers Trusts EzyHelpers for House Maid job in Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-amber-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents (The Problem)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers (The Solution)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They take a part of your salary as commission", ezy: "Free registration – earn 100% of your salary" },
                                        { agent: "No written proof of promises or work terms", ezy: "Written agreement protects your rights" },
                                        { agent: "They stop responding when you need help", ezy: "Support team answers every call promptly" },
                                        { agent: "Work or salary terms can change after joining", ezy: "Clear job details before you start" },
                                        { agent: "Salary may be delayed or reduced", ezy: "Salary paid directly by the family on time" },
                                        { agent: "No safe place is provided in emergencies", ezy: "Safe emergency accommodation available" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-amber-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-amber-500 font-bold text-xl">✓</span>
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
                                { agent: "They take a part of your salary as commission", ezy: "Free registration – earn 100% of your salary" },
                                { agent: "No written proof of promises or work terms", ezy: "Written agreement protects your rights" },
                                { agent: "They stop responding when you need help", ezy: "Support team answers every call promptly" },
                                { agent: "Work or salary terms can change after joining", ezy: "Clear job details before you start" },
                                { agent: "Salary may be delayed or reduced", ezy: "Salary paid directly by the family on time" },
                                { agent: "No safe place is provided in emergencies", ezy: "Safe emergency accommodation available" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-amber-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ Local Agent (The Problem)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-amber-50">
                                        <div className="text-xs font-bold text-amber-600 mb-1">✅ EzyHelpers (The Solution)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Uttar Pradesh Helpers</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 depending on work type and experience.", icon: BanknotesIcon },
                                { title: "Higher Income than UP", desc: "Earn much more than in Lucknow, Kanpur, Varanasi, etc.", icon: StarIcon },
                                { title: "Direct Salary Payment", desc: "Salary paid directly to your bank account every month.", icon: CheckCircleIcon },
                                { title: "Skill Development", desc: "Improve skills and increase earning potential over time.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs provide private/shared room with basic facilities.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three meals daily provided for live-in jobs.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "Weekly or monthly rest days depending on job type.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Get help if any problems arise during your job.", icon: PhoneIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 by referring someone who completes one month.", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-amber-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-3 text-amber-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-amber-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Register easily by calling us or applying online.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Register online or call us." },
                                    { step: 2, title: "Share your skills and job preferences." },
                                    { step: 3, title: "Get matched with a family." },
                                    { step: 4, title: "Attend a video call with the employer." },
                                    { step: 5, title: "Confirm the job for you." },
                                    { step: 6, title: "Travel safely to Bangalore." },
                                    { step: 7, title: "Start your job with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-amber-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-amber-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-amber-700 hover:shadow-lg transition-all"
                            >
                                Apply for Jobs in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-amber-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-amber-600 hover:bg-amber-50 transition-all"
                            >
                                Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="amber" />

                {/* CTA Section */}
                <section className="section-padding bg-amber-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Do not continue working for low wages in Uttar Pradesh. Move to Bangalore, where you can earn more, live safely, and build a better future. Apply today!
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-amber-50 font-bold italic opacity-90">
                                Take the first step towards a stable life for yourself and your family.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-amber-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                                Common Questions from Uttar Pradesh Helpers
                            </h2>
                            <div className="w-32 h-1 bg-amber-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
