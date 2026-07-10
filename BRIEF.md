# Final Website Brief: Wisdom Wealth International School (WWIS)

**Updated:** 2026-06-11  
**Project:** Wisdom Wealth International School (WWIS), Trichy  
**Existing site:** https://wwistrichy.com/  
**Deployment target:** Vercel  
**Primary audience:** Parents exploring admissions from Pre-KG through higher grades

## Approved Direction

Build a premium, modern, professional, parent-friendly, mobile-responsive website for Wisdom Wealth International School. The site must preserve the existing WWIS identity, content structure, school colors, logo usage, and core messaging from the current website while improving clarity, trust, SEO, accessibility, AI discoverability, and admissions conversion.

The first release must include a real chatbot UI, not only chatbot-ready data. The chatbot should help parents with admissions, programs, curriculum, fee inquiries, transport questions, visit booking requests, callback requests, and escalation to admissions staff through `rootadmin@wwistrichy.com`.

## School Profile

- **Name:** Wisdom Wealth International School
- **Short name:** WWIS
- **Type:** International school
- **Location:** Morais City, near airport, Trichy
- **Address:** 11th Sector, 18th Cross, Morais City, Near Airport, Trichy 620007
- **Phone:** +91 81246 48888
- **Admissions email:** rootadmin@wwistrichy.com
- **Working hours:** Monday-Saturday, 9 AM-5:30 PM
- **Curriculum:** Cambridge CIE curriculum
- **Core promise from current site:** Schools focus on class, WWIS focuses on the individual child.

## Programs

### iPlay

- **Grades:** Pre-KG to Grade 2
- **Current site positioning:** 24 skills, 3 languages, brain development focus
- **Approved outcomes:** Learning through play, social and emotional development, early communication skills
- **Languages:** English, Tamil, Hindi

### iDiscover

- **Grades:** Grade 3 to Grade 7
- **Current site positioning:** 24 projects, 8 professional skills, passion discovery
- **Approved outcomes:** Curiosity-driven learning, problem-solving, exploration, creativity

### iLead

- **Grades:** Grade 8 to Grade 12
- **Current site positioning:** 3 career programs, 5 internships, career launch
- **Approved outcomes:** Leadership skills, collaboration, innovation, future readiness

### Additional Academic Strengths

- Cambridge international standards
- Critical thinking
- Communication skills
- Global citizenship
- Individual Learning Plans for every student

## Admissions Requirements

The admissions journey should be shown as:

1. Inquiry
2. Campus Visit
3. Parent Counseling
4. Student Assessment, if applicable
5. Document Submission
6. Fee Payment
7. Enrollment Confirmation
8. Orientation

Admissions are open from Pre-KG to higher grades based on seat availability. Age criteria should follow school admission policies and be confirmed by the admissions office.

Detailed fees must not be displayed publicly. The site should use a `Request Fee Structure` form and direct parents to the admissions team.

## Facilities

Highlight:

- Smart classrooms
- Science labs
- Computer labs
- Library
- Sports facilities
- Activity rooms
- Transport services
- Medical room
- Auditorium
- Play areas
- Safety and security systems
- CCTV monitoring

## Sports And Clubs

Sports should be presented as a major school strength with structured coaching, inter-school competitions, and student development opportunities.

Clubs and co-curricular activities:

- Robotics
- Coding
- Music
- Dance
- Art
- Chess
- Debate
- Public Speaking
- Entrepreneurship
- Environmental Club
- Community Service

## Parent Resources

Provide clear access to:

- Academic calendar
- Circulars and announcements
- Parent handbook
- Uniform information
- Transport details
- Downloadable forms
- Parent login/app links
- Exam schedules

## Gallery Content

Use real, approved WWIS photos and videos when available:

- Campus
- Classrooms
- Events
- Sports activities
- Laboratories
- Student achievements
- Faculty interactions

The implementation should reserve a clear asset structure for these files. Until approved media is added, the site must avoid presenting generic stock images as official WWIS photography.

## Branding And UX

Use the existing WWIS branding, school colors, current website content structure, and visual identity from current brochures and website assets. The visual tone should be:

- Premium international
- Modern and professional
- Parent-friendly
- Trustworthy and welcoming
- Fast and readable on mobile

## SEO, Accessibility, And AI Requirements

- Semantic HTML with accessible landmarks and headings
- Mobile-first responsive layouts
- Descriptive metadata for all key pages
- JSON-LD for EducationalOrganization, WebSite, FAQPage, Service, BreadcrumbList, and ContactPoint where relevant
- `robots.txt` allowing AI crawlers
- `llms.txt` summarizing WWIS for AI systems
- `openapi.json` describing public program, pricing guidance, hours, and inquiry endpoints
- Agent discovery files under `/.well-known/`
- Content negotiation for AI user agents and JSON requests where supported
- Chatbot UI with admissions-focused knowledge and lead-capture guidance

## Approved First Release

The first release should include:

- Home
- About
- Programs
- Admissions
- Facilities
- Sports and Clubs
- Parent Resources
- Gallery
- Contact
- Chatbot UI on all pages
- SEO and AI-agent files
- Vercel deployment configuration
- Deployment instructions
