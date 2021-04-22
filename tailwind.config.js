module.exports = {
  mode: "jit", // When jit mode is on, the responsive breakpoints not workiing
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
