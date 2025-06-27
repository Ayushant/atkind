"use client"

import { useState } from "react"
import { Check, CheckCircle2, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const pricingPlans = [
  {
    name: "MVP Package",
    description: "Perfect for startups and proof of concept",
    price: "Starting min",
    duration: "1-2 months",
    features: [
      "Custom Web Application",
      "Essential Features Development",
      "Responsive Design",
      "Basic User Authentication",
      "Core Database Setup",
      "Basic API Integration",
      "2 Rounds of Revisions",
      "3 Months Support & Maintenance",
      "Basic SEO Setup",
      "Performance Optimization"
    ]
  },
  {
    name: "Professional",
    description: "Full-featured solution for growing businesses",
    price: "Starting max",
    duration: "2-3 months",
    featured: true,
    features: [
      "Everything in MVP, plus:",
      "Mobile App (iOS & Android)",
      "Advanced User Management",
      "Payment Gateway Integration",
      "Real-time Features",
      "Advanced Analytics",
      "Custom Admin Dashboard",
      "API Documentation",
      "Cloud Infrastructure Setup",
      "6 Months Support & Maintenance",
      "Advanced Security Features",
      "Performance Monitoring"
    ]
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom Quote",
    duration: "6+ months",
    features: [
      "Everything in Professional, plus:",
      "Microservices Architecture",
      "Custom Enterprise Features",
      "Legacy System Integration",
      "Load Balancing Setup",
      "Database Clustering",
      "24/7 Priority Support",
      "Dedicated Development Team",
      "Custom SLA",
      "DevOps Implementation",
      "Advanced Security Audit",
      "Scalability Planning"
    ]
  }
]

export default function PricingWithDialog() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formType, setFormType] = useState("project")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate submission
    setFormSubmitted(true)
    setTimeout(() => {
      setShowContactForm(false)
      setFormSubmitted(false)
    }, 3000)
  }

  const handleOpenForm = (type: string) => {
    setFormType(type)
    setShowContactForm(true)
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Development Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your project. All plans include our core development expertise and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 border ${plan.featured ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                {plan.duration && (
                  <div className="text-sm text-muted-foreground">
                    Estimated Timeline: {plan.duration}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${!plan.featured ? 'variant-outline' : ''}`}
                variant={plan.featured ? 'default' : 'outline'}
                onClick={() => handleOpenForm("project")}
              >
                Get Started
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                *Final pricing may vary based on specific requirements
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">All Plans Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Source Code Ownership",
              "Project Management",
              "Quality Assurance",
              "Technical Documentation",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="z-[9999] sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {formType === "project" ? "Start Your Project" : "Schedule a Consultation"}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
              <p className="text-muted-foreground">
                We&apos;ve received your information and will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                <Button type="submit" className="w-full">Submit</Button>
              </div>
              <div className="bg-secondary/40 p-4 rounded-lg flex flex-col justify-center space-y-4">
                <h4 className="font-medium text-lg">Contact Us Directly</h4>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+919021027889" className="text-sm hover:text-primary transition-colors">
                    +91 9021027889
                  </a>
                </div>
                <div className="flex items-center gap-2 flex-nowrap overflow-hidden">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <a
                    href="mailto:theayushant@gmail.com"
                    className="text-sm hover:text-primary transition-colors break-words whitespace-nowrap truncate"
                  >
                    theayushant@gmail.com
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  We&apos;ll respond to your inquiry within 24 hours during business days.
                </p>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
