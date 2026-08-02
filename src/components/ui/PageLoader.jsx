import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { easeLuxury } from "../../utils/motion";
import Logo from "./Logo";

export default function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-void"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: easeLuxury } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeLuxury }}
            >
              <Logo className="h-7" />
            </motion.div>
            <div className="h-px w-40 overflow-hidden bg-ink/10">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-glow"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: easeLuxury }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
