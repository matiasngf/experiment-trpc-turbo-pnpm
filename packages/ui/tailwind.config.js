const defaultConfig = require("./config/tailwind.common.config.js");

/**
 * Storybook tailwind config.
 * To modify the exported common configuration, check tailwind.common.config.js
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...defaultConfig,
  content: ["components/**/*.{js,ts,jsx,tsx}"],
};
