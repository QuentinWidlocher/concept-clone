const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.gray
      },
      boxShadow: {
        'md-up': '0 -4px 6px -1px rgb(0 0 0 / 10%), 0 -2px 4px -1px rgb(0 0 0 / 6%)'
      }
    },
  },
  variants: {
    extend: {
      translate: ['hover'],
      height: ['hover'],
      borderRadius: ['hover']
    },
  },
  plugins: [],
}
