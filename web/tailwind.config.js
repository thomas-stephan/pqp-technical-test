/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yolo: '#ff0000',
        white: {
          500: '#ffffff',
        },
        primary: {
          300: '#7346ee',
          400: '#6432ed',
          500: '#5432D3',
          600: '#4a28c7',
        },
        typography: {
          500: '#191819',
        },
        surface: {
          '00': '#ffffff',
          300: '#fafafa',
          400: '#fcfcfe',
          500: '#F1F7F9',
          600: '#666671',
          700: '#3e3e4a',
          800: '#272730',
          900: '#141416',
        },
      },
      borderRadius: {
        DEFAULT: '.7rem',
      },
    },
  },
  plugins: [],
}
