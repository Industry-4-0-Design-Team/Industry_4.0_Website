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
        montserrat: ['Montserrat', 'sans-serif'], 
      },
      screens: {
        'custom-lg': '1200px', // Custom breakpoint
        'custom-xl': '1520px', // Custom breakpoint
        'xxl': '2118px', // Custom breakpoint

        'xs': '376px'
    },
    animation: {
      'spin-slow': 'spin 2.5s linear infinite',
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    }
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive']
    }
  },
  plugins: [],
}

