import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { ArrowRight, Brain, Heart, Shield, Users, Sparkles, Zap, Target } from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                AI-Powered Health Revolution
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl flex flex-col items-center gap-4">
                <Image src="/swastai-logo.png" alt="SwastAI" width={400} height={100} className="mx-auto" priority />
                <span>
                  Your <span className="gradient-text">AI Health Assistant</span>
                </span>
              </h1>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
                Early detection of nutrition deficiencies & lifestyle diseases, powered by AI. Making healthcare
                accessible and affordable for everyone in India.
              </p>
            </div>
            <div
              className="animate-fade-in-up flex items-center justify-center gap-x-6 mt-10"
              style={{ animationDelay: "0.4s" }}
            >
              <Button
                asChild
                size="lg"
                className="text-base bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105 group"
              >
                <Link href="/prototype">
                  Try Prototype
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="text-base bg-transparent hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">The Problem We're Solving</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Our solution addresses critical health challenges in India
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-6 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-4">
              <div
                className="flex flex-col bg-card p-8 rounded-xl shadow-lg card-hover animate-slide-in-left border border-border/50"
                style={{ animationDelay: "0.1s" }}
              >
                <dt className="text-sm font-semibold leading-6 text-muted-foreground mb-2">Undernutrition Cases</dt>
                <dd className="text-3xl font-semibold tracking-tight text-primary flex items-center justify-center gap-2">
                  <Target className="h-6 w-6" />
                  195M+
                </dd>
                <p className="text-xs text-muted-foreground mt-2">in India annually</p>
              </div>
              <div
                className="flex flex-col bg-card p-8 rounded-xl shadow-lg card-hover animate-slide-in-left border border-border/50"
                style={{ animationDelay: "0.2s" }}
              >
                <dt className="text-sm font-semibold leading-6 text-muted-foreground mb-2">Vitamin Deficiencies</dt>
                <dd className="text-3xl font-semibold tracking-tight text-chart-5 flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6" />
                  70%
                </dd>
                <p className="text-xs text-muted-foreground mt-2">of population affected</p>
              </div>
              <div
                className="flex flex-col bg-card p-8 rounded-xl shadow-lg card-hover animate-slide-in-right border border-border/50"
                style={{ animationDelay: "0.3s" }}
              >
                <dt className="text-sm font-semibold leading-6 text-muted-foreground mb-2">Diabetes Cases</dt>
                <dd className="text-3xl font-semibold tracking-tight text-chart-5 flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6" />
                  77M+
                </dd>
                <p className="text-xs text-muted-foreground mt-2">and growing rapidly</p>
              </div>
              <div
                className="flex flex-col bg-card p-8 rounded-xl shadow-lg card-hover animate-slide-in-right border border-border/50"
                style={{ animationDelay: "0.4s" }}
              >
                <dt className="text-sm font-semibold leading-6 text-muted-foreground mb-2">Our Detection Rate</dt>
                <dd className="text-3xl font-semibold tracking-tight text-primary flex items-center justify-center gap-2">
                  <Sparkles className="h-6 w-6" />
                  95%
                </dd>
                <p className="text-xs text-muted-foreground mt-2">accuracy in testing</p>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-24 sm:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance flex flex-col items-center gap-3">
              <span>Why Choose</span>
              <Image src="/swastai-logo.png" alt="SwastAI" width={250} height={60} />
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Advanced AI technology meets accessible healthcare
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 mx-auto">
              <div
                className="flex flex-col bg-card p-6 rounded-xl shadow-lg card-hover animate-slide-in-left border border-border/50"
                style={{ animationDelay: "0.1s" }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  AI-Driven Analysis
                </dt>
                <dd className="text-base leading-7 text-muted-foreground">
                  Advanced machine learning algorithms analyze your health data for accurate predictions
                </dd>
              </div>
              <div
                className="flex flex-col bg-card p-6 rounded-xl shadow-lg card-hover animate-slide-in-left border border-border/50"
                style={{ animationDelay: "0.2s" }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-chart-5" />
                  </div>
                  Affordable Care
                </dt>
                <dd className="text-base leading-7 text-muted-foreground">
                  Making healthcare accessible to everyone, regardless of economic background
                </dd>
              </div>
              <div
                className="flex flex-col bg-card p-6 rounded-xl shadow-lg card-hover animate-slide-in-right border border-border/50"
                style={{ animationDelay: "0.3s" }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-accent" />
                  </div>
                  Holistic Approach
                </dt>
                <dd className="text-base leading-7 text-muted-foreground">
                  Comprehensive health analysis covering nutrition, lifestyle, and mental wellness
                </dd>
              </div>
              <div
                className="flex flex-col bg-card p-6 rounded-xl shadow-lg card-hover animate-slide-in-right border border-border/50"
                style={{ animationDelay: "0.4s" }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  Community Impact
                </dt>
                <dd className="text-base leading-7 text-muted-foreground">
                  Designed specifically for India's diverse population and health challenges
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-muted/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
              Ready to Transform Your Health?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Experience the future of healthcare with our AI-powered nutrition and disease analyzer
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 hover:scale-105"
              >
                <Link href="/prototype">Try Prototype Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:bg-primary/5 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Link href="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card">
        <div className="container mx-auto py-8 px-6 max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Image src="/swastai-logo.png" alt="SwastAI" width={150} height={40} />
            <p className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap justify-center">
              © 2025 <Image src="/swastai-logo.png" alt="SwastAI" width={100} height={25} className="inline-block" />. A
              competition project for healthcare innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
