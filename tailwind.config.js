const colors = require('tailwindcss/colors')

const appColors = [
  'green',
  'red',
  'blue',
  'black',
  'yellow'
]

const colorShades = Object.keys(colors.gray)

module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    // We safelist every color used in the app
    safelist: [
      ...appColors.flatMap(color => colorShades.flatMap(shade => [`text-${color}-${shade}`, `bg-${color}-${shade}`]))
    ]
  },
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
