# Agent Operating Guidelines (Soil & Signal)

These rules govern the development of the Karan Daphade portfolio website:

1. **Document-driven:** Read `/docs/PRD.md` and `/docs/DECISIONS.md` before making architectural choices; stay strictly in scope.
2. **Planning Gate:** Propose an implementation plan for each phase and wait for approval.
3. **Testing Gate:** Run the application, test at 360px, 768px, and 1440px viewport widths, report genuine pass/fail metrics.
4. **Token Fidelity:** Dark-first only. Never hard-code hex colors in component files; use Tailwind design tokens derived from CSS variables (`--soil-*`, `--cotton-*`, `--marigold-*`, `--signal-*`, `--vermilion-*`).
5. **Motion Safety & Reduced Motion:** Every animation (GSAP, Motion, R3F) must include a fallback/static branch respecting `prefers-reduced-motion` and perform complete cleanup on unmount (`useGSAP`, `gsap.context()`).
6. **Aceternity UI Fidelity:** Use exact Aceternity source conventions, recoloring through design tokens. Report any deviations.
7. **Strict Privacy & Redaction:**
   - Never render, commit private phone numbers. The build script must assert that no phone number appears in the build output (`/out`).
   - Use only synthesized data for company workflows.
   - Strip all GPS/EXIF metadata from public image assets.
8. **eatmit Product Lab Integrity:**
   - Display clear status badges (_In Progress_ vs _Planned_). Never present planned features as live.
   - Use text chips for third-party service names (no proprietary trademark logos).
   - The interactive lab runs purely client-side with `/src/content/eatmit-demo-data.ts` (zero external network calls).
9. **Documentation Updates:** Maintain `/docs/DECISIONS.md` and `/docs/CHANGELOG.md` across every phase.
