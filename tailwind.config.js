/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: '#0064FB',
        secondary: '#A9F0F1',
        accent: '#7882EB'
      }
    },
  },
  plugins: [],
}

