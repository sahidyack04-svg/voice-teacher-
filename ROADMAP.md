# Wisdom Wealth International School (WWIS) — Agent-Ready Website Build

**Client:** Wisdom Wealth International School (WWIS)
**Type:** International School (Education)
**Stack:** Astro (frontend) + FastAPI (backend)
**Hosting:** Render + Supabase (database)
**Generated:** 2026-04-02

## Overview

Build an agent-ready website for Wisdom Wealth International School (WWIS). All 8 agent-ready layers are implemented in dependency order: semantic HTML foundation first, then JSON-LD structured data, then llms.txt/robots.txt, then OpenAPI spec, then content negotiation, then MCP endpoints, then agent-card.json, then end-to-end verification.

## Phase Details

### Phase 1: Semantic Foundation

**Goal**: Server-rendered HTML using semantic elements, no JS-gated content, consistent heading hierarchy, descriptive alt text
**Depends on**: (none — foundation layer)
**Requirements**: SEM-01, SEM-02, SEM-03, SEM-04
**Success Criteria**:
  1. All key pages use semantic elements: header, main, article, nav, footer
  2. Full page content present in initial HTTP response (no JS required to render content)
  3. Heading hierarchy consistent (h1→h6, no skipped levels) on every page
  4. All meaningful images have descriptive alt text

**Tech context**: Astro (frontend) + FastAPI (backend) on Render + Supabase — Astro uses static generation by default, meaning all content is present in the initial HTTP response with no JS hydration required; FastAPI serves backend data at build time (or via API routes), so semantic HTML elements are baked into the static output and fully accessible to agents and crawlers without JavaScript execution.

**Tasks**:

1. Create `src/layouts/Base.astro` — root layout wrapping all pages; include `<header>`, `<nav>`, `<main>`, and `<footer>` semantic elements. Nav must link to: Home, Programs (iPlay / iDiscover / iLead), Admissions, About, Contact.

2. Create `src/pages/index.astro` — home page. Structure with `<main>` containing: hero section (h1: school name and tagline), program overview section (h2: "Our Programs"), testimonials section (h2: "Success Stories"), CTA section (h2: "Book a School Visit"). All images must have descriptive alt text (e.g., alt="Students in iPlay brain development session").

3. Create `src/pages/services.astro` (programs page) — list all five programs/services each wrapped in `<article>`:
   - iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
   - iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
   - iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
   - Cambridge International Examinations (CIE) curriculum
   - Individual Learning Plans for every student

4. Create `src/pages/contact.astro` — contact page with address (11th Sector, 18th Cross, Morais City, near airport, Trichy 620007), phone (+91 81246 48888), email (rootadmin@wwistrichy.com), and hours (Monday–Saturday, 9 AM–5:30 PM) in semantic `<address>` element.

5. Validation: Run `curl -s https://wwistrichy.com | grep -c '<main'` — confirms `<main>` present in initial response without JS. Run Lighthouse accessibility audit (`npx lighthouse https://wwistrichy.com --only-categories=accessibility`) — confirm score ≥ 90.

---

### Phase 2: JSON-LD Structured Data

**Goal**: Organization schema, Service schema (one per service), FAQPage schema, embedded in head on all relevant pages
**Depends on**: Phase 1
**Requirements**: JSONLD-01, JSONLD-02, JSONLD-03
**Success Criteria**:
  1. Organization schema present with: name (Wisdom Wealth International School), description, url, logo, contactPoint (Phone: +91 81246 48888 / Email: rootadmin@wwistrichy.com), sameAs
  2. Service schema present for each offered service:
     - iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
     - iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
     - iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
     - Cambridge International Examinations (CIE) curriculum
     - Individual Learning Plans for every student
  3. FAQPage schema present for common questions (admissions process, curriculum overview, fee structure)
  4. All JSON-LD validates at validator.schema.org and passes Google Rich Results Test

**Business-specific note**: Use `EducationalOrganization` as the `@type` for the main Organization schema entry; add `knowsAbout` with the Cambridge CIE curriculum and three proprietary programs (iPlay, iDiscover, iLead), and include `openingHours` (Monday–Saturday 09:00–17:30) and `address` (11th Sector, 18th Cross, Morais City, near airport, Trichy 620007) in the Organization schema.

**Tasks**:

1. Add `<script type="application/ld+json">` tag in `src/layouts/Base.astro` inside the `<head>` slot. Implement `EducationalOrganization` schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "EducationalOrganization",
     "name": "Wisdom Wealth International School",
     "alternateName": "WWIS",
     "url": "https://wwistrichy.com/",
     "logo": "https://wwistrichy.com/logo.png",
     "contactPoint": {
       "@type": "ContactPoint",
       "telephone": "+91-81246-48888",
       "email": "rootadmin@wwistrichy.com",
       "contactType": "admissions"
     },
     "openingHours": "Mo-Sa 09:00-17:30",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "11th Sector, 18th Cross, Morais City",
       "addressLocality": "Tiruchirappalli",
       "postalCode": "620007",
       "addressCountry": "IN"
     },
     "knowsAbout": [
       "Cambridge International Examinations",
       "iPlay brain development program",
       "iDiscover passion discovery program",
       "iLead career pathway program"
     ]
   }
   ```

2. Add one `Service` schema block per program on `src/pages/services.astro`:
   - `Service` for iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
   - `Service` for iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
   - `Service` for iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
   - `Service` for Cambridge International Examinations (CIE) curriculum
   - `Service` for Individual Learning Plans for every student
   Each Service schema must include: `name`, `description`, `provider` (reference to the EducationalOrganization), `areaServed` (Tiruchirappalli, Tamil Nadu, India).

3. Add `FAQPage` schema on `src/pages/index.astro` or a dedicated `src/pages/faq.astro`. Include at minimum: What grades does WWIS accept?, What curriculum does WWIS follow?, How do I schedule a school visit?, What is the admissions process?

4. Add `HowTo` schema if a "How Admissions Works" or "How We Teach" page is created — name steps explicitly (e.g., Step 1: Book a school visit, Step 2: Meet the admissions team, Step 3: Assessment, Step 4: Enrolment).

5. Validation: Run `validator.schema.org` — paste each JSON-LD block, confirm 0 errors. Run Google Rich Results Test at `search.google.com/test/rich-results` — confirm structured data types (`EducationalOrganization`, `Service`, `FAQPage`) are detected. Both validators must pass before the phase is complete.

---

### Phase 3: llms.txt + robots.txt

**Goal**: /llms.txt at domain root summarizing business and key pages; robots.txt explicitly allowing AI crawlers
**Depends on**: Phase 1
**Requirements**: LLM-01, LLM-02
**Success Criteria**:
  1. /llms.txt returns 200 with Content-Type: text/plain, contains business summary for Wisdom Wealth International School (WWIS), key page links, and contact info (Phone: +91 81246 48888 / Email: rootadmin@wwistrichy.com)
  2. robots.txt explicitly allows: GPTBot, ClaudeBot, PerplexityBot
  3. robots.txt does not block any path required for service discovery

**Tasks**:

1. Create `public/robots.txt` with the following content verbatim:

   ```
   User-agent: GPTBot
   Allow: /

   User-agent: ClaudeBot
   Allow: /

   User-agent: PerplexityBot
   Allow: /

   User-agent: *
   Allow: /
   ```

   Critical: Do NOT add `Disallow: /api/` or any rule blocking `/.well-known/`, `/openapi.json`, or `/api/`. Those paths are required for agent service discovery (Phases 4, 6, 7).

2. Create `public/llms.txt` with the following content (substitute live URL at deployment):

   ```
   # Wisdom Wealth International School (WWIS)

   Wisdom Wealth International School (WWIS) is an International School (Education) offering:
   - iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus
   - iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery
   - iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch
   - Cambridge International Examinations (CIE) curriculum
   - Individual Learning Plans for every student

   ## Key Pages
   - Home: https://wwistrichy.com/
   - Programs: https://wwistrichy.com/services
   - Contact: https://wwistrichy.com/contact

   ## Contact
   Phone: +91 81246 48888
   Email: rootadmin@wwistrichy.com
   Hours: Monday–Saturday, 9 AM–5:30 PM
   Address: 11th Sector, 18th Cross, Morais City, near airport, Trichy 620007
   ```

3. Validation: `curl -s https://wwistrichy.com/robots.txt` — confirm GPTBot, ClaudeBot, PerplexityBot all appear under `Allow: /`. Confirm no `Disallow: /api/` line exists. `curl -s https://wwistrichy.com/llms.txt` — confirm HTTP 200, Content-Type: text/plain, and that "Wisdom Wealth International School" appears in the content.

