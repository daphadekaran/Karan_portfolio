# Karan Daphade - Portfolio Website PRD

_Codename: Soil & Signal. Version 1.1, 3 Nov 2026. Give this whole file to Antigravity as `/docs/PRD.md`. Items marked **\[CONFIRM\]** are assumptions Karan must confirm before they are built._

## 0. How to use this PRD

1. Create an empty Git repo, add this file as `/docs/PRD.md`.
2. Install the skills in Section 11 (workspace scope, `.agent/skills/`).
3. Paste Prompt 0 from Section 13. The agent must write an implementation plan and **stop for approval** before any code.
4. Build phase by phase. After each phase the agent must run the app, test it, and report real pass/fail, not just 'it compiles'.
5. Deploy free (Section 12). The site is a static export, so it runs on any free host.

## 1. Product vision

**One line:** a portfolio that feels like a signal travelling from a cotton field to a data system, built by someone who actually ships both.

**Hero headline:** _I turn field chaos into data systems._

**Who it is for**

| Persona                                                                                                  | What they do on the site                             | What they must feel                  |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------ |
| Recruiter / hiring manager (Germany and EU, entry-level Data Analyst, Data Engineer, Junior AI Engineer) | Scan for 30-60 s, open 1-2 projects, download resume | 'Real impact, real tools, memorable' |
| Startup founder / CTO                                                                                    | Read a case study, open a live demo                  | 'Builds end to end, learns fast'     |
| Freelance client                                                                                         | Look at product design and apps, contact             | 'Can deliver and communicate'        |

**Goals:** (G1) memorable in 10 seconds; (G2) the site itself proves engineering taste (live apps, pipeline diagrams, performance); (G3) contact in 2 clicks, messages land in karandaphade001@gmail.com.

**Non-goals:** blog, CMS, login, e-commerce, multi-language in v1.

**Success metrics:** Lighthouse mobile Performance 90+, Accessibility 95+; LCP under 2.5 s; CLS under 0.1; a visitor reaches 'Work' in under 10 s; contact form works end to end on production.

## 2. Creative concept: Soil & Signal

Karan comes from a farming family, then built data systems on regenerative cotton farms. The scroll is the data journey: **raw -> clean -> insight -> product**. The page starts warm and organic (soil black, grain, marigold) and ends crisp and digital (grid, mono type, teal signal).

**Recurring motifs:** a scanning signal line, field polygons (like the KML farm boundaries he QA-checked), hairline rules, mono section numbers such as `02 / Work`.

**Five signature moments (must be excellent):**

1. **Boot preloader** - a terminal mounting `/field`, counting farms.
2. **Hero** - living 3D field map plus canvas-text on the key phrase.
3. **Work rail** - pinned horizontal case-study scroll with glowing rims.
4. **Stack as pipeline** - an animated Source -> Transform -> Store -> Serve diagram.
5. **Contact** - huge 'Let's build' canvas-text and a magnetic submit button.

**Anti-generic rules (hard bans):** no purple/blue gradient hero, no Inter/Roboto/Arial, no centred-everything layout, no three-equal-cards feature row, no emoji icons, no stock illustrations, no tech-logo cloud, no skill percentage bars, no 'Hi, I'm Karan' opener, no template-looking footer. Prefer asymmetry, oversized type, editorial italics, grain, hairlines.

## 3. Design system (tokens first; never hard-code colours in components)

**Dark-first, dark-only in v1.**

| Token             | Hex       | Use                                   |
| ----------------- | --------- | ------------------------------------- |
| `--soil-950`      | `#0A0908` | Page background                       |
| `--soil-900`      | `#12100D` | Surfaces, cards                       |
| `--soil-700`      | `#2A251E` | Hairlines, borders                    |
| `--cotton-50`     | `#F4EFE5` | Primary text                          |
| `--cotton-400`    | `#A39B8B` | Muted text                            |
| `--marigold-500`  | `#FFB020` | Primary accent, CTA, glow start       |
| `--vermilion-500` | `#FF5A36` | Hot accent, hover, errors (sparingly) |
| `--signal-400`    | `#3EE0C3` | Digital/data accent, live indicators  |

**Why this palette:** marigold is the India-rooted warm colour (rang desi), soil/cotton ground the agritech story, teal is the 'live data' signal. It avoids the default blue/purple look of AI-generated sites. Glow gradient = marigold -> vermilion -> signal.

