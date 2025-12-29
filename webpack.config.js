import path, { resolve } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { fileURLToPath } from "url";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { connect } from "http2";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  devServer: {
    port: 8080,
    hot: true,
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; connect-src 'self' http://localhost:3333 http://localhost:8080 ws://localhost:8080; img-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; font-src 'self';",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  target: "web",
  mode: "development",
  entry: "/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|gif|jpg)$/i,
        use: ["file-loader"],
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    fallback: {
      vm: false,
      util: "util/",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],
};
