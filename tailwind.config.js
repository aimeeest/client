/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': 'DM Sans',
      'serif': 'Old Standard TT',
      'logo': 'Libre Caslon Text'
    },
    screens: {
      // Example custom breakpoints
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}

