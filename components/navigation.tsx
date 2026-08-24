"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Command, Download, Menu, Moon, Sun, X } from "lucide-react"

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#work" },
  { label: "Connect", href: "#connect" },
]

function ThemeIcon({ isDark, className }: { isDark: boolean; className: string }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <Sun
        className={`absolute inset-0 h-full w-full transition-[transform,opacity] duration-200 ease-out ${
          isDark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
        }`}
      />
      <Moon
        className={`absolute inset-0 h-full w-full transition-[transform,opacity] duration-200 ease-out ${
          isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
        }`}
      />
    </span>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted && (resolvedTheme ?? theme) === "dark"
  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ease-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
          <Command className="h-5 w-5" />
          <span className="font-mono text-sm font-medium tracking-tight">
            {"~/valen.vue"}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground active:scale-[0.97]"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <ThemeIcon isDark={isDark} className="h-3.5 w-3.5" />
          </button>
          <a
            href="/resume.pdf"
            download
            className="ml-2 flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-foreground active:scale-[0.97]"
          >
            <Download className="h-3 w-3" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-[0.97] md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <Menu
            className={`absolute h-5 w-5 transition-[transform,opacity] duration-200 ease-out ${
              mobileOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute h-5 w-5 transition-[transform,opacity] duration-200 ease-out ${
              mobileOpen ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[grid-template-rows,opacity] duration-200 ease-emphasized motion-reduce:duration-100 md:hidden ${
          mobileOpen ? "grid-rows-[1fr] border-b opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
              <button
                type="button"
                onClick={toggleTheme}
                className="flex items-center gap-2 rounded-md px-3 py-2 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground active:scale-[0.97]"
              >
                <ThemeIcon isDark={isDark} className="h-4 w-4" />
                <span>{isDark ? "Light mode" : "Dark mode"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
