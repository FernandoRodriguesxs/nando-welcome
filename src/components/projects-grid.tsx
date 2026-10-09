"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";
import { type Project, type ProjectCategory, projectFilters, projects } from "@/content/projects";
import { GithubIcon } from "./brand-icons";
import { Icon } from "./icon";

type Filter = ProjectCategory | "all";

const cardBase =
  "project-card group rounded-lg bg-surface-container-lowest/80 dark:bg-[#141917]/75 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-xl transition-[opacity,transform,box-shadow] duration-500 overflow-hidden relative";

const chip = "tag";

const filterIdle =
  "text-on-surface-variant dark:text-neutral-400 hover:text-on-surface dark:hover:text-white hover:bg-surface-container-high/40 dark:hover:bg-white/10";
const filterActive = "text-on-primary bg-primary dark:bg-emerald-600 shadow-sm";

const matches = (project: Project, filter: Filter) => filter === "all" || project.categories.includes(filter);

const counter = (index: number) =>
  `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

export function ProjectFilter({ value, onChange }: { value: Filter; onChange: (value: Filter) => void }) {
  return (
    <nav
      aria-label="Filtro de Projetos"
      className="flex items-center p-1.5 rounded-full bg-surface-container-lowest/80 dark:bg-[#141917]/85 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-sm self-start md:self-auto overflow-x-auto max-w-full"
    >
      {projectFilters.map((filter) => (
        <button
          aria-pressed={value === filter.value}
          className={`px-space-md py-2 rounded-full font-label-md text-label-md transition-[background-color,color,box-shadow] duration-300 whitespace-nowrap ${
            value === filter.value ? filterActive : filterIdle
          }`}
          key={filter.value}
          onClick={() => onChange(filter.value)}
          type="button"
        >
          {filter.label}
        </button>
      ))}
    </nav>
  );
}

function GithubLink({ href, featured }: { href: string; featured: boolean }) {
  return (
    <a
      className={`group btn btn-glass w-full justify-between px-space-md ${featured ? "py-3 text-[15px]" : "py-2.5"}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="inline-flex items-center gap-2">
        <GithubIcon className="w-4 h-4" />
        Ver no GitHub
      </span>
      <Icon
        className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        name="north_east"
      />
    </a>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="w-full lg:w-7/12 p-space-sm sm:p-space-md flex flex-col justify-center">
        <div className="relative w-full h-80 sm:h-96 lg:h-full min-h-[380px] rounded overflow-hidden bg-surface-container-low dark:bg-neutral-900 shadow-inner">
          <Image
            alt={project.imageAlt}
            className="w-full h-full object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 720px, 100vw"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 dark:from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-700" />
          <div className="absolute top-space-md left-space-md flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/85 dark:bg-black/55 backdrop-blur-xl border border-white/30 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400 animate-pulse" />
            <span className="text-[11px] leading-4 text-on-surface dark:text-white font-medium">
              {project.badge.label}
            </span>
          </div>
          {project.highlight && (
            <div className="absolute bottom-space-md left-space-md right-space-md flex items-center justify-between p-space-sm rounded bg-surface-container-lowest/70 dark:bg-[#121614]/85 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-sm">
              <div className="flex items-center gap-space-sm">
                <Icon className="text-primary dark:text-emerald-400 text-headline-md" name={project.highlight.icon} />
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface dark:text-white font-semibold">
                    {project.highlight.title}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">
                    {project.highlight.subtitle}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] leading-4 font-semibold text-primary dark:text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-emerald-400" />
                {project.highlight.status}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full lg:w-5/12 p-space-md sm:p-space-lg flex flex-col justify-between">
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-400 uppercase font-semibold tracking-wider">
              {project.kicker}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">{counter(index)}</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">
            {project.name}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">{project.description}</p>
          <div className="flex flex-wrap gap-1 pt-space-xs">
            {project.stack.map((tech) => (
              <span className={chip} key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="pt-space-md">
          <GithubLink featured href={project.repo} />
        </div>
      </div>
    </>
  );
}

function CompactCard({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <div className="p-space-md flex flex-col gap-space-md">
        <div className="relative w-full h-64 rounded overflow-hidden bg-surface-container-low dark:bg-neutral-900 shadow-inner">
          <Image
            alt={project.imageAlt}
            className="w-full h-full object-cover"
            fill
            sizes="(min-width: 768px) 600px, 100vw"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 dark:from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-surface-container-lowest/85 dark:bg-black/55 backdrop-blur-md border border-white/30 dark:border-white/10 flex items-center gap-1">
            <Icon className="text-primary dark:text-emerald-400 text-[13px]" name={project.badge.icon} />
            <span className="text-[11px] leading-4 text-on-surface dark:text-white font-medium">
              {project.badge.label}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary dark:text-emerald-400 uppercase font-semibold tracking-wider">
              {project.kicker}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant dark:text-neutral-400">{counter(index)}</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface dark:text-white font-semibold tracking-tight group-hover:text-primary dark:group-hover:text-emerald-400 transition-colors">
            {project.name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">{project.description}</p>
          <div className="flex flex-wrap gap-1 pt-space-xs">
            {project.stack.map((tech) => (
              <span className={chip} key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-space-md pt-0">
        <GithubLink featured={false} href={project.repo} />
      </div>
    </>
  );
}

export function ProjectsShowcase({ header }: { header: ReactNode }) {
  const [filter, setFilter] = useState<Filter>("all");
  // Cards fade out first and only leave the layout once the transition ends.
  const [settledFilter, setSettledFilter] = useState<Filter>("all");

  useEffect(() => {
    const timeout = setTimeout(() => setSettledFilter(filter), 250);
    return () => clearTimeout(timeout);
  }, [filter]);

  return (
    <>
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-lg pb-space-xl">
        {header}
        <ProjectFilter onChange={setFilter} value={filter} />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-stretch">
        {projects.map((project, index) => {
          const featured = index === 0;
          const visible = matches(project, filter);
          const inLayout = visible || matches(project, settledFilter);

          return (
            <article
              className={`${cardBase} ${
                featured ? "md:col-span-12 flex-col lg:flex-row" : "md:col-span-6 flex-col justify-between"
              } ${inLayout ? "flex animate-card-in" : "hidden"} ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              key={project.slug}
            >
              {featured ? (
                <FeaturedCard index={index} project={project} />
              ) : (
                <CompactCard index={index} project={project} />
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
