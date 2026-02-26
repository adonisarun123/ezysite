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
    UserGroupIcon,
    ShieldCheckIcon,
    UserPlusIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline'


import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'

export const metadata: Metadata = {
    title: 'बैंगलोर में डोमेस्टिक हेल्पर जॉब्स | फ्री जॉब्स | EzyHelpers',
    description: 'बैंगलोर में भरोसेमंद डोमेस्टिक हेल्पर जॉब्स के लिए अप्लाई करें। परिवारों से सीधे बात करें, फिक्स्ड सैलरी, छुट्टी, काम के घंटे और लगातार सपोर्ट पाएं।',
    openGraph: {
        title: 'बैंगलोर में डोमेस्टिक हेल्पर जॉब्स | फ्री जॉब्स | EzyHelpers',
        description: 'बैंगलोर में भरोसेमंद डोमेस्टिक हेल्पर जॉब्स के लिए अप्लाई करें। परिवारों से सीधे बात करें, फिक्स्ड सैलरी, छुट्टी, काम के घंटे और लगातार सपोर्ट पाएं।',
        url: 'https://www.ezyhelpers.com/helper-jobs',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/helper-jobs'
    }
}

const faqs: FAQItem[] = [
    {
        question: 'क्या जॉब पाने के लिए पैसे देने होंगे?',
        answer: 'नहीं। रजिस्ट्रेशन और जॉब हेल्प पूरी तरह फ्री है। हम कभी सैलरी या किसी तरह की फ़ीस नहीं लेते।',
    },
    {
        question: 'क्या काम पर जाने से पहले परिवार से बात कर सकते हैं?',
        answer: 'हाँ। फोन या वीडियो कॉल का इंतज़ाम किया जाता है। आप तभी जाएँ जब आप पूरी तरह आरामदायक महसूस करें और सहमत हों।',
    },
    {
        question: 'क्या सैलरी और काम का समय पहले से तय होगा?',
        answer: 'हाँ। सैलरी, काम के घंटे और हफ़्ते की छुट्टियाँ पहले से साफ-साफ तय कर दी जाती हैं।',
    },
    {
        question: 'क्या खाना और रहने की जगह मिलेगी?',
        answer: 'लिव-इन काम के लिए खाना और रहने की सुविधा आमतौर पर दी जाती है। इसकी पूरी जानकारी जॉइन करने से पहले बता दी जाती है।',
    },
    {
        question: 'कौन-से डॉक्यूमेंट जमा करने होंगे?',
        answer: 'वेरिफ़िकेशन के लिए आधार कार्ड और लोकल एड्रेस प्रूफ़ की कॉपी WhatsApp पर भेजनी होती है।',
    },
    {
        question: 'अगर जॉइन करने के बाद नौकरी सही न लगे तो क्या होगा?',
        answer: 'ऐसी स्थिति में हमारी टीम को कभी भी बताया जा सकता है। हम सुरक्षित तरीके से जॉब बदलने में मदद करते हैं।',
    },
    {
        question: 'अगर काम पर कोई समस्या हो तो कौन मदद करेगा?',
        answer: 'किसी भी समस्या में हमारी सपोर्ट टीम से संपर्क किया जा सकता है। हम परिवार से बात करके समस्या सुलझाने में मदद करते हैं।',
    },
    {
        question: 'क्या त्योहारों या इमरजेंसी में घर जा सकते हैं?',
        answer: 'हाँ। छुट्टियाँ और हॉलिडे जॉइन करने से पहले तय कर दिए जाते हैं। नौकरी छोड़नी हो तो पहले से सूचना देना जरूरी होता है।',
    },
    {
        question: 'क्या बाद में दूसरी जॉब के लिए अप्लाई किया जा सकता है?',
        answer: 'हाँ। बाद में भी दूसरी जॉब के लिए अप्लाई किया जा सकता है। हमारी टीम उपलब्ध जॉब्स देखकर सही नौकरी दिलाने में मदद करेगी।',
    }
]

