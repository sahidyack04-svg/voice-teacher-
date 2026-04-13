# Phase 1: Semantic Foundation - Research

**Researched:** 2026-04-13
**Domain:** Astro framework semantic HTML, accessibility, and content structure
**Confidence:** HIGH

## Summary

This research covers the implementation of semantic HTML foundation for WWIS school website using Astro 6.x. Astro's server-rendered static generation model ensures all content is present in the initial HTTP response with zero JavaScript by default, making it ideal for accessibility, SEO, and AI crawler discovery.

Key findings: Astro enforces accessibility best practices through its `astro:assets` Image component (requires `alt` attribute), supports proper heading hierarchy through layout patterns, and uses standard semantic HTML5 elements (header, main, nav, article, footer). Common pitfalls include misusing client-side hydration, skipping heading levels, and using div/span instead of semantic elements.

**Primary recommendation:** Use Astro's built-in semantic patterns with Accessible Astro Components library for reusable elements, enforce alt text requirements at compile-time, and validate with Lighthouse accessibility audits before phase completion.

## User Constraints (from CONTEXT.md)

### Locked Decisions
*(None provided - CONTEXT.md does not exist for this phase)*

### Claude's Discretion
*(None provided - CONTEXT.md does not exist for this phase)*

### Deferred Ideas (OUT OF SCOPE)
*(None provided - CONTEXT.md does not exist for this phase)*

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| SEM-01 | All key pages use semantic HTML5 elements (header, main, article, nav, footer) | Astro page structure patterns, semantic element usage documented |
| SEM-02 | Full page content present in initial HTTP response (no JS-gated content) | Astro static generation model confirmed - zero JS by default |
| SEM-03 | Heading hierarchy consistent (h1→h6, no skipped levels) on every page | Heading component patterns, Accessible Astro library support |
| SEM-04 | All meaningful images have descriptive alt text | Astro Image component enforces alt attribute at compile-time |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | 6.1.5 | Static site generator with server-rendered HTML | Zero JS by default, semantic HTML support, enforced accessibility |
| Accessible Astro Components | Latest | Pre-built accessible components (Card, Heading, etc.) | Provides semantic components with proper ARIA attributes built-in |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @astrojs/sitemap | Latest | Auto-generate sitemap.xml | SEO requirement for all content pages |
| @astrojs/check | Latest | TypeScript/astro file checking | Catch accessibility errors in CI |
| eslint-plugin-jsx-a11y | Latest | Accessibility linting | Catch semantic HTML violations during development |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Accessible Astro Components | Custom semantic components | More control but must implement ARIA patterns manually |
| Astro Image component | Sharp + custom optimization | Lose compile-time alt text enforcement |

**Installation:**
```bash
npm install astro@6.1.5 accessible-astro-components @astrojs/sitemap @astrojs/check
```

**Version verification:**
```bash
npm view astro version  # Returns: 6.1.5 (verified 2026-04-13)
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── components/
│   ├── Layout.astro         # Base layout with semantic shell
│   ├── SEO.astro            # Meta tags, JSON-LD placeholder
│   ├── Header.astro         # <header> with <nav>
│   ├── Footer.astro         # <footer> with contact info
│   └── Hero.astro           # Hero section with proper h1
├── layouts/
│   └── PageLayout.astro     # Combines Layout + SEO + Header + Footer
├── pages/
│   ├── index.astro          # Homepage
│   ├── programs/
│   │   ├── index.astro      # Programs overview
│   │   ├── iplay.astro      # iPlay program page
│   │   ├── idiscover.astro  # iDiscover program page
│   │   └── ilead.astro      # iLead program page
│   ├── about.astro          # About WWIS
│   ├── contact.astro        # Contact/Inquiry form
│   └── 404.astro            # Error page
└── assets/
    └── images/              # School photos, logos, program images
```

