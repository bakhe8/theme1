const path = require("path");
module.exports = {
    entry: {
        app: ["./src/assets/styles/app.scss", "./src/assets/js/app.js"]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};