/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        "inter": "'Inter', sans-serif"
      },
      backgroundImage: {
        'menu-close': "url('/svg/closed.svg')",
        'menu-burguer': "url('/svg/burguer.svg')",
        'me-photo': "url('/img/foto.png')",
        'menu-close-dark': "url('/svg/closedDark.svg')",
        'menu-burguer-dark': "url('/svg/burguerDark.svg')"
      },
      colors: {
        "dark-default": "#030712",
        "dark-secondary": "#111827",
        "dark-title": "#ffffff",
        "dark-subtitle": "#D1D5DB"
      }
    },
  },
  plugins: [],
}