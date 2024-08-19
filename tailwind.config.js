/** @type {import('tailwindcss').Config} */
import { default as scrollBar } from "tailwind-scrollbar";
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "dots-blinking": "dots-blinking 1.5s infinite",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"], // Thay đổi font chính của sans
      },
      keyframes: {
        "dots-blinking": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [scrollBar],
};