export default function HelperJobsPage() {
    return (
        <>
            <main className="min-h-screen noto-sans-devanagari-hindi">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'होम', href: '/' },
                        { label: 'हेल्पर जॉब्स' }
                    ]}
                    rightContent={
                        <div className="flex items-center space-x-2 text-sm font-medium">
                            <span className="text-purple-700 font-bold bg-white px-3 py-1 rounded-full shadow-xl">हिंदी</span>
                            <span className="text-gray-300">|</span>
                            <Link href="/helper-jobs" className="text-gray-500 hover:text-purple-600 transition-colors">
                                English
                            </Link>
                        </div>
                    }
                />

                {/* Hero Section with Bright Colors */}
                <section className="relative bg-gradient-to-br from-purple-800 via-purple-500 to-purple-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">

                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="w-full max-w-none mx-auto text-center px-4">
                            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">बैंगलोर में डोमेस्टिक हेल्पर जॉब्स | 100% फ्री | EzyHelpers</h1>

                            <p className="text-sm sm:text-base md:text-2xl font-semibold mb-4 text-purple-100 max-w-5xl mx-auto">अच्छी सैलरी वाली सुरक्षित नौकरी ढूंढ रहे हैं? <br /> क्या आप एजेंटों को पैसे देकर और झूठे वादों से परेशान हो चुके हैं?</p>

                            <div className="space-y-4 mb-6 max-w-5xl mx-auto">
                                <p className="text-sm sm:text-base md:text-xl text-purple-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                                    EzyHelpers के साथ आप बैंगलोर में सुरक्षित और भरोसेमंद डोमेस्टिक हेल्पर जॉब आसानी से पा सकते हैं।
                                </p>
                            </div>

                            <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ कोई एजेंट नहीं</div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ कोई फीस नहीं</div>
                                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[9px] md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ कोई कमीशन नहीं</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ लिखा हुआ एग्रीमेंट</div>
                                <div className="col-span-3 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-xs md:text-base font-medium flex items-center justify-center text-center leading-tight">✓ हमेशा जॉब सपोर्ट</div>
                            </div>

                            <p className="text-sm sm:text-base md:text-xl font-semibold mb-6 text-yellow-300 max-w-4xl mx-auto">कम सैलरी वाली लोकल जॉब छोड़कर इज्ज़त और सुरक्षा वाली पक्की नौकरी की ओर बढ़ें।</p>

                            <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
                                <Link
                                    href="/helper-registration"
                                    className="inline-flex items-center justify-center w-full bg-white text-purple-700 font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    फ्री रजिस्ट्रेशन
                                </Link>

                                <Link
                                    href="#find-jobs-by-state"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-sm sm:text-base md:text-lg py-3 px-1 md:py-4 md:px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300 text-center whitespace-nowrap"
                                >
                                    अपने आस-पास जॉब्स ढूंढें
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-custom">
                        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-8 text-center md:divide-x divide-gray-100 mt-4 mb-4">
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">5,000+</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">हेल्पर्स को जॉब्स मिलीं</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">9</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">काम के प्रकार</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">100%</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">परिवार / मालिक से डायरेक्ट सैलरी</div>
                            </div>
                            <div>
                                <div className="text-lg xs:text-xl md:text-4xl font-bold text-purple-600 mb-1 md:mb-2">₹0</div>
                                <div className="text-purple-600 text-[9px] xs:text-[10px] md:text-base font-medium leading-tight">रजिस्ट्रेशन/प्लेसमेंट फ़ीस</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Jobs Available Section */}
                <section className="section-padding bg-gray-100">
                    <div className="container-custom">
                        <div className="text-center mb-6 md:mb-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">जॉब के प्रकार</h2>
                            <p className="text-lg text-gray-600">अपने अनुभव और स्किल के अनुसार जॉब चुनें</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                            {[
                                { title: "हाउसकीपिंग जॉब्स", desc: "सफ़ाई, धुलाई, पोछा लगाना, और रोज़ाना घर का काम।", icon: UserGroupIcon },
                                { title: "कुकिंग जॉब्स", desc: "परिवारों के लिए वेज / नॉन-वेज घर का खाना।", icon: HeartIcon },
                                { title: "नैनी / बेबीसिटर", desc: "बेबी केयर, फीडिंग, और बच्चों की देखभाल और निगरानी।", icon: BriefcaseIcon },
                                { title: "बुज़ुर्गों की देखभाल", desc: "घर पर बुज़ुर्गों की रोज़ाना देखभाल और मदद का काम।", icon: ShieldCheckIcon },
                                { title: "पेशेंट केयर", desc: "घर पर पेशेंट के लिए नॉन-मेडिकल केयर और रोज़ाना मदद।", icon: UserGroupIcon },
                                { title: "लिव-इन कपल जॉब्स", desc: "रहने के साथ सफ़ाई और घर संभालने में मदद के लिए पति-पत्नी की जॉब्स।", icon: UserGroupIcon },
                                { title: "कपल सिक्योरिटी जॉब्स", desc: "अपार्टमेंट बिल्डिंग्स के लिए पति-पत्नी वॉचमैन और सिक्योरिटी जॉब्स।", icon: UserGroupIcon },
                                { title: "जापा मेड जॉब्स", desc: "डिलीवरी के बाद माँ और नन्हे बच्चे की देखभाल।", icon: UserGroupIcon },
                                { title: "फार्महाउस कपल जॉब्स", desc: "पति-पत्नी जॉब्स फार्महाउस की देखभाल, सिक्योरिटी और मेंटेनेंस के लिए।", icon: UserGroupIcon }
                            ].map((job, index) => (
                                <div key={index} className="bg-white rounded-2xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="bg-purple-100 rounded-lg w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-3 md:mb-4 text-purple-600 group-hover:scale-110 transition-transform">
                                        <job.icon className="h-5 w-5 md:h-6 md:w-6" />
                                    </div>
                                    <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 leading-tight">{job.title}</h3>
                                    <p className="text-gray-600 text-xs md:text-sm leading-snug">{job.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-4 mt-12">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                अभी अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Find Helper jobs by State / Region */}
                <section id="find-jobs-by-state" className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">अपने एरिया से घरेलू नौकरी ढूंढें</h2>
                            <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto">बैंगलोर में आपके लिए उपलब्ध मेल और फीमेल हेल्पर जॉब्स देखने के लिए अपना राज्य या एरिया चुनें।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                {
                                    slug: "jharkhand",
                                    title: "झारखंड",
                                    desc: "कम लोकल सैलरी पर काम करना छोड़ें और ज्यादा कमाई वाली, भरोसेमंद जॉब्स के लिए बैंगलोर जाएँ, जहाँ आपकी सुरक्षा और सम्मान सबसे पहले है।",
                                    features: ["कुकिंग, सफाई, बच्चों और बुज़ुर्गों की देखभाल वाली जॉब्स", "लिव-इन, फुल-टाइम और पार्ट-टाइम ऑप्शन", "जॉइन करने से पहले स्पष्ट काम की जिम्मेदारी", "फिक्स्ड मंथली सैलरी और हफ़्ते में छुट्टी", "सम्मानजनक कार्यस्थल"]
                                },
                                {
                                    slug: "odisha",
                                    title: "ओडिशा",
                                    desc: "सम्मानजनक बैंगलोर फैमिली से जुड़कर अनचाहे काम और गलत एजेंटों के डर से बचें। यहाँ आपको लिखित कॉन्ट्रैक्ट और समय पर सैलरी मिलती है।",
                                    features: ["हाउसमेड, कुक और चाइल्डकेयर जॉब्स", "लिव-इन और दिन के समय काम उपलब्ध", "जॉब की पूरी लिखित जानकारी", "लिव-इन जॉब्स में सुरक्षा और खाना", "फिक्स्ड मंथली सैलरी"]
                                },
                                {
                                    slug: "assam",
                                    title: "असम",
                                    desc: "अब सीमित लोकल ऑप्शन से परेशान न हों; बैंगलोर में पक्की नौकरी के लिए अप्लाई करें जहाँ परिवार/मालिक आपकी पूरी सैलरी सीधे और समय पर देते हैं।",
                                    features: ["कई घरेलू जॉब कैटेगरी", "अपनी सुविधा के अनुसार काम के ऑप्शन", "परिवार/मालिक से डायरेक्ट पेमेंट", "लंबे समय तक नौकरी की स्थिरता", "सुरक्षित काम का माहौल"]
                                },
                                {
                                    slug: "bihar",
                                    title: "बिहार",
                                    desc: "एजेंट्स को भारी कमीशन देकर थक गए हैं? EzyHelpers बैंगलोर में ज़ीरो फीस और पूरी जॉब सुरक्षा के साथ ईमानदार काम ढूंढने में मदद करता है।",
                                    features: ["कुक, मेड और केयरगिवर जॉब्स", "जॉइन करने के बाद पूरी मदद", "पहले से तय काम का एग्रीमेंट", "सम्मानजनक फैमिली माहौल", "कोई एजेंट फीस नहीं"]
                                },
                                {
                                    slug: "chhattisgarh",
                                    title: "छत्तीसगढ़",
                                    desc: "लंबे काम के घंटे बिना आराम के भूल जाइए; EzyHelpers आपके लिए फिक्स्ड टाइमिंग, हफ़्ते की छुट्टियाँ और एक प्रोफेशनल और सुरक्षित काम का माहौल देता है।",
                                    features: ["सफाई, खाना बनाना और घरेलू मदद", "फुल-टाइम और लिव-इन पोजीशन", "फिक्स्ड काम के घंटे", "जॉइन करने के बाद भी सपोर्ट", "सुरक्षित और भरोसेमंद घर"]
                                },
                                {
                                    slug: "uttar-pradesh",
                                    title: "उत्तर प्रदेश",
                                    desc: "बैंगलोर में फिक्स्ड छुट्टियों और समय पर सैलरी के साथ भरोसेमंद घरेलू काम चुनकर नियमित इनकम की परेशानी से बचें।",
                                    features: ["कुकिंग, हाउसकीपिंग और बच्चों की देखभाल", "लिव-इन और पूरे दिन काम उपलब्ध", "लिखी हुई सैलरी और छुट्टी की शर्तें", "सिर्फ सुरक्षित और वेरिफाइड घर", "जॉब के अलग-अलग ऑप्शन"]
                                },
                                {
                                    slug: "uttarakhand",
                                    title: "उत्तराखंड",
                                    desc: "अनियमित काम ढूंढना बंद करें और बैंगलोर में डायरेक्ट पेमेंट और बिना किसी छिपे एजेंट चार्ज के पक्की, ज्यादा सैलरी वाली नौकरी पाएं।",
                                    features: ["कई जॉब कैटेगरी उपलब्ध", "काम के अपनी सुविधा के अनुसार घंटे", "परिवार/मालिक से डायरेक्ट सैलरी", "कोई एजेंट या कमीशन नहीं", "ज़रूरत पड़ने पर आसानी से जॉब बदलें"]
                                },
                                {
                                    slug: "madhya-pradesh",
                                    title: "मध्य प्रदेश",
                                    desc: "बैंगलोर में घरेलू काम के लिए अप्लाई करें और सीधे परिवारों से सैलरी और काम की जानकारी लें।",
                                    features: ["कुक, मेड और बुज़ुर्गों की देखभाल वाली जॉब्स", "लिव-इन और पूरे दिन के ऑप्शन", "जॉब की साफ़ उम्मीदें", "कोई रजिस्ट्रेशन चार्ज नहीं", "जॉइन करने से पहले परिवार के साथ इंटरव्यू"]
                                },
                                {
                                    slug: "andhra-pradesh",
                                    title: "आंध्र प्रदेश",
                                    desc: "पेमेंट में देर का इंतज़ार करना बंद करें; बैंगलोर में परिवार/मालिक हर महीने नियत तारीख को पूरी सैलरी सीधे बैंक में भेजते हैं।",
                                    features: ["काम के फ्लेक्सिबल घंटे", "लिव-इन और फुल-टाइम पोजीशन", "परिवार/मालिक से डायरेक्ट सैलरी", "जल्दी जॉब मैचिंग", "रेगुलर मंथली पेमेंट"]
                                },
                                {
                                    slug: "telangana",
                                    title: "तेलंगाना",
                                    desc: "कम सैलरी वाली लोकल जॉब से बचें और बैंगलोर में डायरेक्ट बैंक पेमेंट और इज्ज़त देने वाले परिवारों के साथ स्थिर भविष्य सुरक्षित करें।",
                                    features: ["कुकिंग, सफाई और केयर रोल", "अपार्टमेंट और इंडिपेंडेंट होम जॉब्स", "स्पष्ट काम की जिम्मेदारी", "फ्री रूम और खाना", "डायरेक्ट बैंक ट्रांसफर सैलरी"]
                                },
                                {
                                    slug: "tamil-nadu",
                                    title: "तमिलनाडु",
                                    desc: "बाद में बदलने वाले वादों से समझौता न करें; EzyHelpers से लिखित जॉब एग्रीमेंट लें जो आपके अधिकार और सुरक्षा को पक्का करे।",
                                    features: ["हाउसकीपिंग, कुकिंग और केयर जॉब्स", "कोई प्रॉब्लम होने पर मदद", "लिखा हुआ जॉब एग्रीमेंट", "फिक्स्ड ऑफ और काम के घंटे", "फ्री जॉब, कोई कमीशन नहीं"]
                                },
                                {
                                    slug: "kolkata",
                                    title: "कोलकाता",
                                    desc: "लोकल जॉब की असुरक्षा से निपटना बंद करें और भरोसेमंद डोमेस्टिक हेल्पर जॉब्स के लिए बैंगलोर जाएँ, जो फिक्स्ड इनकम और पूरा सपोर्ट देती हैं।",
                                    features: ["बेबीसिटिंग, कुकिंग और मेड जॉब्स", "फुल-टाइम और लिव-इन रोल्स", "फिक्स्ड मंथली इनकम", "हमारी टीम से लगातार सपोर्ट", "कोई रजिस्ट्रेशन फीस नहीं"]
                                }
                            ].map((item, index) => (
                                <Link
                                    key={index}
                                    href={`/helper-jobs/${item.slug}`}
                                    className="group bg-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left relative overflow-hidden"
                                >
                                    <h3 className="text-lg md:text-2xl font-bold text-purple-700 mb-3 group-hover:text-purple-800 relative z-10">{item.title}</h3>

                                    <p className="text-gray-700 text-xs md:text-sm mb-5 leading-relaxed font-medium relative z-10">
                                        {item.desc}
                                    </p>

                                    <div className="space-y-2 relative z-10">
                                        {item.features.map((feature, fIndex) => (
                                            <div key={fIndex} className="flex items-start gap-2">
                                                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-6 font-semibold text-purple-600 text-sm group-hover:underline flex items-center gap-1 relative z-10">
                                        {item.title} में जॉब्स देखें <span>→</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About & Trust Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <span className="inline-block py-1 px-4 rounded-full bg-purple-600 text-white text-xs font-bold tracking-wider mb-4">
                                हमारे बारे में
                            </span>
                            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6 font-display">EzyHelpers के बारे में</h2>
                            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                                EzyHelpers घरेलू हेल्पर्स को पूरे भारत में सुरक्षित, सम्मानजनक और भरोसेमंद जॉब्स ढूंढने में मदद करता है। हम आपको बिना किसी एजेंट या बिचौलिए के सीधे परिवारों से जोड़ते हैं।
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 md:p-12 shadow-xl max-w-6xl mx-auto">
                            <div className="mb-0">
                                <h3 className="text-xl md:text-3xl font-bold text-purple-600 mb-8">हेल्पर्स हम पर भरोसा क्यों करते हैं</h3>

                                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6">
                                    {[
                                        "कोई भी जॉब लेने से पहले सीधे परिवार से बात करें",
                                        "कोई एजेंट या बिचौलिया नहीं। 100% फ्री जॉब सपोर्ट",
                                        "जॉइन करने से पहले जॉब की डिटेल्स साफ-साफ बताई जाती हैं",
                                        "सम्मान, सुरक्षा और इज्ज़त सबसे पहले",
                                        "आपके काम शुरू करने के बाद भी हम साथ रहते हैं",
                                        "कभी कोई कमीशन या सैलरी में कटौती नहीं",
                                        "हेल्पर्स की भलाई के लिए हमने DWSCC और Skill India के साथ पार्टनरशिप की है",
                                        "स्पष्ट और सुरक्षित जॉब एग्रीमेंट",
                                        "अगर काम सही न हो तो सुरक्षित जॉब बदलने में मदद",
                                        "पूरे भारत में हजारों हेल्पर्स EzyHelpers पर भरोसा करते हैं"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-purple-600 flex-shrink-0 mt-0.5 md:mt-1" />
                                            <p className="text-sm md:text-lg text-gray-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits For You */}
                <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">आपके लिए फायदे</h2>
                        </div>

                        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">अच्छी सैलरी</h3>
                                <p className="text-gray-700 leading-relaxed">जॉइन करने से पहले तय, समय पर पेमेंट</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">डायरेक्ट सैलरी</h3>
                                <p className="text-gray-700 leading-relaxed">परिवार/मालिक सीधे पेमेंट करता है, कोई कटौती नहीं</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">फ्लेक्सिबल काम</h3>
                                <p className="text-gray-700 leading-relaxed">लिव-इन, फुल-टाइम या पार्ट-टाइम ऑप्शन</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">फ्री बेसिक ट्रेनिंग</h3>
                                <p className="text-gray-700 leading-relaxed">सफाई, खाना बनाना, बेबी केयर, बुज़ुर्ग देखभाल</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">लिखा हुआ एग्रीमेंट</h3>
                                <p className="text-gray-700 leading-relaxed">सैलरी, छुट्टी और काम के घंटे पहले तय</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">इमरजेंसी में रहने की सुविधा में मदद</h3>
                                <p className="text-gray-700 leading-relaxed">महिलाओं के लिए सुरक्षित हॉस्टल</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">हर हफ़्ते चेक-इन कॉल</h3>
                                <p className="text-gray-700 leading-relaxed">सुरक्षा और काम की स्थिति का चेक</p>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-2 border-purple-100 hover:shadow-lg transition-all duration-300">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">रेफर करें और कमाएं ₹500</h3>
                                <p className="text-gray-700 leading-relaxed">एक दोस्त को लाएं और 1 महीने के बाद ₹500 कमाएं।</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">लोकल एजेंट बनाम EzyHelpers</h2>
                        </div>

                        <div className="max-w-4xl mx-auto overflow-x-auto">
                            <table className="w-full border-collapse hidden md:table table-fixed">
                                <thead>
                                    <tr className="bg-gradient-to-r from-purple-600 to-blue-600">
                                        <th className="p-4 text-left text-white font-bold text-lg border-r border-white/20 w-1/2">लोकल एजेंट</th>
                                        <th className="p-4 text-left text-white font-bold text-lg w-1/2">EzyHelpers</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            agent: "कमीशन के तौर पर 15–30 दिन की सैलरी लेते हैं",
                                            ezy: "100% फ्री रजिस्ट्रेशन, कोई फ़ीस नहीं"
                                        },
                                        {
                                            agent: "बिना सही घर चेक के हेल्पर भेजते हैं",
                                            ezy: "सिर्फ़ वेरिफाइड और सम्मानजनक परिवार"
                                        },
                                        {
                                            agent: "बिना लिखित सैलरी का वादा",
                                            ezy: "जॉइन करने से पहले सैलरी तय"
                                        },
                                        {
                                            agent: "कोई तय हफ़्ते की छुट्टी नहीं",
                                            ezy: "हफ़्ते की छुट्टी और छुट्टियाँ साफ़ तौर पर तय"
                                        },
                                        {
                                            agent: "इमरजेंसी में कोई मदद नहीं",
                                            ezy: "मदद चाहिए तो सपोर्ट टीम मौजूद"
                                        },
                                        {
                                            agent: "कोई लिखा हुआ एग्रीमेंट नहीं",
                                            ezy: "सुरक्षा के लिए लिखा हुआ जॉब एग्रीमेंट"
                                        },
                                        {
                                            agent: "फ्री बेसिक ट्रेनिंग",
                                            ezy: "फ्री बेसिक ट्रेनिंग दी जाती है"
                                        },
                                        {
                                            agent: "नौकरी के सीमित ऑप्शन",
                                            ezy: "अपनी नौकरी और परिवार चुनें"
                                        },
                                        {
                                            agent: "कोई तरक्की या फ़ायदे नहीं",
                                            ezy: "रेफ़रल बोनस ₹500"
                                        }
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                                            <td className="p-4 text-gray-700 bg-red-50 border-r border-gray-200">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-red-500 font-bold text-xl">✗</span>
                                                    <span>{row.agent}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-700 bg-green-50">
                                                <div className="flex items-start gap-2">
                                                    <span className="text-green-500 font-bold text-xl">✓</span>
                                                    <span>{row.ezy}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="md:hidden space-y-4 mt-6">
                            {[
                                {
                                    agent: "कमीशन के तौर पर 15–30 दिन की सैलरी लेते हैं",
                                    ezy: "100% फ्री रजिस्ट्रेशन, कोई फ़ीस नहीं"
                                },
                                {
                                    agent: "बिना सही घर चेक के हेल्पर भेजते हैं",
                                    ezy: "सिर्फ़ वेरिफाइड और सम्मानजनक परिवार"
                                },
                                {
                                    agent: "बिना लिखित सैलरी का वादा",
                                    ezy: "जॉइन करने से पहले सैलरी तय"
                                },
                                {
                                    agent: "कोई तय हफ़्ते की छुट्टी नहीं",
                                    ezy: "हफ़्ते की छुट्टी और छुट्टियाँ साफ़ तौर पर तय"
                                },
                                {
                                    agent: "इमरजेंसी में कोई मदद नहीं",
                                    ezy: "मदद चाहिए तो सपोर्ट टीम मौजूद"
                                },
                                {
                                    agent: "कोई लिखा हुआ एग्रीमेंट नहीं",
                                    ezy: "सुरक्षा के लिए लिखा हुआ जॉब एग्रीमेंट"
                                },
                                {
                                    agent: "फ्री बेसिक ट्रेनिंग",
                                    ezy: "फ्री बेसिक ट्रेनिंग दी जाती है"
                                },
                                {
                                    agent: "नौकरी के सीमित ऑप्शन",
                                    ezy: "अपनी नौकरी और परिवार चुनें"
                                },
                                {
                                    agent: "कोई तरक्की या फ़ायदे नहीं",
                                    ezy: "रेफ़रल बोनस ₹500"
                                }
                            ].map((row, index) => (
                                <div key={index} className="bg-white rounded-xl border-2 border-purple-200 overflow-hidden shadow-md">
                                    <div className="p-4 bg-red-50 border-b border-gray-200">
                                        <div className="text-sm font-bold text-red-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✗</span> लोकल एजेंट:
                                        </div>
                                        <div className="text-gray-700">{row.agent}</div>
                                    </div>
                                    <div className="p-4 bg-green-50">
                                        <div className="text-sm font-bold text-green-600 mb-1 flex items-center gap-2">
                                            <span className="text-lg">✓</span> EzyHelpers:
                                        </div>
                                        <div className="text-gray-700">{row.ezy}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center max-w-4xl mx-auto bg-purple-50 rounded-2xl p-8 border border-purple-100">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">आज ही अपनी हेल्पर जॉब जर्नी शुरू करें</h3>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            ओडिशा, झारखंड, बंगाल, बिहार, असम और दूसरे राज्यों के हजारों हेल्पर्स से जुड़ें, जिन्हें EzyHelpers के ज़रिए सुरक्षित काम और स्टेबल इनकम मिली है।</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हेल्पर जॉब्स के लिए अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+919811223344"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* How to start your job */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">EzyHelpers के साथ अपनी जॉब कैसे शुरू करें</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <UserPlusIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">अपनी प्रोफ़ाइल रजिस्टर करें</h3>
                                <p className="text-gray-600">हमें कॉल करें या ऑनलाइन फॉर्म भरें। अपनी स्किल्स, जॉब पसंद और उम्मीद की सैलरी शेयर करें।</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <UserGroupIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">मैच पाएं</h3>
                                <p className="text-gray-600">हम आपको सम्मानजनक परिवारों से मिलवाते हैं, जो आपके काम और पसंद के हिसाब से मैच करते हैं। वीडियो कॉल पर इंटरव्यू भी कराएँगे।</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
                                    <BanknotesIcon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">काम शुरू करें</h3>
                                <p className="text-gray-600">जब दोनों सहमत हों, तो जॉब फिक्स की जाती है, काम की सभी शर्तें लिखित में दी जाती हैं और काम के दौरान सपोर्ट दिया जाता है।</p>
                            </div>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/helper-registration"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हेल्पर जॉब्स के लिए अप्लाई करें
                            </Link>
                            <Link
                                href="tel:+918031411776"
                                className="inline-flex items-center justify-center bg-purple-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:bg-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                हमें कॉल करें
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">क्या आप अपना करियर शुरू करने के लिए तैयार हैं?</h2>
                            <p className="text-xl mb-8 text-purple-100">आज ही EzyHelpers से जुड़ें और भरोसेमंद परिवारों से जुड़ें जो आपके काम और कौशल की कद्र करते हैं।</p>

                            <div className="gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center bg-white text-purple-700 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    रजिस्टर करने के लिए अभी कॉल करें – यह फ्री है!
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">अक्सर पूछे जाने वाले सवाल (FAQs)</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>

            </main >
            <Footer />
        </>
    )
}
