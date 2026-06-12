# Client Brief: Wisdom Wealth International School

**Prepared:** 2026-04-02
**Stack:** Astro (frontend) + FastAPI (backend) on Render + Supabase (database)

## Business
- **Name:** Wisdom Wealth International School (WWIS)
- **Type:** International School (Education)
- **Existing Site:** https://wwistrichy.com/
- **Services:**
  - iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
  - iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
  - iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
  - Cambridge International Examinations (CIE) curriculum
  - Individual Learning Plans for every student
- **Contact:**
  - Phone: +91 81246 48888
  - Email: rootadmin@wwistrichy.com
  - Hours: Monday–Saturday, 9 AM–5:30 PM
  - Address: 11th Sector, 18th Cross, Morais City, near airport, Trichy 620007

## Audience
Parents across all grade levels (Pre-KG through Grade 12) are the primary audience. The website must speak to families considering enrollment at any stage — from early childhood (iPlay) through career-focused senior years (iLead).

## School Details
- **Curriculum / Disciplines:** Cambridge CIE curriculum with three proprietary programs: iPlay, iDiscover, and iLead
- **Target Audience:** Parents across all grade levels (Pre-KG to Grade 12)
- **Success Stories / Portfolio:** Yes — student success stories and parent testimonials are central to the pitch; feature prominently
- **Content Tone:** Inspiring and forward-looking — bold, aspirational, focused on future potential and life skills
- **Primary CTA:** Book a school visit — invite families to schedule an in-person tour or open day

## Technical Requirements
- **Goal:** Website usable by both human visitors (parents) and AI agents (programmatic interaction)
- **Frontend:** Astro — server-rendered static pages for SEO and fast mobile performance
- **Backend:** FastAPI (Python) — exposes OpenAPI spec, REST endpoints, and MCP tools for AI agent interaction
- **Database:** Supabase (Postgres) — stores inquiries, admissions data, and content
- **Hosting:** Render — Astro as Static Site + FastAPI as Web Service (single dashboard)
- **AI Agent Requirements:** OpenAPI spec at /openapi.json, MCP endpoints, content negotiation (JSON responses for agent user-agents), llms.txt, JSON-LD structured data

## Notes
All fields collected. No optional fields were skipped.
