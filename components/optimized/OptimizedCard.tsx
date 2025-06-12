import { ReactNode } from 'react'
import Link from 'next/link'

interface OptimizedCardProps {
  title: string
  description: string
  icon: ReactNode
  href?: string
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'trust' | 'red' | 'orange' | 'slate'
  popular?: boolean
  className?: string
}

export default function OptimizedCard({
  title,
  description,
  icon,
  href,
  colorScheme = 'primary',
  popular = false,
  className = ''
}: OptimizedCardProps) {
  const colors = {
    primary: 'border-primary-200 bg-primary-50 text-primary-600 hover:bg-primary-100',
    secondary: 'border-secondary-200 bg-secondary-50 text-secondary-600 hover:bg-secondary-100',
    accent: 'border-accent-200 bg-accent-50 text-accent-600 hover:bg-accent-100',
    trust: 'border-trust-200 bg-trust-50 text-trust-600 hover:bg-trust-100',
    red: 'border-red-200 bg-red-50 text-red-600 hover:bg-red-100',
    orange: 'border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-100',
    slate: 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
  }

  const cardContent = (
    <>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${colors[colorScheme]}`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
      {popular && (
        <div className="absolute -top-2 -right-2 bg-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
          Popular
        </div>
      )}
    </>
  )

  const baseClasses = `group relative bg-white rounded-xl p-6 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${className}`

  return href ? (
    <Link href={href} className={baseClasses}>
      {cardContent}
    </Link>
  ) : (
    <div className={baseClasses}>
      {cardContent}
    </div>
  )
}