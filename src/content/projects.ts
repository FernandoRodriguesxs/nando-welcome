export type ProjectCategory = "saas" | "mobile" | "ia";

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  badge: { icon: string; label: string };
  highlight?: { icon: string; title: string; subtitle: string; status: string };
  stack: string[];
  repo: string;
  categories: ProjectCategory[];
};

export const projectFilters: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "saas", label: "Full Stack & SaaS" },
  { value: "mobile", label: "Mobile" },
  { value: "ia", label: "Inteligência Artificial" },
];

export const projects: Project[] = [
  {
    slug: "foodflow-ai",
    name: "FoodFlow AI",
    kicker: "SaaS • Full Stack • IA",
    description:
      "Plataforma SaaS voltada para restaurantes, desenvolvida para centralizar pedidos provenientes do iFood e WhatsApp em um painel unificado com atualizações em tempo real. Integração entre sistemas, processamento assíncrono e recursos de IA.",
    image: "/images/foodflow-ai.png",
    imageAlt: "FoodFlow AI - Plataforma SaaS para restaurantes",
    badge: { icon: "hub", label: "Tempo Real & IA Integrada" },
    highlight: {
      icon: "hub",
      title: "Hub Unificado de Pedidos",
      subtitle: "iFood & WhatsApp em um só painel",
      status: "Ativo",
    },
    stack: ["NestJS", "Fastify", "Next.js", "Anthropic SDK", "BullMQ", "Redis", "Drizzle ORM", "Neon", "Socket.io", "Turborepo"],
    repo: "https://github.com/FernandoRodriguesxs/foodflow-ai",
    categories: ["saas", "ia"],
  },
  {
    slug: "tico-app",
    name: "Tico App",
    kicker: "Desenvolvimento Mobile • IA",
    description:
      "Aplicativo de acompanhamento alimentar que utiliza inteligência artificial para facilitar o registro de refeições por linguagem natural e estimar calorias de alimentos com precisão.",
    image: "/images/tico-app.png",
    imageAlt: "Tico App - Aplicativo Mobile de Acompanhamento Alimentar com IA",
    badge: { icon: "smartphone", label: "Mobile & IA" },
    stack: ["React Native", "Expo", "NativeWind", "NestJS", "Prisma", "PostgreSQL", "OpenAI"],
    repo: "https://github.com/FernandoRodriguesxs/tico-app",
    categories: ["mobile", "ia"],
  },
  {
    slug: "nexi-chatbot",
    name: "Nexi Chatbot",
    kicker: "Aplicação Web • IA",
    description:
      "Aplicação de chat com inteligência artificial, desenvolvida para explorar experiências conversacionais modernas, respostas em streaming e integração profunda com APIs de IA.",
    image: "/images/nexi-chatbot.png",
    imageAlt: "Nexi Chatbot - Aplicação Web com IA Conversacional",
    badge: { icon: "chat_bubble", label: "Streaming AI" },
    stack: ["Next.js", "TypeScript", "Vercel AI SDK", "OpenAI", "Zod"],
    repo: "https://github.com/FernandoRodriguesxs/nexi-chatbot",
    categories: ["ia"],
  },
];
