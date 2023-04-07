module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: [],
    },
  },
  darkMode: `class`,

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Mono'],
        gloock: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
}
