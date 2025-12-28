import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  children: ReactNode;
  withDivider?: boolean;
  hideTitle?: boolean;
};

export default function Section({ id, title, children, withDivider = false, hideTitle = false }: SectionProps) {
  return (
    <section
      id={id}
      className={
        `max-w-3xl mx-auto px-6 sm:px-8 py-12 ${withDivider ? "border-t border-foreground/10" : ""}`
      }
    >
      {!hideTitle && (
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
          {title}
        </h2>
      )}
      <div className="space-y-4 text-sm/6 sm:text-base/7 text-foreground/90">
        {children}
      </div>
    </section>
  );
}
