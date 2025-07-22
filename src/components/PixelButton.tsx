import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { forwardRef } from "react"

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
}

export const PixelButton = forwardRef<HTMLButtonElement, PixelButtonProps>(
  ({ className, variant = 'primary', size = 'md', glow = false, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary hover:bg-primary/90 text-white border-primary/50',
      accent: 'bg-accent hover:bg-accent/90 text-background border-accent/50',
      ghost: 'bg-transparent hover:bg-primary/20 text-primary border-primary'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <Button
        ref={ref}
        className={cn(
          'font-mono font-bold border-2 rounded-sm transition-all duration-200',
          'hover:scale-105 active:scale-95',
          'shadow-lg hover:shadow-xl',
          variants[variant],
          sizes[size],
          glow && 'neon-glow',
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }
)

PixelButton.displayName = "PixelButton"