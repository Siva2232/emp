import { useEffect, useRef } from "react";
import { services } from "../../../data/site";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { cn, scrollToId } from "../../../utils/helpers";

export default function ServiceNav() {
  const active = useActiveSection(services.map((service) => service.slug));
  const listRef = useRef(null);

  // Keep the active chip in view while scrolling the page — only scroll the chip row
  useEffect(() => {
    if (!active || !listRef.current) return;
    const chip = listRef.current.querySelector(`[data-slug="${active}"]`);
    if (!(chip instanceof HTMLElement)) return;

    const list = listRef.current;
    const left = chip.offsetLeft - (list.clientWidth - chip.clientWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Services"
      className="sticky top-16 z-40 w-full overflow-x-clip border-b border-ink/8 bg-void/90 backdrop-blur-xl sm:top-[4.5rem] md:top-20"
    >
      <div className="section-shell">
        <ul
          ref={listRef}
          className="no-scrollbar flex gap-1 overflow-x-auto overscroll-x-contain py-2.5 sm:py-3"
        >
          {services.map((service, i) => {
            const isActive = active === service.slug;
            return (
              <li key={service.slug} className="shrink-0">
                <button
                  type="button"
                  data-slug={service.slug}
                  onClick={() => scrollToId(service.slug)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-[12.5px] font-medium transition-colors duration-300",
                    isActive
                      ? "border border-accent/25 bg-accent/8 text-chalk"
                      : "border border-transparent text-mist hover:text-chalk"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-[10px] transition-colors",
                      isActive ? "text-accent" : "text-slate-dim"
                    )}
                  >
                    0{i + 1}
                  </span>
                  {service.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
