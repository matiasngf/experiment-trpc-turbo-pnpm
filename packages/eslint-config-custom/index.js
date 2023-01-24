module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "turbo",
    "prettier",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "@next/next/no-html-link-for-pages": "off"
  },
};
