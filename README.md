# muntazirmehdi.com

Personal portfolio. Muntazir Mehdi, offensive security.

Built with Next.js 15, TypeScript, and Tailwind v4. Dark, minimal, terminal-adjacent.

## Structure

```
├── content/blog/                 MDX blog posts
├── public/
│   ├── _headers                  Security headers (Cloudflare Pages / Netlify)
│   ├── Muntazir-Mehdi-CV.pdf     Downloadable CV (linked from /cv page)
│   └── logos/                    Certification logos
├── src/
│   ├── app/
│   │   ├── page.tsx              Homepage
│   │   ├── cv/page.tsx           Rendered CV view
│   │   └── blog/                 Blog index + post pages
│   ├── components/               UI components
│   ├── data/site.ts              Single source of truth: bio, experience,
│   │                             certifications, labs, roadmap, skills, education
│   └── lib/mdx.ts                MDX compilation
└── README.md
```

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All factual content lives in `src/data/site.ts`. Editing it updates both the
homepage and the `/cv` view together so they never drift.

- **Bio, experience, focus areas, labs, roadmap, certifications, skills, education** — `src/data/site.ts`
- **Blog posts** — `content/blog/*.mdx` with frontmatter (`title`, `year`, `readingTime`, `description`, `imageSrc`, `keywords`)
- **Downloadable PDF CV** — drop the file at `public/Muntazir-Mehdi-CV.pdf`. Linked from the `download.pdf` button on `/cv`

## Deploy

Static export via `next build`. Output is served from `out/`.
