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
    title: 'Safe Jobs via House Maid Agency in Bangalore',
    description: 'Find reliable work through a house maid agency in Bangalore. Telangana helpers get safe placements, clear duties, and trusted environments.',
    openGraph: {
        title: 'Safe Jobs via House Maid Agency in Bangalore',
        description: 'Find reliable work through a house maid agency in Bangalore. Telangana helpers get safe placements, clear duties, and trusted environments.',
        url: 'https://www.ezyhelpers.com/helper-jobs/telangana',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/telangana',
    },
}

const faqs: FAQItem[] = [
    {
        question: 'Do I have to pay any agent or fees to get this job?',
        answer: 'No. We do not charge any fees or commission, so you can find work without paying agents and keep your full salary.',
    },
    {
        question: 'Will I get my full salary without any cuts?',
        answer: 'Yes. Salary is paid directly by the family, and there are no deductions from our side at any stage.',
    },
    {
        question: 'Can I talk to the family before joining?',
        answer: 'Yes. We arrange a video call so you can understand the work clearly and decide only after you feel comfortable.',
    },
    {
        question: 'What if the work is different from what was told?',
        answer: 'You can contact us anytime, and we will speak to the family to make sure the agreed work is followed properly.',
    },
    {
        question: 'Is this job safe for women coming from Telangana?',
        answer: 'Yes. We connect you with verified families and stay in touch after placement so you have support whenever needed.',
    },
    {
        question: 'Will I get work according to my skills?',
        answer: 'Yes. Jobs are matched based on your skills like cleaning, cooking, or care work so you can work comfortably.',
    },
    {
        question: 'Why should I choose this instead of local agents?',
        answer: 'With EzyHelpers, you get direct work, clear responsibilities, and ongoing support instead of paying agents who do not help after placement.',
    }
]

