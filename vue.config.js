const sourceMap = false

module.exports = {
  pages: {
    index: {
      title: 'pdfjs-vue',
      filename: 'index.html',
      entry: './examples/main.js',
      template: './examples/index.html'
    }
  },
  css: {
    sourceMap: sourceMap
  },
  productionSourceMap: sourceMap
}