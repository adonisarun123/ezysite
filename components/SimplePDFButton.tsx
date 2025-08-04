'use client'

interface SimplePDFButtonProps {
  className?: string
  children?: React.ReactNode
}

export default function SimplePDFButton({ 
  className = "bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105",
  children = "📄 Download Executive Summary"
}: SimplePDFButtonProps) {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <button 
      onClick={handlePrint}
      className={className}
    >
      {children}
    </button>
  )
} 