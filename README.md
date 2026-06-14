# Muhammad Awwab Aamir — Portfolio

A production-ready personal portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide**. Dark-mode-first, mobile-first, SEO-optimized, and tuned for a 95+ Lighthouse score.

**Live:** https://awwab-aamir.vercel.app _(update after deploying)_

---

## Features

- **Premium dark UI** — SaaS-grade aesthetic with an emerald/cyan signature accent, aurora background, and grid texture.
- **Sections** — Hero, About, Skills, Featured Projects (with category filtering), Tech Stack, Résumé download, Contact form, Footer.
- **Motion** — Scroll-reveal animations, animated active-nav pill, project filter transitions — all respect `prefers-reduced-motion`.
- **Active navbar highlighting** via `IntersectionObserver`.
- **SEO** — Open Graph + Twitter cards (dynamically generated images), JSON-LD structured data (`Person`, `WebSite`, `ItemList`), `sitemap.xml`, `robots.txt`, and a web manifest.
- **Accessibility** — Skip-to-content link, semantic landmarks, ARIA states, visible focus rings, keyboard-navigable.
- **Performance** — Static prerendering, font optimization (`next/font`), lazy third-party images, security headers.

---

## Tech Stack

| Layer       | Choice                                  |
| ----------- | --------------------------------------- |
| Framework   | Next.js 16 (App Router, Turbopack)      |
| Language    | TypeScript (strict)                     |
| Styling     | Tailwind CSS 3                          |
| Animation   | Framer Motion                           |
| Icons       | Lucide React                            |
| Deployment  | Vercel                                  |

---

## Project Structure

```
portfolioWEB/
├── public/
│   └── resume.pdf                 # ← Replace with your real résumé
├── src/
│   ├── app/
│   │   ├── globals.css            # Design tokens + base styles
│   │   ├── layout.tsx             # Root layout + metadata
│   │   ├── page.tsx               # Page composition + JSON-LD
│   │   ├── icon.svg               # Favicon (file convention)
│   │   ├── opengraph-image.tsx    # Dynamic OG image
│   │   ├── twitter-image.tsx      # Dynamic Twitter image
│   │   ├── manifest.ts            # PWA manifest
│   │   ├── robots.ts              # robots.txt
│   │   └── sitemap.ts             # sitemap.xml
│   ├── components/
│   │   ├── Navbar.tsx  Hero.tsx  About.tsx  Skills.tsx
│   │   ├── Projects.tsx  TechStack.tsx  Resume.tsx
│   │   ├── Contact.tsx  Footer.tsx
│   │   ├── Reveal.tsx             # Scroll-reveal primitive
│   │   └── SectionHeading.tsx
│   ├── hooks/
│   │   └── useActiveSection.ts
│   └── lib/
│       ├── data.ts                # Single source of truth (content)
│       ├── og.tsx                 # Shared social-card renderer
│       └── utils.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

All editable content (profile, projects, skills, links) lives in **`src/lib/data.ts`**.

---

## Local Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

Requires Node.js ≥ 18.18 (Node 20+ recommended).

---

## Before You Deploy — Customize

1. **Domain** — set `SITE.url` in `src/lib/data.ts` to your final URL (used by metadata, sitemap, robots, and structured data).
2. **Résumé** — replace `public/resume.pdf` with your real résumé (same filename).
3. **Content** — review `src/lib/data.ts` for projects, skills, and contact details.
4. _(Optional)_ **Contact form** — the form currently composes an email via the visitor's mail client (zero backend). To use a hosted endpoint instead, sign up at [Formspree](https://formspree.io), then in `src/components/Contact.tsx` replace `handleSubmit` with a `fetch('https://formspree.io/f/<id>', { method: 'POST', body })`.

---

## Deployment — Step by Step (no prior experience needed)

### 1. Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
```

### 2. Push to GitHub

1. Go to https://github.com/new and create a repository named `portfolio` (keep it empty — no README/.gitignore).
2. Connect and push:

```bash
git branch -M main
git remote add origin https://github.com/awwab-03/portfolio.git
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to https://vercel.com and sign in **with GitHub**.
2. Click **Add New… → Project**, then **Import** your `portfolio` repo.
3. Vercel auto-detects Next.js — leave all build settings at their defaults.
4. Click **Deploy**. In ~1 minute you'll get a live URL like `https://portfolio-xxxx.vercel.app`.
5. Copy that URL into `SITE.url` in `src/lib/data.ts`, then commit & push — Vercel redeploys automatically on every push to `main`.

### 4. Custom Domain (optional)

1. In your Vercel project: **Settings → Domains → Add**.
2. Enter your domain (e.g. `awwabaamir.com`).
3. Vercel shows DNS records — add them at your registrar:
   - **Apex domain** (`awwabaamir.com`): an `A` record → `76.76.21.21`.
   - **www subdomain**: a `CNAME` record → `cname.vercel-dns.com`.
4. Wait for DNS to propagate (minutes to a few hours). Vercel issues HTTPS automatically.
5. Update `SITE.url` to the custom domain and push.

### 5. Analytics (optional, free)

1. In your Vercel project: **Analytics** tab → **Enable Web Analytics**.
2. Install the package and add the component:

```bash
npm install @vercel/analytics
```

In `src/app/layout.tsx`, import and render it inside `<body>`:

```tsx
import { Analytics } from '@vercel/analytics/next';
// …
<body className="font-sans antialiased">
  {/* …existing content… */}
  <Analytics />
</body>
```

Commit & push — analytics start collecting on the next deploy.

---

## Post-Deploy SEO Checklist

- [ ] `SITE.url` matches the live domain.
- [ ] Submit `https://<your-domain>/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).
- [ ] Validate share cards with the [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator).
- [ ] Validate structured data with the [Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Run Lighthouse (Chrome DevTools → Lighthouse) and confirm 95+ across the board.

---

## License

MIT © Muhammad Awwab Aamir
