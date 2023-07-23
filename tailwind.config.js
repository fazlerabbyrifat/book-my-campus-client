/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#35c0fc",

          secondary: "#d8b32b",

          accent: "#e575df",

          neutral: "#18151e",

          "base-100": "#3a435a",

          info: "#9ecbe0",

          success: "#198f6a",

          warning: "#f4b562",

          error: "#e88378",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
