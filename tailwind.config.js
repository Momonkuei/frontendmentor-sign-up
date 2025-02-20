/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
      },
      colors: {
        'design-grey': '#949494',
        'design-blue-700': '#36384D',
        'design-blue-800': '#242742',
        'design-red': '#FF6155',
      },
    },
  },
  plugins: [],
}
