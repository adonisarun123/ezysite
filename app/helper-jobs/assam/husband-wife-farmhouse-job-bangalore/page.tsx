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
    BuildingOfficeIcon,
    MapIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Husband-Wife Farmhouse Job in Bangalore | EzyHelpers',
    description: 'Stay together, work together, earn together. Get a husband-wife farmhouse job in Bangalore from Assam. Free placement, safe live-in home, full support. Apply now.',
    openGraph: {
        title: 'Husband-Wife Farmhouse Job in Bangalore | EzyHelpers',
        description: 'Stay together, work together, earn together. Get a husband-wife farmhouse job in Bangalore from Assam. Free placement, safe live-in home, full support. Apply now.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Is food included in the Husband-wife farmhouse job in Bangalore?',
        answer: 'Yes. Cooked food is usually not given. Employers provide groceries or food money every month. You can cook your own food in the accommodation provided.',
    },
    {
        question: 'How many leave days are given?',
        answer: 'Most live-in farmhouse couple jobs give 2 leave days every month.',
    },
    {
        question: 'Can we change our jobs if we face problems?',
        answer: 'Yes. If you face genuine problems, EzyHelpers will provide you with another job.',
    },
    {
        question: 'What documents are needed?',
        answer: 'Basic ID proof, like an Aadhaar card and address proof, is usually needed.',
    },
    {
        question: 'Where are these farmhouse jobs located?',
        answer: 'Most farmhouses and private properties are on the outskirts of Bangalore. We explain the exact location clearly before your job is confirmed.',
    },
    {
        question: 'Will we get a written agreement before starting work?',
        answer: 'Yes. We give a clear agreement with salary, work duties, stay details, food support, and leave information before joining.',
    },
    {
        question: 'Who will pay our salary?',
        answer: 'Your employer pays your salary directly every month. EzyHelpers does not take any money from your salary.',
    }
]

