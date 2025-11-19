"use client";

import { useEffect, useRef, useState } from "react";
import { User, Briefcase, Award, BookOpen } from "lucide-react";

const sections = [
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "blog", label: "Blog", icon: BookOpen },
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
    updateActive(); // initial check

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
      // Update active state immediately for better responsiveness
      setActive(id);
    }
  };

  return (
    <>
      {/* Desktop nav */}
      <nav aria-label="Section navigation" className="mt-16 hidden lg:block">
        <ul className="w-max">
          {sections.map((item) => {
            const isActive = active === item.id;
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`group flex items-center py-3 transition-all duration-300 ${
                    isActive ? "text-heading" : "text-muted hover:text-foreground"
                  }`}
                >
                  <span className={`mr-4 transition-all duration-300 ${
                    isActive ? "w-8 bg-heading" : "w-4 bg-muted group-hover:w-6 group-hover:bg-foreground"
                  } h-[1px]`} />
                  
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Icon className={`h-3.5 w-3.5 transition-colors ${isActive ? "text-accent" : "text-muted group-hover:text-foreground"}`} />
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
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


