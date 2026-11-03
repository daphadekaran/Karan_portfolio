export interface ActivationImage {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  location: string;
  coordinates: string;
  date: string;
  telemetry: {
    system: string;
    network: string;
    metric: string;
  };
  fieldNote: string;
  tags: string[];
}

export const ACTIVATION_REEL: ActivationImage[] = [
  {
    id: "broadcast",
    src: "/assets/activation/111936.jpeg",
    title: "The Broadcast",
    subtitle: "Presenting the WhatsApp AI advisory system to cotton farmers",
    location: "Wardha, Maharashtra",
    coordinates: "20.7453° N, 78.6022° E",
    date: "July 2025 - Feb 2026 Sprint",
    telemetry: {
      system: "WHATSAPP_AI_ADVISORY // MARATHI_VOICE",
      network: "LIVE APMC SCRAPER SYNC (agmarknet.gov.in)",
      metric: "100+ Farmers Onboarded",
    },
    fieldNote:
      "Demonstrating the conversational AI advisory in the village hall. Farmers learned how to send voice notes in Marathi to diagnose bollworm and leaf-spot issues, and receive instant market price benchmarks.",
    tags: ["WhatsApp AI", "Village Demo", "Wardha", "Field Activation"],
  },
  {
    id: "adoption",
    src: "/assets/activation/111905.jpeg",
    title: "The Adoption",
    subtitle: "Farmers testing the advisory and querying live mandi prices",
    location: "Wardha, Maharashtra",
    coordinates: "20.7453° N, 78.6022° E",
    date: "July 2025 - Feb 2026 Sprint",
    telemetry: {
      system: "CLIENT_HANDSETS: ACTIVE_SESSION",
      network: "AIRTEL / JIO 4G GROUND SIGNAL",
      metric: "3 Sessions Completed",
    },
    fieldNote:
      "The critical moment of truth: dozens of farmers holding up smartphones, scanning the QR code, and querying cotton prices. Proved that simple interfaces in local languages break digital adoption barriers instantly.",
    tags: ["Ground Truth", "Farmer Adoption", "APMC Mandi", "Interactive AI"],
  },
  {
    id: "field-desk",
    src: "/assets/activation/111951.jpeg",
    title: "The Field Desk",
    subtitle: "Mapping farmer registries and reviewing real-time onboarding rosters",
    location: "Wardha, Maharashtra",
    coordinates: "20.7453° N, 78.6022° E",
    date: "July 2025 - Feb 2026 Sprint",
    telemetry: {
      system: "REGISTRY_VERIFICATION_SUITE",
      network: "GOOGLE DRIVE API AUTO-SYNC",
      metric: "140+ Farms Cross-Referenced",
    },
    fieldNote:
      "At the presentation table with the team, verifying farmer IDs and cross-referencing field survey records with incoming WhatsApp conversation IDs. Bridging physical paper rosters with cloud databases.",
    tags: ["Operations", "Registration", "Field Desk", "Data Integrity"],
  },
  {
    id: "under-banyan",
    src: "/assets/activation/112201.jpeg",
    title: "Under the Banyan",
    subtitle: "Agronomy and data debrief in the field",
    location: "Jalna, Maharashtra",
    coordinates: "19.8410° N, 75.8864° E",
    date: "July 2025 - Feb 2026 Sprint",
    telemetry: {
      system: "FIELD_DEBRIEF // AGRONOMY_REVIEW",
      network: "REGIONAL CLUSTER OBSERVABILITY",
      metric: "1,000+ Field Visits Logged",
    },
    fieldNote:
      "A debrief with the digital agronomy team under the shade after a morning of farm visits. Analyzing edge cases in pest symptoms and adjusting the prompt guidance rules for local Vidarbha dialect nuances.",
    tags: ["Jalna", "Field Team", "Agronomy", "Debrief"],
  },
  {
    id: "launch-celebration",
    src: "/assets/activation/113007.jpeg",
    title: "Cluster Launch Day",
    subtitle: "Materra Jalna & Wardha cluster team after successful 15-day activation",
    location: "Jalna / Wardha Cluster, MH",
    coordinates: "19.8410° N, 75.8864° E",
    date: "July 2025 - Feb 2026 Sprint",
    telemetry: {
      system: "CLUSTER_DEPLOYMENT_COMPLETE",
      network: "PIPELINES_LIVE_AND_AUTOMATED",
      metric: "4-5 Hours Saved Per Day",
    },
    fieldNote:
      "Team celebration after wrapping up the 15-day AI activation sprint. With automated QField pipelines, daily mandi scraping, and direct farmer access, the Jalna-Wardha cluster technology operations were officially in motion.",
    tags: ["Team Materra", "Celebration", "Milestone", "Digital Agronomy"],
  },
];

