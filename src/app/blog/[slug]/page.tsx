import type { Metadata } from "next";
import Image from "next/image";
import { writings, siteMeta } from "@/data/site";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return writings.filter(w => w.slug).map(w => ({ slug: w.slug as string }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = writings.find(w => w.slug === params.slug);
  const title = post?.title ?? siteMeta.name;
  const description = post?.title ?? siteMeta.tagline;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = writings.find(w => w.slug === params.slug);
  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      <header>
        <p className="text-muted text-sm">{post.year}{post.readingTime ? ` · ${post.readingTime}` : ""}</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-heading" style={{letterSpacing: "-0.01em"}}>
          {post.title}
        </h1>
      </header>

      {post.imageSrc && (
        <div className="mt-6">
          <Image src={post.imageSrc} alt="" width={1200} height={630} className="rounded-lg border border-foreground/10" />
        </div>
      )}

      <div className="prose prose-invert prose-headings:text-heading prose-p:text-foreground mt-8">
        <p>Hey everyone,</p>
        <p>
          I recently completed my Blue Team Level 1 (BTL1) certification, and I want to share my experience — how I failed my first attempt, what went wrong, and how I came back stronger to score 95% on my second try.
        </p>
        <p>
          If you’re preparing for BTL1, or you’ve failed once and feel discouraged, this might help.
        </p>

        <h2>Why I chose BTL1</h2>
        <p>
          Before BTL1, I had earned the eJPT certification. That gave me an attacker’s mindset, but I wanted to understand the other side — how defenders detect and stop those attacks. BTL1 is hands-on, practical, and scenario-driven, which aligned with what I wanted to learn.
        </p>

        <h2>What the BTL1 exam is like</h2>
        <p>
          The BTL1 exam is a 24-hour, hands-on incident response simulation. You step into the role of a junior SOC analyst and solve practical tasks using the tools you learned in the course. It’s open-book, but it rewards investigation and clear thinking.
        </p>

        <h2>My first attempt — what went wrong</h2>
        <p>
          I underestimated the depth of Splunk and Autopsy. I rushed, struggled with certain tasks, and finished with 65% (just shy of the 70% pass mark).
        </p>

        <h2>My second attempt — what changed</h2>
        <p>
          I used the full 24 hours, took a short rest to reset, and reviewed every answer before submitting. The result: 95% on my second attempt.
        </p>

        <h2>How I prepared differently</h2>
        <ul>
          <li>Incident Handling with Splunk (TryHackMe)</li>
          <li>Investigation with Splunk (TryHackMe)</li>
          <li>Disk Analysis & Autopsy (TryHackMe)</li>
          <li>Wireshark: Traffic Analysis (TryHackMe)</li>
          <li>BTLO Labs room (retired) for end-to-end practice</li>
        </ul>

        <h2>Tips if you’re preparing</h2>
        <ul>
          <li>Read exam instructions carefully.</li>
          <li>Use the full 24 hours; review before submitting.</li>
          <li>Move on when stuck; come back later.</li>
          <li>Focus on Splunk, Autopsy, and Wireshark.</li>
          <li>Do a final proof before submission.</li>
        </ul>

        <h2>Closing thoughts</h2>
        <p>
          Failing the first attempt was humbling, but it made the second attempt successful. If you’re aiming for blue-team work, BTL1 is worth it — challenging, but fair if you prepare with intention.
        </p>
      </div>
    </article>
  );
}


