/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",            // scans your HTML template
    "./src/**/*.{js,jsx,ts,tsx}"      // scans all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
