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
        "j-secondary": "#4A6FFF", // brand light blue
        "j-hover": "#4161E3", // button and link hover
        "j-gray-50": "#FAFBFF", // bg in few section
        "j-gray-75": "#F0F1F5", // line in about section
        "j-gray-100": "#F0F1F5", // focus and hover background links in mobile menu
        "j-gray-200": "#676A7A", // text
        "j-gray-800": "#454752", // hero text
        "j-gray-600": "#444752", // other titles
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
      },
      height: {
        "36rem": "36rem", // height for hero section
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwindcss-pixel-dimensions")({
      width: {
        total: 500, // 900 is the default
      },
      height: {
        total: 500, // 900 is the default
      },
    }),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "95%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen md": {
            maxWidth: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen lg": {
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          "@screen xl": {
            maxWidth: "960px",
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
      });
    },
  ],
};