**Typography (all free, via `next/font/google`):** Display `Bricolage Grotesque` (variable); editorial accent `Instrument Serif` italic; mono `JetBrains Mono`. Hero size `clamp(3rem, 9vw, 9rem)`, tracking -0.04em. Body 16-18 px.

**Surfaces:** liquid glass (Section 4) for nav, tags, nodes, palette; glowing rim for cards; 4% SVG grain overlay on the whole page; custom cursor (small ring, grows on interactive elements, hidden on touch).

**Motion language:** easing `cubic-bezier(0.16, 1, 0.3, 1)` everywhere; durations 0.4-0.9 s; text reveals by line (SplitText) with stagger 0.04-0.08; nothing bounces; everything respects `prefers-reduced-motion`.

## 4. Aceternity UI components (copy exactly, then theme through tokens only)

Install: `motion clsx tailwind-merge lucide-react`. One `cn()` helper at `@/lib/utils`. Per Aceternity's own instructions: copy the source as-is, only fix import paths and colours, and **report every deviation**.

| Component               | Where                                                                                     | Settings                                                                                                                          | Known gotchas (agent must handle)                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Canvas Text**         | Hero phrase `data systems`; contact `build`                                               | `backgroundClassName` = marigold fill, `colors` = 10 rgba steps of marigold/vermilion/signal, `lineGap` 4, `animationDuration` 20 | Runs its own `requestAnimationFrame` loop per instance: max **2 on screen**, mount only when visible (IntersectionObserver). It reads the parent's computed font, so mount after `document.fonts.ready`. Keep real text in an `sr-only` span; the canvas has aria-label only.                                                                                                          |
| **Container Text Flip** | Hero eyebrow role switcher: `Data Engineer`, `Product Builder`, `AI Automator`, `Founder` | `interval` 2600                                                                                                                   | Source imports `cn` from `@/utils/cn` while the others use `@/lib/utils`: unify. Source has **no reduced-motion branch**: add one (static first word, no interval).                                                                                                                                                                                                                    |
| **Aurora Background**   | Hero and contact backdrops                                                                | Recolour the `--blue-*`, `--indigo-300`, `--violet-200` vars to marigold/vermilion/signal at low opacity so it reads as heat haze | Root is a `<main>` with `h-[100vh]`: change to `<div>` (only one `<main>` per page) and pass height by className. Heavy `will-change`: use on 2 sections only, static gradient on mobile.                                                                                                                                                                                              |
| **Glowing Effect**      | Case-study cards, form panel, glass panels                                                | `spread` 40, `proximity` 64, `inactiveZone` 0.01, `glow`, `disabled={false}`                                                      | Default is `disabled = true`: the glow will not show unless you pass `disabled={false}`. Replace the pink/yellow/green conic colours with the palette. Needs a `relative` rounded parent. Each instance adds a body `pointermove` listener: max \~12 instances, disabled on touch.                                                                                                     |
| **Liquid Glass**        | Nav pill, pipeline nodes, tags, command palette                                           | n/a                                                                                                                               | Source was not supplied. Agent should try `npx shadcn@latest add @aceternity/liquid-glass-demo` (name follows the pattern of the other components, verify), else read https://ui.aceternity.com/components/liquid-glass. Fallback build: SVG `feTurbulence` + `feDisplacementMap` inside `backdrop-filter` (works in Chromium only) and `blur(16px) saturate(1.4)` for Safari/Firefox. |

If the project has `components.json`, use `npx shadcn@latest add @aceternity/<name>-demo`; otherwise build by hand from the source.

## 5. 3D and WebGL

**Hero: Living Field Map** (React Three Fiber). A terrain of instanced points (about 120 x 120) with noise displacement and 6-8 synthetic field polygons drawn as thin marigold outlines (like farm boundaries). A teal scanner line sweeps across; the cursor ripples the points; on scroll, the camera tilts and scattered points snap into a clean grid (raw -> clean).

**Budgets:** under 60k vertices, DPR capped at 1.5, pause when off-screen, dynamic-import **after** the headline paints. **Fallback** (mobile low-power, no WebGL, reduced motion): a pre-rendered WebP poster with a CSS scan-line.

**Optional P2:** a soft floating cotton boll in the contact section.

