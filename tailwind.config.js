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
      animation: {
        'gradient-x': 'gradient-x 3s linear infinite',
        'spin': 'spin 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'spin': {
          'from': {
            'transform': 'translate(-50%, -50%) rotate(0deg)',
          },
          'to': {
            'transform': 'translate(-50%, -50%) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
} 