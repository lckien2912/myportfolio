/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      "hello-pattern": "url('/src/assets/15186165_5566879.jpg')",
      "experience-pattern": "url('/src/assets/19380875_6068268.jpg')",
      "contact-pattern": "url('/src/assets/14456042_5397807.jpg')",
    },
    fontFamily: {
      quicksand: ['"Quicksand"', "sans-serif"],
      pacifico: ['"Pacifico"', "cursive"],
      rem: ['"REM"', "sans-serif"],
    },
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
        "gray-text": "#B0B0B0",
      },
    },
  },
  plugins: [],
};
