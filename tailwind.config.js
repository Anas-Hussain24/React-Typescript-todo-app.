// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937', // Dark gray for the main color
        secondary: '#3B82F6', // Blue for accents
        accent: '#F59E0B', // Amber for highlights
        background: '#F3F4F6', // Light gray for background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Use a modern, professional font
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
