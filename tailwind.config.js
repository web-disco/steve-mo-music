module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "1200px",
        md: "1200px",
        lg: "1200px",
        xl: "1200px",
      },
    },
    fontFamily: {
      display: ["Poppins", "system-ui"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        bodyText: "#3D3D3D",
        lightGrey: "#ECECEC",
        darkGrey: "#8E8E8E",
        blackAlt: "#262626",
      },
      height: {
        menuBar: "2px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
