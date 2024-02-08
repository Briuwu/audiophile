import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        hero: "url('/assets/home/mobile/image-header.jpg')",
        "hero-tablet": "url('/assets/home/tablet/image-header.jpg')",
        "hero-desktop": "url('/assets/home/desktop/image-hero.jpg')",
        "circle-pattern": "url('/assets/home/desktop/pattern-circles.svg')",
        "zx7-speaker": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
      },
    },
    colors: {
      "orange-800": "#D87D4A",
      "orange-400": "#fbaf85",
      "black-900": "#101010",
      "gray-400": "#F1F1F1",
      "white-100": "#FAFAFA",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
