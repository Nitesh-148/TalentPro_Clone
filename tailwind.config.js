/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        primary: '#113163',
        headercolor:'#E5C139'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-move': 'gradient 4s ease infinite',
      },
      backgroundImage: {
        'gradient-overlay': 'linear-gradient(270deg, rgba(0, 0, 0, 0) 50%, #EBEBEB 100%)',
      },

    },
  },
  plugins: [],
}