**Libs:** `three`, `@react-three/fiber`, `@react-three/drei`; light bloom only if the budget allows.

## 6. Page specification

**Global:** fixed liquid-glass nav pill (Work, Stack, Journey, Contact, Resume, Command palette with Ctrl/Cmd+K); smooth scroll (Lenis); section numbers in mono; scroll progress hairline in marigold; magnetic buttons.

| #   | Section           | Content                                                                                                                                        | Animation                                                                              | Components                                   | Done when                            |
| --- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------ |
| 0   | Preloader         | Terminal lines: `> mounting /field`, `> 140 farms ... ok`, `> 1,000 visits ... ok`, progress counter                                           | 2.2 s max, clip-path wipe exit, skipped on repeat visit (sessionStorage)               | Custom                                       | Never blocks LCP; skippable          |
| 1   | Hero              | Eyebrow role flip, headline with canvas-text, 1-line intro, 2 CTAs (View work, Contact), open-to-relocate badge with pulsing signal dot        | SplitText line reveal, 3D map reacts to cursor                                         | Aurora, Container Text Flip, Canvas Text, 3D | Headline readable before 3D loads    |
| 2   | Proof strip       | `140+ farms`, `1,000+ field visits`, `4-5 h/day automated`, `100+ farmers onboarded`, `36 states scraped`, `5,000+ records`                    | Count-up on enter, marquee of mono tags                                                | Liquid Glass tags                            | Numbers match Section 7              |
| 3   | Work rail         | 6 featured projects as large cards                                                                                                             | Section pins, cards scroll horizontally (GSAP ScrollTrigger), parallax on previews     | Glowing Effect                               | Mobile degrades to vertical stack    |
| 4   | Stack as pipeline | Source (QField, APIs, scrapers) -> Transform (Python, Pandas, SQL) -> Store (PostgreSQL, Supabase) -> Serve (Streamlit, AppSheet, WhatsApp AI) | SVG path draws, particles flow along it, nodes light up on hover with the tools inside | Liquid Glass nodes                           | Reads as a diagram, not a logo cloud |
| 5   | Journey           | portrait photo of Karan; BCA 2024 (BAMU); Freelance Product/UI-UX Designer 2022-present; Materra internship Jul 2025-Feb 2026                  | Vertical SVG path drawn by scroll; each stop reveals                                   | GSAP DrawSVG, ScrollTrigger                  | Dates match resume                   |
| 6   | Also building     | Founder projects: **eatmit (restaurant POS SaaS, features in Section 7)**, product design work                                                 | Hover tilt cards                                                                       | Glowing Effect                               | No private/NDA detail                |
| 7   | Contact           | Giant 'Let's build' (canvas-text), form, copy-email button, LinkedIn, GitHub **\[CONFIRM URL\]**, resume PDF                                   | Magnetic submit, success burst in marigold                                             | Aurora, Canvas Text, Glowing Effect          | Real email arrives (Section 8)       |
| 8   | Footer            | Live IST clock, 'Based in Jalna, open to relocate.', back to top                                                                               | Marquee                                                                                | none                                         | No dead links                        |

**Case-study pages `/work/[slug]`** (one per project): Problem -> Field reality -> System diagram -> What I built -> Impact (numbers only from Section 7) -> Live demo button -> Next project. Shared-element transition from the rail card (GSAP Flip or View Transitions API).

**Command palette (Ctrl/Cmd+K):** jump to sections and projects, copy email, open resume. Cheap, memorable, and shows engineering taste.

**Portrait photo:** Karan supplies one portrait later (4:5, at least 2000 px tall, plain background) as `/public/karan-portrait.jpg`; until then the agent builds the slot with a placeholder. Treatment: grayscale-to-colour reveal on hover, thin marigold rim (Glowing Effect), subtle grain; used in the Journey section and in the Open Graph image, with descriptive alt text.

**Resume download:** a PDF made for the portfolio audience (recruiters, founders, clients), saved as `/public/Karan_Daphade_Resume.pdf`, with **no phone number**; links inside stay clickable. Buttons: nav, hero secondary link, contact section and footer; use the `download` attribute and count clicks.

## 7. Content truth table (use only these facts; nothing invented)

**Identity:** Karan Datta Daphade; BCA, BAMU (2024); Jalna, Maharashtra, India 431203; open to relocating; email karandaphade001@gmail.com; LinkedIn https://www.linkedin.com/in/karan-daphade-a960a8356/.

