const path = require('path');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;
const {
  ENABLE_PREPACK = false
} = process.env;
const plugins = !ENABLE_PREPACK ? [] : [
  new PrepackWebpackPlugin({
    test: /\.js/,
  }),
];

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'src')],
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2015', 'stage-0'],
      },
    }],
  },
  plugins,
};
