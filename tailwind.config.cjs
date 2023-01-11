module.exports = {
  content: [
    './index.html',
    './frontend/**/*.vue',
  ],
  theme: {
    extend: {
      scale: {
        140: '1.40',
      },
      colors: {
        laravel: '#F05340',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
