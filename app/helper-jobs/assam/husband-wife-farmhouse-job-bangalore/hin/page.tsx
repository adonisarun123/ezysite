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
    title: 'पति-पत्नी के लिए बैंगलोर में फार्महाउस देखभाल की नौकरी',
    description: 'साथ रहो, साथ काम करो, साथ कमाओ। असम के पति-पत्नी के लिए बैंगलोर में सुरक्षित फार्महाउस देखभाल की। कोई फीस नहीं। अभी अप्लाई करें।',
    openGraph: {
        title: 'पति-पत्नी के लिए बैंगलोर में फार्महाउस देखभाल की नौकरी',
        description: 'साथ रहो, साथ काम करो, साथ कमाओ। असम के पति-पत्नी के लिए बैंगलोर में सुरक्षित फार्महाउस देखभाल की। कोई फीस नहीं। अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/husband-wife-farmhouse-job-bangalore/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या फार्महाउस देखभाल का काम में खाने की सुविधा मिलती है?',
        answer: 'हाँ। ज्यादातर परिवार राशन या खाने के पैसे देते हैं ताकि आप अपना खाना खुद बना सकें।',
    },
    {
        question: 'महीने में कितनी छुट्टी मिलती है?',
        answer: '24 घंटे रहने वाले फार्महाउस देखभाल का काम में महीने में 2 छुट्टी मिलती हैं।',
    },
    {
        question: 'अगर परेशानी हो तो क्या काम बदला जा सकता है?',
        answer: 'हाँ। अगर सही वजह हो तो ईज़ीहेल्पर्स आपके लिए दूसरा काम ढूंढता है।',
    },
    {
        question: 'कौन-कौन से कागज़ चाहिए होते हैं?',
        answer: 'आधार कार्ड और रहने की जगह का पहचान पत्र जैसे बुनियादी कागज़ चाहिए होते हैं। आप चाहें तो सिर्फ व्हाट्सएप पर फोटो भेजकर भी वेरिफिकेशन कर सकते हैं, यह सिर्फ पहचान जांच के लिए होता है।',
    },
    {
        question: 'ये फार्महाउस देखभाल का काम कहाँ होता है?',
        answer: 'ज्यादातर फार्महाउस और निजी संपत्तियाँ बैंगलोर के बाहरी इलाकों में होती हैं। काम पक्का होने से पहले पूरी जगह की जानकारी दी जाती है।',
    },
    {
        question: 'क्या काम शुरू करने से पहले लिखित जानकारी मिलेगी?',
        answer: 'हाँ। हम काम शुरू करने से पहले एक साफ समझौता देते हैं जिसमें सैलरी, काम की ज़िम्मेदारियाँ, रहने की व्यवस्था, खाने की सुविधा और छुट्टी की पूरी जानकारी लिखी होती है।',
    },
    {
        question: 'सैलरी कौन देगा?',
        answer: 'आपके मालिक हर महीने सीधे आपको सैलरी देते हैं। ईज़ीहेल्पर्स आपकी सैलरी में से कोई पैसे नहीं लेता।',
    }
]

export default function HusbandWifeFarmhouseJobAssamBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs' },
                        { label: 'असम', href: '/helper-jobs/assam' },
                        { label: 'पति-पत्नी फार्महाउस नौकरी' }
                    ]}
                    rightContent={
                        <div className="flex gap-2">
                            <Link href="/helper-jobs/assam/husband-wife-farmhouse-job-bangalore" className="text-xs font-medium text-gray-500 hover:text-slate-600 transition-colors px-2 py-1 rounded-md hover:bg-slate-50">English</Link>
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
                            <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में असम के पति-पत्नी के लिए फार्महाउस देखभाल की नौकरी</h1>
                            <p className="text-sm md:text-xl text-indigo-100/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium">
                                क्या आप और आपके पति या पत्नी मिलकर बैंगलोर में कमाई करना चाहते हैं? हम असम के पति-पत्नी को बैंगलोर में फार्महाउस और प्राइवेट प्रॉपर्टी पर रहने और काम करने की नौकरी दिलाते हैं। यहाँ रहना मुफ़्त, सैलरी पक्की और हमारी पूरी मदद हमेशा साथ रहती है।
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'रहने के लिए सुरक्षित कमरा और व्यवस्था',
                                    'राशन या खाने के पैसे की सुविधा',
                                    'हर महीने समय पर पूरी सैलरी'
                                ].map((badge, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-indigo-900 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    नौकरी के लिए अप्लाई करें
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
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-10">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">ईज़ीहेल्पर्स को अलग क्या बनाता है</h2>
                            <p className="text-base md:text-lg text-slate-600 font-medium mb-8">हम हर दिन आपकी सुरक्षा, कमाई और लंबे समय तक मदद पर ध्यान देते हैं।</p>
                            
                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                {[
                                    'मुफ़्त नौकरी, कोई फीस नहीं',
                                    'सीधे काम, कोई दलाल नहीं',
                                    'काम की पूरी जानकारी पहले से दी जाती है',
                                    'सैलरी साफ-साफ समझाई जाती है',
                                    'हर महीने समय पर सैलरी मिलती है',
                                    'काम सीखने में मदद और गाइडेंस मिलती है',
                                    'नौकरी मिलने के बाद भी पूरी मदद मिलती है'
                                ].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 flex items-center gap-2">
                                        <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
                                        <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-700 shadow-md hover:shadow-lg transition-all"
                            >
                                <PhoneIcon className="w-5 h-5 mr-2" /> हमारी टीम से बात करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Salary Overview */}
                <section className="section-padding bg-white border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में पति-पत्नी फार्महाउस देखभाल के काम की सैलरी</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium">असम से आने से पहले हम आपको सैलरी, रहने की सुविधा, काम और जिम्मेदारियों की पूरी जानकारी साफ-साफ देते हैं।</p>
                            </div>
                            
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="bg-indigo-800 text-white">
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम का प्रकार</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">मासिक सैलरी</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">काम के घंटे</th>
                                                <th className="px-6 py-4 font-bold uppercase tracking-widest text-sm">रहना</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            <tr className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-bold text-slate-900 min-w-[200px]">बैंगलोर में फार्महाउस देखभाल पति-पत्नी नौकरी</td>
                                                <td className="px-6 py-4 font-bold text-indigo-700 min-w-[150px]">₹25,000 से ₹35,000</td>
                                                <td className="px-6 py-4 text-sm text-slate-600 min-w-[150px]">पूरे समय रहना</td>
                                                <td className="px-6 py-4 text-sm text-slate-600 min-w-[150px]">मुफ़्त रहने की जगह</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            
                            <div className="bg-indigo-50 p-4 rounded-xl text-center border border-indigo-100">
                                <p className="text-sm md:text-base font-bold text-indigo-900 mb-2">आपकी मिली-जुली सैलरी आपके अनुभव, प्रॉपर्टी की साइज़ और रोज़ की ज़िम्मेदारियों पर निर्भर करती है।</p>
                                <p className="text-sm font-medium text-indigo-700">ध्यान दें: यह बैंगलोर के बाहरी इलाकों में फार्महाउस और प्राइवेट प्रॉपर्टी पर लाइव-इन नौकरियाँ हैं। पति और पत्नी दोनों मालिक की दी हुई जगह पर एक साथ रहते हैं।</p>
                            </div>
                            
                            <div className="text-center mt-8">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base py-3 px-10 rounded-xl hover:bg-indigo-700 shadow-md transition-all"
                                >
                                    अभी अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-slate-50 border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में पति-पत्नी के लिए फार्महाउस देखभाल के काम की जानकारी</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium max-w-3xl mx-auto">यह एक 24 घंटे रहने वाली नौकरी है। आप दोनों फार्महाउस पर एक साथ रहते हैं और काम करते हैं, दिन-रात।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="space-y-8">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><BriefcaseIcon className="w-6 h-6 text-indigo-600"/> काम की जानकारी</h3>
                                        <p className="text-slate-700 font-medium mb-3">आप दोनों बैंगलोर के बाहरी इलाकों में बने बड़े निजी घरों में साथ रहकर काम करेंगे। इन जगहों पर घर के साथ पेड़-पौधे, खुली जगह और कभी-कभी जानवर भी होते हैं। इसे फार्महाउस देखभाल का काम कहा जाता है।</p>
                                        <p className="text-slate-700 font-medium">पति बाहर का काम, पेड़-पौधों की देखभाल, गेट की निगरानी और छोटी मरम्मत में मदद करते हैं। पत्नी सफाई, कपड़े धोना, रसोई में मदद और कमरों को व्यवस्थित रखने का काम संभालती हैं। रहने की सुविधा उसी संपत्ति के अंदर दी जाती है। ज्यादातर परिवार राशन या खाने के पैसे देते हैं ताकि आप अपना खाना खुद बना सकें।</p>
                                    </div>

                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><ClockIcon className="w-6 h-6 text-indigo-600"/> काम का समय</h3>
                                        <p className="text-slate-700 font-medium">पूरा समय रहकर काम करना होता है। महीने में 2 छुट्टी मिलती हैं। आराम का समय और छुट्टी पहले से साफ-साफ बता दी जाती हैं。</p>
                                    </div>
                                    
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><UserGroupIcon className="w-6 h-6 text-indigo-600"/> किसके लिए अच्छा है</h3>
                                        <p className="text-slate-700 font-medium">असम के उन पति-पत्नी के लिए जो साथ काम करना, साथ रहना और बैंगलोर में फार्महाउस देखभाल की लंबे समय वाली नौकरी में अच्छी बचत करना चाहते हैं।</p>
                                    </div>
                                </div>

                                <div className="bg-indigo-800 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden h-full flex flex-col justify-center">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        <HomeIcon className="w-48 h-48 text-white" />
                                    </div>
                                    <div className="relative z-10 flex-grow">
                                        <h3 className="text-2xl font-bold text-white mb-6 border-b border-indigo-700 pb-4">यह काम क्यों चुनें</h3>
                                        <p className="text-indigo-100 mb-6 font-medium leading-relaxed">रहने की सुविधा मुफ्त होती है। राशन या खाने का खर्च भी परिवार देता है। इससे आप अपनी ज्यादातर कमाई बचा सकते हैं।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-white border-b border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">पति-पत्नी की रोज की जिम्मेदारियाँ</h2>
                                <p className="text-base md:text-lg text-slate-600 font-medium mb-8">बैंगलोर के परिवार असम के लोगों को इसलिए पसंद करते हैं क्योंकि आप मेहनती, अनुशासित और ईमानदार होते हैं। बैंगलोर में पति-पत्नी की फार्महाउस नौकरी में आपको ये काम करने पड़ सकते हैं।</p>
                            </div>
                            
                            <div className="bg-indigo-50 rounded-3xl p-8 border border-indigo-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                    {[
                                        'फार्महाउस की सफाई करना',
                                        'कमरे और बाथरूम साफ रखना',
                                        'बर्तन धोना और रसोई में मदद करना',
                                        'बगीचे में पानी देना और पेड़-पौधों की देखभाल करना',
                                        'गेट की निगरानी और आने-जाने वालों पर ध्यान रखना',
                                        'कपड़े धोना और तह करना',
                                        'बाहर की सफाई और मरम्मत में मदद करना',
                                        'घर का सामान सही जगह रखना',
                                        'जरूरत होने पर पालतू जानवरों को खाना देना',
                                        'मेहमान आने पर मदद करना',
                                        'फार्महाउस के आसपास सफाई रखना',
                                        'घर के छोटे-मोटे काम में मदद करना'
                                    ].map((task, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-indigo-600 shrink-0 mt-0.5" />
                                            <span className="font-medium text-slate-800 text-lg">{task}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-8 text-indigo-700 font-bold bg-indigo-50 p-4 rounded-xl inline-block w-full">
                                काम शुरू होने से पहले हम आपको सारी जिम्मेदारियाँ साफ-साफ समझाते हैं।
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Who Can Apply */}
                <section className="section-padding bg-slate-50 border-t border-slate-100">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">बैंगलोर में फार्महाउस देखभाल काम के लिए कौन अप्लाई कर सकता है</h2>
                                <p className="text-base text-slate-600 font-medium">हम असम के उन मेहनती पति-पत्नी का स्वागत करते हैं जो बैंगलोर में स्थिर कमाई और इज़्ज़त का काम चाहते हैं।</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                                {[
                                    { title: "किसके लिए सबसे सही", desc: "जो पति-पत्नी एक साथ रहकर घर की ज़िम्मेदारियाँ मिलकर संभालने में सहज हों।", icon: UserGroupIcon },
                                    { title: "उम्र की जरूरत", desc: "पति और पत्नी दोनों की उम्र 18 से 45 साल के बीच होनी चाहिए।", icon: UserCircleIcon },
                                    { title: "पढ़ाई की जरूरत", desc: "थोड़ी बहुत पढ़ाई काफी है। ज्यादा पढ़ाई की ज़रूरत नहीं।", icon: AcademicCapIcon },
                                    { title: "नए लोग भी अप्लाई कर सकते हैं", desc: "अगर पहले अनुभव नहीं है तो भी चिंता नहीं। हम बुनियादी ट्रेनिंग देते हैं।", icon: SparklesIcon },
                                    { title: "अनुभव का फायदा", desc: "अगर पहले सफाई, पेड़-पौधों की देखभाल, सुरक्षा या देखभाल का काम किया है तो ज्यादा सैलरी मिल सकती है।", icon: ChartBarIcon },
                                    { title: "अच्छा व्यवहार", desc: "आप ईमानदार हों, मेहनती हों और घर के नियमों का पालन करने के लिए तैयार हों।", icon: ShieldCheckIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-all">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <item.icon className="w-6 h-6 text-indigo-700" />
                                        </div>
                                        <h3 className="font-bold text-slate-800 mb-2 tracking-tight text-sm">{item.title}</h3>
                                        <p className="text-sm text-slate-600 font-medium">{item.desc}</p>
                                    </div>
                                ))}
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
                                <p className="text-lg text-slate-300 font-medium">हम असम के पति-पत्नी को बैंगलोर में सुरक्षित और सम्मानजनक घरेलू काम दिलाने में मदद करते हैं। इसके लिए हम कोई फीस नहीं लेते।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <HeartIcon className="w-5 h-5" /> हमारा मकसद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सम्मानजनक घरेलू काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सुरक्षित और आरामदायक रहने की सुविधा</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> लंबे समय तक मदद और सहयोग</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <GlobeAltIcon className="w-5 h-5" /> हमारी पहुँच
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 5,000 से ज्यादा लोगों को काम दिलाया</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> 10,000 से ज्यादा परिवारों को सेवा दी</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> स्किल इंडिया के तहत प्रशिक्षण सहायता</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5" /> हमारा वादा
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम की पूरी जानकारी पहले से</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> काम मिलने के बाद भी पूरी मदद</li>
                                    </ul>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <h3 className="font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> हमारी मदद
                                    </h3>
                                    <ul className="space-y-3 text-sm text-slate-200">
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> अगर कोई परेशानी हो तो सहायता</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> जरूरत होने पर दूसरा काम दिलाना</li>
                                        <li className="flex items-start gap-2"><CheckCircleIcon className="w-5 h-5 text-slate-400 shrink-0" /> समय पर सैलरी और लंबे समय तक काम</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="text-center bg-black/30 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium"><span className="font-bold text-indigo-400">जिन शहरों में हम काम करते हैं:</span> बैंगलोर | बरेली | मुंबई | हैदराबाद | दिल्ली एनसीआर | पुणे | ओडिशा और अन्य शहर</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits */}
                <section className="section-padding bg-slate-50 border-b border-slate-200">
                    <div className="container-custom">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">असम के पति-पत्नी के लिए सुविधाएँ और मदद</h2>
                                <p className="text-base text-slate-600 font-medium">रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम हर कदम पर आपकी मदद करते हैं।</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आप दोनों को काम के हिसाब से बुनियादी ट्रेनिंग दी जाती है। ट्रेनिंग पूरी होने के बाद सर्टिफिकेट भी मिलता है।", icon: AcademicCapIcon },
                                    { title: "सुरक्षा और भरोसा", desc: "आपको साफ लिखित जानकारी और हमारी लगातार मदद मिलती है।", icon: ShieldCheckIcon },
                                    { title: "स्वास्थ्य बीमा", desc: "जरूरत पड़ने पर आपको बुनियादी स्वास्थ्य बीमा की सुविधा मिलती है।", icon: HeartIcon },
                                    { title: "सम्मानजनक माहौल", desc: "हम आपको सिर्फ अच्छे और सम्मान देने वाले परिवारों में काम दिलाते हैं।", icon: HandThumbUpIcon },
                                    { title: "आगे बढ़ने का मौका", desc: "अच्छा काम करने पर ज्यादा सैलरी और दूसरे शहरों या विदेश में भी मौका मिल सकता है।", icon: ChartBarIcon },
                                    { title: "समय पर सैलरी", desc: "हर महीने परिवार सीधे आपको पूरी सैलरी देता है।", icon: BanknotesIcon },
                                    { title: "जॉब प्रोफाइल बनाना", desc: "हम आपका विवरण तैयार करने में मदद करते हैं ताकि आपको बेहतर नौकरी मिल सके।", icon: UserCircleIcon },
                                    { title: "हर कदम पर मदद", desc: "रजिस्ट्रेशन से लेकर काम शुरू होने के बाद भी हम आपके साथ रहते हैं।", icon: InformationCircleIcon }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                                            <item.icon className="w-5 h-5 text-indigo-700" />
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
                        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-3xl p-8 md:p-12 border border-indigo-100 text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                <HomeIcon className="w-48 h-48 text-indigo-600" />
                            </div>
                            
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">नेस्ट – महिलाओं के लिए सुरक्षित रहने की जगह</h2>
                                <p className="text-lg text-slate-700 mb-8">क्या आपको असम से बैंगलोर आने के बाद रहने की चिंता है? नेस्ट महिलाओं के लिए बनाया गया सुरक्षित हॉस्टल है।</p>
                                
                                <div className="flex flex-wrap justify-center gap-4 mb-8">
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-indigo-200">सुरक्षित कमरे</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-indigo-200">रोज का खाना</span>
                                    <span className="bg-white px-4 py-2 rounded-full font-bold text-slate-800 shadow-sm border border-indigo-200">कम खर्च में आरामदायक रहने की सुविधा</span>
                                </div>
                                
                                <p className="text-md font-bold text-slate-700 mb-8 max-w-2xl mx-auto">
                                    आप आराम से रह सकते हैं जब तक आपका काम शुरू नहीं हो जाता। कोई तनाव नहीं। कोई परेशानी नहीं।
                                </p>
                                
                                <Link href="/nest" className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-700 transition-all shadow-md">
                                    नेस्ट के बारे में जानें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="indigo" lang="hi" location="असम" />

                {/* How to Apply */}
                <section className="section-padding bg-slate-50 border-t border-b border-slate-200">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">फार्महाउस का काम के लिए अप्लाई कैसे करें</h2>
                            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">असम से बैंगलोर आकर नया काम शुरू करना बहुत आसान है।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-200 rounded-full hidden sm:block"></div>

                                {[
                                    { step: 1, title: "संपर्क करें और जानकारी दें", desc: "ईज़ीहेल्पर्स को फ़ोन करें या फ़ॉर्म भरें। अपना अनुभव और किस तरह का काम चाहिए, यह बताएं।" },
                                    { step: 2, title: "सही काम ढूंढना", desc: "हम आपके अनुभव के हिसाब से सही काम ढूंढते हैं और परिवारों से बात करवाते हैं।" },
                                    { step: 3, title: "वीडियो बातचीत और पक्का करना", desc: "परिवार से वीडियो कॉल पर बात करें। काम समझें और दोनों तरफ से सहमति होने पर काम पक्का करें।" },
                                    { step: 4, title: "ट्रेनिंग और काम शुरू", desc: "3 दिन की ट्रेनिंग लें, सैलरी और काम की जानकारी समझें और पूरी मदद के साथ काम शुरू करें।" }
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
                                        <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white mb-4 sm:mb-0">
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
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base py-3 px-8 rounded-xl hover:bg-indigo-700 shadow-md transition-all"
                            >
                                अभी अप्लाई करें और नई शुरुआत करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-indigo-800 text-white text-center">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">साथ रहें, साथ काम करें और साथ कमाई करें</h2>
                            <p className="text-lg text-indigo-100 mb-10 font-medium">हम असम के पति-पत्नी को बैंगलोर के सुरक्षित फार्महाउस और निजी संपत्तियों में सम्मान के साथ काम दिलाते हैं। अभी अप्लाई करें।</p>
                            
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link
                                    href="/helper-registration"
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
                            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल</h2>
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
