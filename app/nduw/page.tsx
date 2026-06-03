import type { Metadata } from 'next'
import { selfReferencingLanguages } from '@/lib/selfHreflang'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'National Database of Unorganised Workers | EzyHelpers',
  description: 'Access the National Database of Unorganised Workers (NDUW) dashboard for comprehensive insights into the unorganised workforce sector.',
  alternates: {
    canonical: 'https://www.ezyhelpers.com/nduw',
    languages: selfReferencingLanguages('/nduw'),
  },
}

export default function NDUWPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link href="/" className="inline-flex items-center mb-8">
          <Image
            src="/ezyhelper_logo_new.png"
            alt="EzyHelpers Logo"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="ml-3 text-xl font-bold text-gray-900">EzyHelpers</span>
        </Link>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            National Database of Unorganised Workers
          </h1>
          <p className="mt-4 text-xl text-gray-500 mb-8">
            Access comprehensive data and insights about unorganised workers across India
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Understanding India's Unorganised Workforce</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                The National Database of Unorganised Workers (NDUW) serves as India's comprehensive platform for tracking, 
                analyzing, and supporting the vast unorganised workforce sector. This interactive dashboard provides 
                real-time insights into employment patterns, demographic distributions, and economic trends affecting 
                millions of workers across the country.
              </p>
              
              <p className="text-gray-700 mb-4">
                Our database captures critical information about domestic workers, daily wage laborers, street vendors, 
                artisans, and other informal sector employees. Through data-driven analysis, we help policymakers, 
                researchers, and organizations make informed decisions that positively impact worker welfare and 
                employment opportunities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features & Insights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Geographic Distribution</h4>
                  <p className="text-gray-700 text-sm">
                    State-wise and district-wise mapping of unorganised workers with population density analysis, 
                    migration patterns, and regional employment trends.
                  </p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Skill Categories</h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive classification of worker skills including domestic services, construction, 
                    manufacturing, agriculture, and service sector specializations.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Employment Statistics</h4>
                  <p className="text-gray-700 text-sm">
                    Real-time employment rates, seasonal variations, wage trends, and job availability 
                    across different sectors and regions.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Social Security Coverage</h4>
                  <p className="text-gray-700 text-sm">
                    Tracking of government scheme enrollment, insurance coverage, and social security 
                    benefits accessibility among unorganised workers.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How to Use This Dashboard</h3>
              
              <p className="text-gray-700 mb-4">
                The interactive Power BI dashboard below allows you to explore worker data through various filters 
                and visualizations. You can drill down by state, skill category, age group, gender, and time period 
                to gain specific insights relevant to your research or policy requirements.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Navigation Tips:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Use the filters on the left to narrow down data by specific criteria</li>
                  <li>Click on charts and graphs to cross-filter related visualizations</li>
                  <li>Hover over data points to see detailed information</li>
                  <li>Use the date range selector to view historical trends</li>
                  <li>Export charts and data using the options in the top menu</li>
                </ul>
              </div>

              <p className="text-gray-700 mb-6">
                This database is continuously updated with new registrations, employment changes, and policy 
                implementations to ensure accuracy and relevance. The information helps bridge the gap between 
                unorganised workers and formal employment opportunities while supporting evidence-based 
                policy development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl mb-12">
          <iframe 
            title="power bi report_Prod_dashboard_main_2" 
            width="100%" 
            height="100%" 
            src="https://app.powerbi.com/view?r=eyJrIjoiZDUzZGM5NjEtOGVmZi00ZjNlLTllYjktODg3NjI4MTBmODhmIiwidCI6ImVmYTllNTA2LTlkYmYtNDE5Yi05ZmFiLWJkN2UxOTk2OTMyOSJ9" 
            frameBorder="0" 
            allowFullScreen={true}
            className="w-full h-full"
          />
        </div>

        {/* Additional Information Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">About EzyHelpers' Contribution</h2>
            
            <p className="text-gray-700 mb-4">
              EzyHelpers actively contributes to the National Database of Unorganised Workers by providing 
              verified data about domestic workers across India. Our platform helps bridge the gap between 
              informal domestic workers and formal employment opportunities while ensuring proper documentation 
              and social security coverage.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <p className="text-gray-600">Workers Verified</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <p className="text-gray-600">States Covered</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Documentation Rate</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link 
                href="/helper-registration" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register as Helper
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 ml-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="text-center text-gray-600 mb-8">
            <p className="mb-2">
              This dashboard is part of India's initiative to formalize the unorganised workforce and 
              provide better social security and employment opportunities.
            </p>
            <p className="text-sm">
              Data is updated regularly and complies with all privacy and data protection regulations. 
              For technical support or data queries, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
