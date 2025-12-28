import { getAllPosts } from "@/lib/mdx";
import { siteMeta } from "@/data/site";

export async function GET() {
  const posts = await getAllPosts();
  const siteUrl = "https://muntazirmehdi.com";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteMeta.name} - Blog</title>
    <link>${siteUrl}</link>
    <description>${siteMeta.tagline}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map((post) => {
        return `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${siteUrl}/blog/${post.slug}</link>
        <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
        <pubDate>${new Date(`${post.year}-01-01T00:00:00Z`).toUTCString()}</pubDate>
        <description><![CDATA[${post.description || post.title}]]></description>
      </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
