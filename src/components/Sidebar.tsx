import SidebarNav from "@/components/SidebarNav";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import Link from "next/link";
import { siteMeta, resumeUrl } from "@/data/site";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[38%] xl:w-[43%] 2xl:w-[46%]">
      <div className="h-full pr-12 flex items-stretch justify-end">
        <div className="max-w-md w-full flex flex-col justify-between pb-12">
          <div className="mt-24">
            <h1 className="text-[2.25rem] xl:text-[2.75rem] font-semibold tracking-tight" style={{letterSpacing:"-0.02em"}}>
              {siteMeta.name}
            </h1>
            <p className="mt-2 text-muted">{siteMeta.title}</p>
            <p className="mt-6 text-foreground/80 leading-relaxed">{siteMeta.tagline}</p>
            <SidebarNav />
            <div className="mt-6">
              <Link
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Syed Muntazir Mehdi CV.pdf"
                className="inline-flex items-center gap-2 text-sm text-foreground/90 border border-foreground/20 bg-transparent px-4 py-2 rounded-lg hover:bg-foreground/5 hover:border-accent/30 hover:text-accent transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 group"
              >
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full overflow-hidden border border-foreground/15">
              <Image src="/profile.png" alt="Profile photo" width={40} height={40} className="h-10 w-10 object-cover" />
            </div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </aside>
  );
}


