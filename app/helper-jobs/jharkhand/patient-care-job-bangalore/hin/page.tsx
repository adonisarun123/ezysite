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
    title: 'लिव-इन पेशेंट केयर जॉब्स बैंगलोर: ₹35k/महीना तक कमाएं',
    description: 'बैंगलोर में पेशेंट केयर हेल्पर जॉब के मौके। मरीजों की उनके घरों में मदद करें। आसान काम, अच्छी कमाई। कोई अनुभव ज़रूरी नहीं। अभी अप्लाई करें।',
    openGraph: {
        title: 'लिव-इन पेशेंट केयर जॉब्स बैंगलोर: ₹35k/महीना तक कमाएं',
        description: 'बैंगलोर में पेशेंट केयर हेल्पर जॉब के मौके। मरीजों की उनके घरों में मदद करें। आसान काम, अच्छी कमाई। कोई अनुभव ज़रूरी नहीं। अभी अप्लाई करें।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore/hin',
        languages: {
            'en': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore',
            'hi': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore/hin',
            'x-default': 'https://www.ezyhelpers.com/helper-jobs/jharkhand/patient-care-job-bangalore'
        }
    }
}

const faqs: FAQItem[] = [
    {
        question: 'बैंगलोर में रोगी की मदद और देखभाल करने वाली जॉब के लिए कौन अप्लाई कर सकता है?',
        answer: 'ज़्यादातर महिलाओं को प्राथमिकता दी जाती है क्योंकि कई परिवार महिला हेल्पर की विनती करते हैं, लेकिन पुरुष भी अप्लाई कर सकते हैं, खासकर पुरुष मरीज़ों या शारीरिक मदद के लिए। अनुभव काम आता है, पर होना जरूरी नहीं। मेडिकल डिग्री की भी ज़रूरत नहीं है।',
    },
    {
        question: 'बैंगलोर में बुजुर्ग या बीमार की देखभाल करने वाला जॉब में क्या काम शामिल हैं?',
        answer: 'काम में नहाने में मदद करना, खाना खिलाना, दवा याद दिलाना, मरीज़ों को चलने में मदद करना और सहानुभूति शामिल है। काम इस बात पर निर्भर करता है कि मरीज़ बुज़ुर्ग है, बिस्तर पर है या शारीरिक रूप से कमजोर है।',
    },
    {
        question: 'क्या मुझे बैंगलोर में पेशेंट केयर असिस्टेंट जॉब के लिए मेडिकल ट्रेनिंग की ज़रूरत है?',
        answer: 'किसी मेडिकल ट्रेनिंग की ज़रूरत नहीं है। ये घर पर सेवा हेल्पर जॉब हैं। बेसिक केयर स्किल, सब्र और सीखने की इच्छा ही काफ़ी है। हम जॉइन करने से पहले काम साफ़-साफ़ समझाते हैं।',
    },
    {
        question: 'बैंगलोर में घर पर पेशेंट केयर सेवा के लिए सैलरी क्या है?',
        answer: 'सैलरी अनुभव और मरीज़ की हालत पर निर्भर करती है। लिव-इन 24 घंटे देखभाल का काम में आमतौर पर ज़्यादा सैलरी के साथ-साथ खाना और रहना भी मिलता है।',
    },
    {
        question: 'क्या मुझे पेशेंट केयर जॉब्स में हफ्ते की छुट्टी मिलेगा?',
        answer: 'हेल्पर्स को हर महीने 2 दिन की छुट्टी मिलती है। जॉइन करने से पहले छुट्टी की डिटेल्स बताई जाती हैं।',
    }
]

export default function PatientCareJobsBangaloreHinPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    sticky={true}
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स', href: '/helper-jobs' },
                        { label: 'झारखंड', href: '/helper-jobs/jharkhand' },
                        { label: 'पेशेंट केयर जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/patient-care-job-bangalore"
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

                {/* Hero Section with Teal Gradient */}
                <section className="relative bg-gradient-to-br from-indigo-800 via-indigo-600 to-indigo-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-loose text-white whitespace-normal">बैंगलोर में लिव-इन हेल्पर्स के लिए पेशेंट केयर जॉब्स</h1>

                            <p className="text-xs sm:text-sm md:text-2xl font-semibold mb-4 text-indigo-100 max-w-5xl mx-auto leading-relaxed">बेहतर कमाई करने और अपने परिवार को सपोर्ट करने के लिए बैंगलोर में काम करें।</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-[13px] sm:text-sm md:text-xl text-indigo-50/90 leading-loose max-w-sm mx-auto md:max-w-none">
                                    हम ईज़ीहेल्पर्स में आपको घर पर बुज़ुर्गों की रोज़ाना देखभाल, खाना, सफ़ाई, चलने-फिरने और आराम में मदद करने के लिए लिव-इन पेशेंट केयर हेल्पर जॉब्स दिलाते हैं।
                                </p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ एजेंट के बिना डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
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

                        {/* Salary Card - Centered and Styled as per image */}
                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card - Styled as per image */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-indigo-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600"></div>
                                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-indigo-600">
                                    <BriefcaseIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-loose">लिव-इन पेशेंट केयर जॉब्स</h3>
                                <div className="text-3xl font-black text-indigo-600 mb-6 font-display tracking-tight leading-loose">
                                    ₹18,000 से ₹22,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1">प्रति माह</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-relaxed">खाने और रहने के साथ 24 घंटे सपोर्ट</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-indigo-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-relaxed">24 घंटे एम्प्लॉयर के घर में रहने वाला काम</span>
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
                                        { text: "सेफ जॉब प्लेसमेंट", icon: ShieldCheckIcon },
                                        { text: "जॉइन करने से पहले सही ट्रेनिंग", icon: BriefcaseIcon },
                                        { text: "सम्मानजनक परिवार", icon: HeartIcon },
                                        { text: "स्टेबल लॉन्ग-टर्म काम का मौका", icon: StarIcon },
                                        { text: "एम्प्लॉयर से डायरेक्ट सैलरी पेमेंट", icon: BanknotesIcon },
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
                                        className="inline-flex items-center justify-center bg-indigo-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-indigo-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center"
                                    >
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Categories Section */}
                <section className="section-padding">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-loose">लिव-इन पेशेंट केयर हेल्पर्स जॉब कैटेगरी</h2>
                            <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* What is this job called */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 leading-loose">इस जॉब को क्या कहते हैं?</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium leading-relaxed">परिवार एक ही पेशेंट केयर काम के लिए अलग-अलग नाम इस्तेमाल कर सकते हैं:</p>
                                <ul className="space-y-4">
                                    {['पेशेंट केयरटेकर', 'पेशेंट अटेंडेंट', 'होम केयर हेल्पर'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                                            <span className="font-semibold text-sm md:text-base text-gray-800">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-xs md:text-base text-gray-600 font-medium italic leading-relaxed">इन सभी का मतलब है घर पर पेशेंट की रोज़ाना देखभाल, आराम और पर्सनल सपोर्ट में मदद करना।</p>
                            </div>

                            {/* Where are helpers needed */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 leading-loose">हेल्पर्स की ज़रूरत कहाँ है?</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-6 font-medium leading-relaxed">बैंगलोर में परिवार इन चीज़ों के लिए लिव-इन पेशेंट केयर हेल्पर नौकरी पर रखते हैं:</p>
                                <ul className="space-y-4">
                                    {[
                                        'बिस्तर पर पड़े पेशेंट केयर जॉब',
                                        'शारीरिक रूप से कमजोर पेशेंट केयर जॉब',
                                        'सर्जरी के बाद की देखभाल, जैसे घुटने की सर्जरी और चलने में मदद'
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <CheckCircleIcon className="w-6 h-6 text-indigo-500 mt-0.5" />
                                            <span className="font-semibold text-sm md:text-base text-gray-800 leading-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Patient Care Jobs Section */}
                <section className="section-padding bg-indigo-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white leading-loose">बैंगलोर में पेशेंट केयर जॉब के प्रकार</h2>
                            <div className="w-24 h-1 bg-indigo-400 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <h3 className="text-xl md:text-3xl font-bold mb-6 text-indigo-100 leading-loose">लिव-इन पेशेंट केयर जॉब</h3>
                            <p className="text-base md:text-lg mb-10 text-indigo-50/90 font-medium leading-loose">इन जॉब में, आप पेशेंट के घर पर 24 घंटे रहते हैं और रोज़ाना देखभाल का हिस्सा बन जाते हैं।</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3 leading-loose">
                                        काम का प्रकार
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">पेशेंट के साथ फुल-टाइम रहना</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">सोने के लिए अलग जगह दी जाती है</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">परिवार की तरफ से फ्री खाना</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Work Hours */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3 leading-loose">
                                        काम की व्यवस्था
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">डेली पेशेंट केयर का काम</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">आराम का सही समय शामिल</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">जॉइन करने से पहले महीने में 2 छुट्टियाँ तय</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-indigo-200 border-b border-white/10 pb-3 leading-loose">
                                        यह किन लोगों के लिए सही है
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">लंबे समय तक चलने वाले काम की तलाश में हेल्पर</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">बैंगलोर में बिना रहने की जगह वाले हेल्पर</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-indigo-50 text-sm md:text-base leading-relaxed">फुल-टाइम पेशेंट केयर में आराम महसूस करने वाले हेल्पर</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="mt-10 text-center text-indigo-200 font-medium italic text-sm md:text-base leading-relaxed">These jobs are also searched as 24 Hour Patient Care Jobs in Bangalore and Home Nurse Jobs in Bangalore Non-Medical.</p>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-loose">पेशेंट केयर के काम की ज़िम्मेदारियाँ (नॉन-मेडिकल)</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-loose">यह नर्स की जॉब नहीं है। इसमें कोई हॉस्पिटल या मेडिकल ट्रीटमेंट शामिल नहीं है। हम काम साफ़-साफ़ बताते हैं ताकि आपको पता हो कि आपको क्या करना है।</p>
                                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-indigo-50 rounded-3xl p-8 md:p-10 border border-indigo-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 leading-loose">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-indigo-600" />
                                        रोज़ाना पेशेंट केयर के काम
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'डायपर बदलना',
                                            'स्पंज करना और शरीर की सफ़ाई करना',
                                            'कपड़े बदलना',
                                            'खाना और पानी देना',
                                            'परिवार के बताए अनुसार दवाइयाँ देना',
                                            'सिर्फ़ ट्रेनिंग और निर्देश मिलने पर ही इंसुलिन देना',
                                            'दाँत ब्रश करने में मदद करना',
                                            'यूरिन बैग बदलना',
                                            'छोटी पट्टी या बैंड-एड बदलना',
                                            'बिस्तर पर पड़े और सर्जरी के बाद के पेशेंट की देखभाल करना'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-indigo-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-medium leading-loose">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Extra Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-indigo-400 leading-loose">
                                        <SparklesIcon className="w-8 h-8" />
                                        अन्य काम सिर्फ़ तभी जब उन पर बात हो
                                    </h3>
                                    <ul className="space-y-6 mb-10">
                                        {[
                                            'पेशेंट को सुरक्षित रूप से बैठने या हिलने-डुलने में मदद करना',
                                            'पेशेंट एरिया को साफ़ रखना',
                                            'रोज़ाना आराम की ज़रूरतों में मदद करना'
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2.5"></div>
                                                <span className="text-base md:text-lg text-indigo-50 font-medium leading-loose">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-indigo-300 font-bold italic leading-relaxed">Only mutually agreed tasks are included. No hidden work.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center mt-12">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-600 text-white font-bold text-lg py-4 px-12 rounded-xl hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    पेशेंट केयर जॉब्स के लिए अप्लाई करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-16 shadow-xl border border-gray-100 text-center">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-loose">कौन अप्लाई कर सकता है</h2>
                            <p className="text-base md:text-xl text-gray-600 mb-12 font-medium leading-loose">हम उन हेल्पर्स का स्वागत करते हैं जो सीखने और ईमानदारी से काम करने को तैयार हैं।</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                                {[
                                    { text: "पुरुष और महिला पेशेंट केयर हेल्पर", icon: UserGroupIcon },
                                    { text: "उम्र 18 से 45 साल", icon: ClockIcon },
                                    { text: "बेसिक शिक्षा काफी है", icon: AcademicCapIcon },
                                    { text: "फ्रेशर्स और अनुभवी हेल्पर्स का स्वागत है", icon: StarIcon },
                                    { text: "प्लेसमेंट से पहले बेसिक ट्रेनिंग दी जाती है", icon: ShieldCheckIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-indigo-50 p-5 rounded-2xl border border-indigo-100 h-full">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-bold text-gray-800 leading-loose">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center leading-loose">ईज़ीहेल्पर्स के बारे में – भरोसेमंद घरेलू काम के जॉब्स</h2>
                                <p className="text-indigo-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-medium leading-loose">
                                    हम झारखंड और पूरे भारत के हेल्पर को बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    {/* We Focus On */}
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-indigo-300 uppercase tracking-wider leading-loose">हम इन पर ध्यान देते हैं:</h3>
                                        <ul className="space-y-4">
                                            {[
                                                'बैंगलोर में इज्ज़तदार नौकरी',
                                                'सुरक्षित और भरोसेमंद परिवार',
                                                'हेल्पर की भलाई और लंबे समय तक समर्थन'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold leading-loose">
                                                    <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Our Belief */}
                                    <div className="flex flex-col justify-center text-center lg:text-left">
                                        <h3 className="text-xl font-black mb-4 text-indigo-300 uppercase tracking-wider leading-loose">हमारा मानना:</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-loose">
                                            "हेल्पर के लिए अच्छे घर, परिवारों के लिए अच्छे हेल्पर"
                                        </p>
                                    </div>
                                </div>

                                {/* Why Helpers Trust */}
                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-indigo-300 leading-loose">हेल्पर ईज़ीहेल्पर्स पर भरोसा क्यों करते हैं</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { text: "5,000+ हेल्पर को नौकरियां दी गई", highlight: true },
                                            { text: "10,000+ परिवारों को सपोर्ट किया", highlight: true },
                                            { text: "DWSSC और Skill India के साथ हेल्पर ट्रेनिंग" },
                                            { text: "सिर्फ इज्ज़तदार घरों में प्लेसमेंट" },
                                            { text: "काम शुरू होने से पहले पूरी जानकारी" },
                                            { text: "प्लेसमेंट के बाद लगातार सपोर्ट" },
                                            { text: "नौकरी बदलने में भी मदद" },
                                            { text: "नियमित सैलरी और लंबे समय तक नौकरी" },
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-indigo-700/50 scale-105 shadow-lg' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-6 h-6 text-indigo-400 flex-shrink-0" />
                                                <span className="font-bold text-sm md:text-base leading-loose">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Locations and Register */}
                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-bold mb-4 text-indigo-200 uppercase tracking-widest flex items-center justify-center gap-3 leading-loose">
                                        <GlobeAltIcon className="w-6 h-6" />Locations we serve
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-indigo-50 leading-loose">
                                        बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली एनसीआर, पुणे, ओडिशा और अधिक।
                                    </p>
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex py-4 px-12 bg-white text-indigo-900 font-black rounded-xl hover:bg-indigo-50 transition-all shadow-2xl transform hover:scale-105"
                                    >
                                        Register With Us
                                    </Link>
                                </div>
                            </div>

                            {/* Decorative blur elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        </div>
                    </div>
                </section>

                {/* Support and Benefits Section */}
                <section className="section-padding bg-gray-50 border-y border-gray-100 overflow-hidden">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight leading-loose">ईज़ीहेल्पर्स में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "सफाई, स्वच्छता और काम के सामान का बेसिक ट्रेनिंग", icon: AcademicCapIcon },
                                { title: "हमेशा प्रोफेशनल दिखें", desc: "ईज़ीहेल्पर्स की कोट और साफ-सुथरा दिखने के लिए सामान", icon: SparklesIcon },
                                { title: "सुरक्षा और सुरक्षा समझौता", desc: "क्लियर वर्क एग्रीमेंट और लगातार मदद", icon: ShieldCheckIcon },
                                { title: "रहने की मदद", desc: "प्लेसमेंट में देर हो तो विमेंस हॉस्टल में रहना", icon: HomeIcon },
                                { title: "हेल्थ इंश्योरेंस कवरेज", desc: "बेसिक मेडिकल इमरजेंसी के लिए", icon: HeartIcon },
                                { title: "सम्मानजनक काम का माहौल", desc: "जहाँ आपको इज्ज़त और अच्छा व्यवहार मिले", icon: UserGroupIcon },
                                { title: "भविष्य के मौके", desc: "अच्छे प्रदर्शन पर दूसरे शहर या विदेश में उच्च सैलरी", icon: ChartBarIcon },
                                { title: "समय पर सैलरी", desc: "डायरेक्ट पेमेंट परिवार/मालिक से", icon: BanknotesIcon },
                                { title: "जॉब प्रोफ़ाइल बनाना", desc: "आपकी स्किल्स और काम का अनुभव से बेहतर जॉब पाने के लिए", icon: UserCircleIcon },
                                { title: "हर कदम पर सपोर्ट", desc: "रजिस्ट्रेशन से प्लेसमेंट तक", icon: ChatBubbleLeftEllipsisIcon },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col items-start text-left">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                                        <item.icon className="w-6 h-6 text-current" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-loose">{item.title}</h3>
                                    <p className="text-sm font-semibold text-gray-500 leading-loose">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-16 border border-indigo-100 flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto shadow-sm">
                            <div className="md:w-3/5 text-left order-2 md:order-1">
                                <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 font-display tracking-tight leading-loose">नेस्ट (NEST) – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                <p className="text-base md:text-xl text-gray-700 mb-10 leading-loose font-medium">
                                    बैंगलोर में महिलाएँ किसी भी समय NEST में रह सकती हैं। हॉस्टल में सुरक्षित और आरामदायक कमरे, रोज़ का खाना और बहुत ही सस्ती कीमतें हैं, ताकि आप आराम से रहकर अपना काम शुरू कर सकें।
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center bg-indigo-600 text-white font-black py-4 px-10 rounded-xl hover:bg-indigo-700 transition-all shadow-xl group"
                                >
                                    NEST के बारे में और जानें
                                    <ArrowRightIcon className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            <div className="md:w-2/5 order-1 md:order-2 flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-indigo-200/50 rounded-full blur-xl group-hover:bg-indigo-300/50 transition-colors"></div>
                                    <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 group-hover:rotate-0 transition-transform">
                                        <HomeModernIcon className="w-16 h-16 md:w-24 md:h-24 text-indigo-600" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-yellow-100">
                            {/* Left Side - Orange/Yellow Gradient */}
                            <div className="md:w-[38%] bg-gradient-to-b from-yellow-400 via-orange-500 to-orange-600 p-8 flex flex-col items-center justify-center text-center text-white">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                                    <GiftIcon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl md:text-3xl font-extrabold mb-1 font-display uppercase tracking-tight leading-loose text-white">रेफर करें और कमाएं</h3>
                                <div className="text-4xl md:text-6xl font-black mb-3">₹500!</div>
                                <p className="text-[10px] md:text-xs opacity-90 font-bold">*नियम और शर्तें लागू</p>
                            </div>

                            {/* Right Side - Content */}
                            <div className="md:w-[62%] p-8 md:p-10 flex flex-col justify-center">
                                <h4 className="text-lg md:text-2xl font-black text-gray-900 mb-6 leading-loose">
                                    EzyHelpers पर झारखंड के अपने दोस्तों और रिश्तेदारों को बैंगलोर में घरेलू काम की नौकरी दिलाने में मदद करें।
                                </h4>

                                <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4 leading-loose">कैसे करें रेफर:</p>

                                <ul className="space-y-4 mb-8">
                                    {[
                                        'WhatsApp पर उनकी डिटेल्स शेयर करें या हमें कॉल करें',
                                        'दोस्त का नाम, उम्र और जॉब पसंद बताएं',
                                        'अगर वो ईज़ीहेल्पर्स जॉइन करते हैं, 1 महीना पूरा करते हैं, तो आप ₹500 कमाते हैं'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100 mt-0.5">
                                                <span className="text-xs font-bold text-indigo-600">{idx + 1}</span>
                                            </div>
                                            <span className="text-gray-700 font-bold text-sm md:text-base leading-loose">{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-indigo-600 text-white font-black py-4 px-8 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-2xl text-center"
                                >
                                    रेफर करें और ₹500 कमाएं
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display leading-loose">बुजुर्ग या बीमार की देखभाल करने वाली नौकरी के लिए अप्लाई कैसे करें</h2>
                            <p className="text-gray-600 font-bold text-base md:text-lg leading-loose">हम प्रोसेस को आसान रखते हैं ताकि आप जल्दी शुरू कर सकें।</p>
                            <div className="w-24 h-1.5 bg-indigo-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-16">
                            {[
                                {
                                    step: "1",
                                    title: "ईज़ीहेल्पर्स से कॉन्टैक्ट करें",
                                    desc: "कॉल करें या ऑनलाइन फ़ॉर्म भरें। हम जॉब टाइप, सैलरी और काम साफ़-साफ़ बताते हैं।",
                                    icon: PhoneIcon
                                },
                                {
                                    step: "2",
                                    title: "अपनी डिटेल्स शेयर करें",
                                    desc: "हमें अपना नाम, उम्र, स्किल्स और सफ़ाई, खाना पकाने या देखभाल करने का कोई भी एक्सपीरियंस दें।",
                                    icon: UserPlusIcon
                                },
                                {
                                    step: "3",
                                    title: "ट्रेनिंग और जॉब प्लेसमेंट",
                                    desc: "ट्रेनिंग में शामिल हों, वेरिफ़िकेशन पूरा करें, परिवार के साथ इंटरव्यू दें और पूरे सपोर्ट के साथ काम शुरू करें।",
                                    icon: SparklesIcon
                                }
                            ].map((step) => (
                                <div key={step.step} className="relative bg-white p-8 rounded-3xl border border-gray-100 shadow-xl text-center group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg ring-4 ring-white">
                                        {step.step}
                                    </div>
                                    <div className="mt-6 mb-6 inline-flex p-4 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 leading-loose">{step.title}</h3>
                                    <p className="text-gray-600 font-bold leading-loose text-xs md:text-sm">{step.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center">
                            <p className="text-2xl font-black text-indigo-800 mb-4 leading-loose">अभी कॉल करें</p>
                            <div className="w-16 h-1 bg-indigo-200 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* We Walk With You Section */}
                <section className="section-padding bg-indigo-50 relative overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-8 font-display tracking-tight leading-loose">हम हर कदम पर आपके साथ हैं</h2>
                            <p className="text-base md:text-xl text-gray-700 mb-12 leading-loose font-bold">
                                पहली कॉल से लेकर नए घर में काम शुरू करने तक, हम आपका साथ देते हैं और सही मदद और सलाह देते हैं। एक ऐसी शुरुआत करें जहाँ कोई आपकी मेहनत और मुश्किलों को समझे और हमेशा आपके साथ खड़ा रहे।
                            </p>
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-indigo-600 text-white font-black text-xl py-5 px-12 rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl transform hover:scale-105 group"
                            >
                                आज ही हमसे जुड़ें
                            </Link>
                        </div>
                    </div>
                    {/* Background accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
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
