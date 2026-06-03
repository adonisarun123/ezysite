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
    WrenchScrewdriverIcon,
    SunIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import ReferEarnSection from '@/components/ReferEarnSection'

export const metadata: Metadata = {
    title: 'बैंगलोर में लाइव-इन पति-पत्नी हाउसकीपिंग नौकरी | मुफ़्त अप्लाई',
    description: 'असम के पति-पत्नी के लिए बैंगलोर में लाइव-इन हाउसकीपिंग नौकरी। मुफ़्त रहना, खाना, हर महीने सैलरी और ईज़ीहेल्पर्स की पूरी मदद।',
    openGraph: {
        title: 'बैंगलोर में लाइव-इन पति-पत्नी हाउसकीपिंग नौकरी | मुफ़्त अप्लाई',
        description: 'असम के पति-पत्नी के लिए बैंगलोर में लाइव-इन हाउसकीपिंग नौकरी। मुफ़्त रहना, खाना, हर महीने सैलरी और ईज़ीहेल्पर्स की पूरी मदद।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या लाइव-इन पति-पत्नी के काम में खाना और रहने की सुविधा मिलती है?',
        answer: 'हाँ। ज्यादातर लाइव-इन हाउसकीपिंग काम में पति-पत्नी दोनों के लिए दिन में 3 समय का खाना और रहने की सुविधा मिलती है। कई परिवार अलग कमरा या उपलब्धता के अनुसार बेड या गद्दे के साथ आराम से सोने की जगह भी देते हैं ताकि आप सुरक्षित रह सकें और ज्यादा बचत कर सकें।',
    },
    {
        question: 'कौन-कौन से कागज़ चाहिए होते हैं?',
        answer: 'दोनों लोगों के पास आधार कार्ड और असम का कोई पहचान पत्र होना चाहिए। पहचान पत्र की फोटो कॉपी व्हाट्सऐप पर वेरिफिकेशन के लिए भेजी जा सकती है।',
    },
    {
        question: 'क्या दोनों लोगों को अलग सैलरी मिलती है या एक साथ?',
        answer: 'ज्यादातर पति-पत्नी हाउसकीपिंग की काम में एक साथ मासिक सैलरी मिलती है। सैलरी और जिम्मेदारियों की जानकारी पहले से साफ-साफ बताई जाती है।',
    },
    {
        question: 'क्या बच्चों को साथ ला सकते हैं?',
        answer: 'ज्यादातर लाइव-इन काम में बच्चों को साथ रखने की अनुमति नहीं होती। ज्यादा जानकारी के लिए हमारी टीम से बात करें।',
    },
    {
        question: 'क्या सैलरी समय पर मिलती है?',
        answer: 'हाँ। ज्यादातर परिवार हर महीने 1 से 10 तारीख के बीच सैलरी देते हैं।',
    },
    {
        question: 'क्या बैंगलोर असम से आने वाले पति-पत्नी के लिए सुरक्षित है?',
        answer: 'हाँ। बैंगलोर सुरक्षित शहर है और जरूरत पड़ने पर हमारी टीम हमेशा मदद के लिए उपलब्ध रहती है।',
    },
    {
        question: 'क्या असम के गाँव से आने वाले लोग भी अप्लाई कर सकते हैं?',
        answer: 'हाँ। गाँव और छोटे शहरों से आने वाले लोग भी आसानी से अप्लाई कर सकते हैं।',
    },
    {
        question: 'क्या बाद में काम बदला जा सकता है?',
        answer: 'हाँ। अगर जरूरत पड़े, तो हम आपके लिए दूसरी नौकरी जरूर ढूंढते हैं और नई जगह काम मिलने तक पूरा साथ और सहयोग देते हैं।',
    }
]

