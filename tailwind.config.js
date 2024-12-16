/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      tresBlue: {
        300: '#DEEAFF',
      },
      tresNeutral: {
        700: '#8E8F98',
        1100: '#1F1F1F',
      },
    },
  },
  plugins: [],
}
