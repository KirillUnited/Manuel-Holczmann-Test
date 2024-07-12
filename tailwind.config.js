const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk}"],
  theme: {
    container: {
      center: true,
      padding: '24px'
    },
    fontFamily: {
      primary: ['Roboto Slab', ...fontFamily.sans],
      secondary: ['Roboto', ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        background: 'hsla(var(--background), 30%)',
        foreground: 'var(--foreground)'
      },
    },
  },
  plugins: [],
}

