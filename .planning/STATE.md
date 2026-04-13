# Project State: WWIS School Website Revamp

**Phase:** Phase 1 (Semantic Foundation)
**Last Updated:** 2026-04-13

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-13)

**Core value:** Showcase WWIS's three proprietary programs (iPlay, iDiscover, iLead) effectively to attract parents to book school visits and inquire about enrollment.

**Current focus:** Phase 1 — Semantic Foundation

## Decisions

| Decision | Rationale | Status |
|----------|-----------|--------|
| Astro + FastAPI stack | Astro provides server-rendered static pages for SEO. FastAPI exposes OpenAPI/MCP for AI agents. | Locked |
| Render + Supabase hosting | Single dashboard for frontend (static) and backend (API). Managed Postgres. | Locked |
| Agent-ready architecture | AI-powered search discovery, automated systems, future-proofing. | Locked |

## Phase History

(None yet — no phases completed)

## Active Requirements

- [ ] SEM-01: All key pages use semantic HTML5 elements (header, main, article, nav, footer)
- [ ] SEM-02: Full page content present in initial HTTP response (no JS-gated content)
- [ ] SEM-03: Consistent heading hierarchy (h1→h6, no skipped levels)
- [ ] SEM-04: All meaningful images have descriptive alt text

---

*Last updated: 2026-04-13 after roadmap creation*
