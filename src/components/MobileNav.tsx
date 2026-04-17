"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteMeta, resumeUrl } from "@/data/site";
import SocialIcons from "@/components/SocialIcons";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "about", label: "about", num: "01" },
  { id: "experience", label: "experience", num: "02" },
  { id: "certifications", label: "certifications", num: "03" },
  { id: "labs", label: "labs", num: "04" },
  { id: "blog", label: "writing", num: "05" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog") ?? false;

  useEffect(() => {
    if (isBlog) {
      setActive("blog");
      return;
    }

    const ids = sections.map((s) => s.id);

    const updateActive = () => {
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
      window.requestAnimationFrame(updateActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isBlog]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (sectionId === "blog") return;
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-foreground/15">
              <Image
                src="/profile.png"
                alt="Profile photo"
                width={32}
                height={32}
                className="h-8 w-8 object-cover"
                suppressHydrationWarning
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-heading">
                {siteMeta.name}
              </div>
              <div className="mono text-[0.7rem] text-accent tracking-wide">
                {siteMeta.role}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </header>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          style={{ top: "57px" }}
        >
          <div className="h-full overflow-y-auto px-6 py-8">
            <nav aria-label="Mobile navigation" className="space-y-6">
              <ul className="space-y-3">
                {sections.map((s) => {
                  const isActive = active === s.id;
                  const content = (
                    <span className="flex items-baseline gap-3 mono uppercase tracking-widest text-sm">
                      <span
                        className={`text-xs ${
                          isActive ? "text-accent" : "text-muted"
                        }`}
                      >
                        {s.num}
                      </span>
                      <span
                        className={
                          isActive ? "text-heading" : "text-foreground/70"
                        }
                      >
                        {s.label}
                      </span>
                    </span>
                  );
                  return (
                    <li key={s.id}>
                      {s.id === "blog" ? (
                        <Link
                          href="/blog"
                          onClick={() => setIsOpen(false)}
                          className="unstyled block py-2"
                        >
                          {content}
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleNavClick(s.id)}
                          className="block w-full text-left py-2"
                        >
                          {content}
                        </button>
                      )}
                    </li>
                  );
                })}
                <li className="pt-3">
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Muntazir-Mehdi-CV.pdf"
                    onClick={() => setIsOpen(false)}
                    className="unstyled block py-2 mono uppercase tracking-widest text-sm text-foreground/70 hover:text-accent"
                  >
                    <span className="text-xs text-muted mr-3">06</span>
                    resume.pdf
                  </Link>
                </li>
              </ul>
              <div className="pt-6 border-t border-foreground/10">
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
