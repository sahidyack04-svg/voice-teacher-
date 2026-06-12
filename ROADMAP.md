# WWIS Website Implementation Roadmap

**Updated:** 2026-06-11  
**Client:** Wisdom Wealth International School (WWIS), Trichy  
**Deployment:** Vercel  
**Stack:** Astro, static-first pages, lightweight client-side chatbot UI, public AI/SEO assets

## Goal

Launch a premium, modern, accessible, mobile-responsive WWIS website that improves parent trust, admissions conversion, SEO, and AI-agent discoverability while preserving the existing school identity and content structure from https://wwistrichy.com/.

## Phase 1: Repository Audit And Requirements Alignment

**Status:** Complete after audit.

Tasks:

1. Audit existing Astro files, backend files, public AI files, and docs.
2. Identify reusable data, schema, middleware, and public assets.
3. Update `BRIEF.md` with final approved requirements.
4. Replace outdated Render-first roadmap with Vercel-first implementation plan.

Success criteria:

- Current project shape is understood.
- Existing user changes are preserved.
- Requirements reflect approved answers.

## Phase 2: Content Model And Information Architecture

Tasks:

1. Centralize school data in `src/data/school.ts`.
2. Model programs, admissions steps, facilities, sports, clubs, parent resources, gallery categories, FAQs, chatbot topics, and contact details.
3. Define the final sitemap:
   - `/`
   - `/about`
   - `/services`
   - `/admissions`
   - `/facilities`
   - `/sports-clubs`
   - `/parent-resources`
   - `/gallery`
   - `/contact`
4. Create task and structure documentation.

Success criteria:

- Page content, chatbot content, JSON-LD, OpenAPI, and AI summaries use consistent school data.
- Navigation matches parent decision-making flow.

## Phase 3: Visual System And Base Layout

Tasks:

1. Build a reusable Astro base layout with semantic landmarks.
2. Add responsive navigation, skip link, footer, CTA bands, and chatbot mount.
3. Define WWIS-inspired design tokens for colors, typography, spacing, cards, buttons, and forms.
4. Keep pages accessible without JavaScript; JavaScript enhances chatbot and mobile navigation only.

Success criteria:

- Pages have consistent branding and polished mobile behavior.
- No content depends on JavaScript for basic access.
- Core Web Vitals are protected by static-first rendering.

## Phase 4: Website Pages

Tasks:

1. Build Home with first-viewport WWIS identity, program cards, Cambridge learning, admissions CTA, facilities, sports, resources, gallery preview, and testimonials.
2. Build About with school promise, methodology, learning stages, safety, and parent trust sections.
3. Build Programs with iPlay, iDiscover, iLead, Cambridge CIE, and Individual Learning Plans.
4. Build Admissions with approved process, grade availability note, fee request form, document checklist, and FAQs.
5. Build Facilities with approved campus features and safety highlights.
6. Build Sports and Clubs with structured coaching, competitions, and co-curricular list.
7. Build Parent Resources with calendar, circulars, handbook, uniform, transport, forms, parent login/app, and exam schedules.
8. Build Gallery with approved content categories and official-media placeholders.
9. Build Contact with verified official contact information, inquiry form, visit booking prompts, and map guidance.

Success criteria:

- All key content areas requested by the client are represented.
- CTAs are visible and repeated without overwhelming parents.
- Forms clearly route fee/admissions/contact interest to admissions.

## Phase 5: Chatbot UI

Tasks:

1. Add a real chatbot UI component on all pages.
2. Support quick prompts for admissions, programs, fees, transport, visits, and callback requests.
3. Provide deterministic answers from approved WWIS content.
4. Include escalation guidance to `rootadmin@wwistrichy.com`.
5. Prepare the UI for future WhatsApp integration.

Success criteria:

- Chatbot works without backend configuration.
- Chatbot does not invent fee details or age criteria.
- Complex questions are escalated to admissions staff.

## Phase 6: SEO, Accessibility, And AI Agent Readiness

Tasks:

1. Add per-page metadata and canonical URLs.
2. Add JSON-LD for organization, website, services, FAQs, breadcrumbs, and contact.
3. Update `robots.txt`, `llms.txt`, `openapi.json`, `/.well-known/agent.json`, `/.well-known/agent-card.json`, and `/.well-known/mcp`.
4. Keep content negotiation middleware for AI user agents and JSON requests.
5. Add sitemap support through Astro output where possible.

Success criteria:

- AI crawlers are explicitly allowed.
- Public AI files summarize WWIS accurately.
- Structured data uses approved contact details and program information.

## Phase 7: Vercel Preparation

Tasks:

1. Update Astro configuration for Vercel-compatible static output.
2. Add `vercel.json`.
3. Ensure `npm run build` succeeds locally.
4. Document deployment steps and environment notes.

Success criteria:

- Project builds into `dist`.
- Vercel can deploy from the repository using `npm run build`.
- Deployment instructions are clear for handoff.

## Phase 8: Verification

Tasks:

1. Run `npm run build`.
2. Check generated routes.
3. Validate public JSON files parse correctly.
4. Check no public fee details are exposed.
5. Confirm working hours are `9 AM-5:30 PM`.
6. Confirm chatbot renders and uses approved answer topics.

Success criteria:

- Build succeeds.
- Required pages and public files are generated.
- Remaining manual checks are documented for post-deploy validation.
