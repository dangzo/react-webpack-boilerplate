const path                = require("path");
const HtmlWebpackPlugin   = require("html-webpack-plugin");
const CopyWebpackPlugin   = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "js/bundle.js"
  },
  devServer: {
    port: 3000,
    contentBase: './',
    hot: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      /*minify   : {
        html5                          : true,
        collapseWhitespace             : true,
        minifyCSS                      : true,
        minifyJS                       : true,
        removeAttributeQuotes          : true,
        removeComments                 : true,
        removeEmptyAttributes          : true,
        removeRedundantAttributes      : true,
        removeScriptTypeAttributes     : true
      }*/
    }),
    new CopyWebpackPlugin([
      { from: './public', to: './' }
    ])
  ]
};