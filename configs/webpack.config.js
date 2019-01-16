const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DEBUG = process.env.NODE_ENV !== "production";
const PROJECT_ROOT = path.resolve(__dirname, '..');

const config = {
	mode: DEBUG ? 'development' : 'production',
	entry: {
		core: path.resolve(PROJECT_ROOT, 'src/App.js'),
		styles: path.resolve(PROJECT_ROOT, 'src/styles.css'),
	},
	output: {
		path: path.resolve(PROJECT_ROOT, 'build'),
		publicPath: '',
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname)
							},
						},
					},
				],
			},
			{
				test: /\.(woff(2)?|ttf|eot)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/'
					}
				}]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000
						}
					}
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: (file) => file.endsWith('pages/index.html') ? '[name].[ext]' : '[name]/index.[ext]'
						}
					},
					"extract-loader",
					{
						loader: 'html-loader',
						options: {
							minimize: true
						}
					}
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),
		...DEBUG ? [] : [
			// Minimize all JavaScript output of chunks
			// https://github.com/mishoo/UglifyJS2#compressor-options
			new webpack.optimize.UglifyJsPlugin({
				sourceMap: true,
				compress: {
					screw_ie8: true,
					warnings: false,
					unused: true,
					dead_code: true,
				},
				mangle: {
					screw_ie8: true,
				},
				output: {
					comments: false,
					screw_ie8: true,
				},
			}),
		],
		new CopyWebpackPlugin([
			path.resolve(PROJECT_ROOT, 'src/public/')
		]),
	],
	target: 'web',
};


module.exports = config;