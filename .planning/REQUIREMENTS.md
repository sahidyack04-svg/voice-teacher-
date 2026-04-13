# Requirements: WWIS School Website Revamp

**Defined:** 2026-04-13
**Core Value:** Showcase WWIS's three proprietary programs (iPlay, iDiscover, iLead) effectively to attract parents to book school visits and inquire about enrollment.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Semantic Foundation

- [ ] **SEM-01**: All key pages use semantic HTML5 elements (header, main, article, nav, footer)
- [ ] **SEM-02**: Full page content present in initial HTTP response (no JS-gated content)
- [ ] **SEM-03**: Heading hierarchy consistent (h1→h6, no skipped levels) on every page
- [ ] **SEM-04**: All meaningful images have descriptive alt text

### JSON-LD Structured Data

- [ ] **JSONLD-01**: Organization schema present (EducationalOrganization with name, logo, contact, address, openingHours)
- [ ] **JSONLD-02**: Service schema present for each program (iPlay, iDiscover, iLead, CIE, ILP)
- [ ] **JSONLD-03**: FAQPage schema present for common questions (admissions, curriculum, fees)

### AI Discovery Files

- [ ] **LLM-01**: /llms.txt returns 200 with business summary, key pages, contact info
- [ ] **LLM-02**: robots.txt explicitly allows GPTBot, ClaudeBot, PerplexityBot; no blocking of /api/ or /.well-known/

### OpenAPI Specification

- [ ] **API-01**: /openapi.json serves valid OpenAPI 3.x spec
- [ ] **API-02**: Endpoints present: GET /services, GET /services/{id}, GET /pricing, GET /hours, POST /contact
- [ ] **API-03**: Each endpoint has typed request/response schemas with descriptions

### Content Negotiation

- [ ] **CN-01**: GET /services returns JSON when Accept: application/json is sent
- [ ] **CN-02**: AI user-agents (ClaudeBot, GPTBot) receive Markdown/JSON summary instead of full HTML

### MCP Endpoints

- [ ] **MCP-01**: MCP tools implemented: get-services, get-pricing, check-availability, submit-inquiry
- [ ] **MCP-02**: MCP server discoverable at /.well-known/mcp

### Agent Card

- [ ] **A2A-01**: /.well-known/agent-card.json returns 200 with capabilities array, contact endpoint, supported_protocols

### Verification

- [ ] **VERIFY-01**: JSON-LD passes Google Rich Results Test and schema.org validator
- [ ] **VERIFY-02**: AI discoverability verified (Claude, Perplexity return accurate WWIS info)
- [ ] **VERIFY-03**: robots.txt audit passes (all AI bots allowed)
- [ ] **VERIFY-04**: OpenAPI spec renders without errors in Swagger UI

## Out of Scope

| Feature | Reason |
|---------|--------|
| Mobile app | Web-first, mobile responsive sufficient |
| Real-time chat | High complexity, not core to school website |
| Student portal login | Defer to future phase |
| Payment integration | Defer to future phase |

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
- v1 requirements: 21 total
- Mapped to phases: 21
- Unmapped: 0 ✓

---

*Requirements defined: 2026-04-13*
*Last updated: 2026-04-13 after roadmap creation*
