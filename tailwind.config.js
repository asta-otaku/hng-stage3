/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bgColorOne: "#A02279",
      },
      fontFamily: {
        "main-font": ["Red Rose", "cursive"],
      },
    },
  },
  plugins: [],
};
