---
phase: 01-semantic-foundation
plan: 02
type: execute
wave: 2
depends_on: ["01-semantic-foundation-01"]
files_modified: [src/pages/index.astro, src/pages/about.astro, src/pages/contact.astro, src/pages/programs/index.astro, src/components/Hero.astro, src/programs/ProgramCard.astro]
autonomous: true
requirements: [SEM-03, SEM-04]

must_haves:
  truths:
    - "Heading hierarchy is consistent (h1→h6, no skipped levels) on every page"
    - "All meaningful images have descriptive alt text"
  artifacts:
    - path: "src/pages/index.astro"
      provides: "Homepage with proper h1 and program sections"
      contains: "<h1>, <h2>, <h3>"
    - path: "src/pages/programs/index.astro"
      provides: "Programs overview page"
      contains: "<h1>, <h2>, Image with alt"
    - path: "src/components/Hero.astro"
      provides: "Hero section with h1 and hero image"
      contains: "<h1>, <Image>, alt="
    - path: "src/programs/ProgramCard.astro"
      provides: "Reusable program card component"
      contains: "<h3>, <Image>, alt="
  key_links:
    - from: "src/pages/index.astro"
      to: "src/components/Hero.astro"
      via: "component import"
      pattern: "import Hero from.*Hero"
    - from: "src/pages/programs/index.astro"
      to: "src/programs/ProgramCard.astro"
      via: "component import"
      pattern: "import ProgramCard from.*ProgramCard"
    - from: "src/components/Hero.astro"
      to: "astro:assets"
      via: "Image import"
      pattern: "import.*Image.*from.*astro:assets"
---

<objective>
Create the homepage, programs page, and reusable components with proper heading hierarchy and image alt text.

Purpose: Implement SEM-03 (heading hierarchy) and SEM-04 (alt text) on key pages using Astro's Image component for compile-time alt enforcement.
Output: index.astro, about.astro, contact.astro, programs/index.astro pages with Hero and ProgramCard components.
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
<!-- Key patterns from research - executor uses these directly -->

From 01-RESEARCH.md - Pattern 2: Heading Hierarchy with Accessible Astro:
```astro
import { Heading } from 'accessible-astro-components';
<Heading level="h1" size="h1">Welcome to WWIS</Heading>
<Heading level="h2" size="h2">Our Programs</Heading>
<Heading level="h3" size="h2">iPlay Program Details</Heading>
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

From 01-RESEARCH.md - Semantic Page Structure example:
```astro
import Layout from '../components/Layout.astro';
<Layout title="WWIS - Wisdom Wealth International School">
  <main>
    <Hero title="Dream school for your child" />
    <section aria-labelledby="programs-heading">
      <h2 id="programs-heading">Our Programs</h2>
      <article><h3>iPlay (Pre-KG to Grade 2)</h3>...</article>
      <article><h3>iDiscover (Grade 3-7)</h3>...</article>
      <article><h3>iLead (Grade 8-12)</h3>...</article>
    </section>
  </main>
</Layout>
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

