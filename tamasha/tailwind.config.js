/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_bg: "#F9FAFC",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
