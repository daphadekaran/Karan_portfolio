export interface ProofMetric {
  number: string;
  suffix?: string;
  label: string;
  description: string;
}

export const PROOF_METRICS: ProofMetric[] = [
  {
    number: "140",
    suffix: "+",
    label: "Regenerative Farms",
    description: "Mapped, cleaned, and standardized into DSSAT and ML pipelines",
  },
  {
    number: "1,000",
    suffix: "+",
    label: "Field Visits",
    description: "Mobile survey records processed without data loss",
  },
  {
    number: "4-5",
    suffix: " h/day",
    label: "Automated Daily",
    description: "Manual reporting hours saved for field executives and management",
  },
  {
    number: "100",
    suffix: "+",
    label: "Farmers Onboarded",
    description: "Active participants in live WhatsApp AI advisory sessions",
  },
  {
    number: "36",
    suffix: " States",
    label: "APMC Coverage",
    description: "National mandi price scraping across agmarknet portals",
  },
  {
    number: "5,000",
    suffix: "+",
    label: "Daily Price Records",
    description: "Structured agricultural commodity records scraped on active trading days",
  },
];

