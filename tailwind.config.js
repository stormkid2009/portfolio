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
                'space-img': "url('/space.jpg')",
                })
    },
  },
  plugins: [],
}