---

### Phase 4: OpenAPI Specification

**Goal**: /openapi.json served at domain root with typed endpoints for services, pricing, hours, and contact
**Depends on**: Phase 2
**Requirements**: API-01, API-02, API-03
**Success Criteria**:
  1. /openapi.json serves valid OpenAPI 3.x spec
  2. Endpoints present: GET /services, GET /services/{id}, GET /pricing, GET /hours, POST /contact
  3. Each endpoint has typed request/response schemas with descriptions
  4. info block includes contact.email (rootadmin@wwistrichy.com) and termsOfService URL
  5. Spec renders without errors in editor.swagger.io

**Tasks**:

1. Create `public/openapi.json` as a static file served from the Astro public directory (available at `https://wwistrichy.com/openapi.json`). Alternatively, serve it from FastAPI at `/openapi.json` if the FastAPI backend is the canonical API host — confirm deployment routing on Render before choosing. The file must be reachable at the root path.

2. Define the OpenAPI 3.x spec with the following `info` block:
   ```json
   {
     "openapi": "3.0.3",
     "info": {
       "title": "Wisdom Wealth International School API",
       "version": "1.0.0",
       "contact": {
         "email": "rootadmin@wwistrichy.com"
       },
       "termsOfService": "https://wwistrichy.com/terms"
     },
     "servers": [{ "url": "https://wwistrichy.com" }]
   }
   ```

3. Define the following endpoints in `paths`:
   - `GET /services` — returns array of program objects (iPlay, iDiscover, iLead, CIE curriculum, Individual Learning Plans); each object has `id`, `name`, `description`, `gradeRange`
   - `GET /services/{id}` — returns single program by ID; same schema as above
   - `GET /pricing` — returns fee structure or "contact for pricing" response object
   - `GET /hours` — returns `{ "monday_saturday": "09:00–17:30", "sunday": "closed" }`
   - `POST /contact` — accepts `{ name, email, phone, grade_interest, message }` and returns `{ success: true, message: "We'll be in touch" }`

4. Define `components/schemas` for all request/response types: `Program`, `PricingInfo`, `HoursInfo`, `ContactRequest`, `ContactResponse`.

5. Implement the FastAPI backend routes in the backend service (Python) that serve these endpoints. FastAPI auto-generates an OpenAPI schema — confirm the auto-generated spec matches the static `public/openapi.json` or use FastAPI's `/openapi.json` as the canonical source.

6. Validation: Load `public/openapi.json` (or `https://wwistrichy.com/openapi.json`) in `editor.swagger.io` — confirm it renders without schema errors. All five endpoints must appear in the rendered spec with descriptions.

---

### Phase 5: Content Negotiation

**Goal**: Key endpoints return application/json on Accept header; AI user-agents get Markdown/JSON summaries
**Depends on**: Phase 4
**Requirements**: CN-01, CN-02
**Success Criteria**:
  1. GET /services returns JSON when Accept: application/json is sent
  2. ClaudeBot and GPTBot user-agents receive Markdown or JSON response (not full HTML)
  3. JSON responses include same structured data as JSON-LD (not a subset)
  4. Content-Type headers accurate for all response formats

**Tasks**:

1. In `src/pages/api/services.ts` (Astro server endpoint) or via the FastAPI backend `/services` route: inspect the `Accept` request header. If `Accept: application/json`, return a JSON array of all five programs matching the OpenAPI schema (`Program` type). Set `Content-Type: application/json`.

2. Inspect the `User-Agent` request header on key routes (`/`, `/services`, `/contact`). If the User-Agent contains `GPTBot`, `ClaudeBot`, or `PerplexityBot`, return a Markdown or JSON summary instead of the full HTML page. The Markdown summary must include: school name, program list, contact details, and booking CTA URL.

3. Ensure JSON responses for `/services` include all fields present in the JSON-LD `Service` schema blocks (name, description, provider, gradeRange, areaServed) — not a subset.

4. Confirm `Content-Type` headers are accurate for all formats: `text/html; charset=utf-8` for HTML, `application/json` for JSON, `text/markdown` for Markdown responses.

