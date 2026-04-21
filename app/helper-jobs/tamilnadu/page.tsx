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
    title: 'Trusted Live-in Maid Agency Bangalore for Helpers',
    description: 'Find reliable work through a live-in maid agency in Bangalore. Tamil Nadu helpers receive safe homes, fair treatment, and long-term stability without fear of cheating.',
    openGraph: {
        title: 'Trusted Live-in Maid Agency Bangalore for Helpers',
        description: 'Find reliable work through a live-in maid agency in Bangalore. Tamil Nadu helpers receive safe homes, fair treatment, and long-term stability without fear of cheating.',
        url: 'https://www.ezyhelpers.com/helper-jobs/tamilnadu',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/tamilnadu',
    },
}

const faqs: FAQItem[] = [
    {
        question: 'Is registration free for helpers?',
        answer: 'Yes, registration is completely free. You do not need to pay any money to join or get job support from our live-in maid agency in Bangalore without any risk.',
    },
    {
        question: 'Can I talk to family before joining?',
        answer: 'Yes, you can speak to the family through a video call before confirming your maid job in Bangalore, so you feel safe and confident.',
    },
    {
        question: 'What documents are needed?',
        answer: 'Basic ID proof and Aadhaar are enough. You can send details online easily without visiting the office physically.',
    },
    {
        question: 'Will I get proper food daily?',
        answer: 'Yes, families provide daily meals for live-in helpers. Food is clean, simple, and suitable for your daily comfort and health.',
    },
    {
        question: 'Is the salary given on time?',
        answer: 'Families transfer salary directly to your account before the 10th of every month without delay or deduction in your maid job in Bangalore.',
    }
]

export default function HelperJobsTamilNaduPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Tamil Nadu' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-violet-900 via-violet-600 to-violet-800 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase tracking-tight">Live-in Maid Agency Bangalore for Tamil Nadu Helpers</h1>
                            <p className="text-sm sm:text-base md:text-xl text-violet-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Worried about cheating or wrong jobs. Our live-in maid agency in Bangalore ensures Tamil Nadu helpers get clear work details, safe homes, and full support before and after joining.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Safe maid job in Bangalore without risk',
                                    'Family gives the salary directly on time',
                                    'Clear written agreement for your safety',
                                    'Free skill learning for a better future work'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-violet-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Maid Job in Bangalore
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Call Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Helper Jobs for Tamil Nadu Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-medium lowercase first-letter:uppercase">We provide many types of daily household work in Bangalore to match your daily work experience and comfort level without confusion or risk.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Take care of homes daily, and manage domestic helper work in Bangalore properly with care and full responsibility always.",
                                    features: [
                                        "Clean and maintain homes daily.",
                                        "Wash vessels, clothes, and bedsheets carefully.",
                                        "Keep rooms neat and properly arranged always.",
                                        "Sweep and mop floors daily.",
                                        "Handle dusting and toilet cleaning work.",
                                        "Live-in or full-time maid job available in Bangalore."
                                    ]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare daily meals, and keep the kitchen clean and well organised.",
                                    features: [
                                        "Cook meals for the family daily.",
                                        "Support grocery planning and buying regularly.",
                                        "Keep the kitchen area clean and organised always.",
                                        "Follow simple home-style cooking methods.",
                                        "Store extra food safely without waste.",
                                        "Live-in or full-time job available."
                                    ]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Care for children properly, and maintain cleanliness, safety, and comfort at all times with patience and attention.",
                                    features: [
                                        "Feed children on time daily without delay.",
                                        "Help with studies and playtime activities.",
                                        "Bathe and dress children safely always.",
                                        "Make children sleep on time daily.",
                                        "Keep toys and rooms clean and safe.",
                                        "Live-in or full-time household care jobs in Bangalore."
                                    ]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Assist older people with daily needs, give comfort, and provide emotional support with patience and kindness.",
                                    features: [
                                        "Help seniors walk and bathe safely.",
                                        "Give medicines on time daily without fail.",
                                        "Talk and support them emotionally always.",
                                        "Cook simple soft meals daily properly.",
                                        "Ensure safe home environment always.",
                                        "Provide care and companionship daily."
                                    ]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Support sick people at home and maintain hygiene, comfort, and safety during their recovery time without neglect or delay.",
                                    features: [
                                        "Help patients with their daily routine properly.",
                                        "Assist with toilet and meals carefully.",
                                        "Change bedsheets and clean the area regularly.",
                                        "Check comfort and address issues immediately.",
                                        "Follow basic doctor instructions carefully.",
                                        "Live-in or full-time caretaker work in Bangalore."
                                    ]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Husband and wife work together to manage home tasks properly and maintain cleanliness with responsibility and trust always.",
                                    features: [
                                        "Couple manages the full household work together.",
                                        "Clean rooms, kitchen, and surroundings daily.",
                                        "Support laundry and waste disposal work.",
                                        "Help with pet care if required.",
                                        "Separate room is provided for both.",
                                        "Both earn safely in this maid job in Bangalore."
                                    ]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Husband and wife manage property safety and monitor daily activity with responsibility and alertness always.",
                                    features: [
                                        "Guard homes or buildings together safely.",
                                        "Watch visitors day and night properly.",
                                        "Open and close gates on time daily.",
                                        "Follow basic security instructions carefully.",
                                        "Stay alert and report issues immediately.",
                                        "Accommodation provided for both."
                                    ]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Support the mother and newborn with care, hygiene, and rest after delivery with full attention and patience always.",
                                    features: [
                                        "Care for the mother and the baby properly.",
                                        "Help with feeding and burping daily.",
                                        "Support mother's recovery process daily.",
                                        "Keep baby items clean and safe.",
                                        "Stay awake at night if needed.",
                                        "Live-in job with full family support."
                                    ]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples manage farmhouse work, cleaning, and property care with responsibility and regular maintenance properly.",
                                    features: [
                                        "Maintain the farmhouse's daily cleaning work.",
                                        "Water plants and the garden regularly.",
                                        "Help with simple cooking tasks daily.",
                                        "Watch visitors and property safety carefully.",
                                        "Care for animals if needed.",
                                        "Room and food provided."
                                    ]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
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
                                    <div className="mt-6 font-bold text-violet-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10 cursor-pointer">
                                        Learn More <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Tamil Nadu Helpers H2 */}
                <section className="section-padding bg-violet-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Tamil Nadu Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families choose helpers from Tamil Nadu for these maid jobs in Bangalore for these strong and trusted reasons:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    'Honest and sincere workers by nature always',
                                    'Clean and disciplined daily habits maintained',
                                    'Respectful and polite speaking nature always',
                                    'Strong commitment to daily work responsibility'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-violet-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-violet-600" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 uppercase tracking-tight leading-none">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom shadow-2xl rounded-3xl p-4 md:p-12 border border-violet-50">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Is Different From Local Agents</h2>
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Comparison: Why Tamil Nadu Helpers Trusts EzyHelpers for Live-in Maid Agency Bangalore</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-violet-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ Local Agents (The Problem)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ EzyHelpers (The Solution)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "They take a large commission before job confirmation", ezy: "Free registration for all helpers without any hidden charges" },
                                        { agent: "No written job confirmation is given for your safety", ezy: "A written agreement is provided for full safety and clarity" },
                                        { agent: "They disappear after job placement is completed", ezy: "Support team is always available for help and guidance" },
                                        { agent: "Work details change after you join the job unexpectedly", ezy: "Clear job details are shared before you join the job" },
                                        { agent: "Salary issues and delays are very common everywhere", ezy: "Salary is given directly by the family on time" },
                                        { agent: "No support during emergencies or job changes", ezy: "Free safe stay is available for women helpers in emergencies" }
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
                                { agent: "They take a large commission before job confirmation", ezy: "Free registration for all helpers without any hidden charges" },
                                { agent: "No written job confirmation is given for your safety", ezy: "A written agreement is provided for full safety and clarity" },
                                { agent: "They disappear after job placement is completed", ezy: "Support team is always available for help and guidance" },
                                { agent: "Work details change after you join the job unexpectedly", ezy: "Clear job details are shared before you join the job" },
                                { agent: "Salary issues and delays are very common everywhere", ezy: "Salary is given directly by the family on time" },
                                { agent: "No support during emergencies or job changes", ezy: "Free safe stay is available for women helpers in emergencies" }
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

                {/* Salary Section H2 */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Tamil Nadu Helpers</h2>
                            <p className="text-base md:text-xl text-violet-700 font-bold uppercase tracking-wide max-w-2xl mx-auto">Earn a Better Life With Respect, Safety, and Stability through a live-in maid agency in Bangalore</p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on your role, skills, and past experience level.", icon: BanknotesIcon },
                                { title: "Better Than Local", desc: "Higher income compared to Chennai, Madurai, or Salem local jobs.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary comes directly to your bank account safely without delay.", icon: CheckCircleIcon },
                                { title: "Skill Growth", desc: "Training support is given for cooking, cleaning, and care work improvement.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs include room, bedding, and basic living facilities.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Daily fresh meals are provided by the family members regularly.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One weekly off or two monthly offs are provided based on agreement.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Free safe hostel is available during job change or emergency situations.", icon: ShieldCheckIcon },
                                { title: "Referral Bonus", desc: "₹500 when your referred friend completes one full month of work.", icon: UserPlusIcon }
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

                {/* How It Works H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium lowercase first-letter:uppercase">Register online or call for your maid job in Bangalore.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-violet-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Share your skills and job needs clearly." },
                                    { step: 2, title: "We connect you with suitable families." },
                                    { step: 3, title: "Attend a video call with the employer." },
                                    { step: 4, title: "Confirm the job and travel safely to Bangalore." },
                                    { step: 5, title: "Start work with full support from the team." },
                                    { step: 6, title: "Apply for Maid Job in Bangalore" }
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
                                Apply for Maid Job in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all shadow-sm"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" strokeWidth={3} /> Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" location="Tamil Nadu" />

                {/* CTA Section */}
                <section className="section-padding bg-violet-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Stop struggling in local jobs. Start working with a live-in maid agency in Bangalore with safe homes, respectful families, and full support for your future without fear. Apply today and move forward in life confidently.
                            </h2>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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

                {/* FAQs H2 */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 p-6 border-violet-50">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-2xl mx-auto">
                                FAQ - Live-in Maid Agency Bangalore for Tamil Nadu Helpers
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
