import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  number?: string;
  children: ReactNode;
  hideTitle?: boolean;
};

export default function Section({
  id,
  title,
  number,
  children,
  hideTitle = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className="max-w-3xl mx-auto px-6 sm:px-8 py-12 scroll-mt-24"
    >
      {!hideTitle && (
        <h2 className="section-heading">
          {number && (
            <>
              <span className="num">{number}</span>
              <span className="sep">/</span>
            </>
          )}
          <span>{title}</span>
        </h2>
      )}
      <div className="space-y-4 text-sm/6 sm:text-[0.95rem]/7 text-foreground/90">
        {children}
      </div>
    </section>
  );
}
