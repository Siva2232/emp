import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, services } from "../data/site";
import { useSeo } from "../hooks/useSeo";
import { cn } from "../utils/helpers";
import { easeLuxury } from "../utils/motion";
import PageHero from "../components/ui/PageHero";
import ProjectCard from "../components/ui/ProjectCard";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import CtaBand from "../components/sections/shared/CtaBand";

export default function Work() {
  useSeo({
    title: "Work — Projects delivered by Emprime",
    description:
      "Seven delivered projects across retail, hospitality, healthcare, logistics and manufacturing — websites, apps, POS and ERP systems.",
  });

  const [filter, setFilter] = useState("All");

  const filters = useMemo(() => {
    const counts = services.map((service) => ({
      label: service.title,
      count: projects.filter((project) => project.service === service.title).length,
    }));
    return [{ label: "All", count: projects.length }, ...counts.filter((f) => f.count > 0)];
  }, []);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.service === filter)),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Systems that went live and stayed live."
        lead="We are early, so this is not a hundred-project portfolio. It is every project we have shipped, what it fixed, and what changed for the business afterwards."
        meta={[
          { value: "7+", label: "Delivered" },
          { value: "6", label: "Industries" },
          { value: "100%", label: "Still in use" },
        ]}
      />

      <section className="section-pad">
        <div className="section-shell">
          <div className="flex flex-col gap-5 border-b border-ink/8 pb-6 sm:flex-row sm:items-center sm:justify-between">
            <Reveal className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:-mx-1 sm:px-1">
              {filters.map((item) => {
                const isActive = filter === item.label;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setFilter(item.label)}
                    aria-pressed={isActive}
                    className={cn(
                      "group/chip relative flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-[12.5px] font-medium transition-all duration-500",
                      isActive
                        ? "border-accent/40 bg-accent/10 text-chalk"
                        : "border-ink/10 bg-white text-mist shadow-card hover:border-ink/25 hover:text-chalk"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "font-mono text-[10px]",
                        isActive ? "text-accent" : "text-slate-dim"
                      )}
                    >
                      {item.count}
                    </span>
                  </button>
                );
              })}
            </Reveal>

            <Reveal
              as="p"
              delay={0.1}
              className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim"
            >
              Showing {visible.length} of {projects.length}
            </Reveal>
          </div>

          <motion.div layout className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {visible.map((project, i) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: easeLuxury }}
                  className={i === 0 ? "lg:col-span-2" : ""}
                >
                  <ProjectCard project={project} wide={i === 0} className="h-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {visible.length === 0 && (
            <p className="mt-12 text-center text-[15px] text-mist">
              Nothing public in this category yet — but we have built it. Ask us.
            </p>
          )}
        </div>
      </section>

      <section className="section-pad border-t border-ink/8 bg-abyss">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Before and after"
            title="The part case studies usually skip."
            lead="Each of these started as a process that was quietly costing someone hours every week."
          />

          <div className="mt-10 space-y-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:mt-14">
            {projects.slice(0, 5).map((project, i) => (
              <Reveal
                key={project.slug}
                delay={i * 0.06}
                className="group grid gap-5 bg-void p-6 transition-colors duration-500 hover:bg-surface sm:gap-6 sm:p-7 md:grid-cols-12 md:items-center md:gap-8 md:p-9"
              >
                <div className="md:col-span-3">
                  <p className="font-display text-lg font-semibold text-chalk">{project.name}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-dim">
                    {project.industry} · {project.year}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim">
                    The problem
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-mist">{project.problem}</p>
                </div>

                <div className="flex justify-center md:col-span-1">
                  <ArrowRight
                    size={18}
                    strokeWidth={1.6}
                    className="rotate-90 text-slate-dim transition-all duration-500 group-hover:text-accent md:rotate-0 md:group-hover:translate-x-1"
                  />
                </div>

                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                    What changed
                  </p>
                  <p className="mt-2 text-[14px] leading-relaxed text-chalk">{project.outcome}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Your project next"
        title="Bring us the process that is costing you hours."
        lead="Send a short description and we will come back with an approach, a timeline and a number."
      />
    </>
  );
}
