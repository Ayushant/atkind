import dynamic from 'next/dynamic'
import Hero from "@/components/sections/hero"
import { OurWork } from "@/components/sections/our-work"

// Dynamically import heavy components with SEO-friendly loading
const Services = dynamic(() => import("@/components/sections/services"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" aria-label="Loading services section" />
})

const Solutions = dynamic(() => import("@/components/sections/solutions"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" aria-label="Loading solutions section" />
})

const Process = dynamic(() => import("@/components/sections/process"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" aria-label="Loading process section" />
})

const Pricing = dynamic(() => import("@/components/sections/pricing"), {
  loading: () => <div className="h-screen animate-pulse bg-muted/50" aria-label="Loading pricing section" />
})

export default function Home() {
  return (
    <>
      <div className="overflow-x-hidden w-full">
        {/* Hero section with primary keywords */}
        <section aria-label="Hero section">
          <Hero />
        </section>

        {/* Services section with semantic structure */}
        <section aria-label="Our services" id="services">
          <Services />
        </section>

        {/* Industry solutions */}
        <section aria-label="Industry solutions" id="solutions">
          <Solutions />
        </section>

        {/* Portfolio showcase */}
        <section aria-label="Our portfolio" id="portfolio">
          <OurWork />
        </section>

        {/* Development process */}
        <section aria-label="Our development process" id="process">
          <Process />
        </section>

        {/* Pricing information */}
        <section aria-label="Pricing packages" id="pricing">
          <Pricing />
        </section>
      </div>
    </>
  )
}
