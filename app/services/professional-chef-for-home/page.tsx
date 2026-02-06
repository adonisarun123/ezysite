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
    WrenchScrewdriverIcon,
    StarIcon,
    BanknotesIcon
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
    title: 'Professional Chef for Home | Multi-Cuisine & Custom Menus',
    description: 'Get fresh, tasty home-cooked meals daily with a professional chef preparing multi-cuisine dishes and custom menus to suit your preferences.',
    openGraph: {
        title: 'Professional Chef for Home | Multi-Cuisine & Custom Menus',
        description: 'Get fresh, tasty home-cooked meals daily with a professional chef preparing multi-cuisine dishes and custom menus to suit your preferences.',
        url: 'https://www.ezyhelpers.com/services/professional-chef-for-home',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.ezyhelpers.com/services/professional-chef-for-home'
    }
}

export default function ProfessionalChefPage() {
    const faqs: FAQItem[] = [
        { question: 'What does a professional chef for home do?', answer: 'A professional chef for home prepares fresh, high-quality meals in your kitchen based on your family’s taste, diet needs, and daily routine. They handle menu planning, cooking, basic kitchen organisation, and ensure every meal is hygienic, nutritious, and well presented.' },
        { question: 'Can a home chef cook special diet food?', answer: 'Yes. Our home chefs prepare customised meals for vegetarian, vegan, keto, diabetic-friendly, gluten-free, and other health-based diets. Meals are planned according to medical advice, nutrition goals, and personal food preferences.' },
        { question: 'Can a chef cook both daily meals and special occasion food?', answer: 'Yes. A professional home chef can manage daily meals such as breakfast, lunch, and dinner, as well as special occasions like festivals, private parties, family functions, and business gatherings.' },
        { question: 'Is a trial available before booking a full-time home chef?', answer: 'Yes. EzyHelpers offers a 3-day trial at an additional cost so you can check the chef’s cooking style, taste, hygiene practices, and menu quality before confirming a long-term or event-based service.' },
        { question: 'How much does it cost to hire a professional chef at home?', answer: 'The cost depends on the type of cuisine, number of meals, portion size, and service duration. Hiring a home chef is often cost-effective as it reduces restaurant orders, food waste, and daily cooking stress while offering quality meals at home.' },
        { question: 'How is a professional home chef different from a regular home cook?', answer: 'A professional home chef is trained in multiple cuisines, menu planning, diet-based cooking, and food presentation. A regular home cook usually prepares basic daily meals like rice, roti, dal, and sabzi without advanced training or special diet planning.' },
    ]

    const whyChooseFeatures = [
        {
            title: 'Hygiene Comes First',
            description: 'Our chefs follow strict kitchen hygiene practices and use fresh ingredients every day.',
            icon: ClipboardDocumentListIcon,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600'
        },
        {
            title: 'Trained in Multiple Cuisines',
            description: 'EzyHelpers chefs are skilled in Indian and international cuisines, offering variety and great taste.',
            icon: FireIcon,
            bgColor: 'bg-amber-50',
            iconColor: 'text-amber-600'
        },
        {
            title: 'Custom Menus for Every Family',
            description: 'Meals are planned based on diet needs, food preferences, spice levels, and health goals.',
            icon: GlobeAsiaAustraliaIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Skilled & Experienced Chefs',
            description: 'From simple home food to international dishes, our chefs handle it all with care.',
            icon: HeartIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Healthy Cooking Methods',
            description: 'We focus on nutritious meals using safe cooking techniques and quality ingredients.',
            icon: HomeModernIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }
    ]

    const premiumServices = [
        {
            title: 'Multi-Cuisine Expertise',
            description: 'Enjoy tasty home-cooked Indian, Continental, Asian, Mediterranean, and other international cuisines prepared fresh at home.',
            icon: FireIcon,
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-600'
        },
        {
            title: 'Fusion & Traditional Dishes',
            description: 'Relish a mix of traditional recipes and modern fusion dishes that bring new flavours while keeping familiar tastes.',
            icon: FireIcon,
            bgColor: 'bg-amber-50',
            iconColor: 'text-amber-600'
        },
        {
            title: 'Customised Health & Lifestyle Menus',
            description: 'Meals prepared according to your needs, including keto, vegan, diabetic-friendly, high-protein, and wellness-based diets.',
            icon: GlobeAsiaAustraliaIcon,
            bgColor: 'bg-green-50',
            iconColor: 'text-green-600'
        },
        {
            title: 'Meals for Special Occasions',
            description: 'Well-planned, multi-course meals for family celebrations, private dinners, business meetings, and special events.',
            icon: FireIcon,
            bgColor: 'bg-red-50',
            iconColor: 'text-red-600'
        }, {
            title: 'Food Preparation and Serving',
            description: "Complete support from cooking to plating, serving the food, and cleaning the kitchen after meals.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Ingredient Guidance and Sourcing',
            description: "The chef helps you select fresh, good-quality ingredients to improve taste, nutrition, and presentation.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Diet-Friendly Meal Preparation',
            description: "Meals are cooked carefully by following doctor or nutritionist instructions for health and lifestyle needs.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }, {
            title: 'Kitchen and Grocery Management',
            description: "The chef maintains kitchen cleanliness, organises groceries properly, and ensures a well-managed cooking space at all times.",
            icon: SparklesIcon,
            bgColor: 'bg-teal-50',
            iconColor: 'text-teal-600'
        }
    ]

    const services = [
        { title: 'Daily Home Cooking', desc: 'Breakfast, lunch, and dinner are prepared daily.', icon: HomeIcon },
        { title: 'Health-Focused Meal Plans', desc: 'Weight loss, diabetic, vegan, Jain, or fitness-based food.', icon: BriefcaseIcon },
        { title: 'Festival & Event Cooking', desc: 'Special meals for Diwali, Eid, Holi, birthdays, and family gatherings.', icon: TimeIcon },
        { title: 'Short-Term or Long-Term Options', desc: 'Daily, weekly, monthly, or one-time event bookings available.', icon: CalendarDaysIcon },
    ];


    return (
        <>
            <main className="min-h-screen">
                <Navbar />

                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Services', href: '/services' },
                        { label: 'Professional Chef' }
                    ]}
                />

                {/* Hero Section - Updated Colors */}
                <section className="relative bg-gradient-to-br from-orange-600 via-red-600 to-amber-700 text-white pt-20 pb-24 lg:pb-32 overflow-hidden">

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-20 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="max-w-5xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-display leading-tight text-white">Hire a Professional Chef for Home Gourmet Meals Every Day</h1>

                            <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-4xl mx-auto">Enjoy tasty, hygienic, and high-quality meals prepared at home with EzyHelpers. Hire a professional chef for home and enjoy customised dishes made for your family’s taste, health needs, and daily routine.</p>

                            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Multi-Cuisine Cooking</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Fresh & Hygienic Meals</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Verified & Skilled Chefs</div>
                                <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">✓ Custom Menus Available</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center w-full bg-white text-orange-600 font-semibold text-lg py-4 px-6 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Book Your Professional Chef
                                </Link>

                                <Link
                                    href="tel:+918031411776"
                                    className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-lg py-4 px-6 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Now
                                </Link>
                            </div>

                            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20 max-w-2xl mx-auto">
                                <div className="text-center">
                                    <div className="text-2xl font-bold flex items-center justify-center">
                                        4.9 <StarIcon className="h-6 w-6 text-white fill-yellow-500" />
                                    </div>
                                    <div className="text-orange-200 text-sm">Rated</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">Zero</div>
                                    <div className="text-orange-200 text-sm">Hidden Charges</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold">500</div>
                                    <div className="text-orange-200 text-sm">Homes Served</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose EzyHelpers for Home Chef Services? */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose EzyHelpers for Your Professional Chef Services?</h2>
                            <p className="text-lg text-gray-600">Reliable, trained chefs who cook healthy and delicious meals right in your home.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {whyChooseFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
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
                <section className="section-padding bg-gradient-to-br from-orange-50 via-red-50 to-amber-50 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-20 left-10 w-64 h-64 bg-red-200 rounded-full blur-3xl"></div>
                    </div>

                    <div className="container-custom relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Services Does a Professional Chef for Home Offer?</h2>
                            <p className="text-lg text-gray-600">Premium chef services designed for elite households.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-7xl mx-auto">
                            {premiumServices.map((feature, index) => (
                                <div key={index} className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 transform hover:-translate-y-1">
                                    <div className={`${feature.bgColor} rounded-xl w-16 h-16 flex items-center justify-center mb-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{feature.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="text-center">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold text-lg py-4 px-10 rounded-xl hover:from-orange-700 hover:to-red-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
                                Which Cuisines Can a Professional Chef for Home Prepare?
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Elite culinary expertise for refined palates.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 mb-12 mx-auto">
                            {/* Card 1 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                        <SparklesIcon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Indian & Modern Indian</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Butter Chicken, Paneer dishes, Biryanis, Curries, and home-style meals.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center shrink-0">
                                        <FireIcon className="h-8 w-8 text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Italian</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Pasta, Pizza, Lasagna, Garlic Bread, Salad, Soups and desserts.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center shrink-0">
                                        <UserGroupIcon className="h-8 w-8 text-orange-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Continental & Mediterranean</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Grilled fish, salads, soups, roasted vegetables, and light meals.
                                </p>
                            </div>

                            {/* Card 4 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center shrink-0">
                                        <HeartIcon className="h-8 w-8 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Asian</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Hakka Noodles, Veg momos, Fried rice, Stir-fried Vegetables
                                </p>
                            </div>

                            {/* Card 5 */}
                            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 text-left w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
                                        <BoltIcon className="h-8 w-8 text-amber-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 m-0">Seasonal & Special Dishes</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    Fresh salads, soups, healthy bowls, and desserts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Types of Pro Chef Services */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4 font-display">Custom & Special Occasion Meal Plans</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Flexible chef services based on your needs.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className="bg-red-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <div className="bg-red-100 rounded-xl p-3 w-fit mb-6">
                                        <service.icon className="h-8 w-8 text-red-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link
                                href="/hire-helper"
                                className="inline-flex items-center justify-center bg-orange-600 text-white font-semibold text-lg py-3 px-8 rounded-xl hover:bg-orange-700 hover:shadow-lg transition-all duration-300"
                            >
                                Hire a Chef
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How Is Our At-Home Chef Different from a Regular Home Cook?</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Our at-home chefs offer more than everyday cooking. They are professionally trained and focus on quality, variety, and proper food planning for your home.</p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                {
                                    title: "Skilled & Professionally Trained",
                                    chef: "Our home chefs are trained in multiple cuisines, advanced cooking methods, and menu planning.",
                                    regular: "Regular home cooks usually prepare basic daily meals only."
                                },
                                {
                                    title: "Wider Menu Variety",
                                    chef: "Our chefs can cook Indian and international dishes, fusion food, and special diet meals.",
                                    regular: "A regular cook mainly prepares routine home food like rice, dal, roti, and sabzi."
                                },
                                {
                                    title: "Customised Meals for Health & Taste",
                                    chef: "Our chefs prepare meals based on your family’s diet needs, spice levels, medical conditions, or fitness goals.",
                                    regular: "Regular cooks generally follow fixed recipes without customisation."
                                },
                                {
                                    title: "Better Hygiene & Cooking Standards",
                                    chef: "Our chefs follow strict hygiene practices, proper ingredient handling, and clean cooking methods. This ensures safer and healthier meals at home.",
                                    regular: "Regular cooks may not follow professional hygiene standards."
                                },
                                {
                                    title: "Suitable for Daily Meals & Special Occasions",
                                    chef: "Our chefs handle both daily cooking and special events like family gatherings, parties, or festivals.",
                                    regular: "Regular cooks usually manage only everyday meals."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
                                    <h3 className="text-xl font-bold text-gray-900 mb-8 h-auto lg:h-14 flex items-center">{item.title}</h3>

                                    <div className="mb-6 bg-green-50 p-4 rounded-xl border border-green-100 min-h-[7rem] flex flex-col justify-center">
                                        <div className="flex items-start gap-4">
                                            <div className="w-6 shrink-0 flex justify-center mt-0.5">
                                                <CheckCircleIcon className="h-6 w-6 text-green-600" />
                                            </div>
                                            <p className="text-sm text-gray-700 font-medium">{item.chef}</p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 opacity-75 min-h-[5rem] flex flex-col justify-center">
                                        <div className="flex items-start gap-4">
                                            <div className="w-6 shrink-0 flex justify-center mt-0.5">
                                                <div className="h-5 w-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                                                    <div className="h-3 w-0.5 bg-gray-400 rotate-45 transform"></div>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500">{item.regular}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">What Are The Benefits of Hiring a Chef for Home</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">The main benefits that make hiring a chef at home a wise investment for modern families.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Saves Time", desc: "No planning, cooking, or cleaning stress - spend more time with family.", icon: ClockIcon, color: "text-blue-600", bg: "bg-blue-50" },
                                { title: "Healthy Eating", desc: "Nutritious and balanced meals prepared daily.", icon: HeartIcon, color: "text-red-600", bg: "bg-red-50" },
                                { title: "Cost Friendly", desc: "Less spending on restaurants, food waste, and outside orders.", icon: BanknotesIcon, color: "text-green-600", bg: "bg-green-50" },
                                { title: "Consistent Taste & Quality", desc: "Enjoy reliable quality and variety every day.", icon: StarIcon, color: "text-amber-600", bg: "bg-amber-50" },
                                { title: "Dietary Safety", desc: "Meals prepared carefully for allergies, health needs, and restrictions.", icon: ShieldCheckIcon, color: "text-teal-600", bg: "bg-teal-50" },
                                { title: "More Food Variety", desc: "Enjoy different cuisines without learning new recipes.", icon: GlobeAsiaAustraliaIcon, color: "text-purple-600", bg: "bg-purple-50" }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                                    <div className={`${feature.bg} rounded-lg w-12 h-12 flex items-center justify-center mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Book Our Home Chef Services */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">How to Book a Professional Home Chef?</h2>
                            <p className="text-lg text-gray-600">Effortless Access to Your Personal Chef</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">1</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Share Your Requirements</h3>
                                <p className="text-gray-600">Call us or fill in the form with your food needs and schedule.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">2</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Chef Profiles</h3>
                                <p className="text-gray-600">We share suitable chef profiles based on experience and culinary skills.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">3</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Take a Trial</h3>
                                <p className="text-gray-600">Try the chef’s food, hygiene, and style before final selection.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-6">4</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Start Service</h3>
                                <p className="text-gray-600">Confirm and enjoy stress-free cooking at home.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="section-padding bg-gradient-to-br from-orange-600 to-red-600 text-white">
                    <div className="container-custom">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl text-white font-bold mb-6 font-display">Are You Ready to Upgrade Your Home Meals?</h2>
                            <p className="text-xl mb-8 text-orange-100">Stop compromising on time, taste, or health. Enjoy fresh, restaurant-style food cooked in your own kitchen using quality ingredients every day.</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                <Link
                                    href="/hire-helper"
                                    className="inline-flex items-center justify-center bg-white text-orange-600 font-semibold text-lg py-4 px-8 rounded-xl hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                                >
                                    Hire Personal Home Chef
                                </Link>

                                <Link
                                    href="tel:+919972571005"
                                    className="inline-flex items-center justify-center bg-transparent text-white font-semibold text-lg py-4 px-8 rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
                                >
                                    <PhoneIcon className="h-5 w-5 mr-2" />
                                    Call Us
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
                            <p className="text-lg text-gray-600">Additional Professional Home Services are designed to simplify your life and enhance comfort</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <Link href="/services/elderly-care" className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                                <SparklesIcon className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Elderly Care Services</h3>
                                <p className="text-gray-600 mb-4">Compassionate Caregivers providing medical, mobility, and daily living assistance.</p>
                                <div className="flex items-center text-purple-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/services/nanny-babysitter" className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
                                <WrenchScrewdriverIcon className="h-12 w-12 text-indigo-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Babycare Services</h3>
                                <p className="text-gray-600 mb-4">Experienced Nannies offering feeding, sleep, and developmental childcare support.</p>
                                <div className="flex items-center text-indigo-600 font-semibold">Learn More</div>
                            </Link>

                            <Link href="/cities/bangalore/home-deep-cleaning" className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                                <HomeIcon className="h-12 w-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-xl font-bold text-gray-900 mb-3">House Cleaning Services</h3>
                                <p className="text-gray-600 mb-4">Professional staff delivering deep cleaning with eco-friendly, organized systems.</p>
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
