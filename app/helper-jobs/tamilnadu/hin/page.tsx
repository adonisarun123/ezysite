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
    title: 'बैंगलोर में तमिलनाडु वालों के लिए घरेलू हेल्पर जॉब',
    description: 'बैंगलोर में सुरक्षित घरेलू जॉब के साथ अच्छी कमाई करें। तमिलनाडु के लोगों को रहने और खाने की सुविधा भी मिलती है।',
    openGraph: {
        title: 'बैंगलोर में तमिलनाडु वालों के लिए घरेलू हेल्पर जॉब',
        description: 'बैंगलोर में सुरक्षित घरेलू जॉब के साथ अच्छी कमाई करें। तमिलनाडु के लोगों को रहने और खाने की सुविधा भी मिलती है।',
        url: 'https://www.ezyhelpers.com/helper-jobs/tamilnadu/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/tamilnadu/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/tamilnadu',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/tamilnadu/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या रजिस्ट्रेशन मुफ़्त है?',
        answer: 'हाँ, रजिस्ट्रेशन बिल्कुल मुफ़्त है। बैंगलोर में काम पाने के लिए कोई पैसा नहीं देना है, कोई परेशानी नहीं।',
    },
    {
        question: 'क्या काम शुरू करने से पहले परिवार से बात हो सकती है?',
        answer: 'हाँ, काम पक्का करने से पहले वीडियो कॉल पर घर वालों से बात होती है। आप सुरक्षित और आश्वस्त महसूस करके ही हाँ कहें।',
    },
    {
        question: 'कौन से कागज़ात चाहिए?',
        answer: 'सिर्फ आधार कार्ड और स्थानीय पते का पहचान पत्र की फोटो WhatsApp पर भेजना काफी है। किसी भी तरह की फिजिकल कॉपी लेकर दफ्तर आने की जरूरत नहीं है। पूरी जानकारी ऑनलाइन ही वेरिफिकेशन के लिए साझा की जा सकती है।',
    },
    {
        question: 'क्या रोज़ अच्छा खाना मिलेगा?',
        answer: 'हाँ, 24 घंटे वाले काम में आपको दिन में 3 समय का खाना मिलता है।',
    },
    {
        question: 'क्या सैलरी समय पर मिलेगी?',
        answer: 'हाँ, घर वाले हर महीने 10 तारीख से पहले सैलरी सीधे आपके खाते में भेजते हैं। कोई देरी नहीं, कोई कटौती नहीं।',
    }
]

export default function HelperJobsTamilNaduHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'तमिलनाडु' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap uppercase">हिंदी</span>
                            <Link
                                href="/helper-jobs/tamilnadu"
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
                <section className="relative bg-gradient-to-br from-violet-900 via-violet-600 to-violet-800 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white italic">तमिलनाडु के लोगों के लिए बैंगलोर में भरोसेमंद घरेलू नौकरी</h1>
                            <p className="text-sm sm:text-base md:text-xl text-violet-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                क्या आपको धोखे या गलत काम का डर रहता है? ईज़ीहेल्पर्स के साथ बैंगलोर में तमिलनाडु के लोगों को साफ काम की जानकारी, सुरक्षित घर और काम शुरू करने से पहले और बाद में पूरी मदद मिलती है।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 italic">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'बैंगलोर में सुरक्षित काम',
                                    'समय पर सैलरी देते हैं',
                                    'काम का पक्का कागज़ मिलता है',
                                    'मुफ़्त में ट्रेनिंग दी जाती है'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto font-bold">
                                <Link href="/helper-registration" className="bg-white text-violet-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
                                <div className="text-lg md:text-4xl font-bold text-violet-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">9</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">जॉब के प्रकार</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">100%</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">सीधे सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-violet-600">₹0</div>
                                <div className="text-[9px] md:text-base font-bold text-gray-500 italic">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">बैंगलोर में तमिलनाडु के लोगों के लिए काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto font-bold italic">हम आपके रोज़ के काम के अनुभव और सुविधा के हिसाब से कई तरह के काम दिलाते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    desc: "रोज़ घर की देखभाल करना और घरेलू काम पूरी ज़िम्मेदारी से संभालना।",
                                    features: ["रोज़ घर साफ और सुथरा रखना", "बर्तन, कपड़े और चादरें धोना", "कमरे हमेशा साफ रखना", "झाड़ू-पोंछा लगाना", "धूल साफ करना और बाथरूम साफ रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम"]
                                },
                                {
                                    title: "घर के कुक का काम",
                                    desc: "रोज़ का खाना बनाना और रसोई साफ और व्यवस्थित रखना।",
                                    features: ["रोज़ परिवार के लिए खाना बनाना", "राशन की योजना और ख़रीदारी में मदद करना", "रसोई को हमेशा साफ रखना", "घर के तरीके के हिसाब से खाना बनाना", "खाने को ढककर और सही जगह पर रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    desc: "बच्चों का पूरा ध्यान रखना, साफ-सफाई और सुरक्षा का हर वक्त ख़याल रखना।",
                                    features: ["रोज़ समय पर बच्चों को खाना खिलाना", "पढ़ाई और खेलने में साथ देना", "बच्चों को नहलाना और कपड़े पहनाना", "बच्चों को सही समय पर सुलाना", "खिलौने और कमरा साफ और सुरक्षित रखना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    desc: "बड़े-बुज़ुर्गों की रोज़ की ज़रूरतों में मदद करना, आराम देना और धैर्य से साथ रहना।",
                                    features: ["बुज़ुर्गों को चलने और नहाने में मदद करना", "बिना चूके समय पर दवाइयाँ देना", "उनसे बात करना और भावनात्मक सहारा देना", "उनके लिए रोज़ सरल और नरम खाना बनाना", "हमेशा घर में सुरक्षित माहौल बनाए रखना", "रोज़ उनका साथ देना और देखभाल करना"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    desc: "घर पर बीमार व्यक्ति की मदद करना और उनके आराम का ध्यान रखना।",
                                    features: ["रोज़ की दिनचर्या में सही तरीके से मदद करना", "बाथरूम जाने और खाने में मदद करना", "चादरें बदलना और जगह साफ रखना", "कोई भी दिक्कत तुरंत बताना", "डॉक्टर की बुनियादी बातों का पालन करना", "24 घंटे रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम"]
                                },
                                {
                                    title: "पति-पत्नी का घर संभालने का काम",
                                    desc: "पति-पत्नी मिलकर घर का सारा काम जिम्मेदारी के साथ करते हैं। रहने की जगह दी जाती है।",
                                    features: ["पति-पत्नी मिलकर पूरा घर संभालना", "कमरे, रसोई और आसपास की जगह रोज़ साफ करना", "कचरा बाहर फेंकना और साफ-सफाई रखना", "ज़रूरत हो तो जानवरों का भी ध्यान रखना", "दोनों के लिए अलग रहने की जगह मिलती है", "दोनों मिलकर सुरक्षित तरीके से कमाएँ"]
                                },
                                {
                                    title: "पति-पत्नी का चौकीदार का काम",
                                    desc: "पति-पत्नी मिलकर अपार्टमेंट और स्वतंत्र घरों में आने-जाने, गेट और सुरक्षा का ध्यान रखते हैं।",
                                    features: ["मिलकर अपार्टमेंट या घर की रखवाली करना", "दिन और रात आने-जाने वालों पर ध्यान रखना", "रोज़ सही समय पर गेट खोलना और बंद करना", "सुरक्षा के आसान नियमों का ध्यान रखना", "हमेशा सावधान रहना और कोई भी समस्या तुरंत बताना", "दोनों के लिए रहने की जगह मिलती है"]
                                },
                                {
                                    title: "जापा का काम (माँ-बच्चे की देखभाल)",
                                    desc: "बच्चा होने के बाद माँ और नवजात शिशु की पूरे ध्यान से देखभाल करना।",
                                    features: ["माँ और नवजात का सही तरीके से ध्यान रखना", "रोज़ दूध पिलाने और डकार दिलाने में मदद करना", "माँ के ठीक होने में रोज़ साथ देना", "बच्चे का सामान और कमरा साफ और सुरक्षित रखना", "माँ और बच्चे की मालिश करना", "24 घंटे रहने का काम, परिवार की पूरी मदद"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    desc: "पति-पत्नी मिलकर फार्महाउस की सफाई और संपत्ति की देखभाल जिम्मेदारी से करते हैं।",
                                    features: ["फार्महाउस की रोज़ की सफाई का काम करना", "पौधों को पानी देना और बगीचे की नियमित देखभाल करना", "ज़रूरत हो तो रोज़ खाना बनाने में मदद करना", "आने-जाने वालों और संपत्ति की सुरक्षा पर ध्यान रखना", "ज़रूरत हो तो जानवरों की देखभाल करना", "खाने के साथ कमरा मिलेगा"]
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl p-6 border border-violet-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-violet-700 mb-3 group-hover:text-violet-800 relative z-10 italic">{item.title}</h3>
                                    <p className="text-gray-700 font-bold text-sm mb-5 leading-relaxed relative z-10 italic">{item.desc}</p>
                                    <div className="space-y-2 relative z-10 font-bold">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-violet-600 text-[10px] uppercase tracking-widest flex items-center gap-1 relative z-10 italic">
                                        और जानें <span>→</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Tamil Nadu Helpers */}
                <section className="section-padding bg-violet-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display italic">बैंगलोर में तमिलनाडु वालों को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-bold italic">बैंगलोर के परिवार तमिलनाडु के लोगों को इसलिए बुलाते हैं</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4 font-bold">
                                {['स्वभाव से ईमानदार और मेहनती होते हैं', 'रोज़ साफ-सुथरी और अनुशासित आदतें रखते हैं', 'हमेशा सम्मान से और मीठे बोल बोलते हैं', 'अपने काम की पूरी जिम्मेदारी लेते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-violet-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-violet-600 shrink-0" />
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
                            <p className="text-sm md:text-xl text-gray-600 font-bold italic">देखिए क्यों तमिलनाडु के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-violet-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 italic">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 italic">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "नौकरी पक्की होने से पहले ही मोटा कमीशन ले लेते हैं", ezy: "सभी के लिए मुफ़्त रजिस्ट्रेशन, कोई छुपी फीस नहीं" },
                                        { agent: "आपकी सुरक्षा के लिए कोई लिखित जानकारी नहीं देते", ezy: "पूरी सुरक्षा और साफ जानकारी के लिए काम का पक्का कागज़" },
                                        { agent: "नौकरी लगाने के बाद गायब हो जाते हैं", ezy: "हमारी टीम हमेशा मदद और मार्गदर्शन के लिए मौजूद है" },
                                        { agent: "काम शुरू होने के बाद अचानक नियम बदल देते हैं", ezy: "काम शुरू करने से पहले सारी जानकारी साफ बताई जाती है" },
                                        { agent: "सैलरी की दिक्कत और देरी बहुत आम बात है", ezy: "घर वाले सीधे समय पर सैलरी देते हैं" },
                                        { agent: "कठिनाई या काम बदलने पर कोई मदद नहीं", ezy: "महिलाओं के लिए कठिनाई में मुफ़्त सुरक्षित रहने की सुविधा" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-violet-50 font-bold">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-violet-500 font-bold text-xl">✓</span>
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
                                { agent: "नौकरी पक्की होने से पहले ही मोटा कमीशन ले लेते हैं", ezy: "सभी के लिए मुफ़्त रजिस्ट्रेशन, कोई छुपी फीस नहीं" },
                                { agent: "आपकी सुरक्षा के लिए कोई लिखित जानकारी नहीं देते", ezy: "पूरी सुरक्षा और साफ जानकारी के लिए काम का पक्का कागज़" },
                                { agent: "नौकरी लगाने के बाद गायब हो जाते हैं", ezy: "हमारी टीम हमेशा मदद और मार्गदर्शन के लिए मौजूद है" },
                                { agent: "काम शुरू होने के बाद अचानक नियम बदल देते हैं", ezy: "काम शुरू करने से पहले सारी जानकारी साफ बताई जाती है" },
                                { agent: "सैलरी की दिक्कत और देरी बहुत आम बात है", ezy: "घर वाले सीधे समय पर सैलरी देते हैं" },
                                { agent: "कठिनाई या काम बदलने पर कोई मदद नहीं", ezy: "महिलाओं के लिए कठिनाई में मुफ़्त सुरक्षित रहने की सुविधा" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-violet-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-bold">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-violet-50 italic">
                                        <div className="text-xs font-bold text-violet-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display italic">तमिलनाडु के लोगों को क्या-क्या मिलेगा</h2>
                            <p className="text-sm md:text-lg text-violet-700 font-bold italic mb-8">
                                बैंगलोर में घरेलू नौकरी करके इज़्ज़त, सुरक्षा और स्थिरता के साथ बेहतर ज़िंदगी जिएँ।
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर", icon: BanknotesIcon },
                                { title: "तमिलनाडु से ज़्यादा सैलरी", desc: "चेन्नई, मदुरई या सेलम की नौकरियों से कहीं ज़्यादा कमाई", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "सैलरी सीधे आपके बैंक में आती है, कोई कटौती नहीं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना बनाना, देखभाल, सफाई और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बिस्तर/गद्दा के साथ बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का अच्छा खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "पूरे दिन (रोज़ 8–10 घंटे) के काम में हफ्ते में 1 छुट्टी या 24 घंटे रहने के काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलना हो या कोई दिक्कत हो, तो नेस्ट हॉस्टल में रहने की जगह मिलती है।", icon: PhoneIcon },
                                { title: "किसी योग्य व्यक्ति को जोड़ें, ₹500 का लाभ पाएं", desc: "आपके पहचान वालों को काम दिलाएं। वे एक महीना काम पूरा करें तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-violet-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-50 rounded-lg flex items-center justify-center mb-3 text-violet-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-violet-800 mb-2 leading-tight italic">{benefit.title}</h3>
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-violet-100 rounded-full"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-violet-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-violet-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-violet-700 hover:shadow-lg transition-all"
                            >
                                बैंगलोर में नौकरी के लिए अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-violet-600 hover:bg-violet-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="violet" lang="hi" location="Tamil Nadu" />

                {/* CTA Section */}
                <section className="section-padding bg-violet-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight max-w-4xl mx-auto italic">
                                अब अपने इलाके में काम की चिंता छोड़िए। बैंगलोर में सुरक्षित घरों में काम करें, अच्छे परिवारों के साथ रहें और पूरी मदद पाएं। बिना डर और परेशानी के अपने काम में आगे बढ़ें। आज ही ईज़ीहेल्पर्स से जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-violet-50 font-bold italic opacity-90 text-center">
                                अप्लाई करें और अपने अच्छे भविष्य की शुरुआत करें।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center font-bold">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-violet-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <div className="w-32 h-1 bg-violet-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
