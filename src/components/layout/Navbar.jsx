import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { brand, contact, navLinks } from "../../data/site";
import { cn, telHref } from "../../utils/helpers";
import { easeLuxury } from "../../utils/motion";
import Logo from "../ui/Logo";

function Wordmark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center transition-opacity duration-500 hover:opacity-70"
    >
      <Logo className="h-[18px] md:h-[21px]" alt={`${brand.name} home`} />
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => {
    setMenuOpen(false);
    // Clear any leftover scroll-lock padding from a previous session/HMR
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
    document.documentElement.removeAttribute("data-mobile-menu");
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const root = document.documentElement;
    if (!menuOpen) {
      root.removeAttribute("data-mobile-menu");
      return undefined;
    }

    const { body } = document;
    const gutter = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;

    root.dataset.mobileMenu = "open";
    body.style.overflow = "hidden";
    // Only compensate for a real desktop scrollbar — on mobile this padding
    // shows up as a permanent white strip down the right edge
    if (gutter >= 8) body.style.paddingRight = `${gutter}px`;

    return () => {
      root.removeAttribute("data-mobile-menu");
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPadding;
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-ink/8 bg-void/80 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <nav className="section-shell flex h-16 items-center justify-between sm:h-18 md:h-20">
          <Wordmark />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                      isActive ? "text-chalk" : "text-mist hover:text-chalk"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-0 -z-10 rounded-full border border-ink/10 bg-ink/[0.05]" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
            <li>
              <span className="ml-2 inline-flex cursor-default items-center gap-2 rounded-full border border-dashed border-ink/12 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-dim">
                Products
                <span className="text-accent-soft">soon</span>
              </span>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={telHref(contact.sales)}
              className="hidden font-mono text-[12px] tracking-wide text-mist transition-colors hover:text-chalk xl:block"
            >
              {contact.sales}
            </a>
            <Link
              to="/contact"
              className="group hidden items-center gap-2 rounded-full bg-chalk px-5 py-2.5 text-[13px] font-semibold text-void transition-all duration-500 hover:-translate-y-0.5 hover:bg-ink sm:inline-flex"
            >
              Start a project
              <ArrowUpRight
                size={15}
                strokeWidth={2.2}
                className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-chalk transition-colors hover:border-accent/50 lg:hidden"
            >
              <Menu size={18} strokeWidth={1.8} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[110] flex flex-col bg-void lg:hidden"
            style={{ height: "100dvh" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: easeLuxury }}
          >
            <div className="section-shell flex h-16 shrink-0 items-center justify-between sm:h-18">
              <Wordmark onClick={() => setMenuOpen(false)} />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-chalk"
              >
                <X size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="section-shell flex flex-1 flex-col justify-between gap-10 overflow-y-auto overscroll-contain pb-10 pt-4">
              <ul className="flex flex-col">
                {[{ label: "Home", to: "/" }, ...navLinks].map((link, i) => (
                  <motion.li
                    key={link.to}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 * i, ease: easeLuxury }}
                    className="shrink-0 border-b border-ink/8"
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center justify-between py-4 font-display text-[26px] tracking-tight transition-colors sm:py-5 sm:text-3xl",
                          isActive ? "text-accent-soft" : "text-chalk"
                        )
                      }
                    >
                      {link.label}
                      <ArrowUpRight size={20} strokeWidth={1.5} className="text-slate-dim" />
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="shrink-0 space-y-6">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-center gap-2 rounded-full bg-chalk px-6 py-4 text-[14px] font-semibold text-void transition-colors duration-500 hover:bg-ink sm:hidden"
                >
                  Start a project
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </Link>

                <div className="space-y-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-dim">
                    Talk to us
                  </p>
                  <a
                    href={telHref(contact.sales)}
                    className="block font-display text-xl text-chalk"
                  >
                    {contact.sales}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block text-sm text-mist transition-colors hover:text-chalk"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
