/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-button":'#FF561E'
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const extendUnderline = {
        '.underline':{
          'textDecoration':'underline',
          'text-decoration-color':'#FF561E',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
