# 🛡️ Muntazir Mehdi — Cyber Security Portfolio

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MDX](https://img.shields.io/badge/MDX-1B1F24?style=for-the-badge&logo=markdown&logoColor=white)

A modern, high-performance portfolio website designed for Cyber Security professionals. Built with **Next.js 15**, **Tailwind CSS**, and **TypeScript**, featuring a sleek dark mode interface, MDX-powered blog, and a timeline of professional experience.

[**View Live Site**](https://muntazirmehdi.com)

---

## 🚀 Features

- **🎨 Modern UI/UX**: Clean, dark-themed design with a focus on readability and accessibility.
- **📝 MDX Blog**: Write articles in Markdown/MDX with syntax highlighting via `rehype-pretty-code`.
- **💼 Experience Timeline**: A vertical timeline to showcase professional history.
- **🏆 Certification Showcase**: Dedicated section for certifications (CPTS, BTL1, etc.) with issuer logos.
- **📱 Fully Responsive**: Optimized for all devices, from large desktops to mobile phones.
- **⚡ High Performance**: Statically generated pages for lightning-fast load times.
- **🔍 SEO Optimized**: Built-in metadata, sitemap, and semantic HTML structure.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: [MDX](https://mdxjs.com/) with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Syntax Highlighting**: [Shiki](https://shiki.style/) (via rehype-pretty-code)

## 📂 Project Structure

```bash
portfolio/
├── content/              # MDX blog posts
│   └── blog/
├── public/               # Static assets (images, logos)
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # Reusable UI components
│   ├── data/             # Static data (experience, skills)
│   └── lib/              # Utilities (MDX processing, etc.)
├── tailwind.config.ts    # Tailwind configuration
└── package.json          # Dependencies and scripts
```

## ⚡ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/muntazirx/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Managing Content

### Adding a Blog Post
Create a new `.mdx` file in `content/blog/`. The file must include the following frontmatter:

```yaml
---
title: "Your Post Title"
year: "2025"
readingTime: "5 min read"
description: "A short summary of the post."
imageSrc: "/images/cover.jpg" # Optional
---

Your content goes here...
```

### Updating Experience/Skills
Edit `src/data/site.ts` to update your bio, experience timeline, and skills list without touching the UI code.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ by <a href="https://github.com/muntazirx">Muntazir Mehdi</a>
</div>
