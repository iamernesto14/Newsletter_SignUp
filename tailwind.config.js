/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "tomato": "#ff6257",
        },
        secondary: {
          "dark-slate-grey": "#242742",
          "charcoal-grey": "#36384e",
          "grey": "#9294a0",
          "white": "#ffffff"
        }
      }
    },
  },
  plugins: [],
}