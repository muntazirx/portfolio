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

## Analytics

Privacy-friendly page views via [GoatCounter](https://www.goatcounter.com).
No cookies, no consent banner needed, free for personal sites.

To enable:

1. Sign up at https://www.goatcounter.com and pick a site code (e.g. `muntazir`).
2. In your GoatCounter dashboard, open `Settings → Site` and check **Allow access to public stats**. This lets per-post view counts render on each blog page.
3. Open `src/data/site.ts` and set:

   ```ts
   export const analytics = {
     goatcounterCode: "muntazir", // your code here
   };
   ```

4. Rebuild and deploy. Stats live at `https://<code>.goatcounter.com`.

A subtle `views` chip appears under each blog post's title once views start coming in. Leave `goatcounterCode` blank to disable analytics entirely.

## Deploy

Static export via `next build`. Output is served from `out/`.
