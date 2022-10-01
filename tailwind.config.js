/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'hero-img': "url('/sherif.jpg')",
                'pyramids-img': "url('/pyramids.png')",
                'space-img': "url('/space.jpg')",
                })
    },
  },
  plugins: [],
}