const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		port: 8081,
		contentBase: './dist',
		open: true,
		disableHostCheck: true
	},
	devtool: 'source-map',
	module: {
		rules: [{
				test: /\.(sa|sc|c)ss$/,
				use: [{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader?url=false',
					'sass-loader'
				]
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
		]
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false
		}),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			minify: {
				collapseWhitespace: false
			}
		}),
		new CopyWebpackPlugin({
			patterns: [{
				from: 'static',
				to: './'
			}]
		}),
		new ESLintPlugin()
	],
	target: 'web',
	stats: {
		preset: 'errors-warnings',
		warnings: true,
		errorsCount: true,
		warningsCount: true,
		colors: true
	}
};