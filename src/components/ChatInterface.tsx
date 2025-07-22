import { useState, useRef, useEffect } from 'react'
import { LinearCard } from './LinearCard'
import { LinearButton } from './LinearButton'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send, Bot, User, ArrowLeft, Sparkles } from 'lucide-react'
import { blink } from '../blink/client'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  websiteUrl: string
  brandContext: string
  onBack: () => void
}

export function ChatInterface({ websiteUrl, brandContext, onBack }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: `Welcome to your AI brand strategy consultation! I've analyzed ${websiteUrl} and I'm ready to help you explore marketing techniques, growth channels, and strategic opportunities. What would you like to discuss first?`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      // Create context for AI consultant
      const systemPrompt = `You are an expert AI brand strategy consultant. You have analyzed the website ${websiteUrl} and have deep insights about their brand. 

Brand Context: ${brandContext}

You should provide specific, actionable advice about marketing strategies, growth channels, brand positioning, and tactical recommendations. Be conversational but professional, and always tie your advice back to their specific brand and industry.

User question: ${currentInput}`

      const { text } = await blink.ai.generateText({
        prompt: systemPrompt,
        model: 'gpt-4o-mini',
        maxTokens: 500
      })

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: text,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
    } catch (error) {
      console.error('Error sending message:', error)
      // Fallback response
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I apologize, but I'm having trouble connecting to my AI systems right now. However, based on your brand analysis, I can suggest that ${currentInput.includes('social') ? 'social media strategy should focus on LinkedIn and Instagram for B2B engagement, with video content performing significantly better than static posts.' : currentInput.includes('email') ? 'email marketing can drive exceptional ROI when personalized. Consider segmenting your audience based on engagement levels and purchase history.' : 'you should focus on your core value proposition and target audience needs.'} Please try asking again in a moment.`,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <LinearButton variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Analysis
          </LinearButton>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  AI Brand Consultant
                </h1>
                <p className="text-sm text-muted-foreground">
                  Analyzing: {websiteUrl}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <LinearCard className="h-[600px] flex flex-col p-0 overflow-hidden">
          {/* Messages */}
          <ScrollArea ref={scrollAreaRef} className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <p className="leading-relaxed text-sm">{message.content}</p>
                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-4 justify-start">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                      Thinking...
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t border-border p-6">
            <div className="flex gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about marketing strategies, growth channels, tactics..."
                className="linear-input flex-1"
                disabled={isLoading}
              />
              <LinearButton
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="px-4"
              >
                <Send className="w-4 h-4" />
              </LinearButton>
            </div>
            <div className="text-xs text-muted-foreground mt-2">
              Press Enter to send • Shift+Enter for new line
            </div>
          </div>
        </LinearCard>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <LinearButton
            variant="outline"
            onClick={() => setInput("What are the best social media channels for my brand?")}
            className="text-left justify-start h-auto p-4"
          >
            <div>
              <div className="font-medium text-sm">Social Media Strategy</div>
              <div className="text-xs text-muted-foreground mt-1">Optimize your social presence</div>
            </div>
          </LinearButton>
          <LinearButton
            variant="outline"
            onClick={() => setInput("How can I improve my email marketing campaigns?")}
            className="text-left justify-start h-auto p-4"
          >
            <div>
              <div className="font-medium text-sm">Email Marketing</div>
              <div className="text-xs text-muted-foreground mt-1">Boost engagement and conversions</div>
            </div>
          </LinearButton>
          <LinearButton
            variant="outline"
            onClick={() => setInput("What growth tactics should I prioritize?")}
            className="text-left justify-start h-auto p-4"
          >
            <div>
              <div className="font-medium text-sm">Growth Tactics</div>
              <div className="text-xs text-muted-foreground mt-1">Scale your business effectively</div>
            </div>
          </LinearButton>
        </div>
      </div>
    </div>
  )
}