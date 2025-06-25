import React, { ReactNode } from 'react'

interface OptimizedSectionProps {
  children: ReactNode
  title?: string
  description?: string
  badge?: string
  className?: string
  background?: 'white' | 'gray' | 'gradient'
  padding?: 'normal' | 'large' | 'small'
  centered?: boolean
}

export default function OptimizedSection({
  children,
  title,
  description,
  badge,
  className = '',
  background = 'white',
  padding = 'normal',
  centered = false
}: OptimizedSectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
  }
  
  const paddingClasses = {
    small: 'py-12',
    normal: 'py-16 lg:py-20',
    large: 'py-20 lg:py-24'
  }

  return (
    <section className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}>
      <div className="container-custom">
        {(title || description || badge) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {badge && (
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-semibold">{badge}</span>
              </div>
            )}
            
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        
        {children}
      </div>
    </section>
  )
} 