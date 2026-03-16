'use client'

import Link from 'next/link'
import { useUrgency } from './UrgencyContext'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  rightContent?: React.ReactNode
  sticky?: boolean
}

export default function Breadcrumb({ items, className = "", rightContent, sticky = false }: BreadcrumbProps) {
  const { isUrgencyVisible } = useUrgency()

  const stickyClasses = sticky
    ? `sticky z-30 transition-all duration-300 ${isUrgencyVisible
      ? 'top-[calc(48px+80px)] lg:top-[calc(48px+96px)]'
      : 'top-[80px] lg:top-[96px]'
    } shadow-md`
    : ''

  return (
    <section className={`bg-gray-100 py-4 ${className} ${stickyClasses}`}>
      <div className="container-custom flex items-center justify-between">
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
        {rightContent && <div>{rightContent}</div>}
      </div>
    </section>
  )
}