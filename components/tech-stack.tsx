'use client';

import type { SVGProps } from 'react';
import { useTheme } from 'next-themes';
import { Layout, Server, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  AmazonWebServicesDark,
  AmazonWebServicesLight,
  Docker,
  Git,
  GitHubDark,
  GitHubLight,
  MongoDBDark,
  MongoDBLight,
  NestJS,
  Nextjs,
  Nodejs,
  Nuxt,
  PostgreSQL,
  Python,
  RailwayDark,
  RailwayLight,
  ReactDark,
  ReactLight,
  Redis,
  ShadcnUiDark,
  ShadcnUiLight,
  Storybook,
  TailwindCSS,
  TurborepoDark,
  TurborepoLight,
  TypeScript,
  VercelDark,
  VercelLight,
  Vitest,
  Vue,
} from '@ridemountainpig/svgl-react';

/** SVGL components: (props: SVGProps<SVGSVGElement>) => JSX.Element */
type SvglIcon = (props: SVGProps<SVGSVGElement>) => React.JSX.Element;

type ThemeAwareIcon = SvglIcon | { dark: SvglIcon; light: SvglIcon };

type StackItem = {
  name: string;
  icon: ThemeAwareIcon;
};

type StackCategory = {
  title: string;
  icon: LucideIcon;
  items: StackItem[];
};

const stackData: StackCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    items: [
      { name: 'React', icon: { dark: ReactDark, light: ReactLight } },
      { name: 'React Native', icon: { dark: ReactDark, light: ReactLight } },
      { name: 'Next.js', icon: Nextjs },
      { name: 'Vue', icon: Vue },
      { name: 'Nuxt', icon: Nuxt },
      { name: 'TypeScript', icon: TypeScript },
      { name: 'Tailwind', icon: TailwindCSS },
      { name: 'Shadcn', icon: { dark: ShadcnUiDark, light: ShadcnUiLight } },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      { name: 'NestJS', icon: NestJS },
      { name: 'Node.js', icon: Nodejs },
      { name: 'Python', icon: Python },
      { name: 'Postgres', icon: PostgreSQL },
      { name: 'MongoDB', icon: { dark: MongoDBDark, light: MongoDBLight } },
      { name: 'Redis', icon: Redis },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    items: [
      { name: 'Git', icon: Git },
      { name: 'Docker', icon: Docker },
      { name: 'AWS', icon: { dark: AmazonWebServicesDark, light: AmazonWebServicesLight } },
      { name: 'Vercel', icon: { dark: VercelDark, light: VercelLight } },
      { name: 'Railway', icon: { dark: RailwayDark, light: RailwayLight } },
      { name: 'GitHub CI/CD', icon: { dark: GitHubDark, light: GitHubLight } },
      { name: 'Turborepo', icon: { dark: TurborepoDark, light: TurborepoLight } },
      { name: 'Vitest', icon: Vitest },
      { name: 'Storybook', icon: Storybook },
    ],
  },
];

function getThemeIcon(icon: ThemeAwareIcon, isDark: boolean): SvglIcon {
  if (typeof icon === 'function') return icon;
  return isDark ? icon.dark : icon.light;
}

export function TechStack() {
  const { resolvedTheme } = useTheme();
  const isDark = (resolvedTheme ?? 'dark') === 'dark';

  return (
    <section id="stack" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">
            Technologies
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground">
            The Stack
          </h2>
          <p className="mt-3 max-w-lg text-muted-foreground">
            Tools and technologies I use to build reliable, scalable systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stackData.map((category) => (
            <div key={category.title}>
              <div className="mb-4 flex items-center gap-2">
                <category.icon className="h-4 w-4 text-primary" />
                <h3 className="font-mono text-sm font-medium uppercase tracking-wider text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-col gap-2">
                {category.items.map((item) => {
                  const Icon = getThemeIcon(item.icon, isDark);
                  return (
                  <div
                    key={item.name}
                    className="hover-glow group flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-all duration-200 hover:border-primary/30 hover:bg-secondary"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                      {item.name}
                    </span>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
