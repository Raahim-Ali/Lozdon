/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBlack: "#151515",
        newGrey: "#F9F9F9",
        bluePrimary: "#2569E6",
        blackPrimary: "#383838",
        whitePrimary: "#FFF",
        lightgrey: "#F8F8F8",
        main: "#3FBA00",
        rgb: "rgba(59, 63, 92, 0.60)",
        cardBg: "#282828",
        primaryTextColor: "#3B3F5C",
        grey: "#E8E5E5",
      },
    },
  },
  plugins: [],
};
