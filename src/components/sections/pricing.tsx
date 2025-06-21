"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Check, CheckCircle2, Mail, Phone } from "lucide-react"
import { MotionDiv } from "@/lib/motion"
import { PhoneInput } from "@/components/ui/phone-input"
import { submitFormToGoogleSheets } from '@/lib/forms/submit-form'

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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
      // Get form data from the form elements
    const form = e.target as HTMLFormElement;
    const nameInput = form.querySelector('#name') as HTMLInputElement;
    const phoneInput = form.querySelector('#phone') as HTMLInputElement;
    const emailInput = form.querySelector('#email') as HTMLInputElement;
    const companyInput = form.querySelector('#company') as HTMLInputElement;
    const messageInput = form.querySelector('#message') as HTMLTextAreaElement;
      // Submit the form data
    const result = await submitFormToGoogleSheets({
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      company: companyInput?.value || '',
      message: messageInput?.value || '',
      formType: 'Pricing Inquiry',
      serviceType: 'Custom Development',
    });
    
    console.log("Form submitted:", result);
    
    // Show success message
    setFormSubmitted(true)
    
    // Close the form after a delay
    setTimeout(() => {
      setShowContactForm(false)
      setFormSubmitted(false)
    }, 3000)
  }
  const handleOpenForm = () => {
    setShowContactForm(true)
  }

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Development Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your project. All plans include our core development expertise and quality assurance.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              </ul>              <Button
                className={`w-full ${!plan.featured ? 'variant-outline' : ''}`}
                variant={plan.featured ? 'default' : 'outline'}
                onClick={() => handleOpenForm()}
              >
                Get Started
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                *Final pricing may vary based on specific requirements
              </p>
            </MotionDiv>
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
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>        <DialogContent className="z-[9999] sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Get a Quote</DialogTitle>            <DialogDescription>
              Tell us about your project and we&apos;ll provide a custom quote within 24 hours.
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
              
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>                <Input id="company" placeholder="Your company name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Project Details (Optional)</Label>
                <textarea
                  id="message"
                  placeholder="Brief description of your project..."
                  className="min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Get Quote
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
    </section>
  )
}
