
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#0A192F", // blue color for primary buttons
        "secondary":"#F97316",
        "tertiary":"#54D688"
      },
    },
  },
  plugins: [],
} 