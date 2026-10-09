import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { experiences, stackGroups, toolGroups } from "@/content/career";

export const metadata: Metadata = {
  title: "Habilidades & Trajetória",
  description: "Stack tecnológica e linha do tempo profissional de Fernando Rodrigues.",
};

const glassCard =
  "rounded-lg bg-surface-container-lowest/80 dark:bg-[#141917]/75 backdrop-blur-2xl shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/40 dark:border-white/10";
const solidChip = "tag tag-accent";
const softChip = "tag";
const smallChip = "tag";

const revealDelay = { "--reveal-delay": "120ms" } as CSSProperties;

// Timeline dots fade from the current role to the oldest one.
const timelineDots = [
  null,
  "w-2.5 h-2.5 rounded-full bg-secondary dark:bg-emerald-500/80",
  "w-2 h-2 rounded-full bg-secondary dark:bg-emerald-500/70",
  "w-2 h-2 rounded-full bg-outline-variant dark:bg-neutral-600",
  "w-2 h-2 rounded-full bg-outline-variant dark:bg-neutral-600",
];

const highlights: {
  icon: IconName;
  meta: string;
  title: string;
  subtitle: string;
  detail?: string;
  tags?: string[];
  hobbies?: string[];
}[] = [
  {
    icon: "school",
    meta: "2021 — 2022",
    title: "Formação",
    subtitle: "Brazcubas Educação",
    detail: "Análise e Desenvolvimento de Sistemas",
  },
  {
    icon: "workspace_premium",
    meta: "Certificação",
    title: "Inteligência Artificial",
    subtitle: "Especialização Prática",
    detail: "Dominando IA Generativa",
  },
  {
    icon: "explore",
    meta: "Pesquisa Ativa",
    title: "Atualmente Explorando",
    subtitle: "Fronteiras Técnicas",
    tags: ["Arquiteturas de agentes IA", "Sistemas multiagentes", "RAG e busca vetorial", "Mobile com Expo", "ADRs"],
  },
  {
    icon: "favorite",
    meta: "Hobbies",
    title: "Além do Código",
    subtitle: "Estilo de Vida & Foco",
    hobbies: ["Corrida", "Jiu-jitsu", "Música", "Tecnologia"],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin py-space-lg overflow-hidden">
        {/* Atmospheric diffuse lights */}
        <div className="absolute -top-32 left-1/4 w-[540px] h-[540px] rounded-full bg-secondary-container/30 dark:bg-emerald-600/10 blur-[130px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 -right-20 w-[480px] h-[480px] rounded-full bg-primary-fixed/30 dark:bg-emerald-900/15 blur-[140px] pointer-events-none -z-10" />
        <div className="absolute -bottom-24 left-10 w-[420px] h-[420px] rounded-full bg-surface-container-high/60 dark:bg-emerald-950/30 blur-[110px] pointer-events-none -z-10" />

        {/* Editorial Header Badge & Intro */}
        <Reveal immediate className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="eyebrow">Carreira &amp; Tecnologias</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-500 tracking-wider uppercase">
                Full Stack &amp; IA Aplicada
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight mt-1">
              Trajetória &amp; Tecnologias
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-neutral-400 max-w-xl">
              Engenharia de software com foco em produtos digitais, arquitetura moderna de aplicações e Inteligência
              Artificial aplicada.
            </p>
          </div>
          <dl className="flex items-stretch divide-x divide-on-surface/[0.08] dark:divide-white/[0.08] self-start md:self-auto">
            <div className="pr-5">
              <dt className="flex items-center gap-1.5 text-[14px] font-semibold text-on-surface dark:text-white">
                <Icon className="text-primary dark:text-emerald-400 text-[16px]" name="code" />
                Full Stack
              </dt>
              <dd className="text-[12px] text-on-surface-variant dark:text-neutral-400 mt-0.5">Web &amp; Mobile</dd>
            </div>
            <div className="pl-5">
              <dt className="flex items-center gap-1.5 text-[14px] font-semibold text-on-surface dark:text-white">
                <Icon className="text-primary dark:text-emerald-400 text-[16px]" name="psychology" />
                IA
              </dt>
              <dd className="text-[12px] text-on-surface-variant dark:text-neutral-400 mt-0.5">Sistemas &amp; Agentes</dd>
            </div>
          </dl>
        </Reveal>

        {/* Main Two-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* COLUMN 1: STACK & COMPETÊNCIAS */}
          <Reveal immediate className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-2">
                <Icon className="text-primary dark:text-emerald-400 text-base" name="layers" />
                <span className="font-label-md text-label-md font-semibold tracking-wider text-on-surface dark:text-white uppercase">
                  Stack Tecnológica
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">Visão por Especialidade</span>
            </div>

            {stackGroups.map((group) => (
              <div
                className={`${glassCard} p-space-lg transition-[transform,box-shadow] duration-500 hover:shadow-lg hover:-translate-y-0.5`}
                key={group.title}
              >
                <div className="flex items-start justify-between gap-space-sm mb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-surface-container dark:bg-white/[0.06] flex items-center justify-center text-primary dark:text-emerald-400 shadow-inner shrink-0">
                      <Icon className="text-xl" name={group.icon} />
                    </div>
                    <div>
                      <h2 className="font-title-md text-title-md font-semibold text-on-surface dark:text-white">{group.title}</h2>
                      <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">{group.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`text-[11px] font-semibold uppercase tracking-wider shrink-0 ${
                      group.badge.emphasis ? "text-primary dark:text-emerald-400" : "text-on-surface-variant dark:text-neutral-500"
                    }`}
                  >
                    {group.badge.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {group.core.map((tech) => (
                    <span className={solidChip} key={tech}>
                      {tech}
                    </span>
                  ))}
                  {group.extra.map((tech) => (
                    <span className={softChip} key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              {toolGroups.map((group) => (
                <div
                  className={`${glassCard} p-space-md hover:shadow-lg transition-shadow duration-500 flex flex-col justify-between`}
                  key={group.title}
                >
                  <div className="mb-space-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="text-primary dark:text-emerald-400 text-xl" name={group.icon} />
                      <h3 className="font-title-md text-title-md font-semibold text-on-surface dark:text-white">{group.title}</h3>
                    </div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">{group.subtitle}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <span className={smallChip} key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* COLUMN 2: LINHA DO TEMPO PROFISSIONAL */}
          <Reveal immediate className="lg:col-span-5 flex flex-col gap-space-md" id="trajetoria" style={revealDelay}>
            <div className="flex items-center justify-between pb-space-xs">
              <div className="flex items-center gap-2">
                <Icon className="text-primary dark:text-emerald-400 text-base" name="route" />
                <span className="font-label-md text-label-md font-semibold tracking-wider text-on-surface dark:text-white uppercase">
                  Linha do Tempo
                </span>
              </div>
              <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-400 font-medium">Trajetória Profissional</span>
            </div>
            <div className="relative pl-6 flex flex-col gap-space-md">
              <div className="absolute left-[11px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-primary via-primary-fixed to-surface-container-high dark:from-emerald-500 dark:via-emerald-800 dark:to-white/10" />
              {experiences.map((job, index) => {
                const current = index === 0;
                return (
                  <div className="relative flex flex-col" key={job.company}>
                    <div className="absolute -left-6 top-1.5 w-6 h-6 rounded-full bg-surface-container-lowest dark:bg-[#1E2522] flex items-center justify-center shadow-md">
                      {current ? (
                        <>
                          <span className="w-3 h-3 rounded-full bg-primary dark:bg-emerald-400 shadow-[0_0_12px_rgba(66,86,65,0.7)] animate-ping absolute" />
                          <span className="w-3 h-3 rounded-full bg-primary dark:bg-emerald-400 relative z-10" />
                        </>
                      ) : (
                        <span className={timelineDots[index] ?? timelineDots[timelineDots.length - 1]!} />
                      )}
                    </div>
                    <div className="rounded-lg bg-surface-container-lowest/85 dark:bg-[#141917]/80 backdrop-blur-2xl p-space-md shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 hover:shadow-lg transition-shadow duration-500">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span
                          className={`text-[12px] font-semibold ${
                            current ? "text-primary dark:text-emerald-400" : "text-on-surface-variant dark:text-neutral-400"
                          }`}
                        >
                          {job.period}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">{job.location}</span>
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface dark:text-white mt-2 font-semibold">{job.role}</h3>
                      <p className="font-label-md text-label-md text-secondary dark:text-emerald-400 font-medium mb-space-xs">{job.company}</p>
                      <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300 mb-space-sm">{job.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {job.tags.map((tag) => (
                          <span className={smallChip} key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* BOTTOM HIGHLIGHT CARD: CERTIFICAÇÕES & RECONHECIMENTOS */}
        <Reveal className="mt-space-xl rounded-lg bg-surface-container-lowest/90 dark:bg-[#141917]/85 backdrop-blur-3xl p-space-lg shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary/10 dark:bg-emerald-500/10 blur-[90px] pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {highlights.map((item) => (
              <div
                className="p-space-md rounded-lg bg-surface-container-low/70 dark:bg-white/[0.04] backdrop-blur-md flex flex-col justify-between hover:bg-surface-container-high/60 dark:hover:bg-white/[0.08] transition-colors duration-500 border border-white/30 dark:border-white/10"
                key={item.title}
              >
                <div>
                  <div className="flex items-center justify-between mb-space-xs">
                    <Icon className="text-primary dark:text-emerald-400 text-2xl" name={item.icon} />
                    <span className="font-label-sm text-label-sm font-semibold text-primary dark:text-emerald-400">{item.meta}</span>
                  </div>
                  <h3 className="font-title-md text-title-md font-semibold text-on-surface dark:text-white">{item.title}</h3>
                  <p className="font-label-sm text-label-sm mt-1 font-medium text-secondary dark:text-emerald-300/80">{item.subtitle}</p>
                </div>
                {item.detail && (
                  <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400 mt-3">{item.detail}</p>
                )}
                {item.tags && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.tags.map((tag) => (
                      <span className={smallChip} key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {item.hobbies && (
                  <div className="flex flex-wrap gap-1 mt-3">
                    {item.hobbies.map((hobby) => (
                      <span className="tag" key={hobby}>
                        {hobby}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
