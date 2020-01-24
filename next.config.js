const withCSS = require("@zeit/next-css");
require("dotenv").config();

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: "linaria/loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production"
          }
        }
      ]
    });

    return config;
  },
  env: {
    SHOP_ID: process.env.SHOP_ID,
    API_TOKEN: process.env.API_TOKEN
  }
});
