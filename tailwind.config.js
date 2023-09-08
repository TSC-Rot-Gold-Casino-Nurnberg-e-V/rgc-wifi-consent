const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fcf9f0",
          100: "#f7f1dd",
          200: "#eedfba",
          300: "#e0c280",
          400: "#d7ab60",
          500: "#ce9441",
          600: "#c07d36",
          700: "#a0632e",
          800: "#81502b",
          900: "#684326",
          950: "#382112",
        },
        secondary: {
          50: "#fdf3f3",
          100: "#fbe5e5",
          200: "#f9cfcf",
          300: "#f3aeae",
          400: "#ea7f7f",
          500: "#de5555",
          600: "#ca3838",
          700: "#aa2c2c",
          800: "#8c2828",
          900: "#752727",
          950: "#3f1010",
        },
        base: colors.stone,
      },
    },
  },
  plugins: [],
};
