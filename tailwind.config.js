/** @type {import('tailwindcss').Config} */
import colors from './src/styles/colors';
import fontFamily from './src/styles/fonts';

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}
