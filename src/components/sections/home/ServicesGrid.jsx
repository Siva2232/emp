import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../../data/site";
import { cn } from "../../../utils/helpers";
import Button from "../../ui/Button";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

const spans = [
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  // Odd one out at two columns, so it runs full width there
  "sm:col-span-2 lg:col-span-2",
];

export default function ServicesGrid() {
  return (
    <section id="services" className="section-pad relative">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Five things we do properly, instead of twenty we do adequately."
            lead="Every engagement starts with a written scope and ends with something running in production that your team can actually operate."
            className="md:max-w-3xl"
          />
          <Reveal delay={0.2} className="shrink-0">
            <Button to="/services" variant="ghost">
              All services
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={i * 0.07}
              className={cn(spans[i], "group relative")}
            >
              <Link
                to={`/services#${service.slug}`}
                className="glass card-hover flex h-full flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 md:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/12 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/10 bg-ink/[0.04] text-accent-soft transition-colors duration-500 group-hover:border-accent/40 group-hover:text-glow">
                      <service.icon size={19} strokeWidth={1.6} />
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.18em] text-slate-dim">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-semibold text-chalk md:text-[22px]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-mist">{service.short}</p>
                </div>

                <div className="relative mt-8">
                  <ul className="flex flex-wrap gap-2">
                    {service.stack.slice(0, 3).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-ink/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-dim"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 flex items-center gap-1.5 text-[12px] font-medium text-chalk">
                    Explore
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      className="text-accent-soft transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
