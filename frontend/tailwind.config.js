/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Open Sans", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      colors: {
        red: "#F02D34",
        "gray-1": "#AAB9A2",
        "gray-2": "#819D7C",
        "gray-light": "#DCDCDC",
        "gray-dark": "#99a1b7",
        black: "#000000",
        dark: "#0F120F",
        white: "#FFFFFF",
        green: "#73c93d",
        "green-dark": "#5D8801",
        "green-main": "#17C653",
        wood: "#5B2C24",
        blue: "#1975D1",
        yellow: "#F6C072",
        orange:{
          primary:"#FCB142"
        }
      },
      fontSize: {
        default: "14px",
        sm: "18px",
        md: "23px",
        lg: "32px",
      },
      height: {
        "header-height": "100px",
      },
      backgroundImage: {
        landing: "url('./src/assets/background1.png')",
        footer: "url('./src/assets/footer.png')",
        auth: "url('./src/assets/AuthBackground.png')",
        contact: "url('./src/assets/contact.png')",
      },
    },
  },
  plugins: [],
};
