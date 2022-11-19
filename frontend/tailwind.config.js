/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        blackCustom: "#1d2123",
        grayCustom: "#262a2d",
        yellowCustom: "#facd66",
        gray: {
          DEFAULT: "#33373B",
        },
      },
    },
  },
  plugins: [],
};
