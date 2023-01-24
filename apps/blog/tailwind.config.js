const defaultConfig = require("@experiment/ui/config/tailwind.common.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    ...defaultConfig.theme || {},
    extend: {
      ...defaultConfig.theme?.extend || {},
    },
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    ...defaultConfig.content
  ],
};
