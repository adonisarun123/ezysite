import type { Metadata } from 'next'
import DbHtmlContent from '@/components/DbHtmlContent'
import { getHtmlContent } from '@/lib/htmlContentSource'
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
import { getHelperJobFaqs } from '@/lib/helperJobsSource'

export const metadata: Metadata = {
    title: 'बिहार से बैंगलोर में घर का काम',
    description: 'कम पैसों से तंग? बिहार से बैंगलोर में घर का काम लें। सीधा पैसा, सुरक्षित घर, ईज़ीहेल्पर्स से मुफ़्त का काम।',
    openGraph: {
        title: 'बिहार से बैंगलोर में घर का काम',
        description: 'कम पैसों से तंग? बिहार से बैंगलोर में घर का काम लें। सीधा पैसा, सुरक्षित घर, ईज़ीहेल्पर्स से मुफ़्त का काम।',
        url: 'https://www.ezyhelpers.com/helper-jobs/bihar/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/bihar/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/bihar',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/bihar/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या कोई रजिस्ट्रेशन फीस लगती है?',
        answer: 'नहीं, रजिस्ट्रेशन बिल्कुल मुफ़्त है। कोई दलाल का पैसा नहीं, कोई छुपी फीस नहीं।',
    },
    {
        question: 'बैंगलोर में कितना कमा सकते हैं?',
        answer: '₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर बिहार में मिलने वाली ज़्यादातर नौकरियों से बहुत ज़्यादा।',
    },
    {
        question: 'खाना और रहने की जगह मिलेंगी?',
        answer: 'हाँ, रहने के काम में ज़्यादातर घरों में अलग कमरा मिलता है। कभी-कभी अलग न हो तो भी अपनी जगह, पलंग और बाथरूम मिलता है। रोज़ तीन वक्त का खाना भी मिलता है।',
    },
    {
        question: 'क्या बैंगलोर में काम करना सुरक्षित है?',
        answer: 'हाँ, हम सिर्फ अच्छे घरों से जोड़ते हैं। हमारी टीम आपसे जुड़ी रहती है और ज़रूरत पर मदद करती है।',
    },
    {
        question: 'काम पसंद न आए तो बदल सकते हैं?',
        answer: 'हाँ, हम आपको सुरक्षित तरीके से दूसरा काम दिलाते हैं। कोई दबाव नहीं।',
    },
    {
        question: 'पैसे समय पर मिलेंगे?',
        answer: 'हाँ, घर वाले हर महीने बिना देरी और बिना कटौती के सीधे आपके बैंक में पैसे डालते हैं।',
    },
    {
        question: 'काम से पहले घर वालों से बात हो सकती है?',
        answer: 'हाँ, हम वीडियो कॉल करवाते हैं ताकि आप खुद देख-समझकर काम स्वीकार करें।',
    }
]

