import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
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
import { getHelperJobFaqs } from '@/lib/helperJobsSource'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'Old Age Caretaker Jobs in Bangalore – Good Salary',
    description: 'Join old age caretaker jobs in Bangalore with free placement, respectful homes, and full support. Start your job journey now.',
    openGraph: {
        title: 'Old Age Caretaker Jobs in Bangalore – Good Salary',
        description: 'Join old age caretaker jobs in Bangalore with free placement, respectful homes, and full support. Start your job journey now.',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/elderly-care-jobs-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Do I need medical knowledge for senior attendant jobs in Bangalore?',
        answer: 'No, you do not need advanced medical knowledge. Basic understanding of cleanliness, medicine timing, and elderly care is enough. We also provide basic training before you start work.',
    },
    {
        question: 'What kind of elders will I take care of?',
        answer: 'You may care for active elders, elders who need some support, or patients who need daily help. We explain the elder’s condition clearly before you join the job.',
    },
    {
        question: 'Can I change my job if I am not comfortable?',
        answer: 'Yes. If you are not comfortable with the family or work, we will help you find another suitable job. Your safety and comfort are important to us.',
    },
    {
        question: 'Will I get a written agreement before joining?',
        answer: 'Yes. We provide a clear written agreement with your salary, duties, leave, and work details before joining.',
    },
    {
        question: 'Does EzyHelpers take any salary commission?',
        answer: 'No. We do not cut anything from your salary. The full salary decided with the employer is given directly to you.',
    },
    {
        question: 'What documents do I need to submit for elderly care jobs in Bangalore?',
        answer: 'You need to submit photo copy of basic documents like Aadhaar card and ID proof, or you can also share that on WhatsApp too for verification. Our team will guide you properly during the registration process.',
    },
    {
        question: 'Will I get food and stay in live-in elderly care jobs?',
        answer: 'Yes. In live-in elderly care jobs, the family provides 3 meals and a separate room or proper sleeping space with a bed or mattress, based on availability.',
    }
]

