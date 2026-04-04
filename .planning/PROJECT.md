# WWIS School Website

## What This Is

A school website for Wisdom Wealth International School (WWIS) that showcases the school's three unique educational programs (iPlay, iDiscover, iLead) to prospective parents, while being fully AI agent-ready for search discovery, automation, and future-proofing. The site serves both human visitors (parents considering enrollment) and AI agents (systems that programmatically discover and interact with school information).

## Core Value

Showcase WWIS's three proprietary programs (iPlay, iDiscover, iLead) effectively to attract parents to book school visits and inquire about enrollment.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Parents can discover and understand the three programs (iPlay, iDiscover, iLead)
- [ ] Parents can book a school visit
- [ ] Parents can submit inquiries
- [ ] AI agents can programmatically discover school information via OpenAPI
- [ ] AI agents can interact via MCP endpoints
- [ ] Site is SEO-optimized with JSON-LD structured data
- [ ] Site provides llms.txt for AI discovery
- [ ] Site serves as a comprehensive information resource for both humans and AI

### Out of Scope

(None — build all features from brief)

## Context

WWIS currently has a WordPress website that serves basic informational purposes but is not designed for AI agent interaction. The school operates with three proprietary programs:
- iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
- iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
- iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch

The school follows Cambridge International Examinations (CIE) curriculum and creates Individual Learning Plans for every student. Key to the school's value proposition are student success stories and parent testimonials.

## Constraints

- **Timeline**: 1-2 months — launch before the next school term/admissions cycle
- **Tech Stack**: Astro (frontend) + FastAPI (backend) — this stack is specified and required
- **Hosting**: Render — Astro as Static Site + FastAPI as Web Service (single dashboard)
- **Database**: Supabase (Postgres) — stores inquiries, admissions data, and content
- **AI Requirements**: OpenAPI spec at /openapi.json, MCP endpoints, content negotiation (JSON responses for agent user-agents), llms.txt, JSON-LD structured data
- **Content Tone**: Inspiring and forward-looking — bold, aspirational, focused on future potential and life skills
- **Primary CTA**: Book a school visit — invite families to schedule an in-person tour or open day

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Astro + FastAPI stack | Astro provides server-rendered static pages for SEO and fast mobile performance. FastAPI exposes OpenAPI spec, REST endpoints, and MCP tools for AI agent interaction. Both work well together on Render. | — Pending |
| Agent-ready architecture (OpenAPI, MCP, JSON-LD, llms.txt) | Three strategic reasons: (1) AI-powered search discovery (Perplexity, ChatGPT), (2) Automated systems can interact with admissions/inquiries, (3) Future-proofing for how people will find schools in 3-5 years | — Pending |
| Render + Supabase hosting | Single dashboard for both frontend (Astro static) and backend (FastAPI). Supabase provides managed Postgres database with easy API access. | — Pending |

---
*Last updated: 2026-04-04 after project initialization*