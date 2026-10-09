import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Faq } from "@/components/faq";
import { Icon } from "@/components/icon";
import { LiveClock } from "@/components/live-clock";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato & Parcerias",
  description: "Vamos construir algo juntos? Canais diretos e formulário de contato de Fernando Rodrigues.",
};

const quickLinks = [
  { href: links.linkedin, label: "LinkedIn", mark: "in" },
  { href: links.github, label: "GitHub", mark: "gh" },
  { href: links.currentPortfolio, label: "Portfólio atual", icon: "language" },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin py-space-xl">
        {/* Ambient Optical Lighting Blobs */}
        <div className="absolute top-10 left-1/4 -z-10 w-[520px] h-[520px] bg-secondary-fixed/30 dark:bg-emerald-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-16 right-10 -z-10 w-[460px] h-[460px] bg-primary-fixed/25 dark:bg-emerald-900/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Editorial Intro / Overline */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md mb-space-lg">
          <div className="space-y-space-xs max-w-xl">
            <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-high/60 dark:bg-white/[0.06] backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400 animate-ping" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary dark:text-emerald-400 font-semibold">
                Canal Direto &amp; Parcerias
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight">
              Contato &amp; Parcerias
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 leading-relaxed pt-1">
              Vamos construir algo juntos? Estou aberto a conexões profissionais, oportunidades e projetos em
              desenvolvimento de software e Inteligência Artificial.
            </p>
          </div>
          <div className="flex items-center gap-space-sm font-label-md text-label-md text-on-surface-variant dark:text-neutral-400 bg-surface-container-lowest/80 dark:bg-[#141917]/85 dark:border dark:border-white/10 px-space-md py-2 rounded-full shadow-sm backdrop-blur-md">
            <Icon className="text-primary dark:text-emerald-400 text-[18px]" name="schedule" />
            <span>
              Horário atual: <LiveClock />
            </span>
          </div>
        </div>

        {/* Master Glass Canvas Card */}
        <section className="relative w-full rounded-xl bg-surface-container-lowest/75 dark:bg-[#141917]/75 backdrop-blur-2xl shadow-[0_32px_64px_-16px_rgba(43,56,42,0.08),0_2px_4px_rgba(255,255,255,0.9)_inset] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.08)_inset] dark:border dark:border-white/10 overflow-hidden">
          {/* Specular Refractive Light Bar */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white dark:via-white/30 to-transparent opacity-90" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/40 dark:divide-white/10">
            {/* Left Panel: Context, Direct Channels & Status */}
            <div className="lg:col-span-5 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-low/30 dark:bg-white/[0.02] backdrop-blur-xl">
              <div className="space-y-space-lg">
                <div className="space-y-space-sm">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary dark:text-emerald-400 font-bold">
                    Inicie a Conexão
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface dark:text-white font-semibold tracking-tight leading-tight">
                    Vamos conversar sobre tecnologia e inovação?
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 leading-relaxed">
                    Disponível para consultoria, desenvolvimento de aplicações de alta performance e projetos que
                    exploram o potencial da IA moderna.
                  </p>
                </div>

                <div className="p-space-md rounded-lg bg-surface-container-lowest/90 dark:bg-white/[0.05] dark:border dark:border-white/10 backdrop-blur-md shadow-sm space-y-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm uppercase text-secondary dark:text-emerald-400 font-semibold">
                      Status Profissional
                    </span>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container/80 dark:bg-emerald-950/80 dark:border dark:border-emerald-500/20 text-on-secondary-container dark:text-emerald-300 font-label-sm text-label-sm font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400" />
                      Ativo
                    </div>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface dark:text-neutral-200 font-medium text-sm">
                    Atualmente na Adalink • Aberto para novas conexões e desafios
                  </p>
                </div>

                <div className="space-y-space-sm">
                  <span className="font-label-sm text-label-sm uppercase text-outline dark:text-neutral-500 font-semibold tracking-wide">
                    Canais Diretos
                  </span>
                  <div className="space-y-2">
                    <a
                      className="group flex items-center justify-between gap-space-sm p-3 rounded bg-surface-container-lowest/60 dark:bg-white/[0.05] hover:bg-surface-container-lowest dark:hover:bg-white/[0.09] text-on-surface dark:text-white transition-all duration-200 shadow-sm dark:border dark:border-white/10"
                      href={`mailto:${links.email}`}
                    >
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-8 h-8 shrink-0 rounded-full bg-surface-container-high/60 dark:bg-white/[0.08] flex items-center justify-center text-primary dark:text-emerald-400 group-hover:scale-105 transition-transform">
                          <Icon className="text-[18px]" name="alternate_email" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">E-mail Direto</span>
                          <span className="font-body-md text-body-md text-on-surface dark:text-white font-medium truncate">{links.email}</span>
                        </div>
                      </div>
                      <Icon
                        className="text-outline dark:text-neutral-500 group-hover:translate-x-1 group-hover:text-primary dark:group-hover:text-emerald-400 transition-all text-[18px]"
                        name="arrow_outward"
                      />
                    </a>
                    <div className="flex items-center justify-between gap-space-sm p-3 rounded bg-surface-container-lowest/60 dark:bg-white/[0.05] text-on-surface dark:text-white shadow-sm dark:border dark:border-white/10">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 shrink-0 rounded-full bg-surface-container-high/60 dark:bg-white/[0.08] flex items-center justify-center text-primary dark:text-emerald-400">
                          <Icon className="text-[18px]" name="location_on" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">Localização</span>
                          <span className="font-body-md text-body-md text-on-surface dark:text-white font-medium">São Paulo, Brasil</span>
                        </div>
                      </div>
                      <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-400 font-medium text-right">
                        Presencial &amp; Remoto
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-space-xs">
                  <span className="font-label-sm text-label-sm uppercase text-outline dark:text-neutral-500 font-semibold tracking-wide">
                    Links Rápidos
                  </span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {quickLinks.map((link) => (
                      <a
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest/80 dark:bg-white/[0.06] hover:bg-surface-container-high/70 dark:hover:bg-white/10 text-on-surface dark:text-neutral-200 font-label-md text-label-md transition-all shadow-sm dark:border dark:border-white/10"
                        href={link.href}
                        key={link.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.icon ? (
                          <Icon className="text-[14px]" name={link.icon} />
                        ) : (
                          <span className="font-semibold text-xs tracking-tight">{link.mark}</span>
                        )}{" "}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-space-lg flex items-center justify-between gap-space-sm text-on-surface-variant dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <Icon className="text-secondary dark:text-emerald-400 text-[20px]" name="bolt" />
                  <span className="font-label-sm text-label-sm">Resposta rápida e alinhamento contínuo</span>
                </div>
                <span className="font-label-sm text-label-sm uppercase text-primary dark:text-emerald-400 font-semibold">Seguro</span>
              </div>
            </div>

            {/* Right Panel: Refined Minimalist Apple Form */}
            <div className="lg:col-span-7 p-space-lg md:p-space-xl flex flex-col justify-between bg-surface-container-lowest/40 dark:bg-transparent backdrop-blur-2xl">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Process & FAQ */}
        <div className="mt-space-xl pt-space-md">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-sm mb-space-lg">
            <div className="space-y-space-xs max-w-lg">
              <div className="inline-flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-high/60 dark:bg-white/[0.06] backdrop-blur-md shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400 animate-ping" />
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary dark:text-emerald-400 font-semibold">
                  Processo &amp; FAQ
                </span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight">
                Perguntas Frequentes
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 max-w-md">
              Alinhamento ágil e clareza total desde a primeira chamada de descoberta até a entrega final em produção.
            </p>
          </div>
          <Faq />
        </div>

        {/* Supplementary Spatial Studio Badge */}
        <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low/40 dark:bg-[#141917]/60 dark:border dark:border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-space-md">
            <div className="w-12 h-12 shrink-0 rounded-full bg-surface-container-lowest dark:bg-white/[0.08] shadow-sm flex items-center justify-center text-primary dark:text-emerald-400">
              <Icon className="text-[24px]" name="verified" />
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-on-surface dark:text-white font-semibold">
                Fernando Rodrigues • Software &amp; AI
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400 text-sm">
                Desenvolvedor de Software focado em sistemas modernos, engenharia web e IA.
              </p>
            </div>
          </div>
          <a
            className="px-space-md py-2 rounded-full bg-surface-container-lowest dark:bg-white/[0.08] text-on-surface dark:text-white font-label-md text-label-md font-semibold hover:bg-surface-container-highest dark:hover:bg-white/[0.14] transition-colors shadow-sm dark:border dark:border-white/10 whitespace-nowrap"
            href={`mailto:${links.email}`}
          >
            Conversar Diretamente
          </a>
        </div>
      </div>
    </div>
  );
}