**Live apps (keep these links working):** QField Dashboard https://qfielddashboard-8vewexpkcu6m8cv4rsqqmk.streamlit.app/ ; GDD Application https://cotton-gdd-dashboard-r3jvzjfdsatsxwurmlm6v8.streamlit.app/Grid\_Map ; Farmer AI Chatbot https://xwntzcdpspyye8j8bucczd.streamlit.app/

**Projects**

| Slug                   | Facts allowed                                                                                                                                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `qfield-pipeline`      | Automated daily merge, clean, standardise of QField survey data in Python (Pandas); replaced 4-5 h of manual reporting per day; 140+ farms, 1,000+ field visits; clean GeoJSON/CSV for DSSAT and ML                                                             |
| `gdd-crop-model`       | CLI-only Growing Degree Days model turned into multi-page Streamlit app; daily Open-Meteo ingestion with gap detection into PostgreSQL; 11 x 11 km grid clustering to cut API calls; predictions for 10 cotton phenophases; used daily by agronomy and ML teams |
| `kml-qa-tool`          | Python pipeline, UTM projection, finds overlapping farms and wrong areas; colour-coded KML for field corrections; Google Drive API I/O; v0.1 to v0.4; unblocked regenerative certification audits                                                               |
| `farmer-ai-advisory`   | 15-day WhatsApp AI activation in Wardha and Jalna; 100+ farmers onboarded in 3 sessions; APMC mandi scraper (agmarknet.gov.in, 36 states, 5,000+ records on active days) feeding daily prices                                                                   |
| `procurement-appsheet` | Cotton procurement workflow redesigned end to end in Google AppSheet: deal creation, gin arrival tracking, bale traceability, payments; separate version for IDH procurement operations                                                                         |
| `field-dashboard`      | Streamlit dashboard so management tracks each Field Executive's progress daily                                                                                                                                                                                  |

**eatmit, restaurant POS SaaS (public name, slug `eatmit-pos`).** Show features and visuals only, never real customer or company data. Features to showcase:

- Payment gateway and EDC machine integration; free UPI deeplink payments
- KDS view and interactive panel; live order dashboard
- Promo code generation and campaign management; WhatsApp integration
- Bill PDF download or link share (link valid 30 days)
- Merge table, waiting-list management, assign table to waiter
- Customisable menu with day-wise and time-wise control; Zomato and Swiggy integration
- Printer management

On the site, tag each feature as Live, In progress or Planned **\[CONFIRM status with Karan\]**; never present a planned feature as live.

### eatmit Product Lab (signature moment 6)

The eatmit card does not just describe the product: it opens a hands-on mini-console where visitors try it with **synthetic data**. It sits at the end of the Work rail and on `/work/eatmit-pos`.

| Module            | What the visitor can do                                                                                                                     | Feature it proves                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Live orders + KDS | Orders arrive every 3-5 s from a scripted generator; drag a ticket New -> Preparing -> Ready; timers turn marigold then vermilion when late | KDS view and interactive panel, live order dashboard             |
| Floor and tables  | Click two tables to merge them, click again to split; pick a waiter from a dropdown to assign a table                                       | Merge table, assign table to waiter                              |
| Waiting list      | Customer tokens (A-12, A-13) appear; drag a token onto a free table; a phone-frame mock shows the customer's live status                    | Waiting-list management                                          |
| Menu scheduler    | Pick day of week and drag a time slider; items switch on and off and the menu preview updates                                               | Customisable menu, day-wise and time-wise control                |
| Promo lab         | Build a promo (percent or flat, minimum bill, dates); a code is generated; a campaign card and a WhatsApp-style message preview appear      | Promo code generation, campaign management, WhatsApp integration |
| Payments          | Three tabs: UPI deeplink (fake QR with countdown), card on an animated EDC terminal, gateway pay-link                                       | Payment gateway, EDC machine, free UPI deeplink                  |
| Bill              | Generate a sample bill; Download PDF (made in the browser from fake data) and Share link with a visible 30-day validity countdown           | Bill PDF download or link share (valid 30 days)                  |
| Channels          | Some incoming orders carry a Zomato or Swiggy text tag in the live dashboard                                                                | Zomato and Swiggy integration                                    |
| Printers          | Route a sample KOT to a kitchen printer and a bill to a counter printer; test-print animation                                               | Printer management                                               |

