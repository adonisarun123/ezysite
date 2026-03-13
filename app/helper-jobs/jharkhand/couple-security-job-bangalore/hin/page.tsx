import type { Metadata } from 'next'
import Link from 'next/link'
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
    UserIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ShieldCheckIcon as OutlineShieldCheckIcon,
    HomeModernIcon as OutlineHomeModernIcon,
    HeartIcon as OutlineHeartIcon,
    ChartBarIcon,
    BanknotesIcon as OutlineBanknotesIcon,
    UserCircleIcon,
    ChatBubbleLeftEllipsisIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बंगलौर में पति-पत्नी के लिए लिव-इन कपल सिक्योरिटी जॉब',
    description: 'साथ रहें और काम करें! बैंगलोर अपार्टमेंट में पति-पत्नी सिक्योरिटी जॉब। अलग कमरा और रोज़ का खाना शामिल है। कपल्स के लिए सुरक्षित और लंबे समय तक चलने वाला काम।',
    openGraph: {
        title: 'बंगलौर में पति-पत्नी के लिए लिव-इन कपल सिक्योरिटी जॉब',
        description: 'साथ रहें और काम करें! बैंगलोर अपार्टमेंट में पति-पत्नी सिक्योरिटी जॉब। अलग कमरा और रोज़ का खाना शामिल है। कपल्स के लिए सुरक्षित और लंबे समय तक चलने वाला काम।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/couple-security-job-bangalore/hin'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बैंगलोर में 24-घंटे लिव-इन वॉचमैन की नौकरी में खाना और कमरा मिलता है?',
        answer: 'हाँ। बैंगलोर में 24-घंटे लिव-इन वॉचमैन की नौकरी में, हेल्पर्स को रोज़ खाना और रहने के लिए एक कमरा मिलता है। घर के हिसाब से एक अलग कमरा या सिक्योरिटी क्वार्टर दिया जाता है।',
    },
    {
        question: 'क्या बैंगलोर में पति-पत्नी सिक्योरिटी जॉब के लिए पिछला अनुभव ज़रूरी है?',
        answer: 'नहीं। फ्रेशर और अनुभवी दोनों हेल्पर्स अप्लाई कर सकते हैं। EzyHelpers बेसिक सिक्योरिटी ट्रेनिंग देता है ताकि बिना अनुभव वाले कपल्स कॉन्फिडेंस के साथ काम कर सकें।',
    },
    {
        question: 'अगर मुझे काम पर कोई समस्या आती है या मैं अपनी नौकरी बदलना चाहता हूँ तो क्या होगा?',
        answer: 'हम समस्याओं को जल्दी हल करने में मदद करते हैं और ज़रूरत पड़ने पर नौकरी बदलने में मदद करते हैं ताकि आप हमेशा सुरक्षित महसूस करें।',
    },
    {
        question: 'कपल सिक्योरिटी जॉब्स के लिए कौन सी स्किल्स मददगार हैं?',
        answer: 'सतर्क रहना, नियम से काम करना, साफ़ तरीके से बात करना और काम करने लायक अच्छी सेहत मददगार स्किल्स हैं।',
    },
    {
        question: 'अगर मालिक समय पर सैलरी नहीं देता है तो क्या होगा?',
        answer: 'सैलरी आमतौर पर 1 से 10 तारीख के बीच दी जाती है। अगर देरी होती है, तो हम समस्या को जल्दी हल करने में मदद करते हैं।',
    },
    {
        question: 'क्या हम बाद में EzyHelpers के ज़रिए दूसरी नौकरियों में जा सकते हैं?',
        answer: 'हाँ। हम पूरे भारत में कई डोमेस्टिक हेल्पर की नौकरियां देते हैं और आपके अनुभव के आधार पर मदद करते हैं।',
    },
    {
        question: 'अगर हमारे बच्चे हैं तो क्या होगा? क्या वे हमारे साथ रह सकते हैं?',
        answer: 'लिव-इन सिक्योरिटी नौकरियां आमतौर पर सिर्फ़ पति-पत्नी जोड़ों के लिए होती हैं। जॉइन करने से पहले यह साफ़-साफ़ बताया जाता है।',
    },
    {
        question: 'कपल सिक्योरिटी नौकरियों के लिए कौन से डॉक्यूमेंट्स चाहिए?',
        answer: 'वेरिफ़िकेशन के लिए आधार कार्ड और लोकल ID प्रूफ़ ज़रूरी है।',
    }
]

