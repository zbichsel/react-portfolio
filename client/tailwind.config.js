/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      fontFamily: {
        'head': 'Cinzel Decorative, cursive',
        'nav': 'Poppins, sans-serif',
        'scary': 'Alegreya Sans SC, sans-serif',
      }
    },
  },
  plugins: [],
}

