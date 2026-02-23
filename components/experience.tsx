"use client"

import type { SVGProps } from "react"
import { useTheme } from "next-themes"
import {
  CSS,
  Docker,
  Expo,
  Git,
  GoogleMaps,
  HTML5,
  JavaScript,
  MaterialUI,
  NestJS,
  Nextjs,
  ReactDark,
  ReactLight,
  TurborepoDark,
  TurborepoLight,
  TypeScript,
  VercelDark,
  VercelLight,
  Vue,
  Nuxt,
} from "@ridemountainpig/svgl-react"
import { Briefcase, Code, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"

/** SVGL components: (props: SVGProps<SVGSVGElement>) => JSX.Element */
type SvglIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element

type ThemeAwareIcon = SvglIcon | { dark: SvglIcon; light: SvglIcon }

type ExperienceTag = {
  name: string
  icon: ThemeAwareIcon
}

function getThemeIcon(icon: ThemeAwareIcon, isDark: boolean): SvglIcon {
  if (typeof icon === "function") return icon
  return isDark ? icon.dark : icon.light
}

type ExperienceItem = {
  period: string
  role: string
  company: string
  description: string
  tags: ExperienceTag[]
  icon: LucideIcon
}

const experiences: ExperienceItem[] = [
  {
    period: "Feb 2025 – Present",
    role: "Senior Front-End Developer",
    company: "AETO",
    icon: Rocket,
    description:
      "Led the architectural definition for the company's largest system using Vue.js, TypeScript, and Nuxt.js, reducing system load time from 5 seconds to under 500ms. Championed Docker adoption for 50% faster environment setup and led Unit/E2E testing strategies, cutting critical production bugs by 45%. Built a full-stack reporting solution (NestJS/pdfmake) that reduced report generation time by 67%. Developed a vehicle inspection app with Expo/React Native that decreased inspection time by 30% and improved deployment speed via Expo OTA updates and Sentry integration.",
    tags: [
      { name: "Vue.js", icon: Vue },
      { name: "Nuxt.js", icon: Nuxt },
      { name: "TypeScript", icon: TypeScript },
      { name: "NestJS", icon: NestJS },
      { name: "React Native", icon: { dark: ReactDark, light: ReactLight } },
      { name: "Expo", icon: Expo },
      { name: "Docker", icon: Docker },
      { name: "Turborepo", icon: { dark: TurborepoDark, light: TurborepoLight } },
    ],
  },
  {
    period: "Jun 2022 – Feb 2025",
    role: "Front-End Developer",
    company: "AETO",
    icon: Code,
    description:
      "Designed and delivered a React Native MVP (camera, Bluetooth, mapping) within a 2-month deadline, reducing operator task completion time by 25% and serving 150+ active users. Developed multiple web applications with React, Next.js, and Google Maps using MUI. Established visual consistency with a CSS-variable design system and defined a GitHub Workflow strategy that reduced merge conflicts by over 80%.",
    tags: [
      { name: "React", icon: { dark: ReactDark, light: ReactLight } },
      { name: "Next.js", icon: Nextjs },
      { name: "React Native", icon: { dark: ReactDark, light: ReactLight } },
      { name: "Google Maps", icon: GoogleMaps },
      { name: "MUI", icon: MaterialUI },
      { name: "Git", icon: Git },
      { name: "Vercel", icon: { dark: VercelDark, light: VercelLight } },
    ],
  },
  {
    period: "Feb 2021 – Jun 2022",
    role: "Javascript Developer",
    company: "AETO",
    icon: Briefcase,
    description:
      "Advanced from Trainee to Developer within 6 months, mastering front-end development with vanilla HTML, CSS, and JavaScript. Designed a library of 12 reusable vanilla JS components that increased feature development efficiency by an estimated 25% across 4 projects.",
    tags: [
      { name: "JavaScript", icon: JavaScript },
      { name: "HTML", icon: HTML5 },
      { name: "CSS", icon: CSS },
    ],
  },
]

export function Experience() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Career
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[7px]" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-6 pl-8 md:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                    </div>
                    <span className="font-mono text-sm text-primary">
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => {
                      const Icon = getThemeIcon(tag.icon, isDark)
                      return (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          <Icon className="h-3 w-3 shrink-0" />
                          {tag.name}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
