---
phase: 01-semantic-foundation
plan: 04
type: execute
wave: 3
depends_on: ["01-semantic-foundation-01", "01-semantic-foundation-02"]
files_modified: [src/pages/programs/iplay.astro, src/pages/programs/idiscover.astro, src/pages/programs/ilead.astro, src/components/ProgramDetail.astro]
autonomous: true
requirements: [SEM-01, SEM-02, SEM-03, SEM-04]

must_haves:
  truths:
    - "All program detail pages use semantic HTML5 elements (header, main, article, nav, footer)"
    - "Full page content present in initial HTTP response (no JS-gated content)"
    - "Heading hierarchy consistent (h1→h6, no skipped levels) on every program page"
    - "All meaningful images have descriptive alt text"
  artifacts:
    - path: "src/pages/programs/iplay.astro"
      provides: "iPlay program detail page"
      contains: "<h1>, <h2>, <article>, <Image>, alt="
    - path: "src/pages/programs/idiscover.astro"
      provides: "iDiscover program detail page"
      contains: "<h1>, <h2>, <article>, <Image>, alt="
    - path: "src/pages/programs/ilead.astro"
      provides: "iLead program detail page"
      contains: "<h1>, <h2>, <article>, <Image>, alt="
    - path: "src/components/ProgramDetail.astro"
      provides: "Reusable program detail section component"
      contains: "<article>, <h1>, <h2>"
  key_links:
    - from: "src/pages/programs/iplay.astro"
      to: "src/layouts/PageLayout.astro"
      via: "component import"
      pattern: "import PageLayout from.*PageLayout"
    - from: "src/pages/programs/iplay.astro"
      to: "src/components/ProgramDetail.astro"
      via: "component import"
      pattern: "import ProgramDetail from.*ProgramDetail"
    - from: "src/components/ProgramDetail.astro"
      to: "astro:assets"
      via: "Image import"
      pattern: "import.*Image.*from.*astro:assets"
---

<objective>
Create individual program detail pages (iPlay, iDiscover, iLead) with consistent semantic structure.

Purpose: Complete SEM-01 through SEM-04 on all three program detail pages using reusable ProgramDetail component.
Output: iplay.astro, idiscover.astro, ilead.astro pages with proper semantic HTML, heading hierarchy, and alt text.
</objective>

<execution_context>
@C:/Users/lenovo/.claude/get-shit-done/workflows/execute-plan.md
@C:/Users/lenovo/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/ROADMAP.md
@.planning/REQUIREMENTS.md
@.planning/phases/01-semantic-foundation/01-PLAN.md
@.planning/phases/01-semantic-foundation/02-PLAN.md
@.planning/phases/01-semantic-foundation/01-RESEARCH.md

<interfaces>
From 01-RESEARCH.md - Semantic Page Structure:
```astro
<section aria-labelledby="programs-heading">
  <h2 id="programs-heading">Our Programs</h2>
  <article>
    <h3>iPlay (Pre-KG to Grade 2)</h3>
    <p>24 Skills, 3 Languages — brain development focus</p>
  </article>
</section>
```

From 01-RESEARCH.md - Astro Image Component:
```astro
import { Image } from 'astro:assets';
<Image 
  src={imageSrc} 
  alt="Descriptive text explaining image content"
  priority
/>
```

From Plan 02 - ProgramCard pattern (similar structure for ProgramDetail):
```astro
<article class="program-detail">
  <Image src={imageSrc} alt={imageAlt} />
  <h2>{programName}</h2>
  <section aria-labelledby="features-heading">
    <h3 id="features-heading">Key Features</h3>
    <ul>...</ul>
  </section>
</article>
```
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create ProgramDetail.astro reusable component</name>
  <files>src/components/ProgramDetail.astro</files>
  <read_first>
    - src/components/ProgramDetail.astro (create if exists)
    - src/programs/ProgramCard.astro (from Plan 02, for consistency)
    - .planning/phases/01-semantic-foundation/01-RESEARCH.md (semantic patterns)
  </read_first>
  <action>
    Create src/components/ProgramDetail.astro:
    ```astro
    ---
    import { Image } from 'astro:assets';
    
    interface Props {
      name: string;
      gradeRange: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      features: string[];
      skills: string[];
      ctaText?: string;
      ctaLink?: string;
    }
    
    const { 
      name, 
      gradeRange, 
      description, 
      imageSrc, 
      imageAlt,
      features,
      skills,
      ctaText = "Learn More",
      ctaLink = "/contact/"
    } = Astro.props;
    ---
    
    <article class="program-detail">
      <Image 
        src={imageSrc} 
        alt={imageAlt}
        width="1200"
        height="600"
        priority
      />
      
      <header>
        <h1>{name}</h1>
        <p class="grade-range">{gradeRange}</p>
        <p class="description">{description}</p>
      </header>
      
      <section aria-labelledby="features-heading">
        <h2 id="features-heading">Key Features</h2>
        <ul>
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </ul>
      </section>
      
      <section aria-labelledby="skills-heading">
        <h2 id="skills-heading">Skills Developed</h2>
        <ul>
          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </section>
      
      <nav class="program-cta">
        <a href={ctaLink} class="cta-button">{ctaText}</a>
      </nav>
    </article>
    ```
  </action>
  <verify>
    <automated>grep -E '<article|<h1>|<h2>|import.*Image.*from.*astro:assets|alt=' src/components/ProgramDetail.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - File uses <article> semantic element
    - File has <h1> for program name, <h2> for sections (features-heading, skills-heading)
    - Image component from astro:assets with alt={imageAlt} prop
    - Props interface includes name, gradeRange, description, imageSrc, imageAlt, features, skills
    - grep returns 6+ matches
  </done>