**Rules for the Lab**

1. All data is invented and lives in `/content/eatmit-demo-data.ts`; state in `useReducer`; **no network calls**.
2. No real UPI IDs, phone numbers, restaurant names or customer names. A permanent 'Demo - sample data' ribbon is visible.
3. Each module carries a status badge (Live / In progress / Planned) from Section 15; planned features are never shown as working product.
4. Zomato, Swiggy and payment providers appear as plain text chips, never logos (trademarks).
5. Inside the Lab use eatmit's own brand (its logo and saffron/black-and-white look) as a contained 'brand island' so it reads as a real product, then return to the portfolio tokens outside it **\[CONFIRM final eatmit assets\]**.
6. Mobile: the Lab becomes a guided three-step slideshow; reduced motion shows static screens.
7. Build order: Live orders + KDS, Floor and tables, Menu scheduler first (P3); the rest in P4.

**Confidentiality (confirmed):** Materra data is company data. The site may show visuals (UI screenshots with blurred or synthetic data, diagrams, mock-ups) and describe what Karan built, but must never show or share real company data.

**Redaction checklist (the agent applies it to every screenshot, video and demo, and Karan signs off in P6):**

- [x] Names, numbers, IDs, phone numbers and addresses are invented, never copied from Materra, eatmit customers or any client.
- [x] The hero field map uses generated polygons, not real KML boundaries, farm names or coordinates.
- [x] No internal URLs, API keys, database names, table names or Drive links appear in any image, code sample or architecture diagram.
- [x] Before linking the three live Streamlit apps, Karan confirms they show no real company data **\[CONFIRM\]**; if they do, link screenshots with synthetic data instead.
- [x] Streamlit community apps can go to sleep: the card says 'may take about 30 seconds to wake' and shows a screenshot fallback; no iframes.
- [x] Aggregate impact numbers (140+ farms, 4-5 h per day, 100+ farmers) are cleared as shareable **\[CONFIRM\]**.
- [x] Images are stripped of EXIF/GPS metadata; screen recordings hide browser tabs, bookmarks and notifications.
- [x] The phone number never appears in the site build, the resume PDF or its metadata (Karan gives the agent the digits privately; a build step fails if they are found in `/out`).

## 8. Contact system (free, lands in Gmail)

- Fields: name, email, 'I am hiring for' (Full-time role / Internship / Freelance project / Just saying hi), message.
- Validation with `zod` + `react-hook-form`; honeypot field; hCaptcha if spam appears.
- Delivery: **Web3Forms** (free plan listed at 250 submissions/month as of Sept 2026, verify). Karan generates an access key with karandaphade001@gmail.com on web3forms.com; the key goes in `NEXT_PUBLIC_WEB3FORMS_KEY`. Works with a static export, no server needed.
- States: idle, sending (button morphs), success (marigold burst, 'Got it. I reply within 48 h' **\[CONFIRM promise\]**), error (message plus `mailto:` fallback).
- Phone number is **never** shown on the site or in the resume PDF (confirmed).

## 9. Tech stack and architecture

Next.js 16 App Router with `output: 'export'`, TypeScript strict, Tailwind CSS v4, shadcn, `motion` (component micro-interactions), `gsap` + `@gsap/react` (ScrollTrigger, SplitText, DrawSVG, Flip; GSAP and all plugins are free), `lenis`, `three` + R3F + drei, `react-hook-form` + `zod`, `next/font`. Content lives in typed files under `/content` (no CMS).

**Rule:** GSAP owns scroll-linked choreography; Motion owns component state. Never animate the same element with both. Sync Lenis with ScrollTrigger. Always clean up with `useGSAP` / `gsap.context()`.

```
/docs  PRD.md  DECISIONS.md  CHANGELOG.md
/app   layout.tsx  page.tsx  work/[slug]/page.tsx
/components  ui/ (aceternity)  sections/  three/  motion/
/content     projects.ts  journey.ts  stats.ts
/lib         utils.ts  tokens.ts
/public      resume.pdf  og.png
```

## 10. Quality budgets

