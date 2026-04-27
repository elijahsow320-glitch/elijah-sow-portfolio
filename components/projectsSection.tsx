import { MagicCard } from "@/components/ui/magic-card"

const projects = [
  {
    role: "Student Assistant",
    org: "CIRCLE · Georgia State University",
    period: "August 2025 – Present",
    location: "Atlanta, GA",
    bullets: [
      "Coordinated logistics for an academic linguistics conference across multiple campus partners",
      "Designed promotional materials to support campus events and drive student engagement",
      "Managed professional communications on behalf of department leadership",
    ],
    tags: ["Event Planning", "Communications", "Design"],
  },
  {
    role: "Front Service Clerk",
    org: "Publix",
    period: "June 2024 – Present",
    location: "Lawrenceville, GA",
    bullets: [
      "Delivered customer service in a high-volume environment, engaging 200+ customers per shift",
      "Processed cash, credit, and debit transactions accurately following company procedures",
      "Supported multiple operational roles based on daily needs",
    ],
    tags: ["Customer Service", "Operations", "Transactions"],
  },
  {
    role: "Tutor",
    org: "The Tutoring Center",
    period: "August 2022 – February 2024",
    location: "Duluth, GA",
    bullets: [
      "Led structured tutoring sessions for groups of 1–3 students, adapting instruction to each learner",
      "Assessed student progress informally and adjusted strategies to improve outcomes",
      "Communicated complex concepts clearly to build understanding and confidence",
    ],
    tags: ["Teaching", "Communication", "Assessment"],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-12">
          Experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <MagicCard
              key={project.role}
              className="rounded-xl bg-zinc-900 border border-zinc-800 min-h-[220px]"
              gradientColor="#22d3ee"
              gradientOpacity={0.08}
            >
              <div className="p-6 flex flex-col gap-3 h-full">
                <div>
                  <h3 className="text-base font-semibold text-zinc-100">
                    {project.role}
                  </h3>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    {project.org} · {project.period}
                  </p>
                </div>

                <ul className="flex-1 list-disc list-inside space-y-1.5">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-zinc-400 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}