</task>

<task type="auto">
  <name>Task 2: Create iplay.astro page for Pre-KG to Grade 2 program</name>
  <files>src/pages/programs/iplay.astro</files>
  <read_first>
    - src/pages/programs/iplay.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
    - src/components/ProgramDetail.astro (from Task 1)
  </read_first>
  <action>
    Create src/pages/programs/iplay.astro:
    ```astro
    ---
    import PageLayout from '../../layouts/PageLayout.astro';
    import ProgramDetail from '../../components/ProgramDetail.astro';
    import { Image } from 'astro:assets';
    import iplayHero from '../../assets/iplay-hero.jpg';
    import iplayActivity1 from '../../assets/iplay-activity1.jpg';
    import iplayActivity2 from '../../assets/iplay-activity2.jpg';
    
    const features = [
      "Play-based learning approach",
      "Trilingual exposure (English, Mandarin, Spanish)",
      "Focus on 24 foundational skills",
      "Brain development centered curriculum",
      "Small class sizes (max 15 students)",
      "Daily outdoor play and physical activity"
    ];
    
    const skills = [
      "Language and communication",
      "Social-emotional development",
      "Fine and gross motor skills",
      "Early numeracy concepts",
      "Creative expression",
      "Problem-solving basics"
    ];
    ---
    
    <PageLayout title="iPlay Program - WWIS" description="WWIS iPlay program for Pre-KG to Grade 2: 24 Skills, 3 Languages, brain development focus">
      <main>
        <ProgramDetail 
          name="iPlay"
          gradeRange="Pre-KG to Grade 2"
          description="24 Skills, 3 Languages — brain development focus"
          imageSrc={iplayHero}
          imageAlt="Pre-KG students engaged in colorful play-based learning activity with educational blocks and toys"
          features={features}
          skills={skills}
          ctaText="Schedule a Visit"
          ctaLink="/contact/"
        />
        
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">iPlay in Action</h2>
          <div class="image-gallery">
            <Image 
              src={iplayActivity1} 
              alt="iPlay students building towers with colorful blocks during math lesson"
              width="400"
              height="300"
            />
            <Image 
              src={iplayActivity2} 
              alt="iPlay students practicing language skills through interactive storytelling circle"
              width="400"
              height="300"
            />
          </div>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1>|<h2>|<article|alt=' src/pages/programs/iplay.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Page imports PageLayout and ProgramDetail
    - ProgramDetail receives all required props including descriptive imageAlt
    - Gallery section has <h2> and Images with alt text
    - grep returns 8+ matches (h1 in ProgramDetail, h2s, article, multiple alt texts)
  </done>
</task>

<task type="auto">
  <name>Task 3: Create idiscover.astro page for Grade 3-7 program</name>
  <files>src/pages/programs/idiscover.astro</files>
  <read_first>
    - src/pages/programs/idiscover.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
    - src/components/ProgramDetail.astro (from Task 1)
  </read_first>
  <action>
    Create src/pages/programs/idiscover.astro:
    ```astro
    ---
    import PageLayout from '../../layouts/PageLayout.astro';
    import ProgramDetail from '../../components/ProgramDetail.astro';
    import { Image } from 'astro:assets';
    import idiscoverHero from '../../assets/idiscover-hero.jpg';
    import idiscoverLab from '../../assets/idiscover-lab.jpg';
    import idiscoverProject from '../../assets/idiscover-project.jpg';
    
    const features = [
      "Project-based learning methodology",
      "8 professional skills development",
      "24 hands-on projects per year",
      "Discovery-focused curriculum",
      "STEM integration across subjects",
      "Collaborative learning environment"
    ];
    
    const skills = [
      "Critical thinking and analysis",
      "Scientific inquiry",
      "Written and oral communication",
      "Teamwork and collaboration",
      "Digital literacy",
      "Creative problem-solving"
    ];
    ---
    
    <PageLayout title="iDiscover Program - WWIS" description="WWIS iDiscover program for Grade 3-7: 24 projects, 8 professional skills, passion discovery">
      <main>
        <ProgramDetail 
          name="iDiscover"
          gradeRange="Grade 3 to Grade 7"
          description="24 projects, 8 professional skills — passion discovery"
          imageSrc={idiscoverHero}
          imageAlt="Grade 5 students conducting a water filtration experiment in WWIS science laboratory"
          features={features}
          skills={skills}
          ctaText="Schedule a Visit"
          ctaLink="/contact/"
        />
        
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">iDiscover in Action</h2>
          <div class="image-gallery">
            <Image 
              src={idiscoverLab} 
              alt="Middle school students using microscopes during biology class at WWIS"
              width="400"
              height="300"
            />
            <Image 
              src={idiscoverProject} 
              alt="Students presenting their robotics project to classmates and teachers"
              width="400"
              height="300"
            />
          </div>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1>|<h2>|<article|alt=' src/pages/programs/idiscover.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Page imports PageLayout and ProgramDetail
    - ProgramDetail receives all required props with descriptive imageAlt
    - Gallery section has <h2> and Images with alt text
    - grep returns 8+ matches
  </done>
