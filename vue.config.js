const sourceMap = false

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pages: {
    index: {
      title: 'mdvui',
      filename: 'index.html',
      entry: './examples/main.ts',
      template: './examples/index.html'
    }
  },
  css: {
    sourceMap: sourceMap
  },
  productionSourceMap: sourceMap
}
