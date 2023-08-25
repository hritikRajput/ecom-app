/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#de2454",
        secondary: "#573ba3",
        "seconday-dark": "#2b0f42",
        "gray-lighter": "#cecdd1",
        "color-callout": "#f6f5f7",
        "color-border": "#e1e1e3",
        "color-dark-text": "#2c293b",
      },
      fontFamily: {
        baskerville: ["Libre Baskerville", "serif"],
      },
      gridTemplateColumns: {
        "layout-cart": "2fr 8fr 2fr 2fr 1fr",
      },
      gridTemplateRows: {
        "layout-5": "auto auto auto 1fr auto",
      },
      boxShadow: {
        "product-image": "0px 6px 12px rgba(0, 0, 0, 0.3)",
      },
    },
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    plugins: [],
  },
};
