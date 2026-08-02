import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone, Plus, X } from "lucide-react";
import { contact } from "../../data/site";
import { telHref, whatsappHref } from "../../utils/helpers";
import { easeLuxury } from "../../utils/motion";

export default function ContactToggle() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);

  const actions = [
    { label: "WhatsApp", icon: MessageCircle, href: whatsappHref(contact.whatsapp) },
    { label: "Call sales", icon: Phone, href: telHref(contact.sales) },
    { label: "Email us", icon: Mail, href: `mailto:${contact.email}` },
  ];

  // Navbar sets data-mobile-menu on <html> while the drawer is open
  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setMenuOpen(root.dataset.mobileMenu === "open");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-mobile-menu"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    if (menuOpen) setOpen(false);
  }, [menuOpen]);

  if (menuOpen) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-[90] flex flex-col items-end gap-2.5 sm:bottom-8 sm:right-8"
    >
      <AnimatePresence>
        {open &&
          actions.map((action, i) => (
            <motion.a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 10, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.28, delay: i * 0.04, ease: easeLuxury }}
              className="glass flex items-center gap-2.5 rounded-full px-4 py-3 text-[12px] font-medium text-chalk shadow-lift transition-colors hover:border-accent/50 sm:py-2.5"
              onClick={() => setOpen(false)}
            >
              <action.icon size={15} strokeWidth={1.8} className="text-accent-soft" />
              {action.label}
            </motion.a>
          ))}
      </AnimatePresence>

      <div className="relative overflow-visible">
        {!open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-6px] overflow-hidden rounded-full"
          >
            <span className="animate-pulse-ring absolute inset-[6px] rounded-full border-2 border-accent/50" />
          </span>
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close contact options" : "Open contact options"}
          className="relative z-10 flex h-14 w-14 shrink-0 touch-manipulation items-center justify-center rounded-full bg-accent text-white shadow-glow transition-transform duration-300 active:scale-95"
        >
          {open ? <X size={20} strokeWidth={2} /> : <Plus size={22} strokeWidth={2} />}
        </button>
      </div>
    </div>
  );
}
