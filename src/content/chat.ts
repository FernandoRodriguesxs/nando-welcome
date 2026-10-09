import type { IconName } from "@/components/icon";
import { links } from "@/lib/site";

export type ChatTopic = {
  id: string;
  label: string;
  icon: IconName;
  // Normalized (lowercase, no accents) words that route a typed question here.
  keywords: string[];
  answer: string[];
  tags?: string[];
  action?: { label: string; href: string; external?: boolean };
  next: string[];
};

export const chatGreeting = [
  "Oi! Sou o assistente do Fernando 👋",
  "Posso te contar sobre os projetos, a stack, a experiência ou como falar com ele. Escolhe um tema aí embaixo.",
];

export const chatFallback = {
  answer: [
    "Essa eu ainda não sei responder por aqui.",
    "Mas o Fernando responde rapidinho pelo e-mail ou LinkedIn. Enquanto isso, dá uma olhada nos temas abaixo.",
  ],
  action: { label: "Ir para contato", href: "/contato" },
};

export const chatTopics: ChatTopic[] = [
  {
    id: "sobre",
    label: "Quem é o Fernando?",
    icon: "person",
    keywords: ["quem", "sobre", "fernando", "voce", "apresenta", "perfil"],
    answer: [
      "O Fernando é Engenheiro de Software Full Stack com foco em IA aplicada, baseado em São Paulo.",
      "Hoje ele desenvolve aplicações e soluções com LLMs na Adalink, cuidando de APIs, interfaces, automações e integrações via WhatsApp.",
    ],
    next: ["stack", "projetos", "hobbies"],
  },
  {
    id: "stack",
    label: "Qual a stack?",
    icon: "layers",
    keywords: ["stack", "tecnologia", "tecnologias", "linguagem", "framework", "react", "next", "node", "nest", "typescript", "ferramenta"],
    answer: [
      "No dia a dia: TypeScript de ponta a ponta. React e Next.js no front, Node.js e NestJS (ou Fastify) no back.",
      "Para dados, PostgreSQL com Prisma ou Drizzle, Redis e filas com BullMQ. No mobile, React Native com Expo.",
    ],
    tags: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "React Native"],
    next: ["ia", "projetos", "experiencia"],
  },
  {
    id: "ia",
    label: "Trabalha com IA?",
    icon: "neurology",
    keywords: ["ia", "ai", "inteligencia", "llm", "gpt", "openai", "anthropic", "claude", "agente", "agentes", "chatbot", "rag"],
    answer: [
      "Sim, é o foco atual dele. Integra LLMs em produtos reais: agentes, respostas em streaming e automações inteligentes.",
      "Trabalha com OpenAI, Anthropic SDK e Vercel AI SDK, e anda estudando sistemas multiagentes, RAG e busca vetorial.",
    ],
    tags: ["OpenAI", "Anthropic SDK", "Vercel AI SDK", "RAG"],
    next: ["projetos", "disponibilidade"],
  },
  {
    id: "projetos",
    label: "Projetos em destaque",
    icon: "folder_open",
    keywords: ["projeto", "projetos", "portfolio", "foodflow", "tico", "nexi", "trabalhos", "case", "cases"],
    answer: [
      "Três que ele mais gosta de mostrar:",
      "FoodFlow AI: SaaS que junta pedidos do iFood e do WhatsApp num painel em tempo real.",
      "Tico App: app de nutrição que registra refeições por linguagem natural.",
      "Nexi Chatbot: chat com IA e respostas em streaming.",
    ],
    tags: ["FoodFlow AI", "Tico App", "Nexi Chatbot"],
    action: { label: "Ver projetos", href: "/projetos" },
    next: ["stack", "experiencia"],
  },
  {
    id: "experiencia",
    label: "Experiência",
    icon: "work_history",
    keywords: ["experiencia", "carreira", "trabalho", "emprego", "adalink", "empresa", "trajetoria", "tempo", "anos"],
    answer: [
      "Desde nov/2024 ele é Desenvolvedor de Software na Adalink. Antes passou por suporte de TI na Tecnocomp e por estágio em desenvolvimento na GDC Brasil.",
      "É formado em Análise e Desenvolvimento de Sistemas pela Brazcubas.",
    ],
    action: { label: "Ver trajetória", href: "/habilidades#trajetoria" },
    next: ["stack", "disponibilidade"],
  },
  {
    id: "hobbies",
    label: "E fora do código?",
    icon: "favorite",
    keywords: ["hobby", "hobbies", "hobbie", "jiu", "jitsu", "jiujitsu", "faixa", "corrida", "correr", "strava", "esporte", "treino", "lazer"],
    answer: [
      "Fora do código ele treina jiu-jitsu, atualmente faixa branca com 1 grau.",
      "E corre com frequência, com os treinos registrados no Strava.",
    ],
    tags: ["Jiu-jitsu", "Corrida", "Strava"],
    action: { label: "Ver no Strava", href: links.strava, external: true },
    next: ["sobre", "contato"],
  },
  {
    id: "disponibilidade",
    label: "Está disponível?",
    icon: "event_available",
    keywords: ["disponivel", "disponibilidade", "freela", "freelance", "vaga", "oportunidade", "contratar", "remoto", "presencial", "hibrido"],
    answer: [
      "Está aberto a novas conexões, oportunidades e projetos em software e IA.",
      "Atende de São Paulo, em formato presencial, híbrido ou remoto.",
    ],
    next: ["contato", "projetos"],
  },
  {
    id: "contato",
    label: "Como falar com ele?",
    icon: "mail",
    keywords: ["contato", "email", "e-mail", "linkedin", "github", "falar", "conversar", "whatsapp", "mensagem"],
    answer: [
      `O jeito mais rápido é o e-mail ${links.email}, ou uma mensagem no LinkedIn.`,
      "Também dá para mandar direto pelo formulário da página de contato.",
    ],
    action: { label: "Abrir contato", href: "/contato" },
    next: ["sobre", "projetos"],
  },
];

export const initialTopicIds = ["sobre", "projetos", "stack", "ia", "contato"];

const normalize = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ");

// Picks the topic whose keywords appear most often in a typed question.
export function matchTopic(question: string): ChatTopic | undefined {
  const words = new Set(normalize(question).split(/\s+/).filter(Boolean));
  let best: { topic: ChatTopic; score: number } | undefined;

  for (const topic of chatTopics) {
    const score = topic.keywords.filter((keyword) => words.has(keyword)).length;
    if (score > 0 && (!best || score > best.score)) best = { topic, score };
  }

  return best?.topic;
}
