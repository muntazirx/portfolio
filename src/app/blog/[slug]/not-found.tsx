import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-semibold text-heading mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-heading mb-4">Blog Post Not Found</h2>
        <p className="text-foreground/80 mb-8">
          The blog post you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="inline-block px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            View All Posts
          </Link>
          <Link
            href="/"
            className="inline-block px-6 py-3 border border-foreground/20 text-foreground rounded-lg hover:bg-foreground/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
