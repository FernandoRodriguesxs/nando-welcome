import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MobileNav } from "@/components/mobile-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Fernando Rodrigues — Engenheiro de Software Full Stack & AI",
    template: "%s · Fernando Rodrigues",
  },
  description:
    "Portfólio de Fernando Rodrigues, Engenheiro de Software Full Stack e AI Engineering. Aplicações web, APIs, mobile e Inteligência Artificial aplicada.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8faf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F0E" },
  ],
};

// Runs before first paint: stored preference, otherwise the system preference.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={`${inter.variable} scroll-smooth transition-colors duration-500`}
      data-scroll-behavior="smooth"
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background dark:bg-[#0B0F0E] font-body-md text-on-surface dark:text-[#EAEFEA] antialiased selection:bg-secondary-container dark:selection:bg-emerald-950/70 selection:text-on-secondary-container dark:selection:text-emerald-200 min-h-screen flex flex-col transition-colors duration-500">
        <SiteHeader />
        <main className="w-full flex-1 pt-16">{children}</main>
        <SiteFooter />
        <MobileNav />
      </body>
    </html>
  );
}