</task>

<task type="auto">
  <name>Task 4: Create ilead.astro page for Grade 8-12 program</name>
  <files>src/pages/programs/ilead.astro</files>
  <read_first>
    - src/pages/programs/ilead.astro (create if exists)
    - src/layouts/PageLayout.astro (from Plan 01)
    - src/components/ProgramDetail.astro (from Task 1)
  </read_first>
  <action>
    Create src/pages/programs/ilead.astro:
    ```astro
    ---
    import PageLayout from '../../layouts/PageLayout.astro';
    import ProgramDetail from '../../components/ProgramDetail.astro';
    import { Image } from 'astro:assets';
    import ileadHero from '../../assets/ilead-hero.jpg';
    import ileadInternship from '../../assets/ilead-internship.jpg';
    import ileadCapstone from '../../assets/ilead-capstone.jpg';
    
    const features = [
      "3 career pathway programs",
      "5 industry internship partnerships",
      "Capstone project requirement",
      "College and career readiness",
      "Leadership development focus",
      "Real-world work experience"
    ];
    
    const skills = [
      "Professional communication",
      "Project management",
      "Industry-specific technical skills",
      "Leadership and team management",
      "Research and analysis",
      "Entrepreneurial thinking"
    ];
    
    const careerPathways = [
      "Business and Entrepreneurship",
      "Science, Technology, and Innovation",
      "Arts and Media"
    ];
    ---
    
    <PageLayout title="iLead Program - WWIS" description="WWIS iLead program for Grade 8-12: 3 Career programs, 5 Internships, career pathway launch">
      <main>
        <ProgramDetail 
          name="iLead"
          gradeRange="Grade 8 to Grade 12"
          description="3 Career programs, 5 Internships — career pathway launch"
          imageSrc={ileadHero}
          imageAlt="High school students presenting their capstone project to industry mentors and parents at WWIS auditorium"
          features={features}
          skills={skills}
          ctaText="Schedule a Visit"
          ctaLink="/contact/"
        />
        
        <section aria-labelledby="pathways-heading">
          <h2 id="pathways-heading">Career Pathways</h2>
          <ul class="pathway-list">
            {careerPathways.map((pathway) => (
              <li><strong>{pathway}</strong></li>
            ))}
          </ul>
        </section>
        
        <section aria-labelledby="gallery-heading">
          <h2 id="gallery-heading">iLead in Action</h2>
          <div class="image-gallery">
            <Image 
              src={ileadInternship} 
              alt="iLead student working alongside engineer at partner company internship site"
              width="400"
              height="300"
            />
            <Image 
              src={ileadCapstone} 
              alt="Senior students showcasing their year-long capstone project at WWIS innovation fair"
              width="400"
              height="300"
            />
          </div>
        </section>
      </main>
    </PageLayout>
    ```
  </action>
  <verify>
    <automated>grep -E '<h1>|<h2>|<article|alt=' src/pages/programs/ilead.astro | wc -l</automated>
  </verify>
  <done>
    Acceptance criteria:
    - Page imports PageLayout and ProgramDetail
    - ProgramDetail receives all required props with descriptive imageAlt
    - Career Pathways section has <h2>
    - Gallery section has <h2> and Images with alt text
    - grep returns 8+ matches
  </done>
</task>

</tasks>

<verification>
Overall phase checks:
1. All three program pages use semantic HTML5 elements (article, section, header, nav, main)
2. Content fully rendered in initial HTTP response (Astro static generation)
3. Heading hierarchy consistent: h1 (program name) → h2 (sections) → h3 (subsections if any)
4. All images have descriptive alt text (enforced by Astro Image component)
5. ProgramDetail component reused across all three pages
</verification>

<success_criteria>
Measurable completion:
- iplay.astro, idiscover.astro, ilead.astro all exist in src/pages/programs/
- ProgramDetail.astro component created and used consistently
- grep for semantic elements returns matches on all pages
- grep for alt= shows all images have descriptive text
- npm run build completes without errors
- npm run check passes accessibility checks
</success_criteria>

<output>
After completion, create `.planning/phases/01-semantic-foundation/01-semantic-foundation-04-SUMMARY.md` documenting:
- Program pages created (iplay, idiscover, ilead)
- ProgramDetail component created and reused
- Heading hierarchy verified on all pages
- Image alt text verified
- Build output confirms no accessibility errors
</output>
