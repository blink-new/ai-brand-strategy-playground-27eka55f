import React from 'react'

interface LinearCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export const LinearCard: React.FC<LinearCardProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  return (
    <div 
      className={`linear-card p-6 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}