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
    colors:{
        'palette-heading':'#A66382',
        'palette-link':'#400A23',
        'palette-text':'#F2D5E5',
        'palette-shadow':'#383D40'
    },
  },
  plugins: [],
}