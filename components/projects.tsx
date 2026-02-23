"use client"

import type { SVGProps } from "react"
import { useTheme } from "next-themes"
import {
  Pinia,
  RailwayDark,
  RailwayLight,
  ReactDark,
  ReactLight,
  ShadcnUiDark,
  ShadcnUiLight,
  TailwindCSS,
  Vue,
} from "@ridemountainpig/svgl-react"
import { ArrowUpRight, LayoutDashboard, Shield, Vote, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/** SVGL components: (props: SVGProps<SVGSVGElement>) => JSX.Element */
type SvglIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element

type ThemeAwareIcon = SvglIcon | { dark: SvglIcon; light: SvglIcon }

type ProjectTag = {
  name: string
  icon: ThemeAwareIcon
}

function getThemeIcon(icon: ThemeAwareIcon, isDark: boolean): SvglIcon {
  if (typeof icon === "function") return icon
  return isDark ? icon.dark : icon.light
}

type Project = {
  title: string
  description: string
  techBadges: ProjectTag[]
  highlight: string
  highlightIcon: LucideIcon
  icon: LucideIcon
  href: string
  span: "default" | "wide"
}

const projects: Project[] = [
  {
    title: "Expense Management System",
    description:
      "Developed the entire front-end application (Vue, Pinia) to streamline corporate travel expense logging and record-keeping for 10+ accountants. Successfully engineered complex, multi-layered state management to handle concurrent and dynamic data flows.",
    techBadges: [
      { name: "Vue", icon: Vue },
      { name: "Pinia", icon: Pinia },
      { name: "Tailwind", icon: TailwindCSS },
      { name: "Railway", icon: { dark: RailwayDark, light: RailwayLight } },
    ],
    icon: LayoutDashboard,
    highlight: "10+ accountants",
    highlightIcon: Users,
    href: "#",
    span: "wide",
  },
  {
    title: "Digital Voting & Reporting",
    description:
      "Developed the secure, modern front-end application using React, Zustand, and Shadcn. This interface was used to record votes at 50+ polling stations and focused on data integrity and user experience to support the automated generation of official, structured reports.",
    techBadges: [
      { name: "React", icon: { dark: ReactDark, light: ReactLight } },
      { name: "Zustand", icon: { dark: ReactDark, light: ReactLight } },
      { name: "Shadcn", icon: { dark: ShadcnUiDark, light: ShadcnUiLight } },
    ],
    highlight: "50+ polling stations",
    highlightIcon: Shield,
    icon: Vote,
    href: "#",
    span: "wide",
  },
]

export function Projects() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Selected Work
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            A selection of engineering projects focused on performance, reliability, and developer experience.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className={`hover-glow group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50 ${
                project.span === "wide" ? "md:col-span-2" : ""
              }`}
            >
              {/* Header */}
              <div>
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
                <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.techBadges.map((badge) => {
                    const Icon = getThemeIcon(badge.icon, isDark)
                    return (
                      <span
                        key={badge.name}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        <Icon className="h-3 w-3 shrink-0" />
                        {badge.name}
                      </span>
                    )
                  })}
                </div>
                <div className="flex items-center gap-1.5 text-primary">
                  <project.highlightIcon className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap font-mono text-xs font-medium">
                    {project.highlight}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
