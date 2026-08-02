import { useEffect, useState } from "react";

/**
 * Reports which of the given element ids is currently the focus of the viewport.
 * The margins bias selection toward the section crossing the upper third of the
 * screen, which matches where a reader's attention sits.
 */
export function useActiveSection(ids) {
  const key = ids.join("|");
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
