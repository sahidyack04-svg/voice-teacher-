# WWIS School Website Revamp — Roadmap

**Client:** Wisdom Wealth International School (WWIS)
**Stack:** Astro (frontend) + FastAPI (backend) + Supabase (database)
**Hosting:** Render
**Generated:** 2026-04-13

## Overview

Build an agent-ready website for WWIS. All 8 agent-ready layers implemented in dependency order.

---

## Phase 1: Semantic Foundation

**Goal:** Server-rendered HTML using semantic elements, no JS-gated content, consistent heading hierarchy, descriptive alt text

**Depends on:** (none — foundation layer)

**Requirements:** SEM-01, SEM-02, SEM-03, SEM-04

**Success Criteria:**
1. All key pages use semantic elements: header, main, article, nav, footer
2. Full page content present in initial HTTP response (no JS required to render content)
3. Heading hierarchy consistent (h1→h6, no skipped levels) on every page
4. All meaningful images have descriptive alt text

**Tech context:** Astro (frontend) + FastAPI (backend) on Render + Supabase — Astro uses static generation by default, meaning all content is present in the initial HTTP response with no JS hydration required.

**Plans:** 3 plans

Plans:
- [ ] 01-semantic-foundation-01-PLAN.md — Create semantic layout components (Layout, Header, Footer, PageLayout)
- [ ] 01-semantic-foundation-02-PLAN.md — Create homepage and key pages (index, about, contact, programs) with Hero and ProgramCard components
- [ ] 01-semantic-foundation-03-PLAN.md — Create program detail pages (iplay, idiscover, ilead) with ProgramDetail component

---

## Phase 2: JSON-LD Structured Data

**Goal:** Organization schema, Service schema (one per service), FAQPage schema, embedded in head on all relevant pages

**Depends on:** Phase 1

**Requirements:** JSONLD-01, JSONLD-02, JSONLD-03

**Success Criteria:**
1. Organization schema present with: name, description, url, logo, contactPoint, sameAs
2. Service schema present for each offered service (iPlay, iDiscover, iLead, CIE, ILP)
3. FAQPage schema present for common questions (admissions, curriculum, fees)
4. All JSON-LD validates at validator.schema.org and passes Google Rich Results Test

**Business-specific note:** Use `EducationalOrganization` as the `@type` for the main Organization schema.

---

## Phase 3: llms.txt + robots.txt

**Goal:** /llms.txt at domain root summarizing business and key pages; robots.txt explicitly allowing AI crawlers

**Depends on:** Phase 1

**Requirements:** LLM-01, LLM-02

**Success Criteria:**
1. /llms.txt returns 200 with Content-Type: text/plain, contains business summary, key page links, contact info
2. robots.txt explicitly allows: GPTBot, ClaudeBot, PerplexityBot
3. robots.txt does not block any path required for service discovery

---

## Phase 4: OpenAPI Specification

**Goal:** /openapi.json served at domain root with typed endpoints for services, pricing, hours, and contact

**Depends on:** Phase 2

**Requirements:** API-01, API-02, API-03

**Success Criteria:**
1. /openapi.json serves valid OpenAPI 3.x spec
2. Endpoints present: GET /services, GET /services/{id}, GET /pricing, GET /hours, POST /contact
3. Each endpoint has typed request/response schemas with descriptions
4. info block includes contact.email and termsOfService URL
5. Spec renders without errors in editor.swagger.io

---

## Phase 5: Content Negotiation

**Goal:** Key endpoints return application/json on Accept header; AI user-agents get Markdown/JSON summaries

**Depends on:** Phase 4

**Requirements:** CN-01, CN-02

**Success Criteria:**
1. GET /services returns JSON when Accept: application/json is sent
2. ClaudeBot and GPTBot user-agents receive Markdown or JSON response (not full HTML)
3. JSON responses include same structured data as JSON-LD (not a subset)
4. Content-Type headers accurate for all response formats

---

## Phase 6: MCP Endpoints [EMERGING]

**Goal:** MCP server with tools: get-services, get-pricing, check-availability, submit-inquiry

**Depends on:** Phase 4

**Requirements:** MCP-01, MCP-02

**Success Criteria:**
1. MCP tools implemented: get-services, get-pricing, check-availability, submit-inquiry
2. Tool definitions follow current MCP spec (verified at modelcontextprotocol.io)
3. MCP server discoverable at /.well-known/mcp or via openapi.json extension

---

## Phase 7: agent-card.json [EMERGING]

**Goal:** /.well-known/agent-card.json served with capabilities array, contact endpoint, supported_protocols

**Depends on:** Phase 6

**Requirements:** A2A-01

**Success Criteria:**
1. /.well-known/agent-card.json returns 200 with Content-Type: application/json
2. Card includes: name, description, capabilities array, contact endpoint, supported_protocols
3. Capabilities array lists all actions agents can take on this site
4. Card is valid JSON

---

## Phase 8: Agent-Readiness Verification

**Depends on:** All prior phases

**Requirements:** VERIFY-01, VERIFY-02, VERIFY-03, VERIFY-04

**Success Criteria:**
1. All validation checks pass (JSON-LD, robots.txt, OpenAPI, MCP, agent-card.json)
2. AI discoverability verified (Claude, Perplexity responses)
3. Pass/Fail summary table completed

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SEM-01 | Phase 1 | Pending |
| SEM-02 | Phase 1 | Pending |
| SEM-03 | Phase 1 | Pending |
| SEM-04 | Phase 1 | Pending |
| JSONLD-01 | Phase 2 | Pending |
| JSONLD-02 | Phase 2 | Pending |
| JSONLD-03 | Phase 2 | Pending |
| LLM-01 | Phase 3 | Pending |
| LLM-02 | Phase 3 | Pending |
| API-01 | Phase 4 | Pending |
| API-02 | Phase 4 | Pending |
| API-03 | Phase 4 | Pending |
| CN-01 | Phase 5 | Pending |
| CN-02 | Phase 5 | Pending |
| MCP-01 | Phase 6 | Pending |
| MCP-02 | Phase 6 | Pending |
| A2A-01 | Phase 7 | Pending |
| VERIFY-01 | Phase 8 | Pending |
| VERIFY-02 | Phase 8 | Pending |
| VERIFY-03 | Phase 8 | Pending |
| VERIFY-04 | Phase 8 | Pending |

**Coverage:**
- Total requirements: 21
- Mapped to phases: 21
- Unmapped: 0 ✓

---

*Last updated: 2026-04-13 after project initialization*
