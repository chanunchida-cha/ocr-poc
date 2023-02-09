/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      red: "#FF0303",
      blue: "#16A6FC",
      primary: "#18191A",
      second: "#242526",
      borderNav: "#393A3B",
      bgSearch: "#3A3B3C",
      textSearch: "#B0B3B8",
      colorIconNavbar: "#B0B3B8",
      colorIconNavbarHover: "#2374E1",
      colorHoverIconNavbarCenter: "#3A3B3C",
      colorHoverIconNavbarEnd: "#4E4F50",
    },
  },
  plugins: [],
};
