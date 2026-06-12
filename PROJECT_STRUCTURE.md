# Project Structure

```text
C:\Voiceteacher
|-- BRIEF.md
|-- CLIENT.md
|-- ROADMAP.md
|-- TASKS.md
|-- DEPLOYMENT.md
|-- PROJECT_STRUCTURE.md
|-- astro.config.mjs
|-- package.json
|-- vercel.json
|-- public
|   |-- robots.txt
|   |-- llms.txt
|   |-- openapi.json
|   |-- .well-known
|   |   |-- agent.json
|   |   |-- agent-card.json
|   |   |-- mcp
|   |-- assets
|   |   |-- README.md
|   |   |-- gallery
|   |   |-- logo
|   |   |-- videos
|-- src
|   |-- components
|   |   |-- Chatbot.astro
|   |   |-- PageHero.astro
|   |   |-- SectionHeader.astro
|   |-- data
|   |   |-- school.ts
|   |-- layouts
|   |   |-- Base.astro
|   |-- pages
|   |   |-- index.astro
|   |   |-- about.astro
|   |   |-- services.astro
|   |   |-- admissions.astro
|   |   |-- facilities.astro
|   |   |-- sports-clubs.astro
|   |   |-- parent-resources.astro
|   |   |-- gallery.astro
|   |   |-- contact.astro
|   |-- middleware.ts
|-- backend
|   |-- Optional FastAPI reference for future Supabase/API deployment
```

## Notes

- The Astro website is the Vercel deployment target.
- The `backend` folder remains as an optional future FastAPI reference and is not required for the first Vercel website launch.
- Approved WWIS images and videos should be added under `public/assets/` using clear filenames before final production launch.
- The chatbot UI in phase 1 uses approved static knowledge and can later be connected to WhatsApp, Supabase, or a CRM.