export default function CoupleSecurityJobsBangaloreHinPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs/hin' },
                        { label: 'झारखंड', href: '/helper-jobs/jharkhand/hin' },
                        { label: 'कपल सिक्योरिटी जॉब' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/couple-security-job-bangalore"
                                className="w-10 h-5 bg-indigo-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-loose text-white whitespace-normal">झारखंड के हेल्पर्स के लिए बैंगलोर में कपल सिक्योरिटी जॉब</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-indigo-100 max-w-5xl mx-auto leading-relaxed">साथ रहें, साथ कमाएं और बैंगलोर में एक सुरक्षित जीवन की शुरुआत करें।</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-[13px] sm:text-sm md:text-xl text-indigo-50/90 leading-loose max-w-sm mx-auto md:max-w-none">
                                    अपने शहर से बैंगलोर आकर नई जिंदगी शुरू करना आसान नहीं होता। इसलिए EzyHelpers झारखंड के पति-पत्नी हेल्पर्स को ऐसे लिव-इन काम से जोड़ता है जहाँ आप दोनों साथ रहकर आराम से काम शुरू कर सकें।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
                            </div>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/helper-registration"
                                    className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-12 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105 leading-loose"
                                >
                                    अभी रजिस्टर करें
                                </Link>
                                <Link
                                    href="https://wa.me/918031411776"
                                    className="w-full sm:w-auto inline-flex items-center justify-center py-4 px-10 bg-green-600 text-white font-black rounded-xl hover:bg-green-700 transition-all shadow-2xl transform hover:scale-105 leading-loose gap-2"
                                >
                                    <PhoneIcon className="w-5 h-5 text-white" /> हमारी टीम से बात करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overview Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-indigo-50 text-indigo-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-indigo-100 uppercase">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight leading-loose">सैलरी और खास फ़ायदे</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-indigo-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
                                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                    <BriefcaseIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-loose">लिव-इन हाउसकीपिंग कपल जॉब्स</h3>
                                <div className="text-3xl font-black text-indigo-600 mb-6 font-display tracking-tight leading-loose">
                                    ₹30,000 से ₹35,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1">प्रति माह (कुल सैलरी)</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-relaxed">फ्री खाना और रहना शामिल है</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-relaxed">अलग कमरा या सिक्योरिटी क्वार्टर दिया जाता है</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-relaxed">24-घंटे घर में रहने वाला काम</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3 leading-loose">ईज़ीहेल्पर्स के साथ आपको क्या मिलता है</h3>
                                    <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "लंबे समय तक काम के मौके", icon: StarIcon },
                                        { text: "जॉब प्लेसमेंट से पहले ट्रेनिंग", icon: BriefcaseIcon },
                                        { text: "लगातार गाइडेंस और सपोर्ट", icon: HandThumbUpIcon },
                                        { text: "सम्मानजनक माहौल", icon: HeartIcon },
                                        { text: "डायरेक्ट सैलरी पेमेंट", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-indigo-50/30 p-4 rounded-xl border border-indigo-50 hover:bg-indigo-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-indigo-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-indigo-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-indigo-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center leading-loose"
                                    >
                                        अभी रजिस्टर करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Category Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose">बैंगलोर में कपल सिक्योरिटी जॉब कैटेगरी</h2>
                            <p className="text-gray-600 text-lg font-medium max-w-3xl mx-auto leading-loose">एक कपल सिक्योरिटी हेल्पर के तौर पर, आप और आपके साथी एक वॉचमैन जोड़ी के तौर पर साथ काम करेंगे।</p>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-indigo-100">
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                    <div className="space-y-6">
                                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 py-1.5 px-4 rounded-full text-sm font-bold leading-loose">लिव-इन कपल सिक्योरिटी जॉब्स</div>
                                        <p className="text-gray-600 font-medium leading-loose">यह झारखंड के उन हेल्पर्स के लिए आइडियल है जिन्हें बैंगलोर में कमरे और खाने की ज़रूरत है और जो पैसे बचाकर आगे बढ़ना चाहते हैं।</p>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-lg font-black text-gray-900 border-l-4 border-indigo-500 pl-4 leading-loose">काम का प्रकार</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "24 घंटे एम्प्लॉयर के घर में रहना",
                                                "सिक्योरिटी के काम के लिए अवेलेबल रहना",
                                                "अलग कमरा या सिक्योरिटी क्वार्टर दिया जाता है",
                                                "रोज़ का खाना शामिल है"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm leading-loose">
                                                    <CheckCircleIcon className="w-5 h-5 text-indigo-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-6">
                                        <h3 className="text-lg font-black text-gray-900 border-l-4 border-indigo-500 pl-4 leading-loose">काम की व्यवस्था</h3>
                                        <ul className="space-y-3">
                                            {[
                                                "दिन और रात सिक्योरिटी का काम",
                                                "दिन में ठीक से आराम",
                                                "जॉइन करने से पहले महीने में 2 छुट्टियाँ तय करना"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700 font-medium text-sm leading-loose">
                                                    <CheckCircleIcon className="w-5 h-5 text-indigo-500" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-black text-gray-900 mb-2 leading-loose">यह किन लोगों के लिए सही है</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {["झारखंड से आने वाले जोड़ी", "बैंगलोर में जिनके पास घर नहीं है", "बचत करने वाले कपल्स"].map((tag, i) => (
                                                <span key={i} className="bg-gray-100 text-gray-700 py-1 px-3 rounded-md text-xs font-bold leading-loose">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all shadow-lg leading-loose"
                                    >
                                        जॉब्स के लिए अप्लाई करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold mb-6 font-display text-white leading-loose">कपल सिक्योरिटी काम की ज़िम्मेदारियाँ</h2>
                            <p className="text-base md:text-xl text-indigo-100 max-w-3xl mx-auto leading-loose">हम हमेशा आपके जॉइन करने से पहले आपको आपका काम साफ-साफ़ समझाते हैं, ताकि आपको किसी भी तरह का दुविधा न हो।</p>
                            <div className="w-24 h-1 bg-indigo-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-xl md:text-2xl font-bold text-indigo-100 mb-8 flex items-center justify-center gap-3 leading-loose">
                                <ClipboardDocumentListIcon className="w-8 h-8" />
                                आपके रोज़ के कामों में ये शामिल हो सकते हैं
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    'मेन गेट और कंपाउंड पर नज़र रखना',
                                    'विज़िटर के आने-जाने की जाँच करना',
                                    'गेट या दरवाज़े खोलना और बंद करना',
                                    'प्रॉपर्टी की सुरक्षा करना',
                                    'कोई गड़बड़ दिखे तो तुरंत बताना',
                                    'गेट या कंपाउंड एरिया की हल्की सफ़ाई करना',
                                    'गेट के पास के पौधों को पानी देना',
                                    'दूध या पार्सल इकट्ठा करना'
                                ].map((duty) => (
                                    <div key={duty} className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 flex flex-col items-center text-center">
                                        <CheckCircleIcon className="w-8 h-8 text-indigo-300 mb-3" />
                                        <span className="text-sm font-bold leading-loose">{duty}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where are Couple Security jobs located? */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose">कपल सिक्योरिटी जॉब कहाँ होती हैं?</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "स्वतंत्र बड़ा घर या बंगला", desc: "प्राइवेट घर में वॉचमैन का काम और देखरेख की ज़िम्मेदारी।", icon: HomeIcon },
                                { title: "आवासीय भवन (Residential Buildings)", desc: "विज़िटर एंट्री चेक करना और रोज़ की सुरक्षा का काम।", icon: BuildingOfficeIcon },
                                { title: "प्राइवेट विला और फार्महाउस", desc: "पूरी प्रॉपर्टी की सुरक्षा और लंबे समय तक देखरेख।", icon: HomeModernIcon },
                                { title: "छोटे अपार्टमेंट कॉम्प्लेक्स", desc: "गेट की निगरानी और अपार्टमेंट की सुरक्षा में मदद।", icon: BuildingOfficeIcon }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-gray-900 mb-2 leading-loose">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-medium leading-loose">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-50 text-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-loose">कौन अप्लाई कर सकता है?</h2>
                            <p className="text-base md:text-xl text-gray-600 mb-12 font-medium leading-loose">हम उन कपल्स का स्वागत करते हैं जो मिलकर ज़िम्मेदारी से काम करना चाहते हैं।</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                                {[
                                    { text: "सिर्फ़ पति-पत्नी जोड़ा", icon: UserGroupIcon },
                                    { text: "उम्र: 20–45 साल", icon: ClockIcon },
                                    { text: "शिक्षा: बेसिक शिक्षा काफ़ी है", icon: AcademicCapIcon },
                                    { text: "फ्रेशर और एक्सपीरियंस्ड", icon: StarIcon },
                                    { text: "सीखने की इच्छा", icon: ShieldCheckIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/50">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm border border-indigo-50">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <span className="font-bold text-gray-800 text-sm leading-loose">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto border border-indigo-700/50">
                            <div className="relative z-10 text-center">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white leading-loose">ईज़ीहेल्पर्स के बारे में – भरोसेमंद जॉब्स</h2>
                                <p className="text-indigo-100 text-base md:text-xl mb-12 max-w-3xl mx-auto font-medium leading-loose">
                                    हम झारखंड और पूरे भारत के हेल्पर्स को बिना किसी फीस या कमीशन के सुरक्षित और सम्मानजनक घरेलू काम के जॉब्स से जोड़ते हैं।
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                        <div className="text-3xl font-black mb-1">5,000+</div>
                                        <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest leading-loose">हेल्पर को जॉब्स</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                        <div className="text-3xl font-black mb-1">10,000+</div>
                                        <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest leading-loose">खुश परिवार</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                        <div className="text-3xl font-black mb-1">Skill India</div>
                                        <div className="text-xs font-bold text-indigo-300 uppercase tracking-widest leading-loose">ट्रेनिंग पार्टनर</div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left bg-black/10 p-8 rounded-3xl border border-white/5">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-indigo-300 leading-loose">हम क्या पक्का करते हैं:</h3>
                                        <ul className="space-y-3">
                                            {["सिर्फ़ सम्मानजनक घरों में प्लेसमेंट", "नियमित और समय पर सैलरी", "काम करने का सुरक्षित वातावरण"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 font-bold text-sm md:text-base leading-loose">
                                                    <CheckCircleIcon className="w-5 h-5 text-indigo-400" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-indigo-300 leading-loose">हमारा लगातार सपोर्ट:</h3>
                                        <ul className="space-y-3">
                                            {["जॉब प्लेसमेंट के बाद लगातार मदद", "नौकरी बदलने में सहायता", "हर कदम पर गाइडेंस"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 font-bold text-sm md:text-base leading-loose">
                                                    <CheckCircleIcon className="w-5 h-5 text-indigo-400" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-4 px-12 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105 leading-loose"
                                >
                                    हमारे साथ जुड़ें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose">EzyHelpers में हेल्पर्स के लिए सहायता और लाभ</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "जॉब शुरू करने से पहले बेसिक ट्रेनिंग और पूरा होने पर सर्टिफिकेट।" },
                                { title: "प्रोफेशनल लुक", desc: "EzyHelpers कोट और ग्रूमिंग किट दी जाएगी।" },
                                { title: "सुरक्षा और ज़वाबदेही", desc: "साफ़ काम और वर्क एग्रीमेंट के साथ लगातार मदद।" },
                                { title: "रहने में मदद (हॉस्टल)", desc: "काम मिलने में देरी होने पर हमारे महिला हॉस्टल में रहने की सुविधा।" },
                                { title: "हेल्थ इंश्योरेंस", desc: "इमरजेंसी के लिए बुनियादी मेडिकल कवरेज।" },
                                { title: "सम्मानजनक माहौल", icon: UserGroupIcon, desc: "हम ऐसे घर चुनते हैं जो आपके साथ सम्मान से पेश आएं।" },
                                { title: "भविष्य के मौके", desc: "अच्छे काम से सैलरी बढ़ने या बड़े शहरों/विदेशों मे काम के अवसर।" },
                                { title: "समय पर सैलरी", desc: "हर महीने सीधे मालिकों द्वारा सैलरी का पेमेंट।" },
                                { title: "जॉब प्रोफाइल क्रिएशन", desc: "बेहतर काम पाने के लिए एक अच्छी प्रोफेशनल प्रोफाइल बनाएं।" },
                                { title: "हर कदम पर साथ", desc: "रजिस्ट्रेशन से लेकर प्लेसमेंट के बाद तक पूरी मदद।" },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 text-indigo-600 border border-indigo-100">
                                        <CheckCircleIcon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 leading-loose">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-loose font-medium flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-700 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch border border-indigo-800">
                            <div className="p-8 md:p-14 text-white flex-1">
                                <h2 className="text-2xl md:text-5xl font-bold mb-6 font-display leading-loose">NEST – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                <p className="text-indigo-100 text-lg mb-10 leading-loose font-medium max-w-2xl">
                                    महिला हेल्पर्स बैंगलोर में कभी भी NEST में रह सकती हैं। यहाँ सुरक्षित, साफ़ कमरे और रोज़ का खाना मिलता है। बहुत सस्ती दरों की वजह से आप यहाँ आराम से रहकर अपना काम शुरू कर सकती हैं।
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-3 bg-white text-indigo-800 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all shadow-xl leading-loose"
                                >
                                    NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="hidden md:flex w-1/3 bg-indigo-800/30 items-center justify-center relative overflow-hidden">
                                <HomeModernIcon className="w-48 h-48 text-white/10" />
                                <div className="absolute inset-0 bg-indigo-500/10 blur-3xl rounded-full translate-y-20"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-indigo-50 border-y border-indigo-100">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-200">
                            <div className="md:flex items-stretch">
                                <div className="md:w-5/12 bg-gradient-to-br from-indigo-600 to-indigo-800 p-10 flex flex-col items-center justify-center text-center text-white border-r border-indigo-100">
                                    <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-inner border border-white/20">
                                        <GiftIcon className="w-12 h-12 text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-loose whitespace-nowrap">दोस्त को जोड़ें और कमाएं</h2>
                                    <div className="text-6xl md:text-7xl font-black mb-4 font-display leading-none">₹500</div>
                                    <p className="text-indigo-100/80 font-bold text-xs uppercase tracking-widest leading-loose">*नियम और शर्तें लागू</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center bg-white">
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-display leading-loose">रेफर करें और ₹500 कमाएं</h2>
                                    <p className="text-lg text-gray-600 font-medium mb-10 leading-loose">
                                        झारखंड के अपने दोस्तों और रिश्तेदारों को EzyHelpers पर बैंगलोर में घरेलू काम दिलाने में मदद करें।
                                    </p>
                                    <div className="space-y-6 mb-12">
                                        {[
                                            "व्हाट्सएप के माध्यम से उनका विवरण साझा करें या हमें कॉल करें",
                                            "अपने मित्र का नाम, आयु और कार्य पसंद बताएं",
                                            "वे EzyHelpers में शामिल होते हैं, प्लेसमेंट पूरा करते हैं, और आप ₹500 कमाते हैं"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-start gap-4 group">
                                                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-indigo-100 group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors">
                                                    <CheckCircleIcon className="w-4 h-4 text-indigo-500 group-hover:text-white" />
                                                </div>
                                                <span className="text-gray-700 font-bold md:text-lg leading-loose">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="https://wa.me/918031411776"
                                        className="inline-flex items-center justify-center gap-3 bg-green-600 text-white font-black py-5 px-12 rounded-2xl hover:bg-green-700 transition-all shadow-xl transform hover:scale-105 text-center leading-loose"
                                    >
                                        <PhoneIcon className="w-6 h-6" /> रेफर करें और ₹500 कमाएं
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16 md:mb-24">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose tracking-tight">कपल सिक्योरिटी जॉब्स के लिए आवेदन कैसे करें</h2>
                            <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto leading-loose font-medium">हम प्रक्रिया को सरल रखते हैं ताकि आप और आपका साथी जल्दी शुरुआत कर सकें।</p>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8 rounded-full"></div>
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Central Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-100 rounded-full hidden md:block"></div>

                            {[
                                {
                                    step: 1,
                                    title: "EzyHelpers से संपर्क करें",
                                    desc: "ड्यूटी, रहने या सैलरी के बारे में पूछने के लिए कॉल करें या ऑनलाइन फॉर्म भरें।"
                                },
                                {
                                    step: 2,
                                    title: "अपनी जानकारी साझा करें",
                                    desc: "अपना नाम, उम्र और काम करने का अनुभव बताएं।"
                                },
                                {
                                    step: 3,
                                    title: "ट्रेनिंग और जॉब जॉइनिंग",
                                    desc: "बेसिक ट्रेनिंग पूरी करें, वीडियो इंटरव्यू दें और पक्के सपोर्ट के साथ काम शुरू करें।"
                                }
                            ].map((item, index) => (
                                <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* Content Card */}
                                    <div className="w-full md:w-[42%] mb-8 md:mb-0 transition-all duration-300 hover:scale-[1.02]">
                                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4 leading-loose">{item.title}</h3>
                                            <p className="text-gray-600 font-medium leading-loose text-sm md:text-base">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Center Number Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none mb-4 md:mb-0">
                                        <div className="w-14 h-14 md:w-20 md:h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-2xl md:text-4xl shadow-[0_10px_30px_-5px_rgba(79,70,229,0.8)] border-4 border-white mb-2">
                                            {item.step}
                                        </div>
                                    </div>

                                    {/* Empty Space for layout balancing */}
                                    <div className="hidden md:block md:w-[42%]"></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 md:mt-32 text-center">
                            <Link
                                href="/helper-registration"
                                className="inline-flex py-5 px-16 bg-indigo-600 text-white font-black text-xl rounded-2xl hover:bg-indigo-700 transition-all shadow-[0_20px_50px_-10px_rgba(79,70,229,0.5)] transform hover:scale-105 leading-loose"
                            >
                                अभी रजिस्टर करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-indigo-900 text-white overflow-hidden relative border-t border-indigo-800">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container-custom relative z-10 text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-10 font-display text-white leading-loose tracking-tight px-4">अपनी नई शुरुआत एक साथ करें</h2>
                        <p className="text-indigo-100 text-lg md:text-2xl mb-14 max-w-4xl mx-auto leading-loose font-medium opacity-90 px-4">
                            अनिश्चितता को पीछे छोड़ें और बैंगलोर में एक साथ सुरक्षित यात्रा शुरू करें, जहाँ सम्मान, स्थिरता और गरिमा आपके सुखद भविष्य की नींव रखेगी।
                        </p>
                        <Link
                            href="/helper-registration"
                            className="w-[90%] sm:w-auto inline-flex py-5 px-16 bg-white text-indigo-900 font-black text-xl rounded-2xl hover:bg-indigo-50 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.25)] transform hover:scale-105 leading-loose"
                        >
                            अपनी यात्रा अभी शुरू करें
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose">अक्सर पूछे जाने वाले सवाल</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
