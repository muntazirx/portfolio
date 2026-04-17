# muntazirmehdi.com

Personal portfolio — Muntazir Mehdi, offensive security.

Built with Next.js 15, TypeScript, and Tailwind v4. Dark, minimal, terminal-adjacent.

## Structure

```
├── content/blog/                 MDX blog posts
├── public/
│   ├── cv.html                   Print-ready one-page CV (Cmd/Ctrl+P → PDF)
│   ├── Muntazir-Mehdi-CV.pdf     Downloadable CV served from the sidebar
│   └── logos/                    Certification logos
├── src/
│   ├── app/                      Next.js app router pages
│   ├── components/               UI components
│   ├── data/site.ts              Site data — bio, experience, labs, social links
│   └── lib/mdx.ts                MDX compilation
└── cv.md                         CV source (editable master copy)
```

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

- **Bio / experience / focus areas / labs** — `src/data/site.ts`
- **Certifications** — `src/app/page.tsx` (cards with hrefs)
- **Blog posts** — `content/blog/*.mdx` with frontmatter (`title`, `year`, `readingTime`, `description`, `imageSrc`, `keywords`)
- **CV** — edit `cv.md` (source) and mirror into `public/cv.html` / regenerate PDF as needed

## Deploy

Static export via `next build`. Output is served from `out/`.
