"use client"

import { useState } from "react"
import { MotionDiv } from "@/lib/motion"
import { motion } from "framer-motion"
import { 
  Building2, 
  HeartPulse, 
  ShoppingBag,   Truck, 
  Wallet, 
  Building,
  Check,
  CheckCircle2,
  Mail,
  Phone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "@/components/ui/phone-input"
import { submitFormToGoogleSheets } from '@/lib/forms/submit-form'

const solutions = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Digital Banking",
    description: "Modern fintech solutions with secure payment processing, digital wallets, and banking automation.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: ["Payment Processing", "Digital Wallets", "Banking Automation"],
    techDetails: {
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe API"],
      security: ["256-bit Encryption", "Two-Factor Authentication", "Biometric Verification"],
      integrations: ["Payment Gateways", "Banking APIs", "Financial Data Providers"],
      caseStudy: "Helped a fintech startup achieve 99.99% uptime with a secure, scalable banking platform serving over 50,000 daily users."
    }
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Healthcare",
    description: "Innovative healthcare solutions for patient management, telemedicine, and medical records.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: ["Patient Management", "Telemedicine", "Medical Records"],
    techDetails: {
      technologies: ["React Native", "Python", "PostgreSQL", "Azure", "WebRTC"],
      security: ["HIPAA Compliance", "End-to-end Encryption", "Secure Data Storage"],
      integrations: ["Electronic Health Records", "Medical Imaging Systems", "Insurance Verification APIs"],
      caseStudy: "Developed a telemedicine platform that reduced patient wait times by 78% and increased appointment completion rates by 45%."
    }
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E-commerce",
    description: "Scalable e-commerce platforms with inventory management and payment integration.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: ["Inventory Management", "Payment Integration", "Order Processing"],
    techDetails: {
      technologies: ["Next.js", "GraphQL", "Redis", "Docker", "Kubernetes"],
      security: ["PCI DSS Compliance", "Fraud Detection", "Secure Checkout"],
      integrations: ["Payment Processors", "Shipping APIs", "Inventory Management Systems"],
      caseStudy: "Built a high-performance e-commerce platform handling 10,000+ transactions per day with 99.9% uptime during peak shopping seasons."
    }
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Real Estate",
    description: "Property management solutions with virtual tours and automated listings.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    features: ["Property Management", "Virtual Tours", "Automated Listings"],
    techDetails: {
      technologies: ["Vue.js", "Express", "MySQL", "Three.js", "Google Maps API"],
      security: ["Secure Document Handling", "Identity Verification", "Data Encryption"],
      integrations: ["MLS Listings", "Virtual Tour Platforms", "Document Signing Services"],
      caseStudy: "Created a property management system that increased rental occupancy rates by 32% and reduced administrative workload by 65%."
    }
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Logistics",
    description: "Supply chain optimization with real-time tracking and route planning.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: ["Route Planning", "Real-time Tracking", "Inventory Control"],
    techDetails: {
      technologies: ["Angular", "Java Spring Boot", "Elasticsearch", "Kafka", "TensorFlow"],
      security: ["GPS Data Protection", "Secure IoT Communication", "Access Control"],
      integrations: ["GPS Tracking Systems", "ERP Software", "Customs & Border APIs"],
      caseStudy: "Implemented a logistics optimization system that reduced delivery times by 23% and fuel costs by 18% for a fleet of 500+ vehicles."
    }
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with IoT integration and process automation.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    features: ["Process Automation", "IoT Integration", "Quality Control"],
    techDetails: {
      technologies: ["C#/.NET", "Python", "SQL Server", "Azure IoT", "Power BI"],
      security: ["Industrial Network Security", "OT/IT Segregation", "Secure Remote Access"],
      integrations: ["ERP Systems", "Industrial IoT Platforms", "Supply Chain Management"],
      caseStudy: "Developed an IoT-based manufacturing system that improved production efficiency by 37% and reduced defect rates by 25%."
    }
  }
]

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<(typeof solutions)[0] | null>(null)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleLearnMore = (solution: typeof solutions[0]) => {
    setSelectedSolution(solution)
  }

  const handleContactUs = () => {
    setFormSubmitted(false)
    setShowContactForm(true)
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
      // Submit the form data
    const result = await submitFormToGoogleSheets({
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      company: companyInput?.value || '',
      message: messageInput?.value || '',
      formType: 'Solutions Inquiry',
      serviceType: 'Industry Solutions',
    });
    
    console.log("Form submitted:", result);
    
    // Show success message
    setFormSubmitted(true);
    
    // Close the form after a delay
    setTimeout(() => setShowContactForm(false), 3000);
  }

  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored software solutions for various industries to drive digital transformation and growth
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <MotionDiv
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-lg shrink-0",
                    solution.bgColor
                  )}>
                    <motion.div
                      className={solution.color}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {solution.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className={cn("w-1.5 h-1.5 rounded-full", solution.bgColor)} />
                      {feature}
                    </div>
                  ))}
                </div>                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/5"
                  onClick={() => handleLearnMore(solution)}
                >
                  Learn More
                </Button>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Call to Action */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >          <p className="text-muted-foreground mb-6">
            Don&apos;t see your industry? We create custom solutions for unique business needs.
          </p>
          <Button size="lg" className="px-8" onClick={handleContactUs}>
            Contact Us
          </Button></MotionDiv>
      </div>      {/* Tech Details Dialog */}
      <Dialog open={selectedSolution !== null} onOpenChange={(open) => !open && setSelectedSolution(null)}>
        {selectedSolution && (
          <DialogContent className="max-w-sm sm:max-w-md md:max-w-lg mx-auto p-4 sm:p-6">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className={cn(
                  "flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md",
                  selectedSolution.bgColor
                )}>
                  <div className={cn(selectedSolution.color, "text-xs sm:text-sm")}>
                    {selectedSolution.icon}
                  </div>
                </div>
                <DialogTitle className="text-base sm:text-lg font-semibold">
                  {selectedSolution.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-xs sm:text-sm">
                Technology stack and features
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-4 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto">
              {/* Technologies */}
              <div>
                <h4 className="text-sm sm:text-base font-medium mb-2 text-primary">
                  Core Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSolution.techDetails.technologies.slice(0, 6).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm sm:text-base font-medium mb-2 text-primary">
                  Key Features
                </h4>
                <div className="space-y-1.5">
                  {selectedSolution.techDetails.security.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div>
                <h4 className="text-sm sm:text-base font-medium mb-2 text-primary">
                  Integrations
                </h4>
                <div className="space-y-1.5">
                  {selectedSolution.techDetails.integrations.slice(0, 3).map((integration, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {integration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight */}
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-sm font-medium mb-1 text-primary">Why Choose This?</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {selectedSolution.techDetails.caseStudy.substring(0, 120)}...
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex justify-end">
              <Button 
                size="sm"
                variant="outline" 
                onClick={() => setSelectedSolution(null)}
                className="text-xs sm:text-sm px-4"
              >
                Close
              </Button>
            </div>          </DialogContent>
        )}
      </Dialog>      {/* Contact Form Dialog */}
      <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
        <DialogContent className="sm:max-w-[400px] max-h-[90vh] overflow-y-auto">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-lg">Start Your Project</DialogTitle>
            <DialogDescription className="text-sm">
              Let&apos;s discuss your project requirements
            </DialogDescription>
          </DialogHeader>

          {formSubmitted ? (
            <div className="py-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-600 mb-3">
                <CheckCircle2 className="h-5 w-5" />
              </div>              <h3 className="text-lg font-semibold mb-2">Thank You!</h3>
              <p className="text-sm text-muted-foreground">
                We&apos;ll contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Full Name *</Label>
                  <Input id="name" placeholder="Your name" required className="h-9" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email *</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required className="h-9" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                <PhoneInput id="phone" placeholder="Your phone number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm">Company</Label>
                <Input id="company" placeholder="Company name (optional)" className="h-9" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm">Project Details</Label>
                <textarea
                  id="message"
                  placeholder="Brief description of your project"
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                />
              </div>

              <div className="bg-secondary/30 p-3 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3 w-3 text-primary" />
                    <span>+91 9021027889</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3 w-3 text-primary" />
                    <span className="truncate">theayushant@gmail.com</span>
                  </div>
                </div>
              </div>              <Button type="submit" className="w-full h-9">
                Submit Request
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}