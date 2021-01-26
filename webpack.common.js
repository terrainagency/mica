const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/app.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/layout/theme.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            // {
            //     test: /\.(svg|png|jpg|gif)$/,
            //     use: {
            //       loader: "file-loader",
            //       options: {
            //         name: "[name].[contenthash].[ext]",
            //         outputPath: "assets"
            //       }
            //     }
            // }
        ]
    }
}