<task type="auto">
  <name>Task 3: Create homepage (index.astro) with proper heading hierarchy</name>
  <files>src/pages/index.astro</files>
  <read_first>
    - src/pages/index.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
    - src/components/Hero.astro (from Task 1)
    - src/programs/ProgramCard.astro (from Task 2)
  </read_first>
  <action>
    Create src/pages/index.astro:
    ```astro
    ---
    import PageLayout from '../layouts/PageLayout.astro';
    import Hero from '../components/Hero.astro';
    import ProgramCard from '../programs/ProgramCard.astro';
    import iplayImg from '../assets/iplay.jpg';
    import idiscoverImg from '../assets/idiscover.jpg';
    import ileadImg from '../assets/ilead.jpg';
    ---
    
    <PageLayout title="WWIS - Wisdom Wealth International School">
      <Hero 
        title="Dream school for your child"
        subtitle="Nurturing future leaders through innovative education"
      />
      
      <main>
        <section aria-labelledby="programs-heading">
          <h2 id="programs-heading">Our Programs</h2>
          
          <div class="program-grid">
            <ProgramCard 
              name="iPlay"
              gradeRange="Pre-KG to Grade 2"
              description="24 Skills, 3 Languages — brain development focus"
              imageSrc={iplayImg}
              imageAlt="Young WWIS students engaged in hands-on learning activity with colorful educational materials"
            />
            
            <ProgramCard 
              name="iDiscover"
              gradeRange="Grade 3 to Grade 7"
              description="24 projects, 8 professional skills — passion discovery"
              imageSrc={idiscoverImg}
              imageAlt="Middle school students working together on a science experiment in WWIS laboratory"
            />
            
            <ProgramCard 
              name="iLead"
              gradeRange="Grade 8 to Grade 12"
              description="3 Career programs, 5 Internships — career pathway launch"
              imageSrc={ileadImg}
              imageAlt="High school students presenting their capstone project to industry mentors at WWIS"
            />
          </div>
        </section>
        
        <section aria-labelledby="cta-heading">
          <h2 id="cta-heading">Visit WWIS</h2>
          <p>Experience our campus and meet our dedicated educators.</p>
          <a href="/contact/" class="cta-button">Book a Visit</a>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1|<h2|<h3|alt=' src/pages/index.astro | head -10</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Page imports PageLayout, Hero, ProgramCard
    - Heading hierarchy: h1 (in Hero) → h2 (programs-heading, cta-heading) → h3 (in ProgramCards)
    - All three program cards have descriptive alt text (grep returns 6+ matches for h1/h2/h3/alt)
  </done>
</task>

<task type="auto">
  <name>Task 4: Create programs overview page (programs/index.astro)</name>
  <files>src/pages/programs/index.astro</files>
  <read_first>
    - src/pages/programs/index.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
    - src/programs/ProgramCard.astro (from Task 2)
  </read_first>
  <action>
    Create src/pages/programs/index.astro:
    ```astro
    ---
    import PageLayout from '../../layouts/PageLayout.astro';
    import ProgramCard from '../../programs/ProgramCard.astro';
    import iplayImg from '../../assets/iplay.jpg';
    import idiscoverImg from '../../assets/idiscover.jpg';
    import ileadImg from '../../assets/ilead.jpg';
    ---
    
    <PageLayout title="Our Programs - WWIS" description="Explore WWIS proprietary programs: iPlay, iDiscover, and iLead">
      <main>
        <h1>Our Proprietary Programs</h1>
        
        <section aria-labelledby="program-overview">
          <h2 id="program-overview">Program Overview</h2>
          <p>WWIS has developed three proprietary programs that showcase our commitment to holistic education.</p>
        </section>
        
        <section aria-labelledby="programs-list">
          <h2 id="programs-list">Programs by Grade Level</h2>
          
          <div class="program-grid">
            <ProgramCard 
              name="iPlay"
              gradeRange="Pre-KG to Grade 2"
              description="24 Skills, 3 Languages — brain development focus"
              imageSrc={iplayImg}
              imageAlt="Pre-KG students learning through play with educational toys at WWIS"
            />
            
            <ProgramCard 
              name="iDiscover"
              gradeRange="Grade 3 to Grade 7"
              description="24 projects, 8 professional skills — passion discovery"
              imageSrc={idiscoverImg}
              imageAlt="Elementary students discovering science through hands-on experiments"
            />
            
            <ProgramCard 
              name="iLead"
              gradeRange="Grade 8 to Grade 12"
              description="3 Career programs, 5 Internships — career pathway launch"
              imageSrc={ileadImg}
              imageAlt="High school students leading a community service project"
            />
          </div>
        </section>
        
        <section aria-labelledby="enroll-now">
          <h2 id="enroll-now">Ready to Enroll?</h2>
          <p>Contact us today to schedule a visit and learn more about our programs.</p>
          <a href="/contact/" class="cta-button">Contact Us</a>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1>|<h2>|<h3>|alt=' src/pages/programs/index.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Page has single <h1> element ("Our Proprietary Programs")
    - Uses <h2> for section headings (program-overview, programs-list, enroll-now)
    - All ProgramCard images have descriptive alt text (grep returns 7+ matches)
  </done>
