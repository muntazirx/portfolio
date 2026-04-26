import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group mb-7"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>Writing</h1>
      <p className="mt-3 text-sm text-foreground/80 max-w-2xl">
        Notes from cert prep, lab practice, and mistakes I do not want to repeat.
      </p>
      {posts.length > 0 && (
        <p className="mt-2 mono text-[0.7rem] uppercase tracking-widest text-muted">
          {posts.length} post{posts.length > 1 ? "s" : ""}
        </p>
      )}
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


