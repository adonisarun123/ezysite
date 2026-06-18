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
    HomeIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import { getHelperJobFaqs } from '@/lib/helperJobsSource'

export const metadata: Metadata = {
    title: 'Old Age Caretaker Jobs in Bangalore — Start Now',
    description: 'Help seniors live comfortably every day with old-age caretaker jobs in Bangalore. Good pay, kind families and a job that has real meaning. Apply for free.',
    openGraph: {
        title: 'Old Age Caretaker Jobs in Bangalore — Start Now',
        description: 'Help seniors live comfortably every day with old-age caretaker jobs in Bangalore. Good pay, kind families and a job that has real meaning. Apply for free.',
        url: 'https://www.ezyhelpers.com/helper-jobs/bihar/old-age-caretaker-job-bangalore',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/bihar/old-age-caretaker-job-bangalore'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'Will I need to provide my documents?',
        answer: 'No, we never take your original papers. We only need a photo of your Aadhaar card and address proof on WhatsApp. Your details are safe with us.'
    },
    {
        question: 'Will I get food at the employer\'s home?',
        answer: 'For live-in jobs, the family gives 3 meals every day. For full-time and part-time jobs, food is usually not included. All food and stay details are discussed clearly before you join.'
    },
    {
        question: 'Do I need medical training for old-age caretaker jobs in Bangalore?',
        answer: 'No formal medical training is needed for most elderly care roles. Basic tasks include giving company, helping with movement, preparing food, and helping with hygiene. If medicines are involved, the family will guide you clearly. We also give basic training before placement.'
    },
    {
        question: 'What if the elderly person I care for has serious health problems?',
        answer: 'We always talk about the elderly person\'s health before you join. You will never be sent to a situation beyond your abilities. If special medical care is needed, this is told to you clearly during the video call.'
    },
    {
        question: 'Will I need to work at night for live-in elderly care jobs in Bangalore?',
        answer: 'This depends on the elderly person\'s needs. For live-in jobs, a little night help may be needed sometimes. All night duties and rest time are agreed clearly before you join. You will always know what is expected.'
    }
]

