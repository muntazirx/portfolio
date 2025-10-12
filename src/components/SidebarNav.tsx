"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Blog" },
];

export default function SidebarNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const ticking = useRef(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);

    const updateActive = () => {
      ticking.current = false;
      const viewportCenter = window.innerHeight * 0.4; // bias toward upper area

      // If scrolled to bottom, force last section active
      const atBottom = window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

      // Choose the visible section whose center is closest to viewportCenter.
      let bestId = ids[0];
      let bestDistance = Number.POSITIVE_INFINITY;
      for (let i = 0; i < ids.length; i++) {
        const el = document.getElementById(ids[i]);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (isVisible && distance < bestDistance) {
          bestDistance = distance;
          bestId = ids[i];
        }
      }
      setActive(bestId);
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateActive);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // initialize
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop nav */}
      <nav aria-label="Section navigation" className="mt-10 hidden lg:block">
        <ul className="space-y-5 text-[0.78rem] tracking-wider">
          {sections.map((s) => (
            <li key={s.id} className="group">
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`uppercase ${
                  active === s.id ? "text-heading font-semibold" : "text-foreground/60"
                } relative inline-block`}
              >
                {s.label}
                <span
                  aria-hidden
                  className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                    active === s.id ? "w-full bg-accent" : "w-0 bg-transparent"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      <nav aria-label="Section navigation" className="mt-8 lg:hidden">
        <ul className="flex flex-wrap gap-4 text-xs tracking-wider">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`${active === s.id ? "text-heading font-semibold" : "text-foreground/60"} inline-block`}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}


