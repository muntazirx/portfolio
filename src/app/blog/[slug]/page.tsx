import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import BlogToc from "@/components/BlogToc";
import { writings, siteMeta } from "@/data/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return writings.filter(w => w.slug).map(w => ({ slug: w.slug as string }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = writings.find(w => w.slug === slug);
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
  const post = writings.find(w => w.slug === slug);
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

      {/* Top hero image removed; logo will appear within content before the shoutouts section */}

      <div className="prose-blog mt-8">
        <p>Hey everyone,</p>
        <p>
          I recently completed my Blue Team Level 1 (BTL1) certification, and I want to share my experience — how I failed my first attempt, what went wrong, and how I came back stronger to score 95% on my second try.
        </p>
        <p>
          If you’re preparing for BTL1, or you’ve failed once and feel discouraged, this might help.
        </p>

        {post.imageSrc && (
          <div className="my-6 flex justify-center">
            <Image
              src={post.imageSrc}
              alt="Blue Team Level 1 logo"
              width={600}
              height={600}
              className="h-auto w-[50%] max-w-[420px] rounded-lg border border-foreground/10"
            />
          </div>
        )}
        <h2>Before We Begin — A Few Shoutouts to My Friends</h2>
        <p>
          Before diving in, I want to give a huge shoutout to my brother
          {" "}
          <a href="https://www.linkedin.com/in/shanuka-samarasinghe-953a88234/" target="_blank" rel="noopener noreferrer">
            Shanuka (AKA Shan)
          </a>
          {" "}
          for his incredible review of the BTL1 materials and exam. His insights were instrumental in shaping my preparation and expectations. The right perspective can save you hours of guesswork and wasted energy.
        </p>
        <p>
          I also want to thank my good friend
          {" "}
          <a href="https://www.linkedin.com/in/jkt112/" target="_blank" rel="noopener noreferrer">Justin K. T.</a>
          ,{" "}
          who’s always been that grounded voice throughout my cybersecurity journey. His advice came at a time when I needed clarity the most, and it ultimately guided me toward pursuing BTL1.
        </p>
        <p>Below are some references that really guided my journey:</p>
        <ul>
          <li>
            <a href="https://www.securityblue.team/certifications/blue-team-level-1" target="_blank" rel="noopener noreferrer">
              Official Security Blue Team — Blue Team Level 1 (BTL1)
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/pulse/my-journey-through-btl1-shanuka-samarasinghe-0oujc/?trackingId=RMHdfRA3TjCsNNtxFgJ%2Btg%3D%3D" target="_blank" rel="noopener noreferrer">
              BTL1 Exam Experience by Shanuka Samarasinghe
            </a>
          </li>
          <li>
            <a href="https://infosecwriteups.com/blue-team-level-1-btl1-training-course-exam-review-and-tips-march-2023-7bb00597b5ad" target="_blank" rel="noopener noreferrer">
              Course & Exam Review by Ilias Mavropoulos
            </a>
          </li>
        </ul>

        <h2>Why I chose BTL1</h2>
        <p>
          Before BTL1, I had earned the eJPT (eLearnSecurity Junior Penetration Tester) certification. That gave me an attacker’s mindset, but I wanted to understand the other side — how defenders detect and stop those attacks.
        </p>
        <ul>
          <li>Security+ is great for foundation knowledge but mostly theory and multiple choice.</li>
          <li>BTL1 is hands-on, practical, and scenario-driven.</li>
        </ul>
        <p>
          I wanted real-world experience, not just memorization. Even though BTL1 costs slightly more, it felt worth it for the practical exposure.
        </p>

        <h2>What the BTL1 Exam Really Is Like</h2>
        <p>
          The BTL1 exam isn&apos;t a quiz. It&apos;s a 24-hour, hands-on incident response simulation. The moment you click
          &ldquo;Start&rdquo; you accept an NDA and your lab environment spins up. From that point, you&apos;ve got one job: solve the
          scenario using real tools and real thinking.
        </p>
        <p>
          You&apos;re given an incident scenario and step into the role of a junior SOC analyst. Your job is to solve 20
          practical questions using the defensive tools and techniques you learned throughout the course. The exam is
          open-book, but AI tools aren&apos;t allowed. It isn&apos;t about memorization—it&apos;s about investigating, connecting
          clues, and thinking like a defender as you would in a real SOC environment.
        </p>

        <h2>My First Attempt — What Went Wrong</h2>
        <p>
          Before my first attempt, I completed the entire BTL1 course and all the labs. I even did some research online, and most people said that if you&apos;ve studied properly, the official course alone is enough to pass. That turned out not to be true in my case.
        </p>
        <p>
          During the exam, I realized how challenging Splunk and Autopsy actually were. The tasks went deeper than what was covered in the course, and that&apos;s where I struggled the most.
        </p>
        <p>
          When I submitted my exam and saw 65% (passing is 70%), it was disappointing — especially because I was aiming for the Gold Coin (awarded for 90%+ on the first try). But looking back, it was clear: I didn&apos;t pace myself or prepare deeply enough.
        </p>

        <h2>My Second Attempt — What Changed</h2>
        <p>
          When I started my second attempt, I already knew what went wrong before. This time, I made sure to use the
          full 24 hours and not rush through the exam.
        </p>
        <p>
          Since I work full-time, I started the exam in the evening after work. I solved most of the questions till
          night, then took a break and continued early in the morning. That short rest helped a lot. I was able to think
          clearly, and finding answers felt much easier than before.
        </p>
        <p>
          I also made sure to review all my answers before submitting. Taking that extra time really made a difference.
        </p>
        <p>
          Although the Gold Coin is only awarded to those who score 90% or higher on their first attempt, reaching that
          score on my second try felt just as rewarding. It was proof that persistence and better preparation truly pay
          off.
        </p>

        {/* Result callout image */}
        <div className="panel rounded-lg p-4 my-6 text-center">
          <Image
            src="/95-result.png"
            alt="BTL1 results dashboard showing a 95% score"
            width={960}
            height={420}
            className="mx-auto h-auto w-full max-w-[680px] rounded border border-foreground/10"
            sizes="(min-width: 1024px) 680px, 100vw"
          />
        </div>

        <h2>How I Prepared Differently for My Second Attempt</h2>
        <p>
          After failing my first attempt, I quickly identified my weak points — Splunk and Autopsy. The BTL1 course covered them, but not in enough depth for the exam. So this time, I decided to practice more hands-on using TryHackMe and BTLO Labs.
        </p>
        <p>Here are the rooms and labs I focused on:</p>
        <ul>
          <li>
            <a href="https://tryhackme.com/room/splunk201" target="_blank" rel="noopener noreferrer">
              Incident Handling with Splunk (TryHackMe)
            </a>
          </li>
          <li>
            <a href="https://tryhackme.com/room/investigatingwithsplunk" target="_blank" rel="noopener noreferrer">
              Investigation with Splunk (TryHackMe)
            </a>
          </li>
          <li>
            <a href="https://tryhackme.com/room/autopsy2ze0" target="_blank" rel="noopener noreferrer">
              Disk Analysis & Autopsy (TryHackMe)
            </a>
          </li>
          <li>
            <a href="https://tryhackme.com/room/wiresharktrafficanalysis" target="_blank" rel="noopener noreferrer">
              Wireshark: Traffic Analysis (TryHackMe)
            </a>
          </li>
          <li>Retired Sakuna Room on BTLO Labs — a great final practice before the exam.</li>
        </ul>
        <p>
          Working on these rooms helped me understand Splunk searches, log analysis, and forensic workflows more deeply. That extra hands-on practice made all the difference in my second attempt.
        </p>

        <h2>Key Tips If You’re Preparing for BTL1 Exam</h2>
        <ul>
          <li><strong>Read Exam Instructions Carefully:</strong> instructions explain how to access the tools and understand the case scenario. Missing even a small detail can cause problems during the exam.</li>
          <li><strong>Use the Full 24 Hours:</strong> Even if you finish early, double-check your answers. Don’t rush.</li>
          <li><strong>Move On If You’re Stuck:</strong> If you can’t find a flag, skip it and return later. Solving others often reveals what you missed.</li>
          <li><strong>Focus on Splunk, Autopsy, and Wireshark:</strong> Splunk and Autopsy are the toughest parts — practice them properly. These make or break your score.</li>
          <li><strong>Review Before Submitting:</strong> After long hours, small typos happen. A final pass can turn a near-miss into a full score.</li>
        </ul>

        {/* Certificate proof */}
        <figure className="my-8">
          <Image
            src="/btl1-certificate.jpg"
            alt="Security Blue Team — Blue Team Level 1 certificate"
            width={1200}
            height={850}
            className="mx-auto h-auto w-full max-w-[820px] rounded border border-foreground/10"
            sizes="(min-width: 1024px) 820px, 100vw"
          />
          <figcaption className="mt-2 text-center text-sm text-muted">
            BTL1 certificate
          </figcaption>
        </figure>

        <h2>Closing Thoughts — Is It Worth It?</h2>
        <p>
          Absolutely.
        </p>
        <p>
          Failing my first BTL1 attempt was humbling, but it turned into the best feedback I could’ve asked for. It forced me to slow down, prepare smarter, and really learn the tools instead of skimming.
        </p>
        <p>
          If you’re aiming for a SOC or blue-team role, BTL1 is worth it. It’s challenging but fair if you prepare with intention. And if you fail the first time? That’s okay — use it as a road map for your next attempt.
        </p>
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

function PrevNext({ slug }: { slug: string }) {
  const index = writings.findIndex(w => w.slug === slug);
  const prev = index > 0 ? writings[index - 1] : undefined;
  const next = index >= 0 && index < writings.length - 1 ? writings[index + 1] : undefined;
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


