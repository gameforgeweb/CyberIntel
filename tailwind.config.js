/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7878",
        secondary: "#5451FF",
        neutral: "#FFFFFF",
      },
      fontFamily: {
        'logo': ['"Rubik Mono One"', 'sans-serif'],
        'barlow': ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 