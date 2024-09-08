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
        byui: "#002E5D",
        light_byui: "#5271ff",
        vivacity: "#61269f",
        blue: "#415a77",
        gray: "#393838",
        lightGray: "#4a4a4a",
        dark: "#121212",
        light: "#f5f5f5",
        softLight: "#e0e0e0"
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
