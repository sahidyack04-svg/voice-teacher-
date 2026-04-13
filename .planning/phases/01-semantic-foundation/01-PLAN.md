---
phase: 01-semantic-foundation
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: [package.json, astro.config.mjs, src/components/Layout.astro, src/components/Header.astro, src/components/Footer.astro, src/layouts/PageLayout.astro]
autonomous: true
requirements: [SEM-01, SEM-02]

must_haves:
  truths:
    - "All pages use semantic HTML5 elements: header, main, nav, footer"
    - "Full page content present in initial HTTP response without JavaScript"
  artifacts:
    - path: "src/components/Layout.astro"
      provides: "Base semantic shell with header, main, footer landmarks"
      contains: "<header>, <main>, <footer>"
    - path: "src/components/Header.astro"
      provides: "Site header with navigation"
      contains: "<header>, <nav>"
    - path: "src/layouts/PageLayout.astro"
      provides: "Combined layout component"
      exports: ["Layout wrapper"]
  key_links:
    - from: "src/layouts/PageLayout.astro"
      to: "src/components/Layout.astro"
      via: "component import"
      pattern: "import Layout from.*Layout"
    - from: "src/components/Header.astro"
      to: "src/components/Layout.astro"
      via: "slot content"
      pattern: "<Header.*slot"
---

<objective>
Create the semantic HTML5 foundation layout components that all pages will extend.

Purpose: Establish reusable semantic shell (header, main, nav, footer) that enforces SEM-01 and SEM-02 across all pages.
Output: Layout.astro, Header.astro, Footer.astro, PageLayout.astro components ready for page creation.
</objective>

<execution_context>
@C:/Users/lenovo/.claude/get-shit-done/workflows/execute-plan.md
@C:/Users/lenovo/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-semantic-foundation/01-RESEARCH.md

<interfaces>
<!-- Key patterns from research - executor uses these directly -->

From 01-RESEARCH.md - Semantic Page Layout pattern:
```astro
---
// Base layout with semantic HTML5 structure
interface Props {
  title: string;
  description?: string;
}
---
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
  </head>
  <body>
    <header><slot name="header" /></header>
    <nav aria-label="Main navigation"><slot name="nav" /></nav>
    <main id="main-content"><slot /></main>
    <footer><slot name="footer" /></footer>
  </body>
</html>
```

From 01-RESEARCH.md - Standard stack:
- Astro 6.1.5 (verified via npm)
- accessible-astro-components (for Heading, Card components)
- @astrojs/sitemap (auto-generate sitemap.xml)
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Initialize Astro project with semantic HTML5 dependencies</name>
  <files>package.json, astro.config.mjs</files>
  <read_first>
    - package.json (current state)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (standard stack)
  </read_first>
  <action>
    1. Read package.json to check if Astro is installed
    
    2. If Astro not present, install dependencies:
       npm install astro@6.1.5 accessible-astro-components @astrojs/sitemap @astrojs/check
    
    3. Create astro.config.mjs with:
       ```js
       import { defineConfig } from 'astro/config';
       import sitemap from '@astrojs/sitemap';
       
       export default defineConfig({
         integrations: [sitemap()],
         build: {
           inlineStylesheets: 'always'
         }
       });
       ```
    
    4. Add scripts to package.json:
       - "dev": "astro dev"
       - "build": "astro build"
       - "preview": "astro preview"
       - "check": "astro check"
  </action>
  <verify>
    <automated>npm run check 2>&1 | head -20</automated>
    <manual>cat package.json | grep -E '"astro"|"accessible-astro-components"|"@astrojs/sitemap"'</manual>
  </verify>
  <done>
    Acceptance criteria:
    - package.json contains astro@6.1.5, accessible-astro-components, @astrojs/sitemap
    - astro.config.mjs exists with sitemap integration configured
    - npm run check executes without errors
  </done>
</task>

