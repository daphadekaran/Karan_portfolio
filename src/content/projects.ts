export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  category: "Data Pipeline" | "Crop Modeling" | "Geospatial QA" | "Agritech AI" | "Operations";
  liveUrl?: string;
  repoUrl?: string;
  metrics: { label: string; value: string }[];
  facts: string[];
  techStack: string[];
  problem: string;
  fieldReality: string;
  solution: string;
  impact: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "qfield-pipeline",
    title: "Automated QField Survey Data Pipeline",
    tagline: "Replaced 4-5 hours of daily manual reporting across 140+ regenerative cotton farms.",
    role: "Sole Data/Tech Intern, Jalna-Wardha Cluster",
    category: "Data Pipeline",
    liveUrl: "https://qfielddashboard-8vewexpkcu6m8cv4rsqqmk.streamlit.app/",
    metrics: [
      { label: "Manual Time Saved", value: "4-5 h/day" },
      { label: "Farms Covered", value: "140+" },
      { label: "Field Visits Processed", value: "1,000+" },
    ],
    facts: [
      "Automated daily merge, clean, and standardization of raw QField survey mobile exports using Python and Pandas.",
      "Replaced 4 to 5 hours of manual reporting each day across 140+ farms and 1,000+ field visits.",
      "Exported validated, clean GeoJSON and CSV datasets directly into DSSAT crop modeling and ML pipelines.",
    ],
    techStack: ["Python", "Pandas", "QField", "GeoJSON", "Streamlit", "DSSAT Integration"],
    problem:
      "Field executives gathered vast observational agronomy data on mobile devices in remote cotton fields. The end-of-day data collation was completely manual, prone to schema mismatch, and delayed management visibility by up to 24 hours.",
    fieldReality:
      "Agronomists and field teams were operating in rural Maharashtra with intermittent connectivity, inconsistent coordinate recording, and varying survey timestamps.",
    solution:
      "Constructed a robust Python ingestion and standardization pipeline that auto-detects column shifts, standardizes datetime formats, flags spatial anomalies, and produces machine-ready GeoJSON datasets.",
    impact: [
      "Eliminated 4-5 hours of daily repetitive reporting.",
      "Processed 1,000+ field visits without data loss.",
      "Supplied clean inputs to downstream DSSAT crop simulation models.",
    ],
  },
  {
    slug: "gdd-crop-model",
    title: "GDD Phenophase Crop Prediction System",
    tagline: "Transformed a CLI-only Growing Degree Days algorithm into an agronomic intelligence web app.",
    role: "Data Engineer & App Developer",
    category: "Crop Modeling",
    liveUrl: "https://cotton-gdd-dashboard-r3jvzjfdsatsxwurmlm6v8.streamlit.app/Grid_Map",
    metrics: [
      { label: "Phenophases Modeled", value: "10 Stages" },
      { label: "Spatial Clustering", value: "11x11 km" },
      { label: "Daily Weather Ingestion", value: "Automated" },
    ],
    facts: [
      "Turned a terminal-only Growing Degree Days (GDD) algorithm into an interactive multi-page Streamlit application.",
      "Automated daily Open-Meteo weather data ingestion with intelligent gap detection into PostgreSQL.",
      "Engineered an 11x11 km spatial grid clustering system to drastically reduce redundant API calls and latency.",
      "Generated predictions across 10 distinct cotton phenophases for active use by agronomy and ML teams.",
    ],
    techStack: ["Python", "PostgreSQL", "Streamlit", "Open-Meteo API", "Spatial Clustering", "Pandas"],
    problem:
      "Agronomists needed precise phenophase stage predictions to recommend pesticide timing and irrigation, but the underlying GDD model was trapped in local CLI scripts requiring manual weather downloads.",
    fieldReality:
      "Weather stations are sparse across rural farming clusters. Fetching individual farm coordinates exceeded free API quotas and was too slow for interactive analysis.",
    solution:
      "Built a spatial grid system aggregating coordinates within 11x11 km clusters, automated weather fetching with PostgreSQL gap-filling, and exposed predictions through an interactive multi-page map dashboard.",
    impact: [
      "Used daily by Materra agronomy and ML teams for cotton phenology tracking.",
      "Reduced API load by over 70% through spatial clustering.",
      "Provides predictive staging for 10 phenological milestones.",
    ],
  },
  {
    slug: "kml-qa-tool",
    title: "KML Farm Boundary QA & Geometry Pipeline",
    tagline: "UTM projection engine finding overlapping farms and invalid areas to unblock regenerative certifications.",
    role: "Geospatial Pipeline Developer",
    category: "Geospatial QA",
    metrics: [
      { label: "Pipeline Iterations", value: "v0.1 → v0.4" },
      { label: "Projection Engine", value: "UTM Coordinate Transform" },
      { label: "Audit Unblocked", value: "Regenerative Certification" },
    ],
    facts: [
      "Engineered a Python pipeline utilizing UTM projections to accurately identify boundary overlaps and erroneous acreage calculations.",
      "Generated color-coded KML files indicating exact overlap polygons and geometry errors for field correction.",
      "Integrated directly with Google Drive API for automated survey polygon ingestion and team delivery.",
      "Evolved across four major versions (v0.1 to v0.4) strictly driven by direct field feedback from surveyors.",
    ],
    techStack: ["Python", "Shapely", "QGIS", "UTM Projections", "Google Drive API", "KML/GeoJSON"],
    problem:
      "Manual GPS survey points frequently created self-intersecting polygons or overlapping farm claims, which violated strict international regenerative cotton audit compliance standards.",
    fieldReality:
      "Field teams walked farm boundaries under scorching sun; slight GPS drift caused adjacent farm plots to artificially overlap on maps.",
    solution:
      "Transformed geographic coordinates into localized UTM metric projections to compute exact intersection areas, highlighting errors in visual color-coded KML layers that surveyors could review immediately.",
    impact: [
      "Directly unblocked regenerative cotton certification audits.",
      "Iterated rapidly from v0.1 to v0.4 to handle edge cases like irregular farm borders.",
      "Automated verification loop via Google Drive API.",
    ],
  },
  {
    slug: "farmer-ai-advisory",
    title: "Farmer AI WhatsApp Advisory & APMC Scraper",
    tagline: "15-day live activation in Wardha & Jalna connecting 100+ farmers to real-time mandi prices & agronomy AI.",
    role: "Activation Lead & Data Pipeline Engineer",
    category: "Agritech AI",
    liveUrl: "https://xwntzcdpspyye8j8bucczd.streamlit.app/",
    metrics: [
      { label: "Activation Window", value: "15 Days" },
      { label: "Farmers Onboarded", value: "100+ (3 Sessions)" },
      { label: "APMC Scraper Scale", value: "36 States / 5,000+ Daily Records" },
    ],
    facts: [
      "Spearheaded a 15-day WhatsApp AI advisory activation in Wardha and Jalna, onboarding 100+ cotton farmers in 3 live sessions.",
      "Engineered a resilient web scraper for agmarknet.gov.in covering 36 Indian states and processing 5,000+ commodity records on active trading days.",
      "Fed normalized real-time mandi prices directly into the conversational advisory to empower farmers against middleman underbidding.",
    ],
    techStack: ["Python", "Web Scraping (agmarknet)", "WhatsApp Business API", "Streamlit", "PostgreSQL", "NLP"],
    problem:
      "Smallholder cotton farmers lacked transparent, timely market prices when selling produce and had limited access to personalized agronomist advice during pest attacks.",
    fieldReality:
      "Most farmers rely on WhatsApp for digital communication and speak Marathi. Solutions had to work seamlessly on standard smartphones with voice-friendly inputs.",
    solution:
      "Conducted on-the-ground village hall activation sessions demonstrating how to query pest solutions and receive live APMC cotton rates via WhatsApp, supported by a daily automated scraper of national mandi portals.",
    impact: [
      "100+ farmers actively onboarded and testing advisory tools across Wardha and Jalna.",
      "5,000+ daily APMC mandi price points scraped and structured across 36 states.",
      "Live field demonstration proved high adoption for conversational AI in local agricultural communities.",
    ],
  },
  {
    slug: "procurement-appsheet",
    title: "Cotton Procurement Traceability Workflow",
    tagline: "End-to-end Google AppSheet platform: deal creation, gin arrival, bale tracking, and payments.",
    role: "Product & Workflow Designer",
    category: "Operations",
    metrics: [
      { label: "Operations Streamlined", value: "End-to-End" },
      { label: "Deployment Scope", value: "Materra & IDH Operations" },
      { label: "Core Tracking", value: "Farm to Gin Bale" },
    ],
    facts: [
      "Completely redesigned the cotton procurement operational workflow end-to-end in Google AppSheet.",
      "Covered deal negotiation, gin arrival tracking, bale QR traceability, and final farmer payment disbursals.",
      "Authored custom business validation rules, role-based interfaces, and built a specialized sister version for IDH procurement operations.",
    ],
    techStack: ["Google AppSheet", "Workflow Automation", "Role-Based Access", "QR Traceability", "Google Sheets"],
    problem:
      "Procuring raw seed cotton involved paper slips, delayed weighbridge receipts, and disconnected accounting ledgers, resulting in bale traceability blindspots.",
    fieldReality:
      "Ginning mills operate amidst high dust and loud machinery; operators need high-contrast, large-tap mobile touch targets that function quickly.",
    solution:
      "Mapped the entire physical journey from field deal creation through weighbridge verification to ginning into an intuitive AppSheet interface with automated status checks.",
    impact: [
      "Achieved complete bale-level traceability from farm gate to gin.",
      "Separately deployed and adopted for IDH procurement operations.",
      "Accelerated settlement and audit reconciliation timelines.",
    ],
  },
  {
    slug: "field-dashboard",
    title: "Field Executive Monitoring & Analytics Dashboard",
    tagline: "Streamlit executive interface tracking daily surveyor progress, farm audits, and anomaly flags.",
    role: "Frontend & Analytics Developer",
    category: "Operations",
    metrics: [
      { label: "Cadence", value: "Daily Sync" },
      { label: "Stakeholders", value: "Cluster Leads & Agronomists" },
      { label: "Resolution", value: "Surveyor & Farm Level" },
    ],
    facts: [
      "Designed and deployed a Streamlit dashboard enabling management to track daily Field Executive (FE) survey quotas, cluster coverage, and visit verification.",
      "Provided direct support to field executives on resolving QField data entry discrepancies and geometry anomalies.",
    ],
    techStack: ["Streamlit", "Python", "Data Visualization", "Plotly", "PostgreSQL"],
    problem:
      "Cluster managers lacked real-time visibility into which villages had been surveyed each day, making it difficult to allocate surveyor resources efficiently.",
    fieldReality:
      "Field teams were dispersed across hundreds of square kilometers in Vidarbha without constant supervisor oversight.",
    solution:
      "Created an interactive daily progress map and executive scoreboard aggregating completed surveys, flagged anomalies, and surveyor milestones.",
    impact: [
      "Delivered real-time operational transparency to cluster leadership.",
      "Directly assisted field executives in fixing surveying discrepancies before submission.",
    ],
  },
];
