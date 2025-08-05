import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <section className={`bg-gray-100 py-4 ${className}`}>
      <div className="container-custom">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="text-gray-400 mr-2">/</span>}
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}