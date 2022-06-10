/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  plugins: [],
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
    // Fix the viewport height issue on mobile browsers
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
  },
};
