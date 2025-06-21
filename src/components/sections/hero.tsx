'use client'

import { useState } from "react"
import { MotionDiv, MotionH1, MotionP } from "@/lib/motion"
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
import { PhoneInput } from "@/components/ui/phone-input"

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false)
  const [formType, setFormType] = useState<"project" | "consultation">("project")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleOpenForm = (type: "project" | "consultation") => {
    setFormType(type)
    setFormSubmitted(false)
    setShowContactForm(true)
    console.log("Opening form for:", type)
  }
    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
      // Get form data from the form elements
    const form = e.target as HTMLFormElement;
    const nameInput = form.querySelector('#name') as HTMLInputElement;
    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
    const emailInput = form.querySelector('#email') as HTMLInputElement;
    const companyInput = form.querySelector('#company') as HTMLInputElement;
    const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
    
    // Import the form submission utility
    const { submitFormToGoogleSheets } = await import('@/lib/forms/submit-form');
    
    // Submit the form data
    const result = await submitFormToGoogleSheets({
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      company: companyInput?.value || '',
      message: messageInput?.value || '',
      formType: formType === 'project' ? 'Project Inquiry' : 'Consultation Request',
      serviceType: formType === 'project' ? 'Custom Development' : 'Consultation',
    });
    
    console.log("Form submitted:", result);
    
    // Show success message
    setFormSubmitted(true);
    
    // Close the form after a delay
    setTimeout(() => setShowContactForm(false), 3000);
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
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-3">
              <CheckCircle2 className="w-4 h-4" />
              Award-winning Development Team
            </div>
          </MotionDiv>

          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
          >
            Build Better Software,<br />
            <span className="text-primary">Faster</span>
          </MotionH1>

          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
          >
            Expert software development that turns complex challenges into elegant solutions.
            Let&apos;s build something great together.
          </MotionP>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
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
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
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
          </MotionDiv>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>        <DialogContent className="z-[9999] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {formType === "project" ? "Start Your Project" : "Schedule a Consultation"}
            </DialogTitle>
            <DialogDescription>
              {formType === "project" 
                ? "Tell us about your project and we'll get back to you within 24 hours."
                : "Schedule a free consultation to discuss your needs."
              }
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
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
                <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <PhoneInput id="phone" placeholder="Phone number" required />
              </div>
              
              {formType === "project" && (
                <>                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details (Optional)</Label>
                    <textarea
                      id="message"
                      placeholder="Brief description of your project..."
                      className="min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </>
              )}
              
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  {formType === "project" ? "Start Project" : "Schedule Call"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowContactForm(false)}>
                  Cancel
                </Button>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3" />
                    <a href="tel:+919021027889" className="hover:text-primary transition-colors">
                      +91 9021027889
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    <a href="mailto:theayushant@gmail.com" className="hover:text-primary transition-colors">
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Hero
