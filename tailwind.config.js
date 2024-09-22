/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#B4F461",
        "dark-primary": "#9CD453",
        "backgrond": "#F9F7F3",
        "deep-black": "#111111",
        "dark-gray": "#585858",
        "light-gray": "#A0A0A0",
        "off-white": "#F3F3F3"
      },
      fontFamily: {
        "lexend": "Lexend"
      }
    },
  },
  plugins: [require("daisyui"),],
};
