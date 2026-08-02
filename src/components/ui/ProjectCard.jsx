import { ArrowUpRight } from "lucide-react";
import { cn } from "../../utils/helpers";
import DeviceMock from "./DeviceMock";

function Preview({ project, tall }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br px-4 pt-11 sm:px-5 sm:pt-12",
        tall ? "h-[17rem] sm:h-[22rem]" : "h-[15rem] sm:h-[17rem]",
        project.accent
      )}
    >
      <div className="grid-lines absolute inset-0 opacity-30" />

      <span className="absolute left-5 top-4 rounded-full border border-ink/8 bg-white/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-chalk shadow-card backdrop-blur-sm">
        {project.industry}
      </span>
      <span className="absolute right-5 top-4 flex items-center gap-1.5 rounded-full border border-ink/8 bg-white/85 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-chalk shadow-card backdrop-blur-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Live
      </span>

      <div className="relative transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2">
        <DeviceMock variant={project.visual} showAccents={false} />
      </div>
    </div>
  );
}

function Details({ project }) {
  return (
    <div className="flex flex-1 flex-col p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-chalk">{project.name}</h3>
        <ArrowUpRight
          size={17}
          strokeWidth={1.8}
          className="mt-1 shrink-0 text-slate-dim transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {project.service} · {project.year}
      </p>

      <p className="mt-4 text-[14px] leading-relaxed text-mist">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/8 pt-5">
        {project.metrics.map((metric) => (
          <div key={metric.label}>
            <p className="font-display text-lg font-semibold text-chalk">{metric.value}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
              {metric.label}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-ink/10 bg-white px-2.5 py-1 text-[11px] text-slate-dim"
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectCard({ project, wide = false, className }) {
  if (wide) {
    return (
      <article
        className={cn(
          "group glass card-hover relative overflow-hidden rounded-2xl lg:grid lg:grid-cols-2 lg:items-stretch",
          className
        )}
      >
        <div className="border-b border-ink/8 lg:border-b-0 lg:border-r">
          <Preview project={project} tall />
        </div>

        <div className="flex flex-col justify-center">
          <span className="ml-6 mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent md:ml-7">
            Featured build
          </span>
          <Details project={project} />
        </div>
      </article>
    );
  }

  return (
    <article
      className={cn(
        "group glass card-hover relative flex h-full flex-col overflow-hidden rounded-2xl",
        className
      )}
    >
      <div className="border-b border-ink/8">
        <Preview project={project} />
      </div>
      <Details project={project} />
    </article>
  );
}
