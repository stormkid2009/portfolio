/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'hero-img': "url('/portfolio/sherif.jpg')",
                'space-img': "url('/portfolio/space.jpg')",
                })
    },
  },
  plugins: [],
}