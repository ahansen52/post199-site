# Project Overview

This SvelteKit site is fully configured for static site generation (SSG) via:

```ts
// src/routes/+layout.server.ts
export const prerender = true;
```

- **Blazing-fast performance:** every page is pre-built into HTML/CSS/JS at build time and served from the CDN.
- **Zero server-render costs:** no runtime functions are invoked on user requests.
- **SEO-friendly & cacheable:** fully hydrated HTML for search engines and perfect CDN caching.

## Content Updates via Sanity Webhook

Content (footer links, events, historical moments) is managed in Sanity CMS. We set up a webhook so that on **Create/Update/Delete**:

1. Sanity POSTs to Vercel's Deploy Hook URL.
2. Vercel automatically triggers a new build.
3. The latest CMS changes are baked into the static site.

**Result:** Editors publish in Sanity → your site rebuilds automatically → users always see up-to-date, ultra-fast pages.
# post199-site
