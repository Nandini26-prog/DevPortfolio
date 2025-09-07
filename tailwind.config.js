/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0A0A',
        'dark-card': '#1A1A1A',
        'dark-border': '#2C2C2C',
        'light-text': '#FFFFFF',
        'muted-text': '#B0B0B0',
        'accent-green': '#00FF88',
        'accent-red': '#FF4444',
      },
       fontFamily: {
        signature: ['Parisienne', 'cursive'], // Add this line
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
}
