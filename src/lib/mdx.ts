import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Image from "next/image";

const contentDir = path.join(process.cwd(), "content/blog");

export type BlogPost = {
  slug: string;
  title: string;
  year: string;
  readingTime?: string;
  imageSrc?: string;
  description?: string;
  keywords?: string[];
  content: React.ReactNode;
};

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<{
    title: string;
    year: string;
    readingTime?: string;
    imageSrc?: string;
    description?: string;
    keywords?: string[];
  }>({
    source,
    components: { Image },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: "github-dark",
              keepBackground: true,
            },
          ],
        ],
      },
    },
  });

  return {
    slug,
    content,
    title: frontmatter.title,
    year: frontmatter.year,
    readingTime: frontmatter.readingTime,
    imageSrc: frontmatter.imageSrc,
    description: frontmatter.description,
    keywords: frontmatter.keywords,
  };
}

export async function getAllPosts(): Promise<Omit<BlogPost, "content">[]> {
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = fs.readFileSync(path.join(contentDir, file), "utf8");
        
        // We only need frontmatter here, so we can use a lighter parse if performance matters,
        // but compileMDX is fine for build time.
        const { frontmatter } = await compileMDX<{
            title: string;
            year: string;
            readingTime?: string;
            imageSrc?: string;
            description?: string;
            keywords?: string[];
          }>({
          source,
          options: { parseFrontmatter: true },
        });

        return {
          slug,
          title: frontmatter.title,
          year: frontmatter.year,
          readingTime: frontmatter.readingTime,
          imageSrc: frontmatter.imageSrc,
          description: frontmatter.description,
          keywords: frontmatter.keywords,
        };
      })
  );

  // Sort by year descending (or add a date field if needed)
  return posts.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}
