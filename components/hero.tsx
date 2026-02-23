"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Circle } from "lucide-react"

const terminalLines = [
  { prompt: true, text: "cat profile.json" },
  { prompt: false, text: "{" },
  { prompt: false, text: '  "name": "Osvaldo Valentin Garcia",' },
  { prompt: false, text: '  "role": "Senior Fullstack Engineer",' },
  { prompt: false, text: '  "focus": ["Performance", "Scalability", "DX"],' },
  { prompt: false, text: '  "location": "Monterrey, MX",' },
  { prompt: false, text: '  "available": true' },
  { prompt: false, text: "}" },
]

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timeout = setTimeout(
        () => setVisibleLines((prev) => prev + 1),
        visibleLines === 0 ? 600 : 80
      )
      return () => clearTimeout(timeout)
    }
  }, [visibleLines])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left: Text */}
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Available for work
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Architecting
            <br />
            <span className="text-primary">the Fullstack.</span>
          </h1>

          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Focused on building performant, scalable systems with clean
            architecture. From pixel-perfect interfaces to resilient APIs.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              View Work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-5 py-2.5 font-mono text-sm text-foreground transition-colors hover:bg-border"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right: Terminal */}
        <div className="w-full max-w-md lg:max-w-sm xl:max-w-md">
          <div className="overflow-hidden rounded-lg border border-border bg-card">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Circle className="h-3 w-3 fill-[#ef4444] text-[#ef4444]" />
              <Circle className="h-3 w-3 fill-[#eab308] text-[#eab308]" />
              <Circle className="h-3 w-3 fill-primary text-primary" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                terminal
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-4">
              <div className="space-y-1 font-mono text-sm">
                {terminalLines.slice(0, visibleLines).map((line, i) => (
                  <div key={i} className="flex items-start gap-2">
                    {line.prompt ? (
                      <>
                        <span className="select-none text-primary">
                          {"$"}
                        </span>
                        <span className="text-foreground">{line.text}</span>
                      </>
                    ) : (
                      <span className="pl-4 text-muted-foreground">
                        {line.text}
                      </span>
                    )}
                  </div>
                ))}
                {visibleLines >= terminalLines.length && (
                  <div className="flex items-start gap-2">
                    <span className="select-none text-primary">{"$"}</span>
                    <span className="inline-block h-4 w-2 animate-blink bg-primary" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
