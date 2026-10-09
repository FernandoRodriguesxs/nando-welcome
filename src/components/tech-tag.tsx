import type { CSSProperties } from "react";
import {
  siAnthropic,
  siDocker,
  siDrizzle,
  siExpo,
  siExpress,
  siFastify,
  siGit,
  siGithub,
  siGithubactions,
  siJavascript,
  siJira,
  siLaravel,
  siNeon,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPnpm,
  siPostgresql,
  siPrisma,
  siReact,
  siRedis,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTurborepo,
  siTypescript,
  siVercel,
} from "simple-icons";
import { siAmazonaws, siOpenai } from "./legacy-brand-icons";

type BrandIcon = { title: string; hex: string; path: string };

// Tag label -> official brand mark. Labels without a logo (concepts, tools with no
// official icon) render as plain tags.
const brandIcons: Record<string, BrandIcon> = {
  "Anthropic SDK": siAnthropic,
  AWS: siAmazonaws,
  "CI/CD": siGithubactions,
  Docker: siDocker,
  "Drizzle ORM": siDrizzle,
  "Express.js": siExpress,
  Expo: siExpo,
  Fastify: siFastify,
  Git: siGit,
  GitHub: siGithub,
  JavaScript: siJavascript,
  Jira: siJira,
  Laravel: siLaravel,
  Neon: siNeon,
  NestJS: siNestjs,
  "Next.js": siNextdotjs,
  "Node.js": siNodedotjs,
  OpenAI: siOpenai,
  PHP: siPhp,
  pnpm: siPnpm,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  React: siReact,
  "React Native": siReact,
  Redis: siRedis,
  "Socket.io": siSocketdotio,
  Supabase: siSupabase,
  "Tailwind CSS": siTailwindcss,
  Turborepo: siTurborepo,
  TypeScript: siTypescript,
  Vercel: siVercel,
  "Vercel AI SDK": siVercel,
};

// Near-black marks (Vercel, Next.js, GitHub...) would vanish on the dark theme.
function isNearBlack(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.25;
}

export function TechTag({ name, accent = false }: { name: string; accent?: boolean }) {
  const icon = brandIcons[name];

  if (!icon) return <span className={accent ? "tag tag-accent" : "tag"}>{name}</span>;

  return (
    <span className={`tag ${accent ? "text-on-surface dark:text-neutral-200 font-semibold" : ""}`}>
      <svg
        aria-hidden="true"
        className={`w-3 h-3 shrink-0 text-[var(--brand)] ${isNearBlack(icon.hex) ? "dark:text-white" : ""}`}
        fill="currentColor"
        style={{ "--brand": `#${icon.hex}` } as CSSProperties}
        viewBox="0 0 24 24"
      >
        <path d={icon.path} />
      </svg>
      {name}
    </span>
  );
}
