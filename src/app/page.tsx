import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { links } from "@/lib/site";

const highlights = [
  { title: "Full Stack Web", stack: "TypeScript, Next.js, Node.js", accent: false },
  { title: "Inteligência Artificial", stack: "OpenAI, Anthropic & Vercel AI SDK", accent: false },
  { title: "Mobile & Infra", stack: "React Native, Docker, PostgreSQL", accent: true },
];

const specialties = [
  {
    icon: "desktop_windows",
    iconColor: "text-primary dark:text-emerald-400",
    label: "01 / Frontend",
    tag: "Web",
    title: "Desenvolvimento Front-end",
    description:
      "React, Next.js, TypeScript e Tailwind CSS. Componentização, gerenciamento de estado e alta performance.",
    stack: "Next.js · TypeScript · Tailwind",
  },
  {
    icon: "dns",
    iconColor: "text-secondary dark:text-emerald-300",
    label: "02 / Backend",
    tag: "APIs",
    title: "Desenvolvimento Back-end",
    description: "Node.js, NestJS, Fastify e APIs REST. Arquitetura escalável e comunicação assíncrona.",
    stack: "Node.js · NestJS · Fastify",
  },
  {
    icon: "neurology",
    iconColor: "text-primary dark:text-emerald-400",
    label: "03 / IA",
    tag: "Agents",
    title: "Inteligência Artificial",
    description: "Integração de LLMs, agentes autônomos, OpenAI, Anthropic SDK e Vercel AI SDK.",
    stack: "OpenAI · Anthropic · Vercel AI",
  },
  {
    icon: "cloud_sync",
    iconColor: "text-tertiary dark:text-emerald-200",
    label: "04 / Mobile & Cloud",
    tag: "DevOps",
    title: "Mobile & Infraestrutura",
    description:
      "React Native, Expo, NativeWind, Docker, AWS e bancos de dados modernos (PostgreSQL, Supabase, Neon).",
    stack: "React Native · Docker · Postgres",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      {/* Diffused Atmospheric Light Orbs */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-secondary-fixed/30 dark:bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-[500px] h-[500px] bg-primary-fixed-dim/20 dark:bg-emerald-900/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[850px] left-12 w-[640px] h-[640px] bg-tertiary-fixed/25 dark:bg-emerald-800/10 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pt-8 md:pt-14 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Coluna Esquerda: Conteúdo & Métricas */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            {/* Live Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-lowest/80 dark:bg-[#141917]/85 backdrop-blur-xl shadow-sm dark:border dark:border-white/10">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary dark:bg-emerald-400" />
              </span>
              <span className="font-label-sm text-label-sm tracking-wider text-primary dark:text-emerald-400 font-semibold">
                Disponível para Projetos • Atualmente na Adalink • São Paulo, Brasil
              </span>
            </div>

            {/* Headline Principal */}
            <div className="space-y-4">
              <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface dark:text-white tracking-tight md:tracking-tight">
                Engenheiro de Software{" "}
                <span className="text-primary dark:text-emerald-400 italic font-serif">Full Stack</span> &amp; AI
                Engineering.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-neutral-400 max-w-xl">
                Desenvolvo aplicações web, APIs e arquiteturas escaláveis conectando engenharia de software ao
                potencial da Inteligência Artificial aplicada. Transformando desafios complexos em produtos com
                propósito.
              </p>
            </div>

            {/* Botões de Ação Glassmorphism */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary dark:bg-emerald-600 text-on-primary font-label-md text-label-md font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                href="/projetos"
              >
                <span>Explorar Projetos</span>
                <Icon className="text-lg group-hover:translate-x-1 transition-transform" name="arrow_forward" />
              </Link>
              <a
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-lowest/70 dark:bg-white/[0.08] backdrop-blur-2xl text-on-surface dark:text-[#EAEFEA] font-label-md text-label-md font-medium shadow-md hover:bg-surface-container-lowest dark:hover:bg-white/[0.14] transition-all duration-200 hover:shadow-lg dark:border dark:border-white/10"
                href={links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>Acessar GitHub</span>
                <Icon className="text-lg text-secondary dark:text-emerald-400" name="terminal" />
              </a>
              <div className="flex items-center gap-2 pl-2">
                <a
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full bg-surface-container-lowest/60 dark:bg-white/[0.08] backdrop-blur-xl text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white shadow-sm flex items-center justify-center hover:bg-surface-container-lowest dark:hover:bg-white/[0.14] transition-all hover:scale-105 dark:border dark:border-white/10"
                  href={links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="text-[20px]" name="share" />
                </a>
                <Link
                  aria-label="Contato"
                  className="w-11 h-11 rounded-full bg-surface-container-lowest/60 dark:bg-white/[0.08] backdrop-blur-xl text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white shadow-sm flex items-center justify-center hover:bg-surface-container-lowest dark:hover:bg-white/[0.14] transition-all hover:scale-105 dark:border dark:border-white/10"
                  href="/contato"
                >
                  <Icon className="text-[20px]" name="mail" />
                </Link>
              </div>
            </div>

            {/* Glass Metrics Bento Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-6 max-w-xl">
              {highlights.map((item) => (
                <div
                  className="rounded-lg bg-surface-container-lowest/60 dark:bg-[#141917]/75 backdrop-blur-2xl p-5 shadow-sm flex flex-col justify-between dark:border dark:border-white/10"
                  key={item.title}
                >
                  <span
                    className={`font-title-md text-title-md font-bold tracking-tight ${
                      item.accent ? "text-primary dark:text-emerald-400" : "text-on-surface dark:text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400 mt-1">
                    {item.stack}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna Direita: Avatar 3D Glass Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Optical Halo Behind Avatar */}
            <div className="absolute inset-4 bg-gradient-to-tr from-secondary-container/40 via-surface-container-lowest/30 to-primary-container/20 dark:from-emerald-900/30 dark:via-transparent dark:to-emerald-700/20 rounded-xl blur-3xl -z-10" />

            {/* Apple Glass Container Frame */}
            <div className="relative w-full max-w-[430px] rounded-xl bg-surface-container-lowest/40 dark:bg-[#141917]/60 backdrop-blur-3xl shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 p-4 flex flex-col items-center group transition-all duration-500 hover:shadow-2xl">
              {/* Inner Frosted Screen Bezel */}
              <div className="relative w-full aspect-[0.72] rounded-lg overflow-hidden bg-gradient-to-b from-surface-container-high/40 to-surface-container-low/80 dark:from-neutral-800/40 dark:to-neutral-900/80 flex items-end justify-center shadow-inner">
                <Image
                  alt="Avatar 3D de Fernando Rodrigues"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, 100vw"
                  src="/images/avatar.png"
                />
                {/* Ambient Rim Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 dark:from-[#141917]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badges / Spatial Chips */}
              <div className="absolute -top-4 -left-2 sm:-left-6 px-4 py-2.5 rounded-full bg-surface-container-lowest/90 dark:bg-[#1A201D]/90 backdrop-blur-2xl shadow-lg dark:border dark:border-white/10 flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <Icon className="text-primary dark:text-emerald-400 text-base" name="code" />
                <span className="font-label-md text-label-md font-medium text-on-surface dark:text-white">
                  TypeScript &amp; Next.js
                </span>
              </div>
              <div className="absolute top-1/2 -right-2 sm:-right-8 -translate-y-1/2 px-4 py-2.5 rounded-full bg-surface-container-lowest/90 dark:bg-[#1A201D]/90 backdrop-blur-2xl shadow-lg dark:border dark:border-white/10 flex items-center gap-2 hover:translate-x-1 transition-transform">
                <Icon className="text-secondary dark:text-emerald-300 text-base" name="psychology" />
                <span className="font-label-md text-label-md font-medium text-on-surface dark:text-white">
                  AI Agents &amp; LLMs
                </span>
              </div>
              <div className="absolute -bottom-4 -left-1 sm:-left-3 px-4 py-2.5 rounded-full bg-surface-container-lowest/90 dark:bg-[#1A201D]/90 backdrop-blur-2xl shadow-lg dark:border dark:border-white/10 flex items-center gap-2 hover:-translate-y-1 transition-transform">
                <Icon className="text-tertiary dark:text-emerald-200 text-base" name="smartphone" />
                <span className="font-label-md text-label-md font-medium text-on-surface dark:text-white">
                  React Native
                </span>
              </div>

              {/* Apple Specular Tag Footer */}
              <div className="w-full mt-4 px-3 py-2 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary dark:bg-emerald-400" /> Node.js &amp; NestJS
                </span>
                <span className="font-mono text-tertiary dark:text-emerald-300/80">Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pt-10 pb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/60 dark:bg-white/[0.06] backdrop-blur-md">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary dark:text-emerald-400">
                Tech Stack &amp; Domínios
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight">
              Especialidades Técnicas &amp; Criativas
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 max-w-md">
            Engenharia de software ponta a ponta: do front-end performático a pipelines de inteligência artificial
            generativa e arquitetura em nuvem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item) => (
            <div
              className="group relative rounded-xl bg-surface-container-lowest/65 dark:bg-[#141917]/75 backdrop-blur-2xl p-7 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              key={item.label}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-lg bg-surface-container-low dark:bg-white/[0.06] flex items-center justify-center ${item.iconColor} mb-6 shadow-sm group-hover:scale-110 transition-transform`}
                >
                  <Icon className="text-2xl" name={item.icon} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-sm text-label-sm font-semibold text-secondary dark:text-emerald-400 uppercase tracking-wider">
                    {item.label}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-secondary-container/50 dark:bg-emerald-950/50 dark:border dark:border-emerald-500/20 font-label-sm text-label-sm text-on-secondary-container dark:text-emerald-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md text-on-surface dark:text-white font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
                  {item.description}
                </p>
              </div>
              <div className="mt-8 pt-4 flex items-center justify-between text-on-surface-variant dark:text-neutral-400 font-label-sm text-label-sm">
                <span>{item.stack}</span>
                <Icon className="text-base group-hover:translate-x-1 transition-transform" name="arrow_outward" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Callout / Quick Reach Capsule */}
      <section className="w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pb-16">
        <div className="rounded-xl bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-low/70 to-surface-container-lowest/90 dark:from-[#141917]/90 dark:via-[#101413]/70 dark:to-[#141917]/90 backdrop-blur-3xl p-8 md:p-12 shadow-lg dark:border dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-label-sm text-label-sm uppercase font-semibold tracking-wider text-secondary dark:text-emerald-400">
              Vamos Conectar
            </span>
            <h4 className="font-headline-md text-headline-md font-semibold text-on-surface dark:text-white">
              Tem um projeto em mente? Vamos conversar.
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 max-w-xl">
              Disponível para novos desafios técnicos, desenvolvimento de produtos com Inteligência Artificial e
              consultoria de software.
            </p>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary dark:bg-emerald-600 text-on-primary font-label-md text-label-md font-semibold shadow-md hover:bg-primary-container dark:hover:bg-emerald-500 transition-all hover:scale-105 active:scale-95"
              href="/contato"
            >
              <span>Iniciar Conversa</span>
              <Icon className="text-lg" name="mail" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
