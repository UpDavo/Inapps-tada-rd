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
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
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
