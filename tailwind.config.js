/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",       // EJS templates
    "./views/**/*.html",      // agar kahin html ho
    "./public/**/*.js",       // front-end JS me classes
    "./src/**/*.{js,ts,jsx,tsx}",
  // sirf views folder ke andar ki files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
