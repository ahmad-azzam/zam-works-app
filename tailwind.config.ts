import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: "15px" },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1400px",
    },
    fontFamily: {
      poppins: "var(--font-poppins)",
    },
    extend: {
      backgroundImage: {
        hero: "url(/assets/)",
      },
      colors: {
        primary: {
          DEFAULT: "#333",
          "100": "#484848",
          "200": "#151515",
          "300": "#111",
        },
        accent: "#d4000d"
      },
    },
  },
  plugins: [],
};
export default config;
