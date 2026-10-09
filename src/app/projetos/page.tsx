import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { ProjectsShowcase } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos em destaque: FoodFlow AI, Tico App e Nexi Chatbot.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full max-w-[1320px] mx-auto px-gutter-mobile md:px-margin pb-space-xl">
        {/* Subtle Ambient Optical Glow behind grid */}
        <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-primary-fixed-dim/25 dark:bg-emerald-600/10 blur-3xl pointer-events-none -z-10 transition-colors duration-500" />
        <div className="absolute top-64 right-10 w-[420px] h-[420px] rounded-full bg-secondary-container/30 dark:bg-emerald-900/15 blur-3xl pointer-events-none -z-10 transition-colors duration-500" />

        <ProjectsShowcase
          header={
            <div className="flex flex-col gap-space-xs max-w-xl">
              <div className="flex items-center gap-space-xs text-primary dark:text-emerald-400 font-label-sm text-label-sm uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400" />
                <span>Portfólio Selecionado • 2024 – 2025</span>
              </div>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg tracking-tight text-on-surface dark:text-white">
                Projetos em Destaque
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-neutral-400">
                Projetos que conectam tecnologia, criatividade e resolução de problemas reais com arquiteturas
                modernas e Inteligência Artificial.
              </p>
            </div>
          }
        />

        {/* Bottom Spatial Callout Capsule */}
        <Reveal as="aside" className="mt-space-xl p-space-lg rounded-xl bg-surface-container-low/70 dark:bg-[#141917]/70 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-primary-container/20 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Icon className="text-primary dark:text-emerald-400 text-headline-md" name="auto_awesome" />
            </div>
            <div>
              <h4 className="font-title-md text-title-md font-semibold text-on-surface dark:text-white">
                Procura uma solução sob medida?
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-400">
                Disponível para consultoria espacial, design systems corporativos e prototipagem de alto impacto.
              </p>
            </div>
          </div>
          <Link className="group btn btn-primary px-space-lg py-3" href="/contato">
            Iniciar Conversa
            <Icon className="text-[18px] btn-arrow" name="arrow_forward" />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
