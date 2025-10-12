import type { Metadata } from "next";
import Image from "next/image";
import BlogToc from "@/components/BlogToc";
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
      images: post?.imageSrc ? [{ url: post.imageSrc, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      title,
      description,
      images: post?.imageSrc ? [post.imageSrc] : undefined,
    },
  };
}

export default function BlogPostPage({ params }: Params) {
  const post = writings.find(w => w.slug === params.slug);
  if (!post) return null;

  return (
    <div className="px-6 sm:px-8 py-12 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_76ch] lg:justify-center gap-10">
      <aside className="hidden lg:block">
        <BlogToc />
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
          Before diving in, I want to give a huge shoutout to my brother Shanuka (AKA Shan) for his incredible review of the BTL1 materials and exam. His insights were instrumental in shaping my preparation and expectations. The right perspective can save you hours of guesswork and wasted energy.
        </p>
        <p>
          I also want to thank my good friend Justin K. T., who’s always been that grounded voice throughout my cybersecurity journey. His advice came at a time when I needed clarity the most, and it ultimately guided me toward pursuing BTL1.
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
        <p>The BTL1 exam is designed to mirror real SOC work rather than a quiz. In practice, that means:</p>
        <ul>
          <li>24-hour, hands-on incident response simulation (with an NDA).</li>
          <li>Spin up a lab environment and investigate a realistic incident scenario.</li>
          <li>Solve ~20 practical questions using defensive tools learned in the course.</li>
          <li>Open-book permitted, AI tools disallowed.</li>
          <li>Success depends on investigation, connecting clues, and clear thinking — not memorization.</li>
        </ul>

        <h2>My First Attempt — What Went Wrong</h2>
        <ul>
          <li>Completed the course and labs, but they didn’t go deep enough for some tasks.</li>
          <li>Underestimated Splunk and Autopsy — both required more practice than I had.</li>
          <li>Rushed and didn’t pace myself; ended with 65% (just under the 70% pass mark).</li>
        </ul>

        <h2>My Second Attempt — What Changed</h2>
        <ul>
          <li>Used the full 24 hours instead of rushing; added a short rest to reset focus.</li>
          <li>Worked in two sessions (evening + early morning) which improved clarity.</li>
          <li>Reviewed every answer before submitting — this alone boosted the score.</li>
        </ul>
        <p>Result: 95% on the second attempt — proof that persistence and better preparation pay off.</p>

        <h2>How I Prepared Differently for My Second Attempt</h2>
        <p>
          After failing my first attempt, I quickly identified my weak points — Splunk and Autopsy. The BTL1 course covered them, but not in enough depth for the exam. So this time, I decided to practice more hands-on using TryHackMe and BTLO Labs.
        </p>
        <p>Here are the rooms and labs I focused on:</p>
        <ul>
          <li>Incident Handling with Splunk (TryHackMe)</li>
          <li>Investigation with Splunk (TryHackMe)</li>
          <li>Disk Analysis & Autopsy (TryHackMe)</li>
          <li>Wireshark: Traffic Analysis (TryHackMe)</li>
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
        <PrevNext slug={params.slug} />
      </nav>
    </article>
    </div>
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