</task>

<task type="auto">
  <name>Task 5: Create about.astro and contact.astro pages with semantic structure</name>
  <files>src/pages/about.astro, src/pages/contact.astro</files>
  <read_first>
    - src/pages/about.astro (create if exists)
    - src/pages/contact.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
  </read_first>
  <action>
    Create src/pages/about.astro:
    ```astro
    ---
    import PageLayout from '../layouts/PageLayout.astro';
    import aboutHero from '../assets/about-hero.jpg';
    ---
    
    <PageLayout title="About Us - WWIS" description="Learn about WWIS mission, vision, and commitment to excellence">
      <main>
        <section aria-labelledby="about-heading">
          <h1 id="about-heading">About Wisdom Wealth International School</h1>
          
          <Image 
            src={aboutHero} 
            alt="WWIS campus exterior with modern architecture and green landscaping"
            width="1200"
            height="400"
          />
        </section>
        
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading">Our Mission</h2>
          <p>WWIS is committed to nurturing future leaders through innovative education that combines academic excellence with character development.</p>
        </section>
        
        <section aria-labelledby="vision-heading">
          <h2 id="vision-heading">Our Vision</h2>
          <p>To be the leading institution in holistic education, preparing students to thrive in a rapidly changing world.</p>
        </section>
        
        <section aria-labelledby="values-heading">
          <h2 id="values-heading">Core Values</h2>
          <ul>
            <li><strong>Integrity:</strong> Building character through honest actions</li>
            <li><strong>Excellence:</strong> Pursuing the highest standards in all endeavors</li>
            <li><strong>Respect:</strong> Valuing diversity and individual dignity</li>
            <li><strong>Innovation:</strong> Embracing creative solutions and modern approaches</li>
          </ul>
        </section>
      </main>
    </PageLayout>
    ```
    
    Create src/pages/contact.astro:
    ```astro
    ---
    import PageLayout from '../layouts/PageLayout.astro';
    ---
    
    <PageLayout title="Contact Us - WWIS" description="Get in touch with WWIS for admissions inquiries and school visits">
      <main>
        <h1>Contact Us</h1>
        
        <section aria-labelledby="contact-info">
          <h2 id="contact-info">Get in Touch</h2>
          
          <address>
            <strong>Wisdom Wealth International School</strong><br />
            123 Education Street<br />
            City, State 12345<br /><br />
            Phone: (555) 123-4567<br />
            Email: <a href="mailto:info@wwis.edu">info@wwis.edu</a>
          </address>
        </section>
        
        <section aria-labelledby="inquiry-form">
          <h2 id="inquiry-form">Send Us a Message</h2>
          <form action="/api/contact" method="POST">
            <div>
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1>|<h2>|<address>|alt=' src/pages/about.astro src/pages/contact.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - about.astro has <h1> and multiple <h2> sections (mission, vision, values)
    - about.astro has Image with alt text (grep returns 4+ matches)
    - contact.astro has <h1> and <h2> sections with semantic <address> element
    - contact.astro form has proper label/input associations (grep returns 5+ matches)
  </done>
</task>

</tasks>

<verification>
Overall phase checks:
1. All pages have consistent heading hierarchy (h1 → h2 → h3, no skips)
2. All images have descriptive alt text (enforced by Astro Image component)
3. No JavaScript required for content rendering
4. Lighthouse accessibility score >= 90 on all pages
</verification>

<success_criteria>
Measurable completion:
- index.astro, about.astro, contact.astro, programs/index.astro all exist
- grep for heading elements shows proper hierarchy on all pages
- grep for alt= shows all images have descriptive text
- npm run build completes without errors (proves alt text enforcement)
- npm run check passes accessibility checks
</success_criteria>

<output>
After completion, create `.planning/phases/01-semantic-foundation/01-semantic-foundation-02-SUMMARY.md` documenting:
- Pages created (index, about, contact, programs)
- Components created (Hero, ProgramCard)
- Heading hierarchy verified on all pages
- Image alt text verified
- Build output confirms no accessibility errors
</output>
