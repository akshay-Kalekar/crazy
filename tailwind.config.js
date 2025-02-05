/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('src/assets/hero/backgroundImg.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}