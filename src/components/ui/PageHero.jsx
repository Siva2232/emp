import { motion } from "framer-motion";
import { easeLuxury, staggerContainer, wordReveal } from "../../utils/motion";
import Backdrop from "./Backdrop";

export default function PageHero({ eyebrow, title, lead, meta, media }) {
  const words = title.split(" ");

  return (
    <section className="grain relative w-full overflow-hidden border-b border-ink/8 bg-abyss pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-24 md:pt-44">
      <Backdrop variant="soft" />

      <div className="section-shell relative z-10">
        <div className={media ? "grid items-center gap-10 lg:grid-cols-12 lg:gap-14" : undefined}>
          <div className={media ? "lg:col-span-7" : undefined}>
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeLuxury }}
            >
              <span className="h-1 w-1 rounded-full bg-accent-soft" />
              {eyebrow}
            </motion.p>

            <motion.h1
              className={`display-lg mt-6 text-chalk ${media ? "" : "max-w-4xl"}`}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em]">
                  <motion.span variants={wordReveal} className="inline-block">
                    {word}
                    {i < words.length - 1 && "\u00A0"}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {lead && (
              <motion.p
                className="body-lg mt-7 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: easeLuxury }}
              >
                {lead}
              </motion.p>
            )}

            {meta?.length > 0 && (
              <motion.ul
                className="mt-9 flex flex-wrap gap-x-8 gap-y-5 sm:mt-10 sm:gap-x-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.45 }}
              >
                {meta.map((item) => (
                  <li key={item.label}>
                    <p className="font-display text-2xl text-chalk">{item.value}</p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-dim">
                      {item.label}
                    </p>
                  </li>
                ))}
              </motion.ul>
            )}
          </div>

          {media && (
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: easeLuxury }}
            >
              {media}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
