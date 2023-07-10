/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",

      xs: "320px",
      "2xs": "375px",
      sm: "576px",
      md: "768px",
    },
    extend: {
      colors: {
        primary: "hsl(172, 67%, 45%)",
        "neutral-900": "hsl(183, 100%, 15%)",
        "neutral-600": "hsl(186, 14%, 43%)",
        "neutral-400": "hsl(184, 14%, 56%)",
        "neutral-200": "hsl(185, 41%, 84%)",
        "neutral-100": "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)",
      },
      minHeight: {
        desktop: "calc(100vh - 9rem)",
      },
      maxWidth: {
        desktop: "57.5rem",
      },

      fontFamily: {
        mono: ["Space Mono"],
      },
      fontSize: {
        input: "24px",
      },
      ringWidth: ["hover", "active"],
    },
  },
  plugins: [],
};
