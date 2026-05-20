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
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Live-in Patient Care Jobs in Bangalore for Assam Helpers – Free Placement',
    description: 'Looking to work with families in Bangalore? Get patient care jobs in Bangalore with simple duties and clear work roles. Food and stay included. Apply now.',
    openGraph: {
        title: 'Live-in Patient Care Jobs in Bangalore for Assam Helpers – Free Placement',
        description: 'Looking to work with families in Bangalore? Get patient care jobs in Bangalore with simple duties and clear work roles. Food and stay included. Apply now.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/patient-care-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/patient-care-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Will I get training before starting patient care jobs in Bangalore?',
        answer: 'Yes. We provide basic training in patient care, hygiene, safety, and daily support tasks. This helps you handle elderly and bedridden patients confidently.',
    },
    {
        question: 'Are food and room provided in live-in patient care jobs in Bangalore?',
        answer: 'Yes. You get free food and stay. Most homes provide a separate room or proper sleeping space. In some cases, space may be shared based on the house setup.',
    },
    {
        question: 'Do I need to pay any fees?',
        answer: 'No. All patient care jobs in Bangalore are completely free. We do not charge any money.',
    },
    {
        question: 'Will I get a written agreement before joining?',
        answer: 'Yes. We provide a clear agreement that includes your salary, working hours, duties, and leave. This helps you feel safe and secure.',
    },
    {
        question: 'Will I get my salary on time every month?',
        answer: 'Yes. Your employer pays your salary every month on time. We also follow up to ensure you receive your full payment without delay.',
    },
    {
        question: 'What documents do I need to submit for jobs in Bangalore?',
        answer: 'You need to submit photo copy of basic documents like Aadhaar card and ID proof, or you can also share that on WhatsApp too for verification. Our team will guide you properly during the registration process.',
    },
    {
        question: 'Will I get food and stay in live-in elderly care jobs?',
        answer: 'Yes. In live-in elderly care jobs, the family provides 3 meals and a separate room or proper sleeping space with a bed or mattress, based on availability.',
    }
]

