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
    SparklesIcon,
    ClipboardDocumentListIcon,
    ArrowRightIcon,
    GlobeAltIcon,
    AcademicCapIcon,
    CheckBadgeIcon,
    ChatBubbleLeftRightIcon,
    CurrencyRupeeIcon,
    PlusIcon
} from '@heroicons/react/24/outline'

import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में जापा मेड जॉब | झारखंड के अनुभवी हेल्पर्स',
    description: 'झारखंड की अनुभवी महिलाओं के लिए बैंगलोर में जापा मेड जॉब के लिए अप्लाई करें। सुरक्षित घर, खाना, रहने और सपोर्ट के साथ लिव-इन न्यूबोर्न केयर जॉब्स।',
    openGraph: {
        title: 'बैंगलोर में जापा मेड जॉब | झारखंड के अनुभवी हेल्पर्स',
        description: 'झारखंड की अनुभवी महिलाओं के लिए बैंगलोर में जापा मेड जॉब के लिए अप्लाई करें। सुरक्षित घर, खाना, रहने और सपोर्ट के साथ लिव-इन न्यूबोर्न केयर जॉब्स।',
        url: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/japa-maid-job-bangalore/hin',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs/jharkhand/japa-maid-job-bangalore/hin'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या बैंगलोर में माँ और शिशु की देखभाल का काम के लिए एक्सपीरियंस ज़रूरी है?',
        answer: 'हाँ। बैंगलोर में जापा मेड जॉब्स के लिए, हेल्पर्स को नवजात शिशु की देखभाल और पोस्टनेटल सपोर्ट में कम से कम 5 साल का एक्सपीरियंस होना चाहिए।',
    },
    {
        question: 'बैंगलोर में जापा मेड जॉब आमतौर पर कितने समय तक चलती है?',
        answer: 'एक आम जापा केयर मेड जॉब 40 दिन से 3 महीने तक चलती है। कुछ परिवार बाद में फुल-टाइम नवजात बच्चे की देखभाल करने वाली नौकरी ऑफर कर सकते हैं।',
    },
    {
        question: 'क्या पुरुष हेल्पर्स या कपल्स बैंगलोर में जापा मेड जॉब्स के लिए अप्लाई कर सकते हैं?',
        answer: 'नहीं। सिर्फ़ अनुभवी महिला हेल्पर्स ही अप्लाई कर सकती हैं।',
    },
    {
        question: 'जापा मेड किस तरह का काम करती है?',
        answer: 'न्यूबॉर्न बेबी केयर में बच्चे को खाना खिलाना, डायपर बदलना, नहलाना और बच्चे की सुरक्षा रखना और मदर सपोर्ट शामिल हैं। सिर्फ़ तय किए गए काम ही शामिल हैं।',
    },
    {
        question: 'क्या खाना और रहने की जगह दी जाती है?',
        answer: 'हाँ। लिव-इन जापा मेड जॉब्स में फ्री खाना और एक अलग कमरा शामिल है।',
    },
    {
        question: 'क्या जापा मेड्स को हाउसक्लीनिंग का काम करना होगा?',
        answer: 'नहीं। सिर्फ़ बेबी और मदर केयर का काम शामिल है, जब तक कि आपसी सहमति न हो।',
    },
    {
        question: 'क्या जापा मेड जॉब्स में रेगुलर मेड जॉब्स से ज़्यादा पैसे मिल सकते हैं?',
        answer: 'हाँ। पोस्टनेटल केयर जॉब्स में आमतौर पर खास काम के हुनर और अनुभव की वजह से ज़्यादा पैसे मिलते हैं।',
    },
    {
        question: 'जापा मेड जॉब्स और रेगुलर बेबीसिटर जॉब्स में क्या फ़र्क है?',
        answer: 'जापा मेड जॉब्स नए जन्मे बच्चों और मांओं की पोस्टपार्टम केयर पर ध्यान करती हैं। बेबीसिटर जॉब्स के लिए नए जन्मे बच्चों की देखभाल के इस लेवल के अनुभव की ज़रूरत नहीं होती।',
    }
]

export default function JapaMaidJobBangaloreHindiPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Helper Jobs', href: '/helper-jobs' },
                        { label: 'Jharkhand', href: '/helper-jobs/jharkhand' },
                        { label: 'Japa Maid Job' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm bg-white px-3 py-1 pb-1.5 rounded-full shadow-sm shrink-0">
                            <span className="text-gray-900 font-bold whitespace-nowrap">हिंदी</span>
                            <Link
                                href="/helper-jobs/jharkhand/japa-maid-job-bangalore"
                                className="w-10 h-5 bg-pink-600 rounded-full p-1 relative transition-colors inline-block"
                            >
                                <div className="w-3 h-3 bg-white rounded-full transition-transform translate-x-0"></div>
                            </Link>
                            <span className="text-gray-500 font-medium whitespace-nowrap">ENG</span>
                        </div>
                    }
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-pink-800 via-pink-600 to-pink-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold mb-4 font-display leading-tight text-white whitespace-normal">झारखंड के हेल्पर्स के लिए बैंगलोर में जापा मेड जॉब</h1>

                            <p className="text-[13px] sm:text-sm md:text-2xl font-semibold mb-6 text-pink-100 max-w-5xl mx-auto leading-relaxed">बैंगलोर में जापा मेड्स या नवजात देखभाल मेड्स की बहुत डिमांड है! झारखंड की अनुभवी महिलाएं EzyHelpers के साथ माँ और नवजात बच्चों की देखभाल करने वाली सुरक्षित, सम्मानजनक जॉब्स पा सकती हैं, आराम से रह सकती हैं और एक स्थिर भविष्य बना सकती हैं।</p>

                            <div className="flex flex-wrap justify-center gap-2 max-w-5xl mx-auto px-1">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ कोई रजिस्ट्रेशन चार्ज नहीं</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:flex-1">✓ बिना एजेंट के डायरेक्ट प्लेसमेंट</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] xs:text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight sm:w-auto">✓ सैलरी सीधे परिवार द्वारा दी जाएगी</div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center bg-white text-pink-700 font-bold text-lg py-4 px-12 rounded-xl hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 leading-loose"
                                >
                                    जापा मेड जॉब्स के लिए अप्लाई करें
                                </Link>
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-white/10 transition-all transform hover:scale-105 leading-loose"
                                >
                                    हमें कॉल करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Salary & Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <span className="inline-block py-1.5 px-5 rounded-full bg-pink-50 text-pink-600 text-[10px] md:text-xs font-bold tracking-widest mb-4 border border-pink-100 uppercase">
                                जॉब लोकेशन: बैंगलोर
                            </span>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4 font-display tracking-tight leading-tight">सैलरी और खास फ़ायदे</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-8 items-stretch max-w-7xl mx-auto">
                            {/* Salary Card */}
                            <div className="w-full lg:w-1/3 bg-white rounded-2xl p-8 border border-pink-100 shadow-xl relative overflow-hidden text-center group flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-pink-600"></div>
                                <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6 mx-auto text-pink-600">
                                    <BanknotesIcon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-loose">बैंगलोर में लिव-इन जापा मेड जॉब्स</h3>
                                <div className="text-3xl font-black text-pink-600 mb-6 font-display tracking-tight leading-tight">
                                    ₹25,000 – ₹30,000
                                    <span className="text-[10px] font-bold text-gray-400 block uppercase pt-1 leading-loose">प्रति माह</span>
                                </div>
                                <ul className="space-y-4 text-left flex-grow">
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-pink-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">फ्री रहना + फ्री खाना</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-pink-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">अलग कमरा या सोने की जगह</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircleIcon className="w-3.5 h-3.5 text-pink-500" />
                                        </div>
                                        <span className="text-gray-600 font-bold text-[13px] leading-snug">24 घंटे नवजात और माँ की देखभाल, दिन में आराम का समय</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What You Get Section */}
                            <div className="w-full lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-50 relative flex flex-col">
                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-black text-gray-900 font-display mb-3 leading-loose">EzyHelpers के साथ आपको क्या मिलता है</h3>
                                    <div className="w-16 h-1 bg-pink-500 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 flex-grow">
                                    {[
                                        { text: "जॉइन करने से पहले साफ ज़िम्मेदारियाँ और ट्रेनिंग", icon: ClipboardDocumentListIcon },
                                        { text: "प्लेसमेंट के दौरान सही राह दिखाते हैं और सपोर्ट", icon: UserGroupIcon },
                                        { text: "परिवार के साथ सम्मानजनक काम का माहौल", icon: HeartIcon },
                                        { text: "पक्की, लंबे समय तक चलने वाली जॉब के मौके", icon: StarIcon },
                                        { text: "डायरेक्ट मंथली सैलरी पेमेंट", icon: BanknotesIcon },
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-3 bg-pink-50/30 p-4 rounded-xl border border-pink-50 hover:bg-pink-50 transition-colors duration-300">
                                            <div className="w-9 h-9 rounded-lg bg-pink-100/50 flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4.5 h-4.5 text-pink-600" />
                                            </div>
                                            <span className="font-extrabold text-gray-800 text-xs leading-tight">{item.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <Link
                                        href="/helper-registration"
                                        className="inline-flex items-center justify-center bg-pink-600 text-white font-black text-lg py-4 px-14 rounded-xl hover:bg-pink-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl w-full sm:w-auto text-center leading-loose"
                                    >
                                        जापा मेड जॉब्स के लिए अप्लाई करें
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Details Section */}
                <section className="section-padding bg-pink-900 text-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold mb-4 font-display text-white leading-tight">बैंगलोर में लिव-इन जापा मेड जॉब्स का विवरण</h2>
                            <p className="text-pink-100 max-w-3xl mx-auto font-medium leading-relaxed">लिव-इन जापा मेड जॉब्स झारखंड की अनुभवी महिलाओं के लिए लिए सही है जिन्हें बैंगलोर में रहने और खाने की जरूरत है।</p>
                            <div className="w-24 h-1 bg-pink-400 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Type of Work */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        काम का प्रकार
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">परिवार / मालिक के घर के अंदर 24/7 रहना होगा</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">एक अलग कमरा या सोने की जगह</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">मुफ़्त खाना शामिल है</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Management */}
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        काम की व्यवस्था
                                    </h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">24 घंटे नए जन्मे बच्चे और माँ की देखभाल</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">दिन में आराम करने का समय</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">महीने में 2 बार छुट्टी (बातचीत के अनुसार)</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Best For */}
                                <div className="md:col-span-2">
                                    <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2 text-pink-200 border-b border-white/10 pb-3 leading-loose">
                                        यह किन लोगों के लिए सही है
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">झारखंड से आने वाले अनुभवी पोस्टपार्टम सहायिका</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">ऐसे सहायिका जो किराए और खाने पर पैसे बचाना चाहते हैं</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                                            <span className="text-pink-50 text-sm md:text-base leading-relaxed">ऐसे सहायिका जिनके पास शहर में रहने की जगह नहीं है</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Responsibilities Section */}
                <section className="section-padding bg-white overflow-hidden">
                    <div className="container-custom">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">लिव-इन जापा मेड के काम की ज़िम्मेदारियाँ</h2>
                                <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">हम हमेशा सुनिश्चित करते हैं कि ज़िम्मेदारियाँ साफ़-साफ़ समझा दी जाएँ ताकि आप जान सकें कि आपको क्या काम करना है।</p>
                                <div className="w-24 h-1 bg-pink-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
                                {/* Left Side - Daily Duties */}
                                <div className="md:col-span-3 bg-pink-50 rounded-3xl p-8 md:p-10 border border-pink-100 shadow-lg">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3 leading-loose">
                                        <ClipboardDocumentListIcon className="w-8 h-8 text-pink-600" />
                                        रोज़ाना के काम
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {[
                                            'नवजात को दूध पिलाना, डायपर बदलना, नहलाना',
                                            'बच्चे की सुरक्षा और सोते हुए देखना',
                                            'बच्चे की बोतलें और खिलौने साफ़ करना',
                                            'बच्चे और माँ की मालिश',
                                            'माँ को आराम और ठीक होने में मदद',
                                            'कमरे और कपड़े साफ़ रखना'
                                        ].map((duty) => (
                                            <li key={duty} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-pink-100/50">
                                                <CheckCircleIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-700 font-bold leading-tight">{duty}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Right Side - Additional Duties */}
                                <div className="md:col-span-2 bg-gray-900 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center">
                                    <h3 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3 text-pink-400 leading-loose">
                                        <SparklesIcon className="w-8 h-8" />
                                        और काम
                                    </h3>
                                    <ul className="space-y-4 mb-10">
                                        {[
                                            'माँ के लिए स्वस्थ खाना बनाना',
                                            'बच्चे की चादरें और कपड़े धोना',
                                            'बच्चे की देखभाल से जुड़ा छोटी-छोटी व्यवस्था'
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-pink-50 font-bold leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                                        <p className="text-center text-pink-300 font-bold italic text-sm leading-loose">साफ उम्मीदें। सम्मानजनक काम।</p>
                                    </div>
                                    <p className="text-[10px] text-pink-200/60 mt-4 text-center">नोट: सिर्फ़ तय किया गया काम; कोई एक्स्ट्रा या छिपा हुआ काम नहीं।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Can Apply Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto bg-pink-50 rounded-3xl p-8 md:p-16 shadow-xl border border-pink-100 text-center px-4">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">कौन अप्लाई कर सकता है</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                                {[
                                    { text: "सिर्फ़ अनुभवी महिलाएं (फ्रेशर्स नहीं)", icon: UserGroupIcon },
                                    { text: "उम्र: 35–45 साल", icon: ClockIcon },
                                    { text: "शिक्षा: बेसिक पढ़ना-लिखना", icon: AcademicCapIcon },
                                    { text: "अनुभव: माँ और बच्चे की देखभाल में कम से कम 5 साल का अनुभव", icon: StarIcon },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-pink-100 h-full">
                                        <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0 text-pink-600 shadow-sm">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <span className="font-black text-gray-800 leading-tight">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 bg-white/50 p-6 rounded-2xl inline-block border border-white">
                                <p className="text-pink-700 font-black text-lg md:text-xl leading-loose">पुरुष हेल्पर्स और कपल्स इस रोल के लिए योग्य नहीं हैं।</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Job Duration Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl mx-auto px-4">
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-pink-100">
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 font-display text-center leading-tight">जॉब का समय</h2>
                            <div className="space-y-6">
                                {[
                                    "आम तौर पर 40 दिन से 3 महीने तक के होते हैं",
                                    "कुछ परिवार बाद में फुल-टाइम बच्चों की देखभाल करने वाली (नानी) की पोस्ट दे सकते हैं",
                                    "समय माँ की ठीक होने और परिवार की ज़रूरतों पर निर्भर करता है"
                                ].map((text, idx) => (
                                    <div key={idx} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                                            <CheckCircleIcon className="w-5 h-5 text-pink-600" />
                                        </div>
                                        <p className="text-lg text-gray-700 font-bold">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-4 px-10 bg-pink-600 text-white font-black rounded-xl hover:bg-pink-700 transition-all shadow-xl transform hover:scale-105 leading-loose"
                                >
                                    अवेलेबिलिटी चेक करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About EzyHelpers Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="bg-gradient-to-br from-pink-800 to-pink-900 rounded-3xl p-8 md:p-16 text-white shadow-2xl relative overflow-hidden max-w-6xl mx-auto">
                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-5xl font-extrabold mb-8 font-display text-white text-center leading-tight">EzyHelpers के बारे में – भरोसेमंद हेल्पर जॉब्स</h2>
                                <p className="text-pink-100 text-base md:text-2xl mb-16 text-center max-w-4xl mx-auto font-bold leading-relaxed">
                                    हम हेल्पर्स को पूरे भारत में बिना किसी फीस के सुरक्षित डोमेस्टिक हेल्पर जॉब्स से जोड़ते हैं।
                                </p>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                                    <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-inner">
                                        <h3 className="text-xl font-black mb-6 text-pink-300 uppercase tracking-wider leading-loose">हम इन पर फोकस करते हैं:</h3>
                                        <ul className="space-y-4 text-center lg:text-left">
                                            {[
                                                'बैंगलोर में सम्मानजनक जॉब्स',
                                                'सख्त सुरक्षा और बैकग्राउंड चेक',
                                                'हेल्पर वेलफेयर और लॉन्ग-टर्म सपोर्ट'
                                            ].map((item) => (
                                                <li key={item} className="flex items-center gap-3 text-base md:text-lg font-bold">
                                                    <div className="w-2 h-2 rounded-full bg-pink-400 shrink-0"></div>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col justify-center text-center">
                                        <h3 className="text-xl font-black mb-4 text-pink-300 uppercase tracking-wider leading-loose">हमारा विश्वास:</h3>
                                        <p className="text-2xl md:text-4xl font-black text-white italic leading-tight text-center">
                                            "हेल्पर्स के लिए अच्छे घर। परिवारों के लिए अच्छे हेल्पर्स।"
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-20">
                                    <h3 className="text-xl md:text-3xl font-black mb-10 text-center text-pink-300 leading-loose">हेल्पर्स EzyHelpers पर क्यों भरोसा करते हैं:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {[
                                            { text: "5,000+ हेल्पर्स को जॉब दी", highlight: true },
                                            { text: "10,000+ परिवारों को सपोर्ट किया", highlight: true },
                                            { text: "स्किल इंडिया के तहत DWSSC के साथ ट्रेनिंग" },
                                            { text: "सिर्फ इज्जतदार घरों में प्लेसमेंट" },
                                            { text: "जॉइन करने से पहले काम साफ-साफ समझाए जाते हैं" },
                                            { text: "प्लेसमेंट के बाद लगातार सपोर्ट" },
                                            { text: "गलतफहमी या जॉब की दिक्कतों में मदद" },
                                            { text: "जरूरत पड़ने पर जॉब बदलने में मदद" },
                                            { text: "रेगुलर सैलरी और लंबे समय तक काम करने के मौके" },
                                        ].map((item, idx) => (
                                            <div key={idx} className={`p-5 rounded-xl border border-white/20 flex items-center gap-4 ${item.highlight ? 'bg-pink-700/50 scale-105 shadow-lg' : 'bg-white/5'}`}>
                                                <CheckCircleIcon className="w-6 h-6 text-pink-400 flex-shrink-0" />
                                                <span className="font-bold text-sm md:text-base leading-tight">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center bg-white/5 rounded-2xl p-8 border border-white/10">
                                    <h3 className="text-lg font-black mb-4 text-pink-200 uppercase tracking-widest flex items-center justify-center gap-3 leading-loose">
                                        <GlobeAltIcon className="w-6 h-6" /> हम इन जगहों पर सर्विस देते हैं:
                                    </h3>
                                    <p className="text-base md:text-xl font-bold mb-8 text-pink-50 leading-relaxed">
                                        बैंगलोर, बरेली, मुंबई, हैदराबाद, दिल्ली NCR, पुणे, ओडिशा और भी बहुत कुछ।
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
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">EzyHelpers में हेल्पर्स के लिए सपोर्ट और फायदे</h2>
                            <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { title: "ट्रेनिंग और सर्टिफिकेट", desc: "आपके जॉब रोल से जुड़ी बेसिक ट्रेनिंग, और पूरा होने पर सर्टिफिकेट दिया जाएगा।", icon: AcademicCapIcon },
                                { title: "प्रोफे़शनल दिखें", desc: "कोट और ग्रूमिंग किट दी जाएगी।", icon: StarIcon },
                                { title: "सेफ्टी और सिक्योरिटी", desc: "साफ वर्क एग्रीमेंट और रेगुलर सपोर्ट।", icon: ShieldCheckIcon },
                                { title: "रहने के लिए सपोर्ट", desc: "अगर प्लेसमेंट में देरी हो रही है तो हमारे महिला हॉस्टल में रहें।", icon: HomeIcon },
                                { title: "हेल्थ इंश्योरेंस", desc: "इमरजेंसी के लिए बेसिक मेडिकल कवरेज।", icon: HeartIcon },
                                { title: "इज्ज़तदार काम का माहौल", desc: "ऐसे घर जो आपके साथ इज्ज़त से पेश आते हैं।", icon: UserGroupIcon },
                                { title: "भविष्य के मौके", desc: "अच्छे परफॉर्मेंस से ज़्यादा सैलरी या दूसरे शहरों/विदेशों में नौकरी मिल सकती है।", icon: BriefcaseIcon },
                                { title: "समय पर सैलरी", desc: "हर महीने परिवार / मालिक सीधे पेमेंट करते हैं।", icon: BanknotesIcon },
                                { title: "जॉब प्रोफ़ाइल बनाना", desc: "बेहतर मेड जॉब पाने के लिए प्रोफ़ाइल बनाएं।", icon: UserPlusIcon },
                                { title: "हर कदम पर सपोर्ट", desc: "रजिस्ट्रेशन से लेकर प्लेसमेंट के बाद तक मदद।", icon: PhoneIcon },
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center mb-4 text-pink-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-black text-lg text-gray-900 mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed font-bold">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEST Hostel Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom px-4">
                        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-700 to-pink-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center border-4 border-white/20">
                            <div className="p-8 md:p-12 text-white flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display leading-tight uppercase tracking-tight">NEST – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल</h2>
                                <p className="text-pink-100 text-lg mb-8 leading-loose font-black px-1">
                                    महिला हेल्पर्स बैंगलोर में कभी भी NEST में रह सकती हैं। हॉस्टल सुरक्षित, आरामदायक कमरे, रोज़ का खाना और बहुत सस्ते रेट देता है, जिससे आपके लिए वहां बसना और अपना काम शुरू करना आसान हो जाता है।
                                </p>
                                <Link
                                    href="/nest"
                                    className="inline-flex items-center gap-2 bg-white text-pink-700 font-black py-4 px-10 rounded-xl hover:bg-gray-100 transition-all leading-loose shadow-xl transform hover:scale-105"
                                >
                                    NEST के बारे में और जानें <ArrowRightIcon className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="hidden md:flex w-1/3 h-[450px] bg-white/10 items-center justify-center relative overflow-hidden">
                                <HomeModernIcon className="w-48 h-48 text-white" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/50 to-pink-900"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Refer & Earn Section */}
                <section className="section-padding bg-pink-50 border-y border-pink-100">
                    <div className="container-custom px-4">
                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-200">
                            <div className="md:flex">
                                <div className="md:w-5/12 bg-gradient-to-br from-pink-600 to-pink-800 p-10 flex flex-col items-center justify-center text-center text-white relative">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6 shadow-inner text-white">
                                        <GiftIcon className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-bold mb-2 font-display leading-loose uppercase tracking-widest">किसी दोस्त को रेफर करें</h2>
                                    <h3 className="text-6xl md:text-7xl font-black mb-4 leading-none tracking-tighter">₹500 कमाएं</h3>
                                    <p className="text-pink-200 font-black text-sm uppercase tracking-widest">*नियम और शर्तें लागू</p>
                                </div>
                                <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">किसी दोस्त को रेफर करें और ₹500 कमाएं</h2>
                                    <p className="text-lg text-gray-600 font-black mb-8 leading-relaxed">
                                        EzyHelpers पर झारखंड के अपने दोस्तों और रिश्तेदारों को बैंगलोर में घरेलू काम की नौकरी दिलाने में मदद करें।
                                    </p>
                                    <div className="space-y-5 mb-10">
                                        {[
                                            "WhatsApp पर उनकी डिटेल्स शेयर करें या हमें कॉल करें",
                                            "अपने दोस्त का नाम, उम्र और जॉब प्रेफरेंस बताएं",
                                            "वे EzyHelpers जॉइन करते हैं, प्लेसमेंट पूरा करते हैं, और आप ₹500 कमाते हैं"
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="w-7 h-7 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-pink-200 border-2 border-white">
                                                    <span className="text-white text-xs font-black">{i + 1}</span>
                                                </div>
                                                <span className={`text-gray-700 font-bold text-base leading-relaxed ${i === 2 ? 'text-pink-700 font-black' : ''}`}>{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link
                                        href="https://wa.me/918031411776"
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
                            <h2 className="text-2xl md:text-5xl font-black text-gray-900 mb-4 font-display tracking-tight leading-tight uppercase">जापा मेड जॉब्स के लिए अप्लाई कैसे करें</h2>
                            <div className="w-24 h-2 bg-pink-600 mx-auto mt-6 rounded-full"></div>
                        </div>

                        <div className="max-w-6xl mx-auto relative px-4">
                            {/* Central Connecting Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-100 via-pink-600 to-pink-100 hidden md:block opacity-50"></div>

                            <div className="space-y-16 md:space-y-24">
                                {[
                                    {
                                        step: 1,
                                        title: "स्टेप 1: ईज़ीहेल्पर्स से कॉन्टैक्ट करें",
                                        desc: "हमें कॉल करें या ऑनलाइन फॉर्म भरें। हम ड्यूटी, रहने की जगह और सैलरी साफ-साफ समझाते हैं"
                                    },
                                    {
                                        step: 2,
                                        title: "स्टेप 2: अपनी डिटेल्स शेयर करें",
                                        desc: "अपना नाम, उम्र और शिशु की देखभाल करने में अनुभव बताएँ"
                                    },
                                    {
                                        step: 3,
                                        title: "स्टेप 3: जॉब मैचिंग और शुरू करें",
                                        desc: "ट्रेनिंग में शामिल हों, वेरिफिकेशन पूरा करें, परिवार के साथ इंटरव्यू दें, और पूरे सपोर्ट के साथ काम शुरू करें"
                                    }
                                ].map((item, index) => (
                                    <div key={index} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                        {/* Content Card */}
                                        <div className="w-full md:w-[45%] mb-8 md:mb-0 transition-all duration-500 hover:scale-[1.03]">
                                            <div className="bg-white p-10 md:p-12 rounded-[3rem] border-2 border-pink-50 shadow-[0_20px_70px_-20px_rgba(236,72,153,0.15)] hover:shadow-[0_25px_80px_-20px_rgba(236,72,153,0.25)] relative overflow-hidden group">
                                                <div className="absolute top-0 left-0 w-3 h-full bg-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-6 leading-tight font-display uppercase tracking-tight">{item.title}</h3>
                                                <p className="text-gray-600 font-black leading-relaxed text-base md:text-lg opacity-80">{item.desc}</p>
                                            </div>
                                        </div>

                                        {/* Center Number Circle */}
                                        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-20 pointer-events-none mb-10 md:mb-0">
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-pink-600 text-white rounded-full flex items-center justify-center font-black text-3xl md:text-5xl shadow-[0_15px_45px_-10px_rgba(236,72,153,0.8)] border-8 border-white ring-4 ring-pink-50 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-700"></div>
                                                <span className="relative z-10">{item.step}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-20 md:mt-32 text-center">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex py-5 px-16 bg-pink-600 text-white font-black text-xl rounded-2xl hover:bg-pink-700 transition-all shadow-[0_20px_50px_-10px_rgba(236,72,153,0.5)] transform hover:scale-105 leading-loose"
                                >
                                    अभी रजिस्टर करें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="section-padding bg-pink-900 text-white overflow-hidden relative border-t border-pink-800">
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
                    </div>
                    <div className="container-custom relative z-10 text-center">
                        <h2 className="text-3xl md:text-6xl font-black mb-6 font-display text-white tracking-tight px-4 leading-tight">अपने काम से हर दिन परिवारों की ज़िंदगी बदलें</h2>
                        <p className="text-pink-100 text-lg md:text-2xl mb-14 max-w-4xl mx-auto leading-relaxed font-bold opacity-90 px-4">
                            माओं और न्यूबॉर्न शिशु की मदद करें और एक ऐसा अर्थपूर्ण काम करें जो आपकी ज़िंदगी में गर्व, मकसद और सम्मान लाए।
                        </p>
                        <Link
                            href="/helper-registration"
                            className="w-[90%] sm:w-auto inline-flex py-5 px-16 bg-white text-pink-900 font-black text-xl rounded-2xl hover:bg-pink-50 transition-all shadow-[0_20px_60px_rgba(255,255,255,0.25)] transform hover:scale-105 leading-loose"
                        >
                            आज ही जॉइन करें
                        </Link>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display leading-tight">FAQs</h2>
                            <div className="w-24 h-1 bg-pink-500 mx-auto mt-4 rounded-full"></div>
                        </div>
                        <FAQAccordion faqs={faqs} />
                    </div>
                </section>

                <Footer />
            </main>
        </>
    )
}
