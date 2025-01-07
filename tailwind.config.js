/** @type {import('tailwindcss').Config} */



export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'app-desktop': '1440px',
        'app-mobile': '375px'
      },
      colors: {
        'app-almost-white': '#FFFDFA',
        'app-dark-space-blue': '#00001A',
        'app-gunmetal': '#5E607A',
        'app-light-vermillion': '#F15D51',
        'app-silver': '#C5C6CE',
        'app-yellow': '#E9AA52'
      },
    },
  },
  plugins: [],
}

