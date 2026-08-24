"use client"

import { useState, type SVGProps } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import {
  DrizzleORMDark,
  DrizzleORMLight,
  FastAPI,
  Fly,
  Gemini,
  GitHubDark,
  GitHubLight,
  HeroUIDark,
  HeroUILight,
  JWT,
  NestJS,
  Neon,
  Nextjs,
  Nuxt,
  PnpmDark,
  PnpmLight,
  Python,
  ShadcnUiDark,
  ShadcnUiLight,
  SQLite,
  Supabase,
  TypeORM,
} from "@ridemountainpig/svgl-react"
import {
  Bot,
  Calculator,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FlaskConical,
  GraduationCap,
  Github,
  KeyRound,
  Layers,
  Receipt,
  Sparkles,
  Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

/** SVGL components: (props: SVGProps<SVGSVGElement>) => JSX.Element */
type SvglIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element

/** Any renderable icon component: an SVGL function component, a lucide-react
 * forwardRef component, or a theme-aware pair of either. */
type IconComponent = React.ElementType
type ThemeAwareIcon = IconComponent | { dark: IconComponent; light: IconComponent }

type ProjectTag = {
  name: string
  icon?: ThemeAwareIcon
}

type ProjectLink = {
  label: string
  href: string
  icon: LucideIcon
}

type Project = {
  title: string
  badge?: string
  description: string
  techBadges: ProjectTag[]
  images: string[]
  links: ProjectLink[]
  demoCredentials?: string
  unavailableNote?: string
  icon: LucideIcon
  span: "default" | "wide"
}

function getThemeIcon(icon: ThemeAwareIcon, isDark: boolean): IconComponent {
  if (typeof icon === "object" && "dark" in icon && "light" in icon) {
    return isDark ? icon.dark : icon.light
  }
  return icon
}

const processBadges = [
  {
    name: "CI/CD with GitHub Actions",
    icon: { dark: GitHubDark, light: GitHubLight },
  },
  {
    name: "Automated testing",
    icon: FlaskConical,
  },
  {
    name: "AI and agents in the dev workflow",
    icon: Bot,
  },
]

const projects: Project[] = [
  {
    title: "JobTracker",
    badge: "The biggest project so far",
    description:
      "Job search app that combines web scraping with artificial intelligence. A Python/FastAPI scraper (Jobspy) collects job listings, and an AI engine (Gemini) scores how well each listing fits the user's profile. Supports multiple search profiles per user, each with its own scoring.",
    techBadges: [
      { name: "pnpm Workspaces", icon: { dark: PnpmDark, light: PnpmLight } },
      { name: "NestJS", icon: NestJS },
      { name: "TypeORM", icon: TypeORM },
      { name: "Neon (Postgres)", icon: Neon },
      { name: "Python", icon: Python },
      { name: "FastAPI", icon: FastAPI },
      { name: "Nuxt 4", icon: Nuxt },
      { name: "JWT / Passport", icon: JWT },
      { name: "Gemini", icon: Gemini },
    ],
    images: [
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20125339.png",
    ],
    links: [],
    unavailableNote: "No demo or public repository yet",
    icon: Layers,
    span: "wide",
  },
  {
    title: "Codetaria",
    description:
      "Platform for learning programming and SQL with video-game mechanics (points, challenges, rewards). Includes an interactive code editor and real SQL execution in the browser via SQLite/WASM.",
    techBadges: [
      { name: "Next.js", icon: Nextjs },
      { name: "HeroUI", icon: { dark: HeroUIDark, light: HeroUILight } },
      { name: "Supabase", icon: Supabase },
      { name: "SQLite/WASM", icon: SQLite },
      { name: "PWA" },
    ],
    images: [
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20125940.png",
    ],
    links: [
      { label: "Site", href: "https://codetaria.vercel.app/", icon: ExternalLink },
      { label: "Repo", href: "https://github.com/ValentinOsvaldo/codetaria", icon: Github },
    ],
    icon: GraduationCap,
    span: "default",
  },
  {
    title: "Subscription Manager",
    description:
      "Manages subscriptions to digital services, either individually or shared with family/groups.",
    techBadges: [
      { name: "Next.js", icon: Nextjs },
      { name: "shadcn/ui", icon: { dark: ShadcnUiDark, light: ShadcnUiLight } },
      { name: "NestJS", icon: NestJS },
      { name: "Neon", icon: Neon },
      { name: "Fly.io", icon: Fly },
    ],
    images: [
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20130034.png",
    ],
    links: [
      { label: "Site", href: "https://subscription-manager-zeta-weld.vercel.app/", icon: ExternalLink },
    ],
    demoCredentials: "demo@valen.com / 1234567890",
    icon: Receipt,
    span: "default",
  },
  {
    title: "Quoting Tool for Small Businesses",
    description:
      "Tool for recording products and services and generating professional, print-ready quotes, built for small businesses.",
    techBadges: [
      { name: "Nuxt 3", icon: Nuxt },
      { name: "Drizzle", icon: { dark: DrizzleORMDark, light: DrizzleORMLight } },
      { name: "Supabase", icon: Supabase },
      { name: "Neon", icon: Neon },
    ],
    images: [
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20123941.png",
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20124101.png",
      "https://sggszprqkyrrhoafpzlx.supabase.co/storage/v1/object/public/placeholders/Screenshot%202026-08-06%20124113.png",
    ],
    links: [],
    unavailableNote: "No demo or repository yet",
    icon: Calculator,
    span: "wide",
  },
]

function ProjectGallery({ title, images }: { title: string; images: string[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="relative">
      <div className="relative aspect-video w-full overflow-hidden bg-secondary">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Screenshot of ${title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            priority={i === 0}
            className={`object-cover object-top transition-opacity duration-200 ease-out motion-reduce:duration-100 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setActive((i) => (i - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur transition-[opacity,transform] duration-150 ease-out hover:bg-secondary active:scale-[0.9] hover-fine:opacity-0 hover-fine:group-hover:opacity-100"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => setActive((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur transition-[opacity,transform] duration-150 ease-out hover:bg-secondary active:scale-[0.9] hover-fine:opacity-0 hover-fine:group-hover:opacity-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`View image ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-[width,background-color,transform] duration-200 ease-out active:scale-90 ${
                  i === active ? "w-4 bg-primary" : "w-1.5 bg-background/70"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export function Projects() {
  const { resolvedTheme } = useTheme()
  const isDark = (resolvedTheme ?? "dark") === "dark"

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

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
              <Workflow className="h-3.5 w-3.5" />
              Applied across all of these:
            </span>
            {processBadges.map((badge) => {
              const Icon = getThemeIcon(badge.icon, isDark)
              return (
                <span
                  key={badge.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                >
                  <Icon className="h-3 w-3 shrink-0" />
                  {badge.name}
                </span>
              )
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              index={index}
              className={project.span === "wide" ? "md:col-span-2" : ""}
            >
            <div className="group hover-glow relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-[border-color] duration-300 ease-out hover:border-primary/30">
              <ProjectGallery title={project.title} images={project.images} />

              <div className="flex flex-1 flex-col justify-between p-6">
                {/* Header */}
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.title}
                    </h3>
                    {project.badge && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs font-medium text-primary">
                        <Sparkles className="h-3 w-3" />
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techBadges.map((tag) => {
                      const Icon = tag.icon ? getThemeIcon(tag.icon, isDark) : null
                      return (
                        <span
                          key={tag.name}
                          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {Icon && <Icon className="h-3 w-3 shrink-0" />}
                          {tag.name}
                        </span>
                      )
                    })}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-t border-border pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs font-medium text-foreground transition-[border-color,background-color,color,transform] duration-150 ease-out hover:border-primary/30 hover:bg-border hover:text-primary active:scale-[0.97]"
                      >
                        <link.icon className="h-3.5 w-3.5" />
                        {link.label}
                      </a>
                    ))}
                    {project.demoCredentials && (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                        <KeyRound className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {project.demoCredentials}
                      </span>
                    )}
                    {project.unavailableNote && (
                      <span className="font-mono text-xs italic text-muted-foreground">
                        {project.unavailableNote}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
