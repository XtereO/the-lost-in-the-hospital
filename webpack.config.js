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
      test: /\.(png|webp|jpeg)$/,
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
      "@ui": path.resolve(__dirname, "src/ui"),
      "@core": path.resolve(__dirname, "src/core"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  };

  return {
    modules,
    resolve,
  };
};
