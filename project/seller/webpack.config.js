const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
	// 整个项目的入口文件   webpack要处理的文件 
	entry: './src/main.js',
	// 输出的信息
	output: {
		// 输出的目录
		path: path.resolve('dist'),
		// 输出的文件名
		filename: 'bundle.js'
	},
	// 带监视 当入口文件的发生改变  自动输出新的文件
	watch: true,
	// webpack的工作模式  development或production 
	mode: 'development',
	// webpack要处理的静态资源
	devServer:{
		port: 8888,
		hot: true
	},
	module: {

		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.(sass|scss)$/i,
				use: ['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.vue$/i,
				use: ['vue-loader']
			},
			{
				test: /\.(svg|woff2?|eot|ttf)$/i,
				use: {
					loader:'url-loader',
					options:{
						limit:8192
					}
				}
			},
			{
				test:/\.(png|jpe?g|gif)$/i,
				use:{
					loader:'url-loader',
					options:{
						limit:8192
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new VueLoaderPlugin()
	]
}
