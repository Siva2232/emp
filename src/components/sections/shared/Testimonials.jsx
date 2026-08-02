import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "../../../data/site";
import { easeLuxury } from "../../../utils/motion";
import Reveal from "../../ui/Reveal";
import SectionHeading from "../../ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const go = (step) =>
    setIndex((i) => (i + step + testimonials.length) % testimonials.length);

  return (
    <section className="section-pad relative">
      <div className="section-shell">
        <SectionHeading
          eyebrow="In their words"
          title="What clients say when we are not in the room."
        />

        <Reveal
          delay={0.1}
          className="glass relative mt-10 overflow-hidden rounded-2xl p-6 sm:mt-12 sm:p-8 md:p-14"
        >
          <Quote
            size={80}
            strokeWidth={1}
            className="absolute -right-4 -top-4 text-accent/10"
            aria-hidden="true"
          />

          <div className="relative min-h-[13rem] md:min-h-[11rem]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: easeLuxury }}
              >
                <p className="font-display text-xl leading-snug text-chalk md:text-3xl md:leading-tight">
                  “{active.quote}”
                </p>
                <footer className="mt-7">
                  <p className="text-[14px] font-medium text-chalk">{active.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-dim">
                    {active.company}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="relative mt-8 flex items-center justify-between border-t border-ink/8 pt-4 sm:pt-6">
            <div className="-ml-2 flex items-center">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className="group flex h-11 items-center px-2"
                >
                  <span
                    className={`h-1 rounded-full transition-all duration-500 ${
                      i === index ? "w-8 bg-accent" : "w-4 bg-ink/15 group-hover:bg-ink/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-mist transition-colors hover:border-accent/50 hover:text-chalk"
              >
                <ArrowLeft size={16} strokeWidth={1.8} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-mist transition-colors hover:border-accent/50 hover:text-chalk"
              >
                <ArrowRight size={16} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
