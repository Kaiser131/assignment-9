/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.3)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.3)',
      },

    },
  },
  plugins: [
    require('daisyui'),

    function ({ addUtilities, theme, e }) {
      const textShadow = theme('textShadow');
      const textShadowUtilities = Object.keys(textShadow).map(key => ({
        [`.${e(`text-shadow-${key}`)}`]: {
          textShadow: textShadow[key],
        },
      }));
      addUtilities(textShadowUtilities, ['responsive', 'hover']);
    },


  ],
}

