/* eslint-env node */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = (env, argv) => {
    let mode = "production";
    if (argv && argv.mode) {
        mode = argv.mode;
    }

    console.log(`Building ${mode}...`);

    return {
        entry: path.resolve(__dirname, "www/index.js"),
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "index.js",
        },
        mode: mode,
        plugins: [
            new CleanWebpackPlugin(),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, "www/index.html"),
                        to: "index.html",
                    },
                    {
                        from: path.resolve(__dirname, "www/swfs.json"),
                        to: "swfs.json",
                    },
                    {
                        from: path.resolve(__dirname, "www/swfs"),
                        to: "swfs/[name].swf",
                    },
                    {
                        from: "LICENSE**",
                    },
                    {
                        from: "README.md",
                    },
                ],
            }),
        ],
    };
};
