"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, MessageCircle, Activity, Pill, Brain, TrendingUp } from "lucide-react"

export default function PrototypePage() {
  const [currentStep, setCurrentStep] = useState<"form" | "results">("form")
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    dietType: "",
    symptoms: [] as string[],
    lifestyle: [] as string[],
  })

  const symptoms = [
    "Fatigue",
    "Hair Loss",
    "Brittle Nails",
    "Frequent Infections",
    "Poor Night Vision",
    "Muscle Weakness",
    "Joint Pain",
    "Mood Changes",
  ]

  const lifestyleFactors = [
    "Sedentary Lifestyle",
    "Irregular Sleep",
    "High Stress",
    "Smoking",
    "Alcohol Consumption",
    "Limited Sun Exposure",
    "Fast Food Diet",
    "Skipping Meals",
  ]

  const handleSymptomChange = (symptom: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      symptoms: checked ? [...prev.symptoms, symptom] : prev.symptoms.filter((s) => s !== symptom),
    }))
  }

  const handleLifestyleChange = (factor: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      lifestyle: checked ? [...prev.lifestyle, factor] : prev.lifestyle.filter((l) => l !== factor),
    }))
  }

  const handleAnalyze = () => {
    setCurrentStep("results")
  }

  const mockResults = {
    deficiencies: [
      { name: "Iron Deficiency", risk: "High", percentage: 85, color: "text-destructive" },
      { name: "Vitamin D", risk: "Moderate", percentage: 65, color: "text-chart-4" },
      { name: "Vitamin B12", risk: "Low", percentage: 30, color: "text-secondary" },
    ],
    diseases: [
      { name: "Fatty Liver Risk", risk: "Moderate", percentage: 55, color: "text-chart-4" },
      { name: "Diabetes Risk", risk: "Low", percentage: 25, color: "text-secondary" },
      { name: "Hypertension Risk", risk: "Low", percentage: 20, color: "text-secondary" },
    ],
  }

  if (currentStep === "results") {
    return (
      <div className="min-h-screen gradient-bg">
        <Navigation />

        <div className="container mx-auto py-12 px-6 max-w-7xl">
          <div className="mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                Analysis Complete
              </Badge>
              <h1 className="text-3xl font-bold">Your Health Analysis Results</h1>
              <p className="text-muted-foreground mt-2">AI-powered insights based on your profile</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Results Panel */}
              <div className="lg:col-span-2 space-y-6">
                {/* Nutrition Deficiencies */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Pill className="h-5 w-5 text-primary" />
                      <CardTitle>Nutrition Deficiency Analysis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockResults.deficiencies.map((deficiency, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{deficiency.name}</span>
                          <Badge
                            variant={
                              deficiency.risk === "High"
                                ? "destructive"
                                : deficiency.risk === "Moderate"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {deficiency.risk} Risk
                          </Badge>
                        </div>
                        <Progress value={deficiency.percentage} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          {deficiency.percentage}% likelihood based on symptoms and lifestyle
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Disease Risk */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-5 w-5 text-secondary" />
                      <CardTitle>Disease Risk Assessment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockResults.diseases.map((disease, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{disease.name}</span>
                          <Badge
                            variant={
                              disease.risk === "High"
                                ? "destructive"
                                : disease.risk === "Moderate"
                                  ? "default"
                                  : "secondary"
                            }
                          >
                            {disease.risk} Risk
                          </Badge>
                        </div>
                        <Progress value={disease.percentage} className="h-2" />
                        <p className="text-sm text-muted-foreground">
                          {disease.percentage}% risk based on current lifestyle patterns
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <CardTitle>Personalized Recommendations</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-primary mb-2">Dietary Changes</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Increase iron-rich foods (spinach, lentils)</li>
                          <li>• Add vitamin D supplements</li>
                          <li>• Include B12 fortified foods</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-secondary/5 rounded-lg border border-secondary/20">
                        <h4 className="font-semibold text-secondary mb-2">Lifestyle Modifications</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• 30 minutes daily exercise</li>
                          <li>• Regular sleep schedule</li>
                          <li>• Stress management techniques</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Chatbot Panel */}
              <div className="lg:col-span-1">
                <Card className="h-fit">
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-5 w-5 text-accent" />
                      <CardTitle>AI Health Assistant</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Brain className="h-3 w-3 text-accent-foreground" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium mb-1">Health Assistant</p>
                          <p className="text-muted-foreground">
                            Based on your results, I recommend starting with iron supplementation and increasing your
                            physical activity. Would you like specific meal plans?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-3 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-primary-foreground font-bold">U</span>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium mb-1">You</p>
                          <p className="text-muted-foreground">Yes, please provide a meal plan for iron deficiency.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <Brain className="h-3 w-3 text-accent-foreground" />
                        </div>
                        <div className="text-sm">
                          <p className="font-medium mb-1">Health Assistant</p>
                          <p className="text-muted-foreground">
                            Here's a 7-day iron-rich meal plan: Breakfast - Spinach and lentil paratha, Lunch - Quinoa
                            with chickpeas, Dinner - Lean meat with dark leafy greens...
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Input placeholder="Ask about your health..." className="flex-1" />
                      <Button size="sm">Send</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button onClick={() => setCurrentStep("form")} variant="outline">
                Try Another Analysis
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <div className="container mx-auto py-12 px-6 max-w-7xl">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-4">
              Interactive Demo
            </Badge>
            <h1 className="text-3xl font-bold">Health Analysis Prototype</h1>
            <p className="text-muted-foreground mt-2">
              Experience our AI-powered health analyzer with this interactive demo
            </p>
          </div>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Health Profile</CardTitle>
              <p className="text-sm text-muted-foreground">Provide your information for personalized health analysis</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={formData.age}
                    onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, gender: value }))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Diet Type */}
              <div className="space-y-2">
                <Label htmlFor="diet">Diet Type</Label>
                <Select
                  value={formData.dietType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, dietType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your diet type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vegetarian">Vegetarian</SelectItem>
                    <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                    <SelectItem value="vegan">Vegan</SelectItem>
                    <SelectItem value="mixed">Mixed Diet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Symptoms */}
              <div className="space-y-3">
                <Label>Current Symptoms (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-center space-x-2">
                      <Checkbox
                        id={symptom}
                        checked={formData.symptoms.includes(symptom)}
                        onCheckedChange={(checked) => handleSymptomChange(symptom, checked as boolean)}
                      />
                      <Label htmlFor={symptom} className="text-sm">
                        {symptom}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Factors */}
              <div className="space-y-3">
                <Label>Lifestyle Factors (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3">
                  {lifestyleFactors.map((factor) => (
                    <div key={factor} className="flex items-center space-x-2">
                      <Checkbox
                        id={factor}
                        checked={formData.lifestyle.includes(factor)}
                        onCheckedChange={(checked) => handleLifestyleChange(factor, checked as boolean)}
                      />
                      <Label htmlFor={factor} className="text-sm">
                        {factor}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleAnalyze}
                className="w-full"
                size="lg"
                disabled={!formData.age || !formData.gender || !formData.dietType}
              >
                <Activity className="mr-2 h-4 w-4" />
                Analyze My Health
              </Button>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start space-x-2">
                <AlertTriangle className="h-5 w-5 text-chart-4 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-1">Prototype Disclaimer</p>
                  <p>
                    This is a demonstration prototype. Results are simulated and should not be used for actual medical
                    diagnosis. Always consult healthcare professionals for real health concerns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
