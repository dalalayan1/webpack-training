const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template : 'index.html',
  filename : 'index.html',
  inject : 'body'
});
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let UglifyJSPluginConfig = new webpack.optimize.UglifyJsPlugin({
                                                                sourceMap: true,
                                                                compress: true
                                                            });

module.exports = {
    //multiple entry points with multiple names
    entry: {
        app: ['./app.js','./index.js'], //app-specific files
        vendors: './vendors.js' //3rd party vendor files
    },
    //multiple bundles with dynamic name-injection
    output: {
        filename: '[chunkhash]-[name]-bundle.js', //code-splitting done with chunkhash(hashing)
        path: path.resolve(__dirname,'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
		HtmlWebpackPluginConfig,
        UglifyJSPluginConfig
	]
}