import { industries, techStack } from "../../../data/site";
import Marquee from "../../ui/Marquee";
import Reveal from "../../ui/Reveal";

export default function TrustStrip() {
  return (
    <section className="relative border-y border-ink/8 bg-abyss py-12 sm:py-14">
      <div className="section-shell">
        <Reveal
          as="p"
          className="text-center font-mono text-[11px] uppercase tracking-[0.24em] text-slate-dim"
        >
          The stack we build production systems on
        </Reveal>
      </div>

      <Reveal delay={0.1} direction="none" className="mt-8">
        <Marquee items={techStack} separator="/" itemClassName="text-lg sm:text-xl" />
      </Reveal>

      <div className="section-shell mt-10 sm:mt-12">
        <Reveal
          as="p"
          className="text-center font-mono text-[11px] uppercase tracking-[0.24em] text-slate-dim"
        >
          Industries we know our way around
        </Reveal>
        <Reveal
          delay={0.1}
          className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-7 sm:gap-3"
        >
          {industries.map((industry) => (
            <span
              key={industry.label}
              className="glass card-hover flex items-center gap-2 rounded-full px-3.5 py-2 text-[12px] text-mist sm:gap-2.5 sm:px-4 sm:py-2.5 sm:text-[13px]"
            >
              <industry.icon size={15} strokeWidth={1.6} className="text-accent-soft" />
              {industry.label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
