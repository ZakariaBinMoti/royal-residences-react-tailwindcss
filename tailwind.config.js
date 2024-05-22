/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
        bodoni: "'Bodoni Moda', serif"
      }
    },
  },
  plugins: [require("daisyui")],
}
