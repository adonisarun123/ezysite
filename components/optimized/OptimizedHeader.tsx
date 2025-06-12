import { ReactNode } from 'react'

interface OptimizedHeaderProps {
  badge?: string
  badgeIcon?: ReactNode
  title: string
  subtitle?: string
  description?: string
  centered?: boolean
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'trust' | 'red' | 'orange' | 'slate'
  className?: string
}

export default function OptimizedHeader({
  badge,
  badgeIcon,
  title,
  subtitle,
  description,
  centered = true,
  colorScheme = 'primary',
  className = ''
}: OptimizedHeaderProps) {
  const colorClasses = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    accent: 'bg-accent-100 text-accent-700',
    trust: 'bg-trust-100 text-trust-700',
    red: 'bg-red-100 text-red-700',
    orange: 'bg-orange-100 text-orange-700',
    slate: 'bg-slate-100 text-slate-700'
  }

  const gradientClasses = {
    primary: 'from-primary-600 to-secondary-600',
    secondary: 'from-secondary-600 to-primary-600',
    accent: 'from-accent-600 to-primary-600',
    trust: 'from-trust-600 to-primary-600',
    red: 'from-red-600 to-pink-700',
    orange: 'from-orange-600 to-red-700',
    slate: 'from-slate-600 to-gray-700'
  }

  return (
    <div className={`${centered ? 'text-center' : ''} mb-16 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center ${colorClasses[colorScheme]} rounded-full px-6 py-3 mb-6 font-semibold text-sm`}>
          {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
        {title}
        {subtitle && (
          <span className={`block bg-gradient-to-r ${gradientClasses[colorScheme]} bg-clip-text text-transparent`}>
            {subtitle}
          </span>
        )}
      </h2>
      
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
} 