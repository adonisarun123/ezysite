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
    title: 'बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब',
    description: 'बैंगलोर में कपल सिक्योरिटी जॉब चाहिए? 24 घंटे अपार्टमेंट जॉब के लिए बिना फीस आज ही अप्लाई करें।',
    openGraph: {
        title: 'बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब',
        description: 'बैंगलोर में कपल सिक्योरिटी जॉब चाहिए? 24 घंटे अपार्टमेंट जॉब के लिए बिना फीस आज ही अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या मुझे हर हफ्ते छुट्टी मिलेगी?',
        answer: 'हाँ। 24 घंटे रहने वाले काम में आपको महीने में 2 छुट्टियाँ मिलती हैं। अगर आप छुट्टी का इस्तेमाल नहीं करते, तो उसे आगे बढ़ाया जा सकता है या उसका पैसा मिल सकता है।',
    },
    {
        question: 'क्या हर महीने समय पर सैलरी मिलती है?',
        answer: 'हाँ। ज्यादातर जगहों पर हर महीने की 10 तारीख से पहले मालिक सीधे सैलरी देते हैं। काम शुरू होने से पहले आपको पूरी जानकारी दी जाती है। अगर सैलरी समय पर नहीं मिले, तो आप हमें बता सकते हैं और हम मदद करेंगे।',
    },
    {
        question: 'क्या काम शुरू होने से पहले लिखित जानकारी दी जाती है?',
        answer: 'हाँ। सैलरी, काम और रहने की पूरी जानकारी पहले से साफ-साफ लिखित में दी जाती है।',
    },
    {
        question: 'क्या सुरक्षा का पहले का अनुभव जरूरी है?',
        answer: 'नहीं। नए लोग भी अप्लाई कर सकते हैं। काम शुरू होने से पहले बुनियादी ट्रेनिंग दी जाती है। अगर पहले अनुभव है, तो ज्यादा सैलरी मिल सकती है।',
    },
    {
        question: 'क्या अपार्टमेंट की देखभाल और सिक्योरिटी की नौकरी में खाने की सुविधा मिलती है?',
        answer: 'हाँ। ज्यादातर जगहों पर तैयार खाना नहीं मिलता, लेकिन मालिक खाने का खर्च या राशन देते हैं। आपको अपने रहने की जगह पर खुद खाना बनाना होता है।',
    },
    {
        question: 'क्या पति-पत्नी के लिए अलग कमरा मिलता है?',
        answer: 'हाँ। अपार्टमेंट की देखभाल और सिक्योरिटी की नौकरी में पति-पत्नी के लिए अलग कमरा या रहने की अलग जगह दी जाती है।',
    },
    {
        question: 'क्या बच्चों को साथ ला सकते हैं?',
        answer: 'यह बिल्डिंग और मालिक के नियमों पर निर्भर करता है। कुछ जगह छोटे बच्चों की अनुमति होती है। काम शुरू होने से पहले हम यह बात साफ कर देते हैं।',
    }
]

