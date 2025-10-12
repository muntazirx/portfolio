"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type TocItem = { id: string; text: string; level: 2 | 3 };

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function BlogToc() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLHeadingElement>("article h2, article h3"));
    const generated: TocItem[] = headings.map((h) => {
      if (!h.id) h.id = slugify(h.innerText);
      const level = (h.tagName.toLowerCase() === "h3" ? 3 : 2) as 2 | 3;
      return { id: h.id, text: h.innerText, level };
    });
    setItems(generated);

    observerRef.current?.disconnect();
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));
        if (visible[0]?.target) {
          const id = (visible[0].target as HTMLElement).id;
          if (id) setActiveId(id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  const hasItems = useMemo(() => items.length > 0, [items]);
  if (!hasItems) return null;

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <div className="text-xs uppercase tracking-wider text-muted mb-4">On this page</div>
      <ul className="space-y-3 text-[0.78rem] tracking-wider">
        {items.map((it) => (
          <li key={it.id} className={`group ${it.level === 3 ? "pl-4" : ""}`}>
            <a
              href={`#${it.id}`}
              className={`uppercase ${
                activeId === it.id ? "text-heading font-semibold" : "text-foreground/60"
              } relative inline-block`}
            >
              {it.text}
              <span
                aria-hidden
                className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 ${
                  activeId === it.id ? "w-full bg-accent" : "w-0 bg-transparent"
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}


