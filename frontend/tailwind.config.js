/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.tsx",
  ],
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require('tailwindcss-elevation')(['responsive']),
  ],
  theme: {
    extend: {},
  },
}
