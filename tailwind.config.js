const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
