"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { siteMeta, resumeUrl } from "@/data/site";
import SocialIcons from "@/components/SocialIcons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "blog", label: "Blog" },
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
      const atBottom = window.innerHeight + window.scrollY >=
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
    if (sectionId === "blog") {
      return; // Blog link will use Next.js Link component
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-foreground/10">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full overflow-hidden border border-foreground/15">
              <Image src="/profile.png" alt="Profile photo" width={32} height={32} className="h-8 w-8 object-cover" />
            </div>
            <div>
              <div className="text-sm font-semibold text-heading">{siteMeta.name}</div>
              <div className="text-xs text-muted">{siteMeta.title}</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-foreground/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-sm"
          style={{ top: "57px" }}
        >
          <div className="h-full overflow-y-auto px-6 py-8">
            <nav aria-label="Mobile navigation" className="space-y-6">
              <ul className="space-y-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    {s.id === "blog" ? (
                      <Link
                        href="/blog"
                        onClick={() => setIsOpen(false)}
                        className={`block w-full text-left text-lg font-medium ${
                          active === s.id ? "text-heading" : "text-foreground/70"
                        } transition-colors`}
                      >
                        {s.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(s.id)}
                        className={`block w-full text-left text-lg font-medium ${
                          active === s.id ? "text-heading" : "text-foreground/70"
                        } transition-colors`}
                      >
                        {s.label}
                      </button>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Syed Muntazir Mehdi CV.pdf"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-left text-lg font-medium text-foreground/70 hover:text-heading transition-colors"
                  >
                    Resume
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
