module.exports = {
  content: [
    './index.html',
    './frontend/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        laravel: '#F05340',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
