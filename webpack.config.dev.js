var path = require('path');
var webpack = require('webpack');

module.exports = {  
  devtool: 'inline-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/client/entry',
  ],
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'app.js',
    publicPath: 'http://localhost:8080/js/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel', //loaders: ['babel'], // 'babel-loader' is also a legal name to reference 
        query: {
          presets: ['react', 'es2015']
        }
      }, 
      /*
      { 
        test: /\.jsx?$/, 
        loaders: ['react-hot', 'babel-loader?experimental'], 
        exclude: /node_modules/ 
      }*/
    ]
  }
}