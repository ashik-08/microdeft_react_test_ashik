/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "primary-400": "#34B778",
        // "primary-500": "#1BAE6C",
        // "primary-600": "#0F8C56",
        "primary-600": "#257BEC",
        "primary-700": "#1C64D9",
        dark: "#252525",
      },
    },
  },
  plugins: [],
};
