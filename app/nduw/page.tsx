import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'National Database of Unorganised Workers | EzyHelpers',
  description: 'Access the National Database of Unorganised Workers (NDUW) dashboard for comprehensive insights into the unorganised workforce sector.',
}

export default function NDUWPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            National Database of Unorganised Workers
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Access comprehensive data and insights about unorganised workers across India
          </p>
        </div>
        
        <div className="w-full aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
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
      </div>
    </main>
  )
}
