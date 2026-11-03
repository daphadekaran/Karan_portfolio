export interface JourneyMilestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlight: string;
  bullets: string[];
  tags: string[];
  photo?: string;
}

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Jul 2025 – Feb 2026",
    role: "Data Intern, Digital Agronomy",
    organization: "Materra India Pvt. Ltd.",
    location: "Jalna & Wardha, Maharashtra",
    highlight:
      "Sole data and technology resource for the Jalna–Wardha regenerative cotton cluster across 7 months.",
    bullets: [
      "Automated daily merge, clean, and standardization of QField survey data in Python (Pandas), saving 4-5 hours/day across 140+ farms and 1,000+ visits.",
      "Engineered GDD crop modeling app with PostgreSQL weather ingestion and 11x11 km spatial clustering.",
      "Spearheaded 15-day WhatsApp AI advisory activation in Wardha & Jalna, onboarding 100+ farmers across 3 live sessions.",
      "Developed KML boundary QA pipeline (v0.1 to v0.4) using UTM projections to unblock regenerative certification audits.",
      "Redesigned cotton procurement traceability workflows in Google AppSheet from deal creation to gin bale tracking.",
    ],
    tags: ["Data Engineering", "Python", "Spatial QA", "Materra", "Field AI"],
    photo: "/assets/activation/113007.jpeg",
  },
  {
    period: "2022 – Present",
    role: "Freelance Product / UI-UX Designer & Founder",
    organization: "Independent & eatmit POS",
    location: "Jalna, Maharashtra, India 431203 (Open to Relocate)",
    highlight:
      "Designed 7+ web and mobile products for startups and small businesses; currently building eatmit restaurant POS SaaS.",
    bullets: [
      "Researched, wireframed, and prototyped user flows in Figma for landing pages, dashboards, and mobile applications.",
      "Defined business logic and technical specifications for eatmit: table ordering, KDS, live order dashboards, and menu scheduling.",
      "Partnered with developer teams to guarantee design fidelity, tracking milestones and release quality.",
    ],
    tags: ["Product Design", "Figma", "SaaS Founder", "eatmit POS", "Design Systems"],
  },
  {
    period: "2021 – 2024",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Deogiri College, BAMU University",
    location: "Chhatrapati Sambhajinagar, Maharashtra",
    highlight:
      "Graduated with foundational expertise in database management, algorithms, data structures, and software engineering.",
    bullets: [
      "Core coursework in Relational Databases (SQL), Object-Oriented Programming, and Web Architectures.",
      "Applied computer science theory to practical web tools and local data problems.",
    ],
    tags: ["BCA", "BAMU", "Database Systems", "Computer Science"],
  },
];
