/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dim-gray': '#62716F',
        'black-olive': '#41403E',
        'jet': '#3C3835',
        'timberwolf': '#D5D6D7',
        'onyx': '#363739',
        // Add more colors as needed
      },
    },
  },
  plugins: [],
}

