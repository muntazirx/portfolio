# Resume Setup Instructions

To add your resume to the website:

1. **Place your resume PDF** in the `/public` folder
2. **Name it `resume.pdf`** (or update the `resumeUrl` in `src/data/site.ts` if you prefer a different name)

The resume will be accessible at:
- Desktop: Download button in the sidebar (below navigation)
- Mobile: Link in the mobile navigation menu

The resume link will open in a new tab for easy downloading.

## Current Configuration

The resume URL is configured in `src/data/site.ts`:
```typescript
export const resumeUrl = "/resume.pdf";
```

If your resume file has a different name, update this value accordingly.
