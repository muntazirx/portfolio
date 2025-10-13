import SidebarNav from "@/components/SidebarNav";
import SocialIcons from "@/components/SocialIcons";
import Image from "next/image";
import { siteMeta } from "@/data/site";

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


