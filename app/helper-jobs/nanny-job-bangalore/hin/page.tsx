import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClockIcon,
  HomeIcon,
  ClockIcon as ClockSolidIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  UserIcon,
  ShieldCheckIcon,
  FireIcon,
  StarIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "झारखंड महिलाओं के लिए बैंगलोर में नैनी जॉब्स | ईज़ीहेल्पर्स",
  description:
    "बैंगलोर में नैनी जॉब्स चाहिए? ईज़ीहेल्पर्स के साथ सुरक्षित परिवार, तय काम और लगातार सपोर्ट के साथ नौकरी पाएं।",
  openGraph: {
    title: "झारखंड महिलाओं के लिए बैंगलोर में नैनी जॉब्स | ईज़ीहेल्पर्स",
    description:
      "बैंगलोर में नैनी जॉब्स चाहिए? ईज़ीहेल्पर्स के साथ सुरक्षित परिवार, तय काम और लगातार सपोर्ट के साथ नौकरी पाएं।",
    url: "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore/hin",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ezyhelpers.com/helper-jobs/nanny-job-bangalore/hin",
  },
};

const faqs: FAQItem[] = [
  {
    question: "क्या मुझे पहले का अनुभव चाहिए?",
    answer: "हाँ, बच्चों की देखभाल में कम से कम 2 साल का अनुभव होना ज़रूरी है।",
  },
  {
    question: "क्या ट्रेनिंग दी जाएगी?",
    answer:
      "हाँ, बच्चों की देखभाल, साफ-सफ़ाई, सुरक्षा और व्यवहार की ट्रेनिंग मिलेगी।",
  },
  {
    question: "क्या लिव-इन नैनी को खाना और कमरा दिया जाता है?",
    answer: "हाँ, मुफ़्त खाना और रहने की जगह दी जाती है।",
  },
  {
    question: "क्या मुझे जॉब के लिए पैसे देने होंगे?",
    answer: "नहीं, ईज़ीहेल्पर्स हेल्पर्स से कोई फ़ीस नहीं लेता।",
  },
  {
    question: "क्या यह झारखंड से आने वाली महिलाओं के लिए सुरक्षित जॉब है?",
    answer: "हाँ, हम सिर्फ़ भरोसेमंद घरों में ही प्लेसमेंट करते हैं।",
  },
  {
    question: "अगर जॉइन करने के बाद जॉब पसंद नहीं आती तो?",
    answer:
      "आप हमें बता सकते हैं। हम समस्या सुलझाने या नौकरी बदलने में मदद करेंगे।",
  },
  {
    question: "मैं किस उम्र के बच्चों की देखभाल करूँगी?",
    answer:
      "आप 0–1 साल के शिशु, 1–3 साल के छोटे बच्चे या 4–10 साल के स्कूल जाने वाले बच्चों की देखभाल कर सकती हैं।",
  },
];

