import SidebarNav from "@/components/SidebarNav";
import SocialIcons from "@/components/SocialIcons";
import { siteMeta } from "@/data/site";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block lg:fixed lg:top-0 lg:left-0 lg:bottom-0 lg:w-[40%] xl:w-[45%] 2xl:w-[48%]">
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
          <div>
            <SocialIcons />
          </div>
        </div>
      </div>
    </aside>
  );
}


