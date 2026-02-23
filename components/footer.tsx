import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/valentin-osvaldo" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/valentin-osvaldo" },
  // { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "Email", icon: Mail, href: "mailto:ovalentindev@gmail.com" },
]

export function Footer() {
  return (
    <footer id="connect" className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {/* Contact CTA */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-primary">
              Connect
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              {"Let's build something."}
            </h2>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Open to interesting projects, collaborations, and engineering
              conversations.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-primary/30 hover:bg-secondary hover:text-primary"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        {/* <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-muted-foreground">
            {"Built with Next.js & Tailwind CSS"}
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {"Designed in the terminal."}
          </p>
        </div> */}
      </div>
    </footer>
  )
}
