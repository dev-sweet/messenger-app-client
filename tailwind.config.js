/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        messenger_theme: {
          primary: "#141b2bd4",
          secondary: "#0a0e1585",
          accent: "#5555559e",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },

      "dark",
      "cupcake",
    ],
  },
};
