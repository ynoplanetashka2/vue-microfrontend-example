// @ts-check
const { resolve } = require('node:path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: {
    FancyButton: resolve(__dirname, './src/FancyButton.vue'),
  },
  output: {
    path: resolve(__dirname, './out'),
    filename: '[name].mjs',
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true,
  }
}
