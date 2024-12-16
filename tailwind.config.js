import colors from 'tailwindcss/colors'
/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    colors: {
      ...colors,
      tresBlue: {
        300: '#DEEAFF',
      },
      tresNeutral: {
        200: '#FAFAFC',
        400: '#F0F1F5',
        700: '#8E8F98',
        1100: '#1F1F1F',
      },
    },
  },
  plugins: [],
}
