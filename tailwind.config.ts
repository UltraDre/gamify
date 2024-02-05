import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f4f5fc",
        dark: "#17203f",
        blue: "#5373fe",
        semiDark: "#2c334f",
      },
    },
  },
  plugins: [],
};
export default config;
