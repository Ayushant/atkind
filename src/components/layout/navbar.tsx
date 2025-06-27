"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
] as const

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [contactDialogOpen, setContactDialogOpen] = useState(false)

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-bold text-xl text-primary whitespace-nowrap">
              atkind
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer whitespace-nowrap
                    ${activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "hover:text-primary"
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="whitespace-nowrap"
                onClick={() => setContactDialogOpen(true)}
              >
                Contact
              </Button>
              <Button
                className="whitespace-nowrap"
                onClick={() => handleNavClick("#pricing")}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
              <div className="px-4 py-2 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-sm font-medium hover:text-primary hover:bg-secondary rounded-md transition-colors whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-2 pb-3 border-t space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start whitespace-nowrap"
                    onClick={() => {
                      setIsOpen(false)
                      setContactDialogOpen(true)
                    }}
                  >
                    Contact
                  </Button>
                  <Button
                    className="w-full whitespace-nowrap"
                    onClick={() => handleNavClick("#pricing")}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Dialog for Contact Info */}
      <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
            <DialogDescription>
              Reach out to us and we’ll get back to you as soon as possible.
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
              <a
                href="mailto:theayushant@gmail.com"
                className="hover:text-primary transition-colors break-all"
              >
                theayushant@gmail.com
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Navbar
