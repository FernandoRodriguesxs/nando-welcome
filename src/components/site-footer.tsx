"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site";

// Each screen in the design has its own footer tagline.
const taglines: Record<string, { role: string; note: string }> = {
  "/": {
    role: "Engenheiro de Software Full Stack & AI Engineering",
    note: "Disponível para novos projetos",
  },
  "/projetos": { role: "Full Stack & AI Developer", note: "Engenharia & Design Espacial" },
  "/habilidades": {
    role: "Engenheiro de Software • Full Stack & IA Aplicada",
    note: "Disponível para novos projetos",
  },
  "/contato": { role: "Software Engineer & AI Developer", note: "Disponível para novos projetos" },
};

export function SiteFooter() {
  const pathname = usePathname();
  const { role, note } = taglines[pathname] ?? taglines["/"];

  return (
    <footer className="w-full bg-surface-container-low/60 dark:bg-[#101413]/80 backdrop-blur-xl border-t border-white/20 dark:border-white/10 py-space-xl mt-space-xl pb-32 md:pb-space-xl transition-colors duration-500">
      <div className="max-w-[1320px] mx-auto px-gutter-mobile md:px-margin">
        <div className="flex flex-col md:flex-row items-center justify-between gap-space-md pb-space-lg">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/70 dark:bg-emerald-400 animate-pulse" />
              <span className="font-title-md text-title-md font-semibold text-on-surface dark:text-white tracking-tight">
                Fernando Rodrigues
              </span>
            </div>
            <p className="font-label-md text-label-md text-on-surface-variant dark:text-neutral-400 text-center md:text-left">
              {role}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-space-lg gap-y-space-sm">
            {navItems.map((item) => (
              <Link
                className="font-label-md text-label-md text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white transition-colors"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant dark:text-neutral-500">
          <span className="font-label-sm text-label-sm">© 2026 Fernando Rodrigues. Todos os direitos reservados.</span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-sm text-label-sm text-tertiary dark:text-emerald-400/80">{note}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
