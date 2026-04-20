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
    HomeIcon,
    HomeModernIcon,
    GlobeAltIcon,
    HandThumbUpIcon,
    AcademicCapIcon,
    ShieldCheckIcon as OutlineShieldCheckIcon,
    HomeModernIcon as OutlineHomeModernIcon,
    HeartIcon as OutlineHeartIcon,
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स | पति-पत्नी',
    description: 'पति-पत्नी के लिए बैंगलोर और आस-पास के इलाकों में लिव-इन कपल फार्महाउस जॉब्स। मेंटेनेंस और सिक्योरिटी का काम।अच्छी सैलरी, मुफ़्त खाना और कमरा।अभी अप्लाई करें।',
    openGraph: {
        title: 'बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स | पति-पत्नी',
        description: 'पति-पत्नी के लिए बैंगलोर और आस-पास के इलाकों में लिव-इन कपल फार्महाउस जॉब्स। मेंटेनेंस और सिक्योरिटी का काम।अच्छी सैलरी, मुफ़्त खाना और कमरा।अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स क्या हैं?',
        answer: 'ऐसी जॉब्स जहां पति-पत्नी एक साथ काम और रहते हैं, सुरक्षा का काम, सफ़ाई, बगीचे की देखभाल और छोटे-मोटे मरम्मत का काम संभालते हैं।',
    },
    {
        question: 'क्या ये जॉब्स बैंगलोर शहर के अंदर हैं या बाहर?',
        answer: 'दोनों। ज़्यादातर फार्महाउस बैंगलोर के पास शांत इलाकों में हैं, मेन शहर के बाहर।',
    },
    {
        question: 'क्या हमें फार्महाउस जॉब्स के लिए पहले का अनुभव चाहिए?',
        answer: 'नहीं। नए कपल्स अप्लाई कर सकते हैं। प्लेसमेंट से पहले बेसिक सलाह दी जाती है।',
    },
    {
        question: 'हमें रोज़ कितने घंटे काम करना पड़ता है?',
        answer: 'काम के लिए कोई फिक्स समय नहीं है। अपने काम को सही तरीके से करें और समय के हिसाब से आराम भी लें।',
    },
    {
        question: 'अगर हम दूसरे राज्य से हैं तो क्या हम अप्लाई कर सकते हैं?',
        answer: 'हाँ। यह जॉब खासतौर पर झारखंड के हेल्पर्स के लिए है, जिन्हें बैंगलोर में सुरक्षित और सम्मानजनक लिव-इन कपल फार्महाउस जॉब के मौके मिलते हैं।',
    },
    {
        question: 'किस तरह की रहने की जगह दी जाती है?',
        answer: 'आपको अलग कमरा या स्टाफ क्वार्टर मिलेगा, जिसमें आपका बिस्तर, स्टोरेज और वॉशरूम की पूरी सुविधा होगी।',
    },
    {
        question: 'क्या हमें पालतू जानवरों का ध्यान रखना होगा?',
        answer: 'सिर्फ तभी जब जॉब में इसका ज़िक्र हो। कुछ फार्महाउस में गाय, कुत्ते या मुर्गियां होती हैं।',
    }
]

export default function FarmhouseCoupleJobsBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Jharkhand', href: '/helper-jobs/jharkhand' },
                        { label: 'लिव-इन कपल फार्महाउस जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/live-in-couple-farmhouse-job-bangalore"
                                className="w-10 h-5 bg-teal-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div
                                    className="w-3 h-3 bg-white rounded-full transition-transform"
                                />
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-teal-800 via-teal-500 to-teal-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10 text-center px-4">
                        <div className="max-w-5xl mx-auto">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white whitespace-normal">झारखंड के हेल्पर्स के लिए बैंगलोर में लिव-इन कपल फार्महाउस जॉब्स</h1>
                            <p className="text-sm md:text-2xl font-semibold mb-6 text-teal-100 max-w-5xl mx-auto">बैंगलोर में अपने जीवनसाथी के साथ शांतिपूर्ण फार्महाउस में साथ काम करें और रहें। सिक्योरिटी, सफाई और मेंटेनेंस संभालें और रहने की जगह, रोज़ का खाना और निश्चित वेतन का आनंद लें।</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Overview */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wider mb-4 border border-teal-200">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">सैलरी और खास फ़ायदे</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-teal-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-teal-600"></div>
                                <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 mx-auto text-teal-600 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                                    <BriefcaseIcon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">लिव-इन कपल फार्महाउस जॉब्स</h3>
                                <div className="text-2xl md:text-4xl font-extrabold text-teal-600 mb-6 text-center">
                                    ₹25,000 – ₹35,000
                                    <span className="text-base font-medium text-gray-500 block mt-1">प्रति माह (दोनों के लिए)</span>
                                </div>
                                <ul className="space-y-4 flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-teal-500" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm">रहने और खाने की सुविधा मिलेगी</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-teal-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-teal-500" />
                                        </div>
                                        <span className="text-gray-700 font-bold text-sm">शहर से दूर, शांत और आरामदायक फार्महाउस का माहौल</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">ईज़ीहेल्पर्स के साथ आपको क्या मिलता है</h3>
                                    <div className="w-16 h-1 bg-teal-500 mx-auto mt-3 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
                                    {[
                                        { text: "फार्महाउस में सुरक्षित जॉब प्लेसमेंट", icon: ShieldCheckIcon },
                                        { text: "जॉइन करने से पहले ट्रेनिंग और सलाह", icon: BriefcaseIcon },
                                        { text: "सम्मानजनक परिवारों के साथ काम करें", icon: HeartIcon },
                                        { text: "लंबे समय तक काम के मौके", icon: StarIcon },
                                        { text: "बिना देरी के डायरेक्ट सैलरी पेमेंट", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-teal-50/30 p-4 rounded-xl border border-teal-50 hover:bg-teal-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-teal-100 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-5 h-5 text-teal-600" />
                                            </div>
                                            <span className="font-bold text-gray-800 text-sm leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-10 flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-teal-600 text-white font-bold text-lg py-4 px-14 rounded-xl hover:bg-teal-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        अभी अप्लाई करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Details */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">लिव-इन कपल फार्महाउस हेल्पर्स – काम की डिटेल्स</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">ये जॉब्स झारखंड के उन पति-पत्नी कपल्स के लिए हैं जो बैंगलोर या आस-पास के इलाकों में एक साथ काम करना और रहना चाहते हैं।</p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Type of Work */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-teal-600">
                                    <HomeIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">काम का प्रकार</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "24 घंटे फार्महाउस के अंदर रहना",
                                        "अलग कमरा या स्टाफ क्वार्टर दिया जाता है",
                                        "खाना पकाने का सामान और खाने का सपोर्ट शामिल है"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Work Includes */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                                    <ClockIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">काम में शामिल हैं</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "रोज़ाना सफाई और मेंटेनेंस का काम",
                                        "पौधों को पानी देना और बेसिक खेती का काम",
                                        "आराम का समय मिलेगा",
                                        "जॉइन करने से पहले जैसा तय हुआ था, हर हफ़्ते छुट्टी"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Best For */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
                                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                                    <StarIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">यह किन लोगों के लिए सही है</h3>
                                <ul className="space-y-4 flex-grow">
                                    {[
                                        "झारखंड से आने वाले पति-पत्नी जोड़ी",
                                        "जो लोग किराया और खाने का खर्च बचाना चाहते हैं",
                                        "जो लोग शहर के बाहर शांत जगहों को पसंद करते हैं",
                                        "जो कपल्स बैंगलोर के बाहरी इलाकों में काम करने में ठीक हैं"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-gray-500 italic">जॉइन करने से पहले सही जगह, रहने की जगह और आस-पास के बारे में साफ़-साफ़ बताया जाता है।</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">24 घंटे कपल फार्महाउस के काम की ज़िम्मेदारियाँ</h2>
                                <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Daily Duties */}
                                <div className="md:col-span-3 bg-white rounded-3xl p-8 md:p-10 border border-teal-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-teal-600" />
                                        रोज़ के काम
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'गेट की रखवाली और सिक्योरिटी',
                                            'कमरों और खुली जगहों की सफ़ाई',
                                            'पालतू जानवर या अन्य जानवर की देखभाल',
                                            'फार्महाउस की सफ़ाई बनाए रखना',
                                            'छोटी-मोटी मरम्मत और मेंटेनेंस',
                                            'सूखी पत्तियाँ और कचरा हटाना',
                                            'पौधों को पानी देना और बगीचे की देखभाल'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-gray-50 p-3 rounded-xl border border-teal-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-bold">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Additional Duties */}
                                <div className="md:col-span-2 bg-teal-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-teal-400">
                                        <SparklesIcon className="w-8 h-8" />
                                        और काम
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'वीकेंड पर आने पर मालिकों की मदद',
                                            'रसोई में आसान मदद या सफ़ाई',
                                            'खेत या बगीचे में आसान मदद'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-teal-50 font-bold">
                                                <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-teal-300 font-bold italic text-sm">सिर्फ़ आपसी सहमति से तय किए गए काम शामिल हैं। कोई छिपा हुआ काम नहीं।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Where to get farmhouse jobs */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">आप फ़ार्महाउस जॉब कहाँ पा सकते हैं</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-teal-50 rounded-3xl p-8 md:p-12 border border-teal-100 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <GlobeAltIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">बैंगलोर शहर और आस-पास के इलाके</h4>
                                        <p className="text-gray-600 text-sm font-medium">लिव-इन कपल फ़ार्महाउस जॉब्स बैंगलोर और आसपास के क्षेत्रों में उपलब्ध हैं</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600 shadow-sm">
                                        <ShieldCheckIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg mb-2">शांत और सुरक्षित काम का माहौल</h4>
                                        <p className="text-gray-600 text-sm font-medium">फ्री रहने और खाने की सुविधा शामिल</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-teal-100 flex flex-col items-center text-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-8 font-display">कौन अप्लाई कर सकता है</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10 text-left">
                                {[
                                    { text: "सिर्फ पति-पत्नी कपल्स", icon: UserGroupIcon, check: true },
                                    { text: "उम्र: 25–45 साल", icon: ClockIcon },
                                    { text: "शिक्षा: बेसिक स्कूलिंग", icon: AcademicCapIcon },
                                    { text: "अनुभव: फ्रेशर्स और अनुभवी कपल्स का स्वागत है", icon: StarIcon },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 bg-gray-50 p-5 rounded-2xl border border-teal-100">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0 text-teal-600">
                                            {item.check ? <CheckBadgeIcon className="w-6 h-6" /> : <item.icon className="w-6 h-6" />}
                                        </div>
                                        <span className="font-bold text-gray-800">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 w-full text-center">
                                <p className="text-teal-800 font-bold">जॉइन करने से पहले जॉब के बारे में पूरी सलाह दी जाती है</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-teal-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <div className="text-center mb-12">
                                    <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                    <p className="text-teal-100 text-lg md:text-xl font-bold">
                                        हम झारखंड और पूरे भारत के हेल्पर को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                                        <h3 className="text-xl font-bold mb-6 text-teal-200 border-b border-white/10 pb-3">हम इन पर ध्यान देते हैं:</h3>
                                        <ul className="space-y-4">
                                            {['बैंगलोर में इज्ज़तदार नौकरी', 'सुरक्षित और भरोसेमंद परिवार', 'हेल्पर की भलाई और लंबे समय तक समर्थन'].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-bold mb-4 text-teal-200">हमारा मानना:</h3>
                                        <p className="text-2xl md:text-4xl font-extrabold text-white italic">
                                            "हेल्पर के लिए अच्छे घर, परिवारों के लिए अच्छे हेल्पर"
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-xl md:text-3xl font-bold mb-8 text-center text-teal-200">हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {[
                                            "5,000+ हेल्पर को नौकरियां दी गई",
                                            "10,000+ परिवारों को सपोर्ट किया",
                                            "DWSSC और Skill India के साथ हेल्पर ट्रेनिंग",
                                            "सिर्फ इज्ज़तदार घरों में प्लेसमेंट",
                                            "काम शुरू होने से पहले पूरी जानकारी",
                                            "प्लेसमेंट के बाद लगातार सपोर्ट",
                                            "नौकरी बदलने में भी मदद",
                                            "नियमित सैलरी और लंबे समय तक नौकरी",
                                        ].map((item, idx) => (
                                            <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                                <CheckCircleIcon className="w-5 h-5 text-teal-400 flex-shrink-0" />
                                                <span className="font-bold text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-6 border border-white/10">
                                    <h4 className="text-teal-200 font-bold uppercase tracking-widest mb-2 text-center">स्थान जहाँ हम सेवा देते हैं</h4>
                                    <p className="font-bold">बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और बहुत कुछ।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Support & Benefits */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
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
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4 text-teal-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-teal-600 to-teal-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
                            <div className="p-8 md:p-12 text-white flex-1">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                <p className="text-teal-50 text-lg mb-8 font-bold">
                                    बैंगलोर में महिलाएँ किसी भी समय NEST में रह सकती हैं। हॉस्टल में सुरक्षित और आरामदायक कमरे, रोज़ का खाना और बहुत ही सस्ती कीमतें हैं, ताकि आप आराम से रहकर अपना काम शुरू कर सकें।
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-teal-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all shadow-lg"
                                >
                                    NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 h-64 md:h-full bg-teal-500/20 flex items-center justify-center p-8">
                                <HomeModernIcon className="w-32 h-32 text-white/20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer and Earn Section */}
                <ReferEarnSection variant="teal" lang="hi" />

                {/* Apply Steps */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">लिव-इन कपल फार्महाउस जॉब्स के लिए अप्लाई कैसे करें</h2>
                            <p className="text-gray-600 text-lg font-bold">हम प्रोसेस को सिंपल रखते हैं ताकि आप जल्दी शुरुआत कर सकें।</p>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="relative">
                                {/* Connecting Line */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-100 rounded-full"></div>

                                {[
                                    { step: 1, title: "EzyHelpers से संपर्क करें", desc: "कॉल करें या ऑनलाइन फ़ॉर्म भरें। हम जॉब टाइप, सैलरी, काम के बारे में साफ़-साफ़ बताते हैं।" },
                                    { step: 2, title: "अपनी डिटेल्स शेयर करें", desc: "हमें पति-पत्नी दोनों के नाम, उम्र, काम के हुनर बताएं।" },
                                    { step: 3, title: "ट्रेनिंग और जॉब प्लेसमेंट", desc: "ट्रेनिंग लें, वेरिफ़िकेशन पूरा करें, परिवार के साथ इंटरव्यू दें और काम शुरू करें।" }
                                ].map((item, index) => (
                                    <div key={index} className="relative flex items-center justify-center mb-12 last:mb-0">
                                        <div className="w-5/12 text-right pr-12">
                                            {index % 2 === 0 ? (
                                                <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm">
                                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm font-bold">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 bg-teal-600 text-white rounded-full font-bold text-xl shadow-lg z-10 border-4 border-white">
                                            {item.step}
                                        </div>
                                        <div className="w-5/12 text-left pl-12">
                                            {index % 2 !== 0 ? (
                                                <div className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm">
                                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                                    <p className="text-gray-600 text-sm font-bold">{item.desc}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center mt-12 bg-teal-50 border border-teal-100 p-4 rounded-xl inline-block w-full">
                                <p className="text-teal-800 font-bold text-xl uppercase tracking-tighter">अभी कॉल करें।</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-teal-900 text-white text-center">
                    <div className="container-custom">
                        <h2 className="text-3xl md:text-5xl font-black mb-6 font-display">एक सुरक्षित भविष्य के लिए आपका सफर यहीं से शुरू होता है।</h2>
                        <p className="text-teal-100 text-lg md:text-2xl mb-12 max-w-4xl mx-auto font-bold leading-relaxed">
                            साथ मिलकर काम करें, सुरक्षित रहें, और अपनी बचत बढ़ाएं। एक शांतिपूर्ण फार्महाउस जॉब आपका इंतज़ार कर रही है।
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/helper-registration"
                                className="inline-flex py-4 px-12 bg-white text-teal-900 font-black text-xl rounded-xl hover:bg-teal-50 transition-all shadow-xl transform hover:scale-105"
                            >
                                अभी अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex py-4 px-12 bg-transparent border-2 border-white text-white font-black text-xl rounded-xl hover:bg-white/10 transition-all transform hover:scale-105"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display uppercase tracking-tight">FAQs</h2>
                            <div className="w-24 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}

function CheckBadgeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21a3.745 3.745 0 01-3.127-1.593 3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.745 3.745 0 0112 3a3.745 3.745 0 013.127 1.593 3.745 3.745 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    )
}
