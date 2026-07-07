# WWIS Website Deployment Guide

**Live URL:** https://worldnews2025.vercel.app  
**Framework:** Astro  
**Deployment target:** Vercel  
**Build command:** `npm run build`  
**Output directory:** `dist`

## Local Verification

Run these commands from `C:\Voiceteacher`:

```bash
npm install
npm run build
npm run preview
```

Open the preview URL and verify:

- Home loads without errors.
- Navigation links work: Home, About Us, Our Programs, Blog, Our Team, Careers, Find Us.
- Ask WWIS AI opens, shows the welcome message, suggested questions, and answers admissions, CIE, programs, ILP, facilities, careers, events, gallery, contact, and policy questions.
- About Us includes Teaching Methodology, Our Syllabus - Cambridge International Education (CIE), Daily Activities of Your Child, Individual Learning Plan (ILP), and Student Achievements.
- Our Team includes the centered `[TEAM PHOTO]` placeholder and requested educator content card.
- Find Us does not show a public admission form.
- Find Us shows the `Apply for Admission` button and `(Form Link will be added later)` placeholder.
- All image areas use labelled placeholders only.
- Mobile, tablet, laptop, and desktop layouts do not overflow.

## Vercel Deployment

Deploy with Vercel CLI:

```bash
vercel --prod
```

If the project is not linked yet, run:

```bash
vercel
```

Then follow the prompts and deploy production with `vercel --prod`.

## Vercel Settings

The repository includes `vercel.json`:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- `framework`: `astro`
- `cleanUrls`: `true`

No environment variables are required for the static website.

## Public SEO And AI Files

Verify after deployment:

- `https://worldnews2025.vercel.app/robots.txt`
- `https://worldnews2025.vercel.app/llms.txt`
- `https://worldnews2025.vercel.app/openapi.json`
- `https://worldnews2025.vercel.app/.well-known/agent.json`
- `https://worldnews2025.vercel.app/.well-known/agent-card.json`
- `https://worldnews2025.vercel.app/.well-known/mcp`

## Private Admission Form Link

The public admission form has been removed. Add the official secure private form URL later by replacing the `href="#"` and `data-private-form-url=""` values on the Apply for Admission button in `src/pages/find-us.astro`.
