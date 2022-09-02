const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      include: /src/,
      use: ["ts-loader"],
    },
    scss: {
      test: /\.(s(a|c)ss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
  };
  if (env === "production") {
    modules.scss.use[0] = MiniCssExtractPlugin.loader;
  }
  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  };

  return {
    modules,
    resolve,
  };
};
