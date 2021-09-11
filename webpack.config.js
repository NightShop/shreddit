const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: [
        "react-hot-loader/patch",
        "./src/index.js"
    ],
    devServer: {
        static: "./dist",
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Shredditt",
            template: "src/index.html"
        }),
        "react-hot-loader/babel",
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loaders: ["react-hot-loader/webpack", "babel-loader"],
                    options: {
                        presets: [
                            ["@babel/preset-react", {
                                "runtime": "automatic"
                            }],
                            '@babel/preset-env',
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    optimization: {
        runttimeChunk: "single"
    }
};