/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
    extend: {
      colors: {
        softBlue: "#1D2744",
        azure: "#057AFF",
        "primary-color-b": "#0A0F28",
        "secondary-color-b": "#141A32",
        "primary-color-t": "#FFFFFF",
        "secondary-color-t": "#F9F9F9",
      },
      lineClamp: {
        10: "10",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
