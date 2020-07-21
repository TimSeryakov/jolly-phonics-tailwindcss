const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    mode: "all",
    content: ["./*.html"],
  },
  theme: {
    colors: {
      primary: "#4466FF",
    },
    extend: {
      fontFamily: {
        sans: ["Quicksand", ...defaultTheme.fontFamily.sans],
        "open-sans": ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
