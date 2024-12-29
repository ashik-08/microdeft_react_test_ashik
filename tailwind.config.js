/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-600": "#257BEC",
        "primary-700": "#1C64D9",
        dark: "#252525",
      },
    },
  },
  plugins: [],
};
