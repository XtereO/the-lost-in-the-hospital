const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: ["ts-loader"],
    },
    scss: {
      test: /\.(s(a|c)ss)$/,
      use: [
        "style-loader",
        "css-modules-typescript-loader",
        { loader: "css-loader", options: { modules: true } },
        "sass-loader",
      ],
    },
    file: {
      test: /\.(png|webP|jpeg)$/,
      use: ["file-loader"],
    },
  };
  if (env === "production") {
    modules.scss.use[0] = MiniCssExtractPlugin.loader;
  }
  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  };

  return {
    modules,
    resolve,
  };
};
