
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogToc from "@/components/BlogToc";
import ViewCounter from "@/components/ViewCounter";
import { siteMeta } from "@/data/site";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { ArrowLeft, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }
  const title = `${post.title} | ${siteMeta.name}`;
  const description = post.description ?? post.title ?? siteMeta.tagline;
  const url = `https://muntazirmehdi.com/blog/${slug}`;
  const keywords = post.keywords ? post.keywords.join(", ") : undefined;
  
  return {
    title,
    description,
    keywords,
    authors: [{ name: siteMeta.name }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url,
      publishedTime: `${post.year}-01-01`,
      authors: [siteMeta.name],
      tags: post.keywords,
      images: post.imageSrc ? [{ 
        url: `https://muntazirmehdi.com${post.imageSrc}`, 
        width: 1200, 
        height: 630, 
        alt: post.title 
      }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.imageSrc ? [`https://muntazirmehdi.com${post.imageSrc}`] : undefined,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: `${post.year}-01-01`,
    author: {
      "@type": "Person",
      name: siteMeta.name,
    },
    description: post.description,
    image: post.imageSrc ? `https://muntazirmehdi.com${post.imageSrc}` : undefined,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://muntazirmehdi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://muntazirmehdi.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://muntazirmehdi.com/blog/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="px-6 sm:px-8 py-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[270px_76ch] lg:justify-center gap-10">
      <aside className="hidden lg:block">
        <div className="sticky top-24 space-y-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <section className="rounded-lg border border-foreground/10 bg-[color:color-mix(in_oklab,var(--heading)_2%,transparent)] p-4">
            <div className="mono text-[0.68rem] uppercase tracking-widest text-foreground/50 mb-3">
              On this page
            </div>
            <Suspense fallback={null}>
              <BlogToc />
            </Suspense>
          </section>

          <section className="rounded-lg border border-foreground/10 bg-[color:color-mix(in_oklab,var(--heading)_2%,transparent)] p-4">
            <div className="mono text-[0.68rem] uppercase tracking-widest text-foreground/50 mb-3">
              Share
            </div>
            <div className="flex gap-4">
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://muntazirmehdi.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#0077b5] transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://muntazirmehdi.com/blog/${slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-[#1DA1F2] transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </section>
        </div>
      </aside>
    <article className="max-w-none">
      <Link
        href="/"
        className="lg:hidden inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group mb-5"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Home
      </Link>
      <header>
        <div className="mb-2 flex flex-wrap items-center gap-2 mono text-[0.68rem] uppercase tracking-widest text-muted">
          <span className="rounded border border-foreground/15 px-2 py-1">{post.year}</span>
          {post.readingTime && (
            <span className="rounded border border-foreground/15 px-2 py-1">{post.readingTime}</span>
          )}
          <ViewCounter slug={slug} />
        </div>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>
          {post.title}
        </h1>
        <div className="mt-4 lg:hidden flex items-center gap-4">
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://muntazirmehdi.com/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-foreground/15 px-3 py-1.5 mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-accent hover:border-accent/50 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-3.5 w-3.5" />
            linkedin
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://muntazirmehdi.com/blog/${slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-foreground/15 px-3 py-1.5 mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-accent hover:border-accent/50 transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-3.5 w-3.5" />
            twitter
          </a>
        </div>
      </header>

      <div className="prose-blog mt-8">
        {post.content}
      </div>

      <hr className="my-10 border-foreground/10" />
      <nav className="flex items-start justify-between gap-6 text-sm">
        <PrevNext slug={slug} />
      </nav>
    </article>
    </div>
    </>
  );
}

async function PrevNext({ slug }: { slug: string }) {
  const posts = await getAllPosts();
  const index = posts.findIndex(w => w.slug === slug);
  const prev = index > 0 ? posts[index - 1] : undefined;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined;
  return (
    <>
      <div className="min-w-0">
        {prev && (
          <Link
            href={`/blog/${prev.slug}`}
            className="unstyled inline-block text-muted hover:text-accent transition-colors"
          >
            <span className="mono text-[0.65rem] uppercase tracking-widest text-foreground/45">
              Previous
            </span>
            <span className="mt-1 block truncate">← {prev.title}</span>
          </Link>
        )}
      </div>
      <div className="min-w-0 text-right">
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="unstyled inline-block text-muted hover:text-accent transition-colors"
          >
            <span className="mono text-[0.65rem] uppercase tracking-widest text-foreground/45">
              Next
            </span>
            <span className="mt-1 block truncate">{next.title} →</span>
          </Link>
        )}
      </div>
    </>
  );
}


