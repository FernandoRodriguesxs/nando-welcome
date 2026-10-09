import { links } from "@/lib/site";
import { StravaIcon } from "./brand-icons";
import { Icon } from "./icon";

const BELT_DEGREE = 1;
const MAX_DEGREES = 4;

// White belt with the black tip ("ponteira") carrying one stripe per degree.
function JiuJitsuBelt() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="relative h-7 rounded-md bg-[#fbf9f4] border border-on-surface/15 dark:border-white/20 shadow-[inset_0_-2px_0_rgba(0,0,0,0.04)] overflow-hidden flex justify-end">
        {/* Stitching */}
        <span className="absolute inset-x-2 top-[7px] border-t border-dashed border-on-surface/15" />
        <span className="absolute inset-x-2 bottom-[7px] border-t border-dashed border-on-surface/15" />
        <span className="relative w-16 h-full bg-[#1d1d1b] flex items-center justify-start gap-1 pl-2.5">
          {Array.from({ length: BELT_DEGREE }, (_, index) => (
            <span className="w-1.5 h-full bg-[#fbf9f4]" key={index} />
          ))}
        </span>
        <span className="relative w-3 h-full bg-[#fbf9f4]" />
      </div>
    </div>
  );
}

// Decorative running route drawn behind the Strava card.
function RouteLine() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -right-6 -bottom-4 w-64 h-40 text-[#FC4C02] opacity-[0.14] dark:opacity-25 pointer-events-none"
      fill="none"
      viewBox="0 0 256 160"
    >
      <path
        d="M12 140c26-6 30-38 58-44s38 22 66 14 18-52 46-62 40 12 52-8 6-26 10-30"
        stroke="currentColor"
        strokeDasharray="2 7"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <circle cx="12" cy="140" fill="currentColor" r="5" />
      <circle cx="244" cy="10" r="5" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

const card =
  "group relative h-full overflow-hidden rounded-xl bg-surface-container-lowest/70 dark:bg-[#141917]/75 backdrop-blur-2xl p-7 shadow-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] dark:border dark:border-white/10 flex flex-col justify-between gap-8 transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-xl";

export function JiuJitsuCard() {
  return (
    <article className={card}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-secondary dark:text-emerald-400">
            Jiu-jitsu
          </span>
          <span className="tag">No tatame</span>
        </div>
        <h3 className="font-headline-md text-headline-md font-semibold text-on-surface dark:text-white">
          Faixa branca, 1º grau
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
          Atualmente faixa branca com 1 grau, evoluindo um treino de cada vez.
        </p>
      </div>

      <div className="space-y-3">
        <JiuJitsuBelt />
        <div className="flex items-center justify-between text-[12px] text-on-surface-variant dark:text-neutral-400">
          <span>Graus na faixa</span>
          <span className="flex items-center gap-1.5">
            {Array.from({ length: MAX_DEGREES }, (_, index) => (
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  index < BELT_DEGREE ? "bg-primary dark:bg-emerald-400" : "bg-on-surface/15 dark:bg-white/15"
                }`}
                key={index}
              />
            ))}
            <span className="ml-1 font-semibold text-on-surface dark:text-white">
              {BELT_DEGREE}/{MAX_DEGREES}
            </span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function RunningCard() {
  return (
    <article className={card}>
      <RouteLine />
      <div className="relative space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-[#E34402] dark:text-[#FC6A2B]">
            Corrida
          </span>
          <span className="tag">
            <StravaIcon className="w-3 h-3" />
            Strava
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md font-semibold text-on-surface dark:text-white">
          Quilômetros no Strava
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant dark:text-neutral-300">
          A corrida faz parte da minha rotina. Os treinos ficam registrados no Strava, é só me seguir por lá.
        </p>
      </div>

      <a
        className="group/strava relative btn self-start px-5 py-2.5 bg-[#FC4C02] text-white shadow-[0_6px_16px_-8px_rgba(252,76,2,0.6)] hover:bg-[#E34402] hover:shadow-[0_12px_24px_-10px_rgba(252,76,2,0.6)]"
        href={links.strava}
        rel="noopener noreferrer"
        target="_blank"
      >
        <StravaIcon className="w-4 h-4 !text-white" />
        Seguir no Strava
        <Icon
          className="text-[16px] transition-transform duration-300 group-hover/strava:translate-x-0.5 group-hover/strava:-translate-y-0.5"
          name="arrow_outward"
        />
      </a>
    </article>
  );
}
