# Micke-Strell Group Website v1 Plan

## Summary
Build a **multi-page static website** for GitHub Pages using **plain HTML, CSS, and light JavaScript**, with the new mockups in `HTML_new_design/` as the primary design reference, the old pages in `HTML_old/` as structure/content reference, and `Resources/` as the main content/image source.

v1 should include:
- A polished **homepage**
- A dedicated **People** page
- A dedicated **About / Contact** page
- Two research detail pages: **Breast Cancer** and **Lung Cancer**
- Shared navigation/footer and a responsive mobile menu
- Mostly real text and images, with placeholders only where source material is missing

## Key Changes
### Architecture and routing
- Keep the site fully static and GitHub Pages-friendly: no framework, no build step, no CMS.
- Use a **multi-page folder structure** with relative links so the site works whether GitHub serves it as a root page or a project page.
- Standardize the information architecture to:
  - `Home`
  - `Research` overview on the homepage
  - `Breast Cancer` detail page
  - `Lung Cancer` detail page
  - `People`
  - `About / Contact`
- Use one shared visual system across all pages: same typography, color tokens, spacing scale, buttons, cards, section headers, and image treatments.

### Design system and implementation approach
- Rebuild the new mockups into maintainable hand-written HTML/CSS instead of shipping the exported Tailwind CDN prototypes directly.
- Convert the visual language from `HTML_new_design/` into reusable CSS tokens:
  - Jost for headings, Instrument Sans for body
  - Off-white background, black structural borders, muted earth-tone accents
  - Large editorial headings, pill buttons, sharp card shadows, wide desktop spacing
- Implement a small shared JS layer only for:
  - mobile navigation toggle
  - active nav state
  - optional small interactions like scroll locking for the mobile menu
- Store all production images locally under `assets/images/`; do not rely on remote mockup image URLs.

### Content mapping
- Use `HTML_new_design/` as the **layout reference** and `HTML_old/` plus `Resources/` as the **content source of truth**.
- Populate v1 content in this order:
  - **Homepage:** lab identity, research summary, focus areas, selected publications, quick people preview, contact CTA
  - **People:** Patrick Micke, Carina Strell, then other members from available images/docs
  - **About / Contact:** lab description, collaboration framing, institution/location/contact details that can be verified from existing materials
  - **Research pages:** adapt the old breast/lung track content into the new card/editorial layout
- Use “featured publications” rather than a fully exhaustive publications archive in v1.
- If a bio, email, or exact role is missing, leave a clearly styled temporary placeholder rather than inventing content.

### Content and asset preparation
- Review the Word docs in `Resources/` and extract:
  - front-page copy
  - group/member bios
  - PI/co-PI text
  - any research-track summaries
- Curate and rename images into predictable asset names for people, logos, and research visuals.
- Reserve a section for high-value figures from `Resources/` where they strengthen a research page, but avoid overloading pages with too many scientific images in v1.
- Keep the old HTML files in the repo as reference material, but do not build the new site by patching their generated WordPress/Uppsala HTML.

## Test Plan
- Verify each page on desktop and mobile widths against the new design direction.
- Confirm all internal links, nav items, and CTA buttons work with relative paths.
- Confirm all local images load and no page depends on external mockup image URLs.
- Check semantic/accessibility basics:
  - one `h1` per page
  - descriptive `alt` text
  - keyboard-accessible menu and links
  - visible focus states
- Validate GitHub Pages readiness:
  - static files only
  - no broken asset paths
  - no framework-specific deployment assumptions

## Assumptions and defaults
- v1 uses **static HTML/CSS/JS** only.
- v1 is **multi-page**, matching the direction implied by your new homepage + subpage mockups.
- v1 uses **mostly real content** from `Resources/` and `HTML_old/`, with placeholders only for gaps.
- Publications are shown as a curated list in v1, not an automated live feed.
- Links and assets should be written with **relative paths** so deployment works whether this repo ends up as a root Pages site or a project-style Pages site.
- No dark mode, CMS, search, blog system, or publication database in v1 unless added in a later phase.
