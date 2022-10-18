/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        marvel: {
          100: "#ffb4b3",
          200: "#ff8180",
          300: "#ff4f4d",
          400: "#e60300",
          500: "#CC0300",
          600: "#b30300",
          700: "#800200",
          800: "#4d0100",
          900: "#1a0000",
        },
      },
      fontFamily: {
        novecento: ["novecento-sans-narrow, sans-serif", "sans-serif"],
        librefranklin: ["libre-franklin, sans-serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
