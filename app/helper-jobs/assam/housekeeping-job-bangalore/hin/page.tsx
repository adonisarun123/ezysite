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
    title: 'बैंगलोर में असम हेल्पर्स के लिए हाउसकीपिंग नौकरी – मुफ़्त प्लेसमेंट',
    description: 'असम से बैंगलोर में हाउसकीपिंग नौकरी पाएँ। बिना फीस प्लेसमेंट, ₹22,000 तक सैलरी और पूरी मदद। अभी अप्लाई करें ईज़ीहेल्पर्स के साथ।',
    openGraph: {
        title: 'बैंगलोर में असम हेल्पर्स के लिए हाउसकीपिंग नौकरी – मुफ़्त प्लेसमेंट',
        description: 'असम से बैंगलोर में हाउसकीपिंग नौकरी पाएँ। बिना फीस प्लेसमेंट, ₹22,000 तक सैलरी और पूरी मदद। अभी अप्लाई करें ईज़ीहेल्पर्स के साथ।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/housekeeping-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या 24 घंटे वाले लाइव-इन काम में खाना और कमरा मिलता है?',
        answer: 'हां। बैंगलोर में लाइव-इन नौकरी में आपको दिन में 3 समय का खाना और अलग कमरा या सोने के लिए बेड या गद्दा जैसी बुनियादी सुविधाएं मिलती हैं।',
    },
    {
        question: 'क्या नौकरी पाने के लिए कोई पैसे देने पड़ते हैं?',
        answer: 'नहीं। ईज़ीहेल्पर्स बैंगलोर में घर की सफाई की नौकरी के लिए कोई फीस नहीं लेता। यह पूरी तरह मुफ्त है।',
    },
    {
        question: 'बैंगलोर में ट्रेनिंग कितने दिन की होती है?',
        answer: 'ट्रेनिंग आमतौर पर 3 दिन की होती है। इसमें साफ-सफाई, स्वच्छता, अच्छा व्यवहार, बात करने का तरीका और काम करने के सही तरीके सिखाए जाते हैं।',
    },
    {
        question: 'अगर घर वाले पसंद न आएं तो क्या नौकरी बदल सकते हैं?',
        answer: 'हां। अगर परिवार के साथ कोई परेशानी हो तो हम पहले दोनों तरफ बात करके समस्या सुलझाने की कोशिश करते हैं। फिर भी अगर आपको काम पसंद नहीं आता, तो हम आपके लिए नई नौकरी ढूंढने में मदद करते हैं।',
    },
    {
        question: 'क्या काम शुरू करने से पहले लिखित में कोई कॉन्ट्रैक्ट होगा?',
        answer: 'हां। हम आपको साफ लिखित कॉन्ट्रैक्ट देते हैं जिसमें आपका काम, सैलरी और छुट्टी की पूरी जानकारी लिखी होती है।',
    },
    {
        question: 'क्या ईज़ीहेल्पर्स मेरी सैलरी में से कुछ काटता है?',
        answer: 'नहीं। ईज़ीहेल्पर्स आपकी सैलरी में से कोई कटौती नहीं करता। परिवार आपको सीधे पैसे देता है और पूरी सैलरी आपकी ही होती है।',
    }
]

