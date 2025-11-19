import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogToc from "@/components/BlogToc";
import { siteMeta } from "@/data/site";
import { getAllPosts, getPostBySlug } from "@/lib/mdx";

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

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description ?? post.title,
    image: post.imageSrc ? `https://muntazirmehdi.com${post.imageSrc}` : undefined,
    datePublished: `${post.year}-01-01`,
    dateModified: `${post.year}-01-01`,
    author: {
      "@type": "Person",
      name: siteMeta.name,
      url: "https://muntazirmehdi.com",
      sameAs: [
        "https://github.com/muntazirx",
        "https://www.linkedin.com/in/muntazirx",
      ],
    },
    publisher: {
      "@type": "Person",
      name: siteMeta.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://muntazirmehdi.com/blog/${slug}`,
    },
    keywords: post.keywords ? post.keywords.join(", ") : undefined,
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
      <div className="px-6 sm:px-8 py-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_76ch] lg:justify-center gap-10">
      <aside className="hidden lg:block">
        <Suspense fallback={null}>
          <BlogToc />
        </Suspense>
      </aside>
    <article className="max-w-none">
      <header>
        <p className="text-muted text-sm">{post.year}{post.readingTime ? ` · ${post.readingTime}` : ""}</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>
          {post.title}
        </h1>
      </header>

      <div className="prose-blog mt-8">
        {post.content}
      </div>

      <hr className="my-10 border-foreground/10" />
      <nav className="flex items-center justify-between text-sm">
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
      <div>
        {prev && (
          <a href={`/blog/${prev.slug}`} className="unstyled text-muted hover:underline underline-offset-4">
            ← {prev.title}
          </a>
        )}
      </div>
      <div>
        {next && (
          <a href={`/blog/${next.slug}`} className="unstyled text-muted hover:underline underline-offset-4">
            {next.title} →
          </a>
        )}
      </div>
    </>
  );
}


