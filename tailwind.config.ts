import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#ffbe0b",
        blue: "#415a77",
        gray: "#393838",
        dark: "#121212",
        light: "#f5f5f5"
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
