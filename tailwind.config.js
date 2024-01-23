/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ['Inconsolata', 'monospace'],
        climate: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
