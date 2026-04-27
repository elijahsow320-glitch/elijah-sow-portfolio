"use client"

import { SparklesText } from "@/components/ui/sparkles-text"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { Particles } from "@/components/ui/particles"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-6"
    >
      <div className="hidden md:block absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={60}
          color="#22d3ee"
          ease={80}
          size={0.4}
          staticity={50}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <div className="mb-6">
          <AnimatedShinyText
            className="text-xs tracking-widest text-zinc-500 uppercase"
            shimmerWidth={200}
          >
            Computer Information Systems · Georgia State University
          </AnimatedShinyText>
        </div>

        <SparklesText
          className="font-display text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-6"
          colors={{ first: "#22d3ee", second: "#67e8f9" }}
          sparklesCount={8}
        >
          Elijah Sow
        </SparklesText>

        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
          Second-year student passionate about data analytics, management
          consulting, and building skills across every domain I touch.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full border border-cyan-400/40 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-zinc-400 text-sm underline underline-offset-4 hover:text-zinc-100 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
