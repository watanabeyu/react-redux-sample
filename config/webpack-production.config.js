var webpack = require('webpack');

module.exports = {
  entry: "./app.js",
  output: {
    path: "./dist/",
    filename: "build.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        exclude: /styles\/.+/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.css$/,
        include: /styles\/.+/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[local]'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /styles\/.+/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=___[name]__[local]___[hash:base64:5]',
          'postcss',
          'sass'
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings:false
      }
    })
  ]
};