| Area          | Requirement                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Performance   | Mobile Lighthouse 90+; LCP < 2.5 s; CLS < 0.1; JS first load < 200 kB gzip excluding the lazy 3D chunk; images AVIF/WebP |
| Motion safety | `prefers-reduced-motion`: no canvas loops, no parallax, no 3D, no preloader; static equivalents                          |
| Accessibility | WCAG AA contrast, keyboard reachable, visible focus ring in marigold, real headings, aria-labels on canvases, skip link  |
| SEO           | Metadata, OG image, JSON-LD `Person`, sitemap, robots                                                                    |
| Devices       | Test 360 px, 768 px, 1440 px; touch disables cursor, glow listeners and heavy 3D                                         |
| Browsers      | Latest Chrome, Safari, Firefox; liquid-glass fallback outside Chromium                                                   |

## 11. Skills and repos to install (Antigravity workspace scope)

Antigravity reads skills from `.agent/skills/<name>/SKILL.md` (project) or `~/.gemini/antigravity/skills/` (global); workspace skills win. **Install only these**, not the 1,000+ skill bundles (reported 10-15 minute first-load slowdowns). **Read each SKILL.md and any scripts before installing** (skills can run code).

| Purpose                                                                   | Repo                                         | Command                                                                                                  |
| ------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Anti-generic UI, critique, polish, typography (flagship)                  | `pbakaus/impeccable`                         | `npx skills add https://github.com/pbakaus/impeccable --skill impeccable`                                |
| Design catalogue: styles, palettes, font pairings                         | `nextlevelbuilder/ui-ux-pro-max-skill` (MIT) | `npm install -g ui-ux-pro-max-cli` then `uipro init --ai <agent>` (check `uipro --help` for Antigravity) |
| Taste / anti-slop variants (soft, minimalist, brutalist)                  | `Leonxlnx/taste-skill`                       | `git clone https://github.com/Leonxlnx/taste-skill` and copy the skill folders into `.agent/skills/`     |
| Official animation skills (core, timeline, ScrollTrigger, plugins, React) | `greensock/gsap-skills`                      | `npx skills add https://github.com/greensock/gsap-skills --agent antigravity`                            |
| Three.js fundamentals                                                     | `CloudAI-X/threejs-skills`                   | `npx skills add CloudAI-X/threejs-skills --skill threejs-fundamentals`                                   |
| Frontend design (Anthropic)                                               | `anthropics/skills`                          | `npx skills add anthropics/skills --skill frontend-design`                                               |
| React Three Fiber                                                         | search skills.sh for `react-three-fiber`     | pick the most-installed, review first                                                                    |

**Inspiration only (do not copy wholesale):** ui.aceternity.com, magicui.design, 21st.dev, reactbits.dev, motion-primitives.com, tympanus.net/codrops (WebGL tutorials), Awwwards, Godly. Check each component's licence before using code.

