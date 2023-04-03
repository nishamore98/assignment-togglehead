/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
