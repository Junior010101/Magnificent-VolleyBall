/** @type {import('tailwindcss').Config} */
import { cores } from './src/styles/colors.ts';
import { fontFamily } from './src/styles/fonts';

module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: cores,
      fontFamily: fontFamily
    },
  },
  plugins: [],
}
