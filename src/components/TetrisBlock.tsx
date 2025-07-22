import { cn } from "@/lib/utils"

interface TetrisBlockProps {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'accent' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  pulse?: boolean
}

export function TetrisBlock({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  glow = false,
  pulse = false
}: TetrisBlockProps) {
  const variants = {
    primary: 'bg-gradient-to-br from-primary to-accent border-primary',
    accent: 'bg-gradient-to-br from-accent to-primary border-accent',
    muted: 'bg-gradient-to-br from-muted to-card border-muted'
  }

  const sizes = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }

  return (
    <div 
      className={cn(
        'relative border-2 rounded-sm tetris-block',
        variants[variant],
        sizes[size],
        glow && 'neon-glow',
        pulse && 'pixel-pulse',
        className
      )}
    >
      <div className="absolute inset-1 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-sm" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}