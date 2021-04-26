module.exports = {
  mode: "jit", // JIT works great now on v2.1.2
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