**Repo rules for the agent (put in `AGENTS.md`, mirrors Karan's standard footer):**

1. Read `/docs/PRD.md` and `DECISIONS.md` first; stay in scope.
2. **Planning gate:** for every phase write an implementation plan and wait for approval.
3. **Testing gate:** run the app, open it in a browser at 360/768/1440 px, report real pass/fail, check the console, run Lighthouse.
4. Tokens only: no hard-coded colours; typography from the scale.
5. Every animation has a reduced-motion branch and cleanup on unmount.
6. Update `DECISIONS.md` and `CHANGELOG.md` after each phase; small commits.
7. List every deviation from the Aceternity source.

## 12. Deploy for free

1. Push the repo to GitHub.
2. **Vercel (recommended, free Hobby plan):** Import the repo, add `NEXT_PUBLIC_WEB3FORMS_KEY`, deploy. You get `your-name.vercel.app` and a preview URL for every push. Note: Hobby is meant for personal, non-commercial use; if you take paid freelance work through the site, check Vercel's current terms or use the alternative.
3. **Alternative: Cloudflare Pages** (static, free): build command `npm run build`, output directory `out`. **Alternative: GitHub Pages** (needs `basePath` unless it is a `username.github.io` repo).
4. Custom domain is optional and not free (a .dev/.me domain costs roughly $10-15/year); the free subdomain is fine for job applications.
5. Free analytics: Vercel Analytics or Cloudflare Web Analytics.
6. After deploy: submit the contact form once, open all live-app links, run Lighthouse on mobile, add the URL to resume, LinkedIn and GitHub.

## 13. Build phases and Prompt 0

| Phase | Scope                                                                            | Definition of done                                            |
| ----- | -------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| P0    | Plan: read PRD, install skills, propose structure, list risks                    | Plan approved by Karan                                        |
| P1    | Foundation: Next 16, Tailwind v4, tokens, fonts, grain, Lenis, cursor, nav shell | Empty page already looks on-brand; Lighthouse 95+             |
| P2    | Preloader, Hero (Aurora, Canvas Text, Text Flip), 3D field map with fallback     | Section 6 rows 0-1 pass; 60 fps desktop                       |
| P3    | Proof strip, Work rail, 6 case-study pages                                       | Rail pins on desktop, stacks on mobile; facts match Section 7 |
| P4    | Pipeline, Journey, Also building                                                 | Diagram animates; dates correct                               |
| P5    | Contact (live email), footer, command palette, SEO, OG image                     | Real email received in Gmail                                  |
| P6    | Polish and audit with Impeccable (`audit`, `polish`), a11y, perf, deploy         | All budgets in Section 10 met                                 |

**Additions to the phases (v1.1):**

- **P1:** `images.unoptimized: true` plus a build-time image script; `generateStaticParams` for `/work/[slug]`; `.env.example`; grep-for-phone build check; `GITHUB_URL` config (link hidden until set).
- **P2:** portrait slot with placeholder; 'Reduce motion' toggle in the footer; automatic quality downgrade when frame rate drops (Section 16).
- **P3:** eatmit Product Lab, first three modules (Live orders + KDS, Floor and tables, Menu scheduler); status badges.
- **P4:** remaining Lab modules; copy deck in `/content/copy.ts`.
- **P5:** privacy page, cookie-free analytics events, resume PDF wiring, 404 page, OG image.
- **P6:** Playwright smoke tests, axe accessibility run, Lighthouse CI budget, redaction sign-off, link checker.

**Project is done when:** every budget in Section 10 passes on the deployed URL, the contact form delivers to Gmail, the phone number is absent everywhere, all links resolve, and Karan has signed the redaction checklist.

**Prompt 0 (paste into Antigravity):**

> You are building the portfolio website specified in `/docs/PRD.md`. Read it fully. Install only the skills listed in Section 11 (inspect each SKILL.md first). Do NOT write application code yet. Produce an implementation plan for Phase P1 (file tree, dependencies, token setup, risks, and anything in the PRD that is ambiguous) and ask me every question you still have. Stop and wait for my approval. Follow the repo rules in Section 11, and never use the banned generic patterns in Section 2.

## 14. v2 ideas (not in v1)

Cotton Mode light theme; German language toggle (useful for German applications); 'Ask Karan' AI chat using a free LLM API; sound design with mute by default; blog; case-study video loops.

## 15. Decisions and open items

1. Decided: the phone number is never shown, on the site or in the resume.
2. Decided: the GitHub URL comes later; the agent keeps a `GITHUB_URL` config value and hides the link until it is set.
3. Decided: a portrait photo is wanted; Karan supplies it later (spec in Section 6).
4. Decided: the POS public name is eatmit; feature list in Section 7.
5. Decided: visuals and descriptions may be shown, real company data may not.
6. Decided: keep the marigold palette.
7. Decided: a resume PDF for the website is prepared separately (no phone number); replace the file whenever the resume changes.
8. Still open: the contact-form reply promise (24 h or 48 h), the Live / In progress / Planned status of each eatmit feature, and a custom domain if Karan buys one.

## 16. Audit: gaps found in v1.0 and the fix for each

The biggest risks were performance stacking, static-export limits, data safety and overclaiming; each now has an owner phase.

| #   | Gap                                                                                                                                                                             | Fix                                                                                                                                                                                                        | Phase  |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1   | `output: 'export'` does not support the default `next/image` optimiser                                                                                                          | Set `images.unoptimized: true`; pre-generate AVIF/WebP at 3 sizes with a build script (sharp)                                                                                                              | P1     |
| 2   | Static export has no API routes, middleware or server actions; dynamic routes need params                                                                                       | `generateStaticParams` for `/work/[slug]`; OG image as a static file; contact form posts straight to Web3Forms                                                                                             | P1, P5 |
| 3   | A preloader can hurt LCP and SEO if it blocks the HTML                                                                                                                          | Render real HTML first; the preloader is a CSS overlay removed when fonts and hero are ready; 2.2 s cap; skipped on repeat visits and with reduced motion                                                  | P2     |
| 4   | Aurora blur, canvas loops, WebGL and glow listeners all running together can drop frames                                                                                        | Frame budget: one WebGL scene, two Canvas Text, one Aurora in view at a time; pause the rest with IntersectionObserver; if under 45 fps for 2 s, lower DPR, then freeze Aurora, then use the static poster | P2, P6 |
| 5   | Pinned horizontal scroll is awkward on mobile and for keyboard users                                                                                                            | Vertical stack below 1024 px; cards are focusable links; `ScrollTrigger.refresh()` after fonts and images load; test with Lenis on                                                                         | P3     |
| 6   | The Web3Forms access key is public in the browser (by design)                                                                                                                   | Honeypot, hCaptcha if spam appears, domain restriction if the plan offers it, `mailto:` fallback; send a test and check Gmail spam; add the sender to Gmail contacts                                       | P5     |
| 7   | EU visitors: personal data (name, email) is collected                                                                                                                           | Short privacy page (what is collected, processor Web3Forms, retention, contact); cookie-free analytics so no banner; decide whether a German-style Impressum is needed **\[CONFIRM\]** (not legal advice)  | P5     |
| 8   | Zomato, Swiggy and payment-provider logos are trademarks                                                                                                                        | Text chips only, no logos; claim only integrations that exist, others tagged Planned                                                                                                                       | P3     |
| 9   | Overclaiming: features shown as live that are not; the resume's founder line currently says the POS work stopped for funding, while the site presents eatmit as an active build | Status badges on every feature; align the wording on resume and site **\[CONFIRM current status\]**                                                                                                        | P3, P5 |
| 10  | Portrait: GPS metadata, inconsistent crops, weak accessibility                                                                                                                  | Strip EXIF; ship 4:5 and 1:1 crops in AVIF/WebP; descriptive alt text; a separate wide crop for the OG image                                                                                               | P2     |
| 11  | Custom cursor, command palette and canvas text can trap or exclude keyboard and screen-reader users                                                                             | Skip link; marigold focus ring; palette traps focus and closes on Esc; `aria-live` for form status; real text in `sr-only`; footer 'Reduce motion' toggle                                                  | P2, P6 |
| 12  | Generic copy weakens an otherwise original design                                                                                                                               | Copy rules: first person, plain words, one specific number per claim, no 'passionate' or 'synergy'; all copy in `/content/copy.ts` (also makes a later German version easy)                                | P4     |
| 13  | No automated safety net                                                                                                                                                         | Playwright smoke tests (nav, form with a mocked endpoint, no dead links, reduced-motion render), axe-core, Lighthouse CI budget                                                                            | P6     |
| 14  | Dependency drift: Next 16, Tailwind v4, React 19 and R3F must match                                                                                                             | Pin exact versions and commit the lockfile; use an R3F version built for React 19 (v9) and verify on install                                                                                               | P1     |
| 15  | A name-based site needs clear search signals                                                                                                                                    | Title 'Karan Daphade - Data Engineer and Product Builder'; real text in the HTML (not only canvas); JSON-LD `Person` with LinkedIn and GitHub in `sameAs`; sitemap; submit to Google Search Console        | P5     |
| 16  | No way to see what works                                                                                                                                                        | Cookie-free events: `resume_download`, `contact_submit`, `project_open`, `live_demo_click`, `lab_module_used`                                                                                              | P5     |
| 17  | Live Streamlit apps may be asleep when a recruiter clicks                                                                                                                       | Card shows a wake-up note and a screenshot fallback; the Lab (static, synthetic) is the main interactive proof                                                                                             | P3     |

**Repo rules added to `AGENTS.md` (v1.1):**

8. Never render, store or log the phone number; the build fails if its digits appear in `/out`.
9. Apply the redaction checklist (Section 7) to every asset before it is committed.
10. Every eatmit feature shows a status badge; never present Planned as Live.
11. No third-party logos; use text chips.
12. The Product Lab makes no network calls and uses only `/content/eatmit-demo-data.ts`.

**Honest limits of this PRD:** I could not see the Liquid Glass source, so its install name is unverified; Web3Forms limits and prices change, so check them when you sign up; the 3D scene's frame budget must be tested on a mid-range Android phone, not only a laptop.
