import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { process } from "../../../data/site";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

export default function ProcessTimeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <section id="process" className="section-pad relative">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="How we work"
                title="A process built to remove surprises."
                lead="Five stages, each with something you can see and sign off on. You always know what week you are in and what comes next."
              />
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-7 lg:col-start-6">
            <div aria-hidden="true" className="absolute left-[19px] top-2 h-full w-px bg-ink/8">
              <motion.div
                style={{ scaleY, originY: 0 }}
                className="h-full w-full bg-gradient-to-b from-accent to-glow"
              />
            </div>

            <ol className="space-y-10 sm:space-y-12">
              {process.map((stage, i) => (
                <Reveal as="li" key={stage.step} delay={i * 0.05} className="relative pl-14 sm:pl-16">
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 bg-surface text-accent-soft">
                    <stage.icon size={17} strokeWidth={1.6} />
                  </span>

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-[11px] tracking-[0.2em] text-slate-dim">
                      {stage.step}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-chalk sm:text-2xl">
                      {stage.title}
                    </h3>
                    <span className="rounded-full border border-ink/8 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
                      {stage.duration}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-mist">
                    {stage.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
