module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: () => ({
        'hero-dark': "url('/assets/images/background-dark.jpg')",
        'hero-light': "url('/assets/images/background-light.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
