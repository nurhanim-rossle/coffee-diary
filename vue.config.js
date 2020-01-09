module.exports = {
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'addcoffee': {
      entry: './src/pages/AddCoffee/main.js',
      template: 'public/index.html',
      title: 'Add Coffee',
      chunks: [ 'chunk-vendors', 'chunk-common', 'addcoffee' ]
    }
  }
}