import { ReactNode } from 'react'

interface OptimizedSectionProps {
  children: ReactNode
  background?: 'white' | 'gray' | 'gradient' | 'colored'
  className?: string
  id?: string
  pattern?: boolean
  colorScheme?: 'primary' | 'secondary' | 'accent' | 'trust' | 'red' | 'orange' | 'slate'
}

export default function OptimizedSection({ 
  children, 
  background = 'white', 
  className = '',
  id,
  pattern = false,
  colorScheme = 'primary'
}: OptimizedSectionProps) {
  const getBackgroundClass = () => {
    switch (background) {
      case 'gray':
        return 'bg-gray-50'
      case 'gradient':
        return `bg-gradient-to-br from-${colorScheme}-50 to-white`
      case 'colored':
        return `bg-${colorScheme}-50`
      default:
        return 'bg-white'
    }
  }

  const sectionStyle = pattern ? {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${colorScheme === 'primary' ? '0074C8' : '6B7280'}' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundSize: '60px 60px'
  } : {}

  return (
    <section 
      id={id}
      className={`section-padding ${getBackgroundClass()} relative overflow-hidden ${className}`}
      style={sectionStyle}
    >
      <div className="container-custom relative">
        {children}
      </div>
    </section>
  )
} 