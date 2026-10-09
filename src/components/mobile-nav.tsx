"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActivePath, navItems } from "@/lib/site";
import { Icon } from "./icon";

// Bottom tab bar adapted from the mobile screens; the desktop nav is hidden below md.
export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 pointer-events-none pb-[env(safe-area-inset-bottom)]">
      <div className="px-gutter-mobile pb-3 pt-1 flex justify-center">
        <div className="pointer-events-auto flex items-center justify-around w-full max-w-md h-16 px-2 rounded-full bg-surface-container-lowest/80 dark:bg-[#161c19]/80 backdrop-blur-3xl border border-white/40 dark:border-white/10 shadow-[0_16px_40px_rgba(43,56,42,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center min-w-[56px] h-12 px-2 rounded-full transition-all duration-200 group ${
                  active
                    ? "text-primary dark:text-emerald-400 bg-surface-container-highest/60 dark:bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]"
                    : "text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white"
                }`}
                href={item.href}
                key={item.href}
              >
                <Icon className="text-[22px] transition-transform group-hover:scale-105" name={item.icon} />
                <span className="font-label-sm text-label-sm tracking-tight mt-0.5">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
