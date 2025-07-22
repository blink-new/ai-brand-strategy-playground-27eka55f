import { useState, useEffect } from 'react'
import { LinearCard } from './LinearCard'
import { LinearButton } from './LinearButton'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Globe, Zap, Target, TrendingUp, Share2, MessageSquare, User, LogOut, Sparkles } from 'lucide-react'
import { blink } from '../blink/client'

interface LandingPageProps {
  onSubmit: (url: string, email: string) => void
  isLoading: boolean
}

export function LandingPage({ onSubmit, isLoading }: LandingPageProps) {
  const [url, setUrl] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState(null)

  // Get current user
  useEffect(() => {
    blink.auth.me().then(setUser).catch(() => setUser(null))
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url && email) {
      onSubmit(url, email)
    }
  }

  const features = [
    {
      icon: Globe,
      title: 'Website Analysis',
      description: 'AI-powered deep dive into your brand presence and positioning'
    },
    {
      icon: Target,
      title: 'Strategy Generation',
      description: 'Custom marketing strategies tailored to your business goals'
    },
    {
      icon: MessageSquare,
      title: 'AI Consultation',
      description: 'Interactive chat about growth tactics and marketing channels'
    },
    {
      icon: Share2,
      title: 'Shareable Results',
      description: 'Generate links to collaborate and share your brand analysis'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* User Profile Header */}
      {user && (
        <div className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-end">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-muted/50">
                <User className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">{user.email}</span>
                <button 
                  onClick={() => blink.auth.logout()}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded hover:bg-muted"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-primary/10 text-primary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Brand Strategy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Brand Strategy
            <span className="text-gradient block">Playground</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your brand with AI-powered analysis and strategic insights. 
            Get comprehensive brand strategy recommendations in minutes.
          </p>
          
          <div className="text-sm text-muted-foreground mb-12">
            Powered by <span className="font-medium text-primary">HighGrowthDigital.com</span>
          </div>
        </div>

        {/* Main Form */}
        <div className="max-w-lg mx-auto mb-20">
          <LinearCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Get Started
                </h2>
                <p className="text-muted-foreground">
                  Enter your website URL and email to unlock AI brand insights
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="url" className="text-sm font-medium text-foreground">
                    Website URL
                  </Label>
                  <Input
                    id="url"
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="linear-input h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="linear-input h-11"
                    required
                  />
                </div>
              </div>

              <LinearButton
                onClick={handleSubmit}
                disabled={isLoading || !url || !email}
                className="w-full h-11"
                size="lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Analyzing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Generate Brand Strategy
                  </div>
                )}
              </LinearButton>
            </form>
          </LinearCard>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <LinearCard 
              key={index} 
              className="text-center p-6 hover:shadow-lg transition-all duration-300"
              delay={index * 100}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </LinearCard>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Built for growth-focused brands
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}