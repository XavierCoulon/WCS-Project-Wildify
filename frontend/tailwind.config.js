/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayCustom: "#1D2123",
        gray: {
          DEFAULT: "#33373B",
        },

      },
    },
  },
  plugins: [],
};
