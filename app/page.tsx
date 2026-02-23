import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { Footer } from "@/components/footer"
import { SectionDivider } from "@/components/section-divider"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Footer />
    </main>
  )
}
