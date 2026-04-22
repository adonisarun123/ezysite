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
    title: 'Maid Agency in Bangalore: Safe Work for Kolkata Helpers',
    description: 'Apply through a maid agency in Bangalore for safe homes, fixed duties, and direct salary. Kolkata helpers get trusted placements and full support.',
    openGraph: {
        title: 'Maid Agency in Bangalore: Safe Work for Kolkata Helpers',
        description: 'Apply through a maid agency in Bangalore for safe homes, fixed duties, and direct salary. Kolkata helpers get trusted placements and full support.',
        url: 'https://www.ezyhelpers.com/helper-jobs/kolkata',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/kolkata',
    },
}

const faqs: FAQItem[] = [
    {
        question: 'How will I receive my salary?',
        answer: 'Your salary is paid directly by the family into your bank account every month. There are no cuts, no delays, and no involvement of any agent in your payment process.',
    },
    {
        question: 'Can work duties change after joining?',
        answer: 'No. Your duties are clearly mentioned in the agreement before joining. If the family asks for extra work outside the agreement, you can inform us, and we will handle the situation.',
    },
    {
        question: 'Will I get a proper place to stay?',
        answer: 'Yes. For live-in jobs, families provide a safe and comfortable space for you. You will have a place to sleep and access to basic facilities like a bathroom.',
    },
    {
        question: 'Is registration completely free?',
        answer: 'Yes. There are no registration charges. You do not have to pay anything to join or get a job through EzyHelpers.',
    },
    {
        question: 'Can I choose the type of job I want?',
        answer: 'Yes. You can choose based on your skills and comfort, whether it is cleaning, cooking, childcare, or elderly care.',
    },
    {
        question: 'Do I get weekly leave?',
        answer: 'Yes. You get one weekly off, or two monthly offs, depending on the job category, live-in or full-time.',
    },
    {
        question: 'Is the work routine fixed daily?',
        answer: 'Yes. Your daily work routine is explained clearly before joining, so there is no confusion later.',
    }
]

