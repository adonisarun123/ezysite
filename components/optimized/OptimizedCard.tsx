import React from 'react'
import { ReactNode } from 'react'

interface OptimizedCardProps {
  title: string
  description: string
  icon?: ReactNode
  href?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'accent'
  features?: string[]
  hoverEffect?: boolean
}

export default function OptimizedCard({
  title,
  description,
  icon,
  href,
  className = '',
  variant = 'primary',
  features = [],
  hoverEffect = true
}: OptimizedCardProps) {
  const baseClasses = 'optimized-card rounded-xl p-6 transition-all duration-300'
  const variantClasses = {
    primary: 'bg-white border border-gray-200 hover:shadow-lg',
    secondary: 'bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md',
    accent: 'bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:shadow-lg'
  }
  
  const Component = href ? 'a' : 'div'
  const props = href ? { href } : {}

  return (
    <Component 
      className={`${baseClasses} ${variantClasses[variant]} ${hoverEffect ? 'hover:scale-105' : ''} ${className}`}
      {...props}
    >
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-bold text-gray-900 mb-3 font-display">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {description}
      </p>
      
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Component>
  )
}