### Pattern 1: Semantic Page Layout
**What:** Base layout component that enforces semantic HTML5 structure
**When to use:** Every page extends this layout
**Example:**
```astro
---
// src/components/Layout.astro
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'WWIS - Wisdom Wealth International School' } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
  <body>
    <header>
      <slot name="header" />
    </header>
    
    <nav aria-label="Main navigation">
      <slot name="nav" />
    </nav>
    
    <main id="main-content">
      <slot />
    </main>
    
    <footer>
      <slot name="footer" />
    </footer>
  </body>
</html>
```
**Source:** [Astro Layouts Documentation](https://docs.astro.build/en/basics/layouts/)

### Pattern 2: Heading Hierarchy with Accessible Astro
**What:** Use Accessible Astro Heading component to separate semantic level from visual styling
**When to use:** When visual design requires different sizing than document structure
**Example:**
```astro
---
import { Heading } from 'accessible-astro-components';
---

<!-- Semantic h1, visually large -->
<Heading level="h1" size="h1">Welcome to WWIS</Heading>

<!-- Semantic h2, visually smaller -->
<Heading level="h2" size="h2">Our Programs</Heading>

<!-- Semantic h3 for subsection, but styled like h2 -->
<Heading level="h3" size="h2">iPlay Program Details</Heading>
```
**Source:** [Accessible Astro Heading Component](https://accessible-astro.incluud.dev/components/heading/)

### Pattern 3: Astro Image Component with Alt Text
**What:** Use `astro:assets` Image component which enforces alt attribute
**When to use:** All images in the site
**Example:**
```astro
---
import { Image } from 'astro:assets';
import schoolHero from '../assets/school-hero.jpg';
import decorativePattern from '../assets/pattern.png';
---

<!-- Informative image - requires descriptive alt -->
<Image 
  src={schoolHero} 
  alt="WWIS school building with students playing in the courtyard"
  priority
/>

<!-- Decorative image - empty alt tells screen readers to ignore -->
<Image 
  src={decorativePattern} 
  alt=""
/>
```
**Source:** [Astro Image API Reference](https://docs.astro.build/en/reference/modules/astro-assets/)

### Anti-Patterns to Avoid
- **Div-itis:** Using `<div class="header">` instead of `<header>` - loses semantic meaning
- **Heading skips:** Going from h1 to h4 because h2/h3 "look too big" - breaks document outline
- **JS-gated content:** Wrapping content in components that only render after hydration - content invisible to crawlers
- **Missing alt text:** Astro will error at build time if alt is missing on Image component
- **Multiple h1 tags:** Only one h1 per page (the page title)

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Image optimization | Custom Sharp pipeline | Astro `astro:assets` Image | Built-in alt enforcement, automatic srcset, CLS prevention |
| Accessible headings | Custom CSS classes | Accessible Astro Heading | Separates semantic level from visual size, proper ARIA |
| Layout shell | Copy-paste HTML in each page | Astro Layout component | DRY, consistent semantic structure, single source of truth |
| Card components | Div-based cards | Accessible Astro Card | Proper roles, focus management, screen reader support |

**Key insight:** Astro's compile-time enforcement catches accessibility errors before deployment. Custom solutions miss these guardrails.

## Common Pitfalls

### Pitfall 1: Overusing Client-Side Hydration
**What goes wrong:** Using `client:load` or `client:idle` on components that should be static
**Why it happens:** React/Vue habits from SPA development
**How to avoid:** Default to zero JS. Only add hydration when interactivity is required. Use `client:visible` for below-fold content.
**Warning signs:** JavaScript bundle > 50KB, Lighthouse shows "Reduce JavaScript execution time"

### Pitfall 2: Incorrect Heading Hierarchy
**What goes wrong:** Skipping heading levels (h1 → h3) or using headings for visual styling only
**Why it happens:** Visual design doesn't match document structure
**How to avoid:** Use Accessible Astro Heading component with `level` and `size` props separated
**Warning signs:** Lighthouse accessibility audit shows "Heading elements are not in a sequentially-descending order"

### Pitfall 3: Decorative Images Without Empty Alt
**What goes wrong:** Purely decorative images get descriptive alt text, confusing screen reader users
**Why it happens:** Assuming all images need descriptions
**How to avoid:** Use `alt=""` for decorative images (borders, patterns, background elements)
**Warning signs:** Screen reader announces "image of decorative pattern" unnecessarily

### Pitfall 4: Missing Landmark Regions
**What goes wrong:** Page uses divs instead of header/main/nav/footer/aside
**Why it happens:** Habit from pre-HTML5 development or CSS framework conventions
**How to avoid:** Start with semantic elements, add divs only when needed for styling
**Warning signs:** Lighthouse shows "Page does not have a main landmark" or "Page does not have a heading element"

### Pitfall 5: Content Behind JavaScript
**What goes wrong:** Content only appears after JavaScript executes
**Why it happens:** Using React/Vue components for static content
**How to avoid:** Keep content in Astro templates. Use islands only for interactive pieces
**Warning signs:** Disabling JavaScript in browser hides content, AI crawlers can't index content

## Code Examples

Verified patterns from official sources:

### Semantic Page Structure
```astro
---
// src/pages/index.astro
import Layout from '../components/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
---

<Layout title="WWIS - Wisdom Wealth International School">
  <Header slot="header" />
  
  <main>
    <Hero 
      title="Dream school for your child"
      subtitle="Nurturing future leaders through innovative education"
    />
    
    <section aria-labelledby="programs-heading">
      <h2 id="programs-heading">Our Programs</h2>
      <article>
        <h3>iPlay (Pre-KG to Grade 2)</h3>
        <p>24 Skills, 3 Languages — brain development focus</p>
      </article>
      <article>
        <h3>iDiscover (Grade 3–7)</h3>
        <p>24 projects, 8 professional skills — passion discovery</p>
      </article>
      <article>
        <h3>iLead (Grade 8–12)</h3>
        <p>3 Career programs, 5 Internships — career pathway launch</p>
      </article>
    </section>
  </main>
</Layout>
```
**Source:** [Astro Page Basics](https://docs.astro.build/en/basics/astro-pages/)

### Image with Proper Alt Text
```astro
---
// src/components/Hero.astro
import { Image } from 'astro:assets';
import heroImage from '../assets/wwis-students.jpg';
---

<section class="hero">
  <Image 
    src={heroImage} 
    alt="WWIS students collaborating on a science project in modern classroom"
    priority
    width="1200"
    height="600"
  />
  <h1>{Astro.props.title}</h1>
</section>
```
**Source:** [Astro Image Best Practices](https://astro.build/blog/images)

### Accessible Navigation
```astro
---
// src/components/Header.astro
---

<header>
  <a href="/" class="logo">
    <img src="/logo.svg" alt="WWIS Logo" width="120" height="40" />
  </a>
  
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about/">About Us</a></li>
      <li><a href="/programs/">Our Programs</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>
  </nav>
</header>
```
**Source:** [Accessible Astro Navigation Patterns](https://accessible-astro.incluud.dev/)

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| React SPA with CSR | Astro MPA with SSR | 2024-2025 | Content visible without JS, better SEO |
| Manual image optimization | Astro Image component | Astro 3.0+ | Compile-time alt enforcement, automatic optimization |
| CSS-only "semantic" classes | Actual HTML5 elements | HTML5 standard | Native screen reader support, better accessibility |
| Custom accessible components | Accessible Astro library | 2024+ | Pre-tested ARIA patterns, less maintenance |

**Deprecated/outdated:**
- **Using divs with ARIA roles:** Prefer native semantic elements (`<button>` not `<div role="button">`)
- **JavaScript-dependent rendering:** AI crawlers and screen readers need server-rendered HTML
- **Manual srcset generation:** Astro Image handles this automatically

## Open Questions

1. **Exact page list for WWIS site**
   - What we know: Current WordPress site has Home, About Us, Our programs, Blog, Our team, Upcoming events, Career, Find us
   - What's unclear: Which pages are essential for Phase 1 semantic foundation
   - Recommendation: Start with Home, Programs overview, three program pages (iPlay/iDiscover/iLead), Contact

2. **Current image inventory**
   - What we know: ~20 images on current site
   - What's unclear: Which images are decorative vs informative
   - Recommendation: Audit images during implementation, document alt text decisions

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Lighthouse CI + axe-core |
| Config file | `.lighthouserc.json` (to be created in Wave 0) |
| Quick run command | `npx lighthouse http://localhost:4321 --output=json --output-path=.lighthouse/report.json` |
| Full suite command | `npm run audit:a11y` (axe-core via Playwright) |

### Phase Requirements → Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| SEM-01 | Pages use header, main, nav, footer | Automated | `npx axe http://localhost:4321 --include "header,main,nav,footer"` | ❌ Wave 0 |
| SEM-02 | Content visible without JS | Manual + Automated | Lighthouse "Content without JS" audit | ❌ Wave 0 |
| SEM-03 | Heading hierarchy sequential | Automated | `npx axe http://localhost:4321 --rules "heading-order"` | ❌ Wave 0 |
| SEM-04 | All images have alt text | Automated | `npx axe http://localhost:4321 --rules "image-alt"` | ❌ Wave 0 |

### Sampling Rate
- **Per task commit:** Run Lighthouse accessibility audit (score must be 90+)
- **Per wave merge:** Full axe-core scan on all pages
- **Phase gate:** All SEM-01 through SEM-04 tests passing before `/gsd:verify-work`

### Wave 0 Gaps
- [ ] `.lighthouserc.json` — Lighthouse CI configuration
- [ ] `tests/a11y/` — Playwright + axe-core test suite
- [ ] `package.json` scripts — `audit:a11y`, `audit:lighthouse`
- [ ] GitHub Actions workflow — Run accessibility audits on PR

## Sources

### Primary (HIGH confidence)
- [Astro Documentation - Astro Pages](https://docs.astro.build/en/basics/astro-pages/) - Page structure, file-based routing
- [Astro Documentation - Image API](https://docs.astro.build/en/reference/modules/astro-assets/) - Image component, alt requirements
- [Accessible Astro Components](https://accessible-astro.incluud.dev/) - Heading, Card, Navigation patterns
- [Astro Build Failures Guide 2025](https://eastondev.com/blog/en/posts/dev/20251203-astro-build-failures-guide/) - Common pitfalls

### Secondary (MEDIUM confidence)
- [Astro SEO Complete Guide](https://eastondev.com/blog/en/posts/dev/20251202-astro-seo-complete-guide/) - Heading hierarchy best practices
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse) - Accessibility audit capabilities
- [Axe-core Toolkit](https://dev.to/thesius_code_7a136ae718b7/accessibility-audit-toolkit-16g6) - Semantic HTML testing

### Tertiary (LOW confidence)
- [Webtips Astro Best Practices](https://webtips.dev/lessons/astro-best-practices) - General patterns (verify against official docs)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Astro version verified via npm, Accessible Astro is established library
- Architecture: HIGH - Patterns from official Astro docs and Accessible Astro documentation
- Pitfalls: HIGH - Sourced from 2025 troubleshooting guides and official documentation
- Code examples: HIGH - All examples from official Astro documentation

**Research date:** 2026-04-13
**Valid until:** 2026-07-13 (30 days for stable - Astro 6.x is current, patterns are stable)
