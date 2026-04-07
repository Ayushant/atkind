"use client"

import { ArrowUpRight, LayoutTemplate } from "lucide-react"

const uiTemplates = [
  {
    previewTitle: "Sofra UI preview",
    category: "Restaurant Experience",
    bestFor: "Best For: Restaurant Websites",
    description: "Bold hero storytelling, rich media blocks, and action-first booking flow.",
    href: "https://sprl.me/rKMKsYc",
    accent: "from-amber-400/20 via-orange-500/10 to-rose-500/20",
    bestForStyle: "border-amber-300/60 bg-amber-500/10 text-amber-700",
  },
  {
    previewTitle: "CharityFlow UI preview",
    category: "Nonprofit Platform",
    bestFor: "Best For: NGOs & Nonprofits",
    description: "Impact-driven layout with narrative sections, metrics, and campaign highlights.",
    href: "https://sprl.me/jo7UOdq",
    accent: "from-emerald-400/20 via-teal-500/10 to-cyan-500/20",
    bestForStyle: "border-emerald-300/60 bg-emerald-500/10 text-emerald-700",
  },
  {
    previewTitle: "Hopefy UI preview",
    category: "Fundraising Journey",
    bestFor: "Best For: Fundraising Campaigns",
    description: "Clean conversion paths, donation modules, and trust-building testimonial patterns.",
    href: "https://sprl.me/nOBKaBj",
    accent: "from-sky-400/20 via-blue-500/10 to-indigo-500/20",
    bestForStyle: "border-sky-300/60 bg-sky-500/10 text-sky-700",
  },
  {
    previewTitle: "Strays UI preview",
    category: "Cause-Led Community",
    bestFor: "Best For: Community & Cause Sites",
    description: "Warm editorial cards, story-led CTAs, and mission-focused content hierarchy.",
    href: "https://sprl.me/kNi6PlD",
    accent: "from-lime-400/20 via-green-500/10 to-emerald-500/20",
    bestForStyle: "border-lime-300/60 bg-lime-500/10 text-lime-700",
  },
  {
    previewTitle: "Lodr UI preview",
    category: "Hospitality Template",
    bestFor: "Best For: Hospitality & Hotel Brands",
    description: "Premium editorial rhythm with immersive visuals and conversion-centric sections.",
    href: "https://sprl.me/9EMDoNm",
    accent: "from-fuchsia-400/20 via-pink-500/10 to-rose-500/20",
    bestForStyle: "border-pink-300/60 bg-pink-500/10 text-pink-700",
  },
]

export default function CustomizableUI() {
  return (
    <section id="customizable-ui" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.12),transparent_35%),radial-gradient(circle_at_80%_0%,hsl(var(--primary)/0.08),transparent_28%)]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            
            Customizable UI
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-4xl">
            UI Styles You Can Customize For Your Brand
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
       pick the one that best fits your product story, audience, and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {uiTemplates.map((template) => (
            <a
              key={template.href}
              href={template.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border bg-background/90 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              aria-label={`Open ${template.previewTitle}`}
            >
              <div
                className={`mb-4 rounded-xl border bg-gradient-to-br p-4 ${template.accent}`}
                aria-hidden="true"
              >
                <LayoutTemplate className="h-5 w-5" />
              </div>

              <p className="mb-2 text-sm font-semibold leading-snug">
                {template.previewTitle}
              </p>

              <p className={`mb-3 inline-flex rounded-full border px-3 py-1.5 text-sm font-bold tracking-wide ${template.bestForStyle}`}>
                {template.bestFor}
              </p>

              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {template.category}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>

              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Open Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
