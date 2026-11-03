export const TOKENS = {
  colors: {
    soil950: "#0A0908",
    soil900: "#12100D",
    soil800: "#1C1915",
    soil700: "#2A251E",
    soil600: "#3D362C",
    cotton50: "#F4EFE5",
    cotton100: "#EAE3D5",
    cotton200: "#D5CCBC",
    cotton400: "#A39B8B",
    marigold400: "#FFBE3D",
    marigold500: "#FFB020",
    marigold600: "#E69B15",
    vermilion500: "#FF5A36",
    vermilion600: "#E64522",
    signal400: "#3EE0C3",
    signal500: "#26C9AC",
  },
  easing: [0.16, 1, 0.3, 1] as const,
  cssEasing: "cubic-bezier(0.16, 1, 0.3, 1)",
  glowGradient: "linear-gradient(135deg, #FFB020 0%, #FF5A36 50%, #3EE0C3 100%)",
} as const;

export type TokenColors = typeof TOKENS.colors;
