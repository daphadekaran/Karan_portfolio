# Architecture Decision Records (ADR) - Soil & Signal

## ADR-001: Tech Stack Selection
- **Status:** Accepted
- **Context:** The site requires high performance (Lighthouse 90+ on mobile), fluid scroll storytelling, 3D WebGL field map, and zero-cost hosting.
- **Decision:** Next.js 16 with `output: 'export'`, React 19, TypeScript strict mode, Tailwind CSS v4, Lenis for smooth scroll, GSAP 3 + ScrollTrigger for pinned horizontal sections and complex SVG path animation, Motion for interactive micro-components, Three.js / React Three Fiber for the living 3D field map, and Web3Forms for serverless contact delivery.

## ADR-002: Design Tokens & Anti-Generic Palette
- **Status:** Accepted
- **Context:** Avoiding AI-generic blue/purple aesthetics and standard template cards.
- **Decision:** Dark-only theme based on soil black (`#0A0908`), cotton cream (`#F4EFE5`), vibrant marigold (`#FFB020`), digital signal teal (`#3EE0C3`), and vermilion (`#FF5A36`). Incorporate 4% global SVG noise grain overlay and liquid-glass navigation.

## ADR-003: Privacy & Redaction Policy
- **Status:** Accepted
- **Context:** Materra cluster data is private agronomic data; personal phone numbers must be protected.
- **Decision:** All metrics and case studies use confirmed public totals (140+ farms, 1,000+ visits, 100+ farmers, 36 states scraped). All phone numbers are barred from the site and resume PDF. A post-build script fails the build if private phone digits are detected. Public images have EXIF/GPS metadata removed.

## ADR-004: Materra AI Activation Reel
- **Status:** Accepted
- **Context:** User provided 5 authentic photos from Wardha & Jalna field sessions + personal portrait (`portrait.jpeg`).
- **Decision:** Build an interactive "Field Telemetry & Activation Reel" featuring a dual-lens reveal (monochrome grain -> scanned teal beam -> full color), monospace GPS telemetry overlays (`20.7453° N, 78.6022° E`), audio wave indicators for WhatsApp Marathi queries, and a 3D perspective card stack.

## ADR-005: eatmit Branding & Product Lab
- **Status:** Accepted
- **Context:** Karan is the founder of eatmit POS SaaS and provided `eatmit_logo_app.svg` and `eatmit_logo.png`.
- **Decision:** Use official SVG branding within the Product Lab. Tag modules with status badges (*In Progress* vs *Planned*). Purely client-side state machine using synthesized data with zero network calls.

## ADR-006: Contact Form Guarantee
- **Status:** Confirmed by Karan (3 Nov 2026)
- **Decision:** Contact form success message guarantees a response within 24 hours ("Got it. I reply within 24 hours").

## ADR-007: GitHub Profile Link
- **Status:** Confirmed by Karan (3 Nov 2026)
- **Decision:** Link portfolio GitHub buttons to `https://github.com/daphadekaran/Karan_portfolio.git` / `https://github.com/daphadekaran`.

