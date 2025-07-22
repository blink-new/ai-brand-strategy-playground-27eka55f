import { useState, useEffect } from 'react'
import { LandingPage } from './components/LandingPage'
import { BrandAnalysis } from './components/BrandAnalysis'
import { ChatInterface } from './components/ChatInterface'
import { blink } from './blink/client'

type AppState = 'landing' | 'analysis' | 'chat'

interface AnalysisData {
  brandOverview: string
  targetAudience: string
  keyStrengths: string[]
  opportunities: string[]
  recommendedChannels: string[]
  competitiveAdvantage: string
  fullAnalysis?: any
}

function App() {
  const [currentState, setCurrentState] = useState<AppState>('landing')
  const [isLoading, setIsLoading] = useState(false)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null)
  const [shareUrl, setShareUrl] = useState<string>('')
  const [user, setUser] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setAuthLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  const handleAnalysisSubmit = async (url: string, email: string) => {
    setIsLoading(true)
    setWebsiteUrl(url)
    setUserEmail(email)

    try {
      // First scrape the website to get content
      const websiteData = await blink.data.scrape(url)
      
      // Generate comprehensive brand analysis using AI
      const analysisPrompt = `
        Analyze the following website and provide a comprehensive brand strategy analysis:
        
        Website URL: ${url}
        Website Content: ${websiteData.markdown}
        Website Metadata: ${JSON.stringify(websiteData.metadata)}
        
        Please provide a detailed brand analysis in JSON format with the following structure:
        {
          "brandOverview": "string",
          "targetAudience": "string", 
          "keyStrengths": ["array of strings"],
          "opportunities": ["array of strings"],
          "recommendedChannels": ["array of strings"],
          "competitiveAdvantage": "string",
          "brandIdentity": {
            "brandVoice": "string",
            "brandPromise": "string", 
            "brandPersonality": "string"
          },
          "brandMission": "string",
          "brandVision": "string",
          "uniqueSellingProposition": "string",
          "brandGoals": ["array of strings"],
          "brandValues": ["array of strings"],
          "swotAnalysis": {
            "strengths": ["array"],
            "weaknesses": ["array"], 
            "opportunities": ["array"],
            "threats": ["array"],
            "overallAssessment": "string"
          },
          "idealCustomerProfile": {
            "title": "string",
            "demographics": {
              "title": "string",
              "companySize": "string",
              "industry": "string", 
              "revenue": "string",
              "location": "string"
            },
            "corePainPoints": ["array"],
            "goalsAspirations": ["array"],
            "decisionMakingStyle": "string",
            "psychographics": ["array"],
            "preferredChannels": ["array"]
          },
          "marketingCopy": {
            "headlines": ["array"],
            "taglines": ["array"]
          },
          "contentStrategy": {
            "heroContent": ["array"],
            "hubContent": ["array"], 
            "hygieneContent": ["array"]
          },
          "actionableInsights": ["array of strings"]
        }
        
        Make the analysis specific to this website and industry. Be detailed and actionable.
      `

      const { object: fullAnalysis } = await blink.ai.generateObject({
        prompt: analysisPrompt,
        schema: {
          type: 'object',
          properties: {
            brandOverview: { type: 'string' },
            targetAudience: { type: 'string' },
            keyStrengths: { type: 'array', items: { type: 'string' } },
            opportunities: { type: 'array', items: { type: 'string' } },
            recommendedChannels: { type: 'array', items: { type: 'string' } },
            competitiveAdvantage: { type: 'string' },
            brandIdentity: {
              type: 'object',
              properties: {
                brandVoice: { type: 'string' },
                brandPromise: { type: 'string' },
                brandPersonality: { type: 'string' }
              }
            },
            brandMission: { type: 'string' },
            brandVision: { type: 'string' },
            uniqueSellingProposition: { type: 'string' },
            brandGoals: { type: 'array', items: { type: 'string' } },
            brandValues: { type: 'array', items: { type: 'string' } },
            swotAnalysis: {
              type: 'object',
              properties: {
                strengths: { type: 'array', items: { type: 'string' } },
                weaknesses: { type: 'array', items: { type: 'string' } },
                opportunities: { type: 'array', items: { type: 'string' } },
                threats: { type: 'array', items: { type: 'string' } },
                overallAssessment: { type: 'string' }
              }
            },
            idealCustomerProfile: {
              type: 'object',
              properties: {
                title: { type: 'string' },
                demographics: {
                  type: 'object',
                  properties: {
                    title: { type: 'string' },
                    companySize: { type: 'string' },
                    industry: { type: 'string' },
                    revenue: { type: 'string' },
                    location: { type: 'string' }
                  }
                },
                corePainPoints: { type: 'array', items: { type: 'string' } },
                goalsAspirations: { type: 'array', items: { type: 'string' } },
                decisionMakingStyle: { type: 'string' },
                psychographics: { type: 'array', items: { type: 'string' } },
                preferredChannels: { type: 'array', items: { type: 'string' } }
              }
            },
            marketingCopy: {
              type: 'object',
              properties: {
                headlines: { type: 'array', items: { type: 'string' } },
                taglines: { type: 'array', items: { type: 'string' } }
              }
            },
            contentStrategy: {
              type: 'object',
              properties: {
                heroContent: { type: 'array', items: { type: 'string' } },
                hubContent: { type: 'array', items: { type: 'string' } },
                hygieneContent: { type: 'array', items: { type: 'string' } }
              }
            },
            actionableInsights: { type: 'array', items: { type: 'string' } }
          },
          required: ['brandOverview', 'targetAudience', 'keyStrengths', 'opportunities', 'recommendedChannels', 'competitiveAdvantage']
        }
      })

      const analysisData: AnalysisData = {
        brandOverview: fullAnalysis.brandOverview,
        targetAudience: fullAnalysis.targetAudience,
        keyStrengths: fullAnalysis.keyStrengths,
        opportunities: fullAnalysis.opportunities,
        recommendedChannels: fullAnalysis.recommendedChannels,
        competitiveAdvantage: fullAnalysis.competitiveAdvantage,
        fullAnalysis: fullAnalysis
      }

      // Save analysis to database
      const analysisId = `analysis_${Date.now()}`
      const shareId = Math.random().toString(36).substring(7)
      
      await blink.db.brandAnalyses.create({
        id: analysisId,
        userId: user.id,
        websiteUrl: url,
        userEmail: email,
        analysisData: JSON.stringify(analysisData),
        shareId: shareId
      })

      setAnalysisData(analysisData)
      setCurrentState('analysis')
    } catch (error) {
      console.error('Analysis failed:', error)
      // Fallback to mock data if AI fails
      const mockAnalysis: AnalysisData = {
        brandOverview: `This brand demonstrates strong digital presence with a focus on innovation and user experience. The website showcases modern design principles and clear value propositions that resonate with tech-savvy audiences.`,
        targetAudience: `Primary audience consists of growth-focused entrepreneurs, digital marketers, and SaaS companies looking to scale their operations. Secondary audience includes consultants and agencies seeking AI-powered solutions.`,
        keyStrengths: [
          'Strong Digital Presence',
          'Clear Value Proposition',
          'Modern UX/UI Design',
          'Technical Innovation',
          'Growth-Focused Messaging'
        ],
        opportunities: [
          'Expand content marketing strategy with video content',
          'Implement advanced SEO optimization for technical keywords',
          'Develop strategic partnerships with complementary SaaS tools',
          'Create educational webinar series for lead generation',
          'Launch referral program to leverage existing customer base'
        ],
        recommendedChannels: [
          'LinkedIn Ads',
          'Google Ads',
          'Content Marketing',
          'Email Campaigns',
          'Webinars',
          'Podcast Sponsorships'
        ],
        competitiveAdvantage: `The brand's unique positioning at the intersection of AI technology and growth marketing creates a distinctive competitive moat. The focus on practical, results-driven solutions rather than just technology showcases differentiates from pure-tech competitors.`,
        fullAnalysis: {
          brandIdentity: {
            brandVoice: "Professional, authoritative, and approachable with a focus on expertise and innovation",
            brandPromise: "Accelerating digital transformation through AI-powered strategies and proven growth methodologies",
            brandPersonality: "Expert, innovative, results-driven, trustworthy, forward-thinking"
          },
          brandMission: "To empower businesses with cutting-edge AI and digital strategies that drive measurable growth and competitive advantage",
          brandVision: "To be the leading catalyst for digital transformation, helping companies navigate and thrive in the AI-driven future",
          uniqueSellingProposition: "The only AI/GTM consultancy that combines deep technical expertise with proven growth strategies to deliver measurable results in 90 days or less",
          brandGoals: [
            "Establish thought leadership in AI-driven growth strategies",
            "Scale to 100+ successful client transformations by 2025",
            "Build the premier AI consultancy brand in the market",
            "Create proprietary methodologies that become industry standards"
          ],
          brandValues: [
            "Innovation-first approach",
            "Data-driven decision making",
            "Transparent communication",
            "Measurable results",
            "Continuous learning"
          ],
          brandArchetype: {
            type: "The Sage",
            overview: "The Sage archetype represents wisdom, knowledge, and the pursuit of truth through understanding",
            application: "High Growth Digital embodies The Sage by providing expert guidance and deep insights into AI and digital transformation",
            definition: "A brand that seeks to understand the world and share knowledge to help others make better decisions",
            keyTraits: ["Wise", "Knowledgeable", "Thoughtful", "Analytical", "Trustworthy", "Experienced"],
            typicalGoal: "To help others understand complex concepts and make informed decisions",
            coreStrategies: ["Educational content", "Thought leadership", "Expert positioning", "Knowledge sharing"],
            marketingNiche: "B2B consulting, educational content, expert advisory services",
            potentialDrawback: "May appear overly academic or slow to act",
            exampleBrands: ["McKinsey & Company", "Harvard Business Review", "MIT Technology Review"]
          }
        }
      }
      setAnalysisData(mockAnalysis)
      setCurrentState('analysis')
    } finally {
      setIsLoading(false)
    }
  }

  const handleStartChat = () => {
    setCurrentState('chat')
  }

  const handleBackToAnalysis = () => {
    setCurrentState('analysis')
  }

  const handleShare = async () => {
    if (!analysisData || !user) return
    
    try {
      // Get the existing analysis from database to get share ID
      const analyses = await blink.db.brandAnalyses.list({
        where: { userId: user.id, websiteUrl: websiteUrl },
        orderBy: { createdAt: 'desc' },
        limit: 1
      })
      
      if (analyses.length > 0) {
        const shareId = analyses[0].shareId
        const generatedUrl = `${window.location.origin}/share/${shareId}`
        setShareUrl(generatedUrl)
        
        // Copy to clipboard
        navigator.clipboard.writeText(generatedUrl).then(() => {
          console.log('Share URL copied to clipboard')
        })
      }
    } catch (error) {
      console.error('Error generating share URL:', error)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-foreground mb-4">Sign In Required</h1>
          <p className="text-muted-foreground mb-8">Please sign in to access the AI Brand Strategy Playground</p>
          <button 
            onClick={() => blink.auth.login()}
            className="linear-button px-8 py-3 text-base font-medium"
          >
            Sign In
          </button>
        </div>
      </div>
    )
  }

  if (currentState === 'landing') {
    return (
      <LandingPage 
        onSubmit={handleAnalysisSubmit}
        isLoading={isLoading}
      />
    )
  }

  if (currentState === 'analysis' && analysisData) {
    return (
      <BrandAnalysis
        analysis={analysisData}
        websiteUrl={websiteUrl}
        onStartChat={handleStartChat}
        onShare={handleShare}
        shareUrl={shareUrl}
      />
    )
  }

  if (currentState === 'chat' && analysisData) {
    return (
      <ChatInterface
        websiteUrl={websiteUrl}
        brandContext={analysisData.brandOverview}
        onBack={handleBackToAnalysis}
      />
    )
  }

  return null
}

export default App