/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // You can customize your color palette here
        secondary: "#facc15",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        "sm-max": { max: "639px" }, // Custom max-width breakpoint for sm
      },
    },
  },
  plugins: [],
};
