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
    title: 'आंध्र प्रदेश के लोगों के लिए बैंगलोर में घरेलू नौकरी',
    description: 'बैंगलोर में ऐसा काम चुनें जहाँ काम साफ बताया जाता है, परिवार अच्छे हैं, और आप सुकून से काम कर सकते हैं।',
    openGraph: {
        title: 'आंध्र प्रदेश के लोगों के लिए बैंगलोर में घरेलू नौकरी',
        description: 'बैंगलोर में ऐसा काम चुनें जहाँ काम साफ बताया जाता है, परिवार अच्छे हैं, और आप सुकून से काम कर सकते हैं।',
        url: 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/andhrapradesh/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या रजिस्ट्रेशन के लिए पहचान पत्र देना ज़रूरी है?',
        answer: 'हाँ, जाँच के लिए बुनियादी पहचान पत्र ज़रूरी है। आप WhatsApp पर आधार की कॉपी आसानी से भेज सकते हैं। आपकी जानकारी सुरक्षित रहती है।',
    },
    {
        question: 'क्या पुरुष हेल्पर्स के लिए भी काम मिलता है?',
        answer: 'हाँ, हम पुरुष हेल्पर्स को भी काम देते हैं। सफाई, हाउसकीपिंग, सहायता और दूसरे घरेलू काम के लिए अपने हुनर और अनुभव के हिसाब से अप्लाई कर सकते हैं।',
    },
    {
        question: 'क्या मैं काम का प्रकार खुद चुन सकता/सकती हूँ?',
        answer: 'हाँ, आपकी सुविधा और अनुभव के हिसाब से पूरा विकल्प मिलता है। खाना, सफाई, बच्चों की देखभाल, बुज़ुर्गों की देखभाल या मरीज़ देखभाल में से चुनें, हम सही घर ढूँढते हैं।',
    },
    {
        question: 'रजिस्ट्रेशन के बाद कितनी जल्दी काम मिलेगा?',
        answer: 'आपकी जानकारी और घर वालों की उपलब्धता के हिसाब से कुछ दिनों में काम मिल सकता है। हम जल्द से जल्द सही काम ढूँढने की कोशिश करते हैं।',
    },
    {
        question: 'काम शुरू करने से पहले सब समझाया जाएगा?',
        answer: 'हाँ, काम स्वीकार करने से पहले सारी जानकारी साफ बताई जाती है। घर वालों से वीडियो कॉल पर बात भी होती है, उसके बाद ही तय करें।',
    }
]

