module.exports = {
  plugins: {
    "postcss-design-system": { inputFile: "./theme/index.json" },
    "postcss-css-variables": { preserve: true },
    "postcss-custom-media": {}
  }
};
