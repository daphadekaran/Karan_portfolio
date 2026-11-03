# Changelog - Soil & Signal Portfolio

All notable changes across development phases will be logged here.

## [UI Polish & Audit: Silver-Liquid Gradient & Auto-Swipe Theater] - 2026-11-03
### Enhanced
- **Silver-Liquid & Obsidian Gradient Backdrop**: Eliminated flat pitch black; introduced layered radial and linear silver gradients (`#18191E`, `#12141A`, `#0E0F13`) with platinum atmospheric wash (`rgba(200, 215, 235, 0.08)`).
- **Specular Silver Rim Lighting**: Created physical double-border specular rims (`.silver-rim` & `.silver-card`) on cards and interactive elements with 1px top hairline highlights and cursor-following chrome sheen.
- **Auto-Swipe Activation Cinema**:
  - Auto-advancing slide timer (4.5s) with a live silver/signal progress hairline indicator.
  - Interactive pause/play toggle, hover-to-pause, and keyboard arrow navigation (`←`, `→`).
  - Animated signal laser scanline pass and instant HUD telemetry updates per photo.
- **Typography & Specular Foil**: Hero headline updated with silver-to-white metallic text gradient.
- **Reactive Specular Cursor**: Upgraded custom cursor with luminous silver ring casting soft ambient light.
- Passed `npm run build` static export and phone number leak test.

## [P0 & P1: Foundation, Activation Reel & Static Build] - 2026-11-03
### Added
- Git repository initialized and connected to `https://github.com/daphadekaran/Karan_portfolio.git`.
- Setup `/docs/PRD.md`, `/docs/DECISIONS.md`, `/docs/CHANGELOG.md`, and `AGENTS.md`.
- Full Next.js 16 App Router configuration with `output: 'export'` and Tailwind CSS v4 design tokens.
- Design palette initialized: Soil Black (`#0A0908`), Cotton Cream (`#F4EFE5`), Marigold (`#FFB020`), Vermilion (`#FF5A36`), and Signal Teal (`#3EE0C3`).
- 4% SVG noise grain overlay and custom reactive cursor.
- Liquid glass navigation with active section detection and resume download trigger.
- Command Palette (`Ctrl+K` / `⌘K`) for rapid keyboard navigation, email copying, and resume access.
- Terminal boot preloader mounting `/field/jalna-wardha` with session-storage skip.
- Living 3D field map in Three.js / R3F with low-power SVG scanline fallback.
- **Materra AI Wardha & Jalna Activation Reel**:
  - Interactive dual lens (Soil Raw vs Digital Signal HUD).
  - Animated signal laser scanline unmasking vibrant color.
  - Live HUD telemetry: Wardha & Jalna GPS coordinates, active sessions, and animated WhatsApp Marathi voice query waveform.
  - Real-time simulated APMC mandi price ticker across 36 states (`agmarknet.gov.in`).
- 6 detailed case study cards with glowing rims in the Work rail and dynamic static pages (`/work/[slug]`).
- Interactive Stack as Pipeline diagram (Source → Transform → Store → Serve).
- Journey section featuring Karan's portrait (`karan-portrait.jpg`) with grayscale-to-color proximity glow, and BAMU BCA / Materra internship milestones.
- **eatmit Product Lab**:
  - Official vector SVG logo integration.
  - Interactive KDS ticket advance engine (New → Preparing → Ready).
  - Dynamic table merge/split simulator.
  - Day-wise and time-wise menu controller.
- Direct Signal Contact form with Web3Forms integration, honeypot spam protection, and 24-hour response guarantee.
- Automated phone number and private contact leak checker (`scripts/check-leak.js`).
- Complete production static export build validated (`npm run build`) with zero errors and zero leaks.
