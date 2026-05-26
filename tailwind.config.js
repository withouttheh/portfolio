/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'pri': "#f4f4fb",
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'futureFirst': "url('images/Future First.png')",
        'toast': "url('images/toast.png')",
        'sbt': "url('images/sbt.png')"
      }
    },
  },
  plugins: [],
}
 