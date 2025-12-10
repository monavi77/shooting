/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trap-green': '#3F4A3C',
        'trap-orange': '#F56600',
        'trap-cream': '#EAE6C3',
        'trap-charcoal': '#2B2B2B',
      }
    },
  },
  plugins: [],
}
