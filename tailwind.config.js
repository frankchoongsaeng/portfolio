const colors = require("tailwindcss/colors");

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors: {
         dark: colors.coolGray,
         light: colors.gray[300]
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }