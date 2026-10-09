"use client";

import { Icon } from "./icon";

export function ThemeToggle() {
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      aria-label="Alternar tema escuro e claro"
      className="relative flex items-center p-1 w-16 h-8 rounded-full bg-surface-container-highest/60 dark:bg-black/40 border border-white/40 dark:border-white/15 backdrop-blur-xl shadow-inner cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:focus-visible:ring-emerald-400 shrink-0"
      onClick={toggleTheme}
      type="button"
    >
      <Icon
        className="absolute left-1.5 text-amber-500 dark:text-neutral-500 text-[16px] pointer-events-none transition-colors duration-300 select-none"
        name="light_mode"
      />
      <Icon
        className="absolute right-1.5 text-neutral-400 dark:text-emerald-300 text-[16px] pointer-events-none transition-colors duration-300 select-none"
        name="dark_mode"
      />
      <span className="w-6 h-6 rounded-full bg-white dark:bg-[#1E2522] shadow-[0_2px_6px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] transform translate-x-0 dark:translate-x-8 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center border border-black/5 dark:border-white/10">
        <Icon className="text-[13px] text-amber-600 dark:hidden" name="sunny" />
        <Icon className="text-[13px] text-emerald-400 hidden dark:inline-block" name="bedtime" />
      </span>
    </button>
  );
}
