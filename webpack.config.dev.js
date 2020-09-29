//Bundling
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  //to show actual code from transpiled code
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
      path.resolve(__dirname, 'src/index')
  ],
  target: 'web',

  //this stores in ram
  //so it does not retain the info for a long time

  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins:[
    //Create HTML file that includes reference to build JS in index.html
      //This is not working
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}