5. Validation: `curl -H "Accept: application/json" https://wwistrichy.com/services` — confirm response is JSON with `Content-Type: application/json`. `curl -A "GPTBot" https://wwistrichy.com` — confirm response is not full HTML (check Content-Type header and response body for absence of `<html>` tag).

---

### Phase 6: MCP Endpoints [EMERGING]

**Goal**: MCP server with tools: get-services, get-pricing, check-availability, submit-inquiry
**Depends on**: Phase 4
**Requirements**: MCP-01, MCP-02

> **[EMERGING]** Before starting this phase:
> - Verify @modelcontextprotocol/sdk current version at npmjs.com
> - Check MCP spec at https://modelcontextprotocol.io/docs — tool signatures may have changed
> - Do not proceed from memory; verify spec before writing any tool definitions

**Tasks**:

1. Spec-verification gate (REQUIRED — do not skip):
   Before writing any MCP tool definitions, open https://modelcontextprotocol.io/specification/
   and identify the current latest stable spec version. Read the tool definition format from that
   version. Confirm the structure of the `tools/list` response and the `inputSchema` field format
   (JSON Schema object) before writing any tool code. Do not implement from memory — tool
   signatures change between spec versions.

   Pass criteria: You have reviewed the current tool schema format at the spec URL above.

2. Implement the MCP server as a FastAPI route in the Python backend: `src/routes/mcp.py` exposed at `/api/mcp`. (Since the backend is FastAPI/Python, use the Python MCP SDK rather than the Node.js `@modelcontextprotocol/sdk`. Verify the Python SDK package name and version at pypi.org before installing.)

3. Implement the following four tools (using tool names and input schemas as verified from the MCP spec above):
   - `get-services` — returns the list of WWIS programs (iPlay, iDiscover, iLead, CIE curriculum, Individual Learning Plans) with descriptions and grade ranges
   - `get-pricing` — returns fee structure or directs the agent to contact the school at +91 81246 48888 / rootadmin@wwistrichy.com
   - `check-availability` — returns school hours (Monday–Saturday, 9 AM–5:30 PM) and booking availability for school visits
   - `submit-inquiry` — accepts `{ name, email, phone, grade_interest, message }` and creates a record in Supabase; returns confirmation

4. Create `public/.well-known/mcp` discovery file pointing to the MCP endpoint URL (`https://wwistrichy.com/api/mcp`).

5. Validation: After implementation, call `GET /api/mcp` with a `tools/list` request shape (per the spec verified in Task 1) — confirm the four tools (`get-services`, `get-pricing`, `check-availability`, `submit-inquiry`) appear in the response. If the spec-verification gate was not run, this phase is incomplete.

