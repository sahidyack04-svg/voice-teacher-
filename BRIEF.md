# Website Plan Brief: Wisdom Wealth International School (WWIS)

**Generated:** 2026-04-02
**Ready for:** `/gsd:new-project --auto @ROADMAP.md`

## Client Summary

- **Business:** Wisdom Wealth International School (WWIS)
- **Type:** International School (Education)
- **Services:**
  - iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
  - iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
  - iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
  - Cambridge International Examinations (CIE) curriculum
  - Individual Learning Plans for every student
- **Contact:** Phone: +91 81246 48888 / Email: rootadmin@wwistrichy.com
- **Existing Site:** https://wwistrichy.com/

## Technical Choices

- **Framework:** Astro (frontend) + FastAPI (backend)
- **Hosting:** Render (Astro as Static Site + FastAPI as Web Service) + Supabase (Postgres database)

## School Details

- **Curriculum / Disciplines:** Cambridge CIE curriculum with three proprietary programs: iPlay (Pre-KG to Grade 2), iDiscover (Grade 3–7), and iLead (Grade 8–12)
- **Target Audience:** Parents across all grade levels (Pre-KG to Grade 12)
- **Success Stories / Portfolio:** Yes — student success stories and parent testimonials are central to the pitch; feature prominently on the home page
- **Content Tone:** Inspiring and forward-looking — bold, aspirational, focused on future potential and life skills
- **Primary CTA:** Book a school visit — invite families to schedule an in-person tour or open day
- **Hours:** Monday–Saturday, 9 AM–5:30 PM
- **Address:** 11th Sector, 18th Cross, Morais City, near airport, Trichy 620007

## Build Phases

| Phase | Layer | Depends On |
|-------|-------|------------|
| 1 | Semantic Foundation | — |
| 2 | JSON-LD Structured Data | Phase 1 |
| 3 | llms.txt + robots.txt | Phase 1 |
| 4 | OpenAPI Specification | Phase 2 |
| 5 | Content Negotiation | Phase 4 |
| 6 | MCP Endpoints [EMERGING] | Phase 4 |
| 7 | agent-card.json [EMERGING] | Phase 6 |
| 8 | Agent-Readiness Verification | Phase 7 |

## Next Step

Run: `/gsd:new-project --auto @ROADMAP.md`

This will initialize the project and allow GSD's plan-phase to generate per-phase executable PLAN.md files for each agent-ready layer.
