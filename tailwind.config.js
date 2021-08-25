const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.gray
      }
    },
  },
  variants: {
    extend: {
      translate: ['hover']
    },
  },
  plugins: [],
}
