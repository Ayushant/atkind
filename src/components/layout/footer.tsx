"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <Github className="h-5 w-5" />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/atkind",
    icon: <Linkedin className="h-5 w-5" />
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />
  },
  {
    name: "Email",
    href: "mailto:contact@atkind.com",
    icon: <Mail className="h-5 w-5" />
  }
] as const

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
      { name: "Careers", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
      { name: "Contact", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
      { name: "Documentation", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
      { name: "Privacy Policy", href: "https://www.linkedin.com/company/atkind", isExternal: true, isClickable: true },
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#", isExternal: false, isClickable: false },
      { name: "Mobile Apps", href: "#", isExternal: false, isClickable: false },
      { name: "Consulting", href: "#", isExternal: false, isClickable: false },
    ]
  }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand and Social */}          <div className="col-span-2 md:col-span-1">            <a href="#" className="inline-block font-bold text-xl text-primary mb-4">
              atkind
            </a>
            <p className="text-muted-foreground text-sm mb-4">
              Crafting digital excellence through innovative software solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold mb-3">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link) => (                  <li key={link.name}>                    {link.isClickable === false ? (
                      <span className="text-muted-foreground text-sm cursor-pointer opacity-60 hover:opacity-100 hover:text-blue-500 transition-all duration-200 block py-1">
                        {link.name}
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        target={link.isExternal ? "_blank" : undefined}
                        rel={link.isExternal ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary text-sm transition-colors block py-1"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t text-center text-sm text-muted-foreground">          <p>            © {currentYear} atkind. All rights reserved.
          </p>
          <p className="mt-1">
            Crafted with passion by the atkind team.
          </p>
        </div>
      </div>
    </footer>
  )
} 