export default function HousekeepingJobsAssamBangaloreHindiPage() {
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
                        { label: 'Housekeeping Jobs', href: '/helper-jobs/assam/housekeeping-job-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/housekeeping-job-bangalore" className="text-xs font-medium text-gray-500 hover:text-emerald-600 transition-colors px-2 py-1 rounded-md hover:bg-emerald-50">English</Link>
                            <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम हेल्पर्स के लिए हाउसकीपिंग नौकरी</h1>
                            <p className="text-sm md:text-xl text-emerald-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                क्या आप असम में रहकर ज्यादा कमाई करना चाहते हैं? हम आपको बैंगलोर में सुरक्षित और सम्मानजनक हाउसकीपिंग का काम दिलाने में मदद करते हैं। यहाँ आपको पक्की सैलरी, रहने की सुविधा और हमारी पूरी मदद मिलती है। आप हर महीने अपने घर सैलरी भेज सकते हैं।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'मुफ़्त नौकरी दिलाने की सुविधा',
                                    'सुरक्षित और सम्मानजनक परिवार',
                                    'हर महीने समय पर सैलरी'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-emerald-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    हाउसकीपिंग नौकरी के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-emerald-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-emerald-50 border-b border-emerald-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-emerald-600 font-medium mb-8">हम आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त नौकरी, कोई फीस नहीं',
                                    'सीधे परिवारों से काम, कोई दलाल नहीं',
                                    'काम की पूरी जानकारी पहले से दी जाती है',
                                    'सैलरी साफ-साफ समझाई जाती है',
                                    'हर महीने समय पर सैलरी मिलते हैं',
                                    'काम सीखने में मदद और गाइडेंस मिलेगी',
                                    'काम मिलने के बाद भी पूरी मदद मिलती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
                                        <span className="text-sm font-bold text-emerald-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-emerald-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-900 shadow-md transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding bg-white border-b border-emerald-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">बैंगलोर में हाउस क्लीनिंग काम के अलग-अलग प्रकार</h2>
                                <p className="text-base md:text-lg text-emerald-600 font-medium max-w-3xl mx-auto">आप अपनी जरूरत और सुविधा के हिसाब से काम चुन सकते हैं। हमारे पास तीन तरह के काम हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <HomeIcon className="w-24 h-24 text-emerald-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <HomeIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2 relative z-10">बैंगलोर में 24 घंटे रहने वाले हाउसकीपिंग काम</h3>
                                    <p className="text-sm text-emerald-700 mb-6 font-medium relative z-10">आप उसी घर में रहकर काम करेंगे। आप परिवार के साथ 24 घंटे रहेंगे।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-emerald-700">आप परिवार के घर में रहेंगे। आपको अलग कमरा या सोने की जगह और खाना मुफ्त मिलेगा।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-emerald-700">पूरा समय रहना होता है। रोज सफाई का काम करना होता है। महीने में 2 छुट्टी मिलती है।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-emerald-700">नए और अनुभवी दोनों लोगों के लिए अच्छा है। सुरक्षित और लंबे समय तक काम चाहने वालों के लिए सही है।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-emerald-100 mt-4">
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-emerald-700 font-medium">आपका रहने और खाने दोनों का खर्च मुफ्त होता है, इसलिए आप अपनी पूरी कमाई बचा सकते हैं।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <ClockIcon className="w-24 h-24 text-emerald-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <ClockIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2 relative z-10">बैंगलोर में फुल टाइम हाउसकीपिंग काम</h3>
                                    <p className="text-sm text-emerald-700 mb-6 font-medium relative z-10">इसमें समय तय रहता है। काम खत्म होने के बाद आप अपने घर या रहने की जगह वापस जा सकते हैं। खाना तभी मिलेगा जब पहले से बात हुई हो।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-emerald-700">आपके काम का समय तय रहेगा। ड्यूटी खत्म होने के बाद आप अपने घर या कमरे जा सकते हैं।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-emerald-700">रोज 8 से 10 घंटे काम। हफ्ते में 1 छुट्टी।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-emerald-700">उन लोगों के लिए जो तय समय और काम के बाद अपना समय चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-emerald-100 mt-4">
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-emerald-700 font-medium">हर महीने पक्की सैलरी और रोज का एक जैसा समय मिलता है।</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative overflow-hidden group hover:shadow-md transition-all">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <BriefcaseIcon className="w-24 h-24 text-emerald-600" />
                                    </div>
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                        <BriefcaseIcon className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-emerald-900 mb-2 relative z-10">बैंगलोर में पार्ट टाइम हाउसकीपिंग काम</h3>
                                    <p className="text-sm text-emerald-700 mb-6 font-medium relative z-10">कम समय का काम। परिवार के लिए अलग से कमाई। हम बैंगलोर में अलग-अलग समय के हिसाब से पार्ट टाइम काम भी दिलाते हैं।</p>
                                    
                                    <div className="space-y-4 relative z-10">
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम की जानकारी</p>
                                            <p className="text-sm text-emerald-700">घर की जरूरत के हिसाब से रोज या हफ्ते में सफाई, बर्तन धोना, रसोई या बाथरूम की सफाई।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">काम का समय</p>
                                            <p className="text-sm text-emerald-700">4 से 6 घंटे। सुबह या शाम की ड्यूटी आपकी सुविधा के अनुसार।</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">किसके लिए अच्छा है</p>
                                            <p className="text-sm text-emerald-700">जो लोग अपने समय के हिसाब से काम करना चाहते हैं या एक से ज्यादा घरों में काम करना चाहते हैं।</p>
                                        </div>
                                        <div className="bg-white p-3 rounded-xl border border-emerald-100 mt-4">
                                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-1">यह काम क्यों चुनें</p>
                                            <p className="text-sm text-emerald-700 font-medium">आप ज्यादा कमाई कर सकते हैं और अपना समय अपनी सुविधा से संभाल सकते हैं।</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-emerald-50 border-b border-emerald-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">बैंगलोर में घर की सफाई के काम की सैलरी</h2>
                                <p className="text-base md:text-lg text-emerald-600 font-medium">असम से आने से पहले हम आपको सैलरी के बारे में पूरी साफ जानकारी देते हैं।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-emerald-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-emerald-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम के घंटे</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहना</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-emerald-100">
                                            <tr className="hover:bg-emerald-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-emerald-900">लाइव-इन हाउसकीपिंग</td>
                                                <td className="px-6 py-4 font-bold text-emerald-700">₹18,000 से ₹22,000</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">पूरे दिन रहना</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">मुफ्त खाना और रहना</td>
                                            </tr>
                                            <tr className="hover:bg-emerald-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-emerald-900">फुल-टाइम हाउसकीपिंग</td>
                                                <td className="px-6 py-4 font-bold text-emerald-700">₹16,000 से ₹20,000</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">8 से 10 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">शामिल नहीं</td>
                                            </tr>
                                            <tr className="hover:bg-emerald-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-emerald-900">पार्ट-टाइम सफाई का काम</td>
                                                <td className="px-6 py-4 font-bold text-emerald-700">₹8,000 से ₹12,000</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">4 से 6 घंटे</td>
                                                <td className="px-6 py-4 text-sm text-emerald-600">शामिल नहीं</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <p className="text-center font-bold text-emerald-800">आपकी सैलरी आपके अनुभव और काम के प्रकार पर निर्भर करती है।</p>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-emerald-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">हाउसकीपिंग काम की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-emerald-600 font-medium mb-8">बैंगलोर के परिवार असम के लोगों की ईमानदारी और मेहनत को पसंद करते हैं। हाउसकीपिंग काम में आपको ये काम करने पड़ सकते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    'फर्श झाड़ू और पोछा करना',
                                    'रसोई और बाथरूम साफ करना',
                                    'बर्तन धोना',
                                    'फर्नीचर और पंखे साफ करना',
                                    'बिस्तर और कमरे ठीक करना',
                                    'कपड़े धोना और तह करना',
                                    'खिड़की और दरवाजे साफ करना',
                                    'कचरा बाहर डालना',
                                    'रसोई के छोटे काम में मदद करना',
                                    'घर का सामान सही से रखना'
                                ].map((task, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                                        <CheckCircleIcon className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="font-bold text-emerald-900 text-lg">{task}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <p className="text-center font-bold text-emerald-800">काम शुरू करने से पहले हम सब कुछ साफ-साफ समझाते हैं।</p>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-emerald-50 border-t border-emerald-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">बैंगलोर में हाउसकीपिंग काम के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-emerald-600 font-medium">अगर आप नीचे दी गई योग्यताओं को पूरा करते हैं, तो आप आवेदन कर सकते हैं।</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { title: "किसके लिए सबसे सही", desc: "बैंगलोर में महिलाओं के लिए हाउसकीपिंग काम की मांग ज्यादा रहती है। पुरुषों के लिए भी मौके उपलब्ध हैं।", icon: UserGroupIcon },
                                    { title: "उम्र की जरूरत", desc: "आपकी उम्र 18 से 45 साल के बीच होनी चाहिए।", icon: UserCircleIcon },
                                    { title: "पढ़ाई की जरूरत", desc: "थोड़ी बहुत पढ़ाई काफी है। ज्यादा पढ़ाई की ज़रूरत नहीं।", icon: AcademicCapIcon },
                                    { title: "नए लोग भी अप्लाई कर सकते हैं", desc: "अगर अनुभव नहीं है तो भी चिंता नहीं। हम बुनियादी ट्रेनिंग देते हैं।", icon: SparklesIcon },
                                    { title: "अनुभव का फायदा", desc: "अगर पहले काम किया है तो ज्यादा सैलरी और अच्छे मौके मिल सकते हैं।", icon: ChartBarIcon },
                                    { title: "अच्छा व्यवहार", desc: "आप ईमानदार हों, काम करने के लिए तैयार हों और घर के नियम मानें।", icon: HeartIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-emerald-700" />
                                        </div>
                                        <h3 className="font-bold text-emerald-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-emerald-700 font-medium">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-emerald-900 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-emerald-200 font-medium">हम आपके जैसे लोगों को बैंगलोर और पूरे भारत में भरोसेमंद घर-सफाई का काम दिलाते हैं। इसके लिए हम कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> सुरक्षित और आरामदायक माहौल</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> 10,000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> सिर्फ सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> काम मिलने के बाद भी मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-emerald-100">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> अगर कोई परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> जरूरत होने पर नया काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-emerald-300 shrink-0" /> समय पर सैलरी और लंबे समय तक काम</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर | बरेली | मुंबई | हैदराबाद | दिल्ली एनसीआर | पुणे | ओडिशा और अन्य शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits and Support */}
                <section className="section-padding bg-emerald-50 border-b border-emerald-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको काम के हिसाब से बुनियादी ट्रेनिंग मिलेगी। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी दिया जाएगा।", icon: AcademicCapIcon },
                                    { title: "प्रोफेशनल दिखें", desc: "हम आपको ईज़ीहेल्पर्स का कोट और ग्रूमिंग किट देते हैं।", icon: SparklesIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ लिखित जानकारी और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर नौकरी लगने में देर हो, तो आप हमारे महिला हॉस्टल में रह सकती हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य बीमा", desc: "जरूरत पड़ने पर आपको बुनियादी इलाज की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी या दूसरे शहर और विदेश में भी मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर नौकरी लगने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-emerald-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-emerald-700" />
                                        </div>
                                        <h3 className="font-bold text-emerald-900 text-sm mb-2">{item.title}</h3>
                                        <p className="text-xs text-emerald-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-emerald-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-emerald-700 mb-8">बैंगलोर आने के बाद रहने की परेशानी हो तो NEST में महिलाएं कुछ समय के लिए सुरक्षित रह सकती हैं, जब तक उनका काम शुरू नहीं हो जाता।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-emerald-800 shadow-sm border border-emerald-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-emerald-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-800 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="emerald" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-emerald-50 border-t border-b border-emerald-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">घर की सफाई की नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-emerald-700 max-w-2xl mx-auto font-medium">असम के गाँव से लेकर बैंगलोर में नए काम तक पहुँचना बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "EzyHelpers को फोन करें या सीधे फॉर्म भरें। अपनी हुनर और पहले का काम का अनुभव बताएं।" },
                                    { step: 2, title: "नौकरी का मिलना", desc: "हम आपके अनुभव के अनुसार सही काम ढूंढते हैं और परिवारों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर परिवार से बात करें। अगर दोनों राजी हों तो बैंगलोर आएं और काम पक्का करें।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें, सैलरी और काम की जानकारी साफ-साफ समझें, और पूरी मदद के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex flex-col sm:flex-row items-center justify-center mb-12 sm:mb-16 last:mb-0 text-center sm:text-left">
                                        {/* Left Side */}
                                        <div className="w-full sm:w-5/12 sm:text-right sm:pr-10 mb-4 sm:mb-0">
                                            {index % 2 === 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-emerald-700">{item.desc}</p>
                                                </>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-emerald-700 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-full sm:w-5/12 sm:pl-10">
                                            {index % 2 !== 0 ? (
                                                <>
                                                    <h3 className="text-lg font-bold text-emerald-900 mb-1">{item.title}</h3>
                                                    <p className="text-sm text-emerald-700">{item.desc}</p>
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
                                className="inline-flex items-center justify-center bg-emerald-700 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-emerald-800 shadow-md transition-all"
                            >
                                अभी अप्लाई करें और नई शुरुआत करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-emerald-900 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">बड़े शहर में सुरक्षित तरीके से काम करने का सही रास्ता चुनिए।</h2>
                            <p className="text-lg text-emerald-200 mb-10 font-medium">असम के हजारों लोग सम्मानजनक और सुरक्षित काम के लिए ईज़ीहेल्पर्स पर भरोसा करते हैं। नीचे दिए बटन पर क्लिक करके हमारी टीम से बात करें।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-emerald-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <h2 className="text-2xl md:text-4xl font-bold text-emerald-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
