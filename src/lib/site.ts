export const navItems = [
  { label: "Início", href: "/", icon: "grid_view" },
  { label: "Projetos", href: "/projetos", icon: "folder_open" },
  { label: "Trajetória", href: "/habilidades#trajetoria", icon: "work_history" },
  { label: "Habilidades", href: "/habilidades", icon: "layers" },
  { label: "Contato", href: "/contato", icon: "send" },
] as const;

export const links = {
  github: "https://github.com/FernandoRodriguesxs",
  linkedin: "https://www.linkedin.com/in/fernandorodrigues-dev",
  email: "fernando.hardd@gmail.com",
};

export function isActivePath(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}
