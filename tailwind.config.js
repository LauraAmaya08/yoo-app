/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost-Light', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

