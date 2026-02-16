/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,json}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'brand-green': '#23b672',
        'brand-gold': '#f0b90b',
        'brand-yellow': '#f6c744',
        'dark-bg': '#343a40',
        'light-gray': '#7c858e',
        'accent-red': '#d93b4c',
      },
    },
  },
  plugins: [],
}
