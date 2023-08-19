/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#573ba3",
        "seconday-dark": "#2b0f42",
        "gray-lighter": "#cecdd1",
      },
      fontFamily: {
        baskerville: ["Libre Baskerville", "serif"],
      },
      gridTemplateRows: {
        "layout-5": "auto auto auto 1fr auto",
      },
      boxShadow: {
        "product-image": "0px 6px 12px rgba(0, 0, 0, 0.3)",
      },
    },
    plugins: [],
  },
};
