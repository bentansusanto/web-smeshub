import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/preline/preline.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        infinite_scroll_right: {
          "0%": {transform: "translate(calc(-30% + 0.5rem))"}
        },
        infinite_scroll_left: {
          "100%": {transform: "translate(calc(-30% + 0.5rem))"}
        }
      },
      animation: {
        infinite_scroll_right: "infinite_scroll_right 15s linear infinite",
        infinite_scroll_left: "infinite_scroll_left 15s linear infinite",
    },
    },
  },
  plugins: [require('preline/plugin')],
};
export default config;
