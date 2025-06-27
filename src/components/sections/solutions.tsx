"use client"

import { useState } from "react"
import { 
  Building2, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  Wallet, 
  Building,
  Mail,
  Phone
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const solutions = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Digital Banking",
    description: "Modern fintech solutions with secure payment processing, digital wallets, and banking automation.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: ["Payment Processing", "Digital Wallets", "Banking Automation"]
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Healthcare",
    description: "Innovative healthcare solutions for patient management, telemedicine, and medical records.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: ["Patient Management", "Telemedicine", "Medical Records"]
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E-commerce",
    description: "Scalable e-commerce platforms with inventory management and payment integration.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: ["Inventory Management", "Payment Integration", "Order Processing"]
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Real Estate",
    description: "Property management solutions with virtual tours and automated listings.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    features: ["Property Management", "Virtual Tours", "Automated Listings"]
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Logistics",
    description: "Supply chain optimization with real-time tracking and route planning.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: ["Route Planning", "Real-time Tracking", "Inventory Control"]
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with IoT integration and process automation.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    features: ["Process Automation", "IoT Integration", "Quality Control"]
  }
]

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState<typeof solutions[0] | null>(null)
  const [showContactDialog, setShowContactDialog] = useState(false)

  const handleLearnMore = (solution: typeof solutions[0]) => {
    setSelectedSolution(solution)
  }

  const handleContactUs = () => {
    setShowContactDialog(true)
  }
  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored software solutions for various industries to drive digital transformation and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-lg shrink-0",
                    solution.bgColor
                  )}>
                    <div className={solution.color}>
                      {solution.icon}
                    </div>
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
            </div>
          ))}
        </div>        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your industry? We create custom solutions for unique business needs.
          </p>
          <Button size="lg" className="px-8" onClick={handleContactUs}>
            Contact Us
          </Button>
        </div>

        {/* Learn More Dialog */}
        <Dialog open={!!selectedSolution} onOpenChange={() => setSelectedSolution(null)}>
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            {selectedSolution && (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3 text-2xl">
                    <div className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-lg",
                      selectedSolution.bgColor
                    )}>
                      <div className={selectedSolution.color}>
                        {selectedSolution.icon}
                      </div>
                    </div>
                    {selectedSolution.title} Solutions
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    {selectedSolution.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid gap-2">
                      {selectedSolution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className={cn("w-2 h-2 rounded-full", selectedSolution.bgColor)} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Why Choose Our {selectedSolution.title} Solutions?</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Custom-built solutions tailored to your specific needs</li>
                      <li>• Scalable architecture that grows with your business</li>
                      <li>• Seamless integration with existing systems</li>
                      <li>• 24/7 support and maintenance</li>
                      <li>• Proven track record in the {selectedSolution.title.toLowerCase()} industry</li>
                    </ul>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      onClick={() => {
                        setSelectedSolution(null)
                        setShowContactDialog(true)
                      }}
                      className="flex-1"
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedSolution(null)}
                      className="flex-1"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Contact Dialog */}
        <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Ready to transform your business? Get in touch with our experts today.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="mailto:contact@atkind.com" 
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-sm text-muted-foreground">contact@atkind.com</div>
                  </div>
                </a>
                
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <div className="text-sm text-muted-foreground">+1 (234) 567-8900</div>
                  </div>
                </a>
              </div>
              
              <div className="pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setShowContactDialog(false)}
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}