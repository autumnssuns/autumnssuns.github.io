/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('./images/background.jpg')",
      },
      colors: {
        magenta: {
          DEFAULT: "#FF0DFF",
          50: "#FF9CFF",
          100: "#FF87FF",
          200: "#FF5FFF",
          300: "#FF36FF",
          400: "#FF0DFF",
          500: "#D400D4",
          600: "#9C009C",
          700: "#640064",
          800: "#2C002C",
          900: "#000000",
          950: "#000000",
        },
        "turquoise": {
          DEFAULT: "#25EFEF",
          50: "#AAF9F9",
          100: "#97F7F7",
          200: "#71F5F5",
          300: "#4BF2F2",
          400: "#25EFEF",
          500: "#0FCDCD",
          600: "#0B9999",
          700: "#076464",
          800: "#043030",
          900: "#000000",
          950: "#000000",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
