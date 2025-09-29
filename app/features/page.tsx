import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Activity, Brain, MessageCircle, Shield, Zap, Heart, Pill, TrendingUp } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="container mx-auto py-24 px-6 max-w-7xl">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              Platform Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              Comprehensive <span className="gradient-text">AI Health Analysis</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              Discover how our advanced AI technology provides accurate health insights and personalized
              recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Nutrition Deficiency Analyzer */}
            <Card className="card-hover animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Core Feature
                  </Badge>
                </div>
                <CardTitle className="text-xl">Nutrition Deficiency Analyzer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Advanced AI detection for critical vitamin and mineral deficiencies affecting millions in India.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Iron Deficiency Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Vitamin A, B12, C, D Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Zinc Deficiency Assessment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disease Predictor */}
            <Card className="card-hover animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Activity className="h-6 w-6 text-secondary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Predictive AI
                  </Badge>
                </div>
                <CardTitle className="text-xl">Disease Risk Predictor</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  Early warning system for lifestyle diseases using advanced pattern recognition.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-destructive rounded-full"></div>
                    <span className="text-sm">Fatty Liver Disease Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-chart-4 rounded-full"></div>
                    <span className="text-sm">Diabetes Prediction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-chart-5 rounded-full"></div>
                    <span className="text-sm">Hypertension Assessment</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Health Chatbot */}
            <Card className="card-hover animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-accent" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    AI Assistant
                  </Badge>
                </div>
                <CardTitle className="text-xl">Intelligent Health Chatbot</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  24/7 AI-powered health guidance for diet, lifestyle, and mental wellness support.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Personalized Diet Plans</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm">Lifestyle Recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Mental Health Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technical Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Technology Stack
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center card-hover animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Machine Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Advanced algorithms trained on diverse health datasets
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover animate-slide-in-left" style={{ animationDelay: "0.6s" }}>
                <CardHeader>
                  <div className="mx-auto p-3 bg-secondary/10 rounded-lg w-fit">
                    <Shield className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-lg">Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">End-to-end encryption and privacy protection</p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover animate-slide-in-right" style={{ animationDelay: "0.7s" }}>
                <CardHeader>
                  <div className="mx-auto p-3 bg-accent/10 rounded-lg w-fit">
                    <Zap className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Real-time Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Instant health insights and recommendations</p>
                </CardContent>
              </Card>

              <Card className="text-center card-hover animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-lg w-fit">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">AI models that improve with every interaction</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <Card
            className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border-primary/20 animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <CardContent className="text-center py-12">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Experience AI-Powered Health Analysis?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Try our prototype and see how SwastAI can help you take control of your health with personalized
                insights and recommendations.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              >
                <Link href="/prototype">Try Prototype Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
