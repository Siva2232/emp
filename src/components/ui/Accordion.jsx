import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { easeLuxury } from "../../utils/motion";
import { cn } from "../../utils/helpers";

export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink/8 border-y border-ink/8">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-accent-soft sm:gap-6 sm:py-6 md:py-7"
            >
              <span
                className={cn(
                  "font-display text-lg leading-snug transition-colors md:text-xl",
                  isOpen ? "text-chalk" : "text-mist group-hover:text-chalk"
                )}
              >
                {item.q}
              </span>
              <Plus
                size={20}
                strokeWidth={1.6}
                className={cn(
                  "mt-1 shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isOpen ? "rotate-45 text-accent-soft" : "text-slate-dim"
                )}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: easeLuxury }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-mist sm:pb-7 sm:pr-10">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
