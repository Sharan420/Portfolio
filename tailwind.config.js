/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        primary: '#00241b',
        secondary: '#174305',
        highlights: '#f0ed66',
        slightoffwhite: '#F8FEF5',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}
