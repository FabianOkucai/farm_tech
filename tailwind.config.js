/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#064E3B',
        'primary-dark': '#042F2E',
        secondary: '#10B981',
        accent: '#F59E0B',
        'bg-light': '#F9FAFB',
        'text-main': '#1F2937',
        'text-muted': '#6B7280',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
