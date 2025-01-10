/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        euclid: ['EuclidCircularARegular', 'sans-serif'],
      },
      screens: {
        'xs': '480px',         // Custom breakpoint for extra small devices
        'sm': '640px',         // Overriding or keeping default 'sm'
        'md': '768px',         // Overriding or keeping default 'md'
        'bt':'992px',         // Custom breakpoint for medium-large devices
        'lg': '1024px',        // Overriding or keeping default 'lg'
        'xl': '1280px',        // Overriding or keeping default 'xl'
        '2xl': '1536px',       // Overriding or keeping default '2xl'
        '3xl': '1920px',       
      },
    },
  },
  plugins: [],
}

