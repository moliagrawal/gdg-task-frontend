/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google-sans': ['"Google Sans"', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#5f5f5f',
      },
    },
  },
  plugins: [],
}
