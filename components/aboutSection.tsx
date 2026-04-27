import { TextReveal } from "@/components/ui/text-reveal"

export function AboutSection() {
  return (
    <section id="about" className="bg-zinc-900/50">
      <div className="max-w-5xl mx-auto px-6 pt-24">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
          About
        </p>
      </div>
      <TextReveal className="max-w-5xl mx-auto">
        I am a second-year Georgia State University student interested in data analytics and management consulting — open to expanding my skills and broadening my expertise across every domain I encounter.
      </TextReveal>
    </section>
  )
}
