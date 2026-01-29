import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import FAQAccordion, { FAQItem } from '@/components/FAQAccordion'
import {
    PhoneIcon,
    CheckCircleIcon,
    HomeIcon,
    SparklesIcon,
    ExclamationTriangleIcon,
    CalendarDaysIcon,
    ClipboardDocumentListIcon,
    GlobeAsiaAustraliaIcon,
    HeartIcon,
    ClockIcon,
    ShieldCheckIcon,
    CakeIcon,
    FireIcon,
    UserGroupIcon,
    BriefcaseIcon,
    ClockIcon as TimeIcon,
    HomeModernIcon,
    BoltIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Home Chef in Bangalore | Clean, Healthy Home Cooking',
    description: 'Upgrade daily meals with a professional Home Chef in Bangalore. Menu-based cooking, hygienic kitchens, Indian & continental food, cooked fresh at home.',
    openGraph: {
        title: 'Home Chef in Bangalore | Clean, Healthy Home Cooking',
        description: 'Upgrade daily meals with a professional Home Chef in Bangalore. Menu-based cooking, hygienic kitchens, Indian & continental food, cooked fresh at home.',
        url: 'https://www.ezyhelpers.com/cities/bangalore/home-chef',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/cities/bangalore/home-chef'
    }
}

export default function BangaloreHomeChef() {
    const faqs: FAQItem[] = [
        { question: 'What is the difference between a Professional Chef and a regular home cook?', answer: 'A professional Home Chef is trained only for cooking. They plan menus, cook with proper methods, maintain hygiene, and focus on food quality.A regular home cook may also do cleaning or other housework, but our chefs only do cooking. They are not for household chores.' },
        { question: 'Can I take a trial before hiring a Home Chef?', answer: 'Yes. EzyHelpers provides a 3-day paid trial. During the trial, you can check:\n• Taste of food\n• Clean cooking\n• Punctuality\n• Comfort with the chef\nAfter that, you can decide whether to continue.' },
        { question: 'How much does it cost to hire a Home Chef in Bangalore?', answer: 'The cost depends on:\n• Part-time chef\n• Full-time chef\n• Live-in chef\n• Short-term or event cooking\nPrices are shared clearly based on working hours and the number of meals. There are no hidden charges.' },
        { question: 'Do Home Chefs cook both vegetarian and non-vegetarian food?', answer: 'Yes. Chefs can cook both veg and non-veg food. They follow separate cooking and hygiene practices as per your family’s preference.' },
        { question: 'Can Home Chefs cook festival and special occasion food?', answer: 'Yes. Home Chefs in Bangalore can prepare food for festivals like Diwali, Pongal, and Eid, as well as birthdays, anniversaries, and family gatherings. Special menus can be planned in advance based on the occasion.' },
        { question: 'Is hiring a full-time Home Chef better than ordering food daily?', answer: 'For many families, yes. A full-time Home Chef in Bangalore cooks fresh meals at home, which are cleaner, healthier, and better suited to your taste than daily outside food. It also helps maintain regular meal timings and better food quality.' },
        { question: 'Can EzyHelpers chefs use modern kitchen appliances?', answer: 'Yes. EzyHelpers chefs are trained to safely use induction cooktops, ovens, microwaves, mixers, blenders, and other modern kitchen appliances commonly used in homes.' },
        { question: 'Can one chef cook all types of cuisines for my family?', answer: 'Most chefs specialise in one or two cuisines to ensure authentic taste and consistent quality. However, we also have multi-cuisine chefs available for families who want a variety of dishes. Typically, it takes 5–7 days to find the perfect match, and sometimes we can arrange one even quicker based on availability.' },
        { question: 'Are the Home Chefs verified, and what kind of verification do they undergo?', answer: 'Yes. All EzyHelpers Home Chefs are thoroughly verified before placement. Verification includes Aadhar verification, local address verification, and skill assessment to ensure they are trained, reliable, and the right fit for your household.' },
        { question: 'What if I’m not satisfied with the chef or need a replacement?', answer: 'If you are not fully satisfied with your assigned chef, EzyHelpers provides a replacement within one week or 15 days. You will need to notify us 15 days prior to the replacement.' },
    ]

    const areasWeClean = [
        'Trained chefs, not regular helpers',
        'Only cooking work, no household chores',
        'Planned menus, not last-minute cooking',
        'Clean and hygienic kitchen practices',
        'Can cook Indian and other cuisines',
        'Same taste and quality every day'
    ]

    const whyChooseFeatures = [
        {
            title: 'Personalised Meal Planning',
            description: 'Menus are designed according to your taste, dietary goals, and meal schedule.',
            icon: ClipboardDocumentListIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Mastering Indian Cuisine',
            description: 'Chefs focus on North or South Indian specialities (based on their expertise) and regional recipes.',
            icon: FireIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Global Flavours at Home',
            description: 'Continental, Chinese, or fusion dishes are prepared by chefs trained in those cuisines.',
            icon: GlobeAsiaAustraliaIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Healthy Cooking Made Easy',
            description: 'Balanced meals with controlled oil, portions, and options for diabetes or protein-rich diets.',
            icon: HeartIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Seamless Kitchen Management',
            description: 'Ingredient prep, marination, and cooking are handled efficiently for consistent taste.',
            icon: HomeModernIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Freshness & Timing Guaranteed',
            description: 'Meals are prepared fresh and served on time every day.',
            icon: ClockIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }, {
            title: 'Hygiene You Can Trust',
            description: 'Strict cleanliness and safe food handling are always maintained.',
            icon: ShieldCheckIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        }, {
            title: 'Memorable Special Occasions',
            description: 'Our Home Chefs in Bangalore can create special menus for festivals, birthdays, or small gatherings.',
            icon: CakeIcon,
            bgColor: 'bg-indigo-50',
            iconColor: 'text-indigo-600'
        },
    ]

    const cuisineSpecialisations = [
        {
            title: 'South Indian Chef in Bangalore',
            description: 'Expert in Karnataka, Tamil Nadu, and Kerala-style cooking, like idli, dosa, sambar, rasam, and breakfasts.',
            icon: FireIcon,
            bgColor: 'bg-blue-50',
            iconColor: 'text-blue-600'
        },
        {
            title: 'North Indian Chef for Home',
            description: 'Authentic Punjabi, UP, Rajasthani, and Mughlai dishes are prepared with proper techniques.',
            icon: FireIcon,
            bgColor: 'bg-purple-50',
            iconColor: 'text-purple-600'
        },
        {
            title: 'Continental Chef in Bangalore',
            description: 'Simple Continental meals like pasta, sandwiches, salads, soups, and baked dishes.',
            icon: GlobeAsiaAustraliaIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Chinese Cuisine Chef',
            description: 'Noodles, fried rice, stir-fry dishes, and Indo-Chinese favourites.',
            icon: FireIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Multi-Cuisine Home Chef in Bangalore',
            description: "Indian and international food is cooked daily based on your family's preference.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }
    ]

    const services = [
        { title: 'Live-In Home Chef in Bangalore', desc: 'Chef stays with the family 24/7 and manages all meals: breakfast, lunch, and dinner.', icon: HomeIcon },
        { title: 'Full-Time Home Chef in Bangalore', desc: 'The chef works 8-10 hours daily and prepares planned meals. Ideal for busy professionals.', icon: BriefcaseIcon },
        { title: 'Part-Time Home Chef in Bangalore', desc: 'Home Chefs cook one or two meals per day, which is ideal for small families or working couples who need support for a few hours daily.', icon: TimeIcon },
        { title: 'On-Demand Home Chef in Bangalore', desc: 'Perfect for short-term needs like festivals, guests, family functions, and special dinners.', icon: CalendarDaysIcon },
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Bangalore', href: '/cities/bangalore' },
                        { label: 'Home Chef Services' }
                    ]}
                />

                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-red-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Home Chef in Bangalore Professional Chefs for Everyday Home Cooking</h1>

                            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">EzyHelpers offers trained professional Home Chefs in Bangalore who focus on menu-based, high-quality cooking, hygiene, and presentation. Perfect for families who want better food quality, variety, and consistency, not just daily routine cooking.</p>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 100% background-checked chefs</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ 100% background-checked chefs</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Indian & multi-cuisine cooking skills</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Quick Booking, Zero Hassle</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-purple-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Home Chef Today
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold">99%</div>
                                    <div className="text-purple-200 text-sm">Customer Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">500+</div>
                                    <div className="text-purple-200 text-sm">Happy Families</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">4.9/5</div>
                                    <div className="text-purple-200 text-sm">Google Rating</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Areas We Clean Thoroughly */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why EzyHelpers Home Chef Is Different from a Regular Cook</h2>
                            <p className="text-gray-600">A regular cook usually prepares basic food and may do other household work. A professional Home Chef in Bangalore works like a personal chef and focuses only on cooking.</p>
                        </div>
                        <div className="bg-pink-100/50 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Our Home Chef a Professional Service</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                {areasWeClean.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-lg py-4 px-2 text-center shadow-sm hover:shadow-md transition-all duration-300 text-sm font-medium text-gray-700 cursor-default">
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-gray-700 font-medium mt-6 italic">This service is ideal for families who prefer consistent food quality, not just convenience.</p>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Home Chef Services in Bangalore? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Does a Professional Home Chef Do?</h2>
                            <p className="text-lg text-gray-600">Each chef specialises in a single or multiple cuisines to maintain authentic taste and consistency. From planning to cooking and presentation, every meal is handled with care.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    <div className={`${feature.bgColor} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.iconColor}`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Provided */}
                <section className="section-padding bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Cuisine-Specific Home Cook Specialisations</h2>
                            <p className="text-lg text-gray-600">Choose chefs trained in Indian and international cuisines you love</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-12 max-w-5xl mx-auto">
                            {cuisineSpecialisations.map((feature, index) => (
                                <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-1 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                                    <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-purple-700 hover:to-pink-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                Book Expert Chef
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Essential Meal Planning for Best Results */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                                Who Should Choose a Home Chef (Not a Regular Cook)?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Ideal for families who value taste, hygiene, and consistency
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-12 max-w-5xl mx-auto">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)]">
                                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <SparklesIcon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Families Who Want Better Food Quality</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    If taste, presentation, and consistency matter to you.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)]">
                                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <FireIcon className="h-8 w-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">People Tired of Outside Food</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Home-style meals prepared with restaurant-level skills.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)]">
                                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <UserGroupIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Homes That Entertain Guests Often</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Chefs handle varied menus confidently without stress.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)]">
                                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <HeartIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Homes That Entertain Guests Often</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Food cooked with balance, portion control, and nutrition in mind.
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-center w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)]">
                                <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <BoltIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Professionals Who Prefer Premium Living</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    For those who want a personal chef in Bangalore, not basic cooking help.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Pro Chef Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Types of Professional Chef Services in Bangalore</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Flexible chef options based on your schedule and cooking needs</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-pink-100 via-pink-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="bg-pink-100 rounded-xl p-3 w-fit mb-6">
                                        <service.icon className="h-8 w-8 text-pink-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Importance Section */}
                <section className="section-padding bg-white relative overflow-hidden">
                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                                Clear Difference: Home Chef vs Regular Cook
                            </h2>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                                Understand why a professional chef offers better food quality
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* Problem Side */}
                            <div className="bg-red-50 rounded-3xl p-8 border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start mb-8">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-5 shadow-sm border border-red-100 flex-shrink-0">
                                        <ExclamationTriangleIcon className="h-8 w-8 text-red-500" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 pt-2 leading-tight">Regular Cook</h3>
                                </div>
                                <div className="space-y-4">
                                    {['Cooks basic daily food', 'Limited cuisines', 'Follows instructions', 'Basic hygiene', 'Routine cooking'].map((item, idx) => (
                                        <div key={idx} className="flex items-center bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500 mr-4"></div>
                                            <span className="text-gray-800 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Solution Side */}
                            <div className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start mb-8">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-5 shadow-sm border border-green-100 flex-shrink-0">
                                        <CheckCircleIcon className="h-8 w-8 text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 pt-2 leading-tight">Professional Home Chef</h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        'Plans, menus and recipes',
                                        'Multi-cuisine expertise',
                                        'Uses professional judgement',
                                        'Chef-level hygiene',
                                        'Quality-focused cooking'
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center bg-white p-4 rounded-xl border border-green-100 shadow-sm">
                                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-4 flex-shrink-0" />
                                            <span className="text-gray-800 font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How to Book Our Home Chef Services in Bangalore */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Hire a Professional Chef for Home in Bangalore</h2>
                            <p className="text-lg text-gray-600">Hire trusted Home Chefs in Bangalore with simple, fast, and convenient steps.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Tell us your cuisine preferences, meal timings, and duration for daily cooking.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Matched Profiles</h3>
                                <p className="text-gray-600">We provide verified chef profiles carefully matched to your home cooking needs.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Confirm & Onboard</h3>
                                <p className="text-gray-600">Interview shortlisted chefs and easily confirm a schedule for hassle-free home service.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Enjoy Stress-Free Support</h3>
                                <p className="text-gray-600">Relax at home while your chef manages daily meals efficiently and reliably.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Families Hire in Bangalore*/}
                <section className="section-padding bg-white">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 font-display">Why Families in Bangalore Hire Home Chefs</h2>
                        <p className="text-lg text-gray-600 mb-6">Better food, less stress, and healthier daily meals at home</p>
                        <div className="space-y-4 text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
                            <p>With work pressure, traffic, and busy routines, daily cooking becomes difficult. Hiring a Home Chef in Bangalore gives families fresh, hygienic, and well-planned meals every day.</p>
                            <p>From North Indian dishes like Paneer Lababdar and Rogan Josh to South Indian favourites like Masala Dosa and Idli-Sambar, chefs bring restaurant-level skills into your kitchen. Continental and fusion dishes are also prepared easily.</p>
                            <p>Families enjoy better food, seniors get nutritious meals, kids eat healthier, and everyone enjoys stress-free dining.</p>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Enjoy stress-free home dining with a professional Home Chef in Bangalore.</h2>
                            <p className="text-xl mb-8 text-purple-100">From Indian classics to international dishes, EzyHelpers helps you hire the right chef for everyday home cooking, quickly and reliably.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Hire a Home Chef
                                </Link>

                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Speak to an Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Explore Other Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Explore Other Services</h2>
                            <p className="text-lg text-gray-600">Premium Home Services designed for modern Bangalore families</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/cities/bangalore/travel-nanny" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Travel Nanny</h3>
                                <p className="text-gray-600 mb-4">Trusted On-demand childcare for trips, holidays, and short-term travel needs.</p>
                                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/chauffeur-service" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Chauffeurs for Luxury Cars</h3>
                                <p className="text-gray-600 mb-4">Professional drivers ensure safe and comfortable rides for premium and luxury vehicles.</p>
                                <div className="flex items-center text-indigo-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/educated-babysitter" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Educated Babysitters</h3>
                                <p className="text-gray-600 mb-4">Skilled childcare professionals who assist with homework, learning, and personality development.</p>
                                <div className="flex items-center text-emerald-600 font-semibold">Learn More</div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">FAQs</h2>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <FAQAccordion faqs={faqs} />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}
