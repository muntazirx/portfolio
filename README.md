This is a Next.js + Tailwind portfolio modeled after [`brittanychiang.com`](https://brittanychiang.com/).

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

Fonts are loaded with `next/font` using Inter for body text.

## Stack

- Next.js App Router (TypeScript)
- Tailwind CSS
- Google Fonts (Inter)

## Structure

- `src/app/layout.tsx`: Global layout, metadata, header, and skip link
- `src/app/page.tsx`: Home sections (Hero, About, Experience, Projects, Writing)
- `src/components/*`: Reusable UI components
- `src/data/site.ts`: Site content (socials, about, experience, projects, writing)

## Customization

Edit content in `src/data/site.ts`. Adjust styles in `src/app/globals.css` and component files.

## Deployment

You can deploy this project on Vercel or any Node-compatible host.
