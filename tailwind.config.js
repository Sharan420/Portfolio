/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
        climate: ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        background: '#0D2718',
        primary: '#8BEAB3',
        secondary: '#147a42',
        highlights: '#1AF877',
        slightoffwhite: '#C5D0C9',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}
