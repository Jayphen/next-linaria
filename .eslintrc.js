module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["react-app", "eslint:recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "react/react-in-jsx-scope": 0
  }
};
