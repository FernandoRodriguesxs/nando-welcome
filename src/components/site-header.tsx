"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, navItems } from "@/lib/site";
import { ThemeToggle } from "./theme-toggle";

const linkBase = "px-space-md py-1.5 rounded-full transition-[background-color,color,box-shadow] duration-300";
const linkIdle =
  "font-label-md text-label-md text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white hover:bg-surface-container-highest/40 dark:hover:bg-white/10";
const linkActive =
  "bg-surface-container-highest/60 dark:bg-white/15 text-on-surface dark:text-white font-medium shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-gutter-mobile md:px-margin pt-space-sm pointer-events-none">
      <div className="pointer-events-auto h-16 w-full max-w-[1320px] rounded-full bg-surface-container-lowest/70 dark:bg-[#161B19]/75 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_12px_32px_-4px_rgba(43,56,42,0.06),0_1px_2px_0_rgba(255,255,255,0.8)_inset] dark:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.45),0_1px_1px_0_rgba(255,255,255,0.08)_inset] px-space-md flex items-center justify-between gap-space-sm transition-all duration-300">
        <Link className="flex items-center gap-space-sm pl-space-xs" href="/">
          <div className="w-9 h-9 rounded-full p-0.5 bg-surface-container-lowest/80 dark:bg-white/10 border border-white/40 dark:border-white/10 shadow-sm flex items-center justify-center">
            <span className="font-title-md text-title-md font-semibold text-primary dark:text-emerald-400 tracking-tight">
              F
            </span>
          </div>
          <span className="font-title-md text-title-md font-semibold tracking-tight text-on-surface dark:text-[#EAEFEA] hidden sm:inline-block">
            Fernando Rodrigues
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface-container-low/40 dark:bg-white/[0.04] border border-white/30 dark:border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`${linkBase} ${active ? linkActive : linkIdle}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm pr-space-xs">
          <Link
            className="btn btn-glass hidden sm:inline-flex px-space-md py-2"
            href="/contato"
          >
            Vamos Conversar
          </Link>
          <ThemeToggle />
          <div className="ring-1 ring-white/50 dark:ring-white/20 rounded-full p-0.5 shadow-sm bg-surface-container-low/50 dark:bg-white/10 shrink-0">
            <Image
              alt="Fernando Rodrigues"
              className="w-8 h-8 rounded-full object-cover object-top"
              height={64}
              priority
              src="/images/avatar.png"
              width={64}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
