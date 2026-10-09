import type { IconName } from "@/components/icon";

export type StackGroup = {
  icon: IconName;
  title: string;
  subtitle: string;
  badge: { label: string; emphasis: boolean };
  core: string[];
  extra: string[];
};

export const stackGroups: StackGroup[] = [
  {
    icon: "psychology",
    title: "Inteligência Artificial",
    subtitle: "Automações, LLMs e orquestração de agentes",
    badge: { label: "Destaque", emphasis: true },
    core: ["OpenAI", "Anthropic SDK", "Vercel AI SDK"],
    extra: ["Integração de LLMs", "Agentes de IA", "Automação inteligente"],
  },
  {
    icon: "laptop_mac",
    title: "Front-end",
    subtitle: "Interfaces fluidas, alta performance e usabilidade",
    badge: { label: "Core", emphasis: true },
    core: ["TypeScript", "React", "Next.js"],
    extra: ["JavaScript", "Tailwind CSS"],
  },
  {
    icon: "dns",
    title: "Back-end",
    subtitle: "APIs robustas, microsserviços e resiliência",
    badge: { label: "Core", emphasis: true },
    core: ["Node.js", "NestJS"],
    extra: ["Fastify", "Express.js", "APIs REST", "PHP", "Laravel"],
  },
  {
    icon: "smartphone",
    title: "Mobile",
    subtitle: "Aplicações nativas multiplataforma ágeis",
    badge: { label: "Multiplataforma", emphasis: false },
    core: [],
    extra: ["React Native", "Expo", "NativeWind"],
  },
];

export const toolGroups: { icon: IconName; title: string; subtitle: string; items: string[] }[] = [
  {
    icon: "database",
    title: "Bancos & Persistência",
    subtitle: "Modelagem, ORM e bancos relacionais",
    items: ["PostgreSQL", "Prisma", "Drizzle ORM", "Supabase", "Redis", "Neon"],
  },
  {
    icon: "cloud_sync",
    title: "Infra & Ferramentas",
    subtitle: "Deploy contínuo, filas e escalabilidade",
    items: ["Docker", "AWS", "Git", "GitHub", "Turborepo", "pnpm", "Vercel", "CI/CD", "Socket.io", "BullMQ"],
  },
];

export type Experience = {
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    period: "Nov 2024 — Atualmente",
    location: "São Paulo, Brasil",
    role: "Desenvolvedor de Software",
    company: "Adalink",
    description:
      "Desenvolvimento de aplicações Full Stack e soluções com IA aplicada. APIs, interfaces, LLMs, comunicação via WhatsApp e automações.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "PHP", "Laravel", "Docker", "AWS"],
  },
  {
    period: "Mar 2024 — Set 2024",
    location: "São Paulo, Brasil",
    role: "Técnico de Suporte em TI",
    company: "Tecnocomp Tecnologia e Serviços",
    description: "Suporte técnico, atendimento remoto, acessos corporativos, VPNs e Jira.",
    tags: ["Suporte TI", "VPN", "Jira"],
  },
  {
    period: "Jul 2022 — Dez 2022",
    location: "Brasil",
    role: "Estagiário de Desenvolvimento de Software",
    company: "GDC Brasil",
    description: "Desenvolvimento de software e consolidação técnica.",
    tags: ["Desenvolvimento", "Software"],
  },
  {
    period: "Fev 2020 — Jun 2021",
    location: "Brasil",
    role: "Suporte Técnico",
    company: "TDGI",
    description: "Manutenção de equipamentos, chamados técnicos e suporte a usuários.",
    tags: ["Helpdesk", "Hardware"],
  },
  {
    period: "Abr 2019 — Dez 2019",
    location: "Brasil",
    role: "Jovem Aprendiz",
    company: "TMKT",
    description: "Organização e trabalho em equipe.",
    tags: ["Processos", "Comunicação"],
  },
];
