const path = require("path")

module.exports = {
    mode: "development",
    output: {
        filename: "./src/app.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: ['style-loader', 'postcss-loader'],
            // },
            {
                // Output all images into dist/assets
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets"
                    }
                }
            }
        ]
    }
}