export default async function OldAgeCaretakerJobBangalorePage() {
  const faqItems = await getHelperJobFaqs("helper-jobs/bihar/old-age-caretaker-job-bangalore", faqs)
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Bihar', href: '/helper-jobs/bihar' },
                        { label: 'Old Age Caretaker Job Bangalore' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-800 text-white pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-4xl mx-auto">
                            <span className="inline-block py-1 px-4 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold tracking-wider mb-6 backdrop-blur-md">
                                TRUSTED JOBS FOR BIHAR HELPERS
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white tracking-tight">
                                Old Age Caretaker Jobs in Bangalore for Bihar Helpers
                            </h1>
                            <p className="text-base md:text-xl text-indigo-50 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
                                Start a meaningful career with trusted old-age caretaker jobs in Bangalore. Families in Bangalore want patient and kind helpers from Bihar to look after their elderly parents. You will get a safe stay, a regular salary, and a respectful home to work in. Your care for others can become a fulfilling and well-paying career.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto mb-12">
                                <Link href="/helper-registration" className="bg-white text-indigo-800 font-bold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full sm:w-auto text-center">
                                    Apply for Care Jobs
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
                                    <PhoneIcon className="h-6 w-6" />
                                    Call Our Team
                                </Link>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 max-w-3xl mx-auto">
                                {[
                                    'Salary Always Paid on Time',
                                    'Defined Duties & Work Hours',
                                    'Free Job, No Fees'
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 bg-indigo-900/40 px-4 py-2 rounded-lg border border-indigo-400/30 backdrop-blur-sm">
                                        <ShieldCheckIcon className="w-5 h-5 text-green-400" />
                                        <span className="text-sm font-medium text-indigo-50">{badge}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Options Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Elderly Care Jobs in Bangalore: Options for Every Helper</h2>
                            <p className="text-lg text-gray-600">Choose the work option that matches your lifestyle, timings, and income needs.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Live-In */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                    <HomeIcon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Live-In Elderly Care Job in Bangalore</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Stay at the employer's home and care for the elderly person every day. Live-in elderly care jobs in Bangalore are best for helpers who want full stability, free stay, free food, and good income without daily travel stress.</p>
                                <div className="bg-green-50 text-green-800 font-bold py-2 px-4 rounded-lg mb-6 text-sm inline-block border border-green-100">
                                    Salary: ₹20,000 – ₹25,000 / month
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'A separate room or dedicated space is provided',
                                        'All meals are provided by the family',
                                        'One family, a strong and trusted bond',
                                        'Stable income and a settled life'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Full-Time */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                    <BriefcaseIcon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Full-Time Elderly Care Job in Bangalore</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Work at one home from morning to evening, helping the elderly person with their daily needs. Full-time elderly care jobs in Bangalore are good for helpers who want fixed hours and a good monthly salary.</p>
                                <div className="bg-green-50 text-green-800 font-bold py-2 px-4 rounded-lg mb-6 text-sm inline-block border border-green-100">
                                    Salary: ₹16,000 – ₹20,000 / month
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Fixed hours — 8 to 10 hours every day',
                                        'One family, regular work schedule',
                                        'Better salary than part-time care',
                                        'All duties are agreed upon before you join'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Part-Time */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                                    <ClockIcon className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Part-Time Elderly Care Job in Bangalore</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">Help elderly people at one or more homes for a few hours each day. Part-time elderly care jobs in Bangalore are good for helpers who want flexible hours and regular income.</p>
                                <div className="bg-green-50 text-green-800 font-bold py-2 px-4 rounded-lg mb-6 text-sm inline-block border border-green-100">
                                    Salary: ₹8,000 – ₹12,000 / month
                                </div>
                                <ul className="space-y-3">
                                    {[
                                        'Flexible hours — 2 to 4 hours per day',
                                        'Work at more than one home',
                                        'Good starting point for new caregivers',
                                        'Balance work and your personal time'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/helper-registration" className="bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all text-center shadow-lg">
                                Find Your Care Job
                            </Link>
                            <Link href="tel:+918031411776" className="bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all text-center">
                                Call Us Now
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Work Responsibilities */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Will You Do Every Day?</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Here is what your daily work will look like when caring for an elderly person in a Bangalore home. All your duties are discussed and agreed upon before you start.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Help with bathing, dressing, and personal hygiene',
                                'Help the elderly person walk, sit, and stand safely',
                                'Give medicines on time as the family tells you',
                                'Make simple and healthy meals for them',
                                'Talk with them and give emotional support',
                                'Tell the family about the elderly person\'s health each day'
                            ].map((task, i) => (
                                <div key={i} className="flex items-center gap-4 bg-indigo-50/50 p-4 rounded-xl border border-indigo-100">
                                    <div className="bg-indigo-600 text-white rounded-full p-1 shrink-0">
                                        <CheckCircleIcon className="w-5 h-5" />
                                    </div>
                                    <span className="text-gray-800 font-semibold">{task}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/helper-registration" className="bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all text-center shadow-lg">
                                Start Senior Care Work
                            </Link>
                            <Link href="tel:+918031411776" className="bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all text-center">
                                Talk to Us
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply & Why Bangalore */}
                <section className="section-padding bg-indigo-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                    <div className="container-custom relative z-10 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-16">
                            {/* Who Can Apply */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 font-display text-white">Who Can Apply?</h2>
                                <p className="text-indigo-200 mb-8 text-lg">If you are caring, responsible, and willing to help others, this opportunity may be perfect for you.</p>
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                                    <ul className="space-y-4">
                                        {[
                                            'Freshers & Experienced who are patient and kind',
                                            'Both males and females who are comfortable helping elderly people',
                                            'Responsible helpers willing to care for senior citizens',
                                            'Age 18 to 45'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-emerald-400 shrink-0" />
                                                <span className="text-indigo-50 font-medium text-lg">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Why Bangalore is Good */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6 font-display text-white">Why Bangalore is Good for Bihar Helpers</h2>
                                <p className="text-indigo-200 mb-8 text-lg">Discover why more Bihar helpers are choosing Bangalore for safe and respected care jobs.</p>
                                <div className="space-y-4">
                                    {[
                                        { title: 'High Demand', desc: 'Bangalore families always look for patient Bihar helpers for senior care jobs in Bangalore.' },
                                        { title: 'Respected Work', desc: 'Elderly caregivers are deeply valued and treated as trusted members of the family.' },
                                        { title: 'Strong Bihar Community', desc: 'Many Bihar helpers are already providing good elderly care across Bangalore.' },
                                        { title: 'Career Growth', desc: 'Grow from part-time to full-time caregiver roles with better pay.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                            <div className="bg-indigo-500 p-2 rounded-lg shrink-0">
                                                <StarIcon className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                                <p className="text-indigo-200 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers is Different</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get more than just a job — get guidance, safety, and support throughout your journey.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'Zero Fees', desc: 'Registration and placement are completely free.' },
                                { title: 'Transparent Process', desc: 'Clear discussion about salary, timings, and duties before joining.' },
                                { title: 'Elderly Care Jobs for Every Skill Level', desc: 'Opportunities are available for both beginners and experienced caregivers.' },
                                { title: 'Continuous Support', desc: 'We help you during and after placement.' },
                                { title: 'Skill Training', desc: 'Learn basic elderly care skills, including daily assistance, hygiene support, and patient handling.' },
                                { title: 'Better Future Opportunities', desc: 'Grow into higher-paying jobs across India and abroad.' }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-indigo-200 transition-all">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-4">
                                        <ShieldCheckIcon className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center gap-4">
                            <Link href="/helper-registration" className="bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all text-center shadow-lg">
                                Register Free Today
                            </Link>
                            <Link href="tel:+918031411776" className="bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all text-center">
                                Talk to Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-white border-y border-gray-100">
                    <div className="container-custom max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">About EzyHelpers — We Are Here for You</h2>
                            <p className="text-lg text-gray-600 font-medium">We are EzyHelpers. We help hardworking helpers like you find good jobs in Bangalore and across India. We never charge you any money. Your good future is our goal.</p>
                            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How EzyHelpers Works</h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                                <h4 className="text-indigo-900 font-bold mb-2 uppercase tracking-wide text-sm">OUR FOCUS</h4>
                                <p className="text-indigo-800 font-medium text-lg">Good jobs + Safe work + Helper care</p>
                            </div>
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                                <h4 className="text-indigo-900 font-bold mb-2 uppercase tracking-wide text-sm">OUR REACH</h4>
                                <p className="text-indigo-800 font-medium text-lg">5,000+ helpers placed | 10,000+ families helped | DWSSC training</p>
                            </div>
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                                <h4 className="text-indigo-900 font-bold mb-2 uppercase tracking-wide text-sm">OUR PROMISE</h4>
                                <p className="text-indigo-800 font-medium text-lg">Good homes only | Clear duties | Help after you join</p>
                            </div>
                            <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                                <h4 className="text-indigo-900 font-bold mb-2 uppercase tracking-wide text-sm">OUR SUPPORT</h4>
                                <p className="text-indigo-800 font-medium text-lg">Fix problems | Help change jobs | Make sure salary is on time</p>
                            </div>
                            <div className="sm:col-span-2 bg-indigo-600 text-white rounded-2xl p-6 shadow-md text-center">
                                <h4 className="text-indigo-100 font-bold mb-2 uppercase tracking-wide text-sm">OUR LOCATIONS</h4>
                                <p className="font-bold text-xl">Bangalore, Bareilly, Mumbai, Hyderabad, Delhi NCR, Pune, Odisha + more</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What You Get When You Join EzyHelpers */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">What You Get When You Join EzyHelpers</h2>
                            <p className="text-lg text-gray-600">Enjoy extra support, safety, and benefits that help you work without worry.</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: '1. Training and Certificate', desc: 'Learn basic work skills. Get a certificate.', icon: AcademicCapIcon },
                                { title: '2. Free Coat and Kit', desc: 'We give you a free EzyHelpers coat and grooming kit for full-time and part-time jobs.', icon: BriefcaseIcon },
                                { title: '3. Agreement and Safety', desc: 'Clear written agreement. We stay in touch always.', icon: ShieldCheckIcon },
                                { title: '4. Hostel Stay', desc: 'Free women’s hostel if your job takes time to start.', icon: HomeIcon },
                                { title: '5. Basic Health Insurance', desc: 'We provide basic health insurance support for medical emergencies.', icon: HeartIcon },
                                { title: '6. Suitable Homes', desc: 'We connect you with homes based on your skills and experience.', icon: StarIcon },
                                { title: '7. Growth', desc: 'Work hard and get a better salary and better jobs.', icon: BanknotesIcon },
                                { title: '8. Salary on Time', desc: 'Your employer pays your full salary every month.', icon: ClockIcon },
                                { title: '9. Better Profile', desc: 'We help build your work profile so you get better jobs.', icon: UserPlusIcon },
                                { title: '10. Full Support', desc: 'We are with you from registration to after you join.', icon: PhoneIcon }
                            ].map((benefit, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start gap-4">
                                    <div className="bg-indigo-50 p-3 rounded-lg text-indigo-600 shrink-0">
                                        <benefit.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex justify-center gap-4">
                            <Link href="/helper-registration" className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-indigo-700">
                                Join EzyHelpers For Free
                            </Link>
                            <Link href="tel:+918031411776" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50">
                                Speak on Call
                            </Link>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-gradient-to-r from-pink-50 to-purple-50 border-y border-pink-100">
                    <div className="container-custom max-w-5xl">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-pink-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 -mr-20 -mt-20"></div>
                            
                            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                                <div className="md:w-2/3">
                                    <span className="bg-pink-100 text-pink-700 font-bold px-3 py-1 rounded-full text-sm tracking-wide uppercase mb-4 inline-block">Safe Stay for Women</span>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">NEST — Safe Stay for Women Helpers</h2>
                                    <p className="text-lg text-gray-600 mb-6">Coming to Bangalore for work? Worried about where to stay? NEST is EzyHelpers' safe hostel for women helpers from Bihar and other states.</p>
                                    
                                    <h3 className="font-bold text-gray-900 mb-3">Why Helpers Choose NEST:</h3>
                                    <ul className="space-y-2 mb-8">
                                        {[
                                            'Safe and secure place to stay', 
                                            'Affordable room and food', 
                                            'Help before your job starts', 
                                            'Good and comfortable place for women'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 shrink-0" />
                                                <span className="text-gray-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="font-bold text-pink-700 text-xl italic">Safe Stay. Food. Good Environment for Women.</p>
                                </div>
                                <div className="md:w-1/3 flex flex-col gap-4 w-full">
                                    <Link href="/nest" className="w-full bg-pink-600 text-white font-bold text-center py-4 rounded-xl shadow-lg hover:bg-pink-700 transition-colors">
                                        Learn More
                                    </Link>
                                    <Link href="tel:+918031411776" className="w-full bg-white text-pink-600 font-bold text-center py-4 rounded-xl border-2 border-pink-200 hover:border-pink-600 transition-colors">
                                        Call Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tell a Friend & Earn */}
                <ReferEarnSection variant="indigo" />

                {/* How to Apply */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">How to Apply</h2>
                            <p className="text-lg text-gray-600">Starting your elderly care job journey is easier than you may think.</p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-6">
                            {[
                                { step: '1', title: 'Registration', desc: 'Tell us your details, skills, experience, and what type of care job you want.' },
                                { step: '2', title: 'Verification', desc: 'We check your Aadhaar card and address proof on WhatsApp. Simple and safe.' },
                                { step: '3', title: 'Job Match', desc: 'We find the right elderly care jobs in Bangalore for you.' },
                                { step: '4', title: 'Video Call', desc: 'You talk to the family on a video call about salary, duties, stay, and timings.' },
                                { step: '5', title: 'Training and Start', desc: 'You get basic training and then start your job with our support.' }
                            ].map((s, i) => (
                                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shrink-0 shadow-md border-4 border-indigo-100">
                                        {s.step}
                                    </div>
                                    <div className="text-center sm:text-left pt-2">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                                        <p className="text-gray-600 font-medium">{s.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/helper-registration" className="bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all text-center shadow-lg">
                                Fill the Form
                            </Link>
                            <Link href="tel:+918031411776" className="bg-white text-indigo-700 font-bold text-lg py-4 px-10 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all text-center">
                                Call and Apply
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-indigo-800 to-indigo-600 text-white text-center">
                    <div className="container-custom max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display leading-tight text-white">Start Your Elderly Care Job in Bangalore Today</h2>
                        <p className="text-xl mb-10 text-indigo-100 font-medium">
                            Good families, safe stay, regular salary, and full EzyHelpers support are waiting for you. If you have a kind heart and are ready to start senior home care jobs in Bangalore, we are here at every step.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/helper-registration" className="bg-white text-indigo-800 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-xl">
                                Apply Now
                            </Link>
                            <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 px-10 rounded-xl border-2 border-white hover:bg-white/10 transition-all">
                                Call Our Team
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs Section */}
                <section className="section-padding bg-white border-t border-gray-100">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">Questions and Answers (FAQs)</h2>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}