export default function LiveInCoupleHousekeepingJobsAssamBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Assam', href: '/helper-jobs/assam/hin' },
                        { label: 'Live-in Couple Housekeeping Jobs', href: '/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/live-in-couple-housekeeping-jobs-bangalore" className="text-xs font-medium text-gray-500 hover:text-indigo-600 transition-colors px-2 py-1 rounded-md hover:bg-indigo-50">English</Link>
                            <span className="text-xs font-bold bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में पति-पत्नी के लिए लाइव-इन हाउसकीपिंग की नौकरी</h1>
                            <p className="text-sm md:text-xl text-indigo-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                क्या आप असम से पति-पत्नी के लिए सुरक्षित और पक्की कमाई वाला काम ढूंढ रहे हैं? हम आपको बैंगलोर में भरोसेमंद कपल हाउसकीपिंग काम दिलाने में मदद करते हैं। यहाँ आपको हर महीने सैलरी, मुफ़्त रहने की सुविधा, खाना और लंबे समय तक काम करने का मौका मिलता है।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'पति-पत्नी दोनों के लिए मुफ्त नौकरी',
                                    'दोनों की हर महीने पक्की कमाई',
                                    'साथ रहने और खाने की सुविधा'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-indigo-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    पति-पत्नी नौकरी के लिए अभी अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-indigo-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-indigo-600 font-medium mb-8">हम आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर पूरा ध्यान देते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'पति-पत्नी दोनों साथ में कमाई कर सकते हैं',
                                    'लाइव-इन जॉब्स में किराए का कोई खर्च नहीं',
                                    'असम के मुकाबले ज्यादा बचत होती है',
                                    'हर महीने पक्की कमाई मिलती है',
                                    'लंबे समय तक काम का मौका मिलता है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-indigo-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
                                        <span className="text-sm font-bold text-indigo-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-white border-b border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">बैंगलोर में 24 घंटे की पति-पत्नी हाउसकीपिंग काम के प्रकार</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium max-w-3xl mx-auto">आप दोनों एक ही घर में साथ रहकर काम करेंगे। हम आपको भरोसेमंद परिवारों में कपल हाउसकीपिंग काम दिलाते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <BriefcaseIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">काम की जानकारी</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">पति बाहर के काम, सामान लाना, पेड़-पौधों की देखभाल और घर की देखभाल में मदद करते हैं। पत्नी सफाई, कपड़े धोना, रसोई में मदद और घर को व्यवस्थित रखने का काम संभालती हैं।</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <ClockIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">काम का समय</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">24 घंटे रहकर काम करना होता है। दोनों लोगों के बीच काम बंटा रहता है और महीने में 2 छुट्टियाँ मिलती हैं।</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <UserGroupIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">किन लोगों के लिए अच्छा है</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">उन पति-पत्नी के लिए अच्छा है जो लंबे समय तक काम करना, मुफ़्त रहना और ज्यादा बचत करना चाहते हैं।</p>
                                </div>
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                        <BanknotesIcon className="w-8 h-8 text-indigo-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">यह काम क्यों चुनें</h3>
                                    <p className="text-indigo-800 text-lg leading-relaxed">आप दोनों साथ में कमाई कर सकते हैं और किराया, खाना और आने-जाने का खर्च बचा सकते हैं।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">बैंगलोर में कपल हाउसकीपिंग काम की सैलरी</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium">असम से आने से पहले हम आपको सैलरी और काम की पूरी जानकारी साफ-साफ बताते हैं।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-indigo-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-indigo-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">खाना</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहने की सुविधा</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">बचत का फायदा</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-indigo-100">
                                            <tr className="hover:bg-indigo-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-indigo-900">लाइव-इन कपल मदद का काम</td>
                                                <td className="px-6 py-4 font-bold text-indigo-700">₹30,000 से ₹35,000 हर महीने</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600">मुफ़्त खाना</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600">अलग कमरा या सोने की निजी जगह</td>
                                                <td className="px-6 py-4 text-sm text-indigo-600 font-medium">आपकी ज्यादातर कमाई बच सकती है और घर भेज सकते हैं</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <p className="text-center font-bold text-indigo-800 mb-6">आपकी सैलरी काम के प्रकार, अनुभव और जिम्मेदारी पर निर्भर करती है।</p>

                            <div className="text-center">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
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
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">लाइव-इन कपल हाउसकीपिंग काम की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-indigo-600 font-medium mb-8">बैंगलोर के परिवार असम के पति-पत्नी को उनकी मेहनत और जिम्मेदारी की वजह से पसंद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">👩</span>
                                        पत्नी के सामान्य काम
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'झाड़ू और पोछा करना',
                                            'रसोई और बाथरूम साफ करना',
                                            'बर्तन और कपड़े धोना',
                                            'घर का सामान साफ करके सही जगह रखना',
                                            'रसोई के छोटे काम में मदद करना'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-indigo-900 text-lg">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
                                    <h3 className="text-2xl font-bold text-indigo-900 mb-6 flex items-center gap-3">
                                        <span className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">👨</span>
                                        पति के सामान्य काम
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            'बागवानी और बाहर की सफाई',
                                            'राशन और घर के सामान में मदद',
                                            'गाड़ी साफ करना और पार्किंग में मदद',
                                            'सुरक्षा सहायता',
                                            'छोटे-मोटे मरम्मत के काम'
                                        ].map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-500 shrink-0 mt-0.5" />
                                                <span className="font-bold text-indigo-900 text-lg">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center max-w-3xl mx-auto mb-8 shadow-sm">
                                <h4 className="font-bold text-yellow-800 text-lg mb-2">जरूरी जानकारी</h4>
                                <p className="text-yellow-900 font-medium">हर परिवार में सभी काम नहीं होते। काम परिवार की जरूरत के हिसाब से पहले ही साफ-साफ समझा दिया जाता है।</p>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> आज ही हमसे बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories of Jobs */}
                <section className="section-padding bg-indigo-50 border-t border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">बैंगलोर में लाइव-इन कपल काम के अलग-अलग प्रकार</h2>
                                <p className="text-base text-indigo-700 font-medium max-w-3xl mx-auto">आप अपनी सुविधा और अनुभव के हिसाब से सही कपल हाउसकीपिंग काम चुन सकते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "पूरे घर की देखभाल करने वाला कपल काम",
                                        desc: "बड़े घर या विला की सफाई, देखभाल और रोज का काम संभालना",
                                        benefits: "ज्यादा सैलरी, अलग रहने की सुविधा और पूरे घर की जिम्मेदारी",
                                        icon: HomeIcon
                                    },
                                    {
                                        title: "खाना और हाउसकीपिंग कपल काम",
                                        desc: "पत्नी खाना बनाती हैं और पति सफाई और दूसरे काम में मदद करते हैं",
                                        benefits: "आसान काम, आरामदायक माहौल और परिवार से अच्छा व्यवहार",
                                        icon: SunIcon
                                    },
                                    {
                                        title: "बुजुर्ग देखभाल कपल काम",
                                        desc: "बुजुर्ग लोगों की देखभाल और रोज के काम में मदद",
                                        benefits: "शांत माहौल, सम्मानजनक काम और आसान जिम्मेदारी",
                                        icon: HeartIcon
                                    },
                                    {
                                        title: "गाड़ी चलाने और हाउसकीपिंग कपल काम",
                                        desc: "पति गाड़ी चलाते हैं और पत्नी घर की सफाई और मदद का काम करती हैं",
                                        benefits: "अच्छी सैलरी, अलग-अलग हुनर का उपयोग और पक्का काम",
                                        icon: WrenchScrewdriverIcon
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-indigo-100">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                                                <item.icon className="w-6 h-6 text-indigo-600" />
                                            </div>
                                            <h3 className="font-bold text-indigo-900 text-lg leading-tight">{item.title}</h3>
                                        </div>
                                        <p className="text-sm text-indigo-800 mb-4 font-medium">{item.desc}</p>
                                        <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                                            <p className="text-xs font-bold text-indigo-900 uppercase tracking-widest mb-1">फायदे</p>
                                            <p className="text-sm text-indigo-700 font-medium">{item.benefits}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-white border-t border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">बैंगलोर में 24 घंटे पति और पत्नी हाउसकीपिंग काम के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-indigo-600 font-medium">अगर आप नीचे दी गई बातों को पूरा करते हैं, तो अप्लाई कर सकते हैं।</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "पति-पत्नी साथ में", desc: "पति-पत्नी दोनों साथ में काम करने के लिए तैयार होने चाहिए।", icon: UserGroupIcon },
                                    { title: "उम्र की जरूरत", desc: "उम्र 20 से 45 साल के बीच होनी चाहिए।", icon: UserCircleIcon },
                                    { title: "शारीरिक रूप से स्वस्थ", desc: "दोनों लोग स्वस्थ, मेहनती और काम करने के लिए तैयार होने चाहिए।", icon: HeartIcon },
                                    { title: "बुनियादी बातचीत", desc: "थोड़ी बहुत हिंदी बोलना आना मददगार होता है।", icon: ChatBubbleLeftEllipsisIcon },
                                    { title: "नए लोग भी अप्लाई कर सकते हैं", desc: "अगर अनुभव नहीं है तो भी चिंता नहीं। हम बुनियादी ट्रेनिंग और मदद देते हैं।", icon: SparklesIcon },
                                    { title: "अनुभव का फायदा", desc: "पहले काम कर चुके लोगों को ज्यादा सैलरी का मौका मिल सकता है।", icon: ChartBarIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-indigo-50 p-6 rounded-2xl shadow-sm border border-indigo-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-indigo-700" />
                                        </div>
                                        <h3 className="font-bold text-indigo-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-indigo-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-indigo-200 font-medium">हम असम से आने वाले लोगों को बैंगलोर और दूसरे शहरों में सुरक्षित और सम्मानजनक घर के काम दिलाने में मदद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> सम्मानजनक नौकरी दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> सुरक्षित और आरामदायक काम का माहौल</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> 5,000 से ज़्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> 10,000 से ज़्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> स्किल इंडिया के तहत DWSSC के साथ ट्रेनिंग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> काम की पूरी जानकारी जॉइन करने से पहले</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> काम मिलने के बाद भी लगातार मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-indigo-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> अगर कोई गलतफहमी या परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> ज़रूरत पड़ने पर नई नौकरी दिलाने में मदद</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-indigo-300 shrink-0" /> समय पर सैलरी और लंबे समय तक काम के मौके</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर | बरेली | मुंबई | हैदराबाद | दिल्ली एनसीआर | पुणे | ओडिशा और अन्य शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-indigo-50 border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                                <p className="text-base text-indigo-700 font-medium">हम काम मिलने से पहले और बाद तक पति-पत्नी दोनों की पूरी मदद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको काम के हिसाब से बुनियादी ट्रेनिंग दी जाती है। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी मिलता है।", icon: AcademicCapIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ लिखित जानकारी और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर काम मिलने में देर हो जाए, तो महिलाएं हमारे सुरक्षित हॉस्टल में रह सकती हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य सुविधा", desc: "जरूरत पड़ने पर आपको बुनियादी स्वास्थ्य बीमा की सुविधा दी जाती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी और दूसरे शहरों या विदेश में भी काम का मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देते हैं।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-indigo-700" />
                                        </div>
                                        <h3 className="font-bold text-indigo-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-indigo-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-indigo-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-indigo-700 mb-8">बैंगलोर आने के बाद रहने की परेशानी हो तो NEST में महिलाएं कुछ समय के लिए सुरक्षित रह सकती हैं, जब तक उनका काम शुरू नहीं हो जाता।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-indigo-800 shadow-sm border border-indigo-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 transition-all shadow-md">
                                    नेस्ट के बारे बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="indigo" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-indigo-50 border-t border-b border-indigo-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">पति-पत्नी हाउसकीपिंग नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-indigo-700 max-w-2xl mx-auto font-medium">असम से बैंगलोर काम के लिए आना ईज़ीहेल्पर्स के साथ बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फ़ोन करें या आसान फ़ॉर्म भरें। अपना हुनर और पहले का अनुभव हमें बताएं।" },
                                    { step: 2, title: "सही काम का मिलना", desc: "हम आपके अनुभव और हुनर के हिसाब से सही काम चुनते हैं और परिवारों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर परिवार से बात करें। अगर दोनों तरफ से बात पक्की हो जाए, तो बैंगलोर आकर काम शुरू करें।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें, सैलरी और काम की जानकारी समझें और पूरी मदद के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-indigo-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-indigo-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-indigo-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-indigo-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/hin/helper-registration"
                                className="inline-flex items-center justify-center bg-indigo-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-800 shadow-md transition-all"
                            >
                                अभी अप्लाई करें और नई शुरुआत करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-indigo-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">साथ मिलकर बेहतर भविष्य बनाइए</h2>
                            <p className="text-lg text-indigo-200 mb-6 font-medium">असम के कई पति-पत्नी आज बैंगलोर में काम करके हर महीने ज्यादा बचत कर रहे हैं। आप भी बैंगलोर में पति-पत्नी हाउसकीपिंग काम के साथ अपने परिवार का भविष्य बेहतर बना सकते हैं।</p>
                            <p className="text-xl text-yellow-400 font-bold mb-10">किराया नहीं, खाने का खर्च नहीं, ज्यादा बचत, पक्का काम</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    अभी अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> हमसे संपर्क करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-indigo-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
