"use client"

import { useState } from "react"
import {
  Lightbulb,
  Search,
  Code2,
  Rocket,
  Repeat,
  Settings,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const processSteps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Discovery & Planning",
    description:
      "We start by understanding your business goals, requirements, and challenges to create a comprehensive project roadmap.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Analysis & Design",
    description:
      "Our team creates detailed technical specifications and designs the architecture of your solution.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Development",
    description:
      "Using agile methodologies, we develop your solution with regular sprints and continuous feedback.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: "Testing & QA",
    description:
      "Rigorous testing ensures your solution meets the highest quality standards and performs flawlessly.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Deployment",
    description:
      "We handle the deployment process and ensure a smooth transition to your new solution.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: <Repeat className="h-6 w-6" />,
    title: "Support & Iteration",
    description:
      "Ongoing support and continuous improvements keep your solution running optimally.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
]

export default function Process() {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Development Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery and exceeds expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              <div className="relative z-10 bg-background rounded-xl p-6 border shadow-sm h-full hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "flex items-center justify-center w-12 h-12 rounded-lg shrink-0",
                      step.bgColor
                    )}
                  >
                    <div className={step.color}>{step.icon}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={cn(
                          "flex items-center justify-center w-6 h-6 rounded-full text-sm font-medium",
                          step.bgColor,
                          step.color
                        )}
                      >
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>

              {index !== processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-muted-foreground/20" />
              )}
            </div>
          ))}
        </div>

        {/* Additional Info and Buttons */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium">
            <Settings className="w-4 h-4" />
            Agile Development Methodology
          </div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We follow agile principles with 2-week sprints, daily stand-ups, and regular client meetings
            to ensure transparency and continuous delivery of value.
          </p>

          {/* Buttons to open dialog */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => setShowDialog(true)}>Get Started</Button>
            <Button variant="outline" onClick={() => setShowDialog(true)}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Shared Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Reach out to us and we’ll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Let&rsquo;s Talk</h3>

            <div className="flex items-center justify-center gap-2 text-sm mb-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+919021027889" className="hover:text-primary transition-colors">
                +91 9021027889
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:theayushant@gmail.com" className="hover:text-primary transition-colors break-all">
                theayushant@gmail.com
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We usually respond within a few hours during business days.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
