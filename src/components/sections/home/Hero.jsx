import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, MousePointer2, ShieldCheck } from "lucide-react";
import { brand, heroWords, stats } from "../../../data/site";
import { easeLuxury, easeOutExpo, staggerContainer, wordReveal } from "../../../utils/motion";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { useMediaQuery } from "../../../hooks/useMediaQuery";
import Backdrop from "../../ui/Backdrop";
import Button from "../../ui/Button";
import Counter from "../../ui/Counter";
import HeroVisual from "../../ui/HeroVisual";

// three.js is heavier than the rest of the site combined, so it loads on demand
// and only where it earns its weight — see the HeroVisual fallback below.
const HeroScene = lazy(() => import("../../ui/HeroScene"));

const HEADLINE = [
  [{ text: "We build the" }],
  [{ text: "software", gradient: true }, { text: " your" }],
  [{ text: "business runs on." }],
];

function ScenePlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="h-56 w-56 animate-pulse rounded-[2rem] bg-gradient-to-br from-accent/15 via-accent-soft/10 to-glow/10 blur-2xl" />
    </div>
  );
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const reduced = useReducedMotion();
  const isWide = useMediaQuery("(min-width: 1024px)");
  const show3d = isWide && !reduced;

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => {
      setWordIndex((i) => (i + 1) % heroWords.length);
    }, 2600);
    return () => clearInterval(timer);
  }, [reduced]);

  return (
    <section className="grain relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-12 pt-28 sm:pb-14 sm:pt-32 md:pt-36">
      <Backdrop variant="hero" />

      <div className="section-shell relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/70 py-2 pl-3 pr-4 shadow-card backdrop-blur-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: easeLuxury }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-500/50" />
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[12px] font-medium text-chalk">
                Available for new projects
              </span>
              <span aria-hidden="true" className="hidden h-3 w-px bg-ink/12 sm:block" />
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim sm:block">
                Est. {brand.founded}
              </span>
            </motion.div>

            <motion.h1
              className="mt-7 max-w-[34rem] text-[clamp(2.25rem,5.2vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-chalk sm:mt-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {HEADLINE.map((line, lineIndex) => (
                <span key={lineIndex} className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={wordReveal} className="block">
                    {line.map((part) => (
                      <span
                        key={part.text}
                        className={part.gradient ? "text-gradient" : undefined}
                      >
                        {part.text}
                      </span>
                    ))}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-[16px] leading-relaxed text-mist sm:mt-7 sm:text-[17px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: easeLuxury }}
            >
              A small engineering studio in {brand.location} building websites, mobile apps,
              custom software, POS and ERP systems. Scoped honestly, shipped in phases, and
              handed over so you own every line of it.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: easeLuxury }}
            >
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Start a project
              </Button>
              <Button
                to="/work"
                variant="ghost"
                size="lg"
                withArrow={false}
                className="w-full sm:w-auto"
              >
                See our work
              </Button>
            </motion.div>

            <motion.p
              className="mt-7 flex items-start gap-2 text-[13px] text-slate-dim sm:items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.8 }}
            >
              <ShieldCheck
                size={15}
                strokeWidth={1.7}
                className="mt-0.5 shrink-0 text-lime sm:mt-0"
              />
              Free consultation · Fixed price per phase · You own the code
            </motion.p>
          </div>

          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <div className="relative h-[16rem] sm:h-[24rem] lg:h-[34rem]">
              {show3d ? (
                <Suspense fallback={<ScenePlaceholder />}>
                  <HeroScene />
                </Suspense>
              ) : (
                <HeroVisual />
              )}

              <motion.div
                className="pointer-events-none absolute bottom-2 left-0 flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/80 py-2 pl-3.5 pr-4 shadow-card backdrop-blur-xl"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1, ease: easeLuxury }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-dim">
                  Now building
                </span>
                <span className="relative inline-grid h-[1.4em] min-w-[7.5rem] overflow-hidden">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={heroWords[wordIndex]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{ duration: 0.55, ease: easeOutExpo }}
                      className="text-gradient whitespace-nowrap font-display text-[15px] font-semibold"
                    >
                      {heroWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </motion.div>

              {show3d && (
                <motion.p
                  className="pointer-events-none absolute right-0 top-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.9, delay: 1.4 }}
                >
                  <MousePointer2 size={12} strokeWidth={1.8} className="text-accent" />
                  Move your cursor
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 border-t border-ink/8 pt-8 md:mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <dl className="grid flex-1 grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-[2.1rem] font-semibold leading-none text-chalk">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-3 text-[13px] font-medium text-chalk">{stat.label}</dt>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-dim">
                    {stat.note}
                  </p>
                </div>
              ))}
            </dl>

            <div className="hidden shrink-0 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-dim lg:flex">
              <ArrowDown size={14} strokeWidth={1.8} className="animate-float text-accent" />
              Scroll
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
