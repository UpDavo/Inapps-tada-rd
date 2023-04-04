/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./*.html",
    "./**/*.js",
    "./*.js",
    "./**/*.ts",
    "./*.ts",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#301455",
          secondary: "#edb100",
          accent: "#28c9c1",
          neutral: "#261B27",
          "base-100": "#202646",
          info: "#8BA1DF",
          success: "#148572",
          warning: "#F79308",
          error: "#E93F6C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
