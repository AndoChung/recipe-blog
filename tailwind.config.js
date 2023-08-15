/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rem: ["REM" , "serif"],
        lb: ["Noto Serif Vithkuqi", "serif"]
      }
    },
  },
  plugins: [],
}

