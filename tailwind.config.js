/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        space: '#050816',
        card: '#0d1117',
        accent: '#4f8ef7',
        'accent-purple': '#7c3aed',
        pri: '#f4f4fb',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
