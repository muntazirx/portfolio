"use client";

import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlog = pathname?.startsWith("/blog");

  return (
    <>
      {!isBlog && <Sidebar />}
      <main
        id="main"
        className={`${!isBlog ? "lg:ml-[38%] xl:ml-[43%] 2xl:ml-[46%]" : ""} pr-4 sm:pr-6 lg:pr-10 xl:pr-14 2xl:pr-20`}
      >
        {children}
      </main>
    </>
  );
}


