"use client";

import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { usePathname } from "next/navigation";

function AppShellContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog") ?? false;

  return (
    <>
      <MobileNav />
      {!isBlog && <Sidebar />}
      <main
        id="main"
        className={`${!isBlog ? "lg:ml-[38%] xl:ml-[43%] 2xl:ml-[46%]" : ""} ${!isBlog ? "pt-16 lg:pt-0" : ""} pr-4 sm:pr-6 lg:pr-10 xl:pr-14 2xl:pr-20`}
      >
        {children}
      </main>
    </>
  );
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={
      <main
        id="main"
        className="bg-background min-h-screen pr-4 sm:pr-6 lg:pr-10 xl:pr-14 2xl:pr-20"
      >
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-muted">Loading...</div>
        </div>
      </main>
    }>
      <AppShellContent>{children}</AppShellContent>
    </Suspense>
  );
}


