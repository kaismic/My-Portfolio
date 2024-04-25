/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
        BlackHanSans: ['Black Han Sans', 'sans-serif'],
        NotoSans: ['Noto Sans', 'sans-serif']
      }
    }
  }
}