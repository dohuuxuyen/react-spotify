module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        ease: "cubic-bezier(0.25, 0.1, 0.25, 0.1) ",
      },
    },
  },
  plugins: [],
};
