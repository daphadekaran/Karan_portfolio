import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GrainOverlay } from "@/components/shared/grain-overlay";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { NeatBackground } from "@/components/shared/neat-background";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0908",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Karan Daphade — Data Engineer & Product Builder",
  description:
    "I turn field chaos into data systems. Portfolio of Karan Datta Daphade, featuring real-world data pipelines across 140+ farms, agritech WhatsApp AI activations, and eatmit POS.",
  metadataBase: new URL("https://github.com/daphadekaran/Karan_portfolio"),
  authors: [{ name: "Karan Datta Daphade", url: "https://www.linkedin.com/in/karan-daphade-a960a8356/" }],
  keywords: [
    "Karan Daphade",
    "Data Engineer",
    "Data Analyst",
    "Junior AI Engineer",
    "Digital Agronomy",
    "ETL Pipelines",
    "Streamlit",
    "PostgreSQL",
    "eatmit - Restaurant POS",
    "Soil & Signal",
  ],
  openGraph: {
    title: "Karan Daphade — Data Engineer & Product Builder",
    description: "I turn field chaos into data systems. From cotton fields to resilient data systems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/karan-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Karan Datta Daphade - Data Engineer and Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Daphade — Data Engineer & Product Builder",
    description: "I turn field chaos into data systems. Soil & Signal Portfolio.",
    images: ["/karan-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="bg-soil-950 text-cotton-50 font-display selection:bg-marigold-500 selection:text-soil-950 antialiased relative min-h-screen">
        {/* Skip to Main Content Accessibility Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-marigold-500 focus:text-soil-950 focus:font-mono focus:text-xs focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global 4% SVG Texture Grain */}
        <GrainOverlay />

        {/* 3D Animated Liquid Silver & Golden Gradient Background */}
        <NeatBackground />

        {/* Reactive Custom Cursor (Touch-disabled) */}
        <CustomCursor />

        {/* Smooth Scrolling Container */}
        <SmoothScrollProvider>
          <div className="relative flex min-h-screen flex-col">
            {children}
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
