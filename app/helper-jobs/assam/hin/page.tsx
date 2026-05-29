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
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'असम के लोगों के लिए बैंगलोर में घर का काम',
    description: 'घर के काम से ज़्यादा पैसे कमाएँ। असम वालों को सीधा काम, मुफ़्त नौकरी, सुरक्षित नौकरी और पूरी मदद मिलती है।',
    openGraph: {
        title: 'असम के लोगों के लिए बैंगलोर में घर का काम',
        description: 'घर के काम से ज़्यादा पैसे कमाएँ। असम वालों को सीधा काम, मुफ़्त नौकरी, सुरक्षित नौकरी और पूरी मदद मिलती है।',
        url: 'https://www.ezyhelpers.com/helper-jobs/assam/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/assam/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/assam',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/assam/hin'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या मुझे पहचान पत्र देना जरूरी है?',
        answer: 'नहीं, आप फोटो भेज सकते हैं, हम सुरक्षित तरीके से जांच कर लेते हैं।',
    },
    {
        question: 'मुझे पैसा कैसे मिलेगा?',
        answer: 'हर महीने 10 तारीख से पहले पैसा सीधे आपके बैंक खाते में आता है।',
    },
    {
        question: 'अगर मुझे काम पसंद न आए तो?',
        answer: 'कोई चिंता नहीं, हम आपको दूसरा काम दिलाते हैं।',
    },
    {
        question: 'अगर परिवार ज्यादा काम करवाए तो?',
        answer: 'आपका काम पहले से लिखा होता है, आप मना कर सकते हैं और हमें तुरंत बता सकते हैं।',
    },
    {
        question: 'क्या मैं परिवार चुन सकता हूँ?',
        answer: 'हाँ, आप पहले वीडियो पर बात करते हैं, फिर तय करते हैं।',
    },
    {
        question: 'क्या मुझे अलग कमरा मिलेगा?',
        answer: 'ज्यादातर घरों में अलग कमरा मिलता है, नहीं तो भी अलग जगह जरूर दी जाती है।',
    },
    {
        question: 'मुझे कितने समय तक काम करना होगा?',
        answer: 'ज्यादातर लोग 6 से 12 महीने रहते हैं, लेकिन जरूरत हो तो आप बदल सकते हैं।',
    }
]