export default async function HelperJobsBiharHindiPage() {
  const __dbHtml = await getHtmlContent("helper-jobs/bihar/hin")
  if (__dbHtml) return <DbHtmlContent content={__dbHtml} />

  const faqItems = await getHelperJobFaqs("helper-jobs/bihar/hin", faqs)
    return (
        <>
            <div lang="hi" className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'बिहार' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/bihar"
                                className="w-10 h-5 bg-indigo-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">बिहार के लोगों के लिए बैंगलोर में घर का काम</h1>
                            <p className="text-sm sm:text-base md:text-xl text-indigo-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                क्या आप बिहार में मेहनत कर रहे हैं लेकिन कमाई कम है? अब बैंगलोर आएँ और ज्यादा कमाई, सुरक्षित काम और अच्छा जीवन पाएँ। यहाँ आपको ऐसे परिवार मिलते हैं जो आपके काम की कद्र करते हैं और सम्मान देते हैं।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'बड़े शहर में सुरक्षित माहौल',
                                    'पैसे सीधे आपके पास आते हैं',
                                    'लिखित में सब कुछ तय',
                                    'नया हुनर सिखाया जाता है',
                                    'परिवार सम्मान से रखते हैं'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-indigo-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    बैंगलोर में काम के लिए अभी अप्लाई करें
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
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">डायरेक्ट सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-indigo-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-gray-500">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बिहार के लोगों के लिए बैंगलोर में काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके अनुभव और पसंद के हिसाब से अलग-अलग काम दिलाते हैं। आप जो काम करना चाहते हैं, वही चुन सकते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "परिवार की रोज़ की दिनचर्या में मदद करते हुए घर साफ और सुथरा रखें।",
                                    features: ["झाड़ू और पोछा ठीक से लगाना", "फर्नीचर की धूल साफ करना और बाथरूम साफ करना", "बर्तन, कपड़े और चादर धोना", "सोई और बैठने की जगह साफ रखना", "रसोई और बैठक की जगह साफ रखें", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "खाना बनाने का काम",
                                    desc: "परिवारों के लिए खाना बनाकर रोज़ की रसोई संभालें।",
                                    features: ["ताज़ा नाश्ता, दोपहर और रात का खाना बनाना", "घर वालों की पसंद का खाना बनाना", "बर्तन और रसोई साफ रखना", "बचा हुआ खाना सही तरीके से रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "हर दिन बच्चों की देखभाल ध्यान और पूरी जिम्मेदारी के साथ करें।",
                                    features: ["बच्चों को नहलाना और कपड़े पहनाना", "उनके लिए खाना और नाश्ता बनाना", "बच्चों के साथ खेलना और अच्छे तरीके सिखाना", "रात में बच्चों को सुलाना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "घर के बड़े-बुज़ुर्गों का रोज़ ध्यान रखें, उनका आराम और उनका साथ दें।",
                                    features: ["चलने और बैठने में मदद करना", "समय पर दवाई देना", "उनसे बात करना और खुश रखना", "नरम और हल्का खाना बनाना", "शांत और अच्छा माहौल रखना"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "घर पर बीमार व्यक्ति की देखभाल करते हुए उनका आराम और सफाई का ध्यान रखें।",
                                    features: ["बाथरूम जाने और कपड़े बदलने में मदद करें", "समय पर खाना और पानी दें", "बिस्तर और कमरे को साफ रखना", "स्वास्थ्य में बदलाव पर ध्यान देना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "पति-पत्नी मिलकर घर का सारा काम करते हैं।",
                                    features: ["दोनों एक ही घर में काम करते हैं", "कमरे, रसोई और बगीचे की सफाई", "कपड़े और कचरा संभालना", "जरूरत हो तो पालतू जानवर का ध्यान रखना", "24 घंटे रहने की जगह मिलती है"]
                                },
                                {
                                    title: "पति-पत्नी के लिए चौकीदारी का काम",
                                    desc: "पति-पत्नी मिलकर घरों की रखवाली करते हैं।",
                                    features: ["समय पर गेट खोलना और बंद करना", "आने-जाने वालों पर नजर रखना", "रात में सतर्क रहना", "सुरक्षा का प्रशिक्षण दिया जाता है", "दोनों के लिए रहने की सुविधा"]
                                },
                                {
                                    title: "माँ और नवजात की देखभाल का काम",
                                    desc: "बच्चा होने के बाद माँ और नवजात शिशु की देखभाल और ध्यान।",
                                    features: ["माँ को आराम करने में मदद करना", "बच्चे को नहलाना और साफ रखना", "बच्चे को खिलाना और डकार दिलाना", "बच्चे के कपड़े और कमरा साफ रखना", "जरूरत हो तो रात में जागना"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "पति-पत्नी मिलकर फार्महाउस का काम, रखरखाव और सुरक्षा संभालते हैं।",
                                    features: ["बगीचे और लॉन की सफाई", "पौधों को पानी देना और घास हटाना", "जरूरत हो तो हल्का खाना बनाना", "आने-जाने वालों पर नजर रखना", "खाने के साथ कमरा मिलेगा"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-indigo-700 mb-3 group-hover:text-indigo-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-indigo-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        और जानें <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Bihar Helpers */}
                <section className="section-padding bg-indigo-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">बैंगलोर के घर बिहार वालों को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">बैंगलोर के परिवार बिहार के लोगों को इसलिए चुनते हैं:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['मेहनती और ईमानदार होते हैं', 'ईमानदार और भरोसेमंद स्वभाव', 'बात जल्दी समझ लेते हैं', 'लंबे समय तक टिके रहते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-indigo-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-indigo-600" />
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
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">देखिए क्यों बिहार के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-indigo-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "आपके पैसों में से ऊँचा कमीशन लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                        { agent: "उनकी बातें कहीं लिखी नहीं होतीं", ezy: "सैलरी और काम का लिखित कागज़" },
                                        { agent: "काम लगाने के बाद फ़ोन नहीं उठाते", ezy: "हमारी टीम कभी भी मदद के लिए तैयार" },
                                        { agent: "काम शुरू होने के बाद नियम बदल देते हैं", ezy: "काम स्वीकार करने से पहले सब बताया जाता है" },
                                        { agent: "पैसे देर से मिलते हैं या काट लेते हैं", ezy: "पैसा सीधे और समय पर मिलता है" },
                                        { agent: "कोई कठिनाई आए तो कोई मदद नहीं", ezy: "जरूरत पर रहने की सुविधा" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-indigo-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-emerald-500 font-bold text-xl">✓</span>
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
                                { agent: "आपके पैसों में से ऊँचा कमीशन लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                { agent: "उनकी बातें कहीं लिखी नहीं होतीं", ezy: "सैलरी और काम का लिखित कागज़" },
                                { agent: "काम लगाने के बाद फ़ोन नहीं उठाते", ezy: "हमारी टीम कभी भी मदद के लिए तैयार" },
                                { agent: "काम शुरू होने के बाद नियम बदल देते हैं", ezy: "काम स्वीकार करने से पहले सब बताया जाता है" },
                                { agent: "पैसे देर से मिलते हैं या काट लेते हैं", ezy: "पैसा सीधे और समय पर मिलता है" },
                                { agent: "कोई कठिनाई आए तो कोई मदद नहीं", ezy: "जरूरत पर रहने की सुविधा" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-indigo-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-indigo-50">
                                        <div className="text-xs font-bold text-indigo-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बिहार के लोगों को क्या-क्या मिलेगा</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर ।", icon: BanknotesIcon },
                                { title: "बिहार से ज़्यादा पैसे", desc: "पटना, गया और आसपास की नौकरियों से बहुत ज़्यादा।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बिस्तर/गद्दा के साथ बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "रोज़ 8–10 घंटे के काम में हफ्ते में 1 छुट्टी या 24 घंटे काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलते वक्त नेस्ट हॉस्टल में मुफ़्त रहने की जगह (सिर्फ महिलाओं के लिए)।", icon: ShieldCheckIcon },
                                { title: "रेफरल बोनस", desc: "किसी योग्य व्यक्ति को जोड़ें, वह एक महीना काम पूरा करे तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-indigo-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 text-indigo-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-indigo-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-indigo-100 rounded-full"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-indigo-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all"
                            >
                                अभी आवेदन करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="indigo" lang="hi" location="Bihar" />

                {/* CTA Section */}
                <section className="section-padding bg-indigo-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                अब बिना डर के सुरक्षित और अच्छा काम पाएँ। यहाँ आपको साफ काम, सही पैसा और पूरा साथ मिलता है। आज ही ईज़ीहेल्पर्स से जुड़ें और अपने परिवार का भविष्य बनाएँ।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-indigo-50 font-bold italic opacity-90">
                                अपनी पसंद का काम चुनें और इज़्ज़त के साथ कमाएँ।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-indigo-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <div className="w-32 h-1 bg-indigo-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqItems} />
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
}
