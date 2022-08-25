/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'tahiti': {
        50:'#ffdaf7c2',
        100: '#ffb1ef',
        200: '#ef2ec7',
        300: '#c50e9f',
        
      }
      
    },
    extend: {},
  },
  plugins: [],
}
