const defaultTheme = require("tailwindcss/defaultTheme");
const autoprefixer = require("autoprefixer");

module.exports = {
  purge: {
    mode: "all",
    content: ["./*.html"],
  },
  theme: {
    extend: {
      colors: {
        "j-primary": "#4466FF", // brand blue
        "j-secondary": "#4A6FFF", // brand light blue (hover links/buttons)
        "j-gray-200": "#676A7A", // text
        "j-gray-800": "#454752", // hero text
        "j-gray-600": "#444752", // other titles
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      height: {
         '36rem': '36rem', // height for hero section
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen md": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen lg": {
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "960px",
            // width: "960px",
            // padding: "0",
            // margin: "0",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
