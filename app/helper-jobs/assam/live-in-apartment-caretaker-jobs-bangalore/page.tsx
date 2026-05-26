import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    HomeIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ChartBarIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ArrowRightIcon,
    PhoneIcon,
    InformationCircleIcon,
    ClockIcon,
    UserGroupIcon,
    BuildingOfficeIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Apartment Caretaker Jobs in Bangalore – Apply Free',
    description: 'Assam couples can find apartment live-in security and caretaker jobs in Bangalore with EzyHelpers. No agent fees, free accommodation, salary up to ₹28,000. Register today.',
    openGraph: {
        title: 'Apartment Caretaker Jobs in Bangalore – Apply Free',
        description: 'Assam couples can find apartment live-in security and caretaker jobs in Bangalore with EzyHelpers. No agent fees, free accommodation, salary up to ₹28,000. Register today.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Will I get a weekly off?',
        answer: 'Yes, for live-in job you will get 2 leaves per month. If you dont utilise the same month, then you can either carry forward or get compensation for that.',
    },
    {
        question: 'Is salary given on time every month?',
        answer: 'Yes, salary is usually paid directly by the employer before the 10th of every month. This is the normal payment timeline for most live-in couple security jobs. We clearly explain salary terms before you start work. If you do not receive your salary even after the 10th, you can inform us and we will speak with the employer to help resolve the issue.',
    },
    {
        question: 'Do I get a written agreement before joining?',
        answer: 'Yes, all job details like salary, work duties, and stay arrangements are clearly explained before joining. This ensures transparency between you and the employer.',
    },
    {
        question: 'Do I need any previous security experience to apply?',
        answer: 'No. We welcome freshers too. We provide basic training before your job starts. If you have previous experience as a watchman or caretaker, you will receive a higher salary.',
    },
    {
        question: 'Is food included in the live-in couple security job?',
        answer: 'Yes, in most live-in couple security jobs you will not get ready-made meals. Instead, you will either receive monthly food expenses or groceries from the employer. You will need to cook and manage your own food inside the accommodation provided.',
    },
    {
        question: 'Is there a separate room for couples in live-in jobs?',
        answer: 'Yes. In residential security couple jobs in Bangalore, the employer provides a separate room or a small quarters unit for you and your partner to stay together.',
    },
    {
        question: 'Can I bring my children along if I get a live-in couple security job?',
        answer: 'This depends on the employer\'s building rules. Some employers allow small children. We confirm this with the employer before placing you and always keep your family situation in mind.',
    }
]

