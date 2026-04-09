import type { Metadata } from 'next'
import Link from 'next/link'
import { whatsappSendUrl } from '@/lib/whatsappUrl'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
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
    GiftIcon,
    BuildingOfficeIcon,
    HomeModernIcon,
    UserGroupIcon,
    HomeIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon,
    GlobeAltIcon,
    AcademicCapIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में लिव-इन कपल हाउसकीपिंग जॉब्स अभी अप्लाई करें',
    description: 'बैंगलोर में पति-पत्नी लिव-इन हाउसकीपिंग कपल जॉब्स। साथ रहें, खाना, कमरा और जॉब सपोर्ट के साथ कमाएं। कोई फीस नहीं।',
    openGraph: {
        title: 'बैंगलोर में लिव-इन कपल हाउसकीपिंग जॉब्स अभी अप्लाई करें',
        description: 'बैंगलोर में पति-पत्नी लिव-इन हाउसकीपिंग कपल जॉब्स। साथ रहें, खाना, कमरा और जॉब सपोर्ट के साथ कमाएं। कोई फीस नहीं।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बैंगलोर में 24-घंटे वाली नौकरियों में खाना और कमरा मिलता है?',
        answer: 'हाँ। लिव-इन कपल नौकरियों में खाना और एक अलग कमरा या सोने की जगह दी जाती है।',
    },
    {
        question: 'क्या कपल काम और घर का टाइप चुन सकते हैं?',
        answer: 'हाँ। आप अपनी सुविधा और अनुभव के अनुसार काम और घर का टाइप चुन सकते हैं।',
    },
    {
        question: 'लिव-इन कपल नौकरियों के लिए सैलरी कैसे दी जाती है?',
        answer: 'सैलरी हर महीने सीधे परिवार द्वारा दी जाती है, आमतौर पर 1–10 तारीख के बीच।',
    },
    {
        question: 'क्या लिव-इन नौकरियों में कपल छुट्टी ले सकते हैं?',
        answer: 'हाँ। कपल को हर महीने दो दिन की छुट्टी मिलती है।',
    },
    {
        question: 'क्या कपल अप्लाई कर सकते हैं अगर एक पार्टनर के पास कोई एक्सपीरियंस नहीं है?',
        answer: 'हाँ। हम नए और अनुभवी दोनों का स्वागत करते हैं और ट्रेनिंग देते हैं।',
    },
    {
        question: 'क्या होगा अगर कपल को परेशानी हो?',
        answer: 'हम हर कदम पर आपकी मदद करते हैं। जरूरत पड़ने पर परिवार से बात करते हैं और समाधान कराते हैं।',
    }
]

export default function HousekeepingCoupleJobsBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'झारखंड', href: '/helper-jobs/jharkhand/hin' },
                        { label: 'हाउसकीपिंग कपल जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/live-in-housekeeping-couple-job-bangalore"
                                className="w-10 h-5 bg-orange-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-5"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-orange-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-loose text-white whitespace-normal tracking-tight">झारखंड के हेल्पर्स के लिए बैंगलोर में लिव-इन हाउसकीपिंग कपल जॉब्स</h1>

                            <p className="text-[13px] sm:text-sm md:text-2xl font-semibold mb-6 text-orange-100 max-w-5xl mx-auto leading-loose">झारखंड से बैंगलोर जाना आपको सुरक्षित और आसान लगना चाहिए। हम आपकी मदद करते हैं ताकि आप बैंगलोर में लिव-इन हाउसकीपिंग कपल जॉब्स पा सकें, जहां आप और आपका पार्टनर/साथी आसानी और भरोसे के साथ काम कर सकें और साथ रह सकें।</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-loose sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-loose sm:flex-1">✓ एजेंट के बिना डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-loose sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-orange-700 font-bold text-lg py-4 px-12 rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 leading-loose"
                                >
                                    कपल जॉब्स के लिए अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 leading-loose"
                                >
                                    हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-orange-50 text-orange-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-orange-100 uppercase">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight leading-loose">सैलरी और खास फ़ायदे</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-orange-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-orange-600"></div>
                                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-orange-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-loose">बैंगलोर में लिव-इन हाउसकीपिंग कपल जॉब्स</h3>
                                <div className="text-3xl font-black text-orange-600 mb-6 font-display tracking-tight leading-loose">
                                    ₹30,000 से ₹35,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1 leading-loose">प्रति माह कुल सैलरी</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-orange-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-loose">फ्री रहने की जगह और फ्री खाना शामिल</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-orange-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-loose">24 घंटे घर में रहने वाला काम</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3 leading-loose uppercase tracking-tight">ईज़ीहेल्पर्स के साथ आपको क्या मिलता है</h3>
                                    <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "जॉइन करने से पहले साफ ड्यूटी बताई जाती हैं", icon: ClipboardDocumentListIcon },
                                        { text: "प्लेसमेंट के दौरान सही राह और सपोर्ट दिखाते हैं", icon: UserGroupIcon },
                                        { text: "परिवार के साथ सम्मानजनक काम का माहौल", icon: HeartIcon },
                                        { text: "पक्की लंबे समय तक नौकरी के मौके", icon: StarIcon },
                                        { text: "परिवार / मालिक द्वारा सीधे मासिक सैलरी", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-orange-50/30 p-4 rounded-xl border border-orange-50 hover:bg-orange-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-orange-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-orange-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-loose">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-orange-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-orange-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center leading-loose"
                                    >
                                        कपल जॉब्स के लिए अप्लाई करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Types Section */}
                <section className="section-padding bg-orange-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white leading-loose tracking-tight px-4">बैंगलोर में लिव-इन हाउसकीपिंग कपल जॉब्स के प्रकार</h2>
                            <p className="text-orange-100 max-w-4xl mx-auto font-medium leading-loose px-4 text-sm md:text-xl">एक लिव-इन हाउसकीपिंग जोड़ी के तौर पर, आप और आपका साथी परिवारों को रोज़ाना के घरेलू काम अच्छे से संभालने में मदद करते हैं। जब कपल साथ काम करते हैं, काम ज़्यादा ऑर्गनाइज़्ड हो जाता है।</p>
                            <div className="w-24 h-1 bg-orange-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose font-display uppercase tracking-widest">
                                        काम का प्रकार
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "आप और आपके साथी मालिक के घर में साथ रहते हैं",
                                            "अलग कमरा या जगह दी जाती है",
                                            "फ्री खाना शामिल है",
                                            "24 घंटे घर में रहने वाला काम"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                                <span className="text-orange-50 text-sm md:text-base leading-loose font-bold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Work Arrangement */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose font-display uppercase tracking-widest">
                                        काम की व्यवस्था
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "रोज़ाना सफाई, खाना बनाना और घर का काम",
                                            "दिन में आराम का सही समय",
                                            "जॉइन करने से पहले महीने में दो बार छुट्टी तय की जाती है"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                                <span className="text-orange-50 text-sm md:text-base leading-loose font-bold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-orange-200 border-b border-white/10 pb-3 leading-loose font-display uppercase tracking-widest text-center">
                                        यह किन लोगों के लिए सही है
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                        {[
                                            "झारखंड के कपल्स जोड़ी",
                                            "बैंगलोर में खाने और रहने की जगह वाली लिव-इन जॉब्स ढूंढ रहे कपल्स",
                                            "भरोसेमंद काम के मौके ढूंढ रहे कपल्स"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 bg-white/5 p-3 rounded-xl">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></div>
                                                <span className="text-orange-50 text-[10px] md:text-xs leading-loose font-extrabold">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-12 text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-orange-100 text-lg md:text-xl font-bold leading-loose">ये नौकरी आपको किराया और रहने का खर्च बचाने में मदद करते हैं, जबकि दोनों पार्टनर मिलकर कमाते हैं।</p>
                            </div>

                            <div className="flex justify-center mt-12">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex py-4 px-10 bg-white text-orange-900 font-black rounded-xl hover:bg-orange-50 transition-all shadow-2xl transform hover:scale-105 leading-loose"
                                >
                                    हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-loose tracking-tight px-4">लिव-इन हाउसकीपिंग कपल के काम की ज़िम्मेदारियाँ</h2>
                                <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-orange-50 rounded-3xl p-8 md:p-10 border border-orange-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 leading-loose font-display uppercase tracking-wider">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-orange-600" />
                                        रोज़ के काम
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'फ़र्श पर झाड़ू लगाना और पोछा लगाना',
                                            'कमरे, किचन और बाथरूम साफ़ करना',
                                            'बर्तन धोना',
                                            'फ़र्नीचर और जगहों पर धूल झाड़ना',
                                            'ज़रूरत हो तो सादा खाना बनाना',
                                            'घर को साफ़-सुथरा और ऑर्गनाइज़ रखना'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-orange-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-black leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Additional Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center shadow-2xl">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-orange-400 leading-loose font-display uppercase tracking-wider">
                                        <SparklesIcon className="w-8 h-8" />
                                        अन्य काम
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'पेड़-पौधों की देखभाल में मदद',
                                            'घर के छोटे-मोटे काम',
                                            'सिर्फ़ वही काम जो जॉइन करने से पहले बताया गया हो'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-orange-50 font-black leading-loose">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-orange-300 font-black italic text-sm leading-loose">साफ़ उम्मीदें। सम्मानजनक काम।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Locations Grid */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose tracking-tight px-4">बैंगलोर में आपको लिव-इन हाउसकीपिंग कपल जॉब्स कहाँ मिल सकती हैं</h2>
                            <div className="w-24 h-1.5 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "अपार्टमेंट", desc: "कामकाजी परिवारों के लिए रोज़ाना की सफाई और घर का सपोर्ट।", icon: BuildingOfficeIcon },
                                { title: "गेटेड कम्युनिटीज़", desc: "नियमित हाउसकीपिंग और मेंटेनेंस का काम।", icon: BuildingOfficeIcon },
                                { title: "विला", desc: "पक्की लंबे समय तक चलने वाली नौकरियों के साथ पूरे घर की देखभाल।", icon: HomeModernIcon },
                                { title: "फ़ैमिली होम्स", desc: "रोज़ाना के घरेलू कामों को मैनेज करने में परिवारों की मदद।", icon: HomeIcon },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors shadow-sm">
                                        <item.icon className="w-6 h-6 text-current" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm font-bold text-gray-500 leading-loose">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-14 text-center max-w-4xl mx-auto px-4">
                            <p className="text-xl md:text-2xl font-black text-orange-700 leading-loose">परिवार भरोसेमंद पति-पत्नी कपल्स को पसंद करते हैं जो मिलकर काम मैनेज कर सकें और घर को आसानी से मेंटेन कर सकें।</p>
                        </div>
                    </div>
                </section>

                {/* Other Categories Section */}
                <section className="section-padding bg-white border-t border-gray-100">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose tracking-tight px-4">बैंगलोर में दूसरी कपल जॉब कैटेगरी</h2>
                            <p className="text-gray-600 text-sm md:text-xl font-black leading-loose px-4 max-w-4xl mx-auto">बैंगलोर में लिव-इन हाउसकीपिंग कपल जॉब्स के साथ, हम आपको अन्य सुरक्षित काम के चॉइस भी देते हैं:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "ड्राइवर और हाउसकीपर कपल जॉब्स", desc: "एक पार्टनर ड्राइविंग संभालता है, दूसरा घर का काम।", icon: BriefcaseIcon },
                                { title: "कुक और हाउसकीपर कपल जॉब्स", desc: "रोज़ाना की हाउसकीपिंग के साथ खाना बनाना।", icon: StarIcon },
                                { title: "केयरटेकर और हाउसकीपिंग कपल जॉब्स", desc: "एक पार्टनर बुज़ुर्ग या बच्चों की देखभाल करता है, दूसरा सफाई संभालता है।", icon: HeartIcon }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                                        <item.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-gray-600 font-bold leading-loose">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-orange-50 rounded-3xl p-8 md:p-16 shadow-xl border border-orange-100 text-center px-4">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-loose tracking-tight px-4">कौन अप्लाई कर सकता है</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left mt-10">
                                {[
                                    { text: "पति-पत्नी कपल एक साथ अप्लाई कर रहे हैं", icon: UserGroupIcon },
                                    { text: "उम्र: 20–40 साल", icon: ClockIcon },
                                    { text: "शिक्षा: बेसिक शिक्षा काफी है", icon: AcademicCapIcon },
                                    { text: "अनुभव: फ्रेशर्स और अनुभवी हेल्पर्स स्वागत हैं", icon: StarIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-orange-100 h-full">
                                        <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 text-orange-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-black text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-orange-600 p-6 rounded-2xl inline-block border-2 border-white shadow-xl">
                                <p className="text-white font-black text-lg md:text-xl leading-loose">प्लेसमेंट से पहले बेसिक ट्रेनिंग दी जाती है</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-orange-800 to-orange-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center leading-loose tracking-tight px-4">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                <p className="text-orange-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-black leading-loose px-4">
                                    हम झारखंड और पूरे भारत के हेल्पर को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-orange-300 uppercase tracking-widest leading-loose">हम इन पर ध्यान देते हैं:</h3>
                                        <ul className="space-y-4 text-center lg:text-left">
                                            {[
                                                'बैंगलोर में इज्ज़तदार नौकरी',
                                                'सुरक्षित और भरोसेमंद परिवार',
                                                'हेल्पर की भलाई और लंबे समय तक समर्थन'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-black">
                                                    <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-black mb-4 text-orange-300 uppercase tracking-widest leading-loose">हमारा मानना:</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight text-center">
                                            "हेल्पर के लिए अच्छे घर, परिवारों के लिए अच्छे हेल्पर"
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-orange-300 leading-loose uppercase tracking-tight">हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { text: "5,000+ हेल्पर को नौकरियां दी गई", highlight: true },
                                            { text: "10,000+ परिवारों को सपोर्ट किया", highlight: true },
                                            { text: "DWSSC and Skill India के साथ हेल्पर ट्रेनिंग" },
                                            { text: "सिर्फ इज्ज़तदार घरों में प्लेसमेंट" },
                                            { text: "काम शुरू होने से पहले पूरी जानकारी" },
                                            { text: "प्लेसमेंट के बाद लगातार सपोर्ट" },
                                            { text: "नौकरी बदलने में भी मदद" },
                                            { text: "नियमित सैलरी और लंबे समय तक नौकरी" },
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-orange-700/50 scale-105 shadow-xl border-white/30' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-7 h-7 text-orange-400 flex-shrink-0" />
                                                <span className="font-black text-sm md:text-base leading-tight">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-black mb-4 text-orange-200 uppercase tracking-widest flex items-center justify-center gap-3 leading-loose">
                                        <GlobeAltIcon className="w-6 h-6" /> जिन शहरों में हम काम करते हैं
                                    </h3>
                                    <p className="text-base md:text-xl font-black mb-8 text-orange-50 leading-loose">
                                        बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और बहुत कुछ।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose tracking-tight px-4">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1.5 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "सफाई, स्वच्छता और काम के सामान का बेसिक ट्रेनिंग", icon: AcademicCapIcon },
                                { title: "हमेशा प्रोफेशनल दिखें", desc: "ईज़ीहेल्पर्स की कोट और साफ-सुथरा दिखने के लिए सामान", icon: StarIcon },
                                { title: "सुरक्षा और सुरक्षा समझौता", desc: "क्लियर वर्क एग्रीमेंट और लगातार मदद", icon: ShieldCheckIcon },
                                { title: "रहने की मदद", desc: "प्लेसमेंट में देर हो तो विमेंस हॉस्टल में रहना", icon: HomeIcon },
                                { title: "हेल्थ इंश्योरेंस कवरेज", desc: "बेसिक मेडिकल इमरजेंसी के लिए", icon: HeartIcon },
                                { title: "सम्मानजनक काम का माहौल", desc: "जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले", icon: UserGroupIcon },
                                { title: "भविष्य के मौके", desc: "अच्छे प्रदर्शन पर दूसरे शहर या विदेश में उच्च सैलरी", icon: BriefcaseIcon },
                                { title: "समय पर सैलरी", desc: "डायरेक्ट पेमेंट परिवार/मालिक से", icon: BanknotesIcon },
                                { title: "जॉब प्रोफ़ाइल बनाना", desc: "आपकी स्किल्स और काम का अनुभव से बेहतर जॉब पाने के लिए", icon: UserPlusIcon },
                                { title: "हर कदम पर सपोर्ट", desc: "रजिस्ट्रेशन से प्लेसमेंट तक", icon: PhoneIcon },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full">
                                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4 text-orange-600 shadow-sm">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-extrabold text-lg text-gray-900 mb-2 leading-tight uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-loose font-bold">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom px-4">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-700 to-orange-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border-4 border-white/20">
                            <div className="p-8 md:p-12 text-white flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display leading-loose uppercase tracking-tight">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                <p className="text-orange-100 text-lg mb-8 leading-loose font-black px-1">
                                    बैंगलोर में महिलाएँ किसी भी समय NEST में रह सकती हैं। हॉस्टल में सुरक्षित और आरामदायक कमरे, रोज़ का खाना और बहुत ही सस्ती कीमतें हैं, ताकि आप आराम से रहकर अपना काम शुरू कर सकें।
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-orange-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all leading-loose shadow-xl transform hover:scale-105"
                                >
                                    NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="hidden md:flex w-1/3 h-[450px] bg-white/10 items-center justify-center relative overflow-hidden">
                                <HomeModernIcon className="w-48 h-48 text-white/10" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/50 to-orange-900"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-orange-50 border-y border-orange-100">
                    <div className="container-custom px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-orange-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-orange-600 to-orange-800 p-10 flex flex-col items-center justify-center text-center text-white relative">
                                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                                        <GiftIcon className="w-full h-full transform translate-x-10 translate-y-10" />
                                    </div>
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-inner">
                                        <GiftIcon className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold mb-2 font-display leading-loose uppercase tracking-widest">रेफर / सिफ़ारिश करें </h2>
                                    <h3 className="text-6xl md:text-7xl font-black mb-4 leading-none tracking-tighter">₹500!</h3>
                                    <p className="text-orange-200 font-black text-sm uppercase tracking-widest">*नियम और शर्तें लागू</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-display leading-loose tracking-tight">दोस्त को रेफ़र करें और ₹500 कमाएं</h2>
                                    <p className="text-lg text-gray-600 font-black mb-8 leading-loose">
                                        EzyHelpers पर झारखंड के अपने दोस्तों और रिश्तेदारों को बैंगलोर में घरेलू काम की नौकरी दिलाने में मदद करें।
                                    </p>
                                    <div className="space-y-5 mb-10">
                                        {[
                                            "WhatsApp पर उनकी डिटेल्स शेयर करें या हमें कॉल करें",
                                            "दोस्त का नाम, उम्र और जॉब पसंद बताएं",
                                            "अगर वो ईज़ीहेल्पर्स जॉइन करते हैं, 1 महीना पूरा करते हैं, तो आप ₹500 कमाते हैं"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="w-7 h-7 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-orange-200 border-2 border-white">
                                                    <span className="text-white text-xs font-black">{i + 1}</span>
                                                </div>
                                                <span className={`text-gray-700 font-bold text-base leading-loose ${i === 2 ? 'text-orange-700 font-black' : ''}`}>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href={whatsappSendUrl('918031411776')}
                                        className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-black py-5 px-10 rounded-2xl hover:bg-green-700 transition-all shadow-xl transform hover:scale-105 text-center leading-loose text-lg"
                                    >
                                        <PhoneIcon className="w-6 h-6" /> रेफर करें और ₹500 कमाएं
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight leading-loose uppercase">लिव-इन हाउसकीपिंग कपल जॉब्स के लिए अप्लाई कैसे करें</h2>
                            <div className="w-24 h-2 bg-orange-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto relative px-4">
                            {/* Central Connecting Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-100 via-orange-600 to-orange-100 hidden md:block opacity-50"></div>

                            <div className="space-y-16 md:space-y-24">
                                {[
                                    {
                                        step: 1,
                                        title: "स्टेप 1: हमसे कॉन्टैक्ट करें",
                                        desc: "कॉल करें या फॉर्म भरें। हम काम की ड्यूटी, रहने की जगह और सैलरी साफ़ बताते हैं।"
                                    },
                                    {
                                        step: 2,
                                        title: "स्टेप 2: डिटेल्स शेयर करें",
                                        desc: "अपना नाम, उम्र, अनुभव और सफाई, खाना बनाना या देखभाल जैसी काम के हुनर बताएं।"
                                    },
                                    {
                                        step: 3,
                                        title: "स्टेप 3: ट्रेनिंग और जॉब शुरू करें",
                                        desc: "ट्रेनिंग में शामिल हों, वेरिफिकेशन पूरा करें, परिवार के साथ इंटरव्यू दें, और पूरे सपोर्ट के साथ काम शुरू करें।"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%] mb-8 md:mb-0 transition-all duration-500 hover:scale-[1.03]">
                                            <div className="bg-white p-10 md:p-12 rounded-[3rem] border-2 border-orange-50 shadow-[0_20px_70px_-20px_rgba(249,115,22,0.15)] hover:shadow-[0_25px_80px_-20px_rgba(249,115,22,0.25)] relative overflow-hidden group">
                                                <div className="absolute top-0 left-0 w-3 h-full bg-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-6 leading-loose font-display uppercase tracking-tight">{item.title}</h3>
                                                <p className="text-gray-600 font-black leading-loose text-base md:text-lg opacity-80">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Center Number Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none mb-10 md:mb-0">
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-600 text-white rounded-full flex items-center justify-center font-black text-3xl md:text-5xl shadow-[0_15px_45px_-10px_rgba(249,115,22,0.8)] border-8 border-white ring-4 ring-orange-50 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700"></div>
                                                <span className="relative z-10">{item.step}</span>
                                            </div>
                                        </div>

                                        <div className="hidden md:block md:w-[45%]"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-24 md:mt-32 text-center px-4">
                                <Link
                                    href="/helper-registration"
                                    className="w-full sm:w-auto inline-flex py-6 px-20 bg-orange-600 text-white font-black text-2xl rounded-[2rem] hover:bg-orange-700 transition-all shadow-[0_25px_60px_-15px_rgba(249,115,22,0.6)] transform hover:scale-105 leading-loose border-4 border-orange-400/30"
                                >
                                    अभी अप्लाई करें या हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-orange-950 text-white overflow-hidden relative border-t-8 border-orange-900 py-24 md:py-32">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/30 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-400/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-pulse"></div>
                    </div>
                    <div className="container-custom relative z-10 text-center px-4">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 font-display text-white tracking-tighter leading-none px-4 uppercase">आपकी नई ज़िंदगी की सुरक्षित शुरुआत</h2>
                        <p className="text-orange-100 text-xl md:text-3xl mb-16 max-w-5xl mx-auto leading-loose font-black opacity-90 px-4">
                            हम कपल्स को बैंगलोर में सुरक्षित और सम्मानजनक जीवन शुरू करने में मदद करते हैं, जहाँ आप साथ रहकर एक-दूसरे का सहारा बनते हुए आगे बढ़ सकते हैं।
                        </p>
                        <Link
                            href="/helper-registration"
                            className="w-full sm:w-auto inline-flex py-6 px-20 bg-white text-orange-950 font-black text-2xl rounded-[2.5rem] hover:bg-orange-50 transition-all shadow-[0_30px_70px_rgba(255,255,255,0.3)] transform hover:scale-110 leading-loose border-4 border-orange-50 animate-bounce-subtle"
                        >
                            आज ही अपनी नई शुरुआत करें
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50 pb-32">
                    <div className="container-custom max-w-5xl px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 font-display leading-tight uppercase tracking-tighter">FAQs</h2>
                            <div className="w-24 h-2 bg-orange-600 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-gray-100">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