export default function HelperJobsAndhraHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'आंध्र प्रदेश' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/andhrapradesh"
                                className="w-10 h-5 bg-cyan-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-cyan-800 via-cyan-500 to-cyan-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white italic">आंध्र प्रदेश के लोगों के लिए बैंगलोर में भरोसेमंद घरेलू नौकरी</h1>
                            <p className="text-sm sm:text-base md:text-xl text-cyan-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                गाँव की कम कमाई से परेशान हैं? ईज़ीहेल्पर्स आंध्र प्रदेश के मेहनती लोगों को बैंगलोर के अच्छे घरों से जोड़ता है। कोई दलाल नहीं, कोई झंझट नहीं, बस पक्का काम।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 italic">यह जॉब आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'काम लेना या छोड़ना, पूरा फ़ैसला आपका',
                                    'काम शुरू करने से पहले वीडियो कॉल पर बात होती है',
                                    'हर महीने तय समय पर पैसे मिलते हैं'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto font-bold">
                                <Link href="/helper-registration" className="bg-white text-cyan-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                                    बैंगलोर में काम के लिए अप्लाई करें
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
                        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100 font-bold">
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">9</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">जॉब के प्रकार</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">100%</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">सीधे सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-cyan-600">₹0</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">बैंगलोर में आंध्र प्रदेश के लोगों के लिए काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-bold italic">हम आपके हुनर और अनुभव के हिसाब से कई तरह के काम दिलाते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "रोज़ घर साफ रखना, बर्तन और कपड़े धोना, कमरे व्यवस्थित रखना।",
                                    features: ["रोज़ घर साफ और सुथरा रखना", "बर्तन, कपड़े और चादरें धोना", "सभी कमरे ठीक और साफ रखना", "झाड़ू-पोंछा लगाना", "धूल साफ करना और बाथरूम साफ रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "घर के कुक का काम",
                                    desc: "परिवार के लिए खाना बनाना, राशन का ध्यान रखना और रसोई साफ रखना।",
                                    features: ["रोज़ परिवार के लिए खाना बनाना", "राशन की योजना बनाने में मदद करना", "किचन को साफ और स्वच्छ रखना", "किचन के काउंटर और बाकी चीज़ों की सफाई करना", "बचा हुआ खाना सही तरीके से रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "बच्चों का पूरा ध्यान रखना, उनकी दिनचर्या में मदद करना और उन्हें सुरक्षित रखना।",
                                    features: ["बच्चों को हर रोज़ समय पर खाना खिलाना", "पढ़ाई और खेलने में साथ देना", "बच्चों को नहलाना और कपड़े पहनाना", "रात को बच्चों को सुलाना", "खिलौने और कमरा साफ रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "घर के बड़े-बुज़ुर्गों का ध्यान रखना, उनकी मदद करना और भावनात्मक सहारा देना।",
                                    features: ["बुज़ुर्गों को चलने और नहाने में मदद करना", "समय पर दवाइयाँ देना", "उनसे बात करना और साथ रहना", "उनके लिए सरल खाना बनाना", "घर में हमेशा उनकी सुरक्षा का ध्यान रखना", "उनका साथ देना और उनकी देखभाल करना"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "घर पर बीमार व्यक्ति की मदद करना, साफ-सफाई और आराम का ध्यान रखना।",
                                    features: ["बीमार व्यक्ति के रोज़ के काम में मदद करना", "बाथरूम जाने और खाने में सहारा देना", "चादरें बदलना और साफ-सफाई बनाए रखना", "आराम देखना और ज़रूरत पर बताना", "डॉक्टर की बताई बातों का पालन करना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "पति-पत्नी मिलकर घर के अलग-अलग काम संभालते हैं। रहने की सुविधा मिलती है।",
                                    features: ["पति-पत्नी मिलकर घर संभालना", "कमरे, रसोई और आसपास की जगह साफ करना", "कचरा बाहर फेंकना और साफ-सफाई रखना", "ज़रूरत हो तो जानवरों का भी ध्यान रखना", "अलग रहने की जगह मिलती है", "दोनों मिलकर सुरक्षित तरीके से कमाएँ"]
                                },
                                {
                                    title: "पति-पत्नी का चौकीदार का काम",
                                    desc: "पति-पत्नी मिलकर अपार्टमेंट और स्वतंत्र घरों में आने-जाने, गेट और सुरक्षा का ध्यान रखते हैं।",
                                    features: ["मिलकर घर या अपार्टमेंट की रखवाली करना", "दिन और रात आने-जाने वालों पर ध्यान रखना", "समय पर गेट खोलना और बंद करना", "जो निर्देश दिए जाएं उनका पालन करना", "हमेशा सतर्क रहना और समस्या बताना", "रहने की जगह दी जाती है"]
                                },
                                {
                                    title: "जापा का काम (माँ-बच्चे की देखभाल)",
                                    desc: "बच्चा होने के बाद माँ और नवजात शिशु की पूरी देखभाल करना।",
                                    features: ["माँ और नवजात का ध्यान रखना", "बच्चे को दूध पिलाने में मदद करना", "माँ के आराम और ठीक होने में साथ देना", "बच्चे के कपड़े और कमरा साफ रखना", "माँ और बच्चे की मालिश करना", "24 घंटे रहने का काम, पूरी मदद मिलेगी"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "पति-पत्नी मिलकर फार्महाउस की देखभाल और रखरखाव करते हैं। रहने की जगह दी जाती है।",
                                    features: ["रोज़ फार्महाउस और बगीचा साफ रखना", "पौधों को पानी देना और आसपास की देखभाल करना", "ज़रूरत हो तो खाना भी बनाना", "आने-जाने वालों और संपत्ति पर ध्यान रखना", "ज़रूरत हो तो जानवरों का भी ख्याल रखना", "खाने के साथ कमरा मिलेगा"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-cyan-700 mb-3 group-hover:text-cyan-800 relative z-10 italic">{item.title}</h3>
                                    <p className="text-gray-700 font-bold text-sm mb-5 leading-relaxed relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10 font-bold">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-cyan-600 text-[10px] uppercase tracking-widest flex items-center gap-1 relative z-10 italic">
                                        और जानें <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Andhra Helpers */}
                <section className="section-padding bg-cyan-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display italic">बैंगलोर में आंध्र प्रदेश वालों को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-bold italic">बैंगलोर में घरेलू नौकरी करके इज़्ज़त और सुरक्षा के साथ ज़्यादा कमाएँ।</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4 font-bold">
                                {['मेहनती और अनुशासित होते हैं', 'साफ-सुथरे और व्यवस्थित रहते हैं', 'इज़्ज़तदार और शालीन स्वभाव के होते हैं', 'रोज़ के काम में पूरी लगन रखते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-cyan-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-cyan-600 shrink-0" />
                                        <span className="text-sm md:text-lg font-bold text-gray-800 italic leading-none">{item}</span>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">ईज़ीहेल्पर्स और दलाल में क्या फ़र्क है</h2>
                            <p className="text-sm md:text-xl text-gray-600 font-bold italic">देखिए क्यों आंध्र प्रदेश के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-cyan-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 italic">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 italic">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "पहली सैलरी से मोटा कमीशन काट लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                        { agent: "काम की बातों का कोई लिखित सबूत नहीं", ezy: "सब कुछ लिखित में, आपके हक़ की रक्षा" },
                                        { agent: "काम मिलने के बाद फ़ोन नहीं उठाते", ezy: "हमारी टीम हर वक्त मदद के लिए मौजूद है" },
                                        { agent: "नौकरी लगने के बाद काम बदल देते हैं", ezy: "काम स्वीकार करने से पहले काम का विवरण बताया जाता है" },
                                        { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "घर वाले समय पर पैसे देते हैं" },
                                        { agent: "कठिनाई में रहने की कोई व्यवस्था नहीं", ezy: "महिलाओं के लिए इमरजेंसी में सुरक्षित रहने की सुविधा" },
                                        { agent: "परिवार से दिक्कत आए तो कोई मदद नहीं", ezy: "काम बदलना हो तो पूरी मदद मिलती है" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-cyan-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-cyan-500 font-bold text-xl">✓</span>
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
                                { agent: "पहली सैलरी से मोटा कमीशन काट लेते हैं", ezy: "मुफ़्त का काम, कोई छुपी फीस नहीं" },
                                { agent: "काम की बातों का कोई लिखित सबूत नहीं", ezy: "सब कुछ लिखित में, आपके हक़ की रक्षा" },
                                { agent: "काम मिलने के बाद फ़ोन नहीं उठाते", ezy: "हमारी टीम हर वक्त मदद के लिए मौजूद है" },
                                { agent: "नौकरी लगने के बाद काम बदल देते हैं", ezy: "काम स्वीकार करने से पहले काम का विवरण बताया जाता है" },
                                { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "घर वाले समय पर पैसे देते हैं" },
                                { agent: "कठिनाई में रहने की कोई व्यवस्था नहीं", ezy: "महिलाओं के लिए इमरजेंसी में सुरक्षित रहने की सुविधा" },
                                { agent: "परिवार से दिक्कत आए तो कोई मदद नहीं", ezy: "काम बदलना हो तो पूरी मदद मिलती है" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-cyan-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-cyan-50 italic">
                                        <div className="text-xs font-bold text-cyan-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Salary Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">आंध्र प्रदेश के लोगों को क्या-क्या मिलेगा</h2>
                            <p className="text-sm md:text-lg text-cyan-700 font-bold italic mb-8">
                                बैंगलोर में घर का काम करके इज़्ज़त और सुरक्षा के साथ ज़्यादा कमाएँ।
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर", icon: BanknotesIcon },
                                { title: "आंध्र से ज़्यादा पैसे", desc: "विजयवाड़ा, गुंटूर या नेल्लोर की नौकरियों से कहीं ज़्यादा, हर महीने पक्की कमाई।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बिस्तर/गद्दा के साथ बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का अच्छा खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "पूरे दिन (रोज़ 8–10 घंटे) के काम में हफ्ते में 1 छुट्टी या 24 घंटे रहने के काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलना हो या कोई दिक्कत हो, तो नेस्ट हॉस्टल में रहने की जगह मिलती है।", icon: PhoneIcon },
                                { title: "किसी योग्य व्यक्ति को जोड़ें, ₹500 का लाभ पाएं", desc: "आपके पहचान वालों को काम दिलाएं। वे एक महीना काम पूरा करें तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-cyan-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-3 text-cyan-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-cyan-800 mb-2 leading-tight italic">{benefit.title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 font-bold leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display italic">जॉब कैसे मिलेगा</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto font-bold italic">फ़ोन करें या ऑनलाइन फॉर्म भरें।</p>
                        </div>

                        <div className="max-w-xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-cyan-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "अपना काम का अनुभव और हुनर बताएँ" },
                                    { step: 2, title: "हम आपकी जानकारी के हिसाब से सही घर ढूँढते हैं" },
                                    { step: 3, title: "घर वालों से वीडियो कॉल पर बात करें" },
                                    { step: 4, title: "काम पक्का करें और सुरक्षित तरीके से जाएँ" },
                                    { step: 5, title: "हमारी टीम के साथ काम शुरू करें" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-16 last:mb-0">
                                        {/* Left Side */}
                                        <div className="w-5/12 text-right pr-6 md:pr-10">
                                            {index % 2 === 0 ? (
                                                <h3 className="text-xs md:text-lg font-bold text-gray-800 leading-tight">{item.title}</h3>
                                            ) : null}
                                        </div>

                                        {/* Center Circle */}
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-cyan-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12 font-bold">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-cyan-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-cyan-700 hover:shadow-lg transition-all"
                            >
                                बैंगलोर में नौकरी के लिए अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-cyan-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-cyan-600 hover:bg-cyan-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="cyan" lang="hi" location="Andhra Pradesh" />

                {/* CTA Section */}
                <section className="section-padding bg-cyan-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight max-w-4xl mx-auto italic">
                                ऐसा भविष्य बनाएं जहाँ आप सीखें, आगे बढ़ें और सुरक्षित महसूस करें। ईज़ीहेल्पर्स का काम आपको स्थिरता, मदद और असली हुनर देने के लिए बना है। आज ही जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-cyan-50 font-bold italic opacity-90 text-center">
                                अप्लाई करें और अपने अच्छे भविष्य की शुरुआत करें।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-cyan-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
                                >
                                    नौकरी के लिए अप्लाई करें
                                </Link>
                                <Link
                                    href="/helper-jobs/hin"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-white/10 transition-all"
                                >
                                    अपनी पसंद का काम चुनें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12 px-4">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-display leading-tight max-w-xl mx-auto italic">
                                अक्सर पूछे जाने वाले सवाल
                            </h2>
                            <div className="w-32 h-1 bg-cyan-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