export default function HelperJobsAssamHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'असम' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/assam"
                                className="w-10 h-5 bg-emerald-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap uppercase">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-emerald-800 via-emerald-500 to-emerald-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white uppercase">असम के लोगों के लिए बैंगलोर में भरोसेमंद घर का काम</h1>
                            <p className="text-sm sm:text-base md:text-xl text-emerald-50/90 leading-relaxed max-w-4xl mx-auto mb-8 font-medium italic">
                                कम पैसों में घर चलाना बंद करें। ईज़ीहेल्पर्स असम के मेहनती लोगों को बैंगलोर के अच्छे घरों से जोड़ता है। गुवाहाटी या सिलचर से 3 गुना ज़्यादा कमाएँ, कोई फीस नहीं, सब कुछ साफ लिखित।
                            </p>

                            <p className="text-sm md:text-xl font-semibold mb-6 text-yellow-300 uppercase tracking-widest">यह नौकरी आपके लिए क्यों अच्छी है</p>

                            <div className="flex flex-wrap justify-center gap-3 mb-10">
                                {[
                                    'बैंगलोर में सुरक्षित काम',
                                    'घर वाले सीधे पैसे देते हैं',
                                    'लिखित में सब तय होता है',
                                    'बेसिक ट्रेनिंग दी जाती है',
                                    'परिवार जैसा माहौल'
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-xs md:text-sm font-medium">
                                        ✓ {item}
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                                <Link href="/helper-registration" className="bg-white text-emerald-800 font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
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
                        <div className="grid grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100">
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">5,000+</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">हेल्पर्स काम कर रहे हैं</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">9</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">जॉब कैटेगरी</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">100%</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">डायरेक्ट पेमेंट</div>
                            </div>
                            <div>
                                <div className="text-lg md:text-4xl font-bold text-emerald-600">₹0</div>
                                <div className="text-[9px] md:text-base font-medium text-emerald-600/80">रजिस्ट्रेशन फीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Grid */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">बैंगलोर में असम वालों के लिए काम के प्रकार</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">हम आपके हुनर के हिसाब से कई तरह के काम देते हैं।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "घर की सफाई का काम",
                                    slug: "housekeeping-job-bangalore",
                                    desc: "रोज़ घर साफ रखना, बर्तन और कपड़े धोना, कमरे व्यवस्थित रखना।",
                                    features: ["रोज़ घर साफ और सुथरा रखना", "बर्तन, कपड़े और चादरें धोना", "कमरे ठीक और साफ रखना", "झाड़ू-पोंछा लगाना", "धूल साफ करना और बाथरूम साफ रखना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "खाना बनाने का काम",
                                    slug: "home-cook-jobs-bangalore",
                                    desc: "शाकाहारी और मांसाहारी खाना बनाएँ, राशन का ध्यान रखें, रसोई साफ रखें।",
                                    features: ["रोज़ परिवार के लिए खाना बनाना", "राशन और खर्चे का ध्यान रखना", "रसोई और बर्तन साफ रखना", "घर वालों की पसंद का खाना बनाना", "बचा हुआ खाना सही तरीके से रखना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बच्चों की देखभाल का काम",
                                    slug: "nanny-jobs-bangalore",
                                    desc: "बच्चों को संभालना, खाना खिलाना और उनका पूरा ध्यान रखना।",
                                    features: ["बच्चों को हर रोज़ समय पर खाना खिलाना", "उनके साथ खेलना", "पढ़ाई में मदद करना", "उन्हें सुलाना", "खिलौने और कमरा साफ रखें", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "बुज़ुर्गों की देखभाल का काम",
                                    slug: "elderly-care-jobs-bangalore",
                                    desc: "घर के बड़े-बुज़ुर्गों का ध्यान रखना, उनके साथ रहना, उनकी मदद करना।",
                                    features: ["बुज़ुर्गों को चलने और नहाने में मदद करना", "समय पर दवाइयाँ देना", "उनसे बात करना और साथ रहना", "उनके लिए खाना बनाना", "हमेशा घर में उनकी सुरक्षा का ध्यान रखना", "उनका ध्यान रखना"]
                                },
                                {
                                    title: "बीमार व्यक्ति की देखभाल का काम",
                                    slug: "patient-care-job-bangalore",
                                    desc: "घर पर बीमार व्यक्ति की मदद, उनका आराम और साफ-सफाई का ध्यान।",
                                    features: ["रोज़ बीमार व्यक्ति की मदद करना", "बाथरूम जाने और खाने में मदद करना", "चादरें बदलें और साफ रखना", "स्वास्थ्य में किसी भी प्रकार का बदलाव होने पर तुरंत सूचित करना", "डॉक्टर की सलाह के अनुसार देखभाल करना", "रहने का या पूरे दिन (रोज़ 8–10 घंटे) का काम मिल सकता है"]
                                },
                                {
                                    title: "पति-पत्नी के लिए घर का काम",
                                    slug: "live-in-couple-housekeeping-jobs-bangalore",
                                    desc: "पति-पत्नी मिलकर घर का सारा काम करते हैं। रहने की जगह दी जाती है।",
                                    features: ["पति-पत्नी मिलकर घर संभालना", "कमरे, रसोई और बगीचा साफ करना", "सफाई और कचरा उठाना", "ज़रूरत हो तो जानवरों का भी ध्यान रखना", "अलग रहने की जगह मिलती है", "दोनों मिलकर कमाएँ"]
                                },
                                {
                                    title: "पति-पत्नी के लिए चौकीदारी का काम",
                                    slug: "live-in-apartment-caretaker-jobs-bangalore",
                                    desc: "पति-पत्नी मिलकर अपार्टमेंट या घर की रखवाली करते हैं।",
                                    features: ["मिलकर अपार्टमेंट या घर की रखवाली करना", "दिन और रात आने-जाने वालों पर ध्यान रखना", "समय पर गेट बंद और खोलना", "जो भी निर्देश दिए जाएं, उनका पालन करना", "हमेशा सतर्क रहना और समस्या बताना", "दोनों के लिए रहने की जगह मिलती है"]
                                },
                                {
                                    title: "जापा सहायक का काम",
                                    slug: "japa-maid-job-bangalore",
                                    desc: "बच्चा होने के बाद माँ और नवजात शिशु की देखभाल करना।",
                                    features: ["माँ और नवजात शिशु की देखभाल करना", "दूध पिलाने और डकार दिलाने में मदद करें", "माँ के आराम और ठीक होने में साथ देना", "बच्चे के कपड़े और कमरा साफ रखना", "ज़रूरत हो तो रात को भी जागना", "24 घंटे रहने का काम, परिवार की पूरी मदद"]
                                },
                                {
                                    title: "फार्महाउस के लिए पति-पत्नी का काम",
                                    slug: "husband-wife-farmhouse-job-bangalore",
                                    desc: "पति-पत्नी मिलकर फार्महाउस की देखभाल और सुरक्षा करते हैं।",
                                    features: ["रोज़ फार्महाउस और बगीचा साफ रखना", "पौधों को पानी दें और देखभाल करना", "ज़रूरत हो तो खाना भी बनाना", "आने-जाने वालों और जगह पर ध्यान रखना", "वहाँ रहने वाले जानवरों का भी ख्याल रखना", "खाने के साथ कमरा मिलेगा"]
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/assam/${item.slug}/hin`}
                                    className="group bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-emerald-700 mb-3 group-hover:text-emerald-800 relative z-10">{item.title}</h3>
                                    <p className="text-gray-700 text-sm mb-5 leading-relaxed font-medium relative z-10">{item.desc}</p>
                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 font-bold text-emerald-600 text-[10px] uppercase tracking-widest group-hover:underline flex items-center gap-1 relative z-10">
                                        और जानें <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Families Prefer Assam Helpers */}
                <section className="section-padding bg-emerald-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">बैंगलोर के घर असम वालों को क्यों पसंद करते हैं</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">बैंगलोर के परिवार असम के लोगों को इसलिए बुलाते हैं:</p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-4">
                                {['ईमानदार और मेहनती होते हैं', 'बहुत साफ-सुथरे और ठीक से काम करते हैं', 'शांत और मीठे बोलने वाले होते हैं', 'अपने काम में पूरी लगन रखते हैं'].map((item, index) => (
                                    <div key={index} className="bg-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-sm border border-emerald-200 flex items-center gap-2 md:gap-3 hover:shadow-md transition-all">
                                        <CheckCircleIcon className="w-5 h-5 text-emerald-600" />
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
                            <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">देखिए क्यों असम के लोग ईज़ीहेल्पर्स पर भरोसा करते हैं</p>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-emerald-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2 uppercase tracking-widest">❌ स्थानीय दलाल (समस्या)</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2 uppercase tracking-widest">✅ ईज़ीहेल्पर्स (समाधान)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { agent: "पहले महीने की पूरी सैलरी ले लेते हैं", ezy: "मुफ़्त का काम, 100% पैसे आपके" },
                                        { agent: "उनकी बातों का कोई सबूत नहीं होता", ezy: "सब कुछ लिखित में, आपके हक़ की रक्षा" },
                                        { agent: "काम मिलते ही गायब हो जाते हैं", ezy: "हमारी टीम हर फ़ोन उठाती है" },
                                        { agent: "नौकरी लगने के बाद नियम बदल देते हैं", ezy: "काम शुरू करने से पहले सब बता देते हैं" },
                                        { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "घर वाले सीधे समय पर पैसे देते हैं" },
                                        { agent: "रहने की कोई इमरजेंसी व्यवस्था नहीं", ezy: "महिलाओं के लिए मुफ़्त इमरजेंसी हॉस्टल (नेस्ट)" }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200 font-medium">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-emerald-50 font-bold">
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
                                { agent: "पहले महीने की पूरी सैलरी ले लेते हैं", ezy: "मुफ़्त का काम, 100% पैसे आपके" },
                                { agent: "उनकी बातों का कोई सबूत नहीं होता", ezy: "सब कुछ लिखित में, आपके हक़ की रक्षा" },
                                { agent: "काम मिलते ही गायब हो जाते हैं", ezy: "हमारी टीम हर फ़ोन उठाती है" },
                                { agent: "नौकरी लगने के बाद नियम बदल देते हैं", ezy: "काम शुरू करने से पहले सब बता देते हैं" },
                                { agent: "पैसे देर से देते हैं या काट लेते हैं", ezy: "घर वाले सीधे समय पर पैसे देते हैं" },
                                { agent: "रहने की कोई इमरजेंसी व्यवस्था नहीं", ezy: "महिलाओं के लिए मुफ़्त इमरजेंसी हॉस्टल (नेस्ट)" }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border border-emerald-100 overflow-hidden shadow-sm">
                                    <div className="p-4 bg-red-50 border-b border-gray-100 italic">
                                        <div className="text-xs font-bold text-red-600 mb-1">❌ स्थानीय दलाल (समस्या)</div>
                                        <div className="text-gray-700 text-sm font-medium">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-emerald-50">
                                        <div className="text-xs font-bold text-emerald-600 mb-1">✅ ईज़ीहेल्पर्स (समाधान)</div>
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">असम के लोगों को क्या-क्या मिलेगा</h2>
                            <p className="text-sm md:text-lg text-emerald-700 font-bold italic mb-8 uppercase tracking-wide">
                                असम से 3 गुना ज़्यादा कमाएँ, इज़्ज़त और सुरक्षा के साथ
                            </p>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {[
                                { title: "हर महीने की सैलरी", desc: "₹20,000 से ₹35,000 तक, आपके काम और अनुभव पर निर्भर", icon: BanknotesIcon },
                                { title: "असम से ज़्यादा पैसे", desc: "गुवाहाटी, डिब्रूगढ़ या जोरहाट से तीन गुना ज़्यादा।", icon: StarIcon },
                                { title: "पैसे सीधे आपके पास", desc: "घर वाले सीधे आपके बैंक में पैसे भेजते हैं।", icon: CheckCircleIcon },
                                { title: "नया हुनर सीखें", desc: "खाना, सफाई और देखभाल के काम और बेहतर तरीके से सीखें।", icon: BriefcaseIcon },
                                { title: "रहने की जगह", desc: "24 घंटे के काम में आपको अलग कमरा और बुनियादी सुविधाएं दी जाती हैं।", icon: ShieldCheckIcon },
                                { title: "खाना", desc: "24 घंटे रहने वाले काम में रोज़ तीन वक्त का खाना मिलता है।", icon: HeartIcon },
                                { title: "छुट्टी", desc: "रोज़ 8–10 घंटे के काम में हफ्ते में 1 छुट्टी या 24 घंटे काम में महीने में 2 छुट्टियाँ।", icon: ClockIcon },
                                { title: "कठिनाई में मदद", desc: "काम बदलते वक्त नेस्ट हॉस्टल में मुफ़्त रहने की जगह (सिर्फ महिलाओं के लिए)।", icon: ShieldCheckIcon },
                                { title: "रेफरल बोनस", desc: "किसी योग्य व्यक्ति को जोड़ें, वह एक महीना काम पूरा करे तो आपको ₹500 मिलते हैं।", icon: UserPlusIcon }
                            ].map((benefit, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-emerald-100 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-3 text-emerald-600 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-base md:text-lg font-bold text-emerald-800 mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
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
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-emerald-100 rounded-full"></div>

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
                                        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-emerald-600 text-white rounded-full font-bold text-sm md:text-xl shadow-lg z-10 border-2 border-white">
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
                                className="inline-flex items-center justify-center bg-emerald-600 text-white font-bold text-base md:text-lg py-3 px-8 rounded-xl hover:bg-emerald-700 hover:shadow-lg transition-all"
                            >
                                अभी आवेदन करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold text-base md:text-lg py-3 px-8 rounded-xl border-2 border-emerald-600 hover:bg-emerald-50 transition-all"
                            >
                                हमें फ़ोन करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <ReferEarnSection variant="emerald" lang="hi" location="Assam" />

                {/* CTA Section */}
                <section className="section-padding bg-emerald-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 font-display leading-tight uppercase tracking-tight max-w-4xl mx-auto">
                                असम में कम पैसे कमाना बंद करें। बैंगलोर में सुरक्षित काम, ज़्यादा पैसे और पूरी मदद के साथ अपनी ज़िंदगी बदलें। आज ही ईज़ीहेल्पर्स से जुड़ें।
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-emerald-50 font-bold italic opacity-90">
                                अपनी पसंद का काम चुनें और इज़्ज़त के साथ कमाएँ।
                            </p>

                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-emerald-700 font-bold text-base md:text-lg py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-lg"
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
                            <div className="w-32 h-1 bg-emerald-500 mx-auto mt-6 rounded-full opacity-50"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
