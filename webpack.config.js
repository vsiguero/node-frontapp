/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  target: 'node',
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader',
        }
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new webpack.DefinePlugin({
      "global.GENTLY": false
    })
  ],
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'src'),
    filename: '[name].js',
  },
};
