module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: () => ({
        'black-image': '#141414',
        'white-image': '#d4d4d4',
      }),
      backgroundImage: () => ({
        'hero-dark': "url('/assets/images/background-dark.jpg')",
        'hero-light': "url('/assets/images/background-light.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
};
