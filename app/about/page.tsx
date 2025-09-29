import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Zap, Globe, Lightbulb, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="container mx-auto py-24 px-6 max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-3 w-3 mr-1" />
              Competition Project
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
              About <span className="gradient-text">SwastAI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              An innovative AI-powered solution designed to address India's most pressing health challenges through
              early detection and accessible care.
            </p>
          </div>

          <Card className="mb-12 animate-fade-in-up border-primary/20" style={{ animationDelay: "0.1s" }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Project Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                SwastAI is our proposed solution to democratize healthcare in India by leveraging artificial
                intelligence for early detection of nutrition deficiencies and lifestyle diseases. This prototype
                demonstrates how technology can bridge the gap between healthcare accessibility and affordability.
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                <p className="text-sm text-muted-foreground italic">
                  "Swast" means healthy in Sanskrit - our mission is to make health accessible to all Indians through AI
                  innovation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle className="text-2xl">The Challenge We're Addressing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-7">
                India faces a complex health crisis with over 195 million people suffering from undernutrition, 70% of
                the population experiencing vitamin deficiencies, and 77 million diabetes cases. Traditional healthcare
                systems struggle to provide early detection and affordable care to all segments of society.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-lg border border-destructive/20">
                  <div className="text-3xl font-bold text-destructive mb-1">195M+</div>
                  <div className="text-sm text-muted-foreground">Undernutrition Cases</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-chart-4/10 to-chart-4/5 rounded-lg border border-chart-4/20">
                  <div className="text-3xl font-bold text-chart-4 mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Vitamin Deficiencies</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-chart-5/10 to-chart-5/5 rounded-lg border border-chart-5/20">
                  <div className="text-3xl font-bold text-chart-5 mb-1">77M+</div>
                  <div className="text-sm text-muted-foreground">Diabetes Cases</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why SwastAI */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Our Solution Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-hover animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Affordable Healthcare</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Making advanced health analysis accessible to everyone, regardless of economic background or
                    geographic location through AI-powered diagnostics.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>Universal Accessibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Designed for India's diverse population with multilingual support and culturally appropriate health
                    recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover animate-slide-in-left" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle>AI-Driven Precision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced machine learning algorithms provide accurate health predictions and personalized
                    recommendations based on individual data.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Holistic Care</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive approach covering nutrition, lifestyle diseases, and mental health for complete
                    wellness management.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mission Statement */}
          <Card
            className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-primary/20 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl text-center">Project Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg leading-8 text-muted-foreground">
                To demonstrate how AI can democratize healthcare by providing early detection and prevention tools that
                make quality health analysis accessible to every individual, regardless of their socioeconomic status or
                location.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
