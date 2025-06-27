'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formType, setFormType] = useState<"project" | "consultation">("project")
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // No client-side only animations to avoid hydration issues
  // No mounted state

  const handleOpenForm = (type: "project" | "consultation") => {
    setFormType(type)
    setFormSubmitted(false)
    setShowContactForm(true)
    console.log("Opening form for:", type)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted")
    setFormSubmitted(true)
    setTimeout(() => setShowContactForm(false), 2000)
  }

  return (
    <div className="relative min-h-[75vh]">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-[1140px] mx-auto text-center">
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Award-winning Development Team
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight">
            Build Better Software, <br />
            <span className="text-primary">Faster</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
           Transform your enterprise with custom web, mobile, AI, and software solutions. Scalable, secure, and expertly built for innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="group"
              onClick={() => {
                console.log("Start Project clicked")
                handleOpenForm("project")
              }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleOpenForm("consultation")}
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "55+", label: "Projects Delivered" },
              { number: "10+", label: "Team Members" },
              { number: "99%", label: "Client Satisfaction" }
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary mb-0.5">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
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
    </div>
  )
}

export default Hero
