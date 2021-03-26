module.exports = {
  purge: {
    enabled: false,
    content:  [
      './pages/**/*.{js,jsx,tsx}', 
      './components/**/*.{js,jsx,tsx}',
      './layouts/**/*.{js,jsx,tsx}'
    ]
  },
   theme: {
     extend: {
      fontSize: {
        150: "150px",
        180: "180px",
        210: "210px",
        240: "240px",
      }
     }
   },
   variants: {
     
   },
   plugins: [],
 }