/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: '374px' }, // Custom breakpoint for screens below 375px
      },
      
    },
  },
  plugins: [],
}