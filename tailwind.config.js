/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['"Inter"', "sans-serif"],
        InterTight: ['"Inter Tight"', "sans-serif"],
      },
      colors: {
        textLight: "#031521",
        bgLight: "#F1F9FF",
        primaryLight: "#1968B8",
        secondaryLight: "#2FBEDA",
        accentLight: "#02AC3D",
        textDark: "#DEF0FC",
        bgDark: "#081721",
        primaryDark: "#2B8ACA",
        secondaryDark: "#45DAF7",
        accentDark: "#58F3AB",
      },
    },
  },
  plugins: [],
};