export default function HelperJobsTelanganaPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Telangana' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase tracking-tight">House Maid Agency in Bangalore for Telangana Helpers</h1>
                            <p className="text-sm sm:text-base md:text-xl text-indigo-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                In Telangana, many agents take your salary and give you no guarantees after placement. With EzyHelpers, you get a written contract, full salary on time, and real support every single month.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'No agents or middlemen involved',
                                    'No commission or salary cuts',
                                    'Direct payment from the family every month'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-indigo-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Find Work
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Call Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs for Telangana Helpers in Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">We offer multiple job roles based on your skills and comfort level, so you can choose work that suits your experience and daily routine.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Maintain homes daily with proper cleaning, washing, and organising work responsibilities.",
                                    features: [
                                        "Clean and maintain homes daily.",
                                        "Wash dishes, clothes, and linen.",
                                        "Keep rooms neat and properly organised.",
                                        "Sweep and mop floors carefully.",
                                        "Handle dusting and bathroom cleaning.",
                                        "Live-in or full-time house maid job in Bangalore available."
                                    ]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare daily meals, manage groceries, and maintain hygiene inside the kitchen space.",
                                    features: [
                                        "Cook meals for the household daily.",
                                        "Support grocery planning and budgeting.",
                                        "Keep kitchen surfaces and utensils clean.",
                                        "Follow family taste and preferences.",
                                        "Store leftover food properly and safely.",
                                        "Live-in or full-time job option available."
                                    ]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children and maintain their daily routine with safety and attention.",
                                    features: [
                                        "Feed children on time every day.",
                                        "Assist with homework and activities.",
                                        "Bathe and dress children carefully.",
                                        "Help children sleep on time daily.",
                                        "Keep toys and rooms organised.",
                                        "Live-in or full-time house jobs in Bangalore."
                                    ]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support elderly people with daily routines, safety, and companionship, where responsibilities are clearly discussed with the family beforehand.",
                                    features: [
                                        "Help seniors walk and bathe safely.",
                                        "Give medicines on time regularly.",
                                        "Talk and spend time with them.",
                                        "Cook simple food for elderly people.",
                                        "Ensure safety inside the home.",
                                        "Provide emotional support daily."
                                    ]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist patients at home with daily routines, hygiene, and comfort based on basic instructions shared before joining.",
                                    features: [
                                        "Support patients with daily routines.",
                                        "Help with eating and bathroom needs.",
                                        "Change bedsheets and maintain cleanliness.",
                                        "Monitor health and comfort regularly.",
                                        "Follow basic medical instructions.",
                                        "Live-in or full-time house maid job in Bangalore."
                                    ]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Couples manage household responsibilities together with proper stay arrangements provided by the family.",
                                    features: [
                                        "Husband and wife manage household work.",
                                        "Clean rooms, kitchen, and surroundings.",
                                        "Support laundry and waste handling.",
                                        "Take care of pets if required.",
                                        "Separate accommodation is provided.",
                                        "Both can earn safely in this role."
                                    ]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Couples handle basic security responsibilities in homes or apartments with clear duties assigned.",
                                    features: [
                                        "Guard apartments or homes together.",
                                        "Monitor visitors during the day and night.",
                                        "Open and close gates on time.",
                                        "Follow given security instructions.",
                                        "Stay alert and report any issues.",
                                        "Accommodation provided for both partners."
                                    ]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Care for mother and newborn after delivery with proper support and hygiene.",
                                    features: [
                                        "Take care of mother and baby.",
                                        "Assist with feeding and burping support.",
                                        "Support the mother’s rest and recovery.",
                                        "Keep baby items and the room clean.",
                                        "Stay awake during the night if needed.",
                                        "Live-in with family support available."
                                    ]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Manage farmhouse and outdoor responsibilities with food and stay provided.",
                                    features: [
                                        "Maintain the farmhouse and garden daily.",
                                        "Water plants and care for lawns.",
                                        "Support basic cooking when needed.",
                                        "Monitor visitors and property safety.",
                                        "Take care of pets or birds.",
                                        "Private room and food provided."
                                    ]
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
                                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-indigo-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10 cursor-pointer">
                                        Learn More <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Telangana Helpers H2 */}
                <section className="section-padding bg-indigo-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Telangana Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families in Bangalore choose helpers from Telangana for these reasons:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    'Respectful and soft-spoken nature',
                                    'Strong sense of responsibility',
                                    'Adjust quickly to new homes',
                                    'Follow instructions and routines properly',
                                    'Stay consistent in long-term work, which builds trust with families'
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

                {/* Comparison Section H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom shadow-2xl rounded-3xl p-4 md:p-12 border border-indigo-50">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Is Different From Local Agents</h2>
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Comparison: Why Telangana Workers Trust EzyHelpers for House Maid Jobs in Bangalore</p>
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
                                        { agent: "They take your first month's salary as commission", ezy: "Free to join with no commission so you keep your full earnings" },
                                        { agent: "No written proof for job promises or conditions", ezy: "Written agreement for clarity before joining" },
                                        { agent: "They stop answering calls after placement", ezy: "Direct salary from family without a middleman's involvement" },
                                        { agent: "Work duties change after you join the job", ezy: "You know the job details before joining" },
                                        { agent: "Salary gets delayed or reduced without reason", ezy: "Support team available even after placement" },
                                        { agent: "No help during emergencies or job issues", ezy: "Help provided if you need to change jobs or face any issues" }
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
                                { agent: "They take your first month's salary as commission", ezy: "Free to join with no commission so you keep your full earnings" },
                                { agent: "No written proof for job promises or conditions", ezy: "Written agreement for clarity before joining" },
                                { agent: "They stop answering calls after placement", ezy: "Direct salary from family without a middleman's involvement" },
                                { agent: "Work duties change after you join the job", ezy: "You know the job details before joining" },
                                { agent: "Salary gets delayed or reduced without reason", ezy: "Support team available even after placement" },
                                { agent: "No help during emergencies or job issues", ezy: "Help provided if you need to change jobs or face any issues" }
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

                {/* Salary Section H2 */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits for Telangana Helpers</h2>
                            <p className="text-base md:text-xl text-indigo-700 font-bold uppercase tracking-wide max-w-2xl mx-auto">Build a stable future with dignity, safety, and respect through a house maid agency in Bangalore</p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on role and experience.", icon: BanknotesIcon },
                                { title: "Better Opportunities", desc: "Improved lifestyle compared to Hyderabad, Warangal, and Karimnagar jobs.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Salary is credited directly to your bank account.", icon: CheckCircleIcon },
                                { title: "Skill Development", desc: "Training provided for cleaning, cooking, and care work.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "24-Hour stay-at-home jobs include a room with a bed or a mattress.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Three daily meals are provided by the family.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "One weekly off for Full-time and two monthly offs for Live-in available.", icon: ClockIcon },
                                { title: "Emergency Support", desc: "Safe stay available during job transitions at our Womens Hostel in Bangalore.", icon: ShieldCheckIcon },
                                { title: "Referral Bonus", desc: "₹500 reward if you refer a person to work at EzyHelpers.", icon: UserPlusIcon }
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

                {/* How It Works H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Register online or call us easily for a house maid job in Bangalore.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Share your experience, job type and preferences." },
                                    { step: 2, title: "We connect you with suitable families." },
                                    { step: 3, title: "Attend a video call with the employer." },
                                    { step: 4, title: "Confirm the job and travel safely." },
                                    { step: 5, title: "Start working with full support." },
                                    { step: 6, title: "Start Today" }
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
                                Find Work
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all shadow-sm"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" strokeWidth={3} /> Call Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="indigo" location="Telangana" />

                {/* CTA Section */}
                <section className="section-padding bg-indigo-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Stop managing unstable work in Telangana. Start your journey with a house maid agency in Bangalore offering safety, respect, and better opportunities. Apply today and move towards a stronger future.
                            </h2>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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

                {/* FAQs H2 */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 p-6 border-indigo-50">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-xl mx-auto">
                                FAQ
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
