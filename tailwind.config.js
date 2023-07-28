/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-black': '#151515',
        'text-white': "#f3f3f3"
      }
    },
  },
  plugins: [],
}
