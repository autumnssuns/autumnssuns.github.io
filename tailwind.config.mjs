/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        default: "url('./images/background.jpg')",
      },
      colors: {
        'accent-one': {
          DEFAULT: '#884386',
          50: '#fcf7fc',
          100: '#f8eef9',
          200: '#f0dcf2',
          300: '#e5c0e7',
          400: '#d69bd7',
          500: '#c172c3',
          600: '#9f509f',
          700: '#884386',
          800: '#70386e',
          900: '#5d325a',
          950: '#3b1739',
        },
        'accent-two': {
          DEFAULT: '#3a7be4',
          50: '#f0f7fe',
          100: '#ddecfc',
          200: '#c2dffb',
          300: '#98ccf8',
          400: '#67b0f3',
          500: '#4390ee',
          600: '#3a7be4',
          700: '#255ed0',
          800: '#244ca9',
          900: '#234385',
          950: '#1a2a51',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
