---
phase: 01-semantic-foundation
plan: 02
type: execute
wave: 2
depends_on: ["01-semantic-foundation-01"]
files_modified: [src/components/Hero.astro, src/programs/ProgramCard.astro]
autonomous: true
requirements: [SEM-03, SEM-04]

must_haves:
  truths:
    - "Heading hierarchy is consistent (h1→h6, no skipped levels) on every page"
    - "All meaningful images have descriptive alt text"
  artifacts:
    - path: "src/components/Hero.astro"
      provides: "Hero section with h1 and hero image"
      contains: "<h1>, <Image>, alt="
    - path: "src/programs/ProgramCard.astro"
      provides: "Reusable program card component"
      contains: "<h3>, <Image>, alt="
  key_links:
    - from: "src/components/Hero.astro"
      to: "astro:assets"
      via: "Image import"
      pattern: "import.*Image.*from.*astro:assets"
    - from: "src/programs/ProgramCard.astro"
      to: "astro:assets"
      via: "Image import"
      pattern: "import.*Image.*from.*astro:assets"
---

<objective>
Create reusable Hero and ProgramCard components with proper heading levels and image alt text.

Purpose: Implement SEM-03 (heading hierarchy) and SEM-04 (alt text) at the component level before building pages.
Output: Hero.astro and ProgramCard.astro components ready for page assembly.
</objective>

<execution_context>
@C:/Users/lenovo/.claude/get-shit-done/workflows/execute-plan.md
@C:/Users/lenovo/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-semantic-foundation/01-PLAN.md
@.planning/phases/01-semantic-foundation/01-RESEARCH.md

<interfaces>
From 01-RESEARCH.md - Pattern 2: Heading Hierarchy with Accessible Astro:
```astro
import { Heading } from 'accessible-astro-components';
<Heading level="h1" size="h1">Welcome to WWIS</Heading>
<Heading level="h2" size="h2">Our Programs</Heading>
```

From 01-RESEARCH.md - Pattern 3: Astro Image Component with Alt Text:
```astro
import { Image } from 'astro:assets';
<Image 
  src={schoolHero} 
  alt="WWIS school building with students playing in the courtyard"
  priority
/>
```
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create Hero.astro component with h1 and hero image using Astro Image</name>
  <files>src/components/Hero.astro</files>
  <read_first>
    - src/components/Hero.astro (create if not exists)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (Pattern 3: Image with Alt Text)
    - src/layouts/PageLayout.astro (from Plan 01)
  </read_first>
  <action>
    Create src/components/Hero.astro:
    ```astro
    ---
    import { Image } from 'astro:assets';
    import heroImage from '../assets/wwis-students.jpg';
    
    interface Props {
      title: string;
      subtitle?: string;
    }
    
    const { title, subtitle } = Astro.props;
    ---
    
    <section class="hero">
      <Image 
        src={heroImage} 
        alt="WWIS students collaborating on a science project in modern classroom"
        priority
        width="1200"
        height="600"
      />
      <div class="hero-content">
        <h1>{title}</h1>
        {subtitle && <p class="subtitle">{subtitle}</p>}
      </div>
    </section>
    ```
    
    Note: The Astro Image component will fail at build time if alt attribute is missing, enforcing SEM-04.
  </action>
  <verify>
    <automated>grep -E '<h1>|import.*Image.*from.*astro:assets|alt="' src/components/Hero.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - File imports Image from 'astro:assets'
    - File contains <h1> element for the title
    - Image component has alt attribute with descriptive text (grep returns 3+ matches)
  </done>
</task>

<task type="auto">
  <name>Task 2: Create ProgramCard.astro component with h3 and program image</name>
  <files>src/programs/ProgramCard.astro</files>
  <read_first>
    - src/programs/ProgramCard.astro (create if exists)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (Code Examples section)
  </read_first>
  <action>
    Create src/programs/ProgramCard.astro:
    ```astro
    ---
    import { Image } from 'astro:assets';
    
    interface Props {
      name: string;
      gradeRange: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
    }
    
    const { name, gradeRange, description, imageSrc, imageAlt } = Astro.props;
    ---
    
    <article class="program-card">
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        width="400"
        height="250"
      />
      <div class="program-content">
        <h3>{name}</h3>
        <p class="grade-range">{gradeRange}</p>
        <p class="description">{description}</p>
        <a href={`/programs/${name.toLowerCase()}/`} class="learn-more">Learn More</a>
      </div>
    </article>
    ```
  </action>
  <verify>
    <automated>grep -E '<article|<h3>|import.*Image.*from.*astro:assets|alt=' src/programs/ProgramCard.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - File uses <article> semantic element
    - File contains <h3> for program name
    - Image component has alt={imageAlt} prop (grep returns 4+ matches)
  </done>
</task>

</tasks>

<verification>
Overall phase checks:
1. Hero component uses h1 for main title
2. ProgramCard uses h3 (proper hierarchy level when used on homepage)
3. Both components use Astro Image with required alt attribute
</verification>

<success_criteria>
Measurable completion:
- Hero.astro and ProgramCard.astro both exist
- grep for heading elements shows h1 in Hero, h3 in ProgramCard
- grep for alt= shows all images have descriptive text
- npm run build completes without errors (proves alt text enforcement)
</success_criteria>

<output>
After completion, create `.planning/phases/01-semantic-foundation/01-semantic-foundation-02-SUMMARY.md` documenting:
- Components created (Hero, ProgramCard)
- Heading levels used (h1, h3)
- Image alt text patterns enforced
- Any deviations from research patterns
</output>
