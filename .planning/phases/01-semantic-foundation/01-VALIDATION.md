---
phase: 01
phase_slug: semantic-foundation
date: 2026-04-13
---

# Validation Strategy: Phase 1 (Semantic Foundation)

**Created:** 2026-04-13
**Status:** Ready for execution

---

## Validation Architecture

This document defines how to verify Phase 1 delivers its promised value through observable outcomes, not just task completion.

---

## Dimension 1: User Journey Validation

**Goal:** Parents can navigate the site and understand WWIS programs without JavaScript enabled

**Validation Method:**
```bash
# Disable JS and verify content is present
curl -s http://localhost:4321/ | grep -E '<main|<header|<nav|<footer'
# Expected: 4+ semantic elements found

# Verify heading hierarchy
curl -s http://localhost:4321/ | grep -oE '<h[1-6]' | head -10
# Expected: h1 appears first, no skipped levels
```

**Pass Criteria:**
- All semantic elements present in raw HTML response
- h1 → h2 → h3 hierarchy maintained (no h1 → h3 jumps)
- All images have alt attributes

---

## Dimension 2: Accessibility Validation

**Goal:** Site achieves Lighthouse accessibility score ≥ 90

**Validation Method:**
```bash
# Run Lighthouse CI
npx lighthouse http://localhost:4321/ --output=json --output-path=./lighthouse.json --only-categories=accessibility

# Check score
node -e "console.log(JSON.parse(require('fs').readFileSync('./lighthouse.json')).categories.accessibility.score * 100)"
# Expected: >= 90
```

**Pass Criteria:**
- Lighthouse accessibility score ≥ 90
- All images have alt text
- All interactive elements are keyboard accessible
- Color contrast meets WCAG AA

---

## Dimension 3: Semantic HTML Validation

**Goal:** Every page uses proper semantic landmarks

**Validation Method:**
```bash
# Check all pages for semantic elements
for page in index about contact programs iplay idiscover ilead; do
  curl -s http://localhost:4321/$page/ | grep -c '<main'
done
# Expected: 1 for each page (exactly one <main> per page)
```

**Pass Criteria:**
- Every page has exactly one `<main>` element
- Every page has `<header>` and `<footer>`
- Navigation uses `<nav>` with aria-label

---

## Dimension 4: Image Alt Text Validation

**Goal:** All meaningful images have descriptive alt text

**Validation Method:**
```bash
# Find all img tags and check for alt attribute
curl -s http://localhost:4321/ | grep -oE '<img[^>]*>' | grep -v 'alt='
# Expected: no output (all images have alt)

# Check for empty alt on decorative images
curl -s http://localhost:4321/ | grep -oE '<img[^>]*alt=""[^>]*>'
# Expected: only decorative images have empty alt
```

**Pass Criteria:**
- No `<img>` tags without alt attribute
- Decorative images have `alt=""`
- Informative images have descriptive alt text

---

## Dimension 5: Performance Validation

**Goal:** Pages load instantly with zero JavaScript required for content

**Validation Method:**
```bash
# Measure time to first byte and full load
curl -w "@curl-format.txt" -o /dev/null -s http://localhost:4321/

# Verify no JS required for content
curl -s http://localhost:4321/ | grep -c '<script'
# Expected: 0 or minimal (analytics only, not content-gating)
```

**Pass Criteria:**
- Time to First Byte < 200ms
- No JavaScript required to render main content
- All text content present in initial HTML response

---

## Dimension 6: Build Validation

**Goal:** Astro build completes without errors or warnings

**Validation Method:**
```bash
npm run build 2>&1 | tee build.log
grep -iE 'error|warning' build.log
# Expected: no errors or warnings
```

**Pass Criteria:**
- `npm run build` completes successfully
- No TypeScript errors
- No Astro warnings about missing alt text or semantic issues

---

## Dimension 7: SEO Validation

**Goal:** Pages are indexable with proper semantic structure

**Validation Method:**
```bash
# Check for required meta tags
curl -s http://localhost:4321/ | grep -E '<title>|<meta name="description"|<meta charset'
# Expected: title, description, charset present

# Check for sitemap
curl -s http://localhost:4321/sitemap.xml | head -20
# Expected: valid XML sitemap with all pages
```

**Pass Criteria:**
- Every page has unique title tag
- Every page has meta description
- Sitemap.xml generated with all pages
- Robots.txt allows all crawlers

---

## Dimension 8: Nyquist Compliance

**Goal:** All 8 validation dimensions are addressed

**Validation Method:**
- Dimensions 1-7 defined above
- Each dimension has:
  - Clear goal statement
  - Executable validation commands
  - Pass/fail criteria

**Pass Criteria:**
- All 8 dimensions have validation strategies
- Validation commands are executable
- Pass criteria are measurable

---

## Summary

| Dimension | Goal | Validation Method | Pass Criteria |
|-----------|------|-------------------|---------------|
| 1. User Journey | Navigate without JS | curl + grep | Semantic elements present |
| 2. Accessibility | Score ≥ 90 | Lighthouse CI | Score ≥ 90 |
| 3. Semantic HTML | Proper landmarks | curl + grep | 1 main, header, footer per page |
| 4. Alt Text | All images described | grep for img tags | No img without alt |
| 5. Performance | Instant load | curl timing | TTFB < 200ms, 0 JS for content |
| 6. Build | Clean build | npm run build | No errors/warnings |
| 7. SEO | Indexable | Meta tag check | Title, description, sitemap |
| 8. Nyquist | All dimensions covered | This document | All 8 defined |

---

*Last updated: 2026-04-13*
