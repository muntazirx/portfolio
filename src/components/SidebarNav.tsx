"use client";

import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "about", label: "about", num: "01" },
  { id: "experience", label: "experience", num: "02" },
  { id: "certifications", label: "certifications", num: "03" },
  { id: "labs", label: "labs", num: "04" },
  { id: "blog", label: "writing", num: "05" },
];

export default function SidebarNav() {
  const [active, setActive] = useState<string>(sections[0].id);
  const ticking = useRef(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);

    const updateActive = () => {
      ticking.current = false;
      const viewportCenter = window.innerHeight * 0.4;

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }

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
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
    }
  };

  return (
    <nav aria-label="Section navigation" className="mt-12 hidden lg:block">
      <ul className="w-max">
        {sections.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className={`group flex items-center py-2.5 transition-all duration-200 mono text-xs uppercase tracking-widest ${
                  isActive ? "text-heading" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`mr-4 transition-all duration-200 ${
                    isActive
                      ? "w-8 bg-accent"
                      : "w-4 bg-muted/50 group-hover:w-6 group-hover:bg-foreground"
                  } h-px`}
                />
                <span className="flex items-baseline gap-2">
                  <span
                    className={`${
                      isActive ? "text-accent" : "text-muted/70"
                    } text-[0.65rem]`}
                  >
                    {item.num}
                  </span>
                  <span>{item.label}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
