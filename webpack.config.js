const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: "./src/index.tsx",
	target: "web",
	mode: "development",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader",
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader",
			},
			{
				test: /\.css$/,
				loader: "css-loader",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Development",
			template: path.resolve(
				__dirname,
				"public",
				"index.html"
			),
		}),
		new MiniCssExtractPlugin({
			filename: "./public/styles.css",
		}),
	],
};
