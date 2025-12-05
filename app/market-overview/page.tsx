import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import MainContent from '@/components/MainContent'
import PageTracking from '@/components/PageTracking'
import { ChartBarIcon, ArrowTrendingUpIcon, MapPinIcon, UsersIcon, CogIcon, BuildingOfficeIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'The Indian Domestic Helper Market: Market Overview, Challenges and Future Outlook',
  description: 'Comprehensive analysis of India\'s domestic helper market - from its 50-90 million workforce to growth trends, formalization opportunities, and policy frameworks.',
  keywords: ['domestic helper market India', 'household help sector', 'domestic workers statistics', 'Indian maid service market', 'domestic help trends', 'formalization domestic workers'],
  openGraph: {
    title: 'The Indian Domestic Helper Market: Market Overview',
    description: 'In-depth analysis of India\'s vast domestic helper market covering 50-90 million workers, growth trends, and formalization opportunities.',
    type: 'article',
  },
}

const breadcrumbItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Market Overview' }
]

export default function MarketOverviewPage() {
  return (
    <>
      <PageTracking 
        pageTitle="Market Overview"
        pageCategory="blog"
        enableScrollTracking={true}
      />
      <Navbar />
      <MainContent>
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container-custom relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <ChartBarIcon className="w-4 h-4" />
                Market Research Report 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6 leading-tight">
                The <span className="text-gradient">Invisible Workforce</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                India's Domestic Helper Market at a Crossroads
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
                <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-200">
                  <UsersIcon className="w-4 h-4 inline mr-2 text-primary-600" />
                  50-90M Workers
                </div>
                <div className="bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-secondary-200">
                  <ArrowTrendingUpIcon className="w-4 h-4 inline mr-2 text-secondary-600" />
                  12-15% Growth
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Introduction
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The Indian domestic helper market represents one of the largest yet most invisible segments of the country's economy. Employing an estimated <strong>50 to 90 million people</strong>, this predominantly informal sector touches nearly every urban household while remaining largely undocumented and unregulated.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12 not-prose">
                  <div className="bg-success-50 p-6 rounded-xl border-l-4 border-success-500">
                    <div className="flex items-center mb-4">
                      <ShieldCheckIcon className="w-8 h-8 text-success-600 mr-4" />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">80M+</h4>
                        <p className="text-gray-600">Registered on e-Shram Portal</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent-50 p-6 rounded-xl border-l-4 border-accent-500">
                    <div className="flex items-center mb-4">
                      <ClockIcon className="w-8 h-8 text-accent-600 mr-4" />
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">90%+</h4>
                        <p className="text-gray-600">Operate in Informal Sector</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Despite its vast scale, the market lacks definitive valuation due to its unorganized nature, though proxy data suggests an economic footprint in the tens of billions of dollars. Growth is driven by rapid urbanization, the rise of dual-income households, and increasing demand for specialized services like childcare and elderly care.
                </p>

                <div className="bg-primary-50 p-8 rounded-xl mb-8 border border-primary-200">
                  <blockquote className="text-lg italic text-gray-800 mb-4">
                    "The market is evolving from unskilled labor to a demand for educated and specialized professionals, with technology platforms beginning to formalize the sector."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Market Analysis Report, 2025</cite>
                </div>

                <p className="text-gray-700">
                  However, significant challenges remain, including a lack of legal recognition, poor working conditions, and the absence of social security for the vast majority of workers. This comprehensive analysis explores the current state, growth drivers, challenges, and future opportunities in India's domestic helper market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Market Size & Economic Landscape */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Market Size & Economic Landscape
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-semibold mb-6 font-display">Defining the Market Scope</h3>

                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold mb-4 text-primary-700">Distinction from Related Markets</h4>
                      <p className="text-gray-700 mb-4">
                        The Indian domestic helper market is distinct from several related but separate market segments. The <strong>"household care market"</strong> primarily encompasses consumer goods like detergents and cleaning products, valued at approximately <strong>USD 8.71 billion in 2024</strong>.
                      </p>
                      <p className="text-gray-700">
                        Similarly, the <strong>"cleaning services market"</strong> focuses on professional services for commercial and residential spaces, projected to reach <strong>USD 13.94 billion by 2030</strong>. The domestic helper market specifically refers to ongoing household tasks within private residences.
                      </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                      <h4 className="text-lg font-semibold mb-4 text-primary-700">Informal vs. Organized Sector Divide</h4>
                      <p className="text-gray-700 mb-4">
                        A defining characteristic is the profound division into informal and organized sectors. The vast majority of domestic workers—<strong>over 90%</strong>—operate within the informal sector, characterized by lack of formal contracts, regulatory oversight, and social security benefits.
                      </p>
                      <p className="text-gray-700">
                        In contrast, the organized sector, while currently a small fraction, is growing through registered agencies and digital platforms like Urban Company, bringing standardization and transparency to the hiring process.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                    <h4 className="text-lg font-semibold mb-4 text-primary-800">Key Statistics</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Global Market (2023)</span>
                        <span className="font-bold text-primary-700">$105B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Projected 2033</span>
                        <span className="font-bold text-primary-700">$190B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Asia-Pacific (2024)</span>
                        <span className="font-bold text-primary-700">$25B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 text-sm">Growth Rate (CAGR)</span>
                        <span className="font-bold text-accent-600">6.1%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">e-Shram Portal Data</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      The government's e-Shram portal had registered <strong>30.8 crore (308 million) workers</strong> by April 2025, with domestic workers constituting the second-largest group at 9% of total registrations.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600">2.77M</div>
                      <div className="text-sm text-gray-600">Registered Domestic Workers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Valuation */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 font-display">Market Valuation Challenges</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Absence of Definitive Market Size</h4>
                    <p className="text-gray-700 mb-4">
                      A significant challenge is the complete absence of a definitive market size valuation. Unlike formal industries, the domestic helper market's deep entrenchment in the informal economy makes precise calculation exceedingly difficult.
                    </p>
                    <p className="text-gray-700">
                      The lack of standardized pricing, prevalence of cash transactions, and absence of centralized reporting mean there is no reliable data source for deriving precise market value.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Proxy Estimation Method</h4>
                    <p className="text-gray-700 mb-4">
                      Using conservative estimates of 10 million workers earning an average of <strong>INR 10,000 per month</strong>, the total annual wage bill would be approximately:
                    </p>
                    <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                      <div className="text-3xl font-bold text-primary-700 mb-2">INR 1.2 Trillion</div>
                      <div className="text-lg text-gray-600">(USD 14.4 billion annually)</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      This represents the total income generated by domestic workers and serves as a proxy for the market's value from a labor cost perspective.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Trends */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Growth Trends & Future Projections
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-8 font-display">Key Drivers of Market Growth</h3>

                <div className="grid lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
                    <div className="flex items-center mb-4">
                      <BuildingOfficeIcon className="w-8 h-8 text-primary-600 mr-4" />
                      <h4 className="text-lg font-semibold text-primary-800">Urbanization & Dual-Income</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      By 2030, <strong>70% of new jobs in India will be generated in urban centers</strong>, creating a surge in dual-income households that require domestic help for work-life balance.
                    </p>
                    <div className="bg-white p-3 rounded-lg text-sm">
                      <strong>GCC Market:</strong> $72B → $110B by 2030
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-6 rounded-xl border border-accent-200">
                    <div className="flex items-center mb-4">
                      <UsersIcon className="w-8 h-8 text-accent-600 mr-4" />
                      <h4 className="text-lg font-semibold text-accent-800">Specialized Care Demand</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Increasing demand for elderly and childcare services driven by aging population and nuclear family structures, creating new opportunities for specialized caregivers.
                    </p>
                    <div className="bg-white p-3 rounded-lg text-sm">
                      <strong>Trend:</strong> Higher wages for specialized skills
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
                    <div className="flex items-center mb-4">
                      <ArrowTrendingUpIcon className="w-8 h-8 text-secondary-600 mr-4" />
                      <h4 className="text-lg font-semibold text-secondary-800">Growing Affluence</h4>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Rising disposable incomes and lifestyle changes are making households increasingly willing to invest in services that offer convenience and improve quality of life.
                    </p>
                    <div className="bg-white p-3 rounded-lg text-sm">
                      <strong>Impact:</strong> Tier 2/3 cities showing similar patterns
                    </div>
                  </div>
                </div>

                {/* Growth Projections */}
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                  <h4 className="text-xl font-semibold mb-6 text-center text-gray-800">Market Growth Projections</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-lg font-semibold mb-4 text-primary-700">City-Specific Growth Rates</h5>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Bengaluru, Pune, Gurugram</span>
                          <span className="text-lg font-bold text-primary-600">12-15%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Global Market (CAGR)</span>
                          <span className="text-lg font-bold text-accent-600">6.1%</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">Home Services Market</span>
                          <span className="text-lg font-bold text-secondary-600">10-11%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold mb-4 text-primary-700">Regional Market Growth</h5>
                      <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                        <div className="text-center mb-4">
                          <div className="text-3xl font-bold text-primary-700">$25B → $50B</div>
                          <div className="text-sm text-gray-600">Asia-Pacific Market (2024-2033)</div>
                        </div>
                        <p className="text-sm text-gray-700">
                          India is a significant contributor to regional growth, with the organized segment expected to expand rapidly as formalization increases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Evolving Demand */}
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold mb-6 font-display">Evolving Nature of Demand</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Shift Towards Skilled Helpers</h4>
                    <p className="text-gray-700 mb-4">
                      The traditional perception of domestic work as unskilled labor is rapidly changing. A 2025 WorkIndia report shows remarkable increases in demand for educated domestic helpers:
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span>12th Grade Pass</span>
                        <span className="font-bold text-success-600">+255%</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span>Graduate Candidates</span>
                        <span className="font-bold text-success-600">+102%</span>
                      </div>
                      <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span>Below 10th Grade</span>
                        <span className="font-bold text-success-600">+112%</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Specialized Roles & Gig Economy</h4>
                    <p className="text-gray-700 mb-4">
                      Demand is moving towards specialized roles with distinct skill requirements:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-center">
                        <CogIcon className="w-5 h-5 text-primary-600 mr-2" />
                        Professional Cooks
                      </li>
                      <li className="flex items-center">
                        <UsersIcon className="w-5 h-5 text-primary-600 mr-2" />
                        Childcare Specialists
                      </li>
                      <li className="flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-2" />
                        Elderly Care Providers
                      </li>
                    </ul>
                    <div className="bg-accent-50 p-4 rounded-lg border border-accent-200">
                      <p className="text-sm text-gray-700">
                        <strong>Gig Economy Impact:</strong> India's gig economy is projected to reach <strong>US$ 455 billion by FY24</strong>, bringing on-demand flexibility to domestic work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Insights */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Regional & City-Level Insights
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 font-display">Metropolitan Hubs</h3>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                    <h4 className="text-lg font-semibold mb-4 text-primary-700">High Demand in Tier-I Cities</h4>
                    <p className="text-gray-700 mb-4">
                      Metropolitan hubs like <strong>Mumbai, Delhi, Bengaluru, and Pune</strong> represent the most mature and high-value segments. These cities feature:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        High concentration of dual-income households
                      </li>
                      <li className="flex items-start">
                        <MapPinIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Large expatriate populations
                      </li>
                      <li className="flex items-start">
                        <CogIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Strong demand for specialized services
                      </li>
                      <li className="flex items-start">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Premium wages compared to smaller cities
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-primary-700">GCC Concentration</h4>
                    <p className="text-gray-700 mb-4">
                      The presence of <strong>Global Capability Centers</strong> significantly fuels demand. Bengaluru alone accounted for <strong>46% of GCC office leasing</strong> in 2023-2024.
                    </p>
                    <div className="bg-primary-50 p-4 rounded-lg border border-primary-200">
                      <div className="text-sm text-gray-600 mb-2">Top GCC Cities:</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-primary-200 text-primary-800 px-3 py-1 rounded-full text-sm">Bengaluru</span>
                        <span className="bg-primary-200 text-primary-800 px-3 py-1 rounded-full text-sm">Hyderabad</span>
                        <span className="bg-primary-200 text-primary-800 px-3 py-1 rounded-full text-sm">Pune</span>
                        <span className="bg-primary-200 text-primary-800 px-3 py-1 rounded-full text-sm">Delhi-NCR</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 font-display">Emerging Markets</h3>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-6">
                    <h4 className="text-lg font-semibold mb-4 text-accent-700">Tier-II/III City Growth</h4>
                    <p className="text-gray-700 mb-4">
                      Cities like <strong>Coimbatore, Indore, Surat, and Kochi</strong> are emerging as new growth frontiers. The share of GCCs in these cities has grown from <strong>5% in FY19 to 7% recently</strong>.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700">Economic Development</span>
                        <ArrowTrendingUpIcon className="w-5 h-5 text-success-600" />
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700">Rising Incomes</span>
                        <ArrowTrendingUpIcon className="w-5 h-5 text-success-600" />
                      </div>
                      <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <span className="text-gray-700">Lifestyle Changes</span>
                        <ArrowTrendingUpIcon className="w-5 h-5 text-success-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold mb-4 text-accent-700">Demand for Educated Helpers</h4>
                    <p className="text-gray-700 mb-4">
                      Employers in emerging markets increasingly seek domestic workers who can:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <UsersIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                        Communicate effectively
                      </li>
                      <li className="flex items-start">
                        <ClockIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                        Follow complex instructions
                      </li>
                      <li className="flex items-start">
                        <CogIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                        Adapt to modern household tech
                      </li>
                      <li className="flex items-start">
                        <ShieldCheckIcon className="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                        Assist with children's education
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 font-display">Case Study: Odisha's Regulatory Model</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <p className="text-gray-700 mb-4">
                      The state of Odisha has emerged as a pioneer in domestic worker regulation through the <strong>Odisha Domestic Workers' Welfare Board</strong>. This model includes:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-6">
                      <li className="flex items-start">
                        <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Mandatory registration for workers and employers
                      </li>
                      <li className="flex items-start">
                        <ArrowTrendingUpIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Fixing of minimum wages for domestic workers
                      </li>
                      <li className="flex items-start">
                        <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Health insurance coverage
                      </li>
                      <li className="flex items-start">
                        <ClockIcon className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        Maternity leave provisions
                      </li>
                    </ul>
                    <p className="text-gray-700">
                      While implementation faces challenges, the Odisha model serves as an inspiration for other states and demonstrates the feasibility of formalizing this informal sector.
                    </p>
                  </div>

                  <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                    <h4 className="text-lg font-semibold mb-4 text-primary-800">Key Achievements</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-700">First</div>
                        <div className="text-sm text-gray-600">State with comprehensive welfare board</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-700">Model</div>
                        <div className="text-sm text-gray-600">For other states to replicate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary-700">Framework</div>
                        <div className="text-sm text-gray-600">For national policy development</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Challenges */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Challenges in the Indian Domestic Helper Market
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-700">Workforce Vulnerabilities</h3>

                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-semibold mb-3 text-red-800">Lack of Legal Recognition</h4>
                      <p className="text-gray-700 mb-3">
                        Domestic workers are not covered by most labor laws, denying them access to:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-center">❌ Health insurance</li>
                        <li className="flex items-center">❌ Provident funds</li>
                        <li className="flex items-center">❌ Paid leave</li>
                        <li className="flex items-center">❌ Job security</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-3">
                        The Domestic Workers Bill has been pending for years, leaving workers vulnerable to exploitation.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                      <h4 className="text-lg font-semibold mb-3 text-orange-800">Poor Working Conditions</h4>
                      <p className="text-gray-700 mb-3">
                        An ILO study found many live-in workers in Delhi work <strong>16-18 hours daily</strong> with:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-center">⚠️ No standardized contracts</li>
                        <li className="flex items-center">⚠️ Unclear working hours</li>
                        <li className="flex items-center">⚠️ Restricted movement</li>
                        <li className="flex items-center">⚠️ No leave entitlements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-red-700">Market Inefficiencies</h3>

                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800">Unorganized Sector Dominance</h4>
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">Informal Sector</span>
                          <span className="text-2xl font-bold text-red-600">90%+</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full w-11/12"></div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm">
                        Over <strong>90% of the workforce</strong> operates through informal channels, creating difficulties in finding reliable help and perpetuating vulnerability.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <h4 className="text-lg font-semibold mb-3 text-yellow-800">Skill Development Gap</h4>
                      <p className="text-gray-700 mb-3">
                        Most workers learn skills informally, leading to:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-center">➖ Non-standardized service quality</li>
                        <li className="flex items-center">➖ Limited career progression</li>
                        <li className="flex items-center">➖ Low wage ceilings</li>
                        <li className="flex items-center">➖ Inadequate safety knowledge</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-8 rounded-xl border border-red-200">
                <div className="flex items-start">
                  <ClockIcon className="w-8 h-8 text-red-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-red-800">Critical Issue: Child Labor and Abuse</h4>
                    <p className="text-gray-700 mb-4">
                      Despite legal prohibitions, thousands of children are employed in households, often in conditions amounting to modern-day slavery. The hidden nature of domestic work makes monitoring and enforcement extremely difficult.
                    </p>
                    <p className="text-gray-700">
                      Many adult workers, particularly women, also face various forms of abuse. The power imbalance and lack of legal protections create environments where abuse can thrive with little recourse to justice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Opportunities for Market Organization and Formalization
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <CogIcon className="w-8 h-8 text-primary-600 mr-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Technology & Digital Platforms</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    On-demand service apps are transforming how domestic help is sourced, managed, and paid for, bringing unprecedented transparency and efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-primary-600 mr-2" />
                      Online booking systems
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-primary-600 mr-2" />
                      Background verification
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-primary-600 mr-2" />
                      Digital payments
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-accent-600 mr-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Skill Development</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Formal training programs through the Domestic Workers Sector Skill Council (DWSSC) and private initiatives are creating pathways for professionalization.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-accent-600 mr-2" />
                      Standardized curriculum
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-accent-600 mr-2" />
                      Certification programs
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-accent-600 mr-2" />
                      Specialized roles training
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex items-center mb-4">
                    <BuildingOfficeIcon className="w-8 h-8 text-secondary-600 mr-4" />
                    <h3 className="text-xl font-semibold text-gray-800">Organized Players</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Established agencies and tech startups are bringing professionalism through rigorous vetting, training, and service guarantees.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-secondary-600 mr-2" />
                      Quality assurance
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-secondary-600 mr-2" />
                      Reliability guarantees
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ShieldCheckIcon className="w-4 h-4 text-secondary-600 mr-2" />
                      Dispute resolution
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Players */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6 font-display">Key Players in the Organized Sector</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Traditional Agencies</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary-500 pl-4">
                        <h5 className="font-semibold text-gray-800">The Maid's Company</h5>
                        <p className="text-sm text-gray-600">Established placement agency with strong reputation for quality</p>
                      </div>
                      <div className="border-l-4 border-primary-500 pl-4">
                        <h5 className="font-semibold text-gray-800">Hire-a-Help</h5>
                        <p className="text-sm text-gray-600">Comprehensive training and verification services</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-4 text-gray-800">Technology Startups</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-accent-500 pl-4">
                        <h5 className="font-semibold text-gray-800">Urban Company</h5>
                        <p className="text-sm text-gray-600">Market leader in on-demand home services platform</p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-4">
                        <h5 className="font-semibold text-gray-800">Broomees</h5>
                        <p className="text-sm text-gray-600">Specialized in professional domestic help placement</p>
                      </div>
                      <div className="border-l-4 border-accent-500 pl-4">
                        <h5 className="font-semibold text-gray-800">EzyHelpers</h5>
                        <p className="text-sm text-gray-600">Tech-driven approach to domestic worker matching and support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-6">
                  Conclusion
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mb-8"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The Indian domestic helper market stands at a critical juncture. With an estimated <strong>50-90 million workers</strong>, it represents one of the largest employment sectors in the country, yet remains predominantly informal and largely invisible in official economic statistics.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-12 not-prose">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                    <ArrowTrendingUpIcon className="w-12 h-12 text-primary-600 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Growth Trajectory</h4>
                    <p className="text-gray-600 text-sm">Driven by urbanization, dual-income households, and rising demand for specialized care services</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                    <ShieldCheckIcon className="w-12 h-12 text-accent-600 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Formalization Challenge</h4>
                    <p className="text-gray-600 text-sm">Over 90% informality rate creates vulnerabilities but also opportunities for organization</p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
                    <CogIcon className="w-12 h-12 text-secondary-600 mb-4 mx-auto" />
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Technology Impact</h4>
                    <p className="text-gray-600 text-sm">Digital platforms driving transparency, standardization, and professionalization</p>
                  </div>
                </div>

                <div className="bg-primary-50 p-8 rounded-xl mb-8 border border-primary-200">
                  <h3 className="text-2xl font-semibold mb-4 text-primary-800">Key Takeaways</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ArrowTrendingUpIcon className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <strong>Market Evolution:</strong> The sector is transitioning from unskilled labor to a demand for educated, specialized professionals, with education becoming a key differentiator.
                    </li>
                    <li className="flex items-start">
                      <MapPinIcon className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <strong>Regional Expansion:</strong> Growth is no longer confined to metropolitan areas, with Tier-II and Tier-III cities emerging as new frontiers of demand.
                    </li>
                    <li className="flex items-start">
                      <ShieldCheckIcon className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <strong>Policy Imperative:</strong> The pending Domestic Workers Bill represents a critical opportunity to provide legal recognition and social security to millions of workers.
                    </li>
                    <li className="flex items-start">
                      <CogIcon className="w-5 h-5 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                      <strong>Technology Catalyst:</strong> Digital platforms are successfully formalizing segments of the market, demonstrating the potential for scalable solutions.
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
                  <blockquote className="text-xl italic mb-4">
                    "The future of India's domestic helper market lies in its successful transition from informal arrangements to a formalized, professional sector that recognizes the dignity and rights of workers while meeting the evolving needs of urban households."
                  </blockquote>
                  <cite className="text-sm text-gray-600">— Market Analysis Conclusion, 2025</cite>
                </div>

                <p className="text-gray-700 mt-8">
                  As India continues its rapid urbanization and economic development, the domestic helper market will play an increasingly vital role in supporting urban lifestyles and providing employment opportunities. The challenge lies in ensuring that this growth benefits all stakeholders—workers gain dignity, security, and fair compensation; employers access reliable, professional services; and society recognizes the invaluable contribution of this workforce to the nation's economic and social fabric.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                Looking for Professional Domestic Help?
              </h2>
              <p className="text-xl mb-8 text-primary-100">
                EzyHelpers is leading the formalization of India's domestic helper market with verified, trained professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hire-helper"
                  className="btn-secondary bg-white text-primary-600 hover:bg-gray-50"
                >
                  Find a Helper
                </a>
                <a
                  href="tel:+918031411776"
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-lg border border-white/30 transition-all duration-200"
                >
                  📞 Call 080-31411776
                </a>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </>
  )
}