export default async function ElderlyCareJobsAssamBangalorePage() {
  const __dbHtml = await getHtmlContent("helper-jobs/assam/elderly-care-jobs-bangalore")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/assam/elderly-care-jobs-bangalore", faqs)
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
                        { label: 'Elderly Care Jobs in Bangalore' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <span className="text-xs font-bold bg-teal-100 text-teal-800 px-2 py-1 rounded-md">English</span>
                            <Link href="/helper-jobs/assam/elderly-care-jobs-bangalore/hin" className="text-xs font-medium text-gray-500 hover:text-teal-600 transition-colors px-2 py-1 rounded-md hover:bg-teal-50">हिन्दी</Link>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">Old Age Caretaker Jobs in Bangalore for Assam Helpers</h1>
                            <p className="text-sm md:text-xl text-teal-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                Are you from Assam and want to support your family with a stable income? Start old age caretaker jobs in Bangalore where your care is valued, and your earnings help your loved ones live better.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'Free Job Placement',
                                    'Respectful Work Environment',
                                    'On-Time Monthly Salary'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-teal-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    Apply for Elderly Care Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    Talk to Our Team
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-teal-100 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> Job Location: Bangalore</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-teal-50 border-b border-teal-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Makes EzyHelpers Different</h2>
                            <p className="text-base md:text-lg text-gray-600 font-medium mb-8">We focus on your safety, income, and long-term support while placing you in elderly care jobs in Bangalore.</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'Free Job, No Fees',
                                    'Direct jobs, no middle agents',
                                    'Clear elderly care duties explained before joining',
                                    'Salary details shared properly in advance',
                                    'Monthly salary paid on time without delay',
                                    'Basic elderly care training and guidance provided',
                                    'Help and support even after job placement'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-teal-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-teal-600" />
                                        <span className="text-sm font-bold text-gray-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-sm font-bold text-teal-700 max-w-3xl mx-auto mb-8">We provide verified old-age caretaker jobs in Bangalore for both freshers and experienced helpers. Whether you are new or experienced, we guide you at every step and support you even after you start working.</p>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-teal-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Elderly Care Job Categories in Bangalore</h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">Choose the work that fits your lifestyle and comfort. We offer three types of elderly care jobs in Bangalore.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Live-in */}
                            <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <HomeIcon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Live in Elderly Care Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Stay and work in the same house. You live with the elderly person and provide full-time care. These are also called 24-hour elderly care jobs in Bangalore.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You will stay in the employer’s home and take care of an elderly person. You will get a separate room or sleeping space along with free food.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">Full-time stay. You provide daily care and assistance. You get 2 days leave every month.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers looking for safe, stable, and long-term live-in elderly care jobs in Bangalore.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You save money because food and stay are free, and you can send most of your salary home.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <BriefcaseIcon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Time Elderly Care Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Fixed working hours with daily duty. After work, you return to your own room or accommodation.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">You provide elderly care during fixed hours, such as helping with walking, medicine reminders, and basic daily care.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">8 to 10 hours daily. You get 1 weekly off.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want regular timing and personal time after work.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You get a stable routine, fixed salary, and balanced work-life schedule.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time */}
                            <div className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                                    <ClockIcon className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Part-Time Elderly Care Jobs in Bangalore</h3>
                                <p className="text-sm text-gray-600 mb-4">Flexible work with fewer hours. You can work in one or multiple homes.</p>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Work Details</p>
                                        <p className="text-sm text-gray-700">Basic elderly support like companionship, helping with small tasks, and monitoring daily activities.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Working Time</p>
                                        <p className="text-sm text-gray-700">4 to 6 hours. Morning or evening shifts available.</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-1">Best For</p>
                                        <p className="text-sm text-gray-700">Helpers who want flexible working hours or extra income.</p>
                                    </div>
                                    <div className="pt-2 border-t border-gray-100">
                                        <p className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-1">Why Choose This Job</p>
                                        <p className="text-sm text-gray-600 font-medium">You can manage your time and increase earnings by working in multiple houses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Salary for Elderly Care Jobs in Bangalore</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">We explain the salary clearly before you travel from Assam, so there is no confusion.</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-teal-600 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Job Type</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Monthly Salary</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Working Hours</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">Stay</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100">
                                            <tr className="hover:bg-teal-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Live-in Elderly Care Jobs</td>
                                                <td className="px-6 py-4 font-bold text-teal-600">₹20,000 to ₹25,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Full-time stay</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Free food and stay</td>
                                            </tr>
                                            <tr className="hover:bg-teal-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Full-Time Elderly Care Jobs</td>
                                                <td className="px-6 py-4 font-bold text-teal-600">₹16,000 to ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">8 to 10 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                            <tr className="hover:bg-teal-50/50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-gray-900">Part-Time Elderly Care Jobs</td>
                                                <td className="px-6 py-4 font-bold text-teal-600">₹8,000 to ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">4 to 6 hours</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">Not included</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center text-sm font-bold text-gray-700 mt-6">Your salary depends on experience, patient condition, and responsibilities.</p>

                            <div className="mt-8 text-center flex justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-teal-700 shadow-md hover:shadow-lg transition-all"
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
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Elderly Care Work Responsibilities</h2>
                                <p className="text-base md:text-lg text-gray-600 font-medium">Families in Bangalore trust helpers from Assam for their caring nature and dedication. In elderly care jobs in Bangalore, your responsibilities may include:</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Helping elders walk and move safely',
                                    'Giving medicine reminders on time',
                                    'Assisting in bathing and personal hygiene',
                                    'Preparing or helping with meals',
                                    'Keeping the room clean and organised',
                                    'Providing emotional support and companionship',
                                    'Monitoring health conditions and reporting to family',
                                    'Helping with basic exercises if required',
                                    'Assisting in using the washroom facilities',
                                    'Ensuring the safety and comfort of the elderly person'
                                ].map((task, index) => (
                                    <div key={index} className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl border border-teal-100">
                                        <CheckCircleIcon className="w-6 h-6 text-teal-500 shrink-0" />
                                        <span className="font-bold text-gray-800">{task}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center justify-center gap-2">
                                    <BriefcaseIcon className="w-6 h-6 text-teal-600" /> Additional Responsibilities If Required
                                </h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Accompany to hospital or doctor visits', 'Provide night support in live-in elderly care jobs', 'Help with light elder-related tasks only'].map((item, index) => (
                                        <span key={index} className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700 shadow-sm">{item}</span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-center text-sm font-bold text-teal-600 uppercase tracking-widest mt-8">We explain all duties clearly before you start your job so you feel confident.</p>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-gray-50 border-t border-gray-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Who Can Apply for Elderly Care Jobs in Bangalore</h2>
                                <p className="text-base text-gray-600 font-medium">You can apply if you match the following:</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "Best Suited for", desc: "There is a high demand for female elderly caregivers in Bangalore. Male helpers are also required for certain roles, like patient lifting or mobility support.", icon: UserGroupIcon },
                                    { title: "Age Requirement", desc: "18 to 45 years preferred.", icon: UserCircleIcon },
                                    { title: "Basic Education Required", desc: "Basic education is enough. No high qualifications needed.", icon: AcademicCapIcon },
                                    { title: "Freshers Can Apply", desc: "No experience? You can still apply. We provide training.", icon: SparklesIcon },
                                    { title: "Experience Advantage", desc: "Experienced helpers get higher salaries and better job options.", icon: ChartBarIcon },
                                    { title: "Good Work Attitude", desc: "You must be patient, caring, honest, and respectful towards elders.", icon: HandThumbUpIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-teal-600" />
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
                <section className="section-padding bg-teal-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">About EzyHelpers – Your Trusted Partner</h2>
                                <p className="text-lg text-teal-100 font-medium">We connect helpers like you with trusted elderly care jobs in Bangalore and across India without charging any fees.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> Our Focus
                                    </h3>
                                    <ul className="space-y-3 text-sm text-teal-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Respectful elderly care jobs</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Safe and comfortable homes</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Helper welfare and long-term growth</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> Our Reach
                                    </h3>
                                    <ul className="space-y-3 text-sm text-teal-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> 5,000+ helpers placed</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> 10,000+ families served</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Training aligned with Skill India programs</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> Our Promise
                                    </h3>
                                    <ul className="space-y-3 text-sm text-teal-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Only respectful and verified families</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Clear explanation of duties before joining</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Continuous support after placement</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Our Support
                                    </h3>
                                    <ul className="space-y-3 text-sm text-teal-50">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Help during job issues or misunderstandings</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Assistance in changing jobs if required</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-teal-300 shrink-0" /> Regular salary and stable opportunities</li>
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
                                    { title: "Training and Certificate", desc: "You receive basic elderly care training, including hygiene, patient handling, and communication. A certificate is provided.", icon: AcademicCapIcon },
                                    { title: "Look Professional", desc: "We provide uniform and grooming support so you look confident at work.", icon: SparklesIcon },
                                    { title: "Safety and Security", desc: "Clear agreements and regular follow-ups ensure your safety.", icon: ShieldCheckIcon },
                                    { title: "Stay Support", desc: "If your job is delayed, we provide safe temporary stay options.", icon: HomeIcon },
                                    { title: "Health Awareness", desc: "Guidance on handling medical emergencies and basic care practices.", icon: HeartIcon },
                                    { title: "Respectful Work Environment", desc: "We only place you in homes that treat helpers with dignity.", icon: HandThumbUpIcon },
                                    { title: "Future Opportunities", desc: "Good performance can help you get a higher salary or better jobs.", icon: ChartBarIcon },
                                    { title: "Timely Salary", desc: "You receive your full salary directly every month.", icon: BanknotesIcon },
                                    { title: "Job Profile Creation", desc: "We help you build a strong profile for better opportunities.", icon: UserCircleIcon },
                                    { title: "Support at Every Step", desc: "From registration to job placement and beyond, we are always with you.", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-teal-600" />
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
                        <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-teal-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST – Safe Hostel for Women Helpers</h2>
                                <p className="text-lg text-gray-700 mb-8">Worried about staying in Bangalore? NEST is a safe hostel for women helpers from Assam.</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-teal-800 shadow-sm border border-teal-100">Safe rooms</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-teal-800 shadow-sm border border-teal-100">Daily meals</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-teal-800 shadow-sm border border-teal-100">Affordable stay</span>
                                </div>
                                
                                <p className="text-md font-bold text-teal-700 mb-8 max-w-2xl mx-auto">
                                    You can settle comfortably before your job starts without stress.
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-teal-700 transition-all shadow-md">
                                    Learn More About NEST
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="teal" location="Assam" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50 border-t border-b border-gray-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Apply for Elderly Care Jobs</h2>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-100 rounded-full hidden sm:block"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
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
                                className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-teal-700 shadow-md hover:shadow-lg transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-teal-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">Today’s decision can change your tomorrow.</h2>
                            <p className="text-lg text-teal-100 mb-10 font-medium">A stable elderly care job in Bangalore can help you earn regularly, save money, and build a better future for yourself and your loved ones.</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-800 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    Start Your Journey Today
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> Call Now
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
                            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
