import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { links } from "@/lib/site";

const highlights: { icon: IconName; title: string; stack: string }[] = [
  { icon: "code", title: "Full Stack Web", stack: "TypeScript · Next.js · Node.js" },
  { icon: "neurology", title: "Inteligência Artificial", stack: "OpenAI · Anthropic · Vercel AI SDK" },
  { icon: "smartphone", title: "Mobile & Infra", stack: "React Native · Docker · PostgreSQL" },
];

const specialties: {
  icon: IconName;
  iconColor: string;
  label: string;
  tag: string;
  title: string;
  description: string;
  stack: string;
}[] = [
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

const floatingChips: { icon: IconName; label: string; position: string }[] = [
  { icon: "code", label: "TypeScript & Next.js", position: "-top-3 -left-2 sm:-left-5" },
  { icon: "psychology", label: "AI Agents & LLMs", position: "top-1/2 -right-2 sm:-right-6 -translate-y-1/2" },
  { icon: "smartphone", label: "React Native", position: "-bottom-3 -left-1 sm:-left-3" },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

const iconButton =
  "btn btn-glass w-11 h-11 text-on-surface-variant hover:text-on-surface dark:text-neutral-400 dark:hover:text-white";

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
            {/* Live Status */}
            <Reveal
              className="inline-flex items-center gap-2 text-[12px] font-medium text-on-surface-variant dark:text-neutral-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-emerald-400" />
              </span>
              <span>
                <span className="text-primary dark:text-emerald-400 font-semibold">Disponível para projetos</span> ·
                Atualmente na Adalink · São Paulo, Brasil
              </span>
            </Reveal>

            {/* Headline Principal */}
            <Reveal className="space-y-4" style={delay(80)}>
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
            </Reveal>

            {/* Ações */}
            <Reveal className="flex flex-wrap items-center gap-3 pt-2" style={delay(160)}>
              <Link className="group btn btn-primary px-7 py-3.5" href="/projetos">
                <span>Explorar Projetos</span>
                <Icon className="text-lg btn-arrow" name="arrow_forward" />
              </Link>
              <a
                className="group btn btn-glass px-6 py-3.5"
                href={links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Acessar GitHub</span>
              </a>
              <div className="flex items-center gap-2 pl-1">
                <a
                  aria-label="LinkedIn"
                  className={iconButton}
                  href={links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <LinkedinIcon className="w-[18px] h-[18px]" />
                </a>
                <Link aria-label="Contato" className={iconButton} href="/contato">
                  <Icon className="text-[20px]" name="mail" />
                </Link>
              </div>
            </Reveal>

            {/* Áreas de atuação: lista compacta */}
            <Reveal as="ul"
              className="w-full max-w-xl pt-4 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-on-surface/[0.08] dark:divide-white/[0.08] border-t border-on-surface/[0.08] dark:border-white/[0.08]"
             
              style={delay(240)}>
              {highlights.map((item) => (
                <li className="flex items-start gap-2.5 py-4 sm:px-4 first:sm:pl-0" key={item.title}>
                  <Icon className="text-[18px] text-primary dark:text-emerald-400 mt-0.5" name={item.icon} />
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold leading-5 text-on-surface dark:text-white">{item.title}</p>
                    <p className="text-[12px] leading-4 mt-0.5 text-on-surface-variant dark:text-neutral-400">{item.stack}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>

          {/* Coluna Direita: Avatar 3D Glass Showcase */}
          <Reveal className="lg:col-span-5 relative flex items-center justify-center" style={delay(200)}>
            <div className="absolute inset-4 bg-gradient-to-tr from-secondary-container/40 via-surface-container-lowest/30 to-primary-container/20 dark:from-emerald-900/30 dark:via-transparent dark:to-emerald-700/20 rounded-xl blur-3xl -z-10" />

            <div className="relative w-full max-w-[430px] rounded-xl bg-surface-container-lowest/40 dark:bg-[#141917]/60 backdrop-blur-3xl shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 p-4 flex flex-col items-center transition-shadow duration-500 hover:shadow-2xl">
              <div className="relative w-full aspect-[0.72] rounded-lg overflow-hidden bg-gradient-to-b from-surface-container-high/40 to-surface-container-low/80 dark:from-neutral-800/40 dark:to-neutral-900/80 flex items-end justify-center shadow-inner">
                <Image
                  alt="Avatar 3D de Fernando Rodrigues"
                  className="w-full h-full object-cover object-top contrast-[1.03]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, 100vw"
                  src="/images/avatar.png"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 dark:from-[#141917]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {floatingChips.map((chip) => (
                <div
                  className={`absolute ${chip.position} px-3 py-1.5 rounded-full bg-surface-container-lowest/90 dark:bg-[#1A201D]/90 backdrop-blur-2xl shadow-[0_8px_20px_-10px_rgba(43,56,42,0.35)] border border-white/60 dark:border-white/10 flex items-center gap-1.5`}
                  key={chip.label}
                >
                  <Icon className="text-primary dark:text-emerald-400 text-[14px]" name={chip.icon} />
                  <span className="text-[12px] font-medium text-on-surface dark:text-white">{chip.label}</span>
                </div>
              ))}

              <div className="w-full mt-4 px-3 py-2 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-secondary dark:bg-emerald-400" /> Node.js &amp; NestJS
                </span>
                <span className="font-mono text-tertiary dark:text-emerald-300/80">Full Stack</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pt-10 pb-24">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-3">
            <span className="eyebrow">Tech Stack &amp; Domínios</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight">
              Especialidades Técnicas &amp; Criativas
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 max-w-md">
            Engenharia de software ponta a ponta: do front-end performático a pipelines de inteligência artificial
            generativa e arquitetura em nuvem.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, index) => (
            <Reveal key={item.label} style={delay(index * 90)}>
              <div className="group relative h-full rounded-xl bg-surface-container-lowest/65 dark:bg-[#141917]/75 backdrop-blur-2xl p-7 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 flex flex-col justify-between transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-xl">
                <div>
                  <div
                    className={`w-11 h-11 rounded-lg bg-surface-container-low dark:bg-white/[0.06] flex items-center justify-center ${item.iconColor} mb-6`}
                  >
                    <Icon className="text-[22px]" name={item.icon} />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-label-sm text-label-sm font-semibold text-secondary dark:text-emerald-400 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="tag">{item.tag}</span>
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
                  <Icon
                    className="text-base transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    name="arrow_outward"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Callout */}
      <Reveal as="section" className="w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pb-16">
        <div className="rounded-xl bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-low/70 to-surface-container-lowest/90 dark:from-[#141917]/90 dark:via-[#101413]/70 dark:to-[#141917]/90 backdrop-blur-3xl p-8 md:p-12 shadow-lg dark:border dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="eyebrow">Vamos Conectar</span>
            <h4 className="font-headline-md text-headline-md font-semibold text-on-surface dark:text-white">
              Tem um projeto em mente? Vamos conversar.
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 max-w-xl">
              Disponível para novos desafios técnicos, desenvolvimento de produtos com Inteligência Artificial e
              consultoria de software.
            </p>
          </div>
          <Link className="group btn btn-primary px-8 py-3.5 flex-shrink-0" href="/contato">
            <span>Iniciar Conversa</span>
            <Icon className="text-lg btn-arrow" name="arrow_forward" />
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
