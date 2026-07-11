# My Choice Interior — Website

A modern, elegant, animated marketing website for **My Choice Interior**, a home interior design
business. Built with **Angular 18** (standalone components), deployed as a **static site on Vercel**,
with a custom enquiry form that posts to a free **Google Apps Script + Google Sheet** backend.

## Features

- Cinematic, animated, image-rich UI with a bespoke SCSS design system
- Pages: Home, Services (core + allied), Packages (Standard/Deluxe/Luxury), Materials & Brand
  Partners, Portfolio (filter + lightbox), Process & Support, Our Offices, About, Contact
- Three transparent packages with per-tier material grades and brand names
- Custom reactive enquiry form (validation, honeypot spam protection, loading/success/error states)
- SEO: per-page meta, Open Graph/Twitter cards, LocalBusiness JSON-LD, sitemap.xml, robots.txt
- Fully responsive, `prefers-reduced-motion` aware, centralized/swappable content and images

## Run locally

```bash
npm install
npm start        # http://localhost:4200
```

## Build

```bash
npm run build    # outputs to dist/my-choice-interior/browser
```

## Configure the enquiry form (Google Apps Script + Sheet)

The form runs in a safe **demo mode** (validates + shows success, no network call) until you set an
endpoint.

1. Create a Google Sheet. In row 1 add headers (exact order):
   `Submitted At | Name | Phone | Email | Message | Status | Notes | Service | Package`
2. In the Sheet: **Extensions → Apps Script**. Paste the contents of
   [`../specs/001-interior-website/contracts/apps-script.gs`](../specs/001-interior-website/contracts/apps-script.gs).
3. **Deploy → New deployment → Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the Web App URL into both:
   - `src/environments/environment.ts` → `enquiryEndpoint`
   - `src/environments/environment.prod.ts` → `enquiryEndpoint`
5. Submit a test enquiry — a new row should appear in the Sheet.

**Admin workflow**: review enquiries in the Google Sheet; filter/sort by column; update `Status`
(New → Contacted → In Progress → Won / Lost) and add `Notes` inline.

## Deploy to Vercel

- Build command: `npm run build`
- Output directory: `dist/my-choice-interior/browser`
- `vercel.json` provides SPA rewrites so client routes resolve to `index.html`.

Import the repo in Vercel (root = `my-choice-interior/`) or run `vercel` from this folder.

## Replace demo content later

- **Text/content**: edit `src/app/data/*.ts` (`site`, `services`, `packages`, `materials`,
  `projects`, `testimonials`, `offices`).
- **Images**: replace files under `public/images/**` (keep the filename, or update the path in the
  matching data file). All demo images are real photos sourced for the demo — swap with your own
  project photos before going live.
