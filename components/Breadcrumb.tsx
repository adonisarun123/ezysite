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
  /** Lighter bar and border — useful on marketing pages */
  variant?: 'default' | 'minimal'
  /** Visual separator between crumbs */
  separator?: 'slash' | 'chevron'
}

export default function Breadcrumb({
  items,
  className = '',
  rightContent,
  sticky = false,
  variant = 'default',
  separator = 'slash',
}: BreadcrumbProps) {
  const { isUrgencyVisible } = useUrgency()

  const stickyClasses = sticky
    ? `sticky z-30 transition-all duration-300 ${isUrgencyVisible
      ? 'top-[calc(48px+80px)] lg:top-[calc(48px+96px)]'
      : 'top-[80px] lg:top-[96px]'
    } shadow-md`
    : ''

  const bar =
    variant === 'minimal'
      ? 'border-b border-[#e8eaed] bg-[#f8f9fa] py-3'
      : 'bg-gray-100 py-4'

  const sep = separator === 'chevron' ? '›' : '/'

  return (
    <section className={`${bar} ${className} ${stickyClasses}`}>
      <div className="container-custom flex items-center justify-between">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-1 gap-y-1">
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="mx-2 text-[#80868b] select-none" aria-hidden="true">
                    {sep}
                  </span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className={
                      variant === 'minimal'
                        ? 'text-[#5f6368] transition-colors hover:text-primary-600'
                        : 'text-gray-500 transition-colors hover:text-primary-600'
                    }
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={
                      variant === 'minimal'
                        ? 'font-medium text-[#202124]'
                        : 'font-medium text-gray-900'
                    }
                  >
                    {item.label}
                  </span>
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