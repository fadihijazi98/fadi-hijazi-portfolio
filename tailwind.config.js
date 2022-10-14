/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["PT Sans", ...defaultTheme.fontFamily.sans],
        anton: ["Anton"],
      },
    },
  },
  plugins: [],
};
