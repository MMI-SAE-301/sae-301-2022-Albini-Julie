const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
 colors: {
  "violet_foncé": "#710697",
  "Noir": "#000000",
  "Blanc": "#ffffff"
 },
 fontSize: {
  "base": "1.5625rem",
  "lg": "2.5rem"
 },
 fontFamily: {
  "work-sans": "Work Sans",
  "eb-garamond": "EB Garamond"
 },
 borderRadius: {
  "none": "0",
  "xs": "0.625rem",
  "full": "9999px"
}
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
