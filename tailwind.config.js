/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#606060",
        secondary: "#1fa2ca",
        tertiary: "#1fa2ca",
        quaternary: "#06bcba",
        warning:"#06bcba",
        danger:"#06bcba",
        "primary-gray":"#414F65"
      }
    },
  },
  plugins: [],
}