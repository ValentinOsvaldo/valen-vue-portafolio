# Valenvue — Personal Portfolio

A modern, responsive portfolio site built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features a terminal-style hero, experience timeline, tech stack with theme-aware icons, and project highlights—with full light/dark mode support.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

---

## Features

- **Hero** — Terminal-style intro with typewriter effect and profile snippet
- **Experience** — Timeline of roles with tech tags and SVGL icons (theme-aware where light/dark variants exist)
- **Tech stack** — Categorized technologies (Frontend, Backend, Tools & DevOps) with [SVGL](https://www.svgl.dev/) icons
- **Projects** — Highlighted projects with tech badges and icons
- **Theme toggle** — Light/dark mode via `next-themes` (nav + mobile menu)
- **Resume** — Download link for PDF resume from the nav
- **Connect** — Footer with social links (GitHub, LinkedIn, Email)
- **Analytics** — Vercel Analytics wired in

---

## Tech stack

| Area        | Technologies                                              |
| ----------- | --------------------------------------------------------- |
| Framework   | Next.js 16, React 19                                     |
| Language    | TypeScript 5.7                                            |
| Styling     | Tailwind CSS 4, tw-animate-css                            |
| Icons       | [lucide-react](https://lucide.dev/), [@ridemountainpig/svgl-react](https://www.svgl.dev/) (tech logos) |
| Theme       | next-themes (class-based, system-aware)                   |
| Fonts       | Inter (sans), Fira Code (mono) via next/font              |

---

## Getting started

### Prerequisites

- **Node.js** 18.18+
- **pnpm** (recommended) or npm / yarn

### Install and run

```bash
# Clone the repo (or use your own fork)
git clone https://github.com/your-username/valenvue.git
cd valenvue

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

```bash
pnpm build   # Production build
pnpm start   # Run production server
pnpm lint    # Run ESLint
```

---

## Project structure

```
valenvue/
├── app/
│   ├── layout.tsx      # Root layout, fonts, ThemeProvider, metadata
│   ├── page.tsx        # Home page composition
│   └── globals.css     # Tailwind, CSS variables (light/dark)
├── components/
│   ├── navigation.tsx   # Header, nav links, theme toggle, resume CTA
│   ├── hero.tsx        # Terminal-style hero
│   ├── experience.tsx  # Experience timeline + tags with SVGL icons
│   ├── tech-stack.tsx  # Stack grid with theme-aware SVGL icons
│   ├── projects.tsx    # Project cards with tech badges
│   ├── footer.tsx      # Connect section + social links
│   ├── section-divider.tsx
│   ├── theme-provider.tsx  # next-themes wrapper
│   └── ui/             # Shared UI primitives (optional usage)
├── public/
│   ├── resume.pdf      # Resume PDF (add your own)
│   └── favicon, icons
├── lib/
│   └── utils.ts
└── package.json
```

---

## Customization

- **Content** — Edit section data in `components/hero.tsx`, `experience.tsx`, `tech-stack.tsx`, `projects.tsx`, and `footer.tsx` (socials, links, copy).
- **Resume** — Replace `public/resume.pdf` and keep the nav link pointing to `/resume.pdf`.
- **Theme** — Default theme and system preference are set in `app/layout.tsx` via `ThemeProvider` (`defaultTheme`, `enableSystem`). Toggle logic lives in `components/navigation.tsx`.
- **Colors** — Light/dark palettes and primary/accent are in `app/globals.css` (`:root` for light, `.dark` for dark).

---

## Deployment

The app is static-friendly and can be deployed to **Vercel**, **Netlify**, or any Node host that supports Next.js.

**Vercel (recommended):**

```bash
pnpm build
# Deploy via Vercel CLI or connect the repo in the Vercel dashboard.
```

Ensure `resume.pdf` and any assets in `public/` are committed so they’re available in production.

---

## License

Private / personal use. Replace with your own license if you open-source it.
