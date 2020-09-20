//Bundling
import path from 'path';

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
  plugins:[],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}