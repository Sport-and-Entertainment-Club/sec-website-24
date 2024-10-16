/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "blue-main": "#6D95FC",
        "bg-white": "#F2F1FC",
        "blue-400": "#7CA0FC",
        title: "#1E0F2D",
        "text-light": "#1E0F2DB2",
        text: "#1E0F2D",
        pink: "#C653FB",
        "purple-50": "#CCBAFE",
        "purple-100": "#CCB9FF",
        "purple-200": "#D298ED",
        "turquoise-50": "#96E1F0",
        "blue-300": "#8AAAFD",
        "navbar-white": "#FFFFFFE5",
        purple: "#1E0F2D",
        "blue-ocean": "#0FDAFE",
        "purple-ocean": "#C654FB",
      },
      fontSize: {
        "title-desktop": "56px",
        "title-mobile": "32px",
        "text-desktop": "18px",
        "text-mobile": "12px",
      },
      screens: {
        md2: "840px",
      },
    },
  },
  plugins: [],
};
