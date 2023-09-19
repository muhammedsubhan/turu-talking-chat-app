/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
      xs: { max: "475px" },
    },
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        lightgray: "#F5F7FB",
        gray: "#E6EBF5",
        purple: "#7269EF",
        lightpurple: "#F1F0FD",
        textcolor: "#74788D",
        darktext: "#A0A9B6",
        darksidebar: "#36404A",
        darkhover: "#3C445A",
        darkprofile: "#303841",
      },
    },
  },
  plugins: [],
};
