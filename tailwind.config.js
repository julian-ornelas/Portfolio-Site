/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        //Generate your palette in https://uicolors.app/create
        primary: {
          50: '#ecffed',
          100: '#d2ffd8',
          200: '#a8ffb2',
          300: '#65ff79',
          400: '#1bff35',
          500: '#00f90c',
          600: '#00d005',
          700: '#00a208',
          800: '#007e0c',
          900: '#00590b',
          950: '#003b04',
      },
        base: {
          50: '#faf8fc',
          100: '#f2eef9',
          200: '#e8e0f4',
          300: '#d6c7eb',
          400: '#bba3dd',
          500: '#a07ece',
          600: '#8962bb',
          700: '#7851a9',
          800: '#624386',
          900: '#50376c',
          950: '#341f4c',
        }
      }
    }
  },
  plugins: []
}