export default function NannyJobsBangalorePage() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />

        <Breadcrumb
          sticky={true}
          items={[
            { label: "Home", href: "/" },
            { label: "Helper Jobs", href: "/helper-jobs" },
            { label: "Nanny Jobs" },
          ]}
          rightContent={
            <Link
              href="/helper-jobs/nanny-job-bangalore"
              className="hidden md:flex items-center gap-2 bg-white rounded-full px-3 py-1.5 shadow-sm border border-gray-200 z-10 hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-gray-900">हिंदी</span>
              <div className="relative inline-flex h-6 w-12 items-center rounded-full bg-rose-600 transition-colors">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
              </div>
              <span className="text-sm font-medium text-gray-500">ENG</span>
            </Link>
          }
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-800 via-rose-500 to-rose-700 text-white pt-8 pb-12 md:pt-20 md:pb-24 lg:pb-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="w-full max-w-none mx-auto text-center px-4">
              <h1 className="text-xl md:text-5xl lg:text-5xl font-bold mb-2 font-display leading-tight text-white whitespace-normal">
                बैंगलोर में नैनी जॉब्स झारखंड की महिलाओं के लिए
              </h1>

              <div className="space-y-4 mb-6 max-w-5xl mx-auto mt-4">
                <p className="text-xs sm:text-sm md:text-xl text-rose-50/90 leading-relaxed max-w-sm mx-auto md:max-w-none">
                  बच्चों की देखभाल करना कीमती काम है। अगर आपको बच्चों की देखभाल
                  का अनुभव है, तो ईज़ीहेल्पर्स झारखंड की महिला हेल्पर्स को
                  बैंगलोर में नैनी और बेबीसिटर की नौकरी दिलाने में पूरा साथ देता
                  है।
                </p>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-6 max-w-5xl mx-auto px-1 md:flex md:flex-wrap md:justify-center">
                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                  ✓ कोई रजिस्ट्रेशन फीस नहीं
                </div>
                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                  ✓ बिना एजेंट के सीधे जॉब प्लेसमेंट
                </div>
                <div className="col-span-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 md:px-6 md:py-3 text-[10px] md:text-base font-medium flex items-center justify-center text-center leading-tight">
                  ✓ सैलरी सीधे परिवार द्वारा दी जाती है
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Salary & Benefits Overivew Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block py-1 px-4 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wider mb-4 border border-rose-200">
                जॉब लोकेशन: बैंगलोर
              </span>
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                सैलरी और खास फायदे एक नज़र में
              </h2>
            </div>

            {/* Salary Cards - 3 Columns */}
            <div className="flex flex-wrap justify-center gap-6 mb-16 max-w-6xl mx-auto">
              {/* Live-In Card */}
              <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 to-rose-600"></div>
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
                  <BriefcaseIcon className="w-7 h-7" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  लिव-इन नैनी जॉब्स
                </h3>
                <div className="text-2xl md:text-3xl font-extrabold text-rose-600 mb-6">
                  ₹20,000 से ₹25,000
                  <span className="text-sm font-medium text-gray-500 block mt-1">
                    हर महीने
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      फ्री खाना और रहना शामिल है
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      24 घंटे घर में रहने वाला काम
                    </span>
                  </li>
                </ul>
              </div>

              {/* Full-Time Card */}
              <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ClockSolidIcon className="w-7 h-7" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  फुल-टाइम बेबीसिटर जॉब्स
                </h3>
                <div className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-6">
                  ₹16,000 से ₹20,000
                  <span className="text-sm font-medium text-gray-500 block mt-1">
                    हर महीने
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      रोजाना काम के तय घंटे
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      परिवार के साथ तय हफ्ते की छुट्टी
                    </span>
                  </li>
                </ul>
              </div>

              {/* Part-Time Card */}
              <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] bg-white rounded-2xl p-8 border border-rose-100 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <SparklesIcon className="w-7 h-7" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  पार्ट-टाइम बेबीसिटर जॉब्स
                </h3>
                <div className="text-2xl md:text-3xl font-extrabold text-purple-600 mb-6">
                  ₹8,000 से ₹12,000
                  <span className="text-sm font-medium text-gray-500 block mt-1">
                    हर महीने
                  </span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      रोज़ 4 से 6 घंटे काम
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">
                      सुविधा के अनुसार काम चाहने वाले हेल्पर
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* What You Get Grid */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-xl md:text-4xl font-bold text-gray-900 font-display">
                  और भी फायदे
                </h3>
                <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { text: "प्लेसमेंट से पहले ट्रेनिंग", icon: AcademicCapIcon },
                  { text: "स्वास्थ्य बीमा सपोर्ट", icon: HeartIcon },
                  {
                    text: "सुरक्षित और सम्मानजनक काम का माहौल",
                    icon: ShieldCheckIcon,
                  },
                  {
                    text: "परिवार से सीधी सैलरी",
                    icon: BriefcaseIcon,
                  },
                  { text: "लंबे समय तक काम करने के मौके", icon: StarIcon },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100 ${index === 4 ? "sm:col-span-2 md:col-span-1 md:col-start-2" : ""}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rose-600" />
                    </div>
                    <span className="font-semibold text-gray-800">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Link
                  href="/helper-registration"
                  className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-lg py-4 px-10 rounded-xl hover:bg-rose-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  नैनी जॉब्स के लिए अप्लाई करें
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Where You Can Get Nanny Jobs Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                बैंगलोर में नैनी जॉब कहाँ मिलती है
              </h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Flats and Apartments */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  फ्लैट और अपार्टमेंट
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  परिवार के घर में बच्चों की रोज़ाना देखभाल।
                </p>
              </div>

              {/* Housing Societies */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                  <ClipboardDocumentListIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  हाउसिंग सोसाइटी
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  सुरक्षित सोसाइटी में बच्चों की देखरेख का काम।
                </p>
              </div>

              {/* Normal Family Houses */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600 mb-4">
                  <HeartIcon className="w-8 h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                  साधारण फैमिली हाउस
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  घर के माहौल में बच्चों की देखभाल और मदद।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Nanny Jobs Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                बैंगलोर में उपलब्ध नैनी जॉब्स के प्रकार
              </h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
              <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto">
                हम आपको कई चाइल्डकेयर जॉब ऑप्शन देते हैं ताकि आप अपनी सुविधा और समय के अनुसार चुन सकें।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Live-In Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600 flex-shrink-0">
                  <HomeIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  1. बैंगलोर में लिव-इन या 24 घंटे नैनी जॉब्स
                </h3>

                <div className="space-y-6 flex-grow">
                  {/* Type of Work */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम का प्रकार
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          परिवार / मालिक के घर में रहना
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रोज़ खाना मिलेगा
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          अलग कमरा या सोने का इंतज़ाम
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Work Hours */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम की व्यवस्था
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रोज़ 12 घंटे तक बच्चों की देखभाल का काम
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हर महीने दो दिन की छुट्टी
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          परिवार के साथ रोज़ का तय काम
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      यह किन लोगों के लिए सही है
                    </h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          झारखंड की महिला हेल्पर्स
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          किराया और खाने का खर्च बचाने वाली हेल्पर्स
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हेल्पर्स जो लिव-इन बच्चों की देखभाल के काम में कम्फर्टेबल महसूस करती हों
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/helper-registration"
                      className="text-rose-600 font-semibold hover:text-rose-700 flex items-center gap-1 group"
                    >
                      आज ही जॉब शुरू करें{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Full-Time Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 flex-shrink-0">
                  <ClockSolidIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  2. बैंगलोर में फुल-टाइम बेबीसिटर जॉब्स
                </h3>

                <div className="space-y-6 flex-grow">
                  {/* Type of Work */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम का टाइप
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रोज़ का निश्चित काम का समय
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रात भर रुकने की ज़रूरत नहीं
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          खाना तभी मिलेगा जब पहले से सहमति हो
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Work Hours */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम के घंटे
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          आमतौर पर हर दिन 8 से 10 घंटे
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हफ्ते में एक छुट्टी
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      यह किन लोगों के लिए सही है
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हेल्पर्स जो फिक्स्ड टाइमिंग पसंद करते हैं
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हेल्पर्स लिविंग विद रिलेटिव्स और इन शेयरड रूम्स
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          एक संतुलित डेली रूटीन चाहने वाले हेल्पर्स
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Part-Time Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full flex-grow">
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 text-purple-600 flex-shrink-0">
                  <SparklesIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  3. बैंगलोर में पार्ट-टाइम नैनी जॉब्स
                </h3>

                <div className="space-y-6 flex-grow">
                  {/* Type of Work */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम का टाइप
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          काम के घंटे सीमित
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रात में रुकना नहीं
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          सिर्फ़ बच्चों की देखभाल से जुड़े काम
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Work Hours */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      काम के घंटे
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          रोज़ 4 से 6 घंटे
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          सुबह या शाम की ड्यूटी
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          हफ़्ते में छुट्टी
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-800 mb-3 border-b border-gray-100 pb-2">
                      यह किन लोगों के लिए सही है
                    </h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          कम काम के घंटे चाहने वाले हेल्पर
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          आस-पास रहने वाले हेल्पर
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-gray-600">
                          बच्चों की देखभाल के लिए सुविधा के अनुसार काम चाहने वाले हेल्पर
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="/helper-registration"
                      className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1 group"
                    >
                      अभी रजिस्टर करें{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information Section (Responsibilities) */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {/* Responsibilities */}
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center flex-shrink-0 text-rose-600">
                    <ClipboardDocumentListIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 font-display">
                    काम की भूमिका और ज़िम्मेदारियाँ
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 font-medium">
                  आपकी दैनिक ज़िम्मेदारियाँ केवल बच्चों की देखभाल पर केंद्रित हैं।
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <h4 className="text-lg font-bold text-gray-900 col-span-full mb-2">
                    चाइल्डकेयर वर्क:
                  </h4>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">बच्चों को सुरक्षित रखना</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      शिशुओं और बच्चों को खाना खिलाना
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      बच्चों को नहलाना और तैयार करना
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      स्कूल का टिफिन तैयार करना
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      बच्चों को स्कूल के लिए तैयार करना
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      खिलौने, किताबें और बैग व्यवस्थित करना
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      स्कूल छोड़ना और लाना, यदि आवश्यक हो
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      बच्चों के कपड़े धोना
                    </span>
                  </div>
                  <div className="flex items-start gap-3 mt-2 md:col-span-2">
                    <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-semibold">
                      चाइल्डकेयर से जुड़ी बेसिक साफ़-सफ़ाई
                    </span>
                  </div>
                </div>
                <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 mt-8">
                  <p className="text-rose-800 font-medium text-sm text-center">
                    केवल चाइल्डकेयर का काम ही दिया जाएगा। घर का अतिरिक्त काम शामिल नहीं है।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Support Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                  जॉब प्लेसमेंट से पहले ट्रेनिंग सपोर्ट
                </h2>
                <div className="w-20 h-1 bg-rose-500 mb-8 rounded-full"></div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  काम शुरू करने से पहले, हम यह सुनिश्चित करते हैं कि आपको बेसिक चाइल्डकेयर ट्रेनिंग मिले ताकि आप आत्मविश्वास के साथ काम कर सकें।
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "बच्चे को संभालने के सुरक्षित तरीके",
                    "बच्चों की साफ-सफाई के तरीके",
                    "बच्चों की सुरक्षा के प्रति जागरूकता",
                    "खेल और पढ़ाई की एक्टिविटी",
                    "परिवार के साथ बातचीत का तरीका",
                    "समय का प्रबंधन",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-4 h-4 text-rose-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <a
                    href="tel:+918884443907"
                    className="inline-flex items-center justify-center bg-rose-600 text-white font-bold text-lg py-4 px-8 rounded-xl hover:bg-rose-700 transition-colors shadow-lg shadow-rose-600/20"
                  >
                    अभी कॉल करें
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-rose-100 rounded-[2rem] transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-rose-50">
                  <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
                    <AcademicCapIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ट्रेनिंग क्यों ज़रूरी है
                  </h3>
                  <p className="text-gray-600 mb-6">
                    हमारा ट्रेनिंग प्रोग्राम आपको चाइल्डकेयर की चुनौतियों के लिए तैयार करता है, ताकि आप और परिवार दोनों का अनुभव सुखद रहे।
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-gray-700">
                      <ShieldCheckIcon className="w-5 h-5 text-rose-500" />
                      प्रोफेशनल सर्टिफिकेट दिया जाएगा
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <UserIcon className="w-5 h-5 text-rose-500" />
                      आपका आत्मविश्वास बढ़ता है
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Apply Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-gradient-to-br from-rose-800 to-rose-900 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-700 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-600 rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3"></div>

              <div className="relative z-10 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display text-white">
                  कौन अप्लाई कर सकता है
                </h2>
                <div className="w-24 h-1 bg-rose-400 mx-auto rounded-full"></div>
              </div>

              <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <UserIcon className="w-8 h-8 text-rose-300" />
                      महिला नैनी / बेबीसिटर
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        <span className="text-lg text-rose-50">
                          <strong className="text-white">उम्र:</strong> 25–40 साल
                        </span>
                      </li>
                      <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        <span className="text-lg text-rose-50">
                          <strong className="text-white">शिक्षा:</strong> बेसिक स्कूलिंग काफ़ी है
                        </span>
                      </li>
                      <li className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                        <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                        <span className="text-lg text-rose-50">
                          <strong className="text-white">अनुभव:</strong> कम से कम 2 साल का अनुभव
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center bg-black/30 p-8 rounded-2xl border border-white/10">
                    <div className="w-20 h-20 bg-rose-500/30 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-300">
                      <CheckCircleIcon className="w-10 h-10" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">
                      अप्लाई करने के लिए तैयार हैं?
                    </h4>
                    <p className="text-rose-100 mb-6">
                      अगर आप इन शर्तों को पूरा करती हैं, तो हमारे पास आपके लिए सम्मानजनक परिवार इंतज़ार कर रहे हैं।
                    </p>
                    <Link
                      href="/helper-registration"
                      className="inline-block bg-white text-rose-800 font-bold py-3 px-8 rounded-lg hover:bg-rose-50 transition-colors"
                    >
                      अभी रजिस्टर करें
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About EzyHelpers Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                  EzyHelpers के बारे में – भरोसेमंद हेल्पर जॉब्स
                </h2>
                <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  हम बिना कोई फ़ीस लिए, पूरे भारत में सुरक्षित डोमेस्टिक हेल्पर जॉब्स दिलाने में मदद करते हैं।
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display border-b pb-4">
                  हमारा उद्देश्य:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                      <StarIcon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-gray-900">
                      बैंगलोर में सम्मानजनक नौकरियां
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                      <ShieldCheckIcon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-gray-900">
                      सख्त सुरक्षा और बैकग्राउंड चेक
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center p-6 bg-rose-50 rounded-2xl">
                    <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mb-4">
                      <HeartIcon className="w-6 h-6" />
                    </div>
                    <p className="font-semibold text-gray-900">
                      हेल्पर का कल्याण और लंबे समय तक सपोर्ट
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-rose-600 to-rose-800 rounded-2xl p-8 text-center text-white my-8">
                  <h3 className="text-xl font-medium text-rose-100 mb-2 uppercase tracking-wide">
                    हमारा विश्वास
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold font-display">
                    "हेल्पर्स के लिए अच्छे घर। परिवारों के लिए अच्छे हेल्पर्स।"
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-display border-b pb-4 mt-12">
                  हेल्पर्स EzyHelpers पर भरोसा क्यों करते हैं:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "5,000+ हेल्पर्स को काम दिलाया",
                    "10,000+ परिवारों की मदद की",
                    "स्किल इंडिया के तहत डोमेस्टिक वर्कर्स सेक्टर स्किल काउंसिल (DWSSC) के अनुसार ट्रेनिंग",
                    "सिर्फ़ सम्मानजनक घरों में प्लेसमेंट",
                    "जॉइन करने से पहले काम के बारे में साफ़ जानकारी",
                    "प्लेसमेंट के बाद भी लगातार सपोर्ट",
                    "किसी भी गलतफहमी या जॉब की समस्या में मदद",
                    "ज़रूरत पड़ने पर नौकरी बदलने में सहायता",
                    "तय सैलरी और लंबे समय तक काम के अवसर",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 font-display">
                  शहर जहाँ हम सेवाएं देते हैं
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "बैंगलोर",
                    "बरेली",
                    "मुंबई",
                    "हैदराबाद",
                    "दिल्ली NCR",
                    "पुणे",
                    "ओडिशा",
                    "और भी बहुत कुछ",
                  ].map((loc, idx) => (
                    <span
                      key={idx}
                      className="bg-white border text-gray-700 px-4 py-2 rounded-full font-medium shadow-sm"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                ईज़ीहेल्पर्स पर हेल्पर्स के लिए सपोर्ट और फायदे
              </h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
              {[
                {
                  title: "ट्रेनिंग और सर्टिफिकेट",
                  desc: "जॉब रोल से जुड़ी ट्रेनिंग और पूरा होने पर सर्टिफिकेट दिया जाएगा।",
                  icon: AcademicCapIcon,
                },
                {
                  title: "प्रोफेशनल पहचान",
                  desc: "काम के दौरान पहनने के लिए कोट और ग्रूमिंग किट।",
                  icon: UserIcon,
                },
                {
                  title: "सुरक्षा और साफ़ नियम",
                  desc: "काम के स्पष्ट एग्रीमेंट और हर कदम पर सपोर्ट।",
                  icon: ShieldCheckIcon,
                },
                {
                  title: "रहने का इंतज़ाम",
                  desc: "प्लेसमेंट में देरी होने पर हमारे हिला हॉस्टल में रहने की सुविधा।",
                  icon: HomeIcon,
                },
                {
                  title: "हेल्थ इंश्योरेंस",
                  desc: "मुसीबत के समय के लिए बेसिक मेडिकल कवर।",
                  icon: HeartIcon,
                },
                {
                  title: "सम्मानजनक माहौल",
                  desc: "ऐसे घर जो आपको सम्मान और इज़्ज़त के साथ रखें।",
                  icon: StarIcon,
                },
                {
                  title: "भविष्य के अवसर",
                  desc: "अच्छे काम पर ज़्यादा सैलरी या बड़े शहरों/विदेश में काम के मौके।",
                  icon: GlobeAltIcon,
                },
                {
                  title: "समय पर सैलरी",
                  desc: "हर महीने सीधे मालिक से आपके हाथ में सैलरी।",
                  icon: BriefcaseIcon,
                },
                {
                  title: "जॉब प्रोफाइल",
                  desc: "बेहतर काम पाने के लिए अपनी प्रोफाइल बनवाएं।",
                  icon: ClipboardDocumentListIcon,
                },
                {
                  title: "हर कदम पर साथ",
                  desc: "रजिस्ट्रेशन से लेकर काम शुरू करने के बाद तक मदद।",
                  icon: UserIcon,
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hostel NEST Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 font-bold rounded-full text-sm mb-6 w-max">
                    सुरक्षित निवास
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                    NEST – महिला हेल्पर्स के लिए सुरक्षित हॉस्टल
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    महिला हेल्पर्स बैंगलोर में कभी भी NEST में रह सकती हैं। यहाँ सुरक्षित कमरे, रोज़ का खाना और बहुत कम दरों पर रहने की सुविधा मिलती है, जिससे आपके लिए शहर में बसना और काम शुरू करना आसान हो जाता है।
                  </p>
                  <div className="mt-auto">
                    <Link
                      href="/nest-hostel"
                      className="inline-flex items-center text-rose-600 font-bold hover:text-rose-700 transition-colors group text-lg"
                    >
                      NEST के बारे में और जानें
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="bg-rose-50 p-8 md:p-12 flex items-center justify-center relative min-h-[300px]">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-800 via-transparent to-transparent"></div>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs relative z-10">
                    <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm">
                      <HomeIcon className="w-8 h-8 text-rose-500 mb-2" />
                      <span className="font-semibold text-rose-900 text-sm">
                        आरामदायक कमरे
                      </span>
                    </div>
                    <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm mt-8">
                      <ShieldCheckIcon className="w-8 h-8 text-rose-500 mb-2" />
                      <span className="font-semibold text-rose-900 text-sm">
                        सुरक्षित और भरोसेमंद
                      </span>
                    </div>
                    <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm -mt-8">
                      <UserIcon className="w-8 h-8 text-rose-500 mb-2" />
                      <span className="font-semibold text-rose-900 text-sm">
                        सिर्फ़ महिलाएं
                      </span>
                    </div>
                    <div className="bg-white/80 backdrop-blur aspect-square rounded-2xl flex flex-col items-center justify-center p-4 text-center shadow-sm">
                      <FireIcon className="w-8 h-8 text-rose-500 mb-2" />
                      <span className="font-semibold text-rose-900 text-sm">
                        रोज़ाना खाना
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refer a Friend and Earn ₹500 Section */}
        <section className="section-padding bg-yellow-50 border-y border-yellow-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-yellow-200">
              <div className="md:flex">
                <div className="md:w-5/12 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex flex-col items-center justify-center text-center text-white">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4">
                    <StarIcon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
                    रेफर करें और कमाएं
                  </h2>
                  <h3 className="text-5xl md:text-6xl font-extrabold mb-2">
                    ₹500!
                  </h3>
                  <p className="text-yellow-100 font-medium">
                    *नियम और शर्तें लागू
                  </p>
                </div>
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-lg md:text-xl text-gray-800 font-bold mb-6">
                    झारखंड के अपने दोस्तों और रिश्तेदारों को बैंगलोर में EzyHelpers के साथ डोमेस्टिक काम ढूंढने में मदद करें। उनके जॉइन करने पर आपको मिलते हैं ₹500।
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 font-bold text-sm">
                          1
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        हमें कॉल या व्हाट्सएप कर उनके बारे में बताएं
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 font-bold text-sm">
                          2
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        दोस्त का नाम, उम्र और काम की जानकारी दें
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-green-600 font-bold text-sm">
                          3
                        </span>
                      </div>
                      <span className="text-gray-700 font-bold">
                        उनके जॉइन करने और प्लेसमेंट पूरा होने पर पाएं ₹500
                      </span>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="inline-block text-center bg-rose-600 text-white font-bold text-lg py-3 px-8 rounded-xl hover:bg-rose-700 hover:shadow-xl transition-all duration-300"
                  >
                    रेफर करें और ₹500 कमाएं
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                बैंगलोर में नैनी जॉब के लिए अप्लाई कैसे करें
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-rose-200 rounded-full"></div>

                {[
                  {
                    step: 1,
                    title: "EzyHelpers से संपर्क करें",
                    desc: "कॉल करें या ऑनलाइन रजिस्टर करें और बैंगलोर में उपलब्ध नैनी और बेबीसिटर नौकरियों के बारे में जानें।",
                  },
                  {
                    step: 2,
                    title: "अपनी जानकारी साझा करें",
                    desc: "अपनी उम्र, अनुभव और हुनर बताएं। हमारी टीम आपको सही जॉब के विकल्प समझाएगी।",
                  },
                  {
                    step: 3,
                    title: "ट्रेनिंग और जॉब शुरू",
                    desc: "चाइल्डकेयर ट्रेनिंग में शामिल हों, परिवार से मिलें, जॉब पसंद करें और सपोर्ट के साथ काम शुरू करें।",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-center justify-center mb-12 last:mb-0"
                  >
                    {/* Left Side */}
                    <div className="w-5/12 text-right pr-6 md:pr-12">
                      {index % 2 === 0 ? (
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {item.desc}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    {/* Center Circle */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-rose-600 text-white rounded-full font-bold text-lg md:text-2xl shadow-lg z-10 border-2 md:border-4 border-white">
                      {item.step}
                    </div>

                    {/* Right Side */}
                    <div className="w-5/12 text-left pl-6 md:pl-12">
                      {index % 2 !== 0 ? (
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-600">
                            {item.desc}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-display">
                अक्सर पूछे जाने वाले सवाल
              </h2>
              <div className="w-24 h-1 bg-rose-500 mx-auto mt-4 rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <FAQAccordion faqs={faqs} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-rose-600 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 font-display text-white">
                सम्मान के साथ काम करें, आत्मविश्वास के साथ जिएं
              </h2>
              <p className="text-lg md:text-xl mb-10 text-rose-100">
                हर हेल्पर काम पर सम्मान, सुरक्षा और प्यार का हकदार है। ऐसे परिवार खोजें जो आपकी मेहनत की कद्र करें और आपको अपने घर का एक अहम हिस्सा मानें।
              </p>

              <div className="flex justify-center">
                <Link
                  href="/helper-registration"
                  className="inline-flex items-center justify-center bg-white text-rose-700 font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 hover:scale-105 hover:shadow-xl transition-all duration-300"
                >
                  एक सम्मानजनक घर खोजें
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