export default function PatientCareJobsAssamBangalorePage() {
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
                        { label: 'Patient Care Jobs in Bangalore' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-blue-800 via-blue-500 to-blue-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal italic">Patient Care Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-blue-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                Ready to step out of Assam and grow in a new city? Get live-in patient care jobs in Bangalore with clear work, a stable routine, and a chance to improve your life.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Only home-based care work',
                                    'No hospital duty',
                                    'No medical treatment work'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-blue-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Patient Care Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-100 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-blue-50 border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-gray-600 font-medium mb-8">We focus on your safety, income, and long-term support in patient care jobs in Bangalore.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free Job, No Fees',
                                    'Direct jobs, no middle agents',
                                    'Clear patient condition explained before joining',
                                    'Salary explained properly',
                                    'Monthly salary paid on time',
                                    'Training and guidance provided',
                                    'Help even after job placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-blue-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                                        <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-sm font-bold text-blue-700 italic max-w-3xl mx-auto mb-8">We provide respectful live-in patient care jobs in Bangalore for both freshers and experienced helpers. If you are looking for home patient care work in Bangalore, we guide you step by step from Assam to Bangalore.</p>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Types of Patient Care Jobs */}
                <section className="section-padding bg-white border-b border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Types of Patient Care Jobs and Patients You May Care For</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Families in Bangalore hire patient care helpers for different care needs. Depending on the family’s requirements, you may take care of:</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                                {[
                                    'Elderly men or women',
                                    'Bedridden patients',
                                    'Patients recovering after surgery',
                                    'Disabled patients',
                                    'Children who need special care',
                                    'Patients returning home after hospital discharge'
                                ].map((item, index) => (
                                    <div key={index} className="bg-blue-50 px-6 py-4 rounded-xl border border-blue-100 flex items-center gap-3">
                                        <HeartIcon className="w-6 h-6 text-blue-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
                                <h3 className="font-bold text-gray-900 text-lg mb-4 text-center">We always explain clearly:</h3>
                                <div className="flex flex-wrap justify-center gap-3 mb-6">
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-blue-700 shadow-sm">Patient condition</span>
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-blue-700 shadow-sm">Gender</span>
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-blue-700 shadow-sm">Age</span>
                                    <span className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-blue-700 shadow-sm">Work responsibilities</span>
                                </div>
                                <p className="text-center text-sm font-medium text-gray-600 mb-8">So you feel comfortable, confident, and fully prepared before joining.</p>
                                
                                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center max-w-2xl mx-auto">
                                    <h4 className="font-bold text-yellow-800 text-lg mb-3 flex items-center justify-center gap-2">
                                        ⚠️ Important Note
                                    </h4>
                                    <p className="text-yellow-900 font-bold mb-3">These are non-medical patient care jobs:</p>
                                    <ul className="text-yellow-800 text-sm space-y-2 mb-4">
                                        <li>❌ No injections</li>
                                        <li>❌ No machine operation</li>
                                        <li>✔ Only home-based daily care</li>
                                    </ul>
                                </div>
                                
                                <div className="mt-8 text-center">
                                    <Link
                                        href="tel:+918031411776"
                                        className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-700 shadow-md transition-all"
                                    >
                                        <PhoneIcon className="w-5 h-5 mr-2" /> Contact Us Today
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Live-in Job Details */}
                <section className="section-padding bg-blue-50 border-b border-blue-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Live-in Patient Care Job Details</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">This is the most preferred option for helpers from Assam because it offers safety, a stable income, and maximum savings.</p>
                            </div>
                            
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-blue-100">
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0 h-min">
                                            <HomeIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Work</h3>
                                            <p className="text-gray-600">You stay in the patient’s home and provide care throughout the day. You help the patient whenever needed. You get free food, a clean sleeping space, and basic facilities inside the house.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0 h-min">
                                            <ClockIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Working Time</h3>
                                            <p className="text-gray-600">Full-time stay. Daily patient care work. You get 2 days leave every month.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0 h-min">
                                            <UserGroupIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Best For</h3>
                                            <p className="text-gray-600">Helpers who want long-term caretaker jobs in Bangalore and want to send maximum savings to their family in Assam.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="mt-1 bg-blue-100 p-2 rounded-lg shrink-0 h-min">
                                            <BanknotesIcon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-1">Why Choose This Job</h3>
                                            <p className="text-gray-600">No rent. No food cost. You save most of your salary and build a secure future.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Non-Medical Patient Care Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium mb-2">This is not hospital nursing work. You are not expected to perform medical procedures. Your role is to help patients in their daily routine and provide basic care at home.</p>
                            </div>
                            
                            <h3 className="font-bold text-xl text-blue-800 mb-6 text-center">Daily Patient Care Duties Include</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                {[
                                    'Helping the patient with bathing and personal hygiene',
                                    'Assisting with brushing and daily cleaning',
                                    'Changing diapers or helping with toilet use',
                                    'Helping the patient sit, stand, or walk',
                                    'Feeding food and giving water on time',
                                    'Giving medicines as instructed by the family',
                                    'Keeping the patient’s bed and room clean',
                                    'Providing emotional support and companionship',
                                    'Handling urine bag cleaning if required',
                                    'Changing simple bandages if already guided',
                                    'Ensuring patient comfort and safety all the time'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                                        <CheckCircleIcon className="w-6 h-6 text-blue-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{task}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center justify-center gap-2">
                                    <BriefcaseIcon className="w-6 h-6 text-blue-600" /> Extra Duties Only if Discussed Before Joining
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Helping move a patient from bed to a wheelchair', 'Keeping the patient room neat and organised', 'Assisting with light exercises', 'Supporting during home doctor visits'].map((item, index) => (
                                        <span key={index} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-center text-sm font-bold text-blue-600 uppercase tracking-widest mt-8">All work details are explained clearly before you join, so there is no confusion.</p>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Salary for Patient Care Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Salary depends on patient's condition, work responsibility, and your experience. We explain everything clearly before you travel from Assam.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-blue-600 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Extra Benefits</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="hover:bg-blue-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Freshers</td>
                                                <td className="px-6 py-4 font-bold text-blue-600">₹18,000 to ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free Food + Stay</td>
                                            </tr>
                                            <tr className="hover:bg-blue-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Experienced</td>
                                                <td className="px-6 py-4 font-bold text-blue-600">₹20,000 to ₹25,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free Food + Stay</td>
                                            </tr>
                                            <tr className="hover:bg-blue-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Special Care</td>
                                                <td className="px-6 py-4 font-bold text-blue-600">Up to ₹35,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">For bedridden or heavy care cases</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center text-sm font-bold text-gray-700 mt-6 max-w-2xl mx-auto">In bedridden patient care jobs in Bangalore or post-surgery patient care jobs in Bangalore, the salary is higher because the work needs more care and attention.</p>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-white border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Apply for Patient Care Jobs in Bangalore</h2>
                                <p className="text-base text-gray-600 font-medium">You can apply if you fit the following:</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited for", desc: "There is a high demand for female patient care helpers in Bangalore, especially for elderly patients. Male helpers are also needed in some cases for male patients.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "18 to 45 years.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Basic understanding is enough.", icon: AcademicCapIcon },
                                    { title: "Freshers Can Apply", desc: "No experience needed. We provide basic training.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Prior experience in elderly care or home patient care work helps you earn more.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You should be patient, caring, honest, and responsible.", icon: HandThumbUpIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-sm text-gray-600 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-blue-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-blue-100 font-medium">We connect helpers with trusted patient care jobs in Bangalore without charging any fees.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Respectful jobs in Bangalore</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Safe and comfortable working conditions</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Helper welfare and long-term support</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Provided jobs for 5,000+ helpers</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Served 10,000+ families across India</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Training aligned with DWSSC under Skill India</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Placement only in respectful homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Duties are explained clearly before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-blue-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Help during misunderstandings</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Assistance with job changes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-blue-300 shrink-0" /> Regular salary and long-term work</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/20 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-300">Locations We Serve:</span> Bangalore | Bareilly | Mumbai | Hyderabad | Delhi NCR | Pune | Odisha, and more.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-gray-50 border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Support and Benefits for Helpers at EzyHelpers</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "Training and Certificate", desc: "You get basic training for your job role. A certificate is given after you finish.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We give you an EzyHelpers coat and a grooming kit.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "You receive clear work agreements and our regular support.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your placement is delayed, you can stay at our women's hostel.", icon: HomeIcon },
                                    { title: "Health Insurance", desc: "You get basic medical coverage for emergency needs.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We place you only in homes that treat you with respect.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good work can lead to a higher salary or jobs in other cities or abroad.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "Your employer pays your full salary directly to you every month.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a profile to find better maid jobs.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "We help you from registration until after you are placed.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 text-sm mb-2 uppercase tracking-tight">{item.title}</h3>
                                        <p className="text-xs text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-8 md:p-12 border border-blue-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-blue-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-gray-700 mb-8">Worried about where to stay in Bangalore? NEST is our hostel for women helpers from Assam.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-100">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-100">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-blue-800 shadow-sm border border-blue-100">Affordable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-blue-700 italic mb-8 max-w-2xl mx-auto">
                                    You settle comfortably before your job starts. No stress. No last-minute panic.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-700 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="blue" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Patient Care Jobs</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">From your village in Assam to your new job in Bangalore, the process is simple.</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-100 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "Contact & Details Sharing", desc: "Call EzyHelpers or fill out the simple form. Share your skills and previous work experience with us." },
                                    { step: 2, title: "Job Matching", desc: "We shortlist and match you with suitable jobs based on your skills, then connect you with potential employers." },
                                    { step: 3, title: "Video Interview & Confirmation", desc: "Talk to the customer through a video call. If you agree, travel to Bangalore and confirm your joining." },
                                    { step: 4, title: "Training & Start Work", desc: "Attend 3 days of training, understand salary and job details clearly, and start working with full support." }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-gray-600">{item.desc}</p>
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
                                className="inline-flex items-center justify-center bg-blue-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now and Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-blue-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Choose the safest way to work in a big city.</h2>
                            <p className="text-lg text-blue-100 mb-10 font-medium">Join thousands of helpers from Assam who trust EzyHelpers for secure and respectful patient care jobs.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-blue-800 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