export default function HelperJobsKolkataPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Kolkata' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-sky-900 via-sky-600 to-sky-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase tracking-tight">Trusted Maid Agency in Bangalore for Helpers from Kolkata</h1>
                            <p className="text-sm sm:text-base md:text-xl text-sky-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                You work hard but still feel unsure about jobs and people. Here, you don’t have to worry. Get safe homes, clear work, and someone who supports you at every step.
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">Why This Job Is Good For You</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Get full salary directly without any cuts',
                                    'Clear written work with no duty changes',
                                    'Stay in respectful homes that value you'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-sky-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for House Helper Jobs
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Jobs For Kolkata Helpers In Bangalore</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">Don’t stay stuck in uncertain or low-trust work. We provide different types of house helper jobs in Bangalore based on your experience, comfort, and the type of daily work you prefer.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Housemaid Jobs in Bangalore",
                                    desc: "Handle daily household cleaning work with fixed duties and a clear routine in organised homes.",
                                    features: [
                                        "Clean and maintain homes daily",
                                        "Wash utensils, clothes, and bedsheets",
                                        "Keep rooms neat and organised every day",
                                        "Sweep and mop floors regularly",
                                        "Handle dusting and bathroom cleaning work",
                                        "Live-in or full-time house cleaning jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Cooking / Kitchen Helper Jobs",
                                    desc: "Prepare daily meals and manage kitchen work in homes that follow regular cooking routines.",
                                    features: [
                                        "Cook meals for the family daily with care",
                                        "Help manage groceries and kitchen requirements",
                                        "Keep kitchen space clean and organised always",
                                        "Follow food habits and preferences properly",
                                        "Store food safely after cooking daily",
                                        "Live-in or full-time jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Nanny / Babysitter Jobs",
                                    desc: "Take care of children’s daily needs, including food, hygiene, and routine activities at home.",
                                    features: [
                                        "Feed children properly on time daily",
                                        "Help with homework and play activities",
                                        "Bathe and dress children safely always",
                                        "Help children sleep comfortably at night",
                                        "Keep toys and rooms clean daily",
                                        "Live-in or full-time care jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Elderly Care Jobs",
                                    desc: "Support elderly people with daily activities, health routines, and basic home care assistance.",
                                    features: [
                                        "Help the elderly walk and bathe safely",
                                        "Give medicines on time every day",
                                        "Talk and provide emotional support always",
                                        "Cook simple and soft meals daily",
                                        "Maintain safety inside the home always",
                                        "Provide care and companionship support daily"
                                    ]
                                },
                                {
                                    title: "Patient Care Jobs",
                                    desc: "Assist patients with daily care, hygiene, and comfort under simple home care guidance.",
                                    features: [
                                        "Help patients with daily activities at home",
                                        "Assist with eating and bathroom needs",
                                        "Change bedsheets and maintain cleanliness daily",
                                        "Observe comfort and inform of any issues",
                                        "Follow the basic instructions given by the doctor",
                                        "Live-in or full-time jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Live-in Housekeeping Couple Jobs",
                                    desc: "Couples manage complete household work together with shared responsibilities and stay supported.",
                                    features: [
                                        "Husband and wife manage house work together",
                                        "Clean rooms, kitchen, and outside areas",
                                        "Help with laundry and waste handling",
                                        "Take care of pets if required",
                                        "Stay arrangement provided for both",
                                        "Both earn together in couple jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Couple Security Jobs",
                                    desc: "Couples handle basic security duties like monitoring entry, gates, and visitor movement.",
                                    features: [
                                        "Guard homes and buildings together daily",
                                        "Monitor visitors during the day and night",
                                        "Open and close gates on time",
                                        "Follow instructions given during training",
                                        "Stay alert and report issues quickly",
                                        "Accommodation provided for both workers"
                                    ]
                                },
                                {
                                    title: "Japa Maid Jobs",
                                    desc: "Provide care for newborn babies and mothers during the recovery period after delivery.",
                                    features: [
                                        "Care for mother and newborn baby",
                                        "Help with feeding and baby care",
                                        "Support the mother’s rest and recovery properly",
                                        "Maintain baby clothes and room cleanliness",
                                        "Stay awake during the night when needed",
                                        "Live-in Japa jobs in Bangalore"
                                    ]
                                },
                                {
                                    title: "Live-in Couple For Farmhouse Jobs",
                                    desc: "Couples take care of farmhouse maintenance, garden work, and basic property supervision.",
                                    features: [
                                        "Maintain the farmhouse and garden daily",
                                        "Water plants and manage outdoor areas",
                                        "Help with cooking when required",
                                        "Watch visitors and property safety",
                                        "Care for animals or pets",
                                        "Stay and food provided at the location"
                                    ]
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
                                                <CheckCircleIcon className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-sky-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10 cursor-pointer">
                                        Learn More <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Kolkata Helpers H2 */}
                <section className="section-padding bg-sky-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">Why Bangalore Families Prefer Kolkata Helpers</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">Families in Bangalore prefer helpers from Kolkata for house helper jobs in Bangalore because they bring consistency, calm behaviour, and sincere work habits.</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    'Calm and respectful nature in daily work',
                                    'Strong cleanliness and hygiene habits',
                                    'Soft communication and polite behaviour',
                                    'Honest approach and dedication to work'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-sky-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-sky-600" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 uppercase tracking-tight leading-none">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom shadow-2xl rounded-3xl p-4 md:p-12 border border-sky-50">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Is Different From Local Agents</h2>
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Choosing the right platform matters. Kolkata helpers face fake promises, changing work, and no support with agents.</p>
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
                                        { agent: "Take your first salary or large commission without a guarantee", ezy: "No registration charges, so you keep your full earnings" },
                                        { agent: "Give false promises without any written proof or clarity", ezy: "Written agreement so your work and salary stay protected" },
                                        { agent: "Stop answering calls after you join the job", ezy: "Dedicated support team always available when you need help" },
                                        { agent: "Change work duties after you start working", ezy: "Clear job details are explained before you join any work" },
                                        { agent: "Delay your salary or make unfair deductions", ezy: "Salary is paid directly by the family without any cuts" },
                                        { agent: "Send you to unknown homes without proper verification", ezy: "Families are verified to ensure safe and respectful homes" },
                                        { agent: "Do not help if you face problems or feel unsafe", ezy: "Help available if you want to change jobs safely" },
                                        { agent: "No support during emergencies or job change", ezy: "Emergency support and safe stay available for women helpers" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium text-sm md:text-base">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-sky-50 font-bold text-sm md:text-base">
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
                                { agent: "Take your first salary or large commission without a guarantee", ezy: "No registration charges, so you keep your full earnings" },
                                { agent: "Give false promises without any written proof or clarity", ezy: "Written agreement so your work and salary stay protected" },
                                { agent: "Stop answering calls after you join the job", ezy: "Dedicated support team always available when you need help" },
                                { agent: "Change work duties after you start working", ezy: "Clear job details are explained before you join any work" },
                                { agent: "Delay your salary or make unfair deductions", ezy: "Salary is paid directly by the family without any cuts" },
                                { agent: "Send you to unknown homes without proper verification", ezy: "Families are verified to ensure safe and respectful homes" },
                                { agent: "Do not help if you face problems or feel unsafe", ezy: "Help available if you want to change jobs safely" },
                                { agent: "No support during emergencies or job change", ezy: "Emergency support and safe stay available for women helpers" }
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

                {/* Salary Section H2 */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Salary & Benefits For Kolkata Helpers</h2>
                            <p className="text-base md:text-xl text-sky-700 font-bold uppercase tracking-wide max-w-2xl mx-auto">Stop worrying! With EzyHelpers, you get not just a job, but a stable and secure work life.</p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "Monthly Salary", desc: "₹20,000–₹35,000 based on your experience, role, and type of work.", icon: BanknotesIcon },
                                { title: "Better Opportunities", desc: "Work in stable homes with regular work and less uncertainty compared to local jobs.", icon: StarIcon },
                                { title: "Direct Payment", desc: "Receive your full salary directly in your bank account without cuts or delays.", icon: CheckCircleIcon },
                                { title: "Skill Support", desc: "Get basic training to improve your cleaning, cooking, or care skills over time.", icon: BriefcaseIcon },
                                { title: "Accommodation", desc: "Live-in jobs provide a safe and comfortable place to stay with basic privacy.", icon: ShieldCheckIcon },
                                { title: "Food", desc: "Families provide daily meals for Live-in jobs, so you do not have to worry about food.", icon: HeartIcon },
                                { title: "Weekly Off", desc: "Get one weekly off for Full-time or two monthly offs for Live-in for proper rest.", icon: ClockIcon },
                                { title: "Job Stability", desc: "Work with families who prefer long-term helpers for a steady income.", icon: StarIcon },
                                { title: "Emergency Support", desc: "Get help and safe support if you face any issues or need to change jobs.", icon: ShieldCheckIcon },
                                { title: "Respect & Safety", desc: "You are placed in homes where helpers are treated with respect and care.", icon: HeartIcon },
                                { title: "Referral Bonus", desc: "Earn ₹500 when your referred person completes one month of work.", icon: UserPlusIcon }
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

                {/* How It Works H2 */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How It Works</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Register online or call for a maid job in Bangalore easily.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-sky-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "Share your skills and job needs clearly." },
                                    { step: 2, title: "We connect you with suitable families." },
                                    { step: 3, title: "Attend a video call with your employer." },
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
                                Apply for Maid Job in Bangalore
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-sky-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-sky-600 hover:bg-sky-50 transition-all shadow-sm"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" strokeWidth={3} /> Call Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="sky" location="Kolkata" />

                {/* CTA Section */}
                <section className="section-padding bg-sky-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-semibold text-white mb-10 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                Stop struggling in local jobs. Start working with a live-in maid agency in Bangalore with safe homes, respectful families, and full support for your future. Apply today and move forward in life.
                            </h2>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-sky-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                        <div className="text-center mb-12 p-6 border-sky-50">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                FAQ
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