**Success Criteria**:
  1. MCP tools implemented: get-services, get-pricing, check-availability, submit-inquiry
  2. Tool definitions follow current MCP spec (verified at https://modelcontextprotocol.io/specification/ before coding)
  3. MCP server discoverable at /.well-known/mcp or via openapi.json extension

---

### Phase 7: agent-card.json [EMERGING]

**Goal**: /.well-known/agent-card.json served with capabilities array, contact endpoint, supported protocols
**Depends on**: Phase 6
**Requirements**: A2A-01

> **[EMERGING]** Before starting this phase:
> - Verify A2A spec at https://github.com/a2aproject/A2A — spec is evolving; this URL moved from the original google-deepmind repo
> - Check current required fields before writing agent-card.json
> - Do not proceed from memory; verify spec before writing

**Tasks**:

1. Spec-verification gate (REQUIRED — do not skip):
   Before writing agent-card.json, open https://github.com/a2aproject/A2A and read the current
   spec for agent card structure. The A2A project moved from github.com/google-deepmind/a2a to
   github.com/a2aproject/A2A — use only the new URL. Check current required fields before writing.

   Pass criteria: You have reviewed the current required fields and capabilities array format
   from the a2aproject/A2A spec.

2. Create `public/.well-known/agent.json` — served at `/.well-known/agent.json` (place in `public/.well-known/` directory in the Astro project). Using the fields confirmed in Task 1, write an agent card that includes at minimum:
   - `name`: "Wisdom Wealth International School"
   - `description`: "Agent-ready interface for WWIS — an international school in Trichy offering iPlay, iDiscover, iLead programs and Cambridge CIE curriculum"
   - `capabilities`: array listing all agent-callable actions: `get-services`, `get-pricing`, `check-availability`, `submit-inquiry`
   - `contact`: endpoint URL pointing to `https://wwistrichy.com/api/mcp` or `https://wwistrichy.com/contact`
   - `supported_protocols`: array including MCP protocol reference

3. Validation: `curl -s -I https://wwistrichy.com/.well-known/agent.json` — confirm HTTP 200 with `Content-Type: application/json`. Then `curl -s https://wwistrichy.com/.well-known/agent.json` — confirm valid JSON with capabilities array containing at least `get-services`, `get-pricing`, `check-availability`, `submit-inquiry`. Validate JSON structure against the current A2A spec reviewed in Task 1.

**Success Criteria**:
  1. /.well-known/agent-card.json returns 200 with Content-Type: application/json
  2. Card includes: name (Wisdom Wealth International School), description, capabilities array, contact endpoint, supported_protocols
  3. Capabilities array lists all actions agents can take on this site
  4. Card is valid JSON

---

## Phase 8: Agent-Readiness Verification

**Depends on**: All prior phases
**Requirements**: VERIFY-01, VERIFY-02, VERIFY-03, VERIFY-04

### Pass/Fail Summary

Run all checks below. Record results in this table before marking the phase complete.

| Layer | Check | Status |
|-------|-------|--------|
| JSON-LD | Google Rich Results Test | [ ] Pass / [ ] Fail |
| JSON-LD | schema.org Validator | [ ] Pass / [ ] Fail |
| robots.txt | GPTBot allowed | [ ] Pass / [ ] Fail |
| robots.txt | ClaudeBot allowed | [ ] Pass / [ ] Fail |
| robots.txt | PerplexityBot allowed | [ ] Pass / [ ] Fail |
| AI Discoverability | Claude prompt response | [ ] Pass / [ ] Fail |
| AI Discoverability | Perplexity prompt response | [ ] Pass / [ ] Fail |
| OpenAPI | Swagger UI render | [ ] Pass / [ ] Fail |
| OpenAPI | Redoc render (alternative) | [ ] Pass / [ ] Fail |
| MCP Endpoints [EMERGING] | tools/list response | [ ] Pass / [ ] Fail |
| agent-card.json [EMERGING] | /.well-known/agent.json returns 200 | [ ] Pass / [ ] Fail |

All rows must show Pass before this phase is complete.

---

### Task 1: JSON-LD Validation

**Goal**: Confirm all structured data is valid and detectable by search engines and AI crawlers.

**Step 1 — Google Rich Results Test (live URL)**
Open: https://search.google.com/test/rich-results
Enter: https://wwistrichy.com
Expected: All JSON-LD schema types (EducationalOrganization, Service, FAQPage if present) are detected with no errors or warnings.

Pass: Each schema type listed with a green checkmark.
Fail: Any schema type listed with errors, or no structured data detected.

**Step 2 — schema.org Validator**
Open: https://validator.schema.org/
Paste each JSON-LD block from the site source.
Expected: 0 errors for each block.

Pass: 0 errors on every block.
Fail: Any error count > 0.

---

### Task 2: AI Discoverability Prompt Tests

**Goal**: Confirm Wisdom Wealth International School (WWIS) appears in AI search results with accurate service and contact information.

**Prompt 1 — Claude**
Open Claude (claude.ai) in a new conversation with no prior context.
Paste this prompt exactly:

> What services does Wisdom Wealth International School (WWIS) in Trichy, Tamil Nadu offer, and how can I contact them?

Pass: Response explicitly names Wisdom Wealth International School (WWIS) AND mentions at least one service from this list: iPlay (Pre-KG to Grade 2): 24 Skills, 3 Languages — brain development focus, iDiscover (Grade 3–7): 24 projects, 8 professional skills — passion discovery, iLead (Grade 8–12): 3 Career programs, 5 Internships — career pathway launch, Cambridge International Examinations (CIE) curriculum, Individual Learning Plans for every student.
Fail: Response does not name Wisdom Wealth International School (WWIS), returns a generic answer, or states it has no information about the business.

**Prompt 2 — Perplexity**
Open Perplexity (perplexity.ai) in a new search.
Paste this prompt exactly:

> Tell me about Wisdom Wealth International School (WWIS) in Trichy, Tamil Nadu — what do they do and how do I get in touch?

Pass: Response explicitly names Wisdom Wealth International School (WWIS) AND mentions at least one service or contact detail.
Fail: Response does not name Wisdom Wealth International School (WWIS), returns a generic answer, or states it cannot find the business.

**Note**: Both prompts must pass independently. A passing Perplexity result does not substitute for a passing Claude result.

---

### Task 3: robots.txt Audit

**Goal**: Confirm AI crawlers are explicitly allowed and no critical paths are blocked.

Run this command:

```bash
curl -s https://wwistrichy.com/robots.txt
```

Check the output against all three criteria:

1. `GPTBot` has `Allow: /` — confirms OpenAI crawler access
2. `ClaudeBot` has `Allow: /` — confirms Anthropic crawler access
3. `PerplexityBot` has `Allow: /` — confirms Perplexity crawler access

Also confirm: No `Disallow: /api/` rule exists. The `/api/` path must remain open for agent service discovery (OpenAPI, MCP, agent-card.json).

Pass: All three bots present with `Allow: /` and no blocking rules on `/api/`, `/.well-known/`, or `/openapi.json`.
Fail: Any bot absent, or a `Disallow` rule that blocks agent-discovery paths.

---

### Task 4: OpenAPI Spec Render

**Goal**: Confirm the OpenAPI spec is valid and renders without errors in at least one tool.

**Option A — Swagger UI (primary)**
Open: https://editor.swagger.io/
Paste the contents of `https://wwistrichy.com/openapi.json` into the editor (or load via URL if Swagger UI supports it).
Expected: All endpoints render in the right panel with descriptions. No red error banners.

Pass: All defined endpoints (GET /services, GET /services/{id}, GET /pricing, GET /hours, POST /contact) appear with descriptions.
Fail: Editor shows schema validation errors, or any endpoint is missing from the rendered view.

**Option B — Redoc (alternative)**
Open: https://redocly.github.io/redoc/
Load `https://wwistrichy.com/openapi.json` via the URL input.
Expected: Spec renders in Redoc without errors.

Pass: All endpoints visible in the left navigation with response schemas.
Fail: Render fails or endpoints are missing.

At least one of Option A or Option B must pass.

---

### Task 5: MCP Endpoint Check [EMERGING]

> **[EMERGING]** The MCP specification is actively evolving. Before running this check, verify the current `tools/list` request format at https://modelcontextprotocol.io/specification/ — the request shape may differ from what is shown here.

**Goal**: Confirm the MCP server responds to a tool discovery request with the expected tools.

Send a `tools/list` request to `https://wwistrichy.com/api/mcp` using the request shape from the current MCP spec (verified above).

Expected tools in response: `get-services`, `get-pricing`, `check-availability`, `submit-inquiry`

Pass: Response contains all four tool names.
Fail: Endpoint returns an error, or fewer than four tools are listed.

If Phase 6 (MCP Endpoints) was not implemented (status NICE-TO-HAVE and skipped), mark this row N/A in the summary table.

---

### Task 6: agent-card.json Check [EMERGING]

> **[EMERGING]** The A2A spec (agent-card.json format) is actively evolving. Before running this check, verify the current required fields at https://github.com/a2aproject/A2A — field names may differ from what is shown here.

**Goal**: Confirm the agent card is served and contains expected capabilities.

Run:

```bash
curl -s -I https://wwistrichy.com/.well-known/agent.json
```

Expected: HTTP 200 with `Content-Type: application/json`.

Then fetch the full body:

```bash
curl -s https://wwistrichy.com/.well-known/agent.json
```

Check: Valid JSON, contains a capabilities array with at least: `get-services`, `get-pricing`, `check-availability`, `submit-inquiry`.

Pass: HTTP 200, valid JSON, capabilities array present with the four actions.
Fail: Non-200 response, invalid JSON, or capabilities array missing.

If Phase 7 (agent-card.json) was not implemented (status NICE-TO-HAVE and skipped), mark this row N/A in the summary table.

---

### Completion Criteria

All non-N/A rows in the Pass/Fail Summary table show Pass.

Document any Fail results with the specific error before closing the phase — do not mark the phase complete with open failures.
