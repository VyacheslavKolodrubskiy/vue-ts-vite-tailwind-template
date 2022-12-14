/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px',
        lg: '992px',
        md: '768px',
        sm: '576px',
        xs: '475px',
      },
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
      xs: { max: '475px' },
    },
  },
  plugins: [],
}