export default function HusbandWifeFarmhouseJobsAssamBangalorePage() {
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
                        { label: 'Husband-Wife Farmhouse Job in Bangalore' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Husband-wife Farmhouse Job in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-amber-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Are you and your partner ready to earn together in Bangalore? We help Assam couples get live-in Husband-wife farmhouse jobs in Bangalore on farmhouses and private properties with stay, salary, and full support.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job Placement',
                                    'Safe and Respectful Homes',
                                    'On-Time Salary Every Month'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-amber-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Farmhouse Couple Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-amber-200 font-medium">
                                <span className="flex items-center gap-1"><MapIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-amber-50 border-b border-amber-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-amber-700 font-medium mb-8">We focus on your safety, income, and long-term support every single day.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free job, no fees at all',
                                    'Direct jobs, no middle agents',
                                    'Clear work details before you join',
                                    'Salary explained properly before travel',
                                    'Monthly salary is always paid on time',
                                    'Training and guidance provided to you',
                                    'Help and support even after job placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-amber-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-amber-600" />
                                        <span className="text-sm font-bold text-amber-900 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-white border-b border-amber-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">Farmhouse Work for Couple in Bangalore – Job Category</h2>
                                <p className="text-base md:text-lg text-amber-700 font-medium max-w-3xl mx-auto">This is a single live-in role. You and your partner stay and work together on the farmhouse property 24 hours a day. This is also known as a live-in couple for a farmhouse property caretaker job in Bangalore.</p>
                            </div>
                            
                            <div className="bg-amber-50 p-8 md:p-12 rounded-3xl border border-amber-200 shadow-sm relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
                                    <HomeIcon className="w-64 h-64 text-amber-600" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 border-b border-amber-200 pb-4">Live-in Husband-Wife Farmhouse Work in Bangalore</h3>
                                    <p className="text-amber-800 text-lg mb-8 font-medium">Stay and work together on farmhouses and private properties on the outskirts of Bangalore. These jobs are also called farmhouse caretaker couple jobs in Bangalore.</p>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                                <BriefcaseIcon className="w-6 h-6 text-amber-600" /> Work Details
                                            </h4>
                                            <p className="text-amber-800 mb-3 font-medium">Husband handles outdoor work, gardening, gate supervision, and maintenance support. Wife manages cleaning, laundry, kitchen help, and room organisation.</p>
                                            <p className="text-amber-800 font-medium">Accommodation is provided inside the property. Employers usually give groceries or monthly food expenses so couples can cook their own meals.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                                <ClockIcon className="w-6 h-6 text-amber-600" /> Working Time
                                            </h4>
                                            <p className="text-amber-800 font-medium">Full-time live-in work with shared daily duties. Two leave days every month. You get rest time and off days as agreed with your employer before you join.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                                <UserGroupIcon className="w-6 h-6 text-amber-600" /> Best For
                                            </h4>
                                            <p className="text-amber-800 font-medium">Married couples from Assam who want to work together, live together, and build steady savings with a long-term live-in farmhouse caretaker couple job in Bangalore.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                                                <BanknotesIcon className="w-6 h-6 text-amber-600" /> Why Choose This Job
                                            </h4>
                                            <p className="text-amber-800 font-medium">Your accommodation is provided free of cost. Monthly food expenses or groceries are covered by the employer. You can save most of your combined salary every single month.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-amber-50 border-b border-amber-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">Salary for Husband-Wife Farmhouse Job in Bangalore</h2>
                                <p className="text-base md:text-lg text-amber-700 font-medium">Before you travel from Assam, we clearly explain the salary, work type, stay arrangements, and responsibilities.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-amber-200 overflow-hidden mb-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-amber-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Working Hours</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-amber-100">
                                            <tr className="hover:bg-amber-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-amber-900">Farmhouse Caretaker Couple Job in Bangalore</td>
                                                <td className="px-6 py-4 font-bold text-amber-700">₹25,000 to ₹35,000</td>
                                                <td className="px-6 py-4 text-sm text-amber-700">Full-time stay</td>
                                                <td className="px-6 py-4 text-sm text-amber-700 font-medium">Free accommodation</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-center font-bold text-amber-800 mb-6">Your combined salary depends on your experience, property size, and daily responsibilities.</p>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center max-w-3xl mx-auto mb-8 shadow-sm">
                                <p className="text-yellow-900 font-medium">
                                    <span className="font-bold">Note:</span> These are live-in jobs on farmhouses and private properties located on the outskirts of Bangalore. Husband and wife stay together inside the property accommodation provided by the employer.
                                </p>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-amber-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-amber-800 shadow-md transition-all"
                                >
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">Daily Responsibilities Of The Couple</h2>
                                <p className="text-base md:text-lg text-amber-700 font-medium mb-8">Families in Bangalore prefer Assam couples because you are hardworking, disciplined, and honest. Your daily duties in a husband-wife farmhouse job in Bangalore may include the following work.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {[
                                    'Sweeping and mopping farmhouse areas',
                                    'Cleaning guest rooms and bathrooms',
                                    'Washing utensils and kitchen support',
                                    'Garden watering and plant care',
                                    'Gate supervision and visitor support',
                                    'Laundry washing and folding clothes',
                                    'Outdoor cleaning and maintenance help',
                                    'Arranging household items properly',
                                    'Feeding pets if required',
                                    'Helping during guest visits or family functions',
                                    'Keeping the farmhouse surroundings clean',
                                    'Supporting small daily household work'
                                ].map((task, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                                        <CheckCircleIcon className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                                        <span className="font-bold text-amber-900">{task}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-center font-bold text-amber-800 italic">We explain all work responsibilities clearly before you start the job.</p>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-amber-50 border-t border-amber-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">Who Can Apply for Farmhouse Couple Jobs in Bangalore</h2>
                                <p className="text-base text-amber-700 font-medium">We welcome hardworking Assam couples who want a stable income and respectful work opportunities in Bangalore.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited For", desc: "Married couples who are comfortable staying together and handling household responsibilities jointly.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "Both husband and wife should usually be between 18 and 45 years old.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Basic education is enough. You do not need high qualifications for farmhouse work.", icon: AcademicCapIcon },
                                    { title: "Freshers Can Apply", desc: "No previous experience is also acceptable. We provide basic guidance before placement.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Couples with housekeeping, gardening, security, or caretaker experience may receive better salary opportunities.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You should be honest, disciplined, respectful, and ready to follow farmhouse work routines.", icon: HeartIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-amber-700" />
                                        </div>
                                        <h3 className="font-bold text-amber-900 mb-2 uppercase tracking-tight text-sm">{item.title}</h3>
                                        <p className="text-sm text-amber-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-amber-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-amber-200 font-medium">We help couples from Assam find safe and respectful Domestic helper jobs in Bangalore without charging any placement fees.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-amber-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Respectful domestic helper jobs in Bangalore</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Safe and comfortable live-in working conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Helper welfare and long-term support</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-amber-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Helped 5,000+ helpers get work</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Supported 10,000+ families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Training support aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-amber-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Placement only in respectful and trusted properties</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> All duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Continuous support provided after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-amber-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Help during job issues or misunderstandings</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Assistance if job change becomes necessary</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-300 shrink-0" /> Stable work and regular salary opportunities</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits and Support */}
                <section className="section-padding bg-amber-50 border-b border-amber-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">Benefits and Support for Assam Couples</h2>
                                <p className="text-base text-amber-700 font-medium">We support you from registration until after your job placement in Bangalore.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "Both of you get basic training for your farmhouse work roles. A certificate is given after you complete your training together.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give both of you an EzyHelpers coat and a grooming kit to help you feel confident and ready from day one.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You both receive clear written work agreements and our regular support throughout your placement period on the property.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our NEST women's hostel safely. We help arrange safe temporary stay support for both of you.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You both get basic medical coverage for emergency health needs during your work period on the farmhouse property.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only with property owners who treat both of you with full respect, fairness, and care every day.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good work can lead to a higher combined salary or placement in better properties in other cities or abroad in future.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full combined salary directly to you every month. No delays, no confusion, no excuses at all.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you both build a strong couple profile to find better live-in husband-wife farmhouse work and grow together over time.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We help you both from your very first registration until well after you are placed, settled, and working confidently on the property.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-amber-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-amber-700" />
                                        </div>
                                        <h3 className="font-bold text-amber-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-amber-700 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-200 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-amber-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-amber-800 mb-8">Worried about where to stay when you first arrive in Bangalore from Assam? NEST is our hostel built for women helpers like you.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-amber-900 shadow-sm border border-amber-200">Safe and secure rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-amber-900 shadow-sm border border-amber-200">Daily meals included</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-amber-900 shadow-sm border border-amber-200">Affordable and comfortable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-amber-800 italic mb-8 max-w-2xl mx-auto">
                                    You settle down comfortably before your house helper job starts. No stress. No last-minute panic at all.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-amber-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-amber-800 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="amber" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-amber-50 border-t border-b border-amber-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">How to Apply for Husband-Wife Farmhouse Job in Bangalore</h2>
                            <p className="text-base md:text-lg text-amber-800 max-w-2xl mx-auto font-medium">Moving from Assam to Bangalore for work is simple with EzyHelpers.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-amber-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact and Registration", desc: "Call EzyHelpers or fill out the form. Share your work experiences and job preferences with us." },
                                    { step: 2, title: "Job Matching", desc: "We match you with suitable Husband-wife farmhouse job opportunities in Bangalore and connect you with employers." },
                                    { step: 3, title: "Video Call and Confirmation", desc: "Talk with the employer through a phone or video call, understand the work clearly, and confirm your joining." },
                                    { step: 4, title: "Training and Start Work", desc: "Attend 3 days of basic training, understand salary and work details clearly, and start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-amber-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-amber-800">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-amber-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-amber-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-amber-800">{item.desc}</p>
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
                                className="inline-flex items-center justify-center bg-amber-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-amber-800 shadow-md transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-amber-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Work together, stay together, and earn together in Bangalore.</h2>
                            <p className="text-lg text-amber-200 mb-10 font-medium">We place couples from Assam in safe farmhouse properties with respect and full support every step of the way. Apply now.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-amber-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Apply Now
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-amber-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
