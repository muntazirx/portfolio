import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog | Muntazir Mehdi",
  description: "Writing and notes by Muntazir Mehdi on offensive security, red teaming, certifications, and malware research.",
  keywords: ["cybersecurity blog", "offensive security", "red team", "CPTS", "CRTP", "penetration testing", "malware research", "security certifications"],
  alternates: {
    canonical: "https://muntazirmehdi.com/blog",
  },
  openGraph: {
    title: "Blog | Muntazir Mehdi",
    description: "Writing and notes by Muntazir Mehdi on offensive security, red teaming, certifications, and malware research.",
    type: "website",
    url: "https://muntazirmehdi.com/blog",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllPosts();
  
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>Writing</h1>
      <p className="mt-3 text-sm text-foreground/80 max-w-2xl">
        Notes from cert prep, lab practice, and mistakes I do not want to repeat.
      </p>
      <div className="mt-8 space-y-10">
        {posts.map((w) => (
          <BlogCard
            key={w.slug}
            title={w.title}
            year={w.year}
            readingTime={w.readingTime}
            description={w.description}
            imageSrc={w.imageSrc}
            href={`/blog/${w.slug}`}
          />
        ))}
        {posts.length === 0 && (
          <p className="text-sm text-foreground/70">No posts yet.</p>
        )}
      </div>
    </div>
  );
}


