const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new HtmlWebpackPlugin({
            filename: "flag.html",
            template: "./src/flag.html"
        }),
        new HtmlWebpackPlugin({
            filename: "notFlag.html",
            template: "./src/notFlag.html"
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/,
            use: [
                "style-loader", //2. Inject styles into DOM
                "css-loader", //1. Turns css into commonjs
            ]
            }
        ]
    }
});


