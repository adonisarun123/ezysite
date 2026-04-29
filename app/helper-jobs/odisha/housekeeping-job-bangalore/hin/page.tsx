import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import {
    BriefcaseIcon,
    CheckCircleIcon,
    ClockIcon,
    HeartIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon,
    HomeIcon,
    ClockIcon as ClockSolidIcon,
    UserIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ShieldCheckIcon as OutlineShieldCheckIcon,
    HomeModernIcon as OutlineHomeModernIcon,
    HeartIcon as OutlineHeartIcon,
    ChartBarIcon,
    BanknotesIcon as OutlineBanknotesIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में हाउसकीपिंग जॉब्स | सुरक्षित काम और अच्छी कमाई',
    description: 'कम सैलरी पर काम करना बंद करें। बैंगलोर में हाउसकीपिंग जॉब्स पाएँ और अपने परिवार के लिए ज़्यादा पैसे बचाएँ। हर महीने पूरी सैलरी घर भेजें। आज ही अप्लाई करें।',
    openGraph: {
        title: 'बैंगलोर में हाउसकीपिंग जॉब्स | सुरक्षित काम और अच्छी कमाई',
        description: 'कम सैलरी पर काम करना बंद करें। बैंगलोर में हाउसकीपिंग जॉब्स पाएँ और अपने परिवार के लिए ज़्यादा पैसे बचाएँ। हर महीने पूरी सैलरी घर भेजें। आज ही अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/odisha/housekeeping-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/odisha/housekeeping-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/odisha/housekeeping-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/odisha/housekeeping-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/odisha/housekeeping-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या हाउसकीपिंग जॉब के लिए अनुभव जरूरी है?',
        answer: 'नहीं। चाहे आपके पास कोई अनुभव न हो फिर भी अप्लाई कर सकते हैं। जॉइन करने से पहले बेसिक ट्रेनिंग दी जाती है। अनुभव होने पर सैलरी बेहतर मिल सकती है।',
    },
    {
        question: 'क्या काम शुरू करने से पहले ट्रेनिंग मिलती है?',
        answer: 'हाँ। सफाई, स्वच्छता, व्यवहार और सुरक्षा की ट्रेनिंग दी जाती है।',
    },
    {
        question: 'क्या जॉब पाने के लिए पैसे देने होते हैं?',
        answer: 'नहीं। हाउसकीपिंग जॉब के लिए कोई फीस नहीं ली जाती।',
    },
    {
        question: 'कौन से डॉक्यूमेंट चाहिए?',
        answer: 'आधार कार्ड और एक पहचान पत्र जरूरी है। बाकी प्रक्रिया में मदद की जाती है।',
    },
    {
        question: "सैलरी कब मिलती है?",
        answer: 'हर महीने तय तारीख पर सैलरी सीधे परिवार द्वारा दी जाती है।',
    },
    {
        question: "अगर रहने की जगह नहीं है तो क्या करें?",
        answer: 'लिव इन जॉब में घर में रहना होता है। अन्य स्थिति में रहने की व्यवस्था खुद करनी होती है। जरूरत होने पर हॉस्टल की सुविधा बताई जाती है।',
    }
]

export default function HousekeepingJobsOdishaBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs' },
                        { label: 'ओडिशा', href: '/helper-jobs/odisha' },
                        { label: 'हाउसकीपिंग जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/odisha/housekeeping-job-bangalore"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">ओडिशा हेल्पर्स के लिए बैंगलोर में हाउसकीपिंग जॉब्स</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-teal-100 max-w-5xl mx-auto">क्या आप ओडिशा में हैं और बैंगलोर में ज़्यादा कमाना चाहते हैं?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-xs sm:text-sm md:text-xl text-teal-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    हम आपको बैंगलोर में सुरक्षित और सम्मानजनक हाउसकीपिंग जॉब्स दिलाने में मदद करते हैं। यहाँ फिक्स्ड सैलरी, रहने का विकल्प और पूरा सपोर्ट मिलता है।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ फ्री जॉब, कोई फीस नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ सुरक्षित और सम्मानजनक घर</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ हर महीने समय पर सैलरी</div>
                            </div>
                            <div className="flex justify-center mt-8 gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="bg-white text-teal-700 font-bold py-3 px-8 rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
                                >
                                    आज ही अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+919972571005"
                                    className="bg-teal-900/50 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-xl hover:bg-teal-900/70 border border-teal-500/30 transition-colors shadow-lg"
                                >
                                    हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overivew Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में हाउसकीपिंग जॉब्स के लिए सैलरी</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">आपकी सैलरी अनुभव, परिवार के आकार और काम के घंटों पर निर्भर करती है।</p>
                        </div>

                        {/* Salary Cards - 3 Columns */}
                        <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">लिव इन हाउसकीपिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-teal-600 mb-6">₹18,000 से ₹22,000</div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">रहना और खाना फ्री</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Full-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">फुल टाइम हाउसकीपिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">₹16,000 से ₹20,000</div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">रोज 8 से 10 घंटे</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Part-Time Card */}
                            <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <ClockIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">पार्ट टाइम हाउसक्लीनिंग जॉब्स</h3>
                                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">₹8,000 से ₹12,000</div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">रोज 4 से 6 घंटे</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* What You Get Grid */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">EzyHelpers को क्या अलग बनाता है</h3>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {[
                                    { text: "फ्री जॉब, कोई फीस नहीं", icon: ShieldCheckIcon },
                                    { text: "सीधे परिवार से जॉब, कोई एजेंट नहीं", icon: UserPlusIcon },
                                    { text: "जॉइन करने से पहले काम और सैलरी साफ बताया जाता है", icon: ChatBubbleLeftEllipsisIcon },
                                    { text: "हर महीने समय पर सैलरी", icon: BanknotesIcon },
                                    { text: "ट्रेनिंग और सलाह", icon: AcademicCapIcon },
                                    { text: "जॉब लगने के बाद भी मदद", icon: HeartIcon },
                                ].map((item, index) => (
                                    <div key={index} className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100`}>
                                        <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="w-5 h-5 text-teal-600" />
                                        </div>
                                        <span className="font-semibold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center mt-10">
                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-teal-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    आज ही हमसे संपर्क करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Housekeeping Jobs Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में घर की सफाई के जॉब्स के प्रकार</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">ऐसा काम चुनें जो आपकी जरूरत और सुविधा के अनुसार हो।</p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Live-In Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 flex-shrink-0">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में लिव इन हाउसकीपिंग जॉब्स</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">24 घंटे घर में रहकर काम करना</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">परिवार के घर में रहकर रोज सफाई और घर के काम करना।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रसोई और घर के सामान्य कामों में परिवार की मदद करना।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम की व्यवस्था</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">अलग कमरा या सोने की जगह और खाना दिया जाता है।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">महीने में 2 छुट्टियाँ पहले से तय होती हैं।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">यदि आपके पास पहले से अनुभव नहीं है</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो बैंगलोर में रहने की जगह चाहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो किराया और खाना बचाना चाहते हैं</span>
                                            </li>
                                        </ul>
                                        <p className="text-[13px] md:text-sm text-teal-800 bg-teal-50 p-3 rounded-xl border border-teal-100 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> किराया और खाने का खर्च नहीं होता, इसलिए ज़्यादा बचत होती है।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Full-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                                    <ClockSolidIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में फुल टाइम हाउसकीपिंग जॉब्स</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">पूरा दिन की नौकरी करें और बाद में अपने रहने की जगह पर जाएँ।</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज तय घंटों तक सफाई और घर का काम।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">काम खत्म होने के बाद वापस जा सकते हैं।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज 8 से 10 घंटे।</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">हफ्ते में 1 छुट्टी।</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो नियमित समय पर काम करना चाहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो काम और निजी समय दोनों चाहते हैं</span>
                                            </li>
                                        </ul>
                                        <p className="text-[13px] md:text-sm text-blue-800 bg-blue-50 p-3 rounded-xl border border-blue-100 mt-4 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> हर महीने फिक्स्ड सैलरी और नियमित काम मिलती है।
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Part-Time Card */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                                    <SparklesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">बैंगलोर में पार्ट टाइम हाउसकीपिंग जॉब्स</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium">कम घंटे काम करें और एक्स्ट्रा कमाई करें।</p>

                                <div className="space-y-6 flex-grow">
                                    {/* Type of Work */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">सफाई, बर्तन, किचन या बाथरूम का काम</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">रोज या हफ्ते में तय दिन</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Work Hours */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">काम के घंटे</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">4 से 6 घंटे</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">सुबह या शाम की शिफ्ट</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">किसके लिए सही</h4>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो पास में रहते हैं</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                                <span className="text-sm md:text-base text-gray-600">जो एक से ज्यादा घरों में काम करना चाहते हैं</span>
                                            </li>
                                        </ul>
                                        <p className="text-[13px] md:text-sm text-purple-800 bg-purple-50 p-3 rounded-xl border border-purple-100 font-medium leading-snug">
                                            <strong>क्यों चुनें:</strong> अपने समय के अनुसार काम और अलग से कमाई।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Information Section (Responsibilities & Who Can Apply) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-12">
                            {/* Responsibilities */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <ClipboardDocumentListIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">हाउसकीपिंग के काम की ज़िम्मेदारियाँ</h3>
                                </div>
                                <p className="text-gray-600 mb-6 font-medium">आपके रोज के काम में ये शामिल हो सकते हैं:</p>
                                <ul className="space-y-4 mb-6 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">झाड़ू और पोछा लगाना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">कमरे, किचन और बाथरूम साफ करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">बर्तन धोना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">फर्नीचर, पंखे और शेल्फ की धूल साफ करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">कपड़े तह करना और आसान धुलाई में मदद</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">बिस्तर ठीक करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">कचरा बाहर निकालना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">दरवाजे और खिड़की साफ करना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">किचन में हल्की मदद</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700">घर का सामान व्यवस्थित रखना</span>
                                    </li>
                                </ul>
                                <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 mt-auto">
                                    <p className="text-teal-800 font-medium text-sm text-center">
                                        जॉइन करने से पहले आपको पूरा काम साफ समझाया जाएगा।
                                    </p>
                                </div>
                            </div>

                            {/* Who Can Apply */}
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                        <UserIcon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">कौन अप्लाई कर सकता है</h3>
                                </div>
                                <ul className="space-y-5 mb-6 flex-grow">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">यह काम मुख्य रूप से महिलाओं के लिए है</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">पुरुष और कपल (पति-पत्नी) भी आवेदन कर सकते है</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">उम्र 18 से 45 साल</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">4</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">बेसिक पढ़ाई काफी है</h4>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-1 pb-1">
                                            <span className="text-blue-600 font-bold text-lg">5</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">नए और अनुभवी दोनों</h4>
                                        </div>
                                    </li>
                                </ul>
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-auto">
                                    <div className="flex items-center gap-3">
                                        <ShieldCheckIcon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                        <p className="text-blue-800 font-medium text-sm">
                                            अगर आप कमाई और बचत के लिए तैयार हैं, तो हम आपकी मदद करेंगे।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-600 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                            <div className="relative z-10">
                                <div className="text-center max-w-3xl mx-auto mb-12">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-teal-100 text-lg md:text-xl">
                                        हम ओडिशा और पूरे भारत के हेल्पर्स को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                    {/* We Focus On */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-teal-700/50">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-teal-100 border-b border-teal-700/50 pb-3">
                                            <HandThumbUpIcon className="w-6 h-6" /> हम इन बातों पर खास ध्यान देते हैं:
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">बैंगलोर में सम्मानजनक नौकरी</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">सुरक्षित और विश्वसनीय परिवार</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                <span className="text-teal-50 text-sm md:text-base">हेल्पर की सुरक्षा और लंबे समय तक साथ</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Why Helpers Trust EzyHelpers */}
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-teal-700/50 lg:col-span-2">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-teal-100 border-b border-teal-700/50 pb-3">
                                            <ShieldCheckIcon className="w-6 h-6" /> हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">5,000+ हेल्पर्स को नौकरी दिलाई</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">10,000+ परिवारों को सेवा दी</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">DWSSC और Skill India के साथ हेल्पर ट्रेनिंग</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">सिर्फ अच्छे और इज्ज़तदार घरों में प्लेसमेंट</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-3">
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">काम शुरू होने से पहले पूरी और साफ जानकारी</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">प्लेसमेंट के बाद भी लगातार सपोर्ट</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">जरूरत पड़ने पर नौकरी बदलने में मदद</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-300 mt-2 flex-shrink-0"></div>
                                                    <span className="text-teal-50 text-sm md:text-base">नियमित सैलरी और स्थायी काम</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-6 bg-teal-900/50 rounded-2xl p-6 border border-teal-700/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-teal-800 rounded-full flex items-center justify-center flex-shrink-0 border border-teal-600">
                                            <HeartIcon className="w-6 h-6 text-teal-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm text-teal-300 uppercase tracking-wider font-bold mb-1">हमारा विश्वास</h4>
                                            <p className="font-medium text-white">हेल्पर के लिए अच्छे घर, और परिवारों के लिए भरोसेमंद हेल्पर</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {/* Training & Certificate */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform duration-300">
                                    <AcademicCapIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">ट्रेनिंग और सर्टिफिकेट</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">सफाई, स्वच्छता और काम के उपकरणों की बेसिक ट्रेनिंग</p>
                            </div>

                            {/* Look Professional */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हमेशा प्रोफेशनल दिखें</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">ईज़ीहेल्पर्स की कोट और साफ-सुथरा रहने का सामान</p>
                            </div>

                            {/* Safety & Security */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineShieldCheckIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सुरक्षा और स्पष्ट एग्रीमेंट</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">साफ वर्क एग्रीमेंट और लगातार मार्गदर्शन</p>
                            </div>

                            {/* Stay Support */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 text-pink-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHomeModernIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">रहने की सुविधा</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">प्लेसमेंट में देरी होने पर महिलाओं के लिए हॉस्टल सुविधा</p>
                            </div>

                            {/* Health Insurance */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineHeartIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हेल्थ इंश्योरेंस कवर</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">बेसिक मेडिकल इमरजेंसी के लिए सहायता</p>
                            </div>

                            {/* Respectful Work Environment */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
                                    <HandThumbUpIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">सम्मानजनक कार्य वातावरण</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले</p>
                            </div>

                            {/* Future Opportunities */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChartBarIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">भविष्य के अवसर</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">अच्छा काम करने पर दूसरे शहर या विदेश में बेहतर सैलरी के मौके</p>
                            </div>

                            {/* Timely Salary */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                                    <OutlineBanknotesIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">समय पर सैलरी</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">परिवार/मालिक से डायरेक्ट भुगतान</p>
                            </div>

                            {/* Job Profile Creation */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group">
                                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 text-sky-600 group-hover:scale-110 transition-transform duration-300">
                                    <UserCircleIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">जॉब प्रोफाइल बनाना</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">आपकी स्किल और अनुभव के आधार पर बेहतर नौकरी के अवसर</p>
                            </div>

                            {/* Support at Every Step */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 group lg:col-start-2">
                                <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform duration-300">
                                    <ChatBubbleLeftEllipsisIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">हर कदम पर साथ</h3>
                                <p className="text-gray-600 font-medium leading-relaxed">रजिस्ट्रेशन से लेकर प्लेसमेंट तक पूरा सपोर्ट</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-white -z-10" />
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-100 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -mr-16 -mt-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-50 rounded-full blur-3xl opacity-60 -ml-16 -mb-16"></div>

                                <div className="flex-shrink-0 relative z-10 w-full md:w-auto flex justify-center">
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-50 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                                        <OutlineHomeModernIcon className="w-12 h-12 md:w-16 md:h-16 text-pink-500" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-grow text-center md:text-left">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-display">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                    <div className="space-y-4 mb-8">
                                        <p className="text-gray-600 text-lg">
                                            बैंगलोर में महिलाएँ जरूरत पड़ने पर NEST में रह सकती हैं।सुरक्षित कमरे, रोज़ का भोजन और किफायती सुविधा उपलब्ध है।
                                        </p>
                                    </div>
                                    <Link href="/nest" className="inline-flex items-center gap-2 bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                        नेस्ट के बारे में और जानें
                                        <ArrowRightIcon className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer a Friend and Earn ₹500 Section */}
                <ReferEarnSection variant="teal" lang="hi" location="ओडिशा" />

                {/* How to Apply for Housekeeping Jobs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">घर की सफाई के जॉब्स के लिए अप्लाई कैसे करें</h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-teal-200 rounded-full"></div>

                                {[
                                    { step: 1, title: "ईज़ीहेल्पर्स से संपर्क करें", desc: "सैलरी, खाने और रहने की जानकारी के लिए हमें कॉल करें या फॉर्म भरें।" },
                                    { step: 2, title: "अपनी जानकारी साझा करें", desc: "अपना नाम, उम्र और काम का अनुभव बताएं।" },
                                    { step: 3, title: "जॉब की जानकारी", desc: "काम की जिम्मेदारियां, समय, सुरक्षा नियम और महीने की छुट्टियां साफ समझें।" },
                                    { step: 4, title: "जॉब के लिए यात्रा करें", desc: "जॉइन करने से पहले बैंगलोर आएं और बेसिक ट्रेनिंग लें।" },
                                    { step: 5, title: "जॉब इंटरव्यू", desc: "वीडियो कॉल पर परिवार से बात करें और नौकरी कन्फर्म करें।" },
                                    { step: 6, title: "काम शुरू करें", desc: "ईज़ीहेल्पर्स के पूरे सपोर्ट के साथ अपनी नौकरी शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-12">
                                            {index % 2 === 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-teal-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-12">
                                            {index % 2 !== 0 ? (
                                                <div>
                                                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">{item.title}</h3>
                                                    <p className="text-sm md:text-base text-gray-600">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                            </div>
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-teal-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">ओडिशा में जितना कमाते हैं उससे ज्यादा कमाएं।</h2>
                            <p className="text-lg md:text-xl mb-4 text-teal-100">किराया नहीं देना। खाने का खर्च नहीं। कोई एजेंट कट नहीं।</p>
                            <p className="text-lg md:text-xl mb-10 text-white font-medium">पक्की बचत और आगे बढ़ने का मौका।</p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-teal-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-white/10 hover:scale-105 transition-all duration-300"
                                >
                                    हमसे संपर्क करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