export default function ApartmentCaretakerJobsAssamBangalorePage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam', href: '/helper-jobs/assam' },
                        { label: 'Live-in Apartment Caretaker Jobs in Bangalore' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Live-in Apartment Caretaker Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-slate-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Your next job in Bangalore is just one call away. We connect Assam couples with apartment caretaker and residential security couple jobs in Bangalore quickly and safely. We help you get secure work with free stay, good salary, and full support.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job Placement',
                                    'Safe and Respectful Employers',
                                    'On-Time Salary Every Month'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-slate-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Caretaker Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-slate-600 font-medium mb-8">We understand you are coming from Assam, so we make your journey simple and safe from start to finish.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free job placement, zero fees from you',
                                    'Direct jobs, no middle agents involved',
                                    'Clear work duties explained before you travel',
                                    'Salary structure shared honestly from day one',
                                    'Monthly salary paid to you on time',
                                    'Training and job guidance provided by us',
                                    'Support continues even after your placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-slate-600" />
                                        <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> Talk to Our Team Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-white border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Live-in Apartment Caretaker Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto">Stay and work together in the same apartment building. You both live on the premises and manage the building 24 hours a day. These are also called 24-hour residential security couple jobs in Bangalore.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><BuildingOfficeIcon className="w-6 h-6 text-slate-600"/> You may work in:</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {['Small apartments', 'Villas', 'Independent houses', 'Gated residential communities'].map((item, idx) => (
                                                <span key={idx} className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><UserGroupIcon className="w-6 h-6 text-slate-600"/> Best For</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Assam couples looking for joint income',
                                                'Individuals wanting safe stay in Bangalore',
                                                'Helpers looking for stable long-term work',
                                                'Helpers ready for residential caretaker roles'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><HeartIcon className="w-6 h-6 text-slate-600"/> Why Choose This Job</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'Free accommodation (no rent cost)',
                                                'Safe and secure living environment',
                                                'Stable monthly income',
                                                'Long-term job opportunities',
                                                'Work in apartments, villas, and independent houses',
                                                'Suitable for both couples and individuals'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-slate-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden h-full flex flex-col">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <BriefcaseIcon className="w-48 h-48 text-white" />
                                    </div>
                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-600 pb-4">Work Details & Duties</h3>
                                        <p className="text-slate-200 mb-6 font-medium">You stay inside the property and manage safety and daily support tasks. Your duties include:</p>
                                        <ul className="space-y-4 mb-8">
                                            {[
                                                'Gate security and visitor checking',
                                                'Monitoring entry and exit',
                                                'Supporting residents during emergencies',
                                                'Basic cleaning of common areas',
                                                'Parking and delivery supervision',
                                                'Night and day security shifts',
                                                'Maintaining discipline in property'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="bg-slate-700 p-1 rounded-full shrink-0 mt-0.5">
                                                        <CheckCircleIcon className="w-4 h-4 text-white" />
                                                    </div>
                                                    <span className="text-slate-100 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600 mt-auto">
                                            <p className="text-center font-bold text-slate-100 text-sm italic tracking-wide">Everything is explained before joining so you feel confident.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-slate-50 border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Salary for Live-in Apartment Caretaker Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium">Salary depends on property size, experience, and responsibilities.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900">Live-in Husband-Wife Security Job</td>
                                                <td className="px-6 py-4 font-bold text-slate-700">₹30,000 to ₹35,000 combined income</td>
                                                <td className="px-6 py-4 text-sm text-slate-600">Free stay and food</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                                >
                                    Apply Now for Live-in Jobs
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Apartment Caretaker Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium mb-8">Families and housing societies in Bangalore trust and respect helpers from Assam for their discipline and reliable nature. When you take up apartment caretaker jobs in Bangalore, your daily duties may include the following tasks.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Managing the main gate and maintaining visitor entry records',
                                    'Watching the building entrance and common areas properly',
                                    'Checking and noting delivery and courier entry details',
                                    'Helping residents with simple support and basic directions',
                                    'Monitoring parking areas and vehicle entry every day',
                                    'Keeping common staircases and lobby spaces neat and clean',
                                    'Reporting maintenance problems to the apartment manager quickly',
                                    'Switching off common lights and checking locks during night',
                                    'Helping during apartment emergencies whenever support is needed',
                                    'Coordinating with apartment management and society members regularly'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <CheckCircleIcon className="w-6 h-6 text-slate-500 shrink-0" />
                                        <span className="font-bold text-slate-800">{task}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-slate-50 border-t border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Who Can Apply for Apartment Caretaker Jobs in Bangalore</h2>
                                <p className="text-base text-slate-600 font-medium">You can apply if you match any of the following requirements.</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {[
                                    'Age 18 to 45 years',
                                    'Basic reading ability',
                                    'Freshers can apply',
                                    'Experience is optional',
                                    'Couples encouraged',
                                    'Physically fit for security work',
                                    'Ready for 24-hour stay job',
                                    'Honest and disciplined nature'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 text-center font-bold text-slate-800">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-10 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-slate-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-slate-300 font-medium">We connect helpers from Assam with couple security jobs in Bangalore and apartment caretaker roles across India without charging you any fees at all.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Respectful jobs in Bangalore for Assam helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Safe working conditions and clear job agreements</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Your welfare and long-term career growth</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Placed jobs for 5,000 or more helpers across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Served 10,000 or more families and housing societies</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Placement only in respectful and safe homes and buildings</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Duties explained fully and clearly before you join</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Continuous support from our team after your placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Help during any misunderstanding or job-related issue</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Assistance with job change if needed</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> Regular salary and long-term work opportunities</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">Locations We Serve:</span> Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-slate-50 border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You receive basic training for your caretaker role. We give you a certificate after you complete the training.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give you an EzyHelpers coat and a grooming kit before you start working.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive a written work agreement and our team's regular support throughout your job.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our women's hostel until your job is confirmed.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You receive basic medical coverage for emergency health needs.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We only place you in buildings and homes where you are treated with full respect and dignity.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good performance can lead to a higher salary, senior caretaker roles, or jobs in other cities or abroad.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full salary directly to you every month without any deductions from our side.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a profile that makes it easier to find better apartment caretaker jobs in the future.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We support you from your first registration call right through to after you are placed and settled.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-slate-100 rounded-3xl p-8 md:p-12 border border-slate-200 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-slate-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-slate-700 mb-8">Worried about where to stay when you first reach Bangalore? NEST is our safe hostel for women helpers from Assam.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">Safe and clean rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">Daily meals provided</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">Affordable stay cost</span>
                                </div>
                                
                                <p className="text-md font-bold text-slate-700 italic mb-8 max-w-2xl mx-auto">
                                    You settle comfortably before your job starts. No stress. No last-minute panic. We take care of you.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="indigo" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-slate-50 border-t border-b border-slate-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">How to Apply for Live-in Apartment Caretaker Jobs</h2>
                            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">From your village in Assam to a stable job in Bangalore, the process is very simple and fully guided.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact & Details Sharing", desc: "Call EzyHelpers or fill the form. Share your basic details, skills, and any previous work experience." },
                                    { step: 2, title: "Job Matching", desc: "We match your profile with suitable live-in Apartment caretaker jobs in Bangalore and connect you with employers." },
                                    { step: 3, title: "Interview & Confirmation", desc: "You attend a video interview with the employer to discuss salary and duties clearly. If the job is confirmed, you travel to Bangalore." },
                                    { step: 4, title: "Training & Start Work", desc: "You attend 3 days training and then start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-slate-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">You are not just applying for a job, you are building a better future for your family.</h2>
                            <p className="text-lg text-slate-300 mb-10 font-medium">With live-in caretaker jobs in Bangalore, we help you earn safely, stay securely, and grow with dignity.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-slate-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Get Your Job in Bangalore Today
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Talk To Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-slate-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