<task type="auto">
  <name>Task 2: Create base Layout.astro with semantic HTML5 landmarks</name>
  <files>src/components/Layout.astro</files>
  <read_first>
    - src/components/Layout.astro (create if not exists)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (Pattern 1: Semantic Page Layout)
  </read_first>
  <action>
    Create src/components/Layout.astro with:
    ```astro
    ---
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
  </action>
  <verify>
    <automated>grep -E '<header>|<main|<nav|<footer' src/components/Layout.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - File contains <header>, <main>, <nav>, <footer> elements (grep returns 4+ matches)
    - Layout accepts title and description props
    - Slots defined for header, nav, footer, and default content
  </done>
</task>

<task type="auto">
  <name>Task 3: Create Header.astro with semantic nav and Footer.astro with contact info</name>
  <files>src/components/Header.astro, src/components/Footer.astro</files>
  <read_first>
    - src/components/Header.astro (create if not exists)
    - src/components/Footer.astro (create if not exists)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (Accessible Navigation example)
  </read_first>
  <action>
    Create src/components/Header.astro:
    ```astro
    ---
    ---
    <header>
      <a href="/" class="logo" aria-label="WWIS Home">
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
    
    Create src/components/Footer.astro:
    ```astro
    ---
    ---
    <footer>
      <div class="footer-content">
        <section aria-labelledby="contact-heading">
          <h3 id="contact-heading">Contact Us</h3>
          <address>
            Wisdom Wealth International School<br />
            123 Education Street<br />
            City, State 12345<br />
            Phone: (555) 123-4567<br />
            Email: info@wwis.edu
          </address>
        </section>
        
        <nav aria-label="Footer navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/programs/">Programs</a></li>
            <li><a href="/contact/">Contact</a></li>
          </ul>
        </nav>
        
        <p class="copyright">&copy; {new Date().getFullYear()} WWIS. All rights reserved.</p>
      </div>
    </footer>
    ```
  </action>
  <verify>
    <automated>grep -E '<header>|<nav|<address>|<footer>' src/components/Header.astro src/components/Footer.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Header.astro contains <header> and <nav aria-label="Main navigation">
    - Footer.astro contains <footer>, <address>, and <nav aria-label="Footer navigation">
    - Both files use semantic HTML5 elements (grep returns 4+ matches)
  </done>
</task>

<task type="auto">
  <name>Task 4: Create PageLayout.astro combining all layout components</name>
  <files>src/layouts/PageLayout.astro</files>
  <read_first>
    - src/layouts/PageLayout.astro (create if not exists)
    - src/components/Layout.astro
    - src/components/Header.astro
    - src/components/Footer.astro
  </read_first>
  <action>
    Create src/layouts/PageLayout.astro:
    ```astro
    ---
    import Layout from '../components/Layout.astro';
    import Header from '../components/Header.astro';
    import Footer from '../components/Footer.astro';
    
    interface Props {
      title: string;
      description?: string;
    }
    
    const { title, description } = Astro.props;
    ---
    
    <Layout title={title} description={description}>
      <Header slot="header" />
      <Footer slot="footer" />
      <slot />
    </Layout>
    ```
  </action>
  <verify>
    <automated>grep -E "import.*Layout|import.*Header|import.*Footer|slot=" src/layouts/PageLayout.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - PageLayout.astro imports Layout, Header, Footer components
    - Uses slot syntax to pass Header to header slot, Footer to footer slot
    - File exists at src/layouts/PageLayout.astro
  </done>
</task>

</tasks>

<verification>
Overall phase checks:
1. All layout components use semantic HTML5 elements (header, main, nav, footer)
2. No JavaScript required for content rendering (Astro static generation by default)
3. Components are reusable and follow Accessible Astro patterns
</verification>

<success_criteria>
Measurable completion:
- Layout.astro, Header.astro, Footer.astro, PageLayout.astro all exist
- grep for semantic elements returns matches in all layout files
- npm run check passes without errors
- All files use semantic HTML5 landmarks (header, main, nav, footer, address)
</success_criteria>

<output>
After completion, create `.planning/phases/01-semantic-foundation/01-semantic-foundation-01-SUMMARY.md` documenting:
- Layout components created
- Semantic elements used
- Dependencies installed
- Any deviations from research patterns
</output>
