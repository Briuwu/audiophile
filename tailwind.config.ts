import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      "orange-400": "#FBAF85",
      "orange-700": "#D87D4A",
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
