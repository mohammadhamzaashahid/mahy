/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme": "#123456",
        "g": "#E2EAEB",
        "light-g": "#FAF6EE"
      },
    },
  },
  plugins: [],
};
