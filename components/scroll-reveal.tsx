"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

/** Fades + lifts children into view once, the first time they cross into
 * the viewport. `index` staggers siblings (capped so long lists don't
 * cascade for over a second). */
export function ScrollReveal({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "-80px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${Math.min(index, 6) * 50}ms` : "0ms" }}
      className={`transition-[opacity,transform] duration-300 ease-emphasized motion-reduce:duration-150 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0 motion-reduce:translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  )
}
