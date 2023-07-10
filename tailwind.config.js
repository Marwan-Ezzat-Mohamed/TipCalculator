/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
      fontFamily: {
        mono: ["Space Mono"],
      },
      fontSize: {
        input: "24px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^bg-/,
    },
    {
      pattern: /^text-/,
    },
    {
      pattern: /^border-/,
    },
  ],
};
