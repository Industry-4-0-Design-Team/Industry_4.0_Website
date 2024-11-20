/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include your HTML files
    "./src/**/*.{js,ts,jsx,tsx}", // Include your JS/TS files
  ],
  theme: {
    extend: {
      colors: {
        primary: '',
        secondary: '#FDE37F', //Yellow/Gold used on buttons
        third: '#2B0E6C', //Purple text used on buttons
        bg: '',
        primaryText: '#F9F8FF'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Make sure it's in the config
      },
    },
  },
  plugins: [],
}

