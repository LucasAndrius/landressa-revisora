import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        myPink: "#FFDFDF",
        myWhite: "#F4F6FC",
        myBlue: "#AEDEFC",
        myBlack: "#111111",
        myPinkHover: "#F875AA",
        myBlueHover: "#0174BE",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
