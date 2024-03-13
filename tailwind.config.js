/** @type {import('tailwindcss').Config} */
import * as tailwindBaseUTEG from "./tailwindBase.js";
import * as tailwindBase from "@lottuseducation/tailwind-base/lib/tailwind-base.js";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [tailwindBase.default, tailwindBaseUTEG.default],
  theme: {},
  plugins: [],
};
