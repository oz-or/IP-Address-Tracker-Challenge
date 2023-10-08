/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      1440: "1440px",
      1000: "1000px",
      800: "800px",
      500: "500px",
      375: "375px",
    },
  },
  plugins: [],
};
