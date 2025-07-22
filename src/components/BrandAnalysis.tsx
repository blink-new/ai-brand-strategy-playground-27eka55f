import React from 'react';
import { LinearCard } from './LinearCard';
import { LinearButton } from './LinearButton';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Share2, Download, MessageSquare, ExternalLink } from 'lucide-react';

interface BrandAnalysisProps {
  analysis: {
    brandOverview: string;
    targetAudience: string;
    keyStrengths: string[];
    opportunities: string[];
    recommendedChannels: string[];
    competitiveAdvantage: string;
    fullAnalysis?: any;
  };
  websiteUrl: string;
  onStartChat: () => void;
  onShare: () => void;
  shareUrl: string;
}

export const BrandAnalysis: React.FC<BrandAnalysisProps> = ({ analysis, websiteUrl, onStartChat, onShare, shareUrl }) => {
  // Use AI-generated data if available, otherwise fall back to mock data
  // Add defensive checks to ensure all required properties exist
  const analysisData = analysis.fullAnalysis || {
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
    },
    brandNarrative: {
      positioningStatement: "For ambitious businesses seeking digital transformation, High Growth Digital is the AI/GTM consultancy that delivers measurable growth through proven methodologies and cutting-edge technology",
      whatWeDo: "We provide AI-powered growth strategies, digital transformation consulting, and go-to-market optimization",
      howWeDoIt: "Through data-driven analysis, proprietary methodologies, and hands-on implementation support",
      whyWeDoIt: "To democratize access to world-class growth strategies and help businesses thrive in the digital age"
    },
    visualIdentity: {
      typography: "Modern sans-serif fonts (Inter, Helvetica) for clarity and professionalism",
      colorPalette: "Deep blues and teals with accent colors in bright orange or green for energy and trust"
    },
    swotAnalysis: {
      strengths: [
        "Deep expertise in AI and digital transformation",
        "Proven track record with measurable results",
        "Strong personal brand and thought leadership",
        "Innovative methodologies and approaches"
      ],
      weaknesses: [
        "Limited brand recognition compared to established consultancies",
        "Smaller team size may limit scalability",
        "Newer market presence requires more trust-building"
      ],
      opportunities: [
        "Rapidly growing AI adoption market",
        "Increasing demand for digital transformation",
        "Opportunity to establish category leadership",
        "Potential for strategic partnerships"
      ],
      threats: [
        "Large consulting firms entering AI space",
        "Market saturation with AI consultants",
        "Economic downturns affecting consulting budgets",
        "Rapid technology changes requiring constant adaptation"
      ],
      overallAssessment: "Strong position in a growing market with clear differentiation, but needs focused brand building and market education"
    },
    competitorAnalysis: {
      summary: "The competitive landscape includes large consulting firms (McKinsey, BCG), specialized AI consultancies, and independent experts. Key differentiator is the combination of AI expertise with practical GTM execution."
    },
    actionableInsights: [
      "Develop a content marketing strategy showcasing AI transformation case studies",
      "Create proprietary frameworks and methodologies to establish thought leadership",
      "Build strategic partnerships with technology vendors",
      "Invest in personal branding and speaking opportunities",
      "Develop scalable service offerings and training programs"
    ],
    landingPageAnalysis: {
      overallAssessment: "Professional and credible but could benefit from stronger value proposition messaging and social proof",
      recommendations: [
        "Add more specific case studies and results",
        "Include client testimonials and logos",
        "Strengthen the hero section with clearer value proposition",
        "Add trust signals and certifications"
      ],
      strengths: [
        "Clean, professional design",
        "Clear service offerings",
        "Good use of white space",
        "Mobile responsive"
      ],
      weaknesses: [
        "Limited social proof",
        "Generic messaging in places",
        "Could use stronger calls-to-action",
        "Missing urgency or scarcity elements"
      ]
    },
    seoAnalysis: "Good technical foundation but needs more content marketing and keyword optimization for AI and digital transformation terms",
    idealCustomerProfile: {
      title: "The Ambitious HealthTech Leader",
      demographics: {
        title: "VP/Director of Growth, Marketing, or Digital Transformation",
        companySize: "50-500 employees",
        industry: "HealthTech, SaaS, B2B Technology",
        revenue: "$10M-$100M ARR",
        location: "North America, Europe"
      },
      corePainPoints: [
        "Struggling to scale growth beyond current plateau",
        "Unclear how to leverage AI for competitive advantage",
        "Difficulty measuring ROI on digital initiatives",
        "Need to modernize go-to-market strategies"
      ],
      goalsAspirations: [
        "Achieve 40%+ year-over-year growth",
        "Implement AI-driven growth strategies",
        "Build scalable, predictable revenue systems",
        "Establish market leadership position"
      ],
      decisionMakingStyle: "Data-driven, collaborative, seeks expert validation before major investments",
      psychographics: [
        "Innovation-focused",
        "Results-oriented",
        "Time-conscious",
        "Quality-focused",
        "Growth-minded"
      ],
      preferredChannels: [
        "LinkedIn",
        "Industry conferences",
        "Peer recommendations",
        "Thought leadership content",
        "Webinars and workshops"
      ]
    },
    marketingCopy: {
      headlines: [
        "Transform Your Business with AI-Powered Growth Strategies",
        "From Digital Transformation to Market Domination",
        "The AI Advantage Your Competitors Don't Have",
        "Proven Growth Strategies for the AI Era"
      ],
      taglines: [
        "Growth. Accelerated.",
        "AI-Powered. Results-Driven.",
        "Your Digital Transformation Partner",
        "Where Strategy Meets Innovation"
      ]
    },
    adCopyVariations: {
      linkedinSponsored: {
        headline: "Ready to 10x Your Growth with AI?",
        body: "Join 100+ companies using our proven AI-powered strategies to accelerate growth. Get your free strategy assessment.",
        cta: "Get Free Assessment"
      },
      facebookInstagram: {
        headline: "The Secret to Sustainable Growth",
        body: "Discover how leading companies are using AI to transform their growth strategies. Download our free playbook.",
        cta: "Download Now"
      },
      googleSearch: {
        headline1: "AI Growth Strategies | Proven Results",
        headline2: "Transform Your Business Today",
        description: "Expert AI & digital transformation consulting. Measurable results in 90 days. Free consultation available.",
        cta: "Get Started"
      }
    },
    contentStrategy: {
      heroContent: [
        "Comprehensive AI transformation case studies",
        "Industry-specific growth playbooks",
        "Viral thought leadership pieces on AI trends"
      ],
      hubContent: [
        "Weekly AI and growth strategy insights",
        "How-to guides for digital transformation",
        "Industry analysis and market reports"
      ],
      hygieneContent: [
        "Service pages and company information",
        "FAQ and support documentation",
        "Basic educational content on AI and growth"
      ]
    },
    marketingCampaignIdeas: {
      awareness: [
        "AI Transformation Summit virtual event",
        "Thought leadership content series on LinkedIn",
        "Podcast sponsorships in business and tech shows"
      ],
      interest: [
        "Free AI readiness assessment tool",
        "Growth strategy webinar series",
        "Industry-specific case study campaigns"
      ],
      desire: [
        "Limited-time strategy consultation offers",
        "Success story video testimonials",
        "ROI calculator for AI implementations"
      ],
      action: [
        "Free 30-minute strategy session",
        "Pilot program with guaranteed results",
        "Exclusive workshop for qualified prospects"
      ]
    },
    brandStrategy: "Position as the premier AI/GTM consultancy through thought leadership, proven methodologies, and measurable results. Focus on building trust through education and demonstrating expertise through case studies and frameworks."
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <ExternalLink className="w-4 h-4" />
            Brand Analysis Complete
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Brand Strategy Analysis
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive brand analysis for <span className="text-primary font-semibold">{websiteUrl}</span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <LinearButton variant="outline" onClick={onShare} className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              {shareUrl ? 'Link Copied!' : 'Share Analysis'}
            </LinearButton>
            <LinearButton variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </LinearButton>
            <LinearButton onClick={onStartChat} className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Chat with AI Consultant
            </LinearButton>
          </div>
        </div>

        {/* Analysis Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Brand Identity */}
          <LinearCard className="space-y-4">
            <div className="border-b border-border pb-3 mb-4">
              <h3 className="text-lg font-semibold text-foreground">Brand Identity</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Brand Voice</h4>
                <p className="text-sm text-muted-foreground">{analysisData.brandIdentity?.brandVoice || 'Not available'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Brand Promise</h4>
                <p className="text-sm text-muted-foreground">{analysisData.brandIdentity?.brandPromise || 'Not available'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Brand Personality</h4>
                <p className="text-sm text-muted-foreground">{analysisData.brandIdentity?.brandPersonality || 'Not available'}</p>
              </div>
            </div>
          </LinearCard>

          {/* Brand Mission */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{analysisData.brandMission || 'Brand mission not available'}</p>
            </CardContent>
          </Card>

          {/* Brand Vision */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{analysisData.brandVision || 'Brand vision not available'}</p>
            </CardContent>
          </Card>

          {/* Unique Selling Proposition */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Unique Selling Proposition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{analysisData.uniqueSellingProposition || 'USP not available'}</p>
            </CardContent>
          </Card>

          {/* Brand Goals */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(analysisData.brandGoals || []).map((goal, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent">•</span>
                    {goal}
                  </li>
                ))}
                {(!analysisData.brandGoals || analysisData.brandGoals.length === 0) && (
                  <li className="text-sm text-muted-foreground">No brand goals available</li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Brand Values */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {(analysisData.brandValues || []).map((value, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {value}
                  </Badge>
                ))}
                {(!analysisData.brandValues || analysisData.brandValues.length === 0) && (
                  <span className="text-sm text-muted-foreground">No brand values available</span>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Brand Archetype Profile */}
          <Card className="tetris-block lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Archetype Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-accent mb-2">The Sage Overview</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.overview || 'Brand archetype analysis not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Application to Your Company</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.application || 'Application analysis not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">General Definition</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.definition || 'Definition not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Key Traits</h4>
                  <div className="flex flex-wrap gap-1">
                    {(analysisData.brandArchetype?.keyTraits || []).map((trait, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                    {(!analysisData.brandArchetype?.keyTraits || analysisData.brandArchetype.keyTraits.length === 0) && (
                      <span className="text-sm text-muted-foreground">No traits available</span>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Typical Goal</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.typicalGoal || 'Goal not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Core Strategies</h4>
                  <ul className="space-y-1">
                    {(analysisData.brandArchetype?.coreStrategies || []).map((strategy, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent">•</span>
                        {strategy}
                      </li>
                    ))}
                    {(!analysisData.brandArchetype?.coreStrategies || analysisData.brandArchetype.coreStrategies.length === 0) && (
                      <li className="text-sm text-muted-foreground">No strategies available</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Marketing Niche</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.marketingNiche || 'Marketing niche not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Potential Drawback</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandArchetype?.potentialDrawback || 'Drawback analysis not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Example Brands</h4>
                  <div className="flex flex-wrap gap-1">
                    {(analysisData.brandArchetype?.exampleBrands || []).map((brand, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {brand}
                      </Badge>
                    ))}
                    {(!analysisData.brandArchetype?.exampleBrands || analysisData.brandArchetype.exampleBrands.length === 0) && (
                      <span className="text-sm text-muted-foreground">No example brands available</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Narrative */}
          <Card className="tetris-block lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Narrative</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Brand Positioning Statement</h4>
                <p className="text-sm text-muted-foreground">{analysisData.brandNarrative?.positioningStatement || 'Brand positioning statement not available'}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-accent mb-2">What We Do</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandNarrative?.whatWeDo || 'What we do description not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">How We Do It</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandNarrative?.howWeDoIt || 'How we do it description not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-2">Why We Do It</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.brandNarrative?.whyWeDoIt || 'Why we do it description not available'}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visual Identity */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Visual Identity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Typography</h4>
                <p className="text-sm text-muted-foreground">{analysisData.visualIdentity?.typography || 'Typography guidelines not available'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Color Palette</h4>
                <p className="text-sm text-muted-foreground">{analysisData.visualIdentity?.colorPalette || 'Color palette guidelines not available'}</p>
              </div>
            </CardContent>
          </Card>

          {/* SWOT Analysis */}
          <Card className="tetris-block lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="font-mono text-primary">SWOT Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-accent mb-3">Strengths</h4>
                  <ul className="space-y-2">
                    {(analysisData.swotAnalysis?.strengths || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-400">+</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.swotAnalysis?.strengths || analysisData.swotAnalysis.strengths.length === 0) && (
                      <li className="text-sm text-muted-foreground">No strengths analysis available</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Weaknesses</h4>
                  <ul className="space-y-2">
                    {(analysisData.swotAnalysis?.weaknesses || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-400">-</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.swotAnalysis?.weaknesses || analysisData.swotAnalysis.weaknesses.length === 0) && (
                      <li className="text-sm text-muted-foreground">No weaknesses analysis available</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Opportunities</h4>
                  <ul className="space-y-2">
                    {(analysisData.swotAnalysis?.opportunities || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-blue-400">○</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.swotAnalysis?.opportunities || analysisData.swotAnalysis.opportunities.length === 0) && (
                      <li className="text-sm text-muted-foreground">No opportunities analysis available</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Threats</h4>
                  <ul className="space-y-2">
                    {(analysisData.swotAnalysis?.threats || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-yellow-400">!</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.swotAnalysis?.threats || analysisData.swotAnalysis.threats.length === 0) && (
                      <li className="text-sm text-muted-foreground">No threats analysis available</li>
                    )}
                  </ul>
                </div>
              </div>
              <Separator className="my-4" />
              <div>
                <h4 className="font-semibold text-accent mb-2">Overall Assessment</h4>
                <p className="text-sm text-muted-foreground">{analysisData.swotAnalysis?.overallAssessment || 'Overall SWOT assessment not available'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Competitor Analysis */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Competitor Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold text-accent mb-2">Competitive Landscape Summary</h4>
              <p className="text-sm text-muted-foreground">{analysisData.competitorAnalysis?.summary || 'Competitor analysis not available'}</p>
            </CardContent>
          </Card>

          {/* Actionable Insights */}
          <Card className="tetris-block lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Actionable Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {(analysisData.actionableInsights || []).map((insight, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent font-bold">{index + 1}.</span>
                    {insight}
                  </li>
                ))}
                {(!analysisData.actionableInsights || analysisData.actionableInsights.length === 0) && (
                  <li className="text-sm text-muted-foreground">No actionable insights available</li>
                )}
              </ul>
            </CardContent>
          </Card>

          {/* Landing Page Analysis */}
          <Card className="tetris-block lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Landing Page Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-2">Overall Assessment</h4>
                <p className="text-sm text-muted-foreground">{analysisData.landingPageAnalysis?.overallAssessment || 'Landing page assessment not available'}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Strengths</h4>
                  <ul className="space-y-1">
                    {(analysisData.landingPageAnalysis?.strengths || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-400">+</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.landingPageAnalysis?.strengths || analysisData.landingPageAnalysis.strengths.length === 0) && (
                      <li className="text-sm text-muted-foreground">No strengths identified</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Weaknesses</h4>
                  <ul className="space-y-1">
                    {(analysisData.landingPageAnalysis?.weaknesses || []).map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-400">-</span>
                        {item}
                      </li>
                    ))}
                    {(!analysisData.landingPageAnalysis?.weaknesses || analysisData.landingPageAnalysis.weaknesses.length === 0) && (
                      <li className="text-sm text-muted-foreground">No weaknesses identified</li>
                    )}
                  </ul>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-2">Recommendations</h4>
                <ul className="space-y-1">
                  {(analysisData.landingPageAnalysis?.recommendations || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent">→</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.landingPageAnalysis?.recommendations || analysisData.landingPageAnalysis.recommendations.length === 0) && (
                    <li className="text-sm text-muted-foreground">No recommendations available</li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* SEO Analysis */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">SEO Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{analysisData.seoAnalysis}</p>
            </CardContent>
          </Card>

          {/* Ideal Customer Profile */}
          <Card className="tetris-block lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Ideal Customer Profile (ICP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-bold text-accent mb-2">{analysisData.idealCustomerProfile?.title || 'Ideal Customer Profile'}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-accent mb-3">Demographics</h4>
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-medium">Title:</span> {analysisData.idealCustomerProfile?.demographics?.title || 'Not available'}</p>
                    <p className="text-sm"><span className="font-medium">Company Size:</span> {analysisData.idealCustomerProfile?.demographics?.companySize || 'Not available'}</p>
                    <p className="text-sm"><span className="font-medium">Industry:</span> {analysisData.idealCustomerProfile?.demographics?.industry || 'Not available'}</p>
                    <p className="text-sm"><span className="font-medium">Revenue:</span> {analysisData.idealCustomerProfile?.demographics?.revenue || 'Not available'}</p>
                    <p className="text-sm"><span className="font-medium">Location:</span> {analysisData.idealCustomerProfile?.demographics?.location || 'Not available'}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Core Pain Points</h4>
                  <ul className="space-y-1">
                    {(analysisData.idealCustomerProfile?.corePainPoints || []).map((point, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-400">•</span>
                        {point}
                      </li>
                    ))}
                    {(!analysisData.idealCustomerProfile?.corePainPoints || analysisData.idealCustomerProfile.corePainPoints.length === 0) && (
                      <li className="text-sm text-muted-foreground">No pain points identified</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Goals & Aspirations</h4>
                  <ul className="space-y-1">
                    {(analysisData.idealCustomerProfile?.goalsAspirations || []).map((goal, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        {goal}
                      </li>
                    ))}
                    {(!analysisData.idealCustomerProfile?.goalsAspirations || analysisData.idealCustomerProfile.goalsAspirations.length === 0) && (
                      <li className="text-sm text-muted-foreground">No goals identified</li>
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Decision Making Style</h4>
                  <p className="text-sm text-muted-foreground">{analysisData.idealCustomerProfile?.decisionMakingStyle || 'Decision making style not available'}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Psychographics</h4>
                  <div className="flex flex-wrap gap-1">
                    {(analysisData.idealCustomerProfile?.psychographics || []).map((trait, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                    {(!analysisData.idealCustomerProfile?.psychographics || analysisData.idealCustomerProfile.psychographics.length === 0) && (
                      <span className="text-sm text-muted-foreground">No psychographics available</span>
                    )}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-accent mb-3">Preferred Communication Channels</h4>
                  <div className="flex flex-wrap gap-1">
                    {(analysisData.idealCustomerProfile?.preferredChannels || []).map((channel, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {channel}
                      </Badge>
                    ))}
                    {(!analysisData.idealCustomerProfile?.preferredChannels || analysisData.idealCustomerProfile.preferredChannels.length === 0) && (
                      <span className="text-sm text-muted-foreground">No preferred channels available</span>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Copy */}
          <Card className="tetris-block lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Marketing Copy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-accent mb-3">Headlines</h4>
                <ul className="space-y-2">
                  {(analysisData.marketingCopy?.headlines || []).map((headline, index) => (
                    <li key={index} className="text-sm text-muted-foreground p-2 bg-muted rounded border-l-2 border-accent">
                      "{headline}"
                    </li>
                  ))}
                  {(!analysisData.marketingCopy?.headlines || analysisData.marketingCopy.headlines.length === 0) && (
                    <li className="text-sm text-muted-foreground">No headlines available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-accent mb-3">Taglines</h4>
                <div className="flex flex-wrap gap-2">
                  {(analysisData.marketingCopy?.taglines || []).map((tagline, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tagline}
                    </Badge>
                  ))}
                  {(!analysisData.marketingCopy?.taglines || analysisData.marketingCopy.taglines.length === 0) && (
                    <span className="text-sm text-muted-foreground">No taglines available</span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ad Copy Variations */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Ad Copy Variations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">LinkedIn Sponsored Content</h4>
                <div className="p-3 bg-muted rounded space-y-1">
                  <p className="font-medium text-sm">{analysisData.adCopyVariations?.linkedinSponsored?.headline || 'LinkedIn headline not available'}</p>
                  <p className="text-sm text-muted-foreground">{analysisData.adCopyVariations?.linkedinSponsored?.body || 'LinkedIn body not available'}</p>
                  <Badge variant="outline" className="text-xs">{analysisData.adCopyVariations?.linkedinSponsored?.cta || 'CTA not available'}</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-pink-400 mb-2">Facebook/Instagram Feed Ad</h4>
                <div className="p-3 bg-muted rounded space-y-1">
                  <p className="font-medium text-sm">{analysisData.adCopyVariations?.facebookInstagram?.headline || 'Facebook headline not available'}</p>
                  <p className="text-sm text-muted-foreground">{analysisData.adCopyVariations?.facebookInstagram?.body || 'Facebook body not available'}</p>
                  <Badge variant="outline" className="text-xs">{analysisData.adCopyVariations?.facebookInstagram?.cta || 'CTA not available'}</Badge>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Google Search Ad (RSA)</h4>
                <div className="p-3 bg-muted rounded space-y-1">
                  <p className="font-medium text-sm">{analysisData.adCopyVariations?.googleSearch?.headline1 || 'Headline 1'} | {analysisData.adCopyVariations?.googleSearch?.headline2 || 'Headline 2'}</p>
                  <p className="text-sm text-muted-foreground">{analysisData.adCopyVariations?.googleSearch?.description || 'Google ad description not available'}</p>
                  <Badge variant="outline" className="text-xs">{analysisData.adCopyVariations?.googleSearch?.cta || 'CTA not available'}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Content Strategy */}
          <Card className="tetris-block lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Content Strategy</CardTitle>
              <p className="text-sm text-muted-foreground">The Hero-Hub-Hygiene Framework</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Hero Content</h4>
                <ul className="space-y-1">
                  {(analysisData.contentStrategy?.heroContent || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-yellow-400">★</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.contentStrategy?.heroContent || analysisData.contentStrategy.heroContent.length === 0) && (
                    <li className="text-sm text-muted-foreground">No hero content strategy available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Hub Content</h4>
                <ul className="space-y-1">
                  {(analysisData.contentStrategy?.hubContent || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-400">●</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.contentStrategy?.hubContent || analysisData.contentStrategy.hubContent.length === 0) && (
                    <li className="text-sm text-muted-foreground">No hub content strategy available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-400 mb-2">Hygiene Content</h4>
                <ul className="space-y-1">
                  {(analysisData.contentStrategy?.hygieneContent || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gray-400">○</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.contentStrategy?.hygieneContent || analysisData.contentStrategy.hygieneContent.length === 0) && (
                    <li className="text-sm text-muted-foreground">No hygiene content strategy available</li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Campaign Ideas */}
          <Card className="tetris-block">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Marketing Campaign Ideas</CardTitle>
              <p className="text-sm text-muted-foreground">AIDA Framework</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Awareness Campaigns</h4>
                <ul className="space-y-1">
                  {(analysisData.marketingCampaignIdeas?.awareness || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-red-400">A</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.marketingCampaignIdeas?.awareness || analysisData.marketingCampaignIdeas.awareness.length === 0) && (
                    <li className="text-sm text-muted-foreground">No awareness campaigns available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Interest Campaigns</h4>
                <ul className="space-y-1">
                  {(analysisData.marketingCampaignIdeas?.interest || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-blue-400">I</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.marketingCampaignIdeas?.interest || analysisData.marketingCampaignIdeas.interest.length === 0) && (
                    <li className="text-sm text-muted-foreground">No interest campaigns available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Desire Campaigns</h4>
                <ul className="space-y-1">
                  {(analysisData.marketingCampaignIdeas?.desire || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-yellow-400">D</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.marketingCampaignIdeas?.desire || analysisData.marketingCampaignIdeas.desire.length === 0) && (
                    <li className="text-sm text-muted-foreground">No desire campaigns available</li>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Action Campaigns</h4>
                <ul className="space-y-1">
                  {(analysisData.marketingCampaignIdeas?.action || []).map((item, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-400">A</span>
                      {item}
                    </li>
                  ))}
                  {(!analysisData.marketingCampaignIdeas?.action || analysisData.marketingCampaignIdeas.action.length === 0) && (
                    <li className="text-sm text-muted-foreground">No action campaigns available</li>
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Brand Strategy Summary */}
          <Card className="tetris-block lg:col-span-2 xl:col-span-3">
            <CardHeader>
              <CardTitle className="font-mono text-primary">Brand Strategy for High-Growth Digital</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{analysisData.brandStrategy || 'Brand strategy summary not available'}</p>
            </CardContent>
          </Card>

        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Ready to Dive Deeper?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Chat with our AI consultant to explore specific strategies and get personalized recommendations for your brand
          </p>
          <LinearButton onClick={onStartChat} size="lg" className="subtle-glow">
            <MessageSquare className="w-5 h-5 mr-2" />
            Start AI Consultation
          </LinearButton>
        </div>
      </div>
    </div>
  );
};