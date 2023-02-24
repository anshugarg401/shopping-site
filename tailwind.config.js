/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors :{
     
        'tahiti': {
          50:'#ffdaf7c2',
          100: '#ffb1ef',
          200: '#ef2ec7',
          300: '#c50e9f',
          
        }},
    },
  },
  plugins: [],
}
