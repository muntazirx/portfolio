import type { Metadata } from "next";
import { writings } from "@/data/site";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing and notes by Muntazir Mehdi",
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>Blog</h1>
      <div className="mt-6 space-y-4">
        {writings.map((w) => (
          <BlogCard
            key={`${w.title}-${w.year}`}
            title={w.title}
            year={w.year}
            readingTime={w.readingTime}
            imageSrc={w.imageSrc}
            href={w.slug ? `/blog/${w.slug}` : w.href ?? "#"}
          />
        ))}
      </div>
    </div>
  );
}


