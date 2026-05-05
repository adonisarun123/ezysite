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
    BanknotesIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'छत्तीसगढ़ के लोगों के लिए बैंगलोर में घर का काम',
    description: 'साफ सैलरी, सुरक्षित घर और पूरी मदद के साथ बैंगलोर में घर का काम पाएँ। आज ही भरोसेमंद काम शुरू करें।',
    openGraph: {
        title: 'छत्तीसगढ़ के लोगों के लिए बैंगलोर में घर का काम',
        description: 'साफ सैलरी, सुरक्षित घर और पूरी मदद के साथ बैंगलोर में घर का काम पाएँ। आज ही भरोसेमंद काम शुरू करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/chhattisgarh/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या मुझे कोई शुल्क देना होगा?',
        answer: 'नहीं, यहाँ जुड़ने के लिए कोई पैसा नहीं देना होता। यह पूरी तरह मुफ्त है और आपकी सैलरी से भी कोई कटौती नहीं होती।',
    },
    {
        question: 'बैंगलोर में घर का काम करने से क्या-क्या मिलेगा?',
        answer: 'अच्छी सैलरी, रहने की जगह, और रोज़ 3 वक्त का खाना। सुरक्षित काम, इज़्ज़त और कठिनाई में मदद भी मिलती है।',
    },
    {
        question: 'काम शुरू होने के बाद भी मदद मिलती है?',
        answer: 'हाँ, काम शुरू होने के बाद भी हमारी टीम आपकी मदद करती रहती है। कोई भी परेशानी हो, हम साथ हैं।',
    },
    {
        question: 'काम से पहले मुझे सब कैसे पता चलेगा?',
        answer: 'काम में शामिल होने से पहले आपको सैलरी और काम की पूरी जानकारी दी जाती है। घर वालों से वीडियो कॉल पर बात भी होती है।',
    },
    {
        question: 'अगर मुझे काम पसंद नहीं आया तो क्या होगा?',
        answer: 'अगर आप खुश नहीं हैं, तो आप हमें बता सकते हैं। हम आपको दूसरा काम दिलाने में मदद करते हैं और पूरी प्रक्रिया सुरक्षित रखते हैं।',
    },
    {
        question: 'ईज़ीहेल्पर्स पर क्यों भरोसा करें?',
        answer: 'हम एजेंसी नहीं, एक कंपनी हैं। अब तक 5000+ हेल्पर्स को काम दिला चुके हैं, और आपके राज्य के लोग भी हमारे साथ पहले से काम कर रहे हैं। आपकी सैलरी सीधे ग्राहक से मिलती है, बीच में कोई कटौती नहीं होती। अगर कभी कोई दिक्कत आती है, तो हम आपके साथ रहते हैं और मदद करते हैं। और अगर आपको घर पसंद नहीं आता, तो हम आपका काम फ्री में बदलवा देते हैं।',
    }
]

export default function HelperJobsChhattisgarhHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'छत्तीसगढ़' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/chhattisgarh"
                                className="w-10 h-5 bg-orange-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-500 to-orange-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">छत्तीसगढ़ के लोगों के लिए बैंगलोर में भरोसेमंद घर का काम</h1>
                            <p className="text-sm sm:text-base md:text-xl text-orange-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                क्या आप छत्तीसगढ़ में मेहनत कर रहे हैं, पर कमाई कम है? बैंगलोर आएँ और सुरक्षित, सम्मानजनक व अच्छी कमाई वाला काम शुरू करें। यहाँ समय पर पैसा मिलता है और कोई शुल्क नहीं लिया जाता।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'सुरक्षित और भरोसेमंद काम',
                                    'पैसा सीधे आपके खाते में मिलता है',
                                    'लिखित समझौता होता है',
                                    'नया काम सीखने का मौका मिलता है',
                                    'परिवार अच्छा व्यवहार करते हैं'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-orange-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    अभी आवेदन करें
                                </Link>
                                <Link href="tel:+918031411776" className="bg-transparent text-white font-bold text-lg py-4 rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                                    <PhoneIcon className="h-6 w-6" />
                                    हमें फ़ोन करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-white py-6 md:py-10 border-b border-gray-100">
                    <div className="container-custom">
                        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100">
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">डायरेक्ट सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-orange-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">छत्तीसगढ़ के लोगों के लिए बैंगलोर में काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके तजुर्बे, हुनर और सुविधा के हिसाब से काम देते हैं। जो काम आपको ठीक लगे वो चुनें।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "इस काम में आपको घर को रोज़ साफ और ठीक रखना होता है।",
                                    features: ["रोज़ घर की सफाई और व्यवस्था", "कमरे, रसोई और बैठक साफ करना", "बर्तन, कपड़े, चादरें धोना", "झाड़ू-पोंछा लगाना", "बाथरूम साफ रखना", "घर की चीज़ें अपनी जगह रखना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "रसोइया का काम",
                                    desc: "इस काम में आप परिवार के लिए रोज़ का खाना बनाना हैं और रसोई संभालना हैं।",
                                    features: ["रोज़ खाना तैयार करना", "शाकाहारी और मांसाहारी खाना बनाना", "सब्ज़ी काटना और तैयारी करना", "राशन संभालना", "रसोई और बर्तन साफ रखना", "परिवार के स्वाद के अनुसार खाना बनाना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "इस काम में आप धैर्य और ध्यान से बच्चों की देखभाल करते हैं।",
                                    features: ["बच्चों की देखभाल और निगरानी", "खाना खिलाना और दिनचर्या बनाना", "खेलना और पढ़ाई में मदद करना", "बच्चों को साफ और स्वस्थ रखना", "बच्चों को सुलाना", "बच्चों की चीज़ें ठीक जगह रखना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "इस काम में आप घर के बुज़ुर्गों की रोज़ की ज़रूरतों में मदद करते हैं।",
                                    features: ["बुज़ुर्गों की देखभाल और रोज़ की मदद", "चलने और नहाने में सहायता", "दवाइयाँ समय पर देना", "उनसे बात करना और साथ रहना", "सरल खाना बनाना", "सुरक्षा और आराम का ध्यान", "शांत घर का माहौल"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "इस काम में आप उन लोगों की मदद करते हैं जिन्हें घर पर रोज़ की मदद चाहिए।",
                                    features: ["बीमार व्यक्ति की रोज़ की मदद", "खाने और चलने में मदद", "नहाने और साफ-सफाई में मदद", "घर और आसपास साफ रखना", "मरीज के आराम और स्वास्थ्य की देखभाल करना", "डॉक्टर की सलाह का पालन करना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "इस काम में पति-पत्नी मिलकर घर की सारी जिम्मेदारियाँ उठाते हैं।",
                                    features: ["दोनों मिलकर एक ही घर में काम करते हैं", "सफाई और घर का पूरा काम संभालते हैं", "कपड़े और कचरा संभालते हैं", "घर को व्यवस्थित रखते हैं", "जरूरत हो तो बाहर के छोटे काम करते हैं", "रहने की सुविधा दी जाती है"]
                                },
                                {
                                    title: "पति-पत्नी के लिए चौकीदारी का काम",
                                    desc: "इस काम में पति-पत्नी मिलकर घरों की रखवाली करते हैं।",
                                    features: ["आने-जाने वालों और दरवाज़े पर ध्यान रखना", "सफाई और घर का पूरा काम संभालते हैं", "कपड़े और कचरा संभालते हैं", "घर को व्यवस्थित रखते हैं", "जरूरत हो तो बाहर के छोटे काम करते हैं", "रहने की सुविधा दी जाती है"]
                                },
                                {
                                    title: "माँ और नवजात की देखभाल का काम",
                                    desc: "इस काम में आप बच्चा होने के बाद माँ और नवजात शिशु की देखभाल करते हैं।",
                                    features: ["माँ और बच्चे का ध्यान रखना", "बच्चे को खिलाना और साफ रखना", "माँ को आराम करने में मदद करना", "बच्चे को सुलाना", "रात में जरूरत होने पर उठना", "साफ-सफाई का ध्यान रखना", "24 घंटे साथ रहने का काम"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "पति-पत्नी मिलकर फार्महाउस का काम और सफाई संभालते हैं।",
                                    features: ["जगह की सफाई और रखरखाव", "बगीचे और पौधों की देखभाल", "ज़रूरत हो तो खाना बनाना", "सुरक्षा का ध्यान रखना", "जानवरों की देखभाल करना", "रहने और खाने की सुविधा दी जाती है"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-orange-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-orange-700 mb-3 group-hover:text-orange-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-orange-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        और जानें <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Chhattisgarh Helpers */}
                <section className="section-padding bg-orange-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">बैंगलोर के घर छत्तीसगढ़ वालों को क्यों पसंद करते हैं</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['ईमानदार और मेहनती स्वभाव', 'शांत, इज़्ज़तदार और संभालने में आसान', 'जल्दी सीखते हैं और बात मानते हैं', 'लंबे समय तक टिकते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-orange-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-orange-600" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 uppercase tracking-tight leading-none">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ईज़ीहेल्पर्स और दलाल में क्या फ़र्क है</h2>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-orange-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "पैसा पहले ही ले लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                        { agent: "कोई लिखित भरोसा नहीं देते", ezy: "सब कुछ लिखित में, पूरी साफ़ बात" },
                                        { agent: "काम मिलने के बाद मदद नहीं करते", ezy: "काम शुरू होने के बाद भी मदद मिलती है" },
                                        { agent: "काम के नियम बदल देते हैं", ezy: "काम स्वीकार करने से पहले साफ बताया जाता है" },
                                        { agent: "पैसा देर से मिलता है या कट जाता है", ezy: "पैसा सीधे और समय पर मिलता है" },
                                        { agent: "रहने की सुविधा नहीं देते", ezy: "जरूरत पर सुरक्षित रहने की सुविधा मिलती है" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-orange-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-orange-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4">
                            {[
                                { agent: "पैसा पहले ही ले लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                { agent: "कोई लिखित भरोसा नहीं देते", ezy: "सब कुछ लिखित में, पूरी साफ़ बात" },
                                { agent: "काम मिलने के बाद मदद नहीं करते", ezy: "काम शुरू होने के बाद भी मदद मिलती है" },
                                { agent: "काम के नियम बदल देते हैं", ezy: "काम स्वीकार करने से पहले साफ बताया जाता है" },
                                { agent: "पैसा देर से मिलता है या कट जाता है", ezy: "पैसा सीधे और समय पर मिलता है" },
                                { agent: "रहने की सुविधा नहीं देते", ezy: "जरूरत पर सुरक्षित रहने की सुविधा मिलती है" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-orange-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-orange-50">
                                        <div className="text-xs font-bold text-orange-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">छत्तीसगढ़ के लोगों को क्या-क्या मिलेगा</h2>
                            <p className="text-sm md:text-lg text-orange-700 font-bold italic mb-8 uppercase tracking-wide">
                                छत्तीसगढ़ से 3 गुना ज़्यादा कमाएँ, इज़्ज़त और सुरक्षा के साथ
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर है।", icon: BanknotesIcon },
                                { title: "छत्तीसगढ़ से ज़्यादा पैसे", desc: "रायपुर, बिलासपुर और आसपास से कहीं ज़्यादा कमाएँगे।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "रोज़ 8–10 घंटे के काम में हफ्ते में 1 छुट्टी या 24 घंटे काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलते वक्त नेस्ट हॉस्टल में मुफ़्त रहने की जगह (सिर्फ महिलाओं के लिए)।", icon: ShieldCheckIcon },
                                { title: "रेफरल बोनस", desc: "किसी योग्य व्यक्ति को जोड़ें, वह एक महीना काम पूरा करे तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-orange-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3 text-orange-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-orange-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">काम कैसे मिलेगा</h2>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-orange-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "फ़ोन करें या ऑनलाइन फॉर्म भरें।" },
                                    { step: 2, title: "अपने काम का अनुभव और पसंद बताएँ।" },
                                    { step: 3, title: "हम आपकी जानकारी के हिसाब से सही घर ढूँढते हैं।" },
                                    { step: 4, title: "घर वालों से वीडियो कॉल पर बात करें।" },
                                    { step: 5, title: "काम पक्का करें और हमारी मदद से सुरक्षित जाएँ।" },
                                    { step: 6, title: "हमारी टीम के साथ काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-orange-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
                                            {item.step}
                                        </div>

                                        {/* Right Side */}
                                        <div className="w-5/12 text-left pl-6 md:pl-10">
                                            {index % 2 !== 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-orange-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-orange-700 hover:shadow-lg transition-all"
                            >
                                अभी आवेदन करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-orange-600 hover:bg-orange-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="orange" lang="hi" location="Chhattisgarh" />

                {/* CTA Section */}
                <section className="section-padding bg-orange-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                छत्तीसगढ़ में कम पैसों से परेशान न रहें। बेहतर सैलरी, सुरक्षित काम और अच्छे भविष्य के लिए बैंगलोर आएँ। आज ही ईज़ीहेल्पर्स से जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-orange-50 font-bold italic opacity-90">
                                अपनी पसंद का काम चुनें और इज़्ज़त के साथ कमाएँ।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    नौकरी के लिए आवेदन करें
                                </Link>
                                <Link
                                    href="/helper-jobs/hin"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    काम के प्रकार देखें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight uppercase tracking-tight max-w-xl mx-auto">
                                अक्सर पूछे जाने वाले सवाल
                            </h2>
                            <div className="w-32 h-1 bg-orange-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
