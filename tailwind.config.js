module.exports = {
  mode: "jit",
  purge: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`,
    `nuxt.config.{js,ts}`,
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        corinthia: ["Corinthia", "cursive"],
        roberto: ["Roboto Mono", "monospace"],
      },
      colors: {
        "dark-main": "var(--dark-main)",
        "dark-second": "var(--dark-second)",
        "dark-third": "var(--dark-third)",
        "dark-txt": "(var(--dark-text))",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      transform: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