export default function ApartmentCaretakerJobsAssamBangaloreHindiPage() {
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
                        { label: 'Live-in Apartment Caretaker Jobs in Bangalore', href: '/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore/hin' },
                        { label: 'Hindi' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/live-in-apartment-caretaker-jobs-bangalore" className="text-xs font-medium text-gray-500 hover:text-slate-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">English</Link>
                            <span className="text-xs font-bold bg-slate-100 text-slate-800 px-2 py-1 rounded-md">हिन्दी</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-slate-800 via-slate-600 to-slate-900 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब</h1>
                            <p className="text-sm md:text-xl text-slate-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                बैंगलोर में अगली नौकरी पाना अब आसान हो गया है। ईज़ीहेल्पर्स असम के लोगों को बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की नौकरी जल्दी और सुरक्षित तरीके से दिलाते हैं। इसमें मुफ्त रहना, अच्छी सैलरी और पूरी मदद मिलती है।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    '100% फ्री जॉब सहायता',
                                    'सुरक्षित और सम्मानजनक रहने की जगह',
                                    'हर महीने समय पर सैलरी'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/hin/helper-registration" className="bg-white text-slate-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    अपार्टमेंट सिक्योरिटी जॉब के लिए अप्लाई करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमारी टीम से बात करें
                                </Link>
                            </div>

                            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-200 font-medium">
                                <span className="flex items-center gap-1"><HomeIcon className="w-4 h-4" /> काम की जगह: बैंगलोर</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What Makes EzyHelpers Different */}
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-slate-600 font-medium mb-8">हम जानते हैं कि आप असम से बैंगलोर आ रहे हैं, इसलिए हम शुरुआत से लेकर काम मिलने तक हर कदम पर आपकी मदद करते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त जॉब, आपसे कोई फीस नहीं',
                                    'सीधे काम, कोई दलाल या बीच वाला नहीं',
                                    'काम की पूरी जानकारी पहले से दी जाती है',
                                    'सैलरी की जानकारी साफ-साफ बताई जाती है',
                                    'हर महीने समय पर पैसे मिलते हैं',
                                    'काम सीखने और समझने में मदद मिलती है',
                                    'काम मिलने के बाद भी हमारी मदद जारी रहती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-slate-600" />
                                        <span className="text-sm font-bold text-slate-800 tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-white border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto">इस नौकरी में आप उसी अपार्टमेंट में रहकर काम करते हैं। आप दोनों उसी बिल्डिंग में रहते हुए 24 घंटे उसकी देखभाल करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><BuildingOfficeIcon className="w-6 h-6 text-slate-600"/> आपको इन जगहों पर काम मिल सकता है:</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {['छोटे अपार्टमेंट', 'विला', 'अलग मकान', 'गेट वाली सोसाइटी'].map((item, idx) => (
                                                <span key={idx} className="bg-white px-4 py-2 rounded-lg border border-slate-200 text-sm font-bold text-slate-700 shadow-sm">{item}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><UserGroupIcon className="w-6 h-6 text-slate-600"/> किसके लिए सबसे सही है</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'असम से आने वाले पति-पत्नी जो साथ में कमाई करना चाहते हैं',
                                                'जो लोग बैंगलोर में सुरक्षित रहने की जगह चाहते हैं',
                                                'जो लोग लंबे समय तक पक्का काम चाहते हैं'
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleIcon className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><HeartIcon className="w-6 h-6 text-slate-600"/> यह काम क्यों चुनें</h3>
                                        <ul className="space-y-3">
                                            {[
                                                'मुफ्त रहने की जगह, कोई किराया नहीं',
                                                'सुरक्षित और पक्का माहौल',
                                                'हर महीने पक्की कमाई',
                                                'लंबे समय तक काम का मौका',
                                                'अपार्टमेंट, विला और मकानों में काम का अवसर',
                                                'पति-पत्नी के लिए सही'
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
                                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-600 pb-4">काम की जानकारी</h3>
                                        <p className="text-slate-200 mb-6 font-medium">आपको उसी जगह पर रहना होगा और सुरक्षा व रोज़मर्रा की देखभाल का काम संभालना होगा। आपके काम में ये जिम्मेदारियाँ शामिल हो सकती हैं:</p>
                                        <ul className="space-y-4 mb-8">
                                            {[
                                                'गेट की सुरक्षा और आने-जाने वालों की जाँच',
                                                'अंदर-बाहर आने-जाने पर नज़र रखना',
                                                'ज़रूरत पड़ने पर रहने वालों की मदद करना',
                                                'सामान्य जगहों की बुनियादी सफाई करना',
                                                'पार्किंग और डिलीवरी की निगरानी करना',
                                                'रात और दिन की सुरक्षा ड्यूटी करना',
                                                'संपत्ति में अनुशासन बनाए रखना'
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
                                            <p className="text-center font-bold text-slate-100 text-sm tracking-wide">काम शुरू करने से पहले सब कुछ समझाया जाता है ताकि आप पूरे भरोसे के साथ काम कर सकें।</p>
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
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब की सैलरी</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium">सैलरी आपके अनुभव, बिल्डिंग के आकार और जिम्मेदारियों पर निर्भर करती है।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-slate-700 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहने की सुविधा</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900">24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब</td>
                                                <td className="px-6 py-4 font-bold text-slate-700">₹30,000 से ₹35,000 तक दोनों की कुल कमाई</td>
                                                <td className="px-6 py-4 text-sm text-slate-600">मुफ़्त रहना और खाना</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                                >
                                    जॉब के लिए अप्लाई करें
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
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अपार्टमेंट की देखभाल और सिक्योरिटी की जॉब की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium mb-8">बैंगलोर के लोग असम के लोगों की मेहनत, ईमानदारी और जिम्मेदारी को पसंद करते हैं। पति-पत्नी के लिए अपार्टमेंट केयरटेकर की जॉब में आपको ये काम करने पड़ सकते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'मुख्य गेट संभालना और आने-जाने वालों का रिकॉर्ड रखना',
                                    'बिल्डिंग के अंदर और बाहर निगरानी रखना',
                                    'डिलीवरी और कोरियर की जानकारी रखना',
                                    'लोगों को जरूरत पड़ने पर मदद करना',
                                    'पार्किंग और गाड़ियों के आने-जाने पर हर दिन नज़र रखना',
                                    'सीढ़ियों और लॉबी साफ-सुथरी रखना',
                                    'रात में ताले लगाना और लाइट बंद करना',
                                    'सोसाइटी और बिल्डिंग वालों से मिलकर काम करना'
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
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अपार्टमेंट सिक्योरिटी की जॉब के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-slate-600 font-medium">अगर आप नीचे दी गई शर्तों को पूरा करते हैं तो आप अप्लाई कर सकते हैं।</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4 mb-10">
                                {[
                                    'उम्र 18 से 45 साल के बीच होनी चाहिए',
                                    'थोड़ी बहुत पढ़ाई होना काफी है',
                                    'नए लोग भी अप्लाई कर सकते हैं',
                                    'अनुभव होना जरूरी नहीं है',
                                    'पति-पत्नी दोनों अप्लाई कर सकते हैं',
                                    'सुरक्षा का काम करने के लिए शारीरिक रूप से ठीक होना चाहिए',
                                    '24 घंटे रहने वाले काम के लिए तैयार होना चाहिए',
                                    'ईमानदार और जिम्मेदार स्वभाव होना चाहिए'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 text-center font-bold text-slate-800">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="text-center">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-10 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
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
                                <h2 className="text-2xl md:text-4xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – आपका भरोसेमंद साथी</h2>
                                <p className="text-lg text-slate-300 font-medium">हम असम से आने वाले लोगों को बैंगलोर और पूरे भारत में घरेलू सहायक की जॉब दिलाते हैं। इसके लिए हम कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> असम के लोगों को सम्मानजनक काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सुरक्षित काम और साफ जानकारी देना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> लंबे समय तक आपका साथ देना</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 10,000 से ज्यादा परिवारों और सोसाइटी की मदद की</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सिर्फ सुरक्षित और सम्मान देने वाली जगहों पर काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम मिलने के बाद भी लगातार मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-yellow-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> किसी परेशानी में सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> जरूरत होने पर दूसरा काम दिलाने में मदद</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> समय पर सैलरी और लंबे समय तक काम</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-yellow-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और दूसरे शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-slate-50 border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">ईज़ीहेल्पर्स में मिलने वाली सुविधाएँ और मदद</h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपको केयरटेकर काम की बुनियादी ट्रेनिंग दी जाएगी। ट्रेनिंग पूरी होने पर सर्टिफिकेट भी मिलेगा।", icon: AcademicCapIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको लिखित कॉन्ट्रैक्ट और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "रहने की सुविधा", desc: "अगर काम मिलने में समय लगे, तो महिलाएं हमारे सुरक्षित हॉस्टल में रह सकती हैं।", icon: HomeIcon },
                                    { title: "स्वास्थ्य सहायता", desc: "जरूरत पड़ने पर आपको बुनियादी इलाज की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ सम्मान देने वाली जगहों पर काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी, बड़े काम और दूसरे शहरों में भी मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने मालिक सीधे आपको पूरी सैलरी देते हैं। हमारी तरफ से कोई कटौती नहीं होती।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-slate-700" />
                                        </div>
                                        <h3 className="font-bold text-slate-900 text-sm mb-2">{item.title}</h3>
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
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-slate-700 mb-8">बैंगलोर आने के बाद रहने की चिंता है? नेस्ट हमारे द्वारा चलाया जाने वाला सुरक्षित हॉस्टल है जहाँ असम से आने वाली महिलाएं आराम से रह सकती हैं।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">सुरक्षित और साफ कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">रोज़ का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-slate-200">कम खर्च में रहने की सुविधा</span>
                                </div>
                                
                                <Link href="/hin/nest" className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="indigo" location="असम" lang="hi" />

                {/* How to Apply */}
                <section className="section-padding bg-slate-50 border-t border-b border-slate-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अपार्टमेंट सिक्योरिटी जॉब के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">असम के गाँव से लेकर बैंगलोर में नए काम तक पहुँचना बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फ़ोन करें या फ़ॉर्म भरें। अपनी जानकारी, हुनर और पहले का अनुभव बताएं।" },
                                    { step: 2, title: "सही काम का मिलान", desc: "हम आपके अनुसार सही पति-पत्नी के लिए अपार्टमेंट केयरटेकर की जॉब ढूंढते हैं और घर वालों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "वीडियो कॉल पर घर वालों से बात करें। सैलरी और काम की जानकारी समझें। अगर दोनों तरफ से बात पक्की हो जाए तो बैंगलोर आएं।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें और पूरी मदद के साथ काम शुरू करें।" }
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
                                href="/hin/helper-registration"
                                className="inline-flex items-center justify-center bg-slate-800 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-slate-900 shadow-md transition-all"
                            >
                                अभी अप्लाई करें और नई शुरुआत करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-slate-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">आप सिर्फ काम के लिए अप्लाई नहीं कर रहे हैं, बल्कि अपने परिवार के बेहतर भविष्य की शुरुआत कर रहे हैं।</h2>
                            <p className="text-lg text-slate-300 mb-10 font-medium">बैंगलोर में 24 घंटे अपार्टमेंट पति-पत्नी सिक्योरिटी की जॉब के साथ आप सुरक्षित रह सकते हैं, अच्छी कमाई कर सकते हैं और सम्मान के साथ आगे बढ़ सकते हैं।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/hin/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-slate-900 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    आज ही बैंगलोर में अपना काम पाएँ
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    <PhoneIcon className="w-5 h-5 mr-2" /> हमसे बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-white">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
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
