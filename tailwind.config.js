/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This includes your React components
    './public/index.html', // This ensures Tailwind scans your HTML files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d2d7f', // You can define your primary color here
        secondary: '#ffd700', // Example secondary color
        white: '#ffffff',
        black: '#000000',
        green: '#399866',
        
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'], // Add custom fonts here
        manuale: ['Manuale', 'serif']
      },
      spacing: {
        '128': '32rem', // Custom spacing values
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem', // Custom border-radius values
      },
    },
  },
  plugins: [],
}
