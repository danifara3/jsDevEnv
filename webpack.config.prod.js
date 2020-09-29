//Bundling
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  //to show actual code from transpiled code
  //this changed to source map for better experience
  devtool: 'source-map',
  noInfo: false,
  entry: [
      path.resolve(__dirname, 'src/index')
  ],
  target: 'web',

  //this stores in ram
  //so it does not retain the info for a long time
  //this changed
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    //Create HTML file that includes reference to build JS in index.html
    //This is not working
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),


    //Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin(),

    //Minifiy js help reduce size of code
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}