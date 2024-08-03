/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        md: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        lg: '3px 3px 6px rgba(0, 0, 0, 0.25)',
        xl: '4px 4px 8px rgba(0, 0, 0, 0.25)',
      },
      fontFamily:{
        Pacifico: ["Pacifico", "cursive"],
        Outfit: ["Outfit", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 1px 4px -2px black',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea22)',
        'custom-gradient2': 'linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%)',
      },
      height: {
        '90vh': '90vh',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.25)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}